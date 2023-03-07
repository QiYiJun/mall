import {
  Add_New_Goods,
  Add_Goods_Count
} from './mutation-types'

export default {
  addToCart ({ state, commit }, payload) {
    return new Promise((resolve, reject) => {
      let product = state.cartList.find(item => item.iid === payload.iid)

      if (product)
      {
        commit(Add_Goods_Count, product)
        resolve('当前商品数量+1')
      }
      else
      {
        payload.count = 1
        payload.checked = true
        commit(Add_New_Goods, payload)
        resolve('已添加至购物车')
      }
    })
  }
}