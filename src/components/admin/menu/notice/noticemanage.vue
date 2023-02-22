<template>
    <el-row>
        <el-form-item label="公告标题">
            <el-input v-model="uers_name" placeholder="请输入关键字"></el-input>
        </el-form-item>
    </el-row>
    <div class="amin_table">
        <el-table :data="NoticeData" :key="itemKey">
            <el-table-column type="index" style="width: 83px" label="#"></el-table-column>
            <el-table-column prop="title" label="标题"></el-table-column>
            <el-table-column prop="author" label="作者"></el-table-column>
            <el-table-column prop="gmtCreate" label="发布时间"></el-table-column>
            <el-table-column label="操作">
                <template #default="scope">
                    <div>
                            {{ scope.row.date }}
                            <!--点击按钮后传值给admin-v-show-->
                            <el-button type="success" round class="button_on"
                                @click="$emit('select', {data:'NoticeUpdata',i:scope.row.id})">修改
                            </el-button>
                            <el-button type="success" round class="button_off"
                                @click="deleteTotal(0, scope)">删除</el-button>
                        </div>
                    <!-- <div>
                        {{ scope.row.date }}
                        <el-button class="button_on" type="success" round @click="noticeUpdate(0, scope)">修改</el-button>
                        <el-button class="button_off" type="success" round @click="deleteTotal(1, scope)">删除</el-button>
                    </div> -->
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script setup>
import { ref,onMounted } from 'vue'
const axios = require("axios")
const uers_name = ref('')
defineEmits(["select"])
const itemKey = ref('')
const NoticeData = ref([
    {
        "title": "不会写标题",
        "author": "鲁迅",
        "gmtCreate": "2022-12-27"
    }
])

const deleteTotal = () => {

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
      console.log(res)
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
      NoticeData.value = data
      console.log(NoticeData.value)
    })
    .catch((err) => { });
}
onMounted(()=>{
    Notice_init()

})
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