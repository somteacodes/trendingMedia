import { createStore } from 'vuex'

export default createStore({
  state: {
    mediaList:[],
    selectedMedia:''
  },

  getters:{
    getMovieDetail(state){
      return state.selectedMedia
    }
  },
    mutations: {

    setCurrentMedia(state,payload){
      state.selectedMedia = payload
    }
  },
  actions: {

  },
  modules: {
  }
})
