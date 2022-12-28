<template>
    <el-form-item label="工号ID">
        <el-input v-model="uers_id"></el-input>
    </el-form-item>
    <el-form-item label="姓名">
        <el-input v-model="user_name"></el-input>
    </el-form-item>
    <el-form-item label="密码">
        <el-input v-model="user_password"></el-input>
    </el-form-item>
    <el-form-item label="用户权限">
        <el-checkbox-group v-model="checkedCities" :min="1" :max="2">
            <el-checkbox v-for="city in checkedCities" :key="city" :label="city">{{ city }}
            </el-checkbox>
        </el-checkbox-group>
    </el-form-item>
    <div class="buttom">
        <el-button type="success" round class="buttom_back" @click="$emit('selectUserBack', 'UserBack')">返回</el-button>
        <el-button type="success" round class="buttom_on">保存并返回</el-button>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const uers_id = ref('')
const user_name = ref('')
const user_password = ref('')
const checkedCities = ref(['系统管理', '活动报道', '通知公告', '资源动态', '菜单管理', '合作数据库'])
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