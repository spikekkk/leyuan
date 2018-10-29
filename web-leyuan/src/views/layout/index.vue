<template>
<div id="layout" style="height：100%">
      <el-container > 
  <el-header style="padding:0 0">

<Header></Header>
      
  </el-header>
  <el-container>
    <el-aside id="aside" style="width: 200px;">
    <SideBarItem></SideBarItem>	    
    </el-aside>
    <el-main>Main</el-main>
  </el-container>
</el-container>
</div>
  
</template>
<script>
import SideBarItem from './components/SideBarItem';
import Header from './components/Header'
export default{

data(){
    return {

    }
},

components:{
'Header':Header,
'SideBarItem':SideBarItem,

}

}
    
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  body > .el-container {
    margin-bottom: 40px;
    height: 100%;
  }
  .el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    // color: #333;
   text-align: center;
    line-height: 200px;
    height: 100%;
    //width: 400px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  




</style>
