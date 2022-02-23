<template>
  <Panel title="Search">
    <template #body>
      <div class="form-group">
        <input
          type="search"
          class="form-control"
          v-model="search"
          placeholder="Search for title, artist, album or genre"
        />
      </div>
    </template>
  </Panel>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'SongSearchPanel',
  data() {
    return {
      search: '',
    };
  },
  watch: {
    search: _.debounce(async function () {
      const route = {
        name: 'Songs',
      };

      if (this.search !== '') {
        route.query = {
          search: this.search,
        };
      }

      this.$router.push(route);
    }, 700),
    '$route.query.search': {
      immediate: true,
      handler(value) {
        this.search = value;
      },
    },
  },
};
</script>

<style></style>
