export default function ({ store, redirect }) {
  if (!process.server) {
    console.log('aqui')
    if (!store.getters['isLoggedIn']) {
      return redirect('/area-de-cliente/entrar')
    }
  }
}
