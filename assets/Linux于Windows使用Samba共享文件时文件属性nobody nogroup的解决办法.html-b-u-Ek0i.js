import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-5_Iz5prb.js";const o={},i=e(`<h1 id="samba共享文件时文件属性nobody" tabindex="-1"><a class="header-anchor" href="#samba共享文件时文件属性nobody" aria-hidden="true">#</a> Samba共享文件时文件属性nobody</h1><p>Linux于Windows使用Samba共享文件时文件属性nobody nogroup的解决办法</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/samba/smb.conf修改配置文件如下:
在 <span class="token punctuation">[</span>global<span class="token punctuation">]</span> 放入以下内容
force user <span class="token operator">=</span> 帐号
force group <span class="token operator">=</span> 群组
create mask <span class="token operator">=</span> 0664
directory mask <span class="token operator">=</span> 0775
存档，重启smbd
<span class="token function">sudo</span> <span class="token function">service</span> smbd restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),r=[i];function c(d,t){return s(),a("div",null,r)}const u=n(o,[["render",c],["__file","Linux于Windows使用Samba共享文件时文件属性nobody nogroup的解决办法.html.vue"]]);export{u as default};
