<template>
  <div class="database-1">
    <div v-for="item in count" :key="item" class="database-css">
      <div class="database_item">{{ item }}</div>
      <el-divider direction="vertical" style="height: 100px; color: #0c57ad" />
      <el-avatar shape="square" style="width: 180px; height: 100px"
        src="https://upload-bbs.mihoyo.com/upload/2022/09/17/a490e27b4545cfd495c85887598bc5d9_4830685343755963999.png">
      </el-avatar>
      <div class="database_buttom">
        <el-button class="database-button">修改内容</el-button>
        <el-button class="database-button">修改图片</el-button>
        <el-button @click="onDelete" class="database-button" style="background-color: #e27172">删除</el-button>
      </div>
    </div>
    <div class="database-css">
      <el-button @click="add" class="database-button" style="width: 160px">添加显示</el-button>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const count = ref('1')
const add = () => {
  count.value++;
}
const onDelete = () => {
  if (count.value > 0) {
    count.value--;
  }
}
</script>
<style>
.database-1 {
  display: flex;
  flex-wrap: wrap;
}

.database_item {
  color: #0d52a1;
  font-size: 30px
}

.database_buttom {
  display: grid;
  justify-items: end;
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