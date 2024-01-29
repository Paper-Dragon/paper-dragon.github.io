import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,d as e}from"./app-FUNHprH_.js";const i={},l=e(`<h1 id="pyinstaller-带静态依赖文件打包教程" tabindex="-1"><a class="header-anchor" href="#pyinstaller-带静态依赖文件打包教程"><span>PyInstaller 带静态依赖文件打包教程</span></a></h1><h2 id="方法一-通过命令行参数" tabindex="-1"><a class="header-anchor" href="#方法一-通过命令行参数"><span>方法一：通过命令行参数</span></a></h2><pre><code>--add-data &quot;欲打包的源文件路径（可以是相对路径，也可以是绝对路径）;.（打包后对应的程序内的路径，一个.代表打包至程序运行时根目录）&quot;

--add-data 参数 可以多次使用，注意格式为引号里面有一个文件名，有一个分号，一个点。

例： pyinstaller -F --add-data &#39;.\\32x32.ico;.&#39; &#39;.\\main.py&#39;
</code></pre><h2 id="方法二-通过修改-spec-打包配置脚本文件" tabindex="-1"><a class="header-anchor" href="#方法二-通过修改-spec-打包配置脚本文件"><span>方法二：通过修改 spec 打包配置脚本文件</span></a></h2><h3 id="通过命令生成-spec-文件" tabindex="-1"><a class="header-anchor" href="#通过命令生成-spec-文件"><span>通过命令生成 spec 文件</span></a></h3><h4 id="onefolder-单文件夹模式" tabindex="-1"><a class="header-anchor" href="#onefolder-单文件夹模式"><span>OneFolder 单文件夹模式</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>pyi-makespec filename
<span class="token comment"># pyi-makespec 后跟欲打包python文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="onefile-单文件文件" tabindex="-1"><a class="header-anchor" href="#onefile-单文件文件"><span>OneFile 单文件文件</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>pyi-makespec <span class="token parameter variable">-F</span> filename
<span class="token comment"># 与pyinstaller 打包单文件相同，均使用 -F 参数</span>
<span class="token comment"># pyi-makespec -F 后跟欲打包python文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改生成的-spec-文件" tabindex="-1"><a class="header-anchor" href="#修改生成的-spec-文件"><span>修改生成的 spec 文件</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># -*- mode: python ; coding: utf-8 -*-</span>

block_cipher <span class="token operator">=</span> None
a <span class="token operator">=</span> Analysis<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;main.py&#39;</span><span class="token punctuation">]</span>,
             <span class="token assign-left variable">pathex</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>,
             <span class="token assign-left variable">binaries</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>,
             <span class="token assign-left variable">datas</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>,
             <span class="token assign-left variable">hiddenimports</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>,
             <span class="token assign-left variable">hookspath</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>,
             <span class="token assign-left variable">runtime_hooks</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>,
             <span class="token assign-left variable">excludes</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>,
             <span class="token assign-left variable">win_no_prefer_redirects</span><span class="token operator">=</span>False,
             <span class="token assign-left variable">win_private_assemblies</span><span class="token operator">=</span>False,
             <span class="token assign-left variable">cipher</span><span class="token operator">=</span>block_cipher,
             <span class="token assign-left variable">noarchive</span><span class="token operator">=</span>False<span class="token punctuation">)</span>

<span class="token comment"># 在 a 中 datas 列表内添加如下格式配置项</span>
<span class="token comment"># (&#39;欲打包的源文件路径（相对、绝对均可）&#39;, &#39;.（打包后对应的程序内的路径，一个.代表打包至程序运行时根目录）&#39;)</span>

<span class="token comment"># 例如：</span>
<span class="token comment"># 	a = Analysis([&#39;main.py&#39;],</span>
<span class="token comment">#		pathex=[],</span>
<span class="token comment">#    	binaries=[],</span>
<span class="token comment">#       datas=[(&#39;.\\\\excel.ico&#39;, &#39;.&#39;)],</span>
<span class="token comment">#       hiddenimports=[],</span>
<span class="token comment">#       hookspath=[],</span>
<span class="token comment">#       runtime_hooks=[],</span>
<span class="token comment">#       excludes=[],</span>
<span class="token comment">#       win_no_prefer_redirects=False,</span>
<span class="token comment">#       win_private_assemblies=False,</span>
<span class="token comment">#       cipher=block_cipher,</span>
<span class="token comment">#       noarchive=False)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：路径中需要用 双反斜杠！！</p><h3 id="使用该-spec-文件打包" tabindex="-1"><a class="header-anchor" href="#使用该-spec-文件打包"><span>使用该 spec 文件打包</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>pyinstaller ***.spec
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="调用方法" tabindex="-1"><a class="header-anchor" href="#调用方法"><span>调用方法</span></a></h2><h4 id="不能在代码中直接使用相对路径调用文件" tabindex="-1"><a class="header-anchor" href="#不能在代码中直接使用相对路径调用文件"><span>不能在代码中直接使用相对路径调用文件</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 先获取当前运行时临时目录路径</span>
<span class="token keyword">if</span> getattr<span class="token punctuation">(</span>sys, <span class="token string">&#39;frozen&#39;</span>, None<span class="token punctuation">)</span>:
    basedir <span class="token operator">=</span> sys._MEIPASS
else:
    basedir <span class="token operator">=</span> path.dirname<span class="token punctuation">(</span>__file__<span class="token punctuation">)</span>
<span class="token comment"># 使用 os.path.join() 方法，将 临时目录路径与文件相对路径拼接</span>
with open<span class="token punctuation">(</span>path.join<span class="token punctuation">(</span>basedir, <span class="token string">&#39;file.txt&#39;</span><span class="token punctuation">)</span>, <span class="token string">&#39;r&#39;</span><span class="token punctuation">)</span> as fp:
    pass
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="备注" tabindex="-1"><a class="header-anchor" href="#备注"><span>备注：</span></a></h4><pre><code>单文件模式下，运行可执行文件时，程序会先将可执行文件进行解压缩，解压缩的位置在 /temp目录 下，再执行，所以被打包进去的数据文件在被解压的路径下，而，程序是在运行的路径下搜索，即可执行文件的目录下，所以找不到数据文件
</code></pre>`,19),p=[l];function t(c,o){return n(),a("div",null,p)}const u=s(i,[["render",t],["__file","PyInstaller带静态依赖文件打包教程.html.vue"]]);export{u as default};
