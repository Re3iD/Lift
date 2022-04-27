import { createStore } from 'vuex'

export default createStore({
  state: {
    liftAim:null
  },
  getters: {
    LIFTAIM: (state)=>{
      return state.liftAim
    }
  },
  mutations: {
    SET_AIM: (state,payload)=>{
      return state.liftAim = payload
    }
  },
  actions: {
    SET_AIM: (context,payload)=>{
      context.commit('SET_AIM',payload)
    }
  },
  modules: {
  }
})
