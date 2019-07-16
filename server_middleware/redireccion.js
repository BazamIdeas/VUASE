const url = require('url')

module.exports = function (req, res, next) {
  if (process.env.NODE_ENV === 'production') {
    if (!req.headers['user-agent'].match(/bot|crawl|slurp|spider/i)) {
      const iso = req.iso

      const dominio = req.headers.host
      const path = url.parse(req.url).pathname
      const query = url.parse(req.url, true).query

      console.log("Iso: " + iso)
      console.log("Dominio: " + dominio)

      if (iso === 'JP' && query && !query.pais) {
        if (dominio !== 'www.liderlogo.es' && dominio !== 'liderlogo.es') {
          res.writeHead(301, {Location: 'http://www.liderlogo.es' + path})
          return res.end()
        }
      } else {
        if (dominio === 'www.liderlogo.es' || dominio === 'liderlogo.es') {
          res.writeHead(301, {Location: 'http://www.liderlogo.com' + path})
          return res.end()
        }
      }
    }
  } else {
    console.log('Estas en: ' + req.iso + ' (server)')
  }

  next()
}
