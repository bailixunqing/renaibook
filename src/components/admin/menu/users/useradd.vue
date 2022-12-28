<template>
  <el-form-item label="工号ID">
    <el-input type="number" v-model="idCard"></el-input>
  </el-form-item>
  <el-form-item label="姓名">
    <el-input v-model="username"></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input v-model="password"></el-input>
  </el-form-item>
  <el-form-item label=""> </el-form-item>
  <el-form-item label="用户权限">
    <el-checkbox-group v-model="checkedCities" :min="1" :max="2">
      <el-checkbox v-for="city in checkedCities" :key="city" :label="city">{{ city }}
      </el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <div class="buttom">
    <el-button type="success" round class="buttom_on" @click="userCreate()">保存并返回</el-button>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const idCard = ref('')
const username = ref('')
const password = ref('')
const userPres = ref([])
const checkedCities = ref(['系统管理', '活动报道', '通知公告', '资源动态', '菜单管理', '合作数据库'])
const axios = require("axios")
const userCreate = () => {
  axios
    .post("/api" + "/user/insert", null, {
      params: {
        idCard: idCard,
        username: username,
        password: password,
        userPres: userPres,
        token: sessionStorage.getItem("token")
      },
    })
    .then((res) => {
      idCard.value = ''
      username.value = ''
      password.value = ''
      userPres.value = []
      alert("创建成功")
    })
    .catch((err) => { 
      
    })
}
</script>
<style>
.buttom {
  margin-top: 2px;
  margin-right: 27px;
  text-align: right;
}

.buttom_on {
  padding-top: 20px !important;
  padding-bottom: 20px !important;
  width: 14%;
}
</style>