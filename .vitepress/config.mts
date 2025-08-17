import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'

// 获取 doc/ 下的所有 md 文件，生成 sidebar
function getSidebar() {
  const docsPath = path.resolve(__dirname, '../doc')
  const files = fs.readdirSync(docsPath)

  return [
    {
      text: '文档',
      items: files
        .filter((file) => file.endsWith('.md'))
        .map((file) => {
          const name = file.replace('.md', '')
          return {
            text: name,
            link: '/doc/' + name
          }
        })
    }
  ]
}


export default defineConfig({
  title: "把你们都鲨了",
  description: "A VitePress Site",
  themeConfig: {
    logo: 'logoo.svg',

    sidebar: getSidebar(),

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})