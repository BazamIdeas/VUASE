const url = require('url')

module.exports = function (req, res, next) {
  if (process.env.NODE_ENV === 'production') {
    if (!req.headers['user-agent'].match(/bot|crawl|slurp|spider/i)) {
      const iso = req.iso

      const dominio = req.headers.host
      const path = url.parse(req.url).pathname
      const query = url.parse(req.url, true).query

      if (iso === 'ES' && query && !query.pais) {
        if (dominio !== 'liderlogo.es') {
          res.writeHead(301, {Location: 'https://www.liderlogo.es' + path})
          return res.end()
        }
      } else {
        if (dominio === 'liderlogo.es') {
          res.writeHead(301, {Location: 'https://www.liderlogo.com' + path})
          return res.end()
        }
      }
    }
  } else {
    console.log('Estas en: ' + req.iso + ' (server)')
  }

  next()
}
