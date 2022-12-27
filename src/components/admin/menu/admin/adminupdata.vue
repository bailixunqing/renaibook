<template>
    <el-form-item label="旧密码">
        <el-input></el-input>
    </el-form-item>
    <el-form-item label="密码">
        <el-input></el-input>
    </el-form-item>
    <div class="buttom">
        <el-button type="success" round class="buttom_back">返回</el-button>
        <el-button type="success" round class="buttom_on">保存并返回</el-button>
    </div>
</template>
<script setup>
import { ref } from 'vue'
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