<template>
  <div class="TAG_top">
    <div class="TAG_a" @click="$router.push({ name: 'home' })">
      天津仁爱学院图书馆首页
    </div>
    <div class="head">
      <img src="../../assets/images/reaai.svg" />
      <el-dropdown>
        <span class="el-dropdown-link">
          欢迎超级用户
          <el-icon class="el-icon--right">
            <arrow-down style="color: white" />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="select(999)"> 修改密码</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <div class="TAG_top_img">
      <img src="../../assets/images/setting.svg" />
    </div>
  </div>
</template>



<script>
export default {
        name: "Son",
        methods:{
            select(i){
                this.$emit("usershow",i);
            }
        }
    }
</script>


<style>
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

.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}

.el-dropdown {
  color: rgb(255, 255, 255) !important;
  padding-top: 25px !important;
  padding-right: 233px !important;
  float: right !important;
  font-weight: bold !important;
  font-size: 18px !important;
}

.TAG_top_img {
  z-index: -1;
  float: right;
}
</style>
