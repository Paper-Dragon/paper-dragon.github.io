import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{aj as a,ao as n,am as e}from"./app-COjiYc5s.js";const l="/assets/image-20211113162334546-16367918158651-BH_Gkc7g.png",t="/assets/image-20211113163036742-DV4E3-6c.png",p="/assets/image-20211113171035950-16367946376613-DBvtGf8E.png",h="/assets/image-20211113175339554-16367972211964-2AaA-fjr.png",r="/assets/image-20211113180301959-16367977839625-OvvC0aXT.png",d="/assets/image-20211114085827104-ByYRtMG5.png",g="/assets/image-20211114090028397-DMNIV6Hx.png",c="/assets/image-20211114090041036-16368516423011-J0obZA2v.png",k="/assets/image-20211114090057988-DCFjPT6P.png",o="/assets/image-20211114090845169-16368521267182-Dnzamur1.png",m="/assets/image-20211114091053116-DIvaj-Wf.png",v="/assets/image-20211114091217432-16368523387793-BI8EFLDw.png",b="/assets/image-20211114091451393-16368524925614-oHxuBQS8.png",f="/assets/image-20211114092538677-x5fbNpRS.png",u="/assets/image-20211114093043979-16368534454495-CJJjijT_.png",y="/assets/image-20211114093750021-16368538715346-CoqTqccm.png",F="/assets/image-20211114094615718-16368543772377-CfKDq2RT.png",A="/assets/image-20211114145843200-Csy-bHdL.png",_="/assets/image-20211114145617062-163687297874110-CV6IKdJx.png",x="/assets/image-20211114155619941-163687658220211-DVB5LYkG.png",C="/assets/image-20211114155828987-BMcMwLAs.png",B="/assets/image-20211114155937925-Bk9K0A45.png",E="/assets/image-20211114155924388-C0NLw_f7.png",D="/assets/image-20211114160032317-DOzBRcvH.png",z="/assets/image-20211114160525159-5rPvvJAV.png",L="/assets/image-20211114160530580-BFU_LBCP.png",S="/assets/image-20211114160933272-BBv1oVuF.png",T="/assets/image-20211114160654786-BMGjvGqV.png",V="/assets/image-20211114160828264-DIjHZgap.png",w="/assets/image-20211114155239150-DyYTgkxr.png",H="/assets/image-20211114155259269-Cc8eKpkX.png",N="/assets/image-20211114161600562-loXlT75j.png",P="/assets/image-20211114095244968-DNO9Cuef.png",I="/assets/image-20211114110114691-16368588772758-DVQmo4uD.png",R="/assets/image-20211114113808272-16368610905249-CXY_4pbd.png",M={};function q(j,i){return e(),a("div",null,i[0]||(i[0]=[n('<h1 id="大型网站高并发解决方案lvs" tabindex="-1"><a class="header-anchor" href="#大型网站高并发解决方案lvs"><span>大型网站高并发解决方案LVS</span></a></h1><h1 id="负载均衡" tabindex="-1"><a class="header-anchor" href="#负载均衡"><span>负载均衡</span></a></h1><h2 id="集群功能分类" tabindex="-1"><a class="header-anchor" href="#集群功能分类"><span>集群功能分类：</span></a></h2><h3 id="lb-load-balance" tabindex="-1"><a class="header-anchor" href="#lb-load-balance"><span>LB： Load Balance</span></a></h3><p>有一定的高可用能力，但不是高可用集群，是以提高服务的并发处理能力为根本着眼点</p><p>负载均衡产品分类</p><figure><img src="'+l+'" alt="image-20211113162334546" tabindex="0" loading="lazy"><figcaption>image-20211113162334546</figcaption></figure><p>软件负载均衡设备： lvs（4层路由设备，ip、端口号）、haproxy、nginx、</p><p>对比：</p><p>软件负载均衡设备（廉价解决方案）：</p><figure><img src="'+t+'" alt="image-20211113163036742" tabindex="0" loading="lazy"><figcaption>image-20211113163036742</figcaption></figure><p>硬件负载均衡设备：</p><p>F5： BIG IP</p><p>Citrix，Netscaler</p><p>A10</p><p>深信服</p><h3 id="ha-high-avaliabillity" tabindex="-1"><a class="header-anchor" href="#ha-high-avaliabillity"><span>HA： High Avaliabillity</span></a></h3><p>增加服务可用性</p><p>99% 一年3天不在线</p><p>99.9% 一年0.3天不在线</p><p>KeepAlived：</p><figure><img src="'+p+'" alt="image-20211113171035950" tabindex="0" loading="lazy"><figcaption>image-20211113171035950</figcaption></figure><h3 id="hpc-high-performance" tabindex="-1"><a class="header-anchor" href="#hpc-high-performance"><span>HPC High performance</span></a></h3><p>高性能计算集群：尽量向上扩展，如果 cpu过多，在架构上纵然会有问题的并行处理集群</p><p>1、分布式文件系统</p><p>2、将大任务分割为小任务，分别进行处理的机制（Hadoop是并行处理集群）</p><h2 id="负载均衡-1" tabindex="-1"><a class="header-anchor" href="#负载均衡-1"><span>负载均衡</span></a></h2><h3 id="主要方式" tabindex="-1"><a class="header-anchor" href="#主要方式"><span>主要方式：</span></a></h3><p>LB 高性能 高可用 高并发</p><h4 id="http重定向" tabindex="-1"><a class="header-anchor" href="#http重定向"><span>http重定向</span></a></h4><p>rewrite方式</p><p>客户端压力大，性能差</p><p>302跳转： 有概率被seo引擎判断为作弊</p><figure><img src="'+h+'" alt="image-20211113175339554" tabindex="0" loading="lazy"><figcaption>image-20211113175339554</figcaption></figure><h4 id="dns负载均衡" tabindex="-1"><a class="header-anchor" href="#dns负载均衡"><span>DNS负载均衡</span></a></h4><p>DNS解析时提供负载能力</p><p>缺点：目前的DNS解析是多级解析，服务器下线，记录仍生效，导致无法访问</p><figure><img src="'+r+'" alt="image-20211113180301959" tabindex="0" loading="lazy"><figcaption>image-20211113180301959</figcaption></figure><h4 id="反向代理负载均衡" tabindex="-1"><a class="header-anchor" href="#反向代理负载均衡"><span>反向代理负载均衡</span></a></h4><p>原理：squid ，nginx</p><figure><img src="'+d+'" alt="image-20211114085827104" tabindex="0" loading="lazy"><figcaption>image-20211114085827104</figcaption></figure><h4 id="ip网络层负载均衡" tabindex="-1"><a class="header-anchor" href="#ip网络层负载均衡"><span>IP网络层负载均衡</span></a></h4><figure><img src="'+g+'" alt="image-20211114090028397" tabindex="0" loading="lazy"><figcaption>image-20211114090028397</figcaption></figure><figure><img src="'+c+'" alt="image-20211114090041036" tabindex="0" loading="lazy"><figcaption>image-20211114090041036</figcaption></figure><figure><img src="'+k+'" alt="image-20211114090057988" tabindex="0" loading="lazy"><figcaption>image-20211114090057988</figcaption></figure><h4 id="数据链路层负载均衡" tabindex="-1"><a class="header-anchor" href="#数据链路层负载均衡"><span>数据链路层负载均衡</span></a></h4><figure><img src="'+o+'" alt="image-20211114090845169" tabindex="0" loading="lazy"><figcaption>image-20211114090845169</figcaption></figure><h4 id="f5硬件负载均衡" tabindex="-1"><a class="header-anchor" href="#f5硬件负载均衡"><span>F5硬件负载均衡</span></a></h4><figure><img src="'+m+'" alt="image-20211114091053116" tabindex="0" loading="lazy"><figcaption>image-20211114091053116</figcaption></figure><h4 id="四层负载和七层负载" tabindex="-1"><a class="header-anchor" href="#四层负载和七层负载"><span>四层负载和七层负载</span></a></h4><figure><img src="'+v+'" alt="image-20211114091217432" tabindex="0" loading="lazy"><figcaption>image-20211114091217432</figcaption></figure><h4 id="关于代理" tabindex="-1"><a class="header-anchor" href="#关于代理"><span>关于代理</span></a></h4><figure><img src="'+b+'" alt="image-20211114091451393" tabindex="0" loading="lazy"><figcaption>image-20211114091451393</figcaption></figure><h3 id="lvs概述" tabindex="-1"><a class="header-anchor" href="#lvs概述"><span>lvs概述</span></a></h3><figure><img src="'+f+'" alt="image-20211114092538677" tabindex="0" loading="lazy"><figcaption>image-20211114092538677</figcaption></figure><figure><img src="'+u+'" alt="image-20211114093043979" tabindex="0" loading="lazy"><figcaption>image-20211114093043979</figcaption></figure><h3 id="lvs工作模式" tabindex="-1"><a class="header-anchor" href="#lvs工作模式"><span>lvs工作模式</span></a></h3><h4 id="nat转发模式" tabindex="-1"><a class="header-anchor" href="#nat转发模式"><span>NAT转发模式</span></a></h4><p>NAT：网络地址转换</p><figure><img src="'+y+'" alt="image-20211114093750021" tabindex="0" loading="lazy"><figcaption>image-20211114093750021</figcaption></figure><figure><img src="'+F+'" alt="image-20211114094615718" tabindex="0" loading="lazy"><figcaption>image-20211114094615718</figcaption></figure><h4 id="dr直接路由模式-mac" tabindex="-1"><a class="header-anchor" href="#dr直接路由模式-mac"><span>DR直接路由模式（MAC）</span></a></h4><figure><img src="'+A+'" alt="image-20211114145843200" tabindex="0" loading="lazy"><figcaption>image-20211114145843200</figcaption></figure><p>工作原理</p><figure><img src="'+_+'" alt="image-20211114145617062" tabindex="0" loading="lazy"><figcaption>image-20211114145617062</figcaption></figure><h4 id="tun-ip隧道模式" tabindex="-1"><a class="header-anchor" href="#tun-ip隧道模式"><span>TUN-IP隧道模式</span></a></h4><figure><img src="'+x+'" alt="image-20211114155619941" tabindex="0" loading="lazy"><figcaption>image-20211114155619941</figcaption></figure><figure><img src="'+C+'" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h4 id="full-nat" tabindex="-1"><a class="header-anchor" href="#full-nat"><span>FULL-NAT</span></a></h4><figure><img src="'+B+'" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><figure><img src="'+E+'" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h4 id="模式对比" tabindex="-1"><a class="header-anchor" href="#模式对比"><span>模式对比</span></a></h4><figure><img src="'+D+'" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h3 id="轮询算法" tabindex="-1"><a class="header-anchor" href="#轮询算法"><span>轮询算法</span></a></h3><p>Fixed Scheduling Method 静态调服方法</p><p>RR 轮询</p><figure><img src="'+z+'" alt="image-20211114160525159" tabindex="0" loading="lazy"><figcaption>image-20211114160525159</figcaption></figure><p>WRR 加权轮询</p><figure><img src="'+L+'" alt="image-20211114160530580" tabindex="0" loading="lazy"><figcaption>image-20211114160530580</figcaption></figure><p>DH 目标地址hash</p><figure><img src="'+S+'" alt="image-20211114160933272" tabindex="0" loading="lazy"><figcaption>image-20211114160933272</figcaption></figure><p>Dynamic Scheduling Method 动态调服方法</p><p>LC 最小连接数</p><figure><img src="'+T+'" alt="image-20211114160654786" tabindex="0" loading="lazy"><figcaption>image-20211114160654786</figcaption></figure><p>WLC 加权最小链接数</p><figure><img src="'+V+`" alt="image-20211114160828264" tabindex="0" loading="lazy"><figcaption>image-20211114160828264</figcaption></figure><p>LBLC 基于本地的最少链接</p><p>LBLCR 带复制的基于本地的最少链接</p><h1 id="lvs-dr实战案例" tabindex="-1"><a class="header-anchor" href="#lvs-dr实战案例"><span>LVS-DR实战案例</span></a></h1><p>DR：direct route直连路由</p><p>环境：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">web1</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">172.16.100.12</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">web2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">172.16.100.11</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">lvs-dr</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">172.16.100.21</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">vip</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">172.16.100.22</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置：</p><p>1、lvs-dr准备vip和路由</p><p>添加vip</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ifconfig</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ens32:0</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 172.16.100.22</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> broadcast</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 172.16.100.255</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> netmask</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 255.255.255.0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> up</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">route</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -host</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 172.16.100.22</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dev</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ens32:0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">VIP和RIP要配置到同一个网卡上</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置路由转发</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">vi</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/sysctl.conf</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">net.ipv4.ip_forward</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">=1</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 开启网络路由转发</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">net.ipv4.conf.all.send_redirects</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">=0</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 禁止转发重定向报文</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">net.ipv4.conf.ens32.send_redirects</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">=0</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 禁止ens32转发重定向报文</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">net.ipv4.conf.default.send_redirects</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">=0</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 禁止默认转发重定向报文</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、lvs-dr设置负载均衡条目、规则</p><p>设置ipvsadm</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">yum</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ipvsadm</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ipvsamd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -C</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ipvsadm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -A</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -t</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 172.16.100.22:80</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rr</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ipvsadm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -a</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -t</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 172.16.100.22:80</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -r</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 172.16.100.12:80</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -g</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ipvsadm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -a</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -t</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 172.16.100.22:80</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -r</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 172.16.100.11:80</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -g</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">-a</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 对内的地址</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">-r</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> route</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">-m</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nat模式Masq</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">-A</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">   对外提供的地址</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">-t</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">   TCP协议</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">-s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">   scr...策略</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  rr:roundrouding轮询</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">-g</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 直连模式</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> gateway</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、lvs-dr让设置永久生效</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ipvsadm-save</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/etc/sysconfig/ipvsadm-config</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> enable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ipvsadm</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>web集群</p><p>安装web访问</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@web1 ~]# echo </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$HOSTNAME</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt; /var/www/html/index.html</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ifconfig</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> lo:0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 172.16.100.22/32</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@web2 ~]# echo </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$HOSTNAME</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt; /var/www/html/index.html</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ifconfig</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> lo:0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 172.16.100.22/32</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/proc/sys/net/ipv4/conf/all/arp_ignore</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 不理睬arp包</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/proc/sys/net/ipv4/conf/all/arp_announce</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  如果给你包则回复</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在lvs上查询链接</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@lvs ~]# ipvsadm -Lnc</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">IPVS</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> connection</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> entries</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pro</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> expire</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> state</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">       source</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">             virtual</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            destination</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">TCP</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 01:52</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  FIN_WAIT</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    172.16.100.1:54763</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 172.16.100.22:80</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">   172.16.100.11:80</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+w+'" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><figure><img src="'+H+'" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><figure><img src="'+N+'" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h1 id="lvs-nat实战案例" tabindex="-1"><a class="header-anchor" href="#lvs-nat实战案例"><span>LVS-NAT实战案例</span></a></h1><p>拓扑：</p><figure><img src="'+P+'" alt="image-20211114095244968" tabindex="0" loading="lazy"><figcaption>image-20211114095244968</figcaption></figure><p>WEB-server</p><figure><img src="'+I+'" alt="image-20211114110114691" tabindex="0" loading="lazy"><figcaption>image-20211114110114691</figcaption></figure><p>LVS</p><figure><img src="'+R+`" alt="image-20211114113808272" tabindex="0" loading="lazy"><figcaption>image-20211114113808272</figcaption></figure><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ipvsadm -A -t 192.168.154.128:80 -s rr</span></span>
<span class="line"><span>-A   对外提供的地址</span></span>
<span class="line"><span>-t   TCP协议</span></span>
<span class="line"><span>-s   scr...策略  rr:roundrouding轮询 </span></span>
<span class="line"><span>ipvsadm -a -t 192.168.154.128:80 -r  172.16.100.29:80 -m </span></span>
<span class="line"><span>-a 对内的地址</span></span>
<span class="line"><span>-r route</span></span>
<span class="line"><span>-m nat模式Masq</span></span>
<span class="line"><span>ipvsadm -a -t 192.168.154.128:80 -r  172.16.100.31:80 -m </span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>客户端测试即可</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,119)]))}const J=s(M,[["render",q],["__file","ha-lvs-keepalived.html.vue"]]),O=JSON.parse('{"path":"/note-book/HA-LVS-Keepalived/ha-lvs-keepalived.html","title":"大型网站高并发解决方案LVS","lang":"zh-CN","frontmatter":{"description":"大型网站高并发解决方案LVS 负载均衡 集群功能分类： LB： Load Balance 有一定的高可用能力，但不是高可用集群，是以提高服务的并发处理能力为根本着眼点 负载均衡产品分类 image-20211113162334546image-20211113162334546 软件负载均衡设备： lvs（4层路由设备，ip、端口号）、haproxy、...","head":[["meta",{"property":"og:url","content":"https://www.geekery.cn/note-book/HA-LVS-Keepalived/ha-lvs-keepalived.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"大型网站高并发解决方案LVS"}],["meta",{"property":"og:description","content":"大型网站高并发解决方案LVS 负载均衡 集群功能分类： LB： Load Balance 有一定的高可用能力，但不是高可用集群，是以提高服务的并发处理能力为根本着眼点 负载均衡产品分类 image-20211113162334546image-20211113162334546 软件负载均衡设备： lvs（4层路由设备，ip、端口号）、haproxy、..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-13T15:08:38.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-13T15:08:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"大型网站高并发解决方案LVS\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-13T15:08:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"集群功能分类：","slug":"集群功能分类","link":"#集群功能分类","children":[{"level":3,"title":"LB： Load Balance","slug":"lb-load-balance","link":"#lb-load-balance","children":[]},{"level":3,"title":"HA： High Avaliabillity","slug":"ha-high-avaliabillity","link":"#ha-high-avaliabillity","children":[]},{"level":3,"title":"HPC High performance","slug":"hpc-high-performance","link":"#hpc-high-performance","children":[]}]},{"level":2,"title":"负载均衡","slug":"负载均衡-1","link":"#负载均衡-1","children":[{"level":3,"title":"主要方式：","slug":"主要方式","link":"#主要方式","children":[]},{"level":3,"title":"lvs概述","slug":"lvs概述","link":"#lvs概述","children":[]},{"level":3,"title":"lvs工作模式","slug":"lvs工作模式","link":"#lvs工作模式","children":[]},{"level":3,"title":"轮询算法","slug":"轮询算法","link":"#轮询算法","children":[]}]}],"git":{"createdTime":1691939318000,"updatedTime":1691939318000,"contributors":[{"name":"PaperDragon","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":3.72,"words":1116},"filePathRelative":"note-book/HA-LVS-Keepalived/ha-lvs-keepalived.md","localizedDate":"2023年8月13日","excerpt":"\\n<h1>负载均衡</h1>\\n<h2>集群功能分类：</h2>\\n<h3>LB： Load Balance</h3>\\n<p>有一定的高可用能力，但不是高可用集群，是以提高服务的并发处理能力为根本着眼点</p>\\n<p>负载均衡产品分类</p>\\n<figure><figcaption>image-20211113162334546</figcaption></figure>\\n<p>软件负载均衡设备： lvs（4层路由设备，ip、端口号）、haproxy、nginx、</p>\\n<p>对比：</p>\\n<p>软件负载均衡设备（廉价解决方案）：</p>\\n<figure><figcaption>image-20211113163036742</figcaption></figure>","autoDesc":true}');export{J as comp,O as data};
