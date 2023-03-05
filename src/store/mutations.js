import {
  Add_New_Goods,
  Add_Goods_Count
} from './mutation-types'

export default {
  // 修改state中的状态
  // 每个方法尽量只做一件事
  [Add_New_Goods] (state, payload) {
    state.cartList.push(payload)
  },
  [Add_Goods_Count] (state, payload) {
    payload.count++
  }
}