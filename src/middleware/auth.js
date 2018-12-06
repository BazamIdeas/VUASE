export default function ({ store, redirect }) {
  if (process.client) {
    if (store.getters['isLoggedIn']) {
      return redirect('/area-de-cliente')
    }
  }
}
