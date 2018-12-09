<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {

  name: 'App',
  methods:{

  },
  components:{
  }
}
</script>

<style>
*{ margin: 0; padding: 0;}
.clearfix::after{
  content: "";
  display: block;
  clear: both;
  width: 0;
  height: 0;
}
.el-header{
  width: 100%;
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.fll{float: left;}
.flr{float: right;}
a{ color:#333;text-decoration: none;}
.el-aside {
  height: 100vh;
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
} 

body > .el-container { margin-bottom: 40px;}
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {line-height: 260px}
.el-container:nth-child(7) .el-aside {line-height: 320px;}
li{list-style: none;}
.blue{color:#409eff; line-height: 1; font-size: 12px; }
.fw{ font-weight: 700; }
.fs12{ font-size: 12px; }
.fs14{ font-size: 14px; }
.fs16{ font-size: 16px; }
.fs18{ font-size: 18px; }
.bg{ background: #f9fbff; }
.dsbl{ display: block; } 
.fssmall{transform: scale(0.5)}
.tac{ text-align: center; }
.w200{ width: 200px; }
.w300{ width: 300px; }
.ce8{ color: #e8e8e8; }
.cb5{ color: #b5b5b5; }
.mb5{margin-bottom: 5px;}
</style>
<style>
.el-main{padding:10px;}
.el-input__inner { padding: 0;background: #f9fbff;border: none;height: 36px;line-height: 36px;}
</style>

