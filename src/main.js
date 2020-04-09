import Vue from "vue";
import App from "./App.vue";
import "./public_path";
import router from "./router";
import store from "./store";
import '@/style/index.scss'
import 'animate.css'

Vue.config.productionTip = false;

let instance = null;
import { Toast } from 'vant';
Vue.use(Toast);
import VueTouch from 'vue-touch'
Vue.use(VueTouch, { name: 'v-touch' })
import VueLazyLoad from 'vue-lazyload'
//默认图片 
import lazy_img from './assets/loading.gif'
Vue.use(VueLazyLoad, {
  loading: lazy_img
})

export async function bootstrap(props) {

}

export async function mount({ data = {} } = {}) {
  window.onResize()
  instance = new Vue({
    router,
    store,
    render: h => h(App, { props: data })
  }).$mount("#app");
}

export async function unmount() {
  if (instance) {
    const htmlDom = document.getElementsByTagName('html')[0];
    htmlDom.style.fontSize = window.originSize;
    instance.$destroy();
    instance = null;
  }
}

// 单独开发环境
window.__POWERED_BY_QIANKUN__ || mount();
