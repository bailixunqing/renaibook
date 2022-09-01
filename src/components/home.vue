<template>
  <div class="screen">
    <div class="background">
      <img src="../assets/images/index.png" />
    </div>
    <div style="height: 5px">
      <a class="top_text1" href="http://www.tjrac.edu.cn/">天津仁爱学院</a>
      <a class="top_text2">English</a>
    </div>
<!--    标题栏-->
   <drop-menu/>
    <!-- 通知公告 -->
    <div class="TAG_1">
      <div class="block_1">
        <h1 class="h1" :class="{ active: !show }" @click="change()">
          通知公告
        </h1>
        <h2 class="h2" :class="{ active: show }" @click="change()">资源动态</h2>
        <div class="line_1"></div>
        <h3>更多</h3>
        <h4>Notice</h4>

        <div class="line_2"></div>
        <div class="notice">
          <span v-if="!show">
            <div v-for="item in Notice" :key="item.index" @click="jump_notice(item)">
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
          <span v-else>
            <div v-for="item in Notice" :key="item.index">
              <div class="notice_tag">
                <div class="date">
                  <div class="day">lalalala</div>
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
        <h1>活动报道</h1>
        <h2>更多</h2>
        <div class="line_1"></div>
        <h3>Activity reports</h3>
        <div class="line_2"></div>
        <div class="activity">
          <div v-for="item in activities" :key="item.index">
            <div class="activity_tag">
              <div class="activity_image">
                <!-- 这里应该放图片 -->
              </div>
              <div class="describe">
                <div class="activity_title">{{ item.title }}</div>
                <div class="activity_content">{{ item.content }}</div>

                <div class="line_3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="block_3">
        <h1>合作数据库</h1>
        <div class="line_1"></div>
        <h2>更多</h2>
        <h3>Cooperative database</h3>
        <div class="line_2"></div>
        <div class="ad">
          <img src="../assets/images/ad.png" />
          <img src="../assets/images/ad.png" />
          <img src="../assets/images/ad.png" />
          <img src="../assets/images/ad.png" />
          <img src="../assets/images/ad.png" />
        </div>
      </div>
    </div>
    <!-- 馆藏资源 -->
    <div class="TAG_2">
      <div class="title">馆藏资源</div>
      <div class="title_en">Activity reports</div>
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

      <div class="book">
        <el-carousel :interval="4000" type="card" height="330px" width="25%">
          <el-carousel-item v-for="item in 6" :key="item">
            <h3 text="2xl" justify="center">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="border"></div>
    </div>
    <!-- 服务 -->
    <div class="TAG_3">
      <div class="service">服务</div>
      <div class="service_en">service</div>

      <div class="card_1">
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
      </div>
    </div>

    <!-- 图书馆服务 -->
    <div class="TAG_4">
      <div class="library_guide">图书馆指南</div>
      <div class="library_guide_en">Library Guide</div>
      <div class="tap_1" @click="$router.push({ name: 'Curator_note' })">
        <img class="tap_icon" src="../assets/images/icon5.svg" />
        <h1 class="tap_txt">馆长寄语</h1>
      </div>
      <div class="tap_2" @click="$router.push({ name: 'Curator_note' })">
        <img class="tap_icon" src="../assets/images/icon6.svg" />
        <h1 class="tap_txt">本馆简介</h1>
      </div>
      <div class="tap_3" @click="$router.push({ name: 'Curator_note' })">
        <img class="tap_icon" src="../assets/images/icon7.svg" />
        <h1 class="tap_txt">馆藏分布</h1>
      </div>
      <div class="tap_4" @click="$router.push({ name: 'Curator_note' })">
        <img class="tap_icon" src="../assets/images/icon8.svg" />
        <h1 class="tap_txt">开放时间</h1>
      </div>
      <div class="tap_5" @click="$router.push({ name: 'Curator_note' })">
        <img class="tap_icon" src="../assets/images/icon9.svg" />
        <h1 class="tap_txt">入馆须知</h1>
      </div>
      <div class="tap_6" @click="$router.push({ name: 'Curator_note' })">
        <img class="tap_icon" src="../assets/images/icon10.svg" />
        <h1 class="tap_txt">组织机构</h1>
      </div>
    </div>

    <!-- 页面底 -->
    <div class="TAG_5">
      <bottom-footer/>
    </div>
  </div>
</template>
<script>
import DropMenu from "@/components/common/DropMenu";
import BottomFooter from "@/components/common/BottomFooter";
const axios = require("axios");
export default {
  name: "home",
  components: {DropMenu,BottomFooter},
  data() {
    var show = false;
    const Notice = [
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
    return { Notice, activities, show };
  },
  methods: {
    change() {
      this.show = !this.show;
      console.log(this.show);
    },
    init() {
      let data=[];
      let i=0;
      let j=0;
      axios
        .get("/api" + "/activity/searchAll")
        .then((res) => {
          this.activities=res.data.data
          console.log(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });

        axios
        .get("/api" + "/notice/searchAll")
        .then((res) => {
          console.log(res.data.data);
           data=res.data.data.slice(0,6);
          
          for( i=0;i<data.length;i++)
          {
            data[i].gmtCreate=data[i].gmtCreate.substring(0,10)
            data[i].time=data[i].gmtCreate.substring(0,7)
            data[i].time=data[i].time.replace("-",".")
            data[i].day=data[i].gmtCreate.substring(8,10)
            
          }
          this.Notice=data
          console.log(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
     jump_notice(e)
     {
      this.$router.push({ name: "Curator_note",params: {Notice:JSON.stringify(e)}});
      console.log(e)
     }
  },
 
  mounted: function () {
    this.init();
  },
  message() {},
};
</script>


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
  background: #e7e7e7;
  /* 大块投影 */
  background: rgba(255, 255, 255, 1);
}

/* //////////////////////////// */
.btli:hover .droplist {
  display: block;
  z-index: -1;
}
.ArtFont img {
  margin-top: 125px;
  margin-left: 811px;
  z-index: -1;
}
.TAG_1 {
  position: absolute;
  background-color: #e5e5e5;
  height: 1116px;
  width: 100%;

  top: 750px;
}
.block_1 {
  position: relative;
  width: 502px;
  height: 553px;
  margin-top:61px ;
  margin-left:360px ;
 

  background: #ffffff;
  /* 大块投影 */

  box-shadow: 0px 10px 26px -6px rgba(0, 0, 0, 0.12);
  border-radius: 26px;
}

.h1 {
  cursor: pointer;
  display: block;
  position: absolute;
  margin-top:28px;
  margin-left:33px;
  width: 80px;
  height: 28px;
  left: 33px;
  top: 28px;
  margin: 0 0 0 0;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 28px;
  /* identical to box height */
  color: #888888;
}
.h2 {
  cursor: pointer;
  /* 资源动态 */
  display: block;
  position: absolute;
  width: 80px;
  height: 28px;
  left: 139px;
  top: 28px;
  margin: 0 0 0 0;
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
  position: absolute;
  width: 32px;
  height: 40px;
  left: 257px;
  top: 22px;
  margin: 0 0 0 0;
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
  position: absolute;
  width: 1px;
  height: 43px;
  left: 238px;
  top: 22px;

  background: #c4c4c4;
}
.block_1 h4 {
  /* Notice */

  position: absolute;
  width: 97px;
  height: 39px;
  left: 387px;
  top: 22px;
  margin: 0 0 0 0;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 900;
  font-size: 28px;
  line-height: 39px;

  color: rgba(13, 82, 161, 0.18);
}
.line_2 {
  position: absolute;
  width: 461px;
  height: 1px;
  left: 22px;
  top: 74px;

  background: #eaeaea;
}
.notice {
  position: absolute;
  height: 374px;
  width: 434px;
  cursor: pointer;
 
  left: 33px;
  top: 100px;
}
.notice_tag {
  display: flex;
  width: 434px;
  height: 74px;

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
  width: 316px;
  height: 36px;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 227%;
  /* or 36px */

  color: #000000;
}
.line_3 {
  margin: 0 0 0 0;

  width: 434px;
  height: 1px;

  background: #eaeaea;
}
.block_2 {
  position: absolute;
  width: 660px;
  height: 553px;
  left: 900px;
  top: 61px;

  background: #ffffff;
  /* 大块投影 */

  box-shadow: 0px 10px 26px -6px rgba(0, 0, 0, 0.12);
  border-radius: 26px;
}
.block_2 h1 {
  /* 活动报道 */
  position: absolute;
  width: 80px;
  height: 28px;
  left: 34px;
  top: 28px;
  margin: 0 0 0 0;
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

  position: absolute;
  width: 32px;
  height: 40px;
  left: 147px;
  top: 22px;
  margin: 0 0 0 0;
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

  position: absolute;
  width: 204px;
  height: 39px;
  left: 434px;
  top: 22px;
  margin: 0 0 0 0;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 900;
  font-size: 28px;
  line-height: 39px;

  color: rgba(13, 82, 161, 0.18);
}
.block_2 .line_1 {
  left: 129px;
}
.block_2 .line_2 {
  width: 610px;
}
.activity {
  position: absolute;
  height: 374px;
  width: 610px;
  /* background: violet; */
  left: 33px;
  top: 100px;
}
.activity_tag {
  display: flex;
  margin-top: 5px;
  height: 139px;
}
.activity_image {
  width: 153px;
  height: 120px;

  background: #ededed;
  border-radius: 14px;
}
.activity_title {
  margin-left: 18px;
  width: 316px;
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
  width: 413px;
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
  width: 422px;
  height: 1px;
  margin-top: 10px;
  margin-left: 20px;

  background: #eaeaea;
}
.block_3 {
  position: relative;
  width: 1201px;
  height: 341px;
  left: 359px;
  top: 50px;

  background: #ffffff;
  /* 基础投影 */

  box-shadow: 0px 10px 26px -6px rgba(0, 0, 0, 0.12);
  border-radius: 26px;
}
.block_3 h1 {
  position: absolute;
  width: 100px;
  height: 28px;
  left: 34px;
  top: 27px;
  margin: 0 0 0 0;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 28px;
  /* identical to box height */

  color: #0d52a1;
}
.block_3 .line_1 {
  top: 19px;
  left: 160px;
}
.block_3 h2 {
  position: absolute;
  width: 32px;
  height: 40px;
  left: 185px;
  top: 21px;
  margin: 0 0 0 0;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 250.5%;
  /* identical to box height, or 40px */

  color: #0d52a1;

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
  position: absolute;
  background-image: url("../assets/images/TAG_2.png");
  background-size: cover;
  width: 100%;
  height: 729px;
  top: 1866px;
  margin: 0 0 0 0;
  overflow: hidden;
}
.title {
  /* 馆藏资源 */
  position: absolute;
  width: 120px;
  height: 42px;
  left: 900px;
  top: 22px;

  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 42px;
  /* identical to box height */

  color: #ffffff;
}
.title_en {
  position: absolute;
  width: 194px;
  height: 43px;
  left: 863px;
  top: 90px;

  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  line-height: 154%;
  /* or 43px */

  color: #ffffff;
}
.choice {
  position: absolute;
  width: 635px;
  height: 45px;
  left: 643px;
  top: 168px;

  background: #ffffff;
  box-shadow: 0px 3px 26px -1px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
}
.choice h1 {
  position: absolute;
  width: 32px;
  height: 25px;
  left: 34px;
  top: 9px;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 154%;
  /* identical to box height, or 25px */
  margin: 0 0 0 0;
  display: flex;
  align-items: center;

  color: #666666;
}

.choice h2 {
  position: absolute;
  width: 32px;
  height: 25px;
  left: 164px;
  top: 9px;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 154%;
  /* identical to box height, or 25px */
  margin: 0 0 0 0;
  display: flex;
  align-items: center;

  color: #666666;
}
.choice h3 {
  position: absolute;
  width: 32px;
  height: 25px;
  left: 298px;
  top: 9px;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 154%;
  /* identical to box height, or 25px */
  margin: 0 0 0 0;
  display: flex;
  align-items: center;

  color: #666666;
}
.choice h4 {
  position: absolute;
  width: 32px;
  height: 25px;
  left: 432px;
  top: 9px;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 154%;
  /* identical to box height, or 25px */
  margin: 0 0 0 0;
  display: flex;
  align-items: center;

  color: #666666;
}
.choice h5 {
  position: absolute;
  width: 32px;
  height: 25px;
  left: 566px;
  top: 9px;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 154%;
  /* identical to box height, or 25px */
  margin: 0 0 0 0;
  display: flex;
  align-items: center;

  color: #666666;
}
.other {
  position: absolute;
  width: 102px;
  height: 45px;
  left: 1458px;
  top: 168px;

  background: #ffffff;
  box-shadow: 0px 3px 26px -1px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
}
.other h1 {
  position: absolute;
  width: 48px;
  height: 22px;
  left: 27px;
  top: 12px;
  margin: 0 0 0 0;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #00478b;
}
.book {
  position: absolute;
  width: 1200px;
  height: 353px;
  left: 360px;
  top: 248px;

  background: rgba(255, 255, 255, 0.84);
  border-radius: 21px 21px 0px 0px;
}
.border {
  position: absolute;
  width: 1241px;
  height: 25px;
  left: 339px;
  top: 593px;

  background: #ffffff;
  box-shadow: 0px 2px 4px 3px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
}
.TAG_3 {
  position: absolute;
  top: 2595px;
  height: 692px;
  width: 100%;
  background: #e5e5e5;
}
.service {
  position: absolute;
  width: 60px;
  height: 42px;
  left: 930px;
  top: 89px;

  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 42px;
  /* identical to box height */

  color: #0d52a1;
}
.service_en {
  position: absolute;
  width: 111px;
  height: 43px;
  left: 915px;
  top: 130px;

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
  position: absolute;
  background-image: url("../assets/images/TAG_4.png");

  top: 3287px;
  margin: 0 0 0 0;
}
.library_guide {
  position: absolute;
  width: 150px;
  height: 42px;
  left: 885px;
  top: 71px;

  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 42px;
  /* identical to box height */

  color: #0d52a1;
}
.library_guide_en {
  position: absolute;
  width: 176px;
  height: 43px;
  left: 872px;
  top: 113px;

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
  display: block;
  cursor: pointer;
  position: absolute;
  width: 131px;
  height: 133px;
  left: 429px;
  top: 217px;

  background: #ffffff;
  /* 基础投影 */

  box-shadow: 0px 10px 26px -6px rgba(0, 0, 0, 0.12);
  border-radius: 26px;
}
.tap_icon {
  position: absolute;
  top: 30px;
  left: 40px;
}
.tap_txt {
  position: absolute;
  width: 64px;
  height: 22px;
  left: 33px;
  top: 91px;

  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;

  color: #000000;
}
.tap_2 {
  position: absolute;
  cursor: pointer;
  width: 131px;
  height: 133px;
  left: 615px;
  top: 217px;

  background: #ffffff;
  /* 基础投影 */

  box-shadow: 0px 10px 26px -6px rgba(0, 0, 0, 0.12);
  border-radius: 26px;
}
.tap_3 {
  position: absolute;
  cursor: pointer;
  width: 131px;
  height: 133px;
  left: 801px;
  top: 217px;

  background: #ffffff;
  /* 基础投影 */

  box-shadow: 0px 10px 26px -6px rgba(0, 0, 0, 0.12);
  border-radius: 26px;
}
.tap_4 {
  position: absolute;
  width: 131px;
  height: 133px;
  left: 987px;
  top: 217px;
  cursor: pointer;
  background: #ffffff;
  /* 基础投影 */

  box-shadow: 0px 10px 26px -6px rgba(0, 0, 0, 0.12);
  border-radius: 26px;
}
.tap_5 {
  position: absolute;
  cursor: pointer;
  width: 131px;
  height: 133px;
  left: 1173px;
  top: 217px;

  background: #ffffff;
  /* 基础投影 */

  box-shadow: 0px 10px 26px -6px rgba(0, 0, 0, 0.12);
  border-radius: 26px;
}
.tap_6 {
  position: absolute;
  cursor: pointer;
  width: 131px;
  height: 133px;
  left: 1360px;
  top: 217px;

  background: #ffffff;
  /* 基础投影 */

  box-shadow: 0px 10px 26px -6px rgba(0, 0, 0, 0.12);
  border-radius: 26px;
}
.TAG_5 {
  position: absolute;
  width: 100%;
  height: 456px;

  top: 3753px;

  background: #0d52a1;
}
.screen {

  overflow: hidden;
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





