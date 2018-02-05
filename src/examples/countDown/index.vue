<template>
  <div class="wrap">
    <Example :info="exampleInfo.info"
      :code="exampleInfo.code"
      :tips="exampleInfo.tips"
      :tableInfo="exampleInfo.tableInfo">
      <countDown 
      ref='countDown'
        :timeStamp='torrowTime'
        :interval = '10'
        @timeUp='handleTimeUp'
        @tick = 'handleTick'
      >
        <template slot-scope='scope'>
          <div class="counter">
              {{scope.current.hour}}：{{scope.current.min}}：{{scope.current.sec}} : {{scope.current.ms}}
        </div>
        </template>
</countDown>
<button class="halt" @click='toggleTick'>暂停/恢复倒计时</button>
</Example>
</div>
</template>

<script>
import countDown from "../../packages/countDown/index.vue";
import Example from "../../components/example/index";
export default {
  data() {
    return {
      torrowTime: new Date().getTime() + 86400000,
      exampleInfo: {
        info: {
          title: "倒计时",
          author: "fupengcheng"
        },
        code: `
                    <countDown 
                    ref='countDown'
                      :timeStamp='1517760000000'
                      :interval = '10'
                      @timeUp='handleTimeUp'
                      @tick = 'handleTick'
                    >
                    <template slot-scope='scope'>
                      <div class="counter">
                          {{scope.current.hour}}：{{scope.current.min}}：{{scope.current.sec}} : {{scope.current.ms}}
                      </div>
                    </template>
                  </countDown>
          `,
        tips: `在组件插槽中放入回到顶部按钮的样式，需要传入真实滚动的容器选择器。可配置时间、动画曲线，到达顶部后会提供回调函数`,
        tableInfo: {
          attributes: [
            {
              propName: `timeStamp`,
              explain: `倒计时结束时刻的时间戳，到毫秒位`,
              type: `string || number`,
              default: `-`,
              required: `true`
            },
            {
              propName: `interval`,
              explain: `倒计时刷新的间隔`,
              type: `number`,
              default: `1000`,
              required: `false`
            }
          ],
          events: [
            {
              eventsName: "tick",
              explain: "倒计时改变的实践，每隔interval毫秒触发",
              arguments: "current：当前时刻"
            },
            {
              eventsName: "timeUp",
              explain: "倒计时变为0时触发",
              arguments: "current：当前时刻"
            }
          ],
          methods: [
            {
              name: "halt",
              explain: "切换倒计时的开始/暂停状态",
              param: "-"
            }
          ]
        }
      }
    };
  },
  methods: {
    toggleTick() {
      this.$refs.countDown.halt();
    },
    handleTimeUp() {
      console.log("end");
      alert("倒计时结束");
    },
    handleTick({ current }) {
      // console.log(current)
    }
  },
  components: {
    countDown,
    Example
  }
};
</script>

<style lang="scss" scoped>
@import "../../common/sass/global";
.halt {
  background-color: #f8f8f8;
  font-size: re(20);
  margin: re(50) auto;
  padding: re(10) re(20);
  border-radius: re(10);
  color: #646464;
  cursor: pointer;
  transition: transform 0.05s linear;
  &:active {
    transform: scale(0.98);
  }
}

.counter {
  font-size: re(40);
}
</style>