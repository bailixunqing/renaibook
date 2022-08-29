<template>
  <slot >
    <div class="main">
      <el-affix >
        <div class="left">
          <el-col :span="24" >
            <div class="grid-content ep-bg-purple-dark">
              <div class="span_font1">服务中心<a class="span_font2">service</a> </div>
            </div>

            <el-menu
                default-active="1"
                default-openeds="1"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                active-text-color="#00478B"
                text-color="#666666"

            >

              <el-sub-menu index="1" >
                <template #title>
                  <el-icon><location /></el-icon>
                  <span >借阅服务</span>
                </template>
                <div style="margin-left: 30px">
                  <el-menu-item-group>
                    <el-menu-item index="1-1">证卡管理</el-menu-item>
                    <el-menu-item index="1-2">空间服务</el-menu-item>
                  </el-menu-item-group>
                </div>
              </el-sub-menu>
              <hr class="line" />

            </el-menu>
          </el-col>
        </div>
      </el-affix>
      <div class="right"></div>
    </div>
  </slot>
</template>

<script>
export default {
  name: "BehindMenu"
}
</script>

<style scoped>

.grid-content {
  border-radius: 25px;
  min-height: 55px;
  background-color: #0D52A1;
}
.line {
  border: none;
  width: 80%;
  margin-left: 30px;
  height: 3px;

  background: #eaeaea;
}

.span_font1{
  color: #ffffff;
  /*font: PingFang SC;*/
  font-weight: 900;
  font-size: 20px;
  line-height: 28px;
  font-style: normal;
  padding-left: 30px;
  padding-top: 3%;
}
.span_font2{
  font-size: 32px;
  color: rgba(255, 255, 255, 0.11);
  margin-left: 50px;

}

</style>