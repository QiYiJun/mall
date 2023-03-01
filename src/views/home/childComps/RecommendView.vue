<template>
  <div class="recommend">
    <div v-for="(recommend, index) in recommends"
         :key="index"
         class="recommend-item">
      <a :href="recommend.link">
        <img :src="recommend.image"
             alt="">
        <div>{{recommend.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendView',
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommend {
  display: flex;
  padding: 15px 0px 10px 0px;
  border-bottom: 8px solid #eeeeee;
}

.recommend-item {
  flex: 1;
  text-align: center;
  font-size: 12px;
}

.recommend-item img {
  width: 68px;
  height: 68px;
  margin-bottom: 3px;
}


</style>