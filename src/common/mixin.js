import { debounce } from 'common/utils'
import BackTop from 'components/content/backTop/BackTop'

export const itemListenerMixin = {
  data () {
    return {
      itemImgListener: null
    }
  },
  mounted () {
    let newRefresh = debounce(this.$refs.bscroll.refresh, 1000)
    this.itemImgListener = () => {
      newRefresh()
    }
    this.$bus.$on('itemImgLoad', this.itemImgListener)
  }
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data () {
    return {
      backTop: false
    }
  },
  methods: {
    backTopClick () {
      this.$refs.bscroll.scrollTo(0, 0, 500)
    },
    isShowBackTop (position) {
      this.backTop = (-position.y) >= 1000
    }
  },
}