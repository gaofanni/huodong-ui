<template>
  <div class="wrap">
    <Example :info="exampleInfo.info"
      :code="exampleInfo.code"
      :tips="exampleInfo.tips"
      :tableInfo="exampleInfo.tableInfo">
      <Barrage :data='barrageData'
        ref="barrage"
        :isStopBarrage="isStopBarrage"
        class='barrage-content'>
        <li></li>
      </Barrage>
      <div class="stop"
        @click="stopBarrage">暂停弹幕</div>
      <div class="stop"
        @click="startBarrage">开始弹幕</div>
    </Example>
  </div>
</template>

<script>
import Barrage from "../../packages/barrage/index";
import Example from "../../components/example/index";
export default {
  data() {
    return {
      exampleInfo: {
        info: {
          title: "弹幕",
          author: "gaofanni",
          tip:
            "使用transition完成动画，保证移动的流畅程度，但暂停弹幕无法直接停止移动，需要等当前已增加弹幕走完"
        },
        code: `
                          <Barrage :data='barrageData'
                            ref="barrage"
                            class='barrage-content'>
                            <li></li>
                          </Barrage>
                          <div class="stop" @click="stopBarrage">暂停弹幕</div>
                          <div class="stop" @click="startBarrage">开始弹幕</div>

                          <script>
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
                              mounted() {
                                this.startBarrage();
                              },
                              methods: {
                                stopBarrage() {
                                  this.$refs.barrage.stopBarrage();
                                },
                                startBarrage() {
                                  this.$refs.barrage.startBarrage();
                                }
                              },
                            }
                          <\/script>
                          <style lang="scss" scoped>
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
                          </style>
                    `,
        tips: `在组件内定制样式，<span class="hl">需要插入一条li写入默认样式</span>，且每一条的纵向高度需定制，<span class='hl'>className需以txt-开头</span>，如第一行的为txt-0，依次类推`,
        tableInfo: {
          attributes: [
            {
              propName: `data`,
              explain: `弹幕内容`,
              type: `Array`,
              default: `-`,
              required: `true`
            },
            {
              propName: `MAX`,
              explain: `位置上一共有多少条的位置`,
              type: `Number`,
              default: `3`,
              required: `false`
            },
            {
              propName: `intervalTime`,
              explain: `每一条弹幕插入的间隔时间，与前一条的宽度正相关`,
              type: `Number`,
              default: `50`,
              required: `false`
            },
            {
              propName: `speed`,
              explain: `每一条弹幕的移动速度，越大越快`,
              type: `Number`,
              default: `200`,
              required: `false`
            }
          ],
          methods: [
            {
              name: "stopBarrage",
              explain: "暂停弹幕",
              param: "-"
            },
            {
              name: "startBarrage",
              explain: "开始弹幕",
              param: "-"
            }
          ]
        }
      },
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
  mounted() {
    this.startBarrage();
  },
  methods: {
    stopBarrage() {
      this.$refs.barrage.stopBarrage();
    },
    startBarrage() {
      this.$refs.barrage.startBarrage();
    }
  },
  components: { Barrage, Example }
};
</script>

<style lang="scss" scoped>
  @import "../../common/sass/global";
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
  .stop {
    @include whr(180,40);
    line-height: re(40);
    display: inline-block;
    border: 1px solid #999;
    cursor: pointer;
    user-select: none;
  }
</style>


