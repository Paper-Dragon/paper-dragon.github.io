import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { viteBundler } from '@vuepress/bundler-vite'
import { path } from "vuepress/utils";
import copyplus from "./copyplus.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "运维开发绿皮书",
  description: "放置运维开发笔记、搜集、摘录、实践，保持好奇心，看文需谨慎，后果很严重！",

  bundler: viteBundler(),
  theme,

  plugins: [
    copyplus
  ],

  // 修改页面模板，https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/packages/theme/templates/index.build.html
  // 配置参考：https://vuepress.github.io/zh/reference/theme-api.html#templatebuild
  templateBuild: path.resolve(__dirname, "templateBuild.html"),

  templateDev: path.resolve(__dirname, "templateBuild.html"),

  head: [
      ["script",
        {},
      `
      /*禁用F12*/
      document.onkeydown = function(){
          if(window.event.keyCode==123) {
              var x;
              var r=confirm('大佬，别扒了！不妨加个友链？\\n点击确认键跳转到友链！\\n\\n执意要做？亦或是再按下F12可调出控制台\\n');
              if (r==true){
                //x="你按下的是\\"确定\\"按钮。";
                window.location.replace("/友链/友链.html");
              }
              else{
                x="你按下的是\\"取消\\"按钮。";
              }
              // document.write(x)
              event.preventDefault(); // 阻止默认事件行为
              event.keyCode=0;
              event.returnValue=false;
          }
      }
      `,
      ],
  ],

  // Enable it with pwa
  shouldPrefetch: false,
});

