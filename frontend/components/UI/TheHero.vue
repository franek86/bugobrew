<template>
  <div class="hero p-b-40 p-t-40">
    <div class="container">
      <h1 class="f5 hero--text">{{ text }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: false
    }
  }
};
</script>

<style lang="scss" scoped>
.hero {
  background: #0f0c29; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    $color-white,
    $color-secondary,
    $color-white
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    $color-white,
    $color-secondary,
    $color-white
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  text-align: center;

  &--text {
    color: $color-black;
    font-weight: normal;
  }
}
</style>
