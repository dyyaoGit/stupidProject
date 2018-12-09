<template>
  <div class="houseTypePhotoDetail">
    <el-card class="box-card  carditem">
      <div
        slot="header"
        class="header clearfix"
      >
        <span class="rightTitle">*最多上传5张</span>
        <span class="title">图文详情</span>
      </div>
      <span class="secondTitle">*图片尺寸：1920*900</span>
      <div class="imageDiv clearfix">
        <div
          v-for="i in 2"
          :key="i"
          class="imageItem"
        >
          <img
            src="@/image/0001.jpg"
            class="image"
          >
        </div>
        <div class="imageItem addImage">
          <div>
            <i class="iconfont icon-jiahao1"></i>
            <span class="add">添加图片</span>
          </div>
        </div>
      </div>
      

    </el-card>
  </div>

</template>

<script>
export default {
  name: "houseTypePhotoDetail",
  created() {}
};
</script>

<style scoped lang='scss'>
.houseTypePhotoDetail {
  padding: 10px;
  .header {
    font-weight: 700;
  }
  .title {
    padding-left: 6px;
    border-left: 3px solid #75b8fc;
  }
  .rightTitle {
    float: right;
    font-size: 14px;
    color: #409eff;
  }
  .secondTitle {
    font-size: 14px;
    color: #409eff;
    font-weight: 500;
  }
  .imageDiv {
    height: 230px;
    display: flex;
    margin-top: 10px;
    margin-bottom: 10px;
    .imageItem {
      width: 30%;
      margin-left: 2.5%;
      .image {
        width: 100%;
        height: 100%;
      }
    }
    .addImage {
      border: 1px dashed #409eff;
      box-sizing: border-box;
      position: relative;
      display: flex;
      justify-content: center; //让子标签水平居中
      align-items: center; //让子标签垂直居中
      .icon-jiahao1 {
        font-size: 50px;
        color: #409eff;
        display: flex;
        justify-content: center;
      }
      .add {
        margin-top: 10px;
        display: block;
        color: #409eff;
        text-align: center;
      }
    }
  }
}
</style>
