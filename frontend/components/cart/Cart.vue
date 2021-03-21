<template>
  <div>
    <div v-for="item in getCart" :key="item.id">
      <div class="cart grid m-b-10 columns-2">
        <div class="cart__img" v-if="item.Single_image">
          <img
            :src="`http://localhost:1337${item.Single_image.formats.large.url}`"
            alt=""
          />
        </div>
        <div class="cart__content grid columns-2-1">
          <div class="">
            <h1 class="f6">{{ item.Title }}</h1>
            <div class="cart__qty">
              <span class="m-r-10">QTY:</span>
              <button class="btn--qty" @click="increaseProductQty(item.id)">
                <img src="~/assets/img/plus.svg" alt="Plus svg icon" />
              </button>
              <span class="m-l-5 m-r-5">{{ item.qty }}</span>
              <button class="btn--qty" @click="decreaseProductQty(item.id)">
                <img src="~/assets/img/minus.svg" alt="Minus svg icon" />
              </button>
            </div>
          </div>

          <div class="">
            <button @click="removeProductsFromCart(item)" class="btn--qty">
              <img src="~/assets/img/close.svg" alt="Close svg icon" />
            </button>

            <p class="f5">
              {{ itemTotalPrice(item.Regular_price, item.qty) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["getCart", "getCartTotalPrice"]),
  },

  methods: {
    ...mapActions(["increaseProductQty", "decreaseProductQty"]),
    itemTotalPrice(price, qty) {
      return (price * qty).toFixed(2);
    },
  },
};
</script>

<style lang="scss" scoped>
.cart {
  &__img {
    padding-bottom: 90%;
    position: relative;

    img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
}
</style>
