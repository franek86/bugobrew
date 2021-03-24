<template>
  <div>
    <div class="container m-b-60 m-t-60">
      <div class="grid columns-m-2-1">
        <div class="p-r-20">
          <h1>My orders</h1>
          <div v-if="!userOrder.length">
            <div v-for="order in userOrder" :key="order.id">
              <div class="orders m-t-20 m-b-20">
                <div class="orders--info">
                  Order Number: <span>{{ order.orderNumber }}</span>
                </div>
                <div class="orders--info">
                  Delivery address:
                  <span
                    >{{ order.address }} , {{ order.postalCode }} ,
                    {{ order.city }}</span
                  >
                </div>

                <div class="orders--info">
                  Total price:
                  <span>{{ order.amount }} </span>
                </div>

                <div v-for="orderItems in order.products" :key="orderItems.id">
                  <div
                    class="orders__item flex flex--col text--center flex--center m-b-30 m-t-30"
                  >
                    <div
                      class="orders__item--img"
                      v-if="orderItems.Single_image"
                    >
                      <div class="product--img">
                        <img
                          :src="`http://localhost:1337${orderItems.Single_image.formats.large.url}`"
                          alt=""
                        />
                      </div>
                    </div>

                    <p>{{ orderItems.Title }}</p>
                    <p class="bold">{{ orderItems.Regular_price }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div else>
            <h1>No orders for now.</h1>
          </div>
        </div>

        <div class="p-l-20">
          <h1>My profile</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  middleware: "auth-guard",
  data() {
    return {
      userOrder: [],
    };
  },
  computed: {
    ...mapGetters(["isUser", "isAuthenticated", "getUserId"]),
  },

  methods: {
    async getUserOrders() {
      try {
        let userId = this.getUserId;
        let token = localStorage.getItem("auth._token.local");

        let res = await axios.get(`http://localhost:1337/users/${userId}`, {
          headers: {
            Authorization: token,
          },
        });
        this.userOrder = res.data.orders;
      } catch (error) {
        console.log(error);
      }
    },
  },

  mounted() {
    this.getUserOrders();
  },
};
</script>

<style lang="scss" scope>
.orders {
  border: 1px solid $color-secondary;
  padding: $padding-16;
  box-shadow: $box-shadow;

  &--info {
    margin-bottom: $margin-16;
    font-weight: 700;
    span {
      color: $color-text;
      font-weight: 300;
    }
  }

  &__item {
    flex-wrap: wrap;
    width: 20%;
    &--img {
      width: 100%;
      height: 100%;
      border: 1px solid $color-secondary;
      padding: 0.8rem;
      border-radius: 7px;
    }
  }
}
</style>
