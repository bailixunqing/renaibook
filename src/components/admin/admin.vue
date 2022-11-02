<template>
  <div class="new">
    <div class="screen">
      <AdminTop @usershow="usershow" />

      <!-- admin -->
      <div class="TAG">
        <!-- 左边导航栏-->
        <div class="TAG_left">
          <div class="TAG_left_border">
            <el-collapse
              v-model="activeName"
              accordion
              class="TAG_left_1"
              @click="clear()"
            >
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
                    @click="select(20)"
                    >管理测试</el-button
                  >
                  <el-button
                    type="primary"
                    round
                    class="TAG_left_button"
                    @click="select(21)"
                    >目录管理</el-button
                  >
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
                    @click="select(23)"
                    >发布文章</el-button
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
            </el-collapse>
          </div>
        </div>

        <!--右边内容-->
        <div class="TAG_right">
          <div class="TAG_rght_2" v-if="show(999)">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">修改密码</div>
            </div>
            <el-divider></el-divider>
            <el-form-item label="旧密码&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;">
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
                      style="width: 60px"
                      @click="select(111)"
                      >修改
                    </el-button>
                    <el-button
                      class="button_off"
                      type="success"
                      round
                      style="
                        width: 60px;
                        background-color: #e27172;
                        margin-left: 4px;
                        font-size: 15px;
                      "
                      @click="delete_total(0, scope)"
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

          <div class="TAG_rght_2" v-if="show(20)">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">管理测试</div>
            </div>
            <el-divider></el-divider>

            <div class="menu">
              <div class="menu1">
                <div>
                  <el-form-item label="搜索目录" style="font-size: 35px">
                    <el-input
                      v-model="filterText"
                      placeholder="输入关键字进行过滤"
                    ></el-input>
                  </el-form-item>
                </div>
              </div>
              <div class="menu2">
                <div>
                  <el-form-item label="编辑目录">
                    <el-tree
                      :data="options_1"
                      node-key="id"
                      @node-drag-start="handleDragStart"
                      @node-drag-enter="handleDragEnter"
                      @node-drag-leave="handleDragLeave"
                      @node-drag-over="handleDragOver"
                      @node-drag-end="handleDragEnd"
                      @node-drop="handleDrop"
                      empty-text="找不到该目录"
                      draggable
                      :filter-node-method="filterNode"
                      :props="defaultProps"
                      :allow-drop="allowDrop"
                      :allow-drag="allowDrag"
                      ref="tree"
                      :highlight-current="true"
                      :default-expand-all="true"
                      :expand-on-click-node="false"
                    >
                    </el-tree>
                  </el-form-item>
                </div>
                <div style="margin-left: auto">
                  <el-button
                    class="button_on"
                    style="height: 40px"
                    type="success"
                    round
                    @click="savemenu()"
                    >保存修改</el-button
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="TAG_rght_2" v-if="show(21)">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">目录管理</div>
            </div>
            <el-divider></el-divider>

            <div class="menu">
              <div class="menu1">
                <div>
                  <el-form-item label="新建目录">
                    <el-input
                      v-model="menu"
                      placeholder="请输入新目录"
                    ></el-input>
                  </el-form-item>
                </div>
                <div>
                  <el-button
                    class="button_on"
                    type="success"
                    round
                    @click="addmenu()"
                    >添加目录
                  </el-button>
                </div>
                <div>
                  <el-form-item label="搜索目录">
                    <el-input
                      v-model="filterText"
                      placeholder="输入关键字进行过滤"
                    ></el-input>
                  </el-form-item>
                </div>
                <div>
                  <el-button
                    class="button_on"
                    type="success"
                    round
                    @click="savemenu()"
                    >保存修改</el-button
                  >
                </div>
              </div>
              <div>
                <div>
                  <el-tree
                    :data="options_1"
                    node-key="id"
                    @node-drag-start="handleDragStart"
                    @node-drag-enter="handleDragEnter"
                    @node-drag-leave="handleDragLeave"
                    @node-drag-over="handleDragOver"
                    @node-drag-end="handleDragEnd"
                    @node-drop="handleDrop"
                    draggable
                    :filter-node-method="filterNode"
                    :props="defaultProps"
                    :allow-drop="allowDrop"
                    :allow-drag="allowDrag"
                    ref="tree"
                  >
                  </el-tree>
                </div>
              </div>
            </div>
          </div>

          <!-- 右:图书指南-->
          <!-- 右:文章管理-->
          <div class="TAG_rght_2" v-if="show(22)">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">文章管理</div>
            </div>
            <el-divider></el-divider>

            <el-row>
              <el-form-item label="目录">
                <el-input
                  v-model="form.uers_name"
                  placeholder="请输入关键字搜索"
                ></el-input>
              </el-form-item>
            </el-row>

            <div class="TAG_right_admin_table">
              <el-table :data="options_1">
                <el-table-column
                  type="index"
                  label="#"
                  style="width: 83px"
                ></el-table-column>

                <el-table-column prop="value" label="目录名"></el-table-column>

                <el-table-column label="操作">
                  <template #default="scope">
                    {{ scope.row.date }}
                    <el-button
                      class="button_on"
                      type="success"
                      round
                      style="width: 60px"
                      @click="Total_Menu_Update(0, scope)"
                      >修改</el-button
                    >
                    <el-button
                      class="button_off"
                      type="success"
                      round
                      style="
                        width: 60px;
                        background-color: #e27172;
                        margin-left: 4px;
                        font-size: 15px;
                      "
                      @click="delete_total(5, scope)"
                      >删除</el-button
                    >
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>

          <!-- 右:图书指南-->
          <!-- 右:编辑文章-->
          <div class="TAG_rght_2" v-if="show(23)">
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
                :options="options_1"
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
                :value="value"
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
                >保存并返回
              </el-button>
            </div>
          </div>

          <!-- <div class="TAG_rght_2" v-if="show(21)">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">目录管理</div>
            </div>
            <el-divider></el-divider>

            <div class="menu">
              <div>
                <div>
                  <el-form-item label="新建目录">
                    <el-input
                      v-model="menu"
                      placeholder="请输入新目录  "
                    ></el-input>
                  </el-form-item>
                </div>

                <div>
                  <el-input
                    placeholder="输入关键字进行过滤"
                    v-model="filterText"
                  >
                  </el-input>
                  <el-tree
                    :data="options_1"
                    node-key="id"
                    @node-drag-start="handleDragStart"
                    @node-drag-enter="handleDragEnter"
                    @node-drag-leave="handleDragLeave"
                    @node-drag-over="handleDragOver"
                    @node-drag-end="handleDragEnd"
                    @node-drop="handleDrop"
                    draggable
                    :filter-node-method="filterNode"
                    :props="defaultProps"
                    :allow-drop="allowDrop"
                    :allow-drag="allowDrag"
                    ref="tree"
                  >
                  </el-tree>
                </div>
                <el-button
                  type="success"
                  style="margin: auto"
                  @click="savemenu()"
                  >保存并返回
                </el-button>
              </div>

              <div>
                <el-button
                  class="button_on"
                  type="success"
                  round
                  style="width: 60px"
                  @click="addmenu()"
                  >添加</el-button
                >
              </div>
            </div>
          </div> -->

          <!-- 右:图书指南-->
          <!-- 右:文章管理-->
          <div class="TAG_rght_2" v-if="show(22)">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">文章管理</div>
            </div>
            <el-divider></el-divider>

            <el-row>
              <el-form-item label="目录">
                <el-input
                  v-model="form.uers_name"
                  placeholder="请输入关键字搜索"
                ></el-input>
              </el-form-item>
            </el-row>

            <div class="TAG_right_admin_table">
              <el-table :data="options_1">
                <el-table-column
                  type="index"
                  label="#"
                  style="width: 83px"
                ></el-table-column>

                <el-table-column prop="label" label="目录名"></el-table-column>

                <el-table-column label="操作">
                  <template #default="scope">
                    {{ scope.row.date }}
                    <el-button
                      class="button_on"
                      type="success"
                      round
                      style="width: 60px"
                      @click="Total_Menu_Update(0, scope)"
                      >修改</el-button
                    >
                    <el-button
                      class="button_off"
                      type="success"
                      round
                      style="
                        width: 60px;
                        background-color: #e27172;
                        margin-left: 4px;
                        font-size: 15px;
                      "
                      @click="delete_total(5, scope)"
                      >删除</el-button
                    >
                  </template>
                </el-table-column>
              </el-table>
            </div>
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
              <el-table :data="NoticeData" :key="itemKey">
                <el-table-column
                  type="index"
                  style="width: 83px"
                  label="#"
                ></el-table-column>
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
                      style="width: 60px"
                      @click="Notice_update(0, scope)"
                      >修改</el-button
                    >
                    <el-button
                      class="button_off"
                      type="success"
                      round
                      style="
                        width: 60px;
                        background-color: #e27172;
                        margin-left: 4px;
                        font-size: 15px;
                      "
                      @click="delete_total(1, scope)"
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
                @input="content_value_change"
                v-model="value"
                :value="value"
              />
            </div>

            <div class="TAG_right_buttom">
              <el-button
                type="success"
                round
                class="TAG_right_back"
                @click="select(31)"
                >返回</el-button
              >
              <el-button
                type="success"
                round
                class="TAG_right_on"
                @click="Notice_update(1, 1)"
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
                :value="value"
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
              <el-table :data="ResourceData" :key="itemKey">
                <el-table-column
                  type="index"
                  style="width: 83px"
                  label="#"
                ></el-table-column>
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
                      style="width: 60px"
                      @click="Resource_update(0, scope)"
                      >修改</el-button
                    >
                    <el-button
                      class="button_off"
                      type="success"
                      round
                      style="
                        width: 60px;
                        background-color: #e27172;
                        margin-left: 4px;
                        font-size: 15px;
                      "
                      @click="delete_total(2, scope)"
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
                :value="value"
                @input="content_value_change"
              />
            </div>
            <div class="TAG_right_buttom">
              <el-button
                type="success"
                round
                class="TAG_right_back"
                @click="select(41)"
                >返回</el-button
              >
              <el-button
                type="success"
                round
                class="TAG_right_on"
                @click="Resource_update(1, 1)"
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
              <TEditor
                style="height: 400px"
                ref="editor"
                v-model="value"
                @input="content_value_change"
                :value="value"
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
                  v-model="form.title"
                  placeholder="请输入关键字"
                ></el-input>
              </el-form-item>
            </el-row>
            <div class="TAG_right_admin_table">
              <el-table :data="ActivitiesData" :key="itemKey">
                <el-table-column
                  type="index"
                  style="width: 83px"
                  label="#"
                ></el-table-column>
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
                      style="width: 40px"
                      @click="Update_Activities(0, scope)"
                      >修改</el-button
                    >
                    <el-button
                      class="button_off"
                      type="success"
                      round
                      style="
                        width: 40px;
                        background-color: #e27172;
                        margin-left: 4px;
                        font-size: 15px;
                      "
                      @click="delete_total(3, scope)"
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
                <el-input v-model="form.summary" clearable />
              </div>
            </div>
            <div style="color: black; font-size: large; font-weight: bold">
              编辑内容
            </div>
            <div class="TAG_main_write">
              <TEditor
                style="height: 400px"
                ref="editor"
                v-model="value"
                :value="value"
              />
            </div>
            <div style="text-align: left">
              <el-upload
                class="avatar-uploader"
                action
                :http-request="uploadFile"
                :show-file-list="true"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <el-icon v-else class="avatar-uploader-icon">
                  <Plus />
                </el-icon>
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
              <el-button
                type="success"
                round
                class="TAG_right_on"
                @click="Update_Activities(1, 1)"
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
                <el-input v-model="form.summary" clearable />
              </div>
            </div>
            <div style="color: black; font-size: large; font-weight: bold">
              编辑内容
            </div>
            <div class="TAG_main_write">
              <TEditor
                style="height: 400px"
                ref="editor"
                v-model="value"
                @input="content_value_change"
                :value="value"
              />
            </div>
            <el-checkbox
              label="显示图片"
              name="type"
              style="font-weight: bold"
            ></el-checkbox>
            <div style="text-align: left">
              <el-upload
                class="avatar-uploader"
                action
                :http-request="uploadFile"
                :show-file-list="true"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <el-icon v-else class="avatar-uploader-icon">
                  <Plus />
                </el-icon>
              </el-upload>
            </div>
            <div class="TAG_right_buttom">
              <el-button type="success" round class="TAG_right_back"
                >返回</el-button
              >
              <el-button
                type="success"
                round
                class="TAG_right_on"
                @click="Create_Activities()"
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
            <div class="database-1">
              <div v-for="item in count" :key="item" class="database-css">
                <div style="color: #0d52a1; font-size: 30px">{{ item }}</div>
                <el-divider
                  direction="vertical"
                  style="height: 100px; color: #0c57ad"
                />
                <el-avatar
                  shape="square"
                  style="width: 180px; height: 100px"
                  src="https://upload-bbs.mihoyo.com/upload/2022/09/17/a490e27b4545cfd495c85887598bc5d9_4830685343755963999.png"
                >
                </el-avatar>
                <div style="display: grid; justify-items: end">
                  <el-button class="database-button">修改内容</el-button>
                  <el-button class="database-button">修改图片</el-button>
                  <el-button
                    @click="onDelete"
                    class="database-button"
                    style="background-color: #e27172"
                    >删除</el-button
                  >
                </div>
              </div>
              <div class="database-css">
                <el-button
                  @click="add"
                  class="database-button"
                  style="width: 160px"
                  >添加数据库显示</el-button
                >
              </div>
            </div>
          </div>

          <!-- 右：合作数据库-->
          <!-- 右:外文数据库-->

          <div class="TAG_rght_2" v-if="show(62)">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">外文数据库</div>
            </div>
            <el-divider></el-divider>
            <div class="database-1">
              <div v-for="item in count" :key="item" class="database-css">
                <div style="color: #0d52a1; font-size: 30px">{{ item }}</div>
                <el-divider
                  direction="vertical"
                  style="height: 100px; color: #0c57ad"
                />
                <el-avatar
                  shape="square"
                  style="width: 180px; height: 100px"
                  src="https://upload-bbs.mihoyo.com/upload/2022/09/17/a490e27b4545cfd495c85887598bc5d9_4830685343755963999.png"
                >
                </el-avatar>
                <div style="display: grid; justify-items: end">
                  <el-button class="database-button">修改内容</el-button>
                  <el-button class="database-button">修改图片</el-button>
                  <el-button
                    @click="onDelete"
                    class="database-button"
                    style="background-color: #e27172"
                    >删除</el-button
                  >
                </div>
              </div>
              <div class="database-css">
                <el-button
                  @click="add"
                  class="database-button"
                  style="width: 160px"
                  >添加数据库显示</el-button
                >
              </div>
            </div>
          </div>

          <!-- 右：合作数据库-->
          <!-- 右:试用数据库-->
          <div class="TAG_rght_2" v-if="show(63)">
            <div class="TAG_right_admin">
              <div class="TAG_right_admin_left">试用数据库</div>
            </div>
            <el-divider></el-divider>
            <div class="database-1">
              <div v-for="item in count" :key="item" class="database-css">
                <div style="color: #0d52a1; font-size: 30px">{{ item }}</div>
                <el-divider
                  direction="vertical"
                  style="height: 100px; color: #0c57ad"
                />
                <el-avatar
                  shape="square"
                  style="width: 180px; height: 100px"
                  src="https://upload-bbs.mihoyo.com/upload/2022/09/17/a490e27b4545cfd495c85887598bc5d9_4830685343755963999.png"
                >
                </el-avatar>
                <div style="display: grid; justify-items: end">
                  <el-button class="database-button">修改内容</el-button>
                  <el-button class="database-button">修改图片</el-button>
                  <el-button
                    @click="onDelete"
                    class="database-button"
                    style="background-color: #e27172"
                    >删除</el-button
                  >
                </div>
              </div>
              <div class="database-css">
                <el-button
                  @click="add"
                  class="database-button"
                  style="width: 160px"
                  >添加数据库显示</el-button
                >
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

<script setup lang="lass"  >
//引入头部
import AdminTop from '@/components/admin/AdminTop.vue';
//引入底部
import AdminBottom from '@/components/admin/AdminBottom.vue';
//引入富文本
import TEditor from '@/components/TEditor.vue';
//引入element依赖
import { ArrowDown } from '@element-plus/icons-vue';
const axios = require("axios");
import { ref } from 'vue';
export default {
    name:'admin',
    components: {TEditor,AdminTop},
    watch: {
      filterText(val) {
        this.$refs.tree.filter(val);
      }
    },
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
      let value="sadasdasdasd";//富文本
      let form= {
        };
      let update_form={};//更新专用
      var author_title;
      let UserData= [];
      let NoticeData= [];
      let ResourceData=[];
      let ActivitiesData=[];
      let title=[];
      let itemKey=0;
      let menu;
      const options_1= [
        //   {
        //   // id: 1,
        //   value: '1',
        //   label: '图书馆指南',
        //   children: [{
        //     value: '1,1',
        //     label: '馆长寄语',
        //   },
        //   {
        //     value: '1,2',
        //     label: '本馆简介',
        //   },
        //   {
        //     value: '1,3',
        //     label: '馆藏分布',
        //   },
        //   {
        //     value: '1,4',
        //     label: '开放时间',
        //   },
        //   {
        //     value: '1,5',
        //     label: '入馆须知',
        //   },
        //   {
        //     value: '1,6',
        //     label: '组织机构',
        //   },
        //   {
        //     value: '1,7',
        //     label: '联系我们',
        //   },
        //   {
        //     value: '1,8',
        //     label: '馆内服务',
        //   },
        //   ]
        // }, {

        //   value: '2',
        //   label: '资源',
        //   children: [
        //     {
        //     value: '2,1',
        //     label: '数目查询',
        //   },{
        //     value: '2,2',
        //     label: '教学参考',
        //   },
        //   {
        //     value: '2,3',
        //     label: '随书光盘',
        //   },
        //   {
        //     value: '2,4',
        //     label: '学位论文',
        //   },
        //   {
        //     value: '2,5',
        //     label: '报纸导航',
        //   },
        //   {
        //     value: '2,6',
        //     label: '易读获取',
        //   },
            
        //   ]
        // }, {
        //   // id: 3,
        //   value: '3',
        //   label: '服务',
        //   children: [{
        //     value: '3,1',
        //     label: '馆际互借',
        //   },{
        //     value: '3,2',
        //     label: '教学参考',
        //   },
        //   {
        //     value: '3,3',
        //     label: '常见问题',
        //   },
        //   {
        //     value: '3,4',
        //     label: '阅读疗法',
        //   },
        //   {
        //     value: '3,5',
        //     label: '仁爱图苑',
        //   },]
        // },  {
        //   id: 4,
        //   value: '4',
        //   label: '文化推广',
        //   children: [{
        //     id: 12,
        //     label: '二级 1-4',
        //   }]
        // }
        ];
        const options_2= [
        {
          value: '2-1-书目查询',
          label: '书目查询',
          
        }, 
        {
          value: '2-2-教学参考',
          label: '教学参考',
          
        }, 
        {
          value: '2-3-随书光盘',
          label: '随书光盘',
          
        },  
        {
          value: '2-4-学位论文',
          label: '学位论文',
          
        },  
        {
          value: '2-5-图书捐赠',
          label: '图书捐赠',
          
        },
        {
          value: '2-6-报纸导航',
          label: '报纸导航',
          
        }, 
        {
          value: '2-7-易读获取',
          label: '易读获取',
          
        }, 
        {
          value: '2-8-数据库',
          label: '数据库',
          
        }];
        const options_3= [
        {
          value: '3-1-馆际互借',
          label: '馆际互借',
          
        }, 
        {
          value: '3-2-咨询服务',
          label: '咨询服务',
          
        }, 
        {
          value: '3-3-常见问题',
          label: '常见问题',
          
        },  
        {
          value: '3-4-阅读疗法',
          label: '阅读疗法',
          
        },  
        {
          value: '3-5-仁爱图苑',
          label: '仁爱图苑',
          
        }];
      return {
        filterText: '',
        count: 3,
        update_form,
        author_title,
        activeName,current,imageUrl,dialogImageUrl,dialogVisible,value,
        form,value_1:"",
        textarea:"",
        search: '',//搜索
        options_1,
        title_1:"",
        options_2,
        title_2:"",
        options_3,
        title_3:"",
        UserData,
        value,
        User_Form,
        ResourceData,
        itemKey,
        menu
      };
    },
    methods:{
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      },
       handleDragStart(node, ev) {
       },
      handleDragEnter(draggingNode, dropNode, ev) {
      },
       handleDragLeave(draggingNode, dropNode, ev) {
       },
       handleDragOver(draggingNode, dropNode, ev) {
       },
       handleDragEnd(draggingNode, dropNode, dropType, ev) {
       },
      handleDrop(draggingNode, dropNode, dropType, ev) {
      },
      allowDrop(draggingNode, dropNode, type) {
        if (dropNode.data.label === '二级 3-1') {
          return type !== 'inner';
        } else {
          return true;
        }
      },
      allowDrag(draggingNode) {
        return draggingNode.data.label.indexOf('三级 3-2-2') === -1;
      },
      load () {
        this.count += 2
      },
      handleChange(e,i)
      {
        console.log(e);
        console.log(i);
      },
      add(){
       this.count++;
       },
      onDelete() {
        if (this.count> 0) {
           this.count--;
      }
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        console.log(file.blob());
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        else
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        // else 
        // {
        //   // console.log(file.blob());
        //     // let params = new FormData();
        //     // params.append("file", blobInfo.blob());
        //     // let config = {
        //     //   headers: {
        //     //     "Content-Type": "multipart/form-data",
        //     //   },
        //     // };
        //     // axios
        //     //   .post(`api/fileTemp`, params, config)
        //     //   .then((res) => {
        //     //     console.log(res)
        //     //     if (res.data.code == 200) {
        //     //       console.log(res.data)
        //     //       success(res.data.msg); //上传成功，在成功函数里填入图片路径
                  
        //     //     } else {
        //     //       failure("上传失败");
        //     //     }
        //     //   })
        //     //   .catch(() => {
        //     //     failure("上传出错，服务器开小差了呢");
        //     //   });
        // }
      
        return isJPG && isLt2M;
      },
      content_value_change(e)
      {
        this.value=e;
       
      },
      //删除按钮
       delete_total(i,e) {
        
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

          if(i==1) //删除公告
          {
            
            this.Delete_Notice(e)
            this.$message({
              type: 'success',
              message: '删除成功!'
              });
            // location.reload() 
          }
          if(i==2) //删除资源
          {
            this.Delete_Resource(e)
              this.$message({
              type: 'success',
              message: '删除成功!'
              });
          }
          if(i==3) //删除活动
          {
            this.Delete_Activities(e)
             this.$message({
              type: 'success',
              message: '删除成功!'
              });
          }
          // if(i==4) //删除数据库
          // {
          //   this.Delete_Activities(e)
          //    this.$message({
          //     type: 'success',
          //     message: '删除成功!'
          //     });
          // }
          if(i==5) //删除标题栏内容
          {
              console.log(e)
              console.log(this.activeName);
              this.Total_Menu_Delete(e);
            //  this.$message({
            //   type: 'success',
            //   message: '删除成功!'
            //   });
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
        let form={};
        if(i==111||i==23||i==311||i==511||i==23||i==411)
        {
         
        }
        else
        {
          this.form={};
        }
        console.log(this.form)
        console.log(this.value)
        this.current=i;
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      uploadFile(item)
      {
	          //上传文件的需要formdata类型;所以要转
            let FormDatas = new FormData()
    FormDatas.append('file',item.file);
    console.log("123213123:")
    console.log(FormDatas.file)
        this.form.file=item.file;

     
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
           
           this.UserData=res.data.data;
            
          })
          .catch((err) => {
           
          });
      },
      User_Create()
      {
        

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
      clear()
      {
        this.form={};
        this.value=""
      },
      Menu_init()
      {
        axios
        .get("/api" + "/titleOptions/searchAll")
        .then((res) => {
          let data=res.data.data;
          
          let menu_test=[];

          for(let i=0;i<data.length;i++)
          {
            console.log(data[i]);
            console.log(data[i].type);
            console.log(data[i].type.length);
            console.log(i)
            let test={};
            if(data[i].type.length==1)
            {
              test.value=data[i].type;
              test.id=data[i].id;
              test.label=data[i].name;
              test.children=[];
              console.log(test.label);
              menu_test.push(test)

              console.log(menu_test);
            }

            else
            if(data[i].type.length==3)
              {
              test.value=data[i].type;
              test.id=data[i].id;
              test.label=data[i].name;
              test.children=[];
              let j=Number(data[i].type[0])-1;
              let k=Number(data[i].type[2])-1;
              menu_test[j].children.push(test);


              }
              else 
              if(data[i].type.length==5)
              {
                test.value=data[i].type;
                test.id=data[i].id;
                test.label=data[i].name;
                test.children=[];
                let j=Number(data[i].type[0])-1;
                let k=Number(data[i].type[2])-1;
                let n=Number(data[i].type[4])-1;
                menu_test[j].children[k].children.push(test);

              }

            } 
            this.options_1=menu_test;

          
       
        })
        .catch((err) => {
       
        });
      },
      addmenu()
      {
        if(this.menu==undefined||this.menu==""){
          console.log(this.menu);
          return;
        }
        let menu={
          label:this.menu,
          children:[]
        }
        this.options_1.push(menu);
      },
      savemenu()
      {
        let data=[];
        let menu=this.options_1;
        let length=this.options_1.length;
        console.log(this.options_1)
        for(let i=0;i<length;i++)
        {
          let menu_data={
            type:String(i+1),
            name:menu[i].label,
            id:menu[i].id
          }
          data.push(menu_data);
          console.log("childernlength:",menu[i].children.length)
          if(menu[i].children.length)
          {
            for(let j=0;j<menu[i].children.length;j++)
            {
              menu_data={
                type:String(i+1)+","+(j+1),
                name:menu[i].children[j].label,
                id:menu[i].children[j].id
              }
              console.log("j:"+menu_data)
              data.push(menu_data);
              if(menu[i].children[j].children.length)
              {
                for(let k=0;k<menu[i].children[j].children.length;k++)
                {
                  menu_data={
                type:String(i+1)+","+(j+1)+","+(k+1),
                name:menu[i].children[j].children[k].label,
                id:menu[i].children[j].children[k].id
                  }
                  data.push(menu_data);
                }
              }
            }
          }
        }
        console.log(data);
        let token=sessionStorage.getItem("token");
        let params= {
              titleOptionsInfo:data,
              token:token
            };
            console.log(params)
            let config = {
              headers: {
                "Content-Type": "application/json",
              },
            };
            axios
                .post("/api" + "/titleOptions/update", params, config)
                 .then((res) => {
                          if(res.data.code==200)
                          {
                            this.$message({
                                type: 'success',
                                message: '修改成功!'
                                });
                            // this.Total_Menu_init();
                            this.value=""
                            this.form={};
                            setTimeout(() => {
                             this.select(j)
                            }, 1000);
                          }
                          
                          
                    })
                  .catch(() => {
                 
              });


      },


       Total_Menu_Create(menu_number,value)
     {
        var insideId=menu_number.toString()
        var that=this;
         let params= {
              insideId:insideId,
              content:this.value,
              token:sessionStorage.getItem("token")
            };
            let config = {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            };

            
        axios
          .post("/api" + "/title/insert", params, config)
          .then((res) => {
            if(res.data.code==500)
            {
              this.$message({
                type: 'error',
                message: '已含有该标题!'
              });
            }
            else
            {
              this.$message({
                type: 'success',
                message: '添加成功'
              });
            }
            this.$refs.editor.$data.contentValue=""   
          })
          .catch((err) => {
            this.$message({
                type: 'error',
                message: '添加失败'
              });
          });
    },
    Total_Menu_Delete(e)
    {
      var that=this;
         let params= {
              insideId:e.row.insideId,
              token:sessionStorage.getItem("token")
            };
            let config = {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            };
            axios
                .post("/api" + "/title/delete", params, config)
                 .then((res) => {
                  console.log(res)
                  if(res.data.code==500)
                  {
                    this.$message({
                        type: 'error',
                        message: '删除失败!'
                        });
                  }
                  else
                  {
                    
                        if(e.row.insideId[0]=="1")
                        {
                          this.title_1.splice(e.$index,1);
                        }
                        if(e.row.insideId[0]=="2")
                        {
                          this.title_2.splice(e.$index,1);
                        }
                        if(e.row.insideId[0]=="3")
                        {
                          this.title_3.splice(e.$index,1);
                        }

                        this.itemKey = Math.random()
                        this.$message({
                        type: 'success',
                        message: '删除成功!'
                        });
                        
                  }
                  })
                  .catch(() => {
                alert("删除失败");
                 console.log(err);
              });
    },
      Total_Menu_Update(i,e)
      {
        if(i==0)
        {
          console.log(e);
          this.form.insideId=e.row.insideId;
          this.value=e.row.content;
          this.select(23);
        }
        if(i==1)
        {
          let j=0;
          if(this.form.insideId[0]=='1')
            j=22
          if(this.form.insideId[0]=='2')
            j=71
          if(this.form.insideId[0]=='3')
            j=81
          console.log("j:"+j)
          let params= {
              insideId:this.form.insideId,
              content:this.value,
              token:sessionStorage.getItem("token")
            };
            let config = {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            };
            axios
                .post("/api" + "/title/update", params, config)
                 .then((res) => {
                          if(res.data.code==200)
                          {
                            this.$message({
                                type: 'success',
                                message: '修改成功!'
                                });
                            this.Total_Menu_init();
                            this.value=""
                            this.form={};
                            setTimeout(() => {
                             this.select(j)
                            }, 1000);
                          }
                          
                          
                    })
                  .catch(() => {
                 
              });
        }
        
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
        .get("/api" + "/notice/searchAll",
        {
          params:{
              pageSize:10
          }
        })
        .then((res) => {
          console.log("通知公告")
          console.log(res)
          data=res.data.data;
          for( i=0;i<data.length;i++)
          {
            var date = new Date(data[i].gmtCreate);
              let Y = date.getFullYear() + "-";
              let M =
                (date.getMonth() + 1 < 10
                  ? "0" + (date.getMonth() + 1)
                  : date.getMonth() + 1) + "-";
              let D = date.getDate() + " ";
              data[i].gmtCreate = Y + M + D;
          }
          this.NoticeData=data
          console.log("刷新成功")
          console.log(this.NoticeData)
       
        })
        .catch((err) => {
       
        });
      },
     
      Create_Notice()
      {
        let params= {
              title: this.form.title,
              content:this.value,
              author:this.form.name,
              token:sessionStorage.getItem("token")
            };
            let config = {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            };
            axios
                .post("/api" + "/notice/insert", params, config)
                 .then((res) => {
                                 this.$message({
                                type: 'success',
                                message: '添加成功!'
                                });
                                this.$refs.editor.$data.contentValue="";
                                this.form={};
                                this.Notice_init();
                        })
                  .catch(() => {
                alert("添加失败");
              });
      },
      //
      Notice_update(i,e)
      {
        var that=this


        if(i==0)
        {
        
         axios
        .get("/api" + "/notice/search",
        {
          params:{
              id:e.row.id
          }
        }).then((res)=>{
          let data=res.data.data[0];
          this.form.id=data.id;
          this.form.title=data.title;
          this.value=data.content;
          that.select(311)
        }

        );
      
        }
        else if(i==1)
        {
         console.log(this.form.id)
         let params= {
              id:this.form.id,
              title: this.form.title,
              content:this.value,
              author:this.form.name,
              token:sessionStorage.getItem("token")
            };
            let config = {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            };
            axios
                .post("/api" + "/notice/update", params, config)
                 .then((res) => {
                  this.$message({
                                type: 'success',
                                message: '修改成功!'
                                });
                          this.Notice_init();
                          this.value=""
                          
                          this.form={};
                          setTimeout(() => {
                            this.select(31)
                          }, 1000);
                          
                    })
                  .catch(() => {
                 
              });
        }
        
      },
      Delete_Notice(e)
      {
        var that=this;
         let params= {
              id:e.row.id,
              token:sessionStorage.getItem("token")
            };
            let config = {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            };
            axios
                .post("/api" + "/notice/delete", params, config)
                 .then((res) => {
                        this.$message({
                                type: 'success',
                                message: '删除成功!'
                                });
                        this.NoticeData.splice(e.$index,1);
                        this.itemKey = Math.random()
                        })
                  .catch(() => {
                this.$message({
                                type: 'success',
                                message: '删除失败!'
                                });
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
        .get("/api" + "/resource/searchAll",
        {
          params:{
              pageSize:10
          }
        })
        .then((res) => {
          console.log("resource-init")
          console.log(res)
          data=res.data.data;
          for( i=0;i<data.length;i++)
          {
            var date = new Date(data[i].gmtCreate);
              let Y = date.getFullYear() + "-";
              let M =
                (date.getMonth() + 1 < 10
                  ? "0" + (date.getMonth() + 1)
                  : date.getMonth() + 1) + "-";
              let D = date.getDate() + " ";
              data[i].gmtCreate = Y + M + D;
              
            

          }
          this.ResourceData=data
          console.log(this.ResourceData);
        })
        .catch((err) => {
          console.log(err);
        });
      },
      Create_Resource(){
         let params= {
              title: this.form.title,
              content:this.value,
              author:this.form.name,
              token:sessionStorage.getItem("token")
            };
            let config = {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            };
         axios
          .post("/api" + "/resource/insert", params,config)
          .then((res) => {
            this.$message({
                          type: 'success',
                          message: '添加成功!'
                          });
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
              id:e.row.id,
              token:sessionStorage.getItem("token")
            },
          })
          .then((res) => {
            this.$message({
                                type: 'success',
                                message: '删除成功!'
                                });
           this.ResourceData.splice(e.$index,1);
           this.itemKey = Math.random()

      
            //this.Notice_init()

          })
          .catch((err) => {
            console.log(err);
          
            
          });
      },
      
      Resource_update(i,e)
      {
        var that=this
        if(i==0)
        {
          axios
        .get("/api" + "/resource/search",
        {
          params:{
              id:e.row.id
          }
        }).then((res)=>{
          let data=res.data.data[0];
          this.form.id=data.id;
          this.form.title=data.title;
          this.value=data.content;
          that.select(411)
        })

      
        }
        else if(i==1)
        {
          console.log("resource-update++++++")
         let params= {
              id:this.form.id,
              title: this.form.title,
              content:this.value,
              author:this.form.name,
              token:sessionStorage.getItem("token")
            };
            let config = {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            };
            axios
                .post("/api" + "/resource/update", params, config)
                 .then((res) => {
                          console.log(res)
                          this.$message({
                                type: 'success',
                                message: '更新成功!'
                                });
                                this.form={};
                          this.Resource_init()
                          
                          setTimeout(() => {
                            this.select(41)
                          }, 1000);
                          
                    })
                  .catch(() => {
                 
              });
        }



      },
      //<=============================================资源===================================================>
      //<=============================================资源===================================================>
      //<=============================================资源===================================================>
      //<=============================================资源===================================================>
      
      //<=============================================活动报道===================================================>
      //<=============================================活动报道===================================================>
      //<=============================================活动报道===================================================>
      //<=============================================活动报道===================================================>
      
   Activities_init()
      {
        let string1;
        let data;
        let i=0;
         axios
        .get("/api" + "/activity/searchAll",
        {
          params:{
              pageSize:10
          }
        })
        .then((res) => {

          data=res.data.data;
          for( i=0;i<data.length;i++)
          {
            var date = new Date(data[i].gmtCreate);
              let Y = date.getFullYear() + "-";
              let M =
                (date.getMonth() + 1 < 10
                  ? "0" + (date.getMonth() + 1)
                  : date.getMonth() + 1) + "-";
              let D = date.getDate() + " ";
              data[i].gmtCreate = Y + M + D;
            

          }
          this.ActivitiesData=data
          console.log(this.ActivitiesData);
        })
        .catch((err) => {
          console.log(err);
        });
      },
    Create_Activities()
    {
      console.log(this.value);
          let params={
              title: this.form.title,
              content:this.value,
              author:this.form.name,
              fileTmp:this.form.file,
              summary:this.form.summary,
              token:sessionStorage.getItem("token")
            }
        
            let config = {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            };
            axios
                .post("/api" + "/activity/insert", params, config)
                 .then((res) => {
                  console.log(res)
                          if(res.data.code==200)
                          {
                            this.$message({
                          type: 'success',
                          message: '添加成功!'
                          });
                          
                          this.Activities_init();
                          }
                          else 
                          {
                            this.$message({
                          type: 'error',
                          message: '添加失败!'
                          });
                          }
                          this.$refs.editor.$data.contentValue="";
            
                          this.form={}
                          
                          
                          
                    })
                  .catch(() => {
                 
              });
    },

      Delete_Activities(e)
      {
        axios
          .post("/api" + "/activity/delete", null, {
            params: {
              id:e.row.id,
              token:sessionStorage.getItem("token")
            },
          })
          .then((res) => {
            this.$message({
                                type: 'success',
                                message: '删除成功!'
                                });
           this.ActivitiesData.splice(e.$index,1);
          this.itemKey = Math.random()
          })
          .catch((err) => {
            this.$message({
                                type: 'success',
                                message: '删除失败!'
                                });
            console.log(err);
          
            
          });
      },
      Update_Activities(i,e)
      {
        console.log(e)
        var that=this
        if(i==0)
        {
          axios
        .get("/api" + "/activity/search",
        {
          params:{
              id:e.row.id
          }
        }).then((res)=>{
          
          let data=res.data.data[0];
          console.log("data:",data)
          this.form.id=data.id;
          this.form.title=data.title;
          this.form.summary=data.summary;
          this.value=data.content;
          that.select(511)
        })

        }
        else if(i==1)
        {
            let params={
              title: this.form.title,
              content:this.value,
              author:this.form.name,
              fileTmp:this.form.file,
              summary:this.form.summary,
              token:sessionStorage.getItem("token")
            }
        
            let config = {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            };
            axios
                .post("/api" + "/activity/update", params, config)
                 .then((res) => {
                  console.log(res)
                  
                          if(res.data.code==200)
                          {
                            this.$message({
                            type: 'success',
                            message: '修改成功!'
                            });
                            this.Activities_init();
                          }
                          else 
                          {
                            this.$message({
                            type: 'error',
                            message: '修改失败!'
                            });
                          }
                          this.$refs.editor.$data.contentValue="";
                          this.form={}   
                    })
                  .catch(() => {
                 
              });
        }
         
      },















      //<=============================================活动报道===================================================>
      //<=============================================活动报道===================================================>
      //<=============================================活动报道===================================================>
      //<=============================================活动报道===================================================>
      
    },
    mounted:function ()
    {
      this.Menu_init();

      this.Resource_init();
      this.Notice_init();
      this.User_init();
      this.Activities_init();
    },
}


</script>

<style>
.avatar-uploader .el-upload {
  border-radius: 6px;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  cursor: pointer;
  position: relative;
  /* overflow: hidden; */
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


:deep(.el-tree-node__label) {
  font-size: 30px !important;
  margin-left: 50px;
}
:deep(.el-tree__empty-text) {
  color: #000000;
  display: contents;
  font-size: 30px;
}

:deep(.el-tree--highlight-current
    .el-tree-node.is-current
    > .el-tree-node__content) {
  background-color: #8bcdff;
<<<<<<< HEAD
  border-radius: 20px;
}
:deep(.el-tree-node__content){
  height: 42px;
  margin: 10px;
=======
  padding: 10px;
>>>>>>> a3416dd4fd33c9716e444e91ec63e48b7972f5d9
}
</style>