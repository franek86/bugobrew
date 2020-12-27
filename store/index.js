import axios from "axios";
const baseURL = "http://localhost:1337";

export const state = () => ({
  posts: [],
  post: {},
  isNavOpen: false,
  products: [],
  productCategories: [],
  selected: {
    categories: []
  }
});

export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn;
  },

  loggedInUser(state) {
    return state.auth.user;
  },

  getAllPosts: state => {
    return state.posts;
  },

  getLatestPosts: state => {
    return state.posts.slice(0, 2);
  }
};

export const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts;
  },

  SET_SINGLE_POST(state, post) {
    state.post = post;
  },

  SET_PRODUCTS_CATEGORIES(state, payload) {
    state.productCategories = payload;
  },

  SET_PRODUCTS(state, products) {
    state.products = products;
  },

  SET_SELECTED(state, value) {
    state.selected.categories = value;
  },

  TOGGLE_NAV(state) {
    state.isNavOpen = !state.isNavOpen;
  }
};

export const actions = {
  async getAllPosts({ commit }) {
    try {
      let res = await axios.get(`${baseURL}/blogs/?_sort=id:DESC`);
      commit("SET_POSTS", res.data);
    } catch (error) {
      console.log(error);
    }
  },

  async getSinglePost({ commit }, params) {
    try {
      let res = await axios.get(`${baseURL}/blogs/${params}`);

      commit("SET_SINGLE_POST", res.data);
    } catch (error) {
      console.log(error);
    }
  },

  async fetchAllProductsCategories({ commit }) {
    try {
      let res = await axios.get(`${baseURL}/product-categories`);
      commit("SET_PRODUCTS_CATEGORIES", res.data);
    } catch (error) {
      console.log(error);
    }
  },

  async fetchAllProducts({ commit, state }) {
    try {
      let res = await axios.get(`${baseURL}/products`, {
        params: { product_categories: state.selected.categories }
      });

      commit("SET_PRODUCTS", res.data);
    } catch (error) {
      console.log(error);
    }
  },

  getNavOpen(context) {
    context.commit("TOGGLE_NAV");
  }
};
