import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-jcXTHK7j.js";const p="/assets/image-20201122194840726-1NbQTgD8.png",e="/assets/image-20201122203450056-oZtVNvuF.png",i={},o=t(`<h1 id="_004-布局2" tabindex="-1"><a class="header-anchor" href="#_004-布局2" aria-hidden="true">#</a> 004-布局2</h1><h2 id="一、qformlayout" tabindex="-1"><a class="header-anchor" href="#一、qformlayout" aria-hidden="true">#</a> 一、QFormLayout</h2><p>一般适用于提交数据<strong>form表单</strong>。比如： 登录，注册类似的场景</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> sys

<span class="token keyword">from</span> PyQt5<span class="token punctuation">.</span>QtCore <span class="token keyword">import</span> Qt
<span class="token keyword">from</span> PyQt5<span class="token punctuation">.</span>QtWidgets <span class="token keyword">import</span> QVBoxLayout<span class="token punctuation">,</span> QFormLayout<span class="token punctuation">,</span> QLineEdit<span class="token punctuation">,</span> QPushButton<span class="token punctuation">,</span> QApplication<span class="token punctuation">,</span> QWidget


<span class="token keyword">class</span> <span class="token class-name">MyWindow</span><span class="token punctuation">(</span>QWidget<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>init_ui<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">init_ui</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 设定当前Widget的宽高(可以拉伸大小)</span>
        <span class="token comment"># self.resize(300, 200)</span>
        <span class="token comment"># 禁止改变宽高（不可以拉伸）</span>
        self<span class="token punctuation">.</span>setFixedSize<span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">)</span>

        <span class="token comment"># 外层容器</span>
        container <span class="token operator">=</span> QVBoxLayout<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># 表单容器</span>
        form_layout <span class="token operator">=</span> QFormLayout<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># 创建1个输入框</span>
        edit <span class="token operator">=</span> QLineEdit<span class="token punctuation">(</span><span class="token punctuation">)</span>
        edit<span class="token punctuation">.</span>setPlaceholderText<span class="token punctuation">(</span><span class="token string">&quot;请输入账号&quot;</span><span class="token punctuation">)</span>
        form_layout<span class="token punctuation">.</span>addRow<span class="token punctuation">(</span><span class="token string">&quot;账号：&quot;</span><span class="token punctuation">,</span> edit<span class="token punctuation">)</span>

        <span class="token comment"># 创建另外1个输入框</span>
        edit2 <span class="token operator">=</span> QLineEdit<span class="token punctuation">(</span><span class="token punctuation">)</span>
        edit2<span class="token punctuation">.</span>setPlaceholderText<span class="token punctuation">(</span><span class="token string">&quot;请输入密码&quot;</span><span class="token punctuation">)</span>
        form_layout<span class="token punctuation">.</span>addRow<span class="token punctuation">(</span><span class="token string">&quot;密码：&quot;</span><span class="token punctuation">,</span> edit2<span class="token punctuation">)</span>

        <span class="token comment"># 将from_layout添加到垂直布局器中</span>
        container<span class="token punctuation">.</span>addLayout<span class="token punctuation">(</span>form_layout<span class="token punctuation">)</span>

        <span class="token comment"># 按钮</span>
        login_btn <span class="token operator">=</span> QPushButton<span class="token punctuation">(</span><span class="token string">&quot;登录&quot;</span><span class="token punctuation">)</span>
        login_btn<span class="token punctuation">.</span>setFixedSize<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span>

        <span class="token comment"># 把按钮添加到容器中，并且指定它的对齐方式</span>
        container<span class="token punctuation">.</span>addWidget<span class="token punctuation">(</span>login_btn<span class="token punctuation">,</span> alignment<span class="token operator">=</span>Qt<span class="token punctuation">.</span>AlignRight<span class="token punctuation">)</span>

        <span class="token comment"># 设置当前Widget的布局器，从而显示这个布局器中的子控件</span>
        self<span class="token punctuation">.</span>setLayout<span class="token punctuation">(</span>container<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    app <span class="token operator">=</span> QApplication<span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">)</span>

    w <span class="token operator">=</span> MyWindow<span class="token punctuation">(</span><span class="token punctuation">)</span>
    w<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>

    app<span class="token punctuation">.</span><span class="token keyword">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行效果：</p><figure><img src="`+p+`" alt="image-20201122194840726" tabindex="0" loading="lazy"><figcaption>image-20201122194840726</figcaption></figure><h2 id="二、qstackedlayout" tabindex="-1"><a class="header-anchor" href="#二、qstackedlayout" aria-hidden="true">#</a> 二、QStackedLayout</h2><p>提供了多页面切换的布局，一次只能看到一个界面。 <strong>抽屉布局</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> sys
<span class="token keyword">from</span> PyQt5<span class="token punctuation">.</span>QtWidgets <span class="token keyword">import</span> QApplication<span class="token punctuation">,</span> QWidget<span class="token punctuation">,</span> QVBoxLayout<span class="token punctuation">,</span> QPushButton<span class="token punctuation">,</span> QStackedLayout<span class="token punctuation">,</span> QLabel


<span class="token keyword">class</span> <span class="token class-name">Window1</span><span class="token punctuation">(</span>QWidget<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token punctuation">)</span>
        QLabel<span class="token punctuation">(</span><span class="token string">&quot;我是抽屉1要显示的内容&quot;</span><span class="token punctuation">,</span> self<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>setStyleSheet<span class="token punctuation">(</span><span class="token string">&quot;background-color:green;&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">Window2</span><span class="token punctuation">(</span>QWidget<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token punctuation">)</span>
        QLabel<span class="token punctuation">(</span><span class="token string">&quot;我是抽屉2要显示的内容&quot;</span><span class="token punctuation">,</span> self<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>setStyleSheet<span class="token punctuation">(</span><span class="token string">&quot;background-color:red;&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">MyWindow</span><span class="token punctuation">(</span>QWidget<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> parent<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span>parent<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>create_stacked_layout<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>init_ui<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">create_stacked_layout</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 创建堆叠(抽屉)布局</span>
        self<span class="token punctuation">.</span>stacked_layout <span class="token operator">=</span> QStackedLayout<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment"># 创建单独的Widget</span>
        win1 <span class="token operator">=</span> Window1<span class="token punctuation">(</span><span class="token punctuation">)</span>
        win2 <span class="token operator">=</span> Window2<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment"># 将创建的2个Widget添加到抽屉布局器中</span>
        self<span class="token punctuation">.</span>stacked_layout<span class="token punctuation">.</span>addWidget<span class="token punctuation">(</span>win1<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>stacked_layout<span class="token punctuation">.</span>addWidget<span class="token punctuation">(</span>win2<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">init_ui</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 设置Widget大小以及固定宽高</span>
        self<span class="token punctuation">.</span>setFixedSize<span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">270</span><span class="token punctuation">)</span>

        <span class="token comment"># 1. 创建整体的布局器</span>
        container <span class="token operator">=</span> QVBoxLayout<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># 2. 创建1个要显示具体内容的子Widget</span>
        widget <span class="token operator">=</span> QWidget<span class="token punctuation">(</span><span class="token punctuation">)</span>
        widget<span class="token punctuation">.</span>setLayout<span class="token punctuation">(</span>self<span class="token punctuation">.</span>stacked_layout<span class="token punctuation">)</span>
        widget<span class="token punctuation">.</span>setStyleSheet<span class="token punctuation">(</span><span class="token string">&quot;background-color:grey;&quot;</span><span class="token punctuation">)</span>

        <span class="token comment"># 3. 创建2个按钮，用来点击进行切换抽屉布局器中的Widget</span>
        btn_press1 <span class="token operator">=</span> QPushButton<span class="token punctuation">(</span><span class="token string">&quot;抽屉1&quot;</span><span class="token punctuation">)</span>
        btn_press2 <span class="token operator">=</span> QPushButton<span class="token punctuation">(</span><span class="token string">&quot;抽屉2&quot;</span><span class="token punctuation">)</span>
        <span class="token comment"># 给按钮添加事件（即点击后要调用的函数）</span>
        btn_press1<span class="token punctuation">.</span>clicked<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>self<span class="token punctuation">.</span>btn_press1_clicked<span class="token punctuation">)</span>
        btn_press2<span class="token punctuation">.</span>clicked<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>self<span class="token punctuation">.</span>btn_press2_clicked<span class="token punctuation">)</span>

        <span class="token comment"># 4. 将需要显示的空间添加到布局器中</span>
        container<span class="token punctuation">.</span>addWidget<span class="token punctuation">(</span>widget<span class="token punctuation">)</span>
        container<span class="token punctuation">.</span>addWidget<span class="token punctuation">(</span>btn_press1<span class="token punctuation">)</span>
        container<span class="token punctuation">.</span>addWidget<span class="token punctuation">(</span>btn_press2<span class="token punctuation">)</span>

        <span class="token comment"># 5. 设置当前要显示的Widget，从而能够显示这个布局器中的控件</span>
        self<span class="token punctuation">.</span>setLayout<span class="token punctuation">(</span>container<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">btn_press1_clicked</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 设置抽屉布局器的当前索引值，即可切换显示哪个Widget</span>
        self<span class="token punctuation">.</span>stacked_layout<span class="token punctuation">.</span>setCurrentIndex<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">btn_press2_clicked</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 设置抽屉布局器的当前索引值，即可切换显示哪个Widget</span>
        self<span class="token punctuation">.</span>stacked_layout<span class="token punctuation">.</span>setCurrentIndex<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    app <span class="token operator">=</span> QApplication<span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">)</span>

    win <span class="token operator">=</span> MyWindow<span class="token punctuation">(</span><span class="token punctuation">)</span>
    win<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>

    app<span class="token punctuation">.</span><span class="token keyword">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果：</p><figure><img src="`+e+'" alt="image-20201122203450056" tabindex="0" loading="lazy"><figcaption>image-20201122203450056</figcaption></figure>',11),c=[o];function l(u,d){return s(),a("div",null,c)}const v=n(i,[["render",l],["__file","004-布局2.html.vue"]]);export{v as default};
