<template>
    <div class="TAG_right_admin">
        <div class="TAG_right_admin_left">修改密码</div>
    </div>
    <el-divider></el-divider>
    <el-form-item label="旧密码&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;">
        <el-input v-model="form['user_name']"></el-input>
    </el-form-item>
    <el-form-item label="密码&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;">
        <el-input v-model="form['user_password']"></el-input>
    </el-form-item>
    <div class="TAG_right_buttom">
        <el-button type="success" round class="TAG_right_back">返回</el-button>
        <el-button type="success" round class="TAG_right_on">保存并返回</el-button>
    </div>
</template>
<script setup>
let from = {}
</script>
<style>
.TAG_right_admin {
    margin-bottom: 50px;
}

.TAG_right_admin_left {
    font-size: 28px;
    font-family: "PingFang SC";
    float: left;
    color: #0c57ad;
}

.TAG_right_buttom {
    margin-top: 2px;
    margin-right: 27px;
    text-align: right;
}

.TAG_right_back {
    padding-top: 20px !important;
    width: 8%;
    padding-bottom: 20px !important;
    background-color: #c4c4c4 !important;
}

.TAG_right_on {
    padding-top: 20px !important;
    padding-bottom: 20px !important;
    width: 14%;
}
</style>