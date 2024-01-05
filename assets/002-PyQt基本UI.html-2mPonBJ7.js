import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-W_F1xAQx.js";const e="/assets/image-20201119172023747-S2IscNq0.png",p="/assets/image-20201119172557560-k2Wl-KEB.png",i="/assets/image-20201119174456690-MgALSl17.png",o="/assets/image-20201119174747564-AL8GfmSI.png",c="/assets/image-20201119180244607-pNhFMKH3.png",l="/assets/image-20201119180544806-9mE97i5Z.png",u="/assets/image-20201119181842503-xAembRhb.png",d="/assets/image-20201119182825369-EOQE5_Tc.png",r={},k=t(`<h1 id="_002-pyqt基本ui" tabindex="-1"><a class="header-anchor" href="#_002-pyqt基本ui" aria-hidden="true">#</a> 002-PyQt基本UI</h1><h2 id="一、第一个pyqt程序" tabindex="-1"><a class="header-anchor" href="#一、第一个pyqt程序" aria-hidden="true">#</a> 一、第一个PyQt程序</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> sys

<span class="token keyword">from</span> PyQt5<span class="token punctuation">.</span>QtWidgets <span class="token keyword">import</span> QApplication<span class="token punctuation">,</span> QWidget

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    app <span class="token operator">=</span> QApplication<span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">)</span>

    w <span class="token operator">=</span> QWidget<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># 设置窗口标题</span>
    w<span class="token punctuation">.</span>setWindowTitle<span class="token punctuation">(</span><span class="token string">&quot;第一个PyQt&quot;</span><span class="token punctuation">)</span>

    <span class="token comment"># 展示窗口</span>
    w<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># 程序进行循环等待状态</span>
    app<span class="token punctuation">.</span><span class="token keyword">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行上述代码的效果如下：</p><figure><img src="`+e+'" alt="image-20201119172023747" tabindex="0" loading="lazy"><figcaption>image-20201119172023747</figcaption></figure><p>程序解释说明：</p><figure><img src="'+p+`" alt="image-20201119172557560" tabindex="0" loading="lazy"><figcaption>image-20201119172557560</figcaption></figure><h2 id="二、模块介绍" tabindex="-1"><a class="header-anchor" href="#二、模块介绍" aria-hidden="true">#</a> 二、模块介绍</h2><p>PyQt中有非常多的功能模块,开发中最常用的功能模块主要有三个:</p><ul><li><strong>QtCore</strong>:包含了核心的非GUI的功能。主要和时间、文件与文件夹、各种数据、流、URLs、mime类文件、进程与线程一起使用</li><li><strong>QtGui</strong>:包含了窗口系统、事件处理、2D图像、基本绘画、字体和文字类</li><li><strong>QtWidgets</strong>:包含了一些列创建桌面应用的UI元素</li></ul><p>可以参考PyQt官网的所有模块，地址：https://www.riverbankcomputing.com/static/Docs/PyQt5/module_index.html#ref-module-index</p><p>C++具体实现的API文档，地址：https://doc.qt.io/qt-5/qtwidgets-module.html</p><p><strong>用到什么功能就它相关的api或者别人分享的使用心得，这是学习最快的方式</strong></p><h2 id="三、基本ui" tabindex="-1"><a class="header-anchor" href="#三、基本ui" aria-hidden="true">#</a> 三、基本UI</h2><p>窗口内的所有控件，若想在窗口中显示，都需要表示它的父亲是谁，而不能直接使用 show 函数显示</p><h3 id="_1-按钮" tabindex="-1"><a class="header-anchor" href="#_1-按钮" aria-hidden="true">#</a> 1. 按钮</h3><p>按钮对应的控件名称为 <code> QPushButton</code> ， 位于 <code>PyQt5.QtWidgets</code> 里面</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> sys

<span class="token keyword">from</span> PyQt5<span class="token punctuation">.</span>QtWidgets <span class="token keyword">import</span> QApplication<span class="token punctuation">,</span> QWidget<span class="token punctuation">,</span> QPushButton

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    app <span class="token operator">=</span> QApplication<span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">)</span>

    w <span class="token operator">=</span> QWidget<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># 设置窗口标题</span>
    w<span class="token punctuation">.</span>setWindowTitle<span class="token punctuation">(</span><span class="token string">&quot;第一个PyQt程序&quot;</span><span class="token punctuation">)</span>

    <span class="token comment"># 在窗口里面添加控件</span>
    btn <span class="token operator">=</span> QPushButton<span class="token punctuation">(</span><span class="token string">&quot;按钮&quot;</span><span class="token punctuation">)</span>

    <span class="token comment"># 设置按钮的父亲是当前窗口，等于是添加到窗口中显示</span>
    btn<span class="token punctuation">.</span>setParent<span class="token punctuation">(</span>w<span class="token punctuation">)</span>

    <span class="token comment"># 展示窗口</span>
    w<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># 程序进行循环等待状态</span>
    app<span class="token punctuation">.</span><span class="token keyword">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行效果：</p><figure><img src="`+i+`" alt="image-20201119174456690" tabindex="0" loading="lazy"><figcaption>image-20201119174456690</figcaption></figure><h3 id="_2-文本" tabindex="-1"><a class="header-anchor" href="#_2-文本" aria-hidden="true">#</a> 2. 文本</h3><p>纯文本控件名称为 <code> QLabel</code> ， 位于 <code>PyQt5.QtWidgets</code> 里面</p><p>纯文本控件仅仅作为标识显示而已，类似输入内容前的一段标签提示（账号 、密码）</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> sys

<span class="token keyword">from</span> PyQt5<span class="token punctuation">.</span>QtWidgets <span class="token keyword">import</span> QApplication<span class="token punctuation">,</span> QWidget<span class="token punctuation">,</span> QPushButton<span class="token punctuation">,</span> QLabel

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    app <span class="token operator">=</span> QApplication<span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">)</span>

    w <span class="token operator">=</span> QWidget<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># 设置窗口标题</span>
    w<span class="token punctuation">.</span>setWindowTitle<span class="token punctuation">(</span><span class="token string">&quot;第一个PyQt&quot;</span><span class="token punctuation">)</span>

    <span class="token comment"># # 下面创建一个Label，然后调用方法指定父类</span>
    <span class="token comment"># label = QLabel(&quot;账号: &quot;, w)</span>
    <span class="token comment"># # 设置父对象</span>
    <span class="token comment"># label.setParent(w)</span>

    <span class="token comment"># 下面创建一个Label（纯文本），在创建的时候指定了父对象</span>
    label <span class="token operator">=</span> QLabel<span class="token punctuation">(</span><span class="token string">&quot;账号: &quot;</span><span class="token punctuation">,</span> w<span class="token punctuation">)</span>

    <span class="token comment"># 显示位置与大小 ： x, y , w, h</span>
    label<span class="token punctuation">.</span>setGeometry<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span>

    <span class="token comment"># 展示窗口</span>
    w<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># 程序进行循环等待状态</span>
    app<span class="token punctuation">.</span><span class="token keyword">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行效果：</p><figure><img src="`+o+`" alt="image-20201119174747564" tabindex="0" loading="lazy"><figcaption>image-20201119174747564</figcaption></figure><h3 id="_3-输入框" tabindex="-1"><a class="header-anchor" href="#_3-输入框" aria-hidden="true">#</a> 3. 输入框</h3><p>输入框的控件名称为 <code>QLineEdit</code>， 位于 <code>PyQt5.QtWidgets</code> 里面</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> sys

<span class="token keyword">from</span> PyQt5<span class="token punctuation">.</span>QtWidgets <span class="token keyword">import</span> QApplication<span class="token punctuation">,</span> QWidget<span class="token punctuation">,</span> QPushButton<span class="token punctuation">,</span> QLabel<span class="token punctuation">,</span> QLineEdit

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    app <span class="token operator">=</span> QApplication<span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">)</span>

    w <span class="token operator">=</span> QWidget<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># 设置窗口标题</span>
    w<span class="token punctuation">.</span>setWindowTitle<span class="token punctuation">(</span><span class="token string">&quot;第一个PyQt&quot;</span><span class="token punctuation">)</span>

    <span class="token comment"># 纯文本</span>
    label <span class="token operator">=</span> QLabel<span class="token punctuation">(</span><span class="token string">&quot;账号&quot;</span><span class="token punctuation">,</span> w<span class="token punctuation">)</span>
    label<span class="token punctuation">.</span>setGeometry<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>

    <span class="token comment"># 文本框</span>
    edit <span class="token operator">=</span> QLineEdit<span class="token punctuation">(</span>w<span class="token punctuation">)</span>
    edit<span class="token punctuation">.</span>setPlaceholderText<span class="token punctuation">(</span><span class="token string">&quot;请输入账号&quot;</span><span class="token punctuation">)</span>
    edit<span class="token punctuation">.</span>setGeometry<span class="token punctuation">(</span><span class="token number">55</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>

    <span class="token comment"># 在窗口里面添加控件</span>
    btn <span class="token operator">=</span> QPushButton<span class="token punctuation">(</span><span class="token string">&quot;注册&quot;</span><span class="token punctuation">,</span> w<span class="token punctuation">)</span>
    btn<span class="token punctuation">.</span>setGeometry<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span>

    <span class="token comment"># 展示窗口</span>
    w<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># 程序进行循环等待状态</span>
    app<span class="token punctuation">.</span><span class="token keyword">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行效果：</p><figure><img src="`+c+`" alt="image-20201119180244607" tabindex="0" loading="lazy"><figcaption>image-20201119180244607</figcaption></figure><h3 id="_4-调整窗口大小" tabindex="-1"><a class="header-anchor" href="#_4-调整窗口大小" aria-hidden="true">#</a> 4. 调整窗口大小</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> sys

<span class="token keyword">from</span> PyQt5<span class="token punctuation">.</span>QtWidgets <span class="token keyword">import</span> QApplication<span class="token punctuation">,</span> QWidget

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    app <span class="token operator">=</span> QApplication<span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">)</span>

    w <span class="token operator">=</span> QWidget<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># 设置窗口标题</span>
    w<span class="token punctuation">.</span>setWindowTitle<span class="token punctuation">(</span><span class="token string">&quot;第一个PyQt&quot;</span><span class="token punctuation">)</span>

    <span class="token comment"># 窗口的大小</span>
    w<span class="token punctuation">.</span>resize<span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span>

    <span class="token comment"># 展示窗口</span>
    w<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># 程序进行循环等待状态</span>
    app<span class="token punctuation">.</span><span class="token keyword">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行效果：</p><figure><img src="`+l+`" alt="image-20201119180544806" tabindex="0" loading="lazy"><figcaption>image-20201119180544806</figcaption></figure><h3 id="_5-窗口显示在屏幕的中间" tabindex="-1"><a class="header-anchor" href="#_5-窗口显示在屏幕的中间" aria-hidden="true">#</a> 5. 窗口显示在屏幕的中间</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> sys

<span class="token keyword">from</span> PyQt5<span class="token punctuation">.</span>QtWidgets <span class="token keyword">import</span> QApplication<span class="token punctuation">,</span> QWidget<span class="token punctuation">,</span> QDesktopWidget

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    app <span class="token operator">=</span> QApplication<span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">)</span>

    w <span class="token operator">=</span> QWidget<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># 设置窗口标题</span>
    w<span class="token punctuation">.</span>setWindowTitle<span class="token punctuation">(</span><span class="token string">&quot;第一个PyQt&quot;</span><span class="token punctuation">)</span>

    <span class="token comment"># 窗口的大小</span>
    w<span class="token punctuation">.</span>resize<span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span>

    <span class="token comment"># 将窗口设置在屏幕的左上角</span>
    <span class="token comment"># w.move(0, 0)</span>

    <span class="token comment"># 调整窗口在屏幕中央显示</span>
    center_pointer <span class="token operator">=</span> QDesktopWidget<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>availableGeometry<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>center<span class="token punctuation">(</span><span class="token punctuation">)</span>
    x <span class="token operator">=</span> center_pointer<span class="token punctuation">.</span>x<span class="token punctuation">(</span><span class="token punctuation">)</span>
    y <span class="token operator">=</span> center_pointer<span class="token punctuation">.</span>y<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># w.move(x, y)</span>
    <span class="token comment"># w.move(x-150, y-150)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>w<span class="token punctuation">.</span>frameGeometry<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>w<span class="token punctuation">.</span>frameGeometry<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>getRect<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>w<span class="token punctuation">.</span>frameGeometry<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>getRect<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    old_x<span class="token punctuation">,</span> old_y<span class="token punctuation">,</span> width<span class="token punctuation">,</span> height <span class="token operator">=</span> w<span class="token punctuation">.</span>frameGeometry<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>getRect<span class="token punctuation">(</span><span class="token punctuation">)</span>
    w<span class="token punctuation">.</span>move<span class="token punctuation">(</span>x <span class="token operator">-</span> width <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">,</span> y <span class="token operator">-</span> height <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>

    <span class="token comment"># 展示窗口</span>
    w<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># 程序进行循环等待状态</span>
    app<span class="token punctuation">.</span><span class="token keyword">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不在中央的样子</p><figure><img src="`+u+'" alt="image-20201119181842503" tabindex="0" loading="lazy"><figcaption>image-20201119181842503</figcaption></figure><p>在中央的样子</p><figure><img src="'+d+`" alt="image-20201119182825369" tabindex="0" loading="lazy"><figcaption>image-20201119182825369</figcaption></figure><h3 id="_6-设置窗口icon" tabindex="-1"><a class="header-anchor" href="#_6-设置窗口icon" aria-hidden="true">#</a> 6. 设置窗口icon</h3><p>可以下载icon图标网站：https://www.easyicon.net/</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> sys

<span class="token keyword">from</span> PyQt5<span class="token punctuation">.</span>QtGui <span class="token keyword">import</span> QIcon
<span class="token keyword">from</span> PyQt5<span class="token punctuation">.</span>QtWidgets <span class="token keyword">import</span> QApplication<span class="token punctuation">,</span> QWidget

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    app <span class="token operator">=</span> QApplication<span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">)</span>

    <span class="token comment"># 创建一个QWidget</span>
    w <span class="token operator">=</span> QWidget<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># 设置标题</span>
    w<span class="token punctuation">.</span>setWindowTitle<span class="token punctuation">(</span><span class="token string">&quot;看看我图标帅吗&quot;</span><span class="token punctuation">)</span>
    <span class="token comment"># 设置图标</span>
    w<span class="token punctuation">.</span>setWindowIcon<span class="token punctuation">(</span>QIcon<span class="token punctuation">(</span><span class="token string">&#39;panda.png&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment"># 显示QWidget</span>
    w<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>

    app<span class="token punctuation">.</span><span class="token keyword">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,44),m=[k];function v(b,g){return s(),a("div",null,m)}const _=n(r,[["render",v],["__file","002-PyQt基本UI.html.vue"]]);export{_ as default};
