import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        // ReactComponentという名前でエクスポートする設定
        icon: true, // これを有効にすると、SVGアイコンとしてインポートされます
        titleProp: true, // titlePropを使ってSVGのtitleを制御できます
      }
    })
  ],
  server: {
    port: 3000,
  }
})
