import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps';

// import axios from 'axios'
// import VueAxios from 'vue-axios'
window.$ = require('jquery');
window.jQuery = require('jquery');

window.axios = require('axios');

// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// window.axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

Vue.config.productionTip = false;
// Vue.use(VueAxios, axios);
Vue.use({
  install: function(Vue){
    Vue.prototype.$jQuery = require('jquery'); // you'll have this.$jQuery anywhere in your vue project
  }
});

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAoN8Mzv8eA-BBI3M_zsiQJdUg5jtwXaQk',
    v: '3.26',
  },
  // Demonstrating how we can customize the name of the components
  installComponents: true,
});

new Vue({
  render: h => h(App),
}).$mount('#wrapper')
