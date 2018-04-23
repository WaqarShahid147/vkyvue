import Vuex from 'vuex'
import Vue from 'vue'
import employees from './employees'
import links from './links'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    employees,
    links
  }
})
