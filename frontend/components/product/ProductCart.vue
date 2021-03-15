<template>
  <div>
    <article class="product_cart m-b-30 has--transition img--zoom">
      <nuxt-link :to="{ name: 'products-id', params: { id: id } }">
        <div class="product_cart__img m-b-20">
          <img :src="`http://localhost:1337${imgUrl}`" alt="" />
        </div>

        <h1 class="product_cart__title m-b-10">{{ title }}</h1>
        <div class="product_cart__price f5 m-b-20">{{ price }} &euro;</div>
      </nuxt-link>
      <div class="flex flex--between">
        <nuxt-link
          :to="{ name: 'products-id', params: { id: id } }"
          class="link--primary m-b-20"
        >
          View
        </nuxt-link>

        <div class="btn--qty" @click="addProductToCart()">
          <img src="~/assets/img/plus-min.svg" alt="Plus svg icon" />
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: ["id", "imgUrl", "title", "price"],
  methods: {
    addProductToCart() {
      this.$emit("add-product-to-cart");
    }
  }
};
</script>

<style lang="scss" scoped>
.product_cart {
  box-shadow: $box-shadow;
  border-radius: $radius-midium;
  cursor: pointer;
  padding: $padding-20;

  &__img {
    height: 320px;

    img {
      object-fit: contain;
      object-position: center;
      height: 100%;
    }
  }

  &__title {
    font-size: 1.6rem;
    color: $color-text;
    text-align: center;
    font-weight: normal;
  }

  &__price {
    color: $color-black;
    text-align: center;
  }
}
</style>
