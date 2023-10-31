import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as i,c as r,a as e,e as t,d as l,f as c}from"./app-e801a6f5.js";const a={},d=e("h1",{id:"centos7-yum-install-git2-x-较新版本",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#centos7-yum-install-git2-x-较新版本","aria-hidden":"true"},"#"),t(" Centos7 yum install git2.x(较新版本)")],-1),_=e("p",null,"centos7 默认的git版本是1.8.x",-1),p=e("pre",null,[e("code",null,`# git --version
git version 1.8.3.1
`)],-1),u=e("p",null,"升级依然没有升级到2.x版本",-1),h=e("pre",null,[e("code",null,`yum -y upgrade git
`)],-1),g=e("p",null,"在Git的官网上，对Red Hat Linux安装git建议有两种",-1),m=e("pre",null,[e("code",null,`1、下载源代码、编译、构建、配置环境变量
2、第三方仓库IUS
`)],-1),x={href:"https://blog.csdn.net/Juladoe/article/details/76170193",target:"_blank",rel:"noopener noreferrer"},y=e("br",null,null,-1),f=c(`<p>这里是 ius 官方的安装说明及使用说明</p><p>1.安装使用里面说的自动化安装脚本</p><pre><code>curl https://setup.ius.io | sh
</code></pre><p>2.然后可以看到 git2u相关内容</p><pre><code># yum search git 

...
git.x86_64 : Fast Version Control System
git2u.x86_64 : Fast Version Control System
gitflow.noarch : Extensions providing operations for V. Driessen&#39;s branching model
...
</code></pre><p>3.执行安装，并查看下版本</p><pre><code># yum remove -y git | yum -y install git2u

# git --version

git version 2.16.4
</code></pre><p>关于IUS</p><p>IUS第三方仓库不仅仅用于 git 的安装，它是包含了很多软件工具，它的使用指南里说明了一切</p><pre><code>redis40u、redis32u、mysql56u、python36u、、 
</code></pre>`,10);function v(S,V){const n=s("ExternalLinkIcon");return i(),r("div",null,[d,_,p,u,h,g,m,e("p",null,[t("对于第一种方式，可以参考其他人的博客，例如"),e("a",x,[t("https://blog.csdn.net/Juladoe/article/details/76170193"),l(n)]),y,t(" Git第三方仓库安装方式（IUS）")]),f])}const I=o(a,[["render",v],["__file","Centos7 yum install git2.x 较新版本.html.vue"]]);export{I as default};
