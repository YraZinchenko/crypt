import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
Vue.use(axios)

const store = () => new Vuex.Store({
  state: {
    cryptArray: []
  },
  mutations: {
    setArray(state,arr) {
      state.cryptArray = arr;
    }
  },
  actions: {
    async loadCoins ({ commit }) {
      let res = await axios.get('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD');
      commit('setArray', res.data.Data);
    }
  },
  getters: {
    getCriptArray: state => {
      return state.cryptArray.sort((a, b) => {
        if (a.RAW.USD.PRICE < b.RAW.USD.PRICE) {
          return 1;
        }
        if (a.RAW.USD.PRICE > b.RAW.USD.PRICE) {
          return -1;
        }
        return 0;
      });
    }
  }
})

export default store