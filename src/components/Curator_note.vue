<template >
  <div class="screen">
    <div class="background">
      <drop-menu />
      <div style></div>
    </div>

    <!--    标题栏-->
    <div
      style="
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
      "
    >
      <div class="main">
        <div class="top">
          <h2 align="center">{{ Notice.title }}</h2>

          <p>
            <span class="left">图书馆</span>
            <span class="right">{{ Notice.date }}</span>
          </p>
          <hr class="line" />
        </div>
        <div class="text" v-html="Notice.text"></div>
      </div>
    </div>
    <div
      style="height: 300px; margin-top: -1px; clear: both;"
    ></div>
    <!-- 页面底 -->

    <!-- 页面底 -->
     <div class="TAG_5">
      <Admin-bottom />
    </div>
  </div>
</template>
<script>
import DropMenu from "@/components/common/DropMenu";
import BottomFooter from "@/components/common/BottomFooter";
export default {
  name: "Curator_note",
  components: { BottomFooter, DropMenu },
  data() {
    const Notice = {
      title: "标题",
      author: "张大千",
      date: "2022.05.02",
      text: "",
    };

    return { Notice };
  },
  mounted: function () {
    let data = JSON.parse(this.$route.params.Notice);
    this.Notice.title = data.title;
    this.Notice.author = data.author;
    this.Notice.date = data.gmtCreate.replace(/-/g, ".");
    this.Notice.text = data.content;
    // this.Notice.text = data.content.replace(/\n/g, "<br>");
    this.Notice.text = data.content.replace(/"/g, '"');
    //  this.Notice.text =this.Notice.text.replace(/\<img/gi, '<img style="width: 100%;height:auto"');
    console.log(this.Notice);
  },
};
</script>
<style>
</style>

<style scoped>
.screen {
  width: 100%;
  overflow: hidden;
}
.background {
  background-image: url("../assets/images/background_2.png");
  background-size: 100%;
  height: 520px;
  z-index: 0;

  width: 100%;
}

* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
}

.main {
  margin: -150px;
  width: 1200px;
  height: 100%;
  
  background: #ffffff;
  box-shadow: 0px 10px 26px -6px rgba(0, 0, 0, 0.12);
  border-radius: 26px;
  
}

.main .top h2 {
  margin: auto;
  margin-top: 60px;
  width: 1000px;
  padding-top: 30px;
  height: 100px;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  line-height: 40px;
  color: #0d52a1;
}
.main .top p {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 1000px;
  height: 50px;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  line-height: 50px;
  color: rgba(13, 82, 161, 0.18);
}
.main .top p .left {
  float: left;
  width: 1100px;
  height: 34px;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 34px;
  color: #0d52a1;
}
.main .top p .right {
  float: right;
  height: 34px;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 34px;
  color: #0d52a1;
}
.line {
  border: none;
  width: 1099px;
  margin-left: 50px;
  height: 3px;

  background: #eaeaea;
}
.text {
  /* white-space: pre-wrap;
  word-break: break-all;
  overflow: hidden;
  display: flex;
  text-align: justify; */
  display: block;
  margin: 0 auto;
  padding-top: 40px;
  width: 1099px;
  height: 100%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 218.52%;
  color: #000000;
}
.text >>> img {
  width: auto !important;
  height: 100%;
}
.TAG_5 {
  width: 100%;
height: 200px;

  bottom: 0px;

  background: #0d52a1;
}
</style>





