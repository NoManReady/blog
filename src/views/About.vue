<template>
  <div class="app-about tc">
    <canvas class="bg-canvas" ref="canvas"></canvas>
    <div class="pos-r">
      <h3 class="main-tit">
        <span>NoManReady</span>
        <p class="about-tag">
          <van-tag :key="tag.label" :type="tag.type" class="about-tag-item" v-for="(tag) in tags">{{tag.label}}</van-tag>
        </p>
      </h3>
      <section class="info-block">
        <van-divider>掘金</van-divider>
        <a class="link c-success fs14 pointer" href="https://juejin.im/user/56ef9f06df0eea00543ad8e9" target="_blank">
          <img
            alt="掘金"
            src="https://b-gold-cdn.xitu.io/v3/static/img/simplify-logo.3e3c253.svg"
            srcset
            style="height:14px;vertical-align: middle;"
          />
          <span>掘金</span>
          <svg
            aria-hidden="true"
            class="icon outbound"
            height="15"
            style="vertical-align: middle;"
            viewBox="0 0 100 100"
            width="15"
            x="0px"
            xmlns="http://www.w3.org/2000/svg"
            y="0px"
          >
            <path
              d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
              fill="currentColor"
            />
            <polygon
              fill="currentColor"
              points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
            />
          </svg>
        </a>
      </section>
      <section class="info-block">
        <van-divider>Github</van-divider>
        <a class="link c-success fs14 pointer" href="https://github.com/NoManReady" target="_blank">
          <img
            alt="Github"
            src="https://github.githubassets.com/images/icons/emoji/octocat.png"
            srcset
            style="height:14px;vertical-align: middle;"
          />
          <span>Github</span>
          <svg
            aria-hidden="true"
            class="icon outbound"
            height="15"
            style="vertical-align: middle;"
            viewBox="0 0 100 100"
            width="15"
            x="0px"
            xmlns="http://www.w3.org/2000/svg"
            y="0px"
          >
            <path
              d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
              fill="currentColor"
            />
            <polygon
              fill="currentColor"
              points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
            />
          </svg>
        </a>
      </section>
      <section class="user-desc">
        <p class="c-warning">夫唯不争，故天下莫能与之争</p>
      </section>
      <div @click="_onBack" class="back-btn" v-if="!$store.getters.is_qiankun">
        <van-icon class="fs20" name="arrow-left" />
      </div>
    </div>
  </div>
</template>
<script>
import { Tag, Divider, Icon } from 'vant'
import Ball from '@/utils/ball'
export default {
  name: 'AppAbout',
  components: {
    [Tag.name]: Tag,
    [Divider.name]: Divider,
    [Icon.name]: Icon
  },
  data() {
    return {
      tags: [
        {
          label: 'IT',
          type: 'primary'
        },
        {
          label: 'Vue',
          type: 'success'
        },
        {
          label: 'Javascript',
          type: 'success'
        }
      ]
    }
  },
  mounted() {
    new Ball({
      canvas: this.$refs.canvas,
      PARENT_CONTAINER: '.app-about',
      BALL_RADIUS: 10,
      DYNAMIC_BALL: true,
      BALL_SIZE: 15,
      BALL_INPACT: 5
    })
  },
  methods: {
    _onBack() {
      this.$router.replace({ name: 'Home' })
    }
  }
}
</script>
<style lang="scss" scoped>
.main-tit {
  font-size: 26px;
  box-shadow: 0 0 5px #ccc;
  margin: 0 -1px;
  padding: 15px 0;
}
.about-tag {
  padding: 8px 0 0;
  line-height: 0px;
  &-item ~ &-item {
    margin-left: 5px;
  }
}
.info-block {
  .info-tit {
    font-size: 20px;
  }
}
.bg-canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  // z-index: -1;
  top: 0;
  left: 0;
}
.user-desc {
  font-size: 18px;
  background-image: linear-gradient(90deg, #f9cefd, #07c160);
  padding: 30px;
  opacity: 0.7;
  border-radius: 10px;
  width: 70%;
  margin: 30px auto 0;
}
.back-btn {
  background-image: linear-gradient(to right, #4bb0ff, #6149f6);
  border-radius: 50%;
  padding: 5px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  z-index: 999;
  left: 3%;
  top: 3%;
  position: absolute;
}
</style>