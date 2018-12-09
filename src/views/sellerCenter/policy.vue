<template>
  <div>
    <el-card class="box-card carditem clearfix mesList">
      <div slot="header" class="header">
        <span class="title" style="font-size: 20px;padding-left: 12px;">入离时间</span>
        <el-button style="float: right; padding: 3px 0;margin-top: 0px;" type="text" v-if="changeF" @click="toChangeF">修改</el-button>
        <el-button class="okbtn" type="text" v-else @click="okChangeF">完&nbsp;&nbsp;成</el-button>
      </div>
      <div v-if="changeF">
        <div  v-for="(o,index) in titleF" :key="index" class="mesBox" style="display: inline-block;width: 40%">
          <div class="leftText">{{o.title}}</div>
          <div class="rightText">
            <span >{{o.detail}}</span>
          </div>
        </div>
      </div>
      <div  v-else>
        <div v-for="i in titleF"  class="mesBox" >
          <div class="leftText">{{i.title}}</div>
          <div class="rightText">
            <el-time-picker
              v-model="i.detail"
              placeholder="请选择时间">
            </el-time-picker>
          </div>
        </div>
      </div>


    </el-card>

    <el-card class="box-card carditem clearfix mesList">
      <div slot="header" class="header">
        <span class="title" style="font-size: 20px;padding-left: 12px;">儿童政策</span>
        <el-button style="float: right; padding: 3px 0;margin-top: 0px;" type="text" v-if="changeS" @click="toChangeS">修改</el-button>
        <el-button class="okbtn" type="text" v-else @click="okChangeS">完&nbsp;&nbsp;成</el-button>
      </div>
      <div v-if="changeS" class="mesBox" style="height: auto;">
        <div class="rightText" style="text-indent: 2em" v-text="chileMesDetail"></div>
      </div>
      <div v-else class="mesBox" style="height: auto;margin-bottom: 80px;"  >
        <el-input
          type="textarea"
          :autosize="{ minRows: 8, maxRows: 50}"
          placeholder="请输入儿童政策"
          v-model="chileMesDetail">
        </el-input>
      </div>
    </el-card>

    <el-card class="box-card carditem clearfix mesList">
      <div slot="header" class="header">
        <span class="title" style="font-size: 20px;padding-left: 12px;">膳食安排</span>
        <el-button style="float: right; padding: 3px 0;margin-top: 0px;" type="text" v-if="changeT" @click="toChangeT">修改</el-button>
        <el-button class="okbtn" type="text" v-else @click="okChangeT">完&nbsp;&nbsp;成</el-button>
      </div>
      <div v-for="(q,index) in titleT" :key="index" class="mesBox">
        <div class="leftText">{{q.title}}</div>
        <div class="rightText">
          <span v-if="changeT">{{q.detail}}</span>
          <el-input :value="q.detail" v-else></el-input>
        </div>
      </div>
    </el-card>

    <el-card class="box-card carditem clearfix mesList">
      <div slot="header" class="header">
        <span class="title" style="font-size: 20px;padding-left: 12px;">宠物政策</span>
        <el-button style="float: right; padding: 3px 0;margin-top: 0px;" type="text" v-if="changeFour" @click="toChangeFour">修改</el-button>
        <el-button class="okbtn" type="text" v-else @click="okChangeFour">完&nbsp;&nbsp;成</el-button>
      </div>
      <div v-if="changeFour " class="mesBox" style="height: auto;">
        <div class="rightText" style="text-indent: 2em" v-text="animousDetail"></div>
      </div>
      <div v-else class="mesBox" style="height: auto;margin-bottom: 80px;"  >
        <el-input
          type="textarea"
          :autosize="{ minRows: 8, maxRows: 50}"
          placeholder="请输入儿童政策"
          v-model="animousDetail">
        </el-input>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "policy",
    data() {
      return {
        //入离时间
        titleF: [
          {title: "最早入住", detail: ""},
          {title: "最晚入住", detail: ""},
          {title: "最早离店", detail: ""},
          {title: "最晚离店", detail: ""},
        ],
        //膳食安排
        titleT: [
          {title: "姓名", detail: "羊羊羊"},
          {title: "移动电话", detail: "18332725321"},
          {title: "固定电话", detail: "+86 18332725321"},
          {title: "邮箱地址", detail: "8888888888ccccc@qq.com"},
        ],
        //四個顯示與否的標識符
        changeF:true,
        changeS:true,
        changeT:true,
        changeFour:true,

        //儿童政策
        chileMesDetail:"Huluobos、Huluobos、Huluobos、Huluobos、Huluobos、Huluobos、Huluobos、Huluobos、Huluobos、Huluobos、Huluobos、Huluobos、Huluobos、Huluobos、Huluobos、Huluobos、Huluobos、Huluobos、Huluobos、Huluobos、Huluobos、Huluobos、Huluobos、Huluobos、Huluobos、Huluobos",
        //動物
        animousDetail:"Huluobos、Huluobos、Huluobos、Huluobos、Huluobos、Huluobos、Huluobos、Huluobos、Huluobos、Huluobos、Huluobos、Huluobos、Huluobos、Huluobos、Huluobos、Huluobos、Huluobos、Huluobos、Huluobos、Huluobos、Huluobos、Huluobos、Huluobos、Huluobos、Huluobos、Huluobos",
      }
    },
    methods:{
      //  以为改一个就要请求一次接口，所以就分开写事件委托了
      //四个修改按钮函数
      toChangeF(){
        this.changeF=false
      },
      toChangeS(){
        this.changeS=false
      },
      toChangeT(){
        this.changeT=false
      },
      toChangeFour(){
        this.changeFour=false
      },

      //保存更改按钮函数
      okChangeF(){
        this.changeF=true
      },
      okChangeS(){
        this.changeS=true
      },
      okChangeT(){
        this.changeT=true
      },
      okChangeFour(){
        this.changeFour=true
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
  .el-textarea__inner{
    border: none;
    background-color: #f9fbff;
    text-indent: 2em;
  }


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

