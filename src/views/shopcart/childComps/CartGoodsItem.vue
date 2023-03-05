<template>
  <div class="goods-item">
    <div class="item-select">
      <check-button :isChecked="item.checked"
                    @click.native="checkClick"></check-button>
    </div>
    <div class="item-img">
      <div class="img">
        <img :src="item.img"
             alt="">
      </div>
    </div>
    <div class="item-info">
      <div class="item-title">{{item.title}}</div>
      <div class="item-desc">{{item.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">{{item.price}}</div>
        <div class="item-count right">{{item.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from './CheckButton'

export default {
  name: 'CartGoodsItem',
  components: {
    CheckButton
  },
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    checkClick() {
      this.item.checked = !this.item.checked
    }
  },
}
</script>

<style scoped>
.goods-item {
  width: 100%;
  display: flex;
  padding: 10px 5px;
  background-color: white;
  border-bottom: 2px solid rgb(241, 241, 241);
}

.item-select {
  width: 20px;
  display: flex;
  justify-content: center;
  align-content: center;
}

.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-img {
  display: block;
  padding: 5px;
}

.item-img img {
  width: 80px;
  height: 120px;
  display: block;
  border-radius: 8px;
}

.item-info {
  font-size: 17px;
  color: #333333;
  padding: 6px 10px;
  position: relative;
  overflow: hidden;
}

.item-info .item-desc {
  font-size: 14px;
  color: #666666;
  margin-right: 15px;
}

.info-bottom {
  margin-top: 10px;
  position: absolute;
  bottom: 0;
  left: 10px;
  right: 10px;
}

.info-bottom .item-price {
  color: orangered;
}
</style>