export default ({ app }) => {
/* global dataLayer  */
/* eslint no-undef: "error" */

  app.router.afterEach((to, from) => {
    // console.log(to.fullPath)
    dataLayer.push({
      'event': 'VirtualPageview',
      'virtualPageURL': to.fullPath
    })
  })
}
