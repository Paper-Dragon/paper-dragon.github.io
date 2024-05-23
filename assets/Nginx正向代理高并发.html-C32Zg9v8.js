import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o as s,d as a}from"./app-C8EhNTY6.js";const t={},i=a(`<h1 id="nginx正向代理高并发" tabindex="-1"><a class="header-anchor" href="#nginx正向代理高并发"><span>Nginx正向代理高并发</span></a></h1><h2 id="proxy" tabindex="-1"><a class="header-anchor" href="#proxy"><span>Proxy</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
yum makecache <span class="token operator">&amp;&amp;</span> yum <span class="token function">install</span> epel-* <span class="token parameter variable">-y</span> <span class="token operator">&amp;&amp;</span> yum <span class="token function">install</span> nginx <span class="token parameter variable">-y</span> <span class="token operator">&amp;&amp;</span> yum clean all


systemctl start nginx
systemctl <span class="token builtin class-name">enable</span> nginx
<span class="token comment"># 检查是否已经存在listen 3126;字段</span>

<span class="token keyword">if</span> <span class="token function">grep</span> <span class="token parameter variable">-q</span> <span class="token string">&quot;listen 3126;&quot;</span> /etc/nginx/nginx.conf<span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;代理服务器 listen 3126; 已经安装&quot;</span>
<span class="token keyword">else</span>
  <span class="token comment"># 在http字段后插入新的server块</span>
  <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;/http {/a\\    server {\\n    listen 3126;\\n    server_name _;\\n    location / {\\n    resolver 8.8.8.8;\\n    proxy_pass $scheme://$http_host$request_uri;\\n    }\\n}&#39;</span> /etc/nginx/nginx.conf
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;已配置代理服务器&quot;</span>
<span class="token keyword">fi</span>
nginx <span class="token parameter variable">-s</span> reload

<span class="token comment"># 将以下配置写入 /etc/sysctl.conf</span>

<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span>/etc/sysctl.conf</span>
net.ipv4.tcp_fin_timeout = 5
net.ipv4.tcp_keepalive_time = 5
net.ipv4.tcp_syncookies = 1
net.ipv4.tcp_tw_reuse = 1
net.ipv4.tcp_tw_recycle = 1
net.ipv4.tcp_max_syn_backlog = 3240000
net.ipv4.tcp_max_tw_buckets = 10000

net.ipv4.tcp_mem = 768432 2097152 15242880
net.ipv4.tcp_rmem = 4096 4096 33554432
net.ipv4.tcp_wmem = 4096 4096 33554432
net.ipv4.ip_local_port_range = 2048 64500
net.core.wmem_default = 183888608
net.core.rmem_default = 183888608
net.core.rmem_max = 33554432
net.core.wmem_max = 33554432
net.core.netdev_max_backlog = 2621244

kernel.sem=250 65536 100 2048
kernel.msgmax = 65536
kernel.msgmnb = 65536
kernel.perf_cpu_time_max_percent = 60
kernel.perf_event_max_sample_rate = 6250
net.ipv4.tcp_max_orphans = 1048576
kernel.sched_migration_cost_ns = 5000000
net.core.optmem_max = 25165824
net.core.somaxconn = 60000
net.ipv4.tcp_window_scaling = 1
EOF</span>

<span class="token comment"># 应用新的配置</span>
<span class="token function">sysctl</span> <span class="token parameter variable">-p</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;应用系统优化策略成功&quot;</span> <span class="token operator">||</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;部分系统优化策略应用失败&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="client-server" tabindex="-1"><a class="header-anchor" href="#client-server"><span>Client &amp;&amp; Server</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># 将以下配置写入 /etc/sysctl.conf  </span>

<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span>/etc/sysctl.conf</span>
net.ipv6.conf.all.accept_ra=1
net.ipv6.conf.default.accept_ra=1
net.ipv6.conf.eth0.accept_ra=1
net.ipv4.tcp_fin_timeout = 10
net.ipv4.tcp_keepalive_time = 1200
net.ipv4.tcp_syncookies = 1
net.ipv4.tcp_tw_reuse = 1
net.ipv4.tcp_tw_recycle = 1
net.ipv4.ip_local_port_range = 1024    65000
net.ipv4.tcp_max_syn_backlog = 8192
net.ipv4.tcp_max_tw_buckets = 5000
EOF</span>

<span class="token comment"># 应用新的配置  </span>
<span class="token function">sysctl</span> <span class="token parameter variable">-p</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;应用系统优化策略成功&quot;</span> <span class="token operator">||</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;部分系统优化策略应用失败&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),l=[i];function p(c,r){return s(),e("div",null,l)}const d=n(t,[["render",p],["__file","Nginx正向代理高并发.html.vue"]]),v=JSON.parse(`{"path":"/note-book/Nginx-OpenResty/Nginx%E6%AD%A3%E5%90%91%E4%BB%A3%E7%90%86%E9%AB%98%E5%B9%B6%E5%8F%91.html","title":"Nginx正向代理高并发","lang":"zh-CN","frontmatter":{"description":"Nginx正向代理高并发 Proxy Client && Server","head":[["meta",{"property":"og:url","content":"https://www.geekery.cn/note-book/Nginx-OpenResty/Nginx%E6%AD%A3%E5%90%91%E4%BB%A3%E7%90%86%E9%AB%98%E5%B9%B6%E5%8F%91.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"Nginx正向代理高并发"}],["meta",{"property":"og:description","content":"Nginx正向代理高并发 Proxy Client && Server"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-09T09:29:43.000Z"}],["meta",{"property":"article:author","content":"PaperDragon"}],["meta",{"property":"article:modified_time","content":"2024-03-09T09:29:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Nginx正向代理高并发\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-09T09:29:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"Proxy","slug":"proxy","link":"#proxy","children":[]},{"level":2,"title":"Client && Server","slug":"client-server","link":"#client-server","children":[]}],"git":{"createdTime":1697509682000,"updatedTime":1709976583000,"contributors":[{"name":"PaperDragon","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":0.96,"words":289},"filePathRelative":"note-book/Nginx-OpenResty/Nginx正向代理高并发.md","localizedDate":"2023年10月17日","excerpt":"\\n<h2>Proxy</h2>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token shebang important\\">#!/bin/bash</span>\\nyum makecache <span class=\\"token operator\\">&amp;&amp;</span> yum <span class=\\"token function\\">install</span> epel-* <span class=\\"token parameter variable\\">-y</span> <span class=\\"token operator\\">&amp;&amp;</span> yum <span class=\\"token function\\">install</span> nginx <span class=\\"token parameter variable\\">-y</span> <span class=\\"token operator\\">&amp;&amp;</span> yum clean all\\n\\n\\nsystemctl start nginx\\nsystemctl <span class=\\"token builtin class-name\\">enable</span> nginx\\n<span class=\\"token comment\\"># 检查是否已经存在listen 3126;字段</span>\\n\\n<span class=\\"token keyword\\">if</span> <span class=\\"token function\\">grep</span> <span class=\\"token parameter variable\\">-q</span> <span class=\\"token string\\">\\"listen 3126;\\"</span> /etc/nginx/nginx.conf<span class=\\"token punctuation\\">;</span> <span class=\\"token keyword\\">then</span>\\n  <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"代理服务器 listen 3126; 已经安装\\"</span>\\n<span class=\\"token keyword\\">else</span>\\n  <span class=\\"token comment\\"># 在http字段后插入新的server块</span>\\n  <span class=\\"token function\\">sed</span> <span class=\\"token parameter variable\\">-i</span> <span class=\\"token string\\">'/http {/a\\\\    server {\\\\n    listen 3126;\\\\n    server_name _;\\\\n    location / {\\\\n    resolver 8.8.8.8;\\\\n    proxy_pass $scheme://$http_host$request_uri;\\\\n    }\\\\n}'</span> /etc/nginx/nginx.conf\\n  <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"已配置代理服务器\\"</span>\\n<span class=\\"token keyword\\">fi</span>\\nnginx <span class=\\"token parameter variable\\">-s</span> reload\\n\\n<span class=\\"token comment\\"># 将以下配置写入 /etc/sysctl.conf</span>\\n\\n<span class=\\"token function\\">cat</span> <span class=\\"token operator\\">&lt;&lt;</span><span class=\\"token string\\">EOF<span class=\\"token bash punctuation\\"> <span class=\\"token operator\\">&gt;</span>/etc/sysctl.conf</span>\\nnet.ipv4.tcp_fin_timeout = 5\\nnet.ipv4.tcp_keepalive_time = 5\\nnet.ipv4.tcp_syncookies = 1\\nnet.ipv4.tcp_tw_reuse = 1\\nnet.ipv4.tcp_tw_recycle = 1\\nnet.ipv4.tcp_max_syn_backlog = 3240000\\nnet.ipv4.tcp_max_tw_buckets = 10000\\n\\nnet.ipv4.tcp_mem = 768432 2097152 15242880\\nnet.ipv4.tcp_rmem = 4096 4096 33554432\\nnet.ipv4.tcp_wmem = 4096 4096 33554432\\nnet.ipv4.ip_local_port_range = 2048 64500\\nnet.core.wmem_default = 183888608\\nnet.core.rmem_default = 183888608\\nnet.core.rmem_max = 33554432\\nnet.core.wmem_max = 33554432\\nnet.core.netdev_max_backlog = 2621244\\n\\nkernel.sem=250 65536 100 2048\\nkernel.msgmax = 65536\\nkernel.msgmnb = 65536\\nkernel.perf_cpu_time_max_percent = 60\\nkernel.perf_event_max_sample_rate = 6250\\nnet.ipv4.tcp_max_orphans = 1048576\\nkernel.sched_migration_cost_ns = 5000000\\nnet.core.optmem_max = 25165824\\nnet.core.somaxconn = 60000\\nnet.ipv4.tcp_window_scaling = 1\\nEOF</span>\\n\\n<span class=\\"token comment\\"># 应用新的配置</span>\\n<span class=\\"token function\\">sysctl</span> <span class=\\"token parameter variable\\">-p</span> <span class=\\"token operator\\">&amp;&amp;</span> <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"应用系统优化策略成功\\"</span> <span class=\\"token operator\\">||</span> <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"部分系统优化策略应用失败\\"</span>\\n</code></pre></div>","autoDesc":true}`);export{d as comp,v as data};
