<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon"
             src="~assets/img/tabbar/home.svg"
             alt="">
        <img slot="item-icon-active"
             src="~assets/img/tabbar/home-active.svg"
             alt="">
        <div slot="item-title">首页</div>
      </tab-bar-item>

      <tab-bar-item path="/category">
        <img slot="item-icon"
             src="~assets/img/tabbar/category.svg"
             alt="">
        <img slot="item-icon-active"
             src="~assets/img/tabbar/category-active.svg"
             alt="">
        <div slot="item-title">分类</div>
      </tab-bar-item>

      <tab-bar-item path="/shopcart">
        <img slot="item-icon"
             src="~assets/img/tabbar/shopcart.svg"
             alt="">
        <img slot="item-icon-active"
             src="~assets/img/tabbar/shopcart-active.svg"
             alt="">
        <div slot="item-title">购物车</div>
      </tab-bar-item>

      <tab-bar-item path="/profile">
        <img slot="item-icon"
             src="~assets/img/tabbar/profile.svg"
             alt="">
        <img slot="item-icon-active"
             src="~assets/img/tabbar/profile-active.svg"
             alt="">
        <div slot="item-title">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/common/tabBar/TabBar'
import TabBarItem from 'components/common/tabBar/TabBarItem'

export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>