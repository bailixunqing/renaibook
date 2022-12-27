<template>
    <el-row>
        <el-form-item label="标题">
            <el-input v-model="uers_name" placeholder="请输入关键字"></el-input>
        </el-form-item>
    </el-row>
    <div class="TAG_right_admin_table">
        <el-table :data="NoticeData" :key="itemKey">
            <el-table-column type="index" style="width: 83px" label="#"></el-table-column>
            <el-table-column prop="title" label="标题"></el-table-column>
            <el-table-column prop="author" label="作者"></el-table-column>
            <el-table-column prop="gmtCreate" label="发布时间"></el-table-column>
            <el-table-column label="操作">
                <template #default="scope">
                    {{ scope.row.date }}
                    <el-button class="button_on" type="success" round @click="Notice_update(0, scope)">修改</el-button>
                    <el-button class="button_off" type="success" round @click="delete_total(1, scope)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const uers_name = ref('')
const itemKey = ref('')
const NoticeData = ref([
    {
        "title": "不会写标题",
        "author": "鲁迅",
        "gmtCreate": "2022-12-27"
    }
])
const Notice_update = () => {

}
const delete_total = () => {

}
</script>
<style>
.TAG_right_admin_table {
    margin-top: 20px;
}

.button_on {
    width: 60px;
}

.button_off {
    width: 60px;
    background-color: #e27172;
    margin-left: 4px;
    font-size: 15px;
}
</style>