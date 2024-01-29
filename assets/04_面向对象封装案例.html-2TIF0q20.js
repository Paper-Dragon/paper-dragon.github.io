import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as t,d as o}from"./app-iXloerPV.js";const n="/assets/007_小明爱跑步-_Z21KpsU.png",e="/assets/001_植物大战僵尸--werHCkY.png",p="/assets/008_摆放家具-uit0ouzp.png",i={},l=o('<h1 id="面向对象封装案例" tabindex="-1"><a class="header-anchor" href="#面向对象封装案例"><span>面向对象封装案例</span></a></h1><h2 id="目标" tabindex="-1"><a class="header-anchor" href="#目标"><span>目标</span></a></h2><ul><li>封装</li><li>小明爱跑步</li><li>存放家具</li></ul><h3 id="_01-封装" tabindex="-1"><a class="header-anchor" href="#_01-封装"><span>01. 封装</span></a></h3><ol><li><strong>封装</strong> 是面向对象编程的一大特点</li><li>面向对象编程的 <strong>第一步</strong> —— 将 <strong>属性</strong> 和 <strong>方法</strong> <strong>封装</strong> 到一个抽象的 <strong>类</strong> 中</li><li><strong>外界</strong> 使用 <strong>类</strong> 创建 <strong>对象</strong>，然后 <strong>让对象调用方法</strong></li><li><strong>对象方法的细节</strong> 都被 <strong>封装</strong> 在 <strong>类的内部</strong></li></ol><h2 id="_02-小明爱跑步" tabindex="-1"><a class="header-anchor" href="#_02-小明爱跑步"><span>02. 小明爱跑步</span></a></h2><p><strong>需求</strong></p><ol><li><strong>小明</strong> <strong>体重</strong> <code>75.0</code> 公斤</li><li>小明每次 <strong>跑步</strong> 会减肥 <code>0.5</code> 公斤</li><li>小明每次 <strong>吃东西</strong> 体重增加 <code>1</code> 公斤</li></ol><figure><img src="'+n+`" alt="007_小明爱跑步" tabindex="0" loading="lazy"><figcaption>007_小明爱跑步</figcaption></figure><blockquote><p>提示：在 <strong>对象的方法内部</strong>，是可以 <strong>直接访问对象的属性</strong> 的！</p></blockquote><ul><li>代码实现：</li></ul><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;人类&quot;&quot;&quot;</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> weight<span class="token punctuation">)</span><span class="token punctuation">:</span>

        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name
        self<span class="token punctuation">.</span>weight <span class="token operator">=</span> weight

    <span class="token keyword">def</span> <span class="token function">__str__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>

        <span class="token keyword">return</span> <span class="token string">&quot;我的名字叫 %s 体重 %.2f 公斤&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>name<span class="token punctuation">,</span> self<span class="token punctuation">.</span>weight<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;跑步&quot;&quot;&quot;</span>

        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;%s 爱跑步，跑步锻炼身体&quot;</span> <span class="token operator">%</span> self<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>weight <span class="token operator">-=</span> <span class="token number">0.5</span>

    <span class="token keyword">def</span> <span class="token function">eat</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;吃东西&quot;&quot;&quot;</span>

        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;%s 是吃货，吃完这顿再减肥&quot;</span> <span class="token operator">%</span> self<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>weight <span class="token operator">+=</span> <span class="token number">1</span>


xiaoming <span class="token operator">=</span> Person<span class="token punctuation">(</span><span class="token string">&quot;小明&quot;</span><span class="token punctuation">,</span> <span class="token number">75</span><span class="token punctuation">)</span>

xiaoming<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span>
xiaoming<span class="token punctuation">.</span>eat<span class="token punctuation">(</span><span class="token punctuation">)</span>
xiaoming<span class="token punctuation">.</span>eat<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>xiaoming<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-1-小明爱跑步扩展-——-小美也爱跑步" tabindex="-1"><a class="header-anchor" href="#_2-1-小明爱跑步扩展-——-小美也爱跑步"><span>2.1 小明爱跑步扩展 —— 小美也爱跑步</span></a></h3><p><strong>需求</strong></p><ol><li><strong>小明</strong> 和 <strong>小美</strong> 都爱跑步</li><li><strong>小明</strong> <strong>体重</strong> <code>75.0</code> 公斤</li><li><strong>小美</strong> <strong>体重</strong> <code>45.0</code> 公斤</li><li>每次 <strong>跑步</strong> 都会减少 <code>0.5</code> 公斤</li><li>每次 <strong>吃东西</strong> 都会增加 <code>1</code> 公斤</li></ol><figure><img src="`+n+'" alt="007_小明爱跑步" tabindex="0" loading="lazy"><figcaption>007_小明爱跑步</figcaption></figure><p><strong>提示</strong></p><ol><li>在 <strong>对象的方法内部</strong>，是可以 <strong>直接访问对象的属性</strong> 的</li><li><strong>同一个类</strong> 创建的 <strong>多个对象</strong> 之间，<strong>属性</strong> 互不干扰！</li></ol><figure><img src="'+e+'" alt="001_植物大战僵尸" tabindex="0" loading="lazy"><figcaption>001_植物大战僵尸</figcaption></figure><h2 id="_03-摆放家具" tabindex="-1"><a class="header-anchor" href="#_03-摆放家具"><span>03. 摆放家具</span></a></h2><p><strong>需求</strong></p><ol><li><strong>房子(House)</strong> 有 <strong>户型</strong>、<strong>总面积</strong> 和 <strong>家具名称列表</strong><ul><li>新房子没有任何的家具</li></ul></li><li><strong>家具(HouseItem)</strong> 有 <strong>名字</strong> 和 <strong>占地面积</strong>，其中 <ul><li><strong>席梦思(bed)</strong> 占地 <code>4</code> 平米</li><li><strong>衣柜(chest)</strong> 占地 <code>2</code> 平米</li><li><strong>餐桌(table)</strong> 占地 <code>1.5</code> 平米</li></ul></li><li>将以上三件 <strong>家具</strong> <strong>添加</strong> 到 <strong>房子</strong> 中</li><li>打印房子时，要求输出：<strong>户型</strong>、<strong>总面积</strong>、<strong>剩余面积</strong>、<strong>家具名称列表</strong></li></ol><figure><img src="'+p+`" alt="008_摆放家具" tabindex="0" loading="lazy"><figcaption>008_摆放家具</figcaption></figure><p><strong>剩余面积</strong></p><ol><li>在创建房子对象时，定义一个 <strong>剩余面积的属性</strong>，<strong>初始值和总面积相等</strong></li><li>当调用 <code>add_item</code> 方法，向房间 <strong>添加家具</strong> 时，让 <strong>剩余面积</strong> -= <strong>家具面积</strong></li></ol><p><strong>思考</strong>：应该先开发哪一个类？</p><p><strong>答案</strong> —— <strong>家具类</strong></p><ol><li>家具简单</li><li>房子要使用到家具，<strong>被使用的类</strong>，通常应该先开发</li></ol><h3 id="_3-1-创建家具" tabindex="-1"><a class="header-anchor" href="#_3-1-创建家具"><span>3.1 创建家具</span></a></h3><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">HouseItem</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> area<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;

        :param name: 家具名称
        :param area: 占地面积
        &quot;&quot;&quot;</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name
        self<span class="token punctuation">.</span>area <span class="token operator">=</span> area

    <span class="token keyword">def</span> <span class="token function">__str__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">&quot;[%s] 占地面积 %.2f&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>name<span class="token punctuation">,</span> self<span class="token punctuation">.</span>area<span class="token punctuation">)</span>


<span class="token comment"># 1. 创建家具</span>
bed <span class="token operator">=</span> HouseItem<span class="token punctuation">(</span><span class="token string">&quot;席梦思&quot;</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
chest <span class="token operator">=</span> HouseItem<span class="token punctuation">(</span><span class="token string">&quot;衣柜&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
table <span class="token operator">=</span> HouseItem<span class="token punctuation">(</span><span class="token string">&quot;餐桌&quot;</span><span class="token punctuation">,</span> <span class="token number">1.5</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>bed<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>chest<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>table<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>小结</strong></p><ol><li>创建了一个 <strong>家具类</strong>，使用到 <code>__init__</code> 和 <code>__str__</code> 两个内置方法</li><li>使用 <strong>家具类</strong> 创建了 <strong>三个家具对象</strong>，并且 <strong>输出家具信息</strong></li></ol><h3 id="_3-2-创建房间" tabindex="-1"><a class="header-anchor" href="#_3-2-创建房间"><span>3.2 创建房间</span></a></h3><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">House</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> house_type<span class="token punctuation">,</span> area<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;

        :param house_type: 户型
        :param area: 总面积
        &quot;&quot;&quot;</span>
        self<span class="token punctuation">.</span>house_type <span class="token operator">=</span> house_type
        self<span class="token punctuation">.</span>area <span class="token operator">=</span> area
        
        <span class="token comment"># 剩余面积默认和总面积一致</span>
        self<span class="token punctuation">.</span>free_area <span class="token operator">=</span> area
        <span class="token comment"># 默认没有任何的家具</span>
        self<span class="token punctuation">.</span>item_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token keyword">def</span> <span class="token function">__str__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>

        <span class="token comment"># Python 能够自动的将一对括号内部的代码连接在一起</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token string">&quot;户型：%s\\n总面积：%.2f[剩余：%.2f]\\n家具：%s&quot;</span>
                <span class="token operator">%</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>house_type<span class="token punctuation">,</span> self<span class="token punctuation">.</span>area<span class="token punctuation">,</span>
                   self<span class="token punctuation">.</span>free_area<span class="token punctuation">,</span> self<span class="token punctuation">.</span>item_list<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">add_item</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> item<span class="token punctuation">)</span><span class="token punctuation">:</span>

        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;要添加 %s&quot;</span> <span class="token operator">%</span> item<span class="token punctuation">)</span>

<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

<span class="token comment"># 2. 创建房子对象</span>
my_home <span class="token operator">=</span> House<span class="token punctuation">(</span><span class="token string">&quot;两室一厅&quot;</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">)</span>

my_home<span class="token punctuation">.</span>add_item<span class="token punctuation">(</span>bed<span class="token punctuation">)</span>
my_home<span class="token punctuation">.</span>add_item<span class="token punctuation">(</span>chest<span class="token punctuation">)</span>
my_home<span class="token punctuation">.</span>add_item<span class="token punctuation">(</span>table<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>my_home<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>小结</strong></p><ol><li>创建了一个 <strong>房子类</strong>，使用到 <code>__init__</code> 和 <code>__str__</code> 两个内置方法</li><li>准备了一个 <code>add_item</code> 方法 <strong>准备添加家具</strong></li><li>使用 <strong>房子类</strong> 创建了 <strong>一个房子对象</strong></li><li>让 <strong>房子对象</strong> 调用了三次 <code>add_item</code> 方法，将 <strong>三件家具</strong> 以实参传递到 <code>add_item</code> 内部</li></ol><h3 id="_3-3-添加家具" tabindex="-1"><a class="header-anchor" href="#_3-3-添加家具"><span>3.3 添加家具</span></a></h3><p><strong>需求</strong></p><ul><li>1&gt; <strong>判断</strong> <strong>家具的面积</strong> 是否 <strong>超过剩余面积</strong>，<strong>如果超过</strong>，提示不能添加这件家具</li><li>2&gt; 将 <strong>家具的名称</strong> 追加到 <strong>家具名称列表</strong> 中</li><li>3&gt; 用 <strong>房子的剩余面积</strong> - <strong>家具面积</strong></li></ul><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>    <span class="token keyword">def</span> <span class="token function">add_item</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> item<span class="token punctuation">)</span><span class="token punctuation">:</span>

        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;要添加 %s&quot;</span> <span class="token operator">%</span> item<span class="token punctuation">)</span>
        <span class="token comment"># 1. 判断家具面积是否大于剩余面积</span>
        <span class="token keyword">if</span> item<span class="token punctuation">.</span>area <span class="token operator">&gt;</span> self<span class="token punctuation">.</span>free_area<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;%s 的面积太大，不能添加到房子中&quot;</span> <span class="token operator">%</span> item<span class="token punctuation">.</span>name<span class="token punctuation">)</span>

            <span class="token keyword">return</span>

        <span class="token comment"># 2. 将家具的名称追加到名称列表中</span>
        self<span class="token punctuation">.</span>item_list<span class="token punctuation">.</span>append<span class="token punctuation">(</span>item<span class="token punctuation">.</span>name<span class="token punctuation">)</span>

        <span class="token comment"># 3. 计算剩余面积</span>
        self<span class="token punctuation">.</span>free_area <span class="token operator">-=</span> item<span class="token punctuation">.</span>area
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-小结" tabindex="-1"><a class="header-anchor" href="#_3-4-小结"><span>3.4 小结</span></a></h3><ul><li>主程序只负责创建 <strong>房子</strong> 对象和 <strong>家具</strong> 对象</li><li>让 <strong>房子</strong> 对象调用 <code>add_item</code> 方法 <strong>将家具添加到房子</strong>中</li><li><strong>面积计算</strong>、<strong>剩余面积</strong>、<strong>家具列表</strong> 等处理都被 <strong>封装</strong> 到 <strong>房子类的内部</strong></li></ul>`,42),c=[l];function r(u,d){return a(),t("div",null,c)}const v=s(i,[["render",r],["__file","04_面向对象封装案例.html.vue"]]);export{v as default};
