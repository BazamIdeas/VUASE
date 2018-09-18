const url = require("url")

module.exports = function (req, res, next) {

  if (process.env.NODE_ENV !== 'production') {
    console.log("Estas en: "+ req.iso)
    next()
  }

  else{

    let iso = req.iso

    let dominio = req.headers.host 

    let path = url.parse(req.url).pathname
      
    let paises =  {
      "AR" : "liderlogo.com",
      "ES" : "liderlogo.es"
    }

    if (paises[iso]){
      if (paises[iso] == dominio){
        next()
      }
      else {
        res.writeHead(301,{Location: "https://"+paises[iso]+"/"+path})
        return res.end()
      }
      
    }

    else{
      res.writeHead(301,{Location: "https://www.liderlogo.com" + path})
      return res.end()
    }
  } 
}


