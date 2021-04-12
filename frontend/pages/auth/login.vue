<template>
  <div class="h--vh">
    <div class="container">
      <div class="w-100 w-m-50 margin-auto">
        <div class="login__form">
          <form class="form">
            <h1 class="text--red m-b-25">Login</h1>
            <div class="error--message" v-if="error">
              <p>{{ error }}</p>
            </div>
            <div class="form__field">
              <label>
                <input
                  class="form__input"
                  v-model="email"
                  type="email"
                  placeholder="Email"
                  autocomplete="email"
                  @blur="$v.email.$touch()"
                />
                <span class="form__label">Email</span>
              </label>
              <div class="error--message" v-if="$v.email.$error">
                <p v-if="!$v.email.required">Email is required</p>
                <p v-if="!$v.email.email">Email is not valid</p>
              </div>
            </div>

            <div class="form__field">
              <label>
                <input
                  class="form__input"
                  v-model="password"
                  type="password"
                  placeholder="Password"
                  @blur="$v.password.$touch()"
                />
                <span class="form__label">Password</span>
              </label>
              <div class="error--message" v-if="$v.password.$error">
                <p v-if="!$v.password.password">Password is required</p>
                <p v-if="!$v.password.minLength">
                  Name must have at least
                  {{ $v.password.$params.minLength.min }} characters.
                </p>
              </div>
            </div>
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
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";
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

  validations: {
    email: {
      email,
      required,
    },
    password: {
      required,
      minLength: minLength(6),
    },
  },

  methods: {
    async submitForm() {
      try {
        this.$v.$touch();
        await this.$auth.loginWith("local", {
          data: {
            identifier: this.email,
            password: this.password,
          },
        });
        let redirect_url = this.$route.query.redirect || "/user/orders";

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
