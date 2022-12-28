<template>
    <el-form-item label="标题">
        <el-input v-model="title"></el-input>
    </el-form-item>
    <el-form-item label="作者">
        <el-input v-model="name"></el-input>
    </el-form-item>
    <div style="color: black; font-size: large; font-weight: bold">
        编辑内容
    </div>
    <div class="amin_write">
        <TEditor class="teditoy" @input="value_change" v-model="value" :value="value" />
    </div>
    <div class="buttom">
        <el-button type="success" round class="buttom_back" @click="$emit('selectNoticeBack', 'NoticeBack')">返回</el-button>
        <el-button type="success" round class="buttom_on" @click="Notice_update(1, 1)">保存并返回</el-button>
    </div>
</template>
<script setup>
import TEditor from '@/components/TEditor.vue'
import { ref } from 'vue'
const title = ref('')
const name = ref('')
const value = ref('')
const value_change = ref('')
const axios = require("axios")
const Notice_update = (i, e) => {
    let that = this
    if (i == 0) {
        axios
            .get("/api" + "/notice/search",
                {
                    params: {
                        id: e.row.id
                    }
                }).then((res) => {
                    //         let data = res.data.data[0];
                    //         form['id'] = data.id;
                    //         form['title'] = data.title;
                    //         value = data.content;
                    //         that.select(311)
                });
    }
    else if (i == 1) {
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
    }
    return
}
</script>
<style>
.teditor {
    height: 400px
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
</style>