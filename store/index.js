import axios from 'axios';
const baseURL = 'http://localhost:1337';

export const state = () => ({
    posts: [],
    post: {},
})



export const mutations = {
    SETBLOGPOSTS(state, posts) {
        state.posts = posts
    },

    SETSINGLEPOST(state,post){
        state.post = post
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
    }

}


