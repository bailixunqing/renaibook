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
        <div style=" margin-right: 18px !important; box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);border-radius: 20px;">
            <el-input v-model="form['summary']" clearable />
        </div>
    </div>
    <div style="color: black; font-size: large; font-weight: bold">
        编辑内容
    </div>
    <div class="TAG_main_write">
        <TEditor style="height: 400px" ref="editor" v-model="value" @input="content_value_change" :value="value" />
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
    <div class="TAG_right_buttom">
        <el-button type="success" round class="TAG_right_back">返回</el-button>
        <el-button type="success" round class="TAG_right_on" @click="Create_Activities()">保存并返回</el-button>
    </div>
</template>
<script setup>
import TEditor from '@/components/TEditor.vue'


const handleAvatarSuccess = (res, file) => {
  imageUrl = URL.createObjectURL(file.raw);
}


const beforeAvatarUpload = (file) => {
  const isJPG = file.type === 'image/jpeg';
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isJPG) {
    // this.$message.error('上传头像图片只能是 JPG 格式!');
  }
  else
    if (!isLt2M) {
      // this.$message.error('上传头像图片大小不能超过 2MB!');
    }
  return isJPG && isLt2M;
}

const content_value_change = (e) => {
  value = e;
}

const Create_Activities = () => {
  // let params = {
  //   title: form['title'],
  //   content: value,
  //   author: form['name'],
  //   fileTmp: form['file'],
  //   summary: form['summary'],
  //   token: sessionStorage.getItem("token")
  // }
  // let config = {
  //   headers: {
  //     "Content-Type": "multipart/form-data",
  //   },
  // };
  // axios
  //   .post("/api" + "/activity/insert", params, config)
  //   .then((res) => {
  //     if (res.data.code == 200) {
  //       this.$message({
  //         type: 'success',
  //         message: '添加成功!'
  //       });
  //       Activities_init();
  //     }
  //     else {
  //       this.$message({
  //         type: 'error',
  //         message: '添加失败!'
  //       });
  //     }
  //     this.$refs.editor.$data.contentValue = "";
  //     form = {}
  //   })
  //   .catch(() => {
  //   });
}
</script>
<style>
.TAG_right_buttom {
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