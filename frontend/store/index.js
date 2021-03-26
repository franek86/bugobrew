import axios from "axios";
const baseURL = "http://localhost:1337";

export const state = () => ({
  isNavOpen: false,
  isMiniCartOpen: false,

  cart: [],
  total: 0,
  qty: 0,

  productCategories: [],

  selected: {
    categories: []
  },

  isLoading: false,

  currentPage: 1,
  pageCount: 0,
  pageSize: 3
});

export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn;
  },

  isUser(state) {
    return state.auth.user;
  },

  getUserId(state) {
    return state.auth.user.id;
  },

  getMiniCartOpen(state) {
    return state.isMiniCartOpen;
  },

  getMiniCartOpen(state) {
    return state.isMiniCartOpen;
  },

  getCart(state) {
    return state.cart;
  },

  getCartTotalPrice(state) {
    let total = 0;
    state.cart.map(item => {
      total += item.Regular_price * item.qty;
    });
    return total;
  }
};

export const mutations = {
  SET_PAGE_COUNT(state, count) {
    state.pageCount = Math.ceil(Number(count) / state.pageSize);
  },

  SET_CURRENT_PAGE(state, page) {
    state.currentPage = page;
  },

  SET_PRODUCTS_CATEGORIES(state, payload) {
    state.productCategories = payload;
  },

  // SET_PRODUCTS(state, products) {
  //   state.products = products;
  // },

  // SET_SINGLE_PRODUCT(state, product) {
  //   state.product = product;
  // },

  SET_SELECTED(state, value) {
    state.selected.categories = value;
  },

  TOGGLE_NAV(state) {
    state.isNavOpen = !state.isNavOpen;
  },

  TOGGLE_MINI_CART(state) {
    state.isMiniCartOpen = !state.isMiniCartOpen;
  },

  CLOSE_MINI_CART(state) {
    state.isMiniCartOpen = false;
  },

  IS_LOADER(state, payload) {
    state.isLoading = payload;
  },

  ADD_PRODUCT_TO_CART(state, product) {
    const addedProduct = state.cart.find(item => item.id === product.id);

    if (addedProduct) {
      addedProduct.qty++;
    } else {
      state.cart.push({ ...product, qty: 1 });
    }
  },

  INCREASE_PRODUCT_QTY(state, id) {
    const currentProduct = state.cart.find(prod => prod.id === id);

    currentProduct.qty++;
  },

  DECREASE_PRODUCT_QTY(state, id) {
    const currentProduct = state.cart.find(prod => prod.id === id);

    if (currentProduct.qty > 1) {
      currentProduct.qty--;
    } else {
      state.cart = state.cart.filter(product => product.id !== id);
    }
  },

  REMOVE_PRODUCTS_FROM_CART(state, product) {
    state.total -= product.qty;
    let indexOf = state.cart.indexOf(product);
    state.cart.splice(indexOf, 1);
  },

  CLEAR_CART(state) {
    state.cart = [];
  }
};

export const actions = {
  async fetchAllProductsCategories({ commit }) {
    try {
      let res = await axios.get(`${baseURL}/product-categories`);
      commit("SET_PRODUCTS_CATEGORIES", res.data);
    } catch (error) {
      console.log(error);
    }
  },

  getNavOpen({ commit }) {
    commit("TOGGLE_NAV");
  },

  toggleMiniCart({ commit }, payload) {
    commit("TOGGLE_MINI_CART", payload);
  },

  closeMiniCart({ commit }) {
    commit("CLOSE_MINI_CART");
  },

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
  }
};
