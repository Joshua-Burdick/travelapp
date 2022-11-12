import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'
import Keys from './assets/keys.json'

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: Keys.Maps,
    libraries: "places"
  }
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
