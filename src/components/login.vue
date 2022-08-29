<template>
  <div class="body">
    <img class="renai" src="../assets/images/reaai.svg" alt="" />
    <div class="all">
      <div class="middle">
        <div class="left">
          <img
            src="../assets/images/group_font.svg"
            style="position: absolute; margin-top: 79px; padding-left: 79px"
          />
          <img
            src="../assets/images/seek.svg"
            style="position: absolute; margin-top: 305px; padding-left: 76px"
          />
        </div>
        <div class="right">
          <div class="first">
            <p class="top">使用 Renai ID 登录图书馆系统</p>
            <p class="bottom">Registration Renai ID</p>
          </div>
          <div class="second">
            <div class="top">
              <span>账号<b>|</b></span>

              <input placeholder="输入您的学工号" v-model="account" />
            </div>
            <div class="bottom">
              <span>密码<b>|</b></span>
              <input
                placeholder="输入您的密码"
                type="password"
                v-model="password"
              />
            </div>
          </div>
          <div class="finally">
            <div>
              <form>
                <input type="checkbox" id="cbox" value="" checked="checked" />
                <label for="cbox">自动登录</label>
              </form>
              <span>忘记密码</span>
            </div>
            <button @click="submitForm()">登录</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-if="show">
    <div class="code-back">
      <input type="button" id="checkCode" @click="createCode()" />
      <input type="text" id="input1" />
      <a href="#" style="margin: 0 auto" @click="createCode()">看不清楚</a>
      <input id="Button1" @click="validate()" type="button" value="确定" />
    </div>
  </div>
</template>
<script>
export default {
  name: "login_1",
  data() {
    var show = false;
    var code;
    var account = "";
    var password = "";
    return { code, account, password, show}
  },
  methods: {
    submitForm(e) {
      console.log(this.account, this.password);
      this.show = !this.show;
      console.log(this.show);
    },
    createCode() {
      this.code = new Array();
      var codeLength = 4; //验证码的长度
      var checkCode = document.getElementById("checkCode");
      checkCode.value = "";
      var selectChar = new Array(
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "J",
        "K",
        "L",
        "M",
        "N",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      );
      for (var i = 0; i < codeLength; i++) {
        var charIndex = Math.floor(Math.random() * 32);
        this.code += selectChar[charIndex];
      }
      if (this.code.length != codeLength) {
        this.createCode();
      }
      checkCode.value = this.code;
    },
    validate() {
      var inputCode = document.getElementById("input1").value.toUpperCase();
      if (inputCode.length <= 0) {
        alert("请输入验证码！");
        return false;
      } else if (inputCode != this.code) {
        alert("验证码输入错误！");
        createCode();
        return false;
      } else {
        alert("成功！");
        return true;
      }
    },
  },
  mounted: function () {
    this.createCode();
  },
};
</script>
<style  scoped>
.body {
  background: url("../assets/images/index2.png");
  background-size: 100% 100%;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1920px;
  background-size: cover;
  background-position: center;
}
.renai {
  position: absolute;
  top: 131px;
  left: 754px;
}
.all {
  width: 100%;
}
.middle {
  margin-left: 360px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1200px;
  height: 483px;
  background: rgba(255, 255, 255, 0.6);
  mix-blend-mode: normal;
  backdrop-filter: blur(21px);
  border-radius: 26px;
}

.middle .left {
  flex: 1;

  height: 100%;
}

.middle .right {
  width: 492px;
  height: 483px;
  background: #ffffff;
  border-radius: 0px 26px 26px 0px;
}

.middle .right .first {
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.middle .right .first .top {
  position: absolute;
  width: 337px;
  height: 35px;
  margin: 0 auto;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 34px;
  color: #0d52a1;
}

.middle .right .first .bottom {
  position: absolute;
  top: 89px;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  color: rgba(13, 82, 161, 0.18);
}

.middle .right .second {
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.middle .right .second .top,
.middle .right .second .bottom {
  width: 417px;
  height: 54px;
  background: #ffffff;
  box-shadow: 0px 3px 26px -1px rgba(0, 0, 0, 0.12);
  border-radius: 26px;
  margin-bottom: 40px;
  display: flex;
}

.middle .right .second .top span,
.middle .right .second .bottom span {
  width: 80px;
  text-align: center;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 54px;
  color: #666666;
}

.middle .right .second .top span b,
.middle .right .second .bottom span b {
  color: #c4c4c4;
  font-weight: 400;
  font-size: 20px;
  position: absolute;
  right: 380px;
}

.middle .right .second .top input,
.middle .right .second .bottom input {
  position: absolute;
  height: 54px;
  border: 0px;

  width: 420px;
  flex-grow: 1;

  font-size: inherit;
  padding-left: 100px;
  outline: 0;
  background: 0 0;
  box-sizing: border-box;
  padding-right: 30px;
}

.middle .right .second .bottom {
  width: 417px;
  height: 54px;
  background: #ffffff;
  box-shadow: 0px 3px 26px -1px rgba(0, 0, 0, 0.12);
  border-radius: 26px;
}
.middle .right .finally form {
  cursor: pointer;
  position: absolute;
  top: 330px;
  right: 370px;
}
.middle .right .finally form:hover {
  color: #787878;
}
.middle .right .finally span {
  cursor: pointer;
  position: absolute;
  top: 330px;
  right: 50px;
}
.middle .right .finally span:hover {
  color: #787878;
}
.middle .right .finally button {
  width: 171px;
  height: 43px;
  background: #0d52a1;
  box-shadow: 0px 3px 26px -1px rgba(13, 82, 161, 0.44);
  border-radius: 16px;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
  position: absolute;
  right: 165px;
}
.middle .right .finally button:hover {
  box-shadow: 0px 3px 26px -1px rgba(13, 82, 161, 0.44);
  background-color: #00689c;
}
.code_tag {
  position: absolute;

  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.6);
  mix-blend-mode: normal;
  backdrop-filter: blur(5px);
  box-shadow: 0px 10px 26px -6px rgba(0, 0, 0, 0.12);
}
.code-back {
  justify-content: center;

  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
  width: 400px;
  height: 200px;
  position: absolute;
  top: 400px;
  left: 754px;
  background: #ffffff;
  border-radius: 26px;
}
#input1 {
  height: 50px;
  font-size: 40px;
  margin: 0 auto;
  width: 90px;
  border-radius: 10px;
}
#checkCode {
  font-family: Arial, 宋体;
  font-style: italic;
  color: green;
  border: 0;
  width: 200px;
  height: 50px;
  font-size: 40px;
  letter-spacing: 3px;
  font-weight: bolder;
  margin: 0 auto;
}
#Button1 {
  width: 171px;
  height: 43px;
  background: #0d52a1;
  box-shadow: 0px 3px 26px -1px rgba(13, 82, 161, 0.44);
  border-radius: 16px;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
  margin: 0 auto;
}
</style>