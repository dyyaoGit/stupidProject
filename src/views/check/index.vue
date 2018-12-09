<template>
    <div class="check">
        <div class="top">
          <el-card class="box-card carditem clearfix">
            <div slot="header" class="header clearfix"><span class="title">入住房间及订单</span> </div>
                <el-row :gutter="20">
                    <el-col :span="16">
                        <div class="grid-content bg-purple">
                             <div class="left ">
                                <el-form :model='formData' label-width="140px" label-position='left'>
                                    <el-form-item  label="房型选择" prop="houseType" >
                                        <el-select class="w300" v-model="formData.houseType" placeholder="请选择房型">
                                            <el-option label="豪华大床房" value="0"></el-option>
                                            <el-option label="双标签" value="1"></el-option>
                                            <el-option label="豪华海景大床房" value="2"></el-option>
                                            <el-option label="豪华家庭房" value="3"></el-option>
                                            <el-option label="天字一号房" value="4"></el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="入住日期-离店日期" >
                                        <el-col :span="10">
                                            <el-form-item prop="date1" >
                                                <el-date-picker type="date"   placeholder="请选择 年 - 月 - 日" v-model="formData.checkTime" style="width: 100%;"></el-date-picker>
                                            </el-form-item>
                                        </el-col>
                                        <el-col class="line tac" :span="2">-</el-col>
                                        <el-col :span="10">
                                            <el-form-item prop="date1">
                                                <el-date-picker type="date"  placeholder="请选择 年 - 月 - 日" v-model="formData.leaveTime" style="width: 100%;"></el-date-picker>
                                            </el-form-item>
                                        </el-col>
                                    </el-form-item>
                                    <el-form-item label="房间编号" prop="houseId" >
                                        <el-input class="w300" v-model="formData.houseId"></el-input>
                                    </el-form-item>
                                    <el-form-item label="支付方式" prop="payType" class="payType">
                                        <label :class="{ active: checkPay == 1}">
                                            <input :value="1" type="radio" v-model="checkPay" class="radio-input" name="pay">
                                            <div class="dui"></div>
                                        </label>
                                        <label :class="{ active: checkPay == 2}">
                                            <input :value="2" type="radio" v-model="checkPay" class="radio-input" name="pay">
                                            <div class="dui"></div>
                                        </label>
                                        <label :class="{ active: checkPay == 3}">
                                            <input :value="3" type="radio" v-model="checkPay" class="radio-input" name="pay">
                                            <div class="dui"></div>
                                        </label>
                                        <label :class="{ active: checkPay == 4}">
                                            <input :value="4" type="radio" v-model="checkPay" class="radio-input" name="pay">
                                            <div class="dui"></div>
                                        </label>
                                    </el-form-item>
                                </el-form>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple">
                              <div class="right  clearfix">
                                <div class="right-data " :model="moneyData">
                                    <div class="item">房价<span class="span data">RMB {{moneyData.price}} /晚</span></div>
                                    <div class="item">时间<span  class="span data">{{moneyData.long}}/晚</span></div>
                                    <div class="item">押金 <span class="span data">RMB {{moneyData.earnest}}</span></div>
                                    <div class="lastItem">总金额<span class="span lastData">RMB {{moneyData.total}}/晚</span></div>
                                    <div class="btnss fs14" @click="handleCheck">入住</div>
                                    <el-dialog
                                        :visible.sync="centerDialogVisible"
                                        width="30%"
                                        center>
                                    <div class="content" v-if="isSuccess">
                                        <p class="fw">{{userData.username}}</p>
                                        <p>已成功入住{{userData.houseType}} <span class="blue">{{userData.houseId}}</span> 室</p>
                                    </div>
                                    <div class="content" v-else>
                                        <p class="blue fs16 mb15 fw">入住失败</p>
                                        <p>{{userData.houseType}} <span class="blue">{{userData.houseId}}</span> 室,已被网上预订</p>
                                    </div>
                                        <div slot="footer" class="dialog-footer">
                                            <div class="btn1"  @click="centerDialogVisible = false">确 定</div>
                                        </div>
                                    </el-dialog>
                                </div>
                            </div>
                        </div>
                    </el-col>
                </el-row>


            </el-card>
        </div>
        <div class="btm">
            <el-row :gutter="20" >
                <el-col :span="12" v-for="(item, index) in arr" style="margin-bottom: 15px" :key="index">
                    <div class="grid-content bg-purple">
                         <el-card class="btm-left box-card carditem clearfix">
                            <div slot="header" class="header"><span class="title">入住人0{{index + 1}}</span> </div>
                            <el-form :model='userData' label-width="100px" label-position='left'>
                                <el-form-item label="姓名" prop="username"  >
                                    <el-input   placeholder='请输入姓名' v-model="item.username"></el-input>
                                </el-form-item>
                                <el-form-item label="身份证号" prop="IDcard" >
                                    <el-input placeholder='请输入身份证号' v-model="item.idCard"></el-input>
                                </el-form-item>
                                <el-form-item label="联系电话" prop="phone" >
                                    <el-input placeholder='请输入联系电话' v-model="item.phone"></el-input>
                                </el-form-item>
                            </el-form>
                        </el-card>
                    </div>
                </el-col>
                <el-col :span="12" @click.native="handleAdduser">
                    <div class="grid-content bg-purple-light">
                        <el-card class="btm-right box-card clearfix " >
                            <div class="icon">
                                <i class="iconfont icon-jiahao1"></i>
                                <span class="add">添加入住人</span>
                            </div>
                        </el-card>
                    </div>
                </el-col>
            </el-row>



        </div>
        <div class="box" v-if="Yes">
            <div class="box-inner">
                <div class="face">
                    <span>{{username}}</span>
                    <span>已成功入住{{houseType}} {{201}}室</span>
                    <div class="btn" @click="handleOk">确定</div>
                </div>
                <div class="back">

                </div>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        name:'Check',
        data(){
            return{
                centerDialogVisible: false,
                isSuccess:false,
                Yes:false,
                isOk:true,
                formData:{
                    houseType:'',
                    check:'',
                    leaveTime:'',
                    houseId:'',
                    payType:'1',
                },
                moneyData:{
                    price:888,
                    long:5,
                    earnest:88,
                    total:4528
                },
                userData:{
                    username:'王小明',
                    houseId:'110',
                    houseType:'豪华大床房',
                    IDcard:'',
                    phone:''
                },
                checkPay:2,
                arr: [
                  {
                    username: '',
                    houseId: '',
                    houseType: '',
                    idCard: '',
                    phone: ''
                  }
                ]
            }
        },
        methods:{
            handlePayToWX(){
                console.log('微信');
            },
            handlePayToZFB(){
                console.log('支付宝');
            },
            handlePayToOnline(){
                console.log('在线');
            },
            handlePayToMoney(){
                console.log('现金支付');
            },
            handleAdduser(){
              console.log('胡然然');
              this.arr.push({
                  username: '',
                  houseId: '',
                  houseType: '',
                  idCard: '',
                  phone: ''
                })
            },
            handleCheck(){
               this.centerDialogVisible=true
            },
            handleOk(){
                this.isOk = false;
            },
            handleClose() {
              this.centerDialogVisible=false
            }


        }
    }
</script>

<style scoped lang='scss'>

.top{
    .payType{
        label{
            box-sizing: border-box;
            display: inline-block;
            width: 92px;
            height: 56px;
            margin-right: 15px;
            border: 1px solid transparent;
            &:nth-of-type(1) {
                background: url('../../image/办理入住/微信支付.png')no-repeat #f1f1f1 center;
                background-size: 75%;

            }
            &:nth-of-type(2) {
                background: url('../../image/办理入住/支付宝.png')no-repeat #f1f1f1 center;
                background-size: 75%;
            }
            &:nth-of-type(3) {
                background: url('../../image/办理入住/银联支付.png')no-repeat #f1f1f1 center;
                background-size: 75%;
            }
            &:nth-of-type(4) {
                background: url('../../image/办理入住/现金支付.png')no-repeat #f1f1f1 center;
                background-size: 75%;
            }
        }
        .active{
            position: relative;
            border: 1px solid #518dfd ;
        }
        .active .dui{
            position: absolute;
            top: 0;
            right: 0;
            width: 14px;
            height: 14px;
            // background: #518dfd;
            background: url('../../image/办理入住/对.png')no-repeat #518dfd center;
            background-size: 85%;
        }
        input{
           display: none
        }
    }
    .icon-duigou2{
        font-size: 14px;
        position: absolute;
        top: 0;
        color: #409eff;
        right: 0;
    }
    .check{
        position: relative;
        .carditem{
            position: absolute;
            top: -20px;
            left: -20px;
            right:-20px;
        }
    }
    .left{
    }
    .right{
        box-sizing: border-box;
        padding: 30px 20px 20px 50px;
        // border-left: 1px virtual #f1f1f1;
        border-left: 1px solid #f1f1f1;
        .right-data{
            .span{
                float: right;
            }
            .item{
                font-size: 14px;
                font-weight: 550;
                margin-bottom: 15px;
            }
            .data{
                color:#409eff;
            }
            .lastItem{
                font-size: 14px;
                font-weight: 700;
                 margin-bottom: 50px;
            }
        .lastData{
                font-size: 16px;
                color:#409eff;
                font-weight: 900;
        }

        }
    }
    .btnss{
        box-sizing: border-box;
        cursor: pointer;
        margin: 0 auto;
        color:#fff;
        width:60%;
        margin-top: 20px;
        height: 54px;
        line-height: 40px;
        font-weight: 550px;
        background: url('../../image/home/btn1.png')no-repeat center;
        background-size: 100% 100%;
        text-align: center;
    }
    .btn1{
        font-size: 14px;
        box-sizing: border-box;
        cursor: pointer;
        margin: 0 auto;
        color:#fff;
        width:50%;
        margin-top: 20px;
        height: 54px;
        line-height: 40px;
        font-weight: 550px;
        background: url('../../image/home/btn1.png')no-repeat center;
        background-size: 100% 100%;
        text-align: center;
    }

}
.btm{
    margin-top: 10px;
    .btm-left{
        padding: 10px;
    }
     .btm-right{
        border: 1px dashed #518dfd;
        box-sizing: border-box;
        position: relative;
        height: 300px;
        .icon{
            width: 100%;
            position: absolute;
            top: 38%;
        }
        .icon-jiahao1{
            margin-left: 45%;
            font-size: 50px;
            color:#518dfd;
        }
        .add{
           font-size: 14px;
            margin-top: 10px;
            display: block;
            color: #518dfd;
            text-align: center;
        }
    }
}

.mb15{ margin-bottom: 15px; }
.title{ padding-left: 6px;border-left:3px solid #75b8fc;}
.header{font-weight: 700;}
.content{
    margin-top: 20px;
    text-align: center;
    line-height: 2;
    color:#333;
}
/deep/ .el-form-item__label{
    font-weight: 700
}
</style>
<style lang='scss'>
.el-main{
    text-align: left !important ;
    line-height: 1;
}
.el-select__caret{
    color: #409eff;
}
.el-input__inner { padding: 20px; }
.el-dialog--center{
    color:#2b2b2b;
   margin-top: 30vh !important;
   width: 35%;
   background: url('../../image/bigbox.png')no-repeat center;
   background-size: 100% 101.5%;
   background-position: 0 -5px;
   .el-dialog__body{
       height: 60px;
       padding:20px 0 10px 0;
   }
   .el-dialog__footer{
       height: 100px;
   }
   .el-icon-close{
       display: none;
   }
}

</style>


