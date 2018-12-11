<template>
  <el-dialog
    :visible.sync="currentValue"
    width="30%"
    center>
    <div class="contents  mb15" v-if="options">
      <p class="mb5 fw">
        <span>{{options.time}}</span>
        <span>{{options.houseType}}</span>
      </p>
      <p class="clearfix">
        <el-switch
          class="flr mt5"
          v-model="isOpen"
          active-text="开启"
          inactive-text="关闭">
        </el-switch>
        <span class="fll">房间网订渠道</span>

      </p>
    </div>
    <div slot="footer" class="dialog-footer clearfix">
      <div class="btns fs14 flr" @click="close">确 定</div>
      <div class="leftGoBack fll clearfix" @click="close">
        <div class="imgleft mr15 fll">
        </div>
        <span class="blue mt15 fll">返 回</span>
      </div>

    </div>
  </el-dialog>
</template>

<script>
  export default {
    name: "dy-dialog",
    props: {
      value: {
        type: Boolean,
        required: true
      },
      options: {
        type: Object
      }
    },
    data () {
      return {
        currentValue: this.value,
        isOpen: false
      }
    },
    methods: {
      close () {
        this.currentValue = false
      }
    },
    watch: {
      value (val) {
        this.currentValue = val
      },
      currentValue (val) {
        this.$emit('input', val)
      }
    }
  }
</script>

<style scoped lang='scss'>
  // 大盒子
  .box {
    // margin: 10px 0 0 20px;
    width: 360px; // 宽度具体调整
    // background: #f1f1f1;
  }

  // 头部标题
  .title1 {
    height: 42px;
    line-height: 42px;
    padding: 0 12px;
    color: #fff;
    font-size: 16px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    background: url('../image/home/title.png') no-repeat;
    background-size: 100% 100%;
    .right {
      float: right;
      font-size: 14px;
    }
  }

  // 内容区
  .content {
    border: 1px solid #caddfe;
    border-top: none;
  }

  // 内容的标题
  .title-ul {
    li {
      float: left;
      width: 38.251px;
      height: 42px;
    }
    li:nth-child(2n) {
      background: #e1ecff;
    }
    li:nth-child(2n-1) {
      background: #eff5ff;
    }
    .first-li {
      width: 90.22px;
      position: relative;
      color: #95a7fe;
      font-size: 14px;
      .line {
        position: absolute;
        top: 21px;
        left: -5px;
        height: 1px;
        width: 100px;
        background: #caddfe;
        -webkit-transform: rotateZ(35deg);
        transform: rotateZ(24deg);
      }
      .day {
        position: absolute;
        right: 16px;
        top: 4px;
      }
      .home {
        position: absolute;
        left: 16px;
        bottom: 4px;
      }
    }
    .num {
      height: 44px;
      line-height: 44px;
      text-align: center;
      font-weight: 700;
      font-size: 14px;
    }
    .week {
      font-size: 12px;
      text-align: center;
    }
  }

  // 内容的身体 奇数行
  .body-ul {
    height: 42px;
    line-height: 42px;
    text-align: center;
    color: #5c5c5c;
    .first-child {
      width: 90.22px;
      text-align: left;
      padding: 0 10px;
      box-sizing: border-box;
      font-size: 14px;
    }
    .long-item {
      padding: 6px 12px 0 12px !important;
      line-height: 1.2 !important;
    }
    li {
      float: left;
      width: 38.25px;
      height: 42px;
    }
    li:nth-child(2n) {
      background: #eff5ff;
    }
    li:nth-child(2n-1) {
      background: #fff;
    }
  }

  // 偶数行
  .body-ul2 {
    li:nth-child(2n) {
      background: #e1ecff;
    }
    li:nth-child(2n-1) {
      background: #eff5ff;
    }
  }

  // 满房
  .full {
    background: #fd7e92;
    color: #fff;
    font-size: 12px;
  }

  // 暂不可预订
  .no-order {
    background: #b7b8ff;
    color: #fff;
    line-height: 1.2 !important;
    padding: 6px 4px 0 !important;
    box-sizing: border-box;
    font-size: 12px;
  }

  .btns {
    display: inline-block;
    box-sizing: border-box;
    cursor: pointer;
    margin: 0 auto;
    color: #fff;
    width: 40%;
    height: 54px;
    line-height: 40px;
    border-radius: 20px;
    font-weight: 550px;
    text-align: center;
    background: url('../image/home/btn2.png') no-repeat;
    background-size: 100% 100%;
  }

  .contents {
    height: 100px;
    margin-top: 20px;
    padding: 0 30px 0px 30px;
    font-weight: 550;
    line-height: 2;
    color: #333;
  }

  .leftGoBack {
    width: 90px;
    height: 50px;
    .imgleft {
      cursor: pointer;
      display: inline-block;
      width: 50px;
      height: 50px;
      background: url('../image/home/leftArrow.png') no-repeat;
      background-size: 100% 100%;
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

  .mr20 {
    margin-right: 20px;
  }

  .mt5 {
    margin-top: 5px;
  }

  .mt15 {
    margin-top: 15px;
  }

  .mb15 {
    margin-bottom: 15px;
  }

  .lh50 {
    line-height: 50px;
  }
</style>
<style lang='scss'>
  .el-card {
    margin-bottom: 10px;
  }

  .el-dialog--center {
    color: #2b2b2b;
    margin-top: 30vh !important;
    background: url('../image/bigbox.png') no-repeat center;
    background-size: 100% 101.5%;
    background-position: 0 -5px;
    .el-dialog__body {
      height: 90px;
      padding: 40px 0 0 0;
    }
    .el-dialog__footer {
      height: 90px;
    }
    .el-icon-close {
      display: none;
    }
  }

</style>
