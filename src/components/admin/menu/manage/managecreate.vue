<template>
  <div class="admin_menu_title">
    选择目录
  </div>
  <div class="block">
    <el-cascader v-model="form.cascader"  ref="cascader" @change="title_tree_change()">
    </el-cascader>
  </div>
  <div class="admin_menu_title">
    编辑内容
  </div>
  <div class="amin_write">
    <TEditor style="height: 400px" ref="editor" @input="valueChange" v-model="value" :key="form.change"
      :value="value" />
  </div>
  <div class="buttom">
    <el-button type="success" round class="buttom_back">返回</el-button>
    <el-button type="success" round class="buttom_on" @click="title_contents_edit()">保存并返回
    </el-button>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import TEditor from '@/components/TEditor.vue'
const axios = require("axios")
const form = ref({
  "cascader": "",
  "change": ""
})
const valueChange = ref('')
const value = ref('')
//报错多多

const title_tree_change = () => {
  // value = ""
  // let getCheckedNodes = this.$refs.cascader.getCheckedNodes()[0].data;
  // let id = getCheckedNodes.id;
  // let type = getCheckedNodes.value;
  // axios
  //   .get("/api" + "/title/search",
  //     {
  //       params: {
  //         id: id
  //       }
  //     }).then((res) => {
  //       if (res.data.data.length == 0) {
  //         value = "";
  //         form['change'] = !form['change'];
  //         form['undef'] = true;
  //       }
  //       else {
  //         let data = res.data.data[0];
  //         value = data.content;
  //         form['change'] = !form['change'];
  //         form['id'] = data.id;
  //         form['undef'] = false;
  //       }
  //     }
  //   )
}
const title_contents_edit = () => {
  // let undef = form['undef']
  // let getCheckedNodes = this.$refs.cascader.getCheckedNodes()[0].data;
  // if (undef) {
  //   let params = {
  //     toid: getCheckedNodes.id,
  //     content: value,
  //     token: sessionStorage.getItem("token")
  //   };
  //   let config = {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //   };
  //   axios
  //     .post("/api" + "/title/insert", params, config)
  //     .then((res) => {
  //       this.$message({
  //         type: 'success',
  //         message: '新建成功!'
  //       });
  //       value = ""
  //       form = {};
  //     })
  //     .catch(() => {});
  // }
  // else {
  //   let params = {
  //     id: form['id'],
  //     content: value,
  //     token: sessionStorage.getItem("token")
  //   };
  //   let config = {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //   };
  //   axios
  //     .post("/api" + "/title/update", params, config)
  //     .then((res) => {
  //       this.$message({
  //         type: 'success',
  //         message: '修改成功!'
  //       });
  //       value = ""
  //       form = {};
  //     })
  //     .catch(() => {});
  // }
}
</script>
<style>
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
.admin_menu_title{
  color: black; 
  font-size: 25px; 
  font-weight: bold;
}
</style>