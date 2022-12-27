<template>
    <el-form-item label="标题">
        <el-input v-model="form['title']"></el-input>
    </el-form-item>
    <el-form-item label="作者">
        <el-input v-model="form['name']"></el-input>
    </el-form-item>
    <div style="color: black; font-size: large; font-weight: bold">
        报道概述
    </div>
    <div class="TAG_main_write">
        <div style="margin-right: 18px !important; box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%); border-radius: 20px;">
            <el-input v-model="form['summary']" clearable />
        </div>
    </div>
    <div style="color: black; font-size: large; font-weight: bold">
        编辑内容
    </div>
    <div class="TAG_main_write">
        <TEditor style="height: 400px" ref="editor" v-model="value" :value="value" />
    </div>
    <div style="text-align: left">
        <el-upload class="avatar-uploader" action :http-request="uploadFile" :show-file-list="true"
            :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon">
                <Plus />
            </el-icon>
        </el-upload>
    </div>
    <el-checkbox label="显示图片" name="type" style="font-weight: bold"></el-checkbox>
    <div class="TAG_right_buttom">
        <el-button type="success" round class="TAG_right_back">返回</el-button>
        <el-button type="success" round class="TAG_right_on" @click="Update_Activities(1, 1)">保存并返回</el-button>
    </div>
</template>
<script setup>
import TEditor from '@/components/TEditor.vue'
</script>
<style>
</style>