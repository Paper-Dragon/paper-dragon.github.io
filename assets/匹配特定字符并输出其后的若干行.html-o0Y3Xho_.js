import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,d as e}from"./app-FgC1YFTT.js";const i={},o=e(`<h1 id="awk-输出配行及匹配下面的三行" tabindex="-1"><a class="header-anchor" href="#awk-输出配行及匹配下面的三行"><span>awk 输出配行及匹配下面的三行</span></a></h1><h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法"><span>用法：</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">awk</span> <span class="token string">&#39;/xxoo/{p=4}p--&gt;0&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="实践" tabindex="-1"><a class="header-anchor" href="#实践"><span>实践</span></a></h2><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例：</span></a></h3><pre><code># cat /etc/passwd

root:x:0:0:root:/root:/bin/bash
bin:x:1:1:bin:/bin:/sbin/nologin
daemon:x:2:2:daemon:/sbin:/sbin/nologin
adm:x:3:4:adm:/var/adm:/sbin/nologin
lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin
sync:x:5:0:sync:/sbin:/bin/sync
shutdown:x:6:0:shutdown:/sbin:/sbin/shutdown
halt:x:7:0:halt:/sbin:/sbin/halt
mail:x:8:12:mail:/var/spool/mail:/sbin/nologin
operator:x:11:0:operator:/root:/sbin/nologin
games:x:12:100:games:/usr/games:/sbin/nologin
</code></pre><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#实现指令</span>

<span class="token comment"># cat /etc/passwd|awk &#39;/sync/{p=4}p--&gt;0&#39;</span>
sync:x:5:0:sync:/sbin:/bin/sync
shutdown:x:6:0:shutdown:/sbin:/sbin/shutdown
halt:x:7:0:halt:/sbin:/sbin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),d=[o];function t(l,c){return s(),a("div",null,d)}const b=n(i,[["render",t],["__file","匹配特定字符并输出其后的若干行.html.vue"]]);export{b as default};
