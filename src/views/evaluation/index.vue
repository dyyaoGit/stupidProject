<template>
  <div class="appraise">
    <el-card class="top1 carditem box-card">
      <div slot="header" class="header">
        <span class="title">酒店评分</span>
      </div>
      <div class="right">
        <span>8.9</span>
        共10分
      </div>
      <div class="left">
        <div class="one">
          <div>
            <span>服务</span>
            <Star class="star" :score="4.1"/>
          </div>
          <div>
            <span>卫生</span>
            <Star class="star" :score="4.1"/>
          </div>
        </div>
        <div class="two">
          <div>
            <span>环境</span>
            <Star class="star" :score="4.1"/>
          </div>
          <div>
            <span>位置</span>
            <Star class="star" :score="4.1"/>
          </div>
        </div>
        <!-- 153 153  153 #999 15 -->
      </div>
    </el-card>
    <el-card class="top2 carditem box-card">
      <div slot="header" class="header">
        <span class="title">评价详情</span>
      </div>
      <div class="item1">
        <div class="right">
          <div class="more-seek">
            更多搜索选项
            <i></i>
          </div>
          <div class="seek-box">
            <input type="text" placeholder="订单号/预定人/预订人手机号">
            <div class="seek">搜索</div>
          </div>
        </div>
        <div class="left">
          <label :class="{activegood: !appraise}">
            <input :value="0" name="appraise" v-model="appraise" type="radio">好评
          </label>
          <label :class="{activegood: appraise}">
            <input :value="1" name="appraise" v-model="appraise" type="radio">差评
          </label>
        </div>
      </div>
      <div class="select clearfix">
        <el-button type="primary" @click="handleSelect" class="select-btn flr mr10">查询</el-button>
        <span class="fs14 fw mr10">按时间选择</span>
        <el-date-picker v-model="selectData.inDate" type="date" class="mr10" placeholder="入住日期"></el-date-picker>
        <el-date-picker v-model="selectData.goDate" type="date" class="mr10" placeholder="离店日期"></el-date-picker>
      </div>
      <div class="userItem" v-for="(item,index) in 4" :key="index" :model="userData">
        <el-row>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <div class="item-left">
                <span class="fw fs14">用户{{userData.username}}</span>
                <p class="c2 fs12">{{userData.evaluationTime}}</p>
                <p class="c2 fs12">{{userData.hourTime}}</p>
              </div>
            </div>
          </el-col>
          <el-col :span="20">
            <div class="grid-content bg-purple-light">
                <div class="item-right clearfix">
                    <div class="item-stars clearfix"  v-for="(item,index) in star" :key="index">
                        <div class="star-top clearfix mb10">
                            <span class="fll fs14 fw title-star">{{item.title}}</span>
                            <Star class="fll" :score="item.stars"/>
                        </div>
                    </div>
                    <div class="commont fs14 mb10">{{userData.common}}</div>
                    <div class="houseType fs14 c2 mb10">{{userData.houseType}}</div>
                    
                     <!-- 回复逻辑 -->
                    <div class="adminAsk" v-if="userData.adminAsk">
                      <el-row :gutter="20">
                        <el-col :span="19">
                          <div class="grid-content bg-purple">
                            <span class=" span blue fw fs14">回复</span>
                            <p class="fs14">{{userData.adminAsk}}</p>
                          </div>
                        </el-col>
                        <el-col :span="5">
                          <div class="grid-content bg-purple clearfix">
                            <p class="c2 fs14 mb10 flr">{{userData.commonTime}}</p>
                            <div class="flr fs14">
                              <span class="c3  fw cs" @click="handleEdit(index)">编辑</span>
                              <span class="c2 ">  |  </span>
                              <span class="c4 fw cs" @click="handleDelete(index)">删除</span>
                            </div>
                          </div>
                        </el-col>
                      </el-row>
                        
                    </div>
                    <div class="box-Reply clearfix"  ref="huifubox"  v-else-if="isShow">                    
                        <textarea :value='userData.adminAsk' name="adminAsk" class="reply" id="reply" cols="42" rows="5">
                        </textarea>
                        <el-button @click="handleNo(index)" class="flr">取消</el-button>  
                        <el-button @click="handleYes" type='primary flr mr10'>回复</el-button>
                        
                    </div>
                    <div class="box-Reply clearfix"  ref="huifubox"  v-else-if="isEdit">                    
                        <textarea :value='userData.adminAsk' name="adminAsk" class="reply" id="reply" cols="42" rows="5">
                        </textarea>
                        <el-button @click="handleNo1(index)" class="flr">取消</el-button>  
                        <el-button @click="handleYes1" type='primary flr mr10'>回复</el-button>
                        
                    </div>
                    <el-button  v-else class="flr" type='primary' @click="handleReply(index)">
                        回复
                    </el-button>    
                </div>
                
            </div>
          </el-col>
        </el-row>
       </div>
    </el-card>
  </div>
</template>

<script>
import Star from "@/components/star.vue";
export default {
  data() {
    return {
      isShow:false,
      isEdit:false,
      appraise: 0,
      title: "服务",
      EditData:'',
      userData: {
        username: "小强",
        adminAsk:'你的满意就是我们最大的动力',
        // 
        common:'今天天气不错，就是有点冷，对的就是冷~~~~，卡卡啦啦啦',
        houseType:'豪华大床房',
        evaluationTime: "2018-11-22",
        hourTime: "12:02:50",
        commonTime:'2018-11-22 12:02:50'
      },
      star: [
        {
          title: "服务",
          stars: 2,
         
        },
        {
          title: "卫生",
          stars: 3,
         
        },
        {
          title: "环境",
          stars: 4,
        
        },
        {
          title: "配置",
          stars: 5,
         
        }
      ],
      selectData: {
        inDate: "",
        goDate: ""
      }
    };
  },
  components: {
    Star
  },
  methods: {
    handleSelect() {
      console.log("点击按时间查询");
    },
    handleEdit(index){
      console.log(index);
      // this.isShow = true
      this.isEdit = true
      this.EditData = this.userData.adminAsk
      this.userData.adminAsk = ''
      console.log(this.EditData);
      this.$nextTick(() => {
                  // console.log(this.$refs.huifubox[index])
                  this.$refs.huifubox[index].style.display = 'block'
              })
    },
    handleDelete(index){
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message.success('删除成功!')
        }).catch(() => {
          this.$message.info('已取消删除')
        })      
    },
    handleYes1(){

    },
    handleNo1(index){
      this.isEdit = false
      this.userData.adminAsk = this.EditData
    },
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
    },
    
  }
};
</script>

<style scoped lang='scss'>
.appraise {
  border: 0.1px solid #f1f1f1;
  position: relative;
}

.top1 {
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  .right {
    float: right;
    font-size: 14px;
    span {
      color: #518dfd;
      font-size: 38px;
      font-weight: 600;
    }
  }
  .left {
    .one {
      width: 260px;
      display: inline-block;
    }
    .two {
      width: 260px;
      display: inline-block;
    }
    span {
      color: #2b2b2b;
      font-size: 14px;
      float: left;
      margin-right: 10px;
      margin-top: 5px;
    }
  }
}

.top2 {
  margin-top: 145px;
  background: #fff;
  h1 { margin-bottom: 26px;}
  .right {
    float: right;
    font-size: 12px;
    .more-seek {
      color: #518dfd;
      float: right;
      width: 120px;
      height: 26px;
      line-height: 26px;
      text-align: center;
      i {
        float: right;
        margin-top: 10px;
        width: 8px;
        height: 8px;
        border-right: 1px solid #518dfd;
        border-top: 1px solid #518dfd;
        transform: rotateZ(-45deg);
      }
    }
    .seek-box {
      float: left;
      line-height: 26px;
      input {
        height: 25px;
        width: 180px;
        padding-left: 26px;
        outline: none;
        color: #666;
        background: url("../../image/评价管理/图标切图_03_11.png") no-repeat 8px
          center;
        background-size: 14px;
        border: 1px solid #b3ccff;
        border-top-left-radius: 10px 50%;
        border-bottom-left-radius: 10px 50%;
        border-right: none;
      }
      .seek {
        float: right;
        width: 40px;
        text-align: center;
        color: #fff;
        background: #518dfd;
        height: 25px;
        border: 1px solid #518dfd;
        border-top-right-radius: 10px 50%;
        border-bottom-right-radius: 10px 50%;
        user-select: none;
      }
    }
  }
  .left {
    width: 240px;
    height: 26px;
    line-height: 26px;
    border: 1px solid #518dfd;
    border-top-left-radius: 6% 50%;
    border-top-right-radius: 6% 50%;
    border-bottom-right-radius: 6% 50%;
    border-bottom-left-radius: 6% 50%;
    overflow: hidden;
    label {
      float: left;
      width: 50%;
      height: 26px;
      text-align: center;
      user-select: none;
    }
    input {
      display: none;
    }
    .activegood {
      color: #fff;
      background: #518dfd;
    }
  }
  .select {
    box-sizing: border-box;
    border-top: 1px solid #b3ccff;
    border-bottom: 1px solid #b3ccff;
    margin: 20px -20px 0px;
    background: #f9fafd;
    padding: 10px 30px 10px;
    .select-btn {
      border-radius: 20px;
      width: 120px;
    }
  }
  /deep/ .el-input--prefix .el-input__inner {background: #fff;}
  /deep/ .el-button{ border-radius: 20px; border: 1px solid #409eff; width: 100px; 
                       height: 32px; line-height: 8px;}
  .userItem {
    padding: 10px 0px;
    .item-left {
      text-align: center;
      line-height: 1.8;
      padding: 20px;
    }
    .item-right {
        min-height: 120px;
        box-sizing: border-box;
        background: #f9faff;
        padding: 10px 20px;
    }
    .item-stars {
      float: left;
      width: 25%;
      .title-star{
          margin-top: 8px;
          margin-right: 10px;
      }
    }
  }
  .adminAsk{
            box-sizing: border-box;
            padding: 10px 20px;
            width: 100%;
            height: 60px;
            background: #f0f5fe;
            .span{ display: block;margin-bottom: 14px;}
            p{ color:#999; }
        }
        .box-Reply{ display: none;  }
        .reply{ display: block;width: 100%;border: none; background: #fff;}
}
.title { padding-left: 6px; border-left: 3px solid #75b8fc;}
.header { font-weight: 700;}
.mr10 { margin-right: 10px;}
.mt10 { margin-top: 10px;}
.mb10 { margin-bottom: 10px;}
.mt5 {margin-top: 5px;}
.c1 { color: #f1f1f1;}
.c2 { color: #999;}
.c3 { color: #6b9cfd;}
.c4 { color: #fd7e92;}
.cs { cursor: pointer;}
</style>
<style>
.el-main {
  text-align: left;
  line-height: 1;
}
</style>
