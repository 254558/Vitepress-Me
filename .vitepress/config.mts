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

        { text: '能不能不看', link: 'doc/cao1.md' },

        {
        text: 'CSS',collapsed: true,
        items: 
        [
          { text: '隐藏元素的方式', link: '/doc/interview/css/css有哪些方式可以隐藏页面元素.md' },
          { text: 'Flexbox 布局', link: '/doc/interview/css/说说flexbox' },
          { text: '盒模型', link: '/doc/interview/css/说说你对盒子模型的理解' },
          { text: '水平垂直居中', link: '/doc/interview/vue/元素水平垂直居中的方法有哪些' },
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
          { text: '性能优化', link: '/doc/interview/vue/性能优化' },
          { text: 'v-if 与 v-for', link: '/doc/interview/vue/directive-priority' },
          { text: 'v-show 与 v-if ', link: '/doc/interview/vue/v-if和v-for的优先级是什么' },
          { text: 'key 属性原理', link: '/doc/interview/vue/vue中key的原理' },
          { text: '过滤器', link: '/doc/interview/vue/Vue中的过滤器' },
          { text: '挂载过程', link: '/doc/interview/vue/Vue实例挂载的过程' },
          { text: '常用修饰符', link: '/doc/interview/vue/Vue常用的修饰符有哪些' },
          { text: 'Diff 算法', link: '/doc/interview/vue/vue的diff算法' },
          { text: 'Mixin', link: '/doc/interview/vue/vue的mixin' },
          { text: '组件通信', link: '/doc/interview/vue/Vue组件之间的通信方式都有哪些' },
          { text: '权限管理', link: '/doc/interview/vue/vue要做权限管理' },
          { text: '跨域处理', link: '/doc/interview/vue/Vue项目中你是如何解决跨域' },
          { text: 'Axios 封装', link: '/doc/interview/vue/Vue项目中有封装过axios吗' },
          { text: '防抖与节流', link: '/doc/interview/vue/什么是防抖和节流' },
          { text: '双向绑定', link: '/doc/interview/vue/双向数据绑定是什么' },
          { text: 'Keep-Alive', link: '/doc/interview/vue/说说你对keep-alive的理解' },
          { text: 'Vue3比Vue2', link: '/doc/interview/vue/Vue3 的响应式为什么比 Vue2 更强' },
          { text: 'async和await', link: '/doc/interview/vue/async和await' },
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
