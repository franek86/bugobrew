<template>
  <div>
    <div class="blog__hero">
      <div class="container">
        <h1 class="scale--h1">Blog</h1>
      </div>
    </div>
    <div class="container">
      <BlogList :blogs="blogs" />
    </div>
  </div>
</template>

<script>
import BlogList from "@/components/BlogList";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    BlogList
  },

  computed: {
    /*posts(){
      return this.$store.state.posts
    }*/

    ...mapState(["blogs"])
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
.blog__hero {
  background-color: $color-primary;
  text-align: center;
}
</style>
