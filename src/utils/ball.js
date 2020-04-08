const Ball = function (options) {
  //默认属性
  var defaults = {
    BALL_INPACT: 1000,          //球的碰撞次数
    BALL_SIZE: 128,            //球的个数
    BALL_RADIUS: 50,           //球的最大半径
    PARENT_CONTAINER: 'body',  //canvas的容器(即设置canvas最大的宽高)
    DYNAMIC_BALL: false,       //是否动态
    BALL_SIZE_DYNAMIC: false,  //球大小是否可变
    BALL_SPEED: 1.2             //球的速度系数 
  };

  //属性整合
  Object.assign(defaults, options || {});

  //插件全局变量
  var canvas = options.canvas,
    ctx = canvas.getContext('2d'),
    container = document.querySelectorAll(defaults.PARENT_CONTAINER)[0],
    ballSize = defaults.BALL_SIZE,
    ballRadius = defaults.BALL_RADIUS,
    dynamic = defaults.DYNAMIC_BALL,
    ballSizeDynamic = defaults.BALL_SIZE_DYNAMIC,
    ballSpeed = defaults.BALL_SPEED,
    impactNumber = defaults.BALL_INPACT,
    balls = [];

  //插件主方法对象
  var canvasBall = {
    /*
        入口函数
    */
    init: function () {
      this.render();
      this._eventHandler();
    },

    /*
        渲染函数
    */
    render: function () {
      var _self = this;
      this._resizeWindow();
      this._animationRequest(v);
      function v() {
        _self._animationRequest(v);
        _self._drawBalls();
        dynamic && _self._ballAnimation();
      }
    },

    /*
        事件函数
    */
    _eventHandler: function () {
      window.onresize = this._resizeWindow;
    },

    /*
        生成ballSize个随机球
    */
    _randomBalls: function () {
      balls = [];
      for (var i = 0; i < ballSize; i++) {
        balls.push(canvasBall._genarateBall());
      }
    },

    /*
生成一个球
    */
    _genarateBall: function () {
      var b = {}, r = ballSizeDynamic ? this._randomNumber(0.8, 1) * ballRadius : ballRadius, sColor = this._randomNumber(250, 256, true);
      b.vx = Math.pow(-1, Math.floor(Math.random() * 1000)) * Math.random() * ballSpeed;
      b.vy = Math.pow(-1, Math.floor(Math.random() * 1000)) * Math.random() * ballSpeed;
      b.x = this._randomNumber(r, canvas.width - r);
      b.y = this._randomNumber(r, canvas.height - r);
      b.r = r;
      b.impact = 0;
      b.eColor = 'rgba(' + this._randomNumber(0, 256, true) + ',' + this._randomNumber(0, 256, true) + ',' + this._randomNumber(0, 256, true) + ',' + this._randomNumber(0.2, 0.7).toFixed(2) + ')';
      b.sColor = 'rgba(' + sColor + ',' + sColor + ',' + sColor + ',' + this._randomNumber(0.2, 0.7).toFixed(2) + ')';
      return b;
    },

    /*
        生成随机数(介于n,m之间,flag表示是否取整)
    */
    _randomNumber: function (n, m, flag) {
      return flag ? Math.floor(Math.random() * Math.abs(n - m) + Math.min(n, m)) : Math.random() * Math.abs(n - m) + Math.min(n, m);
    },

    /*
        画球(根据各个球的属性)
    */
    _drawBalls: function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < balls.length; i++) {
        var b = balls[i],
          radius_line;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, 2 * Math.PI);
        radius_line = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        radius_line.addColorStop(0, '#fff' || b.sColor);
        radius_line.addColorStop(1, b.eColor);
        ctx.fillStyle = radius_line;
        ctx.fill();
      }
    },

    /*
        进行动画时球位置变化函数
    */
    _ballAnimation: function () {
      for (var i = 0; i < ballSize; i++) {
        var b = balls[i];
        b.x += b.vx;
        b.y += b.vy;
        if (b.x < b.r) {
          b.x = b.r;
          b.vx = -b.vx;
          b.impact++;
        }
        if (b.x > canvas.width - b.r) {
          b.x = canvas.width - b.r;
          b.vx = -b.vx;
          b.impact++;
        }
        if (b.y < b.r) {
          b.y = b.r;
          b.vy = -b.vy;
          b.impact++;
        }
        if (b.y > canvas.height - b.r) {
          b.y = canvas.height - b.r;
          b.vy = -b.vy;
          b.impact++;
        }

        if (b.impact > impactNumber) {
          balls.splice(i, 1, this._genarateBall());
        }
      }
    },

    /*
        canvas宽高及球动态变化
    */
    _resizeWindow: function () {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
      canvasBall._randomBalls();
    },

    /*
        动画函数(基于浏览器帧率)
    */
    _animationRequest: function (v) {
      return (requestAnimationFrame ||
        webkitRequestAnimationFrame ||
        mozRequestAnimationFrame)(v);
    }
  };

  //启动函数
  canvasBall.init();

  //添加用户自定义方法

  //切换动画
  this.toggleAnimate = function (animate) {
    animate && (dynamic = animate);
    !animate && (dynamic = !dynamic);
  };

  //切换球的大小
  this.toggleSize = function (size) {
    size && (ballSize = size);
    ballSizeDynamic = !ballSizeDynamic;
  }

  //切换速度
  this.toggleSpeed = function (v) {
    ballSpeed = v;
    canvasBall._randomBalls();
  }

  //画布ctx对象
  this.paint = (function () {
    ctx.beginPath();
    return ctx;
  })()

  return this;
}

export default Ball