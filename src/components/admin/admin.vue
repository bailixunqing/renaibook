<template>
  <div class="new">
    <div class="screen">
      <!--监听子组件-->
      <AdminTop @select="select" />
      <div class="TAG">
        <div class="TAG_left">
          <div class="TAG_left_border">
            <el-collapse v-model="activeName" accordion class="TAG_left_1">
              <el-collapse-item title="超级管理" name="1">
                <el-row>
                  <el-button type="primary" round class="TAG_left_button" @click="select('usermanage')">用户管理
                  </el-button>
                  <el-button type="primary" round class="TAG_left_button" @click="select('useradd')">添加用户</el-button>
                </el-row>
              </el-collapse-item>
              <el-collapse-item title="图书指南" name="2">
                <el-row>
                  <el-button type="primary" round class="TAG_left_button" @click="select('ManageCreate')">发布文章
                  </el-button>
                </el-row>
              </el-collapse-item>
              <el-collapse-item title="通知公告" name="3">
                <el-row>
                  <el-button type="primary" round class="TAG_left_button" @click="select('NoticeManage')">公告管理
                  </el-button>
                  <el-button type="primary" round class="TAG_left_button" @click="select('NoticeCreate')">新建公告
                  </el-button>
                </el-row>
              </el-collapse-item>
              <el-collapse-item title="资源动态" name="4">
                <el-row style="text-align: center">
                  <el-button type="primary" round class="TAG_left_button" @click="select('DynamicManage')">动态管理
                  </el-button>
                  <el-button type="primary" round class="TAG_left_button" @click="select('DynamicAdd')">添加动态</el-button>
                </el-row>
              </el-collapse-item>
              <el-collapse-item title="活动报道" name="5">
                <el-row>
                  <el-button type="primary" round class="TAG_left_button" @click="select('ReportManage')">报道管理
                  </el-button>
                  <el-button type="primary" round class="TAG_left_button" @click="select('ReportCreate')">新建报道
                  </el-button>
                </el-row>
              </el-collapse-item>
              <el-collapse-item title="合作数据库" name="6">
                <el-row>
                  <el-button type="primary" round class="TAG_left_button" @click="select('DatabaseChinese')">中文数据库
                  </el-button>
                  <el-button type="primary" round class="TAG_left_button" @click="select('DatabaseLanguage')">外文数据库
                  </el-button>
                  <el-button type="primary" round class="TAG_left_button" @click="select('DatabaseProbation')">试用数据库
                  </el-button>
                </el-row>
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>
        <div class="TAG_right">
          <!--超级管理员账户信息更改-->
          <div class="TAG_rght_2" v-if="show('adminupdata')">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">更改密码</div>
            </div>
            <el-divider></el-divider>
            <!--账户信息更改-->
            <AdminUpdata />
          </div>
          <div class="TAG_rght_2" v-if="show('usermanage')">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">用户管理</div>
            </div>
            <el-divider></el-divider>
            <UserManage @select="select" />
          </div>
          <div class="TAG_rght_2" v-if="show('useredit')">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">用户编辑</div>
            </div>
            <el-divider></el-divider>
            <UserEdit />
          </div>
          <div class="TAG_rght_2" v-if="show('useradd')">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">添加用户</div>
            </div>
            <el-divider></el-divider>
            <UserAdd />
          </div>
          <div class="TAG_rght_2" v-if="show('ManageCreate')">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">发布文章</div>
            </div>
            <el-divider></el-divider>
            <ManageCreate />
          </div>
          <div class="TAG_rght_2" v-if="show('NoticeManage')">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">公告管理</div>
            </div>
            <el-divider></el-divider>
            <NoticeManage @select="update"/>
          </div>
          <div class="TAG_rght_2" v-if="show('NoticeUpdata')">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">公告修改</div>
            </div>
            <el-divider></el-divider>
            <NoticeUpdata :update_id="update_id"/>
          </div>
          <div class="TAG_rght_2" v-if="show('NoticeCreate')">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">新建公告</div>
            </div>
            <el-divider></el-divider>
            <NoticeCreate />
          </div>
          <div class="TAG_rght_2" v-if="show('DynamicManage')">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">动态管理</div>
            </div>
            <el-divider></el-divider>
            <DynamicManage />
          </div>
          <div class="TAG_rght_2" v-if="show('DynamicUpdata')">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">动态修改</div>
            </div>
            <el-divider></el-divider>
            <DynamicUpdata />
          </div>
          <div class="TAG_rght_2" v-if="show('DynamicAdd')">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">动态添加</div>
            </div>
            <el-divider></el-divider>
            <DynamicAdd />
          </div>
          <div class="TAG_rght_2" v-if="show('ReportManage')">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">报道管理</div>
            </div>
            <el-divider></el-divider>
            <ReportManage />
          </div>
          <div class="TAG_rght_2" v-if="show('ReportUpdata')">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">报道修改</div>
            </div>
            <el-divider></el-divider>
            <ReportUpdata />
          </div>
          <div class="TAG_rght_2" v-if="show('ReportCreate')">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">新建报道</div>
            </div>
            <el-divider></el-divider>
            <ReportCreate />
          </div>
          <div class="TAG_rght_2" v-if="show('DatabaseChinese')">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">中文数据库</div>
            </div>
            <el-divider></el-divider>
            <DatabaseChinese />
          </div>
          <div class="TAG_rght_2" v-if="show('DatabaseLanguage')">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">外文数据库</div>
            </div>
            <el-divider></el-divider>
            <DatabaseLanguage />
          </div>
          <div class="TAG_rght_2" v-if="show('DatabaseProbation')">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">试用数据库</div>
            </div>
            <el-divider></el-divider>
            <DatabaseProbation />
          </div>
        </div>
      </div>
      <AdminBottom />
    </div>
  </div>
</template>

<script setup>
import AdminTop from '@/components/admin/admins/admintop.vue'
import AdminBottom from '@/components/admin/admins/adminbottom.vue'
/* 超级管理员 */
import AdminUpdata from '@/components/admin/menu/admin/adminupdata.vue'

import UserManage from '@/components/admin/menu/users/usermanage.vue'
import UserEdit from '@/components/admin/menu/users/useredit.vue'
import UserAdd from '@/components/admin/menu/users/useradd.vue'

import ManageCreate from '@/components/admin/menu/manage/managecreate.vue'

import NoticeManage from '@/components/admin/menu/notice/noticemanage.vue'
import NoticeUpdata from '@/components/admin/menu/notice/noticeupdata.vue'
import NoticeCreate from '@/components/admin/menu/notice/noticecreate.vue'

import DynamicManage from '@/components/admin/menu/dynamic/dynamicmanage.vue'
import DynamicUpdata from '@/components/admin/menu/dynamic/dynamicupdata.vue'
import DynamicAdd from '@/components/admin/menu/dynamic/dynamicadd.vue'

import ReportManage from '@/components/admin/menu/report/reportmanage.vue'
import ReportUpdata from '@/components/admin/menu/report/reportupdata.vue'
import ReportCreate from '@/components/admin/menu/report/reportcreate.vue'
import DatabaseChinese from '@/components/admin/menu/database/databasechinese.vue'
import DatabaseLanguage from '@/components/admin/menu/database/databaselanguage.vue'
import DatabaseProbation from '@/components/admin/menu/database/databaseprobation.vue'
import { ref } from 'vue'
//默认展示页
const current = ref('usermanage')
const update_id=ref('')
//vue-menu选择器
const select = (data) => {
  current.value = data;
}
const update =(value) =>{
  console.log(value)
  const {data,i}=value;
  update_id.value=value.i
  console.log(update_id.value)
  current.value=data;

}
//vue-menu显示
const show = (i) => {
  /*show监听 */
  if (current.value == i) {
    return true;
  }
  return false;
}
//菜单
const activeName = ref('1')
</script>

<style scoped>
.new {
  justify-content: space-between;
  display: flex;
  font-family: "PingFang SC";
}

.screen {
  background: #f8f8f8bb;
  width: 100%;
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

.head {
  height: 70px;
  background: #0c57ad;
  box-shadow: 0px 4px 61px 17px rgba(0, 71, 139, 0.15);
  backdrop-filter: blur(61px);
  border-radius: 30px;
}

.head {
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


.head img {
  position: absolute;
  width: 268px;
  height: 42.86px;
  left: 235px;
  top: 16px;
}


.el-button {
  text-align: center;
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

.TAG_right_admin_left {
  font-size: 25px;
  color: #00478b;
}











:deep(.el-overlay.is-message-box .el-overlay-message-box) {
  background-color: #1a1a1a2b !important;
  backdrop-filter: blur(14px) !important;
}

:deep(.el-cascader .el-input) {
  margin-top: 20px;
  margin-bottom: 20px;
}

:deep(.tox:not([dir="rtl"])) {
  border-radius: 20px;
  border-color: #0c57ad;
  height: 100% !important;
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



:deep(.el-cascader) {
  width: 39%;
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




:deep(.el-button--primary) {
  --el-button-hover-bg-color: #0d52a1;
}

:deep(.el-button--success) {
  background-color: #0d52a1cf;
  --el-button-border-color: #fefefebf;
  --el-button-active-color: #ffffff;
  --el-button-hover-bg-color: #0d52a1b5;
  --el-button-disabled-bg-color: #ffffff;
  --el-button-hover-border-color: #ffffff;
  --el-button-active-bg-color: #0d4d9bb5;
  --el-button-disabled-border-color: #ffffff;
  --el-button-active-border-color: #ffffff;
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
  margin: 10px;
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


:deep(.el-table--fit) {
  width: 100%;
  border-radius: 25px;
}

:deep(.el-scrollbar__wrap--hidden-default) {
  max-height: 100% !important;
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
</style>