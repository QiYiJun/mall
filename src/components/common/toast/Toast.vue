<template>
  <div class="toast"
       v-show="isShow">
    {{message}}
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show(message='Default Message', duration=2000) {
      this.isShow = true
      this.message = message

      setTimeout(() => {
      this.isShow = false
      this.message = ''
      }, duration);
    }
  },
}
</script>

<style scoped>
.toast {
  padding: 5px 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 6px;
  color: white;
}
</style>