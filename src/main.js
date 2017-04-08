// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import引入路由组件
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from './components/goods/goods';
import ratings from './components/ratings/ratings';
import seller from './components/seller/seller';

//开启debug模式
Vue.config.debug=true;

Vue.use(VueRouter);   //引用router文件
Vue.use(VueResource);

//定义路由
const routes=[
  {path: '/goods', component: goods},
  {path: '/ratings', component: ratings},
  {path: '/seller', component: seller}
];
//创建路由实例
const router=new VueRouter({
  linkActiveClass: 'active',           //把路由的配置属性名改为active类名
  mode: 'history',
  //es6缩写  相当于routes:routes
  routes
});
//最后创建vue实例并挂载
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',  //加上
  components: { App },
  router,
  render: h => h(App)
});
console.log(App);

//router.push('/goods');  //进入页面时跳转到的页面
/*  new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});*/
