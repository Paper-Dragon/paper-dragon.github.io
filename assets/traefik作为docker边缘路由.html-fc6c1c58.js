import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,f as e}from"./app-6c07b424.js";const t="/assets/image-20230112131250935-49215063.png",i={},r=e('<h1 id="traefik作为docker的边缘路由" tabindex="-1"><a class="header-anchor" href="#traefik作为docker的边缘路由" aria-hidden="true">#</a> Traefik作为docker的边缘路由</h1><blockquote><p>即： provider为docker</p></blockquote><h2 id="方案设计" tabindex="-1"><a class="header-anchor" href="#方案设计" aria-hidden="true">#</a> 方案设计</h2><p>流量想象成流动的水，我们的目的是把水进行分流到每个需要服务的地方，就如下图所示，我们要做的是需要利用Traefik的自动发现机制自动发现服务，然后自动注册到管道处：</p><figure><img src="'+t+`" alt="image-20230112131250935" tabindex="0" loading="lazy"><figcaption>image-20230112131250935</figcaption></figure><p>有以下几个要点：</p><ul><li>主管道： 外部nginx做第一次流量筛选，作为手动控制的开关</li><li>二级管道： Treafik，自动将水管接到服务处 <ul><li>http</li><li>tcp</li><li>udp</li></ul></li></ul><h2 id="主管道配置" tabindex="-1"><a class="header-anchor" href="#主管道配置" aria-hidden="true">#</a> 主管道配置：</h2><blockquote><p>设计原理： 根据配置优先级，若server_name字段写一个具体的domain name，如果匹配不到则走下面的通用配置，由traefik进行域名路由和配置。</p></blockquote><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>    upstream default_backend_traefik <span class="token punctuation">{</span>
      server <span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">82</span>    max_fails<span class="token operator">=</span><span class="token number">3</span> fail_timeout<span class="token operator">=</span><span class="token number">10</span>s<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    server <span class="token punctuation">{</span>
      server_name <span class="token operator">*</span><span class="token punctuation">.</span>todesk<span class="token punctuation">.</span>top<span class="token punctuation">;</span>
  
      location <span class="token operator">/</span> <span class="token punctuation">{</span>
          proxy_pass http<span class="token operator">:</span><span class="token comment">//default_backend_traefik;</span>
          proxy_set_header Host       $http_host<span class="token punctuation">;</span>
          proxy_set_header x<span class="token operator">-</span>forwarded<span class="token operator">-</span><span class="token keyword">for</span> $proxy_add_x_forwarded_for<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二级管道设置" tabindex="-1"><a class="header-anchor" href="#二级管道设置" aria-hidden="true">#</a> 二级管道设置</h2><h3 id="设置traefik服务" tabindex="-1"><a class="header-anchor" href="#设置traefik服务" aria-hidden="true">#</a> 设置Traefik服务</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">reverse-proxy</span><span class="token punctuation">:</span>
    <span class="token comment"># The official v2 Traefik docker image</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> traefik<span class="token punctuation">:</span>v2.9
    <span class="token comment"># Enables the web UI and tells Traefik to listen to docker</span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>api.insecure=true <span class="token punctuation">-</span><span class="token punctuation">-</span>providers.docker <span class="token punctuation">-</span><span class="token punctuation">-</span>entryPoints.web_80.address=<span class="token punctuation">:</span>80 <span class="token punctuation">-</span><span class="token punctuation">-</span>entryPoints.tcpep.address=<span class="token punctuation">:</span>3179 <span class="token punctuation">-</span><span class="token punctuation">-</span>entryPoints.udpep.address=<span class="token punctuation">:</span>3179/udp
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token comment"># The HTTP port</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;127.0.0.1:82:80&quot;</span>
      <span class="token comment"># The Web UI (enabled by --api.insecure=true)</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;127.0.0.1:8082:8080&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;3179:3179/tcp&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;3179:3179/udp&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token comment"># So that Traefik can listen to the Docker events</span>
      <span class="token punctuation">-</span> /var/run/docker.sock<span class="token punctuation">:</span>/var/run/docker.sock
 <span class="token comment"># whoami:</span>
 <span class="token comment"># # A container that exposes an API to show its IP address</span>
 <span class="token comment">#   image: traefik/whoami</span>
 <span class="token comment">#   labels:</span>
 <span class="token comment">#     - &quot;traefik.http.routers.whoami.rule=Host(\`whoami.docker.localhost\`)&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker-运行http服务" tabindex="-1"><a class="header-anchor" href="#docker-运行http服务" aria-hidden="true">#</a> docker 运行http服务</h3><p>例子1</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token punctuation">\\</span>
<span class="token parameter variable">-ti</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-l</span> <span class="token string">&#39;traefik.http.routers.test.rule=Host(\`test.todesk.top\`)&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">--net</span> treafik_default <span class="token punctuation">\\</span>
nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例子2</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Host</span>
<span class="token comment"># entrypoint</span>
<span class="token comment"># 连接到service</span>
<span class="token comment"># service 用的端口</span>
<span class="token function">docker</span> run <span class="token parameter variable">-ti</span> <span class="token parameter variable">-d</span>   <span class="token punctuation">\\</span>
<span class="token parameter variable">-l</span> <span class="token string">&#39;traefik.http.routers.test.rule=Host(\`test.todesk.top\`)&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-l</span> <span class="token string">&#39;traefik.http.routers.test.entrypoints=web_80&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-l</span> <span class="token string">&#39;traefik.http.routers.test.service=test-service&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-l</span> <span class="token string">&#39;traefik.http.services.test-service.loadbalancer.server.port=80&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">--net</span> treafik_default <span class="token punctuation">\\</span>
nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker运行tcp-udp服务" tabindex="-1"><a class="header-anchor" href="#docker运行tcp-udp服务" aria-hidden="true">#</a> docker运行tcp/udp服务</h3><p>例子1：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run  <span class="token parameter variable">-it</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">--privileged</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">--net</span> treafik_default <span class="token punctuation">\\</span>
<span class="token parameter variable">-l</span> <span class="token string">&#39;traefik.tcp.routers.tcprouter1.rule=HostSNI(\`*\`)&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-l</span> <span class="token string">&#39;traefik.tcp.routers.tcprouter1.entrypoints=tcpep&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-l</span> <span class="token string">&#39;traefik.tcp.routers.tcprouter1.service=tcprouter10-svc&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-l</span> <span class="token string">&#39;traefik.tcp.services.tcprouter10-svc.loadbalancer.server.port=22&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-l</span> <span class="token string">&#39;traefik.tcp.routers.tcprouter1.tls=false&#39;</span> <span class="token punctuation">\\</span>
seth0r/ubuntu-sshd:20.04
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例子2：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run  <span class="token parameter variable">-it</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">--net</span> treafik_default <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> MYSQL_ROOT_PASSWORD: P@ssw0rd123 <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> MYSQL_DATABASE: gogs <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> MYSQL_USER: gogs <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> MYSQL_PASSWORD: dalongrong <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> TZ: Asia/Shanghai <span class="token punctuation">\\</span>
<span class="token parameter variable">-l</span> <span class="token string">&#39;traefik.tcp.routers.tcprouter0.rule=HostSNI(\`*\`)&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-l</span> <span class="token string">&#39;traefik.tcp.routers.tcprouter0.entrypoints=tcpep&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-l</span> <span class="token string">&#39;traefik.tcp.routers.tcprouter0.service=tcprouter0-svc&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-l</span> <span class="token string">&#39;traefik.tcp.services.tcprouter0-svc.loadbalancer.server.port=3306&#39;</span> <span class="token punctuation">\\</span>
mysql:5.7.16
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考lables" tabindex="-1"><a class="header-anchor" href="#参考lables" aria-hidden="true">#</a> 参考lables</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">labels</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.enable=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.docker.network=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.docker.lbswarm=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware00.addprefix.prefix=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware01.basicauth.headerfield=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware01.basicauth.realm=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware01.basicauth.removeheader=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware01.basicauth.users=foobar, foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware01.basicauth.usersfile=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware02.buffering.maxrequestbodybytes=42&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware02.buffering.maxresponsebodybytes=42&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware02.buffering.memrequestbodybytes=42&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware02.buffering.memresponsebodybytes=42&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware02.buffering.retryexpression=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware03.chain.middlewares=foobar, foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware04.circuitbreaker.expression=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware04.circuitbreaker.checkperiod=42s&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware04.circuitbreaker.fallbackduration=42s&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware04.circuitbreaker.recoveryduration=42s&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware05.compress=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware05.compress.excludedcontenttypes=foobar, foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware05.compress.minresponsebodybytes=42&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware06.contenttype.autodetect=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware07.digestauth.headerfield=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware07.digestauth.realm=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware07.digestauth.removeheader=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware07.digestauth.users=foobar, foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware07.digestauth.usersfile=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware08.errors.query=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware08.errors.service=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware08.errors.status=foobar, foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware09.forwardauth.address=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware09.forwardauth.authresponseheaders=foobar, foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware09.forwardauth.authresponseheadersregex=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware09.forwardauth.authrequestheaders=foobar, foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware09.forwardauth.tls.ca=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware09.forwardauth.tls.caoptional=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware09.forwardauth.tls.cert=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware09.forwardauth.tls.insecureskipverify=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware09.forwardauth.tls.key=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware09.forwardauth.trustforwardheader=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware10.headers.accesscontrolallowcredentials=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware10.headers.accesscontrolallowheaders=foobar, foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware10.headers.accesscontrolallowmethods=foobar, foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware10.headers.accesscontrolalloworiginlist=foobar, foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware10.headers.accesscontrolalloworiginlistregex=foobar, foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware10.headers.accesscontrolexposeheaders=foobar, foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware10.headers.accesscontrolmaxage=42&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware10.headers.addvaryheader=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware10.headers.allowedhosts=foobar, foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware10.headers.browserxssfilter=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware10.headers.contentsecuritypolicy=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware10.headers.contenttypenosniff=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware10.headers.custombrowserxssvalue=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware10.headers.customframeoptionsvalue=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware10.headers.customrequestheaders.name0=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware10.headers.customrequestheaders.name1=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware10.headers.customresponseheaders.name0=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware10.headers.customresponseheaders.name1=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware10.headers.featurepolicy=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware10.headers.forcestsheader=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware10.headers.framedeny=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware10.headers.hostsproxyheaders=foobar, foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware10.headers.isdevelopment=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware10.headers.permissionspolicy=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware10.headers.publickey=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware10.headers.referrerpolicy=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware10.headers.sslforcehost=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware10.headers.sslhost=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware10.headers.sslproxyheaders.name0=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware10.headers.sslproxyheaders.name1=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware10.headers.sslredirect=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware10.headers.ssltemporaryredirect=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware10.headers.stsincludesubdomains=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware10.headers.stspreload=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware10.headers.stsseconds=42&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware11.ipwhitelist.ipstrategy.depth=42&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware11.ipwhitelist.ipstrategy.excludedips=foobar, foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware11.ipwhitelist.sourcerange=foobar, foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware12.inflightreq.amount=42&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware12.inflightreq.sourcecriterion.ipstrategy.depth=42&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware12.inflightreq.sourcecriterion.ipstrategy.excludedips=foobar, foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware12.inflightreq.sourcecriterion.requestheadername=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware12.inflightreq.sourcecriterion.requesthost=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware13.passtlsclientcert.info.issuer.commonname=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware13.passtlsclientcert.info.issuer.country=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware13.passtlsclientcert.info.issuer.domaincomponent=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware13.passtlsclientcert.info.issuer.locality=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware13.passtlsclientcert.info.issuer.organization=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware13.passtlsclientcert.info.issuer.province=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware13.passtlsclientcert.info.issuer.serialnumber=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware13.passtlsclientcert.info.notafter=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware13.passtlsclientcert.info.notbefore=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware13.passtlsclientcert.info.sans=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware13.passtlsclientcert.info.serialnumber=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware13.passtlsclientcert.info.subject.commonname=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware13.passtlsclientcert.info.subject.country=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware13.passtlsclientcert.info.subject.domaincomponent=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware13.passtlsclientcert.info.subject.locality=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware13.passtlsclientcert.info.subject.organization=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware13.passtlsclientcert.info.subject.organizationalunit=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware13.passtlsclientcert.info.subject.province=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware13.passtlsclientcert.info.subject.serialnumber=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware13.passtlsclientcert.pem=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware14.plugin.foobar.foo=bar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware15.ratelimit.average=42&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware15.ratelimit.burst=42&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware15.ratelimit.period=42&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware15.ratelimit.sourcecriterion.ipstrategy.depth=42&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware15.ratelimit.sourcecriterion.ipstrategy.excludedips=foobar, foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware15.ratelimit.sourcecriterion.requestheadername=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware15.ratelimit.sourcecriterion.requesthost=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware16.redirectregex.permanent=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware16.redirectregex.regex=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware16.redirectregex.replacement=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware17.redirectscheme.permanent=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware17.redirectscheme.port=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware17.redirectscheme.scheme=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware18.replacepath.path=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware19.replacepathregex.regex=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware19.replacepathregex.replacement=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware20.retry.attempts=42&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware20.retry.initialinterval=42&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware21.stripprefix.forceslash=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware21.stripprefix.prefixes=foobar, foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.middlewares.middleware22.stripprefixregex.regex=foobar, foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.router0.entrypoints=foobar, foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.router0.middlewares=foobar, foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.router0.priority=42&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.router0.rule=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.router0.service=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.router0.tls=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.router0.tls.certresolver=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.router0.tls.domains[0].main=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.router0.tls.domains[0].sans=foobar, foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.router0.tls.domains[1].main=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.router0.tls.domains[1].sans=foobar, foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.router0.tls.options=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.router1.entrypoints=foobar, foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.router1.middlewares=foobar, foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.router1.priority=42&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.router1.rule=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.router1.service=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.router1.tls=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.router1.tls.certresolver=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.router1.tls.domains[0].main=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.router1.tls.domains[0].sans=foobar, foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.router1.tls.domains[1].main=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.router1.tls.domains[1].sans=foobar, foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.router1.tls.options=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.services.service01.loadbalancer.healthcheck.followredirects=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.services.service01.loadbalancer.healthcheck.headers.name0=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.services.service01.loadbalancer.healthcheck.headers.name1=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.services.service01.loadbalancer.healthcheck.hostname=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.services.service01.loadbalancer.healthcheck.interval=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.services.service01.loadbalancer.healthcheck.path=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.services.service01.loadbalancer.healthcheck.method=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.services.service01.loadbalancer.healthcheck.port=42&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.services.service01.loadbalancer.healthcheck.scheme=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.services.service01.loadbalancer.healthcheck.timeout=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.services.service01.loadbalancer.passhostheader=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.services.service01.loadbalancer.responseforwarding.flushinterval=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.services.service01.loadbalancer.serverstransport=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.services.service01.loadbalancer.sticky.cookie=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.services.service01.loadbalancer.sticky.cookie.httponly=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.services.service01.loadbalancer.sticky.cookie.name=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.services.service01.loadbalancer.sticky.cookie.samesite=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.services.service01.loadbalancer.sticky.cookie.secure=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.services.service01.loadbalancer.server.port=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.services.service01.loadbalancer.server.scheme=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.tcp.middlewares.tcpmiddleware00.ipwhitelist.sourcerange=foobar, foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.tcp.middlewares.tcpmiddleware01.inflightconn.amount=42&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.tcp.routers.tcprouter0.entrypoints=foobar, foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.tcp.routers.tcprouter0.middlewares=foobar, foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.tcp.routers.tcprouter0.rule=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.tcp.routers.tcprouter0.priority=42&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.tcp.routers.tcprouter0.service=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.tcp.routers.tcprouter0.tls=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.tcp.routers.tcprouter0.tls.certresolver=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.tcp.routers.tcprouter0.tls.domains[0].main=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.tcp.routers.tcprouter0.tls.domains[0].sans=foobar, foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.tcp.routers.tcprouter0.tls.domains[1].main=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.tcp.routers.tcprouter0.tls.domains[1].sans=foobar, foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.tcp.routers.tcprouter0.tls.options=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.tcp.routers.tcprouter0.tls.passthrough=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.tcp.routers.tcprouter1.entrypoints=foobar, foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.tcp.routers.tcprouter1.middlewares=foobar, foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.tcp.routers.tcprouter1.rule=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.tcp.routers.tcprouter1.priority=42&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.tcp.routers.tcprouter1.service=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.tcp.routers.tcprouter1.tls=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.tcp.routers.tcprouter1.tls.certresolver=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.tcp.routers.tcprouter1.tls.domains[0].main=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.tcp.routers.tcprouter1.tls.domains[0].sans=foobar, foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.tcp.routers.tcprouter1.tls.domains[1].main=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.tcp.routers.tcprouter1.tls.domains[1].sans=foobar, foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.tcp.routers.tcprouter1.tls.options=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.tcp.routers.tcprouter1.tls.passthrough=true&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.tcp.services.tcpservice01.loadbalancer.proxyprotocol.version=42&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.tcp.services.tcpservice01.loadbalancer.terminationdelay=42&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.tcp.services.tcpservice01.loadbalancer.server.port=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.udp.routers.udprouter0.entrypoints=foobar, foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.udp.routers.udprouter0.service=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.udp.routers.udprouter1.entrypoints=foobar, foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.udp.routers.udprouter1.service=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.udp.services.udpservice01.loadbalancer.server.port=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.tls.stores.Store0.defaultcertificate.certfile=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.tls.stores.Store0.defaultcertificate.keyfile=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.tls.stores.Store0.defaultgeneratedcert.domain.main=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.tls.stores.Store0.defaultgeneratedcert.domain.sans=foobar, foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.tls.stores.Store0.defaultgeneratedcert.resolver=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.tls.stores.Store1.defaultcertificate.certfile=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.tls.stores.Store1.defaultcertificate.keyfile=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.tls.stores.Store1.defaultgeneratedcert.domain.main=foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.tls.stores.Store1.defaultgeneratedcert.domain.sans=foobar, foobar&quot;</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;traefik.tls.stores.Store1.defaultgeneratedcert.resolver=foobar&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),o=[r];function p(l,u){return n(),a("div",null,o)}const k=s(i,[["render",p],["__file","traefik作为docker边缘路由.html.vue"]]);export{k as default};
