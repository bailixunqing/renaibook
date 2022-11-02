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
              <a href="">{{Menu_options[0].label}}</a>
              <ul class="droplist">
                <li @click="jump(0, 1)">
                  <a href="">馆长寄语</a>
                </li>
                <li @click="jump(0, 2)">
                  <a href="">本馆介绍</a>
                </li>
                <li @click="jump(0, 3)">
                  <a href="">馆藏分布</a>
                </li>
                <li @click="jump(0, 4)">
                  <a href="">开放时间</a>
                </li>
                <li @click="jump(0, 5)">
                  <a href="">入馆须知</a>
                </li>
                <li @click="jump(0, 6)">
                  <a href="">组织机构</a>
                </li>
              </ul>
            </li>
            <li class="btli">
              <a href="#">资源</a>
              <ul class="droplist">
                <li @click="jump(1, 1)">
                  <a href="">书目查询</a>
                </li>
                <li @click="jump(1, 2)">
                  <a href="">教学参考</a>
                </li>
                <li @click="jump(1, 3)">
                  <a href="">随书光盘</a>
                </li>
                <li @click="jump(1, 4)">
                  <a href="">学位论文</a>
                </li>
                <li @click="jump(1, 5)">
                  <a href="">图书捐赠</a>
                </li>
                <li @click="jump(1, 6)">
                  <a href="">报纸导航</a>
                </li>
                <li @click="jump(1, 7)">
                  <a href="">易读获取</a>
                </li>
                <li @click="jump(1, 8)">
                  <a href="">数据库</a>
                </li>
              </ul>
            </li>
            <li class="btli">
              <a href="#">服务</a>
              <ul class="droplist">
                <li @click="jump(2, 1)">
                  <a href="">馆际互借</a>
                </li>
                <li @click="jump(2, 2)">
                  <a href="">咨询服务</a>
                </li>
                <li @click="jump(2, 3)">
                  <a href="">常见问题</a>
                </li>
                <li @click="jump(2, 4)">
                  <a href="">阅读疗法</a>
                </li>
                <li @click="jump(2, 5)">
                  <a href="">仁爱图苑</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </slot>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: "DropMenu",
  data()
  {
    let Menu_options=[
      {label:""},
      {label:""},
      {label:""}
    ];
    let test_menu="图书馆指南";

    return{Menu_options,test_menu}
  },
  methods: {
    jump(e, i) {
      if (e == 0) {
        this.$router.push({
          path: "/Library_Guide",
          query: {
            id: i,
          },
        });
      }
      if (e == 1) {
        this.$router.push({
          path: "/Sources",
          query: {
            id: i,
          },
        });
      }
      if (e == 2) {
        this.$router.push({
          path: "/Service",
          query: {
            id: i,
          },
        });
      }
    },
    Menu_init()
    {
      axios
        .get("/api" + "/titleOptions/searchAll")
        .then((res) => {
          let data=res.data.data;
          
          let menu_test=[];

          for(let i=0;i<data.length;i++)
          {

            let test={};
            if(data[i].type.length==1)
            {
              test.value=data[i].type;
              test.id=data[i].id;
              test.label=data[i].name;
              test.children=[];

              menu_test.push(test)


            }

            else
            if(data[i].type.length==3)
              {
              test.value=data[i].type;
              test.id=data[i].id;
              test.label=data[i].name;
              test.children=[];
              let j=Number(data[i].type[0])-1;
              let k=Number(data[i].type[2])-1;
              menu_test[j].children.push(test);


              }
              else 
              if(data[i].type.length==5)
              {
                test.value=data[i].type;
                test.id=data[i].id;
                test.label=data[i].name;
                test.children=[];
                let j=Number(data[i].type[0])-1;
                let k=Number(data[i].type[2])-1;
                let n=Number(data[i].type[4])-1;
                menu_test[j].children[k].children.push(test);

              }

            } 
            this.Menu_options=menu_test;
            console.log(this.Menu_options);
          
       
        })
        .catch((err) => {
       
        });
    }
  },
  mounted: function () {
this.Menu_init()
  }
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
  /* background: rgba(255, 255, 255, 1); */
}

.droplist {
  background: rgb(255, 255, 255,0.9);
  display: none;
  z-index: 999;
}
/* //////////////////////////// */
.btli:hover .droplist {
  display: block;
  z-index: 999;
}
</style>