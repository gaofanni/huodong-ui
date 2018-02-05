<template>
  <Example :info="exampleInfo.info"
    :code="exampleInfo.code"
    :tableInfo="exampleInfo.tableInfo">
    <UploadImg :limitSize="1*1024*1024"
      ref="upload"
      backgroundSize="100% 100%"
      @overSize="overSize"
      @uploadDone="uploadDone">
      <div slot="background"
        class="uploadBg"></div>
    </UploadImg>
    <button @click="upload">上传图片</button>
  </Example>
</template>

<script>
import Example from "../../components/example/index";
import UploadImg from "../../packages/uploadImg/index";
export default {
  components: { UploadImg, Example },
  data() {
    return {
      exampleInfo: {
        info: {
          title: "上传图片",
          author: "gaofanni",
          tip: "上传图片显示上传结果的组件"
        },
        code: `
        <UploadImg :limitSize="1*1024*1024"
          ref="upload"
          backgroundSize="100% 100%"
          @overSize="overSize"
          @uploadDone="uploadDone">
          <div slot="background"
            class="uploadBg"></div>
        </UploadImg>
        <button @click="upload">上传图片</button>

        <script>
          export default {
            methods:{
              uploadDone(img) {
                console.log(img);
                alert("选择结果已在控制台打出");
              },
              overSize() {
                alert("超过限制大小啦");
              },
              upload() {
                //需在组件上增加一个ref，click为调用接口
                this.$refs.upload.click();
              }
            }
          }
        <\/script>

        <style lang="scss" scoped>
          @import "../../common/sass/global";
          .uploadBg {
            width: re(200);
            height: re(200);
            border-radius: re(10);
            background: url("./images/icon-upload.png") no-repeat center #fcc0c0;
          }
          button {
            font-size: re(22);
            margin-top: re(10);
            color: #dd5a5d;
            display: block;
            margin: 0 auto;
          }
        </style>
        `,
        tableInfo: {
          attributes: [
            {
              propName: "limitSize",
              explain:
                "上传大小尺寸限制，如需限制大小可传入，单位为k（如1m需填入1*1024*1024）",
              type: "Number",
              default: "-",
              required: "false"
            },
            {
              propName: "backgroundSize",
              explain: "上传后显示出来的image背景尺寸",
              type: "String",
              default: "contain",
              required: "false"
            }
          ],
          events: [
            {
              eventsName: "overSize",
              explain: "若props有传入limitSize，超过限制大小则会传出回调",
              arguments: "-"
            },
            {
              eventsName: "uploadDone",
              explain: "上传结束后派发回调",
              arguments: "[{file对象}]"
            }
          ],
          slot: [
            {
              slotName: "background",
              explain: "上传图片的按钮插槽"
            }
          ],
          methods: [
            {
              name: "click",
              explain: "使上传图片按钮获得焦点",
              param: "-"
            }
          ]
        }
      }
    };
  },
  methods: {
    uploadDone(img) {
      console.log(img);
      alert("选择结果已在控制台打出");
    },
    overSize() {
      alert("超过限制大小啦");
    },
    upload() {
      this.$refs.upload.click();
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "../../common/sass/global";
  .uploadBg {
    width: re(200);
    height: re(200);
    border-radius: re(10);
    background: url("./images/icon-upload.png") no-repeat center #fcc0c0;
  }
  button {
    font-size: re(22);
    margin-top: re(10);
    color: #dd5a5d;
    display: block;
    margin: 0 auto;
  }
</style>




