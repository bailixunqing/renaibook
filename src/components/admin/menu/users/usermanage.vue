<template>
    <el-row>
        <el-form-item label="用户姓名">
            <el-input v-model="search" placeholder="请输入关键字"></el-input>
        </el-form-item>
    </el-row>
    <div class="admin_tatle">
        <el-table
            :data="UserData.filter((data) => !search.username || data.username.toLowerCase().includes(search.username.toLowerCase()))">
            <el-table-column type="index" label="#" style="width: 83px"></el-table-column>
            <el-table-column prop="idCard" label="ID工号"></el-table-column>
            <el-table-column prop="username" label="姓名"></el-table-column>
            <el-table-column label="操作">
                <template #default="scope">
                    <div>
                        {{ scope.row.date }}
                    <el-button type="success" round class="buttom_updata"
                        @click="$emit('selectUserEdit', 'useredit')">修改
                    </el-button>
                    <el-button type="success" round class="buttom_delete" @click="deleteTotal(0, scope)">删除</el-button>
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script  setup>
import { ref } from 'vue'
const search = ref('')
const UserData = ref([{
    'idCard': '123',
    'username': '谢基煌'
}])
const deleteTotal = (i, e) => {
    return
}
</script>
<style>
.admin_tatle {
    margin-top: 20px;
}

.buttom_updata {
    width: 60px !important;
    height: 40px !important;
    font-size: 19px !important;
    margin: auto !important;
}

.buttom_delete {
    width: 60px !important;
    background-color: #e27172 !important;
    height: 40px !important;
    font-size: 19px !important;
    margin: auto !important;
}
</style>