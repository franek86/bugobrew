<template>
  <form class="form">
    <div class="form__field">
      <input
        @input="emitData"
        v-model="form.postalCode"
        class="form__input"
        type="text"
        placeholder="92000"
        @blur="$v.form.postalCode.$touch()"
      />
      <span class="form__label">Postal code</span>
      <div class="error--message" v-if="$v.form.postalCode.$error">
        <p v-if="!$v.form.postalCode.required">Postal code is required</p>
      </div>
    </div>
  </form>
</template>

<script>
import { required } from "vuelidate/lib/validators";
export default {
  name: "checkoutStep2",
  data() {
    return {
      form: {
        postalCode: "",
      },
    };
  },

  validations: {
    form: {
      postalCode: {
        required,
      },
    },
  },

  computed: {
    isValid() {
      return !this.$v.$invalid;
    },
  },

  methods: {
    emitData() {
      this.$emit("setUpdate", { data: this.form, isValid: this.isValid });
    },
  },
};
</script>

<style></style>
