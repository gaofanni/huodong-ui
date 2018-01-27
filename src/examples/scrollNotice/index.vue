<template>
    <div class="wrap">
        <Example :info="exampleInfo.info"
            :code="exampleInfo.code">
            <ScrollNotice class="scroll-notice"
                :textLimit='5'>
                <li v-for="(item,index) in carousel"
                    :key="index">
                    恭喜
                    <span class="hightlight"
                        v-text="item.nick"></span>，获得了{{item.message}}！
                </li>
            </ScrollNotice>
        </Example>
    </div>
</template>

<script>
import ScrollNotice from "../../packages/scrollNotice/index";
import Example from "../../components/example/index";
export default {
  data() {
    return {
      exampleInfo: {
        info: { title: "跑马灯", author: "gaofanni" },
        code: `
            <ScrollNotice class="scroll-notice" :textLimit='5'>
                <li v-for="(item,index) in carousel" :key="index">
                    恭喜
                    <span class="hightlight" v-text="item.nick"></span>，获得了{{item.message}}！
                </li>
            </ScrollNotice>`
      },
      carousel: [
        { nick: "第1个人的名字", message: "一顿汉堡" },
        { nick: "第2个人的名字", message: "一顿汉堡" },
        { nick: "第3个人的名字", message: "一顿汉堡" },
        { nick: "第4个人的名字", message: "一顿汉堡" },
        { nick: "第5个人的名字", message: "一顿汉堡" }
      ]
    };
  },
  components: { ScrollNotice, Example }
};
</script>

<style lang="scss" scoped>
    @import "../../common/sass/global.scss";
    .scroll-notice {
      position: relative;
      display: inline-block;
      color: white;
      box-sizing: border-box;
      overflow: hidden;
      @include whr(509,49);
      border-radius: re(10);
      background: #ea8b51;
      ul {
        display: inline-block;
        text-align: center;
        font-size: re(22);
        width: 100%;
        transform: translateZ(0);
        color: #68370e;
        li {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          line-height: re(49);
        }
      }
      .hightlight {
        color: #ffe135;
      }
    }
</style>

