import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,d as e}from"./app-T8Dw5a2s.js";const t="/assets/20210705154350159-16919217537001-6jLoNit6.png",i="/assets/image-20220512092647797-16919217571493-hj30AIfV.png",c={},o=e('<p>最近在做代码分析，想知道一个git仓库的语言类型，相信大家都见过这个： <img src="'+t+`" alt="在这里插入图片描述" loading="lazy"> 图中列出了不同的文件类型在代码仓中的占比，那如何实现这个功能呢？</p><p>结果研究，我写了一个脚本如下：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># git查询文件后缀的数量，用以区分项目使用的语言。</span>

<span class="token comment"># 列出git的文件</span>
<span class="token comment"># git ls-files \\</span>

<span class="token comment"># 按照‘/’分割并取出最后一个，即文件名</span>
<span class="token comment"># |awk -F/ &#39;{print $NF}&#39; \\</span>
<span class="token comment"># 筛选出有后缀的文件</span>
<span class="token comment"># |grep \\\\. \\</span>
<span class="token comment"># 按照‘.’分割并取出最后一个，即后缀名</span>
<span class="token comment"># |awk -F. &#39;{print $NF}&#39; \\</span>
<span class="token comment"># 排序去重统计</span>
<span class="token comment"># |sort|uniq -c \\</span>
<span class="token comment"># 按统计结果再次排序</span>
<span class="token comment"># |sort -rk 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 完整命令，在已经git clone的目录下执行：</span>
<span class="token function">git</span> ls-files<span class="token operator">|</span><span class="token function">awk</span> -F/ <span class="token string">&#39;{print $NF}&#39;</span><span class="token operator">|</span><span class="token function">grep</span> <span class="token punctuation">\\</span><span class="token punctuation">\\</span>.<span class="token operator">|</span><span class="token function">awk</span> -F. <span class="token string">&#39;{print $NF}&#39;</span><span class="token operator">|</span><span class="token function">sort</span><span class="token operator">|</span><span class="token function">uniq</span> -c<span class="token operator">|</span><span class="token function">sort</span> <span class="token parameter variable">-rk</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>运行效果如下，每一种后缀的文件数量都被统计出来了： <img src="`+i+'" alt="image-20220512092647797" loading="lazy"></p><p>ps: 如果不想下载全部代码，请使用git的sparse-checkout功能。</p>',6),l=[o];function p(r,m){return n(),a("div",null,l)}const v=s(c,[["render",p],["__file","Git识别项目的语言类型，及文件占比.html.vue"]]);export{v as default};
