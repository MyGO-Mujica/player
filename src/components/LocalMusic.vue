<template>
  <!-- 中间内容 -->
  <div class="content-area">
    <div class="section-header">
      <h2>本地音乐</h2>
      <div class="section-actions">
            <button>点击上传本地音乐</button>
          </div>
    </div>

    <!-- 🆕 表头行 -->
    <div class="song-header">
      <div class="song-info-label">歌曲 / 歌手</div>
      <div class="album-label">专辑</div>
      <div class="duration-label">时长</div>
    </div>

    <div class="song-list">
      <div class="song-item">
        <img src="https://picsum.photos/300/300?random=1" />
        <div class="song-info">
          <div class="title">Love Song</div>
          <div class="artist">方大同</div>
        </div>
        <div class="song-meta">
          <span>未来</span>
          <span>05:57</span>
        </div>
      </div>
      <!-- 可复制多条 -->
         <div class="song-item">
        <img src="https://picsum.photos/300/300?random=1" />
        <div class="song-info">
          <div class="title">Love Song</div>
          <div class="artist">方大同</div>
        </div>
        <div class="song-meta">
          <span>未来</span>
          <span>05:57</span>
        </div>
      </div>
        <div class="song-item">
        <img src="https://picsum.photos/300/300?random=1" />
        <div class="song-info">
          <div class="title">Love Song</div>
          <div class="artist">方大同</div>
        </div>
        <div class="song-meta">
          <span>未来</span>
          <span>05:57</span>
        </div>
      </div>  <div class="song-item">
        <img src="https://picsum.photos/300/300?random=1" />
        <div class="song-info">
          <div class="title">Love Song</div>
          <div class="artist">方大同</div>
        </div>
        <div class="song-meta">
          <span>未来</span>
          <span>05:57</span>
        </div>
      </div>  <div class="song-item">
        <img src="https://picsum.photos/300/300?random=1" />
        <div class="song-info">
          <div class="title">Love Song</div>
          <div class="artist">方大同</div>
        </div>
        <div class="song-meta">
          <span>未来</span>
          <span>05:57</span>
        </div>
      </div>  <div class="song-item">
        <img src="https://picsum.photos/300/300?random=1" />
        <div class="song-info">
          <div class="title">Love Song</div>
          <div class="artist">方大同</div>
        </div>
        <div class="song-meta">
          <span>未来</span>
          <span>05:57</span>
        </div>
      </div>  <div class="song-item">
        <img src="https://picsum.photos/300/300?random=1" />
        <div class="song-info">
          <div class="title">Love Song</div>
          <div class="artist">方大同</div>
        </div>
        <div class="song-meta">
          <span>未来</span>
          <span>05:57</span>
        </div>
      </div>  <div class="song-item">
        <img src="https://picsum.photos/300/300?random=1" />
        <div class="song-info">
          <div class="title">Love Song</div>
          <div class="artist">方大同</div>
        </div>
        <div class="song-meta">
          <span>未来</span>
          <span>05:57</span>
        </div>
      </div>  <div class="song-item">
        <img src="https://picsum.photos/300/300?random=1" />
        <div class="song-info">
          <div class="title">Love Song</div>
          <div class="artist">方大同</div>
        </div>
        <div class="song-meta">
          <span>未来</span>
          <span>05:57</span>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
/* 内容区域 */
.content-area {
  flex: 1;
  padding: 20px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.song-header {
  display: flex;
  align-items: center;
  padding: 8px 0;
  font-weight: bold;
  color: #666;
  border-bottom: 1px solid #ddd;
  margin-top: 5px;
  font-size: 12px;
}

.section-actions button {
  margin-right: 60px;
  padding: 6px 12px;
  border: none;
  font-weight: bold;
  background-color: #3ecf8e;
  color:var(--uploadBtn--color);
  border-radius: 8px;
  cursor: pointer;
}

.song-info-label {
  flex: 1;
  padding-left: 15px; 
}

.album-label {
  width: 150px;
  margin-right: 30px;
}

.duration-label {
  width: 80px;
   margin-right: 40px;
}




.song-item {
  display: flex;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
}

.song-item img {
  width: 40px;
  height: 40px;
  margin-right: 12px;
}

.song-info {
  flex: 1;
}

.song-info .title {
  font-weight: bold;
}

.song-meta {
  display: flex;
  gap: 150px;
  color: gray;
  padding-right: 80px;
}
</style>
