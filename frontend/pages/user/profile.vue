<template>
  <div class="container m-b-60 m-t-60">
    <div class="grid columns-m-1-3">
      <base-sidebar>
        <template default>
          <ProfileNav />
        </template>
      </base-sidebar>
      <div>
        <h1 class="m-b-30">My profile</h1>
        <form class="form">
          <div class="form__field">
            <label>
              <input class="form__input" type="name" v-model="firstname" />
              <span class="form__label">First name</span>
            </label>
          </div>
          <div class="form__field">
            <label>
              <input class="form__input" type="name" v-model="lastname" />
              <span class="form__label">Last name</span>
            </label>
          </div>
          <div class="form__field">
            <label>
              <input class="form__input" type="name" v-model="username" />
              <span class="form__label">Username</span>
            </label>
          </div>
          <div class="form__field">
            <label>
              <input
                class="form__input"
                type="email"
                v-model="email"
                disabled
              />
              <span class="form__label">Email</span>
            </label>
          </div>
          <div class="form__field">
            <label>
              <input
                class="form__input"
                type="password"
                placeholder="Current password"
              />
              <span class="form__label">Current password</span>
            </label>
          </div>
          <div class="form__field">
            <label>
              <input
                class="form__input"
                type="password"
                placeholder="New password"
              />
              <span class="form__label">New password</span>
            </label>
          </div>

          <div class="form__field">
            <label>
              <input
                class="form__input"
                type="password"
                placeholder="Confirm password"
              />
              <span class="form__label">Confirm password</span>
            </label>
          </div>
          <button class="btn--primary" @click.prevent="updateProfile()">
            Save changes
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import BaseSidebar from "../../components/UI/BaseSidebar.vue";
import ProfileNav from "../../components/ProfileNav.vue";

export default {
  middleware: "auth-guard",
  data() {
    return {
      firstname: this.$store.getters.isUser.firstname,
      lastname: this.$store.getters.isUser.lastname,
      username: this.$store.getters.isUser.username,
      email: this.$store.getters.isUser.email,
    };
  },
  components: { BaseSidebar, ProfileNav },

  methods: {
    updateProfile() {
      this.$store.dispatch("updateUserProfile", {
        firstname: this.firstname,
        lastname: this.lastname,
        username: this.username,
      });

      this.$toasted.show(`Profile updated`, {
        theme: "bubble",
        duration: 2000,
        className: "custom--toasted",
      });
    },
  },
};
</script>

<style></style>
