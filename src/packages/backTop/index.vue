<template>
  <div class="backTop" ref='backTop'>
      <slot></slot>
  </div>
</template>

<script>
  import moveTo from "./moveTo.js";
  export default {
    name: "backTop",
    data() {
      return {
        scroller: ""
      };
    },
    props: ["parent"],
    mounted() {
      this.backtop();
    },
    methods: {
      backtop() {
        let backTop = this.$refs.backTop;
        const move = new moveTo(backTop, this.parent);
      }
    }
  };
</script>

<style>

</style>
