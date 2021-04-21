<template>
  <div>
    <div class="container m-b-60 m-t-60">
      <div class="grid columns-m-1-3">
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
              <div>
                <div class="order--info">
                  Order Number: <span>{{ order.orderNumber }}</span>
                </div>
                <div class="order--info">
                  Order from:
                  <span>{{ order.created_at | moment("DD.MM.YYYY") }}</span>
                </div>
                <div class="order--info">
                  Delivery address:
                  <span
                    >{{ order.address }} , {{ order.postalCode }} ,
                    {{ order.city }}</span
                  >
                </div>

                <div class="order--info">
                  Total price:
                  <span>{{ order.amount }} &euro;</span>
                </div>
              </div>

              <div class="flex">
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
  display: flex;
  justify-content: space-between;
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
    &_img {
      min-width: 130px;
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
