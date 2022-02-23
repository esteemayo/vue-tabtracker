<template>
  <div class="card mt-2">
    <div class="card-header">
      <h1 class="header-1">{{ title }}</h1>
      <slot name="action"></slot>
    </div>
    <div class="card-body">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Panel',
  props: ['title'],
};
</script>

<style scoped>
.card-header {
  background-image: linear-gradient(
    to right bottom,
    #0c9494,
    #1f9187,
    #15847b,
    #087777,
    #025858
  );
}

.header-1 {
  color: var(--color-white);
}

@media only screen and (max-width: 47.94em) {
  .header-1 {
    font-size: 22px;
  }
}
</style>
