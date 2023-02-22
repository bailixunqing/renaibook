<template>
  <el-form-item label="公告标题">
    <el-input v-model="title"></el-input>
  </el-form-item>
  <el-form-item label="公告作者">
    <el-input v-model="name"></el-input>
  </el-form-item>
  <div class="admin_title">编辑内容</div>
  <div class="amin_write">
    <TEditor
      style="height: 400px"
      ref="editor"
   
      @getContent="teChange"
      v-model="value_content"
      :value="value_content"
      
    />
  </div>
  <div class="buttom">
    <el-button type="success" round class="buttom_back" @click="noticeBack()"
      >返回</el-button
    >
    <el-button type="success" round class="buttom_on" @click="Create_Notice()"
      >保存并返回</el-button
    >
  </div>
</template>
<script setup>
import TEditor from "@/components/TEditor.vue";
import { ElMessage, ElNotification } from "element-plus";
import { ref } from "vue";
import axios from "axios";
const title = ref("");
const name = ref("");
const value_content = ref("");
const teChange = (e) => {
  value_content.value = e;
  console.log("input: ", value_content.value);
};
const emits = defineEmits(["select"]);
const noticeBack = () => {
  console.log("back");
  emits("select", "NoticeManage");
};
const Create_Notice = () => {
  let params = {
    title: title.value,
    content: value_content.value,
    author: name.value,
    token: sessionStorage.getItem("token"),
  };
  let config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  axios
    .post("/api" + "/notice/insert", params, config)
    .then((res) => {
      // this.$message({
      //   type: 'success',
      //   message: '添加成功!'
      // });
      // this.$refs.editor.$data.contentValue = "";
      ElNotification({
        title: "Success",
        message: "新建成功",
        type: "success",
      });
      noticeBack();
    })
    .catch(() => {
      alert("添加失败");
    });
};
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
.admin_title {
  color: black;
  font-size: 25px;
  font-weight: bold;
}
</style>