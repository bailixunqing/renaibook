<template>
    <el-form-item label="公告标题">
        <el-input v-model="title"></el-input>
    </el-form-item>
    <el-form-item label="公告作者">
        <el-input v-model="name"></el-input>
    </el-form-item>
    <div style="color: black; font-size: large; font-weight: bold">
        编辑内容
    </div>
    <div class="amin_write">
        <TEditor class="teditor" @input="value_change" v-model="value_content"  :value="value_content" />
    </div>
    <div class="buttom">
        <el-button type="success" round class="buttom_back" @click="$emit('selectNoticeBack', 'NoticeBack')">返回</el-button>
        <el-button type="success" round class="buttom_on" @click="Notice_update()">保存并返回</el-button>
    </div>
</template>
<script setup>
import TEditor from '@/components/TEditor.vue'
import { ref,onMounted } from 'vue'
const title = ref('')
const name = ref('')
const id = ref('')


const value_content = ref('')
const value_change=(e)=>{
    value_content.value=e
    console.log(value_content.value)
}
const axios = require("axios")
const props = defineProps({
  //子组件接收父组件传递过来的值
  update_id: Number,
})
onMounted(()=>{
    console.log(props.update_id)
    axios
        .get("/api" + "/notice/search",
                {
                    params: {
                        id: props.update_id
                    }
                }).then((res) => {
                    console.log(res)
                            let data = res.data.data[0];
                            id.value = data.id;
                            title.value= data.title;
                            value_content.value=data.content;
                            console.log(value_content)
                            
                    
                });

})

const Notice_update = () => {
        console.log(value_content.value)
   
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