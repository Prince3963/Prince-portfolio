import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '10.148.162.40',  // Isse tumhare app ka IP address accessible ho jayega
    port: 5173,        // Tum apne port ko customize kar sakte ho agar required ho
  }
})
