import Vue from "vue";
import Router from "vue-router";
import Radar from "../examples/radar"

Vue.use(Router);

const router = new Router({
    routes: [
        { path: "/", component: Radar, name: 'radar' },
        { path: "/radar", component: Radar, name: 'radar' },
        { path: '/lotto', component: () => import('../examples/lotto/index'), name: 'lotto' },
        { path: '/scrollNotice', component: () => import('../examples/scrollNotice/index'), name: 'scrollNotice' }
    ]
});

export default router;