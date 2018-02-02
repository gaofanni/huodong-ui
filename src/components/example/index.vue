<template>
    <div class="wrap">
        <div class="info">
            <div class='title'>{{info.title}}</div>
            <div class="author">{{info.author}}</div>
            <div class="tip">{{info.tip}}</div>
        </div>
        <slot></slot>
        <div class="btn-showCode"
            @click="isShowCode=!isShowCode">{{isShowCode?`隐藏代码`:`显示代码`}}</div>
        <div class="code-wrap"
            v-show="isShowCode">
            <div class="tips"
                v-html="tips">
            </div>
            <pre class="code language-markup"
                v-show="isShowCode"
                v-html="html">
            </pre>
        </div>
        <table class="attributes"
            v-if="tableInfo.attributes">
            <caption class="title">Attributes</caption>
            <thead>
                <th>参数</th>
                <th>说明</th>
                <th>类型</th>
                <th>默认值</th>
                <th>可选值</th>
            </thead>
            <tbody>
                <tr v-for="body in tableInfo.attributes">
                    <td>{{body.propName}}</td>
                    <td>{{body.explain}}</td>
                    <td>{{body.type}}</td>
                    <td>{{body.default}}</td>
                    <td>{{body.choose}}</td>
                </tr>
            </tbody>
        </table>
        <table class='events'
            v-if="tableInfo.events">
            <caption class="title">Events</caption>
            <thead>
                <th>事件名</th>
                <th>说明</th>
                <th>arguments</th>
            </thead>
            <tbody>
                <tr v-for="event in tableInfo.events">
                    <td>{{event.eventsName}}</td>
                    <td>{{event.explain}}</td>
                    <td>{{event.arguments}}</td>
                </tr>
            </tbody>
        </table>
        <table class='slot'
            v-if="tableInfo.slot">
            <caption class="title">Slot</caption>
            <thead>
                <th>插槽名</th>
                <th>说明</th>
            </thead>
            <tbody>
                <tr v-for="event in tableInfo.slot">
                    <td>{{event.slotName}}</td>
                    <td>{{event.explain}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
  name: "example",
  props: {
    info: {
      default: {}
    },
    code: {
      default: {}
    },
    tips: {
      default: ""
    },
    tableInfo: {
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      isShowCode: false
    };
  },
  methods: {},
  components: {}
};
</script>

<style lang="scss" scoped>
    @import "../../common/sass/global";
    .container {
      color: #333;
      text-align: center;
      display: inline-block;
      height: 100%;
      width: 100%;
      .inner {
        padding-top: re(20);
      }
    }
    //模块样式
    .wrap {
      width: re(640);
      // box-shadow: 0 0 re(10) rgba(100, 100, 100, 0.2);
      margin: 0 auto;
      background: white;
      padding: re(20) 0;
      font-size: re(16);
    }
    .btn-showCode {
      width: 100%;
      height: re(40);
      font-size: re(16);
      line-height: re(40);
      cursor: pointer;
      background: #f8f8f8;
      color: #646464;
      margin-top: re(20);
      -webkit-user-select: none;
    }
    .hl {
      color: #f75555;
    }
    //代码块样式
    pre {
      overflow-x: auto !important;
      font-size: re(12) !important;
      font-weight: 400;
      &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        background-color: #f5f5f5;
        display: block;
      }
      /*定义滚动条的轨道，内阴影及圆角*/
      &::-webkit-scrollbar-track {
        border-radius: 10px;
        background-color: #f5f5f5;
      }
      /*定义滑块，内阴影及圆角*/
      &::-webkit-scrollbar-thumb {
        /*width: 10px;*/
        height: 20px;
        border-radius: 10px;
        background-color: #999;
      }
    }
    .code-wrap {
      .tips {
        background: #f8f8f8;
        font-size: re(12);
        padding: re(10) re(40);
        text-align: left;
        color: #646464;
      }
    }

    //标题样式
    .info {
      margin-bottom: re(40);
      text-align: left;
      font-size: 0;
      margin-left: re(20);
      .title {
        font-size: re(24);
        display: inline-block;
        vertical-align: middle;
      }
      .author {
        font-size: re(16);
      }
      .tip {
        font-size: re(14);
        color: #999;
      }
    }
    //表格样式
    table {
      margin-top: re(20);
      font-size: re(14);
      width: 100%;
      .title {
        text-align: left;
        font-size: re(20);
        height: re(40);
        line-height: re(40);
        padding-left: re(10);
        color: #3182bd;
      }
      td,
      th {
        padding-left: re(10);
        color: #333;
        border-bottom: 1px solid #d8d8d8;
        padding: re(8);
        max-width: re(250);
        text-align: left;
      }
    }
</style>


