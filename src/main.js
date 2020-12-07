import Vue from 'vue'

import App from '@/App'
import store from '@/store/index'
import htmlToPdf from './pages/Export/excel/htmlToPdf'
import moment from 'moment'
import filters from "./filter";
import router from '@/router/index'
import './router/permission.js'

Vue.prototype.$moment = moment;
Vue.use(htmlToPdf)
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.scss'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/index.css'
import axios from './config/httpConfig'
Vue.prototype.$http = axios
Vue.use(VXETable)
Vue.use(ElementUI)
Vue.config.productionTip = false


//过滤器
for (var key in filters) {
    Vue.filter(key, filters[key]);
}




new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
