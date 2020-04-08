<template>
  <div class="home tc">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item :key="img.src" v-for="img in banners">
        <div class="swipe-wrap">
          <img :src="img.src" />
        </div>
      </van-swipe-item>
    </van-swipe>
    <van-divider class="home-diveider">
      <span class="c-warning">快捷工具</span>
    </van-divider>
    <van-grid class="home-grid">
      <van-grid-item :key="item.text" v-bind="item" v-for="item in grids" />
    </van-grid>
  </div>
</template>

<script>
import { Swipe, SwipeItem, Grid, GridItem, Divider } from 'vant'
export default {
  name: 'Home',
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Divider.name]: Divider
  },
  data() {
    return {
      banners: [
        {
          desc: '',
          src: require('@/assets/banner-1.jpg')
        },
        {
          desc: '',
          src: require('@/assets/banner-2.jpg')
        },
        {
          desc: '',
          src: require('@/assets/banner-3.jpg')
        },
        {
          desc: '',
          src: require('@/assets/banner-4.jpg')
        }
      ],
      grids: [
        {
          icon: 'gem-o',
          text: '珍藏',
          to: { name: 'Gem', query: { index: 'gem' } },
          dot: false
        },
        {
          icon: 'fire-o',
          text: '热门',
          to: { name: 'Fire', query: { index: 'fire' } },
          dot: false
        },
        {
          icon: 'service-o',
          text: '服务',
          to: { name: 'Service', query: { index: 'service' } },
          dot: false
        },
        {
          icon: 'user-o',
          text: '关于',
          to: { name: 'About' },
          dot: false
        }
      ]
    }
  },
  created() {}
}
</script>
<style lang="scss" scoped>
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