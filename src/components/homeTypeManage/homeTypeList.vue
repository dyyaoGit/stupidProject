<template>
  <div class="homeTypeList">
    <el-card class="box-card  carditem">
      <div slot="header" class="header clearfix">
        <span class="title">房型管理</span>
        <el-button
          style="float: right; padding: 5px ; width: 150px"
          type="primary"
          round
          @click="showCreateView">新建房型</el-button>
      </div>
        <div class="homeItemList">
        <div v-for="o in 6" :key="o" class="text homeItem">
          <el-button type="text" class="editBtn" @click="handleChange">修改</el-button>
          <img src="@/image/0001.jpg"
            style="width: 100px; height:100px;
             float: left; margin-right: 15px;">
          <div class="homeInfo clearfix">
            <strong class="fs14">豪华大床房</strong>
            <div class="infoTitleDiv">
              <span class="infoTitle">面积</span>
              <span class="infoTitle">床宽</span>
              <span class="infoTitle">卫浴</span>
              <span class="infoTitle">最多入住</span>
            </div>
            <div class="infoDataDiv">
              <span class="infoData">33平方米</span>
              <span class="infoData">大床1.8m</span>
              <span class="infoData">独立卫浴</span>
              <span class="infoData">2人</span>
            </div>
          </div>
        </div>
      </div>
      <div class="pageBtn">
        <el-button
          type="primary"
          plain
        >上一页</el-button>
        <el-button
          type="primary"
          plain
        >下一页</el-button>
      </div>

    </el-card>
  </div>
</template>

<script>
export default {
  name: "homeTypeList",
  methods: {
    showCreateView() {
      this.$emit("showCreateView");
    },
    handleChange(){

    }
  },
  created(){
   
  }
};
</script>

<style scoped lang='scss'>
.homeItemList {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.homeItem {
  width: 29%;
  border: 1px solid #f1f1f1;
  padding: 15px;
  margin: 5px;
  display: inline-block;
  span,
  strong {
    display: block;
  }
}
.editBtn {
  float: right;
}
.homeInfo {
  .infoTitleDiv {
    margin-top: 10px;
    padding-right: 10px;
    float: left;
  }
  .infoTitle {
    margin-bottom: 7px;
    font-size: 12px;
    color: #5d5d5d;
  }
  .infoDataDiv {
    margin-top: 10px;
  }
  .infoData {
    margin-bottom: 7px;
    font-size: 12px;
    color: #a3a3a3;
  }
  .auditLeave-top {
    margin-bottom: 10px;
    line-height: 1.5;
  }

  .name {
    font-weight: 700;
  }
  .time {
    display: inline-block;
    font-size: 12px;
    color: #409eff;
  }
  .summoney {
    font-size: 12px;
  }
}

.carditem {
  margin-bottom: 10px;
}
.title {
  padding-left: 6px;
  border-left: 3px solid #75b8fc;
}
.header {
  font-weight: 700;
}
.pageBtn {
  margin-top: 15px;
  display: flex;
  justify-content: center;
}
</style>