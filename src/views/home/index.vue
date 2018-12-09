<template>
    <div class="home">
        <el-row :gutter="12">
          
            <el-col :span="15">
                <div class="grid-content bg-purple">
                    <div class="left">
                        <!-- 今日汇总 -->
                        <todaySummary/>
                        <!-- 待处理订单 -->
                            <pendingOrder/>
                        <!-- 住客看板 -->                
                        <lodgerKB/>
                        <!-- 审核离店 -->
                        <auditLeave/>
                    </div>  
                </div>
            </el-col>
              <el-col :span="9">
                <div class="grid-content bg-purple">
                     <div class="right">
                        <!-- 房态日历 -->
                        <el-card class="box-card carditem">
                            <div slot="header" class="header"><span class="title">房态日历</span> </div>
                                    <p class="subtitle">* 数字为预订房数量</p>
                            <calendar/>
                        </el-card>
                        <!-- 评价/回复 -->
                        <userComment/>    
                    </div>
                </div>
            </el-col>
        </el-row>
      
        
    </div>
</template>

<script>
import calendar from '@/components/calendar.vue'
import todaySummary from '@/components/todaySummary.vue'
import pendingOrder from '@/components/pendingOrder.vue'
import lodgerKB from '@/components/lodgerKB.vue'
import auditLeave from '@/components/auditLeave.vue'
import userComment from '@/components/userComment.vue'

    export default {
        name:'home',
        components:{
            calendar,
            todaySummary,
            pendingOrder,
            lodgerKB,
            auditLeave,
            userComment
        },
        data(){
            return{
               
            }
        },
        methods:{
           
        },
        created(){
        }

    }
</script>

<style scoped lang='scss'>
.home{
    .right{
        .subtitle{ color:#409eff;margin-bottom: 10px;}      
    }
    .left{
        
    }
}
</style>

<style>
 .el-main{
    text-align: left;
    line-height: 1;
}
.icon-arw-top-copy{font-size: 14px;}
.el-button{
    border-radius: 20px;
    padding: 6px 20px;
    font-size: 12px;
}
  .title{ padding-left: 6px;border-left:3px solid #75b8fc;}
  .header{font-weight: 700;}
</style>
