<template>
  <div class="root">
    <header>
      <span class="nav"></span> huodong
    </header>
    <section class="main">
      <aside style="display:block">
        <router-link :to="{name:'radar'}">radar 雷达图</router-link>
        <router-link :to="{name:'lotto'}">lotto 抽奖乐透</router-link>
      </aside>
      <section class='container'>
        <div class="inner">
          <keep-alive>
            <router-view></router-view>

          </keep-alive>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
  export default {
    name: "root",
    data() {
      return {};
    },
    mounted() {},
    computed: {},
    methods: {},
    components: {}
  };
</script>

<style lang="scss">
  @import "../common/sass/reset";
  @import "../common/sass/global";
  @import "./index";
</style>
