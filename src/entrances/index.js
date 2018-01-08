import Vue from 'vue'
import App from './index.vue'
import router from '../router/index';
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui';
import hlMixin from '../mixin/hl';

//全局混合代码高亮
Vue.mixin(hlMixin);

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})