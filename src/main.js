import Vue from 'vue';
import FastClick from 'fastclick';
import App from './App';
import router from './router';
import store from './store';

// 解决移动端click事件300毫秒延迟方法
if ('addEventListener' in document) {
  document.addEventListener(
    'DOMContentLoaded',
    () => {
      FastClick.attach(document.body);
    },
    false,
  );
}


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
