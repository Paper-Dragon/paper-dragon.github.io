import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as e,d as a}from"./app-DqMXvwsT.js";const i={},t=a(`<h1 id="nginx的负载均衡和故障转移" tabindex="-1"><a class="header-anchor" href="#nginx的负载均衡和故障转移"><span>Nginx的负载均衡和故障转移</span></a></h1><h2 id="_1、轮询-默认" tabindex="-1"><a class="header-anchor" href="#_1、轮询-默认"><span>1、轮询（默认）</span></a></h2><p>每个请求按时间顺序逐一分配到不同的后端服务器，如果后端服务器down掉，能自动剔除。</p><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">upstream</span> tomcatserver</span> <span class="token punctuation">{</span>
                      <span class="token directive"><span class="token keyword">server</span> 11.11.11.11:8081</span> <span class="token punctuation">;</span>
                      <span class="token directive"><span class="token keyword">server</span> 12.12.12.12:8082</span> <span class="token punctuation">;</span>
					  <span class="token directive"><span class="token keyword">server</span> 13.13.13.13:8083</span> <span class="token punctuation">;</span>
					  <span class="token directive"><span class="token keyword">server</span> 14.14.14.14:8085</span> <span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">8080</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server_name</span>  localhost</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">root</span>   html</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">index</span>  index.html index.htm</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token directive"><span class="token keyword">location</span> /smartupdate</span> <span class="token punctuation">{</span>
            <span class="token comment">#proxy_pass   http://11.12.12.12:8081;</span>
			<span class="token directive"><span class="token keyword">proxy_pass</span>   http://tomcatserver</span><span class="token punctuation">;</span>
			<span class="token directive"><span class="token keyword">proxy_set_header</span>  Host <span class="token variable">$host</span>:8080</span><span class="token punctuation">;</span>
			<span class="token comment">#proxy_connect_timeout 20000;</span>
            <span class="token directive"><span class="token keyword">index</span>  index.html index.htm</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token directive"><span class="token keyword">error_page</span>   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> = /50x.html</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">root</span>   html</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、weight" tabindex="-1"><a class="header-anchor" href="#_2、weight"><span>2、weight</span></a></h2><p>指定轮询几率，weight和访问比率成正比，用于后端服务器性能不均的情况。</p><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">upstream</span> backserver</span> <span class="token punctuation">{</span> 
	<span class="token directive"><span class="token keyword">server</span> 192.168.0.14 weight=10</span><span class="token punctuation">;</span> 
	<span class="token directive"><span class="token keyword">server</span> 192.168.0.15 weight=10</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、ip-hash" tabindex="-1"><a class="header-anchor" href="#_3、ip-hash"><span>3、ip_hash</span></a></h2><p>每个请求按访问ip的hash结果分配，这样每个访客固定访问一个后端服务器，可以解决session的问题。</p><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">upstream</span> bakend</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">ip_hash</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server</span> 192.168.203.14:88</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server</span> 192.168.203.15:80</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4、fair-第三方" tabindex="-1"><a class="header-anchor" href="#_4、fair-第三方"><span>4、fair（第三方）</span></a></h2><p>按后端服务器的响应时间来分配请求，响应时间短的优先分配。</p><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">upstream</span> backserver</span> <span class="token punctuation">{</span> 
	<span class="token directive"><span class="token keyword">server</span> server1</span><span class="token punctuation">;</span> 
	<span class="token directive"><span class="token keyword">server</span> server2</span><span class="token punctuation">;</span> 
	<span class="token directive"><span class="token keyword">fair</span></span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5、url-hash-第三方" tabindex="-1"><a class="header-anchor" href="#_5、url-hash-第三方"><span>5、url_hash（第三方）</span></a></h2><p>按访问url的hash结果来分配请求，使每个url定向到同一个后端服务器，后端服务器为缓存时比较有效。</p><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">upstream</span> backserver</span> <span class="token punctuation">{</span> 
	<span class="token directive"><span class="token keyword">server</span> squid1:3128</span><span class="token punctuation">;</span> 
	<span class="token directive"><span class="token keyword">server</span> squid2:3128</span><span class="token punctuation">;</span> 
	<span class="token directive"><span class="token keyword">hash</span> <span class="token variable">$request_uri</span></span><span class="token punctuation">;</span> 
	<span class="token directive"><span class="token keyword">hash_method</span> crc32</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6、负载均衡-故障转移的的配置" tabindex="-1"><a class="header-anchor" href="#_6、负载均衡-故障转移的的配置"><span>6、负载均衡&amp;故障转移的的配置 ：</span></a></h2><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code> 
<span class="token directive"><span class="token keyword">worker_processes</span>  <span class="token number">1</span></span><span class="token punctuation">;</span>
 
<span class="token directive"><span class="token keyword">events</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">worker_connections</span>  <span class="token number">1024</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment"># https://www.jianshu.com/p/4c250c1cd6cd</span>
<span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
	<span class="token comment"># 1. 轮询模式</span>
	<span class="token comment"># upstream  ban-server {</span>
    <span class="token comment">#    server    localhost:8086;</span>
    <span class="token comment">#    server    localhost:8087;</span>
    <span class="token comment"># }</span>
	
	<span class="token comment"># 2. 权重模式</span>
	<span class="token comment"># upstream  ban-server {</span>
    <span class="token comment">#    server    localhost:8086 weight=1;</span>
    <span class="token comment">#    server    localhost:8087 weight=2;</span>
    <span class="token comment"># }</span>
	
	<span class="token comment"># max_fails = number; # 熔断机制的错误次数 阈值（默认1）</span>
	<span class="token comment"># fail_timeout = time #熔断时间（nginx标记服务器不可用的持续时间，默认10s）</span>
	<span class="token comment"># 示例： server 192.168.1.100 max_fails=3 fail_timeout= 10s;</span>
	
 	   <span class="token comment">#server localhost:8091 max_fails=1 fail_timeout=60s;</span>
　　　　<span class="token comment">#server localhost:8092 max_fails=1 fail_timeout=60s;</span>
　　　　<span class="token comment">#server localhost:8093 max_fails=1 fail_timeout=60s;</span>
　　　　
	<span class="token comment"># 3. iphash  </span>
	<span class="token directive"><span class="token keyword">upstream</span>  ban-server</span> <span class="token punctuation">{</span>
	   <span class="token comment"># ip_hash; </span>
       <span class="token directive"><span class="token keyword">server</span> localhost:8086 weight=1 max_fails=3 fail_timeout=20s</span><span class="token punctuation">;</span>
       <span class="token directive"><span class="token keyword">server</span> localhost:8087 weight=2 max_fails=3 fail_timeout=20s</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token directive"><span class="token keyword">include</span>       mime.types</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">default_type</span>  application/octet-stream</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">sendfile</span>        <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">keepalive_timeout</span>  <span class="token number">65</span></span><span class="token punctuation">;</span>
 
    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">8080</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server_name</span>  localhost</span><span class="token punctuation">;</span>
 
      <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
		<span class="token comment">#故障转移的条件：如果后端的服务器返回502、504、执行超时等错误，自动将请求转发到upstream负载均衡池中的另一台服务器，实现故障转移。  </span>
		<span class="token directive"><span class="token keyword">proxy_next_upstream</span> http_502 http_504 error timeout invalid_header</span> <span class="token punctuation">;</span>  
		<span class="token directive"><span class="token keyword">proxy_send_timeout</span> <span class="token number">60s</span></span><span class="token punctuation">;</span>    <span class="token comment"># 代理发送超时时间</span>
		<span class="token directive"><span class="token keyword">proxy_read_timeout</span> <span class="token number">60s</span></span><span class="token punctuation">;</span>    <span class="token comment"># 代理接收超时时间</span>
		<span class="token directive"><span class="token keyword">proxy_next_upstream_tries</span> <span class="token number">3</span></span><span class="token punctuation">;</span>      <span class="token comment"># 重试次数(针对当前超时、不可用节点的重试次数)</span>
		
		<span class="token directive"><span class="token keyword">proxy_pass</span> http://ban-server</span><span class="token punctuation">;</span>
		<span class="token directive"><span class="token keyword">proxy_redirect</span> default</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
 
      <span class="token comment">#error_page   500 502 503 504  /50x.html;</span>
      <span class="token comment">#location = /50x.html {</span>
      <span class="token comment">#    root   html;</span>
      <span class="token comment">#}</span>
 
    <span class="token punctuation">}</span>
 
<span class="token punctuation">}</span>

	
注释说明:　
例如:
　　<span class="token directive"><span class="token keyword">upstream</span> bakend</span>
　　<span class="token punctuation">{</span><span class="token comment">#定义负载均衡设备的Ip及设备状态</span>
	<span class="token directive"><span class="token keyword">server</span> 127.0.0.1:9090 down</span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">server</span> 127.0.0.1:8080 weight=2</span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">server</span> 127.0.0.1:6060</span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">server</span> 127.0.0.1:7070 backup</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token directive"><span class="token keyword">proxy_connect_timeout</span> <span class="token number">3</span></span><span class="token punctuation">;</span><span class="token comment">#后端服务器连接的超时时间_发起握手等候响应超时时间</span>
　　<span class="token directive"><span class="token keyword">proxy_read_timeout</span> <span class="token number">3</span></span><span class="token punctuation">;</span><span class="token comment">#连接成功后等候后端服务器响应时间其实已经进入后端的排队之中等候处理（也可以说是后端服务器处理请求的时间）</span>
　　<span class="token directive"><span class="token keyword">proxy_send_timeout</span> <span class="token number">3</span></span><span class="token punctuation">;</span><span class="token comment">#后端服务器数据回传时间_就是在规定时间之内后端服务器必须传完所有的数据</span>
　　
	upstream: 还可以为每个设备设置状态值，这些状态值的含义分别如下：
	down: 表示单前的server暂时不参与负载.
	weight: 默认为1.weight越大，负载的权重就越大。
	max_fails: 允许请求失败的次数默认为1.当超过最大次数时，返回proxy_next_upstream 模块定义的错误.
	fail_timeout: max_fails次失败后，暂停的时间。
	backup: 其它所有的非backup机器down或者忙的时候，请求backup机器。所以这台机器压力会最轻。



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx常用的超时配置说明" tabindex="-1"><a class="header-anchor" href="#nginx常用的超时配置说明"><span>Nginx常用的超时配置说明:</span></a></h2><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code>client_header_timeout
语法 client_header_timeout time
默认值 60s
上下文 http server

说明 指定等待client发送一个请求头的超时时间（例如：GET / HTTP/1.1）.仅当在一次read中，没有收到请求头，才会算成超时。如果在超时时间内，client没发送任何东西，nginx返回HTTP状态码408(“Request timed out”)

client_body_timeout
语法 client_body_timeout time
默认值 60s
上下文 http server location

说明 该指令设置请求体（request body）的读超时时间。仅当在一次readstep中，没有得到请求体，就会设为超时。超时后，nginx返回HTTP状态码408(“Request timed out”)

keepalive_timeout
语法 keepalive_timeout timeout [ header_timeout ]
默认值 75s
上下文 http server location

说明 第一个参数指定了与client的keep-alive连接超时时间。服务器将会在这个时间后关闭连接。可选的第二个参数指定了在响应头Keep-Alive: timeout=time中的time值。这个头能够让一些浏览器主动关闭连接，这样服务器就不必要去关闭连接了。没有这个参数，nginx不会发送Keep-Alive响应头（尽管并不是由这个头来决定连接是否“keep-alive”）
两个参数的值可并不相同

注意不同浏览器怎么处理“keep-alive”头
MSIE和Opera忽略掉&quot;Keep-Alive: timeout=&lt;N&gt;&quot; header.
MSIE保持连接大约60-65秒，然后发送TCP RST
Opera永久保持长连接
Mozilla keeps the connection alive for N plus about 1-10 seconds.
Konqueror保持长连接N秒

lingering_timeout
语法 lingering_timeout time
默认值 5s
上下文 http server location

说明 lingering_close生效后，在关闭连接前，会检测是否有用户发送的数据到达服务器，如果超过lingering_timeout时间后还没有数据可读，就直接关闭连接；否则，必须在读取完连接缓冲区上的数据并丢弃掉后才会关闭连接。

resolver_timeout
语法 resolver_timeout time
默认值 30s
上下文 http server location

说明 该指令设置DNS解析超时时间

proxy_connect_timeout
语法 proxy_connect_timeout time
默认值 60s
上下文 http server location

说明 该指令设置与upstream server的连接超时时间，有必要记住，这个超时不能超过75秒。
这个不是等待后端返回页面的时间，那是由proxy_read_timeout声明的。如果你的upstream服务器起来了，但是hanging住了（例如，没有足够的线程处理请求，所以把你的请求放到请求池里稍后处理），那么这个声明是没有用的，由于与upstream服务器的连接已经建立了。

proxy_read_timeout
语法 proxy_read_timeout time
默认值 60s
上下文 http server location
说明 该指令设置与代理服务器的读超时时间。它决定了nginx会等待多长时间来获得请求的响应。这个时间不是获得整个response的时间，而是两次reading操作的时间。

proxy_send_timeout

语法 proxy_send_timeout time
默认值 60s
上下文 http server location
说明 这个指定设置了发送请求给upstream服务器的超时时间。超时设置不是为了整个发送期间，而是在两次write操作期间。如果超时后，upstream没有收到新的数据，nginx会关闭连接

proxy_upstream_fail_timeout（fail_timeout）

语法 server address [fail_timeout=30s]
默认值 10s
上下文 upstream
说明 Upstream模块下 server指令的参数，设置了某一个upstream后端失败了指定次数（max_fails）后，该后端不可操作的时间，默认为10秒

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),l=[t];function p(c,o){return e(),s("div",null,l)}const v=n(i,[["render",p],["__file","Nginx的负载均衡和故障转移.html.vue"]]),u=JSON.parse('{"path":"/note-book/Nginx-OpenResty/Nginx%E7%9A%84%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1%E5%92%8C%E6%95%85%E9%9A%9C%E8%BD%AC%E7%A7%BB.html","title":"Nginx的负载均衡和故障转移","lang":"zh-CN","frontmatter":{"description":"Nginx的负载均衡和故障转移 1、轮询（默认） 每个请求按时间顺序逐一分配到不同的后端服务器，如果后端服务器down掉，能自动剔除。 2、weight 指定轮询几率，weight和访问比率成正比，用于后端服务器性能不均的情况。 3、ip_hash 每个请求按访问ip的hash结果分配，这样每个访客固定访问一个后端服务器，可以解决session的问题。...","head":[["meta",{"property":"og:url","content":"https://paper-dragon.github.io/note-book/Nginx-OpenResty/Nginx%E7%9A%84%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1%E5%92%8C%E6%95%85%E9%9A%9C%E8%BD%AC%E7%A7%BB.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"Nginx的负载均衡和故障转移"}],["meta",{"property":"og:description","content":"Nginx的负载均衡和故障转移 1、轮询（默认） 每个请求按时间顺序逐一分配到不同的后端服务器，如果后端服务器down掉，能自动剔除。 2、weight 指定轮询几率，weight和访问比率成正比，用于后端服务器性能不均的情况。 3、ip_hash 每个请求按访问ip的hash结果分配，这样每个访客固定访问一个后端服务器，可以解决session的问题。..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-09T09:29:43.000Z"}],["meta",{"property":"article:author","content":"PaperDragon"}],["meta",{"property":"article:modified_time","content":"2024-03-09T09:29:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Nginx的负载均衡和故障转移\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-09T09:29:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"1、轮询（默认）","slug":"_1、轮询-默认","link":"#_1、轮询-默认","children":[]},{"level":2,"title":"2、weight","slug":"_2、weight","link":"#_2、weight","children":[]},{"level":2,"title":"3、ip_hash","slug":"_3、ip-hash","link":"#_3、ip-hash","children":[]},{"level":2,"title":"4、fair（第三方）","slug":"_4、fair-第三方","link":"#_4、fair-第三方","children":[]},{"level":2,"title":"5、url_hash（第三方）","slug":"_5、url-hash-第三方","link":"#_5、url-hash-第三方","children":[]},{"level":2,"title":"6、负载均衡&故障转移的的配置 ：","slug":"_6、负载均衡-故障转移的的配置","link":"#_6、负载均衡-故障转移的的配置","children":[]},{"level":2,"title":"Nginx常用的超时配置说明:","slug":"nginx常用的超时配置说明","link":"#nginx常用的超时配置说明","children":[]}],"git":{"createdTime":1691939318000,"updatedTime":1709976583000,"contributors":[{"name":"PaperDragon","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":5.79,"words":1737},"filePathRelative":"note-book/Nginx-OpenResty/Nginx的负载均衡和故障转移.md","localizedDate":"2023年8月13日","excerpt":"\\n<h2>1、轮询（默认）</h2>\\n<p>每个请求按时间顺序逐一分配到不同的后端服务器，如果后端服务器down掉，能自动剔除。</p>\\n<div class=\\"language-nginx\\" data-ext=\\"nginx\\" data-title=\\"nginx\\"><pre class=\\"language-nginx\\"><code><span class=\\"token directive\\"><span class=\\"token keyword\\">upstream</span> tomcatserver</span> <span class=\\"token punctuation\\">{</span>\\n                      <span class=\\"token directive\\"><span class=\\"token keyword\\">server</span> 11.11.11.11:8081</span> <span class=\\"token punctuation\\">;</span>\\n                      <span class=\\"token directive\\"><span class=\\"token keyword\\">server</span> 12.12.12.12:8082</span> <span class=\\"token punctuation\\">;</span>\\n\\t\\t\\t\\t\\t  <span class=\\"token directive\\"><span class=\\"token keyword\\">server</span> 13.13.13.13:8083</span> <span class=\\"token punctuation\\">;</span>\\n\\t\\t\\t\\t\\t  <span class=\\"token directive\\"><span class=\\"token keyword\\">server</span> 14.14.14.14:8085</span> <span class=\\"token punctuation\\">;</span>\\n                    <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token directive\\"><span class=\\"token keyword\\">server</span></span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token directive\\"><span class=\\"token keyword\\">listen</span>       <span class=\\"token number\\">8080</span></span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token directive\\"><span class=\\"token keyword\\">server_name</span>  localhost</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token directive\\"><span class=\\"token keyword\\">location</span> /</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token directive\\"><span class=\\"token keyword\\">root</span>   html</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token directive\\"><span class=\\"token keyword\\">index</span>  index.html index.htm</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token directive\\"><span class=\\"token keyword\\">location</span> /smartupdate</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token comment\\">#proxy_pass   http://11.12.12.12:8081;</span>\\n\\t\\t\\t<span class=\\"token directive\\"><span class=\\"token keyword\\">proxy_pass</span>   http://tomcatserver</span><span class=\\"token punctuation\\">;</span>\\n\\t\\t\\t<span class=\\"token directive\\"><span class=\\"token keyword\\">proxy_set_header</span>  Host <span class=\\"token variable\\">$host</span>:8080</span><span class=\\"token punctuation\\">;</span>\\n\\t\\t\\t<span class=\\"token comment\\">#proxy_connect_timeout 20000;</span>\\n            <span class=\\"token directive\\"><span class=\\"token keyword\\">index</span>  index.html index.htm</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token directive\\"><span class=\\"token keyword\\">error_page</span>   <span class=\\"token number\\">500</span> <span class=\\"token number\\">502</span> <span class=\\"token number\\">503</span> <span class=\\"token number\\">504</span>  /50x.html</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token directive\\"><span class=\\"token keyword\\">location</span> = /50x.html</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token directive\\"><span class=\\"token keyword\\">root</span>   html</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n</code></pre></div>","autoDesc":true}');export{v as comp,u as data};
