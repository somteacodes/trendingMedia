import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate';
export default createStore({
  state: {
    mediaList:[],
    selectedMedia:''
  },
  plugins: [createPersistedState()],
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
