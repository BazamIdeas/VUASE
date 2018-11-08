import Vue from 'vue'
import VueCookies from 'vue-cookies'

Vue.use(VueCookies)

const vue = new Vue()
vue.$cookies.config(60 * 60 * 24 * 30, '')
