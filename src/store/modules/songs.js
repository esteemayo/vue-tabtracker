import * as songService from '@/services/songService';

const songs = {
  state: () => ({
    songs: [],
    song: {},
  }),
  mutations: {
    setSongs(state, payload) {
      state.songs = payload;
    },
    addSong(state, payload) {
      state.songs.push(payload);
    },
    setSong(state, payload) {
      state.song = payload;
    },
    getSong(state, payload) {
      state.song = payload;
    },
  },
  actions: {
    async setSongs({ commit }, payload) {
      const { data } = await songService.getSongs(payload);

      commit('setSongs', data.songs);
    },
    async addSong({ commit }, payload) {
      const { data } = await songService.createSong(payload);

      commit('addSong', data.song);
    },
    async fetchSong({ commit }, payload) {
      const { data } = await songService.getSongBySlug(payload);

      commit('setSong', data.song);
    },
    async getSong({ commit }, payload) {
      try {
        const { data } = await songService.getSongById(payload);

        commit('getSong', data.song);
      } catch (err) {
        console.log(err);
      }
    },
    async editSong(_, payload) {
      await songService.updateSong(payload, payload.id);
    },
  },
  getters: {
    songs: (state) => state.songs,
    song: (state) => state.song,
  },
};

export default songs;
