<template>
    <div class="star">  
        <div :class="{active: score >= 1 }"></div>
        <div :class="{active: score >= 2 }"></div>
        <div :class="{active: score >= 3 }"></div>
        <div :class="{active: score >= 4 }"></div>
        <div :class="{active: score >= 5 }"></div>
        <span v-text="score" class="mark">{{score}}</span>
    </div>
</template>

<script>
    export default {
        props:{
            score:{
                type:Number
            }
        },
        data(){
            return{
                
            }
        },
        created(){
           
        }
        
    }
</script>

<style scoped lang='scss'>
.star{  
        display: inline-block;  
        font-size: 14px;
            height: 20px;
            margin: 5px 0;
            line-height: 20px;
            &:nth-child(2n-1){
                margin-right: 30px;
            }
            span{
                float: left;
                padding-right: 10px;
            }
            div{
                float: left;
                width: 16px;
                height: 16px;
                margin: 2px 4px 0 0;
                background: url('../image/评价管理/star.png') no-repeat;
            }
            .active{
                background: url('../image/评价管理/star1.png') no-repeat;
            }
            .mark{
                font-size: 16px;
                padding-left: 10px;
                color: #518dfd;
            }
}


</style>