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
                required
              />
              <span class="form__label">First name</span>
            </label>
          </div>

          <div class="form__field">
            <label>
              <input
                class="form__input"
                v-model="lastname"
                type="name"
                placeholder="Last name"
                required
              />
              <span class="form__label">Last name</span>
            </label>
          </div>

          <div class="form__field">
            <label>
              <input
                class="form__input"
                v-model="username"
                type="name"
                placeholder="Username"
                required
              />
              <span class="form__label">Username</span>
            </label>
          </div>

          <div class="form__field">
            <label>
              <input
                class="form__input"
                v-model="email"
                type="email"
                placeholder="Email"
                required
              />
              <span class="form__label">Email</span>
            </label>
          </div>

          <div class="form__field">
            <label>
              <input
                class="form__input"
                v-model="password"
                type="password"
                placeholder="Password"
                required
              />
              <span class="form__label">Password</span>
            </label>
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
    };
  },

  methods: {
    async registerForm() {
      this.error = null;
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
