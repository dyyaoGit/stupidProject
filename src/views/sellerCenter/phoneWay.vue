<template>
  <div>
    <el-card class="box-card carditem clearfix mesList">
      <div slot="header" class="header">
        <span class="title" style="font-size: 20px;padding-left: 12px;">销售部</span>
        <el-button style="float: right; padding: 3px 0;margin-top: 0px;" type="text" v-if="changeF" @click="wayToChangeF">修改</el-button>
        <el-button class="okbtn" type="text" v-else @click="wayokChangeF">完&nbsp;&nbsp;成</el-button>
      </div>
      <div v-for="(o,index) in wayTitleF" :key="index" class="mesBox">
        <div class="leftText">{{o.title}}</div>
        <div class="rightText">
          <span v-if="changeF">{{o.detail}}</span>
          <el-input :value="o.detail" v-else></el-input>
        </div>
      </div>
    </el-card>
    <el-card class="box-card carditem clearfix mesList">
      <div slot="header" class="header">
        <span class="title" style="font-size: 20px;padding-left: 12px;">预定部</span>
        <el-button style="float: right; padding: 3px 0;margin-top: 0px;" type="text" v-if="changeS" @click="wayToChangeS">修改</el-button>
        <el-button class="okbtn" type="text" v-else @click="wayokChangeS">完&nbsp;&nbsp;成</el-button>
      </div>
      <div v-for="(p,index) in wayTitleS" :key="index" class="mesBox">
        <div class="leftText">{{p.title}}</div>
        <div class="rightText" >
          <span v-if="changeS">{{p.detail}}</span>
          <el-input :value="p.detail" v-else></el-input>
        </div>

      </div>
    </el-card>
    <el-card class="box-card carditem clearfix mesList">
      <div slot="header" class="header">
        <span class="title" style="font-size: 20px;padding-left: 12px;">财务结算</span>
        <el-button style="float: right; padding: 3px 0;margin-top: 0px;" type="text" v-if="changeT" @click="wayToChangeT">修改</el-button>
        <el-button class="okbtn" type="text" v-else @click="wayokChangeT">完&nbsp;&nbsp;成</el-button>
      </div>
      <div v-for="(q,index) in wayTitleT" :key="index" class="mesBox">
        <div class="leftText">{{q.title}}</div>
        <div class="rightText">
          <span v-if="changeT">{{q.detail}}</span>
          <el-input :value="q.detail" v-else></el-input>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
	export default {
		name: "phoneWay",
    data() {
      return {
        wayTitleF: [
          {title: "姓名", detail: "羊羊羊"},
          {title: "移动电话", detail: "18332725321"},
          {title: "固定电话", detail: "+86 18332725321"},
          {title: "邮箱地址", detail: "8888888888ccccc@qq.com"},
        ],
        wayTitleS: [
          {title: "姓名", detail: "羊羊羊"},
          {title: "移动电话", detail: "18332725321"},
          {title: "固定电话", detail: "+86 18332725321"},
          {title: "邮箱地址", detail: "8888888888ccccc@qq.com"},
        ],
        wayTitleT: [
          {title: "姓名", detail: "羊羊羊"},
          {title: "移动电话", detail: "18332725321"},
          {title: "固定电话", detail: "+86 18332725321"},
          {title: "邮箱地址", detail: "8888888888ccccc@qq.com"},
        ],
        changeF:true,
        changeS:true,
        changeT:true,
      }
    },
    methods:{
		  //  以为改一个就要请求一次接口，所以就分开写事件委托了
      wayToChangeF(){
        this.changeF=false
      },
      wayToChangeS(){
        this.changeS=false
      },
      wayToChangeT(){
        this.changeT=false
      },
      wayokChangeF(){
        this.changeF=true
      },
      wayokChangeS(){
        this.changeS=true
      },
      wayokChangeT(){
        this.changeT=true
      },
    }
	}
</script>

<style scoped lang='scss'>
  .active{ border: 1px solid #9dccfa;}
  .title { padding-left: 6px;border-left: 3px solid #75b8fc;}
  .header {font-weight: 700;}


  /**/
  .okbtn{
    height: 60px;
    width: 400px;
    border-radius: 30px;
    position: absolute;bottom: 30px;right: 20px;
    background: url('../../image/商户中心+箭头/bgbtn.png');
    font-size: 20px;
    color: #fff;
    font-weight: 700;
  }
  .mesList{
    padding: 10px 20px;
    margin-top: 20px;
    position: relative;
    .mesBox{
      height: 50px;
      line-height: 50px;
      display: block;
      .leftText{
        font-weight: 700;
        font-size: 17px;
        width: 200px;
        float: left;
      }
      .rightText{
        color: #5c5c5c;
      }
    }
  }

  .el-input{
    width: 400px;

  }


</style>
<style>
  .el-main { text-align: left; line-height: 1;}

  .el-button{ border-radius: 20px;  padding: 6px 20px; font-size: 14px;}
  .el-button--text {font-size: 14px; margin-top: 9px;}
  .el-main{

  }
  .el-card__header,.el-card{
    border:none;
  }
  .el-input__inner {
    padding: 18px;
    background: #f9fbff;
    border: none;
  }
</style>
