import Vue from 'vue'
import App from '@/App'
import store from '@/store/index'
import router from '@/router/index'
import htmlToPdf from './pages/Export/excel/htmlToPdf'
import moment from 'moment'
import filters from "./filter";
import { permissionJudge } from './utils/recursion-router'
Vue.prototype.$moment = moment;
Vue.use(htmlToPdf)
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.scss'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/index.css'


import axios from './config/httpConfig'
import * as globalFilter from './filters/filters'

Vue.prototype.$http = axios

Object.keys(globalFilter).forEach(key => {
    Vue.filter(key, globalFilter[key])
})
Vue.use(VXETable)
Vue.use(ElementUI)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    if (!store.state.UserToken) {
        if (
            to.matched.length > 0 &&
            !to.matched.some(record => record.meta.requiresAuth)
        ) {
            next()
        } else {
            next({ path: '/login' })
        }
    } else {
        if (!store.state.permission.permissionList) {
            store.dispatch('permission/FETCH_PERMISSION').then(() => {
                next({ path: to.path })
            })
        } else {
            if (to.path !== '/login') {
                next()
            } else {
                next(from.fullPath)
            }
        }
    }
})

router.afterEach((to, from, next) => {
    var routerList = to.matched
    store.commit('setCrumbList', routerList)
    store.commit('permission/SET_CURRENT_MENU', to.name)
})

//过滤器
for (var key in filters) {
    Vue.filter(key, filters[key]);
}



//按钮的权限
Vue.directive('has', {
    inserted: function (el, binding) {
        console.log(binding, el)
        console.log(permissionJudge(binding.expression))
        if (!permissionJudge(binding.expression)) {
            el.parentNode.removeChild(el);
        }
        function permissionJudge (value) {
            // 此处store.getters.getMenuBtnList代表vuex中储存的按钮菜单数据
            let list = store.getters.getMenuBtnList;
            for (let item of list) {
                if (item == value) {
                    return true;
                } else {
                    return false;
                }
            }

        }
    }


});
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
