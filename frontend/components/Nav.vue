<template>
  <div>
    <BaseBackdrop
      :backdropActive="isSlideMenuOpen"
      @close-backdrop="closeSlideMenu"
    />

    <div
      class="slide__menu"
      @click="closeSlideMenu()"
      :class="{ slide__menu_active: isSlideMenuOpen }"
    >
      <transition name="slide__menu">
        <nav if="isSlideMenuOpen" class="slide__menu_nav">
          <slot></slot>
        </nav>
      </transition>
    </div>
  </div>
</template>

<script>
import BaseBackdrop from "../components/UI/BaseBackdrop";

export default {
  components: {
    BaseBackdrop
  },

  computed: {
    isSlideMenuOpen() {
      return this.$store.state.isNavOpen;
    }
  },

  methods: {
    closeSlideMenu() {
      this.$store.dispatch("getNavOpen");
    }
  }
};
</script>

<style lang="scss">
.slide__menu-enter-active,
.slide__menu-leave-active {
  transition: transform 0.2s ease;
}

.slide__menu-enter,
.slide__menu-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in-out 0s;
}

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

  &_active {
    transform: translateX(0%);
  }
}

.slide__menu {
  position: absolute;
  top: 0;

  right: -100%;
  background: $color-secondary;
  min-height: 100vh;

  width: 100%;
  transition: right 1s ease-in-out;

  height: 100%;

  @media (min-width: $breakpoint-tablet) {
    clip-path: polygon(11% 0, 100% 0%, 100% 100%, 0 100%);
    width: 55vw;
    right: -55vw;
  }

  &.slide__menu_active {
    right: 0;
  }

  .slide__menu_nav {
    clip-path: polygon(11% 0, 100% 0%, 100% 100%, 0 100%);
    height: 100%;
  }
}
</style>
