<template>
  <div class="h--vh">
    <div class="container">
      <div class="w-100 w-m-50 margin-auto">
        <p class="text--red" v-if="success">{{ success }}</p>
        <p class="text--red" v-if="error">{{ error }}</p>
        <form class="form" action="post" @submit.prevent="forgotPassword">
          <h1 class="text--red m-b-25">Forgot Password</h1>
          <input
            class="form__input"
            v-model="email"
            type="email"
            placeholder="Email address"
          />
          <button class="btn--primary" type="submit">Reset Link</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: "guest",

  data() {
    return {
      email: "",
      error: null,
      success: null,
    };
  },
  methods: {
    async forgotPassword() {
      try {
        await this.$axios.post("auth/forgot-password", {
          email: this.email,
        });
        this.error = null;
        this.success = `A reset password link has been sent to your email account. \
                Please click on the link to complete the password reset.`;
      } catch (e) {
        this.error = e.response.data.message[0].messages[0].message;
      }
    },
  },
};
</script>

<style lang="scss"></style>
