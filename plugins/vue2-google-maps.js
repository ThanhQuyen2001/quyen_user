import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.config.productionTip = false;
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBBW2OEoZdzWA_9SAp42t3u_wi0gyLWjLc',
    region: 'VI',
    language: 'vi',
  },
})