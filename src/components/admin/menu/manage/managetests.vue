<template>
  <div class="menu">
    <div >
      <el-form-item label="搜索目录" style="font-size: 35px">
        <el-input v-model="filterText" placeholder="输入关键字进行过滤"></el-input>
      </el-form-item>
      <div style="display: flex">
        <el-form-item label="新建目录">
          <el-input v-model="menu" placeholder="请输入新目录"></el-input>
        </el-form-item>
        <el-button class="add_menu" type="success" round @click="addmenu()">添加目录
        </el-button>
        <el-button class="add_menu" type="success" round @click="savemenu()">保存修改
        </el-button>
      </div>
    </div>
    <div class="menu_body">
      <el-form-item label="编辑目录">
        <el-tree :data="title_options" node-key="id" empty-text="找不到该目录" draggable :filter-node-method="filterNode"
          :allow-drop="allowDrop" :allow-drag="allowDrag" ref="tree" :highlight-current="true"
          :default-expand-all="true" :expand-on-click-node="false">
          <template #default="{ node, data }">
            <span class="custom-tree-node">
              <span>{{ node.label }}</span>
              <span>
                <el-popover placement="right" :width="400">
                  <div style="display: grid;grid-template-columns: auto auto;">
                    <el-input v-model="input" placeholder="Please input" />
                    <el-button type="success" @click="updatamune(node, data)" round style="height: 40px">修改
                    </el-button>
                    <div></div>
                    <el-button type="success" @click="remove(node, data)" round style="height: 40px">删除
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
  </div>
</template>
<script setup>
import { ref } from 'vue'
const axios = require("axios")
//未定义具体内容
const title_options = ref([])
const filterText = ref([])
const menu = ref('')
const input = ref([])
/**
 * 函数实现
 */





const allowDrag = (draggingNode) => {
  return draggingNode.data.label.indexOf('三级 3-2-2') === -1;
}
const updatamune = (node, data) => {
  const parent = node.parent;
  const children = parent.data.children || parent.data;
  const index = children.findIndex((item) => item.id === data.id);
  children[index].label = ''
}
const remove = (node, data) => {
  const parent = node.parent
  const children = parent.data.children || parent.data
  const index = children.findIndex(d => d.id === data.id)
  let delete_nodes = []
  let delete_title = []
  children.splice(index, 1)
  const get_leaf = (obj) => {
    if (obj.children.length == 0) {
      delete_nodes.push(obj.id)
      delete_title.push(obj.id)
      return 1
    }
    else {
      delete_nodes.push(obj.id);
      for (let i = 0; i < obj.children.length; i++) {
        get_leaf(obj.children[i])
      }
    }
  }
  get_leaf(data)
  let token = sessionStorage.getItem("token")
  let params = {
    id: delete_nodes,
    token: token
  }
  let config = { headers: { "Content-Type": "application/json" } }
  axios
    .post("/api" + "/titleOptions/delete", params, config)
    .then((res) => {
      if (res.data.code == 200) {
        // this.$message({
        //   type: 'success',
        //   message: '标题删除成功!'
        // });
      }
    })
    .catch(() => { });
}
const filterNode = (value, data) => {
  if (!value) return true;
  return data.label.indexOf(value) !== -1;
}
const addmenu = () => {
  if (menu.value == undefined || menu.value == "") {
    return;
  }
  let newmenu = {
    label: menu.value,
    children: []
  }
  title_options.push(newmenu);
}
const allowDrop = (draggingNode, dropNode, type) => {
  if (dropNode.data.label === '二级 3-1') {
    return type !== 'inner';
  } else {
    return true;
  }
}
</script>
<style>
.menu {
  padding-top: 5px;
}


.menu_body {
  display: grid;
  grid-template-columns: auto auto;
}

.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 8px;
  font-size: 25px;
}

.button_on {
  height: 40px !important;
  font-size: 21px !important;
  width: 120px !important;
  margin-top: 8px;
}

.add_menu {
  font-size: 21px !important;
  height: 40px !important;
}
</style>