import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as n,e as a}from"./app-tT4yYXxw.js";const o="/assets/image-20220922155758884-2BKBZ0rV.png",c={},i=a(`<h1 id="使得内核支持aufs" tabindex="-1"><a class="header-anchor" href="#使得内核支持aufs" aria-hidden="true">#</a> 使得内核支持AUFS</h1><p>CentOS7 默认不支持<code>aufs</code>文件系统, 有时候我们需要使用, 就必须自己去安装内核了</p><ol><li>添加<code>yum</code>源</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入repo目录</span>
<span class="token builtin class-name">cd</span> /etc/yum.repos.d/
yum <span class="token function">install</span> <span class="token function">wget</span> <span class="token parameter variable">-y</span>
<span class="token comment"># 下载文件</span>
<span class="token function">wget</span> https://yum.spaceduck.org/kernel-ml-aufs/kernel-ml-aufs.repo
<span class="token comment"># 安装</span>
yum <span class="token function">install</span> kernel-ml-aufs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改内核启动</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>vim <span class="token operator">/</span>etc<span class="token operator">/</span><span class="token keyword">default</span><span class="token operator">/</span>grub
<span class="token preprocessor property"># 修改参数, 表示启动时选择第一个内核</span>
<span class="token preprocessor property">###################################</span>
GRUB_DEFAULT<span class="token operator">=</span><span class="token number">0</span>
<span class="token preprocessor property">###################################</span>

<span class="token preprocessor property"># 重新生成grub.cfg</span>
grub2<span class="token operator">-</span>mkconfig <span class="token operator">-</span>o <span class="token operator">/</span>boot<span class="token operator">/</span>grub2<span class="token operator">/</span>grub<span class="token punctuation">.</span>cfg

<span class="token preprocessor property"># 重启计算机</span>
reboot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>GRUB_DEFAULT</code>为<code>saved</code>，<code>saved</code>表示下次启动时<code>默认启动上次的内核</code>，这里我们需要更改<code>GRUB_DEFAULT=0</code>, 表示启动时选择第一个内核</p></blockquote><p>查看是否支持</p><div class="language-undefined line-numbers-mode" data-ext="undefined"><pre class="language-undefined"><code>cat /proc/filesystems
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+o+'" alt="image-20220922155758884" tabindex="0" loading="lazy"><figcaption>image-20220922155758884</figcaption></figure>',10),r=[i];function l(p,d){return e(),n("div",null,r)}const m=s(c,[["render",l],["__file","CentOS7配置支持AUFS文件系统.html.vue"]]);export{m as default};
