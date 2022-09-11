<template>
  <div class="TAG_buttom">
    <div class="TAG_buttom_size">
      <div class="TAG_buttom_left">
        <div class="TAG_buttom_img">
          <img class="school" src="../../assets/images/school.svg" />
          <img class="ArtFont" src="../../assets/images/Artfont.svg" />
        </div>
        <div class="TAG_link">相关链接</div>
        <div class="TAG_link">相关链接</div>
        <div class="TAG_link">相关链接</div>
        <div class="TAG_renai">
          版权所有@2015 天津仁爱学院 津ICP备19010746号
        </div>
      </div>
      <div class="TAG_buttom_right">
        <div class="QRcode"></div>
        <div class="QRcode"></div>
      </div>
    </div>
  </div>
</template>


<style>
.TAG_buttom {
  position: absolute;
  width: 100%;
  height: 235px;
  bottom: 0px;
  background: #0c57ad;
}

.TAG_buttom_size {
  width: 1200px;
  margin: 0 auto;
}

.TAG_buttom_left {
  float: left;
}

.school {
  position: absolute;
  left: -57px;
}

.ArtFont {
  width: 325px;
  margin: 11px;
}

.TAG_link {
  color: #ffffff;
  margin: 15px;
}

.TAG_renai {
  color: #ffffff;
  margin: 15px;
}

.TAG_buttom_right {
  float: right;
}

.QRcode {
  width: 122px;
  height: 122px;
  background: #ffffff;
  box-shadow: 0px 10px 26px -6px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  margin: 50px;
  float: right;
}
</style>