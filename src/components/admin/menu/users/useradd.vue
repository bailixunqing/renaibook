<template>
    <div class="TAG_right_admin">
        <div class="TAG_right_admin_left">添加用户</div>
    </div>
    <el-divider></el-divider>
    <el-form-item label="工号ID&nbsp;&nbsp;&nbsp;">
        <el-input type="number" v-model="User_Form.idCard"></el-input>
    </el-form-item>
    <el-form-item label="姓名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;">
        <el-input v-model="User_Form.username"></el-input>
    </el-form-item>
    <el-form-item label="密码&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;">
        <el-input v-model="User_Form.password"></el-input>
    </el-form-item>
    <el-form-item label=""> </el-form-item>
    <el-form-item label="用户权限">
        <el-checkbox-group v-model="checkList">
            <el-checkbox label="1" name="type">系统管理</el-checkbox>
            <el-checkbox label="2" name="type">活动报道</el-checkbox>
            <el-checkbox label="3" name="type">通知公告</el-checkbox>
            <el-checkbox label="4" name="type">资源动态</el-checkbox>
            <el-checkbox label="5" name="type">菜单管理</el-checkbox>
            <el-checkbox label="6" name="type">合作数据库</el-checkbox>
        </el-checkbox-group>
    </el-form-item>
    <div class="TAG_right_buttom">
        <el-button type="success" round class="TAG_right_on" @click="User_Create()">保存并返回</el-button>
    </div>
</template>
<script setup>
</script>
<style>

</style>