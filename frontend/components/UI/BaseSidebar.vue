<template>
  <div>
    <aside class="sidebar">
      <header>
        <slot name="header">
          <div class="f6 m-b-20 bold uppercase">{{ title }}</div>
        </slot>
      </header>

      <section>
        <slot></slot>
      </section>
    </aside>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  width: 100%;
  background-color: $color-secondary;
  padding: $padding-10;
  border-radius: $radius-small;
  box-shadow: $box-shadow;
}
</style>
>
