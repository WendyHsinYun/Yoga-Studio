import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import vuetify from 'vite-plugin-vuetify'


export default defineConfig({
  resolve: {
    alias: {
      '@' : path.resolve(__dirname, './src')
    },
  },
  base: process.env.NODE_ENV === 'production' ? '/Yoga-Studio/' : './',
  // base: '/Yoga-Studio/', // for github pages
  plugins: [
		vue(),
		vuetify({ autoImport: true }),
	],
  build: {
    minify: true,
  },

});

