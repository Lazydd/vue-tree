import { defineConfig } from 'vitepress'
import zh from './zh.mjs'
import en from './en.mjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vue-tree/',
  title: "Vue Tree",
  description: "Virtual list optimized Vue tree component",
  appearance: false,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/wsfe/vue-tree' }
    ]
  },

  locales: {
    root: {
      label: '简体中文',
      ...zh,
    },
    en: {
      label: 'English',
      ...en,
    },
  },
})