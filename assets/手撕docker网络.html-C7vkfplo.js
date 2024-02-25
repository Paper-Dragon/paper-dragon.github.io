import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as e,d as a}from"./app-adPOW57q.js";const t="/assets/image-20230331150831941-DErmo8G4.png",p="/assets/Netfilter-packet-flow-CL4fYzZ6.svg",i="/assets/image-20230331150919181-BXdH1Ovr.png",r="/assets/image-20230331151135406-CEDC9RN4.png",l={},o=a('<h1 id="手撕docker网络" tabindex="-1"><a class="header-anchor" href="#手撕docker网络"><span>手撕docker网络</span></a></h1><blockquote><p>docker网络使用的是iptables实现</p><p>docker0是个网桥</p><p>veth-pair技术绑定和跨越netns</p></blockquote><h1 id="前提" tabindex="-1"><a class="header-anchor" href="#前提"><span>前提</span></a></h1><blockquote><p>本文并非小白所看懂的,有一定的门槛，如果不熟悉以下的前提，你可能看不懂本文，如果有什么困难请巩固基础，前提如下：</p></blockquote><ul><li>熟练使用iptables基本模块</li><li>熟练使用docker命令</li><li>熟练使用基本的docker网络</li><li>懂基本的docker网络</li><li>对net - namespace有一定的了解</li></ul><h1 id="本文内容不包括" tabindex="-1"><a class="header-anchor" href="#本文内容不包括"><span>本文内容不包括</span></a></h1><ul><li>veth - pair 技术</li><li>docker0网桥是啥</li><li>docker网络是啥</li><li>docker存储技术</li><li>docker计算资源</li><li>docker应用</li></ul><h1 id="本文内容仅包括" tabindex="-1"><a class="header-anchor" href="#本文内容仅包括"><span>本文内容仅包括</span></a></h1><ul><li>手撕iptables让一个docker容器上网，解释和说明为什么这样做。</li></ul><h1 id="什么是iptables" tabindex="-1"><a class="header-anchor" href="#什么是iptables"><span>什么是iptables</span></a></h1><p>简单的说就是：iptables 是一个简单、灵活、实用的命令行工具，可以用来配置、控制 linux 防火墙。</p><h2 id="iptables的五表五链及流量走向" tabindex="-1"><a class="header-anchor" href="#iptables的五表五链及流量走向"><span>iptables的五表五链及流量走向</span></a></h2><p>iptables中总共有4张表还有5条链，我们可以在链上加不同的规则。</p><p>五张表：filter表、nat表、mangle表、raw表、security表</p><p>五条链：prerouting、input、output、forward、postrouting</p><figure><img src="'+t+'" alt="image-20230331150831941" tabindex="0" loading="lazy"><figcaption>image-20230331150831941</figcaption></figure><p>摘自iptables的wiki百科中的图</p><figure><img src="'+p+'" alt="Netfilter-packet-flow" tabindex="0" loading="lazy"><figcaption>Netfilter-packet-flow</figcaption></figure><p>我知道很多人都看不懂，没关系，大家只要关注图中的蓝色部分：流量大走向如下：</p><p><code>raw prerouting</code> -&gt; <code>conntrack</code> -&gt; <code>mangle prerouting</code> -&gt; <code>nat prerouting</code> - &gt;<code>decision 路由选择</code> -&gt; 可能是input，也可能是output。</p><figure><img src="'+i+`" alt="image-20230331150919181" tabindex="0" loading="lazy"><figcaption>image-20230331150919181</figcaption></figure><p>这并不复杂。但是在这想该怎么办之前，我们得先搞清楚，通常情况下我们会对流量做那些控制？无非如下：</p><ol><li>丢弃来自xxx的流量</li><li>丢弃去往xxx的流量</li><li>只接收来自xxx的流量</li><li>在刚流量流入时，将目标地址改写成其他地址</li><li>在流量即将流出前，将源地址改写成其他地址</li><li>将发往A的数据包，转发给B</li></ol><p>等等等等，如果你足够敏感，你就能发现，上面这六条干预策略，<code>filter</code>、<code>nat</code>这两张表已经完全能满足我们的需求了，我们只需要在这两张表的不同链上加自己的规则就行，如下：</p><ol><li>丢弃来自xxx的流量（<code>filter表INPUT链</code>）</li><li>丢弃去往xxx的流量（<code>filter表OUTPUT链</code>）</li><li>只接收来自xxx的流量（<code>filter表INPUT链</code>）</li><li>在刚流量流入时，将目标地址改写成其他地址（<code>nat表prerouting链</code>）</li><li>在流量即将流出前，将源地址改写成其他地址（<code>nat表postrouting链</code>）</li><li>将发往A的数据包，转发给B（<code>filter表forward链</code>）</li></ol><h1 id="docker-iptables规则" tabindex="-1"><a class="header-anchor" href="#docker-iptables规则"><span>docker iptables规则</span></a></h1><h2 id="默认的docker规则" tabindex="-1"><a class="header-anchor" href="#默认的docker规则"><span>默认的docker规则</span></a></h2><div class="language-ini line-numbers-mode" data-ext="ini" data-title="ini"><pre class="language-ini"><code><span class="token comment">##地址转发表nat中的规则链及默认</span>
*nat
<span class="token comment">#PREROUTING规则链默认策略是ACCEPT</span>
:PREROUTING ACCEPT [2:104]
<span class="token comment">#INPUT规则链默认策略是ACCEPT</span>
:INPUT ACCEPT [2:104]
<span class="token comment">#OUTPUT规则链默认策略是ACCEPT</span>
:OUTPUT ACCEPT [12:817]
<span class="token comment">#POSTROUTING规则链默认策略是ACCEPT</span>
:POSTROUTING ACCEPT [12:817]
<span class="token comment">#DOCKER规则链默认策略是ACCEPT</span>
:DOCKER - [0:0]
<span class="token comment">#######################在PREROUTING规则链中添加的规则###########################</span>
<span class="token comment">##-m表示使用扩展模块进行数据包匹配，到达本机的数据包，如果目标地址类型是本地局域网，则指定到DOCKER链</span>
-A PREROUTING -m addrtype --dst-type LOCAL -j DOCKER
<span class="token comment">#######################在OUTPUT规则链中添加的规则###########################</span>
-A OUTPUT ! -d 127.0.0.0/8 -m addrtype --dst-type LOCAL -j DOCKER
<span class="token comment">#######################在POSTROUTING规则链中添加的规则###########################</span>
<span class="token comment">##这条规则是为了使容器和外部网络通信</span>
<span class="token comment">#将源地址为172.17.0.0/16的包（也就是从Docker容器产生的包），并且不是从docker0网卡发出的</span>
<span class="token comment">#进行源地址转换，转换成主机网卡的地址。限制了容器实例的IP范围，这是为了区分Docker宿主机上有多个bridge网络的情况。</span>
-A POSTROUTING -s 172.17.0.0/16 ! -o docker0 -j MASQUERADE
<span class="token comment">############################在DOCKER规则链中添加的规则###########################</span>
<span class="token comment">#由docker0接口输入的数据包，返回到调用链；-i指定了要处理来自哪个接口的数据包</span>
-A DOCKER -i docker0 -j RETURN


<span class="token comment">###############################################################################</span>
<span class="token comment">##规则表中的链及默认策略</span>
*filter
:INPUT ACCEPT [310:29748]
:FORWARD DROP [0:0]
:OUTPUT ACCEPT [390:45516]
:DOCKER - [0:0]
:DOCKER-ISOLATION-STAGE-1 - [0:0]
:DOCKER-ISOLATION-STAGE-2 - [0:0]
:DOCKER-USER - [0:0]
<span class="token comment">############################在FORWARD规则链中添加的规则###########################</span>
<span class="token comment">##数据包全部指定到DOCKER-USER链 # DOCKER-USER 为空</span>
-A FORWARD -j DOCKER-USER
<span class="token comment">##数据包全部指定到DOCKER-ISOLATION-STAGE-1链</span>
-A FORWARD -j DOCKER-ISOLATION-STAGE-1
<span class="token comment">## 状态</span>
-A FORWARD -o docker0 -m conntrack --ctstate RELATED,ESTABLISHED -j ACCEPT
<span class="token comment">##由docker0接口输出的数据包，指定到DOCKER链</span>
-A FORWARD -o docker0 -j DOCKER
<span class="token comment">##由docker0接口输入的数据包，且不是由docker0接口输出的数据包，允许通过</span>
-A FORWARD -i docker0 ! -o docker0 -j ACCEPT
<span class="token comment">##由docker0接口输入的数据包，且由docker0接口输出的数据包，允许通过</span>
-A FORWARD -i docker0 -o docker0 -j ACCEPT
<span class="token comment">####################在DOCKER-ISOLATION-STAGE-1规则链中添加的规则#################</span>
<span class="token comment">##由docker0接口输入的数据包，且不是由docker0接口输出的数据包，指定到DOCKER-ISOLATION-STAGE-2链</span>
<span class="token comment">##也就是要处理来自docker0的数据包，但是不是由docker0输出的数据包</span>
-A DOCKER-ISOLATION-STAGE-1 -i docker0 ! -o docker0 -j DOCKER-ISOLATION-STAGE-2
<span class="token comment">##数据包直接返回到调用链</span>
-A DOCKER-ISOLATION-STAGE-1 -j RETURN
<span class="token comment">####################在DOCKER-ISOLATION-STAGE-2规则链中添加的规则#################</span>
<span class="token comment">##由docker0接口输出的数据包，丢弃掉</span>
-A DOCKER-ISOLATION-STAGE-2 -o docker0 -j DROP
<span class="token comment">##数据包直接返回到调用链</span>
-A DOCKER-ISOLATION-STAGE-2 -j RETURN
<span class="token comment">############################在DOCKER-USER规则链中添加的规则###########################</span>
<span class="token comment">##直接返回到调用链</span>
-A DOCKER-USER -j RETURN

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Docker的DOCKER链</strong></p><p>仅处理从宿主机到docker0的IP数据包。</p><p><strong>Docker的DOCKER-ISOLATION链（隔离在不同的bridge网络之间的通信）</strong></p><p>可以看到，为了隔离在不同的bridge网络之间的通信，Docker提供了两个DOCKER-ISOLATION实现。</p><p>DOCKER-ISOLATION-STAGE-1链过滤源地址是bridge网络（默认docker0）的数据包，匹配的数据包再进入DOCKER-ISOLATION-STAGE-2链处理；</p><p>不匹配就返回到父链FORWARD。</p><p>在DOCKER-ISOLATION-STAGE-2链中，进一步处理目的地址是bridge网络(默认是docker0)的数据包，匹配的数据包表示该数据包是从一个bridge网络的网桥发出，到另一个bridge网络的网桥，这样的数据包来自其他bridge网络，将被直接DROP；</p><p>不匹配的数据包就返回到父链FORWARD继续进行后续处理。</p><p>Docker的DOCKER-USER链**</p><p>Docker启动时，会加载DOCKER链和DOCKER-ISOLATION（现在是DOCKER-ISOLATION-STAGE-1）链中的过滤规则，并使之生效。绝对禁止修改这里的过滤规则。</p><p>如果用户要补充Docker的过滤规则，强烈建议追加到DOCKER-USER链。</p><p>DOCKER-USER链中的过滤规则，将先于Docker默认创建的规则被加载（在上面的规则一览中，DOCKER_USER链被最早APPEND到规则链中），从而能够覆盖Docker在DOCKER链和DOCKER-ISOLATION链中的默认过滤规则。</p><p>例如，Docker启动后，默认任何外部source IP都被允许转发，从而能够从该source IP连接到宿主机上的任何Docker容器实例。如果只允许一个指定的IP访问容器实例，可以插入路由规则到DOCKER-USER链中，从而能够在DOCKER链之前被加载。</p><h2 id="当我暴露一个端口" tabindex="-1"><a class="header-anchor" href="#当我暴露一个端口"><span>当我暴露一个端口</span></a></h2><div class="language-ini line-numbers-mode" data-ext="ini" data-title="ini"><pre class="language-ini"><code>*nat
:PREROUTING ACCEPT [0:0]
:INPUT ACCEPT [0:0]
:OUTPUT ACCEPT [0:0]
:POSTROUTING ACCEPT [0:0]
:DOCKER - [0:0]
-A PREROUTING -m addrtype --dst-type LOCAL -j DOCKER
-A OUTPUT ! -d 127.0.0.0/8 -m addrtype --dst-type LOCAL -j DOCKER
-A POSTROUTING -s 172.17.0.0/16 ! -o docker0 -j MASQUERADE
-A POSTROUTING -s 172.17.0.2/32 -d 172.17.0.2/32 -p tcp -m tcp --dport 80 -j MASQUERADE
-A DOCKER -i docker0 -j RETURN
-A DOCKER ! -i docker0 -p tcp -m tcp --dport 80 -j DNAT --to-destination 172.17.0.2:80


*filter
:INPUT ACCEPT [138:7536]
:FORWARD DROP [0:0]
:OUTPUT ACCEPT [171:17544]
:DOCKER - [0:0]
:DOCKER-ISOLATION-STAGE-1 - [0:0]
:DOCKER-ISOLATION-STAGE-2 - [0:0]
:DOCKER-USER - [0:0]
-A FORWARD -j DOCKER-USER
-A FORWARD -j DOCKER-ISOLATION-STAGE-1
-A FORWARD -o docker0 -m conntrack --ctstate RELATED,ESTABLISHED -j ACCEPT
-A FORWARD -o docker0 -j DOCKER
-A FORWARD -i docker0 ! -o docker0 -j ACCEPT
-A FORWARD -i docker0 -o docker0 -j ACCEPT
-A DOCKER -d 172.17.0.2/32 ! -i docker0 -o docker0 -p tcp -m tcp --dport 80 -j ACCEPT
-A DOCKER-ISOLATION-STAGE-1 -i docker0 ! -o docker0 -j DOCKER-ISOLATION-STAGE-2
-A DOCKER-ISOLATION-STAGE-1 -j RETURN
-A DOCKER-ISOLATION-STAGE-2 -o docker0 -j DROP
-A DOCKER-ISOLATION-STAGE-2 -j RETURN
-A DOCKER-USER -j RETURN


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="diff" tabindex="-1"><a class="header-anchor" href="#diff"><span>diff</span></a></h2><figure><img src="`+r+`" alt="image-20230331151135406" tabindex="0" loading="lazy"><figcaption>image-20230331151135406</figcaption></figure><p>我们会发现增加了3条规则</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>*nat
<span class="token comment"># PREROUTING</span>
<span class="token comment"># DNAT 进入规则链进行改包dst 为目标地址</span>
<span class="token parameter variable">-A</span> DOCKER <span class="token operator">!</span> <span class="token parameter variable">-i</span> docker0 <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-m</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">80</span> <span class="token parameter variable">-j</span> DNAT --to-destination <span class="token number">172.17</span>.0.2:80
<span class="token comment">#  80端口 MASQUERADE转换, SNAT</span>
<span class="token parameter variable">-A</span> POSTROUTING <span class="token parameter variable">-s</span> <span class="token number">172.17</span>.0.2/32 <span class="token parameter variable">-d</span> <span class="token number">172.17</span>.0.2/32 <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-m</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">80</span> <span class="token parameter variable">-j</span> MASQUERADE

*filter
<span class="token comment"># 默认转发规则会自动丢弃</span>
:FORWARD DROP <span class="token punctuation">[</span><span class="token number">0</span>:0<span class="token punctuation">]</span>
<span class="token comment"># 若符合条件就让他转发， </span>
<span class="token parameter variable">-A</span> DOCKER <span class="token parameter variable">-d</span> <span class="token number">172.17</span>.0.2/32 <span class="token operator">!</span> <span class="token parameter variable">-i</span> docker0 <span class="token parameter variable">-o</span> docker0 <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-m</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">80</span> <span class="token parameter variable">-j</span> ACCEPT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="解释netns" tabindex="-1"><a class="header-anchor" href="#解释netns"><span>解释netns</span></a></h1><p>Linux 网络命名空间</p><p>Linux 命名空间 是 Docker 实现容器使用的底层技术之一，命名空间中有一种称为 网络命名空间 ，可用来实现容器间的网络隔离。</p><p>什么是网络命名空间，按照官方文档的说法： 1</p><pre><code>A network namespace is logically another copy of the network stack, with its own routes, firewall rules, and network devices.
</code></pre><p>2</p><pre><code>Network namespaces provide isolation of the system resources associated with networking: network devices, IPv4 and IPv6 protocol stacks, IP routing tables, firewall rules, the /proc/net directory (which is a symbolic link to /proc/PID/net), the
/sys/class/net directory, various files under /proc/sys/net, port numbers (sockets), and so on.
</code></pre><p>简单可以理解为系统刚启动时只有一个全局的网络命名空间，这个命名空间包含网络协议栈，网络接口，路由表，防火墙规则，以及一些网络配置等。</p><p>系统提供了 ip netns 命令可以用来添加新的网络命名空间。</p><p>初始时，没有其他的网络命名空间：</p><pre><code>root@ubuntu21:~# ip netns ls
</code></pre><p>我们现在来用 ip netns add 创建一个名为 netns0 的网络命名空间：</p><pre><code>root@ubuntu21:~# ip netns add netns0
root@ubuntu21:~# ip netns ls
netns0
</code></pre><p>接着用 ip netns exec 命令在这个网络命名空间执行一些命令看下这个网络命名空间有什么东西：</p><pre><code>root@ubuntu21:~# ip netns exec netns0 ip link
1: lo: &lt;LOOPBACK&gt; mtu 65536 qdisc noop state DOWN mode DEFAULT group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    
root@ubuntu21:~# ip netns exec netns0 ip route
Error: ipv4: FIB table does not exist.
Dump terminated

root@ubuntu21:~# ip netns exec netns0 iptables -L
Chain INPUT (policy ACCEPT)
target     prot opt source               destination         

Chain FORWARD (policy ACCEPT)
target     prot opt source               destination         

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination      
</code></pre><p>可以看到这个命名空间</p><pre><code>只有一个环回接口 lo。
路由表为空【将换回接口 lo up 后可以看到】。
iptables 规则为空。
</code></pre><p>与我们的全局网络命名空间完全不一样！</p><p>如下图所示： 在这里插入图片描述 上图中的根网络命名空间就是我们主机上的全局网络空间，有两个网口 lo 和 eth0，一套路由表和 iptables 规则。右边就是我们刚创建的 netns0 网络命名空间。</p><p>是不是很神奇？将网络命名空间和一个进程关联后，这个进程就拥有自己的网口，路由表，iptables 规则等，就像一个独立的系统一样，是不是我们就可以将它称为一个容器了？！没错，就是这样子！ 将容器连接到主机</p><p>现在这个容器只有一个环回接口 lo，无法与主机通信，多没意思，我们来给它加一个网口。</p><p>先来创建一对虚拟以太网口【veth】：</p><pre><code>root@ubuntu21:~# ip link add veth0 type veth peer name ceth0
root@ubuntu21:~# ip link ls
1: lo: &lt;LOOPBACK,UP,LOWER_UP&gt; mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
...
7: ceth0@veth0: &lt;BROADCAST,MULTICAST,M-DOWN&gt; mtu 1500 qdisc noop state DOWN mode DEFAULT group default qlen 1000
    link/ether ee:91:1e:b9:0d:7c brd ff:ff:ff:ff:ff:ff
8: veth0@ceth0: &lt;BROADCAST,MULTICAST,M-DOWN&gt; mtu 1500 qdisc noop state DOWN mode DEFAULT group default qlen 1000
    link/ether 7e:c4:14:4d:71:b9 brd ff:ff:ff:ff:ff:ff
</code></pre><p>创建的这对虚拟网口 veth0 和 ceth0 在根网络命名空间。这对虚拟网口简单来说就是发往 veth0 的数据包会从 ceth0 收到，反之亦然。</p><p>接下来我们将 ceth0 放到容器的命名空间中：</p><pre><code>root@ubuntu21:~# ip link set ceth0 netns netns0
root@ubuntu21:~# ip link
1: lo: &lt;LOOPBACK,UP,LOWER_UP&gt; mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
...
8: veth0@if7: &lt;BROADCAST,MULTICAST&gt; mtu 1500 qdisc noop state DOWN mode DEFAULT group default qlen 1000
    link/ether 7e:c4:14:4d:71:b9 brd ff:ff:ff:ff:ff:ff link-netns netns0
root@ubuntu21:~# ip netns exec netns0 ip link ls
1: lo: &lt;LOOPBACK&gt; mtu 65536 qdisc noop state DOWN mode DEFAULT group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
7: ceth0@if8: &lt;BROADCAST,MULTICAST&gt; mtu 1500 qdisc noop state DOWN mode DEFAULT group default qlen 1000
    link/ether ee:91:1e:b9:0d:7c brd ff:ff:ff:ff:ff:ff link-netnsid 0
</code></pre><p>可以看到根命名空间少了网口 ceth0 ，容器内多了一个网口 ceth0。</p><p>然后我们给 veth0 配上 172.18.0.11/16 地址，给容器内的 ceth0 配上 172.18.0.10/16 地址：</p><pre><code>root@ubuntu21:~# ip link set veth0 up
root@ubuntu21:~# ip addr add 172.18.0.11/16 dev veth0

root@ubuntu21:~# ip netns exec netns0 ip link set lo up
root@ubuntu21:~# ip netns exec netns0 ip link set ceth0 up
root@ubuntu21:~# ip netns exec netns0 addr add 172.18.0.10/16 dev ceth0
</code></pre><p>这样主机和容器之间就可以互 ping 了：</p><pre><code>root@ubuntu21:~# ip netns exec netns0 ping 172.18.0.11
PING 172.18.0.11 (172.18.0.11) 56(84) bytes of data.
64 bytes from 172.18.0.11: icmp_seq=1 ttl=64 time=0.186 ms
64 bytes from 172.18.0.11: icmp_seq=2 ttl=64 time=0.089 ms
64 bytes from 172.18.0.11: icmp_seq=3 ttl=64 time=0.086 ms
^C
--- 172.18.0.11 ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2046ms
rtt min/avg/max/mdev = 0.086/0.120/0.186/0.046 ms


root@ubuntu21:~# ping 172.18.0.10
PING 172.18.0.10 (172.18.0.10) 56(84) bytes of data.
64 bytes from 172.18.0.10: icmp_seq=1 ttl=64 time=0.070 ms
64 bytes from 172.18.0.10: icmp_seq=2 ttl=64 time=0.078 ms
64 bytes from 172.18.0.10: icmp_seq=3 ttl=64 time=0.070 ms
^C
--- 172.18.0.10 ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2053ms
rtt min/avg/max/mdev = 0.070/0.072/0.078/0.003 ms
</code></pre><p>就是这样的情形：</p><p>在这里插入图片描述 使用网桥将多个容器连接起来</p><p>接下来我们重复上面的操作，创建另一个容器：</p><pre><code>ip netns add netns1
ip link add veth1 type veth peer name ceth1
ip link set ceth1 netns netns1
ip link set veth1 up
ip addr add 172.18.0.21/16 dev veth1

ip netns exec netns1 ip link set lo up
ip netns exec netns1 ip link set ceth1 up
ip netns exec netns1 ip addr add 172.18.0.20/16 dev ceth1
</code></pre><p>此时却发现它和主机不能互 ping 成功，两个容器之间也不能互 ping 成功：</p><pre><code>root@ubuntu21:~# ip netns exec netns1 ping 172.18.0.21
PING 172.18.0.21 (172.18.0.21) 56(84) bytes of data.
^C
--- 172.18.0.21 ping statistics ---
2 packets transmitted, 0 received, 100% packet loss, time 1021ms

root@ubuntu21:~# ping 172.18.0.20
PING 172.18.0.20 (172.18.0.20) 56(84) bytes of data.
^C
--- 172.18.0.20 ping statistics ---
2 packets transmitted, 0 received, 100% packet loss, time 1010ms

root@ubuntu21:~# ip netns exec netns0 ping 172.18.0.20
PING 172.18.0.20 (172.18.0.20) 56(84) bytes of data.
^C
--- 172.18.0.20 ping statistics ---
2 packets transmitted, 0 received, 100% packet loss, time 1030ms

root@ubuntu21:~# ip netns exec netns1 ping 172.18.0.10
PING 172.18.0.10 (172.18.0.10) 56(84) bytes of data.
^C
--- 172.18.0.10 ping statistics ---
2 packets transmitted, 0 received, 100% packet loss, time 1019ms
</code></pre><p>这是怎么回事？</p><p>查看主机上的路由表如下：</p><pre><code>172.18.0.0/16 dev veth0 proto kernel scope link src 172.18.0.11 
172.18.0.0/16 dev veth1 proto kernel scope link src 172.18.0.21 
</code></pre><p>原来由于 veth0 和 veth1 在同一个网段，于是就有两条主机路由。 在这里插入图片描述</p><p>在 ping 172.18.0.20 时使用的是第一条路由，本来 ping 的是第二个容器，ICMP 请求却发到第一个容器了！当然 ping 不通了！</p><p>那么如何让两个容器之间可以通信呢？</p><p>因为它们在同一个网段，我们想到可以将 veth0 和 veth1 加入一个网桥，这样相当于有一个网桥将两个容器连接起来了！</p><p>于是将 veth0 和 veth1 的IP地址去掉：</p><pre><code>root@ubuntu21:~# ip addr del 172.18.0.11/16 dev veth0  
root@ubuntu21:~# ip addr del 172.18.0.21/16 dev veth1  
</code></pre><p>创建一个网桥将它们加入：</p><pre><code>root@ubuntu21:~# ip link add br0 type bridge
root@ubuntu21:~# ip link set br0 up
root@ubuntu21:~# ip link set veth0 master br0
root@ubuntu21:~# ip link set veth1 master br0
</code></pre><p>这样它们之间就能互 ping 了！</p><pre><code>root@ubuntu21:~# ip netns exec netns0 ping 172.18.0.20
PING 172.18.0.20 (172.18.0.20) 56(84) bytes of data.
64 bytes from 172.18.0.20: icmp_seq=1 ttl=64 time=0.097 ms
64 bytes from 172.18.0.20: icmp_seq=2 ttl=64 time=0.120 ms
^C
--- 172.18.0.20 ping statistics ---
2 packets transmitted, 2 received, 0% packet loss, time 1002ms
rtt min/avg/max/mdev = 0.097/0.108/0.120/0.011 ms
root@ubuntu21:~# 
root@ubuntu21:~# ip netns exec netns1 ping 172.18.0.10 
PING 172.18.0.10 (172.18.0.10) 56(84) bytes of data.
64 bytes from 172.18.0.10: icmp_seq=1 ttl=64 time=0.073 ms
64 bytes from 172.18.0.10: icmp_seq=2 ttl=64 time=0.106 ms
^C
--- 172.18.0.10 ping statistics ---
2 packets transmitted, 2 received, 0% packet loss, time 1021ms
rtt min/avg/max/mdev = 0.073/0.089/0.106/0.016 ms
</code></pre><p>就是如下的情形： 在这里插入图片描述 说明： 如果 ping 不通，使用如下的命令【我使用的是 Ubuntu 21.10，已经安装了 Docker 】</p><pre><code>iptables -P FORWARD ACCEPT
</code></pre><p>将 iptables filter 表 FORWARD 链默认策略改为 ACCEPT。</p><h1 id="实战1" tabindex="-1"><a class="header-anchor" href="#实战1"><span>实战1</span></a></h1><blockquote><p>创建一个无端口暴露的容器，使用规则进行暴露</p><p>1、创建容器</p><p>2、找到容器ip</p><p>3、增加DNAT规则</p><p>4、允许流量转发</p><p>5、增加或不增加SNAT规则</p></blockquote><h2 id="环境" tabindex="-1"><a class="header-anchor" href="#环境"><span>环境</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>root@k8s-server:/home/k8s<span class="token comment"># docker images</span>
REPOSITORY   TAG       IMAGE ID       CREATED         SIZE
nginx        latest    080ed0ed8312   <span class="token number">2</span> days ago      142MB
ubuntu       latest    08d22c0ceb15   <span class="token number">3</span> weeks ago     <span class="token number">77</span>.8MB
centos       latest    5d0da3dc9764   <span class="token number">18</span> months ago   231MB
root@k8s-server:/home/k8s<span class="token comment"># docker network ls</span>
NETWORK ID     NAME      DRIVER    SCOPE
6d1ca89f3ca6   bridge    bridge    <span class="token builtin class-name">local</span>
a349e5ce162c   <span class="token function">host</span>      <span class="token function">host</span>      <span class="token builtin class-name">local</span>
b9d430ff5078   none      null      <span class="token builtin class-name">local</span>
root@k8s-server:/home/k8s<span class="token comment"># ip addr</span>
<span class="token number">1</span>: lo: <span class="token operator">&lt;</span>LOOPBACK,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">65536</span> qdisc noqueue state UNKNOWN group default qlen <span class="token number">1000</span>
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet <span class="token number">127.0</span>.0.1/8 scope <span class="token function">host</span> lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope <span class="token function">host</span>
       valid_lft forever preferred_lft forever
<span class="token number">2</span>: ens33: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc fq_codel state UP group default qlen <span class="token number">1000</span>
    link/ether 00:0c:29:f5:5c:61 brd ff:ff:ff:ff:ff:ff
    inet <span class="token number">192.168</span>.23.149/24 brd <span class="token number">192.168</span>.23.255 scope global ens33
       valid_lft forever preferred_lft forever
    inet6 fe80::20c:29ff:fef5:5c61/64 scope <span class="token function">link</span>
       valid_lft forever preferred_lft forever
<span class="token number">3</span>: docker0: <span class="token operator">&lt;</span>NO-CARRIER,BROADCAST,MULTICAST,UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc noqueue state DOWN group default
    link/ether 02:42:09:4f:5c:f7 brd ff:ff:ff:ff:ff:ff
    inet <span class="token number">172.17</span>.0.1/16 brd <span class="token number">172.17</span>.255.255 scope global docker0
       valid_lft forever preferred_lft forever
    inet6 fe80::42:9ff:fe4f:5cf7/64 scope <span class="token function">link</span>
       valid_lft forever preferred_lft forever
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建并找到ip地址" tabindex="-1"><a class="header-anchor" href="#创建并找到ip地址"><span>创建并找到IP地址</span></a></h2><p>如下可见ip为172.17.0.2，因为默认规则的原因，可以直接访问</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>root@k8s-server:/home/k8s<span class="token comment"># docker run -it -d nginx</span>
a4c75fc842e48970021d8422d2da5b36846215bc8cd69d4647cf92efb0164e34
root@k8s-server:/home/k8s<span class="token comment"># docker inspect a4 | grep -i addr</span>
            <span class="token string">&quot;LinkLocalIPv6Address&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;SecondaryIPAddresses&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;SecondaryIPv6Addresses&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;GlobalIPv6Address&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;IPAddress&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;172.17.0.2&quot;</span>,
            <span class="token string">&quot;MacAddress&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;02:42:ac:11:00:02&quot;</span>,
                    <span class="token string">&quot;IPAddress&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;172.17.0.2&quot;</span>,
                    <span class="token string">&quot;GlobalIPv6Address&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
                    <span class="token string">&quot;MacAddress&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;02:42:ac:11:00:02&quot;</span>,
root@k8s-server:/home/k8s<span class="token comment"># iptables -A DOCKER ! -i docker0 -p tcp -m tcp --dport 80 -j DNAT --to-destination 172.17.0.2:80 -t nat</span>
root@k8s-server:/home/k8s<span class="token comment"># curl 172.17.0.2</span>
<span class="token operator">&lt;</span><span class="token operator">!</span>DOCTYPE html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>Welcome to nginx<span class="token operator">!</span><span class="token operator">&lt;</span>/title<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>style<span class="token operator">&gt;</span>
html <span class="token punctuation">{</span> color-scheme: light dark<span class="token punctuation">;</span> <span class="token punctuation">}</span>
body <span class="token punctuation">{</span> width: 35em<span class="token punctuation">;</span> margin: <span class="token number">0</span> auto<span class="token punctuation">;</span>
font-family: Tahoma, Verdana, Arial, sans-serif<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token operator">&lt;</span>/style<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/head<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>h<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>Welcome to nginx<span class="token operator">!</span><span class="token operator">&lt;</span>/h<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>
<span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>If you see this page, the nginx web server is successfully installed and
working. Further configuration is required.<span class="token operator">&lt;</span>/p<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>For online documentation and support please refer to
<span class="token operator">&lt;</span>a <span class="token assign-left variable">href</span><span class="token operator">=</span><span class="token string">&quot;http://nginx.org/&quot;</span><span class="token operator">&gt;</span>nginx.org<span class="token operator">&lt;</span>/a<span class="token operator">&gt;</span>.<span class="token operator">&lt;</span>br/<span class="token operator">&gt;</span>
Commercial support is available at
<span class="token operator">&lt;</span>a <span class="token assign-left variable">href</span><span class="token operator">=</span><span class="token string">&quot;http://nginx.com/&quot;</span><span class="token operator">&gt;</span>nginx.com<span class="token operator">&lt;</span>/a<span class="token operator">&gt;</span>.<span class="token operator">&lt;</span>/p<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token operator">&lt;</span>em<span class="token operator">&gt;</span>Thank you <span class="token keyword">for</span> using nginx.<span class="token operator">&lt;</span>/em<span class="token operator">&gt;</span><span class="token operator">&lt;</span>/p<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/html<span class="token operator">&gt;</span>
root@k8s-server:/home/k8s<span class="token comment">#</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="增加dnat规则" tabindex="-1"><a class="header-anchor" href="#增加dnat规则"><span>增加DNAT规则</span></a></h2><p>然后我们发现在宿主机内已经可以被访问到，但是web端并不能访问，这是因为iptables在本机访问的时候不走forward阶段，直接道道应用，所以直接访问</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>root@k8s-server:/home/k8s<span class="token comment"># iptables -A DOCKER ! -i docker0 -p tcp -m tcp --dport 80 -j DNAT --to-destination 172.17.0.2:80 -t nat</span>
root@k8s-server:/home/k8s<span class="token comment"># curl 192.168.23.149</span>
<span class="token operator">&lt;</span><span class="token operator">!</span>DOCTYPE html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>Welcome to nginx<span class="token operator">!</span><span class="token operator">&lt;</span>/title<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>style<span class="token operator">&gt;</span>
html <span class="token punctuation">{</span> color-scheme: light dark<span class="token punctuation">;</span> <span class="token punctuation">}</span>
body <span class="token punctuation">{</span> width: 35em<span class="token punctuation">;</span> margin: <span class="token number">0</span> auto<span class="token punctuation">;</span>
font-family: Tahoma, Verdana, Arial, sans-serif<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token operator">&lt;</span>/style<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/head<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>h<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>Welcome to nginx<span class="token operator">!</span><span class="token operator">&lt;</span>/h<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>
<span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>If you see this page, the nginx web server is successfully installed and
working. Further configuration is required.<span class="token operator">&lt;</span>/p<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>For online documentation and support please refer to
<span class="token operator">&lt;</span>a <span class="token assign-left variable">href</span><span class="token operator">=</span><span class="token string">&quot;http://nginx.org/&quot;</span><span class="token operator">&gt;</span>nginx.org<span class="token operator">&lt;</span>/a<span class="token operator">&gt;</span>.<span class="token operator">&lt;</span>br/<span class="token operator">&gt;</span>
Commercial support is available at
<span class="token operator">&lt;</span>a <span class="token assign-left variable">href</span><span class="token operator">=</span><span class="token string">&quot;http://nginx.com/&quot;</span><span class="token operator">&gt;</span>nginx.com<span class="token operator">&lt;</span>/a<span class="token operator">&gt;</span>.<span class="token operator">&lt;</span>/p<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token operator">&lt;</span>em<span class="token operator">&gt;</span>Thank you <span class="token keyword">for</span> using nginx.<span class="token operator">&lt;</span>/em<span class="token operator">&gt;</span><span class="token operator">&lt;</span>/p<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/html<span class="token operator">&gt;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改允许流量转发，</p><p>第一条规则是允许全部的流量转发，能够进行访问，但是显然这是不安全的。所以应该对符合条件的流量进行单个限制，</p><p>添加完之后，此时应该是web端已经可以访问了，但是通过抓包发现，src地址竟然是172.17.0.2，显然是不合理的</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>iptables <span class="token parameter variable">-P</span> FORWARD ACCEPT 
<span class="token comment"># 或</span>
<span class="token parameter variable">-A</span> DOCKER <span class="token parameter variable">-d</span> <span class="token number">172.17</span>.0.2/32 <span class="token operator">!</span> <span class="token parameter variable">-i</span> docker0 <span class="token parameter variable">-o</span> docker0 <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-m</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">80</span> <span class="token parameter variable">-j</span> ACCEPT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>增加或不增加SNAT规则</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code> 符合要求的80端口都SNAT
<span class="token parameter variable">-A</span> DOCKER <span class="token parameter variable">-d</span> <span class="token number">172.17</span>.0.2/32 <span class="token operator">!</span> <span class="token parameter variable">-i</span> docker0 <span class="token parameter variable">-o</span> docker0 <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-m</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">80</span> <span class="token parameter variable">-j</span> ACCEPT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这时，容器正常被使用</p><h1 id="本实验用的流量跟踪方法" tabindex="-1"><a class="header-anchor" href="#本实验用的流量跟踪方法"><span>本实验用的流量跟踪方法</span></a></h1><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
iptables <span class="token parameter variable">-A</span> DOCKER <span class="token operator">!</span> <span class="token parameter variable">-i</span> docker0 <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-m</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">80</span> <span class="token parameter variable">-j</span> DNAT --to-destination <span class="token number">172.17</span>.0.2:80 <span class="token parameter variable">-t</span> nat
iptables <span class="token parameter variable">-A</span> DOCKER <span class="token parameter variable">-d</span> <span class="token number">172.17</span>.0.2/32 <span class="token operator">!</span> <span class="token parameter variable">-i</span> docker0 <span class="token parameter variable">-o</span> docker0 <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-m</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">80</span> <span class="token parameter variable">-j</span> ACCEPT <span class="token parameter variable">-t</span> filter

iptables <span class="token parameter variable">-D</span> DOCKER <span class="token operator">!</span> <span class="token parameter variable">-i</span> docker0 <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-m</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">80</span> <span class="token parameter variable">-j</span> DNAT --to-destination <span class="token number">172.17</span>.0.2:80 <span class="token parameter variable">-t</span> nat
iptables <span class="token parameter variable">-D</span> DOCKER <span class="token parameter variable">-d</span> <span class="token number">172.17</span>.0.2/32 <span class="token operator">!</span> <span class="token parameter variable">-i</span> docker0 <span class="token parameter variable">-o</span> docker0 <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-m</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">80</span> <span class="token parameter variable">-j</span> ACCEPT <span class="token parameter variable">-t</span> filter

iptables <span class="token parameter variable">-I</span> DOCKER <span class="token parameter variable">-t</span> nat  <span class="token parameter variable">-j</span> LOG --log-prefix <span class="token string">&quot;nat-DOCKER &quot;</span>
iptables <span class="token parameter variable">-D</span> DOCKER <span class="token parameter variable">-t</span> nat  <span class="token parameter variable">-j</span> LOG --log-prefix <span class="token string">&quot;nat-DOCKER &quot;</span>

iptables <span class="token parameter variable">-I</span> INPUT <span class="token parameter variable">-t</span> nat  <span class="token parameter variable">-j</span> LOG --log-prefix <span class="token string">&quot;nat-INPUT &quot;</span>
iptables <span class="token parameter variable">-D</span> INPUT <span class="token parameter variable">-t</span> nat  <span class="token parameter variable">-j</span> LOG --log-prefix <span class="token string">&quot;nat-INPUT &quot;</span>

iptables <span class="token parameter variable">-I</span> FORWARD <span class="token parameter variable">-t</span> filter  <span class="token parameter variable">-j</span> LOG --log-prefix <span class="token string">&quot;filter-FORWARD &quot;</span>
iptables <span class="token parameter variable">-D</span> FORWARD <span class="token parameter variable">-t</span> filter  <span class="token parameter variable">-j</span> LOG --log-prefix <span class="token string">&quot;filter-FORWARD &quot;</span>

iptables <span class="token parameter variable">-I</span> PREROUTING <span class="token parameter variable">-t</span> nat  <span class="token parameter variable">-j</span> LOG --log-prefix <span class="token string">&quot;nat-PREROUTING &quot;</span>
iptables <span class="token parameter variable">-D</span> PREROUTING <span class="token parameter variable">-t</span> nat  <span class="token parameter variable">-j</span> LOG --log-prefix <span class="token string">&quot;nat-PREROUTING &quot;</span>


iptables <span class="token parameter variable">-I</span> POSTROUTING <span class="token parameter variable">-t</span> nat  <span class="token parameter variable">-j</span> LOG --log-prefix <span class="token string">&quot;nat-POSTROUTING &quot;</span>
iptables <span class="token parameter variable">-D</span> POSTROUTING <span class="token parameter variable">-t</span> nat  <span class="token parameter variable">-j</span> LOG --log-prefix <span class="token string">&quot;nat-POSTROUTING &quot;</span>


iptables <span class="token parameter variable">-I</span> DOCKER <span class="token parameter variable">-t</span> filter  <span class="token parameter variable">-j</span> LOG --log-prefix <span class="token string">&quot;filter-DOCKER &quot;</span>
iptables <span class="token parameter variable">-D</span> DOCKER <span class="token parameter variable">-t</span> filter  <span class="token parameter variable">-j</span> LOG --log-prefix <span class="token string">&quot;filter-DOCKER &quot;</span>


iptables <span class="token parameter variable">-I</span> DOCKER-ISOLATION-STAGE-2 <span class="token parameter variable">-t</span> filter  <span class="token parameter variable">-j</span> LOG --log-prefix <span class="token string">&quot;filter-DOCKER-ISOLATION-STAGE-2 &quot;</span>
iptables <span class="token parameter variable">-D</span> DOCKER-ISOLATION-STAGE-2 <span class="token parameter variable">-t</span> filter  <span class="token parameter variable">-j</span> LOG --log-prefix <span class="token string">&quot;filter-DOCKER-ISOLATION-STAGE-2 &quot;</span>


iptables <span class="token parameter variable">-P</span> FORWARD ACCEPT
iptables <span class="token parameter variable">-P</span> FORWARD DROP



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,119),c=[o];function d(m,v){return s(),e("div",null,c)}const b=n(l,[["render",d],["__file","手撕docker网络.html.vue"]]),g=JSON.parse('{"path":"/note-book/Docker/%E6%89%8B%E6%92%95docker%E7%BD%91%E7%BB%9C.html","title":"手撕docker网络","lang":"zh-CN","frontmatter":{"description":"手撕docker网络 docker网络使用的是iptables实现 docker0是个网桥 veth-pair技术绑定和跨越netns 前提 本文并非小白所看懂的,有一定的门槛，如果不熟悉以下的前提，你可能看不懂本文，如果有什么困难请巩固基础，前提如下： 熟练使用iptables基本模块 熟练使用docker命令 熟练使用基本的docker网络 懂基本...","head":[["meta",{"property":"og:url","content":"https://paper-dragon.github.io/note-book/Docker/%E6%89%8B%E6%92%95docker%E7%BD%91%E7%BB%9C.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"手撕docker网络"}],["meta",{"property":"og:description","content":"手撕docker网络 docker网络使用的是iptables实现 docker0是个网桥 veth-pair技术绑定和跨越netns 前提 本文并非小白所看懂的,有一定的门槛，如果不熟悉以下的前提，你可能看不懂本文，如果有什么困难请巩固基础，前提如下： 熟练使用iptables基本模块 熟练使用docker命令 熟练使用基本的docker网络 懂基本..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-13T15:08:38.000Z"}],["meta",{"property":"article:author","content":"PaperDragon"}],["meta",{"property":"article:modified_time","content":"2023-08-13T15:08:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"手撕docker网络\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-13T15:08:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"iptables的五表五链及流量走向","slug":"iptables的五表五链及流量走向","link":"#iptables的五表五链及流量走向","children":[]},{"level":2,"title":"默认的docker规则","slug":"默认的docker规则","link":"#默认的docker规则","children":[]},{"level":2,"title":"当我暴露一个端口","slug":"当我暴露一个端口","link":"#当我暴露一个端口","children":[]},{"level":2,"title":"diff","slug":"diff","link":"#diff","children":[]},{"level":2,"title":"环境","slug":"环境","link":"#环境","children":[]},{"level":2,"title":"创建并找到IP地址","slug":"创建并找到ip地址","link":"#创建并找到ip地址","children":[]},{"level":2,"title":"增加DNAT规则","slug":"增加dnat规则","link":"#增加dnat规则","children":[]}],"git":{"createdTime":1691939318000,"updatedTime":1691939318000,"contributors":[{"name":"PaperDragon","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":17.16,"words":5149},"filePathRelative":"note-book/Docker/手撕docker网络.md","localizedDate":"2023年8月13日","excerpt":"\\n<blockquote>\\n<p>docker网络使用的是iptables实现</p>\\n<p>docker0是个网桥</p>\\n<p>veth-pair技术绑定和跨越netns</p>\\n</blockquote>\\n<h1>前提</h1>\\n<blockquote>\\n<p>本文并非小白所看懂的,有一定的门槛，如果不熟悉以下的前提，你可能看不懂本文，如果有什么困难请巩固基础，前提如下：</p>\\n</blockquote>\\n<ul>\\n<li>熟练使用iptables基本模块</li>\\n<li>熟练使用docker命令</li>\\n<li>熟练使用基本的docker网络</li>\\n<li>懂基本的docker网络</li>\\n<li>对net - namespace有一定的了解</li>\\n</ul>","autoDesc":true}');export{b as comp,g as data};
