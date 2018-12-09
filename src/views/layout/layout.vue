<template>
    <div class="layout">
        <el-container>
        <el-header id="header" height='70px' ><Header/></el-header>
        <el-container>
            <el-aside width="200px" class="bar"><Sidbar/></el-aside>
            <el-container>
            <el-main class="main"><router-view/></el-main>
            </el-container>
        </el-container>
        </el-container>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Sidbar from '@/components/Sidbar.vue'

    export default {
        components:{
            Header,
            Sidbar
        }
    }
</script>

<style scoped lang='scss'>
.layout{
}
.bar{
     overflow: hidden;
}
 /deep/ .el-header{
    line-height: 1;
    }
</style>