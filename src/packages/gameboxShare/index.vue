<template>
  <ul class="share-wrap j-share">
    <li v-for="item in data"
      :key="item.type">
      <div class="icon"
        :data-type='item.type'
        @click="iosShare(item.type)">
        <slot :name="item.type"></slot>
      </div>
    </li>
  </ul>
</template>

<script>
import gameboxshareFn from "./gameBox.share";
import help from "../../common/tools/help";
export default {
  name: "share",
  props: ["data", "configData"],
  created() {},
  watch: {
    configData: {
      handler: function(val) {
        window.gameBoxFn.setConfig({
          config: {
            shareTitle: val.title,
            shareIcon: val.iconUrl,
            shareUrl: val.redirectUrl,
            shareContent: val.content,
            extra: {
              custom: {
                activityUri: val.extra
              }
            }
          }
        });
      },
      deep: true
    }
  },
  mounted() {
    if (help.env().isGamebox && help.env().isAndroid) {
      this.initShare();
    }
  },
  methods: {
    /**安卓游戏盒初始化分享 */
    async initShare() {
      //避免多次初始组件导致多个分享弹窗
      if (window.gameBoxFn) return;
      let gameBoxShare = gameboxshareFn();
      window.gameBoxFn = new gameBoxShare.share({
        target: ".j-share .icon",
        before: async function() {
          return true;
        },
        config: {
          shareTitle: this.configData.title,
          shareIcon: this.configData.iconUrl,
          shareUrl: this.configData.redirectUrl,
          shareContent: this.configData.content,
          extra: {
            custom: {
              activityUri: this.configData.extra
            }
          }
        },
        complete: e => {
          //e.type为分享类型
          if (e.shareResult != 1) {
            this.$emit("shareFail");
            return false;
          }
          this.$emit("shareSuc");
        },
        isGetData: true
      });
    },
    /**ios游戏盒分享 */
    async iosShare(type) {
      if (help.env().isAndroid || !help.env().isGamebox) return;
      let url;
      if (this.configData.extra) {
        url = /\?/.test(this.configData.redirectUrl)
          ? this.configData.redirectUrl + "&" + this.configData.extra
          : this.configData.redirectUrl + "?" + this.configData.extra;
      } else {
        url = this.configData.redirectUrl;
      }
      let shareConfig = {
        shareUrl: url,
        shareIcon: this.configData.iconUrl,
        shareTitle: this.configData.title,
        shareContent: this.configData.content
      };
      window.TopicApp = {};
      onJsShareForType && onJsShareForType(type, shareConfig);
      TopicApp.onJsShareCallBack = () => {
        this.$emit("shareSuc");
      };
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
  li {
    display: inline-block;
    span {
      display: inline-block;
    }
  }
</style>

