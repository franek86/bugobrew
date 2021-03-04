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

        <div class="product_cart__add">
          <img src="~/assets/img/plus-min.svg" alt="Plus svg icon" />
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

  &__add {
    width: 2.5rem;
    height: 2.5rem;
    padding: 5px;
    border: 1px solid $color-black;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: $color-secondary;
      border: 1px solid $color-secondary;
    }
  }
}
</style>
