<template>
  <div class="houseTypeDetail">
    <el-card class="box-card carditem">
      <div slot="header" class="header clearfix">
        <span class="title">豪华大床房</span>
      </div>

      <div class="photoBrowse clearfix">
        <!-- 左箭头 -->
        <img class="rightArrow" src="@/image/商户中心+箭头/rightArrow.png" @click="handleLast">
        <!-- 中间的房型图 -->
        <div class="houseTypePhoto clearfix"> 
            <div class="box">
              <img :src="photoArr.img"  :model="photoArr"  v-for="o in 5" :key="o" alt="#">
            </div>
        </div>
        <!-- 右箭头 -->
        <img class="leftArrow" src="@/image/商户中心+箭头/leftArrow.png" @click="handleNext">
      </div>
      <div class="asideLeft">
        <button class="btn">房型相册</button>
        <button class="btn">图文详情</button>
      </div>

      <div class="textDetail clearfix">
        <span class="titleText ">文字详情</span>
        <div class="item">
          <div class="itemDetail">
            <span class="itemTitle ">面积</span>
            <span class="detail ">33平方米</span>
          </div>
          <div class="itemDetail">
            <span class="itemTitle ">房型</span>
            <span class="detail ">豪华街景房</span>
          </div>
          <div class="itemDetail">
            <span class="itemTitle ">楼层</span>
            <span class="detail ">6-10层</span>
          </div>
        </div>

        <div class="item">
          <div class="itemDetail">
            <span class="itemTitle ">床宽</span>
            <span class="detail ">大床1.8米</span>
          </div>
          <div class="itemDetail"> 
            <span class="itemTitle ">卫浴</span>
            <span class="detail ">独立卫浴</span>
          </div>
          <div class="itemDetail">
            <span class="itemTitle">窗户</span>
            <span class="detail">无窗户</span>
          </div>
        </div>

        <div class="item noborder">
          <div class="itemDetail">
            <span class="itemTitle ">无烟信息</span>
            <span class="detail ">该房型有无烟房，可无烟处理</span>
          </div>
          <div class="itemDetail">
            <span class="itemTitle ">最多入住</span>
            <span class="detail ">2人</span>
          </div>
          <div class="itemDetail">
            <span class="itemTitle ">早餐/宽带</span>
            <span class="detail ">无早餐，有无线WiFi</span>
          </div>
        </div>
      </div>
      <div class="describe">
        <span class="describeTitle fs14">描述</span>
        <span class="detailText fs14">房间禁止小朋友嬉戏打闹，请勿吸烟</span>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "houseTypeDetail",
  data(){
    return{
      photoArr:{
        img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2213670986,2923778817&fm=27&gp=0.jpg'
      }
    }
  },
  methods:{
    handleLast(){
      
    },
    handleNext(){

    }
  }
};  
</script>

<style scoped lang='scss'>
.houseTypeDetail {
  padding: 10px;
}
.header {
  font-weight: 700;
}
.title {
  padding-left: 6px;
  border-left: 3px solid #75b8fc;
}
.asideLeft {
  width: 15%;
  .btn {
    width: 100%;
    height: 60px;
  }
}
.photoBrowse {
  position: relative;
  float: right;
  width: 85%;
  background-color: #f1f5fd;
  height: 300px;
  margin-bottom: 40px;

  .leftArrow {
    position: absolute;
    top: 150px;
    left: 20px;
  }
  ///房型轮播图
  .houseTypePhoto{
    margin: 26px auto;
    width: 80%;
    height: 100%;
    overflow-x: hidden;
     .box{
        width: 1850px;
        img{
        margin-right:20px;
        float: left;
        width: 350px 
    }
     }
  }
  
  .rightArrow {
    position: absolute;
    top: 150px;
    right: 20px;
  }
}
.textDetail {
  float: left;
  width: 100%;
  display: flex;
  .titleText {
    margin-left: 6%;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
  }
  .item {
    font-size: 14px;
    margin-left: 5%;
    margin-bottom: 30px;
    width: 24%;
    border-right: 1px dashed #f1f1f1;
    .itemDetail {
      margin-bottom: 10px;
      .itemTitle {
        margin-right: 15px;
        font-weight: 600;
      }
      .detail {
        font-weight: 400;
      }
    }
  }
  .noborder {
    border-right: 0px;
  }
}
.describe {
  background-color: #f1f5fd;
  width: 82%;
  float: right;
  padding: 15px 20px 15px 20px;
  margin-bottom: 30px;
  .describeTitle {
    display: block;
    margin-bottom: 15px;
    font-weight: 600;
  }
}



</style>
<style>
.el-main{
  text-align: left;
  line-height: 1;
}
</style>

