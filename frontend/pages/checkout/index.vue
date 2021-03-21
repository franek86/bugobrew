<template>
  <div>
    <TheHero text="Checkout" />

    <div class="container m-t-60 m-b-60">
      <a class="link--primary" @click="$router.go(-1)"> go back</a>
      <div class="grid columns-2">
        <div>
          <Cart />
        </div>

        <div class="m-t-60 m-b-60">
          <form @submit.stop.prevent="handleSubmit">
            <div>
              <label>Address</label>
              <input
                v-model="address"
                type="text"
                placeholder="13 boulevard francis"
              />
            </div>

            <div>
              <label>City</label>
              <input v-model="city" type="text" placeholder="San francisco" />
            </div>

            <div>
              <label>Postal code</label>
              <input v-model="postalCode" type="text" placeholder="92000" />
            </div>

            <div class="m-t-20">
              <button class="btn--primary" name="button">Place order</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheHero from "@/components/UI/TheHero";
import Cart from "@/components/cart/Cart";
import { mapGetters } from "vuex";
export default {
  middleware: "auth-guard",
  components: {
    TheHero,
    Cart,
  },
  data() {
    return {
      address: "",
      postalCode: "",
      city: "",
      complete: false,
      loading: false,
    };
  },

  computed: {
    ...mapGetters(["getCartTotalPrice"]),
  },
};
</script>

<style></style>
