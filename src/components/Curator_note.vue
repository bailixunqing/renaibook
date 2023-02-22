<template >
  <div v-if="load" class="screen">
    <div class="background">
      <drop-menu />
      <div style="height: 400px"></div>
    </div>

    <!--    标题栏-->
    <div
      style="
        height: 100%;
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
    <div style="height: 300px"></div>
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
const axios = require("axios");
export default {
  name: "Curator_note",
  components: { BottomFooter, DropMenu },
  data() {
    const Notice = {};
    let load=false;
    return { Notice,load };
  },
  methods: {
    init(i) {
      console.log(this.Notice.id);
      if (i == 0) {
        axios
          .get("/api" + "/notice/search", {
            params: {
              id: this.Notice.id,
            },
          })
          
          .then((res) => {
          



            let data = res.data.data[0];
            var date = new Date(data.gmtCreate);
            let Y = date.getFullYear() + "-";
            let M =
              (date.getMonth() + 1 < 10
                ? "0" + (date.getMonth() + 1)
                : date.getMonth() + 1) + "-";
            let D = date.getDate() + " ";
            data.gmtCreate = Y + M + D;
            console.log(data.gmtCreate);
            data.gmtCreate = data.gmtCreate.substring(0, 10);
            this.Notice = data;
            this.Notice.title = data.title;
            this.Notice.author = data.author;
            this.Notice.date = data.gmtCreate.replace(/-/g, ".");
            // this.Notice.text = data.content.replace(/\n/g, "<br>");
            this.Notice.text = data.content.replace(/"/g, '"');
            this.load=true;
            console.log("8888",id);
            console.log(this.Notice);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      if (i == 1) {
        axios
          .get("/api" + "/resource/search", {
            params: {
              id: this.Notice.id,
            },
          })
          .then((res) => {
            let data = res.data.data[0];
            var date = new Date(data.gmtCreate);
            let Y = date.getFullYear() + "-";
            let M =
              (date.getMonth() + 1 < 10
                ? "0" + (date.getMonth() + 1)
                : date.getMonth() + 1) + "-";
            let D = date.getDate() + " ";
            data.gmtCreate = Y + M + D;
            console.log(data.gmtCreate);
            data.gmtCreate = data.gmtCreate.substring(0, 10);
            this.Notice = data;
            this.Notice.title = data.title;
            this.Notice.author = data.author;
            this.Notice.date = data.gmtCreate.replace(/-/g, ".");
            // this.Notice.text = data.content.replace(/\n/g, "<br>");
            this.Notice.text = data.content.replace(/"/g, '"');
            this.load=true;
          })
          .catch((err) => {
            console.log(err);
          });
      }
      if (i == 2) {
        axios
          .get("/api" + "/activity/search", {
            params: {
              id: this.Notice.id,
            },
          })
          .then((res) => {
              console.log(res)
           let data = res.data.data[0];
            var date = new Date(data.gmtCreate);
            let Y = date.getFullYear() + "-";
            let M =
              (date.getMonth() + 1 < 10
                ? "0" + (date.getMonth() + 1)
                : date.getMonth() + 1) + "-";
            let D = date.getDate() + " ";
            data.gmtCreate = Y + M + D;
            console.log(data.gmtCreate);
            data.gmtCreate = data.gmtCreate.substring(0, 10);
            this.Notice = data;
            this.Notice.title = data.title;
            this.Notice.author = data.author;
            this.Notice.date = data.gmtCreate.replace(/-/g, ".");
            // this.Notice.text = data.content.replace(/\n/g, "<br>");
            this.Notice.text = data.content.replace(/"/g, '"');
            this.load=true;
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
  mounted: function () {
    this.Notice.id = this.$route.params.id;
    let type = this.$route.params.type;
    if (type == 0) {
      this.init(0);
    }
    if (type == 1) {
      this.init(1);
    }
    if (type == 2) {
      this.init(2);
    }

    //  this.Notice.text =this.Notice.text.replace(/\<img/gi, '<img style="width: 100%;height:auto"');
  },
};
</script>
<style>
</style>

<style scoped>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
}
.screen {
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 0;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  background-color: #e7e7e7;
}
.background {
  background-image: url("@/assets/images/background_2.png");
  background-size: 100%;
  z-index: 0;
  display: flex;
  flex-flow: column;
  width: 100%;
}

.main {
  margin: 50px;
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

  background: #0d52a1;
}
</style>





