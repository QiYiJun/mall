<template>
  <div class="tab-bar-item"
       @click="itemClick">
    <slot v-if="!isActive"
          name="item-icon"></slot>
    <slot v-else
          name="item-icon-active"></slot>
    <div :style="activeStyle">
      <slot name="item-title"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  methods: {
    itemClick() {
      // console.log(this.$router);
      this.$router.push(this.path)
    }
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: '#f9479e'
    }
  },
  data() {
    return {
    }
  },
  computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}

.tab-bar-item img {
  margin: 3px 0px;
  width: 24px;
  height: 24px;
  vertical-align: middle;
}

</style>