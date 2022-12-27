<template>
    <div class="menu">
        <div class="menu1">
            <div>
                <el-form-item label="新建目录">
                    <el-input v-model="menu" placeholder="请输入新目录"></el-input>
                </el-form-item>
            </div>
            <div>
                <el-button class="button_on" type="success" round @click="addmenu()">添加目录
                </el-button>
            </div>
            <div>
                <el-form-item label="搜索目录">
                    <el-input v-model="filterText" placeholder="输入关键字进行过滤"></el-input>
                </el-form-item>
            </div>
            <div>
                <el-button class="button_on" type="success" round @click="savemenu()">保存修改</el-button>
            </div>
        </div>
        <div>
            <div>
                <el-tree :data="title_options" node-key="id" draggable :filter-node-method="filterNode"
                    :allow-drop="allowDrop" :allow-drag="allowDrag" ref="tree">
                </el-tree>
            </div>
        </div>
    </div>
</template>
<script setup>
</script>
<style>

</style>