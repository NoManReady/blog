import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const SET_TABBAR_SHOW = 'SET_TABBAR_SHOW'
export const SET_ROUTER_ANIMATE = 'SET_ROUTER_ANIMATE'
export const SET_LOADING = 'SET_LOADING'
export default new Vuex.Store({
  state: {
    showTab: true,
    direction: 'forward',
    is_qiankun: window.__POWERED_BY_QIANKUN__,
    loading: false
  },
  mutations: {
    [SET_TABBAR_SHOW](state, payload) {
      state.showTab = payload
    },
    [SET_ROUTER_ANIMATE](state, payload) {
      state.direction = payload
    },
    [SET_LOADING](state, payload = true) {
      state.loading = payload
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    showTab(state) {
      return state.showTab
    },
    directionClass(state) {
      return state.direction === 'forward' ? 'page-pop-in' : 'page-pop-out'
    },
    is_qiankun(state) {
      return state.is_qiankun
    },
    loading(state) {
      return state.loading
    }
  }
})
