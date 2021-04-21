<template>
  <form class="form">
    <div class="form__field">
      <input
        @input="emitData"
        v-model="form.address"
        class="form__input"
        type="text"
        placeholder="13 boulevard francis"
        @blur="$v.form.address.$touch()"
      />
      <span class="form__label">Address</span>
      <div class="error--message" v-if="$v.form.address.$error">
        <p v-if="!$v.form.address.required">Address is required</p>
      </div>
    </div>

    <div class="form__field">
      <input
        @input="emitData"
        class="form__input"
        type="text"
        placeholder="San francisco"
        v-model="form.city"
        @blur="$v.form.city.$touch()"
      />
      <span class="form__label">City</span>
      <div class="error--message" v-if="$v.form.city.$error">
        <p v-if="!$v.form.city.required">City is required</p>
      </div>
    </div>
  </form>
</template>

<script>
import { required } from "vuelidate/lib/validators";
export default {
  name: "checkoutStep1",
  data() {
    return {
      form: {
        address: "",
        city: "",
      },
    };
  },

  validations: {
    form: {
      address: {
        required,
      },

      city: {
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
