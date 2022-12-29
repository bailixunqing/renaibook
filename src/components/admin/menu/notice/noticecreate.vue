<template>
    <el-form-item label="公告标题">
        <el-input v-model="title"></el-input>
    </el-form-item>
    <el-form-item label="公告作者">
        <el-input v-model="name"></el-input>
    </el-form-item>
    <div class="admin_title" >
        编辑内容
    </div>
    <div class="amin_write">
        <TEditor style="height: 400px" ref="editor" v-model="value" @input="valueChange" :value="value" />
    </div>
    <div class="buttom">
        <el-button type="success" round class="buttom_back" @click="$emit('selectNoticeBack', 'NoticeBack')">返回</el-button>
        <el-button type="success" round class="buttom_on" @click="Create_Notice()">保存并返回</el-button>
    </div>
</template>
<script setup>
import TEditor from '@/components/TEditor.vue'
import {ref} from 'vue'
const title=ref('')
const name=ref('')
const value=ref('')
const valueChange=ref('')
const axios = require("axios")

const Create_Notice = () => {
  let params = {
    title: title,
    content: value,
    author: name,
    token: sessionStorage.getItem("token")
  }
  let config = {
    headers: {
      "Content-Type": "multipart/form-data",
    }
  }
  axios
    .post("/api" + "/notice/insert", params, config)
    .then((res) => {
      // this.$message({
      //   type: 'success',
      //   message: '添加成功!'
      // });
      // this.$refs.editor.$data.contentValue = "";
      form = {};
      Notice_init();
    })
    .catch(() => {
      alert("添加失败");
    });
}
const Notice_init = () => {
  let data;
  let i = 0;
  axios
    .get("/api" + "/notice/searchAll",
      {
        params: {
          pageSize: 10
        }
      })
    .then((res) => {
      data = res.data.data;
      for (i = 0; i < data.length; i++) {
        let date = new Date(data[i].gmtCreate);
        let Y = date.getFullYear() + "-";
        let M =
          (date.getMonth() + 1 < 10
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1) + "-";
        let D = date.getDate() + " ";
        data[i].gmtCreate = Y + M + D;
      }
      NoticeData = data
    })
    .catch((err) => { });
}
</script>
<style>
.amin_write {
  margin-top: 26px;
  margin-bottom: 26px;
}

.buttom {
  margin-top: 2px;
  margin-right: 27px;
  text-align: right;
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
.admin_title{
  color: black; 
  font-size: 25px; 
  font-weight: bold;
}

</style>