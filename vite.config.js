import { defineConfig } from "vite";

export default defineConfig({
  base: "/hangman/",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "./main.js",
        main1: "./main1.js",
        main2: "./main2.js",
        main3: "./main3.js",
        index: "./index.html",
        index1: "./index1.html",
        index2: "./index2.html",
        index3: "./index3.html",
        style: "./style.css",
        style1: "./style1.css",
        style2: "./style2.css",
        style3: "./style3.css",
      },
    },
  },
});
