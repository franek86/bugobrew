<template>
  <div class="single__article container">
   
    <article class="single__article_box">
      <div class="single__article_img" v-if="post.Image">
          <img :src="`http://localhost:1337${post.Image.url}`" :alt="post.Image.alternativeText" />
      </div>
      <div class="single__article_heading">
        <h1>{{post.Title}}</h1>
        <p>{{post.Date}}</p>
        <p>{{post.Author}}</p>
      </div>
      <div class="single__article_content">
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
  .single__article_box{
    background: $color-secondary;

  }
</style>
