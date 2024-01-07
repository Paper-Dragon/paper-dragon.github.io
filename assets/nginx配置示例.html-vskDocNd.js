import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as c,c as o,b as s,d as n,a as i,e as a}from"./app-fiyztsfI.js";const p={},r=a(`<h1 id="nginx配置示例" tabindex="-1"><a class="header-anchor" href="#nginx配置示例" aria-hidden="true">#</a> Nginx配置示例</h1><h2 id="book-itrusts-top-conf" tabindex="-1"><a class="header-anchor" href="#book-itrusts-top-conf" aria-hidden="true">#</a> book.itrusts.top.conf</h2><pre><code>server {
    listen 80;
   listen 443 ssl http2;
    server_name book.itools.top book.itrusts.top book.todesk.top 42.192.117.251;
    index index.php index.html index.htm default.php default.htm default.html;
    root /www/wwwroot/book.itools.top;

    #SSL-START SSL相关配置，请勿删除或修改下一行带注释的404规则
    #error_page 404/404.html;
    ssl_certificate    /www/server/panel/vhost/cert/book.itools.top/fullchain.pem;
    ssl_certificate_key    /www/server/panel/vhost/cert/book.itools.top/privkey.pem;
    ssl_protocols TLSv1.1 TLSv1.2 TLSv1.3;
    ssl_ciphers EECDH+CHACHA20:EECDH+CHACHA20-draft:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5;
    ssl_prefer_server_ciphers on;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    add_header Strict-Transport-Security &quot;max-age=31536000&quot;;
    error_page 497  https://$host$request_uri;

    #SSL-END
   #Directory protection rules, do not manually delete
   include /www/server/panel/vhost/nginx/dir_auth/book.itools.top/*.conf;

    #ERROR-PAGE-START  错误页配置，可以注释、删除或修改
    #error_page 404 /404.html;
    #error_page 502 /502.html;
    #ERROR-PAGE-END

    #PHP-INFO-START  PHP引用配置，可以注释或修改
    include enable-php-00.conf;
    #PHP-INFO-END

    #REWRITE-START URL重写规则引用,修改后将导致面板设置的伪静态规则失效
    include /www/server/panel/vhost/rewrite/book.itools.top.conf;
    #REWRITE-END

    #禁止访问的文件或目录
    location ~ ^/(\\.user.ini|\\.htaccess|\\.git|\\.svn|\\.project|LICENSE|README.md)
    {
        return 404;
    }

    #一键申请SSL证书验证目录相关设置
    location ~ \\.well-known{
        allow all;
    }

    location ~ .*\\.(gif|jpg|jpeg|png|bmp|swf)$
    {
        expires      30d;
        error_log /dev/null;
        access_log /dev/null;
    }

    location ~ .*\\.(js|css)?$
    {
        expires      12h;
        error_log /dev/null;
        access_log /dev/null;
    }
    access_log  /www/wwwlogs/book.itools.top.log;
    error_log  /www/wwwlogs/book.itools.top.error.log;
}
</code></pre><h1 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h1><h2 id="配置密码" tabindex="-1"><a class="header-anchor" href="#配置密码" aria-hidden="true">#</a> 配置密码</h2><h2 id="log-html-conf" tabindex="-1"><a class="header-anchor" href="#log-html-conf" aria-hidden="true">#</a> log-html.conf</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>location ~* ^/log.html* {
    #AUTH_START
    auth_basic &quot;Authorization&quot;;
    auth_basic_user_file /www/server/pass/book.itools.top/log-html.pass;
    include enable-php-00.conf;
    #AUTH_END
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>log-html.pass</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>test:teH0wLIpW0gyQ
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="root-admin-conf" tabindex="-1"><a class="header-anchor" href="#root-admin-conf" aria-hidden="true">#</a> root_admin.conf</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>location ~* ^/* <span class="token punctuation">{</span>
    <span class="token comment">#AUTH_START</span>
    auth_basic <span class="token string">&quot;Authorization&quot;</span><span class="token punctuation">;</span>
    auth_basic_user_file /www/server/pass/book.itools.top/rootadmin.pass<span class="token punctuation">;</span>
    include enable-php-00.conf<span class="token punctuation">;</span>
    <span class="token comment">#AUTH_END</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>roota_dmin.pass</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>admin:mdDbj0Wo3q.oU
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="lua动态模块set-by-lua-block-解决bind-ipv6" tabindex="-1"><a class="header-anchor" href="#lua动态模块set-by-lua-block-解决bind-ipv6" aria-hidden="true">#</a> Lua动态模块set_by_lua_block，解决bind ipv6</h2><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">user</span> www-data</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">worker_processes</span> auto</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">pid</span> /run/nginx.pid</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">load_module</span> /etc/nginx/modules/ngx_stream_module.so</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">error_log</span> /dev/null</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">events</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">worker_connections</span> <span class="token number">4096</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">sendfile</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>  <span class="token comment"># 是否使用sendfile传输文件</span>
    <span class="token directive"><span class="token keyword">tcp_nopush</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span> <span class="token comment"># 包攒到一定数量再发。若不开启，典型情况携带40字的包头，于是产生4000%过载，网络堵塞</span>
    <span class="token directive"><span class="token keyword">types_hash_max_size</span> <span class="token number">2048</span></span><span class="token punctuation">;</span> <span class="token comment"># 设置 types 哈希表的最大大小，默认1024</span>
    <span class="token directive"><span class="token keyword">include</span> /etc/nginx/mime.types</span><span class="token punctuation">;</span> <span class="token comment"># mime.types # 文件程序关联</span>
    <span class="token directive"><span class="token keyword">default_type</span> application/octet-stream</span><span class="token punctuation">;</span> <span class="token comment"># 未知的应用程序文件</span>
    <span class="token directive"><span class="token keyword">ssl_protocols</span> TLSv1 TLSv1.1 TLSv1.2 TLSv1.3</span><span class="token punctuation">;</span> <span class="token comment"># 指定SSL协议</span>
    <span class="token directive"><span class="token keyword">ssl_prefer_server_ciphers</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span> <span class="token comment"># 如果不指定默认为off，当为on时，在使用SSLv3和TLS协议时，服务器加密算法将优于客户端加密算法。</span>
    <span class="token directive"><span class="token keyword">gzip</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span> <span class="token comment"># 启用压缩</span>
    <span class="token directive"><span class="token keyword">include</span> /etc/nginx/conf.d/*.conf</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
        <span class="token comment"># Better practice: only listen to localhost, or use a firewall.</span>
    
      <span class="token comment"># 反向代理的场景，upstream后端用域名时，配置resolver以便于nginx能够解析该域名</span>
        <span class="token directive"><span class="token keyword">resolver</span> 1.1.1.1 ipv6=on ipv4=off valid=60s</span><span class="token punctuation">;</span> <span class="token comment"># 在 resolver 后面可以配置多个 DNS 地址，nginx 会采用轮询的方式去访问，并对解析结果缓存，这里的 valid 就是指定缓存的时间。</span>
        <span class="token directive"><span class="token keyword">resolver_timeout</span> <span class="token number">1s</span></span><span class="token punctuation">;</span> <span class="token comment"># 该参数是用于指定 DNS 解析的超时时间</span>
    
    
        <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
    
      <span class="token comment"># lua 脚本，设置变量bind_ip</span>
        <span class="token directive"><span class="token keyword">set_by_lua_block</span> <span class="token variable">$bind_ip</span></span> <span class="token punctuation">{</span>           
        return &#39;2602:fb26:09&#39;.. string.format(&#39;%x&#39;, math.random(1, 255)) ..&#39;:&#39;.. string.format(&#39;%x&#39;, math.random(1, 65535)) ..&#39;:&#39;.. string.format(&#39;%x&#39;, math.random(1, 65535)) ..&#39;:&#39;.. string.format(&#39;%x&#39;, math.random(1, 65535)) ..&#39;:&#39;.. string.format(&#39;%x&#39;, math.random(1, 65535)) ..&#39;:&#39;.. string.format(&#39;%x&#39;, math.random(1, 65535))
        <span class="token punctuation">}</span>
        <span class="token comment"># 配置代理服务器的出口地址</span>
            <span class="token directive"><span class="token keyword">proxy_bind</span> <span class="token variable">$bind_ip</span></span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$http_host</span></span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">proxy_pass</span> http://<span class="token variable">$http_host</span></span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">proxy_buffering</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token directive"><span class="token keyword">access_log</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token directive"><span class="token keyword">stream</span></span> <span class="token punctuation">{</span>
    <span class="token comment">#  创建一个新变量，其值取决于第一个参数中指定的一个或多个源变量的值，根据后面花括号内的内容，赋值给第二个变量。 </span>
    <span class="token comment">#  ngx_stream_ssl_preread_module 允许从clienthello中提取信息，而不会终止SSL/TLS,例如通过sni请求的服务器名称</span>
    <span class="token comment"># 相当于通过域名解析进行负载均衡</span>
    <span class="token directive"><span class="token keyword">map</span> <span class="token variable">$ssl_preread_server_name</span> <span class="token variable">$ssl_target</span></span> <span class="token punctuation">{</span>
      <span class="token comment"># ~ 代表这行要用正则表达式，大小写敏感</span>
      <span class="token comment"># </span>
        ~^ipv4-(?&lt;suffix&gt;.*)    <span class="token directive"><span class="token keyword">ipv6-$</span></span><span class="token punctuation">{</span>suffix<span class="token punctuation">}</span>:443<span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">default</span> <span class="token variable">$ssl_preread_server_name:443</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span> <span class="token number">443</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">resolver</span> 1.1.1.1 ipv6=on ipv4=off valid=60s</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">resolver_timeout</span> <span class="token number">1s</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> <span class="token variable">$ssl_target</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">ssl_preread</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">access_log</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx限速" tabindex="-1"><a class="header-anchor" href="#nginx限速" aria-hidden="true">#</a> Nginx限速</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>http <span class="token punctuation">{</span>
    limit_conn_zone $binary_remote_addr zone<span class="token operator">=</span>addr<span class="token operator">:</span><span class="token number">10</span>m<span class="token punctuation">;</span> # 根据来源地址生产容器
    limit_req_zone $binary_remote_addr zone<span class="token operator">=</span>baism<span class="token operator">:</span><span class="token number">10</span>m rate<span class="token operator">=</span><span class="token number">1</span>r<span class="token operator">/</span>s<span class="token punctuation">;</span> # 现在连接速率 
    server <span class="token punctuation">{</span>
        listen       <span class="token number">80</span><span class="token punctuation">;</span>
        server_name  _<span class="token punctuation">;</span>
        root         <span class="token operator">/</span>opt<span class="token punctuation">;</span>
        autoindex on<span class="token punctuation">;</span>

        limit_rate <span class="token number">100</span>k<span class="token punctuation">;</span> # 单线程最高速度
<span class="token macro property"><span class="token directive-hash">#</span>       <span class="token directive keyword">limit</span><span class="token expression">_rate_after <span class="token number">10240</span><span class="token punctuation">;</span> # 允许超速多少</span></span>
        limit_conn addr <span class="token number">3</span><span class="token punctuation">;</span> # 并发量
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx-实现偷站windy-com" tabindex="-1"><a class="header-anchor" href="#nginx-实现偷站windy-com" aria-hidden="true">#</a> Nginx 实现偷站Windy.com</h2><p>DNS解析</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>account.geekery.cn.	<span class="token number">600</span>	IN	A	<span class="token number">23.225</span>.xx.85
embed.geekery.cn.	<span class="token number">600</span>	IN	A	<span class="token number">23.225</span>.xx.85
img.geekery.cn.		<span class="token number">600</span>	IN	A	<span class="token number">23.225</span>.xx.85
ims.geekery.cn.		<span class="token number">600</span>	IN	A	<span class="token number">23.225</span>.xx.85
ims-s.geekery.cn.	<span class="token number">600</span>	IN	A	<span class="token number">23.225</span>.xx.85
node.geekery.cn.	<span class="token number">600</span>	IN	A	<span class="token number">23.225</span>.xx.85
tiles.geekery.cn.	<span class="token number">600</span>	IN	A	<span class="token number">23.225</span>.xx.85
www.geekery.cn.		<span class="token number">600</span>	IN	A	<span class="token number">23.225</span>.xx.85
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>nginx 配置</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">user</span> www-data</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">worker_processes</span>  auto</span><span class="token punctuation">;</span>

<span class="token directive"><span class="token keyword">error_log</span>  /var/log/nginx/error.log notice</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">pid</span> /run/nginx.pid</span><span class="token punctuation">;</span>


<span class="token directive"><span class="token keyword">events</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">worker_connections</span>  <span class="token number">1024</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">include</span>       /etc/nginx/mime.types</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">default_type</span>  application/octet-stream</span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">log_format</span>  main  <span class="token string">&#39;<span class="token variable">$remote_addr</span> - <span class="token variable">$remote_user</span> [<span class="token variable">$time_local]</span> &quot;<span class="token variable">$request</span>&quot; &#39;</span>
                      <span class="token string">&#39;<span class="token variable">$status</span> <span class="token variable">$body_bytes_sent</span> &quot;<span class="token variable">$http_referer</span>&quot; &#39;</span>
                      <span class="token string">&#39;&quot;<span class="token variable">$http_user_agent</span>&quot; &quot;<span class="token variable">$http_x_forwarded_for</span>&quot;&#39;</span></span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">access_log</span>  /var/log/nginx/access.log  main</span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">sendfile</span>        <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token comment">#tcp_nopush     on;</span>

    <span class="token directive"><span class="token keyword">keepalive_timeout</span>  <span class="token number">65</span></span><span class="token punctuation">;</span>

    <span class="token comment">#gzip  on;</span>

    <span class="token directive"><span class="token keyword">resolver</span> 8.8.8.8</span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">server_name</span>  windy.itgpt.com</span><span class="token punctuation">;</span>

            <span class="token directive"><span class="token keyword">proxy_set_header</span> Host www.windy.com</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">proxy_set_header</span> x-forwarded-for  <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>

            <span class="token comment">#access_log  /var/log/nginx/host.access.log  main;</span>

            <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
                <span class="token comment">#root   /usr/share/nginx/html/windy.com;</span>
                <span class="token comment">#index  index.html index.htm;</span>
                <span class="token directive"><span class="token keyword">proxy_pass</span> https://www.windy.com</span><span class="token punctuation">;</span>
                <span class="token directive"><span class="token keyword">proxy_ssl_server_name</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span> <span class="token comment"># 不透传sni并且设置sni为proxy_pass 域名</span>
                <span class="token directive"><span class="token keyword">sub_filter_types</span> *</span><span class="token punctuation">;</span>
                <span class="token directive"><span class="token keyword">sub_filter</span> windy.com itgpt.com</span><span class="token punctuation">;</span>
                <span class="token directive"><span class="token keyword">sub_filter</span> https http</span><span class="token punctuation">;</span>
                <span class="token directive"><span class="token keyword">sub_filter_once</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>

            <span class="token punctuation">}</span>

            <span class="token comment">#error_page  404              /404.html;</span>

            <span class="token comment"># redirect server error pages to the static page /50x.html</span>
            <span class="token comment">#</span>
            <span class="token directive"><span class="token keyword">error_page</span>   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">location</span> = /50x.html</span> <span class="token punctuation">{</span>
                <span class="token directive"><span class="token keyword">root</span>   /usr/share/nginx/html</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token comment"># proxy the PHP scripts to Apache listening on 127.0.0.1:80</span>
            <span class="token comment">#</span>
            <span class="token comment">#location ~ \\.php$ {</span>
            <span class="token comment">#    proxy_pass   http://127.0.0.1;</span>
            <span class="token comment">#}</span>
    <span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">server_name</span>  ~^(?&lt;subdomain&gt;.+)\\.itgpt\\.com$</span><span class="token punctuation">;</span>

            <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$subdomain</span>.windy.com</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">proxy_set_header</span> x-forwarded-for  <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>

            <span class="token comment">#access_log  /var/log/nginx/host.access.log  main;</span>

            <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
                <span class="token comment">#root   /usr/share/nginx/html/windy.com;</span>
                <span class="token comment">#index  index.html index.htm;</span>
                <span class="token directive"><span class="token keyword">proxy_pass</span> https://<span class="token variable">$subdomain</span>.windy.com</span><span class="token punctuation">;</span>
                <span class="token directive"><span class="token keyword">proxy_ssl_server_name</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
                <span class="token directive"><span class="token keyword">sub_filter_types</span> *</span><span class="token punctuation">;</span>
                <span class="token directive"><span class="token keyword">sub_filter</span> windy.com itgpt.com</span><span class="token punctuation">;</span>
                <span class="token directive"><span class="token keyword">sub_filter</span> https http</span><span class="token punctuation">;</span>
                <span class="token directive"><span class="token keyword">sub_filter_once</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>

            <span class="token punctuation">}</span>

            <span class="token comment">#error_page  404              /404.html;</span>

            <span class="token comment"># redirect server error pages to the static page /50x.html</span>
            <span class="token comment">#</span>
            <span class="token directive"><span class="token keyword">error_page</span>   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">location</span> = /50x.html</span> <span class="token punctuation">{</span>
                <span class="token directive"><span class="token keyword">root</span>   /usr/share/nginx/html</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token comment"># proxy the PHP scripts to Apache listening on 127.0.0.1:80</span>
            <span class="token comment">#</span>
            <span class="token comment">#location ~ \\.php$ {</span>
            <span class="token comment">#    proxy_pass   http://127.0.0.1;</span>
            <span class="token comment">#}</span>
    <span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">server_name</span>  ~^(?&lt;subdomain&gt;.+)\\.geekery\\.cn$</span><span class="token punctuation">;</span>

            <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$subdomain</span>.windy.com</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">proxy_set_header</span> x-forwarded-for  <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>

            <span class="token comment">#access_log  /var/log/nginx/host.access.log  main;</span>

            <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
                <span class="token comment">#root   /usr/share/nginx/html/windy.com;</span>
                <span class="token comment">#index  index.html index.htm;</span>
                <span class="token directive"><span class="token keyword">proxy_pass</span> https://<span class="token variable">$subdomain</span>.windy.com</span><span class="token punctuation">;</span>
                <span class="token directive"><span class="token keyword">proxy_ssl_server_name</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
                <span class="token directive"><span class="token keyword">sub_filter_types</span> *</span><span class="token punctuation">;</span>
                <span class="token directive"><span class="token keyword">sub_filter</span> windy.com geekery.cn</span><span class="token punctuation">;</span>
                <span class="token directive"><span class="token keyword">sub_filter</span> https http</span><span class="token punctuation">;</span>
                <span class="token directive"><span class="token keyword">sub_filter_once</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>

            <span class="token punctuation">}</span>

            <span class="token comment">#error_page  404              /404.html;</span>

            <span class="token comment"># redirect server error pages to the static page /50x.html</span>
            <span class="token comment">#</span>
            <span class="token directive"><span class="token keyword">error_page</span>   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">location</span> = /50x.html</span> <span class="token punctuation">{</span>
                <span class="token directive"><span class="token keyword">root</span>   /usr/share/nginx/html</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token comment"># proxy the PHP scripts to Apache listening on 127.0.0.1:80</span>
            <span class="token comment">#</span>
            <span class="token comment">#location ~ \\.php$ {</span>
            <span class="token comment">#    proxy_pass   http://127.0.0.1;</span>
            <span class="token comment">#}</span>
    <span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">include</span> /etc/nginx/conf.d/*.conf</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
    
    
    
<span class="token comment">#!/bin/bash</span>

<span class="token comment">#docker run -it --rm \\</span>
    -v ./nginx.conf:/etc/nginx/nginx.conf \\
    nginx


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx实现缓存服务器" tabindex="-1"><a class="header-anchor" href="#nginx实现缓存服务器" aria-hidden="true">#</a> nginx实现缓存服务器</h2><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>
<span class="token comment">#user  nobody;</span>
<span class="token directive"><span class="token keyword">worker_processes</span>  <span class="token number">1</span></span><span class="token punctuation">;</span>

<span class="token comment">#error_log  logs/error.log;</span>
<span class="token comment">#error_log  logs/error.log  notice;</span>
<span class="token comment">#error_log  logs/error.log  info;</span>

<span class="token comment">#pid        logs/nginx.pid;</span>


<span class="token directive"><span class="token keyword">events</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">worker_connections</span>  <span class="token number">1024</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">include</span>       mime.types</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">default_type</span>  application/octet-stream</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_cache_path</span> /cache/myhcache levels=1:2 keys_zone=my_cache:100m max_size=200m inactive=60m</span><span class="token punctuation">;</span>
    

    <span class="token directive"><span class="token keyword">sendfile</span>        <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">keepalive_timeout</span>  <span class="token number">65</span></span><span class="token punctuation">;</span>
    <span class="token comment">#gzip  on; </span>
    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server_name</span> 127.0.0.1</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
           <span class="token directive"><span class="token keyword">proxy_cache</span> my_cache</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">proxy_cache_valid</span> <span class="token number">200</span> <span class="token number">302</span> <span class="token number">10m</span></span><span class="token punctuation">;</span>  
            <span class="token directive"><span class="token keyword">proxy_cache_valid</span> <span class="token number">404</span>      <span class="token number">1m</span></span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">proxy_pass</span> http://222.31.96.81:20281</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">proxy_cache_key</span> <span class="token variable">$scheme</span><span class="token variable">$host</span><span class="token variable">$request_uri</span></span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>


<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx-stream模块的日志配置" tabindex="-1"><a class="header-anchor" href="#nginx-stream模块的日志配置" aria-hidden="true">#</a> Nginx Stream模块的日志配置</h2><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>
<span class="token directive"><span class="token keyword">stream</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">log_format</span> proxy <span class="token string">&#39;<span class="token variable">$remote_addr</span> [<span class="token variable">$time_local]</span> &#39;</span>
                 <span class="token string">&#39;<span class="token variable">$protocol</span> <span class="token variable">$status</span> <span class="token variable">$bytes_sent</span> <span class="token variable">$bytes_received</span> &#39;</span>
                 <span class="token string">&#39;<span class="token variable">$session_time</span> -&gt; <span class="token variable">$upstream_addr</span> &#39;</span>
                 <span class="token string">&#39;<span class="token variable">$upstream_bytes_sent</span> <span class="token variable">$upstream_bytes_received</span> <span class="token variable">$upstream_connect_time</span>&#39;</span></span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">access_log</span> /var/log/nginx/tcp-access.log proxy</span><span class="token punctuation">;</span>
    <span class="token comment"># open_log_file_cache off;</span>

    <span class="token directive"><span class="token keyword">include</span> /etc/nginx/stream.d/*.conf</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx-stream实现四层网络连续端口批量代理" tabindex="-1"><a class="header-anchor" href="#nginx-stream实现四层网络连续端口批量代理" aria-hidden="true">#</a> Nginx Stream实现四层网络连续端口批量代理</h2><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span> 1000-2000</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">listen</span> 1000-2000 udp reuseport</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span> xxx.f3322.net:<span class="token variable">$server_port</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">resolver</span> 1.1.1.1</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">resolver_timeout</span> <span class="token number">1s</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">443</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span> xxx.f3322.net:2<span class="token variable">$server_port</span></span><span class="token punctuation">;</span>
    <span class="token comment">#return 200 1$server_port;</span>
    <span class="token directive"><span class="token keyword">resolver</span> 1.1.1.1</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">resolver_timeout</span> <span class="token number">1s</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx在yum和apt安装-超过1015个端口监听" tabindex="-1"><a class="header-anchor" href="#nginx在yum和apt安装-超过1015个端口监听" aria-hidden="true">#</a> Nginx在yum和apt安装，超过1015个端口监听</h2><p><strong>报错</strong></p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>socket() failed (24: Too many open files) while connecting to upstream
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>解决方法</strong></p><p>为CentOS/RHEL等发行版中的systemd服务配置ulimit限制</p>`,33),d={href:"https://zhuanlan.zhihu.com/p/111364906",target:"_blank",rel:"noopener noreferrer"},u=a(`<p>众所周知，大部分Linux发行版中的默认最大打开文件数都是1024，可以使用<code>ulimit -a</code>查看</p><p>实际上<code>/etc/security/limits.conf</code>是<code>pam_limits.so</code>的配置文件，可以通过<code>man limits.conf</code>看到</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>LIMITS.CONF(5)                 Linux-PAM Manual                 LIMITS.CONF(5)

NAME
       limits.conf - configuration file for the pam_limits module

DESCRIPTION
       The pam_limits.so module applies ulimit limits, nice priority
       and number of simultaneous login sessions limit to user login
       sessions. This description of the configuration file syntax
       applies to the /etc/security/limits.conf file and *.conf files
       in the /etc/security/limits.d directory.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>PAM全称为插入式验证模块（Pluggable Authentication Module，PAM），主要目的是为Linux下不同依赖用户体系的应用程序提供统一身份认证和用户资料读写API。</p><p>通过<code>man 8 pam</code>可以看到关于PAM模块的描述如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PAM(8)                         Linux-PAM Manual                         PAM(8)

NAME
       PAM, pam - Pluggable Authentication Modules for Linux

DESCRIPTION
       This manual is intended to offer a quick introduction to Linux-PAM.
       For more information the reader is directed to the Linux-PAM system
       administrators´ guide.

       Linux-PAM is a system of libraries that handle the authentication
       tasks of applications (services) on the system. The library provides
       a stable general interface (Application Programming Interface - API)
       that privilege granting programs (such as login(1) and su(1)) defer
       to to perform standard authentication tasks.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>描述中明确表示PAM既可以用于应用程序鉴权，也可以用于服务鉴权。这里的服务指的是以<code>init</code>进程为根进程的，被称作<code>SysV</code>的机制，也就是各发行版在使用<code>systemd</code>之前广泛使用的服务机制。</p>`,7),v=s("code",null,"systemd",-1),m={href:"https://link.zhihu.com/?target=https%3A//bugzilla.redhat.com/show_bug.cgi%3Fid%3D754285",target:"_blank",rel:"noopener noreferrer"},k=a(`<blockquote><p>Systemd does not support global limits, the file is intentionally ignored. LimitNOFILE= in the service file can be set to specify the number of open file descriptors for a specific service.</p></blockquote><p>也就是说，Systemd设计的时候故意忽略了全局限制，转而在配置文件中配置对每个服务的资源限制，结合<code>/etc/security/limits.conf</code>文件开头的注释来看，果然如此：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># /etc/security/limits.conf
#
#This file sets the resource limits for the users logged in via PAM.
#It does not affect resource limits of the system services.
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>既然了解了Systemd不会遵循PAM模块的配置，那么接下来要做的就是思考如何在Systemd的配置文件中设置资源限制。</p><p>0x03 问题解决</p><p>要想知道Systemd配置资源限制的方法，还得求助于<code>man</code>。这里我在命令行输入<code>man systemd.exec</code>，看到了以下信息:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>LimitCPU=, LimitFSIZE=, LimitDATA=, LimitSTACK=, LimitCORE=, LimitRSS=, LimitNOFILE=, LimitAS=,
LimitNPROC=, LimitMEMLOCK=, LimitLOCKS=, LimitSIGPENDING=, LimitMSGQUEUE=, LimitNICE=,
LimitRTPRIO=, LimitRTTIME=
    These settings set both soft and hard limits of various resources for executed processes. See
setrlimit(2) for details. The resource limit is possible to specify in two formats, value to
set soft and hard limits to the same value, or soft:hard to set both limits individually
(e.g. LimitAS=4G:16G). Use the string infinity to configure no limit on a specific resource.
    The multiplicative suffixes K (=1024), M (=1024*1024) and so on for G, T, P and E may be used
for resource limits measured in bytes (e.g. LimitAS=16G). For the limits referring to time
values, the usual time units ms, s, min, h and so on may be used (see systemd.time(7) for
    details). Note that if no time unit is specified for LimitCPU= the default unit of seconds is
implied, while for LimitRTTIME= the default unit of microseconds is implied. Also, note that
the effective granularity of the limits might influence their enforcement. For example, time
limits specified for LimitCPU= will be rounded up implicitly to multiples of 1s. For
LimitNICE= the value may be specified in two syntaxes: if prefixed with &quot;+&quot; or &quot;-&quot;, the value
is understood as regular Linux nice value in the range -20..19. If not prefixed like this the
value is understood as raw resource limit parameter in the range 0..40 (with 0 being
equivalent to 1).

Note that most process resource limits configured with these options are per-process, and
processes may fork in order to acquire a new set of resources that are accounted
independently of the original process, and may thus escape limits set. Also note that
LimitRSS= is not implemented on Linux, and setting it has no effect. Often it is advisable to
prefer the resource controls listed in systemd.resource-control(5) over these per-process
limits, as they apply to services as a whole, may be altered dynamically at runtime, and are
generally more expressive. For example, MemoryLimit= is a more powerful (and working)
replacement for LimitRSS=.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关于这一段的讲解非常详细且复杂，但我们只要知道以下映射关系即可：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Table 1. Limit directives and their equivalent with ulimit
┌─────────────────┬───────────────────┬────────────────────────────┐
│Directive        │ ulimit equivalent │ Unit                       │
├─────────────────┼───────────────────┼────────────────────────────┤
│LimitCPU=        │ ulimit -t         │ Seconds                    │
├─────────────────┼───────────────────┼────────────────────────────┤
│LimitFSIZE=      │ ulimit -f         │ Bytes                      │
├─────────────────┼───────────────────┼────────────────────────────┤
│LimitDATA=       │ ulimit -d         │ Bytes                      │
├─────────────────┼───────────────────┼────────────────────────────┤
│LimitSTACK=      │ ulimit -s         │ Bytes                      │
├─────────────────┼───────────────────┼────────────────────────────┤
│LimitCORE=       │ ulimit -c         │ Bytes                      │
├─────────────────┼───────────────────┼────────────────────────────┤
│LimitRSS=        │ ulimit -m         │ Bytes                      │
├─────────────────┼───────────────────┼────────────────────────────┤
│LimitNOFILE=     │ ulimit -n         │ Number of File Descriptors │
├─────────────────┼───────────────────┼────────────────────────────┤
│LimitAS=         │ ulimit -v         │ Bytes                      │
├─────────────────┼───────────────────┼────────────────────────────┤
│LimitNPROC=      │ ulimit -u         │ Number of Processes        │
├─────────────────┼───────────────────┼────────────────────────────┤
│LimitMEMLOCK=    │ ulimit -l         │ Bytes                      │
├─────────────────┼───────────────────┼────────────────────────────┤
│LimitLOCKS=      │ ulimit -x         │ Number of Locks            │
├─────────────────┼───────────────────┼────────────────────────────┤
│LimitSIGPENDING= │ ulimit -i         │ Number of Queued Signals   │
├─────────────────┼───────────────────┼────────────────────────────┤
│LimitMSGQUEUE=   │ ulimit -q         │ Bytes                      │
├─────────────────┼───────────────────┼────────────────────────────┤
│LimitNICE=       │ ulimit -e         │ Nice Level                 │
├─────────────────┼───────────────────┼────────────────────────────┤
│LimitRTPRIO=     │ ulimit -r         │ Realtime Priority          │
├─────────────────┼───────────────────┼────────────────────────────┤
│LimitRTTIME=     │ No equivalent     │ Microseconds               │
└─────────────────┴───────────────────┴────────────────────────────┘
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从表格中可以看到，这里我们需要修改的是最大打开文件数，也就是<code>LimitNOFILE</code>。</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>编辑nginx.service添加下面一行
LimitNOFILE=20480

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我最近也被这个问题折腾了一遍。 不过我的解决办法比较野蛮 ，</p><p>sed -i &#39;s|#DefaultLimitNOFILE=|DefaultLimitNOFILE=65535|g&#39; /etc/systemd/system.conf</p><p>还有一个办法就是不直接修改service， 使用 systemctl edit xxxx.service 进行参数覆盖</p><h2 id="日志切割" tabindex="-1"><a class="header-anchor" href="#日志切割" aria-hidden="true">#</a> 日志切割</h2><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
    <span class="token comment"># 定义日志格式</span>
    <span class="token directive"><span class="token keyword">log_format</span> main <span class="token string">&#39;<span class="token variable">$remote_addr</span> - <span class="token variable">$remote_user</span> [<span class="token variable">$time_local]</span> &#39;</span>
                    <span class="token string">&#39;&quot;<span class="token variable">$request</span>&quot; <span class="token variable">$status</span> <span class="token variable">$body_bytes_sent</span> &#39;</span>
                    <span class="token string">&#39;&quot;<span class="token variable">$http_referer</span>&quot; &quot;<span class="token variable">$http_user_agent</span>&quot;&#39;</span></span><span class="token punctuation">;</span>
 
    <span class="token comment"># 定义日志路径及文件名</span>
    <span class="token directive"><span class="token keyword">access_log</span> /var/log/nginx/access.log main</span><span class="token punctuation">;</span>
 
    <span class="token comment"># 定义日志切割规则</span>
    <span class="token directive"><span class="token keyword">logrotate</span> <span class="token number">14</span></span><span class="token punctuation">;</span>  <span class="token comment"># 按14天切割日志</span>
    <span class="token directive"><span class="token keyword">gzip</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>  <span class="token comment"># 切割后压缩日志文件</span>
    <span class="token directive"><span class="token keyword">create</span> <span class="token number">0644</span> nginx nginx</span><span class="token punctuation">;</span>  <span class="token comment"># 创建新的日志文件权限</span>
 
    <span class="token comment"># 其他配置项...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function b(h,g){const e=l("ExternalLinkIcon");return c(),o("div",null,[r,s("p",null,[s("a",d,[n("为CentOS/RHEL等发行版中的systemd服务配置ulimit限制 - 知乎 (zhihu.com)"),i(e)])]),u,s("p",null,[n("那么问题来了：对于"),v,n("，到底是否依旧沿用PAM模块实现资源限制呢？我在RedHat Bugzilla找到了Systemd最初被引入时的一篇Ticket："),s("a",m,[n("Bug 754285 - Hint that /etc/security/limits.conf does not apply to systemd services"),i(e)]),n("。帖子中提到了一模一样的问题。Systemd的作者之一Kay Sievers当时给与了以下回复：")]),k])}const x=t(p,[["render",b],["__file","nginx配置示例.html.vue"]]);export{x as default};
