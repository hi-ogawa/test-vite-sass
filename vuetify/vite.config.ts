import { defineConfig } from "vite";

const sassOptions = {
  api: process.env.VITE_SASS_API ?? "modern-compiler",

  // https://github.com/sass/dart-sass/issues/2276
  silenceDeprecations: ['mixed-decls'],

  // it doesn't seem affect much
  // functions: {
  //   '__force_no_worker()'() {}
  // },
}

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: sassOptions,
      sass: sassOptions
    }
  }
})
