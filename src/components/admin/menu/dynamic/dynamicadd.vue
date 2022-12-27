<template>
    <div class="TAG_right_admin">
        <div class="TAG_right_admin_left">添加动态</div>
    </div>
    <el-divider></el-divider>
    <el-form-item label="标题">
        <el-input v-model="form['title']"></el-input>
    </el-form-item>
    <el-form-item label="作者">
        <el-input v-model="form['name']"></el-input>
    </el-form-item>
    <div style="color: black; font-size: large; font-weight: bold">
        编辑内容
    </div>
    <div class="TAG_main_write">
        <TEditor style="height: 400px" ref="editor" v-model="value" @input="content_value_change" :value="value" />
    </div>
    <div class="TAG_right_buttom">
        <el-button type="success" round class="TAG_right_back">返回</el-button>
        <el-button type="success" round class="TAG_right_on" @click="Create_Resource()">保存并返回</el-button>
    </div>
</template>
<script setup>

</script>