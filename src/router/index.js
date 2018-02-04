import Vue from "vue";
import Router from "vue-router";
import Radar from "../examples/radar"

Vue.use(Router);

// let examples = require.context('../examples/', true, /\.vue$/);
// let routes = [];
// routes.push({ path: "/", component: Radar, name: 'index' });

// examples.keys().forEach(r => {
//     let key = /\.\/([\s\S]*)\/[\s\S]*.vue/.exec(r)[1];
//     console.log(key)
//     routes.push({
//         path: `/${key}`,
//         component: examples(r),
//         name: key
//     })
// })
// console.log(examples)
const router = new Router({
    routes: [
        { path: "/", component: Radar, name: 'index' },
        { path: "/radar", component: Radar, name: 'radar' },
        { path: '/lotto', component: () => import('../examples/lotto/index'), name: 'lotto' },
        { path: '/scrollNotice', component: () => import('../examples/scrollNotice/index'), name: 'scrollNotice' },
        { path: '/barrage', component: () => import('../examples/barrage/index'), name: 'barrage' },
        { path: '/gameboxShare', component: () => import('../examples/gameboxShare/index'), name: 'gameboxShare' },
        { path: '/guessPic', component: () => import('../examples/guessPic/index'), name: 'guessPic' },
        { path: '/backTop', component: () => import('../examples/backTop/index'), name: 'backTop' },
        { path: '/uploadImg', component: () => import('../examples/uploadImg/index'), name: 'uploadImg' },
    ]
});

export default router;