<template>
  <div>
    <TheHero text="Checkout" />

    <div class="container m-t-60 m-b-60">
      <div class="grid columns-2">
        <div class="order__form">
          <div class="progress flex flex--between m-b-20">
            <!-- <div class="progress__line" :style="{ width: progress }"></div> -->
            <div
              class="progress__step"
              :style="{ width: progress }"
              :class="{ current: index + 1 === activeStep }"
              v-for="(step, index) in steps"
              :key="index"
            >
              <div class="progress--numb flex flex--center align--center">
                {{ index + 1 }}
              </div>
            </div>
          </div>

          <checkoutStep1 v-if="activeStep === 1" />
          <checkoutStep2 v-if="activeStep === 2" />
          <checkoutStep3 v-if="activeStep === 3" />
          <!-- <form class="form" @submit.prevent="placeOrder">
            <div class="form__field">
              <input
                class="form__input"
                v-model="address"
                type="text"
                placeholder="13 boulevard francis"
                @blur="$v.address.$touch()"
              />
              <span class="form__label">Address</span>
              <div class="error--message" v-if="$v.address.$error">
                <p v-if="!$v.address.required">Address is required</p>
              </div>
            </div>
            <div class="form__field">
              <input
                v-model="city"
                class="form__input"
                type="text"
                placeholder="San francisco"
                @blur="$v.city.$touch()"
              />
              <span class="form__label">City</span>
              <div class="error--message" v-if="$v.city.$error">
                <p v-if="!$v.city.required">City is required</p>
              </div>
            </div>
            <div class="form__field">
              <input
                class="form__input"
                v-model="postalCode"
                type="text"
                placeholder="92000"
                @blur="$v.postalCode.$touch()"
              />
              <span class="form__label">Postal code</span>
              <div class="error--message" v-if="$v.postalCode.$error">
                <p v-if="!$v.postalCode.required">Postal code is required</p>
              </div>
            </div>

            <div class="m-t-20">
              <button class="btn--primary" name="button">Place order</button>
            </div>
          </form> -->
          <button class="btn--primary" v-if="!isFirstStep" @click="prevStep">
            Prev
          </button>
          <button class="btn--primary" v-if="!isLastStep" @click="nextStep">
            Next
          </button>
          <button class="btn--primary" v-else name="button">Place order</button>
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
                {{ itemTotalPrice(order.Regular_price, order.qty) }} &euro;
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
import checkoutStep1 from "@/components/checkout/checkoutStep1";
import checkoutStep2 from "@/components/checkout/checkoutStep2";
import checkoutStep3 from "@/components/checkout/checkoutStep3";
import { required } from "vuelidate/lib/validators";
import axios from "axios";

import { mapGetters } from "vuex";
export default {
  middleware: "auth-guard",
  components: {
    TheHero,
    checkoutStep1,
    checkoutStep2,
    checkoutStep3,
  },

  data() {
    return {
      uid: Date.now().toString(36) + Math.random().toString(36).substr(2),
      address: "",
      postalCode: "",
      city: "",

      complete: false,
      loading: false,

      activeStep: 1,

      steps: ["checkoutStep1", "checkoutStep2", "checkoutStep3"],
    };
  },
  validations: {
    address: {
      required,
    },
    postalCode: {
      required,
    },
    city: {
      required,
    },
  },

  computed: {
    ...mapGetters(["getUserId"]),
    ...mapGetters("cart", {
      getCart: "getCart",
      getCartTotalPrice: "getCartTotalPrice",
    }),

    stepsLength() {
      return this.steps.length;
    },

    isLastStep() {
      return this.activeStep === this.stepsLength;
    },

    isFirstStep() {
      return this.activeStep === 1;
    },

    progress() {
      return `${(100 / this.stepsLength) * this.activeStep}%`;
    },
  },

  methods: {
    itemTotalPrice(price, qty) {
      return (price * qty).toFixed(2);
    },

    nextStep() {
      this.activeStep++;
    },
    prevStep() {
      this.activeStep--;
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
        this.$router.push("user/orders");
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

.progress {
  height: 3rem;

  &__step {
    position: relative;
    > div {
      background-color: $color-primary;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      color: $color-white;

      &:before {
        content: "";
        height: 1px;
        width: 100%;
        position: absolute;
        top: 50%;
        left: 0;
        background-color: $color-primary;
        z-index: -1;
      }
    }

    &.current {
      ~ .progress__step > div {
        background-color: $color-secondary;
        color: $color-text;
      }

      ~ .progress__step > div {
        &:before {
          background-color: $color-secondary;
          color: $color-text;
        }
      }
    }
  }
}
</style>
