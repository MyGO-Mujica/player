<template>
  <div class="app-window">
    <TitleBar />
    <div class="main-area">
      <Sidebar />
      <router-view />
    </div>
    <MiniPlayer />
  </div>
</template>

<script setup>
import TitleBar from './views/titleBar/TitleBar.vue'
import Sidebar from './views/layout/Sidebar.vue'
import MiniPlayer from './views/MiniPlayer/MiniPlayer.vue'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body, html {
  height: 100%;
  font-family: Arial, sans-serif;
}

.app-window {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

/* 主体区域 */
.main-area {
  flex: 1;
  display: flex;
  background-color: var(--bg-color);
  color: var(--text-color);
}

</style>
