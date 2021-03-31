<template>
  <div class="flex flex--col">
    <nuxt-link to="/user/orders" class="p-t-20 p-b-20"> Orders </nuxt-link>
    <nuxt-link to="/user/profile" class="p-t-20 p-b-20"> Profile </nuxt-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
a {
  color: $color-text;
}
a.nuxt-link-exact-active {
  font-weight: 700;
  color: $color-primary;
}
</style>
