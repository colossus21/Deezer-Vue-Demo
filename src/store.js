import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchTrackAPI: "https://api.deezer.com/search?q=",
    searchResults: [],
    searchTerm: ""
  },
  getters: {
    getResults: (state) => state.searchResults,
    getSearchTerm: (state) => state.searchTerm
  },
  mutations: {
    setResults: (state, payload) => { state.searchResults = payload },
    setSearchTerm: (state, payload) => { state.searchTerm = payload }
  },
  actions: {

  }
})
