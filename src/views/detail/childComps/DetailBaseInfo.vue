<template>
  <div v-if="Object.keys(goods).length !== 0"
       class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount"
            class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.columns[goods.columns.length-1]}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item"
            v-for="(service, index) in goods.services"
            :key="index">
        <img :src="service.icon"
             alt="">
        <span>{{service.name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.base-info {
  padding: 10px;
  border-bottom: 5px solid rgb(241, 241, 241);
}

.info-title {
  padding: 5px 0px 10px 0px;
  font-size: 17px;
  color: rgb(41, 41, 41);
}

.info-price {
  padding: 0px 5px 17px 5px;
}

.n-price {
  font-size: 24px;
  /* letter-spacing: 1px; */
  color: var(--color-high-text);
}

.o-price {
  margin-top: 0px;
  padding: 0px 5px;
  font-size: 10px;
  color: rgb(160, 160, 160);
  text-decoration: line-through;
}

.discount {
  padding: 3px 5px;
  border-radius: 7px;
  color: white;
  background-color: var(--color-tint);
  font-size: 12px;
  position: relative;
  bottom: 8px;
}

.info-other {
  padding-bottom: 5px;
  border-bottom: 5px solid rgb(241, 241, 241);
  display: flex;
}

.info-other span {
  font-size: 15px;
  color: rgb(138, 138, 138);
  flex: 1;
  text-align: center;
}

.info-other span:first-child {
  text-align: left;
}

.info-other span:last-child {
  text-align: right;
}

.info-service {
  font-size: 15px;
  display: flex;
  text-align: center;
  padding: 20px 0px 15px 0px;
}

.info-service-item {
  flex: 1;
}

.info-service-item img {
  width: 12px;
}

.info-service span:first-child {
  text-align: left;
}

.info-service span:last-child {
  text-align: right;
}
</style>