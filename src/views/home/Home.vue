<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <better-scroll class="bscroll"
                   ref="bscroll"
                   :probe-type="3"
                   @scroll="showBackTop"
                   :pull-up-load="true"
                   @pullingUp="loadMoreGoods">
      <home-swiper :banners="banners"
                   class="home-swiper" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-contrl class="tab-contrl"
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
      backTop: false
    }
  },
  created() {
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted() {
    this.$bus.$on('itemImgLoad', () => {
      this.debounce(this.$refs.bscroll.refresh, 1000)
      console.log(this.$refs.bscroll);
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
      // if(index == 0) {
      //   this.goodsType = 'pop'
      // } else if(index == 1) {
      //   this.goodsType = 'new'
      // } else if(index == 2) {
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
    },
    backTopClick() {
      this.$refs.bscroll.backTop()
    },
    showBackTop(position) {
      // console.log(position)
      this.backTop = position.y <= -1000
    },
    loadMoreGoods() {
      this.getHomeGoods(this.goodsType)
      this.$refs.bscroll.finishPullUp()
    },
    debounce(func, delay) { // 防抖
      let timer = null
      return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
          func.apply(this, args)
        }, delay)
      }
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
  padding-top: 44px;
  height: 100vh;
}

.home-nav {
  background-color: var(--color-tint);
  color: white;
  text-shadow: 1px 1px 2px white;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 10;
}

.tab-contrl {
  /* 已失效 */
  /* position: sticky; */
  top: 44px;
  background-color: white;
  z-index: 9;
}

.bscroll {
  height: calc(100% - 49px);
  /* width: 50px; */
  overflow: hidden;
}

/* 绝对定位 */
/* .bscroll {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0px;
  right: 0px;
} */
</style>