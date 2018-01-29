<template>
    <section class="guess-pic">
        <slot name="img" />
        <!-- 选择框 -->
        <slot name="choose" />
        <div class="choose-wrap"
            ref="choose">
            <li v-for="(item,index) in data.chooseArr?data.chooseArr:data.answerNum"
                @click="deleteAnswer(index)">{{item.answer}}</li>

        </div>
        <!-- 答案区域 -->
        <slot name="answer" />
        <div class="guess-pic_answer-wrap"
            ref="answer">
            <span v-for="(item,index) in data.answer"
                :class="[{isChoose:item.isChoose},chooseClass]"
                @click="choose(index)">
                {{item.answer}}
            </span>
        </div>
    </section>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      chooseClass: "",
      answerClass: ""
    };
  },
  mounted() {
    this.initChooseArr();
    this.initStyle("choose");
    this.initStyle("answer");
  },
  methods: {
    //初始化样式
    initStyle(slotName) {
      if (!this.$slots[slotName][0]) return;
      let el = this.$slots[slotName][0].elm;
      let dataAttribute = el.attributes["0"].nodeName;
      let ClassName = el.className;
      this[`${slotName}Class`] = ClassName;
      let parent = this.$refs[slotName].childNodes;

      el.parentNode.removeChild(el);

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
          this.data.chooseArr = [];
        }
        this.data.chooseArr.push({ answer: "" });
      }
    },
    //选择答案
    choose(index) {
      this.$set(this.data.answer[index], "isChoose", true);
      this.$set(this.data.answer[index], "oriKey", index);
      let isChooseNum = 0;
      for (let n in this.data.chooseArr) {
        if (!this.data.chooseArr[n].answer) {
          this.data.chooseArr[n] = this.data.answer[index];
          break;
        }
        isChooseNum++;
      }
      if (isChooseNum + 1 >= this.data.answerNum) {
        setTimeout(() => {
          this.$emit("chooseOver", this.data.chooseArr);
        }, 100);
      }
    },
    //删除答案
    deleteAnswer(index) {
      this.data.answer[this.data.chooseArr[index].oriKey].isChoose = false;
      this.data.chooseArr[index] = {};
    }
  }
};
</script>
