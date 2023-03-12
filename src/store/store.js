import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const store = createStore({
  plugins: [createPersistedState()],
  state: {
    cart: []
  },
  mutations: {
    addToCart(state, product) {
      state.cart.push(product)
    }
  },
  actions: {
    addToCart({ commit }, item) {
      commit('addToCart', item)
    }
  },
  getters: {
    cartCount: state => state.cart.length
  }
})

export default store;

