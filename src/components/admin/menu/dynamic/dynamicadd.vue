<template>
  <el-form-item label="标题">
    <el-input v-model="title"></el-input>
  </el-form-item>
  <el-form-item label="作者">
    <el-input v-model="name"></el-input>
  </el-form-item>
  <div style="color: black; font-size: large; font-weight: bold">
    编辑内容
  </div>
  <div class="amin_write">
    <TEditor style="height: 400px" ref="editor" v-model="value" @input="valueChange" :value="value" />
  </div>
  <div class="buttom">
    <el-button type="success" round class="buttom_back">返回</el-button>
    <el-button type="success" round class="buttom_on" @click="Create_Resource()">保存并返回</el-button>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const title = ref('')
const name = ref('')
const value = ref('')
const valueChange = ref('')
const axios = require("axios")
const Create_Resource = () => {
  let params = {
    title: title,
    content: value,
    author: name,
    token: sessionStorage.getItem("token")
  };
  let config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  axios
    .post("/api" + "/resource/insert", params, config)
    .then((res) => {
      // this.$message({
      //   type: 'success',
      //   message: '添加成功!'
      // });
      // this.$refs.editor.$data.contentValue = ""
      // form['title'] = "";
      // form['name'] = "";
      // Resource_init();
    })
    .catch((err) => {
      alert("添加失败");
    })
}
const Resource_init = () => {
  let string1;
  let data;
  let i = 0;
  axios
    .get("/api" + "/resource/searchAll",
      {
        params: {
          pageSize: 10
        }
      })
    .then((res) => {
      // data = res.data.data;
      // for (i = 0; i < data.length; i++) {
      //   let date = new Date(data[i].gmtCreate);
      //   let Y = date.getFullYear() + "-";
      //   let M =
      //     (date.getMonth() + 1 < 10
      //       ? "0" + (date.getMonth() + 1)
      //       : date.getMonth() + 1) + "-";
      //   let D = date.getDate() + " ";
      //   data[i].gmtCreate = Y + M + D;
      // }
      // ResourceData = data
    })
    .catch((err) => {
    });
}
</script>
<style>
.buttom {
  margin-top: 2px;
  margin-right: 27px;
  text-align: right;
}

.amin_write {
  margin-top: 26px;
  margin-bottom: 26px;
}

.buttom_back {
  padding-top: 20px !important;
  width: 8%;
  padding-bottom: 20px !important;
  background-color: #c4c4c4 !important;
}

.buttom_on {
  padding-top: 20px !important;
  padding-bottom: 20px !important;
  width: 14%;
}
</style>