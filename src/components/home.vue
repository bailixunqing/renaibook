<template>
  <div class="screen">
    <div class="background">
      <!-- <drop-menu /> -->
      <div class="TAG_0">
        <div class="ArtFont">
          <img src="../assets/images/Artfont.svg" />
        </div>
        <div class="Search_TAG">
          <div class="search_text">
            <div
              @click="searchchange(0)"
              style="cursor: pointer;font-size:20px;"
              :class="{ active: search_current == 0 }"
            >
              仁爱搜索
            </div>
            <div
              @click="searchchange(1)"
              style="margin-left: 20px; cursor: pointer;font-size:20px;"
              :class="{ active: search_current == 1 }"
            >
              馆藏目录
            </div>
          </div>
          <div class="search">
            <div class="key_word">
              <el-select
                v-if="search_current == 1"
                v-model="strSearchType"
                placeholder="关键字"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                  :disabled="item.disabled"
                />
              </el-select>

              <h1
                v-else
                style="color: white; margin-left: -5px; font-size: 15px"
              >
                关键字
              </h1>
            </div>

            <input
              class="input"
              placeholder="在此输入需要搜索的内容"
              v-model="value"
            />
            <img
              src="../assets/images/search.svg"
              @click="search()"
              style="cursor: pointer"
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
            backdrop-filter: blur(12px);
            background: rgba(255, 255, 255, 0.6);
            border-radius: 28px;
          "
        >
          <div class="search_tap_1" @click="jump_other(1)">
            <img class="tap_icon" src="@/assets/images/TAG_0_icon/1.png" />
            <h1 class="search_tap_txt">热门推荐</h1>
          </div>
          <div class="search_tap_1" @click="jump_other(2)">
            <img class="tap_icon" src="@/assets/images/TAG_0_icon/8.png" />
            <h1 class="search_tap_txt">分类浏览</h1>
          </div>
          <div class="search_tap_1" @click="jump_other(3)">
            <img class="tap_icon" src="@/assets/images/TAG_0_icon/4.png" />
            <h1 class="search_tap_txt">新书通报</h1>
          </div>
          <div class="search_tap_1" @click="jump_other(4)">
            <img class="tap_icon" src="@/assets/images/TAG_0_icon/5.png" />
            <h1 class="search_tap_txt">期刊导航</h1>
          </div>
          <div class="search_tap_1" @click="jump_other(5)">
            <img class="tap_icon" src="@/assets/images/TAG_0_icon/2.png" />
            <h1 class="search_tap_txt">读者荐购</h1>
          </div>
          <div class="search_tap_1" @click="jump_other(6)">
            <img class="tap_icon" src="@/assets/images/TAG_0_icon/3.png" />
            <h1 class="search_tap_txt">馆际互借</h1>
          </div>
          <div class="search_tap_1" @click="jump_other(7)">
            <img class="tap_icon" src="@/assets/images/TAG_0_icon/6.png" />
            <h1 class="search_tap_txt">学位论文</h1>
          </div>
          <div class="search_tap_1" @click="jump_other(8)">
            <img class="tap_icon" src="@/assets/images/TAG_0_icon/10.png" />
            <h1 class="search_tap_txt">空间预约</h1>
          </div>
          <div class="search_tap_1" @click="jump_other(9)">
            <img class="tap_icon" src="@/assets/images/TAG_0_icon/11.png" />
            <h1 class="search_tap_txt">影音空间</h1>
          </div>
          <div class="search_tap_1" @click="jump_other(10)">
            <img class="tap_icon" src="@/assets/images/TAG_0_icon/12.png" />
            <h1 class="search_tap_txt">咨询互动</h1>
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
              <h3 @click="jump_more()">更多</h3>
              <!-- select(3) -->
              <h4>Notice</h4>

              <div class="line_2"></div>
            </div>

            <div class="notice">
              <span v-if="show(0)">
                <div
                  v-for="item in Notice"
                  :key="item.index"
                  @click="jump_notice(item, 0)"
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
                  @click="jump_notice(item, 1)"
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
              <h2 @click="jump_more()">更多</h2>
              <!-- select(4) -->

              <h3>Activity reports</h3>
              <div class="line_2"></div>
            </div>

            <div class="activity">
              <div
                v-for="item in activities"
                :key="item.index"
                @click="jump_notice(item, 2)"
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
        <!-- <div style="display: flex">
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
        </div> -->

        <div class="book">
          <el-carousel :interval="5000" type="card" arrow="always">
            <el-carousel-item v-for="item in book" :key="item" >
              <img
                :src="item.picture"
                style="margin:auto;"
                @click="book_jump(item)"
              />
              <h3>{{item.name}}</h3>
            </el-carousel-item>
          </el-carousel>
          <!-- <el-carousel :interval="4000" type="card" height="330px" width="25%">
            <el-carousel-item v-for="item in book" :key="item">
              <img :src="item.picture"/>
           
            </el-carousel-item>
          </el-carousel> -->
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
              <ul>
                <li class="li" v-for="i in item.text" :key="i">
                  {{ i }}
                </li>
              </ul>
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
            v-for="item in library_guide"
            :key="item.index"
            @click="jump_guide(item)"
          >
            <img class="tap_icon" :src="item.img" />
            <h1 class="tap_txt">{{item.label}}</h1>
          </div>
          <!-- <div
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
          </div> -->
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
import AdminBottom from "@/components/admin/admins/adminbottom.vue";
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
    let library_guide=[];
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
    let book = [
      {
        url: "https://book.douban.com/subject/1007305/",
        picture:
          "https://tse4-mm.cn.bing.net/th/id/OIP-C.KFlFSNt_RQHnYaXrPJkLagAAAA?w=204&h=296&c=7&r=0&o=5&pid=1.7",
        name: "红楼梦",
      },
      {
        url: "https://book.douban.com/subject/4913064/",
        picture:
          "https://tse4-mm.cn.bing.net/th/id/OIP-C.KFlFSNt_RQHnYaXrPJkLagAAAA?w=204&h=296&c=7&r=0&o=5&pid=1.7",
        name: "活着",
      },
      {
        url: "https://book.douban.com/subject/1007305/",
        picture:
          "https://tse4-mm.cn.bing.net/th/id/OIP-C.KFlFSNt_RQHnYaXrPJkLagAAAA?w=204&h=296&c=7&r=0&o=5&pid=1.7",
        name: "红楼梦",
      },
      {
        url: "https://book.douban.com/subject/1007305/",
        picture:
          "https://tse4-mm.cn.bing.net/th/id/OIP-C.KFlFSNt_RQHnYaXrPJkLagAAAA?w=204&h=296&c=7&r=0&o=5&pid=1.7",
        name: "红楼梦",
      },
      {
        url: "https://book.douban.com/subject/1007305/",
        picture:
          "https://tse4-mm.cn.bing.net/th/id/OIP-C.KFlFSNt_RQHnYaXrPJkLagAAAA?w=204&h=296&c=7&r=0&o=5&pid=1.7",
        name: "红楼梦",
      },
      {
        url: "https://book.douban.com/subject/1007305/",
        picture:
          "https://tse4-mm.cn.bing.net/th/id/OIP-C.KFlFSNt_RQHnYaXrPJkLagAAAA?w=204&h=296&c=7&r=0&o=5&pid=1.7",
        name: "红楼梦",
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
      book,
      library_guide,
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
    jump_more()
    {
this.$router.push({
        name: "more",
        
      });
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
          .get("/api" + "/resource/searchAll", {
            params: {
              pageSize: 3,
            },
          })
          .then((res) => {
            console.log("activities:!!!!!!!!");

            data = res.data.data.slice(0, 3);
            console.log(data);
            for (i = 0; i < data.length; i++) {
              var date = new Date(data[i].gmtCreate);
              let Y = date.getFullYear() + "-";
              let M =
                (date.getMonth() + 1 < 10
                  ? "0" + (date.getMonth() + 1)
                  : date.getMonth() + 1) + "-";
              let D = date.getDate() + " ";
              data[i].gmtCreate = Y + M + D;
              console.log(data[i].gmtCreate);
              data[i].time = data[i].gmtCreate
                .replace("-", ".")
                .substring(0, 7);
              data[i].day = data[i].gmtCreate.substring(8, 10);

              string = data[i].picture;
              console.log("渲染测试");
              // try {
              //   require("@/assets/source_images/" + string);
              // } catch {
              //   data[i].picture = require("@/assets/source_images/" + "1.jpeg");
              //   console.log(data);
              //   break;
              // }
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
          .get("/api" + "/notice/searchAll", {
            params: {
              pageSize: 6,
            },
          })
          .then((res) => {
            console.log("notice:");
            console.log(res);
            data = res.data.data.slice(0, 6);
            for (i = 0; i < data.length; i++) {
              var date = new Date(data[i].gmtCreate);
              let Y = date.getFullYear() + "-";
              let M =
                (date.getMonth() + 1 < 10
                  ? "0" + (date.getMonth() + 1)
                  : date.getMonth() + 1) + "-";
              let D = date.getDate() + " ";
              data[i].gmtCreate = Y + M + D;
              console.log(data[i].gmtCreate);
              data[i].time = data[i].gmtCreate
                .replace("-", ".")
                .substring(0, 7);
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
          .get("/api" + "/resource/searchAll", {
            params: {
              pageSize: 6,
             
            },
          })
          .then((res) => {
            console.log("resource:");
            console.log(res);
            data = res.data.data;
            for (i = 0; i < data.length; i++) {
              var date = new Date(data[i].gmtCreate);
              let Y = date.getFullYear() + "-";
              let M =
                (date.getMonth() + 1 < 10
                  ? "0" + (date.getMonth() + 1)
                  : date.getMonth() + 1) + "-";
              let D = date.getDate() + " ";
              data[i].gmtCreate = Y + M + D;
              console.log(data[i].gmtCreate);
              data[i].time = data[i].gmtCreate
                .replace("-", ".")
                .substring(0, 7);
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
    jump_notice(e, type) {
      this.$router.push({
        name: "Curator_note",
        params: { id: e.id, type: type },
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

    book_jump(e)
    {
      console.log(e);
      window.open(e.url);
    },
    jump_guide(e)
    {
      console.log(e);
      console.log(e);
      this.$router.push({
        path: "/Library_Guide",
        // params: { options: e, type: type },
        query: {
          type: e.value,
          id: e.id,
        },
      });
    }
  },

  mounted: function () {
    this.init();
    this.library_guide = JSON.parse(sessionStorage.getItem("Menu_options"));
    this.library_guide =this.library_guide[0].children
    for(let i=0;i<this.library_guide.length;i++)
    {
      this.library_guide[i].img=require("../assets/images/icon"+(i+5)+".svg");
    }
    console.log(this.library_guide)
    // axios
    //   .post("/api" + "/titleOptions/update", params, config)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch(() => {});
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
  background-image: url("@/assets/images/index.png");
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
  margin-top:100px;
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

.search img:hover {
  transform: scale(1.2);
  transition: all 0.3s;
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
.search_tap_1:hover {
  transform: scale(1.1);
  transition: all 0.5s;
}

.search_tap_1 {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s;
  margin-left: 10px;
  margin-right: 10px;
  width: 120px;
  height: 120px;

  flex-flow: column;

  /* background: rgb(112, 185, 253); */
  /* 基础投影 */

  /* box-shadow: 0px 10px 26px -6px rgba(0, 0, 0, 0.12); */
  border-radius: 26px;
}

.search_tap_txt {
  height: 22px;

  margin-top: 5px;

  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;

  color: #000000;
}
.tap_icon {
  color: #0075fc;
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
:deep(.el-radio.el-radio--large .el-radio__label)
{
  font-size: 16px;
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
  margin-left: 250px;
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
  transition: all 0.3s;

  /* background: blue; */
}

.notice_tag:hover {
  transform: scale(1.05);
  transition: all 0.3s;
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
  margin-left: 400px;

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
  transition: all 0.3s;
}

.activity_tag:hover {
  transform: scale(1.04);
  transition: all 0.3s;
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
  width: 600px;
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
  width: 600px;
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
  background-image: url("@/assets/images/TAG_2.png");
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
  letter-spacing: 0.01em;

  color: #0d52a1;
}

.card_1 {
  width: 245px;
  height: 357px;
  left: 361px;
  margin-top: 50px;
  margin-left: 25px;
  margin-right: 25px;
  background: #ffffff;
  /* 基础投影 */
  box-shadow: 0px 10px 26px -6px rgba(0, 0, 0, 0.12);
  border-radius: 26px;
}

.card_1 .picture {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 245px;
  height: 137px;
  border-radius: 26px 26px 0 0;
  box-shadow: 0px 10px 26px -6px rgba(0, 0, 0, 0.12);
  background-image: url("@/assets/images/picture1.png");
}

.circle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 77px;
  height: 79px;

  border-radius: 50%;
  background: rgba(255, 255, 255, 0.39);
  backdrop-filter: blur(4px);
}

.card_choice {
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  height: 170px;
  width: 245px;

  border-radius: 0 0 26px 26px;
}

.card_choice li {
  margin-top: 5px;
  cursor: pointer;
  list-style-type: disc;
}

.card_choice li:hover {
  color: blue;
}

.more {
  cursor: pointer;
  width: 80px;
  height: 35px;

  margin-left: 150px;
  background: #ffffff;
  /* 基础投影 */

  box-shadow: 0px 10px 26px -6px rgba(0, 0, 0, 0.12);
  border-radius: 19px;
}

.more:hover {
  background: #dbdbdb;
  color: #0075fc;
  box-shadow: 0px 10px 26px -6px rgba(0, 0, 0, 0.3);
  /* 基础投影 */
}

.more h1 {
  width: 33px;
  height: 25px;
  margin-left: 24px;
  margin-top: 6px;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 35px;
  /* identical to box height, or 25px */
  letter-spacing: 0.01em;

  /* color: #9f9f9f; */
}

.TAG_4 {
  height: 466px;
  width: 100%;
  /* position: absolute; */
  background-image: url("@/assets/images/TAG_4.png");
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

.tap_1:hover {
  transform: scale(1.1);
  transition: all 0.5s;
}

.tap_1 {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s;
  margin-left: 20px;
  margin-right: 20px;
  width: 131px;
  height: 133px;

  flex-flow: column;

  background: #ffffff;
  /* 基础投影 */

  box-shadow: 0px 10px 26px -6px rgba(0, 0, 0, 0.12);
  border-radius: 26px;
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

.TAG_5 {
  width: 100%;

  /* background-color: #000000; */
}

/*开片样式*/
:deep(.el-carousel__item)
{
  display: flex;
  flex-flow: column;
}
:deep(.el-carousel__container) {
  height: 350px;
}
:deep(.el-carousel__item is-active is-animating) {
  width: 200px;
}
:deep(.el-carousel__item h3) {
  color: #475669;
 
  line-height: 30px;
  margin: 0;
  text-align: center;
}

/* :deep(.el-carousel__item:nth-child(2n)) {

}

:deep(.el-carousel__item:nth-child(2n + 1)) {

} */
</style>





