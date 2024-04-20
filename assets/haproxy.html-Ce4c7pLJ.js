import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,d as e}from"./app-DZXsetdh.js";const t="/assets/image-20211115094625216-BuPXg5QW.png",i="/assets/image-20211115103530945-16369437325881-Qb5td9tU.png",l="/assets/image-20211115110133707-16369452956832-BctQO0e5.png",o="/assets/image-20211115114154315-Cns6dfma.png",p="/assets/image-20211115133138012-CuPxqvyJ.png",c="/assets/image-20211115133730736-CIy0NOkI.png",r="/assets/image-20211115135352489-DMoEZrzx.png",d="/assets/image-20211115141935128-BmA4IaMF.png",m="/assets/image-20211115141948678-DASbyAy-.png",u="/assets/image-20211115142055972-DVQz4dad.png",g="/assets/image-20211115142837094-CHLOCyAE.png",v="/assets/image-20211115142856927-CUyeGZYk.png",b="/assets/image-20211115143046597-DN3OTfKT.png",h="/assets/image-20211115143211572-DkUtQg8o.png",k="/assets/image-20211115143505329-BvW5s-Jx.png",f="/assets/image-20211115144532449-C5zjb_dD.png",x="/assets/image-20211115144606043-DzlB2F2a.png",y={},_=e('<h1 id="haproxy-七层负载均衡" tabindex="-1"><a class="header-anchor" href="#haproxy-七层负载均衡"><span>HAproxy 七层负载均衡</span></a></h1><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><figure><img src="'+t+'" alt="image-20211115094625216" tabindex="0" loading="lazy"><figcaption>image-20211115094625216</figcaption></figure><h2 id="特点" tabindex="-1"><a class="header-anchor" href="#特点"><span>特点</span></a></h2><figure><img src="'+i+'" alt="image-20211115103530945" tabindex="0" loading="lazy"><figcaption>image-20211115103530945</figcaption></figure><h2 id="实例1" tabindex="-1"><a class="header-anchor" href="#实例1"><span>实例1</span></a></h2><p>环境</p><figure><img src="'+l+`" alt="image-20211115110133707" tabindex="0" loading="lazy"><figcaption>image-20211115110133707</figcaption></figure><div class="language-hosts line-numbers-mode" data-ext="hosts" data-title="hosts"><pre class="language-hosts"><code>172.16.100.14 web1
172.16.100.15 web2
172.16.100.21 haproxy

172.16.100.13 windows client
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>步骤</p><p>WEB</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 优化系统</span>
systemctl stop firewalld <span class="token punctuation">;</span>systemctl disable firewalld
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/SELINUX=.*/SELINUX=disabled/g&#39;</span> /etc/selinux/config

<span class="token comment"># ntp核对时间</span>

<span class="token comment"># 创建测试页面</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> httpd
<span class="token builtin class-name">echo</span> <span class="token environment constant">$HOSTNAME</span> <span class="token operator">&gt;</span> /var/www/html/index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>HA</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> epel-* <span class="token parameter variable">-y</span>
yum <span class="token function">install</span> haproxy <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>配置haproxy</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/haproxy/haproxy.cfg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>haproxy 5大部分内容</p><figure><img src="`+o+`" alt="image-20211115114154315" tabindex="0" loading="lazy"><figcaption>image-20211115114154315</figcaption></figure><div class="language-perl line-numbers-mode" data-ext="perl" data-title="perl"><pre class="language-perl"><code>global					<span class="token comment"># 全局配置</span>
	log <span class="token v-string string">127.0.0.1</span> local3 info					<span class="token comment"># 日志配置 ，记录到本机</span>
	maxconn <span class="token number">4096</span>					<span class="token comment"># 最大连接限制（优先级低）</span>
	user nobody					<span class="token comment"># 用户 uid 123</span>
	group nobody					<span class="token comment"># 用户组 </span>
	deamon 					<span class="token comment"># 守护进程形式运行</span>
	nbproc <span class="token number">1</span>					<span class="token comment"># haproxy的进程数，该值设置为cpu核心数一致过多的进程数导致进程崩溃</span>
	pidfile <span class="token operator">/</span>var<span class="token operator">/</span>run<span class="token operator">/</span>haproxy<span class="token operator">.</span>pid		<span class="token comment"># pid</span>
	
defaults
	log global					<span class="token comment"># 跟global一样</span>
	mode http					<span class="token comment"># 工作层次 7层http或者4层tcp</span>
	maxconn <span class="token number">2048</span>				<span class="token comment"># 越往下优先级越高最大连接数（优先级中）</span>
    retries <span class="token number">3</span>					<span class="token comment"># 健康检查 二次连接失败就是不可用</span>
    option redispatch					<span class="token comment"># 服务不可用后的操作 重新定向到其他健康服务器，重新匹配</span>
    contimeout <span class="token number">5000</span>					<span class="token comment"># （重传计时器）定义haoroxy将客户端!!!请求!!!转发至后端服务器，所等待的超时时长</span>
    clitimeout <span class="token number">50000</span>					<span class="token comment"># (向后长连接) haproxy作为服务器，和用户之间的空闲时间超时，到时候发送fin指令</span>
	srvtimeout <span class="token number">50000</span>					<span class="token comment"># （向前长连接）haproxy作为服务器，和用户之间的空闲连接的超时时间，到时候发送超时指令</span>
	
    <span class="token comment">#timeout connect         10s # 等于contimeout</span>
    <span class="token comment">#timeout client          1m # clitimeout</span>
    <span class="token comment">#timeout server          1m	# srvtimeout</span>

	option abortonclose					<span class="token comment"># 当服务器负载很高时，自动结束掉当前队列处理比较久的连接</span>
	
	
	stats uri <span class="token operator">/</span>admin<span class="token operator">?</span>stats					<span class="token comment"># 设置url观察状态uri为 admin?stats</span>
	stats realm Private lands					<span class="token comment"># 设置统计页面认证时的统计信息</span>
	stats auth admin<span class="token punctuation">:</span>password					<span class="token comment"># 设置统计页面认证的用户名和密码，如果设置多个，另起一行写入即可</span>
	stats hide<span class="token operator">-</span>version					<span class="token comment"># 隐藏统计页面的haproxy的版本信息</span>


frontend http<span class="token operator">-</span>in
	bind <span class="token v-string string">0.0.0.0</span><span class="token punctuation">:</span><span class="token number">80</span>
	mode http
	log global					<span class="token comment"># 使用global设置</span>
	option httplog				<span class="token comment"># </span>
	option httpclose					<span class="token comment"># </span>
    acl html url_reg <span class="token operator">-</span>i <span class="token operator">\\</span><span class="token operator">.</span>html$					<span class="token comment"># 1.访问控制列表名称html，正则规则要求访问以html结尾的url时</span>
    use_backend html<span class="token operator">-</span>server <span class="token keyword">if</span> html					<span class="token comment"># 2.如果满足html规则，则推送给后端服务器html-server</span>
    default_backend html<span class="token operator">-</span>server
backend html<span class="token operator">-</span>server
	mode http
	balance roundrobin
	option httpchk GET <span class="token operator">/</span>index<span class="token operator">.</span>html
	cookie SERVERID insert indirect nocache
	server html<span class="token operator">-A</span> web1<span class="token punctuation">:</span><span class="token number">80</span> weight <span class="token number">1</span> cookie <span class="token number">3</span> check inter <span class="token number">2000</span> rise <span class="token number">2</span> fall <span class="token number">5</span>
	server html<span class="token operator">-B</span> web2<span class="token punctuation">:</span><span class="token number">80</span> weight <span class="token number">1</span> cookie <span class="token number">4</span> check inter <span class="token number">2000</span> rise <span class="token number">2</span> fall <span class="token number">5</span>



systemctl start haproxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试结果</p><figure><img src="`+p+'" alt="image-20211115133138012" tabindex="0" loading="lazy"><figcaption>image-20211115133138012</figcaption></figure><figure><img src="'+c+'" alt="image-20211115133730736" tabindex="0" loading="lazy"><figcaption>image-20211115133730736</figcaption></figure><h2 id="实例2" tabindex="-1"><a class="header-anchor" href="#实例2"><span>实例2</span></a></h2><p>拓扑</p><figure><img src="'+r+`" alt="image-20211115135352489" tabindex="0" loading="lazy"><figcaption>image-20211115135352489</figcaption></figure><p>环境</p><div class="language-hosts line-numbers-mode" data-ext="hosts" data-title="hosts"><pre class="language-hosts"><code>haproxy
htmla
htmlb
phpa
phpb

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="nginx七层负载均衡" tabindex="-1"><a class="header-anchor" href="#nginx七层负载均衡"><span>Nginx七层负载均衡</span></a></h1><p>特点</p><figure><img src="`+d+'" alt="image-20211115141935128" tabindex="0" loading="lazy"><figcaption>image-20211115141935128</figcaption></figure><p>优势</p><figure><img src="'+m+'" alt="image-20211115141948678" tabindex="0" loading="lazy"><figcaption>image-20211115141948678</figcaption></figure><p>架构</p><figure><img src="'+u+'" alt="image-20211115142055972" tabindex="0" loading="lazy"><figcaption>image-20211115142055972</figcaption></figure><figure><img src="'+g+'" alt="image-20211115142837094" tabindex="0" loading="lazy"><figcaption>image-20211115142837094</figcaption></figure><figure><img src="'+v+'" alt="image-20211115142856927" tabindex="0" loading="lazy"><figcaption>image-20211115142856927</figcaption></figure><p>语法实例</p><figure><img src="'+b+'" alt="image-20211115143046597" tabindex="0" loading="lazy"><figcaption>image-20211115143046597</figcaption></figure><p>nginx负载均衡算法</p><figure><img src="'+h+'" alt="image-20211115143211572" tabindex="0" loading="lazy"><figcaption>image-20211115143211572</figcaption></figure><p>环境</p><figure><img src="'+k+`" alt="image-20211115143505329" tabindex="0" loading="lazy"><figcaption>image-20211115143505329</figcaption></figure><p>案例</p><p>vim /etc/nginx/nginx.conf</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code>upstream html <span class="token punctuation">{</span>
	server web1<span class="token operator">:</span><span class="token number">80</span><span class="token punctuation">;</span>
	server web2<span class="token operator">:</span><span class="token number">80</span><span class="token punctuation">;</span>
	rr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
	server <span class="token punctuation">{</span>
        location <span class="token operator">/</span> <span class="token punctuation">{</span>
            proxy_pass http<span class="token operator">:</span><span class="token comment">//html;</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>面试：</p><figure><img src="`+f+`" alt="image-20211115144532449" tabindex="0" loading="lazy"><figcaption>image-20211115144532449</figcaption></figure><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>内容概述:
       静态调度算法：
       <span class="token number">1</span>.rr轮询<span class="token punctuation">(</span>默认调度算法<span class="token punctuation">)</span>       顺序分配逐一请求
       <span class="token number">2</span>.wrr权重轮询算法           权重大转发次数多
       <span class="token number">3</span>.ip_hash                 相同ip固定转发
       动态调度算法:
       <span class="token number">1</span>.fair调度算法              响应时间短的优先分配
       <span class="token number">2</span>.least_conn               连接请求少的优先分配
       <span class="token number">3</span>.一致HASH 和url_hash       后台为缓存服务器时效果好

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>状态参数</p><figure><img src="`+x+'" alt="image-20211115144606043" tabindex="0" loading="lazy"><figcaption>image-20211115144606043</figcaption></figure>',50),z=[_];function w(A,H){return a(),s("div",null,z)}const B=n(y,[["render",w],["__file","haproxy.html.vue"]]),S=JSON.parse('{"path":"/note-book/HA-LVS-Keepalived/haproxy.html","title":"HAproxy 七层负载均衡","lang":"zh-CN","frontmatter":{"description":"HAproxy 七层负载均衡 概述 image-20211115094625216image-20211115094625216 特点 image-20211115103530945image-20211115103530945 实例1 环境 image-20211115110133707image-20211115110133707 步骤 WEB H...","head":[["meta",{"property":"og:url","content":"https://paper-dragon.github.io/note-book/HA-LVS-Keepalived/haproxy.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"HAproxy 七层负载均衡"}],["meta",{"property":"og:description","content":"HAproxy 七层负载均衡 概述 image-20211115094625216image-20211115094625216 特点 image-20211115103530945image-20211115103530945 实例1 环境 image-20211115110133707image-20211115110133707 步骤 WEB H..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-13T15:08:38.000Z"}],["meta",{"property":"article:author","content":"PaperDragon"}],["meta",{"property":"article:modified_time","content":"2023-08-13T15:08:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HAproxy 七层负载均衡\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-13T15:08:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"特点","slug":"特点","link":"#特点","children":[]},{"level":2,"title":"实例1","slug":"实例1","link":"#实例1","children":[]},{"level":2,"title":"实例2","slug":"实例2","link":"#实例2","children":[]}],"git":{"createdTime":1691939318000,"updatedTime":1691939318000,"contributors":[{"name":"PaperDragon","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":2.89,"words":866},"filePathRelative":"note-book/HA-LVS-Keepalived/haproxy.md","localizedDate":"2023年8月13日","excerpt":"\\n<h2>概述</h2>\\n<figure><figcaption>image-20211115094625216</figcaption></figure>\\n<h2>特点</h2>\\n<figure><figcaption>image-20211115103530945</figcaption></figure>\\n<h2>实例1</h2>\\n<p>环境</p>\\n<figure><figcaption>image-20211115110133707</figcaption></figure>\\n<div class=\\"language-hosts\\" data-ext=\\"hosts\\" data-title=\\"hosts\\"><pre class=\\"language-hosts\\"><code>172.16.100.14 web1\\n172.16.100.15 web2\\n172.16.100.21 haproxy\\n\\n172.16.100.13 windows client\\n</code></pre></div>","autoDesc":true}');export{B as comp,S as data};
