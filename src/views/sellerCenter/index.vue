<template>
    <div class="sellercenter">
        <!--商户中心-->
     <div>
       <el-card class="box-card carditem clearfix order-item">
         <div slot="header" class="header">
           <span class="title">基本信息</span>
           <el-button style="float: right; padding: 3px 0;margin-top: 0px;" type="text" @click="toChange">修改信息</el-button>
         </div>
       </el-card>



       <el-card class="box-card mesList">
         <div v-for="(item,index) in mesTitleF" :key="index" class="mesBoxs">
           <div class="leftText">{{item.title}}</div>
           <div class="rightText">{{item.detail}}</div>
         </div>
       </el-card>


       <el-card class="box-card mesList">
         <div v-for="(p,index) in mesTitleS" :key="index" class="mesBoxs">
           <div class="leftText">{{p.title}}</div>
           <div class="rightText">{{p.detail}}</div>
         </div>
       </el-card>
       <el-card class="box-card mesList">
         <div class="mesBoxs" >
           <div class="leftText">酒店介绍</div>
         </div>
         <div class="mesBoxs" style="height: auto;">
           <div class="rightText" style="text-indent: 2em" v-text="mesDetail"></div>
         </div>
       </el-card>
     </div>
    </div>
</template>

<script>
    export default {
        name:'sellerCenter',
      data() {
        return {
            mesTitleF:[
              { title:"酒店中文名称",detail:"赛拉维尔大酒店" },
              { title:"酒店星级",detail:"五星级" },
              { title:"酒店地址",detail:"北京市朝阳区望京阜通东大街209号" },
              { title:"附近商圈",detail:"望京SOHO;首开广场" },
            ],
            mesTitleS:[
              { title:"开业时间",detail:"赛拉维尔大酒店" },
              { title:"最新装修时间",detail:"五星级" },
              { title:"客房总数",detail:"北京市朝阳区望京阜通东大街209号" },
              { title:"酒店总机",detail:"望京SOHO;首开广场" },
            ],
            mesDetail: "五星级北京市朝阳区望京阜通东大街209号北京市朝阳区望京阜通东大街209号北京市朝阳区五星级北京市朝阳区望京阜通东大街209号北京市朝阳区望京阜通东大街209号北京市朝阳区五星级北京市朝阳区望京阜通东大街209号北京市朝阳区望京阜通东大街209号北京市朝阳区五星级北京市朝阳区望京阜通东大街209号北京市朝阳区望京阜通东大街209号北京市朝阳区望京阜通东大街209号北京市朝阳区望京阜通东大街209号北京市朝阳区望京阜通东大街209号",
        };
      },
      methods: {
        toChange(){
          this.$router.push("/layout/sellerCenterChange")
        },
      }
    }
</script>


<style scoped lang='scss'>
  .active{ border: 1px solid #9dccfa;}
  .title { padding-left: 6px;border-left: 3px solid #75b8fc;}
  .header {font-weight: 700;}
  .order-item {/deep/ .el-card__body {display: none; }}


  /**/
  .mesList{
    padding: 0px 20px;
    margin-top: 20px;
    .mesBoxs{
      height: 50px;
      line-height: 50px;
      display: block;
      .leftText{
        font-weight: 700;
        font-size: 18px;
        width: 200px;
        float: left;
      }
      .rightText{
        color: #5c5c5c;
      }
    }
  }


</style>
<style>
  .el-main { text-align: left; line-height: 1;}
  .el-input__inner { padding: 0;background: #f9fbff;border: none;}
  .el-button{ border-radius: 20px;  padding: 6px 20px; font-size: 14px;}
  .el-button--text {font-size: 14px; margin-top: 9px;}
  .el-main{

  }
  .el-card__header,.el-card{
    border:none;
  }


</style>
