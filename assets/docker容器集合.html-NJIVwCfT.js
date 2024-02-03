import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as p,c as r,b as n,e as s,a as e,d as t}from"./app-4LVbi6TF.js";const o={},c=t(`<h1 id="docker容器集合" tabindex="-1"><a class="header-anchor" href="#docker容器集合"><span>docker容器集合</span></a></h1><h2 id="docker-部署和镜像仓库优化" tabindex="-1"><a class="header-anchor" href="#docker-部署和镜像仓库优化"><span>docker 部署和镜像仓库优化</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> get.docker.com  <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> <span class="token function">sh</span>
<span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/docker
<span class="token function">sudo</span> <span class="token function">tee</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
{
  &quot;registry-mirrors&quot;: [&quot;http://hub-mirror.c.163.com&quot;]
}
EOF</span>
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>
<span class="token function">sudo</span> systemctl start <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="普通用户使用docker" tabindex="-1"><a class="header-anchor" href="#普通用户使用docker"><span>普通用户使用docker</span></a></h3><blockquote><p>以下方法仅适用于单用户电脑，若为多用户，即有越权漏洞！！！！</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#使用root增加docker组.rpm或deb包默认已经创建</span>
<span class="token function">sudo</span> <span class="token function">groupadd</span> <span class="token function">docker</span>

<span class="token comment"># 方法①</span>
<span class="token comment"># 普通用户加到docker组中</span>
<span class="token function">sudo</span> gpasswd <span class="token parameter variable">-a</span> <span class="token variable">\${<span class="token environment constant">USER</span>}</span> <span class="token function">docker</span>
<span class="token comment"># 必须切换或者退出当前账户再从新登入才会生效</span>

<span class="token comment"># 方法②</span>
<span class="token comment"># 给ugo都增加读写权限</span>
<span class="token function">sudo</span> <span class="token function">chmod</span> a+rw /var/run/docker.sock
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker-常用的容器" tabindex="-1"><a class="header-anchor" href="#docker-常用的容器"><span>docker 常用的容器</span></a></h2><h3 id="mysql容器" tabindex="-1"><a class="header-anchor" href="#mysql容器"><span>mysql容器</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token punctuation">\\</span>
      <span class="token parameter variable">--name</span> mysql  <span class="token punctuation">\\</span>
      <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token punctuation">\\</span>
      <span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token punctuation">\\</span>
      <span class="token parameter variable">-v</span> /home/mysql:/val/lib/mysql <span class="token punctuation">\\</span>
      <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token string">&quot;1mysql.&quot;</span> <span class="token punctuation">\\</span>
      <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
      <span class="token parameter variable">-d</span> mysql:5.7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用mysql客户端连接到数据库" tabindex="-1"><a class="header-anchor" href="#使用mysql客户端连接到数据库"><span>使用MySQL客户端连接到数据库</span></a></h3><p>一旦数据库容器启动，就可以使用安装在主机上的任何MySQL客户端应用程序以用户ID <code>root</code> 和密码<code>websecret</code> 连接到 <code>localhost:3306</code>。</p>`,11),d={href:"https://www.adminer.org/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://hub.docker.com/_/adminer",target:"_blank",rel:"noopener noreferrer"},v=t(`<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>docker run \\
  <span class="token operator">-</span>it <span class="token operator">--</span>rm <span class="token operator">--</span>name adminer \\
  <span class="token operator">-</span>p <span class="token number">8080</span><span class="token operator">:</span><span class="token number">8080</span> \\
  adminer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动后，在浏览器中打开 <code>http://localhost:8080</code> 并输入MySQL登录凭据：</p><h3 id="mongodb容器" tabindex="-1"><a class="header-anchor" href="#mongodb容器"><span>mongodb容器</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> run  <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
     <span class="token parameter variable">--name</span> mongodb <span class="token punctuation">\\</span>
     <span class="token parameter variable">-v</span> /data/mongo:/data/db <span class="token punctuation">\\</span>
     <span class="token parameter variable">-p</span> <span class="token number">27017</span>:27017 <span class="token punctuation">\\</span>
     <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
     mongo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#进入 \`mongo\`</span>
mongosh
<span class="token comment">#进入 admin 的数据库</span>
use admin
<span class="token comment">#创建管理员用户</span>
db.createUser<span class="token punctuation">(</span>
   <span class="token punctuation">{</span>
     user: <span class="token string">&quot;root&quot;</span>,
     pwd: <span class="token string">&quot;mongo&quot;</span>,
     roles: <span class="token punctuation">[</span> <span class="token punctuation">{</span> role: <span class="token string">&quot;root&quot;</span>, db: <span class="token string">&quot;admin&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">]</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="alist安装" tabindex="-1"><a class="header-anchor" href="#alist安装"><span>alist安装</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
	<span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
	<span class="token parameter variable">-v</span> /opt/alist:/opt/alist/data <span class="token punctuation">\\</span>
	<span class="token parameter variable">-p</span> <span class="token number">5244</span>:5244 <span class="token punctuation">\\</span>
	<span class="token parameter variable">--name</span><span class="token operator">=</span><span class="token string">&quot;alist&quot;</span> <span class="token punctuation">\\</span>
	xhofe/alist:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取alist密码</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> alist ./alist admin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="中文版本的-portainer" tabindex="-1"><a class="header-anchor" href="#中文版本的-portainer"><span>中文版本的 portainer</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
	<span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
	<span class="token parameter variable">--name</span><span class="token operator">=</span><span class="token string">&quot;portainer&quot;</span> <span class="token punctuation">\\</span>
	<span class="token parameter variable">-p</span> <span class="token number">9000</span>:9000 <span class="token punctuation">\\</span>
	<span class="token parameter variable">-v</span> /var/run/docker.sock:/var/run/docker.sock <span class="token punctuation">\\</span>
	<span class="token parameter variable">-v</span> ./portainer_data:/data <span class="token punctuation">\\</span>
	<span class="token number">6053537</span>/portainer-ce
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="英文版本portainer" tabindex="-1"><a class="header-anchor" href="#英文版本portainer"><span>英文版本portainer</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
	<span class="token parameter variable">-p</span> <span class="token number">9000</span>:9000 <span class="token punctuation">\\</span>
	<span class="token parameter variable">-p</span> <span class="token number">9443</span>:9443 <span class="token punctuation">\\</span>
	<span class="token parameter variable">--name</span> portainer <span class="token punctuation">\\</span>
	<span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
	<span class="token parameter variable">-v</span> /var/run/docker.sock:/var/run/docker.sock <span class="token punctuation">\\</span>
	<span class="token parameter variable">-v</span> ./portainer_data:/data <span class="token punctuation">\\</span>
	portainer/portainer-ce:latest

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jupyter镜像" tabindex="-1"><a class="header-anchor" href="#jupyter镜像"><span>jupyter镜像</span></a></h3><hr><h4 id="官方镜像" tabindex="-1"><a class="header-anchor" href="#官方镜像"><span>官方镜像</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>docker run -p 8090:8000 -d --name jupyterhub001  --restart=always jupyterhub/jupyterhub:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="个人镜像-gpu" tabindex="-1"><a class="header-anchor" href="#个人镜像-gpu"><span>个人镜像 (GPU)</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">8000</span>:8000 <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> jupyterhub  <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">--gpus</span> all muaimingjun/jupyterhub:1.2.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="wireguard" tabindex="-1"><a class="header-anchor" href="#wireguard"><span>WireGuard</span></a></h3><h4 id="服务器端" tabindex="-1"><a class="header-anchor" href="#服务器端"><span>服务器端</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">--name</span><span class="token operator">=</span>wg-easy <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">WG_HOST</span><span class="token operator">=</span>🚨YOUR_SERVER_IP <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">PASSWORD</span><span class="token operator">=</span>🚨YOUR_ADMIN_PASSWORD <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> ~/.wg-easy:/etc/wireguard <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token number">51820</span>:51820/udp <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token number">51821</span>:51821/tcp <span class="token punctuation">\\</span>
  --cap-add<span class="token operator">=</span>NET_ADMIN <span class="token punctuation">\\</span>
  --cap-add<span class="token operator">=</span>SYS_MODULE <span class="token punctuation">\\</span>
  <span class="token parameter variable">--sysctl</span><span class="token operator">=</span><span class="token string">&quot;net.ipv4.conf.all.src_valid_mark=1&quot;</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">--sysctl</span><span class="token operator">=</span><span class="token string">&quot;net.ipv4.ip_forward=1&quot;</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">--restart</span> unless-stopped <span class="token punctuation">\\</span>
  weejewel/wg-easy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="客户端" tabindex="-1"><a class="header-anchor" href="#客户端"><span>客户端</span></a></h4>`,23),m={href:"https://www.wireguard.com/install/",target:"_blank",rel:"noopener noreferrer"},b=t(`<li><p>ubuntu</p></li><li><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> iptables wireguard openresolv
<span class="token function">chmod</span> <span class="token number">600</span> /etc/wireguard/wg0.conf
wg-quick up wg0
wg-quick down wg0
systemctl <span class="token builtin class-name">enable</span> wg-quick@wg0.service
systemctl start wg-quick@wg0.service
wg show
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,2),k=t(`<h3 id="frp-docker" tabindex="-1"><a class="header-anchor" href="#frp-docker"><span>frp docker</span></a></h3><h4 id="服务端" tabindex="-1"><a class="header-anchor" href="#服务端"><span>服务端</span></a></h4><p>限制端口版本frp</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
	<span class="token parameter variable">--restart</span> always <span class="token punctuation">\\</span>
	<span class="token parameter variable">-p</span> <span class="token number">50000</span>-50004:50000-50004 <span class="token punctuation">\\</span>
	<span class="token parameter variable">-v</span> ./frps.toml:/etc/frp/frps.toml <span class="token punctuation">\\</span>
	<span class="token parameter variable">--name</span> frp-20240111 <span class="token punctuation">\\</span>
	snowdreamtech/frps:0.52.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-toml line-numbers-mode" data-ext="toml" data-title="toml"><pre class="language-toml"><code><span class="token punctuation">[</span><span class="token table class-name">common</span><span class="token punctuation">]</span>
<span class="token key property">bind_port</span> <span class="token punctuation">=</span> <span class="token number">50000</span>
<span class="token comment"># 启用面板</span>
<span class="token key property">dashboard_port</span> <span class="token punctuation">=</span> <span class="token number">50001</span>
<span class="token comment"># 面板登录名和密码</span>
<span class="token key property">dashboard_user</span> <span class="token punctuation">=</span> admin
<span class="token key property">dashboard_pwd</span> <span class="token punctuation">=</span> xxxxxx
<span class="token comment"># 使用http代理并使用8888端口进行穿透</span>
<span class="token comment">#vhost_http_port = 8889</span>
<span class="token comment"># 使用https代理并使用9999端口进行穿透</span>
<span class="token comment">#vhost_https_port = 9999</span>
<span class="token comment"># 日志路径</span>
<span class="token key property">log_file</span> <span class="token punctuation">=</span> <span class="token punctuation">.</span>/frps<span class="token punctuation">.</span>log
<span class="token comment"># 日志级别</span>
<span class="token key property">log_level</span> <span class="token punctuation">=</span> info
<span class="token comment"># 日志最大保存天数</span>
<span class="token key property">log_max_days</span> <span class="token punctuation">=</span> <span class="token number">2</span>
<span class="token comment"># 认证超时时间</span>
<span class="token key property">authentication_timeout</span> <span class="token punctuation">=</span> <span class="token number">900</span>
<span class="token comment"># 认证token，客户端需要和此对应</span>
<span class="token key property">token</span><span class="token punctuation">=</span>xxxxx
<span class="token comment"># 最大连接数</span>
<span class="token key property">max_pool_count</span> <span class="token punctuation">=</span> <span class="token number">5</span>
<span class="token key property">max_ports_per_client</span> <span class="token punctuation">=</span> <span class="token number">0</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>frp-restart.sh</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token assign-left variable">NAME</span><span class="token operator">=</span>frps
<span class="token assign-left variable">IMAGE</span><span class="token operator">=</span>snowdreamtech/frps

<span class="token function">docker</span> stop <span class="token variable">$NAME</span>
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token variable">$NAME</span>

<span class="token function">docker</span> run <span class="token parameter variable">--restart</span><span class="token operator">=</span>on-failure:3 <span class="token parameter variable">--network</span> <span class="token function">host</span> <span class="token parameter variable">-v</span> /home/docker/frp/frps.ini:/etc/frp/frps.ini <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> <span class="token variable">$NAME</span> <span class="token variable">$IMAGE</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置文件</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>common<span class="token punctuation">]</span>
bind_port <span class="token operator">=</span> <span class="token number">7000</span>
<span class="token comment"># 启用面板</span>
dashboard_port <span class="token operator">=</span> <span class="token number">7500</span>
<span class="token comment"># 面板登录名和密码</span>
dashboard_user <span class="token operator">=</span> admin
dashboard_pwd <span class="token operator">=</span> xxxxxxx
<span class="token comment"># 使用http代理并使用8888端口进行穿透</span>
vhost_http_port <span class="token operator">=</span> <span class="token number">8889</span>
<span class="token comment"># 使用https代理并使用9999端口进行穿透</span>
vhost_https_port <span class="token operator">=</span> <span class="token number">9999</span>
<span class="token comment"># 日志路径</span>
log_file <span class="token operator">=</span> ./frps.log
<span class="token comment"># 日志级别</span>
log_level <span class="token operator">=</span> info
<span class="token comment"># 日志最大保存天数</span>
log_max_days <span class="token operator">=</span> <span class="token number">2</span>
<span class="token comment"># 认证超时时间</span>
authentication_timeout <span class="token operator">=</span> <span class="token number">900</span>
<span class="token comment"># 认证token，客户端需要和此对应</span>
<span class="token assign-left variable">token</span><span class="token operator">=</span><span class="token number">123123123</span>
<span class="token comment"># 最大连接数</span>
max_pool_count <span class="token operator">=</span> <span class="token number">5</span>
max_ports_per_client <span class="token operator">=</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="客户端-1" tabindex="-1"><a class="header-anchor" href="#客户端-1"><span>客户端</span></a></h4><p>docker-compose.yml</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
    <span class="token key atrule">frpc</span><span class="token punctuation">:</span>
        <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
        <span class="token key atrule">network_mode</span><span class="token punctuation">:</span> host
        <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&#39;./frpc.ini:/etc/frp/frpc.ini&#39;</span>
        <span class="token key atrule">container_name</span><span class="token punctuation">:</span> frpc
        <span class="token key atrule">image</span><span class="token punctuation">:</span> snowdreamtech/frpc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>frpc.ini</p><div class="language-ini line-numbers-mode" data-ext="ini" data-title="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">common</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">server_addr</span><span class="token punctuation">=</span> <span class="token value attr-value">127.0.0.1 #服务端服务器的公网ip</span>
<span class="token key attr-name">server_port</span><span class="token punctuation">=</span> <span class="token value attr-value">5400 #监听端口</span>
<span class="token key attr-name">token</span> <span class="token punctuation">=</span> <span class="token value attr-value">pwd123 #服务端与客户端的认证密钥</span>

<span class="token comment">#[ssh] #ssh不建议轻易打开，被打的概率很高</span>
<span class="token comment">#type = tcp</span>
<span class="token comment">#local_ip = 127.0.0.1</span>
<span class="token comment">#local_port = 22</span>
<span class="token comment">#remote_port = 6000</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">jellyfin</span><span class="token punctuation">]</span></span> #tcp部署
<span class="token key attr-name">type</span> <span class="token punctuation">=</span> <span class="token value attr-value">tcp</span>
<span class="token key attr-name">local_ip</span> <span class="token punctuation">=</span> <span class="token value attr-value">127.0.0.1</span>
<span class="token key attr-name">local_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">8096 #本地服务端口</span>
<span class="token key attr-name">remote_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">6001 #远程服务器端口</span>


<span class="token comment">#[https-web] #https部署</span>
<span class="token comment">#type=https #协议</span>
<span class="token comment">#local_port = 22300 #本地服务端口</span>
<span class="token comment">#custom_domains = web.com #域名，要解析好的</span>

<span class="token comment">#plugin= https2http #用于将本地的HTTP服务转为HTTPS的插件</span>
<span class="token comment">#plugin_local_addr = 127.0.0.1:22300 #本地服务端口 </span>
<span class="token comment">#plugin_crt_path = /root/ssl/web.top/web.com_bundle.crt #这两个HTTPS证书是nginx格式的,需要在证书颁发机构下载，然后放入容器内才能正常使用</span>
<span class="token comment">#plugin_key_path = /root/ssl/web.top/web.com.key </span>
<span class="token comment">#plugin_host_header_rewrite = 127.0.0.1</span>
<span class="token comment">#plugin_header_X-From-Where = frp</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker-ssh-探针" tabindex="-1"><a class="header-anchor" href="#docker-ssh-探针"><span>docker ssh 探针</span></a></h3>`,15),h={href:"https://man.openbsd.org/sshd_config#Match",target:"_blank",rel:"noopener noreferrer"},g={href:"https://docs.linuxserver.io/images/docker-openssh-server",target:"_blank",rel:"noopener noreferrer"},_={href:"https://www.ssh.com/academy/ssh/authorized-keys-openssh",target:"_blank",rel:"noopener noreferrer"},f={href:"https://blog.zzsqwq.cn/posts/docker-gitlab-ssh/",target:"_blank",rel:"noopener noreferrer"},y=t(`<div class="language-\\ line-numbers-mode" data-ext="\\" data-title="\\"><pre class="language-\\"><code>---
version: &quot;2.1&quot;
services:
  openssh-server:
    image: linuxserver/openssh-server:latest
    container_name: openssh-server
    hostname: openssh-server #optional
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Asia/Shanghai
      #- PUBLIC_KEY=yourpublickey #optional
      #- PUBLIC_KEY_FILE=/path/to/file #optional
      #- PUBLIC_KEY_DIR=/path/to/directory/containing/_only_/pubkeys #optional
      #- PUBLIC_KEY_URL=https://github.com/username.keys #optional
      - SUDO_ACCESS=true #optional
      - PASSWORD_ACCESS=true #optional
      - USER_PASSWORD=password #optional
      #- USER_PASSWORD_FILE=/path/to/file #optional
      - USER_NAME=user #optional
    #volumes:
    #  - /path/to/appdata/config:/config
    #ports:
    #  - 2222:2222
    networks:
      front-net:
        ipv4_address: 173.18.0.100
    restart: unless-stopped
networks:
  front-net:
    ipam:
      driver: default
      config:
        - subnet: &quot;173.18.0.0/24&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在宿主机运行以下脚本</p><p>方法1（两次密码认证）</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">useradd</span> <span class="token parameter variable">-m</span> user
<span class="token function">passwd</span> user <span class="token comment"># 123</span>

yum <span class="token function">install</span> <span class="token parameter variable">-y</span> sshpass
<span class="token comment">#编辑/etc/ssh/sshd_config</span>

Match User user
  ForceCommand sshpass <span class="token parameter variable">-p</span> password <span class="token function">ssh</span> <span class="token parameter variable">-v</span> <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no user@173.18.0.100 <span class="token parameter variable">-p</span> <span class="token number">2222</span> <span class="token variable">$SSH_ORIGINAL_COMMAND</span> <span class="token variable">$@</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法2（两次key透传）(未验证)</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 一段登陆脚本</span>
<span class="token comment">#!/bin/sh</span>

<span class="token function">ssh</span> <span class="token parameter variable">-i</span> /home/git/.ssh/id_rsa <span class="token parameter variable">-p</span> <span class="token number">4022</span> <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no git@127.0.0.1 <span class="token comment"># &quot;SSH_ORIGINAL_COMMAND=\\&quot;$SSH_ORIGINAL_COMMAND\\&quot; $0 $@&quot;</span>



宿主机 ~/.ssh/authorized_keys: 格式
<span class="token assign-left variable">command</span><span class="token operator">=</span><span class="token string">&quot;脚本.sh&quot;</span> ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC3<span class="token punctuation">..</span>. user@example.com


<span class="token assign-left variable"><span class="token environment constant">PS1</span></span><span class="token operator">=</span><span class="token string">&#39;$ PWD $&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="poste-io" tabindex="-1"><a class="header-anchor" href="#poste-io"><span>poste.io</span></a></h3><p>一键构建邮件服务器</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token punctuation">\\</span>
    <span class="token parameter variable">--net</span><span class="token operator">=</span>host <span class="token punctuation">\\</span>
    <span class="token parameter variable">-itd</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-e</span> <span class="token assign-left variable">TZ</span><span class="token operator">=</span>Asia/Shanghai <span class="token punctuation">\\</span>
    <span class="token parameter variable">-v</span> ./data:/data <span class="token punctuation">\\</span>
    <span class="token parameter variable">--name</span> <span class="token string">&quot;mailserver&quot;</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-h</span> <span class="token string">&quot;mail.itgpt.com&quot;</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-t</span> analogic/poste.io:2.3.13
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function x(w,q){const a=l("ExternalLinkIcon");return p(),r("div",null,[c,n("p",null,[s("如果你手头没有MySQL客户端，"),n("a",d,[s("Admineris"),e(a)]),s("是一个轻量级的基于php的选项。它也可以作为 "),n("a",u,[s("Docker image"),e(a)]),s(" ,在另一个终端中运行以下命令：")]),v,n("ul",null,[n("li",null,[n("p",null,[s("windows 客户端下载 （科学上网）"),n("a",m,[s("Installation - WireGuard"),e(a)])])]),b]),k,n("blockquote",null,[n("p",null,[s("参考链接1： "),n("a",h,[s("sshd_config（5） - OpenBSD 手册页"),e(a)])]),n("p",null,[s("参考链接2： "),n("a",g,[s("Linux服务器/OpenSSH-server - LinuxServer.io"),e(a)])]),n("p",null,[s("参考链接3："),n("a",_,[s("Detailed Description of How to Configure Authorized Keys for OpenSSH"),e(a)])]),n("p",null,[s("参考链接4："),n("a",f,[s("Docker-Gitlab 与主机共用 ssh 的 22 端口 · Zs's Blog (zzsqwq.cn)"),e(a)])])]),y])}const E=i(o,[["render",x],["__file","docker容器集合.html.vue"]]);export{E as default};
