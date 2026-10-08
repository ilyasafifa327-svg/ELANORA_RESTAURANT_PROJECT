import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        menu: resolve(__dirname, 'menu.html'),
        chefs: resolve(__dirname, 'chefs.html'),
        reservation: resolve(__dirname, 'reservation.html'),
        contact: resolve(__dirname, 'contact.html')
      }
    }
  }
})
