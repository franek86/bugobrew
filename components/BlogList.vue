<template>
    <div>
        <div class="blogs">
            <article class="blogs__cart" v-for="post in posts" :key="post.id">
                <nuxt-link :to="{name:'blogs-id', params:{id: post.id}}">
                <div class="blogs__content">
                    <h1>{{post.Title}}</h1>
                <p>{{post.Excerpt}}</p>
                <p>{{post.Date | filterDate}}</p>
                <p>{{post.Author}}</p>
                </div>
                
                <div class="blogs__img">
                    <img :src="`http://localhost:1337${post.Image.url}`" alt="" />
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
    display: flex;
    flex-wrap: wrap;

    &__cart{
      flex-basis: 300px;
      flex-grow: 1;
      flex-shrink: 1;
      margin: 1em;
    }
  }
</style>