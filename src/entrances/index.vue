<template>
  <div class="root">
    <header>
      <span class="nav"
        @click="isShowAside=!isShowAside"></span> huodong
    </header>
    <section class="main">
      <aside style="display:block"
        :class="{show:isShowAside,hide:!isShowAside}">
        <router-link :to="{name:'radar'}">radar 雷达图</router-link>
        <router-link :to="{name:'lotto'}">lotto 抽奖乐透</router-link>
        <router-link :to="{name:'scrollNotice'}">scrollNotice 跑马灯</router-link>
        <router-link :to="{name:'barrage'}">barrage 弹幕</router-link>
        <router-link :to="{name:'gameboxShare'}">gameboxShare 游戏盒分享</router-link>
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
      isShowAside: false
    };
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
