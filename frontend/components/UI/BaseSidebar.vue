<template>
  <div>
    <aside class="sidebar m-t-20">
      <header>
        <slot name="header">
          <div class="f5 m-b-20">{{ title }}</div>
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
      defualt: "Sidebar"
    }
  }
};
</script>

<style lang="scss" scoped>
.sidebar {
  min-width: 320px;
  background-color: $color-secondary;
  padding: $padding-10;
  border-radius: 7px;
}</style
>>
