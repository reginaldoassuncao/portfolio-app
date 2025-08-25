import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Performance optimizations
  build: {
    // Enable CSS code splitting
    cssCodeSplit: true,
    
    // Optimize chunk sizes
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor libraries
          vendor: ['react', 'react-dom'],
          icons: ['lucide-react']
        }
      }
    },
    
    // Minify for production (usando esbuild que já está incluído)
    minify: 'esbuild',
    
    // Configurações de minificação
    esbuild: {
      drop: ['console', 'debugger'] // Remove console.logs e debuggers em produção
    }
  },
  
  // Preview settings for local testing
  preview: {
    port: 5173,
    strictPort: true,
    open: true
  },
  
  // Development server settings
  server: {
    port: 5173,
    strictPort: true,
    open: true
  }
})
