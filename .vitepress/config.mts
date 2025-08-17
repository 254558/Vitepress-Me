import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "把你们都鲨了",
      description: "A VitePress Site",
  themeConfig: {
    logo: 'logoo.svg',
    // https://vitepress.dev/reference/default-theme-config

    sidebar: 
    [
    {
    items: 
    [
      { text: '想嫁人了，想坐享其成', link: '/doc/想嫁人了，想坐享其成' },
      { text: '泽连斯基在后方紧吃', link: '/doc/泽连斯基在后方紧吃' },
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
