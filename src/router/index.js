import Vue from "vue";
import VueRouter from "vue-router";
import store, { SET_ROUTER_ANIMATE } from '@/store'

const Layout = () => import("@/views/Layout");
const Home = () => import("@/views/Home");
const About = () => import("@/views/About");
const Star = () => import("@/views/Star");
const Like = () => import("@/views/Like");
const Fire = () => import("@/views/Fire");
const Setting = () => import("@/views/Setting");

Vue.use(VueRouter);

// 页面路由对象记录配置（选配）
const HISTORY_CACHE = Object.create(null)
let HISTORY_CACHE_KEY_COUNT = 0
HISTORY_CACHE['/'] = 0

let base = "/";
if (window.__POWERED_BY_QIANKUN__) {
  base = "/app/blog";
}
const routes = [
  {
    path: base,
    name: 'Layout',
    component: Layout,
    redirect: _ => {
      return { name: 'Home' }
    },
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home,
        meta: {
          showTabbar: false
        }
      },
      {
        path: 'about',
        name: 'About',
        component: About,
        meta: {
          showTabbar: false
        }
      },
      {
        path: 'star',
        name: 'Star',
        component: Star,
        meta: {
          showTabbar: true
        }
      },
      {
        path: 'like',
        name: 'Like',
        component: Like,
        meta: {
          showTabbar: true
        }
      },
      {
        path: 'fire',
        name: 'Fire',
        component: Fire,
        meta: {
          showTabbar: true
        }
      },
      {
        path: 'setting',
        name: 'Setting',
        component: Setting,
        meta: {
          showTabbar: true
        }
      }
    ]
  }
];

const router = new VueRouter({
  mode: "hash",
  base,
  routes
});
router.beforeEach((to, from, next) => {
  // store.dispatch('title', i18n.t(`nav.${to.meta.t}`) )
  /*页面级animated--begin*/
  let toName = to.name || to.path
  let fromName = from.name || from.path
  const toIndex = HISTORY_CACHE[toName]
  const fromIndex = HISTORY_CACHE[fromName]
  // 判断当前页面是否进入过
  // 是：如果当前权级>前一个权级，进入（forward），否则退出（reverse）
  // 否：记录当前路径-权级+1，并进入（forward）
  if (toIndex) {
    if (parseInt(toIndex, 10) > parseInt(fromIndex, 10)) {
      store.commit(SET_ROUTER_ANIMATE, 'forward')
    } else {
      store.commit(SET_ROUTER_ANIMATE, 'reverse')
    }
  } else {
    ++HISTORY_CACHE_KEY_COUNT
    toName !== '/' && (HISTORY_CACHE[toName] = HISTORY_CACHE_KEY_COUNT)
    store.commit(SET_ROUTER_ANIMATE, 'forward')
  }
  /*页面级animated--end*/
  next()
})
export default router;
