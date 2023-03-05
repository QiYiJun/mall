import {
  Add_New_Goods,
  Add_Goods_Count
} from './mutation-types'

export default {
  addToCart ({ state, commit }, payload) {
    let product = state.cartList.find(item => item.iid === payload.iid)

    if (product)
    {
      commit(Add_Goods_Count, product)
    }
    else
    {
      payload.count = 1
      payload.checked = true
      commit(Add_New_Goods, payload)
    }
  }
}