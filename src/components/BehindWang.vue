<template>
  <div class="screen">
    <div class="background">
      <img src="../assets/images/index.png" />
    </div>
    <div style="height: 5px">
      <a class="top_text1" href="http://www.tjrac.edu.cn/">天津仁爱学院</a>
      <a class="top_text2">English</a>
    </div>
    <drop-menu />
    <!-- main -->

    <div class="main">
      <div class="left">
        <el-collapse v-model="activeName" accordion class="TAG_left_1">
          <el-collapse-item title="馆长寄语" @click="select(1)" name="1">
          </el-collapse-item>
          <el-collapse-item title="本馆简介" name="2"> </el-collapse-item>
          <el-collapse-item title="馆藏分布" name="3"> </el-collapse-item>
          <el-collapse-item title="开放时间" name="4"> </el-collapse-item>
          <el-collapse-item title="入馆须知" name="5"> </el-collapse-item>
          <el-collapse-item title="组织机构" name="6"> </el-collapse-item>
          <el-collapse-item title="联系我们" name="7"> </el-collapse-item>
          <el-collapse-item title="馆内服务" name="8"> </el-collapse-item>
        </el-collapse>
      </div>
      <div class="right">
        <div class="text" v-html="value" v-if="show(1)"></div>
      </div>
    </div>
    <!-- 页面底 -->
    <div class="TAG_5">
      <bottom-footer />
    </div>
  </div>
</template>
<script>
import BottomFooter from "@/components/common/BottomFooter";
import BehindMenu from "@/components/common/BehindMenu";
import DropMenu from "@/components/common/DropMenu";
const axios = require("axios");
export default {
  name: "BehindWand",
  components: { DropMenu, BehindMenu, BottomFooter },
  data() {
  
    let current = 0;
    var value =
      '<p style="margin: 0px; padding: 0px; font-family: \'Microsoft YaHei\'; background-color: #ffffff; text-align: center;"><span style="margin: 0px; padding: 0px; font-size: 16px;">你好啊世界</span></p><p style="margin: 0px; padding: 0px; font-family: \'Microsoft YaHei\'; background-color: #ffffff;"><span style="margin: 0px; padding: 0px; font-size: 16px;">&nbsp; &nbsp; &nbsp; <span style="color: #e03e2d;">&nbsp;i喜喜喜喜喜喜休息撒迪啊上帝萨蒂阿斯蒂萨达萨达萨达萨达萨达阿斯顿阿萨大赛的撒的阿萨大赛大苏打啊实打实大苏打阿斯顿阿斯顿阿萨的阿萨大赛的阿<span style="margin: 0px; padding: 0px;">。<span style="margin: 0px; padding: 0px; text-align: justify; text-indent: 32px;">学生会退会，发生了会如何，不发生又会如何。 这是不可避免的。 了解清楚学生会退会到底是一种怎么样的存在，是解决一切问题的关键。这样看来，可是，即使是这样，学生会退会的出现仍然代表了一定的意义。 本人也是经过了深思熟虑，在每个日日夜夜思考这个问题。 马云曾经提到过，最大的挑战和突破在于用人，而用人最大的突破在于信任人。这启发了我。学生会退会因何而发生？白哲特曾经说过，坚强的信念能赢得强者的心，并使他们变得更坚强。这句话把我们带到了一个新的维度去思考这个问题：那么，要想清楚，学生会退会，到底是一种怎么样的存在。</span></span></span></span></p><p style="margin: 0px; padding: 0px; font-family: \'Microsoft YaHei\'; background-color: #ffffff;"><span style="margin: 0px; padding: 0px; font-size: 16px;"><span style="margin: 0px; padding: 0px;"><span style="margin: 0px; padding: 0px; text-align: justify; text-indent: 32px;">&nbsp; &nbsp; &nbsp; &nbsp; 在这种不可避免的冲突下，我们必须解决这个问题。 一般来讲，我们都必须务必慎重的考虑考虑。 生活中，若学生会退会出现了，我们就不得不考虑它出现了的事实。 问题的关键究竟为何？ 经过上述讨论，在这种不可避免的冲突下，我们必须解决这个问题。 一般来讲，我们都必须务必慎重的考虑考虑。 总结的来说，学生会退会，发生了会如何，不发生又会如何。 既然如此，学生会退会似乎是一种巧合，但如果我们从一个更大的角度看待问题，这似乎是一种不可避免的事实。 黑格尔曾经提到过，只有永远躺在泥坑里的人，才不会再掉进坑里。带着这句话，我们还要更加慎重的审视这个问题： 吉姆&middot;罗恩说过一句著名的话，要么你主宰生活，要么你被生活主宰。这句话把我们带到了一个新的维度去思考这个问题：现在，解决学生会退会的问题，是非常非常重要的。 所以，问题的关键究竟为何？ 查尔斯&middot;史考伯曾经提到过，一个人几乎可以在任何他怀有无限热忱的事情上成功。 这启发了我。</span></span></span></p>';
    const Notice = [];
    const activities = [
      {
        title: "2022年度ProQuest博硕士学位论文订购通知",
        content:
          "活动详细描述活动详细描述活动详细描述活动详细描述活动详细描述活动详细描述活",
        img: "",
      },
      {
        title: "2022年度ProQuest博硕士学位论文订购通知",
        content:
          "活动详细描述活动详细描述活动详细描述活动详细描述活动详细描述活动详细描述活",
        img: "",
      },
      {
        title: "2022年度ProQuest博硕士学位论文订购通知",
        content:
          "活动详细描述活动详细描述活动详细描述活动详细描述活动详细描述活动详细描述活",
        img: "",
      },
    ];
    return { Notice, activities, value, current };
  },
  methods: {
    show(i)
    {
      if(i==this.current)
      return true;
      else return false;
    },
    select(i) {
      this.current = i;
      return true;
    },
    
    init() {
      let data;
      let i = 0;
      axios
        .get("/api" + "/activity/searchAll")
        .then((res) => {
          this.activities = res.data.data;
          console.log(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });

      axios
        .get("/api" + "/notice/searchAll")
        .then((res) => {
          data = res.data.data;
          for (i = 0; i < data.length; i++) {
            data[i].gmtCreate = data[i].gmtCreate.substring(0, 10);
            data[i].time = data[i].gmtCreate.substring(0, 7);
            data[i].time = data[i].time.replace("-", ".");
            data[i].day = data[i].gmtCreate.substring(8, 10);
          }
          this.Notice = data;
          console.log(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    jump_notice(e) {
      this.$router.push({
        name: "Curator_note",
        params: { Notice: JSON.stringify(e) },
      });
      console.log(e);
    },
  },

  mounted: function () {
    this.init();
  },
  message() {},
};
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
}
.left {
  width: 291px;
  height: 459px;
  margin-left: 361px;
  margin-top: 62px;
  background: #ffffff;
  /* 大块投影 */

  box-shadow: 0px 10px 26px -6px rgba(0, 0, 0, 0.12);
  border-radius: 20px;
}

.el-dropdown {
  color: rgb(255, 255, 255);
  padding-top: 25px;
  padding-right: 233px;
  float: right;
  font-weight: bold;
  font-size: 18px;
}

.TAG {
  width: 1240px;
  height: 1400px;
  margin: 0 auto;
}

.TAG_left {
  width: 18%;
  height: 450px;
  float: left;
  border-radius: 50px;
  margin-top: 62px;
}

.TAG_left_1 {
  margin-top: 0px;
  border-top-width: 0px;
  border-bottom-width: 0px;
}

.el-button {
  text-align: center;
}

:deep(.tox:not([dir="rtl"])) {
  border-radius: 20px;
  border-color: #0c57ad;
  height: 100% !important;
  margin-right: 20px;
}

:deep(.el-table__empty-block) {
  background-color: #f7fafc;
}

:deep(.tox .tox-menubar) {
  background-color: #0c57ad;
  padding-left: 20px;
}

:deep(.tox .tox-mbtn__select-labe)l {
  color: rgb(255, 255, 255);
}
:deep(.tox .tox-statusbar__wordcount) {
  color: rgb(255, 255, 255);
  margin-right: 50px;
}

:deep(.tox .tox-statusbar) {
  background-color: #0c57ad;
}

.TAG_right_buttom {
  margin-top: 2px;
  margin-right: 27px;
  text-align: right;
}

.TAG_main_write {
  margin-top: 26px;
  margin-bottom: 26px;
}

:deep(.el-collapse) {
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

:deep(.el-collapse-item__content) {
  padding-bottom: 0px;
}

:deep(.el-collapse-item__header) {
  color: #666666;
  font-size: 18px;
  font-weight: bold;
  padding-top: 10px;
  width: 80%;
  margin-left: 18px;
  margin-right: 18px;
}

:deep(.el-message-box--center .el-message-box__title) {
  color: #ce3735;
}

:deep(.el-button.is-round) {
  font-size: 16px;
  font-weight: bold;
}

:deep(.el-collapse-item__header.is-active) {
  color: #00478b;
}

:deep(.el-overlay-message-box) {
  background-color: #1a1a1a2b !important;
  backdrop-filter: blur(14px) !important;
}

:deep(.el-table__inner-wrapper::before) {
  background-color: rgb(255, 255, 255);
}

:deep(.el-textarea__inner) {
  color: #000;
}

:deep(.el-collapse-item__wrap) {
  border-bottom-width: 0px;
  border-radius: 20px;
}

.TAG_left_button {
  text-align: left;
  width: 200px;
  height: 40px;
  margin: 10px;
  font-size: 15px;
  font-family: "PingFang SC";
  border: 0;
  color: #00488bd5;
  background: #ffffff00;
}

.TAG_right_adminpower_top {
  padding-top: 27px;
}
.TAG_right_adminpower_bottom {
  padding-bottom: 27px;
}

.TAG_right_back {
  padding-top: 20px !important;
  width: 8%;
  padding-bottom: 20px !important;
  background-color: #c4c4c4 !important;
}

.TAG_right_on {
  padding-top: 20px !important;
  padding-bottom: 20px !important;
  width: 14%;
}

:deep(.el-button--primary) {
  --el-button-hover-bg-color: #0d52a1;
}

:deep(.el-button--success) {
  background-color: #0d52a1;
  --el-button-border-color: #ffffff;
  --el-button-active-color: #5ca695;
  --el-button-hover-bg-color: #0d52a1;
  --el-button-disabled-bg-color: #ffffff;
  --el-button-hover-border-color: #ffffff;
  --el-button-active-bg-color: #6edbff;
  --el-button-disabled-border-color: #ffffff;
  --el-button-active-border-color: #122bcb;
}

:deep(.el-input__wrapper.is-focus) {
  box-shadow: 0 0 0 1px #0d52a1 inset;
}

:deep(.el-input__wrapper) {
  box-shadow: 0 0 0 1px #0d52a17d inset;
  border-radius: 11px;
  height: 40px;
}

:deep(.el-button > span) {
  width: 110px;
  display: block;
}

:deep(.el-icon svg) {
  color: #0c57ad;
}

:deep(.el-checkbox__input.is-checked .el-checkbox__inner) {
  background-color: #0d52a1;
  border-color: #0d52a1;
}

.TAG_right {
  width: 81%;
  margin-top: 62px;
  float: right;
}

.TAG_rght_2 {
  height: 100%;
  margin-bottom: 500px;
  margin-left: 15px;
  margin-right: 25px;
  padding: 42px;
  padding-top: 23px;
  padding-bottom: 80px;
  background: #ffffff;
  border-radius: 26px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.TAG_right_admin {
  margin-bottom: 50px;
}
.TAG_right_admin_left {
  font-size: 28px;
  font-family: "PingFang SC";
  float: left;
  color: #0c57ad;
}

.TAG_right_admin_right {
  font-size: 25px;
  font-family: "PingFang SC";
  float: right;
  color: #0c57ad;
}

:deep(.el-form-item) {
  margin-right: 15px;
  font-family: "PingFang SC";
  font-weight: 600;
}

:deep(.el-form-item__label) {
  color: #000;
  font-family: "PingFang SC";
  font-size: 18px;
  margin-top: 5px;
}

:deep(.el-form-item__content) {
  margin-left: 20px;
  background-color: #f7fafc;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  align-items: flex-start;
}

:deep(.el-input__inner) {
  width: 220px;
}

:deep(.el-form-item__label) {
  padding-right: 0px;
}

:deep(.el-table td.el-table__cell, .el-table th.el-table__cell.is-leaf) {
  font-family: "PingFang SC";
  font-size: 20px;
  text-align: center;
  border-right-width: 0px !important;
  background-color: #f7fafc;
  color: black;
  font-weight: bold;
  height: 47px;
}

:deep(.el-table th.el-table__cell.is-leaf) {
  padding: 0;
  text-align: center;
  border-right-width: 0px !important;
}

:deep(.el-checkbox-group) {
  margin-top: 20px;
  display: grid;
  background: #f7fafc;
  border-radius: 20px;
  font-family: "PingFang SC";
  font-size: 30px;
}

:deep(.el-checkbox) {
  font-family: "PingFang SC";
  color: #000;
  margin-top: 10px;
  margin-bottom: 10px;
}
:deep(.el-checkbox__label) {
  font-size: 20px;
}
:deep(.el-checkbox__input.is-checked + .el-checkbox__label) {
  color: #00478b;
}

:deep(.el-checkbox__inner) {
  border-radius: 20px;
  margin-left: 15px;
  zoom: 142%;
}

:deep(.el-table th.el-table__cell > .cell) {
  background-color: #0c57ad;
  color: rgb(255, 255, 255);
  font-size: 18px;
  font-family: "PingFang SC";
  padding: 10px;
  height: 46px;
}

.TAG_right_button {
  margin-top: 10px;
}

.TAG_right_admin_table {
  margin-top: 20px;
}

:deep(.el-table--fit) {
  width: 100%;
  border-radius: 25px;
}
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
  display: flex;
  justify-content: center;
  position: absolute;
  width: 1920px;
  height: 673px;
  z-index: -999;
}
.background img {
  width: 1920px;
  object-fit: cover;
  width: 100%;
  height: 100%;
  display: inline-block;
  border: none;
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
  background: #e7e7e7;
  /* 大块投影 */
  background: rgba(255, 255, 255, 1);
}

.ArtFont img {
  margin-top: 125px;
  margin-left: 811px;
  z-index: -1;
}

.main {
  display: flex;
  margin-top: 500px;
  height: 1600px;
  width: 1920px;
  background-color: #e5e5e5;
}

.right {
  width: 877px;

  background: #ffffff;
  /* 大块投影 */

  box-shadow: 0px 10px 26px -6px rgba(0, 0, 0, 0.12);
  border-radius: 26px;
  margin-top: 62px;
  margin-left: 27px;
  margin-bottom: 40px;
}
.text {
  width: 817px;
  height: 100%;
  margin: 30px 30px 30px 30px;
  margin-bottom: 40px;

  background: black;
}
.TAG_5 {
  position: absolute;
  width: 1920px;
  height: 456px;
  bottom: 0px;

  background: #0d52a1;
}
/*开片样式*/
</style>





