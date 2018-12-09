<template>
    <div class="container">
        <div class="box clearfix" v-if="toLogin">
            <img src="../../image/login/组 17.png" class="title">
            <div class="login-box">            
                <div class="box-top clearfix">
                    <div class="left fll clearfix">
                        <h2>后台登录</h2>
                        
                        <p class="fs14 fssmall small">SYSTEM BACKSTAGE LOGIN</p>                           
                    </div>
                    <div class="right  clearfix">
                        <span class="fsl6 fw dsbl flr">成为代理商</span>
                        <br>
                        <span class="fs14 dsbl flr ">服务员热线  010-84762811</span>
                    </div>    
                </div>
                <div class="box-btm" :model="formData">
                    <div class="userId item clearfix">
                        <img class="rentou imgitem" src="../../image/login/人 拷贝 2.png" alt="#">
                        <el-input type="text" class="input" name="userId" placeholder="请输入手机号" v-model='formData.account'></el-input>
                    </div>
                    <div class="password item clearfix">
                        <img class="suo imgitem" src="../../image/login/密码 拷贝.png" alt="#">
                        <el-input type="password" class="input" name="password" placeholder="请输入密码" v-model='formData.password'></el-input>
                    </div>
                    <div class="isRemember">
                            <el-checkbox label="记住密码" name="type"></el-checkbox>
                            <span @click="handleForget" class="flr fs14 blue forget">忘记密码</span>
                    </div>
                </div>
                <div class="sub">
                    <div class="btn" @click="handleGo">立即登录</div>
                    <p class="noID cb5 fs14">没有账号？<span @click="handleRegister" class="blue register fs14" >立即注册</span></p>
                </div>
            </div>    
        </div> 
        <div class="box" v-else-if="toForget">
            <img src="../../image/login/组 17.png" class="title">
            <div class="login-box">            
                <div class="box-top clearfix">
                    <div class="left fll clearfix">
                        <h2>忘记密码</h2>
                        <p class="fs14 fssmall small">SYSTEM BACKSTAGE LOGIN</p>                           
                    </div>
                    <div class="right  clearfix">
                        <span class="fsl6 fw dsbl flr">成为代理商</span>
                        <br>
                        <span class="fs14 dsbl flr ">服务员热线  010-84762811</span>
                    </div>    
                </div>
                <div class="box-btm" :model="formData">
                    <div class="userId item clearfix">
                        <img class="rentou imgitem" src="../../image/login/手机(1).png" alt="#">
                        <el-input type="text" class="input" name="userId" placeholder="请输入联系电话" :value='formData.phone'></el-input>
                    </div>
                    <div class="password item clearfix">
                        <img class="suo imgitem" src="../../image/login/密码 拷贝.png" alt="#">
                        <el-input type="password" class="input" name="password" placeholder="请输入密码" :value='formData.password'></el-input>
                    </div>
                     <div class="againpsw item clearfix">
                        <img class="suo imgitem" src="../../image/login/密码 拷贝.png" alt="#">
                        <el-input type="password" class="input" name="againpsw" placeholder="请再次输入密码" :value='formData.againpsw'></el-input>
                    </div>
                    <div class="code item clearfix">
                        <span class="flr blue fs14 getRegister" @click="getAuthCode">获取验证码</span>
                        <el-input type="authCode" class="lastinput" name="authCode" placeholder="请输入验证码"></el-input>
                    </div>
                </div>
                <div class="sub clearfix">
                    <div class="btn flr" @click="handleChange">确认修改</div>
                    <div class="yesAndLogin clearfix" @click="handleLogin">
                        <img class="img fll" src="../../image/login/返回.png" alt="#">
                        <span class="yes fs16 fll blue fw">登录</span>
                    </div>
                    
                </div>
            </div>    
        </div>
        
    </div>
</template>

<script>
export default {
  name: "login",
  data(){
    return{
        toForget:false,
        toLogin:true,
        isRemember:false,
        formData:{
            account:'',
            password:'',
            againpsw:'',
            phone:'',
        },
        isLoading:false ,
       
    }
  },
  methods:{
      getAuthCode(){
        //   this.$axios.get('')
      },
      handleForget(){      
          this.toForget=true,
          this.toLogin=false
      },
      handleChange(){
        //   this.$axios.post('')
      },
      handleRegister(){
          this.$router.push('/register')
      },
      handleLogin(){
          this.toForget=false,
          this.toLogin=true
      },
      handleGo(){
          this.isLoading = true
          if(!this.formData.account||!this.formData.password){
              this.$message.error('用户名或密码不能为空')
          }else{
              this.$axios.post('/zftds/erp/user/login',this.formData).then(res => {
              console.log(res)
              if(res.reason == 1){
                  this.$message.success('登录成功，正在跳转...')
                  setTimeout( () =>{
                      this.$router.push(`/layout/home`)
                  },500)
              }else if(res.reason == 2){
                this.$message.success('密码错误，请重新输入密码')
              }else{
                 this.$message.error('用户信息不存在')
              }
          })
          }
        
      },
    //    valiLogin(){
    //     this.$refs["form"].validate((valid) => {
    //             if (valid) {
    //                 this.handleLogin()
    //             } else {
    //                 console.log(valid);
    //             }
    //         });
    //     }
  },
 
};
</script>

<style scoped lang='scss'>
.container {
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  z-index: 1;
  background: url('../../image/login/登录-忘记密码-背景图-1.png')no-repeat;
  background-size: 100% 100%;
    
  .box { 
    height: 520px;  
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 60%;
   
     .title {
        margin-left: 46%;
        width: 50%;
        height: 80px;
  }
  .login-box{
    background: #fff;
    width: 360px;
    height: 440px;
    // border: 1px solid #f1f1f1;
    border-radius: 6px;
    .box-top{
        padding: 10px 15px;
        color:#fff;
        border-top-right-radius:6px;
        border-top-left-radius:6px;
        background: url('../../image/login/登录-忘记密码-背景图.png')no-repeat;
        background-size: 100% 100%;
    }
    .small{ margin-left: -46px;}
    
    .right{line-height: 1.5;  margin-top: 30px;}
    .box-btm{
        box-sizing: border-box;
        padding:20px 20px;
        .item{
            padding: 4px ;
            line-height: 2;
            border-bottom: 1px solid #f1f1f1;
            margin-bottom: 10px;
             .input{
                    float: left;
                    box-sizing: border-box;
                    font-size: 14px;
                    width:70%;
                    line-height: 1.5;
                    border: none;
                    outline: none;
                    -webkit-appearance: none;
                    background: #fff;
                }
        }
         .imgitem{  
                float: left;
                padding: 5px 10px 0; 
                display: inline-block; 
                width: 18px;
                height: 22px
                }
        .isRemember{  margin: 20px 0 50px 20px; }
        .forget{ margin-top: 5px; }
    }
     .sub{
            width: 100%;
            height: 55px;
            text-align: center;
            box-sizing: border-box;
            margin-top: 10px;
            .btn{
                box-sizing: border-box;
                cursor: pointer; 
                margin: 0 auto;
                color:#fff;
                width: 200px;
                height: 55px;
                font-weight: 700px;
                line-height: 38px;
                background: url('../../image/login/按钮.png')no-repeat;
                text-align: center;
                background-size: 100% 100%;
            }
        }
        .register{ cursor: pointer;}
        .forget:hover{ cursor: pointer; }
        .lastinput {  padding-left: 40px; width: 120px; }
        .getRegister{ margin-top: 10px; cursor: pointer }
  }
 
  }
  .login-in{
      margin: 10px 0 ;
  }
  .yesAndLogin{
       padding-left: 15px;
       box-sizing:border-box; 
       cursor: pointer;
       width: 110px;
       line-height: 50px;
       height: 50px;
        .img{
            width: 50px;   
            display: inline-block;
        }
        .yes{padding-left:5px; line-height: 35px; }
  }
}
/deep/ .el-input__inner{ border:none;outline: none; display: inline-block;width:100% }
</style>