<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <img class="icon service"
             src="~assets/img/tabbar/customer-service.svg" />
        <span class="text">客服</span>
      </div>
      <div>
        <img class="icon shop"
             src="~assets/img/tabbar/shop.svg" />
        <span class="text">店铺</span>
      </div>
      <div @click="collectClick">
        <img v-if="!isActive"
             class="icon collect"
             src="~assets/img/tabbar/collect.svg" />
        <img v-else
             class="icon collect"
             src="~assets/img/tabbar/active-collect.svg" />
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart"
           @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DetailBottomBar',
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    collectClick() {
      return this.isActive = !this.isActive
    },
    addToCart() {
      this.$emit('addToCart');
    }
  },
}
</script>

<style scoped>
.bottom-bar {
  height: 49px;
  background-color: var(--color-background);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0px;
  box-shadow: 0px -1px 3px rgba(100, 100, 100, 0.3);
  display: flex;
  text-align: center;
}

.bar-item {
  flex: 1;
  display: flex;
}

.bar-item>div {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bar-left text {
  font-size: 13px;
}

.bar-left img {
  display: block;
  width: 23px;
  height: 23px;
  margin-top: 5px;
}

.bar-right {
  font-size: 15px;
  color: #ffffff;
  line-height: 49px;
  display: flex;
}

.bar-right .cart {
  background-color: #ffe817;
  color: #333333;
}

.bar-right .buy{
  background-color: var(--color-tint);
}
</style>