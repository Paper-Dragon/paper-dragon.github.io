import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{aj as a,ao as s,am as n}from"./app-COjiYc5s.js";const t="/assets/image-20201028184027503-BbjbqGa-.png",l="/assets/image-20201029094440181-DiMhoRgO.png",p="/assets/image-20201028112829564-CuwKkfbS.png",r="/assets/image-20201028113012065-BE_TI5bi.png",d="/assets/image-20201028113058478-txgAGJsb.png",c={};function o(h,e){return n(),a("div",null,e[0]||(e[0]=[s(`<h1 id="_009-打包为可执行程序" tabindex="-1"><a class="header-anchor" href="#_009-打包为可执行程序"><span>009-打包为可执行程序</span></a></h1><blockquote><p>009-Mac下，发布PyQT为app程序</p></blockquote><h2 id="方式1-使用pyinstaller发布-推荐" tabindex="-1"><a class="header-anchor" href="#方式1-使用pyinstaller发布-推荐"><span>方式1：使用pyinstaller发布(推荐)</span></a></h2><h4 id="_1-安装" tabindex="-1"><a class="header-anchor" href="#_1-安装"><span>1. 安装</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>pip install pyinstaller -i https://pypi.tuna.tsinghua.edu.cn/simple</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="_2-终端运行" tabindex="-1"><a class="header-anchor" href="#_2-终端运行"><span>2. 终端运行</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>pyinstaller --windowed --onefile --clean --noconfirm main.py</span></span>
<span class="line"><span>pyinstaller --windowed --onefile --clean --noconfirm main.spec</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-效果" tabindex="-1"><a class="header-anchor" href="#_3-效果"><span>3. 效果</span></a></h4><figure><img src="`+t+`" alt="image-20201028184027503" tabindex="0" loading="lazy"><figcaption>image-20201028184027503</figcaption></figure><h3 id="添加-retina-支持" tabindex="-1"><a class="header-anchor" href="#添加-retina-支持"><span>添加 Retina 支持</span></a></h3><p>办法是<code>main.spec</code>向其中添加：</p><p><code>info_plist={ &#39;NSHighResolutionCapable&#39;: &#39;True&#39; }</code> 如下所示：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>app = BUNDLE(exe,</span></span>
<span class="line"><span>             name=&#39;main.app&#39;,</span></span>
<span class="line"><span>             icon=&#39;icon.icns&#39;,</span></span>
<span class="line"><span>             bundle_identifier=None,</span></span>
<span class="line"><span>             info_plist={</span></span>
<span class="line"><span>                &#39;NSHighResolutionCapable&#39;: &#39;True&#39;,</span></span>
<span class="line"><span>                })</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决双击APP启动慢的问题</p><blockquote><p>可以不打包成单个.app文件，而是打包成一个目录中，然后去目录下把感觉没用到的内容删掉，，这样启动更快 ...</p></blockquote><p>将<code>--onefile</code>改为<code>--onedir</code></p><figure><img src="`+l+'" alt="image-20201029094440181" tabindex="0" loading="lazy"><figcaption>image-20201029094440181</figcaption></figure><p>重新运行上述命令，得到的新的app如下</p><h2 id="方式2-使用py2app发布" tabindex="-1"><a class="header-anchor" href="#方式2-使用py2app发布"><span>方式2：使用py2app发布</span></a></h2><h4 id="_1-安装py2app" tabindex="-1"><a class="header-anchor" href="#_1-安装py2app"><span>1. 安装py2app</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>pip3 install py2app  -i https://pypi.tuna.tsinghua.edu.cn/simple</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="_2-生成-setup-py-文件" tabindex="-1"><a class="header-anchor" href="#_2-生成-setup-py-文件"><span>2. 生成 setup.py 文件</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>py2applet --make-setup main.py</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+p+'" alt="image-20201028112829564" tabindex="0" loading="lazy"><figcaption>image-20201028112829564</figcaption></figure><h4 id="_3-清空以前生成的编译文件" tabindex="-1"><a class="header-anchor" href="#_3-清空以前生成的编译文件"><span>3. 清空以前生成的编译文件</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>rm -rf build dist</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="_4-生成mac下的应用" tabindex="-1"><a class="header-anchor" href="#_4-生成mac下的应用"><span>4. 生成mac下的应用</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>python setup.py py2app</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+r+'" alt="image-20201028113012065" tabindex="0" loading="lazy"><figcaption>image-20201028113012065</figcaption></figure><p>找到app</p><figure><img src="'+d+'" alt="image-20201028113058478" tabindex="0" loading="lazy"><figcaption>image-20201028113058478</figcaption></figure>',31)]))}const u=i(c,[["render",o],["__file","009-打包为可执行程序.html.vue"]]),b=JSON.parse(`{"path":"/PyQt5%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B-%E7%8E%8B%E9%93%AD%E4%B8%9C/009-%E6%89%93%E5%8C%85%E4%B8%BA%E5%8F%AF%E6%89%A7%E8%A1%8C%E7%A8%8B%E5%BA%8F.html","title":"009-打包为可执行程序","lang":"zh-CN","frontmatter":{"description":"009-打包为可执行程序 009-Mac下，发布PyQT为app程序 方式1：使用pyinstaller发布(推荐) 1. 安装 2. 终端运行 3. 效果 image-20201028184027503image-20201028184027503 添加 Retina 支持 办法是main.spec向其中添加： info_plist={ 'NSHig...","head":[["meta",{"property":"og:url","content":"https://www.geekery.cn/PyQt5%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B-%E7%8E%8B%E9%93%AD%E4%B8%9C/009-%E6%89%93%E5%8C%85%E4%B8%BA%E5%8F%AF%E6%89%A7%E8%A1%8C%E7%A8%8B%E5%BA%8F.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"009-打包为可执行程序"}],["meta",{"property":"og:description","content":"009-打包为可执行程序 009-Mac下，发布PyQT为app程序 方式1：使用pyinstaller发布(推荐) 1. 安装 2. 终端运行 3. 效果 image-20201028184027503image-20201028184027503 添加 Retina 支持 办法是main.spec向其中添加： info_plist={ 'NSHig..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T08:29:56.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T08:29:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"009-打包为可执行程序\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-25T08:29:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"方式1：使用pyinstaller发布(推荐)","slug":"方式1-使用pyinstaller发布-推荐","link":"#方式1-使用pyinstaller发布-推荐","children":[{"level":3,"title":"添加 Retina 支持","slug":"添加-retina-支持","link":"#添加-retina-支持","children":[]}]},{"level":2,"title":"方式2：使用py2app发布","slug":"方式2-使用py2app发布","link":"#方式2-使用py2app发布","children":[]}],"git":{"createdTime":1698580921000,"updatedTime":1711355396000,"contributors":[{"name":"PaperDragon-SH","email":"2678885646@qq.com","commits":2},{"name":"PaperDragon","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":0.97,"words":291},"filePathRelative":"PyQt5快速上手-王铭东/009-打包为可执行程序.md","localizedDate":"2023年10月29日","excerpt":"\\n<blockquote>\\n<p>009-Mac下，发布PyQT为app程序</p>\\n</blockquote>\\n<h2>方式1：使用pyinstaller发布(推荐)</h2>\\n<h4>1. 安装</h4>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>pip install pyinstaller -i https://pypi.tuna.tsinghua.edu.cn/simple</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{u as comp,b as data};
