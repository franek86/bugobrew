<template>
  <div class="container h--vh flex--center">
    <div class="flex flex--col align--center">
      <h1 v-if="error.statusCode === 404">404 Error - Page not found</h1>
      <h1 v-else>An error occurred</h1>
      <NuxtLink to="/" class="btn--primary m-t-20">Home page</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "error", // you can set a custom layout for the error page
};
</script>
