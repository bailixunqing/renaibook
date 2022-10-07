<template>
  <div class="screen">
    <div class="background">
      <drop-menu />
      <div class="TAG_0">
        <div class="ArtFont">
          <img src="../assets/images/Artfont.svg" />
        </div>
        <div class="Search_TAG">
          <div class="search_text">
            <div
              @click="searchchange(0)"
              style="cursor: pointer"
              :class="{ active: search_current == 0 }"
            >
              仁爱搜索
            </div>
            <div
              @click="searchchange(1)"
              style="margin-left: 20px; cursor: pointer"
              :class="{ active: search_current == 1 }"
            >
              馆藏目录
            </div>
          </div>
          <div class="search">
            <div class="key_word">
              <block v-if="search_current == 1">
              <el-select v-model="strSearchType" placeholder="关键字">
                
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    :disabled="item.disabled"
                  />
                
              </el-select>
              </block>
              <h v-else style="color:white;margin-left:-5px;">关键字</h>
            </div>

            <input
              class="input"
              placeholder="在此输入需要搜索的内容"
              v-model="value"
            />
            <img src="../assets/images/search.svg" @click="search()" style="cursor: pointer"/>
          </div>
          <div style="height: 50px"></div>
          <div
            class="mb-2 flex items-center text-sm"
            v-if="search_current == 1"
          >
            <el-radio-group v-model="doctype" class="ml-4">
              <el-radio label="ALL" size="large">所有书刊</el-radio>
              <el-radio label="01" size="large">中文图书</el-radio>
              <el-radio label="02" size="large">西文图书</el-radio>
              <el-radio label="11" size="large">中文期刊</el-radio>
              <el-radio label="12" size="large">西文期刊</el-radio>
            </el-radio-group>
          </div>
        </div>
        <div
          style="
            display: flex;
            flex-flow: row;
            align-items: center;
            justify-content: center;
            margin-top: 50px;
            margin-bottom: 0px;
          "
        >
          <div class="tap_1" @click="jump_other(1)">
            <img class="tap_icon" src="../assets/images/icon5.svg" />
            <h1 class="tap_txt">热门推荐</h1>
          </div>
          <div class="tap_2" @click="jump_other(2)">
            <img class="tap_icon" src="../assets/images/icon6.svg" />
            <h1 class="tap_txt">分类浏览</h1>
          </div>
          <div class="tap_3" @click="jump_other(3)">
            <img class="tap_icon" src="../assets/images/icon7.svg" />
            <h1 class="tap_txt">新书通报</h1>
          </div>
          <div class="tap_4" @click="jump_other(4)">
            <img class="tap_icon" src="../assets/images/icon8.svg" />
            <h1 class="tap_txt">期刊导航</h1>
          </div>
          <div class="tap_5" @click="jump_other(5)">
            <img class="tap_icon" src="../assets/images/icon9.svg" />
            <h1 class="tap_txt">读者荐购</h1>
          </div>
          <div class="tap_6" @click="jump_other(6)">
            <img class="tap_icon" src="../assets/images/icon10.svg" />
            <h1 class="tap_txt">学科参考</h1>
          </div>
        </div>
      </div>
      <div style="height: 60px"></div>
    </div>

    <!-- 通知公告 -->
    <div class="TAG_1">
      <div style="width: 1600px">
        <div style="display: flex">
          <div class="block_1">
            <div
              style="
                display: flex;
                flex-flow: row;
                align-items: center;
                height: 70px;
                flex-wrap: wrap;
              "
            >
              <div
                class="h1"
                :class="{ active: current == 0 }"
                @click="select(0)"
              >
                通知公告
              </div>
              <div
                class="h2"
                :class="{ active: current == 1 }"
                @click="select(1)"
              >
                资源动态
              </div>
              <div class="line_1"></div>
              <h3>更多</h3>
              <!-- select(3) -->
              <h4>Notice</h4>

              <div class="line_2"></div>
            </div>

            <div class="notice">
              <span v-if="show(0)">
                <div
                  v-for="item in Notice"
                  :key="item.index"
                  @click="jump_notice(item)"
                >
                  <div class="notice_tag">
                    <div class="date">
                      <div class="day">{{ item.day }}</div>
                      <div class="time">{{ item.time }}</div>
                    </div>

                    <div class="notice_title">{{ item.title }}</div>
                  </div>
                  <div class="line_3"></div>
                </div>
              </span>
              <span v-if="show(1)">
                <div
                  v-for="item in Resource"
                  :key="item.index"
                  @click="jump_notice(item)"
                >
                  <div class="notice_tag">
                    <div class="date">
                      <div class="day">{{ item.day }}</div>
                      <div class="time">{{ item.time }}</div>
                    </div>

                    <div class="notice_title">{{ item.title }}</div>
                  </div>
                  <div class="line_3"></div>
                </div>
              </span>
            </div>
          </div>

          <div class="block_2">
            <div
              style="
                display: flex;
                flex-flow: row;
                height: 20px;
                flex-wrap: wrap;
              "
            >
              <h1>活动报道</h1>
              <div class="line_1"></div>
              <h2>更多</h2>
              <!-- select(4) -->

              <h3>Activity reports</h3>
              <div class="line_2"></div>
            </div>

            <div class="activity">
              <div
                v-for="item in activities"
                :key="item.index"
                @click="jump_notice(item)"
              >
                <div class="activity_tag">
                  <div class="activity_image">
                    <!-- 这里应该放图片 -->
                    <img :src="item.picture" />
                  </div>
                  <div class="describe">
                    <div class="activity_title">{{ item.title }}</div>
                    <div class="activity_content">{{ item.summary }}</div>

                    <div class="line_3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="block_3">
          <div style="display: flex; align-items: center">
            <div
              class="h1"
              :class="{ active: current_1 == 0 }"
              @click="select_1(0)"
            >
              常用数据库
            </div>
            <div
              class="h1"
              :class="{ active: current_1 == 1 }"
              @click="select_1(1)"
            >
              试用数据库
            </div>
            <div
              class="h1"
              :class="{ active: current_1 == 2 }"
              @click="select_1(2)"
            >
              开源数据库
            </div>

            <div class="line_1"></div>
            <h2>更多</h2>
          </div>
          <h3>Cooperative database</h3>

          <div class="line_2"></div>
          <div class="ad" v-if="show_1(0)">
            <img src="../assets/images/ad.png" />
            <img src="../assets/images/ad.png" />
            <img src="../assets/images/ad.png" />
            <img src="../assets/images/ad.png" />
            <img src="../assets/images/ad.png" />
          </div>
          <div class="ad" v-if="show_1(1)">
            <img src="../assets/images/ad.png" />
            <img src="../assets/images/ad.png" />
            <img src="../assets/images/ad.png" />
          </div>
          <div class="ad" v-if="show_1(2)">
            <img src="../assets/images/ad.png" />
            <img src="../assets/images/ad.png" />
          </div>
        </div>
      </div>
    </div>
    <!-- 馆藏资源 -->
    <div class="TAG_2">
      <div
        style="
          width: 1241px;
          display: flex;
          height: 100%;
          flex-flow: column;
          align-items: center;
          justify-content: center;
        "
      >
        <div class="title">馆藏资源</div>
        <div class="title_en">Activity reports</div>
        <div style="display: flex">
          <div class="choice">
            <h1>热门</h1>
            <h2>科技</h2>
            <h3>艺术</h3>
            <h4>历史</h4>
            <h5>学科</h5>
          </div>
          <div class="other">
            <h1>换一批</h1>
          </div>
        </div>

        <div class="book">
          <el-carousel :interval="4000" type="card" height="330px" width="25%">
            <el-carousel-item v-for="item in 6" :key="item">
              <h3 text="2xl" justify="center">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="border"></div>
      </div>
    </div>
    <!-- 服务 -->
    <div class="TAG_3">
      <div
        style="
          display: flex;
          flex-flow: column;
          align-items: center;
          justify-content: center;
        "
      >
        <div class="service">服务</div>
        <div class="service_en">service</div>
        <div style="width: 100%; height: 400px">
          <!-- <div class="card_1">
            <div class="picture"></div>
            <div class="circle"></div>
            <div class="icon_1"></div>
            <div class="card_choice">
              <div class="point1"></div>
              <h1>证卡管理</h1>
              <h2>图书借阅</h2>
              <h3>馆记互借</h3>
              <div class="point2"></div>
              <div class="point3"></div>
              <div class="point4"></div>
              <div class="point5"></div>
            </div>
            <div class="more">
              <h1>更多</h1>
            </div>
          </div>
          <div class="card_2">
            <div class="picture"></div>
            <div class="circle"></div>
            <div class="icon_1"></div>
            <div class="card_choice">
              <div class="point1"></div>
              <h1>影音空间</h1>
              <h2>研修间</h2>
              <h3>多媒体阅览区</h3>
              <h4>空间预约</h4>
              <h5>空中课堂</h5>
              <div class="point2"></div>
              <div class="point3"></div>
              <div class="point4"></div>
              <div class="point5"></div>
            </div>
            <div class="more">
              <h1>更多</h1>
            </div>
          </div>
          <div class="card_3">
            <div class="picture"></div>
            <div class="circle"></div>
            <div class="icon_1"></div>
            <div class="card_choice">
              <div class="point1"></div>
              <h1>知识产权</h1>
              <h2>论文提交</h2>
              <h3>用户教育</h3>
              <div class="point2"></div>
              <div class="point3"></div>
            </div>
            <div class="more">
              <h1>更多</h1>
            </div>
          </div>
          <div class="card_4">
            <div class="picture"></div>
            <div class="circle"></div>
            <div class="icon_1"></div>
            <div class="card_choice">
              <div class="point1"></div>
              <h1>学科服务</h1>
              <h2>机构知识库</h2>
              <h3>学科分析报告</h3>
              <div class="point2"></div>
              <div class="point3"></div>
            </div>
            <div class="more">
              <h1>更多</h1>
            </div>
          </div> -->
        </div>
      </div>
    </div>

    <!-- 图书馆服务 -->
    <div class="TAG_4">
      <div style="display: flex; flex-flow: column; align-items: center">
        <div class="library_guide">图书馆指南</div>
        <div class="library_guide_en">Library Guide</div>
        <div
          style="
            display: flex;
            flex-flow: row;
            align-items: center;
            justify-content: center;
          "
        >
          <div
            class="tap_1"
            @click="$router.push({ path: '/Library_Guide', query: { id: 1 } })"
          >
            <img class="tap_icon" src="../assets/images/icon5.svg" />
            <h1 class="tap_txt">馆长寄语</h1>
          </div>
          <div
            class="tap_2"
            @click="$router.push({ path: '/Library_Guide', query: { id: 2 } })"
          >
            <img class="tap_icon" src="../assets/images/icon6.svg" />
            <h1 class="tap_txt">本馆简介</h1>
          </div>
          <div
            class="tap_3"
            @click="$router.push({ path: '/Library_Guide', query: { id: 3 } })"
          >
            <img class="tap_icon" src="../assets/images/icon7.svg" />
            <h1 class="tap_txt">馆藏分布</h1>
          </div>
          <div
            class="tap_4"
            @click="$router.push({ path: '/Library_Guide', query: { id: 4 } })"
          >
            <img class="tap_icon" src="../assets/images/icon8.svg" />
            <h1 class="tap_txt">开放时间</h1>
          </div>
          <div
            class="tap_5"
            @click="$router.push({ path: '/Library_Guide', query: { id: 5 } })"
          >
            <img class="tap_icon" src="../assets/images/icon9.svg" />
            <h1 class="tap_txt">入馆须知</h1>
          </div>
          <div
            class="tap_6"
            @click="$router.push({ path: '/Library_Guide', query: { id: 6 } })"
          >
            <img class="tap_icon" src="../assets/images/icon10.svg" />
            <h1 class="tap_txt">组织机构</h1>
          </div>
        </div>
      </div>
      <div style="height: 200px"></div>
    </div>

    <!-- 页面底 -->
    <div class="TAG_5">
      <!-- <bottom-footer /> -->
      <Admin-bottom />
    </div>
  </div>
</template>
<script>
import DropMenu from "@/components/common/DropMenu";
import BottomFooter from "@/components/common/BottomFooter";
import AdminBottom from "@/components/admin/AdminBottom.vue";
import { ref } from "vue";
const axios = require("axios");
export default {
  name: "home",
  components: { DropMenu, BottomFooter, AdminBottom },
  data() {
    let current = 0;
    let current_1 = 0;
    const Resource = [];
    const Notice = [];
    let strSearchType = "keyword";
    let search_current = 0;
    const doctype = ref("ALL");
    let options = [
      {
        value: "title",
        label: "题名",
      },
      {
        value: "author",
        label: "责任者",
      },
      {
        value: "keyword",
        label: "主题词",
      },
      {
        value: "isbn",
        label: "ISBN",
      },
      {
        value: "asordno",
        label: "订购号",
      },
      {
        value: "coden",
        label: "分类号",
      },
      {
        value: "callno",
        label: "索书号",
      },

      {
        value: "publisher",
        label: "出版社",
      },

      {
        value: "series",
        label: "丛书名",
      },
    ];
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
    return {
      Notice,
      activities,
      Resource,
      value: "",
      current,
      doctype,
      search_current,
      strSearchType,
      current_1,
      options,
    };
  },
  methods: {
    show(i) {
      if (this.current == i) {
        return true;
      }
      return false;
    },
    show_1(i) {
      if (this.current_1 == i) {
        return true;
      }
      return false;
    },
    select(i) {
      this.current = i;
    },
    select_1(i) {
      this.current_1 = i;
    },
    change() {
      this.show = !this.show;
      console.log(this.show);
    },

    imageUrl(item) {
      // console.log(item)
      // let iconStr = '';
      // iconStr = require(`@/assets/source_images/${item.picture}`);
      // return '@/assets/source_images/${data[i].picture};
    },
    init() {
      let data = [];
      let i = 0;
      let j = 0;
      let string = "";
      if (sessionStorage.getItem("activities") != null) {
        this.activities = JSON.parse(sessionStorage.getItem("activities"));
        console.log("非空", JSON.stringify(this.activities));
      } else {
        axios
          .get("/api" + "/activity/searchAll")
          .then((res) => {
            console.log("activities:!!!!!!!!");

            data = res.data.data.slice(0, 3);
            console.log(data);
            for (i = 0; i < data.length; i++) {
              data[i].gmtCreate = data[i].gmtCreate.substring(0, 10);
              data[i].time = data[i].gmtCreate.substring(0, 7);
              data[i].time = data[i].time.replace("-", ".");
              data[i].day = data[i].gmtCreate.substring(8, 10);

              string = data[i].picture;
              console.log("渲染测试");
              try {
                require("@/assets/source_images/" + string);
              } catch {
                data[i].picture = require("@/assets/source_images/" + "1.jpeg");
                console.log("11111");
                console.log(data);
                break;
              }
              console.log("normal image");
              data[i].picture = require("@/assets/source_images/" + string);
              console.log(data);
            }
            this.activities = data;
            sessionStorage.setItem(
              "activities",
              JSON.stringify(this.activities)
            );
          })
          .catch((err) => {
            console.log(err);
          });
      }

      if (sessionStorage.getItem("Notice") != null) {
        this.Notice = JSON.parse(sessionStorage.getItem("Notice"));
      } else {
        axios
          .get("/api" + "/notice/searchAll")
          .then((res) => {
            console.log("notice:");
            console.log(res);
            data = res.data.data.slice(0, 6);
            for (i = 0; i < data.length; i++) {
              data[i].gmtCreate = data[i].gmtCreate.substring(0, 10);
              data[i].time = data[i].gmtCreate.substring(0, 7);
              data[i].time = data[i].time.replace("-", ".");
              data[i].day = data[i].gmtCreate.substring(8, 10);
            }
            this.Notice = data;
            sessionStorage.setItem("Notice", JSON.stringify(this.Notice));
            console.log(this.Notice);
          })
          .catch((err) => {
            console.log(err);
          });
      }

      if (sessionStorage.getItem("Resource") != null) {
        this.Resource = JSON.parse(sessionStorage.getItem("Resource"));
      } else {
        axios
          .get("/api" + "/resource/searchAll")
          .then((res) => {
            console.log("resource:");
            console.log(res);
            data = res.data.data;
            for (i = 0; i < data.length; i++) {
              data[i].gmtCreate = data[i].gmtCreate.substring(0, 10);
              data[i].time = data[i].gmtCreate.substring(0, 7);
              data[i].time = data[i].time.replace("-", ".");
              data[i].day = data[i].gmtCreate.substring(8, 10);
            }
            this.Resource = data;
            sessionStorage.setItem("Resource", JSON.stringify(this.Resource));
            console.log(this.Resource);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    jump_notice(e) {
      this.$router.push({
        name: "Curator_note",
        params: { Notice: JSON.stringify(e) },
      });
      console.log(e);
    },
    jump_other(i) {
      if (i == 1) window.open("https://opac.nankai.edu.cn/top/top_lend.php");
      if (i == 2)
        window.open("https://opac.nankai.edu.cn/browse/cls_browsing.php");
      if (i == 3)
        window.open(
          "https://opac.nankai.edu.cn/newbook/newbook_cls_browse.php"
        );
      if (i == 4) window.open("https://opac.nankai.edu.cn/peri/peri_nav_e.php");
      if (i == 5)
        window.open("https://opac.nankai.edu.cn/asord/asord_hist.php");
      if (i == 6)
        window.open("https://opac.nankai.edu.cn/shelf/curriculum_browse.php");
    },
    searchchange(i) {
      this.search_current = i;
    },
    search() {
      console.log(this.strSearchType);
      console.log(this.doctype);

      if (this.search_current == 1) {
        let str =
          "strSearchType=" +
          this.strSearchType +
          "&strText=" +
          encodeURIComponent(this.value) +
          "&doctype=" +
          this.doctype;
        window.open("https://opac.nankai.edu.cn/opac/openlink.php?" + str);
      }
      else {
        console.log("本地搜索")
      }
    },
  },

  mounted: function () {
    this.init();
    // window.onbeforeunload = function (e) {
    //   e = e || window.event;
    //   if (e) {
    //     sessionStorage.clear();
    //     console.log("clear");
    //     e.returnValue = "关闭提示";
    //   }
    //   return "关闭提示";
    // };
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
.screen {
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 0;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}

.background {
  background-image: url("../assets/images/index.png");
  background-size: 100%;
  z-index: 0;
  display: flex;
  flex-flow: column;
  width: 100%;
}

.TAG_0 {
  display: flex;
  flex-flow: column;
  align-items: center;

  z-index: 1;
  width: 100%;
}
.ArtFont {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.ArtFont img {
  margin-top: 100px;

  z-index: 1;
}

.Search_TAG {
  display: flex;
  flex-flow: column;
  z-index: -999;
  align-items: center;

  margin-top: 20px;
  width: 1000px;
  height: 300px;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);

  border-radius: 28px;
}
.search_text {
  width: 680px;
  margin-top: 50px;
  margin-left: 150px;
  height: 25px;
  display: flex;
  flex-flow: row;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 900;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height */
  color: #8888;
}

.search {
  display: flex;
  align-items: center;
  margin-top: 20px;
  width: 584px;
  height: 58px;

  background: rgba(255, 255, 255, 0.8);
  border-radius: 100px;
}
.key_word {
  z-index: 1;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-left: 22px;
  width: 98px;
  height: 39px;
  background: #0d52a1;
  border-radius: 16px;
}

:deep(.el-input__wrapper) {
  display: inline-flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  padding: 1px 11px;
  background-color: transparent;
  background-image: none;
  border-radius: var(--el-input-border-radius, var(--el-border-radius-base));
  transition: var(--el-transition-box-shadow);

  border: none !important;
  box-shadow: none !important;
}

:deep(.el-input__inner) {
  color: #ffffff;
}
:deep(.el-input) {
  --el-input-placeholder-color: #ffffff;
}
:deep(.el-select) {
  --el-select-border-color-hover: var(--el-border-color-hover);
  --el-select-disabled-border: var(--el-disabled-border-color);
  --el-select-font-size: var(--el-font-size-base);
  --el-select-close-hover-color: var(--el-text-color-secondary);
  --el-select-input-color: var(--el-text-color-placeholder);
  --el-select-multiple-input-color: var(--el-text-color-regular);
  --el-select-input-focus-border-color: none;
  --el-select-input-font-size: 14px;
}
.input {
  margin-left: 20px;
  outline-style: none;
  border: none;
  width: 395px;
  height: 20px;
  background: rgba(255, 255, 255, 0);
  z-index: 2;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height */

  color: black;
}
.input::input-placeholder {
  color: #aeaeae;
}
/* //////////////////////////// */

.TAG_1 {
  /* position: absolute; */
  display: flex;
  background-color: #e5e5e5;
  height: 1116px;
  width: 100%;
  align-items: center;
  justify-content: center;
  top: 750px;
}
.block_1 {
  position: relative;
  width: 700px;
  height: 553px;
  margin-top: 61px;

  background: #ffffff;
  /* 大块投影 */

  box-shadow: 0px 10px 26px -6px rgba(0, 0, 0, 0.12);
  border-radius: 26px;
}

.h1 {
  cursor: pointer;
  color: #888888;
  display: block;
  margin-left: 30px;
  width: 100px;
  height: 28px;
  margin-top: 12px;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 28px;
  /* identical to box height */
}
.h2 {
  cursor: pointer;
  /* 资源动态 */
  display: block;
  margin-left: 20px;
  margin-top: 12px;
  width: 80px;
  height: 28px;

  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 28px;
  /* identical to box height */

  color: #888888;
}
.block_1 h3 {
  /* 更多 */
  cursor: pointer;

  width: 32px;
  height: 40px;
  margin-left: 20px;
  margin-top: 15px;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 250.5%;
  /* identical to box height, or 40px */

  color: #0d52a1;
}
.active {
  color: #0d52a1;
}
.line_1 {
  width: 1px;
  height: 43px;

  background: #c4c4c4;
}
.block_1 .line_1 {
  margin-left: 10px;
  margin-top: 22px;
}
.block_1 h4 {
  /* Notice */

  height: 39px;
  margin-left: 100px;
  margin-top: 20px;

  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 900;
  font-size: 28px;
  line-height: 39px;

  color: rgba(13, 82, 161, 0.18);
}
.line_2 {
  width: 700px;
  height: 1px;
  left: 22px;
  top: 74px;

  background: #eaeaea;
}
.notice {
  position: absolute;
  height: 374px;
  width: 434px;

  left: 33px;
  top: 100px;
}
.notice_tag {
  display: flex;
  width: 434px;
  height: 74px;
  cursor: pointer;

  /* background: blue; */
}
.day {
  margin: 0px 40px 0px 2px;
  width: 29px;
  height: 30px;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 250.5%;
  /* or 80px */

  color: #0d52a1;
}
.time {
  width: 35px;
  height: 30px;
  margin: 15px 0 0 0;

  font-family: "PT Sans Narrow";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 250.5%;
  /* identical to box height, or 30px */

  color: #000000;
}
.notice_title {
  margin-top: 25px;
  width: 500px;
  height: 36px;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  /* or 36px */

  color: #000000;
}
.line_3 {
  width: 660px;
  height: 1px;

  background: #eaeaea;
}
.block_2 {
  display: flex;

  width: 855px;
  height: 553px;
  margin-left: 40px;
  margin-top: 61px;
  flex-flow: column;
  background: #ffffff;
  /* 大块投影 */

  box-shadow: 0px 10px 26px -6px rgba(0, 0, 0, 0.12);
  border-radius: 26px;
}
.block_2 h1 {
  /* 活动报道 */

  width: 80px;
  height: 28px;
  margin-left: 34px;
  margin-top: 28px;

  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 28px;
  /* identical to box height */

  color: #0d52a1;
}
.block_2 h2 {
  /* 更多 */

  width: 32px;
  height: 40px;
  margin-left: 30px;
  margin-top: 22px;

  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 250.5%;
  /* identical to box height, or 40px */

  color: #0d52a1;
}
.block_2 h3 {
  /* Activity reports */

  width: 204px;
  height: 39px;
  margin-top: 22px;
  margin-left: 234px;

  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 900;
  font-size: 28px;
  line-height: 39px;

  color: rgba(13, 82, 161, 0.18);
}
.block_2 .line_1 {
  margin-top: 22px;
  margin-left: 20px;
}
.block_2 .line_2 {
  width: 850px;
}

.activity {
  /* cursor: pointer; */

  height: 374px;
  width: 850px;
  /* background: violet; */
  margin-left: 28px;
  margin-top: 100px;
}
.activity_tag {
  cursor: pointer;
  display: flex;
  margin-top: 5px;
  height: 139px;
}
.activity_image {
  overflow: hidden;
  width: 153px;
  height: 120px;

  border-radius: 14px;
}
.activity_image img {
  border-radius: 12px;
  width: 100%;
}
.activity_title {
  margin-left: 18px;
  width: 500px;
  height: 36px;

  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 227%;
  /* or 36px */

  color: #000000;
}
.activity_content {
  margin-left: 18px;
  margin-top: 10px;
  width: 500px;
  height: 64px;

  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 227%;
  /* or 32px */

  color: #9b9b9b;
}
.describe .line_3 {
  width: 650px;
  height: 1px;
  margin-top: 10px;
  margin-left: 20px;

  background: #eaeaea;
}
.block_3 {
  position: relative;
  width: 1600px;
  height: 341px;

  top: 50px;

  background: #ffffff;
  /* 基础投影 */

  box-shadow: 0px 10px 26px -6px rgba(0, 0, 0, 0.12);
  border-radius: 26px;
}
.block_3 h1 {
  width: 100px;
  height: 28px;
  margin-left: 34px;
  margin-top: 27px;

  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 28px;
  /* identical to box height */

  color: #888888;
}
.block_3 .line_1 {
  margin-top: 19px;
  margin-left: 15px;
}
.block_3 .line_2 {
  width: 1600px;
}
.block_3 h2 {
  width: 32px;
  height: 40px;
  margin-left: 15px;
  margin-top: 21px;

  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 250.5%;
  /* identical to box height, or 40px */

  color: #0d52a1;
}
.block_3 h3 {
  position: absolute;
  width: 294px;
  height: 39px;
  left: 886px;
  top: 21px;
  margin: 0 0 0 0;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 900;
  font-size: 28px;
  line-height: 39px;

  color: rgba(13, 82, 161, 0.18);
}

.ad {
  position: absolute;
  display: flex;
  top: 100px;
  width: 1201px;
  height: 200px;
}
.ad img {
  margin-left: 50px;
  width: 134px;
  height: 46px;
}
.TAG_2 {
  /* position: absolute; */
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("../assets/images/TAG_2.png");
  background-size: 100% auto;
  /* background-size: cover; */
  width: 100%;
  height: 729px;
  top: 1866px;
  margin: 0 0 0 0;
  overflow: hidden;
}
.title {
  /* 馆藏资源 */

  width: 120px;
  height: 42px;
  padding-bottom: 20px;
  margin-top: 22px;

  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 42px;
  /* identical to box height */

  color: #ffffff;
}
.title_en {
  width: 194px;
  height: 43px;

  padding-bottom: 20px;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  line-height: 154%;
  /* or 43px */

  color: #ffffff;
}
.choice {
  display: flex;
  width: 635px;
  height: 45px;
  margin-left: 190px;
  background: #ffffff;
  box-shadow: 0px 3px 26px -1px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
}
.choice h1 {
  width: 20%;
  height: 25px;
  margin-left: 34px;
  margin-top: 9px;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 154%;
  /* identical to box height, or 25px */

  display: flex;
  align-items: center;

  color: #666666;
}

.choice h2 {
  width: 20%;
  height: 25px;

  margin-top: 9px;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 154%;
  /* identical to box height, or 25px */

  color: #666666;
}
.choice h3 {
  width: 20%;
  height: 25px;

  margin-top: 9px;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 154%;
  /* identical to box height, or 25px */

  display: flex;
  align-items: center;

  color: #666666;
}
.choice h4 {
  margin-top: 9px;
  width: 20%;
  height: 25px;

  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 154%;
  /* identical to box height, or 25px */

  align-items: center;

  color: #666666;
}
.choice h5 {
  width: 20%;
  height: 25px;
  margin-top: 9px;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 154%;
  /* identical to box height, or 25px */

  color: #666666;
}
.other {
  width: 102px;
  height: 45px;
  margin-left: 100px;
  top: 168px;

  background: #ffffff;
  box-shadow: 0px 3px 26px -1px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
}
.other h1 {
  width: 48px;
  height: 22px;
  margin-left: 27px;
  margin-top: 12px;

  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #00478b;
}
.book {
  width: 1200px;
  height: 353px;

  margin-top: 40px;

  background: rgba(255, 255, 255, 0.84);
  border-radius: 21px 21px 0px 0px;
}
.border {
  width: 1241px;
  height: 25px;
  top: 593px;

  background: #ffffff;
  box-shadow: 0px 2px 4px 3px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
}
.TAG_3 {
  display: flex;
  align-items: center;
  justify-content: center;
  top: 2595px;
  height: 692px;
  width: 100%;
  background: #e5e5e5;
}
.service {
  width: 60px;
  height: 42px;

  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 42px;
  /* identical to box height */

  color: #0d52a1;
}
.service_en {
  height: 43px;

  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  line-height: 154%;
  /* or 43px */

  letter-spacing: 0.01em;

  color: #0d52a1;
}
.card_1 {
  position: absolute;
  width: 245px;
  height: 357px;
  left: 361px;
  top: 230px;

  background: #ffffff;
  /* 基础投影 */

  box-shadow: 0px 10px 26px -6px rgba(0, 0, 0, 0.12);
  border-radius: 26px;
}
.card_1 .picture {
  position: absolute;
  width: 245px;
  height: 137px;
  border-radius: 26px 26px 0 0;
  box-shadow: 0px 10px 26px -6px rgba(0, 0, 0, 0.12);
  background-image: url("../assets/images/picture1.png");
}
.circle {
  position: absolute;
  width: 77px;
  height: 79px;
  left: 84px;
  top: 31px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.39);
  backdrop-filter: blur(4px);
}
.card_1 .icon_1 {
  position: absolute;
  left: 107px;
  top: 52px;
  height: 37px;
  width: 30px;
  background-image: url("../assets/images/icon1.svg");
}
.card_choice {
  position: absolute;
  height: 221px;
  width: 245px;
  top: 137px;

  border-radius: 0 0 26px 26px;
}
.card_choice .point1 {
  position: absolute;
  width: 8px;
  height: 8px;
  left: 15px;
  top: 32px;
  border-radius: 50%;
  background: #0d52a1;
}
.card_choice h1 {
  position: absolute;
  width: 90px;
  height: 22px;
  left: 33px;
  top: 25px;
  margin: 0 0 0 0;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 154%;
  /* identical to box height, or 22px */

  letter-spacing: 0.01em;

  color: #0d52a1;
}
.card_choice .point2 {
  position: absolute;
  width: 8px;
  height: 8px;
  left: 137px;
  top: 32px;
  border-radius: 50%;
  background: #0d52a1;
}
.card_choice h2 {
  position: absolute;
  width: 90px;
  height: 22px;
  left: 154px;
  top: 25px;
  margin: 0 0 0 0;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 154%;
  /* identical to box height, or 22px */

  letter-spacing: 0.01em;

  color: #0d52a1;
}
.card_choice .point3 {
  position: absolute;
  width: 8px;
  height: 8px;
  left: 15px;
  top: 80px;
  border-radius: 50%;
  background: #0d52a1;
}
.card_choice h3 {
  position: absolute;
  width: 90px;
  height: 22px;
  left: 33px;
  top: 72px;
  margin: 0 0 0 0;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 154%;
  /* identical to box height, or 22px */

  letter-spacing: 0.01em;

  color: #0d52a1;
}
.card_choice .point4 {
  position: absolute;
  width: 8px;
  height: 8px;
  left: 137px;
  top: 80px;
  border-radius: 50%;
  background: #0d52a1;
}
.card_choice h4 {
  position: absolute;
  width: 90px;
  height: 22px;
  left: 154px;
  top: 72px;
  margin: 0 0 0 0;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 154%;
  /* identical to box height, or 22px */

  letter-spacing: 0.01em;

  color: #0d52a1;
}
.card_choice .point5 {
  position: absolute;
  width: 8px;
  height: 8px;
  left: 15px;
  top: 126px;
  border-radius: 50%;
  background: #0d52a1;
}
.card_choice h5 {
  position: absolute;
  width: 90px;
  height: 22px;
  left: 33px;
  top: 119px;
  margin: 0 0 0 0;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 154%;
  /* identical to box height, or 22px */

  letter-spacing: 0.01em;

  color: #0d52a1;
}
.card_2 {
  position: absolute;
  width: 245px;
  height: 357px;
  left: 679px;
  top: 230px;

  background: #ffffff;
  /* 基础投影 */

  box-shadow: 0px 10px 26px -6px rgba(0, 0, 0, 0.12);
  border-radius: 26px;
}
.card_2 .icon_1 {
  position: absolute;
  left: 101px;
  top: 49px;
  height: 39.82px;
  width: 44.41px;
  background-image: url("../assets/images/icon2.svg");
}
.card_2 .picture {
  position: absolute;
  width: 245px;
  height: 137px;
  border-radius: 26px 26px 0 0;
  box-shadow: 0px 10px 26px -6px rgba(0, 0, 0, 0.12);
  background-image: url("../assets/images/picture2.png");
}
.card_3 {
  position: absolute;
  width: 245px;
  height: 357px;
  left: 997px;
  top: 230px;

  background: #ffffff;
  /* 基础投影 */

  box-shadow: 0px 10px 26px -6px rgba(0, 0, 0, 0.12);
  border-radius: 26px;
}
.card_3 .icon_1 {
  position: absolute;
  left: 101px;
  top: 49px;
  height: 41px;
  width: 41px;
  background-image: url("../assets/images/icon3.svg");
}
.card_3 .picture {
  position: absolute;
  width: 245px;
  height: 137px;
  border-radius: 26px 26px 0 0;
  box-shadow: 0px 10px 26px -6px rgba(0, 0, 0, 0.12);
  background-image: url("../assets/images/picture3.png");
}
.card_4 {
  position: absolute;
  width: 245px;
  height: 357px;
  left: 1316px;
  top: 230px;

  background: #ffffff;
  /* 基础投影 */

  box-shadow: 0px 10px 26px -6px rgba(0, 0, 0, 0.12);
  border-radius: 26px;
}
.card_4 .icon_1 {
  position: absolute;
  left: 99px;
  top: 52px;
  height: 34px;
  width: 46px;
  background-image: url("../assets/images/icon4.svg");
}
.card_4 .picture {
  position: absolute;
  width: 245px;
  height: 137px;
  border-radius: 26px 26px 0 0;
  box-shadow: 0px 10px 26px -6px rgba(0, 0, 0, 0.12);
  background-image: url("../assets/images/picture4.png");
}
.more {
  position: absolute;
  width: 80px;
  height: 35px;
  left: 150px;
  top: 316px;

  background: #ffffff;
  /* 基础投影 */

  box-shadow: 0px 10px 26px -6px rgba(0, 0, 0, 0.12);
  border-radius: 19px;
}
.more h1 {
  position: absolute;
  width: 33px;
  height: 25px;
  left: 25px;
  top: 6px;
  margin: 0 0 0 0;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 154%;
  /* identical to box height, or 25px */

  letter-spacing: 0.01em;

  color: #9f9f9f;
}
.TAG_4 {
  height: 466px;
  width: 100%;
  /* position: absolute; */
  background-image: url("../assets/images/TAG_4.png");
  background-size: 100% auto;
}
.library_guide {
  height: 42px;
  margin-top: 71px;

  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 42px;
  /* identical to box height */

  color: #0d52a1;
}
.library_guide_en {
  height: 43px;

  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  line-height: 154%;
  /* or 43px */

  letter-spacing: 0.01em;

  color: #0d52a1;
}
.tap_1 {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 20px;
  width: 131px;
  height: 133px;
  left: 429px;
  flex-flow: column;

  background: #ffffff;
  /* 基础投影 */

  box-shadow: 0px 10px 26px -6px rgba(0, 0, 0, 0.12);
  border-radius: 26px;
}
.tap_icon {
}
.tap_txt {
  height: 22px;

  margin-top: 5px;

  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;

  color: #000000;
}
.tap_2 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  cursor: pointer;
  width: 131px;
  height: 133px;
  margin-left: 20px;
  margin-right: 20px;

  background: #ffffff;
  /* 基础投影 */

  box-shadow: 0px 10px 26px -6px rgba(0, 0, 0, 0.12);
  border-radius: 26px;
}
.tap_3 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  cursor: pointer;
  width: 131px;
  height: 133px;
  margin-left: 20px;
  margin-right: 20px;
  background: #ffffff;
  /* 基础投影 */

  box-shadow: 0px 10px 26px -6px rgba(0, 0, 0, 0.12);
  border-radius: 26px;
}
.tap_4 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 131px;
  height: 133px;
  margin-left: 20px;
  margin-right: 20px;
  cursor: pointer;
  background: #ffffff;
  /* 基础投影 */

  box-shadow: 0px 10px 26px -6px rgba(0, 0, 0, 0.12);
  border-radius: 26px;
}
.tap_5 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  cursor: pointer;
  width: 131px;
  height: 133px;
  margin-left: 20px;
  margin-right: 20px;
  background: #ffffff;
  /* 基础投影 */

  box-shadow: 0px 10px 26px -6px rgba(0, 0, 0, 0.12);
  border-radius: 26px;
}
.tap_6 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  cursor: pointer;
  width: 131px;
  height: 133px;
  margin-left: 20px;

  background: #ffffff;
  /* 基础投影 */

  box-shadow: 0px 10px 26px -6px rgba(0, 0, 0, 0.12);
  border-radius: 26px;
}
.TAG_5 {
  width: 100%;

  /* background-color: #000000; */
}

/*开片样式*/

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}
</style>





