<template>
  <div>
    <div class="container m-b-60 m-t-60">
      <div class="grid columns-m-2-1">
        <div class="profile__right">
          <h1>My orders</h1>
          <div class="flex flex--col width-70" v-if="!userOrder.length">
            <p class="f5 m-t-30 m-b-30">No orders for now.</p>
            <nuxt-link class="btn--primary" to="/products">
              Start shopping
            </nuxt-link>
          </div>
          <div else>
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
        </div>

        <div class="profile__left">
          <h1 class="m-b-30">My profile</h1>
          <form class="form">
            <input
              class="form__input"
              type="name"
              placeholder="Username"
              required
            />
            <input
              class="form__input"
              type="email"
              placeholder="Email"
              required
            />
            <input
              class="form__input"
              type="password"
              placeholder="Password"
              required
            />
            <input
              class="form__input"
              type="password"
              placeholder="Confirm password"
              required
            />
            <button class="btn--primary" @click.prevent="updateProfile()">
              Update
            </button>
          </form>
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

.profile__right {
  padding-right: 20%;
}

.profile__left {
  border-left: 1px solid $color-secondary;
  padding-left: 10%;
}
</style>
