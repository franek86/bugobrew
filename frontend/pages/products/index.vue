<template>
  <div>
    <TheHero text="Products" />
    <div class="container grid columns-1 columns-m-1-2 m-t-60 m-b-60">
      <base-sidebar title="Filter by">
        <template default>
          <label
            class="form_check"
            v-for="(category, index) in productCategories"
            :key="index"
          >
            {{ category.Category }}
            <input
              class="form_check__input"
              type="checkbox"
              :value="category.id"
              :id="'category-' + index"
              v-model="selected"
            />

            <span class="form_check__custom"></span>
          </label>
        </template>
      </base-sidebar>

      <ProductList :products="getAllProducts" />
    </div>
  </div>
</template>

<script>
import BaseSidebar from "@/components/UI/BaseSidebar";
import TheHero from "@/components/UI/TheHero";
import ProductList from "@/components/product/ProductList";
import Cart from "@/components/cart/Cart";

import { mapState, mapActions, mapGetters } from "vuex";

export default {
  components: { BaseSidebar, TheHero, ProductList, Cart },

  computed: {
    ...mapState(["productCategories"]),
    ...mapGetters(["getAllProducts"]),
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
