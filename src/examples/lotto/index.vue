<template>
    <Lotto :get="lottoResult"
        :rewardList="rewardList"
        :isGameBegin='gameBegin'
        :num='scrollNum'
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
    </Lotto>
</template>

<script>
    import Lotto from "../../packages/lotto/index";
    export default {
      data() {
        return {
          lottoResult: {
            channel: "8",
            message: "手机支架",
            key: "shoujizhijia",
            index: 1
          },
          rewardList: [
            {
              type: "死忠粉",
              key: "sizhongfen",
              index: 1
            },
            {
              type: "小蛋糕",
              key: "cake",
              index: 2
            },
            {
              type: "生日快乐",
              key: "shengrikuaile",
              index: 3
            },
            {
              type: "老司机",
              key: "laosiji",
              index: 4
            },
            {
              type: "手机支架",
              key: "shoujizhijia",
              index: 5
            },
            {
              type: "玩偶",
              key: "baozhen",
              index: 6
            },
            {
              type: "棒棒糖",
              key: "bangbangtang",
              index: 7
            },
            {
              type: "狗粮",
              key: "gouliang",
              index: 8
            }
          ],
          gameBegin: false,
          scrollNum: 1
        };
      },
      methods: {
        checkGamePermission() {
          this.gameBegin = true;
          window.setTimeout(() => {
            this.gameBegin = false;
          }, 100);
        },
        lottoOver() {
          alert("中奖啦");
        }
      },
      components: { Lotto }
    };
</script>

<style lang="scss">
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
    .lotto-Cpl {
      margin-top: re(22);
      .lotto-box {
        font-size: 0;
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
    }
</style>
