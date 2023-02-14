<template>
    <el-form-item label="账号">
        <el-input v-model="AdminAccount" placeholder="请输入当前账号"></el-input>
    </el-form-item>
    <el-form-item label="旧密">
        <el-input v-model="AdminOldPassWord" placeholder="请输入旧密码"></el-input>
    </el-form-item>
    <el-form-item label="新密">
        <el-input v-model="AdminNewPassWord" placeholder="请输入新密码"></el-input>
    </el-form-item>
    <div class="buttom">
        <el-button type="success" round class="buttom_on" @click="adminUpdataPreservatiom">提交更改</el-button>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
const AdminAccount = ref('')
const AdminOldPassWord = ref('')
const AdminNewPassWord = ref('')
const open = () => {
    ElMessageBox.confirm(
        '是否确定更改?',
        '修改密码提示',
        {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
        }
    )
        .then(() => {
            /* 确定提交后请求api */

            /* 成功之后应该在3秒后跳转至登录界面 */
            ElMessage({
                type: 'success',
                message: '更改成功',
            })
        })
        .catch(() => {
            /* 更改失败了？ */
            ElMessage({
                type: 'info',
                message: '取消操作',
            })
        })
}
const adminUpdataPreservatiom = () => {
    console.log(AdminAccount.value, AdminOldPassWord.value, AdminNewPassWord.value)
    /** 账号密码仅限英文字母与阿拉伯数字  */
    /* 保存后需要弹出成功提示 */
    open()
    return
}
</script>
<style>
.buttom {
    margin-top: 2px;
    margin-right: 27px;
    text-align: right;
}

.buttom_back {
    padding-top: 20px !important;
    width: 8%;
    padding-bottom: 20px !important;
    background-color: #c4c4c4 !important;
}

.buttom_on {
    padding-top: 20px !important;
    padding-bottom: 20px !important;
    width: 14%;
}

.el-overlay.is-message-box .el-overlay-message-box {
    background: #e9f0f76b;
}
</style>