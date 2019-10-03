export default ({ app, route }) => {
/* global dataLayer  */
/* eslint no-undef: "error" */

  app.router.afterEach((to, from) => {
    var utm = {'event': 'VirtualPageview'}
    if (route.query.source) {
      utm.source = route.query.source
      utm.medium = route.query.medium
      utm.campaign = route.query.campaign
      utm.keyword = route.query.kw
    }
    utm.virtualPageURL = to.path
    dataLayer.push(utm)
  })
}
