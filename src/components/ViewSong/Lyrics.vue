<template>
  <Panel title="Lyrics">
    <template #body>
      <div class="text-center">
        <textarea readonly v-model="lyrics"></textarea>
      </div>
    </template>
  </Panel>
</template>

<script>
export default {
  name: 'Lyrics',
  props: {
    song: {
      type: Object,
      required: true,
    },
  },
  computed: {
    lyrics() {
      return this.song.lyrics;
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
