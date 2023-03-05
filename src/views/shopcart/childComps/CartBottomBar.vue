<template>
  <div class="bottom-bar">
    <div class="select-all">
      <check-button class="check-button"
                    :isChecked="selectAll"
                    @click.native="allSelect" />
      <span>全选</span>
    </div>
    <div class="price-all">
      合计: {{totalPrice | fixed}}
    </div>
    <div class="go-pay">
      付款({{goodsCount}})
    </div>
  </div>
</template>

<script>
import CheckButton from './CheckButton'

import { mapGetters } from 'vuex'

export default {
  name: 'CartBottomBar',
  components: {
    CheckButton
  },
  methods: {
    allSelect() {
      if (this.cartList.length !== 0) {
        if (this.cartList.filter(item => item.checked).length === 0 || this.cartList.filter(item => item.checked).length === this.cartList.length) {
          for (const item of this.cartList) {
            item.checked = !item.checked
          }
        } else {
          let unCheched = this.cartList.filter(item => !item.checked)
          for (const item of unCheched) {
            item.checked = !item.checked
          }
        }
      }
    }
  },
  computed: {
    ...mapGetters(['cartList']),
    totalPrice() {
      return this.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return (preValue + item.price * item.count)
      }, 0)
    },
    goodsCount() {
      return this.cartList.filter(item => item.checked).length
    },
    selectAll() {
      if (this.cartList.length !== 0 && this.cartList.filter(item => item.checked).length === this.cartList.length) {
        return true
      } else {
        return false
      }
    },
  },
  filters: {
    fixed: function(value) {
      return '¥ ' + value.toFixed(2)
    }
  }
}
</script>

<style scoped>
.bottom-bar {
  height: 40px;
  position: absolute;
  bottom: 49px;
  left: 0;
  right: 0;
  display: flex;
  background-color: white;
  box-shadow: 0px -1px 3px rgba(0, 0, 0, 0.3);
}

.select-all {
  display: flex;
  align-items: center;
}

.select-all span {
  padding-right: 20px;
}

.check-button {
  padding: 0px 3px;
}

.price-all {
  line-height: 40px;
}

.go-pay {
  width: 80px;
  height: 40px;
  background-color: orangered;
  color: white;
  position: absolute;
  right: 0;
  line-height: 40px;
  text-align: center;
}
</style>