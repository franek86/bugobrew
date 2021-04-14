import axios from "axios";
const baseURL = "http://localhost:1337";

export default {
  namespaced: true,
  state() {
    return {
      products: [],
      product: {},
      featuredProd: [],
    };
  },

  getters: {
    getAllProducts(state) {
      return state.products;
    },
    getFeaturedProducts(state) {
      return state.featuredProd;
    },
  },

  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },

    SET_SINGLE_PRODUCT(state, product) {
      state.product = product;
    },

    SET_FEATURED_PRODUCTS(state, featured) {
      state.featuredProd = featured;
    },
  },

  actions: {
    async fetchAllProducts({ commit, rootState }) {
      try {
        let res = await axios.get(`${baseURL}/products?_sort=id:DESC`, {
          params: { product_categories: rootState.selected.categories },
        });

        let featured = res.data.filter((prod) =>
          prod.product_categories.some((cat) => cat.Category === "Featured")
        );

        commit("SET_PRODUCTS", res.data);
        commit("SET_FEATURED_PRODUCTS", featured);
      } catch (error) {
        console.log(error);
      }
    },

    async fetchSingleProduct({ commit }, params) {
      try {
        let res = await axios.get(`${baseURL}/products/${params}`);
        commit("SET_SINGLE_PRODUCT", res.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
