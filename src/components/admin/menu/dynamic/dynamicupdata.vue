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
        <TEditor style="height: 400px" ref="editor" v-model="value" :value="value" @input="content_value_change" />
    </div>
    <div class="TAG_right_buttom">
        <el-button type="success" round class="TAG_right_back" @click="select(41)">返回</el-button>
        <el-button type="success" round class="TAG_right_on" @click="Resource_update(1, 1)">保存并返回</el-button>
    </div>
</template>
<script setup>
import TEditor from '@/components/TEditor.vue'


const Resource_update=()=>{
  
}
const select=()=>{

}
</script>
<style>
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
.TAG_right_buttom {
  margin-top: 2px;
  margin-right: 27px;
  text-align: right;
}
.TAG_main_write {
  margin-top: 26px;
  margin-bottom: 26px;
}
</style>