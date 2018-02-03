<template>
  <div class="guessPic">
    <Example :info="exampleInfo.info"
      :tableInfo="exampleInfo.tableInfo"
      :code="exampleInfo.code">
      <GuessPic class="guess-pic"
        @chooseOver="chooseOver"
        @askForHint="askForHint"
        chooseClassName="isChoose"
        hintClassName="isHint"
        :hintData='hintData'
        :gameData="cur">
        <!-- 图片 -->
        <div class="guess-pic_img"
          :style="`background-image:url('${cur.img}')`"
          slot="img"></div>
        <div class="title"
          slot="title">{{cur.title}}</div>
        <!-- 定义填入框的样式 -->
        <li class="guess-pic_choose"
          slot="choose"></li>
        <!-- 定义选择框样式 -->
        <li class="guess-pic_answer"
          slot="answer"></li>
        <div class="guess-pic_hint-btn"
          slot="hintBtn">提示</div>
      </GuessPic>
    </Example>
  </div>
</template>
<script>
import Example from "../../components/example/index";
import GuessPic from "../../packages/guessPic/index";
export default {
  components: { Example, GuessPic },
  data() {
    return {
      exampleInfo: {
        info: {
          title: "猜图",
          author: "gaofanni",
          tip:
            "选字猜图游戏，可选择是否提示，提示内容由外部传入，组件内进行显示处理，选择结束后，外部可接收内部传出的选择结果进行对错的判断。（提示类型为从首个开始提示，非从下一个空格处开始提示）"
        },
        code: `
        <GuessPic class="guess-pic"
                @chooseOver="chooseOver"
                @askForHint="askForHint"
                chooseClassName="isChoose"
                hintClassName="isHint"
                :hintData='hintData'
                :gameData="cur">
                <!-- 图片 -->
                <div class="guess-pic_img" :style="'background-image:url('+cur.img+')'" slot="img"></div>
                <!-- 题目描述，问题 -->
                <div class="title" slot="title">{{cur.title}}</div>
                <!-- 定义填入框的样式 -->
                <li class="guess-pic_choose" slot="choose"></li>
                <!-- 定义选择框样式 -->
                <li class="guess-pic_answer" slot="answer"></li>
                <div class="guess-pic_hint-btn" slot="hintBtn">提示</div>
            </GuessPic>

            <script>
              export default {
                data(){
                  return {
                        cur: {},
                        total: [
                          {
                            id: "3",
                            title: "图中的游戏画面出自哪款游戏？",
                            type: "1",
                            img: "http://f1.img4399.com/m~cp/502018/01/25/11_6s=DNe.580x326.jpg",
                            game_id: "89051",
                            no: "1",
                            level: "1",
                            sort: "2",
                            isOnline: "1",
                            add_time: "1516876948",
                            no_id: "0",
                            answer: [
                              { id: "19", answer: "切", qid: "3" },
                              { id: "20", answer: "西", qid: "3" },
                              { id: "21", answer: "水", qid: "3" },
                              { id: "141", answer: "切", qid: "3" },
                              { id: "344", answer: "水", qid: "3" },
                              { id: "345", answer: "果", qid: "3" },
                              { id: "357", answer: "要", qid: "3" },
                              { id: "358", answer: "回", qid: "3" },
                              { id: "359", answer: "家", qid: "3" },
                              { id: "360", answer: "啊", qid: "3" },
                              { id: "361", answer: "啊", qid: "3" },
                              { id: "362", answer: "啊", qid: "3" },
                              { id: "363", answer: "啊", qid: "3" },
                              { id: "364", answer: "啊", qid: "3" },
                              { id: "365", answer: "啊", qid: "3" },
                              { id: "366", answer: "啊", qid: "3" },
                              { id: "367", answer: "啊", qid: "3" },
                              { id: "368", answer: "啊", qid: "3" },
                              { id: "369", answer: "啊", qid: "3" },
                              { id: "370", answer: "啊", qid: "3" },
                              { id: "371", answer: "啊", qid: "3" }
                            ],
                            answerNum: 6
                          },
                          ...很多题
                        ],
                        curIndex: 0,
                        hintTime: 0,
                        hintData: {}
                        }
                      }
                    },
                    mounted() {
                      this.cur = this.total[this.curIndex];
                    },
                    methods: {
                      chooseOver(chooseArr) {
                        alert("选择完毕，选择的答案已打印在控制台");
                        console.log(chooseArr);
                        if (this.curIndex < this.total.length - 1) {
                          this.curIndex++;
                        } else {
                          this.curIndex = 0;
                        }
                        this.cur = this.total[this.curIndex];
                        this.hintTime = 0;
                      },
                      askForHint(hintArr) {
                        /* 点击提示的回调 */
                        // 设置提示内容
                        //hintArr为回调传来的已提示数组
                        this.hintData = this.total[this.curIndex].answer[this.hintTime];
                        this.hintTime++;
                      }
                    }
            <\/script>

            <style lang="scss" scoped>
                @import "../../common/sass/global";
                .guess-pic {
                  .guess-pic_answer-wrap {
                    text-align: left;
                  }
                  .guess-pic_img {
                    @include whr(580,326);
                    border: re(6) solid #c0f5ff;
                    display: inline-block;
                    @include placeHold(580,326);
                    background-size: 100% 100%;
                  }
                  .title {
                    font-size: re(20);
                  }
                  .guess-pic_choose,
                  .guess-pic_answer {
                    @include whr(40,40);
                    background: lightgrey;
                    margin: re(10) re(20);
                    display: inline-block;
                    font-size: re(24);
                    color: #c0f5ff;
                    position: relative;
                    line-height: re(40);
                    text-align: center;
                    color: black;
                    vertical-align: middle;
                    &.isChoose {
                      color: red;
                      font-size: 0;
                    }
                    &.isHint {
                      color: red;
                    }
                  }
                  .guess-pic_hint-btn {
                    padding: re(10) re(20);
                    display: inline-block;
                    position: relative;
                    margin-top: re(10);
                    background: lightgrey;
                    font-size: re(20);
                    line-height: 1;
                  }
                }
              </style>
        `,
        tableInfo: {
          attributes: [
            {
              propName: "gameData",
              explain:
                "本题的游戏数据，必须包含{answer:[备选项的数组],answerNum:答案框的个数}",
              type: "Object",
              default: "-",
              choose: "-"
            },
            {
              propName: "hintData",
              explain:
                "若有提示需求，可在'askForHint'内设置hintData，必须与gameData的answer数组内单一对象格式一致。若不需提示按钮，可不传。（注意：内部是监听hintData的变动进行提示，请不要在非askForHint回调内设置），",
              type: "Object",
              default: "-",
              choose: "-"
            },
            {
              propName: "chooseClassName",
              explain: "用于定义选项被选择后的样式名",
              type: "String",
              default: "-",
              choose: "-"
            },
            {
              propName: "hintClassName",
              explain: "用于提示后答案框代表被提示后的样式名",
              type: "String",
              default: "-",
              choose: "-"
            }
          ],
          events: [
            {
              eventsName: "chooseOver",
              explain: "全部选项选择后的回调",
              arguments: "[{选择后的结果数组}]"
            },
            {
              eventsName: "askForHint",
              explain: "点击提示后的回调",
              arguments: "[{已提示数组，用于传递给服务端进行多个提示所用}]"
            }
          ],
          slot: [
            {
              slotName: "img",
              explain: "图片插槽"
            },
            {
              slotName: "title",
              explain: "题目描述插槽，文字内容需自行插入"
            },
            {
              slotName: "choose",
              explain: "填入答案的框插槽，只需插入一个，用于定义单个样式"
            },
            {
              slotName: "answer",
              explain: "待选答案框插槽，只需定义一个，用于定义样式"
            },
            {
              slotName: "hintBtn",
              explain: "提示按钮插槽，需要提示交互时可自行插入"
            }
          ]
        }
      },
      cur: {},
      total: [
        {
          id: "3",
          title: "图中的游戏画面出自哪款游戏？",
          type: "1",
          img: "http://f1.img4399.com/m~cp/502018/01/25/11_6s=DNe.580x326.jpg",
          game_id: "89051",
          no: "1",
          level: "1",
          sort: "2",
          isOnline: "1",
          add_time: "1516876948",
          no_id: "0",
          answer: [
            { id: "19", answer: "切", qid: "3" },
            { id: "20", answer: "西", qid: "3" },
            { id: "21", answer: "水", qid: "3" },
            { id: "141", answer: "切", qid: "3" },
            { id: "344", answer: "水", qid: "3" },
            { id: "345", answer: "果", qid: "3" },
            { id: "357", answer: "要", qid: "3" },
            { id: "358", answer: "回", qid: "3" },
            { id: "359", answer: "家", qid: "3" },
            { id: "360", answer: "啊", qid: "3" },
            { id: "361", answer: "啊", qid: "3" },
            { id: "362", answer: "啊", qid: "3" },
            { id: "363", answer: "啊", qid: "3" },
            { id: "364", answer: "啊", qid: "3" },
            { id: "365", answer: "啊", qid: "3" },
            { id: "366", answer: "啊", qid: "3" },
            { id: "367", answer: "啊", qid: "3" },
            { id: "368", answer: "啊", qid: "3" },
            { id: "369", answer: "啊", qid: "3" },
            { id: "370", answer: "啊", qid: "3" },
            { id: "371", answer: "啊", qid: "3" }
          ],
          answerNum: 6
        },
        {
          id: "5",
          title: "图中的游戏角色名叫？",
          type: "1",
          img: "http://f1.img4399.com/m~cp/502018/01/24/09_DLxfTw.580x326.png",
          game_id: "22339",
          no: "1",
          level: "1",
          sort: "4",
          isOnline: "1",
          add_time: "1516877079",
          no_id: "0",
          answer: [
            { id: "27", answer: "会", qid: "5" },
            { id: "29", answer: "星", qid: "5" },
            { id: "143", answer: "又", qid: "5" },
            { id: "144", answer: "鼠", qid: "5" },
            { id: "385", answer: "虐", qid: "5" },
            { id: "386", answer: "狗", qid: "5" },
            { id: "387", answer: "猫", qid: "5" },
            { id: "388", answer: "会", qid: "5" },
            { id: "389", answer: "说", qid: "5" },
            { id: "390", answer: "话", qid: "5" },
            { id: "391", answer: "老", qid: "5" },
            { id: "392", answer: "大", qid: "5" },
            { id: "393", answer: "小", qid: "5" },
            { id: "394", answer: "啊", qid: "5" }
          ],
          answerNum: 6
        },
        {
          id: "4",
          title: "植物大战僵尸中图中角色的名字是？",
          type: "1",
          img: "http://f1.img4399.com/m~cp/502018/01/25/11_dxGfBK.580x326.jpg",
          game_id: "1274",
          no: "1",
          level: "1",
          sort: "3",
          isOnline: "1",
          add_time: "1516877007",
          no_id: "0",
          answer: [
            { id: "23", answer: "豌", qid: "4" },
            { id: "24", answer: "豆", qid: "4" },
            { id: "25", answer: "豌", qid: "4" },
            { id: "196", answer: "豌", qid: "4" },
            { id: "372", answer: "脑", qid: "4" },
            { id: "373", answer: "豆", qid: "4" },
            { id: "374", answer: "脑", qid: "4" },
            { id: "375", answer: "洞", qid: "4" },
            { id: "376", answer: "大", qid: "4" },
            { id: "377", answer: "开", qid: "4" },
            { id: "378", answer: "今", qid: "4" },
            { id: "379", answer: "天", qid: "4" },
            { id: "380", answer: "又", qid: "4" },
            { id: "381", answer: "是", qid: "4" },
            { id: "382", answer: "雾", qid: "4" },
            { id: "383", answer: "霾", qid: "4" },
            { id: "384", answer: "天", qid: "4" }
          ],
          answerNum: 7
        },
        {
          id: "6",
          title: "图中的游戏角色出自哪款游戏？",
          type: "1",
          img: "http://f1.img4399.com/m~cp/502018/01/24/11_uX4XVe.580x326.png",
          game_id: "85014",
          no: "1",
          level: "1",
          sort: "5",
          isOnline: "1",
          add_time: "1516877141",
          no_id: "0",
          answer: [
            { id: "31", answer: "王", qid: "6" },
            { id: "32", answer: "反", qid: "6" },
            { id: "33", answer: "虚", qid: "6" },
            { id: "153", answer: "小", qid: "6" },
            { id: "395", answer: "啥", qid: "6" },
            { id: "396", answer: "时", qid: "6" },
            { id: "397", answer: "候", qid: "6" },
            { id: "398", answer: "空", qid: "6" },
            { id: "399", answer: "气", qid: "6" },
            { id: "400", answer: "能", qid: "6" },
            { id: "401", answer: "好", qid: "6" },
            { id: "402", answer: "点", qid: "6" },
            { id: "403", answer: "后", qid: "6" },
            { id: "404", answer: "天", qid: "6" },
            { id: "405", answer: "是", qid: "6" },
            { id: "406", answer: "周", qid: "6" },
            { id: "407", answer: "末", qid: "6" },
            { id: "408", answer: "哈", qid: "6" },
            { id: "409", answer: "哈", qid: "6" }
          ],
          answerNum: 8
        },
        {
          id: "2",
          title: "图中的游戏图片出自哪款游戏？",
          type: "1",
          img: "http://f1.img4399.com/m~cp/502018/01/25/11_fGa4LF.580x326.jpg",
          game_id: "38525",
          no: "1",
          level: "1",
          sort: "1",
          isOnline: "1",
          add_time: "1516876886",
          no_id: "0",
          answer: [
            { id: "5", answer: "饿", qid: "2" },
            { id: "6", answer: "愤", qid: "2" },
            { id: "7", answer: "开", qid: "2" },
            { id: "17", answer: "心", qid: "2" },
            { id: "338", answer: "怒", qid: "2" },
            { id: "339", answer: "的", qid: "2" },
            { id: "340", answer: "猪", qid: "2" },
            { id: "341", answer: "怒", qid: "2" },
            { id: "342", answer: "小", qid: "2" },
            { id: "343", answer: "鸟", qid: "2" },
            { id: "346", answer: "啊", qid: "2" },
            { id: "347", answer: "呀", qid: "2" },
            { id: "348", answer: "哦", qid: "2" },
            { id: "349", answer: "换", qid: "2" },
            { id: "350", answer: "可", qid: "2" },
            { id: "351", answer: "呗", qid: "2" },
            { id: "352", answer: "不", qid: "2" },
            { id: "353", answer: "想", qid: "2" },
            { id: "354", answer: "加", qid: "2" },
            { id: "355", answer: "班", qid: "2" },
            { id: "356", answer: "啊", qid: "2" }
          ],
          answerNum: 6
        }
      ],
      curIndex: 0,
      hintTime: 0,
      hintData: {}
    };
  },
  mounted() {
    this.cur = this.total[this.curIndex];
  },
  methods: {
    chooseOver(chooseArr) {
      alert("选择完毕，选择的答案已打印在控制台");
      console.log(chooseArr);
      if (this.curIndex < this.total.length - 1) {
        this.curIndex++;
      } else {
        this.curIndex = 0;
      }
      this.cur = this.total[this.curIndex];
      this.hintTime = 0;
    },
    askForHint(hintArr) {
      /* 点击提示的回调 */
      // 设置提示内容
      this.hintData = this.total[this.curIndex].answer[this.hintTime];
      this.hintTime++;
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "../../common/sass/global";
  .guess-pic {
    .guess-pic_answer-wrap {
      text-align: left;
    }
    .guess-pic_img {
      @include whr(580,326);
      border: re(6) solid #c0f5ff;
      display: inline-block;
      @include placeHold(580,326);
      background-size: 100% 100%;
    }
    .title {
      font-size: re(20);
    }
    .guess-pic_choose,
    .guess-pic_answer {
      @include whr(40,40);
      background: lightgrey;
      margin: re(10) re(20);
      display: inline-block;
      font-size: re(24);
      color: #c0f5ff;
      position: relative;
      line-height: re(40);
      text-align: center;
      color: black;
      vertical-align: middle;
      &.isChoose {
        color: red;
        font-size: 0;
      }
      &.isHint {
        color: red;
      }
    }
    .guess-pic_hint-btn {
      padding: re(10) re(20);
      display: inline-block;
      position: relative;
      margin-top: re(10);
      background: lightgrey;
      font-size: re(20);
      line-height: 1;
    }
  }
</style>


