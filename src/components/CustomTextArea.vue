<template>
  <div class="form-group">
    <label :for="id" class="form-label">{{ label }}</label>
    <textarea
      :id="id"
      cols="30"
      rows="5"
      :placeholder="placeholder"
      class="form-control"
      v-model="inputValue"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: 'CustomTextArea',
  props: ['id', 'label', 'placeholder', 'modelValue'],
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
textarea {
  resize: none;
}
</style>
