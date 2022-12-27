<template>
    <el-form-item label="标题">
        <el-input v-model="form['title']"></el-input>
    </el-form-item>
    <el-form-item label="作者">
        <el-input v-model="form['name']"></el-input>
    </el-form-item>
    <div style="color: black; font-size: large; font-weight: bold">
        报道概述
    </div>
    <div class="TAG_main_write">
        <div style="margin-right: 18px !important; box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%); border-radius: 20px;">
            <el-input v-model="form['summary']" clearable />
        </div>
    </div>
    <div style="color: black; font-size: large; font-weight: bold">
        编辑内容
    </div>
    <div class="TAG_main_write">
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
    <div class="TAG_right_buttom">
        <el-button type="success" round class="TAG_right_back">返回</el-button>
        <el-button type="success" round class="TAG_right_on" @click="Update_Activities(1, 1)">保存并返回</el-button>
    </div>
</template>
<script setup>
import TEditor from '@/components/TEditor.vue'

//axios
let axios = require("axios")

let imageUrl = ''


const uploadFile = (item) => {
  let FormDatas = new FormData()
  FormDatas.append('file', item.file)
  form['file'] = item.file;
}
const Update_Activities = (i, e) => {
  // let that = this
  // if (i == 0) {
  //   axios
  //     .get("/api" + "/activity/search",
  //       {
  //         params: {
  //           id: e.row.id
  //         }
  //       }).then((res) => {
  //         let data = res.data.data[0];
  //         form['id'] = data.id;
  //         form['title'] = data.title;
  //         form['summary'] = data.summary;
  //         value = data.content;
  //         that.select(511)
  //       })
  // }
  // else if (i == 1) {
  //   let params = {
  //     title: form['title'],
  //     content: value,
  //     author: form['name'],
  //     fileTmp: form['file'],
  //     summary: form['summary'],
  //     token: sessionStorage.getItem("token")
  //   }
  //   let config = {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //   };
  //   axios
  //     .post("/api" + "/activity/update", params, config)
  //     .then((res) => {
  //       if (res.data.code == 200) {
  //         this.$message({
  //           type: 'success',
  //           message: '修改成功!'
  //         });
  //         Activities_init();
  //       }
  //       else {
  //         this.$message({
  //           type: 'error',
  //           message: '修改失败!'
  //         });
  //       }
  //       this.$refs.editor.$data.contentValue = "";
  //       form = {}
  //     })
  //     .catch(() => {
  //     });
  // }
}
const Activities_init = () => {
  let string1;
  let data;
  let i = 0;
  axios
    .get("/api" + "/activity/searchAll",
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
      ActivitiesData = data
    })
    .catch((err) => {
    });
}

</script>
<style>
.TAG_right_buttom {
  margin-top: 2px;
  margin-right: 27px;
  text-align: right;
}
.TAG_main_write {
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
.TAG_right_back {
  padding-top: 20px !important;
  width: 8%;
  padding-bottom: 20px !important;
  background-color: #c4c4c4 !important;
}

.TAG_right_on {
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