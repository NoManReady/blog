import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const SET_TABBAR_SHOW = 'SET_TABBAR_SHOW'
export default new Vuex.Store({
  state: {
    showTab: true
  },
  mutations: {
    [SET_TABBAR_SHOW](state, payload) {
      state.showTab = payload
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    showTab(state) {
      return state.showTab
    }
  }
})
