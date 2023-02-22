<template>
    <el-row>
        <el-form-item label="报道标题">
            <el-input v-model="titleSerch" placeholder="请输入关键字"></el-input>
        </el-form-item>
    </el-row>
    <div class="admin_table">
        <el-table :data="ActivitiesData" :key="itemKey">
            <el-table-column type="index" style="width: 83px" label="#"></el-table-column>
            <el-table-column prop="title" label="标题(title)"></el-table-column>
            <el-table-column prop="author" label="作者(author)"></el-table-column>
            <el-table-column prop="gmtCreate" label="发布时间(time)"></el-table-column>
            <el-table-column label="操作(action)">
                <template #default="scope">
                    {{ scope.row.date }}
                    <div>
                        <el-button class="button_on" type="success" round style="width: 40px"
                            @click="() => chooseUpdata()">修改</el-button>
                        <el-button class="button_off" type="success" round
                            style="width: 40px; background-color: #e27172; margin-left: 4px;font-size: 15px;"
                            @click="() => deleteTotal(scope.row.id)">删除</el-button>
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const emits = defineEmits(['select']);
const chooseUpdata = () => {
    emits("select", "ReportUpdata");
};
const itemKey = ref(0)
const titleSerch = ref('')
const ActivitiesData = ref([
    {
        "title": "xxx",
        "author": "xxx",
        "gmtCreate": "2022-1-1"
    }
])
const deleteTotal = (data) => {
    console.log(data)
}
</script>
<style>
.admin_table {
    margin-top: 20px;
}

.button_on {
    width: 60px !important;
    height: 40px !important;
    font-size: 19px !important;
    margin: auto !important;
}

.button_off {
    width: 60px !important;
    background-color: #e27172 !important;
    height: 40px !important;
    font-size: 19px !important;
    margin: auto !important;
}
</style>