<template>
  <div>
    <article class="product_cart m-b-30">
      <nuxt-link :to="{ name: 'products-id', params: { id: id } }">
        <div class="product_cart__img m-b-20">
          <img :src="`http://localhost:1337${imgUrl}`" alt="" />
        </div>

        <h1 class="product_cart__title m-b-10">{{ title }}</h1>
        <div class="product_cart__price f5 m-b-20">{{ price }} kn</div>
      </nuxt-link>
      <div>
        <div class="btn--primary m-b-20">
          Add to cart
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: ["id", "imgUrl", "title", "price"]
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
    // font-weight: 700;
    text-align: center;
  }
}
</style>
