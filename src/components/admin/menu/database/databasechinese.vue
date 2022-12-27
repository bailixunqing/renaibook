<template>
    <div class="TAG_right_admin">
        <div class="TAG_right_admin_left">中文数据库</div>
    </div>
    <el-divider></el-divider>
    <div class="database-1">
        <div v-for="item in count" :key="item" class="database-css">
            <div style="color: #0d52a1; font-size: 30px">{{ item }}</div>
            <el-divider direction="vertical" style="height: 100px; color: #0c57ad" />
            <el-avatar shape="square" style="width: 180px; height: 100px"
                src="https://upload-bbs.mihoyo.com/upload/2022/09/17/a490e27b4545cfd495c85887598bc5d9_4830685343755963999.png">
            </el-avatar>
            <div style="display: grid; justify-items: end">
                <el-button class="database-button">修改内容</el-button>
                <el-button class="database-button">修改图片</el-button>
                <el-button @click="onDelete" class="database-button" style="background-color: #e27172">删除</el-button>
            </div>
        </div>
        <div class="database-css">
            <el-button @click="add" class="database-button" style="width: 160px">添加数据库显示</el-button>
        </div>
    </div>
</template>
<script setup>
let count=3
const add = () => {
  count++;
}
const onDelete = () => {
  if (count > 0) {
    count--;
  }
}
</script>
<style>
.TAG_right_admin_table {
  margin-top: 20px;
}
.TAG_right_admin_left {
  font-size: 28px;
  font-family: "PingFang SC";
  float: left;
  color: #0c57ad;
}
.database-1 {
  display: flex;
  flex-wrap: wrap;
}
.database-css {
  display: flex;
  flex-grow: 1;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 41%;
  height: 150px;
  margin: 8px;
  border-radius: 12px;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
}
.database-button {
  margin: 2px;
  width: 80px;
  background-color: #0c57ad;
  color: white;
  border-radius: 12px;
}
</style>