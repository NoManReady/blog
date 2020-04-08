<template>
  <div class="layout">
    <router-view :class="{'has-tabbar':showTab}" class="layout-inner"></router-view>
    <template v-if="showTab">
      <van-tabbar v-model="tabbarModel">
        <van-tabbar-item :to="{name:'Star'}" icon="star-o" name="star">收藏</van-tabbar-item>
        <van-tabbar-item :to="{name:'Like'}" icon="like-o" name="like">喜欢</van-tabbar-item>
        <van-tabbar-item :to="{name:'Home'}" icon="home-o" name="home">首页</van-tabbar-item>
        <van-tabbar-item :to="{name:'Fire'}" icon="fire-o" name="fire">热门</van-tabbar-item>
        <van-tabbar-item :to="{name:'Setting'}" icon="setting-o" name="setting">设置</van-tabbar-item>
      </van-tabbar>
    </template>
  </div>
</template>
<script>
import { Tabbar, TabbarItem } from 'vant'
import { mapGetters } from 'vuex'
export default {
  name: 'Layout',
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['showTab']),
    tabbarModel: {
      get() {
        return this.$route.query.index || 'star'
      },
      set() {}
    }
  }
}
</script>
<style lang="scss" scoped>
.layout {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  .has-tabbar {
    padding-bottom: 60px;
  }
  &-inner {
    flex: 1;
    width: 100%;
  }
}
</style>