export default ({ app, route }) => {
/* global dataLayer  */
/* eslint no-undef: "error" */

  if (route.query.source) {
    let utm = {
      source: route.query.source,
      medium: route.query.medium,
      campaign: route.query.campaign,
      keyword: route.query.kw
    }
    localStorage.setItem('utm_liderlogo', JSON.stringify(utm))
  }

  app.router.afterEach((to, from) => {
    dataLayer.push({
      'event': 'VirtualPageview',
      'virtualPageURL': to.path
    })
  })
}
