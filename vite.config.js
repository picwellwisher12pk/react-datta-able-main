import { defineConfig } from 'vite'
import ViteRequireContext from '@originjs/vite-plugin-require-context'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),ViteRequireContext()],
  esbuild: {
    loader: "tsx",
    include: [
      // Business as usual for .jsx and .tsx files
      "src/**/*.jsx",
      "src/**/*.tsx",
      "node_modules/**/*.jsx",
      "node_modules/**/*.tsx",


      // Add these lines to allow all .js files to contain JSX
      "src/**/*.js",
      "node_modules/**/*.js",

    ],
    exclude: [],
  }
})
