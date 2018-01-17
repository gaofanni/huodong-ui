import Vue from 'vue'
import App from './index.vue'
import router from '../router/index';
import hlMixin from '../mixin/hl';

//全局混合代码高亮组件vueCode
//可任意使用
Vue.mixin(hlMixin);

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})