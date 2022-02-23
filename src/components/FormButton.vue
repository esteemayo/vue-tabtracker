<template>
  <button type="submit" class="btn btn__form">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'FormButton',
};
</script>

<style scoped>
.btn__form {
  background-color: #008b8b;
  color: var(--color-white);
  border: none;
  text-transform: uppercase;
  transition: all 0.2s ease-out;
}

.btn__form:hover {
  box-shadow: 0 20px 35px rgba(00, 00, 00, 0.1);
}

.btn__form:focus {
  outline: none;
}

@media only screen and (max-width: 47.94em) {
  .btn {
    font-size: 12px;
  }
}
</style>
