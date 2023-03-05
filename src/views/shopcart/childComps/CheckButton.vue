<template>
  <div class="check-button">
    <img v-if="!isChecked"
         src="~assets/img/shopcart/tick.svg"
         alt="">
    <img v-else
         src="~assets/img/shopcart/active-tick.svg"
         alt="">
  </div>
</template>

<script>
export default {
  name: 'CheckButton',
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.check-button {
  display: flex;
}

.check-button img {
  width: 24px;
}
</style>