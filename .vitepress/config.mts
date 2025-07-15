import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "把你们都鲨了",
      description: "A VitePress Site",
  themeConfig: {
    logo: 'logoo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/' },
      { text: '参考', link: '/doc/Vue router' }
    ],

    sidebar: [
      {
      text: 'vue 路由',
      collapsed: false,
      items: [
        { text: '举例', link: '/doc/Vue router' },
      ]
    },
    {
      text: '写作',
      collapsed: false,
      items: [
        { text: '？', link: 'doc/什么？.md' },
      ]
    },
    ],

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
