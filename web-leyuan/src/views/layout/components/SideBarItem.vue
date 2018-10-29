<template>
  <div id="sidebaritem" >
<el-row class="tac">
   <el-col :span="12" style="width: 100%;">

    <el-menu
      default-active="1"
      unique-opened
      class="el-menu-vertical-demo"
       @open="handleOpen" 
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      
      >
      <el-submenu  index="1">
        <template slot="title">
          <i class="el-icon-bell"></i>
          <span>会员管理</span>
        </template>
    
          <el-menu-item index="/">路由试运行</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
 
          <el-menu-item index="1-3">选项3</el-menu-item>
    
          <el-menu-item index="1-4">选项4</el-menu-item>
       
      </el-submenu>

        

          <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>商品管理</span>
        </template>
        <el-menu-item index="2-1">选项2</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
 
          <el-menu-item index="2-3">选项3</el-menu-item>
    
          <el-menu-item index="2-4">选项4</el-menu-item>
        </el-submenu>
      


          <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>订单管理</span>
        </template>
          <el-menu-item index="3-1">选项2</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
 
          <el-menu-item index="3-3">选项3</el-menu-item>
    
          <el-menu-item index="3-4">选项4</el-menu-item>
        </el-submenu>
      


          <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-printer"></i>
          <span>核销管理</span>
        </template>
         <el-menu-item index="4-1">选项2</el-menu-item>
          <el-menu-item index="4-2">选项2</el-menu-item>
 
          <el-menu-item index="4-3">选项3</el-menu-item>
    
          <el-menu-item index="4-4">选项4</el-menu-item>
        </el-submenu>
      


          <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>门店管理</span>
        </template>
          <el-menu-item index="5-1">选项2</el-menu-item>
          <el-menu-item index="5-2">选项2</el-menu-item>
 
          <el-menu-item index="5-3">选项3</el-menu-item>
    
          <el-menu-item index="5-4">选项4</el-menu-item>
        </el-submenu>
      

       <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-edit"></i>
          <span>辅助介绍</span>
        </template>
        <el-menu-item index="6-1">选项2</el-menu-item>
          <el-menu-item index="6-2">选项2</el-menu-item>
 
          <el-menu-item index="6-3">选项3</el-menu-item>
    
          <el-menu-item index="6-4">选项4</el-menu-item>
        </el-submenu>

        <el-submenu index="7">
        <template slot="title">
          <i class="el-icon-star-off"></i>
          <span>报表</span>
        </template>
         <el-menu-item index="7-1">选项2</el-menu-item>
          <el-menu-item index="7-2">选项2</el-menu-item>
 
          <el-menu-item index="7-3">选项3</el-menu-item>
    
          <el-menu-item index="7-4">选项4</el-menu-item>
        </el-submenu>

        <el-submenu index="8">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>设置</span>
        </template>
         <el-menu-item index="8-1">选项2</el-menu-item>
          <el-menu-item index="8-2">选项2</el-menu-item>
 
          <el-menu-item index="8-3">选项3</el-menu-item>
    
          <el-menu-item index="8-4">选项4</el-menu-item>
        </el-submenu>

  
 
    </el-menu>
  </el-col>
</el-row>

  </div>
</template>
<script>

  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

.el-submenu .el-menu-item{
min-width: 198px;

}
</style>