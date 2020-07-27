import axios from 'axios';
const baseURL = 'http://localhost:1337';

export const state = () => ({
    posts: [],
    post: {},
    isNavOpen: false
})



export const mutations = {
    SETBLOGPOSTS(state, posts) {
        state.posts = posts
    },

    SETSINGLEPOST(state,post){
        state.post = post
    },

    TOGGLENAV(state){
        state.isNavOpen = !state.isNavOpen
    }
}

export const actions = {

    async getBlogPosts({commit}){
        try{
            let res = await axios.get(`${baseURL}/blogs`);
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

    getNavOpen(context){
        context.commit('TOGGLENAV')
    }

}


