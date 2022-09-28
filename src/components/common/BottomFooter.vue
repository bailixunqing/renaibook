<template>
  <div class="footer_2">
    <img class="school" src="../../assets/images/school.svg" />

    <img class="ArtFont_1" src="../../assets/images/Artfont.svg" />
    <h1 class="link1">相关链接</h1>
    <h1 class="link2">相关链接</h1>
    <h1 class="link3">相关链接</h1>
    <h1 class="footer">版权所有@2015 天津仁爱学院 津ICP备19010746号</h1>
    <div class="QRcode_1"></div>
    <div class="QRcode_2"></div>
  </div>
</template>

<script>
export default {
  name: "BottomFooter",
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
}

.footer_2 {
 
  background: #0c57ad;
  width: 100%;
  height: 400px;
}
.school {
  position: absolute;
  width: 277px;
  height: 203px;
  left: -57px;
}
.ArtFont_1 {
  position: absolute;
  width: 395px;
  height: 53px;
  left: 763px;
}
.footer {
  position: absolute;
  width: 379px;
  height: 22px;
  left: 360px;
  top: 340px;

  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;

  color: #ffffff;
}
.QRcode_1 {
  position: absolute;
  width: 122px;
  height: 122px;
  left: 1247px;
  top: 203px;

  background: #ffffff;
  /* 基础投影 */

  box-shadow: 0px 10px 26px -6px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
}
.QRcode_2 {
  position: absolute;
  width: 122px;
  height: 122px;
  left: 1438px;
  top: 203px;

  background: #ffffff;
  /* 基础投影 */

  box-shadow: 0px 10px 26px -6px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
}
.link1 {
  position: absolute;
  width: 64px;
  height: 22px;
  left: 361px;
  top: 212px;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;

  color: #ffffff;
}
.link2 {
  position: absolute;
  width: 64px;
  height: 22px;
  left: 472px;
  top: 212px;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;

  color: #ffffff;
}
.link3 {
  position: absolute;
  width: 64px;
  height: 22px;
  left: 587px;
  top: 212px;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;

  color: #ffffff;
}
</style>