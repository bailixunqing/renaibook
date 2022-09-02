<template>
  <slot >
    <div class="head">
      <div class="icon">
        <img src="../../assets/images/icon.svg" />
      </div>
      <div class="nav">
        <ul class="navlist">
          <li @click="$router.push({ name: 'home' })" class="btli">
            <a href="">首页</a>
          </li>
          <li class="btli" @click="$router.push({ name: 'behind' })">
            <a href="">图书馆指南</a>
            <ul class="droplist">
              <li  @click="$router.push({ name: 'behind' })"><a href="">馆长寄语</a></li>
              <li  @click="$router.push({ name: 'behind' })"><a href="">本馆介绍</a></li>
              <li  @click="$router.push({ name: 'behind' })"><a href="">馆藏分布</a></li>
              <li  @click="$router.push({ name: 'behind' })"><a href="">开放时间</a></li>
              <li  @click="$router.push({ name: 'behind' })"><a href="">入馆须知</a></li>
              <li  @click="$router.push({ name: 'behind' })"><a href="">组织机构</a></li>
            </ul>
          </li>
          <li class="btli"><a href="#">资源</a></li>
          <li class="btli"><a href="#">服务</a></li>
        </ul>
      </div>
    </div>
  </slot>
</template>

<script>
export default {
  name: "DropMenu"
}
</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
}


.background img {
  width: 1920px;
  object-fit: cover;
  width: 100%;
  height: 100%;
  display: inline-block;
  border: none;
}
.head {
  /* position: absolute; */
  width: 1860px;
  height: 100px;
  margin: 50px 30px 0px 30px;

  /* top:50px;
  left:30px; */
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0px 4px 61px 17px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(61px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 30px;
}
.icon {
  position: absolute;
  width: 270px;
  height: 50px;
  margin: 15px 0 0 100px;
}

.nav {
  position: absolute;
  width: 920px;
  height: 100px;
  margin-left: 930px;
  margin-top: 20px;
  z-index: 10;
}

.btli {
  float: left;
  width: 170px;
  z-index: -1;
}
.navlist a {
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 60px;
  text-align: center;
  color: #00478b;
  display: block;
}
.navlist a:hover {
  background: #e7e7e7;
  /* 大块投影 */
  background: rgba(255, 255, 255, 1);
}

.droplist {
  background: rgba(255, 255, 255, 1);
  display: none;
  z-index: -1;
}
/* //////////////////////////// */
.btli:hover .droplist {
  display: block;
  z-index: -1;
}

.ArtFont img {
  margin-top: 125px;
  margin-left: 811px;
  z-index: -1;
}


</style>