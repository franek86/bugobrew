<template>
  <div>
    <BaseBackdrop
      :backdropActive="getMiniCartOpen"
      @close-backdrop="closeBackdrop"
    />
    <div class="mini_cart" :class="getMiniCartOpen ? 'is--cart' : ''">
      <div
        v-if="getCart.length == 0"
        class="mini_cart__empty flex flex--center flex--col align--center"
      >
        <h2 class="m-b-30">Your cart is empty!</h2>
        <nuxt-link
          to="/products"
          class="link--primary"
          @click.native="closeMiniCart()"
        >
          Shop now
        </nuxt-link>
      </div>
      <div style="height:100%;" else>
        <div class="mini_cart__list m-b-30">
          <div v-for="item in getCart" :key="item.id">
            <div class="mini_cart__box grid m-b-10">
              <div class="mini_cart__img" v-if="item.Single_image">
                <img
                  :src="
                    `http://localhost:1337${item.Single_image.formats.large.url}`
                  "
                  alt=""
                />
              </div>
              <div class="mini_cart__content grid columns-2-1">
                <div class="flex flex--col flex--between">
                  <h1 class="f6">{{ item.Title }}</h1>
                  <div class="mini_cart__qty">
                    <span class="m-r-10">QTY:</span>
                    <button
                      class="btn--qty"
                      @click="increaseProductQty(item.id)"
                    >
                      <img src="~/assets/img/plus.svg" alt="Plus svg icon" />
                    </button>
                    <span class="m-l-5 m-r-5">{{ item.qty }}</span>
                    <button
                      class="btn--qty"
                      @click="decreaseProductQty(item.id)"
                    >
                      <img src="~/assets/img/minus.svg" alt="Minus svg icon" />
                    </button>
                  </div>
                </div>

                <div class="flex flex--col flex--between flex--end">
                  <button
                    @click="removeProductsFromCart(item)"
                    class="btn--qty"
                  >
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

        <div>
          <div class="total m-b-20 flex flex--between align--center">
            <span>Total:</span>
            <span class="f4">{{ getCartTotalPrice.toFixed(2) }}</span>
          </div>

          <div class="btn--primary">Checkout</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import BaseBackdrop from "../UI/BaseBackdrop.vue";
export default {
  components: { BaseBackdrop },
  computed: {
    ...mapGetters(["getMiniCartOpen", "getCart", "getCartTotalPrice"])
  },

  methods: {
    ...mapActions([
      "increaseProductQty",
      "decreaseProductQty",
      "removeProductsFromCart"
    ]),
    closeBackdrop() {
      this.$store.dispatch("toggleMiniCart");
    },
    closeMiniCart() {
      this.$store.dispatch("closeMiniCart");
    },

    itemTotalPrice(price, qty) {
      return (price * qty).toFixed(2);
    }
  }
};
</script>

<style lang="scss" scoped>
.mini_cart {
  height: calc(100% - 100px);
  width: 50%;
  background-color: $color-secondary;
  position: fixed;
  right: 0;
  padding: $padding-20;

  transition: transform 0.75s cubic-bezier(0.215, 0.61, 0.355, 1);
  transform: translate3d(calc(100% + 1px), 0, 0);

  &.is--cart {
    transform: translateZ(0);
  }

  &__empty {
    height: 100%;
  }

  &__list {
    height: calc(100% - 150px);
    overflow-x: scroll;
  }

  &__box {
    grid-template-columns: 100px 1fr;
    background-color: $color-white;
    padding: $padding-10;
    border-radius: $radius-small;
  }
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
