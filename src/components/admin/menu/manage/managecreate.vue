<template>
  <div class="menu">
    <div class="menu_body_lfet">
      <a-tree v-model:expandedKeys="expandedKeys" draggable :tree-data="gData" :show-line="true" @select="select"
        @drop="onDrop">
        <template #title="{ key: treeKey, title }">
          <a-dropdown :trigger="['contextmenu']">
            <span>{{ title }}</span>
            <template #overlay>
              <a-menu @click="({ key: menuKey }) => onContextMenuClick(treeKey, menuKey)">
                <a-menu-item key="add">添加</a-menu-item>
                <a-menu-item key="delete">删除</a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </template>
      </a-tree>
    </div>
    <div class="menu_body_right">
    </div>
  </div>
  <div class="amin_write">
    <TEditor style="height: 400px" ref="editor" @input="valueChange" v-model="contentValue" :key="keyValue"
      :value="value" />
  </div>
  <div class="buttom">
    <el-button type="success" round class="buttom_on" @click="contentsEdit()">发布文章
    </el-button>
  </div>
</template>
<script setup>
import TEditor from '@/components/TEditor.vue'
import { watch, ref } from 'vue'
import axios from 'axios'
const gData = ref([{
  title: '资源0',
  key: '0-0-0',
  children: [{
    title: '资源1',
    key: '0-0-0-0',
  }, {
    title: '资源2',
    key: '0-0-0-1',
  }],
}, {
  title: '寄语4',
  key: '0-0-1',
  children: [{
    title: '寄语5',
    key: '0-0-1-0',
  }, {
    title: '寄语6',
    key: '0-0-1-1',
  }],
}]);

/*  右键选择事件 */
const onContextMenuClick = (treeKey, menuKey) => {
  console.log(`treeKey: ${treeKey}`);
  switch (menuKey) {
    case 'add': {
      console.log('添加')
      break
    }
    case 'delete': {
      console.log('删除')
      break
    }
    default: {
      console.log('意外选择')
    }
  }
};

/* 控制  */
const expandedKeys = ref(['0-0-0', '0-0-1']);

/* 监听 */
watch(expandedKeys, () => {
  console.log('展开了');
  console.log('expandedKeys', expandedKeys);
});

/* 点击事件 可以知道当前选择的是什么目录 */
const select = (data, data2) => {
  console.log(data)
  console.log(data2.node.dataRef
  )
}

/* 拖动事件 */
const onDrop = (info) => {
  console.log(info);
  console.log('拖动了');
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

/*富文本*/
const undef = ref(false)
const contentValue = ref('')
const keyValue = ref('')
const valueChange = ref('')
const value = ref('')
/* 保存文章 */
const contentsEdit = () => {
  /* 需要确保目录已保存 */
  console.log(undef.value)
  console.log(contentValue.value)
  console.log(keyValue.value)
  console.log(valueChange.value)
  console.log(value.value)
  /* 为真时可进行 */
  if (undef.value) {
    axios.post(`/api/title/insert`, {
      toid: '',
      content: contentValue.value,
      token: ''
    }, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        /* 提示窗口 */
        /* 该窗口组件需要换一个好一点的 */
      })
      .catch((err) => { console.log(err) });
  }
  else {
    axios.post(`/api/title/update`, {
      id: '',
      content: contentValue.value,
      token: ''
    }, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        /* 提示窗口 */
      })
      .catch((err) => { console.log(err) });
  }
}
</script>
<style>
.menu {
  display: grid;
  grid-template-columns: auto auto;
}

.menu_body_lfet {
  background-color: #f7fafc;
  box-shadow: 0 0 0 1px #0d52a17d inset;
  border-radius: 20px;
  margin-right: 20px;
}

.menu_body_right {
  background-color: #f7fafc;
  box-shadow: 0 0 0 1px #0d52a17d inset;
  border-radius: 20px;
  margin-left: 20px;
}

.amin_write {
  margin-top: 26px;
  margin-bottom: 26px;
}

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

.admin_menu_title {
  color: black;
  font-size: 25px;
  font-weight: bold;
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