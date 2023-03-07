<template>
  <div>
    <profile-list-item class="list-item">
      <img src="~assets/img/common/msg.svg"
           alt=""
           slot="img">
      <div slot="text"
           class="text">我的消息</div>
    </profile-list-item>
    <profile-list-item class="list-item">
      <img src="~assets/img/common/points-mall.svg"
           alt=""
           slot="img">
      <div slot="text"
           class="text">积分商城</div>
    </profile-list-item>
    <profile-list-item class="list-item">
      <img src="~assets/img/common/vip-card.svg"
           alt=""
           slot="img">
      <div slot="text"
           class="text">会员卡</div>
    </profile-list-item>
    <span class="list-span"></span>
    <profile-list-item class="list-item"
                       @click.native="toShopcart">
      <img src="~assets/img/tabbar/shopcart-active.svg"
           alt=""
           slot="img">
      <div slot="text"
           class="text">我的购物车</div>
    </profile-list-item>
    <profile-list-item class="list-item">
      <img src="~assets/img/common/shop-bag.svg"
           alt=""
           slot="img">
      <div slot="text"
           class="text">下载购物APP</div>
    </profile-list-item>
  </div>
</template>

<script>
import ProfileListItem from './ProfileListItem'

export default {
  name: 'ProfileList',
  components: {
    ProfileListItem
  },
  methods: {
    toShopcart() {
      this.$router.push('/shopcart')
    }
  },
}
</script>

<style scoped>
img {
  width: 20px;
  margin: 10px 5px 10px 15px;
  vertical-align: middle;
}

.text {
  display: flex;
  line-height: 40px;
  height: 40px;
  width: 100%;
  border-bottom: 2px solid rgb(241, 241, 241);
}

.list-span {
  display: block;
  width: 100%;
  border-top: 15px solid rgb(241, 241, 241);
}
</style>