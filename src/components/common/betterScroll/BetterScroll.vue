<template>
  <div class="wrapper"
       ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'BetterScroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      bscroll: null
    }
  },
  // 组件被挂载后调用
  mounted() {
    this.bscroll = new BScroll(this.$refs.wrapper, {
      observeDOM: true,
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })

    this.bscroll.on('scroll', (position) => {
      this.$emit('scroll', position)
    })

    this.bscroll.on('pullingUp', () => {
      this.$emit('pullingUp')
    })
  },
  methods: {
    backTop() {
      // scrollTo(x, y, time/ms)
      this.bscroll.scrollTo(0, 0, 500)
    },
    finishPullUp() {
      this.bscroll.finishPullUp()
    },
    refresh() {
      this.bscroll.refresh()
    }
  },
}
</script>

<style scoped>

</style>