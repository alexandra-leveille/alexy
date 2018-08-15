// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'
import router from './router'
import axios from 'axios'
import * as VueGoogleMaps from 'vue2-google-maps'
//import BootstrapVue from 'bootstrap-vue'
//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'

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
//this.$vuetify.theme.primary = '#4caf50';
Vue.use(Vuetify, {
  theme: {
    primary: '#3f51b5',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c'
  }
});

// Vue.use(Vuetify, {
//   theme: {
//     primary: 'red',
//     secondary: 'purple'
//   },
//   options: {
//     themeVariations: ['primary', 'secondary']
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
