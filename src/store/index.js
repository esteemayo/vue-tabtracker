import { createStore } from 'vuex';
// import createPersistedState from 'vuex-persistedstate';

import user from './modules/user';
import songs from './modules/songs';

const store = createStore({
  // plugins: [createPersistedState()],
  modules: {
    user,
    songs,
  },
});

export default store;
