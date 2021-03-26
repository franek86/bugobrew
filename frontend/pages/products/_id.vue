<template>
  <div>
    <div class="container">
      <div class="m-t-60 m-b-60">
        <div class="grid columns-1 columns-m-1-2">
          <div class="product">
            <nuxt-link to="/products" class="link--primary m-b-30"
              >Back to shop</nuxt-link
            >
            <div class="m-b-25">
              <h1 class="f5 text--dark m-b-20">{{ product.Title }}</h1>
              <h2 class="f4">{{ product.Regular_price }} &euro;</h2>
            </div>

            <div class="product__description white--space m-b-20">
              {{ product.Description }}
            </div>

            <!-- <div class="product__qty flex m-b-20">
              <p class="m-r-10">Quantity</p>
              <button class="btn--qty">
                -
              </button>
              <div class="product__qty_value">0</div>
              <button class="btn--qty">
                +
              </button>
            </div> -->

            <div class="product__action" @click="addToCart(product)">
              <button class="btn--primary">Add to cart</button>
            </div>
          </div>
          <div class="product">
            <div v-if="product.Single_image" class="product__img">
              <img
                :src="`http://localhost:1337${product.Single_image.formats.large.url}`"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState({ product: (state) => state.product.product }),
  },

  mounted() {
    this.fetchSingleProduct(this.$route.params.id);
  },

  methods: {
    ...mapActions("product", { fetchSingleProduct: "fetchSingleProduct" }),

    addToCart(product) {
      this.$store.dispatch("addProductToCart", product);
      this.$toasted.show(`You added ${product.Title} to cart!`, {
        theme: "bubble",
        duration: 2000,
        className: "custom--toasted",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.product {
  &__description {
    padding: $padding-16 0;
    border-top: 1px solid $color-grey;
    border-bottom: 1px solid $color-grey;
    font-size: 1.4rem;
    line-height: 1.5;
  }

  &__qty {
    align-items: center;
    font-weight: 700;
    &_value {
      padding: $padding-10;
    }
  }

  &__img {
    height: 500px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>
