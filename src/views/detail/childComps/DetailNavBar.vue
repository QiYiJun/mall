<template>
  <div>
    <nav-bar>
      <div slot="left"
           class="back">
        <img src="~assets/img/common/back.svg"
             alt=""
             @click="backClick">
      </div>
      <div slot="center"
           class="center">
        <div v-for="(title, index) in titles"
             :key="index"
             @click="titleClick(index)"
             :class="{active: index === currentIndex}">
          {{title}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
// 公共组件
import NavBar from 'components/common/navBar/NavBar'

export default {
  name: 'DetailNavBar',
  components: {
    NavBar
  },
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index
      this.$emit('titleClick', index);
    },
    backClick() {
      this.$router.back()
    }
  },
}
</script>

<style scoped>
.back {
  display: flex;
  align-items: center;
  height: 44px;
  padding-left: 5px;
}

.active {
  color: var(--color-high-text);
}

.back img{
  width: 35px;
}

.center {
  display: flex;
}

.center div {
  flex: 1;
}
</style>