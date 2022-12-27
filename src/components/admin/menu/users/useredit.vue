<template>
    <el-form-item label="工号ID&nbsp;&nbsp;&nbsp;">
        <el-input v-model="form['uers_id']"></el-input>
    </el-form-item>
    <el-form-item label="姓名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;">
        <el-input v-model="form['user_name']"></el-input>
    </el-form-item>
    <el-form-item label="密码&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;">
        <el-input v-model="form['user_password']"></el-input>
    </el-form-item>
    <el-form-item label="用户权限">
        <el-checkbox-group v-model="checkList">
            <el-checkbox label="系统管理" name="type"></el-checkbox>
            <el-checkbox label="活动报道" name="type"></el-checkbox>
            <el-checkbox label="通知公告" name="type"></el-checkbox>
            <el-checkbox label="资源动态" name="type"></el-checkbox>
            <el-checkbox label="菜单管理" name="type"></el-checkbox>
            <el-checkbox label="合作数据库" name="type"></el-checkbox>
        </el-checkbox-group>
    </el-form-item>
    <div class="TAG_right_buttom">
        <el-button type="success" round class="TAG_right_back">返回</el-button>
        <el-button type="success" round class="TAG_right_on">保存并返回</el-button>
    </div>
</template>
<script setup>
const from={}
</script>
<style>

.TAG_right_buttom {
  margin-top: 2px;
  margin-right: 27px;
  text-align: right;
}
.TAG_right_back {
    padding-top: 20px !important;
    width: 8%;
    padding-bottom: 20px !important;
    background-color: #c4c4c4 !important;
}
.TAG_right_on {
    padding-top: 20px !important;
    padding-bottom: 20px !important;
    width: 14%;
}
</style>