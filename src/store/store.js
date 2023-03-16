import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const store = createStore({
  plugins: [createPersistedState()],
  state: {
    cart: []
  },
  mutations: {
    addToCart(state, item) {
      const cartItem = state.cart.find(i => i.id === item.id)
      if (cartItem) {
        cartItem.quantity++
      } else {
        state.cart.push({ ...item, quantity: 1 })
      }
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
    cartItemCount: state => {
      return state.cart.reduce((total, item) => total + item.quantity, 0)
    },
    cartTotalPrice: state => {
      return state.cart.reduce((total, item) => total + (item.quantity * parseFloat(item.price.replace('$', ''))), 0)
    },
  }
})

export default store;

