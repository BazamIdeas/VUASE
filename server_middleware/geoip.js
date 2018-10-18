const MMDBReader = require('mmdb-reader')
const url = require('url')

module.exports = function (req, res, next) {
  let query = url.parse(req.url, true).query

  if (query && query.pais) {
    req.iso = query.pais
    next()
  }

  if (process.env.NODE_ENV === 'production') {
    let ip = req.headers['x-real-ip']
    let reader = new MMDBReader('src/static/GeoIP2-Country.mmdb')
    req.iso = reader.lookup(ip).country.iso_code
  } else {
    req.iso = 'VE'
  }

  next()
}
