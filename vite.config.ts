import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'app',
      remotes: {
        rickAndMortyMicrofrontend:
          'http://localhost:3005/build/assets/remoteEntry.js',
        harryPotterMicrofrontend:
          'http://localhost:3006/build/assets/remoteEntry.js',
      },
      shared: [
        'react',
        'react-dom',
        'react-router-dom',
        'styled-components',
        'react-i18next',
        'i18next',
      ],
    }),
  ],
  server: {
    host: true,
    port: 3000,
    watch: {
      usePolling: true,
    },
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    outDir: 'build',
  },
})
