import Vue from 'vue'
import Router from 'vue-router'
import App from './App'

Vue.use(Router)

Router.prototype.go = function() {
    this.isBack = true
    window.history.go(-1)
}

// 路由懒加载
const index = () =>
    import ('@/views/index/index')
const channel = () =>
    import ('@/views/index/children/channel')
const detail = () =>
    import ('@/views/detail/detail')
const search = () =>
    import ('@/views/search/search')

export default new Router({
    routes: [{
        path: '',
        redirect: '/index',
        component: App,
        children: [
            // index页面
            {
                name: 'index',
                path: '/index',
                component: index,
                children: [
                    // channel页面
                    {
                        name: 'channel',
                        path: 'channel',
                        component: channel
                    }
                ]
            },
            // detail页面
            {
                name: 'detail',
                path: '/detail',
                component: detail
            },
            // search页面
            {
                name: 'search',
                path: '/search',
                component: search
            }
        ]
    }]
})