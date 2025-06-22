<script setup>
  import { useRouter } from 'vue-router'
  const router = useRouter()
  </script>
<template>
   <!-- 左侧边栏 -->
     <div class="sidebar">
      <ul class="menu">
    <router-link to="/local" class="menu-item" custom v-slot="{ navigate, isActive }">
      <li @click="navigate" :class="{ active: isActive }">
        <span class="material-symbols-outlined">library_music</span>
        <span>本地音乐</span>
      </li>
    </router-link>

    <router-link to="/video" class="menu-item" custom v-slot="{ navigate, isActive }">
      <li @click="navigate" :class="{ active: isActive }">
        <span class="material-symbols-outlined">smart_display</span>
        <span>视频识别</span>
      </li>
    </router-link>

    <router-link to="/settings" class="menu-item" custom v-slot="{ navigate, isActive }">
      <li @click="navigate" :class="{ active: isActive }">
        <span class="material-symbols-outlined">settings</span>
        <span>设置</span>
      </li>
    </router-link>
  </ul>
  </div>
</template>

<style scoped>
/* 侧边栏 */
.sidebar {
  width: 220px;
  background-color: var(--layout-color);
  color: var(--text-color);
  border-right: 1px solid #eee;
  padding: 16px;
}

ul.menu {
  padding: 0;
  list-style: none;
}

.menu li {
  list-style: none;
  color: inherit;           /* 使用父元素颜色 */
  text-decoration: none;    
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 5px;
  cursor: pointer;
  border-radius: 6px;
  transition: background-color 0.2s;
}

.menu-item {
  color: inherit;           /* 使用父元素颜色 */
  text-decoration: none;    /* 去掉下划线 */
  display: flex;            /* 可选，像 flex 项那样排列图标+文字 */
  align-items: center;
  gap: 8px;
}


.menu li:hover{
   background-color: rgba(209, 207, 207, 0.3);
}
.menu li.active {
  background-color: rgba(209, 207, 207, 0.8);
}
</style>
