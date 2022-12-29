<template>
  <div class="menu">
    <div class="menu_body">
      <el-form-item label="编辑目录">
        <a-tree v-model:expandedKeys="expandedKeys" :tree-data="treeData"  :show-line="showLine">
          <template #title="{ key: treeKey, title }">
            <a-dropdown :trigger="['contextmenu']">
              <span>{{ title }}</span>
              <template #overlay>
                <a-menu @click="({ key: menuKey }) => onContextMenuClick(treeKey, menuKey)">
                  <a-menu-item key="1">添加</a-menu-item>
                  <a-menu-item key="2">删除</a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </template>
        </a-tree>
      </el-form-item>
    </div>
  </div>
</template>
<script setup>
import { watch, ref } from 'vue';
const showLine = ref(true);
const treeData = [{
  title: '馆藏资源',
  key: '0-0-0',
  children: [{
    title: '馆藏资源1',
    key: '0-0-0-0',
  }, {
    title: '馆藏资源2',
    key: '0-0-0-1',
  }],
}, {
  title: '馆藏寄语',
  key: '0-0-1',
  children: [{
    title: '馆藏寄语1',
    key: '0-0-1-0',
  }, {
    title: '馆藏寄语2',
    key: '0-0-1-1',
  }],
}];
const onContextMenuClick = (treeKey, menuKey) => {
  console.log(`treeKey: ${treeKey}, menuKey: ${menuKey}`);
};
const expandedKeys = ref(['0-0-0', '0-0-1']);
watch(expandedKeys, () => {
  console.log('expandedKeys', expandedKeys);
});
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

.ant-tree {
  background: rgba(255, 255, 255, 0) !important;
  font-size: 25px !important;
  margin-left: 20px !important;
  margin-top: 10px !important;
}
</style>