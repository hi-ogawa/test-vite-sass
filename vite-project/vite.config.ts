import { defineConfig } from "vite";

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: process.env.VITE_SASS_API ?? "modern-compiler"
      }
    }
  }
})
