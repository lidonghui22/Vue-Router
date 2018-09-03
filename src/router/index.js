import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Hi3 from '@/components/Hi3'
import Params from '@/components/Params'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/hi',
            component: Hi,
            children:[
                {
                    path: '/',
                    name: 'hi',
                    component: Hi,
                },
                {
                    path: 'hi1',
                    name: 'hi1',
                    component: Hi1,
                },
                {
                    path: 'hi2',
                    name: 'hi2',
                    component: Hi2,
                }
            ]
        },
        {
            path: '/params/:newsId/:newsTitle',
            name: 'params',
            component: Params
        },
        {
            path: '/goHome',
            redirect: '/'
        },
        {
            path: '/goPatams/:newsId/:newsTitle',
            redirect: '/params/:newsId/:newsTitle'
        },{
            path: '/hi3',
            component: Hi3,
            alias: '/lidonghui'
        }
    ]
})
