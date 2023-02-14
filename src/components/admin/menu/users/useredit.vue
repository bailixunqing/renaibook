<template>
    <el-form-item label="用户工号">
        <el-input v-model="UserData.user_card"></el-input>
    </el-form-item>
    <el-form-item label="用户姓名">
        <el-input v-model="UserData.user_name"></el-input>
    </el-form-item>
    <el-form-item label="用户密码">
        <el-input v-model="UserData.user_password"></el-input>
    </el-form-item>
    <el-form-item label="用户权限">
        <el-checkbox-group v-model="UserData.user_pres" :min="0" :max="2">
            <el-checkbox v-for="city in user_pres" :key="city" :label="city">{{ city }}
            </el-checkbox>
        </el-checkbox-group>
    </el-form-item>
    <div class="buttom">
        <el-button type="success" round class="buttom_on" @click="userCreate">确定提交</el-button>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import axios from 'axios'
/* 前端不建议使用require() */
const UserData = ref({
    'user_card': '',
    'user_name': '',
    'user_password': '',
    'user_pres': []
})
const user_pres = ['系统管理', '活动报道', '通知公告', '资源动态', '菜单管理', '合作数据库']
const userCreate = () => {
    console.log(UserData.value.user_pres)
    console.log('你正在请求更改用户数据...')
    axios.post(`/api/user/insert`, null, {
        params: {
            idCard: UserData.value.user_card,
            username: UserData.value.user_name,
            password: UserData.value.user_password,
            userPres: UserData.value.user_pres,
            token: sessionStorage.getItem("token")
        },
    })
        .then((res) => {
            alert("修改成功")
        })
        .catch((err) => { })
}
</script>
<style>
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