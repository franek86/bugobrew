<template>
  <div>
    <TheHero text="Products" />

    <div class="container grid columns-1 columns-m-1-2 m-t-60 m-b-60">
      <base-sidebar title="Filter by">
        <template default>
          <div
            class="form_check"
            v-for="(category, index) in productCategories"
            :key="index"
          >
            <input
              class="form_check__input"
              type="checkbox"
              :value="category.id"
              :id="'category-' + index"
              v-model="selected"
            />
            <label
              class="form_check__label"
              style="color:black;"
              :for="'category-' + index"
            >
              {{ category.Category }}
            </label>
            <div class="form_check__custom"></div>
          </div>
        </template>
      </base-sidebar>

      <ProductList :products="products" />
    </div>
  </div>
</template>

<script>
import BaseSidebar from "@/components/UI/BaseSidebar";
import TheHero from "@/components/UI/TheHero";
import ProductList from "@/components/product/ProductList";

import { mapState, mapActions } from "vuex";

export default {
  components: { BaseSidebar, TheHero, ProductList },

  computed: {
    ...mapState(["productCategories", "products"]),
    selected: {
      get() {
        return this.$store.state.selected.categories;
      },
      set(value) {
        this.$store.commit("SET_SELECTED", value);
      }
    }
  },

  watch: {
    selected: {
      handler: function() {
        this.fetchAllProductsCategories();
        this.fetchAllProducts();
      },
      deep: true
    }
  },

  mounted() {
    this.fetchAllProductsCategories();
    this.fetchAllProducts();
  },

  methods: {
    ...mapActions(["fetchAllProductsCategories", "fetchAllProducts"])
  }
};
</script>

<style lang="scss"></style>
