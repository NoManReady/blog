import Vue from "vue";
import VueRouter from "vue-router";

const Layout = () => import("@/views/Layout");
const Home = () => import("@/views/Home");
const About = () => import("@/views/About");
const Star = () => import("@/views/Star");
const Like = () => import("@/views/Like");
const Fire = () => import("@/views/Fire");
const Setting = () => import("@/views/Setting");

Vue.use(VueRouter);

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

export default router;
