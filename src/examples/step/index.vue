<template>
    <div class="wrap">
        <div class="info">
            <div class='title'>进度条/步骤条</div>
            <div class="author">gaofanni</div>
        </div>
        <Barrage :data='barrageData'
            class='barrage-content'>
            <li></li>
        </Barrage>
    </div>
</template>

<script>
    import Barrage from "../../packages/barrage/index";
    export default {
      data() {
        return {
          barrageData: [
            "游戏直播与视频分享神器",
            "与主播零距离互动大量高端游戏赛事大量高端游戏赛事大量高端游戏",
            "大量高端游戏赛事",
            "游戏直播与视频分享神器",
            "与主播零距离互动大量高端游戏赛事大量高端游戏赛事大量高端游戏",
            "大量高端游戏赛事",
            "游戏直播与视频分享神器",
            "与主播零距离互动大量高端游戏赛事大量高端游戏赛事大量高端游戏",
            "大量高端游戏赛事",
            "游戏直播与视频分享神器",
            "与主播零距离互动大量高端游戏赛事大量高端游戏赛事大量高端游戏",
            "大量高端游戏赛事"
          ]
        };
      },
      components: { Barrage }
    };
</script>

<style lang="scss" >
    @import "../../common/sass/global";
    .barrage-content {
      position: relative;
      display: inline-block;
      width: re(520);
      height: re(176);
      overflow: hidden;
      border: 1px solid #999;
    }
    li {
      display: inline-block;
      position: absolute;
      left: re(520);
      padding: 0 re(40);
      height: re(47);
      border: 1px solid #bf8555;
      line-height: re(47);
      white-space: nowrap;
      background-color: #2d1711;
      color: #bf8555;
      &.txt-0 {
        top: 0;
      }
      &.txt-1 {
        top: re(66);
      }
      &.txt-2 {
        top: re(129);
      }
    }
</style>


