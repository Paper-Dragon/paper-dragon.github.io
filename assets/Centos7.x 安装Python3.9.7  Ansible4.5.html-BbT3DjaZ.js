import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as e,d as a}from"./app-GTWy986g.js";const t={},i=a(`<h1 id="centos7-x-安装python3-9-7-ansible4-5-已验证" tabindex="-1"><a class="header-anchor" href="#centos7-x-安装python3-9-7-ansible4-5-已验证"><span>Centos7.x 安装Python3.9.7 &amp; Ansible4.5 （已验证）</span></a></h1><h2 id="_1、环境信息" tabindex="-1"><a class="header-anchor" href="#_1、环境信息"><span>1、环境信息</span></a></h2><p>前期安装Ansible失败报&quot;Failed to validate the SSL certificate&quot;，可能前期安装python3时有问题，后索性升级SSH/SSL后再重新安装Python3,然后再升级pip,最后再安装Ansible</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>安装环境： 　Centos7.9
SSH/SSL:　　OpenSSH_8.7p1, OpenSSL <span class="token number">1.1</span>.1l  <span class="token number">24</span> Aug <span class="token number">2021</span>

<span class="token comment">#Python版本(3.9.7为此文章第2步安装后的版本信息)：</span>

<span class="token comment"># python --version</span>

Python <span class="token number">2.7</span>.5

<span class="token comment"># python3 --version</span>

Python <span class="token number">3.9</span>.7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、安装步骤" tabindex="-1"><a class="header-anchor" href="#_2、安装步骤"><span>2、安装步骤</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">##安装依赖</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> gcc gcc-c++ ncurses ncurses-devel <span class="token function">unzip</span> zlib-devel zlib openssl-devel openssl libffi-devel

<span class="token comment">##源码安装Python3.9.7</span>
<span class="token builtin class-name">cd</span> /opt <span class="token operator">&amp;&amp;</span> <span class="token function">wget</span> https://www.python.org/ftp/python/3.9.7/Python-3.9.7.tgz
<span class="token builtin class-name">cd</span> /opt<span class="token punctuation">;</span> <span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> Python-3.9.7.tgz <span class="token punctuation">;</span> <span class="token builtin class-name">cd</span> /opt/Python-3.9.7
./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/python/ <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token parameter variable">-j4</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>

<span class="token comment">##设置命令环境</span>
/usr/local/python/bin/python3 <span class="token parameter variable">--version</span>
<span class="token function">ln</span> <span class="token parameter variable">-sf</span> /usr/local/python/bin/python3 /usr/local/bin/
python3 <span class="token parameter variable">--version</span>

<span class="token comment">##升级pip</span>
/usr/local/python/bin/pip3 <span class="token function">install</span> <span class="token parameter variable">--upgrade</span> pip
<span class="token function">ln</span> <span class="token parameter variable">-sf</span> /usr/local/python/bin/pip3 /usr/local/bin/

<span class="token comment">##安装最新版本ansible4.5.0</span>
pip3 <span class="token function">install</span> ansible
/usr/local/python/bin/ansible <span class="token parameter variable">--version</span>
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/python/bin/ansible /usr/local/bin/
ansible <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、问题解决" tabindex="-1"><a class="header-anchor" href="#_3、问题解决"><span>3、问题解决</span></a></h2><p>有些文章在安装Python后，会在/usr/bin下把python的软链接指向python3 注意：如果不修改默认python的软链接，无需修改相应yum配置。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># ll /usr/bin|grep python</span>

lrwxrwxrwx. <span class="token number">1</span> root root       <span class="token number">7</span> Sep <span class="token number">13</span> <span class="token number">20</span>:10 python -<span class="token operator">&gt;</span> python3
lrwxrwxrwx. <span class="token number">1</span> root root       <span class="token number">9</span> Sep <span class="token number">13</span> <span class="token number">20</span>:10 python2 -<span class="token operator">&gt;</span> python2.7
-rwxr-xr-x. <span class="token number">1</span> root root    <span class="token number">7144</span> Oct <span class="token number">14</span>  <span class="token number">2020</span> python2.7
-rwxr-xr-x. <span class="token number">1</span> root root    <span class="token number">7144</span> Oct <span class="token number">14</span>  <span class="token number">2020</span> python3-<span class="token operator">&gt;</span>/usr/local/python/bin/python3.9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时yum会无法使用 yum需要用python2编译，如果服务器安装的是python3并作为默认编译器的话，yum会无法使用，修改如下：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">vim</span> /usr/bin/yum

<span class="token comment">##修改第一行解释器为python2</span>
<span class="token comment">#!/usr/bin/python2</span>
<span class="token function">import</span> sys
try:
    <span class="token function">import</span> yum
except ImportError:
    print <span class="token operator">&gt;&gt;</span> sys.stderr, <span class="token string">&quot;&quot;</span>&quot;<span class="token punctuation">\\</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还需要修改 /usr/libexec/urlgrabber-ext-down脚本，同样需要python2作为编译器</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">vim</span> /usr/libexec/urlgrabber-ext-down
　
<span class="token comment">##修改第一行解释器为python2</span>
<span class="token comment">#! /usr/bin/python2</span>

<span class="token comment">#  A very simple external downloader</span>

<span class="token comment">#  Copyright 2011-2012 Zdenek Pavlas</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),l=[i];function o(p,r){return s(),e("div",null,l)}const m=n(t,[["render",o],["__file","Centos7.x 安装Python3.9.7  Ansible4.5.html.vue"]]),u=JSON.parse('{"path":"/note-book/DistributedSystem/Ansible/Centos7.x%20%E5%AE%89%E8%A3%85Python3.9.7%20%20Ansible4.5.html","title":"Centos7.x 安装Python3.9.7 & Ansible4.5 （已验证）","lang":"zh-CN","frontmatter":{"description":"Centos7.x 安装Python3.9.7 & Ansible4.5 （已验证） 1、环境信息 前期安装Ansible失败报\\"Failed to validate the SSL certificate\\"，可能前期安装python3时有问题，后索性升级SSH/SSL后再重新安装Python3,然后再升级pip,最后再安装Ansible 2、安装步骤...","head":[["meta",{"property":"og:url","content":"https://www.geekery.cn/note-book/DistributedSystem/Ansible/Centos7.x%20%E5%AE%89%E8%A3%85Python3.9.7%20%20Ansible4.5.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"Centos7.x 安装Python3.9.7 & Ansible4.5 （已验证）"}],["meta",{"property":"og:description","content":"Centos7.x 安装Python3.9.7 & Ansible4.5 （已验证） 1、环境信息 前期安装Ansible失败报\\"Failed to validate the SSL certificate\\"，可能前期安装python3时有问题，后索性升级SSH/SSL后再重新安装Python3,然后再升级pip,最后再安装Ansible 2、安装步骤..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-13T15:08:38.000Z"}],["meta",{"property":"article:author","content":"PaperDragon"}],["meta",{"property":"article:modified_time","content":"2023-08-13T15:08:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Centos7.x 安装Python3.9.7 & Ansible4.5 （已验证）\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-13T15:08:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"1、环境信息","slug":"_1、环境信息","link":"#_1、环境信息","children":[]},{"level":2,"title":"2、安装步骤","slug":"_2、安装步骤","link":"#_2、安装步骤","children":[]},{"level":2,"title":"3、问题解决","slug":"_3、问题解决","link":"#_3、问题解决","children":[]}],"git":{"createdTime":1691939318000,"updatedTime":1691939318000,"contributors":[{"name":"PaperDragon","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":1.38,"words":415},"filePathRelative":"note-book/DistributedSystem/Ansible/Centos7.x 安装Python3.9.7  Ansible4.5.md","localizedDate":"2023年8月13日","excerpt":"\\n<h2>1、环境信息</h2>\\n<p>前期安装Ansible失败报\\"Failed to validate the SSL certificate\\"，可能前期安装python3时有问题，后索性升级SSH/SSL后再重新安装Python3,然后再升级pip,最后再安装Ansible</p>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>安装环境： 　Centos7.9\\nSSH/SSL:　　OpenSSH_8.7p1, OpenSSL <span class=\\"token number\\">1.1</span>.1l  <span class=\\"token number\\">24</span> Aug <span class=\\"token number\\">2021</span>\\n\\n<span class=\\"token comment\\">#Python版本(3.9.7为此文章第2步安装后的版本信息)：</span>\\n\\n<span class=\\"token comment\\"># python --version</span>\\n\\nPython <span class=\\"token number\\">2.7</span>.5\\n\\n<span class=\\"token comment\\"># python3 --version</span>\\n\\nPython <span class=\\"token number\\">3.9</span>.7\\n</code></pre></div>","autoDesc":true}');export{m as comp,u as data};
