import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{aj as n,ao as t,am as a}from"./app-COjiYc5s.js";const e="/assets/010_%E7%A7%81%E6%9C%89%E5%B1%9E%E6%80%A7%E5%92%8C%E6%96%B9%E6%B3%95-C4ydXixg.png",l={};function r(h,s){return a(),n("div",null,s[0]||(s[0]=[t('<h1 id="私有属性和私有方法" tabindex="-1"><a class="header-anchor" href="#私有属性和私有方法"><span>私有属性和私有方法</span></a></h1><h2 id="_01-应用场景及定义方式" tabindex="-1"><a class="header-anchor" href="#_01-应用场景及定义方式"><span>01. 应用场景及定义方式</span></a></h2><p><strong>应用场景</strong></p><ul><li>在实际开发中，<strong>对象</strong> 的 <strong>某些属性或方法</strong> 可能只希望 <strong>在对象的内部被使用</strong>，而 <strong>不希望在外部被访问到</strong></li><li><strong>私有属性</strong> 就是 <strong>对象</strong> 不希望公开的 <strong>属性</strong></li><li><strong>私有方法</strong> 就是 <strong>对象</strong> 不希望公开的 <strong>方法</strong></li></ul><p><strong>定义方式</strong></p><ul><li>在 <strong>定义属性或方法时</strong>，在 <strong>属性名或者方法名前</strong> 增加 <strong>两个下划线</strong>，定义的就是 <strong>私有</strong> 属性或方法</li></ul><figure><img src="'+e+`" alt="010_私有属性和方法" tabindex="0" loading="lazy"><figcaption>010_私有属性和方法</figcaption></figure><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Women</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    def</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> __init__</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E5C07B;--shiki-dark-font-style:italic;">self</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        self</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.name </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> name</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        # 不要问女生的年龄</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        self</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.__age </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 18</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> __secret</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E5C07B;--shiki-dark-font-style:italic;">self</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">        print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;我的年龄是 </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">%d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> %</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> self</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.__age)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">xiaofang </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;"> Women</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;小芳&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 私有属性，外部不能直接访问</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># print(xiaofang.__age)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 私有方法，外部不能直接调用</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># xiaofang.__secret()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02-伪私有属性和私有方法-科普" tabindex="-1"><a class="header-anchor" href="#_02-伪私有属性和私有方法-科普"><span>02. 伪私有属性和私有方法（科普）</span></a></h2><blockquote><p>提示：在日常开发中，<strong>不要使用这种方式</strong>，<strong>访问对象的 私有属性 或 私有方法</strong></p></blockquote><p><code>Python</code> 中，并没有 <strong>真正意义</strong> 的 <strong>私有</strong></p><ul><li>在给 <strong>属性</strong>、<strong>方法</strong> 命名时，实际是对 <strong>名称</strong> 做了一些特殊处理，使得外界无法访问到</li><li><strong>处理方式</strong>：在 <strong>名称</strong> 前面加上 <code>_类名</code> =&gt; <code>_类名__名称</code></li></ul><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 私有属性，外部不能直接访问到</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(xiaofang._Women__age)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 私有方法，外部不能直接调用</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">xiaofang.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">_Women__secret</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13)]))}const k=i(l,[["render",r],["__file","06_私有属性和私有方法.html.vue"]]),g=JSON.parse('{"path":"/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/06_%E7%A7%81%E6%9C%89%E5%B1%9E%E6%80%A7%E5%92%8C%E7%A7%81%E6%9C%89%E6%96%B9%E6%B3%95.html","title":"私有属性和私有方法","lang":"zh-CN","frontmatter":{"description":"私有属性和私有方法 01. 应用场景及定义方式 应用场景 在实际开发中，对象 的 某些属性或方法 可能只希望 在对象的内部被使用，而 不希望在外部被访问到 私有属性 就是 对象 不希望公开的 属性 私有方法 就是 对象 不希望公开的 方法 定义方式 在 定义属性或方法时，在 属性名或者方法名前 增加 两个下划线，定义的就是 私有 属性或方法 010_私...","head":[["meta",{"property":"og:url","content":"https://www.geekery.cn/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/06_%E7%A7%81%E6%9C%89%E5%B1%9E%E6%80%A7%E5%92%8C%E7%A7%81%E6%9C%89%E6%96%B9%E6%B3%95.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"私有属性和私有方法"}],["meta",{"property":"og:description","content":"私有属性和私有方法 01. 应用场景及定义方式 应用场景 在实际开发中，对象 的 某些属性或方法 可能只希望 在对象的内部被使用，而 不希望在外部被访问到 私有属性 就是 对象 不希望公开的 属性 私有方法 就是 对象 不希望公开的 方法 定义方式 在 定义属性或方法时，在 属性名或者方法名前 增加 两个下划线，定义的就是 私有 属性或方法 010_私..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-19T07:56:45.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-19T07:56:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"私有属性和私有方法\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-19T07:56:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"01. 应用场景及定义方式","slug":"_01-应用场景及定义方式","link":"#_01-应用场景及定义方式","children":[]},{"level":2,"title":"02. 伪私有属性和私有方法（科普）","slug":"_02-伪私有属性和私有方法-科普","link":"#_02-伪私有属性和私有方法-科普","children":[]}],"git":{"createdTime":1691939318000,"updatedTime":1710835005000,"contributors":[{"name":"PaperDragon-SH","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":1.17,"words":352},"filePathRelative":"note-book/Research_Develop/Python/python面向对象/06_私有属性和私有方法.md","localizedDate":"2023年8月13日","excerpt":"\\n<h2>01. 应用场景及定义方式</h2>\\n<p><strong>应用场景</strong></p>\\n<ul>\\n<li>在实际开发中，<strong>对象</strong> 的 <strong>某些属性或方法</strong> 可能只希望 <strong>在对象的内部被使用</strong>，而 <strong>不希望在外部被访问到</strong></li>\\n<li><strong>私有属性</strong> 就是 <strong>对象</strong> 不希望公开的 <strong>属性</strong></li>\\n<li><strong>私有方法</strong> 就是 <strong>对象</strong> 不希望公开的 <strong>方法</strong></li>\\n</ul>","autoDesc":true}');export{k as comp,g as data};
