<template>
  <div class="article container">
   
    <article class="article__box">
      <div class="article__content">
        <div class="article__img" v-if="post.Image">
            <img :src="`http://localhost:1337${post.Image.url}`" :alt="post.Image.alternativeText" />
        </div>
      
        <h1>{{post.Title}}</h1>
        <p>{{post.Date}}</p>
        <p>{{post.Author}}</p>
        <p>{{post.Content}}</p>
      </div>
      
      
    </article>
   
  </div>
</template>

<script>


 export default {

 
   
  computed:{
    post(){
      return this.$store.state.post;
    }
  },

  mounted(){
    this.$store.dispatch('getSinglePost', this.$route.params.id);
  }
 }



</script>


<style lang="scss" scoped>
  .article__box{
    background: $color-secondary;

  }
</style>
