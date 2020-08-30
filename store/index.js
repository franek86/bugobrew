import axios from 'axios';
const baseURL = 'http://localhost:1337';

export const state = () => ({
    posts: [],
    post: {},
    postCategories: [],
    isNavOpen: false,
})

export const getters = {

    isAuthenticated(state) {
        return state.auth.loggedIn
      },
    
    loggedInUser(state) {
        return state.auth.user
    },

    getAllPosts: state => {
        return state.posts
    },
   
    getLatestPosts: state => {
      return state.posts.slice(0,2)
    },
    getPostCategories: state => {
        return state.postCategories
    },
    getFilteredPosts: state => {
        return state.filteredPosts
    }
}


export const mutations = {
    SET_POSTS(state, posts) {
        state.posts = posts
    },

    SET_SINGLE_POST(state,post){
        state.post = post
    },

    SET_POST_CATEGORIES(state,categories){
        state.postCategories = categories
    },

    TOGGLE_NAV(state){
        state.isNavOpen = !state.isNavOpen
    }
}

export const actions = {

    async getAllPosts({commit}){
        try{
            let res = await axios.get(`${baseURL}/blogs/?_sort=id:DESC`);
            commit('SET_POSTS', res.data);
        } catch(error){
            console.log(error);
        }
    },

    async getSinglePost({commit},params){
        try{
            let res = await axios.get(`${baseURL}/blogs/${params}`);
            
            commit('SET_SINGLE_POST', res.data);
        } catch(error){
            console.log(error);
        }
    },

    async getPostCategories({commit}){
        try{
            let res = await axios.get(`${baseURL}/blog-categories/`);
            commit('SET_POST_CATEGORIES', res.data);
            
        } catch(error){
            console.log(error);
        }
    },

    getNavOpen(context){
        context.commit('TOGGLE_NAV')
    },
    
}


