<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  /* background-color: orange; */
  box-shadow: 0px 1px 3px rgba(100, 100, 100, 0.3);
}

.left, .right{
  width: 60px;
  /* background-color: aqua; */
}

.center {
  flex: 1;
  text-align: center;
}
</style>