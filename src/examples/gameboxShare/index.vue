<template>
  <div class="wrap">
    <Example :info="exampleInfo.info"
      :code="exampleInfo.code"
      :tips="exampleInfo.tip"
      :tableInfo="exampleInfo.tableInfo">
      <shareCpl class="share-wrap"
        :configData="configData"
        :data="shareData"
        @shareSuc="shareSuc"
        @shareFail="shareFail">
        <div class='shareout'
          :slot="item.type"
          v-for="item in shareData">
          <span :class="[item.type,'share-icon']"></span>
          <div class="title">{{item.title}}</div>
        </div>
      </shareCpl>
      <button @click="change">修改分享参数</button>
    </Example>
  </div>
</template>

<script>
import shareCpl from "../../packages/gameboxShare/index";
import Example from "../../components/example/index";
export default {
  data() {
    return {
      configData: {
        title: "4399明星主播联赛，带你一起飞",
        content: "4399明星主播联赛，带你一起飞",
        iconUrl:
          "http://mobi.4399tech.com/redirect/proxy.docker.4399api.net/test/t1sj/test_ma/ma~50_20171219093119_5a386be79611d.jpeg?t=1513647079",
        redirectUrl: "www.baidu.com",
        extra: "test=1"
      },
      shareData: [
        {
          type: "qq",
          title: "QQ",
          showTxt: true
        },
        {
          type: "wx",
          title: "微信",
          showTxt: true
        },
        {
          type: "qzone",
          title: "QQ空间",
          showTxt: true
        }
      ],
      exampleInfo: {
        info: {
          title: "游戏盒分享",
          author: "gaofanni",
          tip: "游戏盒内才会生效"
        },
        tip: "share组件的插槽必须slot入分享的类型，用于内部绑定",
        code: `
                <shareCpl class="share-wrap"
                    :configData="configData"
                    :data="shareData"
                    @shareSuc="shareSuc"
                    @shareFail="shareFail">
                    <div class='shareout'
                        :slot="item.type"
                        v-for="item in shareData">
                        <span :class="[item.type,'share-icon']"></span>
                        <div class="title">{{item.title}}</div>
                    </div>
                </shareCpl>
                <button @click="change">修改分享参数</button>
                
                <script>
                  export default {
                    data(){
                      return {
                        configData: {
                          title: "4399明星主播联赛，带你一起飞",
                          content: "4399明星主播联赛，带你一起飞",
                          iconUrl:"http://mobi.4399tech.com/redirect/proxy.docker.4399api.net/test/t1sj/test_ma/ma~50_20171219093119_5a386be79611d.jpeg?t=1513647079",
                          redirectUrl: "www.baidu.com",
                          extra: "test=1"
                        },
                        shareData: [{
                            type: "qq",
                            title: "QQ",
                            showTxt: true
                          },
                          {
                            type: "wx",
                            title: "微信",
                            showTxt: true
                          },
                          {
                            type: "qzone",
                            title: "QQ空间",
                            showTxt: true
                          }],
                      }
                    },
                    methods:{
                      shareSuc() {
                        alert("分享成功的回调在这里");
                      },
                      shareFail() {
                        alert("分享失败的回调在这里");
                      },
                      change() {
                        this.configData.title = "测试修改分享参数";
                        this.configData.extra = "test=2";
                        alert("修改成功");
                      }
                    }
                  }
                <\/script>
        `,
        tableInfo: {
          attributes: [
            {
              propName: "configData",
              explain: `分享参数对象{title:'分享标题',content:'分享内容',iconUrl:'分享出去的icon图片',redirectUrl:'定制url',extra:'配置额外带出的参数，用于拼接在url后面'}`,
              type: "Object",
              default: "{}",
              choose: "-"
            },
            {
              propName: "shareData",
              explain:
                "定制分享类型，传入需分享的数组（仅限外部分享，客户端不提供内部分享的定制），传入一个数组，内含分享对象[{type:分享类型，title：icon下的文案，showTxt：是否显示文案Boolean},...]，类型可选值为（feed,pm,clan,wx,qq,qzone,redactor,system）",
              type: "Array",
              default: "-",
              choose: "-"
            }
          ],
          events: [
            {
              eventsName: "shareSuc",
              explain: "分享成功的回调",
              arguments: "-"
            },
            {
              eventsName: "shareFail",
              explain: "分享失败的回调",
              arguments: "-"
            }
          ],
          slot: [
            {
              slotName: "wx||qzone||qq",
              explain: "插入定制分享类型，"
            }
          ]
        }
      }
    };
  },
  methods: {
    shareSuc() {
      alert("分享成功的回调在这里");
    },
    shareFail() {
      alert("分享失败的回调在这里");
    },
    change() {
      this.configData.title = "测试修改分享参数";
      this.configData.extra = "test=2";
      alert("修改成功");
    }
  },
  components: { shareCpl, Example }
};
</script>

<style lang="scss" scoped>
  @import "../../common/sass/global";
  $base: "./images/";

  .share-wrap {
    .share-icon {
      margin: 0 re(12);
      line-height: re(132);
    }
    .qzone {
      display: inline-block;
      @include whr(132, 132);
      @include bg("qzone.png");
    }
    .wx {
      display: inline-block;
      @include whr(132, 132);
      @include bg("wx.png");
    }
    .qq {
      display: inline-block;
      @include whr(132, 132);
      @include bg("qq.png");
    }
  }
  button {
    border: re(1) solid black;
    font-size: re(18);
    padding: re(10) re(20);
    margin-top: re(20);
  }
</style>


