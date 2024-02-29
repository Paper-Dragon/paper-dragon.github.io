import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o,c as p,b as n,e as s,a,d as t}from"./app-6bRLuOIR.js";const c="/assets/image-20240218180231563-DqFC3GWF.png",r="/assets/image-20240218175104892-CVsDDdq_.png",d={},u=n("h1",{id:"nginx作为推流服务器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nginx作为推流服务器"},[n("span",null,"Nginx作为推流服务器")])],-1),v=n("blockquote",null,[n("p",null,"本文档参考文档制作： https://www.fnmqs.work/archives/161/"),n("p",null,"感谢云梦工具箱，因为教程里使用的 https://github.com/arut/nginx-rtmp-module.git 这个模块太老了，3年之前更新过，所以重新更改方案使用了https://github.com/winshining/nginx-http-flv-module，这个模块在实现前者的功能的同时还实现了flv拉流量的功能，功能上强很多，而且更新及时。")],-1),m=n("h2",{id:"功能对比",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#功能对比"},[n("span",null,"功能对比")])],-1),b={href:"https://github.com/arut/nginx-rtmp-module",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/arut/nginx-rtmp-module",target:"_blank",rel:"noopener noreferrer"},g=t('<table><thead><tr><th>功能</th><th>nginx-http-flv-module</th><th>nginx-rtmp-module</th><th>备注</th></tr></thead><tbody><tr><td>HTTP-FLV (播放)</td><td>√</td><td>x</td><td>支持 HTTPS-FLV 和 chunked 回复</td></tr><tr><td>GOP 缓存</td><td>√</td><td>x</td><td></td></tr><tr><td>虚拟主机</td><td>√</td><td>x</td><td></td></tr><tr><td>省略 <code>listen</code> 配置项</td><td>√</td><td>见备注</td><td>配置中必须有一个 <code>listen</code></td></tr><tr><td>RTMP/HTTP-FLV 纯音频支持</td><td>√</td><td>见备注</td><td><code>wait_video</code> 或 <code>wait_key</code> 开启后无法工作</td></tr><tr><td>HLS 单轨支持</td><td>√</td><td>x</td><td></td></tr><tr><td><code>reuseport</code> 支持</td><td>√</td><td>x</td><td></td></tr><tr><td>定时打印访问记录</td><td>√</td><td>x</td><td></td></tr><tr><td>JSON 风格的数据信息</td><td>√</td><td>x</td><td></td></tr><tr><td>录制的数据信息</td><td>√</td><td>x</td><td></td></tr><tr><td>大小端无关</td><td>√</td><td>见备注</td><td><code>big-endian</code> 分支部分支持</td></tr></tbody></table><h2 id="兼容性" tabindex="-1"><a class="header-anchor" href="#兼容性"><span>兼容性</span></a></h2>',2),h={href:"http://nginx.org",target:"_blank",rel:"noopener noreferrer"},x=n("strong",null,"应该",-1),_=t(`<h2 id="编译nginx时需要的依赖和库" tabindex="-1"><a class="header-anchor" href="#编译nginx时需要的依赖和库"><span>编译Nginx时需要的依赖和库</span></a></h2><ol><li>编译工具链：gcc、g++或clang等编译器工具；</li><li>PCRE（Perl Compatible Regular Expressions）库：用于正则表达式支持；</li><li>OpenSSL库：用于支持HTTPS和加密功能；</li><li>zlib库：用于压缩和解压缩支持；</li><li>libxml2库：用于WebDAV模块的XML解析支持</li><li>libxslt库：用于XSLT转换支持。</li></ol><p>也可以直接输入以下代码安装依赖和库</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>apt update
apt install gcc make
apt install libpcre3<span class="token operator">-</span>dev zlib1g<span class="token operator">-</span>dev libssl<span class="token operator">-</span>dev libxml2<span class="token operator">-</span>dev libxslt1<span class="token operator">-</span>dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述命令适用于Ubuntu系统，对于其他Linux发行版，可以使用相应的包管理器来安装这些依赖和库。</p><h2 id="下载源代码" tabindex="-1"><a class="header-anchor" href="#下载源代码"><span>下载源代码</span></a></h2><p>nginx官网:https://nginx.org/en/download.html 可以从官网找到很多版本的源代码， 这里示范为nginx1.22版本</p><h3 id="下载nginx和nginx-http-flv-module源代码" tabindex="-1"><a class="header-anchor" href="#下载nginx和nginx-http-flv-module源代码"><span>下载Nginx和Nginx-http-flv-module源代码</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">wget</span> http://nginx.org/download/nginx-1.25.4.tar.gz
<span class="token function">tar</span> <span class="token parameter variable">-xvf</span> nginx-1.25.4.tar.gz
<span class="token function">git</span> clone https://github.com/winshining/nginx-http-flv-module.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="过程" tabindex="-1"><a class="header-anchor" href="#过程"><span>过程</span></a></h4><pre><code>root@user-VirtualBox:/home/user/Desktop/nginx-flv# wget http://nginx.org/download/nginx-1.25.4.tar.gz
--2024-02-18 17:05:07--  http://nginx.org/download/nginx-1.25.4.tar.gz
Resolving nginx.org (nginx.org)... 3.125.197.172, 52.58.199.22, 2a05:d014:5c0:2601::6, ...
Connecting to nginx.org (nginx.org)|3.125.197.172|:80... connected.
HTTP request sent, awaiting response... 200 OK
Length: 1236273 (1.2M) [application/octet-stream]
Saving to: ‘nginx-1.25.4.tar.gz’

nginx-1.25.4.tar.gz               100%[=============================================================&gt;]   1.18M   697KB/s    in 1.7s    

2024-02-18 17:05:10 (697 KB/s) - ‘nginx-1.25.4.tar.gz’ saved [1236273/1236273]

root@user-VirtualBox:/home/user/Desktop/nginx-flv# tar -xvf nginx-1.25.4.tar.gz 
nginx-1.25.4/
nginx-1.25.4/man/
nginx-1.25.4/LICENSE
nginx-1.25.4/configure
nginx-1.25.4/auto/
nginx-1.25.4/CHANGES
nginx-1.25.4/CHANGES.ru
nginx-1.25.4/html/
nginx-1.25.4/contrib/
nginx-1.25.4/README

root@user-VirtualBox:/home/user/Desktop/nginx-flv# git clone https://github.com/winshining/nginx-http-flv-module.git
Cloning into &#39;nginx-http-flv-module&#39;...
remote: Enumerating objects: 2514, done.
remote: Counting objects: 100% (163/163), done.
remote: Compressing objects: 100% (97/97), done.
remote: Total 2514 (delta 86), reused 92 (delta 66), pack-reused 2351
Receiving objects: 100% (2514/2514), 3.86 MiB | 3.18 MiB/s, done.
Resolving deltas: 100% (1720/1720), done.
root@user-VirtualBox:/home/user/Desktop/nginx-flv# 
</code></pre><h2 id="编译安装" tabindex="-1"><a class="header-anchor" href="#编译安装"><span>编译安装</span></a></h2><p>完成后会安装在/usr/local/nginx-flv下</p><pre><code>mv ../nginx-http-flv-module .
./configure --prefix=/usr/local/nginx-flv --with-http_ssl_module --with-http_secure_link_module --add-module=nginx-http-flv-module
make 
make install
</code></pre><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2><p>Nginx配置文件 nginx.conf</p><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code>
<span class="token comment">#user  nobody;</span>
<span class="token directive"><span class="token keyword">worker_processes</span>  auto</span><span class="token punctuation">;</span>
 
<span class="token comment">#error_log  logs/error.log;</span>
<span class="token comment">#error_log  logs/error.log  notice;</span>
<span class="token comment">#error_log  logs/error.log  info;</span>
 
<span class="token directive"><span class="token keyword">error_log</span>  logs/error.log warn</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">pid</span>        logs/nginx.pid</span><span class="token punctuation">;</span>
 
 
<span class="token directive"><span class="token keyword">events</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">worker_connections</span>  <span class="token number">10240</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">use</span> epoll</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">multi_accept</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
 
<span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">include</span>       mime.types</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">default_type</span>  application/octet-stream</span><span class="token punctuation">;</span>
 
    <span class="token directive"><span class="token keyword">server_names_hash_bucket_size</span> <span class="token number">128</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">client_header_buffer_size</span> <span class="token number">32k</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">large_client_header_buffers</span> <span class="token number">4</span> <span class="token number">32k</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">client_max_body_size</span> <span class="token number">50m</span></span><span class="token punctuation">;</span>
 
    <span class="token directive"><span class="token keyword">log_format</span> nginx_json <span class="token string">&#39;{    &quot;time&quot;: &quot;<span class="token variable">$time_local</span>&quot;, &#39;</span>
                               <span class="token string">&#39;&quot;remote_ip&quot;: &quot;<span class="token variable">$remote_addr</span>&quot;, &#39;</span>
                               <span class="token string">&#39;&quot;remote_user&quot;: &quot;<span class="token variable">$remote_user</span>&quot;, &#39;</span>
                               <span class="token string">&#39;&quot;domain&quot;:&quot;<span class="token variable">$host</span>&quot;, &#39;</span>
                               <span class="token string">&#39;&quot;responsetime&quot;:<span class="token variable">$request_time,</span> &#39;</span>
                               <span class="token string">&#39;&quot;request&quot;: &quot;<span class="token variable">$request</span>&quot;, &#39;</span>
                               <span class="token string">&#39;&quot;response&quot;: &quot;<span class="token variable">$status</span>&quot;, &#39;</span>
                               <span class="token string">&#39;&quot;bytes&quot;: <span class="token variable">$body_bytes_sent,</span> &#39;</span>
                               <span class="token string">&#39;&quot;referrer&quot;: &quot;<span class="token variable">$http_referer</span>&quot;, &#39;</span>
                               <span class="token string">&#39;&quot;upstreamtime&quot;:&quot;<span class="token variable">$upstream_response_time</span>&quot;, &#39;</span>
                               <span class="token string">&#39;&quot;upstreamaddr&quot;:&quot;<span class="token variable">$upstream_addr</span>&quot;, &#39;</span>
                               <span class="token string">&#39;&quot;x_forwarded_for&quot;:&quot;<span class="token variable">$http_x_forwarded_for</span>&quot;, &#39;</span>
                               <span class="token string">&#39;&quot;agent&quot;: &quot;<span class="token variable">$http_user_agent</span>&quot; }&#39;</span></span><span class="token punctuation">;</span>
 
    <span class="token directive"><span class="token keyword">access_log</span>  logs/access.log  nginx_json</span><span class="token punctuation">;</span>
 
    <span class="token directive"><span class="token keyword">sendfile</span>        <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">tcp_nopush</span>     <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_tokens</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">keepalive_timeout</span>  <span class="token number">65</span></span><span class="token punctuation">;</span>
 
    <span class="token directive"><span class="token keyword">gzip</span>  <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">gzip_min_length</span>  <span class="token number">1k</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">gzip_buffers</span>    <span class="token number">4</span> <span class="token number">16k</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">gzip_http_version</span> 1.0</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">gzip_comp_level</span> <span class="token number">2</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">gzip_types</span>      text/plain application/x-javascript text/css application/xml</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">gzip_vary</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
 
    <span class="token directive"><span class="token keyword">client_header_timeout</span> <span class="token number">10</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">client_body_timeout</span> <span class="token number">10</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">client_body_buffer_size</span> <span class="token number">10K</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_buffering</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>
 
    <span class="token directive"><span class="token keyword">reset_timedout_connection</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">send_timeout</span> <span class="token number">10</span></span><span class="token punctuation">;</span>
 
 
    <span class="token directive"><span class="token keyword">charset</span> utf-8</span><span class="token punctuation">;</span>
 
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
 
        
 
        <span class="token directive"><span class="token keyword">location</span> /live</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">flv_live</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">chunked_transfer_encoding</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span> <span class="token comment">#支持&#39;Transfer-Encoding: chunked&#39;方式回复</span>
            <span class="token directive"><span class="token keyword">add_header</span> <span class="token string">&#39;Access-Control-Allow-Origin&#39;</span> <span class="token string">&#39;*&#39;</span></span><span class="token punctuation">;</span> <span class="token comment">#添加额外的HTTP头</span>
            <span class="token directive"><span class="token keyword">add_header</span> <span class="token string">&#39;Access-Control-Allow-Credentials&#39;</span> <span class="token string">&#39;true&#39;</span></span><span class="token punctuation">;</span> <span class="token comment">#添加额外的HTTP头</span>
        <span class="token punctuation">}</span>
 
        <span class="token directive"><span class="token keyword">location</span> /flv</span> <span class="token punctuation">{</span>
             <span class="token directive"><span class="token keyword">flv_live</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
             <span class="token directive"><span class="token keyword">chunked_transfer_encoding</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
             <span class="token directive"><span class="token keyword">add_header</span> <span class="token string">&#39;Access-Control-Allow-Origin&#39;</span> <span class="token string">&#39;*&#39;</span></span><span class="token punctuation">;</span>
             <span class="token directive"><span class="token keyword">add_header</span> <span class="token string">&#39;Access-Control-Allow-Credentials&#39;</span> <span class="token string">&#39;true&#39;</span></span><span class="token punctuation">;</span> <span class="token comment">#添加额外的HTTP头</span>
        <span class="token punctuation">}</span>
 
 
        <span class="token directive"><span class="token keyword">location</span> /stat</span> <span class="token punctuation">{</span>
            <span class="token comment">#推流播放和录制统计数据的配置</span>
 
            <span class="token directive"><span class="token keyword">rtmp_stat</span> all</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">rtmp_stat_stylesheet</span> stat.xsl</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
 
        <span class="token directive"><span class="token keyword">location</span> /stat.xsl</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">root</span> html</span><span class="token punctuation">;</span> <span class="token comment">#指定 stat.xsl 的位置</span>
        <span class="token punctuation">}</span>
 
        <span class="token comment">#如果需要 JSON 风格的 stat, 不用指定 stat.xsl</span>
        <span class="token comment">#但是需要指定一个新的配置项 rtmp_stat_format</span>
 
        <span class="token comment">#location /stat {</span>
        <span class="token comment">#    rtmp_stat all;</span>
        <span class="token comment">#    rtmp_stat_format json;</span>
        <span class="token comment">#}</span>
 
 
 
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>lv配置 conf/lv.conf</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>rtmp_auto_push on<span class="token punctuation">;</span>
rtmp_auto_push_reconnect 1s<span class="token punctuation">;</span>
rtmp_socket_dir /tmp<span class="token punctuation">;</span>
 
rtmp <span class="token punctuation">{</span>
    out_queue           <span class="token number">4096</span><span class="token punctuation">;</span>
    out_cork            <span class="token number">8</span><span class="token punctuation">;</span>
    max_streams         <span class="token number">128</span><span class="token punctuation">;</span>
    <span class="token function">timeout</span>             15s<span class="token punctuation">;</span>
    drop_idle_publisher 15s<span class="token punctuation">;</span>
 
    log_interval 5s<span class="token punctuation">;</span> <span class="token comment">#interval used by log module to log in access.log, it is very useful for debug</span>
    log_size     1m<span class="token punctuation">;</span> <span class="token comment">#buffer size used by log module to log in access.log</span>
 
    server <span class="token punctuation">{</span>
        listen <span class="token number">1935</span><span class="token punctuation">;</span>
        application live <span class="token punctuation">{</span>
            <span class="token comment">#开启直播</span>
            live on<span class="token punctuation">;</span>
            record off<span class="token punctuation">;</span>
            
            <span class="token comment">#可以把转完码的视频放在这个文件里，这样可以拉这个视频进行播放</span>
            <span class="token comment">#play /opt/video;</span>
 
            <span class="token comment"># 允许从任何源push流</span>
            allow publish all<span class="token punctuation">;</span>
 
            <span class="token comment"># 允许从任何地方来播放流</span>
            allow play all<span class="token punctuation">;</span>
 
            <span class="token comment"># 20秒内没有push，就断开链接。</span>
            drop_idle_publisher 20s<span class="token punctuation">;</span>
           
            <span class="token comment">##打开 GOP 缓存，减少首屏等待时间</span>
            gop_cache on<span class="token punctuation">;</span> 
 
        <span class="token punctuation">}</span>
 
 
    <span class="token punctuation">}</span>
 
 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启动nginx服务" tabindex="-1"><a class="header-anchor" href="#启动nginx服务"><span>启动Nginx服务</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#检测配置文件语法，如果正常，提示(syntax is ok)</span>
/usr/local/nginx-flv/sbin/nginx <span class="token parameter variable">-t</span>
<span class="token comment">#运行</span>
/usr/local/nginx-flv/sbin/nginx <span class="token parameter variable">-c</span> /usr/local/nginx-flv/conf/nginx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试推流和拉流服务" tabindex="-1"><a class="header-anchor" href="#测试推流和拉流服务"><span>测试推流和拉流服务</span></a></h2><h3 id="推流服务" tabindex="-1"><a class="header-anchor" href="#推流服务"><span>推流服务</span></a></h3><p>可以在本地服务器下载安装ffmpeg后，读取一个mp4文件，推流到上面搭建的直播服务，来进行试验。 命令如下，test-video.mp4就是你本地的视频文件名称，live是前面配置的application名称，test就是自定义的流名称。</p><p>注意</p><p>一些旧版本的 FFmpeg 不支持选项 -c copy，可以使用选项 -vcodec copy -acodec copy 替代。</p><p>appname 用于匹配 rtmp 配置块中的 application 块，具体可以参考（nginx-http-flv-module: 基于nginx-rtmp-module的流媒体服务器。具备nginx-rtmp-module的所有功能，增加了HTTP-FLV，GOP缓存和VHOST（一个IP对应多个域名）的功能。Media streaming server based on nginx-rtmp-module. In addtion to the features nginx-rtmp-module provides, HTTP-FLV, GOP cache and VHOST (one IP for multi domain names) are supported now.）。</p><p>streamname 可以随意指定，但是不能省略。</p><p>RTMP 默认端口为 1935，如果要使用其他端口，必须指定 :port。</p><p>ffmpeg -re -i test-video.mp4 -c copy -f flv rtmp://192.168.10.111:1936/live/test</p><p>#看到如下信息，就是开始推流了</p><pre><code>fmpeg version 3.4.11-0ubuntu0.1 Copyright (c) 2000-2022 the FFmpeg developers
  built with gcc 7 (Ubuntu 7.5.0-3ubuntu1~18.04)
  configuration: --prefix=/usr --extra-version=0ubuntu0.1 --toolchain=hardened --libdir=/usr/lib/x86_64-linux-gnu --incdir=/usr/include/x86_64-linux-gnu --enable-gpl --disable-stripping --enable-avresample --enable-avisynth --enable-gnutls --enable-ladspa --enable-libass --enable-libbluray --enable-libbs2b --enable-libcaca --enable-libcdio --enable-libflite --enable-libfontconfig --enable-libfreetype --enable-libfribidi --enable-libgme --enable-libgsm --enable-libmp3lame --enable-libmysofa --enable-libopenjpeg --enable-libopenmpt --enable-libopus --enable-libpulse --enable-librubberband --enable-librsvg --enable-libshine --enable-libsnappy --enable-libsoxr --enable-libspeex --enable-libssh --enable-libtheora --enable-libtwolame --enable-libvorbis --enable-libvpx --enable-libwavpack --enable-libwebp --enable-libx265 --enable-libxml2 --enable-libxvid --enable-libzmq --enable-libzvbi --enable-omx --enable-openal --enable-opengl --enable-sdl2 --enable-libdc1394 --enable-libdrm --enable-libiec61883 --enable-chromaprint --enable-frei0r --enable-libopencv --enable-libx264 --enable-shared
  libavutil      55. 78.100 / 55. 78.100
  libavcodec     57.107.100 / 57.107.100
  libavformat    57. 83.100 / 57. 83.100
  libavdevice    57. 10.100 / 57. 10.100
  libavfilter     6.107.100 /  6.107.100
  libavresample   3.  7.  0 /  3.  7.  0
  libswscale      4.  8.100 /  4.  8.100
  libswresample   2.  9.100 /  2.  9.100
  libpostproc    54.  7.100 / 54.  7.100
Input #0, mov,mp4,m4a,3gp,3g2,mj2, from &#39;test-video.mp4&#39;:
  Metadata:
    major_brand     : isom
    minor_version   : 512
    compatible_brands: isomiso2avc1mp41
    encoder         : Lavf57.56.101
  Duration: 00:01:25.27, start: 0.000000, bitrate: 166 kb/s
    Stream #0:0(und): Video: h264 (High) (avc1 / 0x31637661), yuv420p(tv, bt709), 1280x638, 156 kb/s, 29.01 fps, 29 tbr, 1000k tbn, 2000k tbc (default)
</code></pre><h3 id="拉流测试" tabindex="-1"><a class="header-anchor" href="#拉流测试"><span>拉流测试</span></a></h3>`,33),f={href:"https://www.videolan.org/",target:"_blank",rel:"noopener noreferrer"},w=t(`<h4 id="rtmp拉流地址" tabindex="-1"><a class="header-anchor" href="#rtmp拉流地址"><span>RTMP拉流地址</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#自定流，要看推流时取的名字。我前面取的是test，那这边就取test</span>
rtmp://192.168.10.111:1936/live/test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+c+`" alt="image-20240218180231563" tabindex="0" loading="lazy"><figcaption>image-20240218180231563</figcaption></figure><p>http://192.168.10.111:89/live?port=1936&amp;app=live&amp;stream=test</p><p>http://example.com[:port]/dir?[port=xxx&amp;]app=appname&amp;stream=streamname</p><p>注意</p><ul><li><p>如果使用 ffplay 命令行方式播放流，那么必须为上述的 url 加上引号，否则 url 中的参数会被丢弃（有些不太智能的 shell 会把 &quot;&amp;&quot; 解释为&quot;后台运行&quot;）。</p></li><li><p>如果使用 flv.js 播放流，那么请保证发布的流被正确编码，因为 flv.js 只支持 H.264 编码的视频和 AAC/MP3 编码的音频。</p></li></ul><p>参数 dir 用于匹配 http 配置块中的 location 块</p><ul><li><p>HTTP 默认端口为 80, 如果使用了其他端口，必须指定 :port。</p></li><li><p>RTMP 默认端口为 1935，如果使用了其他端口，必须指定 port=xxx。</p></li></ul><p>参数 app 的值（appname）用来匹配 application 块，但是如果请求的 app 出现在多个 server 块中，并且这些 server 块有相同的地址和端口配置，那么还需要用匹配主机名的 server_name 配置项来区分请求的是哪个 application 块，否则，将匹配第一个 application 块。</p><p>参数 stream 的值（streamname）用来匹配发布的流的名称。</p><h2 id="查看统计" tabindex="-1"><a class="header-anchor" href="#查看统计"><span>查看统计</span></a></h2><p>#前提需要在nginx主配置文件里配置了stat服务，并且需要在nginx-http-flv-module-master源码包里把统计代码<strong>stat.xsl</strong>文件copy到nginx配置的目录里</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>http://192.168.10.111:89/stat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+r+'" alt="image-20240218175104892" tabindex="0" loading="lazy"><figcaption>image-20240218175104892</figcaption></figure>',15);function y(q,T){const e=l("ExternalLinkIcon");return o(),p("div",null,[u,v,m,n("ul",null,[n("li",null,[n("a",b,[s("nginx-rtmp-module"),a(e)]),s(" 提供的所有功能。")]),n("li",null,[s("nginx-http-flv-module 的其他功能与 "),n("a",k,[s("nginx-rtmp-module"),a(e)]),s(" 的对比：")])]),g,n("p",null,[n("a",h,[s("NGINX"),a(e)]),s(" 的版本"),x,s("大于或者等于 1.2.6，与其他版本的兼容性未知。")]),_,n("p",null,[s("windwos下拉RTMP流可以下载一个"),n("a",f,[s("VLC播放器"),a(e)]),s("，会比较方便")]),w])}const z=i(d,[["render",y],["__file","Nginx作为推流服务器.html.vue"]]),E=JSON.parse('{"path":"/note-book/Nginx__OpenResty/Nginx%E4%BD%9C%E4%B8%BA%E6%8E%A8%E6%B5%81%E6%9C%8D%E5%8A%A1%E5%99%A8.html","title":"Nginx作为推流服务器","lang":"zh-CN","frontmatter":{"description":"Nginx作为推流服务器 本文档参考文档制作： https://www.fnmqs.work/archives/161/ 感谢云梦工具箱，因为教程里使用的 https://github.com/arut/nginx-rtmp-module.git 这个模块太老了，3年之前更新过，所以重新更改方案使用了https://github.com/winshin...","head":[["meta",{"property":"og:url","content":"https://paper-dragon.github.io/note-book/Nginx__OpenResty/Nginx%E4%BD%9C%E4%B8%BA%E6%8E%A8%E6%B5%81%E6%9C%8D%E5%8A%A1%E5%99%A8.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"Nginx作为推流服务器"}],["meta",{"property":"og:description","content":"Nginx作为推流服务器 本文档参考文档制作： https://www.fnmqs.work/archives/161/ 感谢云梦工具箱，因为教程里使用的 https://github.com/arut/nginx-rtmp-module.git 这个模块太老了，3年之前更新过，所以重新更改方案使用了https://github.com/winshin..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-18T10:10:32.000Z"}],["meta",{"property":"article:author","content":"PaperDragon"}],["meta",{"property":"article:modified_time","content":"2024-02-18T10:10:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Nginx作为推流服务器\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-18T10:10:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"功能对比","slug":"功能对比","link":"#功能对比","children":[]},{"level":2,"title":"兼容性","slug":"兼容性","link":"#兼容性","children":[]},{"level":2,"title":"编译Nginx时需要的依赖和库","slug":"编译nginx时需要的依赖和库","link":"#编译nginx时需要的依赖和库","children":[]},{"level":2,"title":"下载源代码","slug":"下载源代码","link":"#下载源代码","children":[{"level":3,"title":"下载Nginx和Nginx-http-flv-module源代码","slug":"下载nginx和nginx-http-flv-module源代码","link":"#下载nginx和nginx-http-flv-module源代码","children":[]}]},{"level":2,"title":"编译安装","slug":"编译安装","link":"#编译安装","children":[]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]},{"level":2,"title":"启动Nginx服务","slug":"启动nginx服务","link":"#启动nginx服务","children":[]},{"level":2,"title":"测试推流和拉流服务","slug":"测试推流和拉流服务","link":"#测试推流和拉流服务","children":[{"level":3,"title":"推流服务","slug":"推流服务","link":"#推流服务","children":[]},{"level":3,"title":"拉流测试","slug":"拉流测试","link":"#拉流测试","children":[]}]},{"level":2,"title":"查看统计","slug":"查看统计","link":"#查看统计","children":[]}],"git":{"createdTime":1708251032000,"updatedTime":1708251032000,"contributors":[{"name":"PaperDragon","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":7.11,"words":2134},"filePathRelative":"note-book/Nginx&&OpenResty/Nginx作为推流服务器.md","localizedDate":"2024年2月18日","excerpt":"\\n<blockquote>\\n<p>本文档参考文档制作： https://www.fnmqs.work/archives/161/</p>\\n<p>感谢云梦工具箱，因为教程里使用的 https://github.com/arut/nginx-rtmp-module.git 这个模块太老了，3年之前更新过，所以重新更改方案使用了https://github.com/winshining/nginx-http-flv-module，这个模块在实现前者的功能的同时还实现了flv拉流量的功能，功能上强很多，而且更新及时。</p>\\n</blockquote>\\n<h2>功能对比</h2>\\n<ul>\\n<li><a href=\\"https://github.com/arut/nginx-rtmp-module\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">nginx-rtmp-module</a> 提供的所有功能。</li>\\n<li>nginx-http-flv-module 的其他功能与 <a href=\\"https://github.com/arut/nginx-rtmp-module\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">nginx-rtmp-module</a> 的对比：</li>\\n</ul>","autoDesc":true}');export{z as comp,E as data};
