<template>
  <div class="menu">
    <div class="menu_body">
      <el-form-item label="编辑目录">
        <a-tree v-model:expandedKeys="expandedKeys" draggable :tree-data="gData" :show-line="showLine"
          @dragenter="onDragEnter" @drop="onDrop">
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
/* 是否展示连接线 */
const showLine = ref(true);
/* 数据 */
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
    title: '馆藏寄语3',
    key: '0-0-1-0',
  }, {
    title: '馆藏寄语4',
    key: '0-0-1-1',
  }],
}];
const gData = ref(treeData);
/*  右键 */
const onContextMenuClick = (treeKey, menuKey) => {
  console.log(`treeKey: ${treeKey}, menuKey: ${menuKey}`);
};
/* 控制  */
const expandedKeys = ref(['0-0-0', '0-0-1']);
watch(expandedKeys, () => {
  console.log('expandedKeys', expandedKeys);
});

/* 以下属于滑动效果部分 */
/**
 *  draggable  节点可拖拽
 * 
 */
/* 事件2 */
const onDragEnter = info => {
  console.log(info);
  // expandedKeys 需要展开时
  // expandedKeys.value = info.expandedKeys;
};
/* 事件1 */
const onDrop = info => {
  console.log(info);
  const dropKey = info.node.key;
  const dragKey = info.dragNode.key;
  const dropPos = info.node.pos.split('-');
  const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);
  const loop = (data, key, callback) => {
    data.forEach((item, index) => {
      if (item.key === key) {
        return callback(item, index, data);
      }
      if (item.children) {
        return loop(item.children, key, callback);
      }
    });
  };
  const data = [...gData.value];
  // Find dragObject
  let dragObj;
  loop(data, dragKey, (item, index, arr) => {
    arr.splice(index, 1);
    dragObj = item;
  });
  if (!info.dropToGap) {
    // Drop on the content
    loop(data, dropKey, item => {
      item.children = item.children || [];
      /// where to insert 示例添加到头部，可以是随意位置
      item.children.unshift(dragObj);
    });
  } else if ((info.node.children || []).length > 0 &&
    // Has children
    info.node.expanded &&
    // Is expanded
    dropPosition === 1 // On the bottom gap
  ) {
    loop(data, dropKey, item => {
      item.children = item.children || [];
      // where to insert 示例添加到头部，可以是随意位置
      item.children.unshift(dragObj);
    });
  } else {
    let ar = [];
    let i = 0;
    loop(data, dropKey, (_item, index, arr) => {
      ar = arr;
      i = index;
    });
    if (dropPosition === -1) {
      ar.splice(i, 0, dragObj);
    } else {
      ar.splice(i + 1, 0, dragObj);
    }
  }
  gData.value = data;
};
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