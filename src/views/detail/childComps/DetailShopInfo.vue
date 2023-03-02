<template>
  <div class="shop">
    <header>
      <img :src="shop.logo"
           alt="" />
      <span>{{ shop.name }}</span>
    </header>
    <main>
      <div class="left">
        <div class="sell">
          <div>
            {{ addUnit(shop.sells) }}
          </div>
          <div>总销量</div>
        </div>
        <div class="total">
          <div>{{ addUnit(shop.goodsCount) }}</div>
          <div>全部宝贝</div>
        </div>
      </div>
      <div class="right">
        <ul>
          <li v-for="(item, index) in shop.scroe"
              :key="index">
            <span>{{ item.name }}</span>
            <span :style="{ color: item.isBetter ? 'red' : 'lightgreen' }">
              {{ item.score }}
            </span>
            <span :style="{ backgroundColor: item.isBetter ? 'red' : 'lightgreen' }">
              {{ item.isBetter ? '高' : '低' }}
            </span>
          </li>
        </ul>
      </div>
    </main>
    <footer>
      <div>进店逛逛</div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shop: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    addUnit(num) {
      if (num < 10000) {
        return num
      } else {
        return (num / 10000).toFixed(1) + '万'
      }
    }
  },
}
</script>

<style scoped>
.shop header {
  padding: 20px 10px;
}

.shop header img {
  height: 50px;
  vertical-align: middle;
  border-radius: 50%;
  box-shadow: 0px 0px 5px rgb(180, 180, 180);
}

.shop header span {
  font-size: 20px;
  color: black;
  margin-left: 10px;
}

.shop main {
  font-size: 17px;
  display: flex;
}

.shop main .left {
  flex: 1;
  display: flex;
}

.shop main .left > div {
  flex: 1;
  text-align: center;
}

.shop main .left > div > div {
  height: 30px;
  line-height: 40px;
}

.shop main .right {
  flex: 1;
  position: relative;
}

.shop main .right:before {
  content: '';
  display: block;
  height: 50px;
  width: 1px;
  background-color: black;
  position: absolute;
  top: 15px;
}

.shop main .right ul {
  padding: 0 10px 0 20px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.shop main .right ul li {
  display: flex;
}

.shop main .right ul li span:nth-child(1) {
  flex: 3;
}

.shop main .right ul li span:nth-child(2) {
  flex: 2;
}

.shop main .right ul li span:nth-child(3) {
  flex: 1;
  color: #fff;
  text-align: center;
  padding: 2px 0;
}

.shop footer {
  display: flex;
  justify-content: center;
  border-bottom: 5px solid rgb(241, 241, 241);
}

.shop footer div {
  font-size: 18px;
  color: black;
  background-color: #f1f5fb;
  width: 180px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border-radius: 5px;
  margin: 20px 0;
}
</style>