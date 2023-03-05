<template>
  <div id="shop-cart">
    <nav-bar class="shop-cart-nav">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <cart-list />
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
// 公共组件
import NavBar from 'components/common/navBar/NavBar'

// 子组件
import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'

// 函数/mixin/vuex
import { mapGetters } from 'vuex'

export default {
  name: 'ShopCart',
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
    ...mapGetters({
      length: 'cartLength'
    })
  }
}
</script>

<style scoped>
.shop-cart {
  height: 100vh;
}

.shop-cart-nav {
  background-color: var(--color-tint);
  color: white;
  text-shadow: 1px 1px 2px white;
}
</style>