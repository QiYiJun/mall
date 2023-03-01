<template>
  <div>
    <div class="tab-bar">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style scoped>
.tab-bar {
  display: flex;
  justify-content: center;
  background-color: #f6f6f6;
  position: fixed;
  z-index: 11;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px -1px 3px rgba(100, 100, 100, 0.3);
}

</style>