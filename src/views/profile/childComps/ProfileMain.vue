<template>
  <div class="profile-main">
    <div class="top">
      <div class="left">
        <img src="~assets/img/common/user-icon.svg"
             alt="">
      </div>
      <div class="center">
        <div class="center-top">登录/注册</div>
        <div class="center-bottom">
          <img src="~assets/img/common/phone.svg"
               alt="">
          <div>暂无绑定手机号</div>
        </div>
      </div>
      <div class="right">
        <img src="~assets/img/common/to-login.svg"
             alt="">
      </div>
    </div>
    <div class="bottom">
      <div class="bottom-item">
        <div class="info">
          <div class="num">0.00</div>
          <div class="text">元</div>
        </div>
        <div>我的余额</div>
      </div>
      <div class="bottom-item item-center">
        <div class="info">
          <div class="num">0</div>
          <div class="text">个</div>
        </div>
        <div>我的优惠</div>
      </div>
      <div class="bottom-item">
        <div class="info">
          <div class="num">0</div>
          <div class="text">分</div>
        </div>
        <div>我的积分</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileMain'
}
</script>

<style scoped>
img {
  vertical-align: middle;
}

.profile-main {
  display: flex;
  flex-flow: column;
  border-bottom: 15px solid rgb(241, 241, 241);
}

.top {
  display: flex;
  align-items: center;
  padding: 20px 20px 10px;
  background-color: var(--color-tint);
}

.left {
  margin-right: 20px;
  background-color: white;
  border-radius: 50%;
}

.left img{
  width: 70px;
}

.center {
  color: white;
  display: flex;
  flex-flow: column;
}

.center-top {
  padding: 3px 0px;
  padding-left: 4px;
}

.center-bottom {
  padding: 3px 0px;
  display: flex;
  line-height: 20px;
}

.center-bottom img {
  width: 20px;
}

.right {
  position: absolute;
  right: 20px;
}

.right img {
  width: 20px;
}

.bottom {
  display: flex;
}

.bottom-item {
  flex: 1;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding-bottom: 15px;
}

.info {
  display: flex;
  padding: 20px 0px 7px;
}

.num {
  color: orangered;
  font-size: 24px;
}

.text {
  display: flex;
  align-items: flex-end;
}

.item-center {
  border-left: 2px solid rgb(241, 241, 241);
  border-right: 2px solid rgb(241, 241, 241);
}
</style>