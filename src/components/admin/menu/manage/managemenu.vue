<template>
    <div class="menu">
        <div class="menu1">
            <div>
                <el-form-item label="新建目录">
                    <el-input v-model="menu" placeholder="请输入新目录"></el-input>
                </el-form-item>
            </div>
            <div>
                <el-button  type="success" round @click="addmenu()">添加目录
                </el-button>
            </div>
            <div>
                <el-form-item label="搜索目录">
                    <el-input v-model="filterText" placeholder="输入关键字进行过滤"></el-input>
                </el-form-item>
            </div>
            <div>
                <el-button  type="success" round @click="savemenu()">保存修改</el-button>
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
  if (!value) return true;
  return data.label.indexOf(value) !== -1;
}
const addmenu = () => {
  if (menu == undefined || menu == "") {
    return;
  }
  let newmenu = {
    label: menu,
    children: []
  }
  title_options.push(newmenu);
}
const savemenu = () => {
  let data = [];
  let menu = title_options;
  let length = title_options.length;
  let type = "";
  for (let i = 0; i < length; i++) {
    type = String(i + 1);
    let menu_data = {
      type: type,
      name: menu[i].label,
      id: menu[i].id
    }
    data.push(menu_data);
    if (menu[i].children.length) {
      for (let j = 0; j < menu[i].children.length; j++) {
        type = String(i + 1) + "," + (j + 1);
        menu_data = {
          type: type,
          name: menu[i].children[j].label,
          id: menu[i].children[j].id
        }
        data.push(menu_data);
        if (menu[i].children[j].children.length) {
          for (let k = 0; k < menu[i].children[j].children.length; k++) {
            menu_data = {
              type: String(i + 1) + "," + (j + 1) + "," + (k + 1),
              name: menu[i].children[j].children[k].label,
              id: menu[i].children[j].children[k].id
            }
            data.push(menu_data);
          }
        }
      }
    }
  }
  let token = sessionStorage.getItem("token");
  let params = {
    titleOptionsInfo: data,
    token: token
  };
  let config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  axios
    .post("/api" + "/titleOptions/update", params, config)
    .then((res) => {
      if (res.data.code == 200) {
        // this.$message({
        //   type: 'success',
        //   message: '修改成功!'
        // });
        form = {};
        Menu_init();
      }
    })
    .catch(() => { });
}
const Menu_init = () => {
  axios
    .get("/api" + "/titleOptions/searchAll")
    .then((res) => {
      let data = res.data.data;
      data.sort(function (a, b) {
        if (a.type > b.type)
          return 1;
        else return -1;
      })
      let menu_test = [];
      for (let i = 0; i < data.length; i++) {
        let test = {};
        if (data[i].type.length == 1) {
          test['value'] = data[i].type;
          test['id'] = data[i].id;
          test['label'] = data[i].name;
          test['children'] = [];
          menu_test.push(test);
        } else
          if (data[i].type.length == 3) {
            test['value'] = data[i].type;
            test['id'] = data[i].id;
            test['label'] = data[i].name;
            test['children'] = [];
            let j = Number(data[i].type[0]) - 1;
            menu_test[j].children.push(test);
          } else
            if (data[i].type.length == 5) {
              test['value'] = data[i].type;
              test['id'] = data[i].id;
              test['label'] = data[i].name;
              test['children'] = [];
              let j = Number(data[i].type[0]) - 1;
              let k = Number(data[i].type[2]) - 1;
              menu_test[j].children[k].children.push(test);
            }
      }
      title_options = menu_test;
    })
    .catch((err) => { });
}
</script>
<style>
.menu {
  padding-top: 5px;
}

.menu1 {
  display: grid;
  grid-template-columns: auto auto;
  margin: 30px;
}

.menu2 {
  display: grid;
  grid-template-columns: auto auto;
  margin-left: 30px;
  margin-right: 80px;
}
</style>