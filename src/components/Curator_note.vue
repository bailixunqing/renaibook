<template >
  <div class="screen">
    <div class="background">
      <img src="../assets/images/background_2.png" />
    </div>
    <div style="height: 5px">
      <a class="top_text1" href="http://www.tjrac.edu.cn/">天津仁爱学院</a>
      <h1 class="top_text2">English</h1>
    </div>
<!--    标题栏-->
    <drop-menu/>

    <section class="main">
      <div class="top">
        <h2 align="center">{{ Notice.title }}</h2>
        <p>book lending</p>
        <p>
          <span class="left">{{ Notice.author }}</span>
          <span class="right">{{ Notice.date }}</span>
        </p>
        <hr class="line" />
      </div>
      <div class="text" v-html="Notice.text"></div>
      
    </section>
  <div style="height:300px; margin-top:-1px;clear: both;overflow:hidden;"></div>
    <!-- 页面底 -->

    <!-- 页面底 -->
    <div class="TAG_5">
      <bottom-footer/>
    </div>
  </div>
</template>
<script>
import DropMenu from "@/components/common/DropMenu";
import BottomFooter from "@/components/common/BottomFooter";
export default {
  name: "Curator_note",
  components: {BottomFooter, DropMenu},
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
    this.Notice.author = "Admin";
    this.Notice.date = data.gmtCreate.replace(/-/g, ".");
    this.Notice.text = data.content;
    // this.Notice.text = data.content.replace(/\n/g, "<br>");
    this.Notice.text = data.content.replace(/"/g, "\"");
    console.log(this.Notice);
  },
};
</script>
<style>
</style>

<style scoped>
.top_text1 {
  position: absolute;
  width: 96px;
  height: 22px;
  left: 1386px;
  top: 18px;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  margin: 0 0 0 0;
  color: #ffffff;
}
.top_text2 {
  position: absolute;
  width: 96px;
  height: 22px;
  left: 1506px;
  top: 18px;

  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  margin: 0 0 0 0;
  color: #ffffff;
}
.background {
  position: absolute;
  width: 100%;
  margin: -27px 0 0 0;
  z-index: -999;
}
.background img {
  position: absolute;
  top: -27px;
  width: 100%;
  overflow: hidden;
}

* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
}
.navlist a {
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 60px;

  text-align: center;
  color: #00478b;
  display: block;
}
.navlist a:hover {
  background: #ffffff;
  /* 大块投影 */

  box-shadow: 0px 10px 26px -6px rgba(0, 0, 0, 0.12);
  border-radius: 11px 11px 11px 11px;
}

.btli:hover .droplist {
  display: block;
  z-index: -1;
}

.main {
  margin: 370px;
  width: 1200px;
  height: 100%;
  left: 359px;

  background: #ffffff;
  box-shadow: 0px 10px 26px -6px rgba(0, 0, 0, 0.12);
  border-radius: 26px;
}

.main .top h2 {
  margin: auto;
  width: 300px;
  height: 100px;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  line-height: 100px;
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

.TAG_5 {
  position: absolute;
  width: 100%;
  height: 456px;

  bottom: 0px;

  background: #0d52a1;
}
.screen {
  width: 100%;
  overflow: hidden;
}
</style>





