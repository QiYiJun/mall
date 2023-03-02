<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-contrl class="tab-contrl"
                ref="tabContrlTop"
                :titles="['流行', '新款', '精选']"
                @tabClick="tabClick"
                v-show="isShowTab" />
    <better-scroll class="bscroll"
                   ref="bscroll"
                   :probe-type="3"
                   @scroll="cententScroll"
                   :pull-up-load="true"
                   @pullingUp="loadMoreGoods">
      <home-swiper :banners="banners"
                   class="home-swiper"
                   @swiperImgLoad="swiperImgLoad" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-contrl ref="tabContrl"
                  :titles="['流行', '新款', '精选']"
                  @tabClick="tabClick" />
      <goods-list class="goods-list"
                  :goods="showGoods" />
    </better-scroll>
    <back-top @click.native="backTopClick"
              v-show="backTop"></back-top>
  </div>
</template>

<script>
// 公用组件
import NavBar from 'components/common/navBar/NavBar'
import TabContrl from 'components/content/tabContrl/TabContrl'
import GoodsList from 'components/content/goods/GoodsList'
import BetterScroll from 'components/common/betterScroll/BetterScroll'
import BackTop from 'components/content/backTop/BackTop'
// 子组件
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'
// 函数
import {
  getHomeMultidata,
  getHomeGoods
} from 'network/home'
import { debounce } from 'common/utils'

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabContrl,
    GoodsList,
    BetterScroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: {page: 0, list: []},
        new: {page: 0, list: []},
        sell: {page: 0, list: []}
      },
      goodsType: 'pop',
      backTop: false,
      tabOffsetTop: 0,
      isShowTab: false,
      scrollY: 0
    }
  },
  created() {
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  // 记录离开时scrollY的位置, 兼容旧版本scrollY
  activated() {
    this.$refs.bscroll.refresh()
    this.$refs.bscroll.scrollTo(0, this.scrollY, 0)
    this.$refs.bscroll.refresh()
  },
  deactivated() {
    this.scrollY = this.$refs.bscroll.getScrollY()
    // console.log(this.scrollY);
  },
  mounted() {
    this.$bus.$on('itemImgLoad', () => {
      this.debounce(this.$refs.bscroll.refresh, 1000)
    })
  },
  computed: {
    showGoods() {
      return this.goods[this.goodsType].list
    }
  },
  methods: {
    // 事件监听
    tabClick(index) {
      // if (index == 0) {
      //   this.goodsType = 'pop'
      // } else if (index == 1) {
      //   this.goodsType = 'new'
      // } else if (index == 2) {
      //   this.goodsType = 'sell'
      // }
      switch (index) {
        case 0:
          this.goodsType = 'pop'
          break
        case 1:
          this.goodsType = 'new'
          break
        case 2:
          this.goodsType = 'sell'
          break
      }
      this.$refs.tabContrl.currentIndex = index
      this.$refs.tabContrlTop.currentIndex = index
    },
    backTopClick() {
      this.$refs.bscroll.scrollTo(0, 0, 500)
    },
    cententScroll(position) {
      // console.log(position)
      // 回到顶部按钮
      this.backTop = (-position.y) >= 1000

      // tabControl显示
      this.isShowTab = (-position.y) >= this.tabOffsetTop
    },
    loadMoreGoods() {
      this.getHomeGoods(this.goodsType)
      this.$refs.bscroll.finishPullUp()
    },
    debounce(func, delay) { // 防抖
      debounce(func, delay)
    },
    swiperImgLoad() {
      this.tabOffsetTop = this.$refs.tabContrl.$el.offsetTop
    },
    // 网络请求相关
    getHomeMultidata() {
      getHomeMultidata()
      .then(res => {
        // console.log(res);
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
      .catch(err => {
        console.log(err);
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page)
        .then(res => {
          // console.log(res);
          this.goods[type].page++
          // for循环也可以  ...更方便
          this.goods[type].list.push(...res.data.list)
        })
        .catch(err => {
          console.log(err);
        })
    }
  }
}
</script>

<style scoped>
#home{
  height: 100vh;
}

.home-nav {
  background-color: var(--color-tint);
  color: white;
  text-shadow: 1px 1px 2px white;
}

/* 已失效 */
/* .tab-contrl {
  position: sticky;
  top: 44px;
  background-color: white;
  z-index: 9;
} */

.tab-contrl {
  position: relative;
  z-index: 9;
  background-color: white;
}

/* 绝对定位 */
.bscroll {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0px;
  right: 0px;
}
</style>