<template>
  <div class="article container">
   
    <article class="article__box">
      <div class="article__content">
        <img :src="'http://localhost:1337' + post.Image.url" alt="" />
        <h1>{{post.Title}}</h1>
      <p>{{post.Date}}</p>
      <p>{{post.Author}}</p>
      <p>{{post.Content}}</p>
      </div>
      
      <div class="article__img">
       
      </div>
    </article>
   
  </div>
</template>

<script>


 export default {

  // async asyncData(context){
  //       try{
  //           let res = await context.$axios.get(`http://localhost:1337/blogs/${context.params.slug}`)
  //           let getSinglePost = res.data;
  //           return {
  //             getSinglePost
  //           }
  //           console.log(res);
  //       } catch(error){
  //           console.log(error);
  //       }
  //   },

   
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

</style>
