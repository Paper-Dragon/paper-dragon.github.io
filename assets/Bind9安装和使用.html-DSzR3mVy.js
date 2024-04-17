import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as e}from"./app-D2y8WNOZ.js";const t={},i=e(`<h1 id="bind9安装和使用" tabindex="-1"><a class="header-anchor" href="#bind9安装和使用"><span>Bind9安装和使用</span></a></h1><p>CentOS下， yum install bind安装bind软件来实现DNS服务, yum info bind可以查看到描述：</p><pre><code>Description : BIND (Berkeley Internet Name Domain) is an implementation of the DNS
            : (Domain Name System) protocols. BIND includes a DNS server (named),
            : which resolves host names to IP addresses; a resolver library
            : (routines for applications to use when interfacing with DNS); and
            : tools for verifying that the DNS server is operating properly.
</code></pre><p>BIND是DNS协议的一种实现。BIND包含了一个DNS Server（服务名叫named）,用来解析主机名到ip地址；一个解析库；一些辅助工具，还有一个安全目录工具，分别属于下面几个包：</p><pre><code>bind：包里主要包含：
    named DNS服务
    named-chkconfig（named.conf文件检查工具）
    named-checkzone(zone文件检车工具）
    rndc（本地和远程dns控制工具）
bind-libs：named DNS服务的库
bind-utils：包含一系列辅助工具来测试
    host
    dig
    nslookup
    nsupdate
bind-chroot：切根程序，用来切换默认目录到另外一个深层的安全的目录/var/named/chroot，类似于前面光盘进入救援模式的那种情况。
</code></pre><h2 id="named-涉及的文件" tabindex="-1"><a class="header-anchor" href="#named-涉及的文件"><span>named 涉及的文件</span></a></h2><pre><code>/etc/named.conf              # bind主配置文件
/etc/named.rfc1912.zones     # 定义zone的文件
/etc/rc.d/init.d/named       # bind脚本文件
/etc/rndc.conf               # rndc配置文件
/usr/sbin/named-checkconf    # 检测/etc/named.conf文件语法
/usr/sbin/named-checkzone    # 检测zone和对应zone文件的语法
/usr/sbin/rndc               # 远程dns管理工具
/usr/sbin/rndc-confgen       # 生成rndc密钥
/var/named/named.ca          # 根解析库
/var/named/named.localhost   # 本地主机解析库
/var/named/slaves            # 从ns服务器文件夹
</code></pre><p>可以查看/usr/share/doc/bind-9.9.4/sample/下有各种例子可以参考：</p><pre><code>[root@centos7 sample]#tree
.
├── etc
│   ├── named.conf
│   └── named.rfc1912.zones
└── var
    └── named
        ├── data
        ├── my.external.zone.db
        ├── my.internal.zone.db
        ├── named.ca
        ├── named.empty
        ├── named.localhost
        ├── named.loopback
        └── slaves
            ├── my.ddns.internal.zone.db
            └── my.slave.internal.zone.db
</code></pre><p>根据参考来配置各个文件。</p><h2 id="named主配置文件" tabindex="-1"><a class="header-anchor" href="#named主配置文件"><span>named主配置文件</span></a></h2><p>主配置文件/etc/named.conf包括：</p><pre><code>监听端口(listen-on port)和ip地址
服务作用范围（本机还是指定网段还是全网）（allow-query）
递归还是迭代查询(recursion)
根区域解析文件（zone），其他区域文件可以看到有个include “/etc/named.rfc1912.zones”;，这下面保存了localhost的区域文件，如果新添加的，卸载这个zones文件里，里面指向了zone文件地址。然后每一个zone文件，是在/var/named下面。
</code></pre><p>下面是原配置文件的部分：</p><pre><code>[root@centos7 named]#cat /etc/named.conf 
options {
   listen-on port 53 { 127.0.0.1; };// ipv4监听端口和ip地址，默认只有本地的
   listen-on-v6 port 53 { ::1; }; // ipv6的监听端口和ip地址
   directory    &quot;/var/named&quot;;
   dump-file    &quot;/var/named/data/cache_dump.db&quot;;
   statistics-file &quot;/var/named/data/named_stats.txt&quot;;
   memstatistics-file &quot;/var/named/data/named_mem_stats.txt&quot;;
   allow-query     { localhost; };

   /* 
    - If you are building an AUTHORITATIVE DNS server, do NOT enable recursion.
    - If you are building a RECURSIVE (caching) DNS server, you need to enable 
      recursion. 
    - If your recursive DNS server has a public IP address, you MUST enable access 
      control to limit queries to your legitimate users. Failing to do so will
      cause your server to become part of large scale DNS amplification 
      attacks. Implementing BCP38 within your network would greatly
      reduce such attack surface 
   */
   recursion yes; // 递归还是迭代查询

   dnssec-enable yes; // dns安全扩展,可以改为no关闭
   dnssec-validation yes; //可以改为no关闭

   /* Path to ISC DLV key */
   bindkeys-file &quot;/etc/named.iscdlv.key&quot;;

   managed-keys-directory &quot;/var/named/dynamic&quot;;

   pid-file &quot;/run/named/named.pid&quot;;
   session-keyfile &quot;/run/named/session.key&quot;;
};

logging {
        channel default_debug {
                file &quot;data/named.run&quot;;
                severity dynamic;
        };
};

zone &quot;.&quot; IN { // 定义zone文件，这里是定义的根域的文件位置
   type hint;
   file &quot;named.ca&quot;;
};

include &quot;/etc/named.rfc1912.zones&quot;; // 把named.rfc1912.zones文件包含进来
include &quot;/etc/named.root.key&quot;; // 把/etc/named.root.key文件包含进来
</code></pre><p>下面贴出一个修改后的区域文件：</p><pre><code>options {
    listen-on port 53 { 192.168.111.254; 127.0.0.1; };  //监听端口修改为某一网卡地址，和回环地址。
    listen-on-v6 port 53 { ::1; };
    directory   &quot;/var/named&quot;;
    dump-file   &quot;/var/named/data/cache_dump.db&quot;;
    statistics-file &quot;/var/named/data/named_stats.txt&quot;;
    memstatistics-file &quot;/var/named/data/named_mem_stats.txt&quot;;
    allow-query     { 192.168.111.0/24; }; //查询范围只允许192.168.111.0网段查询。
    recursion yes;
    dnssec-enable no;  //关闭dnssec
    dnssec-validation no;  //关闭dnssec
    bindkeys-file &quot;/etc/named.iscdlv.key&quot;;
    managed-keys-directory &quot;/var/named/dynamic&quot;;
    pid-file &quot;/run/named/named.pid&quot;;
    session-keyfile &quot;/run/named/session.key&quot;;
};
logging {
        channel default_debug {
                file &quot;data/named.run&quot;;
                severity dynamic;
        };
};
zone &quot;.&quot; IN {
    type hint;
    file &quot;named.ca&quot;;
};
include &quot;/etc/named.rfc1912.zones&quot;;
include &quot;/etc/named.root.key&quot;;
</code></pre><p>配置解析库文件（Zone files）,一般是在/var/named下写，文件名格式一般写为ZONE_NAME.zone</p><table><thead><tr><th>named.conf配置文件所有的配置语句</th><th>含义</th></tr></thead><tbody><tr><td>acl</td><td>定义一个主机匹配列表，用户访问控制权限</td></tr><tr><td>controls</td><td>定义rndc工具与bind服务进程的通信</td></tr><tr><td>include</td><td>把其他文件的内容包含进来</td></tr><tr><td>key</td><td>定义加密秘钥</td></tr><tr><td>logging</td><td>定义系统日志信息</td></tr><tr><td>lwres</td><td>把named配置为轻量级解析器</td></tr><tr><td>masters</td><td>定义主域列表</td></tr><tr><td>options</td><td>设置全局选项</td></tr><tr><td>server</td><td>定义服务器属性</td></tr><tr><td>trusted-keys</td><td>定义信任的dnssec秘钥</td></tr><tr><td>view</td><td>定义视图</td></tr><tr><td>zone</td><td>定义区域</td></tr></tbody></table><ul><li>named.rfc1912.zones主配置文件</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>    zone <span class="token string">&quot;ZONE_NAME&quot;</span> IN <span class="token punctuation">{</span>
        <span class="token builtin class-name">type</span> <span class="token punctuation">{</span>master<span class="token operator">|</span>slave<span class="token operator">|</span>hint<span class="token operator">|</span>forward<span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token function">file</span> <span class="token string">&quot;ZONE_NAME.zone&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    zone &quot;ZONE_NAME“：定义解析库名字，通常和解析库文件前缀对应起来。
    type：
        master指的是主dns解析
        slave指的是从dns解析
        hint指的是根域名解析（根提示域）
        forward指的是转发，转发不使用file
    <span class="token function">file</span> ：定义区域解析库文件名字（位置默认在/var/named下面）,file的前缀通常和zone的名字通常对应起来，然后加一个.zone的后缀。
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里给出一个自定义的总的区域定义文件，新加一个区域文件的定义：</p><pre><code>zone &quot;zhangqifei.top&quot; IN {
    type master;
    file &quot;zhangqifei.top.zone&quot;;
};
</code></pre><h2 id="区域配置文件" tabindex="-1"><a class="header-anchor" href="#区域配置文件"><span>区域配置文件</span></a></h2><p>/var/named/ZONE_NAME.zone区域配置文件</p><h2 id="正向区域文件" tabindex="-1"><a class="header-anchor" href="#正向区域文件"><span>正向区域文件</span></a></h2><p>这里给出我一个自定义的区域文件：zhangqifei.top.zone</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token variable">$TTL</span> 1D
@    IN  SOA  ns1.zhangqifei.top. me.zhangqifei.top <span class="token punctuation">(</span> <span class="token number">0</span> 1H 10M 1D 3H<span class="token punctuation">)</span>
     IN  NS   ns1.zhangqifei.top
     IN  NS   ns2
         MX <span class="token number">10</span> mail1
         MX <span class="token number">20</span> mail2
ns1.zhangqifei.top  IN  A  <span class="token number">192.168</span>.111.254
ns2  IN  A  <span class="token number">192.168</span>.111.253  
db1   A    <span class="token number">192.168</span>.111.100
db2   A    <span class="token number">192.168</span>.111.111
web1  A    <span class="token number">192.168</span>.111.200
web2  A    <span class="token number">192.168</span>.111.222
mail1 A    <span class="token number">192.168</span>.111.10
mail2 A    <span class="token number">192.168</span>.111.20
www   CNAME   web1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token variable">$ORIGIN</span> host.com.
<span class="token variable">$TTL</span> <span class="token number">600</span>    <span class="token punctuation">;</span> <span class="token number">10</span> minutes
@       IN SOA  dns.host.com. dnsadmin.host.com. <span class="token punctuation">(</span>
                <span class="token number">2022022801</span> <span class="token punctuation">;</span> serial
                <span class="token number">10800</span>      <span class="token punctuation">;</span> refresh <span class="token punctuation">(</span><span class="token number">3</span> hours<span class="token punctuation">)</span>
                <span class="token number">900</span>        <span class="token punctuation">;</span> retry <span class="token punctuation">(</span><span class="token number">15</span> minutes<span class="token punctuation">)</span>
                <span class="token number">604800</span>     <span class="token punctuation">;</span> expire <span class="token punctuation">(</span><span class="token number">1</span> week<span class="token punctuation">)</span>
                <span class="token number">86400</span>      <span class="token punctuation">;</span> minimum <span class="token punctuation">(</span><span class="token number">1</span> day<span class="token punctuation">)</span>
                <span class="token punctuation">)</span>
           NS   dns.host.com.

<span class="token variable">$TTL</span> <span class="token number">60</span> <span class="token punctuation">;</span> <span class="token number">1</span> minute
dns             A       <span class="token number">10.4</span>.7.11
HDSS7-11        A       <span class="token number">10.4</span>.7.11
HDSS7-12        A       <span class="token number">10.4</span>.7.12
HDSS7-21        A       <span class="token number">10.4</span>.7.21
HDSS7-22        A       <span class="token number">10.4</span>.7.22
HDSS7-200       A       <span class="token number">10.4</span>.7.200

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>具体配置选项意义，见前一节DNS记录类型。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>分号代表注释
TTL 过期时间
@指的就是本域 zhangqifei.top
SOA记录    代表区域授权文件的开始
IN ns2.zhangqifei.top可以省略写成IN ns2
IN都可以省略不写,比如直接写MX mail
设置.zone文件权限（参照/var/named/name.xxxx的权限来设置，这里xxx为任意字符）

<span class="token function">chmod</span> <span class="token number">640</span> zhangqifei.top.zone
<span class="token function">chown</span> :named zhangqifei.top.zone

配置完毕后，启动或重启<span class="token punctuation">(</span>已启动的话）服务。

<span class="token function">service</span> named start<span class="token operator">|</span>restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反向区域" tabindex="-1"><a class="header-anchor" href="#反向区域"><span><strong>反向区域</strong></span></a></h2><pre><code>区域名称：是网络地址的犯些.in-addr.arpa.

192.168.111. –&gt; 111.168.192.in-addr.arpa.

配置方法：

先在/etc/named.rfc1512.zones文件下插入下面内容：
zone &quot;Reverse_Net_Addr.in-addr.arpa&quot; IN {
    type {master|slave|forward};
    file &quot;Net_Addr.zone&quot;
}
</code></pre><p>例子：</p><pre><code>zone &quot;111.168.192.in-addr.arpa&quot; IN {
    type master;
    file &quot;192.168.111.zone&quot;;
};
配置/var/named/ZONE_NAME.zone
不需要MX、A、AAAA，要有NS记录，以PTR记录为主。
</code></pre><p>例子：</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code>配置<span class="token number">192.168</span><span class="token number">.111</span><span class="token punctuation">.</span>zone：

$TTL <span class="token number">1</span>D
@   IN  SOA ns1<span class="token punctuation">.</span>magedu<span class="token punctuation">.</span>com<span class="token punctuation">.</span> me<span class="token punctuation">.</span>zhangqifei<span class="token punctuation">.</span><span class="token function">top</span> <span class="token punctuation">(</span>
                    <span class="token number">20170001</span>
                    <span class="token number">1</span>H
                    <span class="token number">5</span>M
                    <span class="token number">7</span>D
                    <span class="token number">1</span>D<span class="token punctuation">)</span>
    IN NS ns1<span class="token punctuation">.</span>zhangqifei<span class="token punctuation">.</span>top<span class="token punctuation">.</span>
    IN NS ns2<span class="token punctuation">.</span>zhangqifei<span class="token punctuation">.</span>top<span class="token punctuation">.</span>
<span class="token number">254</span> IN PTR ns1<span class="token punctuation">.</span>zhangqifei<span class="token punctuation">.</span>top<span class="token punctuation">.</span>
<span class="token number">253</span> IN PTR ns2<span class="token punctuation">.</span>zhangqifei<span class="token punctuation">.</span>top<span class="token punctuation">.</span>
<span class="token number">100</span> IN PTR db1<span class="token punctuation">.</span>magedu<span class="token punctuation">.</span>com<span class="token punctuation">.</span>
<span class="token number">111</span> IN PTR db2<span class="token punctuation">.</span>magedu<span class="token punctuation">.</span>com<span class="token punctuation">.</span>
<span class="token number">200</span> IN PTR web1<span class="token punctuation">.</span>magedu<span class="token punctuation">.</span>com<span class="token punctuation">.</span>
<span class="token number">222</span> IN PTR web2<span class="token punctuation">.</span>magedu<span class="token punctuation">.</span>com<span class="token punctuation">.</span>
<span class="token number">10</span>  IN PTR mail1<span class="token punctuation">.</span>magedu<span class="token punctuation">.</span>com<span class="token punctuation">.</span>
<span class="token number">20</span>  IN PTR mail2<span class="token punctuation">.</span>magedu<span class="token punctuation">.</span>com<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试"><span>测试</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token punctuation">[</span>root@hdss7-11 named<span class="token punctuation">]</span><span class="token comment"># dig -t A hdss7-21.host.com @10.4.7.11</span>

<span class="token punctuation">;</span> <span class="token operator">&lt;&lt;</span><span class="token operator">&gt;&gt;</span> DiG <span class="token number">9.11</span>.4-P2-RedHat-9.11.4-26.P2.el7_9.9 <span class="token operator">&lt;&lt;</span><span class="token operator">&gt;&gt;</span> <span class="token parameter variable">-t</span> A hdss7-21.host.com @10.4.7.11
<span class="token punctuation">;</span><span class="token punctuation">;</span> global options: +cmd
<span class="token punctuation">;</span><span class="token punctuation">;</span> Got answer:
<span class="token punctuation">;</span><span class="token punctuation">;</span> -<span class="token operator">&gt;&gt;</span>HEADER<span class="token operator">&lt;&lt;-</span> opcode: QUERY, status: NOERROR, id: <span class="token number">10788</span>
<span class="token punctuation">;</span><span class="token punctuation">;</span> flags: qr aa rd ra<span class="token punctuation">;</span> QUERY: <span class="token number">1</span>, ANSWER: <span class="token number">1</span>, AUTHORITY: <span class="token number">1</span>, ADDITIONAL: <span class="token number">2</span>

<span class="token punctuation">;</span><span class="token punctuation">;</span> OPT PSEUDOSECTION:
<span class="token punctuation">;</span> EDNS: version: <span class="token number">0</span>, flags:<span class="token punctuation">;</span> udp: <span class="token number">4096</span>
<span class="token punctuation">;</span><span class="token punctuation">;</span> QUESTION SECTION:
<span class="token punctuation">;</span>hdss7-21.host.com.             IN      A

<span class="token punctuation">;</span><span class="token punctuation">;</span> ANSWER SECTION:
HDSS7-21.host.com.      <span class="token number">60</span>      IN      A       <span class="token number">10.4</span>.7.21

<span class="token punctuation">;</span><span class="token punctuation">;</span> AUTHORITY SECTION:
host.com.               <span class="token number">600</span>     IN      NS      dns.host.com.

<span class="token punctuation">;</span><span class="token punctuation">;</span> ADDITIONAL SECTION:
dns.host.com.           <span class="token number">60</span>      IN      A       <span class="token number">10.4</span>.7.11

<span class="token punctuation">;</span><span class="token punctuation">;</span> Query time: <span class="token number">0</span> msec
<span class="token punctuation">;</span><span class="token punctuation">;</span> SERVER: <span class="token number">10.4</span>.7.11<span class="token comment">#53(10.4.7.11)</span>
<span class="token punctuation">;</span><span class="token punctuation">;</span> WHEN: Mon Feb <span class="token number">28</span> <span class="token number">17</span>:13:07 CST <span class="token number">2022</span>
<span class="token punctuation">;</span><span class="token punctuation">;</span> MSG SIZE  rcvd: <span class="token number">105</span>

<span class="token punctuation">[</span>root@hdss7-11 named<span class="token punctuation">]</span><span class="token comment"># dig -t A hdss7-21.host.com @10.4.7.11 +short</span>
<span class="token number">10.4</span>.7.21

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,39),o=[i];function p(l,c){return s(),a("div",null,o)}const u=n(t,[["render",p],["__file","Bind9安装和使用.html.vue"]]),m=JSON.parse('{"path":"/note-book/DNS/Bind9%E5%AE%89%E8%A3%85%E5%92%8C%E4%BD%BF%E7%94%A8.html","title":"Bind9安装和使用","lang":"zh-CN","frontmatter":{"description":"Bind9安装和使用 CentOS下， yum install bind安装bind软件来实现DNS服务, yum info bind可以查看到描述： BIND是DNS协议的一种实现。BIND包含了一个DNS Server（服务名叫named）,用来解析主机名到ip地址；一个解析库；一些辅助工具，还有一个安全目录工具，分别属于下面几个包： named ...","head":[["meta",{"property":"og:url","content":"https://paper-dragon.github.io/note-book/DNS/Bind9%E5%AE%89%E8%A3%85%E5%92%8C%E4%BD%BF%E7%94%A8.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"Bind9安装和使用"}],["meta",{"property":"og:description","content":"Bind9安装和使用 CentOS下， yum install bind安装bind软件来实现DNS服务, yum info bind可以查看到描述： BIND是DNS协议的一种实现。BIND包含了一个DNS Server（服务名叫named）,用来解析主机名到ip地址；一个解析库；一些辅助工具，还有一个安全目录工具，分别属于下面几个包： named ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-20T09:19:01.000Z"}],["meta",{"property":"article:author","content":"PaperDragon"}],["meta",{"property":"article:modified_time","content":"2024-03-20T09:19:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Bind9安装和使用\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-20T09:19:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"named 涉及的文件","slug":"named-涉及的文件","link":"#named-涉及的文件","children":[]},{"level":2,"title":"named主配置文件","slug":"named主配置文件","link":"#named主配置文件","children":[]},{"level":2,"title":"区域配置文件","slug":"区域配置文件","link":"#区域配置文件","children":[]},{"level":2,"title":"正向区域文件","slug":"正向区域文件","link":"#正向区域文件","children":[]},{"level":2,"title":"反向区域","slug":"反向区域","link":"#反向区域","children":[]},{"level":2,"title":"测试","slug":"测试","link":"#测试","children":[]}],"git":{"createdTime":1691939318000,"updatedTime":1710926341000,"contributors":[{"name":"PaperDragon-SH","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":5.83,"words":1748},"filePathRelative":"note-book/DNS/Bind9安装和使用.md","localizedDate":"2023年8月13日","excerpt":"\\n<p>CentOS下， yum install bind安装bind软件来实现DNS服务, yum info bind可以查看到描述：</p>\\n<pre><code>Description : BIND (Berkeley Internet Name Domain) is an implementation of the DNS\\n            : (Domain Name System) protocols. BIND includes a DNS server (named),\\n            : which resolves host names to IP addresses; a resolver library\\n            : (routines for applications to use when interfacing with DNS); and\\n            : tools for verifying that the DNS server is operating properly.\\n</code></pre>","autoDesc":true}');export{u as comp,m as data};
