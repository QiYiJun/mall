<template>
  <div class="cart-list">
    <better-scroll class="bscroll"
                   ref="bscroll">
      <cart-goods-item v-for="(item, index) in list"
                       :key="index"
                       :item="item" />
    </better-scroll>
  </div>
</template>

<script>
import BetterScroll from 'components/common/betterScroll/BetterScroll'
import CartGoodsItem from './CartGoodsItem'
import { mapGetters } from 'vuex'

export default {
  name: 'CartList',
  components: {
    BetterScroll,
    CartGoodsItem
  },
  computed: {
    ...mapGetters({
      list: 'cartList'
    })
  },
  activated() {
    this.$refs.bscroll.refresh()
  }
}
</script>

<style scoped>
.cart-list {
  height: 100%;
}

.bscroll {
  position: absolute;
  top: 44px;
  bottom: 89px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>