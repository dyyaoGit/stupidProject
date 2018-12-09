<template>
    <div class="Header clearfix">
          <div class="right clearfix">
            <div class="avatar fll">
            </div>
            <span class="user fll">五星级大酒店前台小芳</span>
            <div class="menu clearfix">
                <div class="home fll item" @click="gohome">
                    <div class="iconfont icon1"></div>
                    <span>首页</span>
                </div>
                <div class="inform fll item">
                    <div class="iconfont icon2">
                        <div class="message">
                          <div class="num">{{num}}</div>
                        </div>
                    </div>
                    <span>通知</span>
                </div>
                <div class="logout fll item">
                    <div class="iconfont icon3"></div>
                    <span>退出</span>
                </div>
            </div>
        </div>
        <div class="left clearfix">
            <div class="logo fll" @click="gohome">
                <img src="../image/首页-通知-退出/图标切图_03_06.png" alt="logo">
            </div>
            <div class="line fll">
            </div>
            <div class="title1 fll">
                <span class="span1">酒店管理系统</span>
                <span class="span2">HOTEL MANAGEMENT</span>
            </div>
        </div>
      
    </div>
</template>

<script>
let items = Array.from(document.getElementsByClassName('item'))
    export default {
        name:'Header',
        data(){
            return{
                num:'5'
            }
        },
        methods:{
          gohome(){
              this.$router.push('/layout/home')
          }
        }
    }
</script>

<style scoped lang='scss'>
.Header{
    // padding: 10px 0;
    border-bottom: 1px solid #f1f1f1;
    box-sizing: border-box;
    width: 100%;
    height:70px;
    .left{
        width: 300px;
        float: left;
         .logo{
             box-sizing: border-box;
             width:60px;
             height:60px;
             img{
                 margin-top: 12.5px;
                 display: inline-block;
             }
            //  background: url('../image/图标切图_03_06.png')no-repeat;
          }
          .line{
              margin: 16px 0 0 10px;
              border: 1px solid #f1f1f1;
              height: 40px;
              color:#f1f1f1;
          }
          .title1 {
              margin-top: 10px;
              box-sizing: border-box;
              line-height: 1.5;
              margin-left: 15px;
              color:#333;
              width: 160px;
             
          }
          .title1 .span1{
            font-weight: 700;
            font-size: 22px;
            display: block;
            width: 160px;         
          }
           .title1 .span2{
                display: block;
                width: 160px; 
                font-size: 10px;             
              }
        
    }
    .right{
        padding: 12.5px 0px;
        width: 400px;
        float: right;
        .avatar{
            width:45px ;
            height: 45px;
            border-radius: 50% ;
            background: url('../image/0001.jpg')no-repeat;
            background-size: 100% 100%;

        }
        .user{
            margin: 0 20px;
            line-height: 2.8;
            font-size: 15px;
            font-weight: 550;
        }
        .menu{
             .iconfont{
               
                cursor: pointer;
                box-sizing: border-box;
                line-height: 1.2;
                width: 40px;
                height: 40px;
                margin-right: 24px;
                padding:0px 12px;

            }
            span{
                display: block;
                margin-left: -24px;
                font-size: 14px;
                color:#b2b2b2;
                margin-top: 5px;
             }      
            .icon1{
                background: url('../image/首页-通知-退出/首页.png')no-repeat;
                background-size: 100% 100%;
                display: block;
                width: 24px;
                height: 26px;
            }
           
             .icon2{
                position: relative;
                background: url('../image/首页-通知-退出/通知.png')no-repeat;
                background-size: 100% 100%;
                display: block;
                width: 24px;
                height: 26px;
            }
             .icon3{
               background: url('../image/首页-通知-退出/关机.png')no-repeat;
                background-size: 100% 100%;
                display: block;
                width: 24px;
                height: 26px;
            }
             .message{
                position: absolute;
                top: -2px;
                right: 0px;
                background: #f00;
                color:#fff;
                width: 13px;
                height: 13px;
                border-radius: 50%;             
                .num{
                    color:#fff;
                    font-size: 12px;
                    -webkit-transform: scale(0.90);
                }

            }    
        }
       
       
    }
   
}
/deep/ .el-header{
    display: none;
}

</style>