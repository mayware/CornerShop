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
    },
    removeFromCart(state, index) {
      state.cart.splice(index, 1)
    }
  },
  actions: {
    addToCart({ commit }, item) {
      commit('addToCart', item)
    },
    removeFromCart({ commit }, index) {
      commit('removeFromCart', index)
    }
  },
  getters: {
    cartCount: state => state.cart.length
  }
})

export default store;

