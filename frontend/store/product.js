import axios from "axios";
const baseURL = "http://localhost:1337";

export default {
  namespaced: true,
  state() {
    return {
      products: [],
      product: {},
    };
  },

  getters: {
    getAllProducts(state) {
      return state.products;
    },
  },

  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },

    SET_SINGLE_PRODUCT(state, product) {
      state.product = product;
    },
  },

  actions: {
    async fetchAllProducts({ commit, rootState }) {
      try {
        let res = await axios.get(`${baseURL}/products?_sort=id:DESC`, {
          params: { product_categories: rootState.selected.categories },
        });

        commit("SET_PRODUCTS", res.data);
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
