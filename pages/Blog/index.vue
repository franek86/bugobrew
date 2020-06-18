<template>
  <div class="article container">
    
    <article class="article__box" v-for="post in posts" :key="post.id">
      <div class="article__content">
        <h1>{{post.Title}}</h1>
      <p>{{post.Content}}</p>
      <p>{{post.Date}}</p>
      <p>{{post.Author}}</p>
      </div>
      
      <div class="article__img">
        <img :src="'http://localhost:1337' + post.Image.url" alt="" />
      </div>
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
