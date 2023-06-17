import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// const path = require('path');

export default defineConfig({
  resolve: {
    alias: {
      '@' : path.resolve(__dirname, './src')
    },
  },
  base: '/Yoga-Studio/',
  plugins: [vue()],
});

