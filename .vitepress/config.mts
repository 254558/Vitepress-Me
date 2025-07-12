import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "把你们都鲨了",
  description: "A VitePress Site",
  themeConfig: {
    logo: '/logoo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/' },
      { text: '参考', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
