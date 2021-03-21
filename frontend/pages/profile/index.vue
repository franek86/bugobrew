<template>
  <div>
    <h1>Your orders</h1>

    {{ isUser }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  middleware: "auth-guard",
  computed: {
    ...mapGetters(["isUser", "isAuthenticated"]),
  },
};
</script>

<style></style>
