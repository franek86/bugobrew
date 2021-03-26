<template>
  <div>
    <BaseBackdrop
      :backdropActive="getMiniCartOpen"
      @close-backdrop="closeBackdrop"
    />
    <div class="mini_cart" :class="getMiniCartOpen ? 'is--cart' : ''">
      <div
        v-if="!getCartLength"
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
      <div v-else style="height:100%;">
        <div class="mini_cart__list m-b-30">
          <div v-for="item in getCart" :key="item.id">
            <div class="mini_cart__box grid m-b-10">
              <div class="product--img" v-if="item.Single_image">
                <img
                  :src="
                    `http://localhost:1337${item.Single_image.formats.large.url}`
                  "
                  alt=""
                />
              </div>
              <div class="mini_cart__content grid columns-2-1">
                <div class="flex flex--col flex--between">
                  <h1 class="f5">{{ item.Title }}</h1>
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
                  <button @click="removeProduct(item)" class="btn--qty">
                    <img src="~/assets/img/close.svg" alt="Close svg icon" />
                  </button>

                  <p class="f5">
                    {{ itemTotalPrice(item.Regular_price, item.qty) }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="link--primary m-t-20" @click="clearCart()">
            clear cart
          </div>
        </div>

        <div>
          <div class="total m-b-20 flex flex--between align--center">
            <span>Total:</span>
            <span class="f4">{{ getCartTotalPrice.toFixed(2) }}</span>
          </div>

          <div class="btn--primary" @click="goToCheckout()">Checkout</div>
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
    ...mapGetters(["getMiniCartOpen", "isAuthenticated", "isUser"]),

    ...mapGetters("cart", {
      getCartLength: "getCartLength",
      getCart: "getCart",
      getCartTotalPrice: "getCartTotalPrice"
    })
  },

  methods: {
    ...mapActions("cart", {
      increaseProductQty: "increaseProductQty",
      decreaseProductQty: "decreaseProductQty"
    }),

    closeBackdrop() {
      this.$store.dispatch("toggleMiniCart");
    },
    closeMiniCart() {
      this.$store.dispatch("closeMiniCart");
    },

    removeProduct(item) {
      this.$store.dispatch("cart/removeProductsFromCart", item);
      this.$toasted.show("You removed product from cart!", {
        theme: "bubble",
        duration: 2000,
        className: "custom--toasted"
      });
    },

    itemTotalPrice(price, qty) {
      return (price * qty).toFixed(2);
    },

    goToCheckout() {
      this.$router.push("/checkout");

      this.$store.dispatch("closeMiniCart");
    },

    clearCart() {
      this.$store.commit("cart/CLEAR_CART");
      this.$toasted.show("You removed all products from cart!", {
        theme: "bubble",
        duration: 2000,
        className: "custom--toasted"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.mini_cart {
  height: 100vh;
  width: 100%;
  background-color: $color-secondary;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  top: 80px;
  padding: $padding-20;

  transition: transform 0.75s cubic-bezier(0.215, 0.61, 0.355, 1);
  transform: translate3d(calc(100% + 1px), 0, 0);

  @media (min-width: $breakpoint-tablet) {
    height: calc(100% - 80px);
    position: fixed;
    left: unset;
    width: 50%;
    top: unset;
  }

  &.is--cart {
    transform: translateZ(0);
  }

  &__empty {
    height: 100%;
  }

  &__list {
    overflow-x: scroll;

    @media (min-width: $breakpoint-tablet) {
      height: calc(100% - 150px);
    }
  }

  &__box {
    grid-template-columns: 100px 1fr;
    background-color: $color-white;
    padding: $padding-10;
    border-radius: $radius-small;
  }
}
</style>
