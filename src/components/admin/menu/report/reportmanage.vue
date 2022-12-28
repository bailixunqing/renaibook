<template>
    <el-row>
        <el-form-item label="标题">
            <el-input v-model="title" placeholder="请输入关键字"></el-input>
        </el-form-item>
    </el-row>
    <div class="TAG_right_admin_table">
        <el-table :data="ActivitiesData" :key="itemKey">
            <el-table-column type="index" style="width: 83px" label="#"></el-table-column>
            <el-table-column prop="title" label="标题"></el-table-column>
            <el-table-column prop="author" label="作者"></el-table-column>
            <el-table-column prop="gmtCreate" label="发布时间"></el-table-column>
            <el-table-column label="操作">
                <template #default="scope">
                    {{ scope.row.date }}
                    <el-button class="button_on" type="success" round style="width: 40px"
                        @click="updateActivities(0, scope)">修改</el-button>
                    <el-button class="button_off" type="success" round
                        style="width: 40px; background-color: #e27172; margin-left: 4px;font-size: 15px;"
                        @click="deleteTotal(3, scope)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const itemKey = ref(0)
const title = ref('')
const ActivitiesData = ref([
    {
        "title": "",
        "author": "",
        "gmtCreate": ""
    }
])
const updateActivities = (a, b) => {
    console.log(a, b)
    return
}
const deleteTotal = (a, b) => {
    console.log(a, b)
}
</script>
<style>
.TAG_right_admin_table {
    margin-top: 20px;
}
</style>