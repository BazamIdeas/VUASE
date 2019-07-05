const MMDBReader = require('mmdb-reader')
const url = require('url')
const Cookies = require('cookies')

module.exports = function (req, res, next) {
  const ip = req.headers['x-real-ip'] || '190.19.204.10'
  const query = url.parse(req.url, true).query
  const cookies = new Cookies(req, res)

  cookies.set('liderlogo_client_ip', ip)
  req.cookies = cookies

  if (query && query.pais) {
    req.iso = query.pais
  } else {
    const reader = new MMDBReader('src/static/GeoIP2-Country.mmdb')
    req.iso = reader.lookup(ip).country.iso_code
  }

  next()
}
