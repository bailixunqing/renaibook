<template>
  <el-row>
    <el-form-item label="公告标题">
      <el-input v-model="uers_name" placeholder="请输入关键字"></el-input>
    </el-form-item>
  </el-row>
  <div class="amin_table">
    <el-table :data="NoticeData" :key="itemKey">
      <el-table-column
        type="index"
        style="width: 83px"
        label="#"
      ></el-table-column>
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="author" label="作者"></el-table-column>
      <el-table-column prop="gmtCreate" label="发布时间"></el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <div>
            {{ scope.row.date }}
            <!--点击按钮后传值给admin-v-show-->
            <el-button
              type="success"
              round
              class="button_on"
              @click="() => noticeUpdate(scope.row.id)"
              >修改
            </el-button>
            <el-button
              type="success"
              round
              class="button_off"
              @click="() => deleteTotal(scope.row.id)"
              >删除</el-button
            >
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { ElMessage,ElNotification } from 'element-plus'
import { ref, onMounted, onUpdated, onActivated } from "vue";
import axios from "axios";
/* 引入实例 */
import useDemoStore from "@/store/modules/demo.js";
/* 实例化方法 */
const demoStore = useDemoStore();
const emits = defineEmits(["select"]);
const noticeUpdate = (i) => {
  /* 传入对象 */
  demoStore.setCounter({ i });
  /* 并跳转页面 */
  emits("select", "NoticeUpdata");
};
const uers_name = ref("");
const itemKey = ref("");
const NoticeData = ref([]);
const deleteTotal = (i) => {
  let params = {
    id: i,
    token: sessionStorage.getItem("token"),
  };
  let config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  axios.post("/api/notice/delete", params, config).then((res) => {
     ElNotification({
        title: "删除成功",
        message: "已成功删除公告",
        type: "success",
      });
    Notice_init();
  });
};
const Notice_init = () => {
  axios
    .get("/api/notice/searchAll", {
      params: {
        pageSize: 10,
      },
    })
    .then((res) => {
      let data = res.data.data;
      for (let i = 0; i < data.length; i++) {
        let date = new Date(data[i].gmtCreate);
        let Y = date.getFullYear() + "-";
        let M =
          (date.getMonth() + 1 < 10
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1) + "-";
        let D = date.getDate() + " ";
        data[i].gmtCreate = Y + M + D;
      }
      NoticeData.value = data;
    })
    .catch((err) => {});
};
onMounted(() => {
  Notice_init();
});
onActivated(() => {
  //   Notice_init();
});
</script>
<style>
.amin_table {
  margin-top: 20px;
}

.button_on {
  width: 60px !important;
  height: 40px !important;
  font-size: 19px !important;
  margin: auto !important;
}

.button_off {
  width: 60px !important;
  background-color: #e27172 !important;
  height: 40px !important;
  font-size: 19px !important;
  margin: auto !important;
}
</style>