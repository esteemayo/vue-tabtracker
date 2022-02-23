export default function (next, store) {
  if (!store.state.user.initialState.user) {
    next('/login');
  } else {
    next();
  }
}
