import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-Gobk8jTh.js";const p="/assets/image-20201119191232844-0aSSuOVv.png",e="/assets/image-20201119191919264-EARc_FFX.png",o="/assets/image-20201119192937118-c5_sK4BV.png",i={},c=t(`<h1 id="_003-布局" tabindex="-1"><a class="header-anchor" href="#_003-布局" aria-hidden="true">#</a> 003-布局</h1><p>在Qt里面布局分为四个大类 ：</p><ul><li>QBoxLayout</li><li>QGridLayout</li><li>QFormLayout</li><li>QStackedLayout</li></ul><h2 id="一、qboxlayout" tabindex="-1"><a class="header-anchor" href="#一、qboxlayout" aria-hidden="true">#</a> 一、QBoxLayout</h2><p>直译为：盒子布局</p><p>一般使用它的两个子类<code>QHBoxLayout</code> 和 <code>QVBoxLayout</code> 负责水平和垂直布局</p><p>垂直布局示例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> sys
<span class="token keyword">from</span> PyQt5<span class="token punctuation">.</span>QtWidgets <span class="token keyword">import</span> QApplication<span class="token punctuation">,</span> QVBoxLayout<span class="token punctuation">,</span> QWidget<span class="token punctuation">,</span> QPushButton<span class="token punctuation">,</span> QGroupBox<span class="token punctuation">,</span> QMainWindow
<span class="token keyword">from</span> PyQt5<span class="token punctuation">.</span>QtCore <span class="token keyword">import</span> Qt


<span class="token keyword">class</span> <span class="token class-name">MyWindow</span><span class="token punctuation">(</span>QWidget<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 切记一定要调用父类的__init__方法，因为它里面有很多对UI空间的初始化操作</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># 设置大小</span>
        self<span class="token punctuation">.</span>resize<span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span>
        <span class="token comment"># 设置标题</span>
        self<span class="token punctuation">.</span>setWindowTitle<span class="token punctuation">(</span><span class="token string">&quot;垂直布局&quot;</span><span class="token punctuation">)</span>

        <span class="token comment"># 垂直布局</span>
        layout <span class="token operator">=</span> QVBoxLayout<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># 作用是在布局器中增加一个伸缩量，里面的参数表示QSpacerItem的个数，默认值为零</span>
        <span class="token comment"># 会将你放在layout中的空间压缩成默认的大小</span>
        <span class="token comment"># 下面的笔试1：1：1：2</span>
        layout<span class="token punctuation">.</span>addStretch<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

        <span class="token comment"># 按钮1</span>
        btn1 <span class="token operator">=</span> QPushButton<span class="token punctuation">(</span><span class="token string">&quot;按钮1&quot;</span><span class="token punctuation">)</span>
        <span class="token comment"># 添加到布局器中</span>
        <span class="token comment"># layout.addWidget(btn1, Qt.AlignmentFlag.AlignTop)</span>
        layout<span class="token punctuation">.</span>addWidget<span class="token punctuation">(</span>btn1<span class="token punctuation">)</span>

        layout<span class="token punctuation">.</span>addStretch<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

        <span class="token comment"># 按钮2</span>
        btn2 <span class="token operator">=</span> QPushButton<span class="token punctuation">(</span><span class="token string">&quot;按钮2&quot;</span><span class="token punctuation">)</span>
        <span class="token comment"># 添加到布局器</span>
        layout<span class="token punctuation">.</span>addWidget<span class="token punctuation">(</span>btn2<span class="token punctuation">)</span>

        layout<span class="token punctuation">.</span>addStretch<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

        <span class="token comment"># 按钮3</span>
        btn3 <span class="token operator">=</span> QPushButton<span class="token punctuation">(</span><span class="token string">&quot;按钮3&quot;</span><span class="token punctuation">)</span>
        <span class="token comment"># 添加到布局器</span>
        layout<span class="token punctuation">.</span>addWidget<span class="token punctuation">(</span>btn3<span class="token punctuation">)</span>

        layout<span class="token punctuation">.</span>addStretch<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>

        self<span class="token punctuation">.</span>setLayout<span class="token punctuation">(</span>layout<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    app <span class="token operator">=</span> QApplication<span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">)</span>

    <span class="token comment"># 创建一个QWidget子类</span>
    w <span class="token operator">=</span> MyWindow<span class="token punctuation">(</span><span class="token punctuation">)</span>
    w<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>

    app<span class="token punctuation">.</span><span class="token keyword">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行效果：</p><figure><img src="`+p+`" alt="image-20201119191232844" tabindex="0" loading="lazy"><figcaption>image-20201119191232844</figcaption></figure><p>水平布局</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> sys
<span class="token keyword">from</span> PyQt5<span class="token punctuation">.</span>QtWidgets <span class="token keyword">import</span> QApplication<span class="token punctuation">,</span> QWidget<span class="token punctuation">,</span> QGroupBox<span class="token punctuation">,</span> QVBoxLayout<span class="token punctuation">,</span> QHBoxLayout<span class="token punctuation">,</span> QRadioButton


<span class="token keyword">class</span> <span class="token class-name">MyWindow</span><span class="token punctuation">(</span>QWidget<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>init_ui<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">init_ui</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 最外层的垂直布局，包含两部分：爱好和性别</span>
        container <span class="token operator">=</span> QVBoxLayout<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># -----创建第1个组，添加多个组件-----</span>
        <span class="token comment"># hobby 主要是保证他们是一个组。</span>
        hobby_box <span class="token operator">=</span> QGroupBox<span class="token punctuation">(</span><span class="token string">&quot;爱好&quot;</span><span class="token punctuation">)</span>
        <span class="token comment"># v_layout 保证三个爱好是垂直摆放</span>
        v_layout <span class="token operator">=</span> QVBoxLayout<span class="token punctuation">(</span><span class="token punctuation">)</span>
        btn1 <span class="token operator">=</span> QRadioButton<span class="token punctuation">(</span><span class="token string">&quot;抽烟&quot;</span><span class="token punctuation">)</span>
        btn2 <span class="token operator">=</span> QRadioButton<span class="token punctuation">(</span><span class="token string">&quot;喝酒&quot;</span><span class="token punctuation">)</span>
        btn3 <span class="token operator">=</span> QRadioButton<span class="token punctuation">(</span><span class="token string">&quot;烫头&quot;</span><span class="token punctuation">)</span>
        <span class="token comment"># 添加到v_layout中</span>
        v_layout<span class="token punctuation">.</span>addWidget<span class="token punctuation">(</span>btn1<span class="token punctuation">)</span>
        v_layout<span class="token punctuation">.</span>addWidget<span class="token punctuation">(</span>btn2<span class="token punctuation">)</span>
        v_layout<span class="token punctuation">.</span>addWidget<span class="token punctuation">(</span>btn3<span class="token punctuation">)</span>
        <span class="token comment"># 把v_layout添加到hobby_box中</span>
        hobby_box<span class="token punctuation">.</span>setLayout<span class="token punctuation">(</span>v_layout<span class="token punctuation">)</span>

        <span class="token comment"># -----创建第2个组，添加多个组件-----</span>
        <span class="token comment"># 性别组</span>
        gender_box <span class="token operator">=</span> QGroupBox<span class="token punctuation">(</span><span class="token string">&quot;性别&quot;</span><span class="token punctuation">)</span>
        <span class="token comment"># 性别容器</span>
        h_layout <span class="token operator">=</span> QHBoxLayout<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment"># 性别选项</span>
        btn4 <span class="token operator">=</span> QRadioButton<span class="token punctuation">(</span><span class="token string">&quot;男&quot;</span><span class="token punctuation">)</span>
        btn5 <span class="token operator">=</span> QRadioButton<span class="token punctuation">(</span><span class="token string">&quot;女&quot;</span><span class="token punctuation">)</span>
        <span class="token comment"># 追加到性别容器中</span>
        h_layout<span class="token punctuation">.</span>addWidget<span class="token punctuation">(</span>btn4<span class="token punctuation">)</span>
        h_layout<span class="token punctuation">.</span>addWidget<span class="token punctuation">(</span>btn5<span class="token punctuation">)</span>
        <span class="token comment"># 添加到 box中</span>
        gender_box<span class="token punctuation">.</span>setLayout<span class="token punctuation">(</span>h_layout<span class="token punctuation">)</span>

        <span class="token comment"># 把爱好的内容添加到容器中</span>
        container<span class="token punctuation">.</span>addWidget<span class="token punctuation">(</span>hobby_box<span class="token punctuation">)</span>
        <span class="token comment"># 把性别的内容添加到容器中</span>
        container<span class="token punctuation">.</span>addWidget<span class="token punctuation">(</span>gender_box<span class="token punctuation">)</span>

        <span class="token comment"># 设置窗口显示的内容是最外层容器</span>
        self<span class="token punctuation">.</span>setLayout<span class="token punctuation">(</span>container<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    app <span class="token operator">=</span> QApplication<span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">)</span>

    w <span class="token operator">=</span> MyWindow<span class="token punctuation">(</span><span class="token punctuation">)</span>
    w<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>

    app<span class="token punctuation">.</span><span class="token keyword">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行效果：</p><figure><img src="`+e+`" alt="image-20201119191919264" tabindex="0" loading="lazy"><figcaption>image-20201119191919264</figcaption></figure><p><strong>注意</strong></p><ul><li>通过上面的示例，我们能够看到水平布局器与垂直布局器是可以混合使用即嵌套使用</li></ul><h2 id="二、qgridlayout" tabindex="-1"><a class="header-anchor" href="#二、qgridlayout" aria-hidden="true">#</a> 二、QGridLayout</h2><p>网格布局，有的人称之为九宫格布局</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> sys
<span class="token keyword">from</span> PyQt5<span class="token punctuation">.</span>QtWidgets <span class="token keyword">import</span> QApplication<span class="token punctuation">,</span> QWidget<span class="token punctuation">,</span> QVBoxLayout<span class="token punctuation">,</span> QPushButton<span class="token punctuation">,</span> QLineEdit<span class="token punctuation">,</span> QGridLayout


<span class="token keyword">class</span> <span class="token class-name">MyWindow</span><span class="token punctuation">(</span>QWidget<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>init_ui<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">init_ui</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>setWindowTitle<span class="token punctuation">(</span><span class="token string">&quot;计算器&quot;</span><span class="token punctuation">)</span>

        <span class="token comment"># 准备数据</span>
        data <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token number">0</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;7&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;8&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;9&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;+&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;(&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token number">1</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;4&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;5&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;6&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;)&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token number">2</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&lt;-&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token number">3</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;=&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>

        <span class="token comment"># 整体垂直布局</span>
        layout <span class="token operator">=</span> QVBoxLayout<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># 输入框</span>
        edit <span class="token operator">=</span> QLineEdit<span class="token punctuation">(</span><span class="token punctuation">)</span>
        edit<span class="token punctuation">.</span>setPlaceholderText<span class="token punctuation">(</span><span class="token string">&quot;请输入内容&quot;</span><span class="token punctuation">)</span>
        <span class="token comment"># 把输入框添加到容器中</span>
        layout<span class="token punctuation">.</span>addWidget<span class="token punctuation">(</span>edit<span class="token punctuation">)</span>

        <span class="token comment"># 网格布局</span>
        grid <span class="token operator">=</span> QGridLayout<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># 循环创建追加进去</span>
        <span class="token keyword">for</span> line_number<span class="token punctuation">,</span> line_data <span class="token keyword">in</span> data<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token comment"># 此时line_number是第几行，line_data是当前行的数据</span>
            <span class="token keyword">for</span> col_number<span class="token punctuation">,</span> number <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>line_data<span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token comment"># 此时col_number是第几列，number是要显示的符号</span>
                btn <span class="token operator">=</span> QPushButton<span class="token punctuation">(</span>number<span class="token punctuation">)</span>
                <span class="token comment"># grid.addWidget(btn)</span>
                grid<span class="token punctuation">.</span>addWidget<span class="token punctuation">(</span>btn<span class="token punctuation">,</span> line_number<span class="token punctuation">,</span> col_number<span class="token punctuation">)</span>

        <span class="token comment"># 把网格布局追加到容器中</span>
        layout<span class="token punctuation">.</span>addLayout<span class="token punctuation">(</span>grid<span class="token punctuation">)</span>

        self<span class="token punctuation">.</span>setLayout<span class="token punctuation">(</span>layout<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    app <span class="token operator">=</span> QApplication<span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">)</span>

    w <span class="token operator">=</span> MyWindow<span class="token punctuation">(</span><span class="token punctuation">)</span>
    w<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>

    app<span class="token punctuation">.</span><span class="token keyword">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行效果：</p><figure><img src="`+o+'" alt="image-20201119192937118" tabindex="0" loading="lazy"><figcaption>image-20201119192937118</figcaption></figure>',21),u=[c];function l(d,k){return s(),a("div",null,u)}const m=n(i,[["render",l],["__file","003-布局.html.vue"]]);export{m as default};
