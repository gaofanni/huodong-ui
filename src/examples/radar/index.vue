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
                    {
                        txt:'艺术',
                        num:90
                    },{
                        txt:'活力',
                        num:83
                    },{
                        txt:'体育',
                        num:71
                    },{
                        txt:'算数',
                        num:52
                    },{
                        txt:'语言',
                        num:30
                    }
                ]">
            </canvasCpl>
        </div>
        <div class="btn-showCode"
            @click="isShowCode=!isShowCode">{{isShowCode?`隐藏代码`:`显示代码`}}</div>
        <div class="code-wrap">
            <pre class="code language-markup"
                v-show="isShowCode"
                v-html="html">
        </pre>
        </div>
        <table class="attributes">
            <caption class="title">Attributes</caption>
            <thead class="">
                <th>参数</th>
                <th>说明</th>
                <th>类型</th>
                <th>默认值</th>
                <th>可选值</th>
            </thead>
            <tbody class>
                <tr>
                    <td>opt</td>
                    <td>配置雷达图样式，必须包含{count：几边(number)，colorPolygon：线条颜色，colorText：文字颜色，colorFill：填充颜色，colorFillCircle：圆的填充色}</td>
                    <td>Object</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>data</td>
                    <td>配置雷达图每个端点显示的文字与数据，length必须与opt.count对应，数组内数据结构为[代表文字，数值(0-100)]</td>
                    <td>Array</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import canvasCpl from "../../packages/radar/index";
export default {
  data() {
    return {
      isShowCode: false,
      code: `
    <canvasCpl class="canvas" :opt="{
            count: 5,//边数
            colorPolygon: '#e1b073',//填充颜色
            colorText: '#97573e',//文字颜色
            colorFill: 'rgba(255,91,74,0.6)',//填充色
            colorFillCircle:'#ff5b4a',//圆的填充色
        }"
        
        :data="[
            {
                txt:'艺术',
                num:90
            },{
                txt:'活力',
                num:83
            },{
                txt:'体育',
                num:71
            },{
                txt:'算数',
                num:52
            },{
                txt:'语言',
                num:30
            }
        ]">
    </canvasCpl>
    `
    };
  },
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



