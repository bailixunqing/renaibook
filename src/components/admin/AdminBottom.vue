<template>
  <div class="TAG_buttom">
    <div class="TAG_buttom_size">
      <div class="TAG_buttom_left">
        <div class="TAG_buttom_img">
          <img class="school" src="../../assets/images/school.svg" />
          <img class="ArtFont" src="../../assets/images/Artfont.svg" />
        </div>

        <div class="TAG_link">
          <a class="TAG_link" href="http://www.tjrac.edu.cn/">天津仁爱学院</a>
          <a class="TAG_link" href="http://www.scal.edu.cn/">全国高校图工委</a>
          <a class="TAG_link" href="https://lib.nankai.edu.cn/tjtgw"
            >天津高校图工委</a
          >
        </div>
        
        <div class="TAG_link"><a class="TAG_link" href="http://www.calis.edu.cn/">CALIS</a>
        
        <a class="TAG_link" href="http://www.cashl.edu.cn/">CASHL</a>
        
        </div>
        <div class="TAG_link">
          <a class="TAG_link">相关链接</a></div>
        <div class="TAG_renai">
          <a class="TAG_link">版权所有@2015 天津仁爱学院 津ICP备19010746号</a>
        </div>
      </div>
      <div class="TAG_buttom_right">
        <div class="QRcode">
          <img src="@/assets/images/QR_code.jpg" alt="" />
        </div>
        <div class="QRcode">
          <img src="@/assets/images/QR_code.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>


<style>
.TAG_buttom {
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
.QRcode img {
  width: 100%;
}
</style>