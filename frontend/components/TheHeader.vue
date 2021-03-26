<template>
  <header class="header" @mouseleave="closeUserNav()">
    <div class="grid header__grid align--center">
      <div>
        <Logo />
      </div>

      <div class="header__login">
        <div>
          <div class="relative" v-if="isAuthenticated">
            <div
              class="header--username text--white"
              @mouseover="openNavUser()"
            >
              Welcome, {{ isUser.username }}
            </div>
            <div
              @mouseleave="closeUserNav()"
              class="header__login_user"
              :class="{ active: isUserNavHover }"
            >
              <nuxt-link
                to="/profile"
                class="user--nav"
                @click.native="closeUserNav()"
                >Profile</nuxt-link
              >
              <div class="logout user--nav" @click.prevent="logout">
                Logout
              </div>
            </div>
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

  data() {
    return {
      isUserNavHover: false
    };
  },

  computed: {
    ...mapGetters(["isAuthenticated", "isUser"]),
    ...mapGetters("cart", { getCart: "getCart" }),

    totalQty() {
      return this.getCart.reduce((a, b) => a + b.qty, 0);
    }
  },

  methods: {
    async logout() {
      await this.$auth.logout();
      this.isUserNavHover = false;
      this.$router.push("/");
    },

    showMiniCart() {
      this.$store.dispatch("toggleMiniCart");
    },

    openNavUser() {
      this.isUserNavHover = !this.isUserNavHover;
    },
    closeUserNav() {
      this.isUserNavHover = false;
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

    &_user {
      background-color: $color-primary;
      position: absolute;
      //bottom: 0;
      top: 0%;
      left: -10px;
      width: 13rem;
      display: none;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: $color-white;
      box-shadow: $box-shadow;
      border-top: 3px solid $color-black;
      transform: translateY(-100%);
      opacity: 0;
      margin-top: $margin-16;

      &.active {
        display: flex;
        transform: translateY(10%);
        opacity: 1;
      }

      .user--nav {
        padding: $padding-16 0;
        color: $color-white;
        display: block;
        width: 100%;
        text-align: center;
        border-bottom: 1px solid $color-secondary;
        transition: all 0.25s ease-in-out;

        &:hover {
          color: $color-primary;
          background-color: $color-white;
          cursor: pointer;
        }
      }
    }
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

  &--username {
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      border-bottom: 1px solid $color-white;
      padding-bottom: 5px;
      transition: all 0.3s ease-in-out;
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
