import { defineConfig } from "vitepress";
import { getSidebar } from "./sidebar";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  title: "把你们都鲨了",
  description: "A VitePress Site",  
  ignoreDeadLinks: true,
  vite: {
    plugins: [tailwindcss()]
  },

  themeConfig: {
    logo: "logoo.svg",
    sidebar: getSidebar(),

    search: {
      provider: "local",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],

    nav: [
      { text: "首页", link: "/" },
      { text: "GitHub", link: "https://github.com/254558?tab=repositories" },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present 把你们都鲨了",
    },
  },

  markdown: {
    theme: "github-dark",
    lineNumbers: true,
    math: true
  },
});