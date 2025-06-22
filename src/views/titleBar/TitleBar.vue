<script setup>
import { ref, onMounted } from 'vue'

const currentTheme = ref('light')

function toggleTheme() {
  currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', currentTheme.value)
}

onMounted(() => {
  // 初始设定
  document.documentElement.setAttribute('data-theme', currentTheme.value)
})
</script>
<template>
  <!-- 顶部标题栏 -->
    <div class="title-bar">
      <div class="logo">qmediaplayer</div>
      <div class="title-controls">
        <span class="material-symbols-outlined"  @click="toggleTheme">dark_mode</span>
        <span class="material-symbols-outlined">remove</span>
        <span class="material-symbols-outlined">crop_square</span>
        <span class="material-symbols-outlined">close</span>
      </div>
    </div>
</template>

<style scoped>
/* 顶部栏 */
.title-bar {
  height: 48px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  background-color: var(--bg-color);
  color: var(--text-color);
  border-bottom: 1px solid #ddd;
  justify-content: space-between;
}

.app-window .title-bar .logo{
    font-family: "Dancing Script", cursive;
    font-weight: bold;
    font-size: 1.5em; /* 可能需要更大 */
    letter-spacing: 0.02em; /* 字间距不宜过大，以免影响连笔效果 */
}

.title-controls span {
  margin-left: 12px;
  cursor: pointer;
  font-size: 20px;
}

</style>