<template>
    <div class="TAG_right_admin">
        <div class="TAG_right_admin_left">管理测试</div>
    </div>
    <el-divider></el-divider>
    <div class="menu">
        <div class="menu1">
            <div>
                <el-form-item label="搜索目录" style="font-size: 35px">
                    <el-input v-model="filterText" placeholder="输入关键字进行过滤"></el-input>
                </el-form-item>
                <div style="display: flex">
                    <el-form-item label="新建目录">
                        <el-input v-model="menu" placeholder="请输入新目录"></el-input>
                    </el-form-item>
                    <el-button type="success" round @click="addmenu()">添加目录
                    </el-button>
                </div>
            </div>
        </div>
        <div class="menu2">
            <div>
                <el-form-item label="编辑目录">
                    <el-tree :data="title_options" node-key="id" empty-text="找不到该目录" draggable
                        :filter-node-method="filterNode" :allow-drop="allowDrop" :allow-drag="allowDrag" ref="tree"
                        :highlight-current="true" :default-expand-all="true" :expand-on-click-node="false">
                        <template #default="{ node, data }">
                            <span class="custom-tree-node">
                                <span>{{ node.label }}</span>
                                <span>
                                    <el-popover placement="right" :width="400">
                                        <div style="display: grid;grid-template-columns: auto auto;">
                                            <el-input v-model="input" placeholder="Please input" />
                                            <el-button type="success" @click="updatamune(node, data)" round
                                                style="height: 40px">修改
                                            </el-button>
                                            <div></div>
                                            <el-button type="success" @click="remove(node, data)" round
                                                style="height: 40px">删除
                                            </el-button>
                                        </div>
                                        <template #reference>
                                            <el-icon :size="20">
                                                <Edit />
                                            </el-icon>
                                        </template>
                                    </el-popover>
                                </span>
                            </span>
                        </template>
                    </el-tree>
                </el-form-item>
            </div>
            <div style="margin-left: auto">
                <el-button class="button_on" style="height: 40px" type="success" round @click="savemenu()">保存修改
                </el-button>
            </div>
        </div>
    </div>
</template>
<script setup>
</script>