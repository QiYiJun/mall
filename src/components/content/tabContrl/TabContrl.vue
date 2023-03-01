<template>
  <div class="tab-contrl">
    <div v-for="(title, index) in titles"
         :key="index"
         class="tab-contrl-item"
         @click="itemClick(index)"
         :class="{active: index === currentIndex}">
      <span>{{title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabContrl',
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('tabClick', index)
    }
  },
}
</script>

<style scoped>
.tab-contrl {
  height: 40px;
  line-height: 40px;
  display: flex;
}

.tab-contrl-item {
  flex: 1;
  text-align: center;
  z-index: 10;
}

.active {
  color: var(--color-high-text);
}

.active span{
  border-bottom: 3px solid var(--color-tint);
}

.tab-contrl-item span{
  padding: 5px;
}
</style>