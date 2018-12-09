<template>
    <div>
        <el-card class="box-card carditem">
            <div slot="header" class="header">
                <span class="title ">点评/回答</span>
            </div>
            <p class="subtitle fw fs14">最新点评</p>
            <div  v-for="(l,index) in 2" class="text commentitem" :key='index' :model="commentData">
                <div class="comment-title clearfix">
                    <span class="flr fs12">{{commentData.commentTime}}</span>
                    <h4>{{commentData.username}}</h4> 
                   <Star :score='commentData.score' />
                    <p class="comment">{{commentData.comment}}</p>
                    <div class="adminAsk" v-if="commentData.adminAsk">
                        <span class="blue fw fs14">回复</span>
                        <p class="fs14">{{commentData.adminAsk}}</p>
                    </div>
                    <div class="box-Reply"  ref="huifubox"  v-else-if="isShow"> 
                        <p>{{commentData.adminAsk}}</p>                        
                        <textarea :value='commentData.adminAsk' name="adminAsk" class="reply" id="reply" cols="42" rows="5">
                        </textarea>
                        <el-button @click="handleYes" type='primary'>提交</el-button>
                        <el-button @click="handleNo(index)">取消</el-button>  
                    </div>
                    <el-button  v-else class="flr" type='primary' @click="handleReply(index)">
                        回复
                    </el-button>                   
                </div>                   
            </div>
        </el-card>
    </div>
</template>

<script>
import Star from '@/components/star.vue'
let commentitems = document.getElementsByClassName('commentitem')

    export default {
        name:'home',
        components:{
            Star
        },
        data(){
            return{
                haveValue:true,
                isShow:false,
                commentData:{
                    username:"用户0729",
                    starnum:3,
                    commentTime:'2018-01-19',
                    comment:'店家超好非常满意的一次入住，感谢！',
                    adminAsk:'',
                    score:3.6   
                }
            }
        },
        methods:{
            handleReply(index){
                console.log(index)
                this.isShow = true
                this.$nextTick(() => {
                    // console.log(this.$refs.huifubox[index])
                    this.$refs.huifubox[index].style.display = 'block'
                })
                // this.isShow = true
            },
            handleYes(){
                
            },
            handleNo(index){
                this.isShow = false
                this.$refs.huifubox[index].style.display = 'none'
            }
        },
        created(){
        }

    }
</script>

<style scoped lang='scss'>
        .subtitle{
            color:#409eff;
            margin-bottom: 10px;
        }
        .item{
            width: 20px;
            height: 20px;
            background: url('../image/home/star1.png')no-repeat;
            margin:10px 5px 10px 0;
            background-size: 100% 100%;
        }
        .commentitem{
            padding: 10px 20px;
            background: #f9fbff;
            margin-bottom: 10px;
            .comment{margin: 10px 0; font-size: 14px;}
            ul li{float: left;cursor: pointer;}  
            ul{list-style: none;}
        }
        .adminAsk{
            box-sizing: border-box;
            padding: 10px 20px;
            background: #f0f5fe;
            width: 100%;
            height: 60px;
            span{
                display: block;
                margin-bottom: 14px;
            }
            p{
                color:#999;
            }
        }
        .box-Reply{
            display: none;
        }
.carditem{ margin-bottom: 10px;}
.title{ padding-left: 6px;border-left:3px solid #75b8fc;}
.header{font-weight: 700;}
 
</style>
