<template>
  <canvas></canvas>
</template>

<script>
import help from "../../common/tools/help";

export default {
  name: "",
  props: ["opt", "data"],
  mounted() {
    this.initCanvas();
  },
  methods: {
    async initCanvas() {
      let ctx = await this.setCanvas();
      ctx = await this.drawPolygon(ctx);
      this.drawLines(ctx);
      this.drawText(ctx);
      this.drawRegion(ctx);
      this.drawCircle(ctx);
    },
    drawCircle(ctx) {
      let { count, center, colorFillCircle, radius } = this.opt;
      ctx.save();
      let r = center / 22;
      for (let i = 0; i < count; i++) {
        let x = this.getXY(radius, i, this.data[i]["num"]).x;
        let y = this.getXY(radius, i, this.data[i]["num"]).y;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = colorFillCircle;
        ctx.fill();
      }
      ctx.restore();
    },
    drawRegion(ctx) {
      let { count, center, colorFill, radius } = this.opt;
      ctx.save();
      ctx.beginPath();
      for (let i = 0; i < count; i++) {
        let y = this.getXY(radius, i, this.data[i]["num"]).y;
        let x = this.getXY(radius, i, this.data[i]["num"]).x;

        ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fillStyle = colorFill;
      ctx.fill();
      ctx.restore();
    },
    //绘制文字
    drawText(ctx) {
      let { count, center, radius, angle, colorPolygon, colorText } = this.opt;
      ctx.save();
      let fontSize = center / 8;
      ctx.font = fontSize + "px Microsoft Yahei";
      ctx.fillStyle = colorText;
      for (let i = 0; i < count; i++) {
        let y = this.getXY(radius, i).y;
        let x = this.getXY(radius, i).x;
        //通过不同的位置，调整文本的显示位置
        if (angle * i > 0 && angle * i <= Math.PI / 2) {
          //右上区域
          ctx.fillText(
            this.data[i]["txt"],
            x + ctx.measureText(this.data[i]["txt"]).width / 6,
            y
          );
        } else if (angle * i > Math.PI / 2 && angle * i <= Math.PI) {
          //右下
          ctx.fillText(this.data[i]["txt"], x, y + fontSize);
        } else if (angle * i > Math.PI && angle * i <= Math.PI * 3 / 2) {
          //左下
          ctx.fillText(
            this.data[i]["txt"],
            x - ctx.measureText(this.data[i]["txt"]).width,
            y + fontSize
          );
        } else if (angle * i > Math.PI * 3 / 2) {
          //左上
          ctx.fillText(
            this.data[i]["txt"],
            x -
              ctx.measureText(this.data[i]["txt"]).width -
              ctx.measureText(this.data[i]["txt"]).width / 6,
            y
          );
        } else {
          //居中
          ctx.fillText(
            this.data[i]["txt"],
            x - ctx.measureText(this.data[i]["txt"]).width / 2,
            y - fontSize / 2
          );
        }
      }
    },
    //链接中心到顶点的线
    drawLines(ctx) {
      let { count, center, radius, angle, colorPolygon } = this.opt;
      ctx.save();
      ctx.beginPath();
      ctx.strokeStyle = colorPolygon;
      for (let i = 0; i < count; i++) {
        let y = this.getXY(radius, i).y;
        let x = this.getXY(radius, i).x;
        ctx.moveTo(center, center);
        ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.restore();
    },
    getXY(r, i, dataLength) {
      let { center, angle } = this.opt;
      return {
        y:
          center -
          r *
            Math.cos(angle * i) *
            (dataLength !== undefined ? dataLength / 100 : 1),
        x:
          center +
          r *
            Math.sin(angle * i) *
            (dataLength !== undefined ? dataLength / 100 : 1)
      };
    },
    //底部图
    drawPolygon(ctx) {
      return new Promise(resolve => {
        let { count, center, radius, angle, colorPolygon } = this.opt;
        ctx.save();

        ctx.strokeStyle = colorPolygon;
        let r = radius / count; //分成几条边就等分成几圈
        for (let i = 0; i < count; i++) {
          ctx.beginPath();
          let curR = r * (i + 1);
          for (let j = 0; j < count; j++) {
            let y = this.getXY(curR, j).y;
            let x = this.getXY(curR, j).x;

            ctx.lineTo(x, y);
          }
          ctx.closePath();
          ctx.stroke();
        }
        ctx.restore();
        resolve(ctx);
      });
    },
    setCanvas() {
      return new Promise(resolve => {
        let canvas = document.querySelector("canvas");
        let parentPos = help.getPosition(canvas.parentNode);
        let ctx = canvas.getContext("2d");

        //*2是为了尺寸变大，移动端不模糊
        canvas.height = parentPos.height * 2;
        canvas.width = parentPos.width * 2;
        canvas.style.width = parentPos.width + "px";
        canvas.style.height = parentPos.height + "px";

        Object.assign(this.opt, {
          center: parentPos.width * 2 / 2, //中心点
          radius: parentPos.width * 2 / 2 - parentPos.width / 4, //半径，中心减去绘制文本的空间
          angle: Math.PI * 2 / this.opt.count //角度
        });
        resolve(ctx);
      });
    }
  },
  components: {}
};
</script>

