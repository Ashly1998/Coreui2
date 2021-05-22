//import "@coreui/coreui/scss/coreui.scss"
import Vue from 'vue'
import App from './App.vue'
import CoreuiVue from '@coreui/vue'
Vue.use(CoreuiVue);
import CoreuiVueCharts from '@coreui/vue-chartjs'
Vue.use(CoreuiVueCharts)
import { cilPencil, cilSettings } from '@coreui/icons'
 
//import './assets/app.scss'
//require'./assets/app.scss'
 

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  icons: { cilPencil, cilSettings }
}).$mount('#app')
