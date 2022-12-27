<template>
    <div class="TAG_right_admin">
        <div class="TAG_right_admin_left">中文数据库</div>
    </div>
    <el-divider></el-divider>
    <div class="database-1">
        <div v-for="item in count" :key="item" class="database-css">
            <div style="color: #0d52a1; font-size: 30px">{{ item }}</div>
            <el-divider direction="vertical" style="height: 100px; color: #0c57ad" />
            <el-avatar shape="square" style="width: 180px; height: 100px"
                src="https://upload-bbs.mihoyo.com/upload/2022/09/17/a490e27b4545cfd495c85887598bc5d9_4830685343755963999.png">
            </el-avatar>
            <div style="display: grid; justify-items: end">
                <el-button class="database-button">修改内容</el-button>
                <el-button class="database-button">修改图片</el-button>
                <el-button @click="onDelete" class="database-button" style="background-color: #e27172">删除</el-button>
            </div>
        </div>
        <div class="database-css">
            <el-button @click="add" class="database-button" style="width: 160px">添加数据库显示</el-button>
        </div>
    </div>
</template>
<script setup>

</script>