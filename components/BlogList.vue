<template>
    <div>
        <div class="grid column-1 columns-m-2 columns-xl-3 blogs">
            <article class="blogs__cart" v-for="post in posts" :key="post.id">
                <nuxt-link :to="{name:'blogs-id', params:{id: post.id}}">
                <div class="blogs__img">
                    <img :src="`http://localhost:1337${post.Image.url}`" alt="" />
                </div>

                <div class="blogs__author_date">
                    <p>{{post.Date | filterDate}}</p>
                    <p>{{post.Author}}</p>
                </div>

                <div class="blogs__content">
                    <h1>{{post.Title}}</h1>
                    <p>{{post.Excerpt}}</p>
                </div>
                
               
                </nuxt-link>
            </article>
    </div> 
    </div>
</template>

<script>


export default {

    props:{
        posts:{
            type: Array,
            default: () => []
        }
    }
    
}
</script>

<style lang="scss">
  .blogs{
      a{
          color: $color-black;
      }
      
  }
</style>