import Vue from 'vue'
import App from './App.vue'
// vuex引入


Vue.config.productionTip = false
//添加插件

//引入store
// import语句优先执行
import store from './store'
const vm = new Vue({
  render: h => h(App),
  store,
}).$mount('#app')

console.log(vm)