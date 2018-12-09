<template>
  <div class="houseType">
    <div v-if="!isShowCreate">
      <house-type-manage @showCreateView="showCreateView" />
    </div>

    <div v-if="isShowCreate">
      <house-type-new-create @showManageView="showManageView" />
    </div>
  </div>
</template>

<script>
import houseTypeManage from "@/views/houseType/houseTypeManage.vue";
import houseTypeNewCreate from "@/views/houseType/houseTypeNewCreate.vue";

export default {
  name: "houseType",
  components: {
    houseTypeManage,
    houseTypeNewCreate
  },
  data() {
    return {
      isShowCreate: false
    };
  },
  methods: {
    showCreateView() {
      this.isShowCreate = true;
    },
    showManageView(){
      this.isShowCreate = false;
    }
  },
  created() {}
};
</script>


<style scoped lang='scss'>
</style>