<template>
  <div>
    <TheHero text="Checkout" />

    <div class="container m-t-60 m-b-60">
      <div class="grid columns-2">
        <div class="order__form">
          <form class="form" @submit.prevent="placeOrder">
            <label class="form__label">Address</label>
            <input
              class="form__input"
              v-model="address"
              type="text"
              placeholder="13 boulevard francis"
            />

            <label class="form__label">City</label>
            <input
              v-model="city"
              class="form__input"
              type="text"
              placeholder="San francisco"
            />

            <label class="form__label">Postal code</label>
            <input
              class="form__input"
              v-model="postalCode"
              type="text"
              placeholder="92000"
            />

            <div class="m-t-20">
              <button class="btn--primary" name="button">Place order</button>
            </div>
          </form>
        </div>

        <div class="order">
          <p class="m-b-40 f6">Order summary</p>
          <div class="order__item" v-for="order in getCart" :key="order.id">
            <div class="order__img_wrap" v-if="order.Single_image">
              <img
                class="order__img"
                :src="`http://localhost:1337${order.Single_image.formats.large.url}`"
                alt=""
              />
              <div class="order__qty flex flex--center align--center">
                <span class="m-l-5 m-r-5">{{ order.qty }}</span>
              </div>
            </div>

            <h1 class="f6">{{ order.Title }}</h1>

            <div>
              <p class="f5">
                {{ itemTotalPrice(order.Regular_price, order.qty) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheHero from "@/components/UI/TheHero";
import axios from "axios";

import { mapGetters } from "vuex";
export default {
  middleware: "auth-guard",
  components: {
    TheHero,
  },

  data() {
    return {
      uid: Date.now().toString(36) + Math.random().toString(36).substr(2),
      address: "",
      postalCode: "",
      city: "",

      complete: false,
      loading: false,
    };
  },

  computed: {
    ...mapGetters(["getUserId"]),
    ...mapGetters("cart", {
      getCart: "getCart",
      getCartTotalPrice: "getCartTotalPrice",
    }),
  },

  methods: {
    itemTotalPrice(price, qty) {
      return (price * qty).toFixed(2);
    },

    async placeOrder() {
      try {
        const orders = {
          orderNumber: this.uid,
          address: this.address,
          postalCode: this.postalCode,
          city: this.city,
          products: this.getCart,
          amount: this.getCartTotalPrice,
          user: this.getUserId,
        };

        let token = localStorage.getItem("auth._token.local");

        await axios.post("http://localhost:1337/orders", orders, {
          headers: {
            Authorization: token,
          },
        });
        this.$router.push("/profile");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss">
.order__form {
  padding-right: 6%;
  border-right: 1px solid $color-secondary;
}

.order {
  &__item {
    border-bottom: 1px solid $color-grey;
    display: grid;
    grid-template-columns: 100px 1fr 1fr;
    align-items: center;
    text-align: center;
    margin-bottom: $margin-16;
    padding: $padding-16;
  }

  &__img_wrap {
    position: relative;
    border: 1px solid $color-secondary;
    padding: $padding-8;
    border-radius: $radius-small;
  }
  &__qty {
    position: absolute;
    top: -10px;
    right: -5px;
    background-color: $color-third;

    height: 2.2rem;
    width: 2.2rem;
    border-radius: 50%;
    font-size: 1.3rem;
    font-weight: 300;
    span {
      color: $color-white;
    }
  }
  &__img {
    width: 80px;
    height: 80px;
    object-fit: contain;
  }
}
</style>
