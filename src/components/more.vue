
<template>
    <div v-if="load"  class="screen">
    <div class="background">

    </div>

    <!-- main -->

    <div class="main">
      <div class="left">
        <el-collapse v-model="activeName" accordion class="TAG_left_1">
          
          <el-collapse-item   title="通知公告"  name="1" @click="select(1)">
            
          </el-collapse-item>
         <el-collapse-item   title="资源动态"  name="2" @click="select(2)">
           
          </el-collapse-item>
           <el-collapse-item   title="活动报告"  name="3" @click="select(3)">
            
          </el-collapse-item>
        </el-collapse>
      </div>
      <div class="right">
        <div class="text" v-if="show(1)"  >通知公告</div>
        <div class="text" v-if="show(2)"  >资源动态</div>
        <div class="text" v-if="show(3)"  >活动报告</div>
      </div>
    </div>

    <!-- 页面底 -->
    <div class="TAG_5">
      <Admin-bottom />
    </div>
  </div>
</template>
<script>
export default {
    name: "more",
    data()
    {
let activeName = "1";
let current=1;
let load=true;
  return{activeName,current,load}
    },
    methods:{
      select(i)
      {
        this.current=i;
      },
       show(i) {
      if (i == this.current) return true;
      else return false;
    },

    },
    mounted: function () {

  },
}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
}
.screen {
  overflow:hidden;
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 0;
  flex-flow: column;
  align-items: center;
  overflow: hidden;
}
.background {
  background-image: url("../assets/images/index.png");
  background-size: 100%;
  height: 700px;

  width: 100%;
}
.left {
  width: 291px;
  height: 459px;
  /* margin-left: 361px; */
  margin-top: 62px;

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
  justify-content: center;
  min-height: 900px;
  width: 100%;
  background-color: #e5e5e5;
}

.right {
  width:1000px;

  background: #ffffff;
  /* 大块投影 */

  box-shadow: 0px 10px 26px -6px rgba(0, 0, 0, 0.12);
  border-radius: 26px;
  margin-top: 62px;
  margin-left: 27px;
  margin-bottom: 40px;
}
.text {
  width: 940px;
  height: 100%;
  margin: 30px 30px 30px 30px;
  margin-bottom: 40px;
}
.TAG_5 {
  width: 100%;

  background-size: 100% auto;
}
/*开片样式*/
</style>





