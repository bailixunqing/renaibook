<template>
  <div class="new">
    <div class="screen">
      <AdminTop   @usershow="usershow"   />
      <!-- admin -->
      <div class="TAG">
        <!-- 左边导航栏-->
        <div class="TAG_left">
          <div class="TAG_left_border">
            <el-collapse v-model="activeName" accordion class="TAG_left_1">
              <el-collapse-item title="超级管理" name="1">
                <el-row>
                  <el-button
                    type="primary"
                    round
                    class="TAG_left_button"
                    @click="select(11)"
                    >用户管理</el-button
                  >
                  <el-button
                    type="primary"
                    round
                    class="TAG_left_button"
                    @click="select(12)"
                    >添加用户</el-button
                  >
                </el-row>
              </el-collapse-item>
              <el-collapse-item title="图书指南" name="2">
                <el-row>
                  <el-button
                    type="primary"
                    round
                    class="TAG_left_button"
                    @click="select(22)"
                    >文章管理</el-button
                  >
                  <el-button
                    type="primary"
                    round
                    class="TAG_left_button"
                    @click="select(21)"
                    >创建文章</el-button
                  >
                </el-row>
              </el-collapse-item>
              <el-collapse-item title="通知公告" name="3">
                <el-row>
                  <el-button
                    type="primary"
                    round
                    class="TAG_left_button"
                    @click="select(31)"
                    >公告管理</el-button
                  >
                  <el-button
                    type="primary"
                    round
                    class="TAG_left_button"
                    @click="select(32)"
                    >新建公告</el-button
                  >
                </el-row>
              </el-collapse-item>
              <el-collapse-item title="资源动态" name="4">
                <el-row style="text-align: center">
                  <el-button
                    type="primary"
                    round
                    class="TAG_left_button"
                    @click="select(41)"
                    >动态管理</el-button
                  >
                  <el-button
                    type="primary"
                    round
                    class="TAG_left_button"
                    @click="select(42)"
                    >添加动态</el-button
                  >
                </el-row>
              </el-collapse-item>
              <el-collapse-item title="活动报道" name="5">
                <el-row>
                  <el-button
                    type="primary"
                    round
                    class="TAG_left_button"
                    @click="select(51)"
                    >报道管理</el-button
                  >
                  <el-button
                    type="primary"
                    round
                    class="TAG_left_button"
                    @click="select(52)"
                    >新建报道</el-button
                  >
                </el-row>
              </el-collapse-item>
              <el-collapse-item title="合作数据库" name="6">
                <el-row>
                  <el-button
                    type="primary"
                    round
                    class="TAG_left_button"
                    @click="select(61)"
                    >中文数据库</el-button
                  >
                  <el-button
                    type="primary"
                    round
                    class="TAG_left_button"
                    @click="select(62)"
                    >外文数据库</el-button
                  >
                  <el-button
                    type="primary"
                    round
                    class="TAG_left_button"
                    @click="select(63)"
                    >试用数据库</el-button
                  >
                </el-row>
              </el-collapse-item>
              <el-collapse-item title="馆藏资源" name="7">
                <el-row>
                  <el-button
                    type="primary"
                    round
                    class="TAG_left_button"
                    @click="select(71)"
                    >资源管理</el-button
                  >
                </el-row>
              </el-collapse-item>
              <el-collapse-item title="馆内服务" name="8">
                <el-row>
                  <el-button
                    type="primary"
                    round
                    class="TAG_left_button"
                    @click="select(81)"
                    >服务管理</el-button
                  >
                  <el-button
                    type="primary"
                    round
                    class="TAG_left_button"
                    @click="select(82)"
                    >新建服务</el-button
                  >
                </el-row>
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>

        <!--右边内容-->
        <div class="TAG_right">
          <div class="TAG_rght_2" v-if="show(999)" >
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">修改密码</div>
            </div>
            <el-divider></el-divider>
            <el-form-item label="姓名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;">
              <el-input v-model="form.user_name"></el-input>
            </el-form-item>
            <el-form-item label="密码&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;">
              <el-input v-model="form.user_password"></el-input>
            </el-form-item>

            <div class="TAG_right_buttom">
              <el-button type="success" round class="TAG_right_back"
                >返回</el-button
              >
              <el-button type="success" round class="TAG_right_on"
                >保存并返回</el-button
              >
            </div>
          </div>
          <!-- 右:超级管理-->
          <!-- 右：用户管理-->
          <div class="TAG_rght_2" v-if="show(11)">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">用户管理</div>
            </div>
            <el-divider></el-divider>
            <el-row>
              <el-form-item label="用户姓名">
                <el-input
                  v-model="search"
                  placeholder="请输入关键字"
                ></el-input>
              </el-form-item>
            </el-row>
            <div class="TAG_right_admin_table">
              <el-table
                :data="
                  UserData.filter(
                    (data) =>
                      !search ||
                      data.name.toLowerCase().includes(search.toLowerCase())
                  )
                "
              >
                <el-table-column
                  type="index"
                  label="#"
                  style="width: 83px"
                ></el-table-column>
                <el-table-column prop="idCard" label="ID工号"></el-table-column>
                <el-table-column prop="username" label="姓名"></el-table-column>
                <el-table-column label="操作">
                  <template #default="scope">
                    {{ scope.row.date }}
                    <el-button
                      class="button_on"
                      type="success"
                      round
                      style="width: 76px"
                      @click="select(111)"
                      >修改</el-button
                    >
                    <el-button
                      class="button_off"
                      type="success"
                      round
                      style="
                        width: 76px;
                        background-color: #e27172;
                        margin-left: 26px;
                        font-size: 15px;
                      "
                      @click="open(0, scope)"
                      >删除</el-button
                    >
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
          <!-- 右:超级管理-->
          <!-- 右：用户修改-->
          <div class="TAG_rght_2" v-if="show(111)">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">编辑用户</div>
            </div>
            <el-divider></el-divider>
            <el-form-item label="工号ID&nbsp;&nbsp;&nbsp;">
              <el-input v-model="form.uers_id"></el-input>
            </el-form-item>
            <el-form-item label="姓名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;">
              <el-input v-model="form.user_name"></el-input>
            </el-form-item>
            <el-form-item label="密码&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;">
              <el-input v-model="form.user_password"></el-input>
            </el-form-item>
            <el-form-item label="用户权限">
              <el-checkbox
                label="系统管理"
                name="type"
                class="TAG_right_adminpower_top"
              ></el-checkbox>
              <el-checkbox label="菜单管理" name="type"></el-checkbox>
              <el-checkbox label="通知公告" name="type"></el-checkbox>
              <el-checkbox label="资源动态" name="type"></el-checkbox>
              <el-checkbox label="活动报道" name="type"></el-checkbox>
              <el-checkbox label="合作数据库" name="type"></el-checkbox>
              <el-checkbox label="馆藏资源" name="type"></el-checkbox>
              <el-checkbox
                label="馆内服务"
                name="type"
                class="TAG_right_adminpower_bottom"
              ></el-checkbox>
            </el-form-item>
            <div class="TAG_right_buttom">
              <el-button type="success" round class="TAG_right_back"
                >返回</el-button
              >
              <el-button type="success" round class="TAG_right_on"
                >保存并返回</el-button
              >
            </div>
          </div>
          <!-- 右:超级管理-->
          <!-- 右：添加用户-->
          <div class="TAG_rght_2" v-if="show(12)">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">添加用户</div>
            </div>
            <el-divider></el-divider>
            <el-form-item label="工号ID&nbsp;&nbsp;&nbsp;">
              <el-input type="number" v-model="User_Form.idCard"></el-input>
            </el-form-item>
            <el-form-item label="姓名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;">
              <el-input v-model="User_Form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;">
              <el-input v-model="User_Form.password"></el-input>
            </el-form-item>
            <el-form-item label=""> </el-form-item>
            <el-form-item label="用户权限" v-model="User_Form.userPres">
              <el-checkbox
                label="系统管理"
                name="type"
                class="TAG_right_adminpower_top"
              ></el-checkbox>
              <el-checkbox label="菜单管理" name="type"></el-checkbox>
              <el-checkbox label="通知公告" name="type"></el-checkbox>
              <el-checkbox label="资源动态" name="type"></el-checkbox>
              <el-checkbox label="活动报道" name="type"></el-checkbox>
              <el-checkbox label="合作数据库" name="type"></el-checkbox>
              <el-checkbox label="馆藏资源" name="type"></el-checkbox>
              <el-checkbox label="馆内服务" name="type"></el-checkbox>
            </el-form-item>
            <div class="TAG_right_buttom">
              <el-button
                type="success"
                round
                class="TAG_right_on"
                @click="User_Create()"
                >保存并返回</el-button
              >
            </div>
          </div>

          <!-- 右:图书指南-->
          <!-- 右:编辑文章-->
          <div class="TAG_rght_2" v-if="show(21)">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">创建文章</div>
            </div>
            <el-divider></el-divider>
            <div style="color: black; font-size: large; font-weight: bold">
              选择目录
            </div>
            <div class="block">
              <el-cascader
                v-model="menu_number"
                :options="options"
                clearable
              ></el-cascader>
            </div>

            <div style="color: black; font-size: large; font-weight: bold">
              编辑内容
            </div>
            <div class="TAG_main_write">
              <TEditor
                style="height: 400px"
                ref="editor"
                @input="content_value_change"
                v-model="value"
              />
            </div>

            <div class="TAG_right_buttom">
              <el-button type="success" round class="TAG_right_back"
                >返回</el-button
              >
              <el-button
                type="success"
                round
                class="TAG_right_on"
                @click="Total_Menu_Create(menu_number, value)"
                >保存并返回</el-button
              >
            </div>
          </div>

          <!-- 右:图书指南-->
          <!-- 右:文章管理-->
          <div class="TAG_rght_2" v-if="show(22)">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">文章管理</div>
            </div>
            <el-divider></el-divider>

 <!--被干掉了

            <div style="color: black; font-size: large; font-weight: bold">
              创建目录
            </div>

            <el-select
              v-model="value"
              multiple
              filterable
              allow-create
              default-first-option
              :reserve-keyword="false"
              placeholder="输入创建目录"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>


           -->

            <div class="TAG_right_admin_table">
              <el-table
                :data="
                  UserData.filter(
                    (data) =>
                      !search ||
                      data.name.toLowerCase().includes(search.toLowerCase())
                  )
                "
              >
                <el-table-column
                  type="index"
                  label="#"
                  style="width: 83px"
                ></el-table-column>
                <el-table-column prop="idCard" label="目录名"></el-table-column>
                

                <el-table-column label="操作">
                  <template #default="scope">
                    {{ scope.row.date }}
                    <el-button
                      class="button_on"
                      type="success"
                      round
                      style="width: 76px"
                      >修改</el-button
                    >
                    <el-button
                      class="button_off"
                      type="success"
                      round
                      style="
                        width: 76px;
                        background-color: #e27172;
                        margin-left: 26px;
                        font-size: 15px;
                      "
                      >删除</el-button
                    >
                  </template>
                </el-table-column>
              </el-table>
            </div>

            <!--被干掉了







            <div style="color: black; font-size: large; font-weight: bold">
              编辑内容
            </div>
            <div class="TAG_main_write">
              <TEditor
                style="height: 400px"
                ref="editor"
                @input="content_value_change"
                v-model="value"
              />
            </div>

            <div class="TAG_right_buttom">
              <el-button type="success" round class="TAG_right_back"
                >返回</el-button
              >
              <el-button
                type="success"
                round
                class="TAG_right_on"
                @click="total_menu(item, value)"
                >保存并返回</el-button
              >
            </div>

-->
          </div>

          <!-- 右：通知公告-->
          <!-- 右：公告管理-->
          <div class="TAG_rght_2" v-if="show(31)">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">公告管理</div>
            </div>
            <el-divider></el-divider>
            <el-row>
              <el-form-item label="标题">
                <el-input
                  v-model="form.uers_name"
                  placeholder="请输入关键字"
                ></el-input>
              </el-form-item>
            </el-row>
            <div class="TAG_right_admin_table">
              <el-table :data="NoticeData">
                <el-table-column
                  type="index"
                  style="width: 83px"
                  label="#"
                ></el-table-column>
                <el-table-column prop="title" label="标题"></el-table-column>
                <el-table-column prop="uid" label="作者"></el-table-column>
                <el-table-column
                  prop="gmtCreate"
                  label="发布时间"
                ></el-table-column>
                <el-table-column prop="user_operation" label="操作">
                  <template #default="scope">
                    {{ scope.row.date }}
                    <el-button
                      class="button_on"
                      type="success"
                      round
                      style="width: 76px"
                      @click="select(311)"
                      >修改</el-button
                    >
                    <el-button
                      class="button_off"
                      type="success"
                      round
                      style="
                        width: 76px;
                        background-color: #e27172;
                        margin-left: 26px;
                        font-size: 15px;
                      "
                      @click="open(1, scope)"
                      >删除</el-button
                    >
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
          <!-- 右：通知公告-->
          <!-- 右：修改公告-->
          <div class="TAG_rght_2" v-if="show(311)">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">修改公告</div>
            </div>
            <el-divider></el-divider>
            <el-form-item label="标题">
              <el-input v-model="author_title"></el-input>
            </el-form-item>
            <el-form-item label="作者">
              <el-input v-model="form.author_name"></el-input>
            </el-form-item>
            <div style="color: black; font-size: large; font-weight: bold">
              编辑内容
            </div>
            <div class="TAG_main_write">
              <TEditor
                style="height: 400px"
                @input="content_value_change"
                v-model="value"
              />
            </div>

            <div class="TAG_right_buttom">
              <el-button type="success" round class="TAG_right_back"
                >返回</el-button
              >
              <el-button type="success" round class="TAG_right_on"
                >保存并返回</el-button
              >
            </div>
          </div>
          <!-- 右：通知公告-->
          <!-- 右：添加公告-->
          <div class="TAG_rght_2" v-if="show(32)">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">新建公告</div>
            </div>
            <el-divider></el-divider>
            <el-form-item label="标题">
              <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="作者">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <div style="color: black; font-size: large; font-weight: bold">
              编辑内容
            </div>
            <div class="TAG_main_write">
              <TEditor
                style="height: 400px"
                ref="editor"
                v-model="value"
                @input="content_value_change"
              />
            </div>

            <div class="TAG_right_buttom">
              <el-button type="success" round class="TAG_right_back"
                >返回</el-button
              >
              <el-button
                type="success"
                round
                class="TAG_right_on"
                @click="Create_Notice()"
                >保存并返回</el-button
              >
            </div>
          </div>

          <!-- 右：资源动态-->
          <!-- 右：动态管理-->
          <div class="TAG_rght_2" v-if="show(41)">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">动态管理</div>
            </div>
            <el-divider></el-divider>
            <el-row>
              <el-form-item label="标题">
                <el-input
                  v-model="form.uers_name"
                  placeholder="请输入关键字"
                ></el-input>
              </el-form-item>
            </el-row>
            <div class="TAG_right_admin_table">
              <el-table :data="ResourceData">
                <el-table-column
                  type="index"
                  style="width: 83px"
                  label="#"
                ></el-table-column
                >5
                <el-table-column prop="title" label="标题"></el-table-column>
                <el-table-column prop="author" label="作者"></el-table-column>
                <el-table-column
                  prop="gmtCreate"
                  label="发布时间"
                ></el-table-column>
                <el-table-column prop="user_operation" label="操作">
                  <template #default="scope">
                    {{ scope.row.date }}
                    <el-button
                      class="button_on"
                      type="success"
                      round
                      style="width: 76px"
                      @click="select(411)"
                      >修改</el-button
                    >
                    <el-button
                      class="button_off"
                      type="success"
                      round
                      style="
                        width: 76px;
                        background-color: #e27172;
                        margin-left: 26px;
                        font-size: 15px;
                      "
                      @click="open(2, scope)"
                      >删除</el-button
                    >
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
          <!-- 右：资源动态-->
          <!-- 右：修改动态-->
          <div class="TAG_rght_2" v-if="show(411)">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">修改动态</div>
            </div>
            <el-divider></el-divider>
            <el-form-item label="标题">
              <el-input v-model="form.author_title"></el-input>
            </el-form-item>
            <el-form-item label="作者">
              <el-input v-model="form.author_name"></el-input>
            </el-form-item>
            <div style="color: black; font-size: large; font-weight: bold">
              编辑内容
            </div>
            <div class="TAG_main_write">
              <TEditor style="height: 400px" ref="editor" v-model="value" />
            </div>
            <div class="TAG_right_buttom">
              <el-button type="success" round class="TAG_right_back"
                >返回</el-button
              >
              <el-button type="success" round class="TAG_right_on"
                >保存并返回</el-button
              >
            </div>
          </div>

          <!-- 右：资源动态-->
          <!-- 右：添加动态-->

          <div class="TAG_rght_2" v-if="show(42)">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">添加动态</div>
            </div>
            <el-divider></el-divider>
            <el-form-item label="标题">
              <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="作者">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <div style="color: black; font-size: large; font-weight: bold">
              编辑内容
            </div>
            <div class="TAG_main_write">
              <TEditor style="height: 400px" ref="editor" v-model="value" />
            </div>
            <div class="TAG_right_buttom">
              <el-button type="success" round class="TAG_right_back"
                >返回</el-button
              >
              <el-button
                type="success"
                round
                class="TAG_right_on"
                @click="Create_Resource()"
                >保存并返回</el-button
              >
            </div>
          </div>

          <!-- 右：活动报道-->
          <!-- 右：报道管理-->
          <div class="TAG_rght_2" v-if="show(51)">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">报道管理</div>
            </div>
            <el-divider></el-divider>
            <el-row>
              <el-form-item label="标题">
                <el-input
                  v-model="form.uers_name"
                  placeholder="请输入关键字"
                ></el-input>
              </el-form-item>
            </el-row>
            <div class="TAG_right_admin_table">
              <el-table :data="UersData">
                <el-table-column
                  type="index"
                  style="width: 83px"
                  label="#"
                ></el-table-column>
                <el-table-column prop="user_id" label="标题"></el-table-column>
                <el-table-column
                  prop="user_name"
                  label="作者"
                ></el-table-column>
                <el-table-column
                  prop="user_name"
                  label="发布时间"
                ></el-table-column>
                <el-table-column prop="user_operation" label="操作">
                  <template #default="scope">
                    {{ scope.row.date }}
                    <el-button
                      class="button_on"
                      type="success"
                      round
                      style="width: 76px"
                      @click="select(511)"
                      >修改</el-button
                    >
                    <el-button
                      class="button_off"
                      type="success"
                      round
                      style="
                        width: 76px;
                        background-color: #e27172;
                        margin-left: 26px;
                        font-size: 15px;
                      "
                      @click="open"
                      >删除</el-button
                    >
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>

          <!-- 右：活动报道-->
          <!-- 右:编辑报道-->
          <div class="TAG_rght_2" v-if="show(511)">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">编辑报道</div>
            </div>
            <el-divider></el-divider>
            <el-form-item label="标题">
              <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="作者">
              <el-input v-model="form.name"></el-input>
            </el-form-item>

            <div style="color: black; font-size: large; font-weight: bold">
              报道概述
            </div>
            <div class="TAG_main_write">
              <div
                style="
                  margin-right: 18px !important;
                  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
                  border-radius: 20px;
                "
              >
                <el-input v-model="textarea" clearable />
              </div>
            </div>
            <div style="color: black; font-size: large; font-weight: bold">
              编辑内容
            </div>
            <div class="TAG_main_write">
              <TEditor style="height: 400px" ref="editor" v-model="value" />
            </div>
            <div style="text-align: left">
              <el-upload
                class="avatar-uploader"
                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
              </el-upload>
            </div>
            <el-checkbox
              label="显示图片"
              name="type"
              style="font-weight: bold"
            ></el-checkbox>
            <div class="TAG_right_buttom">
              <el-button type="success" round class="TAG_right_back"
                >返回</el-button
              >
              <el-button type="success" round class="TAG_right_on"
                >保存并返回</el-button
              >
            </div>
          </div>
          <!-- 右：活动报道-->
          <!-- 右:新建报道-->
          <div class="TAG_rght_2" v-if="show(52)">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">新建报道</div>
            </div>
            <el-divider></el-divider>
            <el-form-item label="标题">
              <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="作者">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <div style="color: black; font-size: large; font-weight: bold">
              报道概述
            </div>
            <div class="TAG_main_write">
              <div
                style="
                  margin-right: 18px !important;
                  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
                  border-radius: 20px;
                "
              >
                <el-input v-model="textarea" clearable />
              </div>
            </div>
            <div style="color: black; font-size: large; font-weight: bold">
              编辑内容
            </div>
            <div class="TAG_main_write">
              <TEditor style="height: 400px" ref="editor" v-model="value" />
            </div>
            <el-checkbox
              label="显示图片"
              name="type"
              style="font-weight: bold"
            ></el-checkbox>
            <div style="text-align: left">
              <el-upload
                class="avatar-uploader"
                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
              </el-upload>
            </div>
            <div class="TAG_right_buttom">
              <el-button type="success" round class="TAG_right_back"
                >返回</el-button
              >
              <el-button type="success" round class="TAG_right_on"
                >保存并返回</el-button
              >
            </div>
          </div>
          <!-- 右：合作数据库-->
          <!-- 右:中文数据库-->
          <div class="TAG_rght_2" v-if="show(61)">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">中文数据库</div>
            </div>
            <el-divider></el-divider>
          </div>

          <!-- 右：合作数据库-->
          <!-- 右:外文数据库-->

          <div class="TAG_rght_2" v-if="show(62)">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">外文数据库</div>
            </div>
            <el-divider></el-divider>
          </div>
          <!-- 右：合作数据库-->
          <!-- 右:试用数据库-->
          <div class="TAG_rght_2" v-if="show(63)">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">试用数据库</div>
            </div>
            <el-divider></el-divider>
          </div>
          <!-- 右：馆藏资源-->
          <!-- 右: 资源管理-->
          <div class="TAG_rght_2" v-if="show(71)">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">资源管理</div>
            </div>
            <el-divider></el-divider>
          </div>

          <!-- 右：馆内服务-->
          <!-- 右: 服务管理-->
          <div class="TAG_rght_2" v-if="show(81)">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">服务管理</div>
            </div>
            <el-divider></el-divider>
            <el-row>
              <el-form-item label="主题">
                <el-input
                  v-model="search"
                  placeholder="请输入关键字"
                ></el-input>
              </el-form-item>
            </el-row>
            <div class="TAG_right_admin_table">
              <el-table
                :data="
                  UserData.filter(
                    (data) =>
                      !search ||
                      data.name.toLowerCase().includes(search.toLowerCase())
                  )
                "
              >
                <el-table-column
                  type="index"
                  label="#"
                  style="width: 83px"
                ></el-table-column>
                <el-table-column prop="id" label="ID工号"></el-table-column>
                <el-table-column prop="name" label="姓名"></el-table-column>
                <el-table-column label="操作">
                  <template #default="scope">
                    {{ scope.row.date }}
                    <el-button
                      class="button_on"
                      type="success"
                      round
                      style="width: 76px"
                      @click="select(811)"
                      >修改</el-button
                    >
                    <el-button
                      class="button_off"
                      type="success"
                      round
                      style="
                        width: 76px;
                        background-color: #e27172;
                        margin-left: 26px;
                        font-size: 15px;
                      "
                      @click="open"
                      >删除</el-button
                    >
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>

          <!-- 右：馆内服务-->
          <!-- 右: 修改服务-->
          <div class="TAG_rght_2" v-if="show(811)">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">修改服务</div>
            </div>
            <el-divider></el-divider>
            <el-form-item label="类型">
              <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="姓名">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <div class="TAG_right_buttom">
              <el-button type="success" round class="TAG_right_back"
                >返回</el-button
              >
              <el-button
                type="success"
                round
                class="TAG_right_on"
                @click="Create_Notice()"
                >保存并返回</el-button
              >
            </div>
          </div>

          <!-- 右：馆内服务-->
          <!-- 右: 新建服务-->
          <div class="TAG_rght_2" v-if="show(82)">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">新建服务</div>
            </div>
            <el-divider></el-divider>
            <el-form-item label="服务">
              <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="姓名">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <div style="color: black; font-size: large; font-weight: bold">
              编辑内容
            </div>
            <div class="TAG_main_write">
              <TEditor
                style="height: 400px"
                ref="editor"
                v-model="value"
                @input="content_value_change"
              />
            </div>

            <div class="TAG_right_buttom">
              <el-button type="success" round class="TAG_right_back"
                >返回</el-button
              >
              <el-button
                type="success"
                round
                class="TAG_right_on"
                @click="Create_Notice()"
                >保存并返回</el-button
              >
            </div>
          </div>
        </div>
      </div>

      <!-- admin-->
      <AdminBottom />
    </div>
  </div>
</template>



<script setup lang="lass"  >
//引入头部
import AdminTop from '@/components/admin/AdminTop.vue'
//引入底部
import AdminBottom from '@/components/admin/AdminBottom.vue'
//引入富文本
import TEditor from '@/components/TEditor.vue'
//引入element依赖
import { ArrowDown } from '@element-plus/icons-vue'

const axios = require("axios")


export default {
    name:'admin',
    components: {TEditor,AdminTop},
    data() {
      let User_Form={
        idCard:"",
        username:"",
        password:"",
        userPres:[],
      }
      let activeName= '1';//左边菜单栏
      let current=11; //其实菜单栏
      let imageUrl= '';
      let dialogImageUrl='';
      let dialogVisible= false;
      let value="";//富文本
      let form= {
          name: '',
          title:''
        };
        var author_title;
      let UserData= [
        {
            id: '50132125664',
            name: '张大三',
       },
        {
            id: '50132125664',
            name: '李小四',
       },
       {
            id: '50132125664',
            name: '王老五',
        },
       {
            id: '50132125664',
            name: '郭老六',
       },
       {
            id: '50132125664',
            name: '七大姑',
       },
       ];
      let NoticeData= [];
      let ResourceData=[];
        let options= [
          {
          value: '1-1-馆长寄语',
          label: '馆长寄语',
          
        }, {
          value: '1-2-本馆简介',
          label: '本馆简介',
          
        }, {
          value: '1-3-馆藏分布',
          label: '馆藏分布',
          
        },  {
          value: '1-4-开放时间',
          label: '开放时间',
          
        },  
        {
          value: '1-5-入馆须知',
          label: '入馆须知',
          
        },
        {
          value: '1-6-组织机构',
          label: '组织机构',
          
        }, {
          value: '1-7-联系我们',
          label: '联系我们',
          
        }, {
          value: '1-8-馆内服务',
          label: '馆内服务',
          
        }];
      return {
        author_title,
        activeName,current,imageUrl,dialogImageUrl,dialogVisible,value,
         form,value_1:"",
         textarea:"",
        search: '',//搜索
       options,
        UserData,
        value,
        User_Form,
        ResourceData
      };
    },
    
    methods:{
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      content_value_change(e)
      {
        this.value=e;
        console.log(this.value);
      },
      //删除按钮
       open(i,e) {
        
        this.$confirm('此操作将永久删除, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          center: true
        }).then(() => {

          if(i==0) //删除用户
          {
            this.Delete_User(e.row)
            
              this.$message({
              type: 'success',
              message: '删除成功!'
              });
            
          }

          if(i==1)
          {
            this.Delete_Notice(e.row)
          
              this.$message({
              type: 'success',
              message: '删除成功!'
              });
          }
          if(i==2)
          {
            this.Delete_Resource(e.row)
              this.$message({
              type: 'success',
              message: '删除成功!'
              });
          }
           
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      usershow(i){
        this.current=i;
        this.show(i);
      },
      show(i){
        if(this.current==i){
          return true;
        }
        return false;
      },
      select(i) {
        this.current=i;
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },






   

      //<=============================================用户===================================================>
      //<=============================================用户===================================================>
      //<=============================================用户===================================================>
      //<=============================================用户===================================================>
      User_init()
      {
        axios
          .post("/api" + "/user/searchAll", null, {
            params: {
              
              token:sessionStorage.getItem("token")
            },
          })
          .then((res) => {
           console.log(res.data.data)
           this.UserData=res.data.data;
            
          })
          .catch((err) => {
           
          });
      },
      User_Create()
      {
        console.log(this.User_Form)
        axios
          .post("/api" + "/user/insert", null, {
            params: {
              idCard:this.User_Form.idCard,
              username:this.User_Form.username,
              password:this.User_Form.password,
              userPres:this.User_Form.userPres,
              token:sessionStorage.getItem("token")
            },
          })
          .then((res) => {
           console.log(res)
           this.User_Form={
            idCard:"",
              username:"",
              password:"",
              userPres:[],
           }
            alert("创建成功");
          })
          .catch((err) => {
           
          });
      },

      Delete_User(e)
      {
        axios
          .post("/api" + "/user/delete", null, {
            params: {
              idCard:e.idCard,
              token:sessionStorage.getItem("token")
            },
          })
          .then((res) => {
           location.reload()
           
            
          })
          .catch((err) => {
           
          });
      },















      //<=============================================用户===================================================>
      //<=============================================用户===================================================>
      //<=============================================用户===================================================>
      //<=============================================用户===================================================>


      //<=============================================指南===================================================>
      //<=============================================指南===================================================>
      //<=============================================指南===================================================>
      //<=============================================指南===================================================>
      

       Total_Menu_Create(menu_number,value)
    {
      var insideId=menu_number.toString()
      console.log(typeof menu_number+"aaa"+value);
      axios
          .post("/api" + "/title/insert", null, {
            params: {
              insideId:insideId,
              content:this.value,
              token:sessionStorage.getItem("token")
            },
          })
          .then((res) => {
            alert("添加成功");
            this.$refs.editor.$data.contentValue=""
            
          })
          .catch((err) => {
            console.log(err);
            alert("添加失败");
          });
    },


      //<=============================================指南===================================================>
      //<=============================================指南===================================================>
      //<=============================================指南===================================================>
      //<=============================================指南===================================================>


      //<=============================================公告===================================================>
      //<=============================================公告===================================================>
      //<=============================================公告===================================================>
      //<=============================================公告===================================================>
      
      Notice_init()
      {
        let string1;
        let data;
        let i=0;
         axios
        .get("/api" + "/notice/searchAll")
        .then((res) => {

          data=res.data.data;
          for( i=0;i<data.length;i++)
          {
            data[i].gmtCreate=data[i].gmtCreate.substring(0,10)
            

          }
          this.NoticeData=data
          console.log(this.NoticeData);
        })
        .catch((err) => {
          console.log(err);
        });
      },
      Create_Notice(){
        //let params = new FormData();
        let params= {
              title: this.form.title,
              content:this.value,
              author:this.form.name,
              token:sessionStorage.getItem("token")
            };
           // params.append("title", blobInfo.blob());
            let config = {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            };
            axios
              .post("/api" + "/notice/insert", params, config)
              .then((res) => {
               alert("添加成功");
            this.$refs.editor.$data.contentValue=""
            
            this.form.title="";
            this.form.name="";
            this.Notice_init();
              })
              .catch(() => {
                alert("添加失败");
              });
        //  axios
        //   .post("/api" + "/notice/insert", null, {
        //     params: {
        //       title: this.form.title,
        //       content:this.value,
        //       author:this.form.name,
        //       token:sessionStorage.getItem("token")
        //     },
        //   })
        //   .then((res) => {
        //     alert("添加成功");
        //     this.$refs.editor.$data.contentValue=""
            
        //     this.form.title="";
        //     this.form.name="";
        //     this.Notice_init();
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //     alert("添加失败");
        //   });
        
      },
      //
      Delete_Notice(e)
      {
        axios
          .post("/api" + "/notice/delete", null, {
            params: {
              id:e.id,
              token:sessionStorage.getItem("token")
            },
          })
          .then((res) => {
           
            location.reload()
           
            
            //this.Notice_init()

          })
          .catch((err) => {
            console.log(err);
          
            
          });
      },
      //<=============================================公告===================================================>
      //<=============================================公告===================================================>
      //<=============================================公告===================================================>
      //<=============================================公告===================================================>

       //<=============================================资源===================================================>
      //<=============================================资源===================================================>
      //<=============================================资源===================================================>
      //<=============================================资源===================================================>
      
      Resource_init()
      {
        let string1;
        let data;
        let i=0;
         axios
        .get("/api" + "/resource/searchAll")
        .then((res) => {

          data=res.data.data;
          for( i=0;i<data.length;i++)
          {
            data[i].gmtCreate=data[i].gmtCreate.substring(0,10)
            

          }
          this.ResourceData=data
          console.log(this.ResourceData);
        })
        .catch((err) => {
          console.log(err);
        });
      },
      Create_Resource(){
        
         axios
          .post("/api" + "/resource/insert", null, {
            params: {
              title: this.form.title,
              content:this.value,
              author:this.form.name,
              token:sessionStorage.getItem("token")
            },
          })
          .then((res) => {
            alert("添加成功");
            this.$refs.editor.$data.contentValue=""
            
            this.form.title="";
            this.form.name="";
            this.Resource_init();
          })
          .catch((err) => {
            console.log(err);
            alert("添加失败");
          });
        
      },
      //
      Delete_Resource(e)
      {
        axios
          .post("/api" + "/resource/delete", null, {
            params: {
              id:e.id,
              token:sessionStorage.getItem("token")
            },
          })
          .then((res) => {
           
            location.reload()
           
            
            //this.Notice_init()

          })
          .catch((err) => {
            console.log(err);
          
            
          });
      },
      //<=============================================资源===================================================>
      //<=============================================资源===================================================>
      //<=============================================资源===================================================>
      //<=============================================资源===================================================>
      
    },
    mounted:function ()
    {
      this.Resource_init();
      this.Notice_init();
      this.User_init();
    },
}


</script>

<style>
.avatar-uploader .el-upload {
  border-radius: 6px;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
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
  overflow: hidden;
  background: #f8f8f8bb;
  width: 100vw;
}

.TAG_top {
  width: 1660px;
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
  width: 1240px;
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

:deep(.el-select) {
  width: 39%;
  margin-top: 20px;
  margin-bottom: 20px;
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
  font-size: 18px;
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
</style>