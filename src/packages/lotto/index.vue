<template>
  <div class="lotto-Cpl">
    <div class="lotto-box">
      <slot v-for="(ele,index) in num"
        :name="`box${index+1}`"></slot>
    </div>
    <!-- <button @click='checkGamePermission'>
      <slot name='btn-begin'></slot> -->
    </button>
  </div>
</template>

<script>
import help from "../tools/help";
export default {
  name: "lotto",
  props: {
    lottoResult: {
      required: true,
      type: Object
    }, //获取到的奖励对象，**必须要有一个index对应索引，确定要显示第几个高度**
    rewardLen: {
      type: Number,
      required: true
    }, //渲染显示的奖品对象
    num: {
      type: Number,
      required: false,
      default: 3
    } //抽奖单元个数
  },
  data() {
    return {
      stop: 0,
      count: {},
      isMove: false,
      originLen: 0, //初始，没添加过最后一个节点之前的长度
      isAddFirst: 0, //是否已经添加过第一个节点
      isGameBegin: false
    };
  },
  mounted() {
    this.initMoveAll();
  },
  methods: {
    initMoveAll() {
      this.getMovingEleToMove((box, n) => {
        this.initMove(box, n);
      });
    },
    checkGamePermission() {
      this.$emit("checkGamePermission");
    },
    //抽奖
    gameBegin() {
      this.isGameBegin = true;
      this.stop = Math.round(help.getRandom(1, this.rewardLen - 4));

      let time = 0;
      this.getMovingEleToMove((box, n) => {
        window.setTimeout(() => {
          this.gameMove(box, n);
        }, time);
        time += 300;
      });
    },
    initMove(oLis, n) {
      let movingEl = oLis[0].parentNode;
      //复制第一个节点到最后，实现无限循环
      if (this.isAddFirst < this.num) {
        this.originLen = oLis.length;
        let first = movingEl.childNodes[0].cloneNode(true);
        movingEl.appendChild(first);
        this.isAddFirst++;
      }

      let liHeight = parseFloat(window.getComputedStyle(oLis[0]).height);
      let moveFn = () => {
        //回到顶部
        if (this.count["move_" + n] === this.originLen) {
          movingEl.style.webkitTransition = "none";
          movingEl.style.webkitTransform = `translateY(0)`;
          this.count["move_" + n] = 0;
        }
        //计算当前应走到的高度
        let nowMarginTop = parseFloat(
          help.getComputedStyle(movingEl).y - liHeight
        );
        movingEl.style.webkitTransition = "all 1s ease-in-out";
        movingEl.style.webkitTransform = `translateY(${nowMarginTop}px) translateZ(0)`;
        this.count["move_" + n]++;
        movingEl.addEventListener("webkitTransitionEnd", moveFn);
      };
      moveFn();
      //开始抽奖后暂停原动画
      window.setInterval(() => {
        if (this.isGameBegin) {
          movingEl.removeEventListener("webkitTransitionEnd", moveFn);
        }
      }, 100);
    },
    gameMove(oLis, n) {
      let movingEl = oLis[0].parentNode;
      let liHeight = parseFloat(window.getComputedStyle(oLis[0]).height);
      let round = 0;
      this.isMove = true;
      let moveFn = () => {
        //回到顶部
        if (this.count["move_" + n] === this.originLen) {
          movingEl.style.webkitTransition = "none";
          movingEl.style.webkitTransform = `translateY(0)`;
          this.count["move_" + n] = 0;
          round++;
        }
        //计算当前应走到的高度
        let nowMarginTop = parseFloat(
          help.getComputedStyle(movingEl).y - liHeight
        );
        let stop = this.lottoResult.index || this.stop;
        if (
          round >= 3 &&
          Math.round(nowMarginTop) - Math.round(-liHeight * stop) <= 5
        ) {
          //结束,转两圈
          //没抽中奖，依次展示下一个
          if (stop < this.rewardLen) {
            this.stop++;
          } else {
            this.stop = 0;
          }
          movingEl.removeEventListener("webkitTransitionEnd", moveFn);
          this.isMove = false;
          //派发事件，告知大乐透结束
          if (window.gameOverTimer) return;
          let time = this.num * 500;
          window.gameOverTimer = setTimeout(() => {
            this.$emit("lottoOver");
            clearTimeout(window.gameOverTimer);
            window.gameOverTimer = null;
          }, time);
          // 重新开始移动展示结果;
          setTimeout(() => {
            if (!this.isMove) {
              this.isGameBegin = false;
              this.initMoveAll();
            }
          }, time + 3000);
          return;
        }
        //正常情况下的移动
        movingEl.style.webkitTransition = "all 0.1s ease-in-out";
        movingEl.style.webkitTransform = `translateY(${nowMarginTop}px) translateZ(0)`;
        this.count["move_" + n]++;
        movingEl.addEventListener("webkitTransitionEnd", moveFn);
      };
      moveFn();
    },
    getMovingEleToMove(cb) {
      let boxs = document.querySelector(".lotto-box").children;
      for (let n = 0; n <= boxs.length; n++) {
        if (!help.isDOM(boxs[n])) continue;
        //如果有存储过，不要重新定义
        !this.count["move_" + n] && (this.count["move_" + n] = 0);
        let box = boxs[n].querySelectorAll("li");
        cb && cb(box, n);
      }
    }
  }
};
</script>
