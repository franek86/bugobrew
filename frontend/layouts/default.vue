<template>
  <div class="main">
    <TheHeader />
    <div class="main__container">
      <nuxt />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";

export default {
  components: {
    TheHeader,
    TheFooter
  }
};
</script>

<style lang="scss">
.main {
  display: flex;
  min-height: 100vh;
  flex-direction: column;

  &__container {
    flex: 1;
  }
}
</style>
