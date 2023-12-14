import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-sxbTi1Z_.js";const t="/assets/010_私有属性和方法-uMnV4sYF.png",o={},i=e('<h1 id="私有属性和私有方法" tabindex="-1"><a class="header-anchor" href="#私有属性和私有方法" aria-hidden="true">#</a> 私有属性和私有方法</h1><h2 id="_01-应用场景及定义方式" tabindex="-1"><a class="header-anchor" href="#_01-应用场景及定义方式" aria-hidden="true">#</a> 01. 应用场景及定义方式</h2><p><strong>应用场景</strong></p><ul><li>在实际开发中，<strong>对象</strong> 的 <strong>某些属性或方法</strong> 可能只希望 <strong>在对象的内部被使用</strong>，而 <strong>不希望在外部被访问到</strong></li><li><strong>私有属性</strong> 就是 <strong>对象</strong> 不希望公开的 <strong>属性</strong></li><li><strong>私有方法</strong> 就是 <strong>对象</strong> 不希望公开的 <strong>方法</strong></li></ul><p><strong>定义方式</strong></p><ul><li>在 <strong>定义属性或方法时</strong>，在 <strong>属性名或者方法名前</strong> 增加 <strong>两个下划线</strong>，定义的就是 <strong>私有</strong> 属性或方法</li></ul><figure><img src="'+t+`" alt="010_私有属性和方法" tabindex="0" loading="lazy"><figcaption>010_私有属性和方法</figcaption></figure><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Women</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>

        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name
        <span class="token comment"># 不要问女生的年龄</span>
        self<span class="token punctuation">.</span>__age <span class="token operator">=</span> <span class="token number">18</span>

    <span class="token keyword">def</span> <span class="token function">__secret</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;我的年龄是 %d&quot;</span> <span class="token operator">%</span> self<span class="token punctuation">.</span>__age<span class="token punctuation">)</span>


xiaofang <span class="token operator">=</span> Women<span class="token punctuation">(</span><span class="token string">&quot;小芳&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># 私有属性，外部不能直接访问</span>
<span class="token comment"># print(xiaofang.__age)</span>

<span class="token comment"># 私有方法，外部不能直接调用</span>
<span class="token comment"># xiaofang.__secret()</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02-伪私有属性和私有方法-科普" tabindex="-1"><a class="header-anchor" href="#_02-伪私有属性和私有方法-科普" aria-hidden="true">#</a> 02. 伪私有属性和私有方法（科普）</h2><blockquote><p>提示：在日常开发中，<strong>不要使用这种方式</strong>，<strong>访问对象的 私有属性 或 私有方法</strong></p></blockquote><p><code>Python</code> 中，并没有 <strong>真正意义</strong> 的 <strong>私有</strong></p><ul><li>在给 <strong>属性</strong>、<strong>方法</strong> 命名时，实际是对 <strong>名称</strong> 做了一些特殊处理，使得外界无法访问到</li><li><strong>处理方式</strong>：在 <strong>名称</strong> 前面加上 <code>_类名</code> =&gt; <code>_类名__名称</code></li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 私有属性，外部不能直接访问到</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>xiaofang<span class="token punctuation">.</span>_Women__age<span class="token punctuation">)</span>

<span class="token comment"># 私有方法，外部不能直接调用</span>
xiaofang<span class="token punctuation">.</span>_Women__secret<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),l=[i];function c(r,p){return s(),a("div",null,l)}const g=n(o,[["render",c],["__file","06_私有属性和私有方法.html.vue"]]);export{g as default};
