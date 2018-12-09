<template>
    <div class="sidbar">

        <el-row class="tac">
        <el-col :span="24">
          <el-menu
            :router=true
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
            <el-submenu
            index="/layout/home"
            :class="{active:$route.name === 'home'}"
            >
              <template slot="title">
                <router-link to='/layout/home'>首页</router-link>
              </template>
            </el-submenu>
            <el-submenu index="/layout/check" id="item" :class="{active:$route.name === 'check'}">
              <template slot="title">
                <router-link   to='/layout/check'>办理入住</router-link>
              </template>
            </el-submenu>
            <el-submenu index="3" id="item" :class="{active:$route.name === 'houseType'}">
              <template slot="title">
                <router-link   to='/layout/houseType' >房型管理</router-link>
              </template>
            </el-submenu>
            <el-submenu index="4" id="item" :class="{active:$route.name === 'houseState'}">
              <template slot="title">
                <router-link  to='/layout/houseState'  >房态管理</router-link>
              </template>
            </el-submenu>
             <el-submenu index="5" id="item">
              <template slot="title" >
                <router-link  to='/layout/order/:id' >订单管理</router-link>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1" :class="{active:$route.name === 'order/1'}"><router-link   to='/layout/order/1' >未处理订单</router-link></el-menu-item>
                <el-menu-item index="1-2" :class="{active:$route.name === 'order/2'}"><router-link   to='/layout/order/2' >订单查询</router-link></el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="6" id="item" :class="{active:$route.name === 'member'}">
              <template slot="title">
                <router-link  to='/layout/member' >会员管理</router-link>
              </template>
            </el-submenu>
            <el-submenu index="7" id="item" :class="{active:$route.name === 'evaluation'}">
              <template slot="title">
                <router-link  to='/layout/evaluation' >评价管理</router-link>
              </template>
            </el-submenu>
            <el-submenu index="8" id="item" >
              <template slot="title">
                <router-link  to='/layout/sellerCenter' >商户中心</router-link>
              </template>
              <el-menu-item-group >
                <el-menu-item index="/layout/sellerCenter"  :class="{active:$route.name === 'sellerCenter'}">基本信息</el-menu-item>
                <el-menu-item index="/layout/phoneWay">联系方式</el-menu-item>
                <el-menu-item index="/layout/policy">酒店政策</el-menu-item>
                <el-menu-item index="/layout/photos">酒店相册</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
             <el-submenu index="9" id="item" :class="{active:$route.name === 'auditCenter'}">
              <template slot="title">
                <router-link  to='/layout/auditCenter' >审核中心</router-link>
              </template>
            </el-submenu>
            <el-submenu index="10" id="item" :class="{active:$route.name === 'tradingRecord'}">
              <template slot="title">
                <router-link  to='/layout/tradingRecord' >交易记录</router-link>
              </template>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>

    </div>
</template>

<script>
   let items = document.getElementById('item')
    export default {
        name:'Sidbar',
        data(){
          return{

          }
        },
         methods: {
            handleOpen(key, keyPath) {
                // console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                // console.log(key, keyPath);
            }
            },

    }
</script>

<style scoped lang='scss'>
.active{
  background: rgb(237,243,255);
  border-left: 4px solid #409eff;
  font-size: 16px;
  a{
    margin-left: -3px;
    color:#409eff;
  }
}
.sidbar{
  height: 100vh;
  background: #fff;
}
/deep/ .el-icon-arrow-down{
  display: none;
}
/deep/ .el-submenu a{
  display: block;
  width: 100%;
  height: 57px;
}
/deep/ #item{
  border-top: 1px solid #f1f1f1;
}
/deep/ .el-submenu__title{
  padding: 0 0 0 -20px;
}
/deep/ .el-menu-item-group__title{
  display: none;
}
</style>
<<<<<<< HEAD
<style>
.el-submenu-item{
    height: 52px;
    line-height: 52px;
}
</style>
=======
>>>>>>> de7c259949ddbeb509a43327e6cb9dc27eb31a92
