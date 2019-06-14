import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    corsHackAPI: "https://cors-anywhere.herokuapp.com/",
    searchTrackAPI: "http://api.deezer.com/search?q=",
    searchResults: {},
    searchTerm: "",
  },
  getters: {
    getResults: (state) => {
      return state.searchResults
    },
    getSearchTerm: (state) => state.searchTerm
  },
  mutations: {
    setResults: (state, payload) => { state.searchResults = payload },
    setSearchTerm: (state, payload) => { state.searchTerm = payload }
  },
  actions: {
    searchTrack: (context) => {
      return new Promise((resolve, reject) => {
        axios.get(`${context.state.corsHackAPI}${context.state.searchTrackAPI}${context.state.searchTerm}`)
            .then(res => {
              context.commit('setResults', res.data)
              console.log('Store', res)
              resolve(res)
            })
            .catch(err => {
              console.log('Store', err)
              reject(err)
            });
      })
    },
  }
})
