<template>
  <div class="scroll-notice">
    <ul ref="scrollWrap">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "scrollNotice",
    mounted() {
      this.moving();
    },
    methods: {
      moving() {
        let oLis = this.$refs.scrollWrap.children;
        let movingEl = oLis[0].parentNode;
        movingEl.appendChild(oLis[0].cloneNode(true));
        let liHeight = parseFloat(window.getComputedStyle(oLis[0]).height);
        let count = 0;

        window.scrollTimer = window.setInterval(() => {
          if (count === oLis.length - 1) {
            movingEl.style.webkitTransition = "none";
            movingEl.style.marginTop = 0;
            count = 0;
          }
          let nowMarginTop =
            parseFloat(window.getComputedStyle(movingEl).marginTop) - liHeight;
          movingEl.style.webkitTransition = "all 0.4s ";
          movingEl.style.marginTop = nowMarginTop + "px";
          count++;
        }, 1200);
      }
    },
    components: {}
  };
</script>


