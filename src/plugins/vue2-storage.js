import Vue from 'vue'
import Vue2Storage from 'vue2-storage'

Vue.use(Vue2Storage, {
  prefix: 'liderlogo_',
  driver: 'local',
  ttl: 604800000 // 1 week
})
