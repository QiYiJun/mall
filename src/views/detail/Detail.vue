<template>
  <div id="detail"
       :key="iid">
    <detail-nav-bar ref="detailNavBar"
                    @titleClick="titleClick" />
    <better-scroll class="bscroll"
                   ref="bscroll"
                   :probe-type="3"
                   @scroll="detailScroll">
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo"
                         @detailImgLoad="detailImgLoad" />
      <detail-param-info ref="params"
                         :param-info="paramInfo" />
      <detail-comment-info ref="comment"
                           :comment-info="commentInfo" />
      <goods-list ref="recommends"
                  :goods="recommends"
                  class="recommends" />
    </better-scroll>
    <back-top @click.native="backTopClick"
              v-show="backTop"></back-top>
    <detail-bottom-bar @addToCart="addToCart" />
  </div>
</template>

<script>
// 公共组件
import BetterScroll from 'components/common/betterScroll/BetterScroll'
import GoodsList from 'components/content/goods/GoodsList'

// 子组件
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBottomBar from './childComps/DetailBottomBar'

// 函数/mixin
import { getDetail, Goods, Shop, GoodsParam, getRecommendInfo } from 'network/detail'
import { itemListenerMixin, backTopMixin } from 'common/mixin'
import { debounce } from 'common/utils'

export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    BetterScroll,
    DetailBottomBar
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themesY: [],
      getThemesY: null
    }
  },
  mixins: [itemListenerMixin, backTopMixin],
  created() {
    this.iid = this.$route.params.id
    getDetail(this.iid)
      .then(res => {
        const data = res.result

        this.topImages = data.itemInfo.topImages

        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

        this.shop = new Shop(data.shopInfo)

        this.detailInfo = data.detailInfo

        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0]
        }
      })
      .catch(err => {
        console.log(err);
      })

    getRecommendInfo()
      .then(res => {
        let data = res.data
        // console.log(data)
        this.recommends = data.list
      })
      .catch(err => {
        console.log(err);
      })

    this.getThemesY = debounce(() => {
      this.themesY =  []
      this.themesY.push(0)
      this.themesY.push(this.$refs.params.$el.offsetTop)
      this.themesY.push(this.$refs.comment.$el.offsetTop)
      this.themesY.push(this.$refs.recommends.$el.offsetTop)
      // console.log(this.themesY)
    }, 500)
  },
  methods: {
    detailImgLoad() {
      this.$refs.bscroll.refresh()
      this.getThemesY()
    },
    titleClick(index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.$refs.bscroll.scrollTo(0, -this.themesY[index], 500)
          break;
        case 1:
          this.$refs.bscroll.scrollTo(0, -this.themesY[index], 500)
          break;
        case 2:
          this.$refs.bscroll.scrollTo(0, -this.themesY[index], 500)
          break;
        case 3:
          this.$refs.bscroll.scrollTo(0, -this.themesY[index], 500)
          break;
      }
    },
    detailScroll(position) {
      // console.log(-position.y);
      this.isShowBackTop(position)

      if (-position.y < this.themesY[1]) {
        this.setCurrentIndex(0)
      } else if (-position.y < this.themesY[2]) {
        this.setCurrentIndex(1)
      } else if (-position.y < this.themesY[3]) {
        this.setCurrentIndex(2)
      } else {
        this.setCurrentIndex(3)
      }
    },
    setCurrentIndex(index) {
      if (this.$refs.detailNavBar._data.currentIndex !== index) {
        this.$refs.detailNavBar._data.currentIndex = index
      }
    },
    addToCart() {
      const product = {}
      product.iid = this.iid
      product.img = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice

      this.$store.dispatch('addToCart', product).then(res => {
        this.$toast.show(res)
      })
    }
  },
  destroyed() {
    this.$bus.$off('itemImgLoad', this.itemImgListener)
  },
}
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 12;
  background-color: #fff;
  height: 100vh;
}

.bscroll {
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
}

.recommends {
  padding-top: 5px;
}
</style>