<template>
  <div>
    <nav>
      <ul class="pagination">
        <li
          v-if="currentPage > 1"
          class="pagination__item"
          @click="getPage(currentPage - 1)"
        >
          Prevoius
        </li>

        <li
          v-for="(pagin, index) in pageCount"
          :key="index"
          @click="getPage(pagin)"
          class="pagnation__item"
        >
          <button>{{ pagin }}</button>
        </li>
        <li
          v-if="currentPage != pageCount"
          class="pagination__item"
          @click="getPage(currentPage + 1)"
        >
          Next
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["pageCount", "currentPage"])
  },
  methods: {
    ...mapActions(["getAllBlogs"]),
    ...mapMutations(["SET_CURRENT_PAGE"]),

    getPage(page) {
      this.SET_CURRENT_PAGE(page);
      this.getAllBlogs(page);
    }
  }
};
</script>

<style lang="scss" scoped></style>
