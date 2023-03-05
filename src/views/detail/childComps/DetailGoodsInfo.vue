<template>
  <div v-if="Object.keys(detailInfo).length !== 0"
       class="goods-info">
    <div class="info-desc">
      <div class="desc">{{detailInfo.desc}}</div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item, index) in detailInfo.detailImage[0].list"
           :key="index"
           :src="item"
           @load="imgLoad"
           alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodsInfo',
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      counter: 0,
      imagesLength: 0
    }
  },
  methods: {
    imgLoad() {
      if (++this.counter === this.imagesLength) {
        this.$emit('detailImgLoad');
      }
    }
  },
  watch: {
    detailInfo() {
      this.imagesLength = this.detailInfo.detailImage[0].list.length
    }
  }
}
</script>

<style scoped>
.goods-info {
  padding: 20px 0px;
  border-bottom: 5px solid rgb(241, 241, 241);
}

.info-key {
  padding: 10px 10px;
}

.info-list img {
  width: 100%;
}

.desc {
  padding: 0px 10px;
}
</style>