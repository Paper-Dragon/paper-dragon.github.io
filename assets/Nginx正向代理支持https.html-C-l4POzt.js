import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as e}from"./app-B6J1JArx.js";const i={},t=e(`<h1 id="nginx正向代理支持https" tabindex="-1"><a class="header-anchor" href="#nginx正向代理支持https"><span>Nginx正向代理支持https</span></a></h1><blockquote><p><a href="/nginx%E6%AD%A3%E5%90%91%E4%BB%A3%E7%90%86https.zip">脚本中用到的文件压缩包</a></p><p>模块：https://github.com/chobits/ngx_http_proxy_connect_module</p><p>nginx源码： http://nginx.org/download/</p><p>tcp优化文档： https://blog.csdn.net/guyue35/article/details/131465652</p></blockquote><h2 id="环境搭建" tabindex="-1"><a class="header-anchor" href="#环境搭建"><span>环境搭建</span></a></h2><p>以CentOS 7的环境为例。</p><ol><li>安装 对于新安装的环境，参考正常的安装步骤，把对应版本的patch打上之后，在configure的时候加上参数--add-module=/path/to/ngx_http_proxy_connect_module，示例如下：</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>./configure \\
--user=www \\
--group=www \\
--prefix=/usr/local/nginx \\
--with-http_ssl_module \\
--with-http_stub_status_module \\
--with-http_realip_module \\
--with-threads \\
--add-module=/root/src/ngx_http_proxy_connect_module
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于已经安装编译安装完的环境，需要加入以上模块，步骤如下：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># 停止NGINX服务
# systemctl stop nginx
# 备份原执行文件
# cp /usr/local/nginx/sbin/nginx /usr/local/nginx/sbin/nginx.bak
# 在源代码路径重新编译
# cd /usr/local/src/nginx-1.16.0
./configure \\
--user=www \\
--group=www \\
--prefix=/usr/local/nginx \\
--with-http_ssl_module \\
--with-http_stub_status_module \\
--with-http_realip_module \\
--with-threads \\
--add-module=/root/src/ngx_http_proxy_connect_module
# make
# 不要make install
# 将新生成的可执行文件拷贝覆盖原来的nginx执行文件
# cp objs/nginx /usr/local/nginx/sbin/nginx
# /usr/bin/nginx -V
nginx version: nginx/1.16.0
built by gcc 4.8.5 20150623 (Red Hat 4.8.5-36) (GCC)
built with OpenSSL 1.0.2k-fips  26 Jan 2017
TLS SNI support enabled
configure arguments: --user=www --group=www --prefix=/usr/local/nginx --with-http_ssl_module --with-http_stub_status_module --with-http_realip_module --with-threads --add-module=/root/src/ngx_http_proxy_connect_module
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>nginx.conf文件配置</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>server {
     listen  443;

     # dns resolver used by forward proxying
     resolver  114.114.114.114;

     # forward proxy for CONNECT request
     proxy_connect;
     proxy_connect_allow            443;
     proxy_connect_connect_timeout  10s;
     proxy_connect_read_timeout     10s;
     proxy_connect_send_timeout     10s;

     # forward proxy for non-CONNECT request
     location / {
         proxy_pass http://$host;
         proxy_set_header Host $host;
     }
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景"><span>使用场景</span></a></h2><p>7层需要通过HTTP CONNECT来建立隧道，属于客户端有感知的普通代理方式，需要在客户端手动配置HTTP(S)代理服务器IP和端口。在客户端用curl 加-x参数访问如下：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># curl https://www.baidu.com -svo /dev/null -x 39.105.196.164:443
* About to connect() to proxy 39.105.196.164 port 443 (#0)
*   Trying 39.105.196.164...
* Connected to 39.105.196.164 (39.105.196.164) port 443 (#0)
* Establish HTTP proxy tunnel to www.baidu.com:443
&gt; CONNECT www.baidu.com:443 HTTP/1.1
&gt; Host: www.baidu.com:443
&gt; User-Agent: curl/7.29.0
&gt; Proxy-Connection: Keep-Alive
&gt;
&lt; HTTP/1.1 200 Connection Established
&lt; Proxy-agent: nginx
&lt;
* Proxy replied OK to CONNECT request
* Initializing NSS with certpath: sql:/etc/pki/nssdb
*   CAfile: /etc/pki/tls/certs/ca-bundle.crt
  CApath: none
* SSL connection using TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
* Server certificate:
*     subject: CN=baidu.com,O=&quot;Beijing Baidu Netcom Science Technology Co., Ltd&quot;,OU=service operation department,L=beijing,ST=beijing,C=CN
...
&gt; GET / HTTP/1.1
&gt; User-Agent: curl/7.29.0
&gt; Host: www.baidu.com
&gt; Accept: */*
&gt;
&lt; HTTP/1.1 200 OK
...
{ [data not shown]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面-v参数打印出的细节，可以看到客户端先往代理服务器39.105.196.164建立了HTTP CONNECT隧道，代理回复HTTP/1.1 200 Connection Established后就开始交互TLS/SSL握手和流量了。</p><h2 id="编译和打补丁脚本" tabindex="-1"><a class="header-anchor" href="#编译和打补丁脚本"><span>编译和打补丁脚本</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment">#Disable SELinux</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-s</span> /etc/selinux/config <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">grep</span> <span class="token string">&#39;SELINUX=enforcing&#39;</span> /etc/selinux/config<span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/SELINUX=enforcing/SELINUX=disabled/g&#39;</span> /etc/selinux/config
    setenforce <span class="token number">0</span>
<span class="token keyword">fi</span>

<span class="token comment"># 停止firewalld</span>
systemctl stop firewalld.service
<span class="token comment"># 禁止firewalld服务开机启动</span>
systemctl disable firewalld.service



yum <span class="token function">install</span> gcc <span class="token function">git</span> patch  cmake <span class="token function">make</span> cmake <span class="token function">unzip</span> zlib zlib-devel openssl openssl-devel ncurses-devel gcc gcc-c++  <span class="token function">wget</span>  pcre pcre-devel <span class="token parameter variable">-y</span>

<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span>  nginx-1.24.0.tar.gz
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span>  ngx_http_proxy_connect_module.tar.gz

<span class="token builtin class-name">cd</span> <span class="token environment constant">$PWD</span>/nginx-1.24.0
patch <span class="token parameter variable">-p1</span> <span class="token operator">&lt;</span> <span class="token environment constant">$PWD</span>/<span class="token punctuation">..</span>/ngx_http_proxy_connect_module/patch/proxy_connect_rewrite_102101.patch

<span class="token comment">#添加用户和组</span>
<span class="token function">groupadd</span> www
<span class="token function">useradd</span> <span class="token parameter variable">-g</span> www www

./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/nginx --add-module<span class="token operator">=</span><span class="token environment constant">$PWD</span>/<span class="token punctuation">..</span>/ngx_http_proxy_connect_module <span class="token parameter variable">--user</span><span class="token operator">=</span>www <span class="token parameter variable">--group</span><span class="token operator">=</span>www --with-http_ssl_module --with-http_stub_status_module --with-http_realip_module --with-threads 
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>


<span class="token function">cp</span> <span class="token punctuation">..</span>/nginx /etc/init.d/ <span class="token parameter variable">-v</span>

<span class="token function">chmod</span> a+x /etc/init.d/nginx

<span class="token function">chkconfig</span> <span class="token parameter variable">--add</span> /etc/init.d/nginx
<span class="token function">chkconfig</span> nginx on
<span class="token comment"># 启动</span>
systemctl start nginx

<span class="token function">mv</span> <span class="token parameter variable">-v</span> /usr/local/nginx/conf/nginx.conf /usr/local/nginx/conf/nginx.conf.bak
<span class="token function">cp</span> <span class="token parameter variable">-v</span> <span class="token punctuation">..</span>/nginx.conf /usr/local/nginx/conf/nginx.conf
/usr/local/nginx/sbin/nginx <span class="token parameter variable">-s</span> reload
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx启动文件" tabindex="-1"><a class="header-anchor" href="#nginx启动文件"><span>nginx启动文件</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>
<span class="token comment">#</span>
<span class="token comment"># nginx - this script starts and stops the nginx daemon</span>
<span class="token comment">#</span>
<span class="token comment"># chkconfig:   - 85 15</span>
<span class="token comment"># description:  NGINX is an HTTP(S) server, HTTP(S) reverse \\</span>
<span class="token comment">#               proxy and IMAP/POP3 proxy server</span>
<span class="token comment"># processname: nginx</span>
<span class="token comment"># config:      /usr/local/nginx/conf/nginx.conf</span>
<span class="token comment"># config:      /etc/sysconfig/nginx</span>
<span class="token comment"># pidfile:     /usr/local/nginx/logs/nginx.pid</span>
<span class="token comment"># Source function library.</span>
<span class="token builtin class-name">.</span> /etc/rc.d/init.d/functions
<span class="token comment"># Source networking configuration.</span>
<span class="token builtin class-name">.</span> /etc/sysconfig/network
<span class="token comment"># Check that networking is up.</span>
<span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$NETWORKING</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;no&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">exit</span> <span class="token number">0</span>
<span class="token assign-left variable">nginx</span><span class="token operator">=</span><span class="token string">&quot;/usr/local/nginx/sbin/nginx&quot;</span>
<span class="token assign-left variable">prog</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">basename</span> $nginx<span class="token variable">)</span></span>
<span class="token assign-left variable">NGINX_CONF_FILE</span><span class="token operator">=</span><span class="token string">&quot;/usr/local/nginx/conf/nginx.conf&quot;</span>
<span class="token punctuation">[</span> <span class="token parameter variable">-f</span> /etc/sysconfig/nginx <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">.</span> /etc/sysconfig/nginx
<span class="token assign-left variable">lockfile</span><span class="token operator">=</span>/var/lock/subsys/nginx
<span class="token function-name function">make_dirs</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment"># make required directories</span>
   <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span>$nginx <span class="token parameter variable">-V</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;configure arguments:&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/[^*]*--user=\\([^ ]*\\).*/\\1/g&#39;</span> -<span class="token variable">\`</span></span>
   <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">\`</span><span class="token function">grep</span> $user /etc/passwd<span class="token variable">\`</span></span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
       <span class="token function">useradd</span> <span class="token parameter variable">-M</span> <span class="token parameter variable">-s</span> /bin/nologin <span class="token variable">$user</span>
   <span class="token keyword">fi</span>
   <span class="token assign-left variable">options</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span>$nginx <span class="token parameter variable">-V</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;configure arguments:&#39;</span><span class="token variable">\`</span></span>
   <span class="token keyword">for</span> <span class="token for-or-select variable">opt</span> <span class="token keyword">in</span> <span class="token variable">$options</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
       <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> $opt <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;.*-temp-path&#39;</span><span class="token variable">\`</span></span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
           <span class="token assign-left variable">value</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> $opt <span class="token operator">|</span> <span class="token function">cut</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;=&quot;</span> <span class="token parameter variable">-f</span> <span class="token number">2</span><span class="token variable">\`</span></span>
           <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;<span class="token variable">$value</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
               <span class="token comment"># echo &quot;creating&quot; $value</span>
               <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$value</span> <span class="token operator">&amp;&amp;</span> <span class="token function">chown</span> <span class="token parameter variable">-R</span> <span class="token variable">$user</span> <span class="token variable">$value</span>
           <span class="token keyword">fi</span>
       <span class="token keyword">fi</span>
   <span class="token keyword">done</span>
<span class="token punctuation">}</span>
<span class="token function-name function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span> <span class="token parameter variable">-x</span> <span class="token variable">$nginx</span> <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token builtin class-name">exit</span> <span class="token number">5</span>
    <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token variable">$NGINX_CONF_FILE</span> <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token builtin class-name">exit</span> <span class="token number">6</span>
    make_dirs
    <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> $<span class="token string">&quot;Starting <span class="token variable">$prog</span>: &quot;</span>
    daemon <span class="token variable">$nginx</span> <span class="token parameter variable">-c</span> <span class="token variable">$NGINX_CONF_FILE</span>
    <span class="token assign-left variable">retval</span><span class="token operator">=</span><span class="token variable">$?</span>
    <span class="token builtin class-name">echo</span>
    <span class="token punctuation">[</span> <span class="token variable">$retval</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">touch</span> <span class="token variable">$lockfile</span>
    <span class="token builtin class-name">return</span> <span class="token variable">$retval</span>
<span class="token punctuation">}</span>
<span class="token function-name function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> $<span class="token string">&quot;Stopping <span class="token variable">$prog</span>: &quot;</span>
    killproc <span class="token variable">$prog</span> <span class="token parameter variable">-QUIT</span>
    <span class="token assign-left variable">retval</span><span class="token operator">=</span><span class="token variable">$?</span>
    <span class="token builtin class-name">echo</span>
    <span class="token punctuation">[</span> <span class="token variable">$retval</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token variable">$lockfile</span>
    <span class="token builtin class-name">return</span> <span class="token variable">$retval</span>
<span class="token punctuation">}</span>
<span class="token function-name function">restart</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    configtest <span class="token operator">||</span> <span class="token builtin class-name">return</span> <span class="token variable">$?</span>
    stop
    <span class="token function">sleep</span> <span class="token number">1</span>
    start
<span class="token punctuation">}</span>
<span class="token function-name function">reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    configtest <span class="token operator">||</span> <span class="token builtin class-name">return</span> <span class="token variable">$?</span>
    <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> $<span class="token string">&quot;Reloading <span class="token variable">$prog</span>: &quot;</span>
    killproc <span class="token variable">$nginx</span> <span class="token parameter variable">-HUP</span>
    <span class="token assign-left variable">RETVAL</span><span class="token operator">=</span><span class="token variable">$?</span>
    <span class="token builtin class-name">echo</span>
<span class="token punctuation">}</span>
<span class="token function-name function">force_reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    restart
<span class="token punctuation">}</span>
<span class="token function-name function">configtest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token variable">$nginx</span> <span class="token parameter variable">-t</span> <span class="token parameter variable">-c</span> <span class="token variable">$NGINX_CONF_FILE</span>
<span class="token punctuation">}</span>
<span class="token function-name function">rh_status</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    status <span class="token variable">$prog</span>
<span class="token punctuation">}</span>
<span class="token function-name function">rh_status_q</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    rh_status <span class="token operator">&gt;</span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
<span class="token punctuation">}</span>
<span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token keyword">in</span>
    start<span class="token punctuation">)</span>
        rh_status_q <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">exit</span> <span class="token number">0</span>
        <span class="token variable">$1</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    stop<span class="token punctuation">)</span>
        rh_status_q <span class="token operator">||</span> <span class="token builtin class-name">exit</span> <span class="token number">0</span>
        <span class="token variable">$1</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    restart<span class="token operator">|</span>configtest<span class="token punctuation">)</span>
        <span class="token variable">$1</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    reload<span class="token punctuation">)</span>
        rh_status_q <span class="token operator">||</span> <span class="token builtin class-name">exit</span> <span class="token number">7</span>
        <span class="token variable">$1</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    force-reload<span class="token punctuation">)</span>
        force_reload
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    status<span class="token punctuation">)</span>
        rh_status
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    condrestart<span class="token operator">|</span>try-restart<span class="token punctuation">)</span>
        rh_status_q <span class="token operator">||</span> <span class="token builtin class-name">exit</span> <span class="token number">0</span>
            <span class="token punctuation">;</span><span class="token punctuation">;</span>
    *<span class="token punctuation">)</span>
        <span class="token builtin class-name">echo</span> $<span class="token string">&quot;Usage: <span class="token variable">$0</span> {start|stop|status|restart|condrestart|try-restart|reload|force-reload|configtest}&quot;</span>
        <span class="token builtin class-name">exit</span> <span class="token number">2</span>
<span class="token keyword">esac</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx配置文件" tabindex="-1"><a class="header-anchor" href="#nginx配置文件"><span>nginx配置文件</span></a></h2><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code>
<span class="token directive"><span class="token keyword">user</span>  www</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">worker_processes</span>  auto</span><span class="token punctuation">;</span>

<span class="token comment">#error_log  logs/error.log;</span>
<span class="token comment">#error_log  logs/error.log  notice;</span>
<span class="token comment">#error_log  logs/error.log  info;</span>

<span class="token comment">#pid        logs/nginx.pid;</span>


<span class="token directive"><span class="token keyword">events</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">worker_connections</span>  <span class="token number">102400</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">include</span>       mime.types</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">default_type</span>  application/octet-stream</span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">log_format</span>  main  <span class="token string">&#39;<span class="token variable">$remote_addr</span> - <span class="token variable">$remote_user</span> [<span class="token variable">$time_local]</span> &quot;<span class="token variable">$request</span>&quot; &#39;</span>
                      <span class="token string">&#39;<span class="token variable">$status</span> <span class="token variable">$body_bytes_sent</span> &quot;<span class="token variable">$http_referer</span>&quot; &#39;</span>
                      <span class="token string">&#39;&quot;<span class="token variable">$http_user_agent</span>&quot; &quot;<span class="token variable">$http_x_forwarded_for</span>&quot;&#39;</span></span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">access_log</span>  logs/access.log  main</span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">sendfile</span>        <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">tcp_nopush</span>     <span class="token boolean">on</span></span><span class="token punctuation">;</span>

    <span class="token comment">#keepalive_timeout  0;</span>
    <span class="token directive"><span class="token keyword">keepalive_timeout</span>  <span class="token number">65</span></span><span class="token punctuation">;</span>

    <span class="token comment">#gzip  on;</span>
    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
          <span class="token directive"><span class="token keyword">listen</span>  <span class="token number">3126</span></span><span class="token punctuation">;</span>
     
          <span class="token comment"># dns resolver used by forward proxying</span>
          <span class="token directive"><span class="token keyword">resolver</span>  114.114.114.114 ipv6=off ipv4=on</span><span class="token punctuation">;</span>
     
          <span class="token comment"># forward proxy for CONNECT request</span>
          <span class="token directive"><span class="token keyword">proxy_connect</span></span><span class="token punctuation">;</span>
          <span class="token directive"><span class="token keyword">proxy_connect_allow</span>            <span class="token number">443</span></span><span class="token punctuation">;</span>
          <span class="token directive"><span class="token keyword">proxy_connect_connect_timeout</span>  <span class="token number">10s</span></span><span class="token punctuation">;</span>
          <span class="token directive"><span class="token keyword">proxy_connect_read_timeout</span>     <span class="token number">10s</span></span><span class="token punctuation">;</span>
          <span class="token directive"><span class="token keyword">proxy_connect_send_timeout</span>     <span class="token number">10s</span></span><span class="token punctuation">;</span>
     
          <span class="token comment"># forward proxy for non-CONNECT request</span>
          <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
              <span class="token directive"><span class="token keyword">proxy_pass</span> <span class="token variable">$scheme</span>://<span class="token variable">$http_host</span><span class="token variable">$request_uri</span></span><span class="token punctuation">;</span>
              <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$host</span></span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server_name</span>  localhost</span><span class="token punctuation">;</span>

        <span class="token comment">#charset koi8-r;</span>

        <span class="token comment">#access_log  logs/host.access.log  main;</span>

        <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">root</span>   html</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">index</span>  index.html index.htm</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">#error_page  404              /404.html;</span>

        <span class="token comment"># redirect server error pages to the static page /50x.html</span>
        <span class="token comment">#</span>
        <span class="token directive"><span class="token keyword">error_page</span>   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> = /50x.html</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">root</span>   html</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment"># proxy the PHP scripts to Apache listening on 127.0.0.1:80</span>
        <span class="token comment">#</span>
        <span class="token comment">#location ~ \\.php$ {</span>
        <span class="token comment">#    proxy_pass   http://127.0.0.1;</span>
        <span class="token comment">#}</span>

        <span class="token comment"># pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000</span>
        <span class="token comment">#</span>
        <span class="token comment">#location ~ \\.php$ {</span>
        <span class="token comment">#    root           html;</span>
        <span class="token comment">#    fastcgi_pass   127.0.0.1:9000;</span>
        <span class="token comment">#    fastcgi_index  index.php;</span>
        <span class="token comment">#    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;</span>
        <span class="token comment">#    include        fastcgi_params;</span>
        <span class="token comment">#}</span>

        <span class="token comment"># deny access to .htaccess files, if Apache&#39;s document root</span>
        <span class="token comment"># concurs with nginx&#39;s one</span>
        <span class="token comment">#</span>
        <span class="token comment">#location ~ /\\.ht {</span>
        <span class="token comment">#    deny  all;</span>
        <span class="token comment">#}</span>
    <span class="token punctuation">}</span>


    <span class="token comment"># another virtual host using mix of IP-, name-, and port-based configuration</span>
    <span class="token comment">#</span>
    <span class="token comment">#server {</span>
    <span class="token comment">#    listen       8000;</span>
    <span class="token comment">#    listen       somename:8080;</span>
    <span class="token comment">#    server_name  somename  alias  another.alias;</span>

    <span class="token comment">#    location / {</span>
    <span class="token comment">#        root   html;</span>
    <span class="token comment">#        index  index.html index.htm;</span>
    <span class="token comment">#    }</span>
    <span class="token comment">#}</span>


    <span class="token comment"># HTTPS server</span>
    <span class="token comment">#</span>
    <span class="token comment">#server {</span>
    <span class="token comment">#    listen       443 ssl;</span>
    <span class="token comment">#    server_name  localhost;</span>

    <span class="token comment">#    ssl_certificate      cert.pem;</span>
    <span class="token comment">#    ssl_certificate_key  cert.key;</span>

    <span class="token comment">#    ssl_session_cache    shared:SSL:1m;</span>
    <span class="token comment">#    ssl_session_timeout  5m;</span>

    <span class="token comment">#    ssl_ciphers  HIGH:!aNULL:!MD5;</span>
    <span class="token comment">#    ssl_prefer_server_ciphers  on;</span>

    <span class="token comment">#    location / {</span>
    <span class="token comment">#        root   html;</span>
    <span class="token comment">#        index  index.html index.htm;</span>
    <span class="token comment">#    }</span>
    <span class="token comment">#}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),l=[t];function p(c,o){return s(),a("div",null,l)}const v=n(i,[["render",p],["__file","Nginx正向代理支持https.html.vue"]]),u=JSON.parse('{"path":"/note-book/Nginx-OpenResty/Nginx%E6%AD%A3%E5%90%91%E4%BB%A3%E7%90%86%E6%94%AF%E6%8C%81https.html","title":"Nginx正向代理支持https","lang":"zh-CN","frontmatter":{"category":"Nginx","description":"Nginx正向代理支持https 脚本中用到的文件压缩包 模块：https://github.com/chobits/ngx_http_proxy_connect_module nginx源码： http://nginx.org/download/ tcp优化文档： https://blog.csdn.net/guyue35/article/detai...","head":[["meta",{"property":"og:url","content":"https://paper-dragon.github.io/note-book/Nginx-OpenResty/Nginx%E6%AD%A3%E5%90%91%E4%BB%A3%E7%90%86%E6%94%AF%E6%8C%81https.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"Nginx正向代理支持https"}],["meta",{"property":"og:description","content":"Nginx正向代理支持https 脚本中用到的文件压缩包 模块：https://github.com/chobits/ngx_http_proxy_connect_module nginx源码： http://nginx.org/download/ tcp优化文档： https://blog.csdn.net/guyue35/article/detai..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-22T06:21:26.000Z"}],["meta",{"property":"article:author","content":"PaperDragon"}],["meta",{"property":"article:modified_time","content":"2024-03-22T06:21:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Nginx正向代理支持https\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-22T06:21:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"环境搭建","slug":"环境搭建","link":"#环境搭建","children":[]},{"level":2,"title":"使用场景","slug":"使用场景","link":"#使用场景","children":[]},{"level":2,"title":"编译和打补丁脚本","slug":"编译和打补丁脚本","link":"#编译和打补丁脚本","children":[]},{"level":2,"title":"nginx启动文件","slug":"nginx启动文件","link":"#nginx启动文件","children":[]},{"level":2,"title":"nginx配置文件","slug":"nginx配置文件","link":"#nginx配置文件","children":[]}],"git":{"createdTime":1709976583000,"updatedTime":1711088486000,"contributors":[{"name":"PaperDragon","email":"2678885646@qq.com","commits":1},{"name":"PaperDragon-SH","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":4.5,"words":1349},"filePathRelative":"note-book/Nginx-OpenResty/Nginx正向代理支持https.md","localizedDate":"2024年3月9日","excerpt":"\\n<blockquote>\\n<p><a href=\\"/nginx%E6%AD%A3%E5%90%91%E4%BB%A3%E7%90%86https.zip\\">脚本中用到的文件压缩包</a></p>\\n<p>模块：https://github.com/chobits/ngx_http_proxy_connect_module</p>\\n<p>nginx源码： http://nginx.org/download/</p>\\n<p>tcp优化文档： https://blog.csdn.net/guyue35/article/details/131465652</p>\\n</blockquote>\\n<h2>环境搭建</h2>","autoDesc":true}');export{v as comp,u as data};
