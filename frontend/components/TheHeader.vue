<template>
  <header class="header">
    <div class="grid header__grid align--center">
      <div>
        <Logo />
      </div>

      <div class="header__login">
        <div class="login__nav">
          <div v-if="isAuthenticated">
            <div class="login__nav_user">{{ loggedInUser.username }}</div>
            <div v-if="isAdmin">{{ isAdmin }}</div>
            <div class="logout" @click.prevent="logout">Logout</div>
          </div>

          <div v-if="!isAuthenticated">
            <nuxt-link to="/auth/login">
              <img
                class="header--icon"
                src="~/assets/img/user.svg"
                alt="Mini cart svg icon"
              />
            </nuxt-link>
          </div>
        </div>
      </div>

      <div class="header__cart" @click="showMiniCart()">
        <span class="header__cart_qty flex flex--center align--center">{{
          totalQty
        }}</span>
        <img
          class="header--icon"
          src="~/assets/img/shopping-cart.svg"
          alt="Mini cart svg icon"
        />
      </div>
    </div>

    <BurgerMenu />
    <Nav>
      <ul class="main__nav">
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/products">Products</nuxt-link></li>
        <li><nuxt-link to="/blogs">Blog</nuxt-link></li>
        <li><nuxt-link to="/about">About</nuxt-link></li>
        <li><nuxt-link to="/contact">Contact</nuxt-link></li>
      </ul>
    </Nav>

    <MiniCart />
  </header>
</template>

<script>
import Logo from "../components/Logo";
import Nav from "../components/Nav";
import BurgerMenu from "../components/BurgerMenu";
import MiniCart from "../components/cart/MiniCart";

import { mapGetters } from "vuex";

export default {
  components: {
    Logo,
    Nav,
    BurgerMenu,
    MiniCart
  },

  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser", "isAdmin", "getCart"]),
    totalQty() {
      return this.getCart.reduce((a, b) => a + b.qty, 0);
    }
  },

  methods: {
    async logout() {
      await this.$auth.logout();
    },

    showMiniCart() {
      this.$store.dispatch("toggleMiniCart");
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  &__grid {
    grid-template-columns: 1fr 1fr 150px;
    height: 100%;
  }

  &__login {
    display: flex;
    justify-content: flex-end;
  }

  &__cart {
    width: 40px;
    position: relative;
    cursor: pointer;

    &_qty {
      position: absolute;
      top: -1.5rem;
      right: 0;
      color: $color-primary;
      background-color: $color-white;
      height: 2.2rem;
      width: 2.2rem;
      border-radius: 50%;
      font-size: 1.3rem;
      font-weight: 300;
    }
  }

  &--icon {
    width: 3rem;
    height: 3rem;

    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
