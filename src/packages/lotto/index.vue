<template>
  <div class="lotto-Cpl">
    <div class="lotto-box">
      <slot v-for="(ele,index) in num"
        :name="`box${index+1}`"></slot>

      <!-- <div class="box">
        <div class="content">
          <ul>
            <li ref="scrollEl2"
              class="goods"
              v-for="(item,index) in rewardList"
              :class="`gift-${item.key}-s`"></li>
            <li class="goods"
              :class="`gift-${rewardList[0].key}-s`"></li>
          </ul>
        </div>
      </div> -->
      <!-- <div class="box">
        <div class="content">
          <ul>
            <li ref="scrollEl3"
              class="goods"
              v-for="(item,index) in rewardList"
              :class="`gift-${item.key}-s`"></li>
            <li class="goods"
              :class="`gift-${rewardList[0].key}-s`"></li>
          </ul>
        </div>
      </div> -->
    </div>
    <button class="btn btn-begin"
      @click='checkGamePermission'></button>
  </div>
</template>

<script>
  import help from "../../common/tools/help";

  export default {
    name: "lotto",
    props: [
      "get", //获取到的奖励对象，**必须要有一个index对应索引，确定要显示第几个高度**
      "rewardList", //渲染显示的奖品对象
      "isGameBegin", //是否开始抽奖
      "num"
    ],
    data() {
      return {
        stop: 0,
        count: {},
        isMove: false
      };
    },
    watch: {
      //监听是否开始抽奖
      isGameBegin(val) {
        if (val) {
          this.gameBegin();
        }
      }
    },
    mounted() {
      this.initMoveAll();
    },
    methods: {
      initMoveAll() {
        this.getMovingEleToMove("initMove");
      },
      checkGamePermission() {
        this.$emit("checkGamePermission");
      },
      //抽奖
      gameBegin() {
        this.stop = Math.round(help.getRandom(1, this.rewardList.length - 3));
        this.moving("scrollEl1");
        setTimeout(() => {
          this.moving("scrollEl2");
        }, 300);
        setTimeout(() => {
          this.moving("scrollEl3");
        }, 600);
      },
      initMove(oLis, n) {
        let movingEl = oLis[0].parentNode;
        //复制第一个节点到最后，实现无限循环
        let first = movingEl.childNodes[0].cloneNode(true);
        movingEl.appendChild(first);

        let liHeight = parseFloat(window.getComputedStyle(oLis[0]).height);
        let moveFn = () => {
          //回到顶部
          if (this.count["move_" + n] === oLis.length) {
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
      moving(ref) {
        let oLis = this.$refs[ref];
        if (!oLis[0]) return;
        let movingEl = oLis[0].parentNode;
        let liHeight = parseFloat(window.getComputedStyle(oLis[0]).height);
        let round = 0;
        this.isMove = true;
        let moveFn = () => {
          //回到顶部
          if (this.count[ref] === oLis.length) {
            movingEl.style.webkitTransition = "none";
            movingEl.style.webkitTransform = `translateY(0)`;
            this.count[ref] = 0;
            round++;
          }
          //计算当前应走到的高度
          let nowMarginTop = parseFloat(
            help.getComputedStyle(movingEl).y - liHeight
          );
          let stop = this.get.index || this.stop;

          if (
            round >= 3 &&
            Math.round(nowMarginTop) - Math.round(-liHeight * stop) <= 5
          ) {
            //结束,转两圈
            this.stop++;
            movingEl.removeEventListener("webkitTransitionEnd", moveFn);
            this.isMove = false;
            //派发事件，告知大乐透结束
            if (window.gameOverTimer) return;
            window.gameOverTimer = setTimeout(() => {
              this.$emit("lottoOver");
              window.gameOverTimer = null;
            }, 1200);
            //重新开始移动展示结果
            setTimeout(() => {
              if (!this.isMove) {
                this.initMoveAll();
              }
            }, 5000);
            return;
          }
          //正常情况下的移动
          movingEl.style.webkitTransition = "all 0.1s ease-in-out";
          movingEl.style.webkitTransform = `translateY(${nowMarginTop}px) translateZ(0)`;
          this.count[ref]++;
          movingEl.addEventListener("webkitTransitionEnd", moveFn);
        };
        moveFn();
      },
      getMovingEleToMove(fnType) {
        let boxs = document.querySelector(".lotto-box").children;
        for (let n = 0; n <= boxs.length; n++) {
          if (!help.isDOM(boxs[n])) continue;
          this.count["move_" + n] = 0;
          let box = boxs[n].querySelectorAll("li");
          this[fnType](box, n);
        }
      }
    },
    components: {}
  };
</script>

<style lang="scss">
  @import "../../common/sass/global";
  $base: "./images/";
  .lotto-Cpl {
    margin-top: re(22);
    .lotto-box {
      font-size: 0;
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
