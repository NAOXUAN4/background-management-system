<template>
  <div class="menu_layout">
    <el-container>
      <!-- 侧边 -->
      <el-aside>
          <el-menu default-active="home" class="BMS_menu" router>

            <!-- title -->
            <div class="BMS_menu_title">
              <h3>Manage System</h3>
            </div>
            
            <!-- home -->
            <el-menu-item index="home">
              <el-icon><icon-menu /></el-icon>
              <span>home</span>
            </el-menu-item>

            <!-- 2 -->
            <el-menu-item index="2">
              <el-icon><icon-menu /></el-icon>
              <span>home</span>
            </el-menu-item>

            <!-- 3 -->
            <el-menu-item index="3">
              <el-icon><icon-menu /></el-icon>
              <span>home</span>
            </el-menu-item>

            <!-- 4 -->
            <el-menu-item index="4">
              <el-icon><icon-menu /></el-icon>
              <span>home</span>
            </el-menu-item>


          </el-menu>
      </el-aside>

      <!-- 头部 -->
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <!-- 在菜单主页面里面渲染子页面实现内容切换 -->
          <router-view></router-view>

        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import {
  Menu as IconMenu,
} from '@element-plus/icons-vue'
import { ref } from 'vue'
</script>

<style>
html,body {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  max-width: 2560px;
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
}

.menu_layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.BMS_menu {
  width: 100%;
}



</style>