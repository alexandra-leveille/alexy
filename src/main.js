// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import * as VueGoogleMaps from 'vue2-google-maps'
//import BootstrapVue from 'bootstrap-vue'

Vue.config.productionTip = false

//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'

//Vue.use(BootstrapVue);

Vue.use(axios);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAJDAEmDz_rFm-UIcch7cNcJR1QeWkERgw',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    // v: '3.26',
  },

});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
