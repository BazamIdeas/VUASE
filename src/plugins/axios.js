export default function ({ $axios, req, redirect }) {
  if (process.server && req.iso) {
    console.log('Country-Iso', req.iso)
    $axios.setHeader('Country-Iso', req.iso)
  }

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    } else if (code === 404) {
      console.log(error.response.data.pretty_message)
    } else if (code === 409) {
      console.log(error.response.data.pretty_message)
    } else if (code === 413) {
      console.log(error.response.data.pretty_message)
    } else if (code === 500) {
      console.log(error.response.data.pretty_message)
    }
  })
}


proyectos.js

$store.state.todo

$store.proyecto.todo