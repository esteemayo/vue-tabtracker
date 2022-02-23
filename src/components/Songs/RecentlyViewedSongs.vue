<template>
  <Panel title="Recently Viewed Songs">
    <template #body>
      <table class="table table-striped">
        <thead>
          <tr>
            <th v-for="item in headers" :key="item.value">{{ item.text }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="history in histories" :key="history._id">
            <td>{{ history.title }}</td>
            <td>{{ history.artist }}</td>
          </tr>
        </tbody>
      </table>
    </template>
  </Panel>
</template>

<script>
import { mapGetters } from 'vuex';
import { getHistories } from '@/services/songhistoryService';

export default {
  name: 'RecentlyViewedSongs',
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
      histories: [],
    };
  },
  computed: mapGetters(['user']),
  async mounted() {
    if (this.user) {
      try {
        const { data } = await getHistories();
        this.histories = data.histories;
      } catch (err) {
        console.log(err);
      }
    }
  },
};
</script>

<style></style>
