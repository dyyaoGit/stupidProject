<template>
  <div class="register">
    <div class="box">
      <img src="../../image/login/组 17.png" class="title">
      <div class="login-box">
        <div class="box-top clearfix">
          <div class="left fll clearfix">
            <h2>注册账号</h2>
            <p class="fs14 fssmall small">SYSTEM BACKSTAGE LOGIN</p>
          </div>
          <div class="right clearfix">
            <span class="fsl6 fw dsbl flr">成为代理商</span>
            <br>
            <span class="fs14 dsbl flr">服务员热线 010-84762811</span>
          </div>
        </div>
        <div class="box-btm clearfix" :model="formData">
          <div class="middle">
            <div class="middle-left fll">
              <div class="userId item clearfix">
                <img class="rentou imgitem" src="../../image/login/人 拷贝 2.png" alt="#">
                <el-input
                  type="text"
                  class="input"
                  name="userId"
                  placeholder="请输入名称"
                  v-model="formData.userName"
                ></el-input>
              </div>
              <div class="password item clearfix">
                <img class="suo imgitem" src="../../image/login/密码 拷贝 2.png" alt="#">
                <el-input
                  type="password"
                  class="input"
                  name="password"
                  @blur="verify"
                  placeholder="请输入密码"
                  v-model="formData.password"
                ></el-input>
              </div>
              <div class="againpsw item clearfix">
                <img class="suo imgitem" src="../../image/login/密码 拷贝 2.png" alt="#">
                <el-input
                  type="password"
                  class="input"
                  name="againpsw"
                  placeholder="请再次输入密码"
                  v-model="formData.againpsw"
                ></el-input>
              </div>
              <div class="againpsw item clearfix">
                <img class="suo imgitem" src="../../image/login/行业.png" alt="#">
                <el-select v-model="formData.industry" placeholder="选择所在行业">
                  <el-option
                    class="input"
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
              <div class="item clearfix">
                <img class="suo imgitem" src="../../image/login/编号.png" alt="#">
                <el-input
                  type="text"
                  class="input"
                  name="serial"
                  placeholder="请输入申请编码(选填)"
                  v-model="formData.applicationcode"
                ></el-input>
              </div>
              <div class="item clearfix">
                <img class="suo imgitem" src="../../image/login/手机(1).png" alt="#">
                <el-input
                  type="text"
                  @blur="phoneVerify"
                  class="input"
                  name="Phone"
                  placeholder="请输入手机号码"
                  v-model="formData.phone"
                ></el-input>
              </div>
              <div class="code item clearfix">
                <span class="flr blue fs14 getRegister" @click="handleGetCode">获取验证码</span>
                <el-input
                  type="authCode"
                  class="input lastinput"
                  name="authCode"
                  placeholder="请输入验证码"
                  v-model="formData.usercode"
                ></el-input>
              </div>
              <div class="sub">
                <div class="btn" @click="handleRegister">立即注册</div>
                <span class="yes fw cb5 fs14">已有账号，
                  <span @click="handleLogin" class="blue fw fs14">去登录</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "register",
  data() {
    return {
      formData: {
        againpsw: "",
        usercode: "",
        userName: "",
        phone: "17335468823",
        password: "",
        industry: "",
        applicationcode: "",
        refusercode: ""
      },
      phoneData:{
          phone:''
      },
      yanZhen: {
        pwdIsOK: false,
        phoneIsOK: false
      },
      options: [
        {
          value: "智付科技管理员1号",
          label: "智付科技管理员1号"
        },
        {
          value: "智付科技管理员2号",
          label: "智付科技管理员2号"
        },
        {
          value: "智付科技管理员3号",
          label: "智付科技管理员3号"
        },
        {
          value: "智付科技管理员4号",
          label: "智付科技管理员4号"
        }
      ]
    };
  },
  methods: {
    verify() {
      var pswVerify = /^[a-zA-Z0-9]{6,}$/;
      if (pswVerify.test(this.formData.password)) {
        this.yanZhen.pwdIsOK = true;
        console.log("密码验证通过");
      } else {
        this.$message.error("密码不能包含非法字符，且至少6位");
      }
    },
    phoneVerify() {
      var phoneVerify = /^1[3-9]\d{9}$/;
      if (phoneVerify.test(this.formData.phone)) {
        this.yanZhen.phoneIsOK = true;
        console.log("手机号通过");
      } else {
        this.$message.error("手机号格式不正确");
      }
    },
    handleGetCode() {
      if(this.yanZhen.phoneIsOK) {
        this.phoneData.phone = this.formData.phone
        // let phone = "phone="+this.formData.phone
        if (this.formData.phone){
            this.$axios.post('/zftds/erp/codeController/findCheckCode', this.phoneData)
            .then(res => {
                console.log(res)
              if(!res.result){
                   this.$message.error('手机号已注册 或者不可用')
              }else{
                    //    console.log(res); 
                    //   this.formData.refusercode = res.result.telCode
              }
            });
        }else{
            console.log("手机号为空")
        }
      } else {
        this.$message.error('请输入正确的手机号')
      }
    },
    handleLogin() {
      this.$router.push("/");
    },
    handleRegister() {
      if (!this.yanZhen.pwdIsOK) {
        this.$message.error("密码格式不正确");
      } else if (this.formData.againpsw != this.formData.password) {
        this.$message.error("两次输入密码不一致");
      } else if (!this.yanZhen.phoneIsOK) {
        this.$message.error("手机号码格式不正确");
      } else if (!this.formData.usercode) {
        this.$message.error("请输入验证码");
      } else {
         this.$axios.post('/zftds/erp/user/insertUser', this.formData).then(res => {
            console.log('注册接口',res);
            if (res.reason == 4) {
                this.$message.error("验证码错误！");
            } else if (res.reason == 3) {
                this.$message.error("手机号已注册！");
            } else if (res.reason == 2) {
                this.$message.error("注册失败！");
            } else if (res.reason == 1) {
                this.$message.success("注册成功！正在跳转...");
                setTimeout(() => {
                this.$router.push("/");
                }, 500);
            } else {
                console.log(res);
                console.log("未知错误");
            }
        });
      }
    }
  }
};
</script>

<style scoped lang='scss'>
.register {
  position: relative;
  overflow-y: scroll;
  min-height: 100vh;
  z-index: 1;
  background: url("../../image/login/注册-背景图.png") no-repeat;
  background-size: 100% 100%;
}

.box {
  width: 472px;
  height: 740px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
  .title {
    margin-left: 50%;
    width: 50%;
    height: 70px;
    margin-top: 70px;
  }
  .login-box {
    background: #fff;
    height: 600px;
    border-radius: 6px;
    .box-top {
      box-sizing: border-box;
      height: 100px;
      padding: 25px 15px;
      color: #fff;
      border-top-right-radius: 6px;
      border-top-left-radius: 6px;
      background: url("../../image/login/注册-头.png") no-repeat;
      background-size: 100% 100%;
    }
    .small {
      margin-left: -46px;
    }
    .right {
      line-height: 1.5;
    }
    .box-btm {
      padding: 10px 70px;
      .item {
        border-bottom: 1px solid #f1f1f1;
        margin-bottom: 10px;
        .input {
          float: left;
          box-sizing: border-box;
          font-size: 14px;
          width: 70%;
          line-height: 1.5;
          border: none;
          outline: none;
          -webkit-appearance: none;
          background: #fff;
        }
      }
      .imgitem {
        float: left;
        padding: 5px 10px 0;
        display: inline-block;
        width: 18px;
        height: 22px;
      }
      .isRemember {
        margin: 20px 0 50px 20px;
      }
      .forget {
        margin-top: 5px;
      }
    }
    .sub {
      width: 100%;
      height: 55px;
      text-align: center;
      box-sizing: border-box;
      margin-top: 30px;
      .btn {
        box-sizing: border-box;
        cursor: pointer;
        margin: 0 auto;
        color: #fff;
        width: 200px;
        height: 55px;
        line-height: 38px;
        background: url("../../image/login/按钮.png") no-repeat;
        background-size: 100% 100%;
      }
    }
    .noID {
      font-size: 16px;
      color: #b5b5b5;
    }
    .register {
      font-size: 16px;
      color: #6aabfd;
    }
    .forget:hover {
      cursor: pointer;
    }
    .lastinput {
      padding-left: 40px;
      width: 100px;
    }
    .getRegister {
      margin-top: 10px;
      cursor: pointer;
    }
  }
}
.login-in {
  margin: 10px 0;
}

.yes {
  padding-left: 5px;
  cursor: pointer;
}

.middle-left {
  width: 100%;
  box-sizing: border-box;
  padding: 10px 40px 10px 0;

  /deep/ .el-select {
    width: 84%;
  }
  /deep/ .el-select .el-input__inner {
    padding-left: 14px;
    font-size: 14px;
    color: rgb(117, 117, 117);
    outline: none;
    border: none;
  }
  /deep/ .el-icon-arrow-up {
    color: #6aabfd;
  }
}
/deep/ .el-input__inner {
  border: none;
  outline: none;
  display: inline-block;
  width: 100%;
}
</style>