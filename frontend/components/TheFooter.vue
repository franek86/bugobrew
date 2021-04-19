<template>
  <footer class="footer bg--third p-t-60 p-b-60">
    <div class="container">
      <div class="grid columns-l-4 columns-m-2">
        <div>
          <Logo />
        </div>

        <div class="footer__col">
          <nuxt-link to="/">Home</nuxt-link>
          <nuxt-link to="/products">Product</nuxt-link>
          <nuxt-link to="/blog">Blogs</nuxt-link>
          <nuxt-link to="/about">About</nuxt-link>
          <nuxt-link to="/contact">Contact</nuxt-link>
        </div>

        <div class="footer__col">
          <nuxt-link to="/shipping">Shipping and fees</nuxt-link>
          <nuxt-link to="/privacy-policy">Privacy Policy</nuxt-link>
          <nuxt-link to="/terms">Terms of service</nuxt-link>
          <nuxt-link to="/payment-and-safety">Payment and safety</nuxt-link>
        </div>

        <div>
          <div class="footer__col flex flex--col m-b-30">
            <label class="m-b-10" for="newsletter"
              >The world’s a crazy place right now. Sign up to stay in
              touch.</label
            >
            <input class="p-t-10 p-b-10" type="text" name="newsletter" id="" />
          </div>

          <div class="footer__col flex">
            <div class="icon">
              <a href="https://hr-hr.facebook.com/" target="blank">
                <img src="~/assets/img/facebook.svg" />
              </a>
            </div>
            <div class="icon">
              <a href="https://www.instagram.com/" target="blank">
                <img src="~/assets/img/instagram.svg" />
              </a>
            </div>

            <div class="icon">
              <a href="https://www.linkedin.com/" target="blank">
                <img src="~/assets/img/linkedin.svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from "../components/Logo";

export default {
  components: {
    Logo,
  },
};
</script>

<style lang="scss">
.footer {
  color: $color-white;
  .footer__col {
    a {
      color: $color-white;
      display: block;
      line-height: 20px;
      padding-top: $padding-8;
      padding-bottom: $padding-8;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .icon {
    a {
      width: 4rem;
      padding: 0.7rem;
      border-radius: 50%;
      border: 1px solid $color-white;
      margin-right: $margin-8;
      cursor: pointer;
      &:hover {
        opacity: 0.7;
      }
    }
  }
}
</style>
