<template>
  <div class="root">
    <header>
      <span class="nav"
        @click="isShowAside=!isShowAside"></span> huodongUI
    </header>
    <section class="main">
      <aside style="display:block"
        :class="{show:isShowAside,hide:!isShowAside}">
        <router-link :to="{name:route.name}"
          v-for="(route,index) in routerArr"
          :key="index">{{route.name}}</router-link>
      </aside>
      <section class='container'>
        <div class="inner">
          <router-view></router-view>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: "root",
  data() {
    return {
      isShowAside: false,
      routerArr: []
    };
  },
  mounted() {
    this.getRouteArr();
  },
  computed: {},
  methods: {
    getRouteArr() {
      let routers = require.context("../examples/", true, /\.vue$/);
      routers.keys().map(r => {
        let key = /\.\/([\s\S]*)\/[\s\S]*.vue/.exec(r)[1];
        this.routerArr.push({
          name: key
        });
      });
    }
  },
  components: {}
};
</script>

<style lang="scss">
  @import "../common/sass/reset";
  @import "../common/sass/global";
  @import "./index";
</style>
