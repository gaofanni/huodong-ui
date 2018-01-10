<template>
  <div class="wrap">
    <div class="info">
      <div class='title'>弹幕</div>
      <div class="author">gaofanni</div>
    </div>
    <Barrage :data='barrageData'
      :isStopBarrage="isStopBarrage"
      class='barrage-content'>
      <li></li>
    </Barrage>
    <div class="stop"
      @click="stopBarrage">{{isStopBarrage?'开始弹幕':'暂停弹幕'}}</div>
    <div class="btn-showCode"
      @click="isShowCode=!isShowCode">{{isShowCode?`隐藏代码`:`显示代码`}}</div>
    <div class="code"
      v-show="isShowCode">
      <div class="tips">在组件内定制样式，需要插入一条li写入默认样式，且每一条的纵向高度需定制，className需以<span class='hl'>txt-</span>开头，如第一行的为txt-0</div>
      <pre v-pre>
        <code>
              &ltBarrage  :data='barrageData' 
                          :isStopBarrage="isStopBarrage" 
                          class='barrage-content'&gt
                &ltli&gt&lt/li&gt
              &lt/Barrage&gt

              &ltscript&gt
                export default {
                  data(){
                    return {
                      barrageData: [
                        "游戏直播与视频分享神器",
                        "与主播零距离互动大量高端游戏赛事大量高端游戏赛事",
                        "大量高端游戏赛事",
                        "游戏直播与视频分享神器大量高端游戏",
                        "与主播零距离互动大量高端游戏赛事大量高端游戏赛事大量高端游戏",
                        "大量高端游戏赛事游戏赛事大量高端游戏",
                        "游戏直播与视频分享神器",
                        "与主播零距离互动大量高端游戏赛事大量高端",
                        "大量高端游戏赛事游戏赛事",
                        "游戏直播与视频分享神器",
                        "与主播零距离互动大量高端游戏赛事大量高端游戏赛事大量高端游戏",
                        "大量高端"
                      ]
                    }
                  },
                  methods: {
                    //暂停弹幕、开始弹幕
                    stopBarrage() {
                      this.isStopBarrage = !this.isStopBarrage;
                    }
                  },
                }
              &lt/script&gt
              &ltstyle lang="scss" &gt
                  .barrage-content {
                    position: relative;
                    display: inline-block;
                    width: re(520);
                    height: re(176);
                    overflow: hidden;
                    border: 1px solid #999;
                    li {
                      display: inline-block;
                      position: absolute;
                      left: re(520);
                      padding: 0 re(40);
                      height: re(47);
                      border: 1px solid #bf8555;
                      line-height: re(47);
                      white-space: nowrap;
                      background-color: #2d1711;
                      color: #bf8555;
                      &.txt-0 {
                        top: 0;
                      }
                      &.txt-1 {
                        top: re(66);
                      }
                      &.txt-2 {
                        top: re(129);
                      }
                    }
                  }
              &lt/style&gt
        </code>
      </pre>
    </div>
    <table class="attributes">
      <caption class="title">Attributes</caption>
      <thead class="">
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>默认值</th>
        <th>可选值</th>
      </thead>
      <tbody class>
        <tr>
          <td>data</td>
          <td>弹幕内容</td>
          <td>Array</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>isStopBarrage</td>
          <td>是否暂停弹幕，为true后，会走完当前已经添加的弹幕，不再增加弹幕</td>
          <td>Boolean</td>
          <td>false</td>
          <td>true/false</td>
        </tr>
        <tr>
          <td>MAX</td>
          <td>位置上一共有多少条的位置</td>
          <td>Number</td>
          <td>3</td>
          <td>-</td>
        </tr>
        <tr>
          <td>intervalTime</td>
          <td>每一条弹幕插入的间隔时间，与前一条的宽度正相关</td>
          <td>Number</td>
          <td>50</td>
          <td>-</td>
        </tr>
        <tr>
          <td>speed</td>
          <td>每一条弹幕的移动速度，越大越快</td>
          <td>Number</td>
          <td>200</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import Barrage from "../../packages/barrage/index";
  export default {
    data() {
      return {
        isShowCode: false,
        isStopBarrage: false,
        barrageData: [
          "游戏直播与视频分享神器",
          "与主播零距离互动大量高端游戏赛事大量高端游戏赛事",
          "大量高端游戏赛事",
          "游戏直播与视频分享神器大量高端游戏",
          "与主播零距离互动大量高端游戏赛事大量高端游戏赛事大量高端游戏",
          "大量高端游戏赛事游戏赛事大量高端游戏",
          "游戏直播与视频分享神器",
          "与主播零距离互动大量高端游戏赛事大量高端",
          "大量高端游戏赛事游戏赛事",
          "游戏直播与视频分享神器",
          "与主播零距离互动大量高端游戏赛事大量高端游戏赛事大量高端游戏",
          "大量高端"
        ]
      };
    },
    methods: {
      stopBarrage() {
        this.isStopBarrage = !this.isStopBarrage;
      }
    },
    components: { Barrage }
  };
</script>

<style lang="scss" >
  @import "../../common/sass/global";
  .barrage-content {
    position: relative;
    display: inline-block;
    width: re(520);
    height: re(176);
    overflow: hidden;
    border: 1px solid #999;
  }
  li {
    display: inline-block;
    position: absolute;
    left: re(520);
    padding: 0 re(40);
    height: re(47);
    border: 1px solid #bf8555;
    line-height: re(47);
    white-space: nowrap;
    background-color: #2d1711;
    color: #bf8555;
    &.txt-0 {
      top: 0;
    }
    &.txt-1 {
      top: re(66);
    }
    &.txt-2 {
      top: re(129);
    }
  }
  .stop {
    @include whr(180,40);
    line-height: re(40);
    display: inline-block;
    border: 1px solid #999;
    cursor: pointer;
    user-select: none;
  }
</style>


