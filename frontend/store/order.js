import axios from "axios";
const baseURL = "http://localhost:1337";

export default {
  namespaced: true,
  state() {
    return {
      orders: [],
    };
  },
  getters: {
    getOrders(state) {
      return state.orders;
    },
  },

  mutations: {
    SET_USER_ORDERS(state, orders) {
      state.orders = orders;
    },
  },

  actions: {
    async fetchUserOrders({ commit, rootGetters }) {
      try {
        let token = localStorage.getItem("auth._token.local");
        let userId = rootGetters.getUserId;

        let res = await axios.get(`${baseURL}/orders/`, {
          headers: {
            Authorization: token,
          },
        });

        let userOrder = res.data
          .sort((x1, x2) => {
            if (x1.created_at < x2.created_at) {
              return 1;
            } else {
              return -1;
            }
          })
          .filter((order) => order.user.id === userId);

        commit("SET_USER_ORDERS", userOrder);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
