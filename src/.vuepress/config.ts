import { defineUserConfig } from "vuepress";
import { cut } from "nodejs-jieba";
import { umamiAnalyticsPlugin } from 'vuepress-plugin-umami-analytics'
import { searchProPlugin } from "vuepress-plugin-search-pro"
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "运维开发绿皮书",
  description: "运维开发绿皮书,放置我的笔记、搜集、摘录、实践，保持好奇心。看文需谨慎，后果很严重。",

  theme,

  plugins: [
    searchProPlugin({
      indexContent: true,
      worker: "search-pro-worker-XPathResult.js",
      hotReload: true,
      indexOptions: {
        tokenize: (text, fieldName) =>
          fieldName === "id" ? [text] : cut(text, true),
      },
      // customFields: [
      //   // {
      //   //   getter: ({ frontmatter }) =>
      //   //     <string | undefined>frontmatter.category ?? null,
      //   //   formatter: "分类: $content",
      //   // },
      // ],
      autoSuggestions: false,
      suggestDelay: 60,
    }),
    umamiAnalyticsPlugin({
      // options 
      id: "eecd3f56-5668-4c9e-b123-b2853b91a310",
      src: "https://analytics.umami.is/script.js"
    }),
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});
