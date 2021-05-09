<template>
  <article class="article">
    <div
      class="article__img m-b-20"
      v-if="blog.Image"
      :style="{
        backgroundImage: `url(http://localhost:1337${blog.Image.url})`,
      }"
    ></div>
    <div class="grid columns-1 columns-m-2-1 container">
      <div class="article__cart m-b-50">
        <div class="flex flex--between align--center">
          <p class="article__date">
            {{ blog.Date | moment("DD.MM.YYYY") }}
          </p>
          <a class="link--primary" @click="$router.go(-1)">Back</a>
        </div>

        <h1 class="f2 article__title m-b-20">{{ blog.Title }}</h1>
        <p class="article__author">{{ blog.Author }}</p>

        <div class="article__content white--space">
          {{ blog.Content }}
        </div>
      </div>

      <base-sidebar title="test">
        <template default> <p>from sidebar component with slot</p></template>
      </base-sidebar>
    </div>
  </article>
</template>

<script>
import { mapState, mapActions } from "vuex";
import BaseSidebar from "../../components/UI/BaseSidebar.vue";
export default {
  head() {
    return {
      title: this.blog.Title,
      meta: [
        { hid: "description", name: "description", content: this.blog.Title },
      ],
    };
  },
  components: { BaseSidebar },
  computed: {
    ...mapState({ blog: (state) => state.blog.blog }),
  },

  mounted() {
    this.getSingleBlog(this.$route.params.id);
  },

  methods: {
    ...mapActions("blog", { getSingleBlog: "getSingleBlog" }),
  },
};
</script>

<style lang="scss" scoped>
.article {
  &__img {
    background-repeat: no-repeat;
    height: 500px;
    background-attachment: fixed;
    background-position: 50% 50%;
    background-size: cover;
  }
  &__cart {
    text-align: left;
    background-color: $color-white;
    width: 100%;
    border-radius: 7px;
    border: 1px solid #e8e8e8;
    position: relative;
    box-shadow: $box-shadow;
    color: $color-black;
    padding: $padding-32;
    margin-top: -25rem;
  }
  &__content {
    line-height: 1.5;
  }
  &__date {
    color: $color-grey;
    margin-bottom: $margin-8;
  }
  &__author {
    color: $color-grey;
    margin-bottom: $margin-16;
  }
}
</style>
