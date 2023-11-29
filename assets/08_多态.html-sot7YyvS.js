import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-mpLMt5YM.js";const o="/assets/016_多态示意图-kBy1NoVL.png",e="/assets/016_多态-ZEMiSHdN.png",i={},p=t('<h1 id="多态" tabindex="-1"><a class="header-anchor" href="#多态" aria-hidden="true">#</a> 多态</h1><h2 id="目标" tabindex="-1"><a class="header-anchor" href="#目标" aria-hidden="true">#</a> 目标</h2><ul><li>多态</li></ul><p><strong>面向对象三大特性</strong></p><ol><li><p><strong>封装</strong> 根据 <strong>职责</strong> 将 <strong>属性</strong> 和 <strong>方法</strong> <strong>封装</strong> 到一个抽象的 <strong>类</strong> 中</p><ul><li>定义类的准则</li></ul></li><li><p><strong>继承</strong> <strong>实现代码的重用</strong>，相同的代码不需要重复的编写</p><ul><li>设计类的技巧</li><li>子类针对自己特有的需求，编写特定的代码</li></ul></li><li><p><strong>多态</strong> 不同的 <strong>子类对象</strong> 调用相同的 <strong>父类方法</strong>，产生不同的执行结果</p><ul><li><strong>多态</strong> 可以 <strong>增加代码的灵活度</strong></li><li>以 <strong>继承</strong> 和 <strong>重写父类方法</strong> 为前提</li><li>是调用方法的技巧，<strong>不会影响到类的内部设计</strong></li></ul><figure><img src="'+o+'" alt="016_多态示意图" tabindex="0" loading="lazy"><figcaption>016_多态示意图</figcaption></figure></li></ol><h2 id="多态案例演练" tabindex="-1"><a class="header-anchor" href="#多态案例演练" aria-hidden="true">#</a> 多态案例演练</h2><p><strong>需求</strong></p><ol><li>在 <code>Dog</code> 类中封装方法 <code>game</code><ul><li>普通狗只是简单的玩耍</li></ul></li><li>定义 <code>XiaoTianDog</code> 继承自 <code>Dog</code>，并且重写 <code>game</code> 方法 <ul><li>哮天犬需要在天上玩耍</li></ul></li><li>定义 <code>Person</code> 类，并且封装一个 <strong>和狗玩</strong> 的方法 <ul><li>在方法内部，直接让 <strong>狗对象</strong> 调用 <code>game</code> 方法</li></ul></li></ol><figure><img src="'+e+`" alt="016_多态" tabindex="0" loading="lazy"><figcaption>016_多态</figcaption></figure><p><strong>案例小结</strong></p><ul><li><code>Person</code> 类中只需要让 <strong>狗对象</strong> 调用 <code>game</code> 方法，而不关心具体是 <strong>什么狗</strong><ul><li><code>game</code> 方法是在 <code>Dog</code> 父类中定义的</li></ul></li><li>在程序执行时，传入不同的 <strong>狗对象</strong> 实参，就会产生不同的执行效果</li></ul><blockquote><p><strong>多态</strong> 更容易编写出出通用的代码，做出通用的编程，以适应需求的不断变化！</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name

    <span class="token keyword">def</span> <span class="token function">game</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;%s 蹦蹦跳跳的玩耍...&quot;</span> <span class="token operator">%</span> self<span class="token punctuation">.</span>name<span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">XiaoTianDog</span><span class="token punctuation">(</span>Dog<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">game</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;%s 飞到天上去玩耍...&quot;</span> <span class="token operator">%</span> self<span class="token punctuation">.</span>name<span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name

    <span class="token keyword">def</span> <span class="token function">game_with_dog</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> dog<span class="token punctuation">)</span><span class="token punctuation">:</span>

        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;%s 和 %s 快乐的玩耍...&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>name<span class="token punctuation">,</span> dog<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span>

        <span class="token comment"># 让狗玩耍</span>
        dog<span class="token punctuation">.</span>game<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token comment"># 1. 创建一个狗对象</span>
<span class="token comment"># wangcai = Dog(&quot;旺财&quot;)</span>
wangcai <span class="token operator">=</span> XiaoTianDog<span class="token punctuation">(</span><span class="token string">&quot;飞天旺财&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 2. 创建一个小明对象</span>
xiaoming <span class="token operator">=</span> Person<span class="token punctuation">(</span><span class="token string">&quot;小明&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 3. 让小明调用和狗玩的方法</span>
xiaoming<span class="token punctuation">.</span>game_with_dog<span class="token punctuation">(</span>wangcai<span class="token punctuation">)</span>
        
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),l=[p];function c(u,r){return s(),a("div",null,l)}const g=n(i,[["render",c],["__file","08_多态.html.vue"]]);export{g as default};
