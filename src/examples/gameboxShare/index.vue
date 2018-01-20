<template>
    <div class="wrap">
        <shareCpl class="share-wrap"
            :configData="configData"
            :data="shareData"
            @shareSuc="shareSuc"
            @shareFail="shareFail">
            <div class='shareout'
                :slot="item.type"
                v-for="item in shareData"
                :key="item.type"
                :data-type='item.type'>
                <span :class="[item.type,'share-icon']"></span>
                <!-- <div class="title">{{item.title}}</div> -->
            </div>

        </shareCpl>
    </div>
</template>

<script>
import shareCpl from "../../packages/gameboxShare/index";
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
      ]
    };
  },
  methods: {
    shareSuc() {
      alert("分享成功的回调在这里");
    },
    shareFail() {
      alert("分享失败的回调在这里");
    }
  },
  components: { shareCpl }
};
</script>

<style lang="scss" scoped>
    @import "../../common/sass/global";
    $base: "./images/";

    .share-wrap {
      margin-bottom: re(65);
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
</style>


