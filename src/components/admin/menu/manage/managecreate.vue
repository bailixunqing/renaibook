<template>
    <div class="TAG_right_admin">
        <div class="TAG_right_admin_left">创建文件</div>
    </div>
    <el-divider></el-divider>
    <div style="color: black; font-size: large; font-weight: bold">
        选择目录
    </div>
    <div class="block">
        <el-cascader v-model="form['cascader']" :options="title_options" ref="cascader" @change="title_tree_change()">
        </el-cascader>
    </div>
    <div style="color: black; font-size: large; font-weight: bold">
        编辑内容
    </div>
    <div class="TAG_main_write">
        <TEditor style="height: 400px" ref="editor" @input="content_value_change" v-model="value" :key="form['change']"
            :value="value" />
    </div>
    <div class="TAG_right_buttom">
        <el-button type="success" round class="TAG_right_back">返回</el-button>
        <el-button type="success" round class="TAG_right_on" @click="title_contents_edit()">保存并返回
        </el-button>
    </div>
</template>
<script setup>

import TEditor from '@/components/TEditor.vue'
</script>