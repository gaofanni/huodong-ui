<template>
    <div class="wrap">
        <Example :info="exampleInfo.info"
            :code="exampleInfo.code"
            :tips="exampleInfo.tips"
            :tableInfo="exampleInfo.tableInfo">
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
        </Example>
    </div>
</template>

<script>
import Example from "../../components/example/index";
import canvasCpl from "../../packages/radar/index";
export default {
  data() {
    return {
      exampleInfo: {
        info: { title: "雷达图", author: "gaofanni" },
        tips: "canvas组件的宽高默认是100%的，依靠父级元素撑开宽高",
        code: `
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
    `,
        tableInfo: {
          attributes: [
            {
              propName: "opt",
              explain:
                "配置雷达图样式，必须包含{count：几边(number)，colorPolygon：线条颜色，colorText：文字颜色，colorFill：填充颜色，colorFillCircle：圆的填充色}",
              type: "Object",
              default: "-",
              choose: "-"
            },
            {
              propName: "data",
              explain:
                "配置雷达图每个端点显示的文字与数据，length必须与opt.count对应，数组内数据结构为[代表文字，数值(0-100)]",
              type: "Array",
              default: "-",
              choose: "-"
            }
          ]
        }
      }
    };
  },
  components: { canvasCpl, Example }
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



