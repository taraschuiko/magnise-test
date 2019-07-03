import Vue from 'vue'
import Vuex from 'vuex'
import getters from "./getters"
import mutations from "./mutation"
import actions from "./actions"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    students: []
  },
  getters,
  mutations,
  actions
})
