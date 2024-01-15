import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-fr7gsKFe.js";const e="/assets/009_士兵突击-VhHHFMqY.png",o={},p=t('<h1 id="面向对象封装案例-ii" tabindex="-1"><a class="header-anchor" href="#面向对象封装案例-ii" aria-hidden="true">#</a> 面向对象封装案例 II</h1><h2 id="目标" tabindex="-1"><a class="header-anchor" href="#目标" aria-hidden="true">#</a> 目标</h2><ul><li>士兵突击案例</li><li>身份运算符</li></ul><p><strong>封装</strong></p><ol><li><strong>封装</strong> 是面向对象编程的一大特点</li><li>面向对象编程的 <strong>第一步</strong> —— 将 <strong>属性</strong> 和 <strong>方法</strong> <strong>封装</strong> 到一个抽象的 <strong>类</strong> 中</li><li><strong>外界</strong> 使用 <strong>类</strong> 创建 <strong>对象</strong>，然后 <strong>让对象调用方法</strong></li><li><strong>对象方法的细节</strong> 都被 <strong>封装</strong> 在 <strong>类的内部</strong></li></ol><blockquote><p>一个对象的 <strong>属性</strong> 可以是 <strong>另外一个类创建的对象</strong></p></blockquote><h2 id="_01-士兵突击" tabindex="-1"><a class="header-anchor" href="#_01-士兵突击" aria-hidden="true">#</a> 01. 士兵突击</h2><p><strong>需求</strong></p><ol><li><strong>士兵</strong> <strong>许三多</strong> 有一把 <strong>AK47</strong></li><li><strong>士兵</strong> 可以 <strong>开火</strong></li><li><strong>枪</strong> 能够 <strong>发射</strong> 子弹</li><li><strong>枪</strong> 装填 <strong>装填子弹</strong> —— <strong>增加子弹数量</strong></li></ol><figure><img src="'+e+`" alt="009_士兵突击" tabindex="0" loading="lazy"><figcaption>009_士兵突击</figcaption></figure><h3 id="_1-1-开发枪类" tabindex="-1"><a class="header-anchor" href="#_1-1-开发枪类" aria-hidden="true">#</a> 1.1 开发枪类</h3><p><strong><code>shoot</code> 方法需求</strong></p><ul><li>1&gt; 判断是否有子弹，没有子弹无法射击</li><li>2&gt; 使用 <code>print</code> 提示射击，并且输出子弹数量</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Gun</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> model<span class="token punctuation">)</span><span class="token punctuation">:</span>

        <span class="token comment"># 枪的型号</span>
        self<span class="token punctuation">.</span>model <span class="token operator">=</span> model
        <span class="token comment"># 子弹数量</span>
        self<span class="token punctuation">.</span>bullet_count <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">def</span> <span class="token function">add_bullet</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> count<span class="token punctuation">)</span><span class="token punctuation">:</span>

        self<span class="token punctuation">.</span>bullet_count <span class="token operator">+=</span> count

    <span class="token keyword">def</span> <span class="token function">shoot</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>

        <span class="token comment"># 判断是否还有子弹</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>bullet_count <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;没有子弹了...&quot;</span><span class="token punctuation">)</span>

            <span class="token keyword">return</span>

        <span class="token comment"># 发射一颗子弹</span>
        self<span class="token punctuation">.</span>bullet_count <span class="token operator">-=</span> <span class="token number">1</span>
        
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;\\%s 发射子弹[\\%d]...&quot;</span> \\<span class="token operator">%</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>model<span class="token punctuation">,</span> self<span class="token punctuation">.</span>bullet_count<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 创建枪对象</span>
ak47 <span class="token operator">=</span> Gun<span class="token punctuation">(</span><span class="token string">&quot;ak47&quot;</span><span class="token punctuation">)</span>
ak47<span class="token punctuation">.</span>add_bullet<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span>
ak47<span class="token punctuation">.</span>shoot<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-开发士兵类" tabindex="-1"><a class="header-anchor" href="#_1-2-开发士兵类" aria-hidden="true">#</a> 1.2 开发士兵类</h3><blockquote><p>假设：每一个新兵 都 <strong>没有枪</strong></p></blockquote><p><strong>定义没有初始值的属性</strong></p><p>在定义属性时，如果 <strong>不知道设置什么初始值</strong>，可以设置为 <code>None</code></p><ul><li><code>None</code> <strong>关键字</strong> 表示 <strong>什么都没有</strong></li><li>表示一个 <strong>空对象</strong>，<strong>没有方法和属性，是一个特殊的常量</strong></li><li>可以将 <code>None</code> 赋值给任何一个变量</li></ul><p><strong><code>fire</code> 方法需求</strong></p><ul><li>1&gt; 判断是否有枪，没有枪没法冲锋</li><li>2&gt; 喊一声口号</li><li>3&gt; 装填子弹</li><li>4&gt; 射击</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Soldier</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>

        <span class="token comment"># 姓名</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name
        <span class="token comment"># 枪，士兵初始没有枪 None 关键字表示什么都没有</span>
        self<span class="token punctuation">.</span>gun <span class="token operator">=</span> <span class="token boolean">None</span>

    <span class="token keyword">def</span> <span class="token function">fire</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>

        <span class="token comment"># 1. 判断士兵是否有枪</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>gun <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;[\\%s] 还没有枪...&quot;</span> \\<span class="token operator">%</span> self<span class="token punctuation">.</span>name<span class="token punctuation">)</span>

            <span class="token keyword">return</span>

        <span class="token comment"># 2. 高喊口号</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;冲啊...[\\%s]&quot;</span> \\<span class="token operator">%</span> self<span class="token punctuation">.</span>name<span class="token punctuation">)</span>

        <span class="token comment"># 3. 让枪装填子弹</span>
        self<span class="token punctuation">.</span>gun<span class="token punctuation">.</span>add_bullet<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span>

        <span class="token comment"># 4. 让枪发射子弹</span>
        self<span class="token punctuation">.</span>gun<span class="token punctuation">.</span>shoot<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>小结</strong></p><ol><li>创建了一个 <strong>士兵类</strong>，使用到 <code>__init__</code> 内置方法</li><li>在定义属性时，如果 <strong>不知道设置什么初始值</strong>，可以设置为 <code>None</code></li><li>在 <strong>封装的</strong> 方法内部，还可以让 <strong>自己的</strong> <strong>使用其他类创建的对象属性</strong> 调用已经 <strong>封装好的方法</strong></li></ol><h2 id="_02-身份运算符" tabindex="-1"><a class="header-anchor" href="#_02-身份运算符" aria-hidden="true">#</a> 02. 身份运算符</h2><p>身份运算符用于 <strong>比较</strong> 两个对象的 <strong>内存地址</strong> 是否一致 —— <strong>是否是对同一个对象的引用</strong></p><ul><li>在 <code>Python</code> 中针对 <code>None</code> 比较时，建议使用 <code>is</code> 判断</li></ul><table><thead><tr><th>运算符</th><th>描述</th><th>实例</th></tr></thead><tbody><tr><td>is</td><td>is 是判断两个标识符是不是引用同一个对象</td><td>x is y，类似 id(x) == id(y)</td></tr><tr><td>is not</td><td>is not 是判断两个标识符是不是引用不同对象</td><td>x is not y，类似 id(a) != id(b)</td></tr></tbody></table><h3 id="is-与-区别" tabindex="-1"><a class="header-anchor" href="#is-与-区别" aria-hidden="true">#</a> is 与 == 区别：</h3><p><code>is</code> 用于判断 <strong>两个变量 引用对象是否为同一个</strong><code>==</code> 用于判断 <strong>引用变量的值</strong> 是否相等</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> b <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> b <span class="token keyword">is</span> a 
<span class="token boolean">False</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> b <span class="token operator">==</span> a
<span class="token boolean">True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31),l=[p];function i(c,r){return s(),a("div",null,l)}const k=n(o,[["render",i],["__file","05_面向对象封装案例 II.html.vue"]]);export{k as default};
