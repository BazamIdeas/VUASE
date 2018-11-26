var AgileCRMManager = require('../../node_modules/agile_crm/agilecrm.js')
const api = new AgileCRMManager('bazam.agilecrm.com/', 'vhnq8gsqt163q4h41eseqk1fij', 'web@bazamdev.com')

export function getContactByEmail (email) {
  api.contactAPI.getContactByEmail(email, (res) => {
    return res
  }, (err) => {
    return err
  })
}

export function addContact (data) {
  api.contactAPI.add(data, (res) => {
    console.log(res)
  }, (err) => {
    console.log(err)
  })
}
