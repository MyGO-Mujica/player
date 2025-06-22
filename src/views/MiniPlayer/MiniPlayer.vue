<template>
  <!-- 底部迷你播放器 -->
    <div class="mini-player">
      <div class="left">
        <img src="https://picsum.photos/300/300?random=1" />
        <div class="info">
          <div class="title">Love Song</div>
          <div class="artist">方大同</div>
        </div>
      </div>
      <div class="controls">
        <span class="material-symbols-outlined">skip_previous</span>
        <span class="material-symbols-outlined">play_arrow</span>
        <span class="material-symbols-outlined">skip_next</span>
      </div>
      <div class="right">
        <span class="material-symbols-outlined">volume_up</span>
      </div>
    </div>
</template>

<style scoped>
/* 底部播放器 */
.mini-player {
  height: 60px;
  background-color: var(--bg-color);
  color: var(--text-color);
  border-top: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.mini-player .left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.mini-player .left img{
     width: 40px;
  height: 40px;
  margin-right: 12px;
}
.mini-player .info .title {
  font-weight: bold;
}

.controls span {
  margin: 0 10px;
  font-size: 28px;
  cursor: pointer;
}

.right span {
  margin-left: 10px;
  cursor: pointer;
}
</style>
