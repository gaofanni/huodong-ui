import Vue from 'vue'
import App from './index.vue'
import router from '../router/index';
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui';

Vue.use(ElementUI);

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})