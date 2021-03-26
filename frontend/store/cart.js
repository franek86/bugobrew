export default {
  namespaced: true,
  state() {
    return {
      cart: [],
      total: 0,
      qty: 0,
    };
  },
  getters: {
    getCart(state) {
      return state.cart;
    },

    getCartLength(state) {
      return state.cart.length;
    },

    getCartTotalPrice(state) {
      let total = 0;
      state.cart.map((item) => {
        total += item.Regular_price * item.qty;
      });
      return total;
    },
  },
  mutations: {
    ADD_PRODUCT_TO_CART(state, product) {
      const addedProduct = state.cart.find((item) => item.id === product.id);

      if (addedProduct) {
        addedProduct.qty++;
      } else {
        state.cart.push({ ...product, qty: 1 });
      }
    },

    INCREASE_PRODUCT_QTY(state, id) {
      const currentProduct = state.cart.find((prod) => prod.id === id);

      currentProduct.qty++;
    },

    DECREASE_PRODUCT_QTY(state, id) {
      const currentProduct = state.cart.find((prod) => prod.id === id);

      if (currentProduct.qty > 1) {
        currentProduct.qty--;
      } else {
        state.cart = state.cart.filter((product) => product.id !== id);
      }
    },

    REMOVE_PRODUCTS_FROM_CART(state, product) {
      state.total -= product.qty;
      let indexOf = state.cart.indexOf(product);
      state.cart.splice(indexOf, 1);
    },

    CLEAR_CART(state) {
      state.cart = [];
    },
  },
  actions: {
    addProductToCart({ commit }, product) {
      commit("ADD_PRODUCT_TO_CART", product);
    },

    increaseProductQty({ commit }, id) {
      commit("INCREASE_PRODUCT_QTY", id);
    },
    decreaseProductQty({ commit }, id) {
      commit("DECREASE_PRODUCT_QTY", id);
    },

    removeProductsFromCart({ commit }, product) {
      commit("REMOVE_PRODUCTS_FROM_CART", product);
    },
  },
};
