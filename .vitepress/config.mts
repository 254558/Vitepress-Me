import { defineConfig } from 'vitepress'

function getSidebar() {
  return [
    {
      text: 'Vue',
      collapsible: true, // 是否可折叠
      collapsed: true, // 默认是否折叠
      items: [
        { text: 'prop和emit到底干嘛用的', link: '/vue/Vue 的props和emit是干嘛用的.md' }, 
        { text: 'Vue的this和JS的this是一个东西吗', link: '/vue/Vue的this和JS的this是一个东西吗.md' },
        { text: '哪些数据要写在data里面，哪些要写在script里', link: '/vue/哪些数据要写在data里面，哪些要写在script里.md' }, 
        { text: '最简 Vite + Vue + Element UI 项目快速搭建文档', link: '/vue/最简 Vite + Vue + Element UI 项目快速搭建文档.md' }, 
        { text: 'watch、computed、methods 区别', link: '/vue/watch、computed、methods 区别.md' }, 
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
        { text: '26岁快27岁了，一事无成，这辈子是不是彻底完了？', link: '/english/26岁快27岁了，一事无成，这辈子是不是彻底完了？.md' },
        { text: '如何反驳“别看俄罗斯打的差，你换任何国家，打的估计都没俄罗斯好”？', link: '/english/如何反驳“别看俄罗斯打的差，你换任何国家，打的估计都没俄罗斯好”？.md' },
        { text: '如何判断某个人就是NPD呢？', link: '/english/如何判断某个人就是NPD呢？.md' },
        { text: '为什么大家都说人生的容错率大到无法想象？', link: '/english/为什么大家都说人生的容错率大到无法想象？.md' },
        { text: '为什么很多女人叫老公“队友”', link: '/english/为什么很多女人叫老公“队友”.md' },
        { text: '为什么人会对蟑螂如此厌恶但其他大型昆虫就不会？', link: '/english/为什么人会对蟑螂如此厌恶但其他大型昆虫就不会？.md' },
        { text: '为什么体制内越来越忙，压力也很大？', link: '/english/为什么体制内越来越忙，压力也很大？.md' },
        { text: '为什么现在好多年轻人找工作，都必须要求有双休？', link: '/english/为什么现在好多年轻人找工作，都必须要求有双休？.md' },
        { text: '为什么有那么多高认知的穷人？', link: '/english/为什么有那么多高认知的穷人？.md' },
        { text: '为什么有人会以为自杀是一种解脱？', link: '/english/为什么有人会以为自杀是一种解脱？.md' },
        { text: '我老婆让我结扎，我不想做该怎么办？', link: '/english/我老婆让我结扎，我不想做该怎么办？.md' },
        { text: '现在有的女生消费怎么这么高？', link: '/english/现在有的女生消费怎么这么高？.md' },
        { text: '小明剑魔本身长相与收入等条件都远好于其妻子，为什么面对其妻子时那么卑微？', link: '/english/小明剑魔本身长相与收入等条件都远好于其妻子，为什么面对其妻子时那么卑微？.md' },
        { text: '有哪一个瞬间让你对女朋友彻底失望？', link: '/english/有哪一个瞬间让你对女朋友彻底失望？.md' },
        { text: '有什么历史事件感觉很荒谬但却是事实？', link: '/english/有什么历史事件感觉很荒谬但却是事实？.md' },
        { text: '张维为教授是不是一位值得我们尊敬的学者？', link: '/english/张维为教授是不是一位值得我们尊敬的学者？.md' },
        { text: '这个社会饿不死人的，是真的吗？找不到工作怎么办？', link: '/english/这个社会饿不死人的，是真的吗？找不到工作怎么办？.md' },
        { text: '中国为什么会诞生出那么多高认知的穷人？', link: '/english/中国为什么会诞生出那么多高认知的穷人？.md' },
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