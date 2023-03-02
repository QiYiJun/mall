<template>
  <div>
    <swiper>
      <swiper-item v-for="(banner, index) in banners"
                   :key="index">
        <a :href="banner.link">
          <img :src="banner.image"
               alt=""
               @load="imgLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper'

export default {
  name: 'HomeSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  data() {
    return {
      isLoad: false
    }
  },
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    imgLoad() {
      if (!this.isLoad) {
        this.$emit('swiperImgLoad')
        this.isLoad = true
      }
      // console.log('------');
    }
  },
}
</script>

<style scoped>

</style>