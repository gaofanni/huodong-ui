<template>
    <div class="guessPic">
        <Example :info="exampleInfo.info"
            :code="exampleInfo.code">
            <GuessPic class="guess-pic"
                @chooseOver="chooseOver"
                :data="cur">
                <!-- 图片 -->
                <div class="guess-pic_img"
                    :style="`background-image:url('${cur.img}')`"
                    slot="img"></div>
                <!-- 定义填入框的样式 -->
                <li class="guess-pic_choose"
                    slot="choose"></li>
                <!-- 定义选择框样式 -->
                <li class="guess-pic_answer"
                    slot="answer"></li>
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
          author: "gaofanni"
        },
        code: ""
      },
      cur: {
        img: "http://f1.img4399.com/box~cp/5922018/01/24/15_z4PBtz.580x326.png",
        answerNum: 4,
        answer: [
          { id: "69", answer: "果", qid: "18" },
          { id: "70", answer: "与", qid: "18" },
          { id: "71", answer: "弓", qid: "18" },
          { id: "72", answer: "剑", qid: "18" },
          { id: "73", answer: "手", qid: "18" },
          { id: "74", answer: "箭", qid: "18" },
          { id: "75", answer: "队", qid: "18" },
          { id: "76", answer: "地", qid: "18" },
          { id: "77", answer: "战", qid: "18" },
          { id: "78", answer: "生", qid: "18" },
          { id: "79", answer: "作", qid: "18" },
          { id: "80", answer: "对", qid: "18" },
          { id: "81", answer: "大", qid: "18" },
          { id: "82", answer: "绝", qid: "18" },
          { id: "83", answer: "手", qid: "18" },
          { id: "84", answer: "箭", qid: "18" },
          { id: "85", answer: "队", qid: "18" },
          { id: "86", answer: "地", qid: "18" },
          { id: "87", answer: "战", qid: "18" },
          { id: "88", answer: "生", qid: "18" },
          { id: "89", answer: "作", qid: "18" },
          { id: "90", answer: "对", qid: "18" },
          { id: "91", answer: "果", qid: "18" },
          { id: "92", answer: "与", qid: "18" }
        ]
      }
    };
  },
  methods: {
    chooseOver(choose) {
      alert("选择完毕，选择的答案已打印");
      console.log(choose);
    }
  }
};
</script>

<style lang="scss" scoped>
    @import "../../common/sass/global";
    .guess-pic {
      .guess-pic_img {
        @include whr(580,326);
        border: re(6) solid #c0f5ff;
        display: inline-block;
        @include placeHold(580,326);
        background-size: 100% 100%;
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
        }
      }
    }
</style>


