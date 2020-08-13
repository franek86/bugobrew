import axios from 'axios';
const baseURL = 'http://localhost:1337';

export const state = () => ({
    posts: [],
    post: {},
    blogCategories: [],
    isNavOpen: false,
})

export const getters = {
    latestPosts: state => {
      return state.posts.slice(0,2)
    }
}


export const mutations = {
    SETBLOGPOSTS(state, posts) {
        state.posts = posts
    },

    SETSINGLEPOST(state,post){
        state.post = post
    },

    SETBLOGCATEGORIES(state,categories){
        state.blogCategories = categories
    },

    TOGGLENAV(state){
        state.isNavOpen = !state.isNavOpen
    }
}

export const actions = {

    async getBlogPosts({commit}){
        try{
            let res = await axios.get(`${baseURL}/blogs/?_sort=id:DESC`);
            commit('SETBLOGPOSTS', res.data);
        } catch(error){
            console.log(error);
        }
    },

    async getSinglePost({commit},params){
        try{
            let res = await axios.get(`${baseURL}/blogs/${params}`);
            commit('SETSINGLEPOST', res.data);
        } catch(error){
            console.log(error);
        }
    },

    async getBlogCategories({commit}){
        try{
            let res = await axios.get(`${baseURL}/blog-categories/`);
            commit('SETBLOGCATEGORIES', res.data);
            
        } catch(error){
            console.log(error);
        }
    },



    getNavOpen(context){
        context.commit('TOGGLENAV')
    },
    
}


