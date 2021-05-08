<template>
  <div>
    <div class="container m-b-60 m-t-60">
      <div class="grid columns-m-1-3 columns-l-1-2">
        <base-sidebar>
          <template dafault>
            <ProfileNav />
          </template>
        </base-sidebar>
        <!-- <div class="my-orders__side">profile nav</div> -->
        <div class="my-orders__content">
          <h1>My orders</h1>
          <div class="flex flex--col width-70" v-if="!userOrder.length">
            <p class="f5 m-t-30 m-b-30">No orders for now.</p>
            <nuxt-link class="btn--primary" to="/products">
              Start shopping
            </nuxt-link>
          </div>
          <div else>
            <div
              v-for="order in userOrder"
              :key="order.id"
              class="order m-t-20 m-b-20"
            >
              <table class="order__table">
                <thead>
                  <tr>
                    <th>Order number</th>
                    <th>Order date</th>
                    <th>Order total</th>
                    <th>Order delivered</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{{ order.orderNumber }}</td>
                    <td>{{ order.created_at | moment("DD.MM.YYYY") }}</td>
                    <td>{{ order.amount }} &euro;</td>
                    <td v-if="order.isDelivered" style="color: #00bf7a">Yes</td>
                    <td v-else style="color: #ef5454">No</td>
                  </tr>
                </tbody>
              </table>
              <button
                class="btn--secondary m-t-10"
                @click="
                  contentVisible === order.id
                    ? (contentVisible = false)
                    : (contentVisible = order.id)
                "
              >
                Order Details
              </button>

              <div class="flex m-t-10" v-if="contentVisible === order.id">
                <div
                  v-for="orderItems in order.products"
                  :key="orderItems.id"
                  class="order__item"
                >
                  <div class="order__item_img">
                    <div class="product--img" v-if="orderItems.Single_image">
                      <img
                        :src="`http://localhost:1337${orderItems.Single_image.formats.large.url}`"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import BaseSidebar from "@/components/UI/BaseSidebar.vue";
import ProfileNav from "@/components/ProfileNav.vue";

export default {
  middleware: "auth-guard",
  components: {
    BaseSidebar,
    ProfileNav,
  },

  data() {
    return {
      contentVisible: false,
    };
  },

  computed: {
    ...mapGetters(["isUser", "isAuthenticated", "getUserId"]),
    ...mapGetters("order", { userOrder: "getOrders" }),
  },

  methods: {
    ...mapActions("order", { getUserOrders: "fetchUserOrders" }),
  },

  mounted() {
    this.getUserOrders();
  },
};
</script>

<style lang="scss" scoped>
.order {
  justify-content: space-between;
  border: 1px solid $color-secondary;
  padding: $padding-16;
  box-shadow: $box-shadow;

  &--info {
    margin-bottom: $margin-16;

    span {
      color: $color-text;
      font-weight: 300;
    }
  }

  &__table {
    width: 100%;

    th {
      text-transform: uppercase;
      color: $color-grey;
      padding: $padding-8 0;
      font-size: 1.3rem;
      letter-spacing: 1px;
      text-align: left;
    }

    td {
      color: $color-text;
      padding: $padding-8 0;
    }
  }

  &__item {
    &_img {
      width: 100px;
      margin-right: 5px;
      border: 1px solid $color-secondary;
      border-radius: $radius-midium;
    }
  }
}

.orders__side {
  border-left: 1px solid $color-secondary;
  padding-right: 10%;
}
</style>
