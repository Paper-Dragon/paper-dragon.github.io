import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as n,d as a}from"./app-C9C5X1Gs.js";const s={},l=a(`<h1 id="基于wireguard技术的虚拟个人网络搭建-基于lighthouse服务器" tabindex="-1"><a class="header-anchor" href="#基于wireguard技术的虚拟个人网络搭建-基于lighthouse服务器"><span>基于Wireguard技术的虚拟个人网络搭建（基于Lighthouse服务器）</span></a></h1><h2 id="服务端安装-强烈推荐-docker-安装" tabindex="-1"><a class="header-anchor" href="#服务端安装-强烈推荐-docker-安装"><span>服务端安装 （强烈推荐 docker 安装）</span></a></h2><h2 id="docker安装wireguard-更简单更方便" tabindex="-1"><a class="header-anchor" href="#docker安装wireguard-更简单更方便"><span>Docker安装Wireguard (更简单更方便)</span></a></h2><h3 id="通过容器安装wg-easy" tabindex="-1"><a class="header-anchor" href="#通过容器安装wg-easy"><span>通过容器安装wg-easy</span></a></h3><p>括号里面的的是你需要修改的，修改完删掉就可以了</p><h4 id="关于centos7-模块安装" tabindex="-1"><a class="header-anchor" href="#关于centos7-模块安装"><span>关于CentOS7 模块安装</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> yum <span class="token function">install</span> epel-release elrepo-release
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="客户端下载与配置" tabindex="-1"><a class="header-anchor" href="#客户端下载与配置"><span>客户端下载与配置</span></a></h2><p>客户端的下载（需要有科学上网条件）：<a href="https://www.wireguard.com/install/" target="_blank" rel="noopener noreferrer">Installation - WireGuard</a></p><h2 id="手动安装wireguard" tabindex="-1"><a class="header-anchor" href="#手动安装wireguard"><span>手动安装Wireguard</span></a></h2><h3 id="安装wireguard-以ubuntu20-04为基础" tabindex="-1"><a class="header-anchor" href="#安装wireguard-以ubuntu20-04为基础"><span>安装Wireguard（以ubuntu20.04为基础）</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#root权限
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37),t=[l];function d(r,c){return n(),i("div",null,t)}const o=e(s,[["render",d],["__file","基于Wireguard技术的虚拟个人网络搭建（基于Lighthouse服务器）.html.vue"]]),g=JSON.parse('{"path":"/note-book/VirtualPrivateNetwork/%E5%B9%BF%E4%B9%89VirtualPrivateNetwork/%E5%9F%BA%E4%BA%8EWireguard%E6%8A%80%E6%9C%AF%E7%9A%84%E8%99%9A%E6%8B%9F%E4%B8%AA%E4%BA%BA%E7%BD%91%E7%BB%9C%E6%90%AD%E5%BB%BA%EF%BC%88%E5%9F%BA%E4%BA%8ELighthouse%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%89.html","title":"基于Wireguard技术的虚拟个人网络搭建（基于Lighthouse服务器）","lang":"zh-CN","frontmatter":{"description":"基于Wireguard技术的虚拟个人网络搭建（基于Lighthouse服务器） 服务端安装 （强烈推荐 docker 安装） Docker安装Wireguard (更简单更方便) 通过容器安装wg-easy 括号里面的的是你需要修改的，修改完删掉就可以了 关于CentOS7 模块安装 更新容器命令 客户端下载与配置 客户端的下载（需要有科学上网条件）：...","head":[["meta",{"property":"og:url","content":"https://paper-dragon.github.io/note-book/VirtualPrivateNetwork/%E5%B9%BF%E4%B9%89VirtualPrivateNetwork/%E5%9F%BA%E4%BA%8EWireguard%E6%8A%80%E6%9C%AF%E7%9A%84%E8%99%9A%E6%8B%9F%E4%B8%AA%E4%BA%BA%E7%BD%91%E7%BB%9C%E6%90%AD%E5%BB%BA%EF%BC%88%E5%9F%BA%E4%BA%8ELighthouse%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%89.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"基于Wireguard技术的虚拟个人网络搭建（基于Lighthouse服务器）"}],["meta",{"property":"og:description","content":"基于Wireguard技术的虚拟个人网络搭建（基于Lighthouse服务器） 服务端安装 （强烈推荐 docker 安装） Docker安装Wireguard (更简单更方便) 通过容器安装wg-easy 括号里面的的是你需要修改的，修改完删掉就可以了 关于CentOS7 模块安装 更新容器命令 客户端下载与配置 客户端的下载（需要有科学上网条件）：..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-13T15:08:38.000Z"}],["meta",{"property":"article:author","content":"PaperDragon"}],["meta",{"property":"article:modified_time","content":"2023-08-13T15:08:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"基于Wireguard技术的虚拟个人网络搭建（基于Lighthouse服务器）\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-13T15:08:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"服务端安装 （强烈推荐 docker 安装）","slug":"服务端安装-强烈推荐-docker-安装","link":"#服务端安装-强烈推荐-docker-安装","children":[]},{"level":2,"title":"Docker安装Wireguard  (更简单更方便)","slug":"docker安装wireguard-更简单更方便","link":"#docker安装wireguard-更简单更方便","children":[{"level":3,"title":"通过容器安装wg-easy","slug":"通过容器安装wg-easy","link":"#通过容器安装wg-easy","children":[]},{"level":3,"title":"更新容器命令","slug":"更新容器命令","link":"#更新容器命令","children":[]}]},{"level":2,"title":"客户端下载与配置","slug":"客户端下载与配置","link":"#客户端下载与配置","children":[]},{"level":2,"title":"手动安装Wireguard","slug":"手动安装wireguard","link":"#手动安装wireguard","children":[{"level":3,"title":"安装Wireguard（以ubuntu20.04为基础）","slug":"安装wireguard-以ubuntu20-04为基础","link":"#安装wireguard-以ubuntu20-04为基础","children":[]},{"level":3,"title":"进入配置存储路径，调整目录权限","slug":"进入配置存储路径-调整目录权限","link":"#进入配置存储路径-调整目录权限","children":[]},{"level":3,"title":"生成服务器秘钥","slug":"生成服务器秘钥","link":"#生成服务器秘钥","children":[]},{"level":3,"title":"生成客户端(client1)秘钥","slug":"生成客户端-client1-秘钥","link":"#生成客户端-client1-秘钥","children":[]},{"level":3,"title":"显示所有生成的秘钥","slug":"显示所有生成的秘钥","link":"#显示所有生成的秘钥","children":[]},{"level":3,"title":"自动创建服务器配置文件","slug":"自动创建服务器配置文件","link":"#自动创建服务器配置文件","children":[]},{"level":3,"title":"设置服务器开机自启动","slug":"设置服务器开机自启动","link":"#设置服务器开机自启动","children":[]},{"level":3,"title":"启动wireguard","slug":"启动wireguard","link":"#启动wireguard","children":[]},{"level":3,"title":"手动创建服务器配置文件（待完成）","slug":"手动创建服务器配置文件-待完成","link":"#手动创建服务器配置文件-待完成","children":[]},{"level":3,"title":"wireguard客户端下载地址","slug":"wireguard客户端下载地址","link":"#wireguard客户端下载地址","children":[]},{"level":3,"title":"客户端配置（以client1为例）","slug":"客户端配置-以client1为例","link":"#客户端配置-以client1为例","children":[]},{"level":3,"title":"增加服务器客户端节点client2","slug":"增加服务器客户端节点client2","link":"#增加服务器客户端节点client2","children":[]}]}],"git":{"createdTime":1691939318000,"updatedTime":1691939318000,"contributors":[{"name":"PaperDragon","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":2.29,"words":686},"filePathRelative":"note-book/VirtualPrivateNetwork/广义VirtualPrivateNetwork/基于Wireguard技术的虚拟个人网络搭建（基于Lighthouse服务器）.md","localizedDate":"2023年8月13日","excerpt":"\\n<h2>服务端安装 （强烈推荐 docker 安装）</h2>\\n<h2>Docker安装Wireguard  (更简单更方便)</h2>\\n<h3>通过容器安装wg-easy</h3>\\n<p>括号里面的的是你需要修改的，修改完删掉就可以了</p>\\n<h4>关于CentOS7 模块安装</h4>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>$ <span class=\\"token function\\">sudo</span> yum <span class=\\"token function\\">install</span> epel-release elrepo-release\\n$ <span class=\\"token function\\">sudo</span> yum <span class=\\"token function\\">install</span> yum-plugin-elrepo\\n$ <span class=\\"token function\\">sudo</span> yum <span class=\\"token function\\">install</span> kmod-wireguard wireguard-tools\\n</code></pre></div>","autoDesc":true}');export{o as comp,g as data};
