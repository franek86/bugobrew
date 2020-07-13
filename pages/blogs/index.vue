<template>
  <div class="article container">
   
    <article class="article__box" v-for="post in posts" :key="post.id">
       <nuxt-link :to="{name:'blogs-id', params:{id: post.id}}">
      <div class="article__content">
        {{post.id}}
        <h1>{{post.Title}}</h1>
      <p>{{post.Excerpt}}</p>
      <p>{{post.Date}}</p>
      <p>{{post.Author}}</p>
      </div>
      
      <div class="article__img">
        <img :src="`http://localhost:1337${post.Image.url}`" alt="" />
      </div>
       </nuxt-link>
    </article>
   
  </div>
</template>

<script>


 export default {

  computed:{
    posts(){
      return this.$store.state.posts
    }
  },

  mounted(){
    this.$store.dispatch('getBlogPosts');
  }
 }



</script>


<style lang="scss" scoped>

</style>
