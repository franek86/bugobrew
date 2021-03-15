<template>
  <div>
    <div v-for="item in getCart" :key="item.id">
      {{ item.Title }}

      <button @click="increaseProductQty(item.id)">+</button>
      {{ item.qty }}
      <button @click="decreaseProductQty(item.id)">-</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["getCart"])
  },

  methods: {
    ...mapActions(["increaseProductQty", "decreaseProductQty"])
  }
};
</script>

<style></style>
