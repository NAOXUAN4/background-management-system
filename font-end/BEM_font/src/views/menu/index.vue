<template>
  <div class="menu_layout">
    <el-container>
      <!-- 侧边 -->
      <el-aside class="menu-aside">
          <el-menu default-active="home" class="BMS_menu" router>

            <!-- title -->
            <div class="BMS_menu_title">
              <h3>Manage System</h3>
            </div>
            
            <!-- home -->
            <el-menu-item index="home">
              <el-icon>
                <ChatSquare />
              </el-icon>
              <span>home</span>
            </el-menu-item>

            <!-- 2 -->
            <el-menu-item index="2">
              <el-icon>
                <ChatSquare />
              </el-icon>
              <span>home</span>
            </el-menu-item>

            <!-- 3 -->
            <el-menu-item index="3">
              <el-icon>
                <ChatSquare />
              </el-icon>
              <span>home</span>
            </el-menu-item>

            <!-- 4 -->
            <el-menu-item index="4">
              <el-icon>
                <ChatSquare />
              </el-icon>
              <span>home</span>
            </el-menu-item>


          </el-menu>
      </el-aside>

      <!-- 头部 -->
      <el-container>
        <el-header class="header">Header</el-header>
        <el-main class="main">
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

<style lang="scss">
html,body {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-image: url('src\\assets\\background_login.png');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
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



.menu-aside {
  background-color: #200b9a3d;        //侧边栏背景颜色
  backdrop-filter: blur(12px);
  width: 15%;                          //侧边栏宽度


}
.menu_layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.BMS_menu {
  --el-menu-active-color:#00bd1c;  //侧边栏选项字体颜色全局变量（激活）
  --el-menu-text-color : #7b00ff; //侧边栏选项字体颜色全局变量（未激活）
  --el-menu-item-font-size: 20px; //侧边栏选项字体大小全局变量

  font-family: Georgia, 'Times New Roman', Times, serif;
  font-weight: bold;

  border: #6200ff dashed 0px;

  .el-menu-item {
    display: flex;
    align-items: center;
    border-radius: 5px;
    border: #ccdfdf dashed 2px;
    font-weight: bold;
    
  }
 
  
  

  width: 100%;
  background-color: #ffffff00;
  color: rgb(0, 255, 34);
  font-weight: 400;
  font-size: 20px;

  .BMS_menu_title {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
}

// header-----------------------------------
.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #200b9a3d;
  backdrop-filter: blur(12px);
}




// main-------------------------------------
.main {
  display: flex;
  flex-direction: column;

  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100%;
}





</style>