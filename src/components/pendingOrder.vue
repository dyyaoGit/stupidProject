<template>
    <div class="pendingorder">
         <el-card class="box-card padingOrder carditem">
                    <div slot="header" class="header clearfix">
                        <span class="title">待处理订单</span>
                        <el-button style="float: right; padding: 3px 0" type="text">查看全部<i class="iconfont icon-arw-top-copy"></i></el-button>
                    </div>
                    <div v-for="o in 2" :key="o" class="text orderitem clearfix">
                         <div class="orderRight flr clearfix">
                            <span class="fs14">共<span class="time">{{1}}</span>晚</span>
                            <span class= "money fw fs16">RMB {{888}}</span>
                            <div class="btn flr">接受</div>
                        </div>      
                        <div class="orderLeft fll">
                            <span class="fs14 mb5"><span class="time">{{2018}}-{{6}}-{{21}}</span> 至 <span class="time">{{2018}}-{{6}}-{{21}}</span></span>
                            <div class="fs14 fw">豪华大床房</div>
                            <span class="fs14">梁朝伟</span>
                            <span class="time">查看详情</span>
                        </div>
                       
                    </div>
                </el-card>
    </div>
</template>

<script>
    export default {
        name:'pendingOreder'
    }
</script>

<style scoped lang='scss'>
   //order
        .orderitem{
                // width: 45%;
                border: 1px solid #f1f1f1;
                padding: 10px;
                margin-right: 8px;
                display: inline-block;
                 span,strong{
                    display: block;
                }
            }
        .padingOrder{
            line-height: 1.8;
             box-sizing: border-box;       
            .orderLeft{
                margin-right: 10px; 
                 .time{
                    display: inline-block;
                    font-size: 12px;
                    color:#409eff;
                }  
                   
            }
            .orderRight{
                text-align: right;
                line-height: 2;
                span{display: inline-block; }
                .time{
                    font-size: 12px;
                    color:#409eff;
                }
                .money{font-size: 16px; display: block;margin-bottom: 15px;}
            }
            
          
        } 
        .carditem{ margin-bottom: 10px;}
        .title{ padding-left: 6px;border-left:3px solid #75b8fc;}
        .header{font-weight: 700;}
        .btn{
            box-sizing: border-box;
            width: 90px;
            height: 40px;
            text-align: center;
            color:#fff;
            font-size: 12px;
            border-radius: 17.5px;
            background: url('../image/home/btn2.png')no-repeat;
            background-size: 100% 100%;
        }

</style>