<template>
    <div class="box">
        <div class="title1">
            <div class="right">xx-xx 至 xx-xx</div>
            七日化房间管理
        </div>
        <div class="content" @click="handlebox">
            <!-- 头部 -->
            <ul class="title-ul clearfix">
                <li class="first-li">
                    <div class="line"></div>
                    <div class="day">日期</div>
                    <div class="home">房型</div>
                </li>
                <li>
                    <div class="num">16</div>
                    <div class="week">星期一</div>
                </li>
                <li>
                    <div class="num">16</div>
                    <div class="week">星期二</div>
                </li>
                <li>
                    <div class="num">16</div>
                    <div class="week">星期三</div>
                </li>
                <li>
                    <div class="num">16</div>
                    <div class="week">星期四</div>
                </li>
                <li>
                    <div class="num">16</div>
                    <div class="week">星期五</div>
                </li>
                <li>
                    <div class="num">16</div>
                    <div class="week">星期六</div>
                </li>
                <li>
                    <div class="num">16</div>
                    <div class="week">星期日</div>
                </li>
            </ul>
            <!-- 身体  -->
            <ul class="body-ul clearfix">
                <li class="first-child">豪华大床房</li>
                <li v-for="item in testData.bigBed" v-text="item.num">1</li>
            </ul>
            <ul class="body-ul body-ul2 clearfix">
                <li class="first-child">双标签</li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li class="no-order">暂不可订</li>
                <li>7</li>
            </ul>
            <ul class="body-ul clearfix">
                <li class="first-child long-item">豪华海景大床房</li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
            </ul>
            <ul class="body-ul body-ul2 clearfix">
                <li class="first-child">豪华家庭房</li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
            </ul>
            <ul class="body-ul clearfix">
                <li class="first-child">天字一号房</li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li id="full">满</li>
            </ul>
        </div>

    </div>
</template>

<script>
    export default {
        name:'',
        data(){
            return{
                centerDialogVisible: false,
                isAdvance:true,
                haveValue:true,
                userData:{
                    time:'2018-10-20',
                    houseType:'豪华大床房'
                },
                testData: {
                  time: 1544350369753,
                  bigBed: [
                    {
                      num: 2,
                      isPre: true,
                      type: 1
                    },
                    {
                      num: 3,
                      isPre: true,
                      type: 1
                    },
                    {
                      num: 6,
                      isPre: true,
                      type: 1
                    },{
                      num: 9,
                      isPre: true,
                      type: 1
                    },
                    {
                      num: 1,
                      isPre: true,
                      type: 1
                    },
                    {
                      num: 0,
                      isPre: true,
                      type: 1
                    },
                    {
                      num: 10,
                      isPre: true,
                      type: 1
                    }
                  ],
                  double: [
                    {
                      num: 1,
                      isPre: true,
                      type: 2
                    },
                    {
                      num: 2,
                      isPre: true,
                      type: 2
                    },
                    {
                      num: 3,
                      isPre: true,
                      type: 2
                    },{
                      num: 4,
                      isPre: true,
                      type: 2
                    },
                    {
                      num: 6,
                      isPre: true,
                      type: 2
                    },
                    {
                      num: 0,
                      isPre: true,
                      type: 2
                    },
                    {
                      num: 12,
                      isPre: true,
                      type: 2
                    }
                  ]
                }
            }
        },
        methods:{
            handlebox(){
                 this.centerDialogVisible=true
            },
            handleClose() {
                this.centerDialogVisible=false
            },
            handleBack(){
                this.centerDialogVisible=false
            }
        }
    }
</script>

<style scoped lang='scss'>
// 大盒子
.box{
    // margin: 10px 0 0 20px;
    width: 360px; // 宽度具体调整
    // background: #f1f1f1;
}
// 头部标题
.title1{
    height: 42px;
    line-height: 42px;
    padding: 0 12px;
    color: #fff;
    font-size: 16px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    background: url('../image/home/title.png') no-repeat;
    background-size: 100% 100%;
    .right{
        float: right;
        font-size: 14px;
    }
}
// 内容区
.content{
    border: 1px solid #caddfe;
    border-top: none;
}
// 内容的标题
.title-ul{
    li{
        float: left;
        width: 38.251px;
        height: 42px;
    }
    li:nth-child(2n){
        background: #e1ecff;
    }
    li:nth-child(2n-1){
        background: #eff5ff;
    }
    .first-li{
        width: 90.22px;
        position: relative;
        color: #95a7fe;
        font-size: 14px;
        .line{
            position: absolute;
            top: 21px;
            left: -5px;
            height: 1px;
            width: 100px;
            background: #caddfe;
            -webkit-transform: rotateZ(35deg);
            transform: rotateZ(24deg);
        }
        .day{
            position: absolute;
            right: 16px;
            top: 4px;
        }
        .home{
            position: absolute;
            left: 16px;
            bottom: 4px;
        }
    }
    .num{
        height: 44px;
        line-height: 44px;
        text-align: center;
        font-weight: 700;
        font-size: 14px;
    }
    .week{
        font-size: 12px;
        text-align: center;
    }
}
// 内容的身体 奇数行
.body-ul {
    height: 42px;
    line-height: 42px;
    text-align: center;
    color: #5c5c5c;
    .first-child{
        width: 90.22px;
        text-align: left;
        padding: 0 10px;
        box-sizing: border-box;
        font-size: 14px;
    }
    .long-item{
        padding: 6px 12px 0 12px !important;
        line-height: 1.2 !important;
    }
    li{
        float: left;
        width: 38.25px;
        height: 42px;
    }
    li:nth-child(2n){
        background: #eff5ff;
    }
    li:nth-child(2n-1){
        background: #fff;
    }
}

// 偶数行
.body-ul2{
    li:nth-child(2n){
        background: #e1ecff;
    }
    li:nth-child(2n-1){
        background: #eff5ff;
    }
}
// 满房
.full{
    background: #fd7e92;
    color: #fff;
    font-size: 12px;
}
// 暂不可预订
.no-order{
    background: #b7b8ff;
    color: #fff;
    line-height: 1.2 !important;
    padding: 6px 4px 0 !important;
    box-sizing: border-box;
    font-size: 12px;
}
.btns{
        display: inline-block;
        box-sizing: border-box;
        cursor: pointer;
        margin: 0 auto;
        color:#fff;
        width:40%;
        height: 54px;
        line-height: 40px;
        border-radius: 20px;
        font-weight: 550px;
        text-align: center;
        background: url('../image/home/btn2.png')no-repeat;
        background-size: 100% 100%;
}
.contents{
    height: 100px;
    margin-top: 20px;
    padding: 0 30px 0px 30px;
    font-weight: 550;
    line-height: 2;
    color:#333;
}
.leftGoBack{
    width: 90px;
    height: 50px;
    .imgleft{
        cursor: pointer;
        display: inline-block;
        width: 50px;
        height: 50px;
        background: url('../image/home/leftArrow.png')no-repeat;
        background-size: 100% 100%;
    }
}
.carditem{ margin-bottom: 10px;}
.title{ padding-left: 6px;border-left:3px solid #75b8fc;}
.header{font-weight: 700;}
.mr20{margin-right: 20px;}
.mt5{margin-top: 5px;}
.mt15{margin-top: 15px;}
.mb15{margin-bottom: 15px;}
.lh50{ line-height: 50px; }
</style>
<style  lang='scss'>
.el-card{
    margin-bottom: 10px;
}
.el-dialog--center{
    color:#2b2b2b;
   margin-top: 30vh !important;
   background: url('../image/bigbox.png')no-repeat center;
   background-size: 100% 101.5%;
   background-position: 0 -5px;
   .el-dialog__body{ height: 90px;  padding:40px 0 0 0; }
   .el-dialog__footer{ height: 90px; }
   .el-icon-close{  display: none;}
}

</style>
