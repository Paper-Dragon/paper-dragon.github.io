import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{aj as n,ao as a,am as e}from"./app-COjiYc5s.js";const l={};function t(p,s){return e(),n("div",null,s[0]||(s[0]=[a(`<h1 id="kubernetes会话保持-session-配置" tabindex="-1"><a class="header-anchor" href="#kubernetes会话保持-session-配置"><span>kubernetes会话保持（session）配置</span></a></h1><p>在 Kubernetes 中，您可以通过在 Service 的 YAML 配置中添加 <code>sessionAffinity: ClientIP</code> 来实现会话保持（Session Affinity）。这种方式会将来自同一客户端 IP 地址的请求始终转发到相同的后端 Pod，从而维持会话。以下是对这个配置的详细解释：</p><p>通过在 Service 的 <code>spec</code> 中添加以下配置，可以启用会话保持：</p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">apiVersion</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">v1</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">kind</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Service</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">metadata</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">example-service</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">spec</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  selector</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    app</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">example</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  ports</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">protocol</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">TCP</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      port</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">80</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      targetPort</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">9376</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  sessionAffinity</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ClientIP</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  sessionAffinityConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    clientIP</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      timeoutSeconds</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">10800</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)]))}const r=i(l,[["render",t],["__file","kubernetes会话保持（session）配置.html.vue"]]),d=JSON.parse('{"path":"/note-book/Kubernetes/kubernetes%E4%BC%9A%E8%AF%9D%E4%BF%9D%E6%8C%81%EF%BC%88session%EF%BC%89%E9%85%8D%E7%BD%AE.html","title":"kubernetes会话保持（session）配置","lang":"zh-CN","frontmatter":{"description":"kubernetes会话保持（session）配置 在 Kubernetes 中，您可以通过在 Service 的 YAML 配置中添加 sessionAffinity: ClientIP 来实现会话保持（Session Affinity）。这种方式会将来自同一客户端 IP 地址的请求始终转发到相同的后端 Pod，从而维持会话。以下是对这个配置的详细解...","head":[["meta",{"property":"og:url","content":"https://www.geekery.cn/note-book/Kubernetes/kubernetes%E4%BC%9A%E8%AF%9D%E4%BF%9D%E6%8C%81%EF%BC%88session%EF%BC%89%E9%85%8D%E7%BD%AE.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"kubernetes会话保持（session）配置"}],["meta",{"property":"og:description","content":"kubernetes会话保持（session）配置 在 Kubernetes 中，您可以通过在 Service 的 YAML 配置中添加 sessionAffinity: ClientIP 来实现会话保持（Session Affinity）。这种方式会将来自同一客户端 IP 地址的请求始终转发到相同的后端 Pod，从而维持会话。以下是对这个配置的详细解..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-21T05:12:17.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-21T05:12:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"kubernetes会话保持（session）配置\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-21T05:12:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[],"git":{"createdTime":1716268337000,"updatedTime":1716268337000,"contributors":[{"name":"PaperDragon-SH","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":0.44,"words":132},"filePathRelative":"note-book/Kubernetes/kubernetes会话保持（session）配置.md","localizedDate":"2024年5月21日","excerpt":"\\n<p>在 Kubernetes 中，您可以通过在 Service 的 YAML 配置中添加 <code>sessionAffinity: ClientIP</code> 来实现会话保持（Session Affinity）。这种方式会将来自同一客户端 IP 地址的请求始终转发到相同的后端 Pod，从而维持会话。以下是对这个配置的详细解释：</p>\\n<p>通过在 Service 的 <code>spec</code> 中添加以下配置，可以启用会话保持：</p>\\n<div class=\\"language-yaml line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"yaml\\" data-title=\\"yaml\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">apiVersion</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">: </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">v1</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">kind</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">: </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">Service</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">metadata</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">:</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">  name</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">: </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">example-service</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">spec</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">:</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">  selector</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">:</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">    app</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">: </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">example</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">  ports</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">:</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">    - </span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">protocol</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">: </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">TCP</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">      port</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">: </span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">80</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">      targetPort</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">: </span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">9376</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">  sessionAffinity</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">: </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">ClientIP</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">  sessionAffinityConfig</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">:</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">    clientIP</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">:</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">      timeoutSeconds</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">: </span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">10800</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{r as comp,d as data};
