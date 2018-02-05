<template>
    <div class="countDown">
        <slot :current='current'></slot>
    </div>
</template>

<script>
export default {
  name: "countDown",
  props: {
    timeStamp: {
      //倒计时的终点时间戳
      required: true,
      type: String | Number,
      validator: function(value) {
        if (new Date().getTime() < value) {
          return true;
        } else {
          throw new Error("传入的时间戳必须大于当前的时间");
        }
      }
    },
    interval: {
      //倒计时周期
      required: false,
      type: Number,
      default: 1000
    }
  },
  data() {
    return {
      counter: false,
      innerTimeStamp: "",
      isHalt: false,
      current: {
        year: "",
        month: "",
        date: "",
        min: "",
        seconds: "",
        ms: ""
      }
    };
  },
  mounted() {
    this.startCountDown();
  },
  methods: {
    startCountDown() {
      let now = new Date().getTime();
      let gap = this.timeStamp - now;
      this.innerTimeStamp = gap;

      this.counter = setInterval(() => {
        this.innerTimeStamp -= this.interval;
        this.serialize();
        this.tick();
        if (this.innerTimeStamp <= 0) {
          this.timeUp();
          clearInterval(this.counter);
        }
      }, this.interval);
    },
    halt() {
      if (!this.isHalt) {
        clearInterval(this.counter);
      } else {
        this.startCountDown();
      }
      this.isHalt = !this.isHalt;
    },
    serialize() {
      let t = this.innerTimeStamp;
      let date = Math.floor(t / 1000 / 60 / 60 / 24);
      let hour = Math.floor((t / 1000 / 60 / 60) % 24);
      let min = Math.floor((t / 1000 / 60) % 60);
      let sec = Math.floor((t / 1000) % 60);
      let ms = Math.floor(
        String(t).slice(String(t).length - 3, String(t).length - 1)
      );
      if (hour < 10) {
        hour = "0" + hour;
      }
      if (min < 10) {
        min = "0" + min;
      }
      if (sec < 10) {
        sec = "0" + sec;
      }
      if (ms < 10) {
        ms = "0" + ms;
      }
      this.current = {
        date,
        hour,
        min,
        sec,
        ms
      };
    },
    timeUp() {
      this.$emit("timeUp", {
        current: this.current
      });
    },
    tick() {
      this.$emit("tick", {
        current: this.current
      });
    }
  }
};
</script>

<style>

</style>