<template>
  <pre>
    <code>
      {{code}}
    </code>
  </pre>
</template>

<script>
  import hljs from "highlight";
  import "./atom-one-light.css";
  export default {
    name: "vueCode",
    props: ["code"],
    mounted() {
      [].forEach.call(document.querySelectorAll("pre code"), function(block) {
        // let newhtml = block.innerHTML.replace(/</g, "&lt");
        // block.innerHTML = newhtml;
        // console.log(newhtml);
        hljs.highlightBlock(block);
      });
    }
  };
</script>

<style>

</style>
