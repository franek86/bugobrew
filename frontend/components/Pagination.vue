<template>
  <div>
    <nav>
      <ul class="pagination flex flex--center m-t-20 m-b-20">
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
          class="pagination__item"
          :class="[index + 1 == currentPage ? 'active' : '']"
        >
          {{ pagin }}
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

<style lang="scss" scoped>
.pagination {
  &__item {
    padding: 1rem;
    margin: 0 0.7rem;
    background-color: $color-primary;
    border: 1px solid $color-primary;
    border-radius: $radius-small;
    cursor: pointer;
    color: $color-white;

    &:hover,
    &.active {
      background-color: transparent;
      border: 1px solid $color-text;
      color: $color-text;
    }
  }
}
</style>
