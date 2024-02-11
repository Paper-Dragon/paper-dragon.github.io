import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as t}from"./app-D-ppQBzM.js";const e="/assets/image-20201122203938252-Dl_JJaNj.png",p="/assets/image-20201122204456899-Cz1eyull.png",i="/assets/image-20201122204859131-BIReHFBC.png",o={},c=t(`<h1 id="_005-窗口" tabindex="-1"><a class="header-anchor" href="#_005-窗口"><span>005-窗口</span></a></h1><h2 id="一、分类" tabindex="-1"><a class="header-anchor" href="#一、分类"><span>一、分类</span></a></h2><p>在Qt中，生成窗口有三种方式： <code>QWidget</code> | <code>QMainWindow</code> | <code>QDialog</code></p><h3 id="_1-qwidget" tabindex="-1"><a class="header-anchor" href="#_1-qwidget"><span>1. QWidget</span></a></h3><p>控件和窗口的父类 ，自由度高（什么都东西都没有），没有划分菜单、工具栏、状态栏、主窗口 等区域</p><h3 id="_2-qmainwindow" tabindex="-1"><a class="header-anchor" href="#_2-qmainwindow"><span>2. QMainWindow</span></a></h3><p>是<code> QWidget</code>的子类，包含菜单栏，工具栏，状态栏，标题栏等，中间部分则为主窗口区域</p><h3 id="_3-qdialog" tabindex="-1"><a class="header-anchor" href="#_3-qdialog"><span>3. QDialog</span></a></h3><p>对话框窗口的基类</p><h2 id="二、qwidget" tabindex="-1"><a class="header-anchor" href="#二、qwidget"><span>二、QWidget</span></a></h2><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span>  sys

<span class="token keyword">from</span> PyQt5<span class="token punctuation">.</span>QtWidgets <span class="token keyword">import</span> QWidget<span class="token punctuation">,</span> QLabel <span class="token punctuation">,</span> QApplication

<span class="token keyword">class</span> <span class="token class-name">mywnd</span><span class="token punctuation">(</span>QWidget<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span>mywnd<span class="token punctuation">,</span> self<span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>initUI<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">initUI</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        label <span class="token operator">=</span> QLabel<span class="token punctuation">(</span><span class="token string">&quot;这是文字~~&quot;</span> <span class="token punctuation">)</span>
        label<span class="token punctuation">.</span>setStyleSheet<span class="token punctuation">(</span><span class="token string">&quot;font-size:30px;color:red&quot;</span><span class="token punctuation">)</span>
        label<span class="token punctuation">.</span>setParent<span class="token punctuation">(</span>self<span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    app <span class="token operator">=</span> QApplication<span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">)</span>

    w <span class="token operator">=</span> mywnd<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">#设置窗口标题</span>
    w<span class="token punctuation">.</span>setWindowTitle<span class="token punctuation">(</span><span class="token string">&quot;qwidget&quot;</span><span class="token punctuation">)</span>

    <span class="token comment"># 展示窗口</span>
    w<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># 程序进行循环等待状态</span>
    app<span class="token punctuation">.</span><span class="token keyword">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果：</p><figure><img src="`+e+`" alt="image-20201122203938252" tabindex="0" loading="lazy"><figcaption>image-20201122203938252</figcaption></figure><h2 id="三、qmainwindow" tabindex="-1"><a class="header-anchor" href="#三、qmainwindow"><span>三、QMainWindow</span></a></h2><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> sys

<span class="token keyword">from</span> PyQt5<span class="token punctuation">.</span>QtWidgets <span class="token keyword">import</span> QMainWindow<span class="token punctuation">,</span> QLabel<span class="token punctuation">,</span> QApplication


<span class="token keyword">class</span> <span class="token class-name">MyWindow</span><span class="token punctuation">(</span>QMainWindow<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>init_ui<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">init_ui</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        label <span class="token operator">=</span> QLabel<span class="token punctuation">(</span><span class="token string">&quot;这是文字~~&quot;</span><span class="token punctuation">)</span>
        label<span class="token punctuation">.</span>setStyleSheet<span class="token punctuation">(</span><span class="token string">&quot;font-size:30px;color:red&quot;</span><span class="token punctuation">)</span>

        <span class="token comment"># 调用父类中的menuBar，从而对菜单栏进行操作</span>
        menu <span class="token operator">=</span> self<span class="token punctuation">.</span>menuBar<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment"># 如果是Mac的话，菜单栏不会在Window中显示而是屏幕顶部系统菜单栏位置</span>
        <span class="token comment"># 下面这一行代码使得Mac也按照Windows的那种方式在Window中显示Menu</span>
        menu<span class="token punctuation">.</span>setNativeMenuBar<span class="token punctuation">(</span><span class="token boolean">False</span><span class="token punctuation">)</span>

        file_menu <span class="token operator">=</span> menu<span class="token punctuation">.</span>addMenu<span class="token punctuation">(</span><span class="token string">&quot;文件&quot;</span><span class="token punctuation">)</span>
        file_menu<span class="token punctuation">.</span>addAction<span class="token punctuation">(</span><span class="token string">&quot;新建&quot;</span><span class="token punctuation">)</span>
        file_menu<span class="token punctuation">.</span>addAction<span class="token punctuation">(</span><span class="token string">&quot;打开&quot;</span><span class="token punctuation">)</span>
        file_menu<span class="token punctuation">.</span>addAction<span class="token punctuation">(</span><span class="token string">&quot;保存&quot;</span><span class="token punctuation">)</span>

        edit_menu <span class="token operator">=</span> menu<span class="token punctuation">.</span>addMenu<span class="token punctuation">(</span><span class="token string">&quot;编辑&quot;</span><span class="token punctuation">)</span>
        edit_menu<span class="token punctuation">.</span>addAction<span class="token punctuation">(</span><span class="token string">&quot;复制&quot;</span><span class="token punctuation">)</span>
        edit_menu<span class="token punctuation">.</span>addAction<span class="token punctuation">(</span><span class="token string">&quot;粘贴&quot;</span><span class="token punctuation">)</span>
        edit_menu<span class="token punctuation">.</span>addAction<span class="token punctuation">(</span><span class="token string">&quot;剪切&quot;</span><span class="token punctuation">)</span>

        <span class="token comment"># 设置中心内容显示</span>
        self<span class="token punctuation">.</span>setCentralWidget<span class="token punctuation">(</span>label<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    app <span class="token operator">=</span> QApplication<span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">)</span>

    w <span class="token operator">=</span> MyWindow<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># 设置窗口标题</span>
    w<span class="token punctuation">.</span>setWindowTitle<span class="token punctuation">(</span><span class="token string">&quot;我是窗口标题....&quot;</span><span class="token punctuation">)</span>
    <span class="token comment"># 展示窗口</span>
    w<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># 程序进行循环等待状态</span>
    app<span class="token punctuation">.</span><span class="token keyword">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果（Mac与Windows效果稍有不同）</p><figure><img src="`+p+`" alt="image-20201122204456899" tabindex="0" loading="lazy"><figcaption>image-20201122204456899</figcaption></figure><h2 id="四、qdialog" tabindex="-1"><a class="header-anchor" href="#四、qdialog"><span>四、QDialog</span></a></h2><p>不过对话框一般不应该作为主窗口的存在，而是通过点击操作弹出，起到提示作用</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> sys

<span class="token keyword">from</span> PyQt5<span class="token punctuation">.</span>QtWidgets <span class="token keyword">import</span> QDialog<span class="token punctuation">,</span> QPushButton<span class="token punctuation">,</span> QApplication


<span class="token keyword">class</span> <span class="token class-name">MyDialog</span><span class="token punctuation">(</span>QDialog<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>init_ui<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">init_ui</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        ok_btn <span class="token operator">=</span> QPushButton<span class="token punctuation">(</span><span class="token string">&quot;确定&quot;</span><span class="token punctuation">,</span> self<span class="token punctuation">)</span>
        ok_btn<span class="token punctuation">.</span>setGeometry<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    app <span class="token operator">=</span> QApplication<span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">)</span>

    w <span class="token operator">=</span> MyDialog<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># 设置窗口标题</span>
    w<span class="token punctuation">.</span>setWindowTitle<span class="token punctuation">(</span><span class="token string">&quot;对话框&quot;</span><span class="token punctuation">)</span>
    <span class="token comment"># 展示窗口</span>
    w<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># 程序进行循环等待状态</span>
    app<span class="token punctuation">.</span><span class="token keyword">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行效果：</p><figure><img src="`+i+'" alt="image-20201122204859131" tabindex="0" loading="lazy"><figcaption>image-20201122204859131</figcaption></figure>',22),l=[c];function u(d,r){return s(),a("div",null,l)}const v=n(o,[["render",u],["__file","005-窗口.html.vue"]]),b=JSON.parse('{"path":"/PyQt5%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B-%E7%8E%8B%E9%93%AD%E4%B8%9C/005-%E7%AA%97%E5%8F%A3.html","title":"005-窗口","lang":"zh-CN","frontmatter":{"description":"005-窗口 一、分类 在Qt中，生成窗口有三种方式： QWidget | QMainWindow | QDialog 1. QWidget 控件和窗口的父类 ，自由度高（什么都东西都没有），没有划分菜单、工具栏、状态栏、主窗口 等区域 2. QMainWindow 是 QWidget的子类，包含菜单栏，工具栏，状态栏，标题栏等，中间部分则为主窗口区域...","head":[["meta",{"property":"og:url","content":"https://paper-dragon.github.io/PyQt5%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B-%E7%8E%8B%E9%93%AD%E4%B8%9C/005-%E7%AA%97%E5%8F%A3.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"005-窗口"}],["meta",{"property":"og:description","content":"005-窗口 一、分类 在Qt中，生成窗口有三种方式： QWidget | QMainWindow | QDialog 1. QWidget 控件和窗口的父类 ，自由度高（什么都东西都没有），没有划分菜单、工具栏、状态栏、主窗口 等区域 2. QMainWindow 是 QWidget的子类，包含菜单栏，工具栏，状态栏，标题栏等，中间部分则为主窗口区域..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-29T12:02:01.000Z"}],["meta",{"property":"article:author","content":"PaperDragon"}],["meta",{"property":"article:modified_time","content":"2023-10-29T12:02:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"005-窗口\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-29T12:02:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"一、分类","slug":"一、分类","link":"#一、分类","children":[{"level":3,"title":"1. QWidget","slug":"_1-qwidget","link":"#_1-qwidget","children":[]},{"level":3,"title":"2. QMainWindow","slug":"_2-qmainwindow","link":"#_2-qmainwindow","children":[]},{"level":3,"title":"3. QDialog","slug":"_3-qdialog","link":"#_3-qdialog","children":[]}]},{"level":2,"title":"二、QWidget","slug":"二、qwidget","link":"#二、qwidget","children":[]},{"level":2,"title":"三、QMainWindow","slug":"三、qmainwindow","link":"#三、qmainwindow","children":[]},{"level":2,"title":"四、QDialog","slug":"四、qdialog","link":"#四、qdialog","children":[]}],"git":{"createdTime":1698580921000,"updatedTime":1698580921000,"contributors":[{"name":"PaperDragon","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":1.66,"words":498},"filePathRelative":"PyQt5快速上手-王铭东/005-窗口.md","localizedDate":"2023年10月29日","excerpt":"\\n<h2>一、分类</h2>\\n<p>在Qt中，生成窗口有三种方式：  <code>QWidget</code>  |  <code>QMainWindow</code> | <code>QDialog</code></p>\\n<h3>1. QWidget</h3>\\n<p>控件和窗口的父类 ，自由度高（什么都东西都没有），没有划分菜单、工具栏、状态栏、主窗口 等区域</p>\\n<h3>2. QMainWindow</h3>\\n<p>是<code> QWidget</code>的子类，包含菜单栏，工具栏，状态栏，标题栏等，中间部分则为主窗口区域</p>\\n<h3>3. QDialog</h3>\\n<p>对话框窗口的基类</p>","autoDesc":true}');export{v as comp,b as data};
