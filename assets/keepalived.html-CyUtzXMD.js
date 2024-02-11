import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as e}from"./app-D-ppQBzM.js";const i="/assets/image-20211114172234554-Bb2wTu__.png",t="/assets/image-20211114172407050-CZRgevgR.png",p="/assets/image-20211114172435055-BdtvdGrU.png",l="/assets/image-20211114172601221-BRjakV3q.png",c="/assets/image-20211114173341961-BMVVPCmU.png",o="/assets/image-20211114173520843-G_x4g7B6.png",r="/assets/image-20211114173845171-CiarWhpd.png",d="/assets/image-20211114174801294-BwcI-XAk.png",u="/assets/image-20211114175603252-B8Whq82c.png",v="/assets/image-20211114175816916-DkSHWqzD.png",m="/assets/image-20211114180302909-CoP8ivgI.png",k="/assets/image-20211114180318411-C17h7MRI.png",b="/assets/image-20211114181924344-CJk_6UmP.png",g="/assets/image-20211114210613877-16368951757981-iskp6NFf.png",f="/assets/image-20211114220407845-Bty9eOnT.png",h={},_=e('<h1 id="ha" tabindex="-1"><a class="header-anchor" href="#ha"><span>HA</span></a></h1><figure><img src="'+i+'" alt="image-20211114172234554" tabindex="0" loading="lazy"><figcaption>image-20211114172234554</figcaption></figure><h2 id="什么是高可用集群ha" tabindex="-1"><a class="header-anchor" href="#什么是高可用集群ha"><span>什么是高可用集群HA</span></a></h2><figure><img src="'+t+'" alt="image-20211114172407050" tabindex="0" loading="lazy"><figcaption>image-20211114172407050</figcaption></figure><h2 id="高可用集群衡量标准" tabindex="-1"><a class="header-anchor" href="#高可用集群衡量标准"><span>高可用集群衡量标准</span></a></h2><figure><img src="'+p+'" alt="image-20211114172435055" tabindex="0" loading="lazy"><figcaption>image-20211114172435055</figcaption></figure><h3 id="具体衡量标准" tabindex="-1"><a class="header-anchor" href="#具体衡量标准"><span>具体衡量标准</span></a></h3><figure><img src="'+l+'" alt="image-20211114172601221" tabindex="0" loading="lazy"><figcaption>image-20211114172601221</figcaption></figure><h2 id="自动切换-故障转移-failover" tabindex="-1"><a class="header-anchor" href="#自动切换-故障转移-failover"><span>自动切换/故障转移(FailOver)</span></a></h2><figure><img src="'+c+'" alt="image-20211114173341961" tabindex="0" loading="lazy"><figcaption>image-20211114173341961</figcaption></figure><h2 id="自动侦测" tabindex="-1"><a class="header-anchor" href="#自动侦测"><span>自动侦测</span></a></h2><figure><img src="'+o+'" alt="image-20211114173520843" tabindex="0" loading="lazy"><figcaption>image-20211114173520843</figcaption></figure><h3 id="脑裂" tabindex="-1"><a class="header-anchor" href="#脑裂"><span>脑裂</span></a></h3><h4 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h4><figure><img src="'+r+'" alt="image-20211114173845171" tabindex="0" loading="lazy"><figcaption>image-20211114173845171</figcaption></figure><h4 id="脑裂的产生原因" tabindex="-1"><a class="header-anchor" href="#脑裂的产生原因"><span>脑裂的产生原因</span></a></h4><h4 id="常见问题解决方案" tabindex="-1"><a class="header-anchor" href="#常见问题解决方案"><span>常见问题解决方案</span></a></h4><figure><img src="'+d+'" alt="image-20211114174801294" tabindex="0" loading="lazy"><figcaption>image-20211114174801294</figcaption></figure><figure><img src="'+u+'" alt="image-20211114175603252" tabindex="0" loading="lazy"><figcaption>image-20211114175603252</figcaption></figure><h2 id="其他高可用方案" tabindex="-1"><a class="header-anchor" href="#其他高可用方案"><span>其他高可用方案</span></a></h2><figure><img src="'+v+'" alt="image-20211114175816916" tabindex="0" loading="lazy"><figcaption>image-20211114175816916</figcaption></figure><h1 id="keepalived" tabindex="-1"><a class="header-anchor" href="#keepalived"><span>Keepalived</span></a></h1><h2 id="keepalived是什么" tabindex="-1"><a class="header-anchor" href="#keepalived是什么"><span>keepalived是什么</span></a></h2><figure><img src="'+m+'" alt="image-20211114180302909" tabindex="0" loading="lazy"><figcaption>image-20211114180302909</figcaption></figure><h2 id="keepalived工作原理" tabindex="-1"><a class="header-anchor" href="#keepalived工作原理"><span>keepalived工作原理</span></a></h2><figure><img src="'+k+'" alt="image-20211114180318411" tabindex="0" loading="lazy"><figcaption>image-20211114180318411</figcaption></figure><h2 id="vrrp协议" tabindex="-1"><a class="header-anchor" href="#vrrp协议"><span>VRRP协议</span></a></h2><p>路由器上</p><h2 id="keepalived主要有三个模块" tabindex="-1"><a class="header-anchor" href="#keepalived主要有三个模块"><span>keepalived主要有三个模块</span></a></h2><figure><img src="'+b+`" alt="image-20211114181924344" tabindex="0" loading="lazy"><figcaption>image-20211114181924344</figcaption></figure><h2 id="实战案例1" tabindex="-1"><a class="header-anchor" href="#实战案例1"><span>实战案例1</span></a></h2><h3 id="环境" tabindex="-1"><a class="header-anchor" href="#环境"><span>环境</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>web1 <span class="token number">172.16</span>.100.12
web2 <span class="token number">172.16</span>.100.11
vip  <span class="token number">172.16</span>.100.21
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="server1" tabindex="-1"><a class="header-anchor" href="#server1"><span>server1</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> keepalived
<span class="token function">vi</span> /etc/keepalived/keepalived.conf
安装nginx



<span class="token operator">!</span>Configuration File <span class="token keyword">for</span> keepalived
global_defs <span class="token punctuation">{</span>
        router_id <span class="token number">1</span>  <span class="token comment">#设备在组中的id，设置不一样</span>
<span class="token punctuation">}</span>

<span class="token comment">#vrrp_script chk_nginx {                                        # 健康检查</span>
<span class="token comment">#   script &quot;/etc/keepalived/ch_ng.sh&quot;            # 检查脚本</span>
<span class="token comment">#       interval 2                                                         # 检查频率 秒</span>
<span class="token comment">#       weight -5                                                          # priority 减少5</span>
<span class="token comment">#       fall 3                                                          #失败3次</span>
<span class="token comment">#}</span>

vrrp_instance VI_1 <span class="token punctuation">{</span>                            <span class="token comment"># 实例名字两台路由器相同</span>
        state MASTER                                    <span class="token comment"># 主或从状态</span>
        interface ens32                                 <span class="token comment"># 监控网卡</span>
        mcast_src_ip <span class="token number">172.16</span>.100.12              <span class="token comment"># 心跳源ip</span>
        virtual_router_id <span class="token number">55</span>                    <span class="token comment"># 虚拟路由编号，主备要一致</span>
        priority <span class="token number">100</span>                            <span class="token comment"># 优先级</span>
        advert_int <span class="token number">1</span>                            <span class="token comment"># 心跳间隔</span>

        authentication <span class="token punctuation">{</span>                        <span class="token comment"># 密钥认证 1-8位</span>
                auth_type PASS
                auth_pass <span class="token number">123456</span>
        <span class="token punctuation">}</span>
        
        virtual_ipaddress <span class="token punctuation">{</span>
        	<span class="token number">172.16</span>.100.12					<span class="token comment"># VIP</span>
        <span class="token punctuation">}</span>
<span class="token comment">#        track_script {						# 引用脚本</span>
<span class="token comment">#        	chk_nginx</span>
<span class="token comment">#        }</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="server2" tabindex="-1"><a class="header-anchor" href="#server2"><span>server2</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> keepalived
<span class="token function">vi</span> /etc/keepalived/keepalived.conf
安装nginx



<span class="token operator">!</span>Configuration File <span class="token keyword">for</span> keepalived
global_defs <span class="token punctuation">{</span>
        router_id <span class="token number">1</span>  <span class="token comment">#设备在组中的id，设置不一样</span>
<span class="token punctuation">}</span>

<span class="token comment">#vrrp_script chk_nginx {                                        # 健康检查</span>
<span class="token comment">#   script &quot;/etc/keepalived/ch_ng.sh&quot;            # 检查脚本</span>
<span class="token comment">#       interval 2                                                         # 检查频率 秒</span>
<span class="token comment">#       weight -5                                                          # priority 减少5</span>
<span class="token comment">#       fall 3                                                          #失败3次</span>
<span class="token comment">#}</span>

vrrp_instance VI_1 <span class="token punctuation">{</span>                            <span class="token comment"># 实例名字两台路由器相同</span>
        state BACKUP                                    <span class="token comment"># 主或从状态</span>
        interface ens32                                 <span class="token comment"># 监控网卡</span>
        mcast_src_ip <span class="token number">172.16</span>.100.12              <span class="token comment"># 心跳源ip</span>
        virtual_router_id <span class="token number">55</span>                    <span class="token comment"># 虚拟路由编号，主备要一致</span>
        priority <span class="token number">100</span>                            <span class="token comment"># 优先级</span>
        advert_int <span class="token number">1</span>                            <span class="token comment"># 心跳间隔</span>

        authentication <span class="token punctuation">{</span>                        <span class="token comment"># 密钥认证 1-8位</span>
                auth_type PASS
                auth_pass <span class="token number">123456</span>
        <span class="token punctuation">}</span>
        
        virtual_ipaddress <span class="token punctuation">{</span>
        	<span class="token number">172.16</span>.100.12					<span class="token comment"># VIP</span>
        <span class="token punctuation">}</span>
<span class="token comment">#        track_script {						# 引用脚本</span>
<span class="token comment">#        	chk_nginx</span>
<span class="token comment">#        }</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="client" tabindex="-1"><a class="header-anchor" href="#client"><span>client</span></a></h3><p>自动跳节点</p><h3 id="关于keepalived对nginx状态未知的问题" tabindex="-1"><a class="header-anchor" href="#关于keepalived对nginx状态未知的问题"><span>关于keepalived对nginx状态未知的问题</span></a></h3><p>vim /etc/keepalived/ck_ng.sh</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash                                                                                                                                              </span>
<span class="token comment"># 检查Nginx是否存在</span>
<span class="token assign-left variable">COUNT1</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span>ss <span class="token parameter variable">-anpt</span> <span class="token operator">|</span> <span class="token function">grep</span> nginx <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span> <span class="token variable">\`</span></span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$COUNT1</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token punctuation">;</span> <span class="token keyword">then</span>
    /usr/local/sbin/nginx <span class="token parameter variable">-s</span> start
    <span class="token function">sleep</span> <span class="token number">2</span>
        <span class="token assign-left variable">COUNT2</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span>ss <span class="token parameter variable">-anpt</span> <span class="token operator">|</span> <span class="token function">grep</span> nginx <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span><span class="token variable">\`</span></span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$COUNT2</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token punctuation">;</span> <span class="token keyword">then</span>
            /usr/bin/kill <span class="token parameter variable">-15</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> /var/run/keepalived.pid<span class="token variable">\`</span></span>
            <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;keeplived is stoped&quot;</span>
        <span class="token keyword">else</span>
            <span class="token builtin class-name">exit</span> <span class="token number">0</span>
        <span class="token keyword">fi</span>  
<span class="token keyword">fi</span>



apache

<span class="token comment">#!/bin/bash                                                                                                                                              </span>
<span class="token comment"># 检查Apache是否存在</span>
<span class="token assign-left variable">COUNT1</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span>ss <span class="token parameter variable">-anpt</span> <span class="token operator">|</span> <span class="token function">grep</span> httpd <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span> <span class="token variable">\`</span></span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$COUNT1</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token punctuation">;</span> <span class="token keyword">then</span>
    systemctl restart httpd
    <span class="token function">sleep</span> <span class="token number">2</span>
        <span class="token assign-left variable">COUNT2</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span>ss <span class="token parameter variable">-anpt</span> <span class="token operator">|</span> <span class="token function">grep</span> httpd <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span><span class="token variable">\`</span></span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$COUNT2</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token punctuation">;</span> <span class="token keyword">then</span>
            /usr/bin/kill <span class="token parameter variable">-15</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> /var/run/keepalived.pid<span class="token variable">\`</span></span>
            <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;keeplived is stoped&quot;</span>
        <span class="token keyword">else</span>
            <span class="token builtin class-name">exit</span> <span class="token number">0</span>
        <span class="token keyword">fi</span>  
<span class="token keyword">fi</span>


<span class="token function">chmod</span> +x /etc/keepalived/ck_ng.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实战案例2" tabindex="-1"><a class="header-anchor" href="#实战案例2"><span>实战案例2</span></a></h2><p>lvs+keepalived</p><figure><img src="`+g+`" alt="image-20211114210613877" tabindex="0" loading="lazy"><figcaption>image-20211114210613877</figcaption></figure><p>1、在master上安装配置keepalived</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> ipvsadm keepalived
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、在master\\backup上修改配置文件</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@dir1 ~<span class="token punctuation">]</span><span class="token comment"># </span>
<span class="token punctuation">[</span>root@dir1 ~<span class="token punctuation">]</span><span class="token comment"># </span>
<span class="token punctuation">[</span>root@dir1 ~<span class="token punctuation">]</span><span class="token comment"># cat /etc/keepalived/keepalived.conf</span>
<span class="token operator">!</span>Configuration File <span class="token keyword">for</span> keepalived
global_defs <span class="token punctuation">{</span>
        router_id <span class="token number">1</span>  <span class="token comment">#设备在组中的id，设置不一样</span>
<span class="token punctuation">}</span>

<span class="token comment">#vrrp_script chk_nginx {                                        # 健康检查</span>
<span class="token comment">#   script &quot;/etc/keepalived/ch_ng.sh&quot;            # 检查脚本</span>
<span class="token comment">#       interval 2                                                         # 检查频率 秒</span>
<span class="token comment">#       weight -5                                                          # priority 减少5</span>
<span class="token comment">#       fall 3                                                          #失败3次</span>
<span class="token comment">#}</span>

vrrp_instance VI_1 <span class="token punctuation">{</span>                            <span class="token comment"># 实例名字两台路由器相同</span>
        state MASTER                                    <span class="token comment"># 主或从状态</span>
        interface ens32                                 <span class="token comment"># 监控网卡</span>
        mcast_src_ip <span class="token number">172.16</span>.100.21              <span class="token comment"># 心跳源ip</span>
        virtual_router_id <span class="token number">55</span>                    <span class="token comment"># 虚拟路由编号，主备要一致</span>
        priority <span class="token number">150</span>                            <span class="token comment"># 优先级</span>
        advert_int <span class="token number">1</span>                            <span class="token comment"># 心跳间隔</span>

        authentication <span class="token punctuation">{</span>                        <span class="token comment"># 密钥认证 1-8位</span>
                auth_type PASS
                auth_pass <span class="token number">123456</span>
        <span class="token punctuation">}</span>
        
        virtual_ipaddress <span class="token punctuation">{</span>
        	<span class="token number">172.16</span>.100.22/24 dev ens32 					<span class="token comment"># VIP</span>
        <span class="token punctuation">}</span>

<span class="token comment">#        track_script {						# 引用脚本</span>
<span class="token comment">#        	chk_nginx</span>
<span class="token comment">#        }</span>
<span class="token punctuation">}</span>
virtual_server <span class="token number">172.16</span>.100.22 <span class="token number">80</span> <span class="token punctuation">{</span>       <span class="token comment"># LVS配置</span>
        delay_loop <span class="token number">3</span>                    <span class="token comment"># 服务轮询的时间间隔</span>
        lb_algo rr                      <span class="token comment"># LVS调度算法</span>
        lb_kind DR                      <span class="token comment"># LVS集群模式</span>
        protocol TCP
        real_server <span class="token number">172.16</span>.100.14 <span class="token number">80</span> <span class="token punctuation">{</span>
                weight <span class="token number">1</span>
                TCP_CHECK <span class="token punctuation">{</span>
                        connect_timeout <span class="token number">3</span>       <span class="token comment"># 健康检查方式，连接超时时间</span>
                <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        real_server <span class="token number">172.16</span>.100.15 <span class="token number">80</span> <span class="token punctuation">{</span>
                weight <span class="token number">1</span>
                TCP_CHECK <span class="token punctuation">{</span>
                        connect_timeout <span class="token number">3</span>
                <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token punctuation">[</span>root@dir1 ~<span class="token punctuation">]</span><span class="token comment"># </span>



<span class="token punctuation">[</span>root@dir2 ~<span class="token punctuation">]</span><span class="token comment"># </span>
<span class="token punctuation">[</span>root@dir2 ~<span class="token punctuation">]</span><span class="token comment"># cat /etc/keepalived/keepalived.conf</span>
<span class="token operator">!</span>Configuration File <span class="token keyword">for</span> keepalived
global_defs <span class="token punctuation">{</span>
        router_id <span class="token number">2</span>  <span class="token comment">#设备在组中的id，设置不一样</span>
<span class="token punctuation">}</span>

<span class="token comment">#vrrp_script chk_nginx {                                        # 健康检查</span>
<span class="token comment">#   script &quot;/etc/keepalived/ch_ng.sh&quot;            # 检查脚本</span>
<span class="token comment">#       interval 2                                                         # 检查频率 秒</span>
<span class="token comment">#       weight -5                                                          # priority 减少5</span>
<span class="token comment">#       fall 3                                                          #失败3次</span>
<span class="token comment">#}</span>

vrrp_instance VI_1 <span class="token punctuation">{</span>                            <span class="token comment"># 实例名字两台路由器相同</span>
        state BACKUP                                    <span class="token comment"># 主或从状态</span>
        interface ens32                                 <span class="token comment"># 监控网卡</span>
        mcast_src_ip <span class="token number">172.16</span>.100.16              <span class="token comment"># 心跳源ip</span>
        virtual_router_id <span class="token number">55</span>                    <span class="token comment"># 虚拟路由编号，主备要一致</span>
        priority <span class="token number">100</span>                            <span class="token comment"># 优先级</span>
        advert_int <span class="token number">1</span>                            <span class="token comment"># 心跳间隔</span>

        authentication <span class="token punctuation">{</span>                        <span class="token comment"># 密钥认证 1-8位</span>
                auth_type PASS
                auth_pass <span class="token number">123456</span>
        <span class="token punctuation">}</span>
        
        virtual_ipaddress <span class="token punctuation">{</span>
        	<span class="token number">172.16</span>.100.22/24 dev ens32 					<span class="token comment"># VIP</span>
        <span class="token punctuation">}</span>

<span class="token comment">#        track_script {						# 引用脚本</span>
<span class="token comment">#        	chk_nginx</span>
<span class="token comment">#        }</span>
<span class="token punctuation">}</span>
virtual_server <span class="token number">172.16</span>.100.22 <span class="token number">80</span> <span class="token punctuation">{</span>       <span class="token comment"># LVS配置</span>
        delay_loop <span class="token number">3</span>                    <span class="token comment"># 服务轮询的时间间隔</span>
        lb_algo rr                      <span class="token comment"># LVS调度算法</span>
        lb_kind DR                      <span class="token comment"># LVS集群模式</span>
        protocol TCP
        real_server <span class="token number">172.16</span>.100.14 <span class="token number">80</span> <span class="token punctuation">{</span>
                weight <span class="token number">1</span>
                TCP_CHECK <span class="token punctuation">{</span>
                        connect_timeout <span class="token number">3</span>       <span class="token comment"># 健康检查方式，连接超时时间</span>
                <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        real_server <span class="token number">172.16</span>.100.15 <span class="token number">80</span> <span class="token punctuation">{</span>
                weight <span class="token number">1</span>
                TCP_CHECK <span class="token punctuation">{</span>
                        connect_timeout <span class="token number">3</span>
                <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token punctuation">[</span>root@dir2 ~<span class="token punctuation">]</span><span class="token comment"># </span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6、master和backup上启动服务</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@dir1 ~<span class="token punctuation">]</span><span class="token comment"># systemctl status keepalived</span>
<span class="token punctuation">\\</span>● keepalived.service - LVS and VRRP High Availability Monitor
   Loaded: loaded <span class="token punctuation">(</span>/usr/lib/systemd/system/keepalived.service<span class="token punctuation">;</span> enabled<span class="token punctuation">;</span> vendor preset: disabled<span class="token punctuation">)</span>
   Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Sun <span class="token number">2021</span>-11-14 <span class="token number">21</span>:53:56 CST<span class="token punctuation">;</span> 1min 42s ago
  Process: <span class="token number">6821</span> <span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/sbin/keepalived <span class="token variable">$KEEPALIVED_OPTIONS</span> <span class="token punctuation">(</span>code<span class="token operator">=</span>exited, <span class="token assign-left variable">status</span><span class="token operator">=</span><span class="token number">0</span>/SUCCESS<span class="token punctuation">)</span>
 Main PID: <span class="token number">6822</span> <span class="token punctuation">(</span>keepalived<span class="token punctuation">)</span>
   CGroup: /system.slice/keepalived.service
           ├─6822 /usr/sbin/keepalived <span class="token parameter variable">-D</span>
           ├─6823 /usr/sbin/keepalived <span class="token parameter variable">-D</span>
           └─6824 /usr/sbin/keepalived <span class="token parameter variable">-D</span>

Nov <span class="token number">14</span> <span class="token number">21</span>:53:58 dir1 Keepalived_vrrp<span class="token punctuation">[</span><span class="token number">6824</span><span class="token punctuation">]</span>: Sending gratuitous ARP on ens32 <span class="token keyword">for</span> <span class="token number">172.16</span>.100.22
Nov <span class="token number">14</span> <span class="token number">21</span>:53:58 dir1 Keepalived_vrrp<span class="token punctuation">[</span><span class="token number">6824</span><span class="token punctuation">]</span>: Sending gratuitous ARP on ens32 <span class="token keyword">for</span> <span class="token number">172.16</span>.100.22
Nov <span class="token number">14</span> <span class="token number">21</span>:53:58 dir1 Keepalived_vrrp<span class="token punctuation">[</span><span class="token number">6824</span><span class="token punctuation">]</span>: Sending gratuitous ARP on ens32 <span class="token keyword">for</span> <span class="token number">172.16</span>.100.22
Nov <span class="token number">14</span> <span class="token number">21</span>:53:58 dir1 Keepalived_vrrp<span class="token punctuation">[</span><span class="token number">6824</span><span class="token punctuation">]</span>: Sending gratuitous ARP on ens32 <span class="token keyword">for</span> <span class="token number">172.16</span>.100.22
Nov <span class="token number">14</span> <span class="token number">21</span>:54:03 dir1 Keepalived_vrrp<span class="token punctuation">[</span><span class="token number">6824</span><span class="token punctuation">]</span>: Sending gratuitous ARP on ens32 <span class="token keyword">for</span> <span class="token number">172.16</span>.100.22
Nov <span class="token number">14</span> <span class="token number">21</span>:54:03 dir1 Keepalived_vrrp<span class="token punctuation">[</span><span class="token number">6824</span><span class="token punctuation">]</span>: VRRP_Instance<span class="token punctuation">(</span>VI_1<span class="token punctuation">)</span> Sending/queueing gratuitous ARPs on ens32 f<span class="token punctuation">..</span>.00.22
Nov <span class="token number">14</span> <span class="token number">21</span>:54:03 dir1 Keepalived_vrrp<span class="token punctuation">[</span><span class="token number">6824</span><span class="token punctuation">]</span>: Sending gratuitous ARP on ens32 <span class="token keyword">for</span> <span class="token number">172.16</span>.100.22
Nov <span class="token number">14</span> <span class="token number">21</span>:54:03 dir1 Keepalived_vrrp<span class="token punctuation">[</span><span class="token number">6824</span><span class="token punctuation">]</span>: Sending gratuitous ARP on ens32 <span class="token keyword">for</span> <span class="token number">172.16</span>.100.22
Nov <span class="token number">14</span> <span class="token number">21</span>:54:03 dir1 Keepalived_vrrp<span class="token punctuation">[</span><span class="token number">6824</span><span class="token punctuation">]</span>: Sending gratuitous ARP on ens32 <span class="token keyword">for</span> <span class="token number">172.16</span>.100.22
Nov <span class="token number">14</span> <span class="token number">21</span>:54:03 dir1 Keepalived_vrrp<span class="token punctuation">[</span><span class="token number">6824</span><span class="token punctuation">]</span>: Sending gratuitous ARP on ens32 <span class="token keyword">for</span> <span class="token number">172.16</span>.100.22
Hint: Some lines were ellipsized, use <span class="token parameter variable">-l</span> to show <span class="token keyword">in</span> full.
<span class="token punctuation">[</span>root@dir1 ~<span class="token punctuation">]</span><span class="token comment"># </span>


<span class="token punctuation">[</span>root@dir2 ~<span class="token punctuation">]</span><span class="token comment"># systemctl status keepalived</span>
<span class="token punctuation">\\</span>● keepalived.service - LVS and VRRP High Availability Monitor
   Loaded: loaded <span class="token punctuation">(</span>/usr/lib/systemd/system/keepalived.service<span class="token punctuation">;</span> enabled<span class="token punctuation">;</span> vendor preset: disabled<span class="token punctuation">)</span>
   Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Sun <span class="token number">2021</span>-11-14 <span class="token number">21</span>:53:56 CST<span class="token punctuation">;</span> 1min 42s ago
  Process: <span class="token number">6805</span> <span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/sbin/keepalived <span class="token variable">$KEEPALIVED_OPTIONS</span> <span class="token punctuation">(</span>code<span class="token operator">=</span>exited, <span class="token assign-left variable">status</span><span class="token operator">=</span><span class="token number">0</span>/SUCCESS<span class="token punctuation">)</span>
 Main PID: <span class="token number">6806</span> <span class="token punctuation">(</span>keepalived<span class="token punctuation">)</span>
   CGroup: /system.slice/keepalived.service
           ├─6806 /usr/sbin/keepalived <span class="token parameter variable">-D</span>
           ├─6807 /usr/sbin/keepalived <span class="token parameter variable">-D</span>
           └─6808 /usr/sbin/keepalived <span class="token parameter variable">-D</span>

Nov <span class="token number">14</span> <span class="token number">21</span>:53:56 dir2 Keepalived_vrrp<span class="token punctuation">[</span><span class="token number">6808</span><span class="token punctuation">]</span>: Registering gratuitous ARP shared channel
Nov <span class="token number">14</span> <span class="token number">21</span>:53:56 dir2 Keepalived_vrrp<span class="token punctuation">[</span><span class="token number">6808</span><span class="token punctuation">]</span>: Opening <span class="token function">file</span> <span class="token string">&#39;/etc/keepalived/keepalived.conf&#39;</span><span class="token builtin class-name">.</span>
Nov <span class="token number">14</span> <span class="token number">21</span>:53:56 dir2 Keepalived_vrrp<span class="token punctuation">[</span><span class="token number">6808</span><span class="token punctuation">]</span>: VRRP_Instance<span class="token punctuation">(</span>VI_1<span class="token punctuation">)</span> removing protocol VIPs.
Nov <span class="token number">14</span> <span class="token number">21</span>:53:56 dir2 Keepalived_vrrp<span class="token punctuation">[</span><span class="token number">6808</span><span class="token punctuation">]</span>: Using LinkWatch kernel netlink reflector<span class="token punctuation">..</span>.
Nov <span class="token number">14</span> <span class="token number">21</span>:53:56 dir2 Keepalived_vrrp<span class="token punctuation">[</span><span class="token number">6808</span><span class="token punctuation">]</span>: VRRP_Instance<span class="token punctuation">(</span>VI_1<span class="token punctuation">)</span> Entering BACKUP STATE
Nov <span class="token number">14</span> <span class="token number">21</span>:53:56 dir2 Keepalived_vrrp<span class="token punctuation">[</span><span class="token number">6808</span><span class="token punctuation">]</span>: VRRP sockpool: <span class="token punctuation">[</span>ifindex<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>, proto<span class="token punctuation">(</span><span class="token number">112</span><span class="token punctuation">)</span>, unicast<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>, fd<span class="token punctuation">(</span><span class="token number">10,11</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
Nov <span class="token number">14</span> <span class="token number">21</span>:53:56 dir2 Keepalived_healthcheckers<span class="token punctuation">[</span><span class="token number">6807</span><span class="token punctuation">]</span>: Initializing ipvs
Nov <span class="token number">14</span> <span class="token number">21</span>:53:56 dir2 Keepalived_healthcheckers<span class="token punctuation">[</span><span class="token number">6807</span><span class="token punctuation">]</span>: Opening <span class="token function">file</span> <span class="token string">&#39;/etc/keepalived/keepalived.conf&#39;</span><span class="token builtin class-name">.</span>
Nov <span class="token number">14</span> <span class="token number">21</span>:53:56 dir2 Keepalived_healthcheckers<span class="token punctuation">[</span><span class="token number">6807</span><span class="token punctuation">]</span>: Activating healthchecker <span class="token keyword">for</span> <span class="token function">service</span> <span class="token punctuation">[</span><span class="token number">172.16</span>.100.22<span class="token punctuation">]</span>:80
Nov <span class="token number">14</span> <span class="token number">21</span>:53:56 dir2 Keepalived_healthcheckers<span class="token punctuation">[</span><span class="token number">6807</span><span class="token punctuation">]</span>: Activating healthchecker <span class="token keyword">for</span> <span class="token function">service</span> <span class="token punctuation">[</span><span class="token number">172.16</span>.100.22<span class="token punctuation">]</span>:80
<span class="token punctuation">[</span>root@dir2 ~<span class="token punctuation">]</span><span class="token comment"># </span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7、web服务器配置</p><p>配置虚拟地址</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@web1 ~<span class="token punctuation">]</span><span class="token comment"># cp /etc/sysconfig/network-scripts/ifcfg-lo /etc/sysconfig/network-scripts/ifcfg-lo:0</span>
<span class="token punctuation">[</span>root@web2 ~<span class="token punctuation">]</span><span class="token comment"># cp /etc/sysconfig/network-scripts/ifcfg-lo /etc/sysconfig/network-scripts/ifcfg-lo:0</span>




<span class="token punctuation">[</span>root@web2 ~<span class="token punctuation">]</span><span class="token comment"># vim /etc/sysconfig/network-scripts/ifcfg-lo:0</span>
<span class="token punctuation">[</span>root@web2 ~<span class="token punctuation">]</span><span class="token comment"># cat /etc/sysconfig/network-scripts/ifcfg-lo:0</span>
<span class="token assign-left variable">DEVICE</span><span class="token operator">=</span>lo:0
<span class="token assign-left variable">IPADDR</span><span class="token operator">=</span><span class="token number">172.16</span>.100.22
<span class="token assign-left variable">NETMASK</span><span class="token operator">=</span><span class="token number">255.255</span>.255.255
<span class="token assign-left variable">ONBOOT</span><span class="token operator">=</span>yes
<span class="token punctuation">[</span>root@web2 ~<span class="token punctuation">]</span><span class="token comment"># </span>

<span class="token punctuation">[</span>root@web1 ~<span class="token punctuation">]</span><span class="token comment"># vim /etc/sysconfig/network-scripts/ifcfg-lo:0</span>
<span class="token punctuation">[</span>root@web1 ~<span class="token punctuation">]</span><span class="token comment"># cat /etc/sysconfig/network-scripts/ifcfg-lo:0</span>
<span class="token assign-left variable">DEVICE</span><span class="token operator">=</span>lo:0
<span class="token assign-left variable">IPADDR</span><span class="token operator">=</span><span class="token number">172.16</span>.100.22
<span class="token assign-left variable">NETMASK</span><span class="token operator">=</span><span class="token number">255.255</span>.255.255
<span class="token assign-left variable">ONBOOT</span><span class="token operator">=</span>yes
<span class="token punctuation">[</span>root@web1 ~<span class="token punctuation">]</span><span class="token comment"># </span>




<span class="token punctuation">[</span>root@web1 ~<span class="token punctuation">]</span><span class="token comment"># systemctl restart network</span>
<span class="token punctuation">[</span>root@web1 ~<span class="token punctuation">]</span><span class="token comment"># ip a</span>
<span class="token number">1</span>: lo: <span class="token operator">&lt;</span>LOOPBACK,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">65536</span> qdisc noqueue state UNKNOWN group default qlen <span class="token number">1000</span>
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet <span class="token number">127.0</span>.0.1/8 scope <span class="token function">host</span> lo
       valid_lft forever preferred_lft forever
    inet <span class="token number">172.16</span>.100.22/32 brd <span class="token number">172.16</span>.100.22 scope global lo:0
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope <span class="token function">host</span> 
       valid_lft forever preferred_lft forever
<span class="token number">2</span>: ens32: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc pfifo_fast state UP group default qlen <span class="token number">1000</span>
    link/ether 00:0c:29:a4:e1:a2 brd ff:ff:ff:ff:ff:ff
    inet <span class="token number">172.16</span>.100.14/24 brd <span class="token number">172.16</span>.100.255 scope global noprefixroute dynamic ens32
       valid_lft 1799sec preferred_lft 1799sec
    inet6 fe80::ad01:cb2d:3f81:c89/64 scope <span class="token function">link</span> tentative noprefixroute dadfailed 
       valid_lft forever preferred_lft forever
    inet6 fe80::717d:2c3a:555f:6c78/64 scope <span class="token function">link</span> tentative noprefixroute 
       valid_lft forever preferred_lft forever
    inet6 fe80::efd2:927c:ee23:747c/64 scope <span class="token function">link</span> tentative noprefixroute 
       valid_lft forever preferred_lft forever
<span class="token punctuation">[</span>root@web1 ~<span class="token punctuation">]</span><span class="token comment"># </span>

<span class="token punctuation">[</span>root@web2 ~<span class="token punctuation">]</span><span class="token comment"># systemctl restart network</span>
<span class="token punctuation">[</span>root@web2 ~<span class="token punctuation">]</span><span class="token comment"># ip a</span>
<span class="token number">1</span>: lo: <span class="token operator">&lt;</span>LOOPBACK,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">65536</span> qdisc noqueue state UNKNOWN group default qlen <span class="token number">1000</span>
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet <span class="token number">127.0</span>.0.1/8 scope <span class="token function">host</span> lo
       valid_lft forever preferred_lft forever
    inet <span class="token number">172.16</span>.100.22/32 brd <span class="token number">172.16</span>.100.22 scope global lo:0
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope <span class="token function">host</span> 
       valid_lft forever preferred_lft forever
<span class="token number">2</span>: ens32: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc pfifo_fast state UP group default qlen <span class="token number">1000</span>
    link/ether 00:0c:29:32:9a:09 brd ff:ff:ff:ff:ff:ff
    inet <span class="token number">172.16</span>.100.15/24 brd <span class="token number">172.16</span>.100.255 scope global noprefixroute dynamic ens32
       valid_lft 1799sec preferred_lft 1799sec
    inet6 fe80::ad01:cb2d:3f81:c89/64 scope <span class="token function">link</span> tentative noprefixroute 
       valid_lft forever preferred_lft forever
    inet6 fe80::717d:2c3a:555f:6c78/64 scope <span class="token function">link</span> tentative noprefixroute 
       valid_lft forever preferred_lft forever
    inet6 fe80::efd2:927c:ee23:747c/64 scope <span class="token function">link</span> tentative noprefixroute 
       valid_lft forever preferred_lft forever
<span class="token punctuation">[</span>root@web2 ~<span class="token punctuation">]</span><span class="token comment"># </span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置路由</p><p>vim /etc/rc.local [web1 and web2]</p><div class="language-bash] line-numbers-mode" data-ext="bash]" data-title="bash]"><pre class="language-bash]"><code>/sbin/route add -host  172.16.100.22 dev lo:0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+f+`" alt="image-20211114220407845" tabindex="0" loading="lazy"><figcaption>image-20211114220407845</figcaption></figure><p>配置ARP</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token assign-left variable">net.ipv4.conf.all.arp_ignore</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">net.ipv4.conf.all.arp_announce</span><span class="token operator">=</span><span class="token number">2</span>
<span class="token assign-left variable">net.ipv4.conf.default.arp_ignore</span><span class="token operator">=</span> <span class="token number">1</span>
<span class="token assign-left variable">net.ipv4.conf.default.arp_announce</span><span class="token operator">=</span><span class="token number">2</span>
<span class="token assign-left variable">net.ipv4.conf.lo.arp_ignore</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">net.ipv4.conf.lo.arp_announce</span><span class="token operator">=</span><span class="token number">2</span>



<span class="token punctuation">[</span>root@web1 ~<span class="token punctuation">]</span><span class="token comment"># vim /etc/sysctl.conf </span>
<span class="token punctuation">[</span>root@web1 ~<span class="token punctuation">]</span><span class="token comment"># sysctl -p</span>
net.ipv4.conf.all.arp_ignore <span class="token operator">=</span> <span class="token number">1</span>
net.ipv4.conf.all.arp_announce <span class="token operator">=</span> <span class="token number">2</span>
net.ipv4.conf.default.arp_ignore <span class="token operator">=</span> <span class="token number">1</span>
net.ipv4.conf.default.arp_announce <span class="token operator">=</span> <span class="token number">2</span>
net.ipv4.conf.lo.arp_ignore <span class="token operator">=</span> <span class="token number">1</span>
net.ipv4.conf.lo.arp_announce <span class="token operator">=</span> <span class="token number">2</span>
<span class="token punctuation">[</span>root@web1 ~<span class="token punctuation">]</span><span class="token comment"># </span>


<span class="token punctuation">[</span>root@web2 ~<span class="token punctuation">]</span><span class="token comment"># vim /etc/sysctl.conf </span>
<span class="token punctuation">[</span>root@web2 ~<span class="token punctuation">]</span><span class="token comment"># sysctl -p</span>
net.ipv4.conf.all.arp_ignore <span class="token operator">=</span> <span class="token number">1</span>
net.ipv4.conf.all.arp_announce <span class="token operator">=</span> <span class="token number">2</span>
net.ipv4.conf.default.arp_ignore <span class="token operator">=</span> <span class="token number">1</span>
net.ipv4.conf.default.arp_announce <span class="token operator">=</span> <span class="token number">2</span>
net.ipv4.conf.lo.arp_ignore <span class="token operator">=</span> <span class="token number">1</span>
net.ipv4.conf.lo.arp_announce <span class="token operator">=</span> <span class="token number">2</span>
<span class="token punctuation">[</span>root@web2 ~<span class="token punctuation">]</span><span class="token comment"># </span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>8、测试</p><h2 id="思考" tabindex="-1"><a class="header-anchor" href="#思考"><span>思考</span></a></h2>`,62),y=[_];function x(w,P){return s(),a("div",null,y)}const C=n(h,[["render",x],["__file","keepalived.html.vue"]]),N=JSON.parse('{"path":"/note-book/HA-LVS-Keepalived/keepalived.html","title":"HA","lang":"zh-CN","frontmatter":{"description":"HA image-20211114172234554image-20211114172234554 什么是高可用集群HA image-20211114172407050image-20211114172407050 高可用集群衡量标准 image-20211114172435055image-20211114172435055 具体衡量标准 image...","head":[["meta",{"property":"og:url","content":"https://paper-dragon.github.io/note-book/HA-LVS-Keepalived/keepalived.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"HA"}],["meta",{"property":"og:description","content":"HA image-20211114172234554image-20211114172234554 什么是高可用集群HA image-20211114172407050image-20211114172407050 高可用集群衡量标准 image-20211114172435055image-20211114172435055 具体衡量标准 image..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-13T15:08:38.000Z"}],["meta",{"property":"article:author","content":"PaperDragon"}],["meta",{"property":"article:modified_time","content":"2023-08-13T15:08:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HA\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-13T15:08:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"什么是高可用集群HA","slug":"什么是高可用集群ha","link":"#什么是高可用集群ha","children":[]},{"level":2,"title":"高可用集群衡量标准","slug":"高可用集群衡量标准","link":"#高可用集群衡量标准","children":[{"level":3,"title":"具体衡量标准","slug":"具体衡量标准","link":"#具体衡量标准","children":[]}]},{"level":2,"title":"自动切换/故障转移(FailOver)","slug":"自动切换-故障转移-failover","link":"#自动切换-故障转移-failover","children":[]},{"level":2,"title":"自动侦测","slug":"自动侦测","link":"#自动侦测","children":[{"level":3,"title":"脑裂","slug":"脑裂","link":"#脑裂","children":[]}]},{"level":2,"title":"其他高可用方案","slug":"其他高可用方案","link":"#其他高可用方案","children":[]},{"level":2,"title":"keepalived是什么","slug":"keepalived是什么","link":"#keepalived是什么","children":[]},{"level":2,"title":"keepalived工作原理","slug":"keepalived工作原理","link":"#keepalived工作原理","children":[]},{"level":2,"title":"VRRP协议","slug":"vrrp协议","link":"#vrrp协议","children":[]},{"level":2,"title":"keepalived主要有三个模块","slug":"keepalived主要有三个模块","link":"#keepalived主要有三个模块","children":[]},{"level":2,"title":"实战案例1","slug":"实战案例1","link":"#实战案例1","children":[{"level":3,"title":"环境","slug":"环境","link":"#环境","children":[]},{"level":3,"title":"server1","slug":"server1","link":"#server1","children":[]},{"level":3,"title":"server2","slug":"server2","link":"#server2","children":[]},{"level":3,"title":"client","slug":"client","link":"#client","children":[]},{"level":3,"title":"关于keepalived对nginx状态未知的问题","slug":"关于keepalived对nginx状态未知的问题","link":"#关于keepalived对nginx状态未知的问题","children":[]}]},{"level":2,"title":"实战案例2","slug":"实战案例2","link":"#实战案例2","children":[]},{"level":2,"title":"思考","slug":"思考","link":"#思考","children":[]}],"git":{"createdTime":1691939318000,"updatedTime":1691939318000,"contributors":[{"name":"PaperDragon","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":6.28,"words":1883},"filePathRelative":"note-book/HA-LVS-Keepalived/keepalived.md","localizedDate":"2023年8月13日","excerpt":"\\n<figure><figcaption>image-20211114172234554</figcaption></figure>\\n<h2>什么是高可用集群HA</h2>\\n<figure><figcaption>image-20211114172407050</figcaption></figure>\\n<h2>高可用集群衡量标准</h2>\\n<figure><figcaption>image-20211114172435055</figcaption></figure>\\n<h3>具体衡量标准</h3>\\n<figure><figcaption>image-20211114172601221</figcaption></figure>","autoDesc":true}');export{C as comp,N as data};
