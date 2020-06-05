import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'

import VueCompositionApi from '@vue/composition-api'

import UI from '../packages/index'

import 'ant-design-vue/dist/antd.less'

Vue.use(Antd)
Vue.use(UI)
Vue.use(VueCompositionApi)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')