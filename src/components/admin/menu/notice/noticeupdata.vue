<template>
  <el-form-item label="公告标题">
    <el-input v-model="announcement.title"></el-input>
  </el-form-item>
  <el-form-item label="公告作者">
    <el-input v-model="announcement.name"></el-input>
  </el-form-item>
  <div style="color: black; font-size: large; font-weight: bold">编辑内容</div>
  <div class="amin_write">
    <TEditor
      class="teditor"
      @getContent="teChange"
      v-model="value_content"
      :value="value_content"
    />
  </div>
  <div class="buttom">
    <el-button
      type="success"
      round
      class="buttom_back"
      @click="() => noticeBack()"
      >返回</el-button
    >
    <el-button
      type="success"
      round
      class="buttom_on"
      @click="() => Notice_update()"
      >保存并返回</el-button
    >
  </div>
</template>
<script setup>
import TEditor from "@/components/TEditor.vue";
import axios from "axios";
import { ElMessage,ElNotification } from 'element-plus'
import { ref, onMounted } from "vue";
/* pinia */
import { storeToRefs } from "pinia";
import useDemoStore from "@/store/modules/demo.js";
/* 实例化方法 */
const demoStore = useDemoStore();
/* 响应counter变化 */
const { counter } = storeToRefs(demoStore);
/* 内存保存 */
const announcement = ref({
  title: "",
  name: "",
  id: "",
});
/* te变量保存 */
const value_content = ref("");
/* input事件 */
const teChange = (e) => {
  value_content.value = e;
  console.log("input: ", value_content.value);
};
/* 传 */
const emits = defineEmits(["select"]);
const noticeBack = () => {
  console.log("back");
  emits("select", "NoticeManage");
};
/*  */
onMounted(() => {
  /* 全局变量中解析出i的值 */
  const { i } = counter.value;
  axios
    .get("/api/notice/search", {
      params: {
        id: i,
      },
    })
    .then((res) => {
      console.log(res);
      const data = res.data.data[0];
      announcement.value.id = data.id;
      announcement.value.title = data.title;
      announcement.value.name = data.author;
      value_content.value = data.content;
    });
});
const Notice_update = () => {
  console.log(value_content.value);
  let { i } = counter.value;

  let params = {
    id: i,
    title: announcement.value.title,
    content: value_content.value,
    author: "图书馆",
    token: sessionStorage.getItem("token"),
  };
  let config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  axios
    .post("/api/notice/update", params, config)
    .then((res) => {
      console.log(res);

      ElNotification({
        title: "Success",
        message: "修改成功",
        type: "success",
      });

      noticeBack();

      
    })
    .catch(() => {});
};
</script>
<style>
.teditor {
  height: 400px;
}

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
</style>