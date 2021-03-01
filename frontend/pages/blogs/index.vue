<template>
  <div>
    <TheHero text="Blog" />
    <div class="container">
      <BlogList :blogs="blogs" />
    </div>
  </div>
</template>

<script>
import BlogList from "@/components/BlogList";
import TheHero from "../../components/UI/TheHero";

import { mapState, mapActions } from "vuex";

export default {
  components: {
    BlogList,
    TheHero
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

<style lang="scss"></style>
