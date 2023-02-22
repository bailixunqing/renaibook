<template>
  <div class="menu">
    <div class="menu_body_lfet">
            <el-tree :data="gData" node-key="id" ref="tree" draggable :filter-node-method="filterNode" accordion
        :allow-drop="allowDrop" :allow-drag="allowDrag" :props="defaultProps" :highlight-current="false"
        :expand-on-click-node="false">
        <!--点击头部才能打开-->
        <!--是否高亮-->
        <template #default="{ node}">
          <span class="custom-tree-node">
            <span>{{ node.label }}</span>
            <span>
              <el-icon :size="26" style="margin-right: 15px;">
                <CirclePlus />
              </el-icon>
              <el-icon :size="26" style="margin-right: 15px;">
                <Delete />
              </el-icon>
              <el-icon :size="26" style="margin-right: 15px;">
                <Edit />
              </el-icon>
            </span>
          </span>
        </template>
      </el-tree>
      <!--
      <el-tree :data="gData" node-key="id" empty-text="找不到该目录" draggable :filter-node-method="filterNode"
        :props="defaultProps" :allow-drop="allowDrop" :allow-drag="allowDrag" ref="tree" :highlight-current="true"
        :default-expand-all="true" :expand-on-click-node="false">
        <template #default="{ node, data }">
          <span class="custom-tree-node">
            <span>{{ node.label }}</span>
            <span>
              <el-popover placement="right" :width="400">
                <div style="
                                    display: grid;
                                    grid-template-columns: auto auto;
                                  ">
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
    -->
    </div>
    <div class="menu_body_right">
      <div class="menu_body_right_button">
        <el-button type="success" round class="buttom_on_menu" @click="() => preserveMenu()">保存目录</el-button>
      </div>
      <div class="menu_body_right_cascader">
        <el-cascader class="el-cascader" v-model="valueCascader" :options="gData" ref="cascader"
          @change="() => title_tree_change()"></el-cascader>
      </div>
    </div>
  </div>
  <div class="amin_write">
    <TEditor style="height: 400px" ref="editor" @getContent="valueChange" v-model="contentValue" :key="contentValue"
      :value="contentValue" />
  </div>
  <div class="buttom">
    <el-button type="success" round class="buttom_on" @click="() => contentsEdit()">发布文章
    </el-button>
  </div>
</template>
<script setup>
import TEditor from "@/components/TEditor.vue";
import { watch, ref, onMounted } from "vue";
import axios from "axios";
import { getCurrentInstance } from '@vue/runtime-core';
const gData = ref([]);
const valueCascader = ref([])
const currentInstance = getCurrentInstance()
let from={
  content:''
} //标题文本更新表单
/*  右键选择事件 */
const onContextMenuClick = (treeKey, menuKey) => {
  console.log(`treeKey: ${treeKey}`);
  switch (menuKey) {
    case "add": {
      console.log("添加");
      break;
    }
    case "delete": {
      console.log("删除");
      break;
    }
    default: {
      console.log("意外选择");
    }
  }
};

/* 控制  */
const expandedKeys = ref(["0-0-0", "0-0-1"]);

/* 监听 */
watch(expandedKeys, () => {
  console.log("展开了");
  console.log("expandedKeys", expandedKeys);
});

/* 点击事件 可以知道当前选择的是什么目录 */
// const treeSelect = (data, data2) => {
//   console.log("select:", data);
//   console.log("title", data2.node.dataRef);
// };

/* 拖动事件 */
const onDrop = (info) => {
  console.log(info);
  console.log("拖动了");
  const dropKey = info.node.key;
  const dragKey = info.dragNode.key;
  const dropPos = info.node.pos.split("-");
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
    loop(data, dropKey, (item) => {
      item.children = item.children || [];
      /// where to insert 示例添加到头部，可以是随意位置
      item.children.unshift(dragObj);
    });
  } else if (
    (info.node.children || []).length > 0 &&
    // Has children
    info.node.expanded &&
    // Is expanded
    dropPosition === 1 // On the bottom gap
  ) {
    loop(data, dropKey, (item) => {
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
const allowDrag = (draggingNode) => {
  return draggingNode.data.label.indexOf('三级 3-2-2') === -1;
}

const allowDrop = (draggingNode, dropNode, type) => {
  if (dropNode.data.label === '二级 3-1') {
    return type !== 'inner';
  } else {
    return true;
  }
}
const filterNode = (value, data) => {
  if (!value) return true
  return data.label.includes(value)
}

const defaultProps = {
  children: 'children',
  label: 'label',
}

/*富文本*/
const undef = ref(false);
const contentValue = ref("");
const keyValue = ref("");
const valueChange = ref("");
const value = ref("");
/* 保存文章 */
const contentsEdit = () => {
  /* 需要确保目录已保存 */
  console.log(undef.value);
  console.log(contentValue.value);
  console.log(keyValue.value);
  console.log(valueChange.value);
  console.log(value.value);
  /* 为真时可进行 */
  if (undef.value) {
    axios
      .post(
        `/api/title/insert`,
        {
          toid: "",
          content: contentValue.value,
          token: "",
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        /* 提示窗口 */
        /* 该窗口组件需要换一个好一点的 */
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    axios
      .post(
        `/api/title/update`,
        {
          id: "",
          content: contentValue.value,
          token: "",
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        /* 提示窗口 */
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

const title_tree_change = () => {

  let tree_data=currentInstance.ctx.$refs.cascader.getCheckedNodes()[0].data
  console.log(tree_data)
  let id=tree_data.id

  console.log("id",id)

   axios
    .get("/api" + "/title/search",
    {
      params:{
          id:id
      }
    }).then((res)=>{
      console.log(res)
      if(res.data.data.length==0)
      {
        contentValue.value=''




        //处理无文章问题
      // this.value="";
      // this.form.change=!this.form.change;
      // this.form.undef=true;
      // console.log("form::")
      // console.log(this.form);
      }
      else
      {
      let data=res.data.data[0];
      contentValue.value=data.content;






      // this.form.change=!this.form.change;
      // this.form.id=data.id;
      // this.form.undef=false;
      console.log(contentValue.value);
      }
    // // console.log(res.data.data[0].content)
    // //  this.content=res.data.data[0].content
    }
    );

};

onMounted(() => {
  axios
    .get("/api" + "/titleOptions/searchAll")
    .then((res) => {
      let data = res.data.data;

      data.sort(function (a, b) {
        if (a.type > b.type) return 1;
        else return -1;
      });
      console.log(data);

      let menu_test = [];

      for (let i = 0; i < data.length; i++) {
        let test = {};
        if (data[i].type.length == 1) {
          test.value = data[i].type;
          test.id = data[i].id;
          test.label = data[i].name;
          test.children = [];

          menu_test.push(test);
        } else if (data[i].type.length == 3) {
          test.value = data[i].type;
          test.id = data[i].id;
          test.label = data[i].name;
          test.children = [];
          let j = Number(data[i].type[0]) - 1;

          menu_test[j].children.push(test);
        } else if (data[i].type.length == 5) {
          test.value = data[i].type;
          test.id = data[i].id;
          test.label = data[i].name;
          test.children = [];
          let j = Number(data[i].type[0]) - 1;
          let k = Number(data[i].type[2]) - 1;

          menu_test[j].children[k].children.push(test);
        }
      }
      gData.value = menu_test;
      console.log(gData.value);
    })
    .catch((err) => { });
});
</script>
<style>
.menu {
  display: grid;
  grid-template-columns: repeat(2, 65% 35%);
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

.buttom_on_menu {
  width: 50%;
  font-size: 21px !important;
  height: 42px !important;
}
.menu_body_right_button{
  margin: 20px;
  margin-bottom: 10px;
  text-align: center;
}
.menu_body_right_cascader{
  text-align: center;
}
.el-cascader{
  width: 80% !important;
  margin: 20px;
  margin-top: 10px;
}
.el-tree-node__content>.el-tree-node__expand-icon {
  font-size: 32px;
}
</style>