<template>
    <div>
        <section class="home__hero h--vh">
            <div class="container">
                <h2>Welcome</h2>
                <h1 class="scale--h1">Lorem</h1>
                <h1 class="scale--h1">Ipsum</h1>
            </div>
        </section>

        <section class="latest__blogs p-t-60 p-b-60">
            <div class="container">
                <h2 class="text--red line--red m-b-25">Latest Blog</h2>
                
                <div class="grid columns-1 columns-m-2 latest__blog_flex">
                    <article class="latest__blogs_cart" v-for="latestPost in latestPosts" :key="latestPost.id">
                        <nuxt-link :to="{name:'blogs-id', params:{id: latestPost.id}}" class="blog__link">
                            <div class="blog__overlay">
                                <div class="latest__blogs_content">
                                    <h1>{{latestPost.Title}}</h1>
                                </div>
                            </div>
                            
                            <div class="latest__blogs_img">
                                <img :src="`http://localhost:1337${latestPost.Image.url}`" alt="" />
                            </div>
                        </nuxt-link>
                    </article>
                </div>
            </div>

        </section>

    </div>

</template>

<script>
export default {
    computed:{
        latestPosts(){
            return this.$store.getters.getLatestPosts
        }
    },
    mounted(){
    this.$store.dispatch('getAllPosts');
  }
}
</script>

<style lang="scss">
    .home__hero{
        background-color: $color-primary;
    }

  
</style>