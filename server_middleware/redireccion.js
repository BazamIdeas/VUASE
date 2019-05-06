const url = require('url')

module.exports = function (req, res, next) {

  if (process.env.NODE_ENV === 'production') {

    if (!req.headers['user-agent'].match(/bot|crawl|slurp|spider/i)) {
      let iso = req.iso

      let dominio = req.headers.host
      let path = url.parse(req.url).pathname
  
      /*let paises = {
        'ES': 'liderlogo.es'
      }
  
      if (paises[iso]) {
        if (paises[iso] !== dominio) {
          res.writeHead(301, {Location: 'https://' + paises[iso] + '/' + path})
          return res.end()
        }
      }*/
      if (iso === 'ES') {
        if (dominio !== 'liderlogo.es') {
          res.writeHead(301, {Location: 'https://liderlogo.es/' + path})
          return res.end()
        }
      } else {
        if (dominio === 'liderlogo.es') {
          res.writeHead(301, {Location: 'https://liderlogo.com/' + path})
          return res.end()
        }
      }
    }
  } else {
    console.log('Estas en: ' + req.iso + ' (server)')
  }

  next()
}
