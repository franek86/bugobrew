<template>
  <div>
    <TheHero text="Blog" />
    <div class="container">
      <BlogList :blogs="blogs" />
    </div>
  </div>
</template>

<script>
import BlogList from "@/components/blog/BlogList";
import TheHero from "@/components/UI/TheHero";

import { mapState, mapActions } from "vuex";

export default {
  components: {
    BlogList,
    TheHero,
  },

  computed: {
    ...mapState({ blogs: (state) => state.blog.blogs }),
  },

  mounted() {
    this.getAllBlogs();
  },

  methods: {
    ...mapActions("blog", { getAllBlogs: "getAllBlogs" }),
  },
};
</script>

<style lang="scss"></style>
