<template>
  <div class="h--vh">
    <div class="container">
      <div class="register__form w-100 w-m-50 margin-auto">
        <div class="error--message" v-if="error">
          <p>{{ error }}</p>
        </div>

        <div class="success--message" v-if="success">
          <p>{{ success }}</p>
        </div>

        <form class="form">
          <h1 class="text--red m-b-25">Create account</h1>
          <div class="form__field">
            <label>
              <input
                class="form__input"
                v-model="firstname"
                type="name"
                placeholder="First name"
                @blur="$v.firstname.$touch()"
              />
              <span class="form__label">First name</span>
              <div class="error--message" v-if="$v.firstname.$error">
                <p v-if="!$v.firstname.required">First name is required</p>
              </div>
            </label>
          </div>

          <div class="form__field">
            <label>
              <input
                class="form__input"
                v-model="lastname"
                type="name"
                placeholder="Last name"
                @blur="$v.lastname.$touch()"
              />
              <span class="form__label">Last name</span>
            </label>
            <div class="error--message" v-if="$v.lastname.$error">
              <p v-if="!$v.lastname.required">Last name is required</p>
            </div>
          </div>

          <div class="form__field">
            <label>
              <input
                class="form__input"
                v-model="username"
                type="name"
                placeholder="Username"
                @blur="$v.username.$touch()"
              />
              <span class="form__label">Username</span>
            </label>
            <div class="error--message" v-if="$v.username.$error">
              <p v-if="!$v.username.required">Username is required</p>
            </div>
          </div>

          <div class="form__field">
            <label>
              <input
                class="form__input"
                v-model="email"
                type="email"
                placeholder="Email"
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
              <p v-if="!$v.password.required">Password is required</p>
              <p v-if="!$v.password.minLength">
                Name must have at least
                {{ $v.password.$params.minLength.min }} characters.
              </p>
            </div>
          </div>

          <div class="form__field">
            <label>
              <input
                class="form__input"
                type="password"
                v-model.trim="$v.repeatPassword.$model"
                placeholder="Repeat password"
                @blur="$v.repeatPassword.$touch()"
              />
              <span class="form__label">Repeat Password</span>
            </label>
            <div class="error--message" v-if="$v.repeatPassword.$error">
              <p v-if="!$v.repeatPassword.required">
                Repeat password is required
              </p>
              <p v-if="!$v.repeatPassword.sameAsPassword">
                Passwords must be identical.
              </p>
            </div>
          </div>

          <button class="btn--primary" @click.prevent="registerForm()">
            Register
          </button>
        </form>

        <div class="register__link">
          <p>
            Have an account?
            <nuxt-link to="/auth/login">Login</nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
export default {
  middleware: "guest",

  data() {
    return {
      error: false,
      success: false,
      showPassword: false,
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      repeatPassword: "",
    };
  },

  validations: {
    firstname: {
      required,
    },
    lastname: {
      required,
    },
    username: {
      required,
    },
    email: {
      email,
      required,
    },
    password: {
      required,
      minLength: minLength(6),
    },
    repeatPassword: {
      required,
      sameAsPassword: sameAs("password"),
    },
  },

  methods: {
    async registerForm() {
      this.error = null;
      this.$v.$touch();
      try {
        this.$axios.setToken(false);
        await this.$axios.post("http://localhost:1337/auth/local/register", {
          firstname: this.firstname,
          lastname: this.lastname,
          username: this.username,
          email: this.email,
          password: this.password,
        });

        /*this.success = `A confirmation link has been sent to your email account. \
                                Please click on the link to complete the registration process.`;*/

        this.$router.push({ name: "auth-login" });
      } catch (error) {
        this.error = error.response.data.message[0].messages[0].message;
      }
    },
  },
};
</script>

<style lang="scss">
.register__form {
  padding: $padding-32;
  border-radius: 3px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
}
</style>
