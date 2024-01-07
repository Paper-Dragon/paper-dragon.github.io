import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,e}from"./app-h9-08tXU.js";const t="/assets/image-20211109120422697-UNvA0GEU.png",i="/assets/image-20211109120844510-9COK2J3L.png",p="/assets/image-20211109132501205-BJl83WRd.png",l={},o=e(`<h1 id="nginx高级进阶篇" tabindex="-1"><a class="header-anchor" href="#nginx高级进阶篇" aria-hidden="true">#</a> Nginx高级进阶篇</h1><h2 id="nginx-web服务器" tabindex="-1"><a class="header-anchor" href="#nginx-web服务器" aria-hidden="true">#</a> Nginx Web服务器</h2><h2 id="nginx-proxy-服务器" tabindex="-1"><a class="header-anchor" href="#nginx-proxy-服务器" aria-hidden="true">#</a> Nginx Proxy 服务器</h2><h3 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h3><h4 id="正向代理" tabindex="-1"><a class="header-anchor" href="#正向代理" aria-hidden="true">#</a> 正向代理</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>内网客户机通过代理访问互联网，通常需要设置代理服务器的地址和端口
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+t+`" alt="image-20211109120422697" tabindex="0" loading="lazy"><figcaption>image-20211109120422697</figcaption></figure><p>squid：</p><h4 id="反向代理" tabindex="-1"><a class="header-anchor" href="#反向代理" aria-hidden="true">#</a> 反向代理</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>外网用户通过代理访问内网服务器，内网服务器无感知
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+i+`" alt="image-20211109120844510" tabindex="0" loading="lazy"><figcaption>image-20211109120844510</figcaption></figure><h4 id="正向代理和反向代理的区别是什么" tabindex="-1"><a class="header-anchor" href="#正向代理和反向代理的区别是什么" aria-hidden="true">#</a> 正向代理和反向代理的区别是什么</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>--------正代--------
<span class="token number">1</span>. 为客户端做代理,代理客户端去访问后方的Web服务器<span class="token punctuation">(</span>VPN翻墙<span class="token punctuation">)</span>
<span class="token number">2</span>. 任何可以连接到该代理服务器的软件，就可以通过代理访问任何的其他服务器，然后把数据返回给客户端

--------反代--------
<span class="token number">1</span>. 为服务器做代理,代理服务器接受用户的请求,能够将用户的请求平均分发给后方的Web集群。
<span class="token number">2</span>. 具有缓冲服务器内容的空间,会将一些简单的用户请求数据存储到本地,让用户能够快速得到信息。
<span class="token number">3</span>. 用户与服务器之间是无感知的,是通过反代进行联系在一起,反代会去监听双方的状态
   客户端向服务端请求数据时,发送完http请求后关机了,这时我们的服务器没有感知,但反代通过监    
   听状态会直接将客户端的请求丢弃,不在后方的web服务器发送,避免的垃圾信息的网络拥塞。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="proxy代理" tabindex="-1"><a class="header-anchor" href="#proxy代理" aria-hidden="true">#</a> Proxy代理</h3><h4 id="模块" tabindex="-1"><a class="header-anchor" href="#模块" aria-hidden="true">#</a> 模块</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ngx_http_proxy_module
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h4><p>代理</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Syntax: 	proxy_pass URL<span class="token punctuation">;</span> 代理后端服务器URL
Default: 	—
Context: 	location, <span class="token keyword">if</span> <span class="token keyword">in</span> location, limit_except
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>缓冲区</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Syntax: 	proxy_buffering on <span class="token operator">|</span> off<span class="token punctuation">;</span> 缓冲开关
Default: 	proxy_buffering on<span class="token punctuation">;</span>
Context: 	http, server, location	
proxy_buffing 开启的情况下，nginx后吧后端返回的内容先放到缓冲区当中，然后再返回给客户端（边收边传）

Syntax: 	proxy_buffer_size size<span class="token punctuation">;</span> 缓冲区大小
Default: 	proxy_buffer_size 4k<span class="token operator">|</span>8k<span class="token punctuation">;</span>
Context: 	http, server, location

Syntax: 	proxy_buffers number size<span class="token punctuation">;</span> 缓冲区数量
Default: 	proxy_buffers <span class="token number">8</span> 4k<span class="token operator">|</span>8k<span class="token punctuation">;</span>
Context: 	http, server, location

Syntax: 	proxy_busy_buffers_size size<span class="token punctuation">;</span> 忙碌的缓冲区大小，控制同时传给客户端的buffer的数量
Default: 	proxy_busy_buffers_size 8k<span class="token operator">|</span>16k<span class="token punctuation">;</span>
Context: 	http, server, location

Syntax: 	proxy_set_header field value<span class="token punctuation">;</span> 设置真实客户端地址
Default: 	proxy_set_header Host <span class="token variable">$proxy_host</span><span class="token punctuation">;</span>
			proxy_set_header Connection close<span class="token punctuation">;</span>
Context: 	http, server, location

Syntax: 	proxy_connect_timeout <span class="token function">time</span><span class="token punctuation">;</span>
Default: 	proxy_connect_timeout 60s<span class="token punctuation">;</span>
Context: 	http, server, location

Syntax: 	proxy_send_timeout <span class="token function">time</span><span class="token punctuation">;</span> nginx进程向fastcgi进程发送request的整个过程的超时时间
Default: 	proxy_send_timeout 60s<span class="token punctuation">;</span>
Context: 	http, server, location
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="启用代理" tabindex="-1"><a class="header-anchor" href="#启用代理" aria-hidden="true">#</a> 启用代理</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>location / <span class="token punctuation">{</span>
  proxy_pass http://172.16.100.16:81<span class="token punctuation">;</span>
  proxy_redirect default<span class="token punctuation">;</span> 转发时是否使用默认端口
  proxy_set_header Host <span class="token variable">$http_host</span><span class="token punctuation">;</span>    <span class="token comment">#重新定义或者添加后端服务器的请求头(源IP....)</span>
  proxy_set_header   X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span> <span class="token comment">#启用客户端真实IP(不启用在日志中显示为代理器访问的网站)</span>
  proxy_set_header   X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span> <span class="token comment">#记录代理地址</span>
  ​
  proxy_connect_timeout <span class="token number">30</span><span class="token punctuation">;</span>  <span class="token comment">#后端服务器连接的超时时间(发起三次握手后的响应时间 TCP连接)</span>
  proxy_send_timeout <span class="token number">60</span><span class="token punctuation">;</span>  <span class="token comment">#后端服务器数据回传时间(在规定时间内必须传完所有数据)</span>
  proxy_read_timeout <span class="token number">60</span><span class="token punctuation">;</span>  <span class="token comment">#Nginx负载均衡时,对后方的Web服务器进行监控(连续60秒没收到1个字节,连接关闭)</span>
  ​
  proxy_buffering on<span class="token punctuation">;</span>   <span class="token comment">#开启缓存</span>
  proxy_buffer_size 32k<span class="token punctuation">;</span>  <span class="token comment">#响应头的缓冲区</span>
  proxy_buffers <span class="token number">4</span> 128k<span class="token punctuation">;</span>   <span class="token comment">#内容的缓冲区域大小(4个缓冲区,每个缓冲区大小为128K)</span>
  proxy_busy_buffers_size 256k<span class="token punctuation">;</span>  <span class="token comment">#从proxy_buffers划出一部分缓冲区来专门向客户端传送数据的地方</span>
  proxy_max_temp_file_size 256k<span class="token punctuation">;</span> <span class="token comment">#超大响应头存储成文件</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="proxy缓存" tabindex="-1"><a class="header-anchor" href="#proxy缓存" aria-hidden="true">#</a> Proxy缓存</h3><figure><img src="`+p+`" alt="image-20211109132501205" tabindex="0" loading="lazy"><figcaption>image-20211109132501205</figcaption></figure><h4 id="缓存类型" tabindex="-1"><a class="header-anchor" href="#缓存类型" aria-hidden="true">#</a> 缓存类型</h4><p>网页缓存 CDN</p><p>数据库缓存 memcache redis</p><p>网页缓存 nginx-proxy</p><p>客户端缓存，浏览器缓存</p><h4 id="模块-1" tabindex="-1"><a class="header-anchor" href="#模块-1" aria-hidden="true">#</a> 模块</h4><p>ngx_http_proxy_module</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>原理：将Proxy服务器作为realServer的缓存服务器，加速用户的访问过程
      将realServer上的一部分数据放到Proxy服务器上
      当用户请求数据时,realServer将数据返回时,先将数据在Proxy上进行暂存,在发送给用户。
      当用户第二次访问时,访问到缓存的数据,可直接返回,加速用户对服务器的访问。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="语法-1" tabindex="-1"><a class="header-anchor" href="#语法-1" aria-hidden="true">#</a> 语法</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>缓存开关
Syntax: 	proxy_cache zonename <span class="token operator">|</span> off<span class="token punctuation">;</span>
Default: 	proxy_cache off<span class="token punctuation">;</span>
Context: 	http, server, location

代理缓存
Syntax: 	proxy_cache_path path <span class="token punctuation">[</span>levels<span class="token operator">=</span>levels<span class="token punctuation">]</span> <span class="token punctuation">[</span>use_temp_path<span class="token operator">=</span>on<span class="token operator">|</span>off<span class="token punctuation">]</span> <span class="token assign-left variable">keys_zone</span><span class="token operator">=</span>name:size <span class="token punctuation">[</span>inactive<span class="token operator">=</span>time<span class="token punctuation">]</span> <span class="token punctuation">[</span>max_size<span class="token operator">=</span>size<span class="token punctuation">]</span> <span class="token punctuation">[</span>min_free<span class="token operator">=</span>size<span class="token punctuation">]</span> <span class="token punctuation">[</span>manager_files<span class="token operator">=</span>number<span class="token punctuation">]</span> <span class="token punctuation">[</span>manager_sleep<span class="token operator">=</span>time<span class="token punctuation">]</span> <span class="token punctuation">[</span>manager_threshold<span class="token operator">=</span>time<span class="token punctuation">]</span> <span class="token punctuation">[</span>loader_files<span class="token operator">=</span>number<span class="token punctuation">]</span> <span class="token punctuation">[</span>loader_sleep<span class="token operator">=</span>time<span class="token punctuation">]</span> <span class="token punctuation">[</span>loader_threshold<span class="token operator">=</span>time<span class="token punctuation">]</span> <span class="token punctuation">[</span>purger<span class="token operator">=</span>on<span class="token operator">|</span>off<span class="token punctuation">]</span> <span class="token punctuation">[</span>purger_files<span class="token operator">=</span>number<span class="token punctuation">]</span> <span class="token punctuation">[</span>purger_sleep<span class="token operator">=</span>time<span class="token punctuation">]</span> <span class="token punctuation">[</span>purger_threshold<span class="token operator">=</span>time<span class="token punctuation">]</span><span class="token punctuation">;</span>
Default: 	—
Context: 	http
example proxy_cache_path /data/nginx/cache <span class="token assign-left variable">levels</span><span class="token operator">=</span><span class="token number">1</span>:2 <span class="token assign-left variable">keys_zone</span><span class="token operator">=</span>zonename:10m<span class="token punctuation">;</span>

缓存维度
Syntax: 	proxy_cache_key string<span class="token punctuation">;</span> 定义缓存唯一key，通过唯一key进行hash读取缓存文件名
Default: 	proxy_cache_key <span class="token variable">$scheme</span><span class="token variable">$proxy_host</span><span class="token variable">$request_uri</span><span class="token punctuation">;</span>
Context: 	http, server, location

缓存过期
Syntax: 	proxy_cache_valid <span class="token punctuation">[</span>code <span class="token punctuation">..</span>.<span class="token punctuation">]</span> <span class="token function">time</span><span class="token punctuation">;</span>
Default: 	—
Context: 	http, server, location
proxy_cache_valid <span class="token number">200</span> <span class="token number">302</span> 10m<span class="token punctuation">;</span>
proxy_cache_valid <span class="token number">404</span>      1m<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="启动缓存" tabindex="-1"><a class="header-anchor" href="#启动缓存" aria-hidden="true">#</a> 启动缓存</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>http <span class="token punctuation">{</span>
  <span class="token punctuation">..</span>.
  proxy_cache_path /app/qianfeng/cache <span class="token assign-left variable">levels</span><span class="token operator">=</span><span class="token number">1</span>:2 <span class="token assign-left variable">keys_zone</span><span class="token operator">=</span>proxy_cache:10m <span class="token assign-left variable">max_size</span><span class="token operator">=</span>10G <span class="token assign-left variable">inactive</span><span class="token operator">=</span>60m <span class="token assign-left variable">use_temp_path</span><span class="token operator">=</span>off<span class="token punctuation">;</span>
  <span class="token punctuation">..</span>.
  
参数解析：/app/qianfeng/cache <span class="token operator">=</span><span class="token operator">&gt;</span> 用户自定义缓存文件夹,需提前创建
     <span class="token assign-left variable">levels</span><span class="token operator">=</span><span class="token number">1</span>:2 <span class="token operator">=</span><span class="token operator">&gt;</span> 缓存 存放的2级目录<span class="token punctuation">(</span>将每次用户的请求放到一个文件夹中,一个用户一个文件夹<span class="token punctuation">)</span>结构分明,用户查找更准确
     <span class="token assign-left variable">keys_zone</span><span class="token operator">=</span>proxy_cache <span class="token operator">=</span><span class="token operator">&gt;</span> 缓存区的名字/规则
     :10m <span class="token operator">=</span><span class="token operator">&gt;</span> 10m空间,用来存放Key<span class="token punctuation">(</span>一个Key代表一个用户的请求<span class="token punctuation">)</span>
     <span class="token assign-left variable">max_size</span><span class="token operator">=</span>10g <span class="token operator">=</span><span class="token operator">&gt;</span> 具体的缓存空间<span class="token punctuation">(</span>上限的空间,如果不设置,默认服务器有多大磁盘就存多大<span class="token punctuation">)</span>
     <span class="token assign-left variable">inactive</span><span class="token operator">=</span>60m <span class="token operator">=</span><span class="token operator">&gt;</span> 存放60分钟,超过时间被清理,清理不需要的内容
     <span class="token assign-left variable">use_temp_path</span><span class="token operator">=</span>off <span class="token operator">=</span><span class="token operator">&gt;</span> 不使用临时缓存路径

  server <span class="token punctuation">{</span>
    location / <span class="token punctuation">{</span>
    <span class="token punctuation">..</span>.
      proxy_cache proxy_cache<span class="token punctuation">;</span>  <span class="token comment">#第一个是命令主体 第二个是上面定义的策略名 </span>
      proxy_cache_valid <span class="token number">200</span> <span class="token number">304</span> 12h<span class="token punctuation">;</span> <span class="token comment">#用户访问的状态码为200 304的能缓存12h</span>
      proxy_cache_valid any 10m<span class="token punctuation">;</span>  <span class="token comment">#除了上面的状态码,其他都存储10分钟</span>
      proxy_cache_key <span class="token variable">$host</span><span class="token variable">$uri</span><span class="token variable">$is_args</span><span class="token variable">$args</span><span class="token punctuation">;</span> <span class="token comment">#URL进行hash得到Key,对比Key,得到对应数据</span>
      add_header  Nginx-Cache <span class="token string">&quot;<span class="token variable">$upstream_cache_status</span>&quot;</span><span class="token punctuation">;</span> <span class="token comment">#标识缓存的状态(有没有缓中)</span>
      proxy_next_upstream error <span class="token function">timeout</span> invalid_header http_500 http_502 http_503 http_504<span class="token punctuation">;</span>  <span class="token comment">#对后方Web服务器进行监控,当后方的realServer出现5系错误时,直接将用户的请求分发给另外服务器</span>
      <span class="token punctuation">..</span>.
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /app/qianfeng/cache
systemctl  restart  nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>proxy_cache_path命令中的参数及对应配置说明如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span>.用于缓存的本地磁盘目录是/app/tianyun.me/cache
<span class="token number">2</span>.levels在/app/tianyun.me/cache/设置了一个两级层次结构的目录。
将大量的文件放置在单个目录中会导致文件访问缓慢，所以针对大多数部署，我们推荐使用两级目录层次结构。
如果levels参数没有配置，则NGINX会将所有的文件放到同一个目录中。
<span class="token number">3</span>.keys_zone设置一个共享内存区，该内存区用于存储缓存键和元数据，有些类似计时器的用途。将键的拷贝放入内存可以使NGINX在不检索磁盘的情况下快速决定一个请求是HIT还是MISS，这样大大提高了检索速度。一个1MB的内存空间可以存储大约8000个key，那么上面配置的10MB内存空间可以存储差不多80000个key。
<span class="token number">4</span>.max_size设置了缓存的上限（在上面的例子中是10G）。这是一个可选项；如果不指定具体值，那就是允许缓存不断增长，占用所有可用的磁盘空间。当缓存达到这个上线，处理器便调用cache manager来移除最近最少被使用的文件，这样把缓存的空间降低至这个限制之下。
<span class="token number">5</span>.inactive指定了项目在不被访问的情况下能够在内存中保持的时间。在上面的例子中，如果一个文件在60分钟之内没有被请求，则缓存管理将会自动将其在内存中删除，不管该文件是否过期。该参数默认值为10分钟（10m）。注意，非活动内容有别于过期内容。NGINX不会自动删除由缓存控制头部指定的过期内容（本例中Cache-Control:max-age<span class="token operator">=</span><span class="token number">120</span>）。过期内容只有在inactive指定时间内没有被访问的情况下才会被删除。如果过期内容被访问了，那么NGINX就会将其从原服务器上刷新，并更新对应的inactive计时器。

<span class="token number">6</span>.NGINX最初会将注定写入缓存的文件先放入一个临时存储区域， <span class="token assign-left variable">use_temp_path</span><span class="token operator">=</span>off命令指示NGINX将在缓存这些文件时将它们写入同一个目录下。我们强烈建议你将参数设置为off来避免在文件系统中不必要的数据拷贝。use_temp_path在NGINX1.7版本和NGINX Plus R6中有所介绍。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="课后题" tabindex="-1"><a class="header-anchor" href="#课后题" aria-hidden="true">#</a> 课后题</h4><h3 id="负载均衡部分详解" tabindex="-1"><a class="header-anchor" href="#负载均衡部分详解" aria-hidden="true">#</a> 负载均衡部分详解</h3><h2 id="nginx-email" tabindex="-1"><a class="header-anchor" href="#nginx-email" aria-hidden="true">#</a> Nginx Email</h2>`,42),c=[o];function r(d,u){return a(),s("div",null,c)}const b=n(l,[["render",r],["__file","nginx02.html.vue"]]);export{b as default};
