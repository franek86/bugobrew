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
              <input
                class="form__input"
                type="name"
                placeholder="First name"
                :value="isUser.firstname"
              />
              <span class="form__label">First name</span>
            </label>
          </div>
          <div class="form__field">
            <label>
              <input
                class="form__input"
                type="name"
                placeholder="Last name"
                :value="isUser.lastname"
              />
              <span class="form__label">Last name</span>
            </label>
          </div>
          <div class="form__field">
            <label>
              <input
                class="form__input"
                type="name"
                placeholder="Username"
                :value="isUser.username"
              />
              <span class="form__label">Username</span>
            </label>
          </div>
          <div class="form__field">
            <label>
              <input
                class="form__input"
                type="email"
                placeholder="Email"
                :value="isUser.email"
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
import { mapGetters } from "vuex";
import BaseSidebar from "../../components/UI/BaseSidebar.vue";
import ProfileNav from "../../components/ProfileNav.vue";

export default {
  middleware: "auth-guard",
  components: { BaseSidebar, ProfileNav },
  computed: {
    ...mapGetters(["isUser"]),
  },
};
</script>

<style></style>
