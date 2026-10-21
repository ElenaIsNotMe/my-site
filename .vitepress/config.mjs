import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/my-site/',  // нужно для хостинга
  title: "Е. К.",
  description: "Мой личный сайт",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
//    nav: [
//     { text: 'Home', link: '/' },
//      { text: 'Examples', link: '/markdown-examples' }
//    ],

    nav: [
      { text: 'Обо мне', link: '/aboutme' },
      { text: 'Резюме', link: '/cv' }
    ],

//    sidebar: [
//      {
//        text: 'Examples',
//        items: [
//          { text: 'Markdown Examples', link: '/markdown-examples' },
//          { text: 'Runtime API Examples', link: '/api-examples' }
//        ]
//      }
//    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
