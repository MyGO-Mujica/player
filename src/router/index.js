import { createRouter, createWebHistory } from 'vue-router'

// 页面组件
import LocalMusic from '../components/LocalMusic.vue'
import VideoRecognition from '../components/VideoRecognition.vue'
import Settings from '../components/Settings.vue'

const routes = [
  { path: '/', redirect: '/' },
  { path: '/local', component: LocalMusic },
  { path: '/video', component: VideoRecognition },
  { path: '/settings', component: Settings },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
