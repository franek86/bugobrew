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
    <section class="p-t-60 p-b-60">
      <div class="container">
        <h3 class="f3 m-b-75 text--center">Featured products</h3>
        <nuxt-link to="/products" class="m-b-30 link--primary"
          >Shop all products</nuxt-link
        >
        <ProductList :products="getFeaturedProducts" />
      </div>
    </section>

    <section class="bg--secondary p-t-60 p-b-60">
      <div class="container">
        <h3 class="f3 m-b-75 text--center">News</h3>

        <article
          class="news_cart grid columns-m-1-2 m-b-50 relative has--transition img--zoom"
          v-for="latestBlog in getLatestBlogs"
          :key="latestBlog.id"
        >
          <nuxt-link
            class="cart--link"
            :to="{ name: 'blogs-id', params: { id: latestBlog.id } }"
          ></nuxt-link>
          <div class="news_cart__img">
            <img :src="`http://localhost:1337${latestBlog.Image.url}`" alt="" />
          </div>

          <div class="news_cart__content">
            <h1 class="text--dark f3 m-b-10">{{ latestBlog.Title }}</h1>
            <div class="news_cart__date f6">
              {{ latestBlog.Date | moment("DD.MM.YYYY") }}
            </div>
            <p class="p-t-15">{{ latestBlog.Excerpt }}</p>

            <nuxt-link
              :to="{ name: 'blogs-id', params: { id: latestBlog.id } }"
              class="link--primary m-t-20"
            >
              Read more
            </nuxt-link>
          </div>
        </article>
      </div>
      <div class="flex flex--center">
        <nuxt-link to="/blogs" class="btn--primary"> All posts </nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
import AppSwiper from "@/components/AppSwiper";
import { mapGetters, mapActions } from "vuex";
import ProductList from "@/components/product/ProductList";

export default {
  components: {
    AppSwiper,
    ProductList,
  },

  computed: {
    ...mapGetters("blog", { getLatestBlogs: "getLatestBlogs" }),
    ...mapGetters("product", { getFeaturedProducts: "getFeaturedProducts" }),
  },

  mounted() {
    this.getAllBlogs();
    this.featuredProducts();
  },

  methods: {
    ...mapActions("blog", { getAllBlogs: "getAllBlogs" }),
    ...mapActions("product", { featuredProducts: "fetchAllProducts" }),
  },
};
</script>

<style lang="scss">
.news_cart {
  background-color: $color-white;
  border-radius: 20px;
  box-shadow: $box-shadow;
  transition: transform 0.4s ease-in-out;
  padding: $padding-10 0;

  &__img {
    position: relative;
    padding-bottom: 60%;
    margin: $margin-10;

    img {
      border-radius: 14px;
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

  &__content {
    align-content: center;
    margin: 1rem;
  }

  &__date {
    color: $color-grey;
  }
}
</style>
