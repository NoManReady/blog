<template>
  <div class="banner">
    <ul class="banner-slide">
      <li :class="[move[index]]" :key="item.pic" v-for="(item,index) in images">
        <v-touch @swipeleft="_nextPic" @swiperight="_prePic" @tap="_onTap(item.url)">
          <img @click="_target(index)" v-lazy="item.pic" />
        </v-touch>
      </li>
    </ul>
    <div class="banner-button">
      <em :class="[move[index]]" :key="item.pic" @click="_target(index)" v-for="(item,index) in images"></em>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BannerSlide',
  props: {
    images: {
      require: true,
      type: Array,
      validator: function(value) {
        return value.length >= 3
      }
    },
    interval: {
      default: 5000
    },
    autoRoll: {
      default: false
    },
    direction: {
      default: 'left'
    }
  },
  data() {
    return {
      move: ['b-left', 'b-center', 'b-right']
    }
  },
  created() {
    for (let i = 3; i < this.images.length; i++) {
      this.move[i] = 'b-wait'
    }
    if (this.autoRoll) {
      if (this.direction === 'left') {
        setInterval(this._nextPic, this.interval)
      } else {
        setInterval(this._prePic, this.interval)
      }
    }
  },
  methods: {
    // center右移
    _nextPic(event) {
      let temp = this.move.pop()
      this.move.unshift(temp)
    },
    // center左移
    _prePic(event) {
      let temp = this.move.shift()
      this.move.push(temp)
    },
    // center定位移动
    _target(pos) {
      const num = this.images.length
      for (let i = 0; i < num; i++) {
        this.move[i] = 'b-wait'
      }
      this.move[pos] = 'b-center'
      this.move[pos + 1 < num ? pos + 1 : 0] = 'b-right'
      this.move[pos - 1 === -1 ? num - 1 : pos - 1] = 'b-left'
      this.move = this.move.concat()
    },
    _onTap(url) {
      if (url) {
        // window.open('_blank', url)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.banner-slide {
  perspective: 1000px;
  perspective-origin: 10% 10%;
  position: relative;
  height: 180px;
  img {
    height: 180px;
    width: 100%;
  }
}

li {
  list-style-type: none;
  position: absolute;
  top: 0px;
  width: 70%;
  transition: transform 0.5s, left 1s, right 1s, opacity 0.5s;
  text-align: center;
  &.b-left,
  &.b-right {
    transform: scale3d(0.8, 0.8, 0.8);
    z-index: 10;
    opacity: 0.8;
  }

  &.b-left {
    left: 0;
  }

  &.b-center {
    left: 15%;
    z-index: 100;
  }

  &.b-right {
    left: 30%;
  }

  &.b-wait {
    transform: scale3d(0, 0, 0);
  }
}

.banner-button {
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
  em {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: rgb(225, 225, 226);
    border-radius: 20px;
    transition: all 0.2s ease-in-out;
    &:not(:first-child) {
      margin-left: 6px;
    }
    cursor: pointer;
    &.b-center {
      width: 20px;
      background-color: rgb(198, 47, 47);
    }
  }
}
</style>