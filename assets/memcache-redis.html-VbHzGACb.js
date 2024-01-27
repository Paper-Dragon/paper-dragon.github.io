import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,e}from"./app-pe6AHO2X.js";const i="/assets/image-20211117093651109-ct-XzHA7.png",t="/assets/image-20211117094009409-i_ZFM5Aa.png",p="/assets/image-20211117100128558-LPi8fuz0.png",o="/assets/image-20211117100243328-t7kXc4eM.png",l="/assets/image-20211117101044738-dzfAWNnP.png",c="/assets/image-20211117101741080-FUifAF_S.png",r="/assets/image-20211117102324814-E10mFKUc.png",d="/assets/image-20211117102405840-2V_ei6BI.png",u="/assets/image-20211117102501293-PUbguKWi.png",m="/assets/1200-5r9WmcnN.png",v="/assets/1200-16371342662862-LMXj07gm.png",k="/assets/1200-16371365201854-5m9Adliy.png",b="/assets/image-20211117160047246-uJaaQdap.png",g="/assets/image-20211117160104710-ITwJhQSp.png",h="/assets/image-20211117160310357-8sDoLlEU.png",f="/assets/image-20211117160340557-tF8b7KV1.png",y="/assets/image-20211117160428838-MC9e7JV9.png",q="/assets/image-20211117160445302-RzfWVi6Y.png",_="/assets/image-20211117160708876-PGB2Mjd-.png",x={},w=e('<h1 id="memcache-redis缓解数据库压力" tabindex="-1"><a class="header-anchor" href="#memcache-redis缓解数据库压力" aria-hidden="true">#</a> Memcache-Redis缓解数据库压力</h1><h1 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h1><figure><img src="'+i+'" alt="image-20211117093651109" tabindex="0" loading="lazy"><figcaption>image-20211117093651109</figcaption></figure><h1 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h1><h2 id="缓存服务器作用" tabindex="-1"><a class="header-anchor" href="#缓存服务器作用" aria-hidden="true">#</a> 缓存服务器作用</h2><p>加快访问速度，缓解数据库压力</p><h2 id="nosql" tabindex="-1"><a class="header-anchor" href="#nosql" aria-hidden="true">#</a> NoSQL</h2><p>net only sql</p><figure><img src="'+t+'" alt="image-20211117094009409" tabindex="0" loading="lazy"><figcaption>image-20211117094009409</figcaption></figure><h2 id="nosql产品" tabindex="-1"><a class="header-anchor" href="#nosql产品" aria-hidden="true">#</a> nosql产品</h2><p>redis</p><p>memcached</p><p>mongodb</p><h1 id="memcached" tabindex="-1"><a class="header-anchor" href="#memcached" aria-hidden="true">#</a> memcached</h1><h2 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点</h2><p><strong>内置内存存储方式</strong> : 重启操作系统导致数据全部丢失</p><p><strong>key/value</strong> : 服务器不需要关心数据本身的意义和结构，只要是可序列化数据即可。存储由键、过期时间、可选标志及数据四个部分组成</p><p><strong>不互相通信的分布式</strong> :</p><figure><img src="'+p+'" alt="image-20211117100128558" tabindex="0" loading="lazy"><figcaption>image-20211117100128558</figcaption></figure><h2 id="支持的平台" tabindex="-1"><a class="header-anchor" href="#支持的平台" aria-hidden="true">#</a> 支持的平台</h2><p>多平台支持</p><h2 id="服务框架" tabindex="-1"><a class="header-anchor" href="#服务框架" aria-hidden="true">#</a> 服务框架</h2><figure><img src="'+o+`" alt="image-20211117100243328" tabindex="0" loading="lazy"><figcaption>image-20211117100243328</figcaption></figure><h2 id="实施" tabindex="-1"><a class="header-anchor" href="#实施" aria-hidden="true">#</a> 实施</h2><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> memchched <span class="token parameter variable">-y</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+l+`" alt="image-20211117101044738" tabindex="0" loading="lazy"><figcaption>image-20211117101044738</figcaption></figure><h3 id="修改配置文件" tabindex="-1"><a class="header-anchor" href="#修改配置文件" aria-hidden="true">#</a> 修改配置文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">PORT</span><span class="token operator">=</span><span class="token string">&quot;11211&quot;</span>    <span class="token comment"># 监听端口，同台机器编译多实例</span>
<span class="token assign-left variable"><span class="token environment constant">USER</span></span><span class="token operator">=</span><span class="token string">&quot;memcached&quot;</span>
<span class="token assign-left variable">MAXCONN</span><span class="token operator">=</span><span class="token string">&quot;1024&quot;</span>
<span class="token assign-left variable">CACHESIZE</span><span class="token operator">=</span><span class="token string">&quot;1500&quot;</span> <span class="token comment"># MB</span>
<span class="token assign-left variable">OPTIONS</span><span class="token operator">=</span><span class="token string">&quot;&quot;</span> 	<span class="token comment"># 监听网络地址</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动" tabindex="-1"><a class="header-anchor" href="#启动" aria-hidden="true">#</a> 启动</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># systemctl start memcached </span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># p</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> telnet

telnet <span class="token number">127.0</span>.0.1 <span class="token number">11211</span>

<span class="token comment"># 设置名称为name的key</span>
<span class="token builtin class-name">set</span> name <span class="token number">0</span> <span class="token number">900</span> <span class="token number">5</span>
xvlei
<span class="token comment"># 给name的值</span>
get name <span class="token comment"># 获取值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+c+'" alt="image-20211117101741080" tabindex="0" loading="lazy"><figcaption>image-20211117101741080</figcaption></figure><h3 id="生产环境" tabindex="-1"><a class="header-anchor" href="#生产环境" aria-hidden="true">#</a> 生产环境</h3><p>web+memcached</p><p>前端部署apache mysql php服务器</p><p>需要安装memcache客户端 php-memcached</p><p>独立部署memcached服务器</p><h1 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> redis</h1><h2 id="简介-1" tabindex="-1"><a class="header-anchor" href="#简介-1" aria-hidden="true">#</a> 简介</h2><p>C语言写的</p><figure><img src="'+r+'" alt="image-20211117102324814" tabindex="0" loading="lazy"><figcaption>image-20211117102324814</figcaption></figure><figure><img src="'+d+'" alt="image-20211117102405840" tabindex="0" loading="lazy"><figcaption>image-20211117102405840</figcaption></figure><figure><img src="'+u+`" alt="image-20211117102501293" tabindex="0" loading="lazy"><figcaption>image-20211117102501293</figcaption></figure><h2 id="安装-1" tabindex="-1"><a class="header-anchor" href="#安装-1" aria-hidden="true">#</a> 安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@redis-master ~<span class="token punctuation">]</span><span class="token comment"># mkdir -p /data/application —创建工作目录</span>
<span class="token punctuation">[</span>root@redis-master ~<span class="token punctuation">]</span><span class="token comment"># wget http://download.redis.io/releases/redis-4.0.9.tar.gz —下载redis</span>
<span class="token punctuation">[</span>root@redis-master ~<span class="token punctuation">]</span><span class="token comment"># tar xzf redis-4.0.9.tar.gz -C /data/application/ —解压</span>
<span class="token punctuation">[</span>root@redis-master ~<span class="token punctuation">]</span><span class="token comment"># cd /data/application/</span>
<span class="token punctuation">[</span>root@redis-master application<span class="token punctuation">]</span><span class="token comment"># mv redis-4.0.9/ redis</span>
<span class="token punctuation">[</span>root@redis-master application<span class="token punctuation">]</span><span class="token comment"># cd redis/</span>
<span class="token punctuation">[</span>root@redis-master redis<span class="token punctuation">]</span><span class="token comment"># yum install -y gcc make #安装编译工具</span>
<span class="token punctuation">[</span>root@redis-master redis<span class="token punctuation">]</span><span class="token comment"># make</span>
注：如果报错请将刚才解压的安装包删除掉，再次重新解压并进行make安装即可。
<span class="token punctuation">[</span>root@redis-master redis<span class="token punctuation">]</span><span class="token comment"># cp redis.conf redis.conf.bak</span>
<span class="token punctuation">[</span>root@redis-master redis<span class="token punctuation">]</span><span class="token comment"># vim redis.conf —修改如下</span>
<span class="token builtin class-name">bind</span> <span class="token number">192.168</span>.246.202　　<span class="token comment">#只监听内网IP</span>
daemonize <span class="token function">yes</span>　　　　　<span class="token comment">#开启后台模式将on改为yes</span>
port <span class="token number">6379</span> <span class="token comment">#端口号</span>
<span class="token function">dir</span> /data/application/redis/data　　<span class="token comment">#本地数据库存放持久化数据的目录该目录-----需要存在</span>
创建存放数据的目录
<span class="token punctuation">[</span>root@redis-master redis<span class="token punctuation">]</span><span class="token comment"># mkdir /data/application/redis/data</span>
配置redis为systemctl启动
<span class="token punctuation">[</span>root@redis-master redis<span class="token punctuation">]</span><span class="token comment"># cd /lib/systemd/system</span>
<span class="token punctuation">[</span>root@redis-master system<span class="token punctuation">]</span><span class="token comment"># vim redis.service</span>
<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>Redis
<span class="token assign-left variable">After</span><span class="token operator">=</span>network.target

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/data/application/redis/src/redis-server /data/application/redis/redis.conf <span class="token parameter variable">--daemonize</span> no
<span class="token assign-left variable">ExecStop</span><span class="token operator">=</span>/data/application/redis/src/redis-cli <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">-p</span> <span class="token number">6379</span> <span class="token function">shutdown</span>
<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target

参数详解:
• <span class="token punctuation">[</span>Unit<span class="token punctuation">]</span> 表示这是基础信息
• Description 是描述
• After 是在那个服务后面启动，一般是网络服务启动后启动

• <span class="token punctuation">[</span>Service<span class="token punctuation">]</span> 表示这里是服务信息
• ExecStart 是启动服务的命令
• ExecStop 是停止服务的指令
• <span class="token punctuation">[</span>Install<span class="token punctuation">]</span> 表示这是是安装相关信息
• WantedBy 是以哪种方式启动：multi-user.target表明当系统以多用户方式（默认的运行级别）启动时，这个服务需要被自动运行。

<span class="token number">8</span>.启动服务:
<span class="token punctuation">[</span>root@redis-master system<span class="token punctuation">]</span><span class="token comment"># systemctl daemon-reload #重新加载</span>
<span class="token punctuation">[</span>root@redis-master system<span class="token punctuation">]</span><span class="token comment"># systemctl start redis.service </span>
<span class="token punctuation">[</span>root@redis-master system<span class="token punctuation">]</span><span class="token comment"># ss -lnta  #查看6379端口是否启动</span>

登陆redis
<span class="token punctuation">[</span>root@redis-master redis<span class="token punctuation">]</span><span class="token comment"># vim /etc/profile</span>
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span>:/data/application/redis/src/
<span class="token punctuation">[</span>root@redis-master redis<span class="token punctuation">]</span><span class="token comment"># source /etc/profile</span>

<span class="token punctuation">[</span>root@redis-master redis<span class="token punctuation">]</span><span class="token comment"># redis-cli -h 192.168.94.134 -p 6379</span>
<span class="token number">192.168</span>.94.134:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token function">ping</span>     ---测试redis是否可以用
PONG
<span class="token number">192.168</span>.94.134:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> name newrain    <span class="token comment">#设置key--name，并设置值</span>
OK
<span class="token number">192.168</span>.94.134:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get name    <span class="token comment">#获取到key</span>
<span class="token string">&quot;newrain&quot;</span>
<span class="token number">192.168</span>.94.134:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span>
单机版redis已经部署完成。将ip和端口发给开发就可以了。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>redis的相关工具</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>redis-benchmark     <span class="token comment">#用于进行redis性能测试的工具</span>
redis-check-dump    <span class="token comment">#用于修复出问题的dump.rdb文件</span>
redis-cli           <span class="token comment">#redis的客户端</span>
redis-server        <span class="token comment">#redis的服务端</span>
redis-check-aof     <span class="token comment">#用于修复出问题的AOF文件</span>
redis-sentinel      <span class="token comment">#用于集群管理</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="持久化" tabindex="-1"><a class="header-anchor" href="#持久化" aria-hidden="true">#</a> 持久化</h2><p>开启持久化功能后，重启redis，数据会自动通过持久化文件恢复！！</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>一、redis提供了两种持久化的方式，分别是RDB（Redis DataBase）和AOF（Append Only File）。
RDB（Redis DataBase）：是在不同的时间点，将redis存储的数据生成快照并存储到磁盘等介质上；
特点:
<span class="token number">1</span>.周期性
<span class="token number">2</span>.不影响数据写入  <span class="token comment">#RDB会启动子进程，备份所有数据。当前进程，继续提供数据的读写。当备份完成，才替换老的备份文件。(老版本不会)</span>
<span class="token number">3</span>.高效     <span class="token comment">#一次性还原所有数据</span>
<span class="token number">4</span>.完整性较差 <span class="token comment">#故障点到上一次备份，之间的数据无法恢复。</span>
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
AOF（Append Only File）则是换了一个角度来实现持久化，那就是将redis执行过的所有写指令记录下来，在下次redis重新启动时，只要把这
些写指令从前到后再重复执行一遍，就可以实现数据恢复了。
特点:
<span class="token number">1</span>.实时性
<span class="token number">2</span>.完整性较好
<span class="token number">3</span>.体积大  <span class="token comment">#记录数据的指令，删除数据的指令都会被记录下来。</span>
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
二、RDB和AOF两种方式也可以同时使用，在这种情况下，如果redis重启的话，则会优先采用AOF方式来进行数据恢复，这是因为AOF方式的数据恢
复完整度更高。
如果你没有数据持久化的需求，也完全可以关闭RDB和AOF方式，这样的话，redis将变成一个纯内存数据库，就像memcache一样。
三、如何选择方式？
缓存：不用开启任何持久方式
双开:因RDB数据不实时，但同时使用两者时服务器只会找AOF文件,所以RDB留作万一的手段。
redis持久化 – 如何选择RDB和AOF
对于我们应该选择RDB还是AOF，官方的建议是两个同时使用。这样可以提供更可靠的持久化方案。
写入速度快 ------------AOF
写入速度慢 ------------RDB

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="持久化配置-快照模式" tabindex="-1"><a class="header-anchor" href="#持久化配置-快照模式" aria-hidden="true">#</a> 持久化配置（快照模式）</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span>、RDB默认开启：
<span class="token punctuation">[</span>root@redis-master src<span class="token punctuation">]</span><span class="token comment"># cd ..</span>
<span class="token punctuation">[</span>root@redis-master redis<span class="token punctuation">]</span><span class="token comment"># vim redis.conf</span>
<span class="token comment">#dbfilename：持久化数据存储在本地的文件</span>
dbfilename dump.rdb
<span class="token comment">#dir：持久化数据存储在本地的路径</span>
<span class="token function">dir</span> /data/application/redis/
<span class="token comment">##snapshot触发的时机，save &lt;seconds&gt; &lt;changes&gt;  </span>
<span class="token comment">##如下为900秒后，至少有一个变更操作，才会snapshot  </span>
<span class="token comment">##对于此值的设置，需要谨慎，评估系统的变更操作密集程度  </span>
<span class="token comment">##可以通过“save “”来关闭snapshot功能  </span>
<span class="token comment">#save时间，以下分别表示更改了1个key时间隔900s进行持久化存储；更改了10个key300s进行存储；更改10000个key60s进行存储。</span>
save <span class="token operator">&lt;</span>seconds<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>changes<span class="token operator">&gt;</span>
save <span class="token number">900</span> <span class="token number">1</span>
save <span class="token number">300</span> <span class="token number">10</span>
save <span class="token number">60</span> <span class="token number">10000</span>
<span class="token comment">##当snapshot时出现错误无法继续时，是否阻塞客户端“变更操作”，“错误”可能因为磁盘已满/磁盘故障/OS级别异常等  </span>
stop-writes-on-bgsave-error <span class="token function">yes</span>  
<span class="token comment">##是否启用rdb文件压缩，默认为“yes”，压缩往往意味着“额外的cpu消耗”，同时也意味这较小的文件尺寸以及较短的网络传输时间  </span>
rdbcompression <span class="token function">yes</span> 
<span class="token number">2</span>、客户端使用命令进行持久化save存储：
方式一
<span class="token punctuation">[</span>root@redis-master src<span class="token punctuation">]</span><span class="token comment"># redis-cli -h 192.168.94.134 -p 6379 save   #前台进行存储  指的是当前终端的前后台</span>
OK
方式二
redis-cli <span class="token parameter variable">-h</span> <span class="token function">ip</span> <span class="token parameter variable">-p</span> port bgsave  <span class="token comment">#后台进行存储</span>
注意:每次快照持久化都是将内存数据完整写入到磁盘一次，并不是增量的只同步新数据。如果数据量大的话，而且写操作比较多，必然会引起大量
的磁盘io操作，可能会严重影响性能。
save方式：持久化前面的所有数据<span class="token punctuation">(</span>rdb模式没开时，后续的数据不会进行备份<span class="token punctuation">)</span>
<span class="token number">3</span>、AOF默认关闭--开启
<span class="token punctuation">[</span>root@redis-master src<span class="token punctuation">]</span><span class="token comment"># cd ..</span>
<span class="token punctuation">[</span>root@redis-master redis<span class="token punctuation">]</span><span class="token comment"># vim redis.conf</span>
修改如下:
appendonly <span class="token function">yes</span>
<span class="token number">1</span>、此选项为aof功能的开关，默认为“no”，可以通过“yes”来开启aof功能,只有在“yes”下，aof重写/文件同步等特性才会生效
<span class="token number">2</span>、指定aof文件名称
appendfilename appendonly.aof  
<span class="token number">3</span>、指定aof操作中文件同步策略，有三个合法值：always everysec no,默认为everysec
appendfsync everysec  
<span class="token number">4</span>、在aof-rewrite期间，appendfsync是否暂缓文件同步，<span class="token string">&quot;no&quot;</span>表示“不暂缓”，“yes”表示“暂缓”，默认为“no”
no-appendfsync-on-rewrite no  
<span class="token number">5</span>、触发aof rewrite的最小文件尺寸 
auto-aof-rewrite-min-size 64mb
<span class="token number">6</span>、当Aof log增长超过指定比例时，重写log file， 设置为0表示不自动重写Aof 日志，重写是为了使aof体积保持最小，而确保保存最完整的数据。
auto-aof-rewrite-percentage <span class="token number">100</span>

修改完配置文件后重启生效

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="主从" tabindex="-1"><a class="header-anchor" href="#主从" aria-hidden="true">#</a> 主从</h2><p><strong>主从简介</strong></p><p><strong>1、主从 – 用法</strong></p><blockquote><p>像MySQL一样，redis是支持主从同步的，而且也支持一主多从以及多级从结构。 主从结构，一是为了纯粹的冗余备份，二是为了提升读性能，比如很消耗性能的SORT就可以由从服务器来承担。 redis的主从同步是异步进行的，这意味着主从同步不会影响主逻辑，也不会降低redis的处理性能。 主从架构中，可以考虑关闭主服务器的数据持久化功能，只让从服务器进行持久化，这样可以提高主服务器的处理性能。 在主从架构中，从服务器通常被设置为只读模式，这样可以避免从服务器的数据被误修改。但是从服务器仍然可以接受CONFIG等指令，所以还是不应该将从服务器直接暴露到不安全的网络环境中。</p></blockquote><p><strong>2、主从同步原理</strong></p><blockquote><p>主从 – 同步原理 从服务器会向主服务器发出SYNC指令，当主服务器接到此命令后，就会调用BGSAVE指令来创建一个子进程专门进行数据持久化工作，也就是将主服务器的数据写入RDB文件中。在数据持久化期间，主服务器将执行的写指令都缓存在内存中。 在BGSAVE指令执行完成后，主服务器会将持久化好的RDB文件发送给从服务器，从服务器接到此文件后会将其存储到磁盘上，然后再将其读取到内存中。这个动作完成后，主服务器会将这段时间缓存的写指令再以redis协议的格式发送给从服务器。 另外，要说的一点是，即使有多个从服务器同时发来SYNC指令，主服务器也只会执行一次BGSAVE，然后把持久化好的RDB文件发给多个下游。在redis2.8版本之前，如果从服务器与主服务器因某些原因断开连接的话，都会进行一次主从之间的全量的数据同步；而在2.8版本之后，redis支持了效率更高的增量同步策略，这大大降低了连接断开的恢复成本。 主服务器会在内存中维护一个缓冲区，缓冲区中存储着将要发给从服务器的内容。从服务器在与主服务器出现网络瞬断之后，从服务器会尝试再次与主服务器连接，一旦连接成功，从服务器就会把“希望同步的主服务器ID”和“希望请求的数据的偏移位置（replication offset）”发送出去。主服务器接收到这样的同步请求后，首先会验证主服务器ID是否和自己的ID匹配，其次会检查“请求的偏移位置”是否存在于自己的缓冲区中，如果两者都满足的话，主服务器就会向从服务器发送增量内容。 增量同步功能，需要服务器端支持全新的PSYNC指令。这个指令，只有在redis-2.8之后才具有。</p></blockquote><p><strong>3、部署三台机器redis---主从同步</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>redis-master----192.168.94.134
redis-slave-1-----192.168.94.133
redis-slave-2-----192.168.94.135
<span class="token number">1</span>.首先三台服务器将redis部署完成。
<span class="token number">2</span>.编辑master的redis配置文件:
<span class="token punctuation">[</span>root@redis-master ~<span class="token punctuation">]</span><span class="token comment"># cd /data/application/redis/</span>
<span class="token punctuation">[</span>root@redis-master redis<span class="token punctuation">]</span><span class="token comment"># vim redis.conf</span>
<span class="token comment">#bind 127.0.0.1</span>
<span class="token builtin class-name">bind</span> <span class="token number">0.0</span>.0.0
protected-mode no

<span class="token number">2</span>.修改slave的配置文件<span class="token punctuation">(</span>两台机器一样<span class="token punctuation">)</span>：
<span class="token punctuation">[</span>root@redis-slave-1 ~<span class="token punctuation">]</span><span class="token comment"># cd /data/application/redis/</span>
<span class="token punctuation">[</span>root@redis-slave-1 redis<span class="token punctuation">]</span><span class="token comment"># vim redis.conf      ---修改如下：</span>
<span class="token comment">#bind 127.0.0.1</span>
<span class="token builtin class-name">bind</span> <span class="token number">0.0</span>.0.0
protected-mode no
<span class="token comment"># slaveof &lt;masterip&gt; &lt;masterprot&gt;</span>
slaveof <span class="token number">192.168</span>.94.134 <span class="token number">6379</span>

<span class="token number">3</span>.重启三台redis
systemctl restart redis  <span class="token comment">#忘了看前面</span>
systemctl stop firewalld <span class="token operator">&amp;&amp;</span> setenforce <span class="token number">0</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>测试</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span>.在master上面执行
<span class="token punctuation">[</span>root@redis-master ~<span class="token punctuation">]</span><span class="token comment"># redis-cli</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token function">ping</span>
PONG
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> name duan
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get name
<span class="token string">&quot;duan&quot;</span>

<span class="token number">2</span>.分别在slave-1和slave-2上面执行:
<span class="token punctuation">[</span>root@redis-slave-1<span class="token punctuation">]</span><span class="token comment"># ./redis-cli </span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token function">ping</span>
PONG
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get name
<span class="token string">&quot;duan&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span>
<span class="token punctuation">[</span>root@redis-slave-2<span class="token punctuation">]</span><span class="token comment"># redis-cli </span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token function">ping</span>
PONG
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get name
<span class="token string">&quot;duan&quot;</span>

查看复制状态
master执行：
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> info replication
<span class="token comment"># Replication</span>
role:master
connected_slaves:2
slave0:ip<span class="token operator">=</span><span class="token number">192.168</span>.94.133,port<span class="token operator">=</span><span class="token number">6379</span>,state<span class="token operator">=</span>online,offset<span class="token operator">=</span><span class="token number">323490</span>,lag<span class="token operator">=</span><span class="token number">1</span>
slave1:ip<span class="token operator">=</span><span class="token number">192.168</span>.94.135,port<span class="token operator">=</span><span class="token number">6379</span>,state<span class="token operator">=</span>online,offset<span class="token operator">=</span><span class="token number">323490</span>,lag<span class="token operator">=</span><span class="token number">1</span>
---------------------------------------------
slave上面执行
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> info replication
<span class="token comment"># Replication</span>
role:slave
master_host:192.168.94.134
master_port:6379
master_link_status:up
master_last_io_second

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="redis-sentinel-哨兵模式" tabindex="-1"><a class="header-anchor" href="#redis-sentinel-哨兵模式" aria-hidden="true">#</a> redis-sentinel---哨兵模式</h2><p><strong>1、哨兵简介:Redis Sentinel</strong></p><blockquote><p>Sentinel(哨兵)是用于监控redis集群中Master状态的工具，其已经被集成在redis2.4+的版本中是Redis官方推荐的高可用性(HA)解决方案。</p></blockquote><p><strong>2、作用</strong></p><blockquote><p>1)：Master状态检测 2)：如果Master异常，则会进行Master-Slave切换，将其中一个Slave作为Master，将之前的Master作为Slave 3)：Master-Slave切换后，master_redis.conf、slave_redis.conf和sentinel.conf的内容都会发生改变，即master_redis.conf中会多一行slaveof的配置，sentinel.conf的监控目标会随之调换</p></blockquote><p><strong>3、工作模式</strong></p><blockquote><p>1)：每个Sentinel以每秒钟一次的频率向它所知的Master，Slave以及其他 Sentinel 实例发送一个 PING 命令 2)：如果一个实例（instance）距离最后一次有效回复 PING 命令的时间超过 down-after-milliseconds 选项所指定的值， 则这个实例会被 Sentinel 标记为主观下线。 3)：如果一个Master被标记为主观下线，则正在监视这个Master的所有 Sentinel 要以每秒一次的频率确认Master的确进入了主观下线状态。 4)：当有足够数量的 Sentinel（大于等于配置文件指定的值）在指定的时间范围内确认Master的确进入了主观下线状态， 则Master会被标记为客观下线</p></blockquote><p><strong>4、主观下线和客观下线</strong></p><blockquote><p>主观下线：Subjectively Down，简称 SDOWN，指的是当前 Sentinel 实例对某个redis服务器做出的下线判断。 客观下线：Objectively Down， 简称 ODOWN，指的是多个 Sentinel 实例在对Master Server做出 SDOWN 判断，并且通过 SENTINEL is-master-down-by-addr 命令互相交流之后，得出的Master Server下线判断，然后开启failover</p></blockquote><p><strong>5、配置哨兵模式</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span>.每台机器上修改redis主配置文件redis.conf文件设置：bind <span class="token number">0.0</span>.0.0   ---已经操作
<span class="token number">2</span>.每台机器上修改sentinel.conf配置文件：修改如下配置
<span class="token punctuation">[</span>root@redis-master src<span class="token punctuation">]</span><span class="token comment"># cd ..</span>
<span class="token punctuation">[</span>root@redis-master redis<span class="token punctuation">]</span><span class="token comment"># vim sentinel.conf</span>
sentinel monitor mymaster <span class="token number">10.0</span>.0.137 <span class="token number">6379</span> <span class="token number">2</span> <span class="token comment">#当集群中有2个sentinel认为master死了时，才能真正认为该master已经不可用了。</span>
 <span class="token punctuation">(</span>slave上面写的是master的ip，master写自己ip<span class="token punctuation">)</span>
sentinel down-after-milliseconds mymaster <span class="token number">3000</span>   <span class="token comment">#单位毫秒</span>
sentinel failover-timeout mymaster <span class="token number">10000</span>   <span class="token comment">#若sentinel在该配置值内未能完成failover(故障转移)操作（即故障时master/slave自动切换）</span>
，则认为本次failover失败。
protected-mode no  <span class="token comment">#关闭加密模式--新添加到sentinel配置文件中</span>

如果Redis加了密码，哨兵配置文件中也要指定
<span class="token number">3</span>.每台机器启动哨兵服务：
<span class="token punctuation">[</span>root@redis-master redis<span class="token punctuation">]</span><span class="token comment"># redis-sentinel /data/application/redis/sentinel.conf</span>
注意:在生产环境下将哨兵模式启动放到后台执行:     
redis-sentinel /data/application/redis/sentinel.conf <span class="token operator">&amp;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+m+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>将master的哨兵模式退出，再将redis服务stop了，在两台slave上面查看其中一台是否切换为master:(没有优先级，为随机切换)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@redis-master ~<span class="token punctuation">]</span><span class="token comment"># systemctl stop redis</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+v+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>登陆slave服务器查看有没有切换</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@real_server1 ~<span class="token punctuation">]</span><span class="token comment"># redis-cli </span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> info replication
<span class="token comment"># Replication</span>
role:slave
master_host:192.168.94.135
master_port:6379
master_link_status:up

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>登陆<strong>当前</strong>master机器查看:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@linux ~<span class="token punctuation">]</span><span class="token comment"># redis-cli </span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> info replication
<span class="token comment"># Replication</span>
role:master
connected_slaves:1
slave0:ip<span class="token operator">=</span><span class="token number">192.168</span>.94.133,port<span class="token operator">=</span><span class="token number">6379</span>,state<span class="token operator">=</span>online,offset<span class="token operator">=</span><span class="token number">43552</span>,lag<span class="token operator">=</span><span class="token number">1</span>

另外一台机器stop了，所以没有显示

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="五、redis缓存测试-基于lamp" tabindex="-1"><a class="header-anchor" href="#五、redis缓存测试-基于lamp" aria-hidden="true">#</a> 五、Redis缓存测试（基于LAMP）</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>基于上面的Redis主从：
编辑Redis主：
<span class="token punctuation">[</span>root@redis-master ~<span class="token punctuation">]</span><span class="token comment"># redis-cli </span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> info replication
<span class="token comment"># Replication</span>
role:master
connected_slaves:2
slave0:ip<span class="token operator">=</span><span class="token number">192.168</span>.94.133,port<span class="token operator">=</span><span class="token number">6379</span>,state<span class="token operator">=</span>online,offset<span class="token operator">=</span><span class="token number">5814</span>,lag<span class="token operator">=</span><span class="token number">0</span>
slave1:ip<span class="token operator">=</span><span class="token number">192.168</span>.94.135,port<span class="token operator">=</span><span class="token number">6379</span>,state<span class="token operator">=</span>online,offset<span class="token operator">=</span><span class="token number">5814</span>,lag<span class="token operator">=</span><span class="token number">1</span>

<span class="token comment"># 部署mariadb</span>
<span class="token punctuation">[</span>root@redis-master ~<span class="token punctuation">]</span><span class="token comment"># yum install -y mariadb mariadb-server mariadb-devel</span>
<span class="token punctuation">[</span>root@redis-master ~<span class="token punctuation">]</span><span class="token comment"># systemctl start mariadb</span>
<span class="token punctuation">[</span>root@redis-master ~<span class="token punctuation">]</span><span class="token comment"># mysqladmin -uroot password 123456</span>
<span class="token punctuation">[</span>root@redis-master ~<span class="token punctuation">]</span><span class="token comment"># mysql -uroot -p123456</span>
mysql<span class="token operator">&gt;</span> create database <span class="token builtin class-name">test</span><span class="token punctuation">;</span>
mysql<span class="token operator">&gt;</span> use <span class="token builtin class-name">test</span>
mysql<span class="token operator">&gt;</span> create table t1<span class="token punctuation">(</span>id int,name varchar<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">))</span><span class="token punctuation">;</span>
mysql<span class="token operator">&gt;</span> insert into t1 values<span class="token punctuation">(</span><span class="token number">1</span>,<span class="token string">&quot;tom&quot;</span><span class="token punctuation">)</span>,<span class="token punctuation">(</span><span class="token number">2</span>,<span class="token string">&quot;jack&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
mysql<span class="token operator">&gt;</span> flush privileges<span class="token punctuation">;</span>
<span class="token comment"># 部署apache</span>
<span class="token punctuation">[</span>root@redis-master ~<span class="token punctuation">]</span><span class="token comment"># yum install -y httpd</span>
<span class="token punctuation">[</span>root@redis-master ~<span class="token punctuation">]</span><span class="token comment"># vim /etc/httpd/conf/httpd.conf</span>
DirectoryIndex index.html index.php
<span class="token comment"># 部署php</span>
<span class="token punctuation">[</span>root@redis-master ~<span class="token punctuation">]</span><span class="token comment"># rpm -Uvh https://mirror.webtatic.com/yum/el7/epel-release.rpm</span>
<span class="token punctuation">[</span>root@redis-master ~<span class="token punctuation">]</span><span class="token comment"># rpm -Uvh https://mirror.webtatic.com/yum/el7/webtatic-release.rpm</span>
<span class="token punctuation">[</span>root@redis-master ~<span class="token punctuation">]</span><span class="token comment"># yum install php70w.x86_64 php70w-cli.x86_64 php70w-common.x86_64 php70w-gd.x86_64 php70w-ldap.x86_64 php70w-mbstring.x86_64 php70w-mcrypt.x86_64 php70w-mysql.x86_64 php70w-pdo.x86_64 php70w-devel zlib-devel php70w-fpm php70w-pecl-redis  -y</span>
<span class="token punctuation">[</span>root@redis-master ~<span class="token punctuation">]</span><span class="token comment"># vim /etc/php.ini</span>
<span class="token number">878</span> date.timezone <span class="token operator">=</span>Asia/Shanghai
display_errors <span class="token operator">=</span> Off，把Off修改为On
<span class="token punctuation">[</span>root@redis-master ~<span class="token punctuation">]</span><span class="token comment"># systemctl start php-fpm httpd</span>

<span class="token punctuation">[</span>root@redis-master ~<span class="token punctuation">]</span><span class="token comment"># vim /var/www/html/index.php</span>
<span class="token operator">&lt;</span>?php
<span class="token variable">$redishost</span> <span class="token operator">=</span> <span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">;</span>
<span class="token variable">$redisport</span> <span class="token operator">=</span> <span class="token number">6379</span><span class="token punctuation">;</span>
<span class="token variable">$redis</span> <span class="token operator">=</span> new Redis<span class="token punctuation">;</span>
<span class="token variable">$redis</span>-<span class="token operator">&gt;</span>connect<span class="token punctuation">(</span><span class="token variable">$redishost</span>,<span class="token variable">$redisport</span><span class="token punctuation">)</span> or die <span class="token punctuation">(</span><span class="token string">&quot;Could not connect&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">#$query=&quot;select emp_no,salary from salaries where emp_no = 10001&quot;;</span>
<span class="token variable">$query</span><span class="token operator">=</span><span class="token string">&quot;select id,name from t1&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$key</span><span class="token operator">=</span>md5<span class="token punctuation">(</span><span class="token variable">$query</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
if<span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$redis</span>-<span class="token operator">&gt;</span>get<span class="token punctuation">(</span><span class="token variable">$key</span><span class="token punctuation">))</span>
<span class="token punctuation">{</span>
                <span class="token variable">$conn</span><span class="token operator">=</span>mysqli_connect<span class="token punctuation">(</span><span class="token string">&quot;localhost&quot;</span>,<span class="token string">&quot;root&quot;</span>,<span class="token string">&quot;123456&quot;</span>,<span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token variable">$result</span><span class="token operator">=</span>mysqli_query<span class="token punctuation">(</span><span class="token variable">$conn</span>,<span class="token variable">$query</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token variable">$row</span><span class="token operator">=</span>mysqli_fetch_assoc<span class="token punctuation">(</span><span class="token variable">$result</span><span class="token punctuation">))</span>
                <span class="token punctuation">{</span>
                        <span class="token variable">$arr</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token variable">$row</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token variable">$f</span> <span class="token operator">=</span> <span class="token string">&#39;mysql&#39;</span><span class="token punctuation">;</span>
                <span class="token variable">$redis</span>-<span class="token operator">&gt;</span>set<span class="token punctuation">(</span><span class="token variable">$key</span>,serialize<span class="token punctuation">(</span><span class="token variable">$arr</span><span class="token punctuation">))</span><span class="token punctuation">;</span>
                <span class="token variable">$data</span> <span class="token operator">=</span> <span class="token variable">$arr</span> <span class="token punctuation">;</span>
<span class="token punctuation">}</span>
else<span class="token punctuation">{</span>
        <span class="token variable">$f</span> <span class="token operator">=</span> <span class="token string">&#39;redis&#39;</span><span class="token punctuation">;</span>
        <span class="token variable">$data_mem</span><span class="token operator">=</span><span class="token variable">$redis</span>-<span class="token operator">&gt;</span>get<span class="token punctuation">(</span><span class="token variable">$key</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$data</span> <span class="token operator">=</span> unserialize<span class="token punctuation">(</span><span class="token variable">$data_mem</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$f</span><span class="token punctuation">;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;&lt;br&gt;&quot;</span><span class="token punctuation">;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$key</span>&quot;</span><span class="token punctuation">;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;&lt;br&gt;&quot;</span><span class="token punctuation">;</span>
//print_r<span class="token punctuation">(</span><span class="token variable">$data</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
foreach<span class="token punctuation">(</span><span class="token variable">$data</span> as <span class="token variable">$a</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
                <span class="token builtin class-name">echo</span> <span class="token string">&quot;key is  &lt;b&gt;&lt;font color=#FF0000&gt;<span class="token variable">$a</span>[id]&lt;/font&gt;&lt;/b&gt;&quot;</span><span class="token punctuation">;</span>
                <span class="token builtin class-name">echo</span> <span class="token string">&quot;&lt;br&gt;&quot;</span><span class="token punctuation">;</span>
                <span class="token builtin class-name">echo</span> <span class="token string">&quot;value is &lt;b&gt;&lt;font color=#FF0000&gt;<span class="token variable">$a</span>[name]&lt;/font&gt;&lt;/b&gt;&quot;</span><span class="token punctuation">;</span>
                <span class="token builtin class-name">echo</span> <span class="token string">&quot;&lt;br&gt;&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
?<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>测试访问：</strong></p><blockquote><p>第一次头部是mysql，之后刷新一直是Redis</p></blockquote><figure><img src="`+k+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>redis--快照</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>快照，主要涉及的是redis的RDB持久化相关的配置

用如下的指令来让数据保存到磁盘上，即控制RDB快照功能：

save <span class="token operator">&lt;</span>seconds<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>changes<span class="token operator">&gt;</span>

举例
save <span class="token number">900</span> <span class="token number">1</span> //表示每15分钟且至少有1个key改变，就触发一次持久化
save <span class="token number">300</span> <span class="token number">10</span> //表示每5分钟且至少有10个key改变，就触发一次持久化
save <span class="token number">60</span> <span class="token number">10000</span> //表示每60秒至少有10000个key改变，就触发一次持久化

如果想禁用RDB持久化的策略，只要不设置任何save指令就可以，或者给save传入一个空字符串参数也可以达到相同效果，就像这样：

save <span class="token string">&quot;&quot;</span>

如果用户开启了RDB快照功能，那么在redis持久化数据到磁盘时如果出现失败，默认情况下，redis会停止接受所有的写请求。这样做
的好处在于可以让用户很明确的知道内存中的数据和磁盘上的数据已经存在不一致了。如果redis不顾这种不一致，一意孤行的继续接
收写请求，就可能会引起一些灾难性的后果。
如果下一次RDB持久化成功，redis会自动恢复接受写请求。

当然，如果你不在乎这种数据不一致或者有其他的手段发现和控制这种不一致的话，你完全可以关闭这个功能，以便在快照写入失败时，
也能确保redis继续接受新的写请求。配置项如下：

stop-writes-on-bgsave-error <span class="token function">yes</span>

对于存储到磁盘中的快照，可以设置是否进行压缩存储。如果是的话，redis会采用LZF算法进行压缩。如果你不想消耗CPU来进行压缩的
话，可以设置为关闭此功能，但是存储在磁盘上的快照会比较大。

rdbcompression <span class="token function">yes</span>

在存储快照后，我们还可以让redis使用CRC64算法来进行数据校验，但是这样做会增加大约10%的性能消耗，如果你希望获取到最大的性
能提升，可以关闭此功能。

rdbchecksum <span class="token function">yes</span>

设置快照文件的名称，默认配置：

dbfilename dump.rdb

设置这个快照文件存放的路径。默认设置就是当前文件夹：

<span class="token function">dir</span> ./

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>安全:为redis加密：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>可以要求redis客户端在向redis-server发送请求之前，先进行密码验证。当你的redis-server处于一个不太可信的网络环境中时，相信你会用上这个功能。由于redis性能非常高，所以每秒钟可以完成多达15万次的密码尝试，所以你最好设置一个足够复杂的密码，否则很容易被黑客破解。

requirepass <span class="token number">1122334</span>

这里我们通过requirepass将密码设置成“1122334”。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="课外资料" tabindex="-1"><a class="header-anchor" href="#课外资料" aria-hidden="true">#</a> 课外资料</h2><figure><img src="`+b+'" alt="image-20211117160047246" tabindex="0" loading="lazy"><figcaption>image-20211117160047246</figcaption></figure><figure><img src="'+g+'" alt="image-20211117160104710" tabindex="0" loading="lazy"><figcaption>image-20211117160104710</figcaption></figure><h1 id="面试题" tabindex="-1"><a class="header-anchor" href="#面试题" aria-hidden="true">#</a> 面试题</h1><figure><img src="'+h+'" alt="image-20211117160310357" tabindex="0" loading="lazy"><figcaption>image-20211117160310357</figcaption></figure><figure><img src="'+f+'" alt="image-20211117160340557" tabindex="0" loading="lazy"><figcaption>image-20211117160340557</figcaption></figure><figure><img src="'+y+'" alt="image-20211117160428838" tabindex="0" loading="lazy"><figcaption>image-20211117160428838</figcaption></figure><figure><img src="'+q+'" alt="image-20211117160445302" tabindex="0" loading="lazy"><figcaption>image-20211117160445302</figcaption></figure><figure><img src="'+_+'" alt="image-20211117160708876" tabindex="0" loading="lazy"><figcaption>image-20211117160708876</figcaption></figure>',101),S=[w];function R($,O){return n(),a("div",null,S)}const D=s(x,[["render",R],["__file","memcache-redis.html.vue"]]);export{D as default};
