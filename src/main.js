import Vue from 'vue';
import Vuex from  'vuex';
import iView from 'iview';
import VueRouter from 'vue-router';
import VueCookies from 'vue-cookies';
import Routers from './router';
import Util from './libs/util';
import App from './app.vue';
import 'iview/dist/styles/iview.css';

Vue.use(VueRouter);
Vue.use(iView);
Vue.use(Vuex);
Vue.use(VueCookies);

Vue.prototype.$http = Util.http  //vue加入新方法

const store = new Vuex.Store({
    state: {
        user:'',
    },
    mutations:{
        addUser(state,name){
            state.user=name;
        },
   
    }
})



// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
  
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    if (to.path == '/login'){
        next();
    }else {
        if (Vue.cookies.get('sessionid')) {
            next();
        } else {
            next('/login');
        }
    }
});

router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

new Vue({
    el: '#app',
    router: router,
    store:store,
    render: h => h(App)
});
