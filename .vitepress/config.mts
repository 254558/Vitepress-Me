import { defineConfig } from 'vitepress'

function getSidebar() {
  return [
    {
      text: 'Vue',
      collapsible: true, // 是否可折叠
      collapsed: false, // 默认是否折叠
      items: [
        { text: '快速开始', link: '/guide/quick-start' }, // 对应 docs/guide/quick-start.md
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
      text: '英语',
      collapsible: true, // 是否可折叠
      collapsed: false, // 默认是否折叠
      items: [
        { text: '擦边行业为什么男性占比这么少', link: '/english/擦边行业为什么男性占比这么少.md' },
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