export function debounce (func, delay) {
  let timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

export function formatDate (date) {
  date *= 1000
  let y = new Date(date).getFullYear()
  let m = new Date(date).getMonth()
  let d = new Date(date).getDate()
  return [y, m, d].join('-')
}