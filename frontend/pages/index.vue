<template>
  <div>
    <section class="home__hero h--vh">
      <div class="container">
        <div class="grid columns-2">
          <h1 class="f1 bold">
            Welcome <span class="underline">lorem</span> ipsum
          </h1>
          <div></div>
        </div>
      </div>
    </section>

    <section class="latest__blogs bg--secondary p-t-60 p-b-60">
      <div class="container">
        <h2 class="f2 m-b-75">Latest Blog</h2>

        <article
          class="latest__blogs_cart grid columns-m-2 m-b-50"
          v-for="latestBlog in getLatestBlogs"
          :key="latestBlog.id"
        >
          <nuxt-link :to="{ name: 'blogs-id', params: { id: latestBlog.id } }">
            <div class="m-b-20">
              <h1 class="text--dark f4 m-b-10">{{ latestBlog.Title }}</h1>

              <div class="latest__blogs_img">
                <img
                  :src="`http://localhost:1337${latestBlog.Image.url}`"
                  alt=""
                />
              </div>
            </div>
          </nuxt-link>

          <div class="latest__blogs_content">
            <div class="latest__blogs_date f3">
              {{ latestBlog.Date | moment("DD.MM.YYYY") }}
            </div>
            <p class="p-t-15">{{ latestBlog.Excerpt }}</p>

            <nuxt-link
              :to="{ name: 'blogs-id', params: { id: latestBlog.id } }"
            >
              <div class="slide-button m-t-30">
                <div class="slide-button__text">Read More</div>
              </div>
            </nuxt-link>
          </div>
        </article>
      </div>
    </section>

    <section></section>
  </div>
</template>

<script>
import AppSwiper from "@/components/AppSwiper";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    AppSwiper
  },

  computed: {
    /*latestPosts(){
            return this.$store.getters.getAllPosts.slice(0,2);
        }*/
    ...mapGetters(["getLatestBlogs"])
  },

  mounted() {
    this.getAllBlogs();
  },

  methods: {
    ...mapActions(["getAllBlogs"])
  }
};
</script>

<style lang="scss">
.latest__blogs_img {
  position: relative;
  padding-bottom: 60%;

  img {
    position: absolute;
    top: 0;
    border: 0;
    right: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center center;
  }
}

.latest__blogs_content {
  display: grid;
  align-content: center;
}

.latest__blogs_date {
  color: $color-grey;
}
</style>
