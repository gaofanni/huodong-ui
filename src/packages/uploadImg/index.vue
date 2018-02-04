<template>
  <section class="btn-upload"
    ref="image">
    <slot name="background" />
    <input type="file"
      ref="input"
      @change="uploadPhoto">
  </section>
</template>

<script>
  export default {
    props: {
      limitSize: {
        required: false,
        type: Number
      },
      backgroundSize: {
        required: false,
        type: String,
        default: "contain"
      }
    },
    data() {
      return {
        uploadIMG: null
      };
    },
    methods: {
      click() {
        this.$refs.input.click();
      },
      uploadPhoto(e) {
        //上传图片
        let img = this.$refs.image;
        let reader = new FileReader();
        let input = e.target;
        if (
          this.limitSize &&
          input.files[0] &&
          input.files[0].size > this.limitSize
        ) {
          this.$emit("overSize");
          return;
        } else {
          input.files[0] && reader.readAsDataURL(input.files[0]);
        }

        this.uploadIMG = input.files[0];
        reader.onload = e => {
          img.querySelector(".innerImg") &&
            img.removeChild(img.querySelector(".innerImg")); //去除旧图片

          let base64 = e.target.result; //获得base64地址
          let IMG = document.createElement("div");
          this.copyAttributeData(img, IMG);
          IMG.className = "innerImg";
          IMG.style.backgroundImage = `url("${base64.replace(
            /data:/gi,
            "data:image/png;"
          )}")`;
          IMG.style.backgroundSize = this.backgroundSize;
          IMG.style.width = "100%";
          IMG.style.height = "100%";
          img.appendChild(IMG);
          this.$emit("uploadDone", this.uploadIMG);
        };
      },
      /**
           * 拷贝scoped定义的data值
           * @param {Object} from 被拷贝的节点
           * @param {Object} to 复制进的节点
           */
      copyAttributeData(from, to) {
        let attributes = from.attributes;
        for (let n in attributes) {
          if (/data/.test(attributes[n].nodeName)) {
            to.setAttribute(attributes[n].nodeName, "");
          }
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  .btn-upload {
    position: relative;
    display: inline-block;
    overflow: hidden;
    .innerImg {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      pointer-events: none;
    }
    input {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      opacity: 0;
    }
  }
</style>



