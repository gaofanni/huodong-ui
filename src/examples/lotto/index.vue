<template>
  <div class="wrap">
    <Example :info="exampleInfo.info"
      :code="exampleInfo.code"
      :tableInfo='exampleInfo.tableInfo'>
      <Lotto ref="lotto"
        :lottoResult="lottoResult"
        :rewardLen="rewardList.length"
        :num='scrollNum'
        @lottoOver="lottoOver">
        <div class="box"
          :slot='`box${index+1}`'
          v-for="(ele,index) in scrollNum">
          <div class="content">
            <ul>
              <li ref="scrollEl1"
                class="goods"
                v-for="(item,index) in rewardList"
                :class="`gift-${item.key}-s`"></li>
            </ul>
          </div>
        </div>
      </Lotto>
      <div class='btn btn-begin'
        @click="gameBeginFn"></div>
    </Example>
  </div>
</template>

<script>
import Lotto from "../../packages/lotto/index";
import Example from "../../components/example/index";
export default {
  data() {
    return {
      exampleInfo: {
        info: {
          title: "抽奖大乐透",
          author: "gaofanni",
          tip:
            "初始状态滚动展示抽奖结果，点击抽奖由组件外部传入抽奖结果，组件内部进行处理展示，抽奖结束后，继续滚动展示"
        },
        code: `
                      <Lotto ref="lotto"
                        :lottoResult="lottoResult"
                        :rewardLen="rewardList.length"
                        :num='scrollNum'
                        @lottoOver="lottoOver">
                        <div class="box" :slot="'box'+(index+1)" v-for="(ele,index) in scrollNum">
                          <div class="content">
                            <ul>
                              <li ref="scrollEl1" class="goods" v-for="(item,index) in rewardList" :class="'gift-'+item.key+'-s'"></li>
                            </ul>
                          </div>
                        </div>
                      </Lotto>
                      <div class='btn btn-begin'
                        @click="gameBeginFn"></div>

                      <script>
                          export default {
                              data() {
                                return {
                                    lottoResult: {},
                                    rewardList: [
                                      {
                                          key: "sizhongfen"
                                      },
                                      {
                                          key: "cake"
                                      },
                                      {
                                          key: "shengrikuaile"
                                      },
                                      {
                                          key: "laosiji"
                                      },
                                      {
                                          key: "shoujizhijia"
                                      },
                                      {
                                          key: "baozhen"
                                      },
                                      {
                                          key: "bangbangtang"
                                      },
                                      {
                                          key: "gouliang"
                                      }
                                    ],
                                    scrollNum: 3
                                };
                              },
                              methods: {
                                  gameBeginFn() {
                                    this.$refs.lotto.gameBegin();
                                  },
                                  lottoOver() {
                                    if (this.lottoResult.index) {
                                      alert("中奖啦");
                                      //模拟没中奖
                                      this.lottoResult = {};
                                    } else {
                                      alert("没中奖");
                                      //模拟中奖
                                      this.lottoResult = {
                                        index: 1
                                      };
                                    }
                                  }
                              },
                          }
                      <\/script>`,
        tableInfo: {
          attributes: [
            {
              propName: "lottoResult",
              explain: `中奖信息，中奖:{index:中奖的索引},没中奖:{}`,
              type: `Object`,
              default: `-`,
              required: "true"
            },
            {
              propName: "rewardLen",
              explain: `轮播图选项个数`,
              type: `Number`,
              default: `-`,
              required: "true"
            },
            {
              propName: "num",
              explain: `抽奖单元个数`,
              type: `Number`,
              default: `3`,
              required: "false"
            }
          ],
          events: [
            {
              eventsName: "lottoOver",
              explain: "抽奖动画结束时触发的事件",
              arguments: "-"
            }
          ],
          methods: [
            {
              name: "gameBegin",
              explain: "调用开始抽奖",
              param: "-"
            }
          ]
        }
      },
      lottoResult: {},
      rewardList: [
        {
          key: "sizhongfen"
        },
        {
          key: "cake"
        },
        {
          key: "shengrikuaile"
        },
        {
          key: "laosiji"
        },
        {
          key: "shoujizhijia"
        },
        {
          key: "baozhen"
        },
        {
          key: "bangbangtang"
        },
        {
          key: "gouliang"
        }
      ],
      scrollNum: 3
    };
  },
  methods: {
    gameBeginFn() {
      this.$refs.lotto.gameBegin();
    },
    lottoOver() {
      if (this.lottoResult.index) {
        alert("中奖啦");
        //模拟没中奖
        this.lottoResult = {};
      } else {
        alert("没中奖");
        //模拟中奖
        this.lottoResult = {
          index: 1
        };
      }
    }
  },
  components: { Lotto, Example }
};
</script>

<style lang="scss" scoped>
  @import "../../common/sass/global";
  $base: "./images/";
  .box {
    display: inline-block;
    @include whr(167, 175);
    line-height: re(175);
    @include bg("bg-lotto.png");
    margin: 0 re(5);
    position: relative;
    overflow: hidden;
    .content {
      height: 82%;
      border-radius: 50%;
      display: inline-block;
      vertical-align: middle;
      overflow: hidden;
    }
    .goods {
      @include whr(163, 160);
      &.gift-bangbangtang-s {
        @include bg("gift-bangbangtang-s.png");
      }
      &.gift-baozhen-s {
        @include bg("gift-baozhen-s.png");
      }
      &.gift-cake-s {
        @include bg("gift-cake-s.png");
      }
      &.gift-gouliang-s {
        @include bg("gift-gouliang-s.png");
      }
      &.gift-laosiji-s {
        @include bg("gift-laosiji-s.png");
      }
      &.gift-shengrikuaile-s {
        @include bg("gift-shengrikuaile-s.png");
      }
      &.gift-shoujizhijia-s {
        @include bg("gift-shoujizhijia-s.png");
      }
      &.gift-sizhongfen-s {
        @include bg("gift-sizhongfen-s.png");
      }
    }
  }
  .btn-begin {
    @include bg("btn_lotto_nor.png");
    @include whr(455, 104);
    display: inline-block;
    margin-top: re(22);
    &.act {
      @include bg("btn_lotto_act.png");
    }
  }
</style>
