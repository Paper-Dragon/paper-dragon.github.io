import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{aj as i,ao as n,am as a}from"./app-COjiYc5s.js";const s="/assets/intel-gpu-tools-512x349-dIxIUVs9.png",o="/assets/image-20231125113002198-C4ZuDIQ_.png",l={};function r(p,e){return a(),i("div",null,e[0]||(e[0]=[n('<h1 id="ubuntu查看intel的gpu使用情况" tabindex="-1"><a class="header-anchor" href="#ubuntu查看intel的gpu使用情况"><span>Ubuntu查看Intel的GPU使用情况</span></a></h1><p>最近搞个东西，涉及到intel核显的问题，因此需要知道核显目前运行情况如何。在ubuntu下，可以直接安装intel-gpu-tools来查看核显的运行情况。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>sudo apt-get install intel-gpu-tools</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>安装后，用muon看看。可使用的工具列表还是很多的。</p><figure><img src="'+s+'" alt="intel-gpu-tools" tabindex="0" loading="lazy"><figcaption>intel-gpu-tools</figcaption></figure><p>不过其实我也就用一用gpu top而已。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>sudo intel_gpu_top</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+o+'" alt="image-20231125113002198" tabindex="0" loading="lazy"><figcaption>image-20231125113002198</figcaption></figure><p>显示的信息量还是很完整的！算是够用了。如果做这方面相关的开发的话。很方便跟踪一些使用信息。</p>',9)]))}const g=t(l,[["render",r],["__file","Ubuntu查看Intel的GPU使用情况.html.vue"]]),c=JSON.parse('{"path":"/note-book/OperaSystems/Ubuntu/Ubuntu%E6%9F%A5%E7%9C%8BIntel%E7%9A%84GPU%E4%BD%BF%E7%94%A8%E6%83%85%E5%86%B5.html","title":"Ubuntu查看Intel的GPU使用情况","lang":"zh-CN","frontmatter":{"description":"Ubuntu查看Intel的GPU使用情况 最近搞个东西，涉及到intel核显的问题，因此需要知道核显目前运行情况如何。在ubuntu下，可以直接安装intel-gpu-tools来查看核显的运行情况。 安装后，用muon看看。可使用的工具列表还是很多的。 intel-gpu-toolsintel-gpu-tools 不过其实我也就用一用gpu top...","head":[["meta",{"property":"og:url","content":"https://www.geekery.cn/note-book/OperaSystems/Ubuntu/Ubuntu%E6%9F%A5%E7%9C%8BIntel%E7%9A%84GPU%E4%BD%BF%E7%94%A8%E6%83%85%E5%86%B5.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"Ubuntu查看Intel的GPU使用情况"}],["meta",{"property":"og:description","content":"Ubuntu查看Intel的GPU使用情况 最近搞个东西，涉及到intel核显的问题，因此需要知道核显目前运行情况如何。在ubuntu下，可以直接安装intel-gpu-tools来查看核显的运行情况。 安装后，用muon看看。可使用的工具列表还是很多的。 intel-gpu-toolsintel-gpu-tools 不过其实我也就用一用gpu top..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T08:29:56.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T08:29:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Ubuntu查看Intel的GPU使用情况\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-25T08:29:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[],"git":{"createdTime":1691939318000,"updatedTime":1711355396000,"contributors":[{"name":"PaperDragon-SH","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":0.59,"words":178},"filePathRelative":"note-book/OperaSystems/Ubuntu/Ubuntu查看Intel的GPU使用情况.md","localizedDate":"2023年8月13日","excerpt":"\\n<p>最近搞个东西，涉及到intel核显的问题，因此需要知道核显目前运行情况如何。在ubuntu下，可以直接安装intel-gpu-tools来查看核显的运行情况。</p>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>sudo apt-get install intel-gpu-tools</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{g as comp,c as data};
