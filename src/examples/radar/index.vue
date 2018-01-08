<template>
    <div class="wrap">
        <div class="info">
            <div class='title'>雷达图</div>
            <div class="author">gaofanni</div>
        </div>
        <div class="canvas-wrap">
            <canvasCpl :opt="{
                count: 5,//边数
                colorPolygon: '#e1b073',//填充颜色
                colorText: '#97573e',//文字颜色
                colorFill: 'rgba(255,91,74,0.6)',//填充色
                colorFillCircle:'#ff5b4a',//圆的填充色
                }"
                :data="[
                ['艺术', 90],
                ['活力', 83],
                ['体育', 71],
                ['算数', 52],
                ['语言', 30]
                ]">
            </canvasCpl>
        </div>
        <div class="code">
            <pre>
                <code >
        &ltcanvasCpl :opt="{
            count: 5,//边数
            colorPolygon: '#e1b073',//填充颜色
            colorText: '#97573e',//文字颜色
            colorFill: 'rgba(255,91,74,0.6)',//填充色
            colorFillCircle:'#ff5b4a',//圆的填充色
            }"
            :data="[
            ['艺术', 90],
            ['活力', 83],
            ['体育', 71],
            ['算数', 52],
            ['语言', 30]
        ]"&gt
        &lt/canvasCpl&gt
                </code>
            </pre>
        </div>
    </div>
</template>

<script>
    import canvasCpl from "../../packages/radar/index";
    export default {
      components: { canvasCpl }
    };
</script>

<style lang="scss" scoped>
    @import "../../common/sass/global";
    .canvas-wrap {
      width: re(300);
      height: re(300);
      display: inline-block;
    }
</style>



