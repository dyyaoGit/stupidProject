<template>
  <el-dialog
    :visible.sync="centerDialogVisible"
    width="30%"
    center>
    <div class="contents  mb15" :model="userData">
      <p class="mb5 fw">
        1231231
        <span>{{userData.time}}</span>
        <span>{{userData.houseType}}</span>
      </p>
      <p class="clearfix">
        <el-switch
          class="flr mt5"
          v-model="haveValue"
          active-text="开启"
          inactive-text="关闭">
        </el-switch>
        <span class="fll">房间网订渠道</span>

      </p>
    </div>
    <div slot="footer" class="dialog-footer clearfix">
      <div class="btns fs14 flr"  @click="centerDialogVisible = false">确 定</div>
      <div class="leftGoBack fll clearfix" @click="handleBack">
        <div class="imgleft mr15 fll">
        </div>
        <span class="blue mt15 fll">返 回</span>
      </div>

    </div>
  </el-dialog>
</template>

<script>
    export default {
        name: "dy-dialog"
    }
</script>

<style scoped>

</style>
