<template>
  <div class="sub-category">
    <div class="sub-item"
         v-for="(item, index) in subCategoryList"
         :key="index">
      <img :src="item.image"
           alt=""
           @load="imgLoad">
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubCategory',
  props: {
    subCategoryList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    imgLoad() {
      this.$bus.$emit('itemImgLoad')
    }
  },
}
</script>

<style scoped>
.sub-category {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px 5px;
}

.sub-item {
  display: flex;
  text-align: center;
  flex-direction: column;
  margin: 5px;
  width: 80px;
  overflow: hidden;
}
.sub-item img {
  margin-bottom: 5px;
  width: 80px;
}
</style>