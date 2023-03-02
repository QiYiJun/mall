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

    if (this.probeType !==0) {
      this.bscroll.on('scroll', (position) => {
        this.$emit('scroll', position)
      })
    }

    if (this.pullUpLoad) {
      this.bscroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    }
  },
  methods: {
    scrollTo(x, y, time) {
      // scrollTo(x, y, time/ms)
      this.bscroll && this.bscroll.scrollTo(x, y, time)
    },
    finishPullUp() {
      this.bscroll && this.bscroll.finishPullUp()
    },
    refresh() {
      this.bscroll && this.bscroll.refresh()
    },
    getScrollY() {
      return this.bscroll ? this.bscroll.y : 0
    }
  },
}
</script>

<style scoped>

</style>