const url = require('url')

module.exports = function (req, res, next) {
  if (process.env.NODE_ENV !== 'production') {
<<<<<<< HEAD
    console.log('Estas en: ' + req.iso)
=======
    console.log("Estas en: "+ req.iso + ' (server)')
>>>>>>> bc1574175d1dd710b7168fa92999b79698b68d98
    next()
  } else {
    let iso = req.iso

    let dominio = req.headers.host

    let path = url.parse(req.url).pathname
<<<<<<< HEAD
=======
      
    let paises =  {
      "AR" : "liderlogo.com",
      "ES" : "liderlogo.es"
    }
>>>>>>> bc1574175d1dd710b7168fa92999b79698b68d98

    let paises = {
      'AR': 'liderlogo.com',
      'ES': 'liderlogo.es'
    }

    if (paises[iso]) {
      if (paises[iso] === dominio) {
        next()
      } else {
        res.writeHead(301, {Location: 'https://' + paises[iso] + '/' + path})
        return res.end()
      }
    } else {
      res.writeHead(301, {Location: 'https://www.liderlogo.com' + path})
      return res.end()
    }
  }
}
