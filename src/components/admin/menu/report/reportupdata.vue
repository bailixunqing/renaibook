<template>
  <el-form-item label="标题">
    <el-input v-model="title"></el-input>
  </el-form-item>
  <el-form-item label="作者">
    <el-input v-model="name"></el-input>
  </el-form-item>
  <div style="color: black; font-size: large; font-weight: bold">
    报道概述
  </div>
  <div class="main_write">
    <div style="margin-right: 18px !important; box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%); border-radius: 20px;">
      <el-input v-model="summary" clearable />
    </div>
  </div>
  <div style="color: black; font-size: large; font-weight: bold">
    编辑内容
  </div>
  <div class="main_write">
    <TEditor style="height: 400px" ref="editor" v-model="value" :value="value" />
  </div>
  <div style="text-align: left">
    <el-upload class="avatar-uploader" action :http-request="uploadFile" :show-file-list="true"
      :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <el-icon v-else class="avatar-uploader-icon">
        <Plus />
      </el-icon>
    </el-upload>
  </div>
  <el-checkbox label="显示图片" name="type" style="font-weight: bold"></el-checkbox>
  <div class="buttom">
    <el-button type="success" round class="buttom_back"
      @click="$emit('selectReportBack', 'ReportBack')">返回</el-button>
    <el-button type="success" round class="buttom_on" @click="updataActivities(1, 1)">保存并返回</el-button>
  </div>
</template>
<script setup>
import TEditor from '@/components/TEditor.vue'
import { ref } from 'vue'
const title = ref('')
const name = ref('')
const summary = ref('')
const value = ref('')
const imageUrl = ref('')
const file = ref('')
const id = ref('')
const ActivitiesData = ref('')
const axios = require("axios")
const uploadFile = (item) => {
  let FormDatas = new FormData()
  FormDatas.append('file', item.file)
  file.value = item.file;
}
const updataActivities = (i, e) => {
  const that = this
  if (i == 0) {
    axios.get("/api" + "/activity/search", {
      params: {
        id: e.row.id
      }
    }).then((res) => {
      const data = res.data.data[0];
      id.value = data.id;
      title.value = data.title;
      summary.value = data.summary;
      value.value = data.content;
      that.select(511)
    })
  } else if (i == 1) {
    const params = {
      title: title,
      content: value,
      author: name,
      fileTmp: file,
      summary: summary,
      token: sessionStorage.getItem("token")
    }
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    axios
      .post("/api" + "/activity/update", params, config)
      .then((res) => {
        if (res.data.code == 200) {
          this.$message({
            type: 'success',
            message: '修改成功!'
          });
          Activities_init();
        }
        else {
          this.$message({
            type: 'error',
            message: '修改失败!'
          });
        }
        this.$refs.editor.$data.contentValue = "";
      })
      .catch(() => { });
  }
}
const Activities_init = () => {
  axios
    .get("/api" + "/activity/searchAll",
      {
        params: {
          pageSize: 10
        }
      })
    .then((res) => {
      const data = res.data.data;
      for (let i = 0; i < data.length; i++) {
        const newdate = new Date(data[i].gmtCreate);
        const Y = newdate.getFullYear() + "-";
        const M =
          (newdate.getMonth() + 1 < 10
            ? "0" + (newdate.getMonth() + 1)
            : newdate.getMonth() + 1) + "-";
        const D = newdate.getDate() + " ";
        newdate[i].gmtCreate = Y + M + D;
      }
      ActivitiesData = data
    })
    .catch((err) => { });
}
</script>
<style>
.buttom {
  margin-top: 2px;
  margin-right: 27px;
  text-align: right;
}

.main_write {
  margin-top: 26px;
  margin-bottom: 26px;
}

.el-icon.avatar-uploader-icon {
  color: #8c939d;
  width: 178px;
  height: 178px;
  font-size: 50px;
  text-align: center;
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

.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>