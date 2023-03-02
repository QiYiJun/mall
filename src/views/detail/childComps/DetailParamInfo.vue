<template>
  <div class="param-info"
       v-if="Object.keys(paramInfo).length !== 0">
    <table v-for="(table, index) in paramInfo.sizes"
           :key="index"
           class="info-size">
      <tr v-for="(tr, indey) in table"
          :key="indey">
        <td v-for="(td, indez) in tr"
            :key="indez">{{td}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(info, index) in paramInfo.infos"
          :key="index">
        <td class="info-param-key">{{info.key}}</td>
        <td class="param-value">{{info.value}}</td>
      </tr>
    </table>
    <div class="info-img"
         v-if="paramInfo.image.length !== 0">
      <img :src="paramInfo.image"
           alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailParamInfo',
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.param-info {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid rgb(241, 241, 241);
}

.info-size {
  border-bottom: 5px solid rgb(241, 241, 241);
}

table {
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
}

table tr td {
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid rgb(241, 241, 241);
}

.info-param td {
  color: var(--color-high-text);
}

.info-param td:first-child {
  color: #666666;
  width: 80px;
}

</style>