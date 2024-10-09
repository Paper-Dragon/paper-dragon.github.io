import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{aj as a,ao as t,am as e}from"./app-COjiYc5s.js";const n={};function l(h,i){return e(),a("div",null,i[0]||(i[0]=[t(`<h1 id="iptables实现转发一片连续的端口" tabindex="-1"><a class="header-anchor" href="#iptables实现转发一片连续的端口"><span>Iptables实现转发一片连续的端口</span></a></h1><h2 id="转发命令" tabindex="-1"><a class="header-anchor" href="#转发命令"><span>转发命令</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">iptables</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -t</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nat</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -A</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> PREROUTING</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -i</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> xenbr0</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tcp</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --dport</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 64000:65000</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -j</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> DNAT</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 172.16.10.10:61000-62000</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>解释</strong></p><p><code>--to</code> 是 <code>--to-destination</code> 或 <code>--to-source</code> 的简写</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">DNAT</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> target</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> options:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> --to-destination</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [&lt;ipaddr&gt;[-&lt;ipaddr&gt;]][:port[-port[/port]]]</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">                                Address</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> map</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> destination</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> to.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">SNAT</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> target</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> options:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> --to-source</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [&lt;ipaddr&gt;[-&lt;ipaddr&gt;]][:port[-port]]</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">                                Address</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> map</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> source</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> to.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新版防火墙nftables入门解释 <a href="https://blog.rachelt.one/articles/new-to-nftables-from-config-to-dnat/" target="_blank" rel="noopener noreferrer">https://blog.rachelt.one/articles/new-to-nftables-from-config-to-dnat/</a></p>`,8)]))}const k=s(n,[["render",l],["__file","Iptables实现转发一片连续的端口.html.vue"]]),d=JSON.parse('{"path":"/note-book/Iptables/Iptables%E5%AE%9E%E7%8E%B0%E8%BD%AC%E5%8F%91%E4%B8%80%E7%89%87%E8%BF%9E%E7%BB%AD%E7%9A%84%E7%AB%AF%E5%8F%A3.html","title":"Iptables实现转发一片连续的端口","lang":"zh-CN","frontmatter":{"description":"Iptables实现转发一片连续的端口 转发命令 解释 --to 是 --to-destination 或 --to-source 的简写 新版防火墙nftables入门解释 https://blog.rachelt.one/articles/new-to-nftables-from-config-to-dnat/","head":[["meta",{"property":"og:url","content":"https://www.geekery.cn/note-book/Iptables/Iptables%E5%AE%9E%E7%8E%B0%E8%BD%AC%E5%8F%91%E4%B8%80%E7%89%87%E8%BF%9E%E7%BB%AD%E7%9A%84%E7%AB%AF%E5%8F%A3.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"Iptables实现转发一片连续的端口"}],["meta",{"property":"og:description","content":"Iptables实现转发一片连续的端口 转发命令 解释 --to 是 --to-destination 或 --to-source 的简写 新版防火墙nftables入门解释 https://blog.rachelt.one/articles/new-to-nftables-from-config-to-dnat/"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-09T07:09:07.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-09T07:09:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Iptables实现转发一片连续的端口\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-09T07:09:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"转发命令","slug":"转发命令","link":"#转发命令","children":[]}],"git":{"createdTime":1713620126000,"updatedTime":1725865747000,"contributors":[{"name":"PaperDragon","email":"2678885646@qq.com","commits":1},{"name":"PaperDragon-SH","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":0.35,"words":104},"filePathRelative":"note-book/Iptables/Iptables实现转发一片连续的端口.md","localizedDate":"2024年4月20日","excerpt":"\\n<h2>转发命令</h2>\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"bash\\" data-title=\\"bash\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">iptables</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -t</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> nat</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -A</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> PREROUTING</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -i</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> xenbr0</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -p</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> tcp</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> --dport</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> 64000:65000</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -j</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> DNAT</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> --to</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> 172.16.10.10:61000-62000</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{k as comp,d as data};
