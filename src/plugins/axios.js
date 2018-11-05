export default function ({ $axios, store, req, redirect }) {
  $axios.onRequest(config => {
    config.headers['Country-Iso'] = store.state.countries.data ? store.state.countries.data.iso : 'US'
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    const prettyMessage = error.response.data.pretty_message || 'Mensaje no especificado'

    if (code === 400) {
      redirect('/400')
    } else if (code === 404) {
      console.log('axiosConfig: ' + prettyMessage)
    } else if (code === 409) {
      console.log('axiosConfig: ' + prettyMessage)
    } else if (code === 413) {
      console.log('axiosConfig: ' + prettyMessage)
    } else if (code === 500) {
      console.log('axiosConfig: ' + prettyMessage)
    }
  })

  /*  $axios.onResponse(res => {
    console.log(res)
  }) */
}
