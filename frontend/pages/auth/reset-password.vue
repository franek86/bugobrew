<template>
  <div class="h--vh">
    <div class="container">
      <p class="text--red" v-if="error">{{ error }}</p>
      <form class="form" action="post" @submit.prevent="resetPassword">
        <h1 class="text--red m-b-25">Reset Password</h1>
        <div class="form__field">
          <label>
            <input
              class="form__input"
              v-model="password1"
              type="password"
              placeholder="Password"
            />
            <span class="form__label">New password</span>
          </label>
        </div>
        <div class="form__field">
          <label>
            <input
              class="form__input"
              v-model="password2"
              type="password"
              placeholder="Confirm password"
            />
            <span class="form__label">Confirm new password</span>
          </label>
        </div>
        <button class="btn--primary" type="submit">Reset Password</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  middleware: "guest",

  asyncData(context) {
    if (!context.route.query.code) context.redirect("/forgot-password");
    else
      return {
        code: context.route.query.code,
      };
  },

  data() {
    return {
      password1: "",
      password2: "",
      error: null,
    };
  },

  methods: {
    async resetPassword() {
      this.error = null;
      if (this.password1 !== this.password2) {
        this.error = "Passwords do not match.";
        return;
      }

      try {
        await this.$axios.post("auth/reset-password", {
          code: this.code,
          password: this.password1,
          passwordConfirmation: this.password2,
        });
      } catch (e) {
        this.error = e.response.data.message[0].messages[0].message;
      }
    },
  },
};
</script>

<style lang="scss"></style>
