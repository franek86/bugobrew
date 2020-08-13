<template>
  <div>

    <div class="blog__hero h--vh">
      <div class="container">
        <h1 class="scale--h1">Blog</h1>
      </div>
    </div>
  <div class="container">

    <BlogCategories :blogCategoriesList="blogCategoriesList"/>
    <BlogList :posts='posts'/>

    
  </div>
  </div>
</template>

<script>

import BlogList from '@/components/BlogList'
import BlogCategories from '@/components/BlogCategories'

 export default {

  components: {
      BlogList,
      BlogCategories
  },

  computed:{
    posts(){
      return this.$store.state.posts
    },
    blogCategoriesList(){
      return this.$store.state.blogCategories
    },
    
  },

  mounted(){
    this.$store.dispatch('getBlogPosts');
    this.$store.dispatch('getBlogCategories');
  }
 }



</script>


<style lang="scss">
  .blog__hero {
    background-color: $color-primary;
  }


</style>
