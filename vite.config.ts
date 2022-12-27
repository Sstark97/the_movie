import { defineConfig, loadEnv, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

const getAlliases = () => {
  return {
    '@assets': resolve('src/assets'),
    '@components': resolve('src/components'),
    '@containers': resolve('src/containers'),
    '@styles': resolve('src/styles'),
  }
}

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd())

  if (command === 'serve' && mode === 'development') {
    return {

      plugins: [react()],
      resolve: {
        alias: getAlliases(),
      },
      server: {
        port: parseInt(env.VITE_PORT),
      }
    }
  } else {

    return {
 
      plugins: [react(), splitVendorChunkPlugin()],
      build: {
        outDir: 'build',
        chunkSizeWarningLimit: 1000,
        minify: 'esbuild',
      },
      resolve: {
        alias: getAlliases(),
      },
    }
  }
})
