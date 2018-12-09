<template>
    <div>
      <div>
        <el-card class="box-card carditem clearfix order-item">
          <div slot="header" class="header">
            <span class="title">修改信息</span>
            <el-button style="float: right; padding: 3px 0;margin-top: 0px;" type="text" @click="toChange">修改信息</el-button>
          </div>
        </el-card>
        <el-card class="box-card mesList">
        <div class="mesBox">
          <div class="leftText">酒店中文名称</div>
          <div class="rightText"><el-input v-model="message.hotelNmame" placeholder="请输入酒店中文名称"></el-input></div>
        </div>
        <div class="mesBox">
          <div class="leftText">酒店星级</div>
          <div class="rightText">
            <el-select v-model="message.star" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="mesBox">
          <div class="leftText">酒店地址</div>
          <div class="rightText"><el-input  v-model="message.palce" placeholder="请输入酒店酒店地址"></el-input></div>
        </div>
        <div class="mesBox">
          <div class="leftText">附近商圈</div>
          <div class="rightText"><el-input  v-model="message.allFood" placeholder="请输入附近商圈"></el-input></div>
        </div>
      </el-card>
        <el-card class="box-card mesList">
          <div class="mesBox">
            <div class="leftText">开业时间</div>
            <div class="rightText">
              <div class="block">
                <el-date-picker
                  v-model="message.startTime"
                  type="date"
                  placeholder="请选择 年 - 月 - 日 ">
                </el-date-picker>
              </div>
            </div>
          </div>
          <div class="mesBox">
            <div class="leftText">最新装修时间</div>
            <div class="rightText">
              <div class="block">
                <el-date-picker
                  v-model="message.newTime"
                  type="date"
                  placeholder="请选择 年 - 月 - 日 ">
                </el-date-picker>
              </div>
            </div>
          </div>
          <div class="mesBox">
            <div class="leftText">客房总数</div>
            <div class="rightText"><el-input placeholder="请输入客房总数"></el-input></div>
          </div>
        </el-card>
        <el-card class="box-card mesList">

          <div class="mesBox">
            <div class="leftText">酒店总机</div>
            <div class="rightText"><el-input placeholder="请输入酒店总机"></el-input></div>
          </div>
          <div class="mesBox" style="height: auto;width: 1200px">
            <div class="leftText">酒店介绍</div>
            <div class="rightText" style="width: 970px;margin-bottom: 20px;margin-top: 5px;">
              <el-input
                type="textarea"
                :autosize="{ minRows: 8, maxRows: 50}"
                placeholder="请输入酒店介绍"
                v-model="message.mesDetail">
              </el-input>
            </div>
          </div>
        </el-card>
        <div class="submitBtn">
            <el-button  type="primary" round size="medium ">
              完     成
            </el-button>
        </div>
      </div>
    </div>
</template>

<script>
	export default {
		name: "change",
  data() {
    return {
      message:{
        hotelNmame:"",  //酒店中文名称
        star:"", //星级
        palce:"",  //地点
        allFood:"",  //周边
        startTime:"",//开业
        newTime:"",//新装修时间
        homeNum:"",//客房数
        hotelNum:"",//酒店数
        mesDetail:""//介绍
      },
      options: [
          {
          value: '选项1',
          label: '五星'
            },
          {
            value: '选项2',
            label: '四星'
          }, {
            value: '选项3',
            label: '三星'
          }, {
            value: '选项4',
            label: '二星'
          }, {
            value: '选项5',
            label: '一星'
      }],

   }
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
    .mesBox{
      height: 50px;
      line-height: 50px;
      display: block;
      width: 650px;
      .leftText{
        font-weight: 700;
        font-size: 18px;
        width: 230px;
        float: left;
      }
      .rightText{
        width: 420px;
        float: right;
      }
    }
  }
  .submitBtn{
    height: 150px;
    position: relative;
    .el-button{
      width: 200px;
      height: 50px;
      border-radius: 25px;
      position: absolute;
      right: 50px;
      top: 40%;
    }
  }

  .el-card__header,.el-card{
    border:none;
  }
  .el-select{
    width: 100%;
  }
  .el-date-editor.el-input, .el-date-editor.el-input__inner{
    width: 100%;
  }
  .el-input__inner { padding: 18px;background: #f9fbff;border: none;}
  .el-button--text { margin-top: 9px;}

</style>
<style>
  .el-main { text-align: left; line-height: 1;}
  .el-button{ padding: 6px 20px; font-size: 14px;}




</style>
