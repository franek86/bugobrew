<template>
  <div>
    <div class="grid column-1 columns-m-2 columns-l-3 blogs p-t-60 p-b-60">
      <article class="blogs__cart" v-for="blog in blogs" :key="blog.id">
        <nuxt-link :to="{ name: 'blogs-id', params: { id: blog.id } }">
          <div class="blogs__img m-b-20">
            <img :src="`http://localhost:1337${blog.Image.url}`" alt="" />
          </div>

          <div class="blogs__meta">
            <div class="blogs__meta_date">
              {{ blog.Date | moment("DD.MM.YYYY") }}
            </div>
            <div class="blogs__meta_author">By {{ blog.Author }}</div>
          </div>

          <div class="blogs__content">
            <h1>{{ blog.Title }}</h1>
            <p>{{ blog.Excerpt }}</p>
          </div>
        </nuxt-link>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blogs: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss">
.blogs {
  a {
    color: $color-black;

    &:hover {
      .blogs__img img {
        transform: scale(1.1);
      }
      .blogs__content h1 {
        color: $color-secondary;
      }
    }
  }

  &__cart {
    border-radius: 10px;
    box-shadow: 0 2px 15px rgba($color-black, 0.25);
  }

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
    padding-left: $padding-16;
    padding-right: $padding-16;

    &_date,
    &_author {
      flex: 1;
      font-size: 1em;
      color: $color-grey;
    }

    &_author {
      text-align: right;
    }
  }

  &__content {
    padding: $padding-16;
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
