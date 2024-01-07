import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o,c as u,b as n,d as s,a as e,e as l}from"./app-PpIpI0x9.js";const r={},c=l('<h1 id="zabbix使用容器方式部署" tabindex="-1"><a class="header-anchor" href="#zabbix使用容器方式部署" aria-hidden="true">#</a> zabbix使用容器方式部署</h1><blockquote><p>近期做了一些民间项目，不需要极好的可靠性，要求快速部署和删除。所以做了个Docker方案。进行记录</p><p>参考资料：</p><ul><li>zabbix-docker镜像构建的文档在这里 <ul><li>https://github.com/zabbix/zabbix-docker</li></ul></li><li>该页面所有资料来自官网 <ul><li>https://www.zabbix.com/documentation/current/zh/manual/installation/containers</li></ul></li></ul></blockquote><h2 id="zabbix-server" tabindex="-1"><a class="header-anchor" href="#zabbix-server" aria-hidden="true">#</a> Zabbix-Server</h2><p>Zabbix 组件支持 MySQL 和 PostgreSQL 数据库、Apache2 和 Nginx Web 服务器。这些 image 被分成多个不同的 image。</p><blockquote><p>组件化和降低耦合度能够更加缩小软件的体积。更容易部署和升级。更容易实现负载均衡和高可用。</p></blockquote><h3 id="变量列表" tabindex="-1"><a class="header-anchor" href="#变量列表" aria-hidden="true">#</a> 变量列表</h3>',6),d=n("thead",null,[n("tr",null,[n("th",null,[n("strong",null,"变量")]),n("th",null,[n("strong",null,"组件")]),n("th",null,[n("strong",null,"描述")])])],-1),p=n("tr",null,[n("td",null,[n("code",null,"DB_SERVER_HOST")]),n("td",null,"Server Proxy Web 界面"),n("td",null,"这个变量指的是 MySQL 或 PostgreSQL 的 IP 或 DNS。 默认情况下，这个值根据 MySQL 和 PostgreSQL，分别为mysql-server 或 postgres-server")],-1),b=n("tr",null,[n("td",null,[n("code",null,"DB_SERVER_PORT")]),n("td",null,"Server Proxy Web 界面"),n("td",null,"这个变量指的是 MySQL 或 PostgreSQL 的端口。 默认情况下，这个值根据 MySQL 和 PostgreSQL，分别为 '3306' 或 '5432' 。")],-1),v=n("tr",null,[n("td",null,[n("code",null,"MYSQL_USER")]),n("td",null,"Server Proxy Web 界面"),n("td",null,"MySQL 数据库用户。 默认情况下，这个值为 'zabbix'。")],-1),m=n("tr",null,[n("td",null,[n("code",null,"MYSQL_PASSWORD")]),n("td",null,"Server Proxy Web 界面"),n("td",null,"MySQL 数据库密码。 默认情况下，这个值为 'zabbix'。")],-1),x=n("tr",null,[n("td",null,[n("code",null,"MYSQL_DATABASE")]),n("td",null,"Server Proxy Web 界面"),n("td",null,"Zabbix 数据库库名。 默认情况下，这个值根据 Zabbix server 和 Zabbix proxy，分别为 'zabbix' 和 'zabbix_proxy' 。")],-1),_=n("tr",null,[n("td",null,[n("code",null,"POSTGRES_USER")]),n("td",null,"Server Web 界面"),n("td",null,"PostgreSQL 数据库用户。 默认情况下，这个值为 'zabbix'。")],-1),k=n("tr",null,[n("td",null,[n("code",null,"POSTGRES_PASSWORD")]),n("td",null,"Server Web 界面"),n("td",null,"PostgreSQL 数据库密码。 默认情况下，这个值为 'zabbix'。")],-1),S=n("tr",null,[n("td",null,[n("code",null,"POSTGRES_DB")]),n("td",null,"Server Web 界面"),n("td",null,"Zabbix 数据库库名。 默认情况下，这个值根据 Zabbix server 和 Zabbix proxy，分别为 'zabbix' 和 'zabbix_proxy' 。")],-1),h=n("td",null,[n("code",null,"PHP_TZ")],-1),z=n("td",null,"Web 界面",-1),g={href:"http://php.net/manual/en/timezones.php",target:"_blank",rel:"noopener noreferrer"},y=n("tr",null,[n("td",null,[n("code",null,"ZBX_SERVER_NAME")]),n("td",null,"Web 界面"),n("td",null,"Web 界面右上角显示的安装名称。 默认情况下，这个值为 'Zabbix Docker' 。")],-1),L=n("tr",null,[n("td",null,[n("code",null,"ZBX_JAVAGATEWAY_ENABLE")]),n("td",null,"Server Proxy"),n("td",null,'是否启用 Zabbix Java 网关 以采集与 Java 相关的检查数据。 默认情况下，这个值为 "false" 。')],-1),q=n("tr",null,[n("td",null,[n("code",null,"ZBX_ENABLE_SNMP_TRAPS")]),n("td",null,"Server Proxy"),n("td",null,"是否启用 SNMP trap 功能。 这需要存在 zabbix-snmptraps 容器实例，并共享 /var/lib/zabbix/snmptraps volume 到 Zabbix server 或 proxy。")],-1),E=n("h3",{id:"volumes",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#volumes","aria-hidden":"true"},"#"),s(" Volumes")],-1),f=n("p",null,"Image 中允许使用一些挂载点。根据 Zabbix 组件类型，这些挂载点各不相同：",-1),w=n("thead",null,[n("tr",null,[n("th",null,[n("strong",null,"Volume")]),n("th",null,[n("strong",null,"描述")])])],-1),R=n("tr",null,[n("td",null,[n("strong",null,"Zabbix agent")]),n("td")],-1),A=n("tr",null,[n("td",null,[n("em",null,"/etc/zabbix/zabbix_agentd.d")]),n("td",null,[s("这个 volume 允许包含 *"),n("em",null,".conf"),s(" 文件并使用 "),n("code",null,"UserParameter"),s(" 扩展 Zabbix agent。")])],-1),Z=n("td",null,[n("em",null,"/var/lib/zabbix/modules")],-1),P={href:"https://www.zabbix.com/documentation/current/zh/manual/config/items/loadablemodules",target:"_blank",rel:"noopener noreferrer"},T=n("tr",null,[n("td",null,[n("em",null,"/var/lib/zabbix/enc")]),n("td",null,[s("这个 volume 用于存放 TLS 相关的文件。这些文件名使用 "),n("code",null,"ZBX_TLSCAFILE"),s(", "),n("code",null,"ZBX_TLSCRLFILE"),s(", "),n("code",null,"ZBX_TLSKEY_FILE"),s(" ，"),n("code",null,"ZBX_TLSPSKFILE"),s(" 等环境变量指定。")])],-1),B=n("tr",null,[n("td",null,[n("strong",null,"Zabbix server")]),n("td")],-1),M=n("td",null,[n("em",null,"/usr/lib/zabbix/alertscripts")],-1),O={href:"https://www.zabbix.com/documentation/current/zh/manual/appendix/config/zabbix_server",target:"_blank",rel:"noopener noreferrer"},Q=n("code",null,"AlertScriptsPath",-1),D=n("td",null,[n("em",null,"/usr/lib/zabbix/externalscripts")],-1),W={href:"https://www.zabbix.com/documentation/current/zh/manual/config/items/itemtypes/external",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://www.zabbix.com/documentation/current/zh/manual/appendix/config/zabbix_server",target:"_blank",rel:"noopener noreferrer"},X=n("code",null,"ExternalScripts",-1),N=n("td",null,[n("em",null,"/var/lib/zabbix/modules")],-1),V={href:"https://www.zabbix.com/documentation/current/zh/manual/config/items/loadablemodules",target:"_blank",rel:"noopener noreferrer"},I=n("tr",null,[n("td",null,[n("em",null,"/var/lib/zabbix/enc")]),n("td",null,[s("这个 volume 用于存放 TLS 相关的文件。这些文件名使用 "),n("code",null,"ZBX_TLSCAFILE"),s(", "),n("code",null,"ZBX_TLSCRLFILE"),s(", "),n("code",null,"ZBX_TLSKEY_FILE"),s(" ，"),n("code",null,"ZBX_TLSPSKFILE"),s(" 等环境变量指定。")])],-1),H=n("tr",null,[n("td",null,[n("em",null,"/var/lib/zabbix/ssl/certs")]),n("td",null,[s("这个 volume 用于存放客户端认证的 SSL 客户端认证文件。即 [zabbix_server.conf] 中的 "),n("code",null,"SSLCertLocation"),s(" 参数。")])],-1),C=n("td",null,[n("em",null,"/var/lib/zabbix/ssl/keys")],-1),G={href:"https://www.zabbix.com/documentation/current/zh/manual/appendix/config/zabbix_server",target:"_blank",rel:"noopener noreferrer"},U=n("code",null,"SSLKeyLocation",-1),F=n("td",null,[n("em",null,"/var/lib/zabbix/ssl/ssl_ca")],-1),J={href:"https://www.zabbix.com/documentation/current/zh/manual/appendix/config/zabbix_server",target:"_blank",rel:"noopener noreferrer"},j=n("code",null,"SSLCALocation",-1),K=n("tr",null,[n("td",null,[n("em",null,"/var/lib/zabbix/snmptraps")]),n("td",null,[s("这个 volume 用于存放 snmptraps.log 文件。它可由 zabbix-snmptraps 容器共享，并在创建 Zabbix server 新实例时使用 Docker 的 "),n("code",null,"--volumes-from"),s(" 选项继承。可以通过共享 volume ，并将 ZBX_ENABLE_SNMP_TRAPS 环境变量切换为 'true' 以启用 SNMP trap 处理功能。")])],-1),$=n("tr",null,[n("td",null,[n("em",null,"/var/lib/zabbix/mibs")]),n("td",null,[s("这个 volume 允许添加新的 MIB 文件。它不支持子目录，所有的 MIB 文件必须位于 "),n("code",null,"/var/lib/zabbix/mibs"),s(" 下。")])],-1),nn=n("tr",null,[n("td",null,[n("strong",null,"Zabbix proxy")]),n("td")],-1),sn=n("td",null,[n("em",null,"/usr/lib/zabbix/externalscripts")],-1),an={href:"https://www.zabbix.com/documentation/current/zh/manual/config/items/itemtypes/external",target:"_blank",rel:"noopener noreferrer"},en={href:"https://www.zabbix.com/documentation/current/zh/manual/appendix/config/zabbix_proxy",target:"_blank",rel:"noopener noreferrer"},ln=n("code",null,"ExternalScripts",-1),tn=n("td",null,[n("em",null,"/var/lib/zabbix/modules")],-1),on={href:"https://www.zabbix.com/documentation/current/zh/manual/config/items/loadablemodules",target:"_blank",rel:"noopener noreferrer"},un=n("tr",null,[n("td",null,[n("em",null,"/var/lib/zabbix/enc")]),n("td",null,[s("这个 volume 用于存放 TLS 相关的文件。这些文件名使用 "),n("code",null,"ZBX_TLSCAFILE"),s(", "),n("code",null,"ZBX_TLSCRLFILE"),s(", "),n("code",null,"ZBX_TLSKEY_FILE"),s(" ，"),n("code",null,"ZBX_TLSPSKFILE"),s(" 等环境变量指定。")])],-1),rn=n("td",null,[n("em",null,"/var/lib/zabbix/ssl/certs")],-1),cn={href:"https://www.zabbix.com/documentation/current/zh/manual/appendix/config/zabbix_proxy",target:"_blank",rel:"noopener noreferrer"},dn=n("code",null,"SSLCertLocation",-1),pn=n("td",null,[n("em",null,"/var/lib/zabbix/ssl/keys")],-1),bn={href:"https://www.zabbix.com/documentation/current/zh/manual/appendix/config/zabbix_proxy",target:"_blank",rel:"noopener noreferrer"},vn=n("code",null,"SSLKeyLocation",-1),mn=n("td",null,[n("em",null,"/var/lib/zabbix/ssl/ssl_ca")],-1),xn={href:"https://www.zabbix.com/documentation/current/zh/manual/appendix/config/zabbix_proxy",target:"_blank",rel:"noopener noreferrer"},_n=n("code",null,"SSLCALocation",-1),kn=n("tr",null,[n("td",null,[n("em",null,"/var/lib/zabbix/snmptraps")]),n("td",null,[s("这个 volume 用于存放 snmptraps.log 文件。它可由 zabbix-snmptraps 容器共享，并在创建 Zabbix server 新实例时使用 Docker 的 "),n("code",null,"--volumes-from"),s(" 选项继承。可以通过共享 volume ，并将 ZBX_ENABLE_SNMP_TRAPS 环境变量切换为 'true' 以启用 SNMP trap 处理功能。")])],-1),Sn=n("tr",null,[n("td",null,[n("em",null,"/var/lib/zabbix/mibs")]),n("td",null,[s("这个 volume 允许添加新的 MIB 文件。它不支持子目录，所有的 MIB 文件必须位于 "),n("code",null,"/var/lib/zabbix/mibs"),s(" 下。")])],-1),hn=n("tr",null,[n("td",null,[n("strong",null,"基于 Apache2 web 服务器的 Zabbix web 界面")]),n("td")],-1),zn=n("tr",null,[n("td",null,[n("em",null,"/etc/ssl/apache2")]),n("td",null,[s("这个 volume 允许为 Zabbix Web 界面启用 HTTPS。这个 volume 必须包含为 Apache2 SSL 连接准备的 "),n("code",null,"ssl.crt"),s(" 和 "),n("code",null,"ssl.key"),s(" 两个文件。")])],-1),gn=n("tr",null,[n("td",null,[n("strong",null,"基于 Nginx web 服务器的 Zabbix web 界面")]),n("td")],-1),yn=n("tr",null,[n("td",null,[n("em",null,"/etc/ssl/nginx")]),n("td",null,[s("这个 volume 允许为 Zabbix Web 接口启用 HTTPS。这个 volume 必须包含为 Nginx SSL 连接装备的 "),n("code",null,"ssl.crt"),s(" 和 "),n("code",null,"ssl.key"),s(" 两个文件。")])],-1),Ln=n("tr",null,[n("td",null,[n("strong",null,"Zabbix snmptraps")]),n("td")],-1),qn=n("tr",null,[n("td",null,[n("em",null,"/var/lib/zabbix/snmptraps")]),n("td",null,[s("这个 volume 包含了已接收到的 SNMP traps 命名的 "),n("code",null,"snmptraps.log"),s("日志文件。")])],-1),En=n("tr",null,[n("td",null,[n("em",null,"/var/lib/zabbix/mibs")]),n("td",null,[s("这个 volume 允许添加新的 MIB 文件。它不支持子目录，所有的 MIB 文件必须位于 "),n("code",null,"/var/lib/zabbix/mibs"),s(" 下。")])],-1),fn=l(`<h3 id="案例来自官网" tabindex="-1"><a class="header-anchor" href="#案例来自官网" aria-hidden="true">#</a> 案例来自官网</h3><h4 id="示例1" tabindex="-1"><a class="header-anchor" href="#示例1" aria-hidden="true">#</a> 示例1</h4><p>该示例示范了如何运行 MySQL 数据库支持的 Zabbix Server 、基于 Nginx Web 服务器的 Zabbix Web 界面和 Zabbix Java 网关。</p><ol><li>创建专用于 Zabbix 组件容器的网络：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># docker network create --subnet 172.20.0.0/16 --ip-range 172.20.240.0/20 zabbix-net
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>启动空的 MySQL 服务器实例：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># docker run --name mysql-server -t \\
             -e MYSQL_DATABASE=&quot;zabbix&quot; \\
             -e MYSQL_USER=&quot;zabbix&quot; \\
             -e MYSQL_PASSWORD=&quot;zabbix_pwd&quot; \\
             -e MYSQL_ROOT_PASSWORD=&quot;root_pwd&quot; \\
             --network=zabbix-net \\
             -d mysql:8.0 \\
             --restart unless-stopped \\
             --character-set-server=utf8 --collation-server=utf8_bin \\
             --default-authentication-plugin=mysql_native_password
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>启动 Zabbix Java 网关实例：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># docker run --name zabbix-java-gateway -t \\
             --network=zabbix-net \\
             --restart unless-stopped \\
             -d zabbix/zabbix-java-gateway:alpine-5.4-latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>启动 Zabbix server 实例，并将其关联到已创建的 MySQL server 实例：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># docker run --name zabbix-server-mysql -t \\
             -e DB_SERVER_HOST=&quot;mysql-server&quot; \\
             -e MYSQL_DATABASE=&quot;zabbix&quot; \\
             -e MYSQL_USER=&quot;zabbix&quot; \\
             -e MYSQL_PASSWORD=&quot;zabbix_pwd&quot; \\
             -e MYSQL_ROOT_PASSWORD=&quot;root_pwd&quot; \\
             -e ZBX_JAVAGATEWAY=&quot;zabbix-java-gateway&quot; \\
             --network=zabbix-net \\
             -p 10051:10051 \\
             --restart unless-stopped \\
             -d zabbix/zabbix-server-mysql:alpine-5.4-latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Zabbix server 实例将 10051/TCP 端口（Zabbix trapper）暴露给主机。</p><ol start="5"><li>启动 Zabbix Web 界面，并将其关联到已创建的 MySQL server 和 Zabbix server 实例：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># docker run --name zabbix-web-nginx-mysql -t \\
             -e ZBX_SERVER_HOST=&quot;zabbix-server-mysql&quot; \\
             -e DB_SERVER_HOST=&quot;mysql-server&quot; \\
             -e MYSQL_DATABASE=&quot;zabbix&quot; \\
             -e MYSQL_USER=&quot;zabbix&quot; \\
             -e MYSQL_PASSWORD=&quot;zabbix_pwd&quot; \\
             -e MYSQL_ROOT_PASSWORD=&quot;root_pwd&quot; \\
             --network=zabbix-net \\
             -p 80:8080 \\
             --restart unless-stopped \\
             -d zabbix/zabbix-web-nginx-mysql:alpine-5.4-latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Zabbix web 界面实例将 80/TCP 端口（HTTP）暴露给主机。</p><h4 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2" aria-hidden="true">#</a> <strong>示例 2</strong></h4><p>该示例示范了如何运行 PostgreSQL 数据库支持的 Zabbix server、基于 Nginx Web 服务器的 Zabbix Web 界面和 SNMP trap功能。</p><ol><li>创建专用于 Zabbix 组件容器的网络：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># docker network create --subnet 172.20.0.0/16 --ip-range 172.20.240.0/20 zabbix-net
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>启动空的 PostgreSQL server 实例：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># docker run --name postgres-server -t \\
             -e POSTGRES_USER=&quot;zabbix&quot; \\
             -e POSTGRES_PASSWORD=&quot;zabbix_pwd&quot; \\
             -e POSTGRES_DB=&quot;zabbix&quot; \\
             --network=zabbix-net \\
             --restart unless-stopped \\
             -d postgres:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>启动 Zabbix snmptraps 实例：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># docker run --name zabbix-snmptraps -t \\
             -v /zbx_instance/snmptraps:/var/lib/zabbix/snmptraps:rw \\
             -v /var/lib/zabbix/mibs:/usr/share/snmp/mibs:ro \\
             --network=zabbix-net \\
             -p 162:1162/udp \\
             --restart unless-stopped \\
             -d zabbix/zabbix-snmptraps:alpine-5.4-latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Zabbix snmptrap 实例将 162/UDP 端口（SNMP traps）暴露给主机。</p><ol start="4"><li>启动 Zabbix server 实例，并将其关联到已创建的 PostgreSQL server 实例：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># docker run --name zabbix-server-pgsql -t \\
             -e DB_SERVER_HOST=&quot;postgres-server&quot; \\
             -e POSTGRES_USER=&quot;zabbix&quot; \\
             -e POSTGRES_PASSWORD=&quot;zabbix_pwd&quot; \\
             -e POSTGRES_DB=&quot;zabbix&quot; \\
             -e ZBX_ENABLE_SNMP_TRAPS=&quot;true&quot; \\
             --network=zabbix-net \\
             -p 10051:10051 \\
             --volumes-from zabbix-snmptraps \\
             --restart unless-stopped \\
             -d zabbix/zabbix-server-pgsql:alpine-5.4-latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Zabbix server 实例将 10051/TCP 端口（Zabbix trapper）暴露给主机。</p><ol start="5"><li>启动 Zabbix Web 界面，并将其关联到已创建的 PostgreSQL server 和 Zabbix server 实例：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># docker run --name zabbix-web-nginx-pgsql -t \\
             -e ZBX_SERVER_HOST=&quot;zabbix-server-pgsql&quot; \\
             -e DB_SERVER_HOST=&quot;postgres-server&quot; \\
             -e POSTGRES_USER=&quot;zabbix&quot; \\
             -e POSTGRES_PASSWORD=&quot;zabbix_pwd&quot; \\
             -e POSTGRES_DB=&quot;zabbix&quot; \\
             --network=zabbix-net \\
             -p 443:8443 \\
             -p 80:8080 \\
             -v /etc/ssl/nginx:/etc/ssl/nginx:ro \\
             --restart unless-stopped \\
             -d zabbix/zabbix-web-nginx-pgsql:alpine-5.4-latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Zabbix web 界面实例将 443/TCP 端口（HTTPS）暴露给主机。 <em>/etc/ssl/nginx</em> 目录必须包含具有所需名称的证书。</p><h2 id="zabbix-agent" tabindex="-1"><a class="header-anchor" href="#zabbix-agent" aria-hidden="true">#</a> Zabbix-Agent</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--name</span> zabbix-agent <span class="token parameter variable">-e</span> <span class="token assign-left variable">ZBX_HOSTNAME</span><span class="token operator">=</span><span class="token string">&quot;some-hostname&quot;</span> <span class="token parameter variable">-e</span> <span class="token assign-left variable">ZBX_SERVER_HOST</span><span class="token operator">=</span><span class="token string">&quot;some-zabbix-server&quot;</span> <span class="token parameter variable">-p</span> <span class="token number">10050</span>:10050 <span class="token parameter variable">-d</span> zabbix/zabbix-agent:5.0.15-ubuntu
 
some-hostname是主机名，是 Zabbix 代理配置文件中的主机名参数，some-zabbix-server是 Zabbix 服务器或代理的 IP 或 DNS 名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="一键部署" tabindex="-1"><a class="header-anchor" href="#一键部署" aria-hidden="true">#</a> 一键部署</h2><h3 id="zabbix-server-5-2-mysql-8-0-23" tabindex="-1"><a class="header-anchor" href="#zabbix-server-5-2-mysql-8-0-23" aria-hidden="true">#</a> zabbix-server 5.2,mysql 8.0.23</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
	<span class="token comment"># web界面</span>
  <span class="token key atrule">zabbix-web-nginx-mysql</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> zabbix/zabbix<span class="token punctuation">-</span>web<span class="token punctuation">-</span>nginx<span class="token punctuation">-</span>mysql<span class="token punctuation">:</span>centos<span class="token punctuation">-</span>5.2<span class="token punctuation">-</span>latest
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> DB_SERVER_HOST=zabbix<span class="token punctuation">-</span>mysql
      <span class="token punctuation">-</span> MYSQL_DATABASE=zabbix
      <span class="token punctuation">-</span> MYSQL_USER=zabbix
      <span class="token punctuation">-</span> MYSQL_PASSWORD=zabbix
      <span class="token punctuation">-</span> MYSQL_ROOT_PASSWORD=123qwe
      <span class="token punctuation">-</span> ZBX_SERVER_HOST=zabbix<span class="token punctuation">-</span>server<span class="token punctuation">-</span>mysql
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 8080<span class="token punctuation">:</span><span class="token number">8080</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /etc/localtime<span class="token punctuation">:</span>/etc/localtime
      <span class="token punctuation">-</span> /data2/zabbix/fonts/DejaVuSans.ttf<span class="token punctuation">:</span>/usr/share/zabbix/assets/fonts/DejaVuSans.ttf
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> zbx_net
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> zabbix<span class="token punctuation">-</span>server<span class="token punctuation">-</span>mysql
      <span class="token punctuation">-</span> zabbix<span class="token punctuation">-</span>mysql
  <span class="token comment"># 数据库</span>
  <span class="token key atrule">zabbix-mysql</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql<span class="token punctuation">:</span>8.0.23
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 3306<span class="token punctuation">:</span><span class="token number">3306</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> MYSQL_DATABASE=zabbix
      <span class="token punctuation">-</span> MYSQL_USER=zabbix
      <span class="token punctuation">-</span> MYSQL_PASSWORD=zabbix
      <span class="token punctuation">-</span> MYSQL_ROOT_PASSWORD=123qwe
    <span class="token key atrule">command</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> mysqld
      <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>default<span class="token punctuation">-</span>authentication<span class="token punctuation">-</span>plugin=mysql_native_password
      <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>character<span class="token punctuation">-</span>set<span class="token punctuation">-</span>server=utf8
      <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>collation<span class="token punctuation">-</span>server=utf8_bin
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /etc/localtime<span class="token punctuation">:</span>/etc/localtime
      <span class="token punctuation">-</span> /data2/zabbix/db<span class="token punctuation">:</span>/var/lib/mysql
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> zbx_net
  <span class="token comment">#  Java 网关容器</span>
  <span class="token key atrule">zabbix-java-gateway</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> zabbix/zabbix<span class="token punctuation">-</span>java<span class="token punctuation">-</span>gateway<span class="token punctuation">:</span>centos<span class="token punctuation">-</span>5.2<span class="token punctuation">-</span>latest
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /etc/localtime<span class="token punctuation">:</span>/etc/localtime
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> zbx_net
  <span class="token comment"># Zabbix server容器</span>
  <span class="token key atrule">zabbix-server-mysql</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> zabbix/zabbix<span class="token punctuation">-</span>server<span class="token punctuation">-</span>mysql<span class="token punctuation">:</span>centos<span class="token punctuation">-</span>5.2<span class="token punctuation">-</span>latest
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> zabbix<span class="token punctuation">-</span>server<span class="token punctuation">-</span>vol<span class="token punctuation">:</span>/etc/zabbix
      <span class="token punctuation">-</span> /data2/zabbix/alertscripts<span class="token punctuation">:</span>/usr/lib/zabbix/alertscripts
      <span class="token punctuation">-</span> /etc/localtime<span class="token punctuation">:</span>/etc/localtime
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 10051<span class="token punctuation">:</span><span class="token number">10051</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> DB_SERVER_HOST=zabbix<span class="token punctuation">-</span>mysql
      <span class="token punctuation">-</span> MYSQL_DATABASE=zabbix
      <span class="token punctuation">-</span> MYSQL_USER=zabbix
      <span class="token punctuation">-</span> MYSQL_PASSWORD=zabbix
      <span class="token punctuation">-</span> MYSQL_ROOT_PASSWORD=123qwe
      <span class="token punctuation">-</span> ZBX_JAVAGATEWAY=zabbix<span class="token punctuation">-</span>java<span class="token punctuation">-</span>gateway
      <span class="token punctuation">-</span> ZBX_JAVAGATEWAY_ENABLE=true
      <span class="token punctuation">-</span> ZBX_JAVAGATEWAYPORT=10052
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> zabbix<span class="token punctuation">-</span>mysql
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> zbx_net
  <span class="token comment"># 探针</span>
  <span class="token key atrule">zabbix-agent</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> zabbix/zabbix<span class="token punctuation">-</span>agent<span class="token punctuation">:</span>centos<span class="token punctuation">-</span>5.2<span class="token punctuation">-</span>latest
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 10050<span class="token punctuation">:</span><span class="token number">10050</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ZBX_HOSTNAME=Zabbix server
      <span class="token punctuation">-</span> ZBX_SERVER_HOST=zabbix<span class="token punctuation">-</span>server<span class="token punctuation">-</span>mysql
      <span class="token punctuation">-</span> ZBX_SERVER_PORT=10051
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> zbx_net

<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">zbx_net</span><span class="token punctuation">:</span>
    <span class="token key atrule">driver</span><span class="token punctuation">:</span> bridge

<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token key atrule">zabbix-server-vol</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决汉化bug</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> alertscripts db fonts

<span class="token builtin class-name">cd</span> fonts
<span class="token function">wget</span> https://dl.cactifans.com/zabbix_docker/msty.ttf
<span class="token function">mv</span> msty.ttf DejaVuSans.ttf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><s>原x启动</s> 错台了，启动容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> compose up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>访问浏览器8080端口</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>用户名Admin
密码zabbix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="agent" tabindex="-1"><a class="header-anchor" href="#agent" aria-hidden="true">#</a> Agent</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>version: <span class="token string">&quot;3&quot;</span>
services:
  zabbix-agent:
    container_name: zabbix-agent
    environment:
      - <span class="token assign-left variable">ZBX_HOSTNAME</span><span class="token operator">=</span>some-hostname
      - <span class="token assign-left variable">ZBX_SERVER_HOST</span><span class="token operator">=</span>some-zabbix-server
    ports:
      - <span class="token number">10050</span>:10050
    image: zabbix/zabbix-agent:5.2-ubuntu-latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,43);function wn(Rn,An){const a=i("ExternalLinkIcon");return o(),u("div",null,[c,n("table",null,[d,n("tbody",null,[p,b,v,m,x,_,k,S,n("tr",null,[h,z,n("td",null,[s("PHP 时区格式。支持时区的完整列表参照 "),n("a",g,[s("php.net"),e(a)]),s("。 默认情况下，这个值为 'Europe/Riga' 。")])]),y,L,q])]),E,f,n("table",null,[w,n("tbody",null,[R,A,n("tr",null,[Z,n("td",null,[s("这个 volume 允许加载其它 module 并使用 "),n("a",P,[s("LoadModule"),e(a)]),s(" 功能扩展 Zabbix agent。")])]),T,B,n("tr",null,[M,n("td",null,[s("这个 volume 用于自定义告警脚本。即 "),n("a",O,[s("zabbix_server.conf"),e(a)]),s(" 中的 "),Q,s(" 参数。")])]),n("tr",null,[D,n("td",null,[s("这个 volume 用于 "),n("a",W,[s("外部检查"),e(a)]),s("。即 "),n("a",Y,[s("zabbix_server.conf"),e(a)]),s(" 中的 "),X,s(" 参数。")])]),n("tr",null,[N,n("td",null,[s("这个 volume 允许通过 "),n("a",V,[s("LoadModule"),e(a)]),s(" 功能加载额外的模块以扩展 Zabbix server。")])]),I,H,n("tr",null,[C,n("td",null,[s("这个 volume 用于存放客户端认证的 SSL 私钥文件。即 "),n("a",G,[s("zabbix_server.conf"),e(a)]),s(" 中的 "),U,s(" 参数。")])]),n("tr",null,[F,n("td",null,[s("这个 volume 用于存放 SSL 服务器证书认证的证书颁发机构(CA)文件。即 "),n("a",J,[s("zabbix_server.conf"),e(a)]),s(" 中的 "),j,s(" 参数。")])]),K,$,nn,n("tr",null,[sn,n("td",null,[s("这个 volume 用于 "),n("a",an,[s("外部检查"),e(a)]),s("。即 "),n("a",en,[s("zabbix_proxy.conf"),e(a)]),s(" 中的 "),ln,s(" 参数。")])]),n("tr",null,[tn,n("td",null,[s("这个 volume 允许通过 "),n("a",on,[s("LoadModule"),e(a)]),s(" 功能加载额外的模块以扩展 Zabbix server。")])]),un,n("tr",null,[rn,n("td",null,[s("这个 volume 用于存放客户端认证的 SSL 客户端认证文件。即 "),n("a",cn,[s("zabbix_proxy.conf"),e(a)]),s(" 中的 "),dn,s(" 参数。")])]),n("tr",null,[pn,n("td",null,[s("这个 volume 用于存放客户端认证的 SSL 私钥文件。即 "),n("a",bn,[s("zabbix_proxy.conf"),e(a)]),s(" 中的 "),vn,s(" 参数。")])]),n("tr",null,[mn,n("td",null,[s("这个 volume 用于存放 SSL 服务器证书认证的证书颁发机构(CA)文件。即"),n("a",xn,[s("zabbix_proxy.conf"),e(a)]),s(" 中的 "),_n,s(" 参数。")])]),kn,Sn,hn,zn,gn,yn,Ln,qn,En])]),fn])}const Tn=t(r,[["render",wn],["__file","zabbix-docker.html.vue"]]);export{Tn as default};
