import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{aj as a,ao as n,am as l}from"./app-COjiYc5s.js";const e={};function t(h,i){return l(),a("div",null,i[0]||(i[0]=[n(`<h1 id="centos7-x安装python3-9-7和ansible4-5" tabindex="-1"><a class="header-anchor" href="#centos7-x安装python3-9-7和ansible4-5"><span>Centos7.x安装Python3.9.7和Ansible4.5</span></a></h1><h2 id="_1、环境信息" tabindex="-1"><a class="header-anchor" href="#_1、环境信息"><span>1、环境信息</span></a></h2><p>前期安装Ansible失败报&quot;Failed to validate the SSL certificate&quot;，可能前期安装python3时有问题，后索性升级SSH/SSL后再重新安装Python3,然后再升级pip,最后再安装Ansible</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">安装环境：</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 　Centos7.9</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">SSH/SSL:　　OpenSSH_8.7p1,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> OpenSSL</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 1.1.1l</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  24</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Aug</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2021</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#Python版本(3.9.7为此文章第2步安装后的版本信息)：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># python --version</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Python</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2.7.5</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># python3 --version</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Python</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 3.9.7</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、安装步骤" tabindex="-1"><a class="header-anchor" href="#_2、安装步骤"><span>2、安装步骤</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">##安装依赖</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">yum</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> gcc</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> gcc-c++</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ncurses</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ncurses-devel</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> unzip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> zlib-devel</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> zlib</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> openssl-devel</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> openssl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> libffi-devel</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">##源码安装Python3.9.7</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /opt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">wget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://www.python.org/ftp/python/3.9.7/Python-3.9.7.tgz</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /opt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">tar</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -zxvf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Python-3.9.7.tgz</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ; </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /opt/Python-3.9.7</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">./configure</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --prefix=/usr/local/python/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">make</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -j4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">make</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">##设置命令环境</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/usr/local/python/bin/python3</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --version</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ln</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -sf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local/python/bin/python3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local/bin/</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">python3</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --version</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">##升级pip</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/usr/local/python/bin/pip3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --upgrade</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pip</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ln</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -sf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local/python/bin/pip3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local/bin/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">##安装最新版本ansible4.5.0</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pip3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ansible</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/usr/local/python/bin/ansible</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --version</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ln</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local/python/bin/ansible</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local/bin/</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ansible</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --version</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、问题解决" tabindex="-1"><a class="header-anchor" href="#_3、问题解决"><span>3、问题解决</span></a></h2><p>有些文章在安装Python后，会在/usr/bin下把python的软链接指向python3 注意：如果不修改默认python的软链接，无需修改相应yum配置。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># ll /usr/bin|grep python</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">lrwxrwxrwx.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">       7</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Sep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 13</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 20:10</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> python</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> -&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">python3</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">lrwxrwxrwx.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">       9</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Sep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 13</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 20:10</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> python2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> -&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">python2.7</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">-rwxr-xr-x.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    7144</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Oct</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 14</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  2020</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> python2.7</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">-rwxr-xr-x.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    7144</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Oct</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 14</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  2020</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> python3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-&gt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/usr/local/python/bin/python3.9</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时yum会无法使用 yum需要用python2编译，如果服务器安装的是python3并作为默认编译器的话，yum会无法使用，修改如下：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/bin/yum</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">##修改第一行解释器为python2</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#!/usr/bin/python2</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">import</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sys</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">try:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    import</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> yum</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">except</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ImportError:</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt;&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">sys.stderr,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;&quot;&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还需要修改 /usr/libexec/urlgrabber-ext-down脚本，同样需要python2作为编译器</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/libexec/urlgrabber-ext-down</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">　</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">##修改第一行解释器为python2</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#! /usr/bin/python2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#  A very simple external downloader</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#  Copyright 2011-2012 Zdenek Pavlas</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13)]))}const r=s(e,[["render",t],["__file","Centos7.x安装Python3.9.7和Ansible4.5.html.vue"]]),d=JSON.parse('{"path":"/note-book/DistributedSystem/Ansible/Centos7.x%E5%AE%89%E8%A3%85Python3.9.7%E5%92%8CAnsible4.5.html","title":"Centos7.x安装Python3.9.7和Ansible4.5","lang":"zh-CN","frontmatter":{"description":"Centos7.x安装Python3.9.7和Ansible4.5 1、环境信息 前期安装Ansible失败报\\"Failed to validate the SSL certificate\\"，可能前期安装python3时有问题，后索性升级SSH/SSL后再重新安装Python3,然后再升级pip,最后再安装Ansible 2、安装步骤 3、问题解决 有...","head":[["meta",{"property":"og:url","content":"https://www.geekery.cn/note-book/DistributedSystem/Ansible/Centos7.x%E5%AE%89%E8%A3%85Python3.9.7%E5%92%8CAnsible4.5.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"Centos7.x安装Python3.9.7和Ansible4.5"}],["meta",{"property":"og:description","content":"Centos7.x安装Python3.9.7和Ansible4.5 1、环境信息 前期安装Ansible失败报\\"Failed to validate the SSL certificate\\"，可能前期安装python3时有问题，后索性升级SSH/SSL后再重新安装Python3,然后再升级pip,最后再安装Ansible 2、安装步骤 3、问题解决 有..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-19T09:11:46.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-19T09:11:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Centos7.x安装Python3.9.7和Ansible4.5\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-19T09:11:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"1、环境信息","slug":"_1、环境信息","link":"#_1、环境信息","children":[]},{"level":2,"title":"2、安装步骤","slug":"_2、安装步骤","link":"#_2、安装步骤","children":[]},{"level":2,"title":"3、问题解决","slug":"_3、问题解决","link":"#_3、问题解决","children":[]}],"git":{"createdTime":1691939318000,"updatedTime":1710839506000,"contributors":[{"name":"PaperDragon-SH","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":1.38,"words":413},"filePathRelative":"note-book/DistributedSystem/Ansible/Centos7.x安装Python3.9.7和Ansible4.5.md","localizedDate":"2023年8月13日","excerpt":"\\n<h2>1、环境信息</h2>\\n<p>前期安装Ansible失败报\\"Failed to validate the SSL certificate\\"，可能前期安装python3时有问题，后索性升级SSH/SSL后再重新安装Python3,然后再升级pip,最后再安装Ansible</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"bash\\" data-title=\\"bash\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">安装环境：</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> 　Centos7.9</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">SSH/SSL:　　OpenSSH_8.7p1,</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> OpenSSL</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> 1.1.1l</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">  24</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> Aug</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> 2021</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">#Python版本(3.9.7为此文章第2步安装后的版本信息)：</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># python --version</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">Python</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> 2.7.5</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># python3 --version</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">Python</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> 3.9.7</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{r as comp,d as data};
