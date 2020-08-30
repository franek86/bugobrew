<template>
  <div>

    <div class="blog__hero h--vh">
      <div class="container">
        <h1 class="scale--h1">Blog</h1>
      </div>
    </div>
  <div class="container">

    <BlogList :posts='posts'/>
  
  </div>
  </div>
</template>

<script>

import BlogList from '@/components/BlogList'


 export default {

  components: {
      BlogList,
      
  },

  computed:{
    posts(){
      return this.$store.state.posts
    }
   
    
  },

  mounted(){
    this.$store.dispatch('getAllPosts');
    
  }
 }



</script>


<style lang="scss">
  .blog__hero {
    background-color: $color-primary;
  }


</style>
