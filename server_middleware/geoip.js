const MMDBReader = require('mmdb-reader');

module.exports = function (req, res, next) {

    let ip = null

    if (process.env.NODE_ENV !== 'production') {
        ip = "190.246.249.12"
    } else {
        ip = req.headers["x-forwarder-for"]
    }

    let reader = new MMDBReader('src/static/GeoIP2-Country.mmdb')

    req.geo = reader.lookup(ip)

    console.log(req.geo)

    next()
}
