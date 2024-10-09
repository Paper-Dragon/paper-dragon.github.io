import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{aj as a,ao as e,am as n}from"./app-COjiYc5s.js";const l="/assets/image-20240305095312766-DEsQqtrO.png",t={};function h(d,i){return n(),a("div",null,i[0]||(i[0]=[e('<h1 id="nvidia显卡在ubuntu平台超频" tabindex="-1"><a class="header-anchor" href="#nvidia显卡在ubuntu平台超频"><span>Nvidia显卡在Ubuntu平台超频</span></a></h1><h2 id="nvidia-smi" tabindex="-1"><a class="header-anchor" href="#nvidia-smi"><span>nvidia-smi</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nvidia-smi</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>借用网络上的一张图，这个命令结束后代表的含义</p><figure><img src="'+l+`" alt="image-20240305095312766" tabindex="0" loading="lazy"><figcaption>image-20240305095312766</figcaption></figure><p>对特殊参数进行解释</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>持久模式：persistence mode 能够让 GPU 更快响应任务，待机功耗增加。</span></span>
<span class="line"><span>    关闭 persistence mode 同样能够启动任务。</span></span>
<span class="line"><span>    持续模式虽然耗能大，但是在新的GPU应用启动时，花费的时间更少</span></span>
<span class="line"><span>风扇转速：主动散热的显卡一般会有这个参数，服务器显卡一般是被动散热，这个参数显示N/A。</span></span>
<span class="line"><span>    从0到100%之间变动，这个速度是计算机期望的风扇转速，实际情况下如果风扇堵转，可能打不到显示的转速。</span></span>
<span class="line"><span>    有的设备不会返回转速，因为它不依赖风扇冷却而是通过其他外设保持低温（比如有些实验室的服务器是常年放在空调房间里的）。 </span></span>
<span class="line"><span>温度：单位是摄氏度。 </span></span>
<span class="line"><span>性能状态：从P0到P12，P0表示最大性能，P12表示状态最小性能。 </span></span>
<span class="line"><span>Disp.A：Display Active，表示GPU的显示是否初始化。 </span></span>
<span class="line"><span>ECC纠错：这个只有近几年的显卡才具有这个功能，老版显卡不具备这个功能。 </span></span>
<span class="line"><span>MIG：Multi-Instance GPU，多实例显卡技术，支持将一张显卡划分成多张显卡使用，目前只支持安培架构显卡。</span></span>
<span class="line"><span>新的多实例GPU (MIG)特性允许GPU(从NVIDIA安培架构开始)被安全地划分为多达7个独立的GPU实例。</span></span>
<span class="line"><span>用于CUDA应用，为多个用户提供独立的GPU资源，以实现最佳的GPU利用率。</span></span>
<span class="line"><span>对于GPU计算能力未完全饱和的工作负载，该特性尤其有益，因此用户可能希望并行运行不同的工作负载，以最大化利用率。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="开启持久模式" tabindex="-1"><a class="header-anchor" href="#开启持久模式"><span>开启持久模式</span></a></h2><p>设置目标 GPUs 的持久模式。有关持久性模式的描述，请参见 (GPU ATTRIBUTES) 部分。需要 root。除非使用 -i 参数指定单个 GPU，否则它将影响所有 GPU。此操作的效果是立竿见影的。但是，它不会在重新启动后持续存在。每次重新启动后，持久性模式将默认为 Disabled。仅在 Linux 上可用。</p><p>persistence mode 持续模式默认关闭。persistence mode 能够让 GPU 更快响应任务，待机功耗增加。关闭 persistence mode 同样能够启动任务。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>nvidia-smi -pm 1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Persistence-M 从 Off 变成 On，持续模式打开。</p><h2 id="设置功耗" tabindex="-1"><a class="header-anchor" href="#设置功耗"><span>设置功耗</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nvidia-smi</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -pl</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [330功耗]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="锁核心频率" tabindex="-1"><a class="header-anchor" href="#锁核心频率"><span>锁核心频率</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nvidia-smi</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -q</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> CLOCK</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>【功能】查看当前的 GPU 时钟速度、默认时钟速度和最大可能的时钟速度</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nvidia-smi</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -q</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> SUPPORTED_CLOCKS</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>【功能】显示每个 GPU 的可用时钟速度列表</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nvidia-smi</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -lgc</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1035</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>将显卡核心频率锁定在1035MHz</p><h2 id="锁显存频率" tabindex="-1"><a class="header-anchor" href="#锁显存频率"><span>锁显存频率</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nvidia-smi</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -lmc</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> xxxx</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>将显存频率锁定到xxxx</p><p>使用nvidia-smi -rgc 即可恢复自动频率。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nvidia-smi</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -rgc</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="显存和核心频率同时设置" tabindex="-1"><a class="header-anchor" href="#显存和核心频率同时设置"><span>显存和核心频率同时设置</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nvidia-smi</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -i</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -ac</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 3003,1531</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>超频： nvidia-smi-i(显卡号） -ac（你想要的显存频率数字），（你想要的核心频率数字）</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">-ac,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --applications-clocks=MEM_CLOCK,GRAPHICS_CLOCK</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">将最大[内存、图形]时钟指定为一对（例如</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 2000,800）</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">它定义了在</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> GPU</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 上运行应用程序时</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> GPU™的速度。为</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">来自</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Kepler+</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 系列的</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Tesla</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 设备和基于</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Maxwell</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 的</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> GeForce</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Titan。</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">需要</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root，除非使用</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -acp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 命令放宽了限制。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30)]))}const k=s(t,[["render",h],["__file","Nvidia显卡在Ubuntu平台超频.html.vue"]]),c=JSON.parse('{"path":"/note-book/AI-Training/Nvidia%E6%98%BE%E5%8D%A1%E5%9C%A8Ubuntu%E5%B9%B3%E5%8F%B0%E8%B6%85%E9%A2%91.html","title":"Nvidia显卡在Ubuntu平台超频","lang":"zh-CN","frontmatter":{"description":"Nvidia显卡在Ubuntu平台超频 nvidia-smi 借用网络上的一张图，这个命令结束后代表的含义 image-20240305095312766image-20240305095312766 对特殊参数进行解释 开启持久模式 设置目标 GPUs 的持久模式。有关持久性模式的描述，请参见 (GPU ATTRIBUTES) 部分。需要 root。...","head":[["meta",{"property":"og:url","content":"https://www.geekery.cn/note-book/AI-Training/Nvidia%E6%98%BE%E5%8D%A1%E5%9C%A8Ubuntu%E5%B9%B3%E5%8F%B0%E8%B6%85%E9%A2%91.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"Nvidia显卡在Ubuntu平台超频"}],["meta",{"property":"og:description","content":"Nvidia显卡在Ubuntu平台超频 nvidia-smi 借用网络上的一张图，这个命令结束后代表的含义 image-20240305095312766image-20240305095312766 对特殊参数进行解释 开启持久模式 设置目标 GPUs 的持久模式。有关持久性模式的描述，请参见 (GPU ATTRIBUTES) 部分。需要 root。..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-25T05:56:48.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-25T05:56:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Nvidia显卡在Ubuntu平台超频\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-25T05:56:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"nvidia-smi","slug":"nvidia-smi","link":"#nvidia-smi","children":[]},{"level":2,"title":"开启持久模式","slug":"开启持久模式","link":"#开启持久模式","children":[]},{"level":2,"title":"设置功耗","slug":"设置功耗","link":"#设置功耗","children":[]},{"level":2,"title":"锁核心频率","slug":"锁核心频率","link":"#锁核心频率","children":[]},{"level":2,"title":"锁显存频率","slug":"锁显存频率","link":"#锁显存频率","children":[]},{"level":2,"title":"显存和核心频率同时设置","slug":"显存和核心频率同时设置","link":"#显存和核心频率同时设置","children":[]}],"git":{"createdTime":1709605434000,"updatedTime":1721887008000,"contributors":[{"name":"PaperDragon-SH","email":"2678885646@qq.com","commits":3}]},"readingTime":{"minutes":2.98,"words":894},"filePathRelative":"note-book/AI-Training/Nvidia显卡在Ubuntu平台超频.md","localizedDate":"2024年3月5日","excerpt":"\\n<h2>nvidia-smi</h2>\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"bash\\" data-title=\\"bash\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">nvidia-smi</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{k as comp,c as data};
