import Vue from "vue";
import Router from "vue-router";
import Radar from "../examples/radar"

Vue.use(Router);

const router = new Router({
    routes: [
        { path: "/", component: Radar, name: 'radar' },
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