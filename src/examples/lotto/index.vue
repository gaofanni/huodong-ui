<template>
    <div class="wrap">
        <!-- <div class="info">
            <div class='title'>抽奖大乐透</div>
            <div class="author">gaofanni</div>
        </div>
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
        <div class="btn-showCode"
            @click="isShowCode=!isShowCode">{{isShowCode?`隐藏代码`:`显示代码`}}</div>
        <div class="code-wrap"
            v-show="isShowCode">
            <div class="tips">
                通过v-for插槽增加抽奖的单元个数，注意<span class='hl'>:slot='`box${index+1}`'</span>需对应index传入，预览效果为一次中奖一次没中奖
            </div>
            <pre class="code language-markup"
                v-show="isShowCode"
                v-html="html">
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
                    <td>lottoResult</td>
                    <td>中奖信息，中奖:{index:中奖的索引},没中奖:{}</td>
                    <td>Object</td>
                    <td>{}</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>rewardList</td>
                    <td>轮播图，用于取得一共多少中奖项</td>
                    <td>Array</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>isGameBegin</td>
                    <td>是否可以开始抽奖，用于点击开始按钮的确认</td>
                    <td>Boolean</td>
                    <td>-</td>
                    <td>true/false</td>
                </tr>
                <tr>
                    <td>num</td>
                    <td>抽奖单元个数</td>
                    <td>Number</td>
                    <td>3</td>
                    <td>-</td>
                </tr>
            </tbody>
        </table>
        <table class='events'>
            <caption class="title">Events</caption>
            <thead>
                <th>事件名</th>
                <th>说明</th>
                <th>参数</th>
            </thead>
            <tbody>
                <tr>
                    <td>checkGamePermission</td>
                    <td>点击'点我转一转'按钮触发的事件</td>
                    <td>--</td>
                </tr>
                <tr>
                    <td>lottoOver</td>
                    <td>抽奖动画结束时触发的事件</td>
                    <td>--</td>
                </tr>
            </tbody>
        </table> -->
        <exampleCpl :info="exampleInfo.info"
            :code="exampleInfo.code"
            :tableInfo='exampleInfo.tableInfo'>
            <Lotto :get="lottoResult"
                :slot='`componentSlot`'
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
        </exampleCpl>
    </div>
</template>

<script>
    import Lotto from "../../packages/lotto/index";
    import exampleCpl from "../../components/example/index";
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
                }
              ],
              events: [
                {
                  eventsName: "checkGamePermission",
                  explain: "点击'点我转一转'按钮触发的事件",
                  default: "--"
                }
              ]
            }
          },
          isShowCode: false,
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
      components: { Lotto, exampleCpl }
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
