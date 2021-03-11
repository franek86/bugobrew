<template>
  <div>
    <BaseLoader v-if="isLoading" />
    <div else>
      <div class="grid column-1 columns-m-2 columns-l-3 p-t-60 p-b-60">
        <article
          class="blog_cart relative m-b-40 has--transition img--zoom"
          v-for="blog in blogs"
          :key="blog.id"
        >
          <nuxt-link
            :to="{ name: 'blogs-id', params: { id: blog.id } }"
            class="cart--link"
          ></nuxt-link>
          <div class="blog_cart__img m-b-20">
            <img :src="`http://localhost:1337${blog.Image.url}`" alt="" />
          </div>

          <div class="p-l-15 p-r-15">
            <div class="blog_cart__meta m-b-15">
              <div class="blog_cart__date">
                {{ blog.Date | moment("DD.MM.YYYY") }}
              </div>
              <div class="blog_cart__author">{{ blog.Author }}</div>
            </div>

            <div class="blog_cart__content">
              <h1 class="f5 m-b-20">{{ blog.Title }}</h1>
              <p>{{ blog.Excerpt }}</p>
            </div>

            <div class="link--primary m-b-15">
              Read
            </div>
          </div>
        </article>
      </div>

      <pagination
        v-model="currentPage"
        :per-page="3"
        :records="pageCount"
        @paginate="myCallback"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import BaseLoader from "../UI/BaseLoader";

export default {
  components: { BaseLoader },
  props: {
    blogs: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      page: 1,
      pageCount: 5
    };
  },

  computed: {
    ...mapState(["isLoading"]),
    currentPage: {
      get() {
        return this.$store.state.currentPage;
      },
      set(value) {
        this.$store.commit("SET_CURRENT_PAGE", value);
      }
    }
  },

  methods: {
    myCallback() {
      this.$store.dispatch("getAllBlogs");
    }
  }
};
</script>

<style lang="scss">
.blog_cart {
  border-radius: 10px;
  box-shadow: $box-shadow;

  &__img {
    height: 200px;
    overflow: hidden;

    img {
      height: 100%;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      object-fit: cover;
      transition: transform 0.25s ease-in-out;
    }
  }

  &__meta {
    display: flex;
  }

  &__date,
  &__author {
    flex: 1;
    font-size: 1em;
    color: $color-grey;
  }

  &__author {
    text-align: right;
  }

  &__content {
    min-height: 200px;
    p {
      color: $color-third;
    }
  }
}

.category__lists {
  display: flex;
  justify-content: space-between;

  &_item {
    color: $color-primary;
  }
}
</style>
