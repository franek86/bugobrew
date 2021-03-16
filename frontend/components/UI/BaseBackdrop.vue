<template>
  <div
    class="backdrop"
    :class="backdropActive ? 'backdrop_active' : ''"
    @click="closeBackdrop"
  ></div>
</template>

<script>
export default {
  props: ["backdropActive"],

  methods: {
    closeBackdrop() {
      this.$emit("close-backdrop");
    }
  }
};
</script>

<style lang="scss" scoped>
.backdrop {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba($color: #000000, $alpha: 0.4);
  transform: translateX(100%);
  z-index: -1;

  &_active {
    transform: translateX(0%);
  }
}
</style>
