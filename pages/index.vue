<template>
    <div>
        <section class="home__hero h--vh">
            <div class="container">
                <div class="grid columns-2">
                    <h1 class="title bold">Welcome lorem ipsum</h1>
                    <div></div>
                </div>
                
            </div>
        </section>

        <section class="latest__blogs bg--secondary p-t-60 p-b-60">
            <div class="container">
                <h2 class="title m-b-25">Latest Blog</h2>
                
                <div class="grid columns-1 columns-l-3">
                    <article class="latest__blogs_cart" v-for="latestPost in getLatestPosts" :key="latestPost.id">
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

        <section></section>

    </div>

</template>

<script>

import AppSwiper from "@/components/AppSwiper"
import {mapGetters, mapActions} from 'vuex'

export default {
    components:{
        AppSwiper
    },
   
    computed:{
        /*latestPosts(){
            return this.$store.getters.getAllPosts.slice(0,2);
        }*/
        ...mapGetters(['getLatestPosts'])
    },

    mounted(){
    this.getAllPosts()
    },

    methods:{
        ...mapActions(['getAllPosts'])
    }
}
</script>

<style lang="scss">
    /*BIG TABELS VIEW min width 1024 px*/
@media (min-width: $breakpoint-desktop){
    .latest__blogs_cart:first-child{
        grid-column: 1/3;
        grid-row: 1/3;
    }
}
</style>