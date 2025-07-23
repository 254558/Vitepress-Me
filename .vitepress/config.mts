import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "把你们都鲨了",
      description: "A VitePress Site",
  themeConfig: {
    logo: 'logoo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/doc/introduce' },
      { text: '参考', link: '/doc/Vue router' }
    ],

    sidebar: 
    [

    {
    text: 'vue 路由',
    collapsed: false,
    items: 
    [
      { text: '举例', link: '/doc/Vue router' },
    ]
    },

    {
    text: 'Pinia',
    collapsed: false,
    items: 
    [
      { text: '举例', link: '/doc/Vue router' },
    ]
    },


    {
      text: 'supabase',
      collapsed: false,
      items: 
      [
        { text: '怎么用？', link: 'doc/how.md' },
      ]
    },


    {
      text: '无聊的前端面试题',
      collapsed: false,
      items: 
      [
        {
        text: 'CSS',collapsed: true,
        items: 
        [
          { text: 'Flexbox', link: '/doc/interview/css/说说flexbox' },
          { text: '盒模型', link: '/doc/interview/css/说说你对盒子模型的理解' },
          { text: '水平垂直居中', link: '/doc/interview/css/元素水平垂直居中的方法有哪些' },
          { text: 'gird', link: '/doc/interview/css/grid布局' },
        ]
        },

        {
        text: 'JavaScript',
        collapsed: true,
        items: 
        [
          { text: '原型与原型链', link: '/doc/interview/js/JavaScript原型，原型链' },
          { text: '深浅拷贝', link: '/doc/interview/js/深拷贝浅拷贝的区别' },
          { text: '闭包', link: '/doc/interview/js/说说你对闭包的理解' },
        ]
        },

        {
        text: 'Vue.js',
        collapsed: true,
        items: 
        [
          { text: 'Vue3比Vue2', link: '/doc/interview/vue/Vue3 的响应式为什么比 Vue2 更强' },
        ]
        },
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
