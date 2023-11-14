import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as s,f as n}from"./app-8bb3cc4f.js";const i={},c=n(`<h2 id="step1-查看提交记录-获得版本号" tabindex="-1"><a class="header-anchor" href="#step1-查看提交记录-获得版本号" aria-hidden="true">#</a> step1：查看提交记录，获得版本号</h2><p><code>git log</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>commit 36cc122f5a2218d2b2d4109593a4ec5de589f807
Author: yhl <span class="token operator">&lt;</span>xxx.com<span class="token operator">&gt;</span>
Date:   Thu Sep <span class="token number">23</span> 09:51:54 <span class="token number">2021</span> +0800
 
    ignore
 
commit 203738c9ccad7d95b728c8d9d287f2ff24eaaca2
Author: chen1234520 <span class="token operator">&lt;</span>xxx.com.cn<span class="token operator">&gt;</span>
Date:   Wed Sep <span class="token number">22</span> <span class="token number">18</span>:14:18 <span class="token number">2021</span> +0800
 
    更新头文件路径
 
commit a9b26683996b88c2bb87cff9cc1bdae38b9c5708
Author: chen1234520 <span class="token operator">&lt;</span>xxx.com.cn<span class="token operator">&gt;</span>
Date:   Wed Sep <span class="token number">22</span> <span class="token number">17</span>:30:07 <span class="token number">2021</span> +0800
 
    上传测试样例图
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>commit后面的一串数字就是版本号</p><h2 id="step2-本地回退到相应的版本" tabindex="-1"><a class="header-anchor" href="#step2-本地回退到相应的版本" aria-hidden="true">#</a> step2：本地回退到相应的版本</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> reset <span class="token parameter variable">--hard</span> <span class="token operator">&lt;</span>版本号<span class="token operator">&gt;</span>

<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> 203738c9ccad7d95b728c8d9d287f2ff24eaaca2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="step3-远程仓库也退到相应的版本" tabindex="-1"><a class="header-anchor" href="#step3-远程仓库也退到相应的版本" aria-hidden="true">#</a> step3：远程仓库也退到相应的版本</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push origin <span class="token operator">&lt;</span>分支名<span class="token operator">&gt;</span> <span class="token parameter variable">--force</span>

<span class="token function">git</span> push origin master <span class="token parameter variable">--force</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),r=[c];function t(d,l){return e(),s("div",null,r)}const v=a(i,[["render",t],["__file","git远程仓库回退到指定版本.html.vue"]]);export{v as default};
