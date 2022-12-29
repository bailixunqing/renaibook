<template>
  <el-form-item label="报道标题">
    <el-input v-model="title"></el-input>
  </el-form-item>
  <el-form-item label="报道作者">
    <el-input v-model="name"></el-input>
  </el-form-item>
  <el-form-item label="报道概述">
    <el-input v-model="summary"></el-input>
  </el-form-item>
  <div class="admin_title">
    编辑内容
  </div>
  <div class="admin_write">
    <TEditor style="height: 400px" ref="editor" v-model="value" @input="valueChange" :value="value" />
  </div>
  <el-checkbox label="显示图片" name="type" style="font-weight: bold"></el-checkbox>
  <div style="text-align: left">
    <el-upload class="avatar-uploader" action :http-request="uploadFile" :show-file-list="true"
      :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <el-icon v-else class="avatar-uploader-icon">
        <Plus />
      </el-icon>
    </el-upload>
  </div>
  <div class="buttom">
    <el-button type="success" round class="buttom_back"
      @click="$emit('selectReportBack', 'ReportBack')">返回</el-button>
    <el-button type="success" round class="buttom_on" @click="createActivities()">保存并返回</el-button>
  </div>
</template>
<script setup>
import TEditor from '@/components/TEditor.vue'
import { ref } from 'vue'
const axios = require("axios")
const title = ref('')
const name = ref('')
const summary = ref('')
const value = ref('')
const file = ref('')

const handleAvatarSuccess = (res, file) => {
  imageUrl = URL.createObjectURL(file.raw);
}

const beforeAvatarUpload = (file) => {
  const isJPG = file.type === 'image/jpeg';
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isJPG) {
    this.$message.error('上传头像图片只能是 JPG 格式!');
  }
  else
    if (!isLt2M) {
      this.$message.error('上传头像图片大小不能超过 2MB!');
    }
  return isJPG && isLt2M;
}

const valueChange = (e) => {
  value.value = e;
}

const createActivities = () => {
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
    .post("/api" + "/activity/insert", params, config)
    .then((res) => {
      if (res.data.code == 200) {
        this.$message({
          type: 'success',
          message: '添加成功!'
        });
        Activities_init();
      }
      else {
        this.$message({
          type: 'error',
          message: '添加失败!'
        })
      }
      this.$refs.editor.$data.contentValue = ""
    })
    .catch((err) => {console.log(err)})
}
</script>
<style>
.buttom {
  margin-top: 2px;
  margin-right: 27px;
  text-align: right;
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
.admin_title{
  color: black; 
  font-size: 25px; 
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>