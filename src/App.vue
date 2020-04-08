<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>
<script>
import { SET_TABBAR_SHOW } from '@/store'
export default {
  name: 'App',
  data() {
    return {}
  },
  watch: {
    $route: {
      handler(v) {
        let meta = v.meta || {}
        this.$store.commit(SET_TABBAR_SHOW, meta.showTabbar)
      },
      immediate: true
    }
  }
}
</script>
<style lang="scss" scoped>
</style>