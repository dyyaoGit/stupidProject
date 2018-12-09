<template>
    <div>
        <el-card class="box-card today carditem">
            <div slot="header" class="header clearfix">
                <span class="title">今日汇总</span>
                <el-button style="float: right; padding: 3px 0" type="text">查看全部<i class="iconfont icon-arw-top-copy"></i></el-button>
            </div>
            <div v-for="(item,index) in today" :key="index" class="text todayitem">
                {{item.type}}
                <br/>
                <div class="num">{{item.num}}</div>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name:'todaySummary',
        data(){
            return{
                today:[{
                    type:'未处理',
                    num:2
                },{
                    type:'待审核',
                    num:13
                },{
                    type:'今日入住',
                    num:12
                },{
                    type:'今日新订',
                    num:22
                }]
            }
        }

    }
</script>

<style scoped lang='scss'>
     //today
        .today{
            box-sizing: border-box;
            .todayitem{
                overflow: hidden;
                width: 22.5%;
                font-size: 14px;
                padding:5px; 
                line-height: 2;
                border-radius: 4px;
                margin-right: 16px;
                background: url('../image/home/box.png')no-repeat;
                box-sizing: border-box;
                background-size: 100% 100%;
                display: inline-block;
            }
            .num{
                font-size: 16px;
                margin-right: 5px;
                font-weight: 550;
                float: right;
            }
        }
 .carditem{ margin-bottom: 10px;}
.title{ padding-left: 6px; border-left:3px solid #75b8fc;}
.header{font-weight: 700;}
</style>
<style>
.el-card__header{
    padding: 12px 20px;
}
.el-main{
    padding: 12px;
}
</style>
