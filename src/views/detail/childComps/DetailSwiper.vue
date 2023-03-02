<template>
  <div>
    <swiper class="detail-swiper">
      <swiper-item v-for="(topImage, index) in topImages"
                   :key="index">
        <img :src="topImage"
             alt=""
             @load="imgLoad">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
// 公共组件
import { Swiper, SwiperItem } from 'components/common/swiper'

export default {
  name: 'DetailSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    imgLoad() { }
  },
}
</script>

<style scoped>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>