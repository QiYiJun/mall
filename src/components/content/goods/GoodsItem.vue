<template>
  <div class="goods-item"
       @click="goodsClick">
    <img :src="imgUrl"
         alt=""
         @load="imgLoad">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="goods-price">{{goodsItem.price}}</span>
      <span class="goods-cfav">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsItem',
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    imgUrl() {
      if (this.goodsItem.show) {
        return this.goodsItem.show.img
      } else if (this.goodsItem.image) {
        return this.goodsItem.image
      } else {
        return ''
      }
    }
  },
  methods: {
    imgLoad() {
      this.$bus.$emit('itemImgLoad')
    },
    goodsClick() {
      this.$router.push('/detail/' + this.goodsItem.iid)
    }
  },
}
</script>

<style scoped>
.goods-item {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}

.goods-item img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  object-fit: cover;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .goods-price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .goods-cfav {
  position: relative;
}

.goods-info .goods-cfav::before {
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/cfav.svg") 0 0/14px 14px;
}
</style>