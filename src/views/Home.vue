<template>
  <div class="home tc">
    <banner-slide :auto-roll="true" :images="banners" />
    <van-divider class="home-diveider">
      <span class="c-warning">快捷工具</span>
    </van-divider>
    <van-grid class="home-grid">
      <van-grid-item :key="item.text" @click.native="_onClick(item)" v-bind="item" v-for="item in grids" />
    </van-grid>
  </div>
</template>

<script>
import { Grid, GridItem, Divider } from 'vant'
import Banner from '@/components/Banner'
export default {
  name: 'Home',
  components: {
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Divider.name]: Divider,
    [Banner.name]: Banner
  },
  data() {
    return {
      banners: [
        {
          desc: '',
          url: '',
          pic: require('@/assets/banner-1.jpg')
        },
        {
          desc: '',
          url: '',
          pic: require('@/assets/banner-2.jpg')
        },
        {
          desc: '',
          url: '',
          pic: require('@/assets/banner-3.jpg')
        },
        {
          desc: '',
          url: '',
          pic: require('@/assets/banner-4.jpg')
        }
      ],
      grids: [
        {
          icon: 'gem-o',
          text: '珍藏',
          // link: { name: 'Gem', query: { index: 'gem' } },
          dot: false
        },
        {
          icon: 'fire-o',
          text: '热门',
          link: { name: 'Fire', query: { index: 'fire' } },
          dot: false
        },
        {
          icon: 'service-o',
          text: '服务',
          // link: { name: 'Service', query: { index: 'service' } },
          dot: false
        },
        {
          icon: 'user-o',
          text: '关于',
          link: { name: 'About' },
          dot: false
        }
      ]
    }
  },
  created() {},
  methods: {
    _onClick({ link, text }) {
      if (link) {
        this.$router.replace(link)
      } else {
        this.$toast.fail(`《${text}》功能还未开发`)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.swipe {
  width: 100%;
  height: 200px;
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  &-item {
    background-position: center;
    background-size: cover;
    background-color: #aaddcc;
    height: 100%;
  }
}
.swipe-wrap {
  height: 200px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
}
.home {
  display: flex;
  flex-direction: column;
  .home-grid {
    flex: 1;
    align-items: start;
    background-color: rgba(#aaddcc, 0.6);
  }
}
</style>