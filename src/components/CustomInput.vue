<template>
  <div class="form-group">
    <label :for="id" class="form-label">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      class="form-control"
      v-model="inputValue"
    />
  </div>
</template>

<script>
export default {
  name: 'CustomInput',
  props: ['id', 'type', 'label', 'placeholder', 'modelValue'],
  computed: {
    inputValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      },
    },
  },
};
</script>

<style scoped>
@media only screen and (max-width: 47.94em) {
  .form-label,
  .form-control::-webkit-input-placeholder {
    font-size: 14px;
  }
}
</style>
