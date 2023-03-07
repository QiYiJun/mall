import Toast from './Toast'

const obj = {}

obj.install = function (Vue) {
  // 组件构造器
  const ToastConstructor = Vue.extend(Toast)
  // new一个
  const toast = new ToastConstructor()
  // 挂载
  toast.$mount(document.createElement('div'))
  // 添加到body
  document.body.appendChild(toast.$el)
  // Vue原型上添加属性
  Vue.prototype.$toast = toast
}

export default obj