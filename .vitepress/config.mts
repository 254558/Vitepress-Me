import { defineConfig } from 'vitepress'

function getSidebar() {
  return [
    {
      text: 'Vue',
      collapsible: true, // 是否可折叠
      collapsed: true, // 默认是否折叠
      items: [
        { text: 'prop和emit到底干嘛用的', link: '/vue/Vue 的props和emit是干嘛用的.md' }, 
        { text: 'Vue的this和JS的this是一个东西吗', link: '/vue/Vue的this和JS的this是一个东西吗.md' }, // 对应 docs/guide/quick-start.md
      ]
    },
    {
      text: 'Lodash',
      collapsible: true,
      collapsed: true,
      items: [
        { text: '数组', link: '/lodash/Array.md' },
      ]
    },
    {
      text: 'English',
      collapsible: true, 
      collapsed: true, 
      items: [
        { text: '擦边行业为什么男性占比这么少', link: '/english/擦边行业为什么男性占比这么少.md' },
        { text: '不想努力想嫁人有错吗', link: '/english/想嫁人了，想坐享其成.md' },
        { text: '为什么都2025年了很多人还认为卫生巾必须装在深色袋子里？', link: '/english/为什么都2025年了很多人还认为卫生巾必须装在深色袋子里？.md' },
        { text: '二十万彩礼真的很多吗？', link: '/english/二十万彩礼真的很多吗？.md' },
        { text: '为什么当代女性喜欢称结婚后是免费保姆？', link: '/english/为什么当代女性喜欢称结婚后是免费保姆？.md' },
        { text: '为什么感觉身边的女生思维都非常浅薄？', link: '/english/为什么感觉身边的女生思维都非常浅薄？.md' },
      ]
    }
  ]
}

export default defineConfig({
  title: "把你们都鲨了",
  description: "A VitePress Site",
  themeConfig: {
    logo: 'logoo.svg', // 确保该文件在 docs/public 目录下
    sidebar: getSidebar(),
    search: {
      provider: 'local' // 本地搜索
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    // 可选：添加导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/guide/quick-start' },
      { text: '组件', link: '/components/button' },
      { text: 'GitHub', link: 'https://github.com/vuejs/vitepress' }
    ],
    // 可选：页脚配置
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present 把你们都鲨了'
    }
  },
  // 可选：配置站点基础路径（如果部署在子路径下）
  // base: '/your-repo-name/',
  // 可选：Markdown 配置
  markdown: {
    theme: 'github-dark', // 暗色主题
    lineNumbers: true // 显示行号
  }
})