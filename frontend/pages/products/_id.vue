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

            <div class="product__description white--space">
              {{ product.Description }}
            </div>

            <div class="product__qty m-b-20"></div>

            <div class="product__action ">
              <button class="btn--primary">Add to cart</button>
            </div>
          </div>
          <div class="product">
            <div v-if="product.Single_image" class="product__img">
              <img
                :src="
                  `http://localhost:1337${product.Single_image.formats.large.url}`
                "
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
    ...mapState(["product"])
  },

  mounted() {
    this.fetchSingleProduct(this.$route.params.id);
  },

  methods: {
    ...mapActions(["fetchSingleProduct"])
  }
};
</script>

<style lang="scss" scoped>
.product {
  &__description {
    padding: $padding-16 0;
    border-top: 1px solid $color-grey;
    border-bottom: 1px solid $color-grey;
    font-size: 1.2rem;
    line-height: 1.5;
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
