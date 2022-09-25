<template>
  <div style="display: flex; flex-flow: column; align-items: center">
    <div style="height: 50px; paddding-top: 10px">
      <a class="top_text1" href="http://www.tjrac.edu.cn/">天津仁爱学院</a>
      <a class="top_text2">English</a>
    </div>
    <slot>
      <div class="head">
        <div class="icon"></div>
        <div class="nav">
          <ul class="navlist">
            <li @click="$router.push({ name: 'home' })" class="btli">
              <a href="">首页</a>
            </li>
            <li class="btli">
              <a href="">图书馆指南</a>
              <ul class="droplist">
                <li @click="jump(1)">
                  <a href="">馆长寄语</a>
                </li>
                <li @click="jump(2)">
                  <a href="">本馆介绍</a>
                </li>
                <li @click="jump(3)">
                  <a href="">馆藏分布</a>
                </li>
                <li @click="jump(4)">
                  <a href="">开放时间</a>
                </li>
                <li @click="jump(5)">
                  <a href="">入馆须知</a>
                </li>
                <li @click="jump(6)">
                  <a href="">组织机构</a>
                </li>
              </ul>
            </li>
            <li class="btli"><a href="#">资源</a></li>
            <li class="btli"><a href="#">服务</a></li>
          </ul>
        </div>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: "DropMenu",
  methods: {
    jump(i) {
      this.$router.push({
        path: "/Library_Guide",
        query: {
          id: i,
        },
      });
    },
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
.top_text1 {
  padding-left: 1386px;
  width: 96px;
  height: 22px;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 50px;

  color: #ffffff;
}
.top_text2 {
  position: absolute;
  width: 96px;
  height: 22px;

  padding-left: 20px;

  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 50px;

  color: #ffffff;
}

.head {
  display: flex;
  /* position: absolute; */
  width: 1860px;
  height: 100px;
  margin: 0px 30px 0px 30px;
  z-index: 999;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0px 4px 61px 17px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(61px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 30px;
}

.icon {
  background-image: url("../../assets/images/icon.svg");
  background-size: 100%;
  width: 270px;
  height: 43px;
  margin: 34px 0 0 100px;
}

.nav {
  position: absolute;
  width: 780px;
  height: 100px;
  margin-left: 930px;
  margin-top: 20px;
  z-index: 999;
}

.btli {
  float: left;
  width: 170px;
  z-index: 999;
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

.droplist {
  background: rgba(255, 255, 255, 1);
  display: none;
  z-index: 999;
}
/* //////////////////////////// */
.btli:hover .droplist {
  display: block;
  z-index: 999;
}
</style>