<template>
    <div>
        <div class="grid column-1 columns-m-2 columns-l-3 blogs p-t-60 p-b-60">
            <article class="blogs__cart" v-for="post in posts" :key="post.id">
                <nuxt-link :to="{name:'blogs-id', params:{id: post.id}}">
                <div class="blogs__img m-b-20">
                    <img :src="`http://localhost:1337${post.Image.url}`" alt="" />
                </div>

                <div class="blogs__meta">
                    <div class="blogs__meta_date">{{post.Date | filterDate}}</div>
                    <div class="blogs__meta_author">By {{post.Author}}</div>
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

          &:hover{
              .blogs__img img{
                  transform: scale(1.1);
              }
              .blogs__content h1{
                  color: $color-secondary;
              }
          }
      }

      &__cart{
          padding: $padding-16;
          box-shadow: 0 2px 15px rgba($color-black, .25);
      }

      &__img{
          height: 300px;
          overflow: hidden;

          img{
              height: 100%;
              object-fit: cover;
              transition: transform .25s ease-in-out;
          }

      }

      &__meta{
          display: flex;

          &_date,
          &_author{
              flex: 1;
              font-size: 1.2rem;
              color: $color-third;
          }

          &_author{
              text-align: right;
          }
      }
      
  }
</style>