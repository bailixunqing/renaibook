<template>
    <div class="TAG_right_admin">
        <div class="TAG_right_admin_left">用户管理</div>
    </div>
    <el-divider></el-divider>
    <el-row>
        <el-form-item label="用户姓名">
            <el-input v-model="search" placeholder="请输入关键字"></el-input>
        </el-form-item>
    </el-row>
    <div class="TAG_right_admin_table">
        <el-table :data="
            UserData.filter(
                (data) => {
                    // !search ||
                    // data.name.toLowerCase().includes(search.toLowerCase())
                }
            )
        ">
            <el-table-column type="index" label="#" style="width: 83px"></el-table-column>
            <el-table-column prop="idCard" label="ID工号"></el-table-column>
            <el-table-column prop="username" label="姓名"></el-table-column>
            <el-table-column label="操作">
                <template #default="scope">
                    {{ scope.row.date }}
                    <el-button type="success" round style="width: 60px" @click="select(111)">修改
                    </el-button>
                    <el-button type="success" round
                        style="width: 60px;background-color: #e27172; margin-left: 4px;font-size: 15px;"
                        @click="delete_total(0, scope)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script setup>
const select = (i) => {
  this.$emit("usermanagement", i)
  return
}
const delete_total=(i,e)=>{
    return
}
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

.TAG_right_admin_table {
    margin-top: 20px;
}
</style>