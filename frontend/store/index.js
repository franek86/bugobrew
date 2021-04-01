import axios from "axios";
const baseURL = "http://localhost:1337";

export const state = () => ({
  isNavOpen: false,
  isMiniCartOpen: false,

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

  EDIT_USER(state) {
    state.auth.user;
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

  async updateUserProfile({ commit, getters }, userData) {
    try {
      let userId = getters.getUserId;
      let token = localStorage.getItem("auth._token.local");

      await axios.put(`${baseURL}/users/${userId}`, userData, {
        headers: {
          Authorization: token
        }
      });
      commit("EDIT_USER", userData);
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
  }
};
