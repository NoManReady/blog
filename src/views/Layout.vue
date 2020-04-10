<template>
  <div class="layout">
    <transition :name="directionClass">
      <router-view :class="{'has-tabbar':showTab}" class="layout-inner"></router-view>
    </transition>
    <template v-if="showTab">
      <van-tabbar v-model="tabbarModel">
        <van-tabbar-item
          :key="tab.name"
          @click.native="_onClickTab(tab)"
          v-bind="tab"
          v-for="tab in tabbars.filter(t=>t.name!=='home'||(t.name==='home'&&!is_qiankun))"
        >{{tab.label}}</van-tabbar-item>
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
    return {
      tabbars: [
        {
          icon: 'star-o',
          name: 'star',
          label: '收藏',
          link: { name: 'Star' }
        },
        {
          icon: 'like-o',
          name: 'like',
          label: '喜欢',
          link: { name: 'Like' }
        },
        {
          icon: 'home-o',
          name: 'home',
          label: '首页',
          link: { name: 'Home' }
        },
        {
          icon: 'fire-o',
          name: 'fire',
          label: '热门',
          link: { name: 'Fire' }
        },
        {
          icon: 'setting-o',
          name: 'setting',
          label: '设置',
          link: { name: 'Fire' }
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['showTab', 'directionClass', 'is_qiankun']),
    tabbarModel: {
      get() {
        return this.$route.name.toLowerCase() || 'star'
      },
      set() {}
    }
  },
  methods: {
    _onClickTab({ link }) {
      this.$router.replace(link)
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
  overflow: hidden;
  overflow-y: auto;
  .has-tabbar {
    padding-bottom: 60px;
  }
  &-inner {
    position: absolute;
    overflow: hidden;
    overflow-y: auto;
    flex: 1;
    width: 100%;
  }
}
</style>