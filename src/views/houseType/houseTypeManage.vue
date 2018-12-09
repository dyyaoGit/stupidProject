<template>
  <div class="houseTypeManage">
    <home-type-list @showCreateView="showCreateView" />
    <home-type-detail />
  </div>
</template>

<script>
import homeTypeList from "@/components/homeTypeManage/homeTypeList.vue";
import homeTypeDetail from "@/components/homeTypeManage/homeTypeDetail.vue";

export default {
  name: "houseTypeManage",
  components: {
    homeTypeList,
    homeTypeDetail
  },
  data() {
    return {};
  },
  methods: {
    showCreateView() {
      this.$emit("showCreateView");
    }
  },
  created() {}
};
</script>


<style scoped lang='scss'>
</style>