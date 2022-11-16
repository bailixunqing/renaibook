<template>
  <div  style="display: flex; flex-flow: column; align-items: center">
    <div style="height: 50px; paddding-top: 10px">
      <a class="top_text1" href="http://www.tjrac.edu.cn/">天津仁爱学院</a>
      <a class="top_text2">English</a>
    </div>
    <slot>
      <div class="head">
        <div class="icon"></div>
        <div style="width: 20%"></div>
        <div class="nav">
          <ul class="navlist" >
            <li @click="$router.push({ name: 'home' })" class="btli">
              <a href="">首页</a>
            </li>
            <li v-for="item in Menu_options" :key="item.id" class="btli">
              <a href="">{{ item.label }}</a>
              <ul class="droplist">
                <li v-for="item2 in item.children" :key="item2.id">
                  <a href="" @click="jump(item2)">{{ item2.label }}</a>
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
  data() {

    let Menu_options = [
      { label: "" },
      { label: "" },
      { label: "" },
      { label: "" },
      { label: "" },
      { label: "" },
    ];
    let test_menu = "图书馆指南";

    return { Menu_options, test_menu };
  },
  methods: {
    jump(e) {
      console.log(e);
      this.$router.push({
        path: "/Library_Guide",
        // params: { options: e, type: type },
        query: {
          type: e.value,
          id: e.id,
        },
      });
    },

    Menu_init() {
      
        axios
          .get("/api" + "/titleOptions/searchAll")
          .then((res) => {
            let data = res.data.data;
            data.sort(function(a,b){
                    if(a.type>b.type)
                    return 1;
                    else return -1;

                                        })
            let menu_test = [];

            for (let i = 0; i < data.length; i++) {
              let test = {};
              if (data[i].type.length == 1||data[i].type.length==2) {
                test.value = data[i].type;
                test.id = data[i].id;
                test.label = data[i].name;
                test.children = [];

                menu_test.push(test);
              } else if (data[i].type.length == 3||data[i].type.length==4) {
                test.value = data[i].type;
                test.id = data[i].id;
                test.label = data[i].name;
                test.children = [];
                let j = Number(data[i].type[0]) - 1;
           
                menu_test[j].children.push(test);
              } else if (data[i].type.length == 5||data[i].type.length==6) {
                test.value = data[i].type;
                test.id = data[i].id;
                test.label = data[i].name;
                test.children = [];
                let j = Number(data[i].type[0]) - 1;
                let k = Number(data[i].type[2]) - 1;
                menu_test[j].children[k].children.push(test);
              }
            }
            this.Menu_options = menu_test;

            sessionStorage.setItem("Menu_options", JSON.stringify(menu_test));
           this.$router.go(0)
          })
          .catch((err) => {});
      // }
    },
  },
  mounted: function () {
    if (sessionStorage.getItem("Menu_options") != null) {
      console.log("缓存")
        this.Menu_options = JSON.parse(sessionStorage.getItem("Menu_options"));
      } else {
    this.Menu_init();
      }
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
  width: 20%;
  height: 43px;
  margin: 34px 0 0 100px;
}

.nav {
  position: relative;
  width: 80%;
  height: 100px;
  margin-left: 10%;
  margin-top: 20px;
  z-index: 999;
}

.btli {
  float: left;
  width: 13%;
  z-index: 999;
}
.navlist {
  width: 100%;
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
  background: rgb(255, 255, 255, 0.9);
  display: none;
  z-index: 999;
}
/* //////////////////////////// */
.btli:hover .droplist {
  display: block;
  z-index: 999;
}
</style>