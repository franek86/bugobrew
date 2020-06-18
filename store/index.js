import axios from 'axios';
const baseURL = 'http://localhost:1337';

export const state = () => ({
    posts: []
})

export const mutations = {
    SETBLOGPOSTS(state, posts) {
        state.posts = posts
    }
}

export const actions = {

    async getBlogPosts({commit}){
        let res = await axios.get(`${baseURL}/blogs`);
        commit('SETBLOGPOSTS', res.data);
    }

}


