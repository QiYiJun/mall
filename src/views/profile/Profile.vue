<template>
  <div id="profile">
    <nav-bar class="profile-nav">
      <div slot="center">我的档案</div>
    </nav-bar>
    <profile-main />
    <profile-list />
  </div>
</template>

<script>
// 公用组件
import NavBar from 'components/common/navBar/NavBar'

// 子组件
import ProfileMain from './childComps/ProfileMain'
import ProfileList from './childComps/ProfileList'

export default {
  name: 'Profile',
  components: {
    NavBar,
    ProfileMain,
    ProfileList
  }
}
</script>

<style scoped>
.profile-nav {
  color: white;
  text-shadow: 1px 1px 2px white;
  background-color: var(--color-tint);
}
</style>