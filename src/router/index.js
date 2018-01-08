import Vue from "vue";
import Router from "vue-router";
import Radar from "../examples/radar"
import Lotto from '../examples/lotto/index'

Vue.use(Router);

const router = new Router({
    routes: [
        { path: "/", component: Radar, name: 'radar' },
        { path: "/radar", component: Radar, name: 'radar' },
        { path: '/lotto', component: Lotto, name: 'lotto' }
        // {
        //     path: "/Home",
        //     component: Home,
        //     name: "Home",
        //     children: [
        //         { path: "/home", redirect: "/home/index" },
        //         {
        //             path: "/home/index",
        //             component: index
        //         },
        //         {
        //             path: "/home/rules",
        //             component: rules
        //         }
        //     ]
        // }
    ]
});

export default router;