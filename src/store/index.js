import { createStore } from 'vuex'

import workers from './modules/workers'
import candidates from './modules/candidates'
import interviews from './modules/interviews'
import professions from './modules/professions'

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    workers,
    candidates,
    interviews,
    professions,
  },
})
