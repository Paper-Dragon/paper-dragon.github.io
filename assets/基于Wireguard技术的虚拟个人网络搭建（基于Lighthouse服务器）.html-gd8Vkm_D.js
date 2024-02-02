import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as d,o as l,c as t,b as e,e as a,a as r,d as n}from"./app-EC-IP3MR.js";const c={},u=n(`<h1 id="基于wireguard技术的虚拟个人网络搭建-基于lighthouse服务器" tabindex="-1"><a class="header-anchor" href="#基于wireguard技术的虚拟个人网络搭建-基于lighthouse服务器"><span>基于Wireguard技术的虚拟个人网络搭建（基于Lighthouse服务器）</span></a></h1><h2 id="服务端安装-强烈推荐-docker-安装" tabindex="-1"><a class="header-anchor" href="#服务端安装-强烈推荐-docker-安装"><span>服务端安装 （强烈推荐 docker 安装）</span></a></h2><h2 id="docker安装wireguard-更简单更方便" tabindex="-1"><a class="header-anchor" href="#docker安装wireguard-更简单更方便"><span>Docker安装Wireguard (更简单更方便)</span></a></h2><h3 id="通过容器安装wg-easy" tabindex="-1"><a class="header-anchor" href="#通过容器安装wg-easy"><span>通过容器安装wg-easy</span></a></h3><p>括号里面的的是你需要修改的，修改完删掉就可以了</p><h4 id="关于centos7-模块安装" tabindex="-1"><a class="header-anchor" href="#关于centos7-模块安装"><span>关于CentOS7 模块安装</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> yum <span class="token function">install</span> epel-release elrepo-release
$ <span class="token function">sudo</span> yum <span class="token function">install</span> yum-plugin-elrepo
$ <span class="token function">sudo</span> yum <span class="token function">install</span> kmod-wireguard wireguard-tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>docker run -d \\
  --name=wg-easy \\
  -e WG_HOST=123.123.123.123 (🚨这里输入服务器的公网IP) \\
  -e PASSWORD=passwd123 (🚨这里输入你的密码) \\
  -e WG_DEFAULT_ADDRESS=10.0.8.x （🚨默认IP地址）\\
  -e WG_DEFAULT_DNS=114.114.114.114 （🚨默认DNS）\\
  -e WG_ALLOWED_IPS=10.0.8.0/24 （🚨允许连接的IP段）\\
  -e WG_PERSISTENT_KEEPALIVE=25 （🚨重连间隔）\\
  -v ~/.wg-easy:/etc/wireguard \\
  -p 51820:51820/udp \\
  -p 51821:51821/tcp \\
  --cap-add=NET_ADMIN \\
  --cap-add=SYS_MODULE \\
  --sysctl=&quot;net.ipv4.conf.all.src_valid_mark=1&quot; \\
  --sysctl=&quot;net.ipv4.ip_forward=1&quot; \\
  --restart unless-stopped \\
  weejewel/wg-easy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更新容器命令" tabindex="-1"><a class="header-anchor" href="#更新容器命令"><span>更新容器命令</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>docker stop wg-easy
docker rm wg-easy
docker pull weejewel/wg-easy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="客户端下载与配置" tabindex="-1"><a class="header-anchor" href="#客户端下载与配置"><span>客户端下载与配置</span></a></h2>`,11),v={href:"https://www.wireguard.com/install/",target:"_blank",rel:"noopener noreferrer"},o=n(`<h2 id="手动安装wireguard" tabindex="-1"><a class="header-anchor" href="#手动安装wireguard"><span>手动安装Wireguard</span></a></h2><h3 id="安装wireguard-以ubuntu20-04为基础" tabindex="-1"><a class="header-anchor" href="#安装wireguard-以ubuntu20-04为基础"><span>安装Wireguard（以ubuntu20.04为基础）</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#root权限
sudo -i

#安装wireguard软件
apt install wireguard resolvconf -y

#开启IP转发
echo &quot;net.ipv4.ip_forward = 1&quot; &gt;&gt; /etc/sysctl.conf
sysctl -p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="进入配置存储路径-调整目录权限" tabindex="-1"><a class="header-anchor" href="#进入配置存储路径-调整目录权限"><span>进入配置存储路径，调整目录权限</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>cd /etc/wireguard/
chmod 0777 /etc/wireguard

#调整目录默认权限
umask 077
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生成服务器秘钥" tabindex="-1"><a class="header-anchor" href="#生成服务器秘钥"><span>生成服务器秘钥</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#生成私钥
wg genkey &gt; server.key

#通过私钥生成公钥
wg pubkey &lt; server.key &gt; server.key.pub
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生成客户端-client1-秘钥" tabindex="-1"><a class="header-anchor" href="#生成客户端-client1-秘钥"><span>生成客户端(client1)秘钥</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#生成私钥
wg genkey &gt; client1.key

#通过私钥生成公钥
wg pubkey &lt; client1.key &gt; client1.key.pub
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="显示所有生成的秘钥" tabindex="-1"><a class="header-anchor" href="#显示所有生成的秘钥"><span>显示所有生成的秘钥</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>cat server.key &amp;&amp; cat server.key.pub &amp;&amp; cat client1.key &amp;&amp; cat client1.key.pub
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="自动创建服务器配置文件" tabindex="-1"><a class="header-anchor" href="#自动创建服务器配置文件"><span>自动创建服务器配置文件</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>echo &quot;
[Interface]
PrivateKey = $(cat server.key) # 填写本机的privatekey 内容
Address = 10.0.8.1 #本机虚拟局域网IP

PostUp   = iptables -A FORWARD -i wg0 -j ACCEPT; iptables -A FORWARD -o wg0 -j ACCEPT; iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
PostDown = iptables -D FORWARD -i wg0 -j ACCEPT; iptables -D FORWARD -o wg0 -j ACCEPT; iptables -t nat -D POSTROUTING -o eth0 -j MASQUERADE
#注意eth0需要为本机网卡名称

ListenPort = 50814 # 监听端口
DNS = 8.8.8.8
MTU = 1420
[Peer]
PublicKey =  $(cat client1.key.pub)  #自动client1的公钥
AllowedIPs = 10.0.8.10/32 #客户端所使用的IP&quot; &gt; wg0.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置服务器开机自启动" tabindex="-1"><a class="header-anchor" href="#设置服务器开机自启动"><span>设置服务器开机自启动</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>systemctl enable wg-quick@wg0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="启动wireguard" tabindex="-1"><a class="header-anchor" href="#启动wireguard"><span>启动wireguard</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#启动wg0
wg-quick up wg0
#关闭wg0
wg-quick down wg0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="手动创建服务器配置文件-待完成" tabindex="-1"><a class="header-anchor" href="#手动创建服务器配置文件-待完成"><span>手动创建服务器配置文件（待完成）</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>nano /etc/wireguard/wg0.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="wireguard客户端下载地址" tabindex="-1"><a class="header-anchor" href="#wireguard客户端下载地址"><span>wireguard客户端下载地址</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>https://www.wireguard.com/install/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="客户端配置-以client1为例" tabindex="-1"><a class="header-anchor" href="#客户端配置-以client1为例"><span>客户端配置（以client1为例）</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[Interface]
PrivateKey = 6M8HEZioew+vR3i53sPc64Vg40YsuMzh4vI1Lkc88Xo= #此处为client1的私钥
Address = 10.0.8.10 #此处为peer规定的客户端IP
MTU = 1500

[Peer]
PublicKey = Tt5WEa0Vycf4F+TTjR2TAHDfa2onhh+tY8YOIT3cKjI= #此处为server的公钥
AllowedIPs = 10.0.8.0/24 #此处为允许的服务器IP
Endpoint = 114.132.56.178:50814 #服务器对端IP+端口
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="增加服务器客户端节点client2" tabindex="-1"><a class="header-anchor" href="#增加服务器客户端节点client2"><span>增加服务器客户端节点client2</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#生成私钥
wg genkey &gt; client2.key

#通过私钥生成公钥
wg pubkey &lt; client2.key &gt; client2.key.pub

#将peer公钥加入wg0.conf配置
echo &quot;
[Peer]
PublicKey =  $(cat client2.key.pub)  #自动client1的公钥
AllowedIPs = 10.0.8.11/32 #客户端Client2所使用的IP&quot; &gt;&gt; wg0.conf

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25);function b(m,h){const i=d("ExternalLinkIcon");return l(),t("div",null,[u,e("p",null,[a("客户端的下载（需要有科学上网条件）："),e("a",v,[a("Installation - WireGuard"),r(i)])]),o])}const x=s(c,[["render",b],["__file","基于Wireguard技术的虚拟个人网络搭建（基于Lighthouse服务器）.html.vue"]]);export{x as default};
