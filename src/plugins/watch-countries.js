let countriesObj = {}
let interval = null

async function getAllCountries ($axios) {
  let countries = []

  try {
    countries = await $axios.get('countries')
  } catch (error) {
    console.log(error)
    return
  }

  countries.data.forEach(c => {
    countriesObj[c.iso] = c
  })

  // console.log(countriesObj)
}

export default async function ({ $axios, req }) {
  if (process.server) {
    if (interval === null) {
      console.log('NO INTERVAL')
      try {
        await getAllCountries($axios)
        interval = setInterval(async function () { await getAllCountries($axios) }, 20000)
        if (req) {
          req.countries = countriesObj
        }
      } catch (error) {
      }
    }
  }
}
