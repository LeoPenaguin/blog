export default {
  title: "Léo PNG",
  description: "Just playing around.",
  lang: 'fr-FR',
  base: '/blog/',
  lastUpdated: true,
  themeConfig: {
    editLink: {
        pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
        text: 'Modifier cette page sur GitHub'
      },
    nav: [
      { text: 'Hello', link: '/pages/hello' },
      { text: 'Test', link: '/pages/test' },
      { text: 'Changelog', link: 'https://github.com/...' }
    ],
    footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2023-present Léo Penaguin'
      }
  }
};
