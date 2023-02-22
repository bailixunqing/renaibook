<template>
  <el-form-item label="动态标题">
    <el-input v-model="title"></el-input>
  </el-form-item>
  <el-form-item label="动态作者">
    <el-input v-model="name"></el-input>
  </el-form-item>
  <div style="color: black; font-size: large; font-weight: bold">
    编辑内容
  </div>
  <div class="amin_write">
    <TEditor style="height: 400px" ref="editor" v-model="value" :value="value" @input="valueChange" />
  </div>
  <div class="buttom">
    <el-button type="success" round class="buttom_back" @click="() => chooseBack()">返回</el-button>
    <el-button type="success" round class="buttom_on" @click="Resource_update(1, 1)">保存并返回</el-button>
  </div>
</template>
<script setup>
import TEditor from '@/components/TEditor.vue'
import { ref } from 'vue'
const emits = defineEmits(["select"]);
const chooseBack = () => {
  emits("select", "DynamicManage");
};
const title = ref('')
const name = ref('')
const value = ref('')
const valueChange = ref('')
const Resource_update = () => {
  return
}
</script>
<style>
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

.buttom {
  margin-top: 2px;
  margin-right: 27px;
  text-align: right;
}

.amin_write {
  margin-top: 26px;
  margin-bottom: 26px;
}
</style>