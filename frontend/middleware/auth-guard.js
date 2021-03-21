export default async function ({ store, redirect, route }) {
  if (!store.state.auth.loggedIn) {
    redirect(`/auth/login?redirect=${route.path}`);
  }
}
