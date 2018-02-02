<template>
    <section :class="className">
        <slot name="img" />
        <slot name="title" />
        <!-- 选择框 -->
        <slot name="choose" />
        <div class="choose-wrap"
            ref="choose">
            <li v-for="(item,index) in data.chooseArr?data.chooseArr:data.answerNum"
                :class="[getHintClass(item.isHint),chooseClass]"
                @click="deleteAnswer(index)">{{item.answer}}</li>

        </div>
        <!-- 答案区域 -->
        <slot name="answer" />
        <div class="guess-pic_answer-wrap"
            ref="answer">
            <span v-for="(item,index) in data.answer"
                :class="[getChooseClass(item.isChoose),answerClass]"
                @click="choose(index)">
                {{item.answer}}
            </span>
        </div>
        <!-- 提示 -->
        <div @click="hint">
            <slot name="hintBtn" />
        </div>
    </section>
</template>

<script>
export default {
  props: [
    "gameData",
    "hintData",
    "className",
    "hintClassName",
    "chooseClassName"
  ],
  data() {
    return {
      chooseClass: "",
      answerClass: "",
      data: {
        chooseArr: [], //选择的数组
        answerNum: 0, //答案数
        answer: [] //答案数组
      },
      chooseOver: false,
      hintArr: []
    };
  },
  watch: {
    hintData(val) {
      if (val) {
        //   插入最强空白
        let index = 0;
        for (let n in this.data.answer) {
          let cur = this.data.answer[n];
          for (let key in cur) {
            if (cur[key] == val[key]) {
              cur.isHint = true;
              this.choose(index, true);
            }
            break;
          }
          index++;
        }
      }
    },
    gameData: {
      handler: function(val) {
        if (val) {
          this.init();
        }
      },
      deep: true
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    getHintClass(boolean) {
      return boolean ? this.hintClassName : "";
    },
    getChooseClass(boolean) {
      return boolean ? this.chooseClassName : "";
    },
    init() {
      this.chooseOver = false;
      this.data = {};
      this.hintArr = [];
      Object.assign(this.data, this.gameData);
      this.initChooseArr();
      this.initAnswer();
      /* 初始化数据结构，开始渲染样式 */
      this.$nextTick(() => {
        this.initStyle("choose");
        this.initStyle("answer");
      });
    },
    //初始化样式
    initStyle(slotName) {
      if (!this.$slots[slotName][0]) return;
      let el = this.$slots[slotName][0].elm;
      let dataAttribute = el.attributes["0"].nodeName;
      let ClassName = el.className;
      this[`${slotName}Class`] = ClassName;
      let parent = this.$refs[slotName].childNodes;
      //将内部data-v与外部一致，达到可外部配置样式
      this.$refs[slotName].setAttribute(dataAttribute, "");

      el.parentNode && el.parentNode.removeChild(el);
      for (let n in parent) {
        parent[n].nodeType &&
          (parent[n].className = ClassName) &&
          parent[n].setAttribute(dataAttribute, "");
      }
    },
    //生成选择数组
    initChooseArr() {
      let num = this.data.answerNum;
      while (num) {
        num--;
        if (!this.data.chooseArr) {
          this.$set(this.data, "chooseArr", []);
        }
        this.data.chooseArr.push({ answer: "" });
      }
    },
    initAnswer() {
      this.$set(this.data, "answer", []);
      for (let n in this.gameData.answer) {
        for (let key in this.gameData.answer[n]) {
          if (!this.data.answer[n]) {
            this.data.answer[n] = {};
          }
          this.data.answer[n][key] = this.gameData.answer[n][key];
        }
      }
    },
    //选择答案
    choose(index, isHint) {
      //* 选择完毕，已经被选 */
      if (!isHint && (this.data.answer[index].isChoose || this.chooseOver))
        return;

      this.$set(this.data.answer[index], "isChoose", true);
      this.$set(this.data.answer[index], "oriKey", index);

      let isChooseNum = 0;
      let isAdd = false;

      /* 提示 */
      if (isHint) {
        this.deleteAnswer(this.hintArr.length);
        this.$set(
          this.data.chooseArr,
          [this.hintArr.length],
          this.data.answer[index]
        );
        this.$set(this.data.answer[index], "isChoose", true);
        this.hintArr.push(this.data.answer[index]);
        isAdd = true;
      }
      for (let n in this.data.chooseArr) {
        if (this.data.chooseArr[n].answer) {
          isChooseNum++;
        }
        if (!this.data.chooseArr[n].answer && !isAdd) {
          this.$set(this.data.chooseArr, [n], this.data.answer[index]);
          isAdd = true;
          continue;
        }
      }
      if (isChooseNum + (isHint ? 0 : 1) >= this.data.answerNum) {
        this.chooseOver = true;
        setTimeout(() => {
          this.$emit("chooseOver", this.data.chooseArr);
        }, 100);
      }
    },
    //删除答案
    deleteAnswer(index) {
      //传入的索引没有被选中，无法删除
      if (!this.data.chooseArr[index].answer) return;

      this.data.answer[this.data.chooseArr[index].oriKey].isChoose = false;
      this.data.chooseArr[index] = {};
      this.chooseOver = false;
    },
    //提示
    hint() {
      this.$emit("askForHint", this.hintArr);
    }
  }
};
</script>
