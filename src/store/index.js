import { createStore } from 'vuex'

export default createStore({
  state: {
    regions:[],
  },
  getters: {
  },
  mutations: {
    STATE_REGIONS(state,payload) {
      state.regions.push(payload)
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    regions:(state)=>state.regions,
  }
})
