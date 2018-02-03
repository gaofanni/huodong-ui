<template>
  <div class="wrap">
    <Example :info="exampleInfo.info"
      :code="exampleInfo.code"
      :tableInfo='exampleInfo.tableInfo'>
      <Lotto :get="lottoResult"
        :rewardList="rewardList"
        :num='scrollNum'
        :isGameBegin='gameBegin'
        @checkGamePermission="checkGamePermission"
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
        <div slot='btn-begin'
          class='btn btn-begin'></div>
      </Lotto>
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
        info: { title: "抽奖大乐透", author: "gaofanni" },
        code: `
                <Lotto :get="lottoResult"
                    :rewardList="rewardList"
                    :num='scrollNum'
                    :isGameBegin='gameBegin'
                    @checkGamePermission="checkGamePermission"
                    @lottoOver="lottoOver">
                    <div class="box"
                        :slot="\`box\${index+1}\`"
                        v-for="(ele,index) in scrollNum">
                        <div class="content">
                            <ul>
                                <li ref="scrollEl1"
                                    class="goods"
                                    v-for="(item,index) in rewardList"
                                    :class="\`gift-\${item.key}-s\`"></li>
                            </ul>
                        </div>
                    </div>
                    <div slot='btn-begin'
                        class='btn btn-begin'></div>
                </Lotto>

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
                            gameBegin: false,
                            scrollNum: 3
                        };
                        },
                        methods: {
                            checkGamePermission() {
                                this.gameBegin = true;
                            },
                            lottoOver() {
                                if (this.lottoResult.index) {
                                    alert("中奖啦");
                                    this.lottoResult = {}; //模拟没中奖
                                } else {
                                    alert("没中奖");
                                    this.lottoResult = {index: 1};//模拟中奖
                                }
                                this.gameBegin = false;
                            }
                        },
                        components: { Lotto }
                    }
                <\/script>`,
        tableInfo: {
          attributes: [
            {
              propName: "lottoResult",
              explain: `中奖信息，中奖:{index:中奖的索引},没中奖:{}`,
              type: `Object`,
              default: `{}`,
              choose: "--"
            },
            {
              propName: "rewardList",
              explain: `轮播图，用于取得一共多少中奖项`,
              type: `Array`,
              default: `{}`,
              choose: "--"
            },
            {
              propName: "isGameBegin",
              explain: `是否可以开始抽奖，用于点击开始按钮的确认`,
              type: `Boolean`,
              default: `-`,
              choose: "true/false"
            },
            {
              propName: "num",
              explain: `抽奖单元个数`,
              type: `Number`,
              default: `3`,
              choose: "--"
            }
          ],
          events: [
            {
              eventsName: "checkGamePermission",
              explain: "点击'点我转一转'按钮触发的事件",
              default: "--"
            },
            {
              eventsName: "lottoOver",
              explain: "抽奖动画结束时触发的事件",
              default: "--"
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
      gameBegin: false,
      scrollNum: 3
    };
  },
  methods: {
    checkGamePermission() {
      this.gameBegin = true;
    },
    lottoOver() {
      if (this.lottoResult.index) {
        alert("中奖啦");
        this.lottoResult = {}; //模拟没中奖
      } else {
        alert("没中奖");
        this.lottoResult = {
          index: 1
        };
      }
      this.gameBegin = false;
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
