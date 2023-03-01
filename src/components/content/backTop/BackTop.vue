<template>
  <div class="back-top">
    <img src="~assets/img/common/backtop.svg"
         alt="">
  </div>
</template>

<script>
export default {
  name: 'BackTop'
}
</script>

<style scoped>
.back-top {
  position: absolute;
  right: 10px;
  height: 40px;
  width: 40px;
  bottom: 59px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 100%;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
}

.back-top img {
  height: 30px;
  vertical-align: middle;
}
</style>