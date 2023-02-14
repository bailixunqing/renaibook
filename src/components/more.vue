
<template>
  <div v-if="load" class="screen">
    <div class="background"></div>

    <!-- main -->

    <div class="main">
      <div class="left">
        <el-collapse v-model="activeName" accordion class="TAG_left_1">
          <el-collapse-item title="通知公告" name="1" @click="select(1)">
          </el-collapse-item>
          <el-collapse-item title="资源动态" name="2" @click="select(2)">
          </el-collapse-item>
          <el-collapse-item title="活动报告" name="3" @click="select(3)">
          </el-collapse-item>
        </el-collapse>
      </div>
      <div class="right">
        <div class="mains" v-if="show(1)">
          <div class="tit">通知公告</div>
          <div class="content" v-for="item in Notice.content" :key="item" @click="jump(item, 0)">
            <div class="major">
              <text class="mainly">{{ item.title }}</text>
              <text class="time">{{ item.gmtCreate }}</text>
            </div>
          </div>
          <div class="select_page">
            <div class="last" @click="Notice_page_last()">上一页</div>
            <div class="next" @click="Notice_page_next()">下一页</div>
            <div class="pages">
              页码 :
              <div v-show="Notice_is_edit" @click="Notice_no_edit()" class="sel_span">
                {{ Notice.page }}
              </div>
              <input v-show="!Notice_is_edit" class="sel_input" @blur="Notice_edit($event)" type="text"
                :value="Notice.page" ref="inputvalue" /> /32
            </div>
            <div class="select" @click="Notice_page_jump()">跳转</div>
          </div>
        </div>


        <div class="mains" v-if="show(2)">
          <div class="tit">资源动态</div>
          <div class="content" v-for="item in Resource.content" :key="item" @click="jump(item, 1)">
            <div class="major">
              <text class="mainly">{{ item.title }}</text>
              <text class="time">{{ item.gmtCreate }}</text>
            </div>
          </div>
          <div class="select_page">
            <div class="last" @click="Resource_page_last()">上一页</div>
            <div class="next" @click="Resource_page_next()">下一页</div>
            <div class="pages">
              页码 :
              <div v-show="Resource_is_edit" @click="Resource_no_edit()" class="sel_span">
                {{ Resource.page }}
              </div>
              <input v-show="!Resource_is_edit" class="sel_input" @blur="Resource_edit($event)" type="text"
                :value="Resource.page" ref="inputvalue" /> /32
            </div>
            <div class="select" @click="Resource_page_jump()">跳转</div>
          </div>
        </div>


        <div class="mains" v-if="show(3)">
          <div class="tit">活动报告</div>
          <div class="content" v-for="item in Activity.content" :key="item" @click="jump(item, 2)">
            <div class="major">
              <text class="mainly">{{ item.title }}</text>
              <text class="time">{{ item.gmtCreate }}</text>
            </div>
          </div>
          <div class="select_page">
            <div class="last" @click="Activity_page_last()">上一页</div>
            <div class="next" @click="Activity_page_next()">下一页</div>
            <div class="pages">
              页码 :
              <div v-show="Activity_is_edit" @click="Activity_no_edit()" class="sel_span">
                {{ Activity.page }}
              </div>
              <input v-show="!Activity_is_edit" class="sel_input" @blur="Activity_edit($event)" type="text"
                :value="Activity.page" ref="inputvalue" />/32
            </div>
            <div class="select" @click="Activity_page_jump()">跳转</div>
          </div>
        </div>


      </div>
    </div>

    <!-- 页面底 -->
    <div class="TAG_5">
      <Admin-bottom />
    </div>
  </div>
</template>
<script>
const axios = require("axios");
export default {
  name: "more",
  data() {
    let npage = 1;
    let apage = 1;
    let rpage = 1;
    let page_select = 1;
    // let major = [
    //   {
    //     mainly: "sdfgvhgnbfvdcfs",
    //     time: 2022,
    //   },
    //   {
    //     mainly: "qwertyu",
    //     time: 2000,
    //   },
    // ];
    const Notice = {
      content: [],
      page: 1,
    };
    const Activity = { content: [], page: 1 };
    const Resource = { content: [], page: 1 };
    let activeName = "1";
    let current = 1;
    let load = true;
    let Notice_is_edit = true;
    let Resource_is_edit = true;
    let Activity_is_edit = true;
    return {
      activeName,
      current,
      load,
      Notice_is_edit,
      Resource_is_edit,
      Activity_is_edit,
      page_select,
      npage,
      apage,
      rpage,
      Notice,

      Activity,
      Resource,
    };
  },
  methods: {
    select(i) {
      this.current = i;
      if (i == 1) {
        if (this.Notice.content.length == 0) {
          axios
            .get("/api" + "/notice/searchAll", {
              params: {
                pageSize: 10,
              },
            })

            .then((res) => {
              let data = [];
              console.log("notice:");
              console.log(res);
              data = res.data.data;
              for (var i = 0; i < data.length; i++) {
                var date = new Date(data[i].gmtCreate);
                let Y = date.getFullYear() + "-";
                let M =
                  (date.getMonth() + 1 < 10
                    ? "0" + (date.getMonth() + 1)
                    : date.getMonth() + 1) + "-";
                let D =
                  date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
                data[i].gmtCreate = Y + M + D;
                console.log(data[i].gmtCreate);
                data[i].time = data[i].gmtCreate
                  .replace("-", ".")
                  .substring(0, 7);
                data[i].day = data[i].gmtCreate.substring(8, 10);
              }
              this.Notice.content = data;

              console.log(this.Notice);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
      if (i == 2) {
        if (this.Resource.content.length == 0) {
          axios
            .get("/api" + "/resource/searchAll", {
              params: {
                pageSize: 10,
              },
            })

            .then((res) => {
              let data = [];
              console.log("Resource:");
              console.log(res);
              data = res.data.data;
              for (var i = 0; i < data.length; i++) {
                var date = new Date(data[i].gmtCreate);
                let Y = date.getFullYear() + "-";
                let M =
                  (date.getMonth() + 1 < 10
                    ? "0" + (date.getMonth() + 1)
                    : date.getMonth() + 1) + "-";
                let D =
                  date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
                data[i].gmtCreate = Y + M + D;
                console.log(data[i].gmtCreate);
                data[i].time = data[i].gmtCreate
                  .replace("-", ".")
                  .substring(0, 7);
                data[i].day = data[i].gmtCreate.substring(8, 10);
              }
              this.Resource.content = data;

              console.log(this.Resource);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
      if (i == 3) {
        if (this.Activity.content.length == 0) {
          axios
            .get("/api" + "/activity/searchAll", {
              params: {
                pageSize: 10,
              },
            })

            .then((res) => {
              let data = [];
              console.log("activity:");
              console.log(res);
              data = res.data.data;
              for (var i = 0; i < data.length; i++) {
                var date = new Date(data[i].gmtCreate);
                let Y = date.getFullYear() + "-";
                let M =
                  (date.getMonth() + 1 < 10
                    ? "0" + (date.getMonth() + 1)
                    : date.getMonth() + 1) + "-";
                let D =
                  date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
                data[i].gmtCreate = Y + M + D;
                console.log(data[i].gmtCreate);
                data[i].time = data[i].gmtCreate
                  .replace("-", ".")
                  .substring(0, 7);
                data[i].day = data[i].gmtCreate.substring(8, 10);
              }
              this.Activity.content = data;

              console.log(this.Activity);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
    },
    show(i) {
      if (i == this.current) return true;
      else return false;
    },
    Notice_page_last() {
      if (this.Notice.page > 1) {
        this.Notice.page--;
      } else {
        return alert("页码错误");
      }
    },
    Resource_page_last() {
      if (this.Resource.page > 1) {
        this.Resource.page--;
      } else {
        return alert("页码错误");
      }
    },
    Activity_page_last() {
      if (this.Activity.page > 1) {
        this.Activity.page--;
      } else {
        return alert("页码错误");
      }
    },
    Notice_page_next() {
      if (this.Notice.page < 32) {
        this.Notice.page++;
      } else {
        return alert("页码错误");
      }
    },
    Resource_page_next() {
      if (this.Resource.page < 32) {
        this.Resource.page++;
      } else {
        return alert("页码错误");
      }
    },
    Activity_page_next() {
      if (this.Activity.page < 32) {
        this.Activity.page++;
      } else {
        return alert("页码错误");
      }
    },
    Notice_no_edit() {
      this.Notice_is_edit = false;
      this.$nextTick(function () {
        this.$refs.inputvalue.focus();
      });
    },
    Resource_no_edit() {
      this.Resource_is_edit = false;
      this.$nextTick(function () {
        this.$refs.inputvalue.focus();
      });
    },
    Activity_no_edit() {
      this.Activity_is_edit = false;
      this.$nextTick(function () {
        this.$refs.inputvalue.focus();
      });
    },
    Notice_edit(e) {
      this.Notice_is_edit = true;
      if (!e.target.value.trim()) return alert("页码不为空");
      if (e.target.value > 32 || e.target.value < 1) return alert("页码错误");
      this.npage = e.target.value;
    },
    Resource_edit(e) {
      this.Resource_is_edit = true;
      if (!e.target.value.trim()) return alert("页码不为空");
      if (e.target.value > 32 || e.target.value < 1) return alert("页码错误");
      this.rpage = e.target.value;
    },
    Activity_edit(e) {
      this.Activity_is_edit = true;
      if (!e.target.value.trim()) return alert("页码不为空");
      if (e.target.value > 32 || e.target.value < 1) return alert("页码错误");
      this.apage = e.target.value;
    },
    Notice_page_jump() {
      if (this.Notice_is_edit == false) {
        this.Notice_is_edit = true;
        this.Notice.page = this.npage;
      }

    },
    Resource_page_jump() {
      if (this.Resource_is_edit == false) {
        this.Resource_is_edit = true;
        this.Resource.page = this.rpage;
      }

    },
    Activity_page_jump() {
      if (this.Activity_is_edit == false) {
        this.Activity_is_edit = true;
        this.Activity.page = this.apage;
      }

    },
    jump(e, type) {
      this.$router.push({
        name: "Curator_note",
        params: { id: e.id, type: type },
      });
    },
  },
  mounted: function () {
    axios
      .get("/api" + "/notice/searchAll", {
        params: {
          pageSize: 10,
        },
      })

      .then((res) => {
        let data = [];
        console.log("notice:");
        console.log(res);
        data = res.data.data;
        for (var i = 0; i < data.length; i++) {
          var date = new Date(data[i].gmtCreate);
          let Y = date.getFullYear() + "-";
          let M =
            (date.getMonth() + 1 < 10
              ? "0" + (date.getMonth() + 1)
              : date.getMonth() + 1) + "-";
          let D = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
          data[i].gmtCreate = Y + M + D;
          console.log(data[i].gmtCreate);
          data[i].time = data[i].gmtCreate.replace("-", ".").substring(0, 7);
          data[i].day = data[i].gmtCreate.substring(8, 10);
        }
        this.Notice.content = data;

        console.log(this.Notice);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
}

.screen {
  overflow: hidden;
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
  background-color: #0d52a1cf;
  --el-button-border-color: #fefefebf;
  --el-button-active-color: #ffffff;
  --el-button-hover-bg-color: #0d52a1b5;
  --el-button-disabled-bg-color: #ffffff;
  --el-button-hover-border-color: #ffffff;
  --el-button-active-bg-color: #0d4d9bb5;
  --el-button-disabled-border-color: #ffffff;
  --el-button-active-border-color: #0d52a1b5;
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
  width: 1000px;

  background: #ffffff;
  /* 大块投影 */
  /* background-color: #5ca695; */
  box-shadow: 0px 10px 26px -6px rgba(0, 0, 0, 0.12);
  border-radius: 26px;
  margin-top: 62px;
  margin-left: 27px;
  margin-bottom: 40px;
  /* position: relative; */
}

.tit {
  padding-bottom: 10px;
  /* background-color: #5ca695; */
  border-bottom: 2px solid #a6a6a6;
  font-size: 25px;
  font-weight: 400;
  color: #0d52a1;
}

.mains {
  width: 940px;
  height: 93%;
  margin: 30px;
  /* background-color: #1f8ef6; */
  position: relative;
}

.major {
  /* margin-top: 20px; */
  display: flex;
  justify-content: space-between;
  height: 30px;
  cursor: pointer;
  /* background-color: #2fb163; */
}

.major:hover {
  color: #0d52a1;
}

.content {
  margin-top: 10px;
}

.pages {
  display: flex;
}

.select_page {
  display: flex;
  position: absolute;
  left: 620px;
  bottom: 0;
}

.last,
.next,
.select {
  width: 50px;
  margin: 0 10px 0 10px;
  text-decoration: none;
  background-color: rgb(255, 255, 255);
  color: #0c57ad;
}

.last:hover,
.next:hover,
.select:hover {
  cursor: pointer;
  color: #1f8ef6;
}

.sel_span {
  margin: 0 6px;
  width: 15px;
  text-align: center;
  background-color:
    #EFEFEF;
}

.sel_input {
  width: 20px;
}

.TAG_5 {
  width: 100%;
  background-size: 100% auto;
}

/*开片样式*/
</style>





