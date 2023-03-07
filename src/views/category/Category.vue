<template>
  <div id="category">
    <nav-bar class="category-nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <better-scroll class="left-bscroll">
      <div class="category-list">
        <span class="category-item"
              v-for="(category, index) in categoryList"
              :key="index+category.maitKey"
              :class="{active: index === currentIndex}"
              @click="categoryClick(index, category.maitKey)">
          {{category.title}}
        </span>
      </div>
    </better-scroll>
    <better-scroll class="right-bscroll"
                   ref="bscroll">
      <sub-category :subCategoryList="subCategoryList"></sub-category>
    </better-scroll>
  </div>
</template>

<script>
// 公共组件
import NavBar from 'components/common/navBar/NavBar'
import BetterScroll from 'components/common/betterScroll/BetterScroll'

// 子组件
import SubCategory from './childComps/SubCategory'

// 函数/mixin
import { getCategory, getSubCategory } from 'network/category'
import { itemListenerMixin } from 'common/mixin'

export default {
  name: 'Category',
  components: {
    NavBar,
    BetterScroll,
    SubCategory
  },
  data() {
    return {
      categoryList: [],
      currentIndex: 0,
      maitKey: 3627,
      subCategoryList: []
    }
  },
  mixins:[itemListenerMixin],
  deactivated() {
    this.$bus.$off('itemImgLoad', this.itemImgListener)
  },
  created() {
    getCategory()
      .then(res => {
        // console.log(res)
        this.categoryList = res.data.category.list
      })
      .catch(err => {
        console.log(err)
      })
    this.getSubCategory(this.maitKey)
  },
  methods: {
    categoryClick(index, maitKey) {
      this.currentIndex = index
      this.maitKey = maitKey
      this.getSubCategory(this.maitKey)
      this.$refs.bscroll.scrollTo(0, 0, 500)
    },
    getSubCategory(maitKey) {
      getSubCategory(maitKey)
        .then(res => {
          this.subCategoryList = res.data.list
        })
        .catch(err => {
          console.log(err)
        })
    },
  }
}
</script>

<style scoped>
.category-nav-bar {
  position: relative;
  color: white;
  text-shadow: 1px 1px 2px white;
  background-color: var(--color-tint);
}

.left-bscroll {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0px;
  width: 25%;
  background-color: rgb(246, 246, 246);
  z-index: -1;
}


.category-list {
  display: flex;
  flex-direction: column;
}

.active {
  border-left: 5px solid var(--color-high-text);
  color: var(--color-high-text);
  text-shadow: 1px 1px 3px var(--color-high-text);
  background-color: white;
}

.category-item {
  text-align: center;
  padding: 10px 0px;
}

.right-bscroll {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0px;
  width: 75%;
  background-color: white;
  z-index: -1;
}
</style>