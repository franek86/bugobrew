<template>
    <div class="home__hero h--vh">
        <div class="container">
             

                 <div class="blogs">
                    <article class="blogs__cart" v-for="latestPost in latestPosts" :key="latestPost.id">
                        <nuxt-link :to="{name:'blogs-id', params:{id: latestPost.id}}">
                        <div class="blogs__content">
                            <h1>{{latestPost.Title}}</h1>
                        <p>{{latestPost.Excerpt}}</p>
                        <p>{{latestPost.Date | filterDate}}</p>
                        <p>{{latestPost.Author}}</p>
                        </div>
                        
                        <div class="blogs__img">
                            <img :src="`http://localhost:1337${latestPost.Image.url}`" alt="" />
                        </div>
                        </nuxt-link>
                    </article>
            </div> 
          
        </div>
    </div>
</template>

<script>
export default {
    computed:{
        latestPosts(){
            return this.$store.getters.latestPosts
        }
    },
    mounted(){
    this.$store.dispatch('getBlogPosts');
  }
}
</script>

<style lang="scss">
    .home__hero{
        background-color: $color-third;
    }
</style>