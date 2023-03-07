<template>
  <div class="list-item">
    <slot name="img"></slot>
    <slot name="text"></slot>
  </div>
</template>

<script>
export default {
  name: 'ProfileListItem'}
</script>

<style scoped>
.list-item {
  display: flex;
}
</style>