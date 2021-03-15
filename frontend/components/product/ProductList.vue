<template>
  <div class="product product grid columns-1 columns-m-2">
    <ProductCart
      v-for="product in products"
      :key="product.id"
      :id="product.id"
      :imgUrl="product.Single_image.url"
      :title="product.Title"
      :price="product.Regular_price"
      @add-product-to-cart="addProductToCart(product)"
    />
  </div>
</template>

<script>
import ProductCart from "./ProductCart";
import { mapActions } from "vuex";

export default {
  props: {
    products: {
      type: Array,
      default: () => []
    }
  },

  components: {
    ProductCart
  },

  methods: {
    ...mapActions(["addProductToCart"])
  }
};
</script>

<style lang="scss"></style>
