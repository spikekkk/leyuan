<template>
<div id="layout" style="height：100%">
      <el-container > 
  <el-header>Header</el-header>
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

export default{

data(){
    return {

    }
},

components:{

'SideBarItem':SideBarItem

}

}
    
</script>

<style rel="stylesheet/scss" lang="scss">
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
  

  
//   .el-container:nth-child(5) .el-aside,
//   .el-container:nth-child(6) .el-aside {
//     line-height: 260px;
//   }
  
//   .el-container:nth-child(7) .el-aside {
//     line-height: 320px;
//   }


</style>
