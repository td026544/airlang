import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// 👇 1. 請將這裡改成您的 GitHub Repository 名稱
// 例如：https://user.github.io/my-app/，這裡就要填 '/my-app/'
// 務必注意：前後都要有斜線
const REPO_NAME = '/airlang/'; 

export default defineConfig({
  // 👇 2. 設定 Base URL (這是解決空白頁的關鍵)
  base: REPO_NAME, 

  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Quick Learn App',
        short_name: 'QuickLearn',
        description: '離線學習 App',
        theme_color: '#ffffff',
        
        // 👇 3. 告訴 PWA 你的 App 在哪個子路徑
        // 如果沒設這兩個，PWA 安裝後打開會跑到 404 頁面
        start_url: REPO_NAME,
        scope: REPO_NAME,

        icons: [
          {
            src: 'pwa-192x192.png', 
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        // 確保 WebP 被快取 (這部分您原本寫得很好，不用動)
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp}'], 
        maximumFileSizeToCacheInBytes: 4000000, // 4MB (原本預設是 2MB)
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === 'image',
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30, 
              },
            },
          },
        ],
      },
    })
  ],
})