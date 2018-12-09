<template>
    <div>
         <el-card class="box-card auditLeave carditem">
            <div slot="header" class="header clearfix">
                <span class="title">审核离店</span>
                <el-button style="float: right; padding: 3px 0" type="text">查看全部<i class="iconfont icon-arw-top-copy"></i></el-button>
            </div>
            <div v-for="o in 3" :key="o" class="text orderitem">      
                <div class="auditLeave-top ">
                    <div class="first clearfix">
                            <span class="flr fs14">共<span class="time">{{1}}</span>晚</span>
                        <span class="name fs14 fw">梁朝伟</span>
                    </div>
                    <span class="summoney fs12 mb5">{{1500000}}</span>
                    <div class="fs14 fw">豪华大床房</div>
                </div>
                <div class="auditLeave-btm">
                    <el-button type="primary">已入住</el-button>
                    <el-button>续住</el-button>                         
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name:'auditLeave',
           data(){
            return{
               
            }
        },
        methods:{
           
        },
    }
</script>

<style scoped lang='scss'>
.orderitem{  
    width: 184px;
    border: 1px solid #f1f1f1;
    padding: 10px;
    margin-right: 8px;
    display: inline-block;
        span,strong{
        display: block;
    }
}

//auditleave
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
    .name{font-weight: 700;}
    .time{
        display: inline-block;
        font-size: 12px;
        color:#409eff;
    } 
    .summoney{
        font-size: 12px;
    }
}
.carditem { margin-bottom: 10px;}
.title    { padding-left: 6px;border-left:3px solid #75b8fc;}
.header   {font-weight: 700;}
</style>