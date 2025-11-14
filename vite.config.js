import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/headlinesHub-React/',
  "scripts": { "dev": "vite", "build": "vite build", "preview": "vite preview", "host": "vite --host" },
})

