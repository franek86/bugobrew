<template>
  <div class="container">
    
    <div v-for="post in posts" :key="post.id">
<h1>{{post.Title}}</h1>
<p>{{post.Content}}</p>
<p>{{post.Date}}</p>
<p>{{post.Author}}</p>
<img :src="'http://localhost:1337' + post.Image.url" alt="" />

    </div>
  </div>
</template>

<script>
import axios from 'axios'

 export default {
   fetch({store}){
     return axios.get('http://localhost:1337/blogs').then((res)=> {
       store.commit('frontPagePosts', res.data)
       console.log(res.data);
     }) . catch((error)=> {
       console.log(error)
     })
   },

  computed:{
    posts(){
      return this.$store.state.posts
    }
  }
 }



</script>


<style lang="scss">
img{
  width: 350px;
  height: 350px;
  object-fit: cover;
}
</style>
