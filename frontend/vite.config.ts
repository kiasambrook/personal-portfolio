import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), chunkSplitPlugin({
    strategy: 'single-vendor',
    customChunk: (args) => {
      let { file, id, moduleId, root } = args;
      if (file.startsWith('src/pages/')) {
        file = file.substring(4);
        file = file.replace(/\.[^.$]+$/, '');
        return file;
      }
      return null;
    },
    customSplitting: {
      'react-vendor': [/react/, /react-dom/],
      'utils': [/src\/utils/]
    }
  })],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@customTypes': path.resolve(__dirname, 'src/types'),
    },
  },
})