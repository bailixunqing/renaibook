<template>
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
        <TEditor style="height: 400px" ref="editor" v-model="value" @input="content_value_change" :value="value" />
    </div>
    <div class="TAG_right_buttom">
        <el-button type="success" round class="TAG_right_back">返回</el-button>
        <el-button type="success" round class="TAG_right_on" @click="Create_Resource()">保存并返回</el-button>
    </div>
</template>
<script setup>
const form={
    'title':'',
    'name':''
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
</script>
<style>

</style>