import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Disclaimer from '../page/disclaimer/disclaimer'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
        meta: {
            title: 'CHAINDIGG-用数据为区块链护航'
        }
    },
    {
      path: '/disclaimer',
      name: 'announcement',
      component: Disclaimer,
      meta: {
          title: '免责声明-Chaindigg-区块链+大数据领域的分析专家'
      }
    }
  ]

})

