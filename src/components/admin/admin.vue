<template>
  <div class="new">
    <div class="screen">
      <AdminTop @usershow="usershow" />
      <div class="TAG">
        <!-- 左边导航栏-->
        <div class="TAG_left">
          <div class="TAG_left_border">
            <el-collapse v-model="activeName" accordion class="TAG_left_1" @click="clear()">
              <el-collapse-item title="超级管理" name="1">
                <el-row>
                  <el-button type="primary" round class="TAG_left_button" @click="select(11)">用户管理</el-button>
                  <el-button type="primary" round class="TAG_left_button" @click="select(12)">添加用户</el-button>
                </el-row>
              </el-collapse-item>
              <el-collapse-item title="图书指南" name="2">
                <el-row>
                  <el-button type="primary" round class="TAG_left_button" @click="select(20)">管理测试</el-button>
                  <el-button type="primary" round class="TAG_left_button" @click="select(21)">目录管理</el-button>
                  <el-button type="primary" round class="TAG_left_button" @click="select(23)">发布文章</el-button>
                </el-row>
              </el-collapse-item>
              <el-collapse-item title="通知公告" name="3">
                <el-row>
                  <el-button type="primary" round class="TAG_left_button" @click="select(31)">公告管理</el-button>
                  <el-button type="primary" round class="TAG_left_button" @click="select(32)">新建公告</el-button>
                </el-row>
              </el-collapse-item>
              <el-collapse-item title="资源动态" name="4">
                <el-row style="text-align: center">
                  <el-button type="primary" round class="TAG_left_button" @click="select(41)">动态管理</el-button>
                  <el-button type="primary" round class="TAG_left_button" @click="select(42)">添加动态</el-button>
                </el-row>
              </el-collapse-item>
              <el-collapse-item title="活动报道" name="5">
                <el-row>
                  <el-button type="primary" round class="TAG_left_button" @click="select(51)">报道管理</el-button>
                  <el-button type="primary" round class="TAG_left_button" @click="select(52)">新建报道</el-button>
                </el-row>
              </el-collapse-item>
              <el-collapse-item title="合作数据库" name="6">
                <el-row>
                  <el-button type="primary" round class="TAG_left_button" @click="select(61)">中文数据库</el-button>
                  <el-button type="primary" round class="TAG_left_button" @click="select(62)">外文数据库</el-button>
                  <el-button type="primary" round class="TAG_left_button" @click="select(63)">试用数据库</el-button>
                </el-row>
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>
        <div class="TAG_right">
          <div class="TAG_rght_2" v-if="show(999)">
            <UpdataPassword />
          </div>
          <div class="TAG_rght_2" v-if="show(11)">
            <letUserManagement />
          </div>
          <div class="TAG_rght_2" v-if="show(111)">
            <UserEdit />
          </div>
          <div class="TAG_rght_2" v-if="show(12)">
            <UserAdd />
          </div>
          <div class="TAG_rght_2" v-if="show(20)">
            <ManageTests />
          </div>
          <div class="TAG_rght_2" v-if="show(21)">
            <ManageMenu />
          </div>

          <div class="TAG_rght_2" v-if="show(23)">
            <ManageCreate />
          </div>

          <div class="TAG_rght_2" v-if="show(31)">
            <NoticeManage />
          </div>

          <div class="TAG_rght_2" v-if="show(311)">
            <NoticeUpdata />
          </div>

          <div class="TAG_rght_2" v-if="show(32)">
            <NoticeCreate />
          </div>

          <div class="TAG_rght_2" v-if="show(41)">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">动态管理</div>
            </div>
            <el-divider></el-divider>
            <el-row>
              <el-form-item label="标题">
                <el-input v-model="form['uers_name']" placeholder="请输入关键字"></el-input>
              </el-form-item>
            </el-row>
            <div class="TAG_right_admin_table">
              <el-table :data="ResourceData" :key="itemKey">
                <el-table-column type="index" style="width: 83px" label="#"></el-table-column>
                <el-table-column prop="title" label="标题"></el-table-column>
                <el-table-column prop="author" label="作者"></el-table-column>
                <el-table-column prop="gmtCreate" label="发布时间"></el-table-column>
                <el-table-column prop="user_operation" label="操作">
                  <template #default="scope">
                    {{ scope.row.date }}
                    <el-button class="button_on" type="success" round style="width: 60px"
                      @click="Resource_update(0, scope)">修改</el-button>
                    <el-button class="button_off" type="success" round
                      style=" width: 60px;background-color: #e27172;margin-left: 4px;font-size: 15px;"
                      @click="delete_total(2, scope)">删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>

          <div class="TAG_rght_2" v-if="show(411)">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">修改动态</div>
            </div>
            <el-divider></el-divider>
            <el-form-item label="标题">
              <el-input v-model="form['title']"></el-input>
            </el-form-item>
            <el-form-item label="作者">
              <el-input v-model="form['name']"></el-input>
            </el-form-item>
            <div style="color: black; font-size: large; font-weight: bold">
              编辑内容
            </div>
            <div class="TAG_main_write">
              <TEditor style="height: 400px" ref="editor" v-model="value" :value="value"
                @input="content_value_change" />
            </div>
            <div class="TAG_right_buttom">
              <el-button type="success" round class="TAG_right_back" @click="select(41)">返回</el-button>
              <el-button type="success" round class="TAG_right_on" @click="Resource_update(1, 1)">保存并返回</el-button>
            </div>
          </div>
          <div class="TAG_rght_2" v-if="show(42)">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">添加动态</div>
            </div>
            <el-divider></el-divider>
            <el-form-item label="标题">
              <el-input v-model="form['title']"></el-input>
            </el-form-item>
            <el-form-item label="作者">
              <el-input v-model="form['name']"></el-input>
            </el-form-item>
            <div style="color: black; font-size: large; font-weight: bold">
              编辑内容
            </div>
            <div class="TAG_main_write">
              <TEditor style="height: 400px" ref="editor" v-model="value" @input="content_value_change"
                :value="value" />
            </div>
            <div class="TAG_right_buttom">
              <el-button type="success" round class="TAG_right_back">返回</el-button>
              <el-button type="success" round class="TAG_right_on" @click="Create_Resource()">保存并返回</el-button>
            </div>
          </div>
          <div class="TAG_rght_2" v-if="show(51)">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">报道管理</div>
            </div>
            <el-divider></el-divider>
            <el-row>
              <el-form-item label="标题">
                <el-input v-model="form['title']" placeholder="请输入关键字"></el-input>
              </el-form-item>
            </el-row>
            <div class="TAG_right_admin_table">
              <el-table :data="ActivitiesData" :key="itemKey">
                <el-table-column type="index" style="width: 83px" label="#"></el-table-column>
                <el-table-column prop="title" label="标题"></el-table-column>
                <el-table-column prop="author" label="作者"></el-table-column>
                <el-table-column prop="gmtCreate" label="发布时间"></el-table-column>
                <el-table-column prop="user_operation" label="操作">
                  <template #default="scope">
                    {{ scope.row.date }}
                    <el-button class="button_on" type="success" round style="width: 40px"
                      @click="Update_Activities(0, scope)">修改</el-button>
                    <el-button class="button_off" type="success" round
                      style="width: 40px; background-color: #e27172; margin-left: 4px;font-size: 15px;"
                      @click="delete_total(3, scope)">删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
          <div class="TAG_rght_2" v-if="show(511)">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">编辑报道</div>
            </div>
            <el-divider></el-divider>
            <el-form-item label="标题">
              <el-input v-model="form['title']"></el-input>
            </el-form-item>
            <el-form-item label="作者">
              <el-input v-model="form['name']"></el-input>
            </el-form-item>
            <div style="color: black; font-size: large; font-weight: bold">
              报道概述
            </div>
            <div class="TAG_main_write">
              <div
                style="margin-right: 18px !important; box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%); border-radius: 20px;">
                <el-input v-model="form['summary']" clearable />
              </div>
            </div>
            <div style="color: black; font-size: large; font-weight: bold">
              编辑内容
            </div>
            <div class="TAG_main_write">
              <TEditor style="height: 400px" ref="editor" v-model="value" :value="value" />
            </div>
            <div style="text-align: left">
              <el-upload class="avatar-uploader" action :http-request="uploadFile" :show-file-list="true"
                :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <el-icon v-else class="avatar-uploader-icon">
                  <Plus />
                </el-icon>
              </el-upload>
            </div>
            <el-checkbox label="显示图片" name="type" style="font-weight: bold"></el-checkbox>
            <div class="TAG_right_buttom">
              <el-button type="success" round class="TAG_right_back">返回</el-button>
              <el-button type="success" round class="TAG_right_on" @click="Update_Activities(1, 1)">保存并返回</el-button>
            </div>
          </div>
          <div class="TAG_rght_2" v-if="show(52)">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">新建报道</div>
            </div>
            <el-divider></el-divider>
            <el-form-item label="标题">
              <el-input v-model="form['title']"></el-input>
            </el-form-item>
            <el-form-item label="作者">
              <el-input v-model="form['name']"></el-input>
            </el-form-item>
            <div style="color: black; font-size: large; font-weight: bold">
              报道概述
            </div>
            <div class="TAG_main_write">
              <div
                style=" margin-right: 18px !important; box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);border-radius: 20px;">
                <el-input v-model="form['summary']" clearable />
              </div>
            </div>
            <div style="color: black; font-size: large; font-weight: bold">
              编辑内容
            </div>
            <div class="TAG_main_write">
              <TEditor style="height: 400px" ref="editor" v-model="value" @input="content_value_change"
                :value="value" />
            </div>
            <el-checkbox label="显示图片" name="type" style="font-weight: bold"></el-checkbox>
            <div style="text-align: left">
              <el-upload class="avatar-uploader" action :http-request="uploadFile" :show-file-list="true"
                :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <el-icon v-else class="avatar-uploader-icon">
                  <Plus />
                </el-icon>
              </el-upload>
            </div>
            <div class="TAG_right_buttom">
              <el-button type="success" round class="TAG_right_back">返回</el-button>
              <el-button type="success" round class="TAG_right_on" @click="Create_Activities()">保存并返回</el-button>
            </div>
          </div>
          <div class="TAG_rght_2" v-if="show(61)">
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
          </div>
          <div class="TAG_rght_2" v-if="show(62)">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">外文数据库</div>
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
          </div>
          <div class="TAG_rght_2" v-if="show(63)">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">试用数据库</div>
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
          </div>
        </div>
      </div>
      <!-- admin-->
      <AdminBottom />
    </div>
  </div>
</template>

<script  lang="ts"  setup>
import AdminTop from '@/components/admin/AdminTop.vue'
import AdminBottom from '@/components/admin/AdminBottom.vue'
//999
import UpdataPassword from '@/components/admin/menu/updatapassword.vue'
//11
import letUserManagement from '@/components/admin/menu/users/usermanagement.vue'
//111
import UserEdit from '@/components/admin/menu/users/useredit.vue'
//12
import UserAdd from '@/components/admin/menu/users/useradd.vue'
//20 
import ManageTests from '@/components/admin/menu/manage/managetests.vue'
//21
import ManageMenu from '@/components/admin/menu/manage/managemenu.vue'
//23
import ManageCreate from '@/components/admin/menu/manage/managecreate.vue'
//30
import NoticeManage from '@/components/admin/menu/notice/noticemanage.vue'
//
import NoticeUpdata from '@/components/admin/menu/notice/noticeupdata.vue'

import NoticeCreate from '@/components/admin/menu/notice/noticecreate.vue'
//引入富文本
import TEditor from '@/components/TEditor.vue'

let axios = require("axios")
let id = 1000
let User_Form = {
  idCard: "",
  username: "",
  password: "",
  userPres: [0, 0, 0, 0, 0, 0, 0, 0]
}
let activeName = '1'
let current = 11
let imageUrl = ''
let value = "sadasdasdasd"
let form = {}
let update_form = {}
let author_title
let dialogImageUrl = ''
let dialogVisible = false
let UserData = []
let NoticeData = []
let ResourceData = []
let ActivitiesData = []
let title = []
let itemKey = 0
let menu
let title_options = []
let filterText: ''
let count: 3
let value_1: ""
let textarea: ""
let search: ''
let title_1: ""
let title_2: ""
let title_3: ""
let input: ""
let checkList: []
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
const allowDrop = (draggingNode, dropNode, type) => {
  if (dropNode.data.label === '二级 3-1') {
    return type !== 'inner';
  } else {
    return true;
  }
}
const allowDrag = (draggingNode) => {
  return draggingNode.data.label.indexOf('三级 3-2-2') === -1;
}
const load = () => {
  count += 2
}
const handleChange = (e, i) => { }
const add = () => {
  count++;
}
const onDelete = () => {
  if (count > 0) {
    count--;
  }
}
const handleAvatarSuccess = (res, file) => {
  imageUrl = URL.createObjectURL(file.raw);
}
const beforeAvatarUpload = (file) => {
  const isJPG = file.type === 'image/jpeg';
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isJPG) {
    // this.$message.error('上传头像图片只能是 JPG 格式!');
  }
  else
    if (!isLt2M) {
      // this.$message.error('上传头像图片大小不能超过 2MB!');
    }
  return isJPG && isLt2M;
}
const content_value_change = (e) => {
  value = e;
}
const delete_total = (i, e) => {
  // this.$confirm('此操作将永久删除, 是否继续?', '提示', {
  //   confirmButtonText: '确定',
  //   cancelButtonText: '取消',
  //   center: true
  // }).then(() => {
  //   if (i == 0) //删除用户
  //   {
  //     Delete_User(e.row)
  //     this.$message({
  //       type: 'success',
  //       message: '删除成功!'
  //     });
  //   }
  //   if (i == 1) //删除公告
  //   {
  //     Delete_Notice(e)
  //     this.$message({
  //       type: 'success',
  //       message: '删除成功!'
  //     });
  //   }
  //   if (i == 2) //删除资源
  //   {
  //     Delete_Resource(e)
  //     this.$message({
  //       type: 'success',
  //       message: '删除成功!'
  //     });
  //   }
  //   if (i == 3) //删除活动
  //   {
  //     Delete_Activities(e)
  //     this.$message({
  //       type: 'success',
  //       message: '删除成功!'
  //     });
  //   }
  //   if (i == 5) //删除标题栏内容
  //   {
  //     //this.Total_Menu_Delete(e);
  //   }
  // }).catch(() => {
  //   this.$message({
  //     type: 'info',
  //     message: '已取消删除'
  //   });
  // });
}
const usershow = (i) => {
  current = i;
  show(i);
}
const show = (i) => {
  if (current == i) {
    return true;
  }
  return false;
}
const select = (i) => {
  let form = {};
  if (i == 111 || i == 23 || i == 311 || i == 511 || i == 23 || i == 411) { }
  else {
    form = {};
  }
  current = i;
}
const handleRemove = (file, fileList) => { }
const handlePictureCardPreview = (file) => {
  dialogImageUrl = file.url;
  dialogVisible = true;
}
const uploadFile = (item) => {
  let FormDatas = new FormData()
  FormDatas.append('file', item.file)
  form['file'] = item.file;
}
const User_init = () => {
  axios
    .post("/api" + "/user/searchAll", null, {
      params: {
        token: sessionStorage.getItem("token")
      },
    })
    .then((res) => {
      UserData = res.data.data;
    })
    .catch((err) => { });
}
const pres = (i) => {
  User_Form.userPres[i] = Number(!User_Form.userPres[i]);
  console.log(User_Form.userPres);
}
const User_Create = () => {
  axios
    .post("/api" + "/user/insert", null, {
      params: {
        idCard: User_Form.idCard,
        username: User_Form.username,
        password: User_Form.password,
        userPres: User_Form.userPres,
        token: sessionStorage.getItem("token")
      },
    })
    .then((res) => {
      User_Form = {
        idCard: "",
        username: "",
        password: "",
        userPres: [],
      }
      alert("创建成功");
    })
    .catch((err) => { });
}
const Delete_User = (e) => {
  axios
    .post("/api" + "/user/delete", null, {
      params: {
        idCard: e.idCard,
        token: sessionStorage.getItem("token")
      },
    })
    .then((res) => {
      location.reload()
    })
    .catch((err) => { });
}
const clear = () => {
  form = {};
  value = ""
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

const Notice_init = () => {
  let data;
  let i = 0;
  axios
    .get("/api" + "/notice/searchAll",
      {
        params: {
          pageSize: 10
        }
      })
    .then((res) => {
      data = res.data.data;
      for (i = 0; i < data.length; i++) {
        let date = new Date(data[i].gmtCreate);
        let Y = date.getFullYear() + "-";
        let M =
          (date.getMonth() + 1 < 10
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1) + "-";
        let D = date.getDate() + " ";
        data[i].gmtCreate = Y + M + D;
      }
      NoticeData = data
    })
    .catch((err) => { });
}

const Create_Notice = () => {
  // let params = {
  //   title: form['title'],
  //   content: value,
  //   author: form['name'],
  //   token: sessionStorage.getItem("token")
  // };
  // let config = {
  //   headers: {
  //     "Content-Type": "multipart/form-data",
  //   },
  // };
  // axios
  //   .post("/api" + "/notice/insert", params, config)
  //   .then((res) => {
  //     this.$message({
  //       type: 'success',
  //       message: '添加成功!'
  //     });
  //     this.$refs.editor.$data.contentValue = "";
  //     form = {};
  //     Notice_init();
  //   })
  //   .catch(() => {
  //     alert("添加失败");
  //   });
}

const Notice_update = (i, e) => {
  // let that = this
  // if (i == 0) {
  //   axios
  //     .get("/api" + "/notice/search",
  //       {
  //         params: {
  //           id: e.row.id
  //         }
  //       }).then((res) => {
  //         let data = res.data.data[0];
  //         form['id'] = data.id;
  //         form['title'] = data.title;
  //         value = data.content;
  //         that.select(311)
  //       });
  // }
  // else if (i == 1) {
  //   let params = {
  //     id: form['id'],
  //     title: form['title'],
  //     content: value,
  //     author: form['name'],
  //     token: sessionStorage.getItem("token")
  //   };
  //   let config = {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //   };
  //   axios
  //     .post("/api" + "/notice/update", params, config)
  //     .then((res) => {
  //       this.$message({
  //         type: 'success',
  //         message: '修改成功!'
  //       });
  //       Notice_init();
  //       value = ""
  //       form = {};
  //       setTimeout(() => {
  //         select(31)
  //       }, 1000);
  //     })
  //     .catch(() => {});
  // }
}

const Delete_Notice = (e) => {
  // let that = this;
  // let params = {
  //   id: e.row.id,
  //   token: sessionStorage.getItem("token")
  // };
  // let config = {
  //   headers: {
  //     "Content-Type": "multipart/form-data",
  //   },
  // };
  // axios
  //   .post("/api" + "/notice/delete", params, config)
  //   .then((res) => {
  //     this.$message({
  //       type: 'success',
  //       message: '删除成功!'
  //     });
  //     NoticeData.splice(e.$index, 1);
  //     itemKey = Math.random()
  //   })
  //   .catch(() => {
  //     this.$message({
  //       type: 'success',
  //       message: '删除失败!'
  //     });
  //   });
}

const Resource_init = () => {
  let string1;
  let data;
  let i = 0;
  axios
    .get("/api" + "/resource/searchAll",
      {
        params: {
          pageSize: 10
        }
      })
    .then((res) => {
      data = res.data.data;
      for (i = 0; i < data.length; i++) {
        let date = new Date(data[i].gmtCreate);
        let Y = date.getFullYear() + "-";
        let M =
          (date.getMonth() + 1 < 10
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1) + "-";
        let D = date.getDate() + " ";
        data[i].gmtCreate = Y + M + D;
      }
      ResourceData = data
    })
    .catch((err) => {
    });
}

const Create_Resource = () => {
  // let params = {
  //   title: form['title'],
  //   content: value,
  //   author: form['name'],
  //   token: sessionStorage.getItem("token")
  // };
  // let config = {
  //   headers: {
  //     "Content-Type": "multipart/form-data",
  //   },
  // };
  // axios
  //   .post("/api" + "/resource/insert", params, config)
  //   .then((res) => {
  //     this.$message({
  //       type: 'success',
  //       message: '添加成功!'
  //     });
  //     this.$refs.editor.$data.contentValue = ""
  //     form['title'] = "";
  //     form['name'] = "";
  //     Resource_init();
  //   })
  //   .catch((err) => {
  //     alert("添加失败");
  //   })
}

const Delete_Resource = (e) => {
  // axios
  //   .post("/api" + "/resource/delete", null, {
  //     params: {
  //       id: e.row.id,
  //       token: sessionStorage.getItem("token")
  //     },
  //   })
  //   .then((res) => {
  //     this.$message({
  //       type: 'success',
  //       message: '删除成功!'
  //     });
  //     ResourceData.splice(e.$index, 1);
  //     itemKey = Math.random()
  //   })
  //   .catch((err) => {});
}

const Resource_update = (i, e) => {
  // let that = this
  // if (i == 0) {
  //   axios
  //     .get("/api" + "/resource/search",
  //       {
  //         params: {
  //           id: e.row.id
  //         }
  //       }).then((res) => {
  //         let data = res.data.data[0];
  //         form['id'] = data.id;
  //         form['title'] = data.title;
  //         value = data.content;
  //         that.select(411)
  //       })
  // }
  // else if (i == 1) {
  //   let params = {
  //     id: form['id'],
  //     title: form['title'],
  //     content: value,
  //     author: form['name'],
  //     token: sessionStorage.getItem("token")
  //   };
  //   let config = {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //   };
  //   axios
  //     .post("/api" + "/resource/update", params, config)
  //     .then((res) => {
  //       this.$message({
  //         type: 'success',
  //         message: '更新成功!'
  //       });
  //       form = {};
  //       Resource_init()
  //       setTimeout(() => {
  //         select(41)
  //       }, 1000);
  //     })
  //     .catch(() => {});
  // }
}

const Activities_init = () => {
  let string1;
  let data;
  let i = 0;
  axios
    .get("/api" + "/activity/searchAll",
      {
        params: {
          pageSize: 10
        }
      })
    .then((res) => {
      data = res.data.data;
      for (i = 0; i < data.length; i++) {
        let date = new Date(data[i].gmtCreate);
        let Y = date.getFullYear() + "-";
        let M =
          (date.getMonth() + 1 < 10
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1) + "-";
        let D = date.getDate() + " ";
        data[i].gmtCreate = Y + M + D;
      }
      ActivitiesData = data
    })
    .catch((err) => {
    });
}

const Create_Activities = () => {
  // let params = {
  //   title: form['title'],
  //   content: value,
  //   author: form['name'],
  //   fileTmp: form['file'],
  //   summary: form['summary'],
  //   token: sessionStorage.getItem("token")
  // }
  // let config = {
  //   headers: {
  //     "Content-Type": "multipart/form-data",
  //   },
  // };
  // axios
  //   .post("/api" + "/activity/insert", params, config)
  //   .then((res) => {
  //     if (res.data.code == 200) {
  //       this.$message({
  //         type: 'success',
  //         message: '添加成功!'
  //       });
  //       Activities_init();
  //     }
  //     else {
  //       this.$message({
  //         type: 'error',
  //         message: '添加失败!'
  //       });
  //     }
  //     this.$refs.editor.$data.contentValue = "";
  //     form = {}
  //   })
  //   .catch(() => {
  //   });
}

const Delete_Activities = (e) => {
  // axios
  //   .post("/api" + "/activity/delete", null, {
  //     params: {
  //       id: e.row.id,
  //       token: sessionStorage.getItem("token")
  //     },
  //   })
  //   .then((res) => {
  //     this.$message({
  //       type: 'success',
  //       message: '删除成功!'
  //     });
  //     ActivitiesData.splice(e.$index, 1);
  //     itemKey = Math.random()
  //   })
  //   .catch((err) => {
  //     this.$message({
  //       type: 'success',
  //       message: '删除失败!'
  //     });
  //   });
}

const Update_Activities = (i, e) => {
  // let that = this
  // if (i == 0) {
  //   axios
  //     .get("/api" + "/activity/search",
  //       {
  //         params: {
  //           id: e.row.id
  //         }
  //       }).then((res) => {
  //         let data = res.data.data[0];
  //         form['id'] = data.id;
  //         form['title'] = data.title;
  //         form['summary'] = data.summary;
  //         value = data.content;
  //         that.select(511)
  //       })
  // }
  // else if (i == 1) {
  //   let params = {
  //     title: form['title'],
  //     content: value,
  //     author: form['name'],
  //     fileTmp: form['file'],
  //     summary: form['summary'],
  //     token: sessionStorage.getItem("token")
  //   }
  //   let config = {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //   };
  //   axios
  //     .post("/api" + "/activity/update", params, config)
  //     .then((res) => {
  //       if (res.data.code == 200) {
  //         this.$message({
  //           type: 'success',
  //           message: '修改成功!'
  //         });
  //         Activities_init();
  //       }
  //       else {
  //         this.$message({
  //           type: 'error',
  //           message: '修改失败!'
  //         });
  //       }
  //       this.$refs.editor.$data.contentValue = "";
  //       form = {}
  //     })
  //     .catch(() => {
  //     });
  // }
}


</script>

<style>
.avatar-uploader .el-upload {
  border-radius: 6px;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  cursor: pointer;
  position: relative;
  /* overflow: hidden; */
  transition: let(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: let(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  color: #8c939d;
  width: 178px;
  height: 178px;
  font-size: 50px;
  text-align: center;
}
</style>

<style  scoped >
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.new {
  justify-content: space-between;
  display: flex;
  font-family: "PingFang SC";
}

.screen {
  /* overflow: hidden; */
  background: #f8f8f8bb;
  width: 100%;
}

.TAG_top {
  width: 80%;
  margin: 0 auto;
}

.TAG_a {
  text-align: right;
  color: #0d52a1;
  margin-right: 233px;
  margin-top: 20px;
  margin-bottom: 20px;
}

:deep(.el-overlay.is-message-box .el-overlay-message-box) {
  background-color: #1a1a1a2b !important;
  backdrop-filter: blur(14px) !important;
}

.head {
  height: 70px;
  background: #0c57ad;
  box-shadow: 0px 4px 61px 17px rgba(0, 71, 139, 0.15);
  backdrop-filter: blur(61px);
  border-radius: 30px;
}

.head img {
  position: absolute;
  width: 268px;
  height: 42.86px;
  left: 235px;
  top: 16px;
}

:deep(.el-cascader .el-input) {
  margin-top: 20px;
  margin-bottom: 20px;
}

.head h5 {
  /* Administrator */
  position: absolute;
  width: 207px;
  height: 45px;
  left: 1483px;
  top: 17px;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  font-family: "PingFang SC";
  line-height: 34px;
  color: rgba(255, 255, 255, 0.32);
}

.TAG_serch {
  width: 52px;
  height: 32px;
  margin-top: 5px;
  font-size: 14px;
}

.TAG_top_img {
  z-index: -1;
  float: right;
}

.TAG {
  width: 70%;
  height: 1400px;
  margin: 0 auto;
}

.TAG_left {
  width: 18%;
  height: 450px;
  float: left;
  border-radius: 50px;
  margin-top: 62px;
}

.TAG_left_1 {
  margin-top: 0px;
  border-top-width: 0px;
  border-bottom-width: 0px;
}

.el-button {
  text-align: center;
}

:deep(.tox:not([dir="rtl"])) {
  border-radius: 20px;
  border-color: #0c57ad;
  height: 100% !important;
  margin-right: 20px;
}

:deep(.el-table__empty-block) {
  background-color: #f7fafc;
}

:deep(.tox .tox-menubar) {
  background-color: #0c57ad;
  padding-left: 20px;
}

:deep(.tox .tox-mbtn__select-labe)l {
  color: rgb(255, 255, 255);
}

:deep(.tox .tox-statusbar__wordcount) {
  color: rgb(255, 255, 255);
  margin-right: 50px;
}

:deep(.tox .tox-statusbar) {
  background-color: #0c57ad;
}

.TAG_right_buttom {
  margin-top: 2px;
  margin-right: 27px;
  text-align: right;
}

:deep(.el-cascader) {
  width: 39%;
}

.TAG_main_write {
  margin-top: 26px;
  margin-bottom: 26px;
}

:deep(.el-collapse) {
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

:deep(.el-collapse-item__content) {
  padding-bottom: 0px;
}

:deep(.el-collapse-item__header) {
  color: #666666;
  font-size: 18px;
  font-weight: bold;
  padding-top: 10px;
  width: 80%;
  margin-left: 18px;
  margin-right: 18px;
}

:deep(.el-message-box--center .el-message-box__title) {
  color: #ce3735;
}

:deep(.el-button.is-round) {
  font-size: 16px;
  font-weight: bold;
}

:deep(.el-collapse-item__header.is-active) {
  color: #00478b;
}

:deep(.el-overlay-message-box) {
  background-color: #1a1a1a2b !important;
  backdrop-filter: blur(14px) !important;
}

:deep(.el-table__inner-wrapper::before) {
  background-color: rgb(255, 255, 255);
  border-radius: 20px;
}

:deep(.el-textarea__inner) {
  color: #000;
}

:deep(.el-collapse-item__wrap) {
  border-bottom-width: 0px;
  border-radius: 20px;
}

.TAG_left_button {
  text-align: left;
  width: 200px;
  height: 40px;
  margin: 10px;
  font-size: 15px;
  font-family: "PingFang SC";
  border: 0;
  color: #00488bd5;
  background: #ffffff00;
}

.TAG_right_adminpower_top {
  padding-top: 27px;
}

.TAG_right_adminpower_bottom {
  padding-bottom: 27px;
}

.TAG_right_back {
  padding-top: 20px !important;
  width: 8%;
  padding-bottom: 20px !important;
  background-color: #c4c4c4 !important;
}

.TAG_right_on {
  padding-top: 20px !important;
  padding-bottom: 20px !important;
  width: 14%;
}

:deep(.el-button--primary) {
  --el-button-hover-bg-color: #0d52a1;
}

:deep(.el-button--success) {
  background-color: #0d52a1;
  --el-button-border-color: #ffffff;
  --el-button-active-color: #5ca695;
  --el-button-hover-bg-color: #0d52a1;
  --el-button-disabled-bg-color: #ffffff;
  --el-button-hover-border-color: #ffffff;
  --el-button-active-bg-color: #6edbff;
  --el-button-disabled-border-color: #ffffff;
  --el-button-active-border-color: #122bcb;
}

:deep(.el-input__wrapper.is-focus) {
  box-shadow: 0 0 0 1px #0d52a1 inset;
}

:deep(.el-input__wrapper) {
  box-shadow: 0 0 0 1px #0d52a17d inset;
  border-radius: 11px;
  height: 40px;
}

:deep(.el-button > span) {
  width: 110px;
  display: block;
}

:deep(.el-icon svg) {
  color: #0c57ad;
}

:deep(.el-checkbox__input.is-checked .el-checkbox__inner) {
  background-color: #0d52a1;
  border-color: #0d52a1;
}

.TAG_right {
  width: 81%;
  margin-top: 62px;
  float: right;
}

.TAG_rght_2 {
  height: 100%;
  margin-bottom: 500px;
  margin-left: 15px;
  margin-right: 25px;
  padding: 42px;
  padding-top: 23px;
  padding-bottom: 80px;
  background: #ffffff;
  border-radius: 26px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.TAG_right_admin {
  margin-bottom: 50px;
}

.TAG_right_admin_left {
  font-size: 28px;
  font-family: "PingFang SC";
  float: left;
  color: #0c57ad;
}

.TAG_right_admin_right {
  font-size: 25px;
  font-family: "PingFang SC";
  float: right;
  color: #0c57ad;
}

:deep(.el-form-item) {
  margin-right: 15px;
  font-family: "PingFang SC";
  font-weight: 600;
}

:deep(.el-form-item__label) {
  color: #000;
  font-family: "PingFang SC";
  font-size: 25px;
  margin-top: 5px;
}

:deep(.el-form-item__content) {
  margin-left: 20px;
  background-color: #f7fafc;
  box-shadow: 0 0 0 1px #0d52a17d inset;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  align-items: flex-start;
}

:deep(.el-input__inner) {
  width: 220px;
}

:deep(.el-form-item__label) {
  padding-right: 0px;
}

:deep(.el-table td.el-table__cell, .el-table th.el-table__cell.is-leaf) {
  font-family: "PingFang SC";
  font-size: 20px;
  text-align: center;
  border-right-width: 0px !important;
  background-color: #f7fafc;
  color: black;
  font-weight: bold;
  height: 47px;
}

:deep(.el-table th.el-table__cell.is-leaf) {
  padding: 0;
  text-align: center;
  border-right-width: 0px !important;
}

:deep(.el-checkbox-group) {
  margin-top: 20px;
  display: grid;
  background: #f7fafc;
  border-radius: 20px;
  font-family: "PingFang SC";
  font-size: 30px;
}

:deep(.el-checkbox) {
  font-family: "PingFang SC";
  color: #000;
  margin-top: 10px;
  margin-bottom: 10px;
}

:deep(.el-checkbox__label) {
  font-size: 20px;
}

:deep(.el-checkbox__input.is-checked + .el-checkbox__label) {
  color: #00478b;
}

:deep(.el-checkbox__inner) {
  border-radius: 20px;
  margin-left: 15px;
  zoom: 142%;
}

:deep(.el-table th.el-table__cell > .cell) {
  background-color: #0c57ad;
  color: rgb(255, 255, 255);
  font-size: 18px;
  font-family: "PingFang SC";
  padding: 10px;
  height: 46px;
}

.TAG_right_button {
  margin-top: 10px;
}

.TAG_right_admin_table {
  margin-top: 20px;
}

:deep(.el-table--fit) {
  width: 100%;
  border-radius: 25px;
}

.TAG_buttom {
  position: absolute;
  width: 100%;
  height: 235px;
  bottom: 0px;
  background: #0c57ad;
}

.TAG_buttom_size {
  width: 1200px;
  margin: 0 auto;
}

.TAG_buttom_left {
  float: left;
}

.school {
  position: absolute;
  left: -57px;
}

.ArtFont {
  width: 325px;
  margin: 11px;
}

.TAG_link {
  color: #ffffff;
  margin: 15px;
}

.TAG_renai {
  color: #ffffff;
  margin: 15px;
}

.TAG_buttom_right {
  float: right;
}

.QRcode {
  width: 122px;
  height: 122px;
  background: #ffffff;
  box-shadow: 0px 10px 26px -6px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  margin: 50px;
  float: right;
}

.database-1 {
  display: flex;
  flex-wrap: wrap;
}

.database-button {
  margin: 2px;
  width: 80px;
  background-color: #0c57ad;
  color: white;
  border-radius: 12px;
}

.database-css {
  display: flex;
  flex-grow: 1;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 41%;
  height: 150px;
  margin: 8px;
  border-radius: 12px;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
}

:deep(.el-scrollbar__wrap--hidden-default) {
  max-height: 100% !important;
}

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

:deep(.el-tree) {
  --el-tree-text-color: #606266;
  background: #ffffff00;
  width: 100%;
}

:deep(el-tree-node) {
  margin: 5px;
}

:deep(.el-tree-node__label) {
  font-size: 30px !important;
  margin-left: 50px;
}

:deep(.el-tree__empty-text) {
  color: #000000;
  display: contents;
  font-size: 30px;
}

:deep(.el-tree--highlight-current .el-tree-node.is-current > .el-tree-node__content) {
  background-color: #8bcdff;
  border-radius: 20px;
}

:deep(.el-tree-node__content) {
  height: 42px;
  margin: 5px;
}

.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 8px;
  font-size: 25px;
}
</style>