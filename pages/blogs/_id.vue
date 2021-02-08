<template>
  <article class="article">
    <div class="article__img" v-if="post.Image" :style="{ backgroundImage: `url(http://localhost:1337${post.Image.url})` }">
    
    </div>
    <div class="grid columns-1 columns-m-2-1 container">
    <div class="article__cart">

      
      <p class="article__cart_date">{{post.Date | moment("DD.MM.YYYY")}}</p>
      <h1 class="article__cart_title">{{post.Title}}</h1>
      <p class="article__cart_author">{{post.Author}}</p>
      
      <div class="article__cart_content">
        <p>{{post.Content}}</p>
      </div>
      
    </div>
    </div>
   
  </article>
</template>

<script>

import {mapState, mapActions} from 'vuex'
export default {
  
  computed:{
    /*post(){
      return this.$store.state.post;
    }*/

    ...mapState(['post'])
  },

  mounted(){
    this.getSinglePost(this.$route.params.id);
  },

  methods:{
    ...mapActions(['getSinglePost'])
  }
 }



</script>


<style lang="scss" scoped>
  .article{
    &__img{
        background-repeat: no-repeat;
        height: 500px;
        background-attachment: fixed;
        background-position: 50% 50%;
        background-size: cover;
      }
    &__cart{
      text-align: left;
      background-color: #ffffff;
      width: 100%;
      border-radius: 7px;
      border: 1px solid #e8e8e8;
      position: relative;
      box-shadow: 0px 5px 15px rgba(0,0,0,0.08);
      color:$color-black;
      padding: $padding-32;
      margin-top: -120px;

      &_title{

      }
      &_date{
        color: $color-grey;
        margin-bottom: $margin-8;
      }
      &_author{
        color: $color-grey;
        margin-bottom: $margin-16;
      }
    }
  }
</style>
