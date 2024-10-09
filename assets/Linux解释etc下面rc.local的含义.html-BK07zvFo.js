import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{aj as a,ao as t,am as l}from"./app-COjiYc5s.js";const e={};function n(c,i){return l(),a("div",null,i[0]||(i[0]=[t(`<h1 id="linux解释etc下面rc-local的含义" tabindex="-1"><a class="header-anchor" href="#linux解释etc下面rc-local的含义"><span>Linux解释etc下面rc.local的含义</span></a></h1><blockquote><p>rc.local是在系统启动过程中不起眼的一个文件，现在对这个文件进行解释。</p></blockquote><h2 id="初探这个文件" tabindex="-1"><a class="header-anchor" href="#初探这个文件"><span>初探这个文件</span></a></h2><blockquote><p>这个配置文件会在用户登陆之前读取，这个文件中写入了什么命令，在每次系统启动时都会执行一次。也就是说，如果有任何需要在系统启动时运行的工作，则只需写入 /etc/rc.d/rc.local 配置文件即可。这个文件的内容如下：</p></blockquote><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@hcss-ecs-3689 etc]# cat /etc/rc.local</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#!/bin/bash</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># THIS FILE IS ADDED FOR COMPATIBILITY PURPOSES</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># It is highly advisable to create own systemd services or udev rules</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># to run scripts during boot instead of using this file.</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># In contrast to previous versions due to parallel execution during boot</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># this script will NOT be run after all other services.</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># Please note that you must run &#39;chmod +x /etc/rc.d/rc.local&#39; to ensure</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># that this script will be executed during boot.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">touch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /var/lock/subsys/local</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解释语句" tabindex="-1"><a class="header-anchor" href="#解释语句"><span>解释语句</span></a></h2><p>整个文件只有一个语句，作用是<strong>系统的启动时间。</strong></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">touch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /var/lock/subsys/local</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>默认会touch这个文件，每次系统启动时都会touch这个文件，这个文件的修改时间就是<strong>记录系统的启动时间</strong></p><p>然后我查看了touch命令的man页，touch不止有创建文件的作用还有创建文件时更改日期的作用。</p><p>用法奇特。</p><h2 id="解释" tabindex="-1"><a class="header-anchor" href="#解释"><span>解释</span></a></h2><p>这句指令的作用只有一个，就是记录开机时间的隐形命令，touch完了立马rm.</p>`,13)]))}const o=s(e,[["render",n],["__file","Linux解释etc下面rc.local的含义.html.vue"]]),d=JSON.parse(`{"path":"/note-book/LinuxOperaSystem/Linux%E8%A7%A3%E9%87%8Aetc%E4%B8%8B%E9%9D%A2rc.local%E7%9A%84%E5%90%AB%E4%B9%89.html","title":"Linux解释etc下面rc.local的含义","lang":"zh-CN","frontmatter":{"description":"Linux解释etc下面rc.local的含义 rc.local是在系统启动过程中不起眼的一个文件，现在对这个文件进行解释。 初探这个文件 这个配置文件会在用户登陆之前读取，这个文件中写入了什么命令，在每次系统启动时都会执行一次。也就是说，如果有任何需要在系统启动时运行的工作，则只需写入 /etc/rc.d/rc.local 配置文件即可。这个文件的内...","head":[["meta",{"property":"og:url","content":"https://www.geekery.cn/note-book/LinuxOperaSystem/Linux%E8%A7%A3%E9%87%8Aetc%E4%B8%8B%E9%9D%A2rc.local%E7%9A%84%E5%90%AB%E4%B9%89.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"Linux解释etc下面rc.local的含义"}],["meta",{"property":"og:description","content":"Linux解释etc下面rc.local的含义 rc.local是在系统启动过程中不起眼的一个文件，现在对这个文件进行解释。 初探这个文件 这个配置文件会在用户登陆之前读取，这个文件中写入了什么命令，在每次系统启动时都会执行一次。也就是说，如果有任何需要在系统启动时运行的工作，则只需写入 /etc/rc.d/rc.local 配置文件即可。这个文件的内..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-25T14:45:52.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-25T14:45:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linux解释etc下面rc.local的含义\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-25T14:45:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"初探这个文件","slug":"初探这个文件","link":"#初探这个文件","children":[]},{"level":2,"title":"解释语句","slug":"解释语句","link":"#解释语句","children":[]},{"level":2,"title":"解释","slug":"解释","link":"#解释","children":[]}],"git":{"createdTime":1721918752000,"updatedTime":1721918752000,"contributors":[{"name":"PaperDragon","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":1.17,"words":351},"filePathRelative":"note-book/LinuxOperaSystem/Linux解释etc下面rc.local的含义.md","localizedDate":"2024年7月25日","excerpt":"\\n<blockquote>\\n<p>rc.local是在系统启动过程中不起眼的一个文件，现在对这个文件进行解释。</p>\\n</blockquote>\\n<h2>初探这个文件</h2>\\n<blockquote>\\n<p>这个配置文件会在用户登陆之前读取，这个文件中写入了什么命令，在每次系统启动时都会执行一次。也就是说，如果有任何需要在系统启动时运行的工作，则只需写入 /etc/rc.d/rc.local 配置文件即可。这个文件的内容如下：</p>\\n</blockquote>\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"bash\\" data-title=\\"bash\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">[root@hcss-ecs-3689 etc]# cat /etc/rc.local</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">#!/bin/bash</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># THIS FILE IS ADDED FOR COMPATIBILITY PURPOSES</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">#</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># It is highly advisable to create own systemd services or udev rules</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># to run scripts during boot instead of using this file.</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">#</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># In contrast to previous versions due to parallel execution during boot</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># this script will NOT be run after all other services.</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">#</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># Please note that you must run 'chmod +x /etc/rc.d/rc.local' to ensure</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># that this script will be executed during boot.</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">touch</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> /var/lock/subsys/local</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{o as comp,d as data};
