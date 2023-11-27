import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,e}from"./app-5_Iz5prb.js";const o={},c=e(`<h1 id="一键运行web版本的vscode" tabindex="-1"><a class="header-anchor" href="#一键运行web版本的vscode" aria-hidden="true">#</a> 一键运行web版本的vscode</h1><h2 id="安装docker-compose" tabindex="-1"><a class="header-anchor" href="#安装docker-compose" aria-hidden="true">#</a> 安装docker-compose</h2><p>以centos上可以直接用yum安装docker-compose的，在rocky linux上有冲突，只好手动安装了。 手工安装的这个docker-compose版本，交互效果更好看些，不过也有问题“会多出一些莫名的空容器，状态为Created”。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">docker_compose_version</span><span class="token operator">=</span>v2.2.2 <span class="token punctuation">\\</span>
<span class="token operator">&amp;&amp;</span> <span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token string">&quot;https://github.com/docker/compose/releases/download/<span class="token variable">\${docker_compose_version}</span>/docker-compose-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-s</span><span class="token variable">)</span></span>-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-m</span><span class="token variable">)</span></span>&quot;</span> <span class="token parameter variable">-o</span> /usr/local/bin/docker-compose <span class="token punctuation">\\</span>
<span class="token operator">&amp;&amp;</span> <span class="token function">chmod</span> +x /usr/local/bin/docker-compose <span class="token punctuation">\\</span>
<span class="token operator">&amp;&amp;</span> <span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/bin/docker-compose /usr/bin/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自己搭建的加速链接，避免github龟速</p><div class="language-bsah line-numbers-mode" data-ext="bsah"><pre class="language-bsah"><code>docker_compose_version=v2.2.2 \\
&amp;&amp; curl -L &quot;https://mirror-symbol.q32.top:8443/staticfile/software/%E8%99%9A%E6%8B%9F%E5%8C%96/docker/\${docker_compose_version}/docker-compose-$(uname -s)-$(uname -m)&quot; -o /usr/local/bin/docker-compose \\
&amp;&amp; chmod +x /usr/local/bin/docker-compose \\
&amp;&amp; ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker-compose" tabindex="-1"><a class="header-anchor" href="#docker-compose" aria-hidden="true">#</a> docker-compose</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;2.1&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">code-server</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> lscr.io/linuxserver/code<span class="token punctuation">-</span>server<span class="token punctuation">:</span>latest
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> code<span class="token punctuation">-</span>server
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> PUID=1000
      <span class="token punctuation">-</span> PGID=1000
      <span class="token punctuation">-</span> TZ=Asia/Shanghai
      <span class="token punctuation">-</span> PASSWORD=password <span class="token comment">#optional</span>
      <span class="token comment">#- HASHED_PASSWORD= #optional</span>
      <span class="token punctuation">-</span> SUDO_PASSWORD=password <span class="token comment">#optional</span>
      <span class="token comment">#- SUDO_PASSWORD_HASH= #optional</span>
      <span class="token comment">#- PROXY_DOMAIN=code-server.my.domain #optional</span>
      <span class="token punctuation">-</span> DEFAULT_WORKSPACE=/config/workspace <span class="token comment">#optional</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /opt/vscode/appdata/config<span class="token punctuation">:</span>/config
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 8443<span class="token punctuation">:</span><span class="token number">8443</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),p=[c];function t(i,l){return n(),a("div",null,p)}const u=s(o,[["render",t],["__file","一键运行web版本vscode.html.vue"]]);export{u as default};
