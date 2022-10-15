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
              <h v-else style="color: white; margin-left: -5px; font-size: 15px"
                >关键字</h
              >
            </div>

            <input
              class="input"
              placeholder="在此输入需要搜索的内容"
              v-model="value"
            />
            <img
              src="../assets/images/search.svg"
              @click="search()"
              style="cursor: pointer;"
            />
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
          <div class="tap_1" @click="jump_other(2)">
            <img class="tap_icon" src="../assets/images/icon6.svg" />
            <h1 class="tap_txt">分类浏览</h1>
          </div>
          <div class="tap_1" @click="jump_other(3)">
            <img class="tap_icon" src="../assets/images/icon7.svg" />
            <h1 class="tap_txt">新书通报</h1>
          </div>
          <div class="tap_1" @click="jump_other(4)">
            <img class="tap_icon" src="../assets/images/icon8.svg" />
            <h1 class="tap_txt">期刊导航</h1>
          </div>
          <div class="tap_1" @click="jump_other(5)">
            <img class="tap_icon" src="../assets/images/icon9.svg" />
            <h1 class="tap_txt">读者荐购</h1>
          </div>
          <div class="tap_1" @click="jump_other(6)">
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
                  @click="jump_notice(item,0)"
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
                  @click="jump_notice(item,1)"
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
                @click="jump_notice(item,2)"
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
        <div style="width: 100%; height: 400px; display: flex; flex-flow: row">
          <div class="card_1" v-for="item in card" :key="item">
            <div
              class="picture"
              v-bind:style="{ backgroundImage: 'url(' + item.img + ')' }"
            >
              <div class="circle">
                <img :src="item.icon" class="icon_1" style="height: 50%" />
              </div>
            </div>

            <div class="card_choice">
              <ul >
                <li class="li" v-for="i in item.text" :key="i">
                  {{ i }}
                </li>
              </ul>
            </div>
            <div class="more">
              <h1>更多</h1>
            </div>
          </div>
          
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
            class="tap_1"
            @click="$router.push({ path: '/Library_Guide', query: { id: 2 } })"
          >
            <img class="tap_icon" src="../assets/images/icon6.svg" />
            <h1 class="tap_txt">本馆简介</h1>
          </div>
          <div
            class="tap_1"
            @click="$router.push({ path: '/Library_Guide', query: { id: 3 } })"
          >
            <img class="tap_icon" src="../assets/images/icon7.svg" />
            <h1 class="tap_txt">馆藏分布</h1>
          </div>
          <div
            class="tap_1"
            @click="$router.push({ path: '/Library_Guide', query: { id: 4 } })"
          >
            <img class="tap_icon" src="../assets/images/icon8.svg" />
            <h1 class="tap_txt">开放时间</h1>
          </div>
          <div
            class="tap_1"
            @click="$router.push({ path: '/Library_Guide', query: { id: 5 } })"
          >
            <img class="tap_icon" src="../assets/images/icon9.svg" />
            <h1 class="tap_txt">入馆须知</h1>
          </div>
          <div
            class="tap_1"
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
    const card = [
      {
        icon: require("../assets/images/icon1.svg"),
        img: require("../assets/images/picture1.png"),
        text: ["图书借阅", "馆记互借", "证卡管理"],
      },
      {
        icon: require("../assets/images/icon2.svg"),
        img: require("../assets/images/picture2.png"),
        text: ["影音空间", "研修间", "多媒体阅览区", "空间预约", "空中课堂"],
      },
      {
        icon: require("../assets/images/icon3.svg"),
        img: require("../assets/images/picture3.png"),
        text: ["知识产权", "论文提交", "用户教育"],
      },
      {
        icon: require("../assets/images/icon4.svg"),
        img: require("../assets/images/picture4.png"),
        text: ["学科服务", "机构知识库", "学科分析报告"],
      },
    ];
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
      card,
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
          .get("/api" + "/activity/searchAll",{
          params:{
              pageSize:3
          }
        })
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
          .get("/api" + "/notice/searchAll",{
          params:{
              pageSize:6
          }
        })
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
          .get("/api" + "/resource/searchAll",{
          params:{
              pageSize:6
          }
        })
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
    jump_notice(e,type) {
      this.$router.push({
        name: "Curator_note",
        params: { id: e.id,type:type },
      });

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
      } else {
        console.log("本地搜索");
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
@import '@/assets/styles/home.css';

</style>





