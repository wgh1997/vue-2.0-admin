import Vue from 'vue'
import router from "./index.js" 
import store from '@/store/index'
import { permissionJudge } from '../utils/recursion-router'
import Router from 'vue-router'
router.beforeEach((to, from, next) => {
  
    if (!store.state.UserToken) {
        if (to.matched.length > 0 &&!to.matched.some(record => record.meta.requiresAuth)) {
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
const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}
