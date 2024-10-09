import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{aj as a,ao as n,am as l}from"./app-COjiYc5s.js";const h="/assets/bab8233ff3b44afacd3f0e2ad639da10_-BV_Rf0Sj.png",e="/assets/9693f79a5eb3107fe4029b49cf30970c_-Nx9mHxT0.png",t="/assets/6a3d94508b45b88bab89d0f96af5285f_-CvBDkeLc.png",k="/assets/aa071a85baa6a3f3b614a649307f3b02_-Cn9pW15U.png",p="/assets/62290e14339861b89cb1f9f2ce88c6b-CwFouNcK.jpg",r={};function d(c,i){return l(),a("div",null,i[0]||(i[0]=[n('<h1 id="nessus的web漏洞解决" tabindex="-1"><a class="header-anchor" href="#nessus的web漏洞解决"><span>Nessus的web漏洞解决</span></a></h1><blockquote><p>朋友的web项目在做安全检测的时候不过关，我这边帮忙解决，顺便把步骤记录下来。问题是一些跨域问题和安全加固问题</p></blockquote><h2 id="检测现状" tabindex="-1"><a class="header-anchor" href="#检测现状"><span>检测现状</span></a></h2><h3 id="x-frame-options" tabindex="-1"><a class="header-anchor" href="#x-frame-options"><span>X-Frame-Options</span></a></h3><blockquote><p>这个header选项的作用是</p><ul><li>防止点击劫持、</li><li>设置页面是否能作为iframe嵌套</li></ul></blockquote><figure><img src="'+h+'" alt="bab8233ff3b44afacd3f0e2ad639da10_" tabindex="0" loading="lazy"><figcaption>bab8233ff3b44afacd3f0e2ad639da10_</figcaption></figure><figure><img src="'+e+`" alt="9693f79a5eb3107fe4029b49cf30970c_" tabindex="0" loading="lazy"><figcaption>9693f79a5eb3107fe4029b49cf30970c_</figcaption></figure><h4 id="防嵌套网页-点击劫持" tabindex="-1"><a class="header-anchor" href="#防嵌套网页-点击劫持"><span>防嵌套网页（点击劫持）</span></a></h4><p>因为iframe享有着click的最优先权，当有人在伪造的主页中进行点击的话，如果点在iframe上，则会默认是在操作iframe的页面。 攻击者可以使用一个透明的、不可见的iframe，覆盖在目标网页上，然后诱使用户在该网页上进行操作，此时用户将在不知情的情况下点击透明的iframe页面。通过调整iframe页面的位置，可以诱使用户恰好点击iframe页面的一些功能性按钮上，导致被劫持。</p><p>钓鱼网站就是使用这个技术，通过诱导用户进行点击，比如设计一个&quot;妹妹寂寞了&quot;等之类的网页，诱导用户点击，但实际结果，你看到的不是&quot;妹妹&quot;,而是被恶意微博吸粉。 所以为了防止网站被钓鱼，可以使用window.top来防止你的网页被iframe.</p><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">window</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> !=</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">top</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">){</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">    window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">top</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">href</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> correctURL</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段代码的主要用途是限定你的网页不能嵌套在任意网页内。如果你想引用同域的框架的话，可以判断域名。</p><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">top</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">host</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> !=</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">host</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">　　top</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">href</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">href</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，如果你网页不同域名的话，上述就会报错。 所以，这里可以使用try...catch...进行错误捕获。如果发生错误，则说明不同域，表示你的页面被盗用了。可能有些浏览器这样写是不会报错，所以需要降级处理。 这时候再进行跳转即可.</p><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">try</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">　　top</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">hostname</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//检测是否出错</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">　　//如果没有出错，则降级处理</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">　　if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">top</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">hostname</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> !=</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">hostname</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) { </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">　　　　top</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">href</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">href</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">　　}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">catch</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">){</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">　　top</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">href</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">href</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这只是浏览器端，对iframe页面的权限做出相关的设置。 我们还可以在服务器上，对使用iframe的权限进行设置.</p><h4 id="x-frame-options-设置页面能否作为iframe嵌套" tabindex="-1"><a class="header-anchor" href="#x-frame-options-设置页面能否作为iframe嵌套"><span>X-Frame-Options （设置页面能否作为iframe嵌套）</span></a></h4><p>用来确认是否浏览器可以在frame或iframe标签中渲染一个页面，网站可以用这个头来保证他们的内容不会被嵌入到其它网站中，以来避免点击劫持。</p><p>参数</p><h5 id="deny" tabindex="-1"><a class="header-anchor" href="#deny"><span>DENY</span></a></h5><p>表示该页面不允许在 frame 中展示（拒绝任何iframe的嵌套请求），即便是在相同域名的页面中嵌套也不允许。</p><p>等价于：</p><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">window</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> !=</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">top</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">){</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">    window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">top</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">href</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">href</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="sameorigin" tabindex="-1"><a class="header-anchor" href="#sameorigin"><span>SAMEORIGIN</span></a></h5><p>表示该页面可以在相同域名页面的iframe 中展示，例如网页为 foo.com/123.php，則 foo.com 底下的所有网页可以嵌入此网页，但是 foo.com 以外的网页不能嵌入。</p><p>设置后如果在不同域名页面通过iframe加载会报下面错误：in a frame because it set &#39;X-Frame-Options&#39; to &#39;sameorigin&#39;.</p><p>等价于：</p><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">top</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">hostname</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> !=</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">hostname</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) { </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">　　　　top</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">href</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">href</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="allow-from-uri" tabindex="-1"><a class="header-anchor" href="#allow-from-uri"><span>ALLOW-FROM uri</span></a></h5><p>表示该页面可以在指定的uri页面中被iiframe加载。</p><h3 id="content-security-policy" tabindex="-1"><a class="header-anchor" href="#content-security-policy"><span>Content-Security-Policy</span></a></h3><blockquote><p><strong>CSP 的实质就是白名单制度</strong>，开发者明确告诉客户端，**哪些外部资源可以加载和执行，**等同于提供白名单。它的实现和执行全部由浏览器完成，开发者只需提供配置。</p><p>CSP 大大增强了网页的安全性。攻击者即使发现了漏洞，也没法注入脚本，除非还控制了一台列入了白名单的可信主机。</p></blockquote><figure><img src="`+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="access-control-allow-method" tabindex="-1"><a class="header-anchor" href="#access-control-allow-method"><span>Access-Control-Allow-Method</span></a></h3><blockquote><p>目录允许使用的请求方法</p></blockquote><figure><img src="'+k+'" alt="aa071a85baa6a3f3b614a649307f3b02_" tabindex="0" loading="lazy"><figcaption>aa071a85baa6a3f3b614a649307f3b02_</figcaption></figure><figure><img src="'+p+`" alt="62290e14339861b89cb1f9f2ce88c6b" tabindex="0" loading="lazy"><figcaption>62290e14339861b89cb1f9f2ce88c6b</figcaption></figure><h2 id="最终策略" tabindex="-1"><a class="header-anchor" href="#最终策略"><span>最终策略</span></a></h2><h3 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx"><span>Nginx</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    listen</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">       80</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    listen</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  [::]:80;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    server_name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  localhost</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # access_log /var/log/nginx/host.access.log main;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # 防止点击劫持（Clickjacking）攻击</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    add_header</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> X-Frame-Options</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> SAMEORIGIN</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    add_header</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Access-Control-Allow-Methods</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> POST,GET,PUT,DELETE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$request_method</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;OPTIONS&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 204</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    location</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        root</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/share/nginx/html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        add_header</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;Access-Control-Allow-Credentials&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;true&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        index</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> index.html</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> index.htm</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    location</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ^/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">css</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">|</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">js</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">{</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        root</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/share/nginx/html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$request_method</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> !</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">~</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ^</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">GET</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">|</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">HEAD</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">|</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">POST</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)$) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 405</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Method Not Allowed&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # location ~* \\.(js|css|jpg|jpeg|gif|png|swf)$ {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    #     root /usr/share/nginx/html;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    #     if (-f $request_filename) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    #         return 403;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    #         break;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    #     }</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    error_page</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 404</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /404.html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    error_page</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 500</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 502</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 503</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 504</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /50x.html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    location</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /50x.html</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        root</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/share/nginx/html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,40)]))}const B=s(r,[["render",d],["__file","Nessus的web漏洞解决.html.vue"]]),o=JSON.parse('{"path":"/note-book/Security/Nessus%E7%9A%84web%E6%BC%8F%E6%B4%9E%E8%A7%A3%E5%86%B3.html","title":"Nessus的web漏洞解决","lang":"zh-CN","frontmatter":{"feed":false,"seo":false,"head":[]},"headers":[{"level":2,"title":"检测现状","slug":"检测现状","link":"#检测现状","children":[{"level":3,"title":"X-Frame-Options","slug":"x-frame-options","link":"#x-frame-options","children":[]},{"level":3,"title":"Content-Security-Policy","slug":"content-security-policy","link":"#content-security-policy","children":[]},{"level":3,"title":"Access-Control-Allow-Method","slug":"access-control-allow-method","link":"#access-control-allow-method","children":[]}]},{"level":2,"title":"最终策略","slug":"最终策略","link":"#最终策略","children":[{"level":3,"title":"Nginx","slug":"nginx","link":"#nginx","children":[]}]}],"git":{"createdTime":1721196187000,"updatedTime":1726163060000,"contributors":[{"name":"Paper-Dragon","email":"2678885646@qq.com","commits":1},{"name":"PaperDragon-SH","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":3.61,"words":1082},"filePathRelative":"note-book/Security/Nessus的web漏洞解决.md","localizedDate":"2024年7月17日"}');export{B as comp,o as data};
