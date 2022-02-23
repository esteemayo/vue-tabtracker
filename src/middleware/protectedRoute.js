export default function (next, store) {
  if (store.state.user.initialState.user) {
    next('/songs');
  } else {
    next();
  }
}
