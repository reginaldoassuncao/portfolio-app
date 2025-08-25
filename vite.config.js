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
    
    // Minify for production
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true
      }
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
