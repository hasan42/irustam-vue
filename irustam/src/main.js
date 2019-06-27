import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue();
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
Vue.use({
    install: function (Vue) {
        Vue.prototype.$jQuery = require('jquery');
    }
})