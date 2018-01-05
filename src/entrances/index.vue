<template>
  <div class="root">
    <el-container>
      <el-header></el-header>
      <el-container>
        <el-aside width="200px"
          style="display:block">
          <router-link :to="{name:'radar'}">radar</router-link>
          <a href="">radar</a>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
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
  html,
  body {
    text-align: center;
    font-size: 32;
  }
  .el-header,
  .el-footer {
    border-bottom: 1px solid #b3c0d1;
    color: #333;
    text-align: center;
  }

  .el-aside {
    background-color: #f6faff;
    color: #333;
    text-align: center;
    font-size: re(20);
    a {
      display: block;
      width: 100%;
      height: re(44);
      line-height: re(44);
      text-align: left;
      padding-left: re(20);
      color: #999;
      &.router-link-exact-active,
      &.router-link-active {
        color: #3182bd;
        // font-weight: 600;
      }
    }
  }
  .el-main {
    color: #333;
    text-align: center;
  }
  //模块样式
  .wrap {
    width: re(600);
  }
  // 代码块样式
  .code {
    display: inline-block;
    font-size: re(16);
    text-align: left;
    width: re(600);
  }
</style>
