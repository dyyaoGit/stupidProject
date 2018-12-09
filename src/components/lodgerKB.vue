<template>
    <div class="lodgerkanban">
         <el-card class="box-card auditLeave carditem">
            <div slot="header" class="header clearfix">
                <span class="title">住客看板</span>
                <el-button style="float: right; padding: 3px 0" type="text">查看全部<i class="iconfont icon-arw-top-copy"></i></el-button>
            </div>
             <div class="progress clearfix" >
                        <div class="inline arriveHotelTime"> 
                            <span class="arriveHotelTimeSpan fs14">5月12日</span> 
                            <br/>
                            <span class="arriveHotelTimeTitleSpan fs14">预计到店时间</span>
                        </div>
                         <div class="inline timeItem"> 
                            <hr size=1 class="dottedLine">     
                            <div  v-for="i in 2" :key="i" class="inline inlineTimeItem"  >
                                <div v-if="i == 1" class="beginTime">
                                    <span class="inline inlineTimeItemSpan fs14">09:30</span> 
                                    <br/>
                                    <img class="circle">
                                </div>
                                <div v-if="i == 2" class="endTime">
                                    <span class="inline inlineTimeItemSpan fs14">12:10</span>
                                    <br/>
                                    <img class="circle"> 
                                </div>
                            </div>
                        </div>
                        <div class="inline rightTitlt"> 
                            <span class="arriveHotelTimeSpan fs14">仅显示</span> 
                            <br/>
                            <span class="arriveHotelTimeSpan fs14">三条信息</span>
                        </div>
                    </div>
            <div v-for="o in 3" :key="o" class="text orderitem">      
                <div class="auditLeave-top ">
                    <div class="first clearfix">
                            <span class="flr fs14">共 <span class="time">{{1}}</span> 晚</span>
                        <span class="name fs14 fw">梁朝伟</span>
                    </div>
                    <span class="summoney fs12 mb5">{{1500000}}</span>
                    <div class="fw fs14" >豪华大床房</div>
                </div>
                <div class="auditLeave-btm">
                    <el-button type="primary">已入住</el-button>
                    <el-button>未入住</el-button>                         
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name:'lodgerKB'
    }
</script>

<style scoped lang='scss'>
 .orderitem{
                width:28.5%;
                border: 1px solid #f1f1f1;
                padding: 10px;
                margin-right: 8px;
                display: inline-block;
                 span,strong{
                    display: block;
                }
            }
              .auditLeave{
            .auditLeave-top{
                margin-bottom: 10px;
                 line-height: 1.5;
            }
            .auditLeave-btm{
                span,strong{
                    display: block;
                }
            }
            .time{
                display: inline-block;
                font-size: 12px;
                color:#409eff;
            } 
            .summoney{
                font-size: 12px;
            }
        }

         
.carditem{ margin-bottom: 10px;}
.title{ padding-left: 6px;border-left:3px solid #75b8fc;}
.header{font-weight: 700;}

.progress{
    margin-bottom: 10px;
    .inline{
        float:left;
    }
    .arriveHotelTime{
     .arriveHotelTimeSpan{
       color:#409eff;
       font-size: 15px;
     }
     .arriveHotelTimeTitleSpan{
       font-size: 15px;
     }
    }
    .rightTitlt{
        float: right;
        color:#409eff;
        font-size: 15px;
    }
    .timeItem{
        width: 75%;
        height: 40px; 
    }
    .dottedLine {
     color: #409eff;
     border-style: dashed;
     margin-left: 20px;
     margin-top: 25px;
    }
    .inlineTimeItem{
        position: relative;
    }
    .inlineTimeItemSpan{
        color: #409eff;
    }
    .circle {
        background-color: #409eff;
        height: 15px;
        width: 15px;
        border-radius: 7.5px;
        margin-top: 10px;
        margin-left: 12px;
    }
    .beginTime{
        position: absolute;
        top: -33px;
    }
    .endTime{
        position: absolute;
        right: -420px;
        top: -33px;
    }
}

</style>