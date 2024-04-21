import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as e}from"./app-WYRIVIrt.js";const i="/assets/907596-20180407215024091-433702120-DcmGx3Ar.png",t="/assets/907596-20180407215319157-2011576019--lW1XQlo.png",l="/assets/907596-20180407215527740-501171157-BZvFjYeG.png",c="/assets/907596-20180407224020893-587829372-DBoF6SBW.png",o="/assets/907596-20180407224119811-217734152-CTym0clA.png",r="/assets/907596-20180407224246905-832890893-CMqMkMWk.png",p="/assets/907596-20180407224259485-817815131-DCSLsop-.png",d="/assets/907596-20180407224504255-28838527-k4vTKrkT.png",m="/assets/907596-20180407224512191-301366982-DFK1p6in.png",u="/assets/907596-20180407224754246-1424015193-CkK9Knwc.png",v="/assets/907596-20180407224801293-2061544736-uB_VnAOc.png",b={},k=e(`<h1 id="bind9之web管理namedmanager" tabindex="-1"><a class="header-anchor" href="#bind9之web管理namedmanager"><span>Bind9之Web管理NamedManager</span></a></h1><p>NamedManager 是一个基于Web的DNS管理系统，**可用来添加、调整和删除DNS的zones/records数据。**它使用Bind作为底层DNS服务，提供一个现代Ajax的Web界面，支持 IPv4和IPv6。该应用程序很稳定，在生产环境中使用没有任何问题。过多的介绍在此就不做说明了，下面说下NamedManager环境部署过程：</p><h2 id="_1-下载namedmanager的rpm安装包" tabindex="-1"><a class="header-anchor" href="#_1-下载namedmanager的rpm安装包"><span>1）下载NamedManager的rpm安装包</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@dns ~<span class="token punctuation">]</span><span class="token comment"># hostname</span>
dns.kevin.cn
 
<span class="token punctuation">[</span>root@dns named<span class="token punctuation">]</span><span class="token comment"># cat /etc/hosts</span>
<span class="token number">127.0</span>.0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4
::1         localhost localhost.localdomain localhost6 localhost6.localdomain6
<span class="token number">192.168</span>.10.206 dns.kevin.cn
 
<span class="token punctuation">[</span>root@dns ~<span class="token punctuation">]</span><span class="token comment"># ifconfig |grep 192.168</span>
          inet addr:192.168.10.206  Bcast:192.168.10.255  Mask:255.255.255.0
 
<span class="token punctuation">[</span>root@dns named<span class="token punctuation">]</span><span class="token comment"># ping dns.kevin.cn</span>
PING dns.kevin.cn <span class="token punctuation">(</span><span class="token number">192.168</span>.10.206<span class="token punctuation">)</span> <span class="token number">56</span><span class="token punctuation">(</span><span class="token number">84</span><span class="token punctuation">)</span> bytes of data.
<span class="token number">64</span> bytes from dns.kevin.cn <span class="token punctuation">(</span><span class="token number">192.168</span>.10.206<span class="token punctuation">)</span>: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.027</span> ms
<span class="token number">64</span> bytes from dns.kevin.cn <span class="token punctuation">(</span><span class="token number">192.168</span>.10.206<span class="token punctuation">)</span>: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.043</span> ms
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
  
<span class="token punctuation">[</span>root@dns ~<span class="token punctuation">]</span><span class="token comment"># cd /usr/local/src/</span>
<span class="token punctuation">[</span>root@dns src<span class="token punctuation">]</span><span class="token comment"># wget http://repos.jethrocarr.com/pub/amberdms/linux/centos/6/amberdms-custom/i386/namedmanager-bind-1.8.0-1.el6.noarch.rpm</span>
<span class="token punctuation">[</span>root@dns src<span class="token punctuation">]</span><span class="token comment"># wget http://repos.jethrocarr.com/pub/amberdms/linux/centos/6/amberdms-custom/i386/namedmanager-www-1.8.0-1.el6.noarch.rpm</span>
  
<span class="token punctuation">[</span>root@dns src<span class="token punctuation">]</span><span class="token comment"># ll</span>
total <span class="token number">1352</span>
-rw-r--r--. <span class="token number">1</span> root root  <span class="token number">109584</span> Dec <span class="token number">22</span>  <span class="token number">2013</span> namedmanager-bind-1.8.0-1.el6.noarch.rpm
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">1270108</span> Dec <span class="token number">22</span>  <span class="token number">2013</span> namedmanager-www-1.8.0-1.el6.noarch.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-安装namedmanager" tabindex="-1"><a class="header-anchor" href="#_2-安装namedmanager"><span>2）安装namedmanager</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[root@dns src]# yum install perl httpd mod_ssl mysql-server php php-intl php-ldap php-mysql php-soap php-xml
  
修改/etc/httpd/conf/httpd.conf
[root@dns src]# vim /etc/httpd/conf/httpd.conf
......
ServerName dns.kevin.cn:80
  
[root@dns src]# service mysqld start
[root@dns src]# service httpd start
[root@dns src]# lsof -i:3306
COMMAND   PID  USER   FD   TYPE DEVICE SIZE/OFF NODE NAME
mysqld  16589 mysql   10u  IPv4  77732      0t0  TCP *:mysql (LISTEN)
[root@dns src]# lsof -i:80
COMMAND   PID   USER   FD   TYPE DEVICE SIZE/OFF NODE NAME
httpd   16621   root    4u  IPv6  77759      0t0  TCP *:http (LISTEN)
httpd   16623 apache    4u  IPv6  77759      0t0  TCP *:http (LISTEN)
httpd   16624 apache    4u  IPv6  77759      0t0  TCP *:http (LISTEN)
httpd   16625 apache    4u  IPv6  77759      0t0  TCP *:http (LISTEN)
httpd   16626 apache    4u  IPv6  77759      0t0  TCP *:http (LISTEN)
httpd   16627 apache    4u  IPv6  77759      0t0  TCP *:http (LISTEN)
httpd   16628 apache    4u  IPv6  77759      0t0  TCP *:http (LISTEN)
httpd   16629 apache    4u  IPv6  77759      0t0  TCP *:http (LISTEN)
httpd   16630 apache    4u  IPv6  77759      0t0  TCP *:http (LISTEN)
  
[root@dns src]# chkconfig mysqld on
[root@dns src]# chkconfig httpd on
  
[root@dns src]# mysqladmin -u root password 123456
  
[root@dns src]# rpm -Uvh namedmanager-www-1.8.0-1.el6.noarch.rpm
[root@dns src]# cd /usr/share/namedmanager/resources/
[root@dns resources]# ./autoinstall.pl
autoinstall.pl
  
This script setups the NamedManager database components:
 * NamedManager MySQL user
 * NamedManager database
 * NamedManager configuration files
  
THIS SCRIPT ONLY NEEDS TO BE RUN FOR THE VERY FIRST INSTALL OF NAMEDMANAGER.
DO NOT RUN FOR ANY OTHER REASON
  
Please enter MySQL root password (if any): 123456        //输入mysql密码
Searching ../sql/ for latest install schema...
../sql//version_20131222_install.sql is the latest file and will be used for the install.
Importing file ../sql//version_20131222_install.sql
Creating user...
Updating configuration file...
DB installation complete!
  
You can now login with the default username/password of setup/setup123 at http://localhost/namedmanager
  
  
[root@dns resources]# cd /usr/local/src/
[root@dns src]# yum install bind php-process
[root@dns src]# rpm -Uvh namedmanager-bind-1.8.0-1.el6.noarch.rpm
  
  
修改/etc/named.conf
[root@dns src]# cp /etc/named.conf /etc/named.conf.bak
[root@dns src]# vim /etc/named.conf
options {
        listen-on port 53 { any; };
//      listen-on-v6 port 53 { ::1; };
        directory &quot;/var/named&quot;;
        dump-file       &quot;/var/named/data/cache_dump.db&quot;;
        statistics-file &quot;/var/named/data/named_stats.txt&quot;;
        memstatistics-file &quot;/var/named/data/named_mem_stats.txt&quot;;
        allow-query     { any; };
        allow-query-cache     { any; };         //DNS查询的缓存功能。实际上不建议开启此功能，即删除这一行配置。如果打开了，当DNS解析修改后，因为缓存原因，需等待一段时间才能生效。
        recursion yes;
        forward first;
        forwarders {
            223.5.5.5;
            223.6.6.6;
            8.8.8.8;
            8.8.4.4;
          };
 
        dnssec-enable yes;
        dnssec-validation yes;
        dnssec-lookaside auto;
 
        bindkeys-file &quot;/etc/named.iscdlv.key&quot;;
        managed-keys-directory &quot;/var/named/dynamic&quot;;
 
        };
  
logging {                           
        channel default_debug {
        file &quot;data/named.run&quot;;
        severity dynamic;
        };
};
  
zone &quot;.&quot; {
        type hint;      
        file &quot;named.ca&quot;;
        };
  
include &quot;/etc/named.rfc1912.zones&quot;;
include &quot;/etc/named.root.key&quot;;
include &quot;/etc/named.namedmanager.conf&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>==========================================================</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>如果要bind可以在chroot的模式下运行
[root@dns src]# yum install bind-chroot
 
建立“/etc/named.namedmanager.conf”文件的硬连接
[root@dns src]# ln /etc/named.namedmanager.conf /var/named/chroot/etc/named.namedmanager.conf
 
如果不建立硬连接named启动时，会提示找不到“/etc/named.namedmanager.conf”。
这是因为：
bind-chroot是bind的一个功能，使bind可以在一个chroot的模式下运行。也就是说,bind运行时的/(根)目录,并不是系统真正的/(根)目录，只是系统中的一个子目录而已。
这样做的目的是为了提高安全性。因为在chroot的模式下，bind可以访问的范围仅限于这个子目录的范围里，无法进一步提升,进入到系统的其他目录中。
 
chroot可以改变程序运行时所参考的根目录(/)位置，即将某个特定的子目录作为程序的虚拟根目录，并且对程序运行时可以使用的系统资源，用户权限和所在目录进行严
格控制，程序只在这个虚拟的根目录下具有权限，一旦跳出该目录就无任何权限。例如在centos中，/var/name/chroot实际上是根目录(/)的虚拟目录，所以虚拟目录中的
/etc目录实际上是/var/named/chroot/etc目录，而/var/named目录实际上是/var/named/chroot/var/named目录。chroot功能的优点是：如果有黑客通过Bind侵入系统，也只能被限定在chroot目录及其子目录中，其破坏力也仅局限在该虚拟目录中，不会威胁到整个服务器
的安全。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>==========================================================</p><h2 id="_3-启动named服务" tabindex="-1"><a class="header-anchor" href="#_3-启动named服务"><span>3）启动named服务</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[root@dns src]# service named start
[root@dns src]# chkconfig named on
[root@dns src]# lsof -i:53
COMMAND   PID  USER   FD   TYPE DEVICE SIZE/OFF NODE NAME
named   16864 named   20u  IPv4  81946      0t0  TCP localhost:domain (LISTEN)
named   16864 named   21u  IPv4  81948      0t0  TCP 192.168.10.206:domain (LISTEN)
named   16864 named  512u  IPv4  81945      0t0  UDP localhost:domain
named   16864 named  513u  IPv4  81947      0t0  UDP 192.168.10.206:domain
 
修改/etc/namedmanager/config-bind.php
[root@dns src]# cp /etc/namedmanager/config-bind.php /etc/namedmanager/config-bind.php.bak
[root@dns src]# vim /etc/namedmanager/config-bind.php
.......
$config[&quot;api_url&quot;]      = &quot;http://192.168.10.206/namedmanager&quot;;          // 应用程序的安装位置
$config[&quot;api_server_name&quot;]  = &quot;dns.kevin.cn&quot;;                            // 此处必须与httpd配置里的Name Server名称一致
$config[&quot;api_auth_key&quot;]     = &quot;Dns&quot;;
......
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-设置防火墙" tabindex="-1"><a class="header-anchor" href="#_4-设置防火墙"><span>4）设置防火墙</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>namedmanager部署机本机要么关闭iptables，要么安装如下设置：
[root@dns src]# setenforce 0
[root@dns src]# getenforce
[root@dns src]# vim /etc/sysconfig/selinux
.......
SELINUX=disabled
 
[root@dns src]# iptables -F
[root@dns src]# iptables -P INPUT DROP
[root@dns src]# iptables -P FORWARD DROP
[root@dns src]# iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT
[root@dns src]# iptables -A INPUT -i lo -p all -j ACCEPT
[root@dns src]# iptables -A INPUT -p icmp -j ACCEPT
[root@dns src]# iptables -A INPUT -p tcp --dport 22 -j ACCEPT
[root@dns src]# iptables -A INPUT -p tcp --dport 53 -j ACCEPT
[root@dns src]# iptables -A INPUT -p udp --dport 53 -j ACCEPT
[root@dns src]# iptables -A INPUT -p tcp --dport 80 -j ACCEPT
[root@dns src]# iptables -A INPUT -p tcp --dport 443 -j ACCEPT
 
禁用IPV6。添加域名记录（正向解析与反向解析）。设置开机启动服务，并重启服务器。
[root@dns src]# vim /etc/modprobe.d/dist.conf         //文件结尾添加如下内容：
......
alias net-pf-10 off
alias ipv6 off
chkconfig ip6tables off
 
[root@dns src]# chkconfig httpd on
[root@dns src]# chkconfig mysqld on
[root@dns src]# chkconfig named on
 
[root@dns src]# init 6      //或者执行&quot;reboot&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-访问namedmanager" tabindex="-1"><a class="header-anchor" href="#_5-访问namedmanager"><span>5）访问namedmanager</span></a></h2><p>访问 http://192.168.10.206/namedmanager ，<strong>默认用户名和密码（setup，setup123）</strong>。不要忘记在用户管理中修改用户名和密码。</p><figure><img src="`+i+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>接着设置API key（如下图。设置邮箱地址和API key，这个key是在上面的/etc/namedmanager/config-bind.php文件中设置的）</strong></p><figure><img src="'+t+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>添加服务器。Name Server FQDN的名称要和httpd中的ServerName一致。（如下添加部署机的主机名或者ip地址都可以）</p><figure><img src="'+l+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><figure><img src="'+c+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>添加正向域名解析</strong></p><figure><img src="'+o+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>添加反向域名解析（如果有多个ip段的客户机，那么就如下图添加多个反向解析配置）</strong></p><figure><img src="'+r+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>查看正反向解析域名添加情况</strong></p><p><strong><img src="'+p+'" alt="img" loading="lazy"></strong></p><p><strong>上面已经成功添加了正反向解析域名，现在尝试添加一些域名的A记录和PTR记录</strong></p><p><strong>先添加A正向解析记录</strong></p><p><strong><img src="'+d+'" alt="img" loading="lazy"></strong></p><p><strong><img src="'+m+'" alt="img" loading="lazy"></strong></p><p><strong>由于上面在添加A正向解析的时候，已经勾选了PTR反向解析（如果没有勾选，则需要手动添加PTR反向解析记录），故这时候已经有了上面那几个域名的反向解析记录了：</strong></p><p><strong><img src="'+u+'" alt="img" loading="lazy"></strong></p><p><strong><img src="'+v+`" alt="img" loading="lazy"></strong></p><p><strong>如上，已经添加了几个正反向解析记录，现在到namedmanager部署机器本机上查看相关的正反向解析配置：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@dns ~<span class="token punctuation">]</span><span class="token comment"># cd /var/named/</span>
<span class="token punctuation">[</span>root@dns named<span class="token punctuation">]</span><span class="token comment"># ll</span>
total <span class="token number">40</span>
-rw-r--r--. <span class="token number">1</span> root  root   <span class="token number">490</span> Apr  <span class="token number">7</span> <span class="token number">14</span>:48 <span class="token number">10.168</span>.192.in-addr.arpa.zone
drwxr-x---. <span class="token number">7</span> root  named <span class="token number">4096</span> Apr  <span class="token number">7</span> <span class="token number">13</span>:37 <span class="token function">chroot</span>
drwxrwx---. <span class="token number">2</span> named named <span class="token number">4096</span> Apr  <span class="token number">7</span> <span class="token number">13</span>:39 data
drwxrwx---. <span class="token number">2</span> named named <span class="token number">4096</span> Apr  <span class="token number">7</span> <span class="token number">14</span>:40 dynamic
-rw-r--r--. <span class="token number">1</span> root  root   <span class="token number">455</span> Apr  <span class="token number">7</span> <span class="token number">14</span>:45 kevin.cn.zone
-rw-r-----. <span class="token number">1</span> root  named <span class="token number">3289</span> Apr <span class="token number">11</span>  <span class="token number">2017</span> named.ca
-rw-r-----. <span class="token number">1</span> root  named  <span class="token number">152</span> Dec <span class="token number">15</span>  <span class="token number">2009</span> named.empty
-rw-r-----. <span class="token number">1</span> root  named  <span class="token number">152</span> Jun <span class="token number">21</span>  <span class="token number">2007</span> named.localhost
-rw-r-----. <span class="token number">1</span> root  named  <span class="token number">168</span> Dec <span class="token number">15</span>  <span class="token number">2009</span> named.loopback
drwxrwx---. <span class="token number">2</span> named named <span class="token number">4096</span> Jan <span class="token number">22</span> <span class="token number">20</span>:57 slaves
 
A记录的正向解析配置为：
<span class="token punctuation">[</span>root@dns named<span class="token punctuation">]</span><span class="token comment"># cat kevin.cn.zone</span>
<span class="token variable">$ORIGIN</span> kevin.cn.
<span class="token variable">$TTL</span> <span class="token number">120</span>
@       IN SOA dns.kevin.cn. wangshibo.kevin.com. <span class="token punctuation">(</span>
            <span class="token number">2018040703</span> <span class="token punctuation">;</span> serial
            <span class="token number">21600</span> <span class="token punctuation">;</span> refresh
            <span class="token number">3600</span> <span class="token punctuation">;</span> retry
            <span class="token number">604800</span> <span class="token punctuation">;</span> expiry
            <span class="token number">120</span> <span class="token punctuation">;</span> minimum ttl
        <span class="token punctuation">)</span>
 
<span class="token punctuation">;</span> Nameservers
 
kevin.cn.   <span class="token number">86400</span> IN NS dns.kevin.cn.
 
<span class="token punctuation">;</span> Mailservers
 
 
<span class="token punctuation">;</span> Reverse DNS Records <span class="token punctuation">(</span>PTR<span class="token punctuation">)</span>
 
 
<span class="token punctuation">;</span> CNAME
 
 
<span class="token punctuation">;</span> HOST RECORDS
 
db01    <span class="token number">120</span> IN A <span class="token number">192.168</span>.10.205
db02    <span class="token number">120</span> IN A <span class="token number">192.168</span>.10.209
dns <span class="token number">120</span> IN A <span class="token number">192.168</span>.10.206
web01   <span class="token number">120</span> IN A <span class="token number">192.168</span>.10.202
web02   <span class="token number">120</span> IN A <span class="token number">192.168</span>.10.203
 
 
 
PTR记录的反向解析配置为：
<span class="token punctuation">[</span>root@dns named<span class="token punctuation">]</span><span class="token comment"># cat 10.168.192.in-addr.arpa.zone</span>
<span class="token variable">$ORIGIN</span> <span class="token number">10.168</span>.192.in-addr.arpa.
<span class="token variable">$TTL</span> <span class="token number">120</span>
@       IN SOA dns.kevin.cn. wangshibo.kevin.com. <span class="token punctuation">(</span>
            <span class="token number">2018040704</span> <span class="token punctuation">;</span> serial
            <span class="token number">21600</span> <span class="token punctuation">;</span> refresh
            <span class="token number">3600</span> <span class="token punctuation">;</span> retry
            <span class="token number">604800</span> <span class="token punctuation">;</span> expiry
            <span class="token number">120</span> <span class="token punctuation">;</span> minimum ttl
        <span class="token punctuation">)</span>
 
<span class="token punctuation">;</span> Nameservers
 
<span class="token number">10.168</span>.192.in-addr.arpa.    <span class="token number">86400</span> IN NS dns.kevin.cn.
 
<span class="token punctuation">;</span> Mailservers
 
 
<span class="token punctuation">;</span> Reverse DNS Records <span class="token punctuation">(</span>PTR<span class="token punctuation">)</span>
 
<span class="token number">202</span> <span class="token number">120</span> IN PTR web01.kevin.cn.
<span class="token number">203</span> <span class="token number">120</span> IN PTR web02.kevin.cn.
<span class="token number">205</span> <span class="token number">120</span> IN PTR db01.kevin.cn.
<span class="token number">206</span> <span class="token number">120</span> IN PTR dns.kevin.cn.
<span class="token number">209</span> <span class="token number">120</span> IN PTR db02.kevin.cn.
 
<span class="token punctuation">;</span> CNAME
 
 
<span class="token punctuation">;</span> HOST RECORDS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>5）设置客户机的DNS配置</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>将namedmanager本机以及所有的客户机的DNS地址都设置成192.168.10.206（即namedmanager部署机的ip地址）
<span class="token punctuation">[</span>root@storage01 ~<span class="token punctuation">]</span><span class="token comment"># ifconfig|grep 192</span>
          inet addr:192.168.10.202  Bcast:192.168.10.255  Mask:255.255.255.0
 
<span class="token punctuation">[</span>root@storage01 ~<span class="token punctuation">]</span><span class="token comment"># cat /etc/resolv.conf</span>
domain kevin.cn
search kevin.cn
nameserver <span class="token number">192.168</span>.10.206
 
<span class="token punctuation">[</span>root@storage01 ~<span class="token punctuation">]</span><span class="token comment"># ping www.baidu.com                         //这里走的是DNS配置中的forwarders转发的解析</span>
PING www.a.shifen.com <span class="token punctuation">(</span><span class="token number">14.215</span>.177.38<span class="token punctuation">)</span> <span class="token number">56</span><span class="token punctuation">(</span><span class="token number">84</span><span class="token punctuation">)</span> bytes of data.
<span class="token number">64</span> bytes from <span class="token number">14.215</span>.177.38: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">49</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">37.6</span> ms
<span class="token number">64</span> bytes from <span class="token number">14.215</span>.177.38: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">49</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">37.5</span> ms
<span class="token number">64</span> bytes from <span class="token number">14.215</span>.177.38: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">3</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">49</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">37.4</span> ms
<span class="token punctuation">..</span><span class="token punctuation">..</span>.
 
<span class="token punctuation">[</span>root@storage01 ~<span class="token punctuation">]</span><span class="token comment"># ping web02.kevin.cn</span>
PING web02.kevin.cn <span class="token punctuation">(</span><span class="token number">192.168</span>.10.203<span class="token punctuation">)</span> <span class="token number">56</span><span class="token punctuation">(</span><span class="token number">84</span><span class="token punctuation">)</span> bytes of data.
<span class="token number">64</span> bytes from web02.kevin.cn <span class="token punctuation">(</span><span class="token number">192.168</span>.10.203<span class="token punctuation">)</span>: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.136</span> ms
<span class="token number">64</span> bytes from web02.kevin.cn <span class="token punctuation">(</span><span class="token number">192.168</span>.10.203<span class="token punctuation">)</span>: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.212</span> ms
<span class="token number">64</span> bytes from web02.kevin.cn <span class="token punctuation">(</span><span class="token number">192.168</span>.10.203<span class="token punctuation">)</span>: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">3</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.132</span> ms
<span class="token punctuation">..</span><span class="token punctuation">..</span>.
 
在客户机上检查下正反向解析是否成功：
<span class="token punctuation">[</span>root@storage01 ~<span class="token punctuation">]</span><span class="token comment"># host 192.168.10.209</span>
<span class="token number">209.10</span>.168.192.in-addr.arpa domain name pointer db02.kevin.cn.
 
<span class="token punctuation">[</span>root@storage01 ~<span class="token punctuation">]</span><span class="token comment"># host db01.kevin.cn</span>
db01.kevin.cn has address <span class="token number">192.168</span>.10.205
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="注意一下" tabindex="-1"><a class="header-anchor" href="#注意一下"><span><strong>注意一下：</strong></span></a></h2><p>1）以上是在单机部署的BindManager服务，如果是线上环境的话，建议在多台机器上部署（至少两台机器）同样的BindManger服务，比如BindManager01、BindManager02两台机器； 2）在客户机的/etc/resolv.conf文件里将DNS地址配置成其中的一个BindManager部署机的ip地址，比如配置成BindManager01地址； 3）将BindManager01的正反向解析文件实时同步到BindManager02机器上（直接同步/var/named这个目录即可）；两台机器的BindaManger相关服务都要是启动状态。 4）如果BindManager01服务器发生故障，不能正常提供DNS解析服务。此时，可以迅速将BindManager02的ip地址修改成BindManager01的ip地址。这样就能很快的实现故障转移了。</p>`,40),g=[k];function h(f,N){return s(),a("div",null,g)}const y=n(b,[["render",h],["__file","Bind9之Web管理NamedManager.html.vue"]]),I=JSON.parse('{"path":"/note-book/DNS/Bind9%E4%B9%8BWeb%E7%AE%A1%E7%90%86NamedManager.html","title":"Bind9之Web管理NamedManager","lang":"zh-CN","frontmatter":{"description":"Bind9之Web管理NamedManager NamedManager 是一个基于Web的DNS管理系统，**可用来添加、调整和删除DNS的zones/records数据。**它使用Bind作为底层DNS服务，提供一个现代Ajax的Web界面，支持 IPv4和IPv6。该应用程序很稳定，在生产环境中使用没有任何问题。过多的介绍在此就不做说明了，下面说...","head":[["meta",{"property":"og:url","content":"https://paper-dragon.github.io/note-book/DNS/Bind9%E4%B9%8BWeb%E7%AE%A1%E7%90%86NamedManager.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"Bind9之Web管理NamedManager"}],["meta",{"property":"og:description","content":"Bind9之Web管理NamedManager NamedManager 是一个基于Web的DNS管理系统，**可用来添加、调整和删除DNS的zones/records数据。**它使用Bind作为底层DNS服务，提供一个现代Ajax的Web界面，支持 IPv4和IPv6。该应用程序很稳定，在生产环境中使用没有任何问题。过多的介绍在此就不做说明了，下面说..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-20T09:19:01.000Z"}],["meta",{"property":"article:author","content":"PaperDragon"}],["meta",{"property":"article:modified_time","content":"2024-03-20T09:19:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Bind9之Web管理NamedManager\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-20T09:19:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"1）下载NamedManager的rpm安装包","slug":"_1-下载namedmanager的rpm安装包","link":"#_1-下载namedmanager的rpm安装包","children":[]},{"level":2,"title":"2）安装namedmanager","slug":"_2-安装namedmanager","link":"#_2-安装namedmanager","children":[]},{"level":2,"title":"3）启动named服务","slug":"_3-启动named服务","link":"#_3-启动named服务","children":[]},{"level":2,"title":"4）设置防火墙","slug":"_4-设置防火墙","link":"#_4-设置防火墙","children":[]},{"level":2,"title":"5）访问namedmanager","slug":"_5-访问namedmanager","link":"#_5-访问namedmanager","children":[]},{"level":2,"title":"注意一下：","slug":"注意一下","link":"#注意一下","children":[]}],"git":{"createdTime":1691939318000,"updatedTime":1710926341000,"contributors":[{"name":"PaperDragon-SH","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":8.45,"words":2536},"filePathRelative":"note-book/DNS/Bind9之Web管理NamedManager.md","localizedDate":"2023年8月13日","excerpt":"\\n<p>NamedManager 是一个基于Web的DNS管理系统，**可用来添加、调整和删除DNS的zones/records数据。**它使用Bind作为底层DNS服务，提供一个现代Ajax的Web界面，支持 IPv4和IPv6。该应用程序很稳定，在生产环境中使用没有任何问题。过多的介绍在此就不做说明了，下面说下NamedManager环境部署过程：</p>\\n<h2>1）下载NamedManager的rpm安装包</h2>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token punctuation\\">[</span>root@dns ~<span class=\\"token punctuation\\">]</span><span class=\\"token comment\\"># hostname</span>\\ndns.kevin.cn\\n \\n<span class=\\"token punctuation\\">[</span>root@dns named<span class=\\"token punctuation\\">]</span><span class=\\"token comment\\"># cat /etc/hosts</span>\\n<span class=\\"token number\\">127.0</span>.0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4\\n::1         localhost localhost.localdomain localhost6 localhost6.localdomain6\\n<span class=\\"token number\\">192.168</span>.10.206 dns.kevin.cn\\n \\n<span class=\\"token punctuation\\">[</span>root@dns ~<span class=\\"token punctuation\\">]</span><span class=\\"token comment\\"># ifconfig |grep 192.168</span>\\n          inet addr:192.168.10.206  Bcast:192.168.10.255  Mask:255.255.255.0\\n \\n<span class=\\"token punctuation\\">[</span>root@dns named<span class=\\"token punctuation\\">]</span><span class=\\"token comment\\"># ping dns.kevin.cn</span>\\nPING dns.kevin.cn <span class=\\"token punctuation\\">(</span><span class=\\"token number\\">192.168</span>.10.206<span class=\\"token punctuation\\">)</span> <span class=\\"token number\\">56</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">84</span><span class=\\"token punctuation\\">)</span> bytes of data.\\n<span class=\\"token number\\">64</span> bytes from dns.kevin.cn <span class=\\"token punctuation\\">(</span><span class=\\"token number\\">192.168</span>.10.206<span class=\\"token punctuation\\">)</span>: <span class=\\"token assign-left variable\\">icmp_seq</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">1</span> <span class=\\"token assign-left variable\\">ttl</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">64</span> <span class=\\"token assign-left variable\\">time</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">0.027</span> ms\\n<span class=\\"token number\\">64</span> bytes from dns.kevin.cn <span class=\\"token punctuation\\">(</span><span class=\\"token number\\">192.168</span>.10.206<span class=\\"token punctuation\\">)</span>: <span class=\\"token assign-left variable\\">icmp_seq</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">2</span> <span class=\\"token assign-left variable\\">ttl</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">64</span> <span class=\\"token assign-left variable\\">time</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">0.043</span> ms\\n<span class=\\"token punctuation\\">..</span><span class=\\"token punctuation\\">..</span><span class=\\"token punctuation\\">..</span>\\n  \\n<span class=\\"token punctuation\\">[</span>root@dns ~<span class=\\"token punctuation\\">]</span><span class=\\"token comment\\"># cd /usr/local/src/</span>\\n<span class=\\"token punctuation\\">[</span>root@dns src<span class=\\"token punctuation\\">]</span><span class=\\"token comment\\"># wget http://repos.jethrocarr.com/pub/amberdms/linux/centos/6/amberdms-custom/i386/namedmanager-bind-1.8.0-1.el6.noarch.rpm</span>\\n<span class=\\"token punctuation\\">[</span>root@dns src<span class=\\"token punctuation\\">]</span><span class=\\"token comment\\"># wget http://repos.jethrocarr.com/pub/amberdms/linux/centos/6/amberdms-custom/i386/namedmanager-www-1.8.0-1.el6.noarch.rpm</span>\\n  \\n<span class=\\"token punctuation\\">[</span>root@dns src<span class=\\"token punctuation\\">]</span><span class=\\"token comment\\"># ll</span>\\ntotal <span class=\\"token number\\">1352</span>\\n-rw-r--r--. <span class=\\"token number\\">1</span> root root  <span class=\\"token number\\">109584</span> Dec <span class=\\"token number\\">22</span>  <span class=\\"token number\\">2013</span> namedmanager-bind-1.8.0-1.el6.noarch.rpm\\n-rw-r--r--. <span class=\\"token number\\">1</span> root root <span class=\\"token number\\">1270108</span> Dec <span class=\\"token number\\">22</span>  <span class=\\"token number\\">2013</span> namedmanager-www-1.8.0-1.el6.noarch.rpm\\n</code></pre></div>","autoDesc":true}');export{y as comp,I as data};
