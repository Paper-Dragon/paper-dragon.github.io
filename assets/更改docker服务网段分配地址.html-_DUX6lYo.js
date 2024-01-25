import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-EFu5zsXS.js";const t={},c=e(`<h1 id="更改docker服务网段分配地址" tabindex="-1"><a class="header-anchor" href="#更改docker服务网段分配地址" aria-hidden="true">#</a> 更改docker服务网段分配地址</h1><h2 id="在docker配置文件中追加参数" tabindex="-1"><a class="header-anchor" href="#在docker配置文件中追加参数" aria-hidden="true">#</a> 在docker配置文件中追加参数</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># cat /etc/docker/daemon.json</span>
<span class="token punctuation">{</span>
<span class="token string">&quot;bip&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;172.66.1.1/24&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更改docker-compose网桥地址" tabindex="-1"><a class="header-anchor" href="#更改docker-compose网桥地址" aria-hidden="true">#</a> 更改docker-compose网桥地址</h2><p>使用单机容器编码工具，docker-compose时，容器之间的通信网络会用到br-xxx网桥，该网桥会在宿主机建立，示例如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@xingyongsheng ~<span class="token punctuation">]</span><span class="token comment"># ifconfig | headbr-35fc9d6212bd: flags=4163&lt;UP,BROADCAST,RUNNING,MULTICAST&gt;  mtu 1500</span>
        inet <span class="token number">172.16</span>.238.1  netmask <span class="token number">255.255</span>.255.0  broadcast <span class="token number">172.16</span>.238.255
        ether 02:42:7a:4f:9a:b9  txqueuelen <span class="token number">0</span>  <span class="token punctuation">(</span>Ethernet<span class="token punctuation">)</span>
        RX packets <span class="token number">6441897</span>  bytes <span class="token number">8754859570</span> <span class="token punctuation">(</span><span class="token number">8.1</span> GiB<span class="token punctuation">)</span>
        RX errors <span class="token number">0</span>  dropped <span class="token number">0</span>  overruns <span class="token number">0</span>  frame <span class="token number">0</span>
        TX packets <span class="token number">1525889</span>  bytes <span class="token number">953197479</span> <span class="token punctuation">(</span><span class="token number">909.0</span> MiB<span class="token punctuation">)</span>
        TX errors <span class="token number">0</span>  dropped <span class="token number">0</span> overruns <span class="token number">0</span>  carrier <span class="token number">0</span>  collisions <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该网段也有可能与，已有网段重复，若要修改此网段，可按如下步骤进行。安全停掉所有用docker-compose编排的容器，这里建议使用docker-compose down来彻底停掉容器，并自动帮你移除docker-compose之前创建的网桥。之后修改docker-compose.yml文件，增加自定义网络段，如下所示。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> &#39;2.1&#39;services<span class="token punctuation">:</span>
<span class="token key atrule">test-service</span><span class="token punctuation">:</span>
 <span class="token key atrule">image</span><span class="token punctuation">:</span> xxx
 <span class="token key atrule">container_name</span><span class="token punctuation">:</span> xxxxx
 <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
 <span class="token key atrule">networks</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> as4k<span class="token punctuation">-</span>test

<span class="token key atrule">networks</span><span class="token punctuation">:</span>
<span class="token key atrule">as4k-test</span><span class="token punctuation">:</span>
 <span class="token key atrule">ipam</span><span class="token punctuation">:</span>
   <span class="token key atrule">config</span><span class="token punctuation">:</span>
     <span class="token punctuation">-</span> <span class="token key atrule">subnet</span><span class="token punctuation">:</span> 172.16.238.0/24
       <span class="token key atrule">gateway</span><span class="token punctuation">:</span> 172.16.238.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>用新的docker-compose文件，启动容器。
</code></pre>`,9),p=[c];function o(l,i){return s(),a("div",null,p)}const d=n(t,[["render",o],["__file","更改docker服务网段分配地址.html.vue"]]);export{d as default};
