<template>
  <div
    class="hamburger__container"
    @click="toggleIconMenu()"
    :class="{ hamburger__active: isHamburgerActive }"
  >
    <div class="hamburger__icon">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isHamburgerActive() {
      return this.$store.state.isNavOpen;
    },
  },

  methods: {
    toggleIconMenu() {
      this.$store.dispatch("getNavOpen");
      this.$store.dispatch("closeMiniCart");
    },
  },
};
</script>

<style lang="scss">
.hamburger__container {
  position: absolute;
  top: 0;
  right: 20px;
  height: 75px;
  width: 75px;
  background-color: $color-white;
  z-index: 100;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  cursor: pointer;

  .hamburger__icon {
    position: relative;
    height: 100%;
    width: 100%;

    span {
      position: absolute;
      top: 50%;
      left: 5px;
      right: 5px;
      height: 10px;
      width: auto;
      margin-top: -5px;
      background: $color-primary;
      display: block;
      transform-origin: 100% 50%;
      transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
        opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
        background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

      &:nth-child(1) {
        -webkit-transform: translateY(-15px);
        transform: translateY(-15px);
      }

      &:nth-child(2) {
        transform-origin: 100% 50%;
        transform: scaleX(0.8);
      }

      &:nth-child(3) {
        transform: translateY(15px);
      }
    }
  }

  &:hover {
    .hamburger__icon {
      span {
        &:nth-child(1) {
          transform: scaleX(0.9) translateY(-15px);
        }

        &:nth-child(2) {
          transform: scaleX(1);
        }

        &:nth-child(3) {
          transform: scaleX(0.9) translateY(15px);
        }
      }
    }
  }

  &.hamburger__active .hamburger__icon span {
    transform-origin: 50% 50%;
  }

  &.hamburger__active .hamburger__icon span:nth-child(1) {
    transform: rotate(45deg);
  }

  &.hamburger__active .hamburger__icon span:nth-child(2) {
    opacity: 0;
  }

  &.hamburger__active .hamburger__icon span:nth-child(3) {
    transform: rotate(-45deg);
  }
}
</style>
