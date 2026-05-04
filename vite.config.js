import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // registerType handles how the service worker is updated. 
      // 'autoUpdate' is the simplest way for beginners.
      registerType: 'autoUpdate',
      
      // These are extra assets like your favicon and icons that should be cached.
      includeAssets: ['favicon.ico', 'apple-touch-icon.png'],

      // The Web App Manifest makes your app look like a real app on a phone.
      manifest: {
        name: 'Idea Forge',
        short_name: 'Idea Forge',
        description: 'A platform for generating and refining ideas collaboratively.',
        theme_color: '#0f0f1e',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },

      // IMPORTANT FOR BEGINNERS TO TEST:
      // This section allows the PWA to work while you are running 'npm run dev'.
      // Without this, you would only see it working after you 'build' the project.
      devOptions: {
        enabled: true
      }
    })
  ]
});
