<template>
  <div class="houseTypeNewCreate">
    <home-type-create />
    <home-type-photo />
    <home-type-photo-detail />

    <div
      class="btn"
      @click="createComplete"
    >完成</div>
    <el-button
      class="backBtn clearfix"
      type="text"
      @click="showManageView"
    >
     <img src="@/image/home/leftArrow.png" class="fll" style="width: 40px; height: 40px" />
     <span class="backText fll mt10">返回上一步</span>
      </el-button>
  </div>
</template>

<script>
import homeTypeCreate from "@/components/homeTypeManage/homeTypeCreate.vue";
import homeTypePhoto from "@/components/homeTypeManage/homeTypePhoto.vue";
import homeTypePhotoDetail from "@/components/homeTypeManage/homeTypePhotoDetail.vue";

export default {
  name: "houseTypeNewCreate",
  components: {
    homeTypeCreate,
    homeTypePhoto,
    homeTypePhotoDetail
  },
  data() {
    return {};
  },
  methods: {
    createComplete() {
      // this.$axios.post('')
    },
    showManageView() {
      this.$emit("showManageView");
    }
  },
  created() {}
};
</script>

<style scoped lang='scss'>
.btn {
  float: right;
  font-size: 14px;
  box-sizing: border-box;
  cursor: pointer;
  margin: 20px 15px 20px 0;
  color: #fff;
  width: 200px;
  height: 54px;
  line-height: 40px;
  border-radius: 20px;
  font-weight: 650px;
  background: url("../../image/home/btn1.png") no-repeat;
  background-size: 100% 100%;
  text-align: center;
}
.backBtn{
  margin-left: 20px;
  margin-top: 20px;
  
}
.mt10{ margin-top: 10px; }
</style>