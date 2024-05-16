import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as o,d as n}from"./app-DOdwOmWZ.js";const i={},r=n(`<h1 id="centos7的yum安装较新版本git2-x" tabindex="-1"><a class="header-anchor" href="#centos7的yum安装较新版本git2-x"><span>Centos7的yum安装较新版本git2.x</span></a></h1><p>centos7 默认的git版本是1.8.x</p><pre><code># git --version
git version 1.8.3.1
</code></pre><p>升级依然没有升级到2.x版本</p><pre><code>yum -y upgrade git
</code></pre><p>在Git的官网上，对Red Hat Linux安装git建议有两种</p><pre><code>1、下载源代码、编译、构建、配置环境变量
2、第三方仓库IUS
</code></pre><p>对于第一种方式，可以参考其他人的博客，例如https://blog.csdn.net/Juladoe/article/details/76170193 Git第三方仓库安装方式（IUS）</p><p>这里是 ius 官方的安装说明及使用说明</p><p>1.安装使用里面说的自动化安装脚本</p><pre><code>curl https://setup.ius.io | sh
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
</code></pre>`,18),p=[r];function a(s,c){return e(),o("div",null,p)}const m=t(i,[["render",a],["__file","Centos7的yum安装较新版本git2.x.html.vue"]]),l=JSON.parse('{"path":"/note-book/Git/Centos7%E7%9A%84yum%E5%AE%89%E8%A3%85%E8%BE%83%E6%96%B0%E7%89%88%E6%9C%ACgit2.x.html","title":"Centos7的yum安装较新版本git2.x","lang":"zh-CN","frontmatter":{"description":"Centos7的yum安装较新版本git2.x centos7 默认的git版本是1.8.x 升级依然没有升级到2.x版本 在Git的官网上，对Red Hat Linux安装git建议有两种 对于第一种方式，可以参考其他人的博客，例如https://blog.csdn.net/Juladoe/article/details/76170193 Git第三...","head":[["meta",{"property":"og:url","content":"https://paper-dragon.github.io/note-book/Git/Centos7%E7%9A%84yum%E5%AE%89%E8%A3%85%E8%BE%83%E6%96%B0%E7%89%88%E6%9C%ACgit2.x.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"Centos7的yum安装较新版本git2.x"}],["meta",{"property":"og:description","content":"Centos7的yum安装较新版本git2.x centos7 默认的git版本是1.8.x 升级依然没有升级到2.x版本 在Git的官网上，对Red Hat Linux安装git建议有两种 对于第一种方式，可以参考其他人的博客，例如https://blog.csdn.net/Juladoe/article/details/76170193 Git第三..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T08:29:56.000Z"}],["meta",{"property":"article:author","content":"PaperDragon"}],["meta",{"property":"article:modified_time","content":"2024-03-25T08:29:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Centos7的yum安装较新版本git2.x\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-25T08:29:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[],"git":{"createdTime":1691939318000,"updatedTime":1711355396000,"contributors":[{"name":"PaperDragon-SH","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":0.85,"words":255},"filePathRelative":"note-book/Git/Centos7的yum安装较新版本git2.x.md","localizedDate":"2023年8月13日","excerpt":"\\n<p>centos7 默认的git版本是1.8.x</p>\\n<pre><code># git --version\\ngit version 1.8.3.1\\n</code></pre>\\n<p>升级依然没有升级到2.x版本</p>\\n<pre><code>yum -y upgrade git\\n</code></pre>\\n<p>在Git的官网上，对Red Hat Linux安装git建议有两种</p>\\n<pre><code>1、下载源代码、编译、构建、配置环境变量\\n2、第三方仓库IUS\\n</code></pre>\\n<p>对于第一种方式，可以参考其他人的博客，例如https://blog.csdn.net/Juladoe/article/details/76170193\\nGit第三方仓库安装方式（IUS）</p>","autoDesc":true}');export{m as comp,l as data};
