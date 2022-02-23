import jwtDecode from 'jwt-decode';

const initialState = {
  user: null,
};

const tokenKey = 'accessToken';
const token = localStorage.getItem(tokenKey);

if (token) {
  const decodedToken = jwtDecode(token);

  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem(tokenKey);
  } else {
    initialState.user = decodedToken;
  }
}

const user = {
  state: () => ({
    initialState,
  }),
  mutations: {
    setUser(state, payload) {
      state.initialState.user = payload;
    },
    logout(state) {
      state.initialState.user = null;
      localStorage.removeItem(tokenKey);
    },
  },
  actions: {
    setUser({ commit }, payload) {
      localStorage.setItem(tokenKey, payload);

      commit('setUser', payload);
    },
  },
  getters: {
    user: (state) => state.initialState.user,
    isUserLoggedIn: (state) => state.isUserLoggedIn,
  },
};

export default user;
