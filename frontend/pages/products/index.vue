<template>
  <div>
    <TheHero text="Products" />

    <div class="container grid columns-1 columns-m-1-2 m-t-60 m-b-60">
      <base-sidebar title="Filter by">
        <template default>
          <div
            class="form_check"
            v-for="(category, index) in productCategories"
            :key="index"
          >
            <input
              class="form_check__input"
              type="checkbox"
              :value="category.id"
              :id="'category-' + index"
              v-model="selected"
            />
            <label
              class="form_check__label"
              style="color:black;"
              :for="'category-' + index"
            >
              {{ category.Category }}
            </label>
            <div class="form_check__custom"></div>
          </div>
        </template>
      </base-sidebar>

      <div class="product product grid columns-1 columns-m-2">
        <article
          class="product__cart"
          v-for="product in products"
          :key="product.id"
        >
          <nuxt-link :to="{ name: 'products-id', params: { id: product.id } }">
            <div class="product__img">
              <img
                :src="`http://localhost:1337${product.Single_image.url}`"
                alt=""
              />
            </div>
            <h3 class="product__title">{{ product.Title }}</h3>
            <div class="product__price">{{ product.Regular_price }}</div>
          </nuxt-link>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import BaseSidebar from "../../components/UI/BaseSidebar";
import TheHero from "../../components/UI/TheHero";
import { mapState, mapActions } from "vuex";

export default {
  components: { BaseSidebar, TheHero },

  computed: {
    ...mapState(["productCategories", "products"]),
    selected: {
      get() {
        return this.$store.state.selected.categories;
      },
      set(value) {
        this.$store.commit("SET_SELECTED", value);
      }
    }
  },

  watch: {
    selected: {
      handler: function() {
        this.fetchAllProductsCategories();
        this.fetchAllProducts();
      },
      deep: true
    }
  },

  mounted() {
    this.fetchAllProductsCategories();
    this.fetchAllProducts();
  },

  methods: {
    ...mapActions(["fetchAllProductsCategories", "fetchAllProducts"])
  }
};
</script>

<style lang="scss">
.product {
  &__cart {
    box-shadow: 10px 10px 15px 0 rgba($color: #000000, $alpha: 0.05);
    margin-bottom: $margin-32;
    border-radius: 0.5em;
    cursor: pointer;
  }

  &__img {
    height: 320px;
    img {
      object-fit: contain;
      object-position: center;
      height: 100%;
    }
  }

  &__title {
    color: $color-grey;
    text-align: center;
  }

  &__price {
    font-size: 2rem;
    color: $color-black;
    font-weight: 600;
    text-align: center;
  }
}
</style>
