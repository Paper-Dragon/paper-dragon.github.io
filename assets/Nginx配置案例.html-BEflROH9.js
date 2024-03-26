import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o,c as l,b as n,e as s,a as i,d as a}from"./app-By-IjZ_f.js";const c={},r=a(`<h1 id="nginx配置案例" tabindex="-1"><a class="header-anchor" href="#nginx配置案例"><span>Nginx配置案例</span></a></h1><h2 id="book-itrusts-top-conf" tabindex="-1"><a class="header-anchor" href="#book-itrusts-top-conf"><span>book.itrusts.top.conf</span></a></h2><pre><code>server {
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
</code></pre><h1 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h1><h2 id="配置密码" tabindex="-1"><a class="header-anchor" href="#配置密码"><span>配置密码</span></a></h2><h2 id="log-html-conf" tabindex="-1"><a class="header-anchor" href="#log-html-conf"><span>log-html.conf</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>location ~* ^/log.html* {
    #AUTH_START
    auth_basic &quot;Authorization&quot;;
    auth_basic_user_file /www/server/pass/book.itools.top/log-html.pass;
    include enable-php-00.conf;
    #AUTH_END
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>log-html.pass</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>test:teH0wLIpW0gyQ
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="root-admin-conf" tabindex="-1"><a class="header-anchor" href="#root-admin-conf"><span>root_admin.conf</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>location ~* ^/* <span class="token punctuation">{</span>
    <span class="token comment">#AUTH_START</span>
    auth_basic <span class="token string">&quot;Authorization&quot;</span><span class="token punctuation">;</span>
    auth_basic_user_file /www/server/pass/book.itools.top/rootadmin.pass<span class="token punctuation">;</span>
    include enable-php-00.conf<span class="token punctuation">;</span>
    <span class="token comment">#AUTH_END</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>roota_dmin.pass</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>admin:mdDbj0Wo3q.oU
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="lua动态模块set-by-lua-block-解决bind-ipv6" tabindex="-1"><a class="header-anchor" href="#lua动态模块set-by-lua-block-解决bind-ipv6"><span>Lua动态模块set_by_lua_block，解决bind ipv6</span></a></h2><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">user</span> www-data</span><span class="token punctuation">;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx限速" tabindex="-1"><a class="header-anchor" href="#nginx限速"><span>Nginx限速</span></a></h2><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code>http <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx-实现偷站windy-com" tabindex="-1"><a class="header-anchor" href="#nginx-实现偷站windy-com"><span>Nginx 实现偷站Windy.com</span></a></h2><p>DNS解析</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>account.geekery.cn.	<span class="token number">600</span>	IN	A	<span class="token number">23.225</span>.xx.85
embed.geekery.cn.	<span class="token number">600</span>	IN	A	<span class="token number">23.225</span>.xx.85
img.geekery.cn.		<span class="token number">600</span>	IN	A	<span class="token number">23.225</span>.xx.85
ims.geekery.cn.		<span class="token number">600</span>	IN	A	<span class="token number">23.225</span>.xx.85
ims-s.geekery.cn.	<span class="token number">600</span>	IN	A	<span class="token number">23.225</span>.xx.85
node.geekery.cn.	<span class="token number">600</span>	IN	A	<span class="token number">23.225</span>.xx.85
tiles.geekery.cn.	<span class="token number">600</span>	IN	A	<span class="token number">23.225</span>.xx.85
www.geekery.cn.		<span class="token number">600</span>	IN	A	<span class="token number">23.225</span>.xx.85
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>nginx 配置</p><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">user</span> www-data</span><span class="token punctuation">;</span>
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


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx实现缓存服务器" tabindex="-1"><a class="header-anchor" href="#nginx实现缓存服务器"><span>nginx实现缓存服务器</span></a></h2><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx-stream模块的日志配置" tabindex="-1"><a class="header-anchor" href="#nginx-stream模块的日志配置"><span>Nginx Stream模块的日志配置</span></a></h2><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code>
<span class="token directive"><span class="token keyword">stream</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">log_format</span> proxy <span class="token string">&#39;<span class="token variable">$remote_addr</span> [<span class="token variable">$time_local]</span> &#39;</span>
                 <span class="token string">&#39;<span class="token variable">$protocol</span> <span class="token variable">$status</span> <span class="token variable">$bytes_sent</span> <span class="token variable">$bytes_received</span> &#39;</span>
                 <span class="token string">&#39;<span class="token variable">$session_time</span> -&gt; <span class="token variable">$upstream_addr</span> &#39;</span>
                 <span class="token string">&#39;<span class="token variable">$upstream_bytes_sent</span> <span class="token variable">$upstream_bytes_received</span> <span class="token variable">$upstream_connect_time</span>&#39;</span></span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">access_log</span> /var/log/nginx/tcp-access.log proxy</span><span class="token punctuation">;</span>
    <span class="token comment"># open_log_file_cache off;</span>

    <span class="token directive"><span class="token keyword">include</span> /etc/nginx/stream.d/*.conf</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx-stream实现四层网络连续端口批量代理" tabindex="-1"><a class="header-anchor" href="#nginx-stream实现四层网络连续端口批量代理"><span>Nginx Stream实现四层网络连续端口批量代理</span></a></h2><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx在yum和apt安装-超过1015个端口监听" tabindex="-1"><a class="header-anchor" href="#nginx在yum和apt安装-超过1015个端口监听"><span>Nginx在yum和apt安装，超过1015个端口监听</span></a></h2><p><strong>报错</strong></p><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code>socket() failed (24: Too many open files) while connecting to upstream
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>解决方法</strong></p><p>为CentOS/RHEL等发行版中的systemd服务配置ulimit限制</p>`,33),d={href:"https://zhuanlan.zhihu.com/p/111364906",target:"_blank",rel:"noopener noreferrer"},u=a(`<p>众所周知，大部分Linux发行版中的默认最大打开文件数都是1024，可以使用<code>ulimit -a</code>查看</p><p>实际上<code>/etc/security/limits.conf</code>是<code>pam_limits.so</code>的配置文件，可以通过<code>man limits.conf</code>看到</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>LIMITS.CONF(5)                 Linux-PAM Manual                 LIMITS.CONF(5)

NAME
       limits.conf - configuration file for the pam_limits module

DESCRIPTION
       The pam_limits.so module applies ulimit limits, nice priority
       and number of simultaneous login sessions limit to user login
       sessions. This description of the configuration file syntax
       applies to the /etc/security/limits.conf file and *.conf files
       in the /etc/security/limits.d directory.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>PAM全称为插入式验证模块（Pluggable Authentication Module，PAM），主要目的是为Linux下不同依赖用户体系的应用程序提供统一身份认证和用户资料读写API。</p><p>通过<code>man 8 pam</code>可以看到关于PAM模块的描述如下：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>PAM(8)                         Linux-PAM Manual                         PAM(8)

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>描述中明确表示PAM既可以用于应用程序鉴权，也可以用于服务鉴权。这里的服务指的是以<code>init</code>进程为根进程的，被称作<code>SysV</code>的机制，也就是各发行版在使用<code>systemd</code>之前广泛使用的服务机制。</p>`,7),v=n("code",null,"systemd",-1),k={href:"https://bugzilla.redhat.com/show_bug.cgi?id=754285",target:"_blank",rel:"noopener noreferrer"},m=a(`<blockquote><p>Systemd does not support global limits, the file is intentionally ignored. LimitNOFILE= in the service file can be set to specify the number of open file descriptors for a specific service.</p></blockquote><p>也就是说，Systemd设计的时候故意忽略了全局限制，转而在配置文件中配置对每个服务的资源限制，结合<code>/etc/security/limits.conf</code>文件开头的注释来看，果然如此：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># /etc/security/limits.conf
#
#This file sets the resource limits for the users logged in via PAM.
#It does not affect resource limits of the system services.
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>既然了解了Systemd不会遵循PAM模块的配置，那么接下来要做的就是思考如何在Systemd的配置文件中设置资源限制。</p><p>0x03 问题解决</p><p>要想知道Systemd配置资源限制的方法，还得求助于<code>man</code>。这里我在命令行输入<code>man systemd.exec</code>，看到了以下信息:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>LimitCPU=, LimitFSIZE=, LimitDATA=, LimitSTACK=, LimitCORE=, LimitRSS=, LimitNOFILE=, LimitAS=,
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关于这一段的讲解非常详细且复杂，但我们只要知道以下映射关系即可：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Table 1. Limit directives and their equivalent with ulimit
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从表格中可以看到，这里我们需要修改的是最大打开文件数，也就是<code>LimitNOFILE</code>。</p><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code>编辑nginx.service添加下面一行
LimitNOFILE=20480

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我最近也被这个问题折腾了一遍。 不过我的解决办法比较野蛮 ，</p><p>sed -i &#39;s|#DefaultLimitNOFILE=|DefaultLimitNOFILE=65535|g&#39; /etc/systemd/system.conf</p><p>还有一个办法就是不直接修改service， 使用 systemctl edit xxxx.service 进行参数覆盖</p><h2 id="日志轮转切割" tabindex="-1"><a class="header-anchor" href="#日志轮转切割"><span>日志轮转切割</span></a></h2><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="log文件记录请求url" tabindex="-1"><a class="header-anchor" href="#log文件记录请求url"><span>log文件记录请求url</span></a></h2>`,17),b={href:"https://so.csdn.net/so/search?q=nginx&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},h=a(`<div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code>log_format main escape<span class="token operator">=</span>json  <span class="token char">&#39;{&#39;</span>
                                <span class="token char">&#39;&quot;host&quot;: &quot;$host&quot;,&#39;</span>
                                <span class="token char">&#39;&quot;request&quot;: &quot;$request&quot;&#39;</span>
                                <span class="token char">&#39;}&#39;</span> <span class="token punctuation">;</span>
access_log  <span class="token operator">/</span>var<span class="token operator">/</span>log<span class="token operator">/</span>nginx<span class="token operator">/</span>access<span class="token punctuation">.</span>log  main<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),g={id:"log文件记录请求body和header",tabindex:"-1"},y={class:"header-anchor",href:"#log文件记录请求body和header"},_={href:"https://so.csdn.net/so/search?q=header&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},x=a(`<p>① body：配置中打开lua_need_body_request on 即可将request_body 记录到$request_body变量</p><p>② header：header数据需要在header_filter_by_lua_block阶段中手动赋值，读取请求中的header信息赋值给$request_header 变量</p><p>修改后配置文件如下：</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code>log_format main escape<span class="token operator">=</span>json  <span class="token char">&#39;{&#39;</span>
                                <span class="token char">&#39;&quot;host&quot;: &quot;$host&quot;,&#39;</span>
                                <span class="token char">&#39;&quot;request&quot;: &quot;$request&quot;,&#39;</span>
                                &#39;<span class="token string">&quot;request_header&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$request_header&quot;</span><span class="token punctuation">,</span>&#39;
                                <span class="token char">&#39;&quot;request_body&quot;: &quot;$request_body&quot;&#39;</span>
                                <span class="token char">&#39;}&#39;</span> <span class="token punctuation">;</span>
access_log  <span class="token operator">/</span>var<span class="token operator">/</span>log<span class="token operator">/</span>nginx<span class="token operator">/</span>access<span class="token punctuation">.</span>log  main<span class="token punctuation">;</span>
 
server <span class="token punctuation">{</span>
    # 记录请求body
    lua_need_request_body   on<span class="token punctuation">;</span>
    # 记录请求header
    set $response_header     <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    header_filter_by_lua_block     <span class="token punctuation">{</span>
        json <span class="token operator">=</span> require <span class="token string">&quot;cjson&quot;</span>
        ngx<span class="token punctuation">.</span>var<span class="token punctuation">.</span>request_header <span class="token operator">=</span> json<span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span>ngx<span class="token punctuation">.</span>req<span class="token punctuation">.</span><span class="token function">get_headers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="log文件记录返回body和header" tabindex="-1"><a class="header-anchor" href="#log文件记录返回body和header"><span>log文件记录返回body和header</span></a></h2><p>① body：body数据需要在body_filter_by_lua_block阶段中手动赋值， 读取response body中的数据赋值给 $response_body 变量</p><p>② header：response header数据获取方式，同request header的获取方式一致。</p><p>完整配置如下</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code>log_format main escape<span class="token operator">=</span>json  <span class="token char">&#39;{&#39;</span>
                                <span class="token char">&#39;&quot;host&quot;: &quot;$host&quot;,&#39;</span>
                                <span class="token char">&#39;&quot;request&quot;: &quot;$request&quot;,&#39;</span>
                                &#39;<span class="token string">&quot;request_header&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$request_header&quot;</span><span class="token punctuation">,</span>&#39;
                                <span class="token char">&#39;&quot;request_body&quot;: &quot;$request_body&quot;,&#39;</span>
                                &#39;<span class="token string">&quot;response_header&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$response_header&quot;</span><span class="token punctuation">,</span>&#39;
                                &#39;<span class="token string">&quot;response_body&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$response_body&quot;</span>&#39;
                                <span class="token char">&#39;}&#39;</span> <span class="token punctuation">;</span>
access_log  <span class="token operator">/</span>var<span class="token operator">/</span>log<span class="token operator">/</span>nginx<span class="token operator">/</span>access<span class="token punctuation">.</span>log  main<span class="token punctuation">;</span>
 
server <span class="token punctuation">{</span>
    # 记录请求body
    lua_need_request_body   on<span class="token punctuation">;</span>
 
    # 记录请求header和返回header
    set $response_header     <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    header_filter_by_lua_block     <span class="token punctuation">{</span>
        json <span class="token operator">=</span> require <span class="token string">&quot;cjson&quot;</span>
        ngx<span class="token punctuation">.</span>var<span class="token punctuation">.</span>request_header <span class="token operator">=</span> json<span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span>ngx<span class="token punctuation">.</span>req<span class="token punctuation">.</span><span class="token function">get_headers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        ngx<span class="token punctuation">.</span>var<span class="token punctuation">.</span>response_header <span class="token operator">=</span> json<span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span>ngx<span class="token punctuation">.</span>resp<span class="token punctuation">.</span><span class="token function">get_headers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        ngx<span class="token punctuation">.</span>var<span class="token punctuation">.</span>request_query <span class="token operator">=</span> json<span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span>ngx<span class="token punctuation">.</span>req<span class="token punctuation">.</span><span class="token function">get_uri_args</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> # 记录 request query 数据
    <span class="token punctuation">}</span>
    
    # 记录返回body
    set $response_body      <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    body_filter_by_lua_block     <span class="token punctuation">{</span>
        local response_body <span class="token operator">=</span> string<span class="token punctuation">.</span><span class="token function">sub</span><span class="token punctuation">(</span>ngx<span class="token punctuation">.</span>arg<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">10000</span><span class="token punctuation">)</span>
        ngx<span class="token punctuation">.</span>ctx<span class="token punctuation">.</span>buffered <span class="token operator">=</span>  <span class="token punctuation">(</span>ngx<span class="token punctuation">.</span>ctx<span class="token punctuation">.</span>buffered or <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>   <span class="token punctuation">.</span><span class="token punctuation">.</span> response_body  
        <span class="token keyword">if</span> ngx<span class="token punctuation">.</span>arg<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> then
            ngx<span class="token punctuation">.</span>var<span class="token punctuation">.</span>response_body <span class="token operator">=</span> ngx<span class="token punctuation">.</span>ctx<span class="token punctuation">.</span>buffered
        end
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx实现记录mine-qubic-li的所有请求信息" tabindex="-1"><a class="header-anchor" href="#nginx实现记录mine-qubic-li的所有请求信息"><span>Nginx实现记录mine.qubic.li的所有请求信息</span></a></h2><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">user</span>  <span class="token expression">nobody<span class="token punctuation">;</span></span></span>
worker_processes  <span class="token keyword">auto</span><span class="token punctuation">;</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">error</span><span class="token expression">_log  logs<span class="token operator">/</span>error<span class="token punctuation">.</span>log<span class="token punctuation">;</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">error</span><span class="token expression">_log  logs<span class="token operator">/</span>error<span class="token punctuation">.</span>log  notice<span class="token punctuation">;</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">error</span><span class="token expression">_log  logs<span class="token operator">/</span>error<span class="token punctuation">.</span>log  info<span class="token punctuation">;</span></span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">pid</span>        <span class="token expression">logs<span class="token operator">/</span>nginx<span class="token punctuation">.</span>pid<span class="token punctuation">;</span></span></span>


events <span class="token punctuation">{</span>
    worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


http <span class="token punctuation">{</span>
    include       mime<span class="token punctuation">.</span>types<span class="token punctuation">;</span>
    default_type  application<span class="token operator">/</span>octet<span class="token operator">-</span>stream<span class="token punctuation">;</span>

    log_format logbody escape<span class="token operator">=</span>json &#39;$remote_addr <span class="token operator">-</span> $remote_user <span class="token punctuation">[</span>$time_local<span class="token punctuation">]</span> <span class="token string">&quot;$request&quot;</span> $status $body_bytes_sent <span class="token string">&quot;$http_referer&quot;</span> <span class="token string">&quot;$http_user_agent&quot;</span> <span class="token string">&quot;\\n&quot;</span> <span class="token string">&quot;request: $request_body&quot;</span> <span class="token string">&quot;\\n&quot;</span> <span class="token string">&quot;response: $response_body&quot;</span>&#39;<span class="token punctuation">;</span>
    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">log</span><span class="token expression">_format  main  &#39;$remote_addr <span class="token operator">-</span> $remote_user <span class="token punctuation">[</span>$time_local<span class="token punctuation">]</span> </span><span class="token string">&quot;$request&quot;</span> <span class="token expression">&#39;</span></span>
    #                  &#39;$status $body_bytes_sent <span class="token string">&quot;$http_referer&quot;</span> &#39;
    #                  &#39;<span class="token string">&quot;$http_user_agent&quot;</span> <span class="token string">&quot;$http_x_forwarded_for&quot;</span>&#39;<span class="token punctuation">;</span>

    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">access</span><span class="token expression">_log  logs<span class="token operator">/</span>access<span class="token punctuation">.</span>log  main<span class="token punctuation">;</span></span></span>




    sendfile        on<span class="token punctuation">;</span>
    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">tcp</span><span class="token expression">_nopush     on<span class="token punctuation">;</span></span></span>

    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">keepalive</span><span class="token expression">_timeout  <span class="token number">0</span><span class="token punctuation">;</span></span></span>
    keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>

    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">gzip</span>  <span class="token expression">on<span class="token punctuation">;</span></span></span>

    <span class="token macro property"><span class="token directive-hash">#</span> <span class="token directive keyword">server</span> <span class="token expression"><span class="token punctuation">{</span></span></span>
    <span class="token macro property"><span class="token directive-hash">#</span>     <span class="token directive keyword">listen</span>       <span class="token expression"><span class="token number">80</span><span class="token punctuation">;</span></span></span>
    <span class="token macro property"><span class="token directive-hash">#</span>     <span class="token directive keyword">server</span><span class="token expression">_name  localhost<span class="token punctuation">;</span></span></span>

    #     #charset koi8<span class="token operator">-</span>r<span class="token punctuation">;</span>

    #     #access_log  logs<span class="token operator">/</span>host<span class="token punctuation">.</span>access<span class="token punctuation">.</span>log  main<span class="token punctuation">;</span>

    <span class="token macro property"><span class="token directive-hash">#</span>     <span class="token directive keyword">location</span> <span class="token expression"><span class="token operator">/</span> <span class="token punctuation">{</span></span></span>
    <span class="token macro property"><span class="token directive-hash">#</span>         <span class="token directive keyword">root</span>   <span class="token expression">html<span class="token punctuation">;</span></span></span>
    <span class="token macro property"><span class="token directive-hash">#</span>         <span class="token directive keyword">index</span>  <span class="token expression">index<span class="token punctuation">.</span>html index<span class="token punctuation">.</span>htm<span class="token punctuation">;</span></span></span>
    #     <span class="token punctuation">}</span>

    #     #error_page  <span class="token number">404</span>              <span class="token operator">/</span><span class="token number">404.</span>html<span class="token punctuation">;</span>

    #     # redirect server error pages to the <span class="token keyword">static</span> page <span class="token operator">/</span><span class="token number">50</span>x<span class="token punctuation">.</span>html
    #     #
    <span class="token macro property"><span class="token directive-hash">#</span>     <span class="token directive keyword">error</span><span class="token expression">_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  <span class="token operator">/</span><span class="token number">50</span>x<span class="token punctuation">.</span>html<span class="token punctuation">;</span></span></span>
    <span class="token macro property"><span class="token directive-hash">#</span>     <span class="token directive keyword">location</span> <span class="token expression"><span class="token operator">=</span> <span class="token operator">/</span><span class="token number">50</span>x<span class="token punctuation">.</span>html <span class="token punctuation">{</span></span></span>
    <span class="token macro property"><span class="token directive-hash">#</span>         <span class="token directive keyword">root</span>   <span class="token expression">html<span class="token punctuation">;</span></span></span>
    #     <span class="token punctuation">}</span>

    #     # proxy the PHP scripts to Apache listening on <span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">80</span>
    #     #
    #     #location <span class="token operator">~</span> \\<span class="token punctuation">.</span>php$ <span class="token punctuation">{</span>
    #     #    proxy_pass   http<span class="token operator">:</span><span class="token comment">//127.0.0.1;</span>
    #     #<span class="token punctuation">}</span>

    #     # pass the PHP scripts to FastCGI server listening on <span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">9000</span>
    #     #
    #     #location <span class="token operator">~</span> \\<span class="token punctuation">.</span>php$ <span class="token punctuation">{</span>
    #     #    root           html<span class="token punctuation">;</span>
    #     #    fastcgi_pass   <span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">9000</span><span class="token punctuation">;</span>
    #     #    fastcgi_index  index<span class="token punctuation">.</span>php<span class="token punctuation">;</span>
    #     #    fastcgi_param  SCRIPT_FILENAME  <span class="token operator">/</span>scripts$fastcgi_script_name<span class="token punctuation">;</span>
    #     #    include        fastcgi_params<span class="token punctuation">;</span>
    #     #<span class="token punctuation">}</span>

    #     # deny access to <span class="token punctuation">.</span>htaccess files<span class="token punctuation">,</span> <span class="token keyword">if</span> Apache&#39;s document root
    #     # concurs with nginx&#39;s one
    #     #
    #     #location <span class="token operator">~</span> <span class="token operator">/</span>\\<span class="token punctuation">.</span>ht <span class="token punctuation">{</span>
    #     #    deny  all<span class="token punctuation">;</span>
    #     #<span class="token punctuation">}</span>
    # <span class="token punctuation">}</span>


    server <span class="token punctuation">{</span>
            lua_need_request_body on<span class="token punctuation">;</span>
            set $response_body <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
            body_filter_by_lua_block     <span class="token punctuation">{</span>
                local response_body <span class="token operator">=</span> string<span class="token punctuation">.</span><span class="token function">sub</span><span class="token punctuation">(</span>ngx<span class="token punctuation">.</span>arg<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">10000</span><span class="token punctuation">)</span>
                ngx<span class="token punctuation">.</span>ctx<span class="token punctuation">.</span>buffered <span class="token operator">=</span>  <span class="token punctuation">(</span>ngx<span class="token punctuation">.</span>ctx<span class="token punctuation">.</span>buffered or <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>   <span class="token punctuation">.</span><span class="token punctuation">.</span> response_body
                <span class="token keyword">if</span> ngx<span class="token punctuation">.</span>arg<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> then
                    ngx<span class="token punctuation">.</span>var<span class="token punctuation">.</span>response_body <span class="token operator">=</span> ngx<span class="token punctuation">.</span>ctx<span class="token punctuation">.</span>buffered
                end
            <span class="token punctuation">}</span>

        listen <span class="token number">8899</span><span class="token punctuation">;</span>
        root <span class="token operator">/</span>var<span class="token operator">/</span>www<span class="token operator">/</span>html<span class="token punctuation">;</span>

        index index<span class="token punctuation">.</span>html index<span class="token punctuation">.</span>htm index<span class="token punctuation">.</span>nginx<span class="token operator">-</span>debian<span class="token punctuation">.</span>html<span class="token punctuation">;</span>

        server_name     qb<span class="token punctuation">.</span>myauth<span class="token punctuation">.</span>top<span class="token punctuation">;</span>

        proxy_set_header Host mine<span class="token punctuation">.</span>qubic<span class="token punctuation">.</span>li<span class="token punctuation">;</span>
            proxy_set_header X<span class="token operator">-</span>Real<span class="token operator">-</span>IP $remote_addr<span class="token punctuation">;</span>
            proxy_set_header x<span class="token operator">-</span>forwarded<span class="token operator">-</span><span class="token keyword">for</span>  $remote_addr<span class="token punctuation">;</span>

            access_log logs<span class="token operator">/</span>proxy_log_detail<span class="token punctuation">.</span>log logbody<span class="token punctuation">;</span>

        location <span class="token operator">/</span> <span class="token punctuation">{</span>

                proxy_pass https<span class="token operator">:</span><span class="token comment">//mine.qubic.li;</span>
                 proxy_ssl_server_name on<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token macro property"><span class="token directive-hash">#</span> <span class="token directive keyword">another</span> <span class="token expression">virtual host using mix of IP<span class="token operator">-</span><span class="token punctuation">,</span> name<span class="token operator">-</span><span class="token punctuation">,</span> and port<span class="token operator">-</span>based configuration</span></span>
    #
    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">server</span> <span class="token expression"><span class="token punctuation">{</span></span></span>
    <span class="token macro property"><span class="token directive-hash">#</span>    <span class="token directive keyword">listen</span>       <span class="token expression"><span class="token number">8000</span><span class="token punctuation">;</span></span></span>
    <span class="token macro property"><span class="token directive-hash">#</span>    <span class="token directive keyword">listen</span>       <span class="token expression">somename<span class="token operator">:</span><span class="token number">8080</span><span class="token punctuation">;</span></span></span>
    <span class="token macro property"><span class="token directive-hash">#</span>    <span class="token directive keyword">server</span><span class="token expression">_name  somename  alias  another<span class="token punctuation">.</span>alias<span class="token punctuation">;</span></span></span>

    <span class="token macro property"><span class="token directive-hash">#</span>    <span class="token directive keyword">location</span> <span class="token expression"><span class="token operator">/</span> <span class="token punctuation">{</span></span></span>
    <span class="token macro property"><span class="token directive-hash">#</span>        <span class="token directive keyword">root</span>   <span class="token expression">html<span class="token punctuation">;</span></span></span>
    <span class="token macro property"><span class="token directive-hash">#</span>        <span class="token directive keyword">index</span>  <span class="token expression">index<span class="token punctuation">.</span>html index<span class="token punctuation">.</span>htm<span class="token punctuation">;</span></span></span>
    #    <span class="token punctuation">}</span>
    #<span class="token punctuation">}</span>


    <span class="token macro property"><span class="token directive-hash">#</span> <span class="token expression">HTTPS server</span></span>
    #
    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">server</span> <span class="token expression"><span class="token punctuation">{</span></span></span>
    <span class="token macro property"><span class="token directive-hash">#</span>    <span class="token directive keyword">listen</span>       <span class="token expression"><span class="token number">443</span> ssl<span class="token punctuation">;</span></span></span>
    <span class="token macro property"><span class="token directive-hash">#</span>    <span class="token directive keyword">server</span><span class="token expression">_name  localhost<span class="token punctuation">;</span></span></span>

    <span class="token macro property"><span class="token directive-hash">#</span>    <span class="token directive keyword">ssl</span><span class="token expression">_certificate      cert<span class="token punctuation">.</span>pem<span class="token punctuation">;</span></span></span>
    <span class="token macro property"><span class="token directive-hash">#</span>    <span class="token directive keyword">ssl</span><span class="token expression">_certificate_key  cert<span class="token punctuation">.</span>key<span class="token punctuation">;</span></span></span>

    <span class="token macro property"><span class="token directive-hash">#</span>    <span class="token directive keyword">ssl</span><span class="token expression">_session_cache    shared<span class="token operator">:</span>SSL<span class="token operator">:</span><span class="token number">1</span>m<span class="token punctuation">;</span></span></span>
    <span class="token macro property"><span class="token directive-hash">#</span>    <span class="token directive keyword">ssl</span><span class="token expression">_session_timeout  <span class="token number">5</span>m<span class="token punctuation">;</span></span></span>

    <span class="token macro property"><span class="token directive-hash">#</span>    <span class="token directive keyword">ssl</span><span class="token expression">_ciphers  HIGH<span class="token operator">:</span><span class="token operator">!</span>aNULL<span class="token operator">:</span><span class="token operator">!</span>MD5<span class="token punctuation">;</span></span></span>
    <span class="token macro property"><span class="token directive-hash">#</span>    <span class="token directive keyword">ssl</span><span class="token expression">_prefer_server_ciphers  on<span class="token punctuation">;</span></span></span>

    <span class="token macro property"><span class="token directive-hash">#</span>    <span class="token directive keyword">location</span> <span class="token expression"><span class="token operator">/</span> <span class="token punctuation">{</span></span></span>
    <span class="token macro property"><span class="token directive-hash">#</span>        <span class="token directive keyword">root</span>   <span class="token expression">html<span class="token punctuation">;</span></span></span>
    <span class="token macro property"><span class="token directive-hash">#</span>        <span class="token directive keyword">index</span>  <span class="token expression">index<span class="token punctuation">.</span>html index<span class="token punctuation">.</span>htm<span class="token punctuation">;</span></span></span>
    #    <span class="token punctuation">}</span>
    #<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function w(f,q){const e=p("ExternalLinkIcon");return o(),l("div",null,[r,n("p",null,[n("a",d,[s("为CentOS/RHEL等发行版中的systemd服务配置ulimit限制 - 知乎 (zhihu.com)"),i(e)])]),u,n("p",null,[s("那么问题来了：对于"),v,s("，到底是否依旧沿用PAM模块实现资源限制呢？我在RedHat Bugzilla找到了Systemd最初被引入时的一篇Ticket："),n("a",k,[s("Bug 754285 - Hint that /etc/security/limits.conf does not apply to systemd services"),i(e)]),s("。帖子中提到了一模一样的问题。Systemd的作者之一Kay Sievers当时给与了以下回复：")]),m,n("p",null,[s("配置"),n("a",b,[s("nginx"),i(e)]),s("配置文件default.conf ，使用nginx内置变量 $host 和$request即可获得url数据")]),h,n("h2",g,[n("a",y,[n("span",null,[s("log文件记录请求body和"),n("a",_,[s("header"),i(e)])])])]),x])}const L=t(c,[["render",w],["__file","Nginx配置案例.html.vue"]]),$=JSON.parse('{"path":"/note-book/Nginx-OpenResty/Nginx%E9%85%8D%E7%BD%AE%E6%A1%88%E4%BE%8B.html","title":"Nginx配置案例","lang":"zh-CN","frontmatter":{"description":"Nginx配置案例 book.itrusts.top.conf 实例 配置密码 log-html.conf log-html.pass root_admin.conf roota_dmin.pass Lua动态模块set_by_lua_block，解决bind ipv6 Nginx限速 Nginx 实现偷站Windy.com DNS解析 nginx 配...","head":[["meta",{"property":"og:url","content":"https://paper-dragon.github.io/note-book/Nginx-OpenResty/Nginx%E9%85%8D%E7%BD%AE%E6%A1%88%E4%BE%8B.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"Nginx配置案例"}],["meta",{"property":"og:description","content":"Nginx配置案例 book.itrusts.top.conf 实例 配置密码 log-html.conf log-html.pass root_admin.conf roota_dmin.pass Lua动态模块set_by_lua_block，解决bind ipv6 Nginx限速 Nginx 实现偷站Windy.com DNS解析 nginx 配..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-22T06:21:26.000Z"}],["meta",{"property":"article:author","content":"PaperDragon"}],["meta",{"property":"article:modified_time","content":"2024-03-22T06:21:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Nginx配置案例\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-22T06:21:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"book.itrusts.top.conf","slug":"book-itrusts-top-conf","link":"#book-itrusts-top-conf","children":[]},{"level":2,"title":"配置密码","slug":"配置密码","link":"#配置密码","children":[]},{"level":2,"title":"log-html.conf","slug":"log-html-conf","link":"#log-html-conf","children":[]},{"level":2,"title":"root_admin.conf","slug":"root-admin-conf","link":"#root-admin-conf","children":[]},{"level":2,"title":"Lua动态模块set_by_lua_block，解决bind ipv6","slug":"lua动态模块set-by-lua-block-解决bind-ipv6","link":"#lua动态模块set-by-lua-block-解决bind-ipv6","children":[]},{"level":2,"title":"Nginx限速","slug":"nginx限速","link":"#nginx限速","children":[]},{"level":2,"title":"Nginx 实现偷站Windy.com","slug":"nginx-实现偷站windy-com","link":"#nginx-实现偷站windy-com","children":[]},{"level":2,"title":"nginx实现缓存服务器","slug":"nginx实现缓存服务器","link":"#nginx实现缓存服务器","children":[]},{"level":2,"title":"Nginx Stream模块的日志配置","slug":"nginx-stream模块的日志配置","link":"#nginx-stream模块的日志配置","children":[]},{"level":2,"title":"Nginx Stream实现四层网络连续端口批量代理","slug":"nginx-stream实现四层网络连续端口批量代理","link":"#nginx-stream实现四层网络连续端口批量代理","children":[]},{"level":2,"title":"Nginx在yum和apt安装，超过1015个端口监听","slug":"nginx在yum和apt安装-超过1015个端口监听","link":"#nginx在yum和apt安装-超过1015个端口监听","children":[]},{"level":2,"title":"日志轮转切割","slug":"日志轮转切割","link":"#日志轮转切割","children":[]},{"level":2,"title":"log文件记录请求url","slug":"log文件记录请求url","link":"#log文件记录请求url","children":[]},{"level":2,"title":"log文件记录请求body和header","slug":"log文件记录请求body和header","link":"#log文件记录请求body和header","children":[]},{"level":2,"title":"log文件记录返回body和header","slug":"log文件记录返回body和header","link":"#log文件记录返回body和header","children":[]},{"level":2,"title":"Nginx实现记录mine.qubic.li的所有请求信息","slug":"nginx实现记录mine-qubic-li的所有请求信息","link":"#nginx实现记录mine-qubic-li的所有请求信息","children":[]}],"git":{"createdTime":1711088486000,"updatedTime":1711088486000,"contributors":[{"name":"PaperDragon-SH","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":11.3,"words":3389},"filePathRelative":"note-book/Nginx-OpenResty/Nginx配置案例.md","localizedDate":"2024年3月22日","excerpt":"\\n<h2>book.itrusts.top.conf</h2>\\n<pre><code>server {\\n    listen 80;\\n   listen 443 ssl http2;\\n    server_name book.itools.top book.itrusts.top book.todesk.top 42.192.117.251;\\n    index index.php index.html index.htm default.php default.htm default.html;\\n    root /www/wwwroot/book.itools.top;\\n\\n    #SSL-START SSL相关配置，请勿删除或修改下一行带注释的404规则\\n    #error_page 404/404.html;\\n    ssl_certificate    /www/server/panel/vhost/cert/book.itools.top/fullchain.pem;\\n    ssl_certificate_key    /www/server/panel/vhost/cert/book.itools.top/privkey.pem;\\n    ssl_protocols TLSv1.1 TLSv1.2 TLSv1.3;\\n    ssl_ciphers EECDH+CHACHA20:EECDH+CHACHA20-draft:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5;\\n    ssl_prefer_server_ciphers on;\\n    ssl_session_cache shared:SSL:10m;\\n    ssl_session_timeout 10m;\\n    add_header Strict-Transport-Security \\"max-age=31536000\\";\\n    error_page 497  https://$host$request_uri;\\n\\n    #SSL-END\\n   #Directory protection rules, do not manually delete\\n   include /www/server/panel/vhost/nginx/dir_auth/book.itools.top/*.conf;\\n\\n    #ERROR-PAGE-START  错误页配置，可以注释、删除或修改\\n    #error_page 404 /404.html;\\n    #error_page 502 /502.html;\\n    #ERROR-PAGE-END\\n\\n    #PHP-INFO-START  PHP引用配置，可以注释或修改\\n    include enable-php-00.conf;\\n    #PHP-INFO-END\\n\\n    #REWRITE-START URL重写规则引用,修改后将导致面板设置的伪静态规则失效\\n    include /www/server/panel/vhost/rewrite/book.itools.top.conf;\\n    #REWRITE-END\\n\\n    #禁止访问的文件或目录\\n    location ~ ^/(\\\\.user.ini|\\\\.htaccess|\\\\.git|\\\\.svn|\\\\.project|LICENSE|README.md)\\n    {\\n        return 404;\\n    }\\n\\n    #一键申请SSL证书验证目录相关设置\\n    location ~ \\\\.well-known{\\n        allow all;\\n    }\\n\\n    location ~ .*\\\\.(gif|jpg|jpeg|png|bmp|swf)$\\n    {\\n        expires      30d;\\n        error_log /dev/null;\\n        access_log /dev/null;\\n    }\\n\\n    location ~ .*\\\\.(js|css)?$\\n    {\\n        expires      12h;\\n        error_log /dev/null;\\n        access_log /dev/null;\\n    }\\n    access_log  /www/wwwlogs/book.itools.top.log;\\n    error_log  /www/wwwlogs/book.itools.top.error.log;\\n}\\n</code></pre>","autoDesc":true}');export{L as comp,$ as data};
