import Vue from 'vue'
import VueTilt from 'vue-tilt.js'
// import Embed from 'v-video-embed'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { BEmbed } from 'bootstrap-vue'
import { BCarousel } from 'bootstrap-vue'
import { CarouselPlugin } from 'bootstrap-vue'
import App from './App.vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(VueTilt)

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(CarouselPlugin)

Vue.component('b-carousel', BCarousel)
Vue.component('b-embed', BEmbed)

new Vue({
  render: h => h(App),
}).$mount('#app')
