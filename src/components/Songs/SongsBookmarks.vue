<template>
  <Panel title="Bookmarks">
    <template #body>
      <table class="table table-striped">
        <thead>
          <tr>
            <th v-for="item in headers" :key="item.value">{{ item.text }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ bookmarks.song?.title }}</td>
            <td>{{ bookmarks.song?.artist }}</td>
          </tr>
        </tbody>
      </table>
    </template>
  </Panel>
</template>

<script>
import { mapGetters } from 'vuex';
import { getBookmarks } from '@/services/bookmarkService';

export default {
  name: 'SongsBookmarks',
  data() {
    return {
      headers: [
        {
          text: 'Title',
          value: 'title',
        },
        {
          text: 'Artist',
          value: 'artist',
        },
      ],
      bookmarks: [],
    };
  },
  computed: mapGetters(['user']),
  async mounted() {
    if (this.user) {
      try {
        const { data } = await getBookmarks();

        if (data.bookmarks.length) {
          this.bookmarks = data.bookmarks[0];
        }
      } catch (err) {
        console.log(err);
      }
    }
  },
};
</script>

<style></style>
