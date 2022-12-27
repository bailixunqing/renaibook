<template>
    <div class="TAG_right_admin">
        <div class="TAG_right_admin_left">动态管理</div>
    </div>
    <el-divider></el-divider>
    <el-row>
        <el-form-item label="标题">
            <el-input v-model="form['uers_name']" placeholder="请输入关键字"></el-input>
        </el-form-item>
    </el-row>
    <div class="TAG_right_admin_table">
        <el-table :data="ResourceData" :key="itemKey">
            <el-table-column type="index" style="width: 83px" label="#"></el-table-column>
            <el-table-column prop="title" label="标题"></el-table-column>
            <el-table-column prop="author" label="作者"></el-table-column>
            <el-table-column prop="gmtCreate" label="发布时间"></el-table-column>
            <el-table-column prop="user_operation" label="操作">
                <template #default="scope">
                    {{ scope.row.date }}
                    <el-button class="button_on" type="success" round style="width: 60px"
                        @click="Resource_update(0, scope)">修改</el-button>
                    <el-button class="button_off" type="success" round
                        style=" width: 60px;background-color: #e27172;margin-left: 4px;font-size: 15px;"
                        @click="delete_total(2, scope)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script setup>

</script>