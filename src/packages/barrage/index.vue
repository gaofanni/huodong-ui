<template>
  <ul class="barrage-content"
    ref="content">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: "barrage",
  props: {
    data: {
      type: Array,
      required: true
    }, //弹幕数据
    MAX: {
      type: Number,
      //最多走多少条弹幕
      default: 3
    },
    intervalTime: {
      type: Number,
      //间隔时间
      default: 50
    },
    speed: {
      type: Number,
      //每条弹幕运动速度
      default: 200
    }
  },
  mounted() {},
  data() {
    return {
      timeTotal: 0,
      running: false,
      posAry: []
    };
  },
  methods: {
    stopBarrage() {
      for (let i = 0; i < window.timerAry.length; i++) {
        clearInterval(window.timerAry[i]);
        this.running = false;
      }
    },
    startBarrage() {
      this.setPosAry();
      window.barrageTimer = window.setInterval(() => {
        let parent = this.$refs.content;
        let paWidth = parent && this.getCss(parent, "width");
        if (
          this.data &&
          paWidth &&
          parent.childNodes.length <= 2 &&
          !this.running
        ) {
          this.runBarrage();
          //   clearInterval(window.barrageTimer);
        }
      }, 10);
      if (window.timerAry) {
        window.timerAry.push(window.barrageTimer);
      } else {
        window.timerAry = [];
        window.timerAry.push(window.barrageTimer);
      }
    },
    getRandomNum() {
      if (this.posAry.length > 0) {
        let n = this.posAry.splice(0, 1)[0];
        if (this.posAry.length == 0) {
          this.setPosAry();
        }
        return n;
      }
    },
    setPosAry() {
      for (let i = 0; i < this.MAX; i++) {
        this.posAry.push(i);
      }
    },
    getRandomTime(txt) {
      return Math.round(Math.random() * 600 + txt.length * this.intervalTime);
    },
    getCss(ele, t) {
      return parseInt(window.getComputedStyle(ele)[t]);
    },
    getLeft(el) {
      let left = el.ownerDocument.defaultView.getComputedStyle(el)
        .webkitTransform; //matrix(1, 0, 0, 1, 101.698, 0)
      let regLeft = /matrix\(1, 0, 0, 1, (-?\d+\.*\d*), 0\)/;
      return parseInt(regLeft.exec(left) && regLeft.exec(left)[1]);
    },
    /*获取位置的随机数*/
    getCurNum() {
      let randomNum = this.getRandomNum();
      let parent = this.$refs.content;

      if (this.isPositionCover(randomNum)) {
        if (parent.childNodes.length <= 0) {
          return;
        }
        console.log(randomNum, "randomNum");
        return this.getCurNum();
      } else {
        return randomNum;
      }
    },
    /*边界检测*/
    isPositionCover(index) {
      let parent = this.$refs.content;
      let paWidth = parent && this.getCss(parent, "width");

      let oLis = parent && parent.querySelectorAll(`.txt-${index}`);
      let lastLi = oLis && oLis[oLis.length - 1];

      if (!lastLi) return false;
      let width = this.getCss(lastLi, "width");
      let left = this.getLeft(lastLi);
      return width + left + 10 > paWidth;
    },
    runBarrage() {
      this.running = true;
      this.timeTotal = 0;
      let parent = this.$refs.content;
      let paWidth = this.getCss(parent, "width");
      for (let i = 0; i < this.data.length; i++) {
        //获得下一个添加的时间
        let txt = i - 1 > 0 ? this.data[i - 1] : "";
        this.timeTotal += this.getRandomTime(txt);
        var timer = window.setTimeout(() => {
          //复制slot进来的节点，保证样式与外部一致
          let oriLi = parent.firstChild.cloneNode(true);
          let LI = oriLi || document.createElement("li");
          let res = `${this.data[i]}`;
          let NUM = this.getCurNum();
          LI.className = `txt-${NUM}`;
          LI.innerHTML = res;
          parent.appendChild(LI);

          let LEN = this.getCss(LI, "width");
          let time = (LEN + paWidth + 2) / this.speed;
          LI.style.webkitTransition = `-webkit-transform ${time}s linear`;
          LI.style.webkitTransform = `translateX(-${LEN +
            paWidth}px) translateZ(0)`;
          this.detectTransitionEnd(LI);
          if (i === this.data.length - 1) {
            //开放下一次循环
            this.running = false;
          }
        }, this.timeTotal);
        window.timerAry.push(timer);
      }
    },
    /*清除dom*/
    detectTransitionEnd(LI) {
      LI.addEventListener("webkitTransitionEnd", () => {
        LI.parentNode && LI.parentNode.removeChild(LI);
      });
    }
  }
};
</script>
