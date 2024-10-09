import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{aj as e,ao as a,am as n}from"./app-COjiYc5s.js";const t="/assets/image-20221213143732244-DRVPmUs8.png",l={};function h(k,s){return n(),e("div",null,s[0]||(s[0]=[a(`<h1 id="etcd安装etcdkeeper" tabindex="-1"><a class="header-anchor" href="#etcd安装etcdkeeper"><span>etcd安装etcdkeeper</span></a></h1><h2 id="安装etcd-keeper" tabindex="-1"><a class="header-anchor" href="#安装etcd-keeper"><span>安装etcd keeper</span></a></h2><p>github地址：<a href="https://github.com/evildecay/etcdkeeper" target="_blank" rel="noopener noreferrer">https://github.com/evildecay/etcdkeeper</a></p><p>安装简单，步骤简短。</p><h2 id="获取安装包" tabindex="-1"><a class="header-anchor" href="#获取安装包"><span>获取安装包</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">wget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://github.com/evildecay/etcdkeeper/releases/download/v0.7.6/etcdkeeper-v0.7.6-linux_x86_64.zip</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="解压安装包" tabindex="-1"><a class="header-anchor" href="#解压安装包"><span>解压安装包</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">unzip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> etcdkeeper-v0.7.6-linux_x86_64.zip</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mv</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> etcdkeeper</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local/etcdkeeper</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> +x</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> etcdkeeper</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编辑systemd文件" tabindex="-1"><a class="header-anchor" href="#编辑systemd文件"><span>编辑systemd文件</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /lib/systemd/system</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> etcdkeeper.service</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[Unit]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Description</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">etcdkeeper</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> service</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">After</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">network.target</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[Service]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Type</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">simple</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ExecStart</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/usr/local/etcdkeeper/etcdkeeper</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> -h</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0.0.0.0</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 8888</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ExecReload</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/bin/kill</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> -HUP</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> $MAINPID</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">KillMode</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">process</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Restart</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">on-failure</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">PrivateTmp</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">true</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[Install]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">WantedBy</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">multi-user.target</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启动参数" tabindex="-1"><a class="header-anchor" href="#启动参数"><span>启动参数</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  Usage</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> of</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> etcdkeeper.exe:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  -h</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> string</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        host</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> or</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> address</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (default: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;0.0.0.0&quot;,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> http</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> addreess,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> not</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> etcd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> address</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> int</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        port</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (default </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">8080</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  -sep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> string</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        Separator</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (default </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;/&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  -usetls</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        use</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tls</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (only </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">v3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  -cacert</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> string</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        verify</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> certificates</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> of</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> TLS-enabled</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> secure</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> servers</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> using</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> this</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> CA</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> bundle</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (only </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">v3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  -cert</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> string</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        identify</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> secure</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> client</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> using</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> this</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> TLS</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> certificate</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> file</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (only </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">v3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  -key</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> string</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        identify</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> secure</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> client</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> using</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> this</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> TLS</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> key</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> file</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (only </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">v3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  -auth</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> bool</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        use</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> etcd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> auth</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  -timeout</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> int</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        ETCD</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> client</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> connect</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> timeout</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="访问测试" tabindex="-1"><a class="header-anchor" href="#访问测试"><span>访问测试</span></a></h2><p><a href="http://172.24.31.13:8888/etcdkeeper/" target="_blank" rel="noopener noreferrer">http://172.24.31.13:8888/etcdkeeper/</a></p><h2 id="etcdkeeper访问开启鉴权的etcd" tabindex="-1"><a class="header-anchor" href="#etcdkeeper访问开启鉴权的etcd"><span>etcdkeeper访问开启鉴权的etcd</span></a></h2><p><a href="https://github.com/evildecay/etcdkeeper/issues/57" target="_blank" rel="noopener noreferrer">https://github.com/evildecay/etcdkeeper/issues/57</a></p><p>如果etcd集群开启了鉴权。(etcdctl --endpoints=[http://127.0.0.1:2379] auth enable)</p><p>那么etcdkeeper启动时需要添加参数-auth true</p><p>如果etcd集群开启了鉴权，但是etcdkeeper没有添加参数-auth true，及时输入了正确的用户名和密码，也会出现以下情况：</p><figure><img src="`+t+'" alt="image-20221213143732244" tabindex="0" loading="lazy"><figcaption>image-20221213143732244</figcaption></figure>',20)]))}const r=i(l,[["render",h],["__file","etcd安装etcdkeeper.html.vue"]]),c=JSON.parse('{"path":"/note-book/DatabaseSystem/Etcd/etcd%E5%AE%89%E8%A3%85etcdkeeper.html","title":"etcd安装etcdkeeper","lang":"zh-CN","frontmatter":{"description":"etcd安装etcdkeeper 安装etcd keeper github地址：https://github.com/evildecay/etcdkeeper 安装简单，步骤简短。 获取安装包 解压安装包 编辑systemd文件 启动参数 访问测试 http://172.24.31.13:8888/etcdkeeper/ etcdkeeper访问开启鉴...","head":[["meta",{"property":"og:url","content":"https://www.geekery.cn/note-book/DatabaseSystem/Etcd/etcd%E5%AE%89%E8%A3%85etcdkeeper.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"etcd安装etcdkeeper"}],["meta",{"property":"og:description","content":"etcd安装etcdkeeper 安装etcd keeper github地址：https://github.com/evildecay/etcdkeeper 安装简单，步骤简短。 获取安装包 解压安装包 编辑systemd文件 启动参数 访问测试 http://172.24.31.13:8888/etcdkeeper/ etcdkeeper访问开启鉴..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-25T05:56:48.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-25T05:56:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"etcd安装etcdkeeper\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-25T05:56:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"安装etcd keeper","slug":"安装etcd-keeper","link":"#安装etcd-keeper","children":[]},{"level":2,"title":"获取安装包","slug":"获取安装包","link":"#获取安装包","children":[]},{"level":2,"title":"解压安装包","slug":"解压安装包","link":"#解压安装包","children":[]},{"level":2,"title":"编辑systemd文件","slug":"编辑systemd文件","link":"#编辑systemd文件","children":[]},{"level":2,"title":"启动参数","slug":"启动参数","link":"#启动参数","children":[]},{"level":2,"title":"访问测试","slug":"访问测试","link":"#访问测试","children":[]},{"level":2,"title":"etcdkeeper访问开启鉴权的etcd","slug":"etcdkeeper访问开启鉴权的etcd","link":"#etcdkeeper访问开启鉴权的etcd","children":[]}],"git":{"createdTime":1691939318000,"updatedTime":1721887008000,"contributors":[{"name":"PaperDragon-SH","email":"2678885646@qq.com","commits":3},{"name":"PaperDragon","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":0.95,"words":285},"filePathRelative":"note-book/DatabaseSystem/Etcd/etcd安装etcdkeeper.md","localizedDate":"2023年8月13日","excerpt":"\\n<h2>安装etcd keeper</h2>\\n<p>github地址：<a href=\\"https://github.com/evildecay/etcdkeeper\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://github.com/evildecay/etcdkeeper</a></p>\\n<p>安装简单，步骤简短。</p>\\n<h2>获取安装包</h2>\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"bash\\" data-title=\\"bash\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">wget</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> https://github.com/evildecay/etcdkeeper/releases/download/v0.7.6/etcdkeeper-v0.7.6-linux_x86_64.zip</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{r as comp,c as data};
