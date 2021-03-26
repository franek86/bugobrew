import axios from "axios";
const baseURL = "http://localhost:1337";

export default {
  namespaced: true,
  state() {
    return {
      blogs: [],
      blog: {},
    };
  },

  getters: {
    getAllBlogs(state) {
      return state.blogs;
    },

    getLatestBlogs(state) {
      return state.blogs.slice(0, 2);
    },
  },

  mutations: {
    SET_BLOGS(state, blogs) {
      state.blogs = blogs;
    },
    SET_SINGLE_BLOG(state, blog) {
      state.blog = blog;
    },
  },

  actions: {
    async getAllBlogs({ commit, rootState }) {
      try {
        commit("IS_LOADER", true, {
          root: true,
        });
        const start =
          rootState.currentPage === 0 ? 0 : (rootState.currentPage - 1) * 3;

        let res = await axios.get(
          `${baseURL}/blogs/?_sort=id:DESC&_limit=${rootState.pageSize}&_start=${start}`
        );
        let blogCount = await axios.get(`${baseURL}/blogs/count`);
        commit("SET_BLOGS", res.data);
        commit("SET_PAGE_COUNT", blogCount.data, {
          root: true,
        });
        commit("IS_LOADER", false, {
          root: true,
        });
      } catch (error) {
        console.log(error);
      }
    },

    async getSingleBlog({ commit }, params) {
      try {
        let res = await axios.get(`${baseURL}/blogs/${params}`);

        commit("SET_SINGLE_BLOG", res.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
