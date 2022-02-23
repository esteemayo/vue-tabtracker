<template>
  <Panel title="Tabs">
    <template #body>
      <div class="text-center">
        <textarea readonly v-model="tabs"></textarea>
      </div>
    </template>
  </Panel>
</template>

<script>
export default {
  name: 'Tabs',
  props: {
    song: {
      type: Object,
      required: true,
    },
  },
  computed: {
    tabs() {
      return this.song.tabs;
    },
  },
};
</script>

<style scoped>
textarea {
  font-family: monospace;
  width: 100%;
  height: 600px;
  border: none;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 40px;
  resize: none;
}

textarea:focus {
  outline: none;
}
</style>
