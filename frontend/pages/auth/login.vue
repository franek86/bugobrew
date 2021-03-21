<template>
  <div class="h--vh">
    <div class="container">
      <div class="w-100 w-m-50 margin-auto">
        <h1 v-if="this.$route.query.redirect">
          {{ this.$route.query.redirect }}
        </h1>

        <div class="login__form">
          <div class="error--message" v-if="error">
            <p>{{ error }}</p>
          </div>

          <form class="form">
            <h1 class="text--red m-b-25">Login</h1>
            <input
              class="form__input"
              v-model="email"
              type="email"
              placeholder="Email"
            />
            <input
              class="form__input"
              v-model="password"
              type="password"
              placeholder="Password"
            />
            <button class="btn--primary" @click.prevent="submitForm()">
              Login
            </button>
          </form>

          <div class="register__link">
            <p>
              Don't have an account?
              <nuxt-link to="/auth/register">Register</nuxt-link>
            </p>
          </div>

          <div class="forgot__link">
            <nuxt-link to="/auth/forgot-password">Forgot Password?</nuxt-link>
          </div>
        </div>

        <!-- <div class="login__img">
          <img src="~/assets/img/login.svg" alt="" />
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: "guest",

  data() {
    return {
      success: false,
      error: false,
      showPassword: false,
      email: "",
      password: "",
    };
  },

  methods: {
    async submitForm() {
      try {
        await this.$auth.loginWith("local", {
          data: {
            identifier: this.email,
            password: this.password,
          },
        });
        let redirect_url = this.$route.query.redirect || "/";
        debugger;
        this.$router.push(redirect_url);
      } catch (error) {
        this.error = error.response.data.message[0].messages[0].message;
      }
    },
  },
};
</script>

<style lang="scss">
.login__img,
.login__form {
  padding: $padding-32;
  text-align: center;
}

.login__form {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 90vw;
  margin: 0 auto $margin-32 auto;

  @media (min-width: $breakpoint-tablet) {
    max-width: 70vw;
  }

  @media (min-width: $breakpoint-xl-desktop) {
    max-width: 40vw;
  }

  &__input {
    padding: $padding-16;
    display: block;
    width: 100%;
    margin-bottom: $margin-16;
  }
}

.register__link {
  color: $color-black;
  margin-bottom: $margin-16;

  a {
    color: $color-primary;
    &:hover {
      color: $color-third;
    }
  }
}

.forgot__link a {
  color: $color-primary;
  &:hover {
    color: $color-third;
  }
}
</style>
