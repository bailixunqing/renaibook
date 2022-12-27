<template>
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
                    <el-button class="button_on" type="success" round @click="Resource_update(0, scope)">修改</el-button>
                    <el-button class="button_off" type="success" round @click="delete_total(2, scope)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script setup>
let ResourceData = []


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
</script>
<style>
.TAG_right_admin_table {
    margin-top: 20px;
}

.button_off {
    width: 60px;
    background-color: #e27172;
    margin-left: 4px;
    font-size: 15px;
}

.button_on {
    width: 60px;
}
</style>