<template>
  <div class="product product grid columns-1 columns-m-2">
    <!-- <article
      class="product__cart"
      v-for="product in products"
      :key="product.id"
    >
      <nuxt-link :to="{ name: 'products-id', params: { id: product.id } }">
        <div class="product__img">
          <img
            :src="`http://localhost:1337${product.Single_image.url}`"
            alt=""
          />
        </div>
        <h3 class="product__title">{{ product.Title }}</h3>
        <div class="product__price">{{ product.Regular_price }}</div>
      </nuxt-link>
    </article> -->

    <ProductCart
      v-for="product in products"
      :key="product.id"
      :id="product.id"
      :imgUrl="product.Single_image.url"
      :title="product.Title"
      :price="product.Regular_price"
    />
  </div>
</template>

<script>
import ProductCart from "./ProductCart";

export default {
  props: {
    products: {
      type: Array,
      default: () => []
    }
  },

  components: {
    ProductCart
  }
};
</script>

<style lang="scss"></style>
