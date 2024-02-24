import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as s,d as a}from"./app-BE1sMTuI.js";const i={},o=a(`<h1 id="harbor离线搭建" tabindex="-1"><a class="header-anchor" href="#harbor离线搭建"><span>Harbor离线搭建</span></a></h1><blockquote><p>使用离线安装包安装Harbor和</p></blockquote><h1 id="先要条件" tabindex="-1"><a class="header-anchor" href="#先要条件"><span>先要条件</span></a></h1><h2 id="_1-下载haobor安装包和docker-compose安装包" tabindex="-1"><a class="header-anchor" href="#_1-下载haobor安装包和docker-compose安装包"><span>1.下载haobor安装包和docker-compose安装包</span></a></h2><p>harbor载地址：http://harbor.orientsoft.cn/</p><p>本次下载后放入的目录是/home/carter，解压安装包</p><pre><code>tar xf harbor-offline-installer-v1.10.10.tgz
</code></pre><p>下载docker-composer，存放到/usr/local/bin目录下。</p><pre><code># 这个是官方地址，可能比较慢，推荐使用下面的国内镜像地址
sudo curl -L &quot;https://github.com/docker/compose/releases/download/1.29.1/docker-compose-$(uname -s)-$(uname -m)&quot; -o /usr/local/bin/docker-compose

# 国内镜像地址
curl -L https://get.daocloud.io/docker/compose/releases/download/1.29.1/docker-compose-\`uname -s\`-\`uname -m\` &gt; /usr/local/bin/docker-compose

# 下载完之后可以看下 /usr/local/bin 这个目录有没有 docker-compose 这个文件
</code></pre><h2 id="_2-安装docker-compose" tabindex="-1"><a class="header-anchor" href="#_2-安装docker-compose"><span>2.安装docker-compose</span></a></h2><pre><code>chmod +x /usr/local/bin/docker-compose

ll /usr/local/bin/ |grep docker-compose
</code></pre><p>检查docker-compose是否安装成功：</p><pre><code>[root@harbor ~]# docker-compose --version
docker-compose version 1.29.1, build c34c88b2
[root@harbor ~]#
</code></pre><h2 id="_3-修改barbor默认端口和设置管理后台的admin密码" tabindex="-1"><a class="header-anchor" href="#_3-修改barbor默认端口和设置管理后台的admin密码"><span>3.修改barbor默认端口和设置管理后台的admin密码</span></a></h2><p>harbor的默认服务端口是80端口，但一般服务器上的80端口会被其他的服务占用，所以最后修改harbor的默认端口，这里修改为5000端口。</p><p>1）编辑/home/carter/harbor/docker-compose.yml文件：</p><pre><code>cd /home/carter/harbor/
vi docker-compose.yml
</code></pre><h1 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h1><p>环境：centos7.6</p><h2 id="_1、安装docker" tabindex="-1"><a class="header-anchor" href="#_1、安装docker"><span>1、安装docker</span></a></h2><p>详情见：https://www.cnblogs.com/wukc/p/13265528.html</p><p>2、配置时区</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>timedatectl set-timezone Asia/Shanghai
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3、修改主机名称" tabindex="-1"><a class="header-anchor" href="#_3、修改主机名称"><span>3、修改主机名称</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>hostnamectl set-hostname harbor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4、创建磁盘并挂载" tabindex="-1"><a class="header-anchor" href="#_4、创建磁盘并挂载"><span>4、创建磁盘并挂载</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>pvcreate /dev/vdb
vgcreate data /dev/vdb
lvcreate -l 100%VG -n lv_harbor data 
mkdir /harbor
mkfs.xfs /dev/mapper/data-lv_harbor
more /etc/fstab                       #配置开机挂载磁盘
UUID=f81a1f4f-5608-46bc-b4ef-6d0f675eeacd  /harbor   xfs  defaults        0 0
mount -a
[root@harbor-20 harbor]#  df /harbor
Filesystem                 1K-blocks    Used Available Use% Mounted on
/dev/mapper/data-lv_harbor 209608708 1415772 208192936   1% /harbor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5、harbor安装" tabindex="-1"><a class="header-anchor" href="#_5、harbor安装"><span>5、harbor安装</span></a></h2><p>wget https://github.com/goharbor/harbor/releases/download/v1.10.1/harbor-offline-installer-v1.10.1.tgz #下载文件</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
common  common.sh  docker-compose.yml  harbor.v1.10.10.tar.gz  harbor.yml  install.sh  LICENSE  prepare
<span class="token punctuation">[</span>root@harbor harbor<span class="token punctuation">]</span><span class="token comment">#</span>
<span class="token punctuation">[</span>root@harbor harbor<span class="token punctuation">]</span><span class="token comment"># cat harbor.yml</span>
<span class="token comment"># Configuration file of Harbor</span>

<span class="token comment"># The IP address or hostname to access admin UI and registry service.</span>
<span class="token comment"># DO NOT use localhost or 127.0.0.1, because Harbor needs to be accessed by external clients.</span>
hostname: harbor.cidana.com

<span class="token comment"># http related config</span>
http:
  <span class="token comment"># port for http, default is 80. If https enabled, this port will redirect to https port</span>
  port: <span class="token number">180</span>

<span class="token comment"># https related config</span>
<span class="token comment"># https:</span>
<span class="token comment">#   # https port for harbor, default is 443</span>
<span class="token comment">#   port: 443</span>
<span class="token comment">#   # The path of cert and key files for nginx</span>
<span class="token comment">#   certificate: /your/certificate/path</span>
<span class="token comment">#   private_key: /your/private/key/path</span>

<span class="token comment"># Uncomment external_url if you want to enable external proxy</span>
<span class="token comment"># And when it enabled the hostname will no longer used</span>
<span class="token comment"># external_url: https://reg.mydomain.com:8433</span>

<span class="token comment"># The initial password of Harbor admin</span>
<span class="token comment"># It only works in first time to install harbor</span>
<span class="token comment"># Remember Change the admin password from UI after launching Harbor.</span>
harbor_admin_password: Harbor12345

<span class="token comment"># Harbor DB configuration</span>
database:
  <span class="token comment"># The password for the root user of Harbor DB. Change this before any production use.</span>
  password: root123
  <span class="token comment"># The maximum number of connections in the idle connection pool. If it &lt;=0, no idle connections are retained.</span>
  max_idle_conns: <span class="token number">50</span>
  <span class="token comment"># The maximum number of open connections to the database. If it &lt;= 0, then there is no limit on the number of open connections.</span>
  <span class="token comment"># Note: the default number of connections is 100 for postgres.</span>
  max_open_conns: <span class="token number">100</span>

<span class="token comment"># The default data volume</span>
data_volume: /data/harbor

<span class="token comment"># Harbor Storage settings by default is using /data dir on local filesystem</span>
<span class="token comment"># Uncomment storage_service setting If you want to using external storage</span>
<span class="token comment"># storage_service:</span>
<span class="token comment">#   # ca_bundle is the path to the custom root ca certificate, which will be injected into the truststore</span>
<span class="token comment">#   # of registry&#39;s and chart repository&#39;s containers.  This is usually needed when the user hosts a internal storage with self signed certificate.</span>
<span class="token comment">#   ca_bundle:</span>

<span class="token comment">#   # storage backend, default is filesystem, options include filesystem, azure, gcs, s3, swift and oss</span>
<span class="token comment">#   # for more info about this configuration please refer https://docs.docker.com/registry/configuration/</span>
<span class="token comment">#   filesystem:</span>
<span class="token comment">#     maxthreads: 100</span>
<span class="token comment">#   # set disable to true when you want to disable registry redirect</span>
<span class="token comment">#   redirect:</span>
<span class="token comment">#     disabled: false</span>

<span class="token comment"># Clair configuration</span>
clair:
  <span class="token comment"># The interval of clair updaters, the unit is hour, set to 0 to disable the updaters.</span>
  updaters_interval: <span class="token number">12</span>

jobservice:
  <span class="token comment"># Maximum number of job workers in job service</span>
  max_job_workers: <span class="token number">10</span>

notification:
  <span class="token comment"># Maximum retry count for webhook job</span>
  webhook_job_max_retry: <span class="token number">10</span>

chart:
  <span class="token comment"># Change the value of absolute_url to enabled can enable absolute url in chart</span>
  absolute_url: disabled

<span class="token comment"># Log configurations</span>
log:
  <span class="token comment"># options are debug, info, warning, error, fatal</span>
  level: info
  <span class="token comment"># configs for logs in local storage</span>
  local:
    <span class="token comment"># Log files are rotated log_rotate_count times before being removed. If count is 0, old versions are removed rather than rotated.</span>
    rotate_count: <span class="token number">50</span>
    <span class="token comment"># Log files are rotated only if they grow bigger than log_rotate_size bytes. If size is followed by k, the size is assumed to be in kilobytes.</span>
    <span class="token comment"># If the M is used, the size is in megabytes, and if G is used, the size is in gigabytes. So size 100, size 100k, size 100M and size 100G</span>
    <span class="token comment"># are all valid.</span>
    rotate_size: 200M
    <span class="token comment"># The directory on your host that store log</span>
    location: /data/logs/harbor

  <span class="token comment"># Uncomment following lines to enable external syslog endpoint.</span>
  <span class="token comment"># external_endpoint:</span>
  <span class="token comment">#   # protocol used to transmit log to external endpoint, options is tcp or udp</span>
  <span class="token comment">#   protocol: tcp</span>
  <span class="token comment">#   # The host of external endpoint</span>
  <span class="token comment">#   host: localhost</span>
  <span class="token comment">#   # Port of external endpoint</span>
  <span class="token comment">#   port: 5140</span>

<span class="token comment">#This attribute is for migrator to detect the version of the .cfg file, DO NOT MODIFY!</span>
_version: <span class="token number">1.10</span>.0

<span class="token comment"># Uncomment external_database if using external database.</span>
<span class="token comment"># external_database:</span>
<span class="token comment">#   harbor:</span>
<span class="token comment">#     host: harbor_db_host</span>
<span class="token comment">#     port: harbor_db_port</span>
<span class="token comment">#     db_name: harbor_db_name</span>
<span class="token comment">#     username: harbor_db_username</span>
<span class="token comment">#     password: harbor_db_password</span>
<span class="token comment">#     ssl_mode: disable</span>
<span class="token comment">#     max_idle_conns: 2</span>
<span class="token comment">#     max_open_conns: 0</span>
<span class="token comment">#   clair:</span>
<span class="token comment">#     host: clair_db_host</span>
<span class="token comment">#     port: clair_db_port</span>
<span class="token comment">#     db_name: clair_db_name</span>
<span class="token comment">#     username: clair_db_username</span>
<span class="token comment">#     password: clair_db_password</span>
<span class="token comment">#     ssl_mode: disable</span>
<span class="token comment">#   notary_signer:</span>
<span class="token comment">#     host: notary_signer_db_host</span>
<span class="token comment">#     port: notary_signer_db_port</span>
<span class="token comment">#     db_name: notary_signer_db_name</span>
<span class="token comment">#     username: notary_signer_db_username</span>
<span class="token comment">#     password: notary_signer_db_password</span>
<span class="token comment">#     ssl_mode: disable</span>
<span class="token comment">#   notary_server:</span>
<span class="token comment">#     host: notary_server_db_host</span>
<span class="token comment">#     port: notary_server_db_port</span>
<span class="token comment">#     db_name: notary_server_db_name</span>
<span class="token comment">#     username: notary_server_db_username</span>
<span class="token comment">#     password: notary_server_db_password</span>
<span class="token comment">#     ssl_mode: disable</span>

<span class="token comment"># Uncomment external_redis if using external Redis server</span>
<span class="token comment"># external_redis:</span>
<span class="token comment">#   host: redis</span>
<span class="token comment">#   port: 6379</span>
<span class="token comment">#   password:</span>
<span class="token comment">#   # db_index 0 is for core, it&#39;s unchangeable</span>
<span class="token comment">#   registry_db_index: 1</span>
<span class="token comment">#   jobservice_db_index: 2</span>
<span class="token comment">#   chartmuseum_db_index: 3</span>
<span class="token comment">#   clair_db_index: 4</span>

<span class="token comment"># Uncomment uaa for trusting the certificate of uaa instance that is hosted via self-signed cert.</span>
<span class="token comment"># uaa:</span>
<span class="token comment">#   ca_file: /path/to/ca</span>

<span class="token comment"># Global proxy</span>
<span class="token comment"># Config http proxy for components, e.g. http://my.proxy.com:3128</span>
<span class="token comment"># Components doesn&#39;t need to connect to each others via http proxy.</span>
<span class="token comment"># Remove component from \`components\` array if want disable proxy</span>
<span class="token comment"># for it. If you want use proxy for replication, MUST enable proxy</span>
<span class="token comment"># for core and jobservice, and set \`http_proxy\` and \`https_proxy\`.</span>
<span class="token comment"># Add domain to the \`no_proxy\` field, when you want disable proxy</span>
<span class="token comment"># for some special registry.</span>
proxy:
  http_proxy:
  https_proxy:
  <span class="token comment"># no_proxy endpoints will appended to 127.0.0.1,localhost,.local,.internal,log,db,redis,nginx,core,portal,postgresql,jobservice,registry,registryctl,clair,chartmuseum,notary-server</span>
  no_proxy:
  components:
    - core
    - jobservice
    - clair

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>解压tar -zxvf /harbor/harbor-offline-installer-v1.10.1.tgz
加载镜像 cd harbor/&amp;&amp; docker load -i harbor.v1.10.1.tar.gz
将docker-compose 放到/usr/local/bin 目录下 并赋权
mv docker-compose  /usr/local/bin  &amp;&amp; chmod u+x /usr/local/bin/docker-compose
进入解压目录,配置harbor.yml(修改ip、web密码、数据目录、注释https)
      hostname: 
       # https related config
       #https:
       # https port for harbor, default is 443
       #  port: 443
       # The path of cert and key files for nginx
       #  certificate: /your/certificate/path
       #  private_key: /your/private/key/path
      harbor_admin_password: Harbor12345
      data_volume: /data/harbor
新建数据目录 mkdir /data/harbor
环境预配          ./prepare
habbor安装        ./install.sh
       
Creating network &quot;harbor_harbor&quot; with the default driver
Creating harbor-log ... done
Creating harbor-portal ... done
Creating registry      ... done
Creating redis         ... done
Creating harbor-db     ... done
Creating registryctl   ... done
Creating harbor-core   ... done
Creating harbor-jobservice ... done
Creating nginx             ... done
✔ ----Harbor has been installed and started successfully.----
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>nginx</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>nginx/conf.d/harbor.conf

<span class="token punctuation">[</span>root@harbor harbor<span class="token punctuation">]</span><span class="token comment"># cat /etc/nginx/conf.d/harbor.conf</span>
server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    server_name  harbor.cidana.com<span class="token punctuation">;</span>
    client_max_body_size 1000m<span class="token punctuation">;</span>
    
    <span class="token comment">#charset koi8-r;</span>

    <span class="token comment">#access_log  logs/host.access.log  main;</span>

    location / <span class="token punctuation">{</span>
        <span class="token comment"># root   html;</span>
       <span class="token comment"># index  index.html index.htm;</span>
        proxy_pass   http://127.0.0.1:180<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">#error_page  404              /404.html;</span>

    <span class="token comment"># redirect server error pages to the static page /50x.html</span>
    <span class="token comment">#</span>
    error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
    location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
        root   html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># proxy the PHP scripts to Apache listening on 127.0.0.1:80</span>
    <span class="token comment">#</span>
    <span class="token comment">#location ~ \\.php$ {</span>
    <span class="token comment">#    proxy_pass   http://127.0.0.1;</span>
    <span class="token comment">#}</span>

    <span class="token comment"># pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000</span>
    <span class="token comment">#</span>
    <span class="token comment">#location ~ \\.php$ {</span>
    <span class="token comment">#    root           html;</span>
    <span class="token comment">#    fastcgi_pass   127.0.0.1:9000;</span>
    <span class="token comment">#    fastcgi_index  index.php;</span>
    <span class="token comment">#    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;</span>
    <span class="token comment">#    include        fastcgi_params;</span>
    <span class="token comment">#}</span>

    <span class="token comment"># deny access to .htaccess files, if Apache&#39;s document root</span>
    <span class="token comment"># concurs with nginx&#39;s one</span>
    <span class="token comment">#</span>
    <span class="token comment">#location ~ /\\.ht {</span>
    <span class="token comment">#    deny  all;</span>
    <span class="token comment">#}</span>
<span class="token punctuation">}</span>




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6、登录验证" tabindex="-1"><a class="header-anchor" href="#_6、登录验证"><span>6、登录验证</span></a></h2><p>http://ip 账号密码为上面配置文件中：admin：Harbor12345</p><h2 id="_7、配置docker使用harbor仓库" tabindex="-1"><a class="header-anchor" href="#_7、配置docker使用harbor仓库"><span>7、配置docker使用harbor仓库</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>修改配置文件
vi /etc/docker/daemon.json 
{
 &quot;insecure-registries&quot;:[&quot;172.20.210.20&quot;]  #添加harbor仓库地址
}
systemctl restart docker
docker login:172.21.210.20
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8、harbor启动和重启" tabindex="-1"><a class="header-anchor" href="#_8、harbor启动和重启"><span>8、harbor启动和重启</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>cd /harbor/harbor
docker-compose up -d     #后台启动
docker-compose restart   #重启
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,39),r=[o];function l(t,c){return e(),s("div",null,r)}const p=n(i,[["render",l],["__file","Harbor离线搭建.html.vue"]]),v=JSON.parse('{"path":"/note-book/Harbor/Harbor%E7%A6%BB%E7%BA%BF%E6%90%AD%E5%BB%BA.html","title":"Harbor离线搭建","lang":"zh-CN","frontmatter":{"description":"Harbor离线搭建 使用离线安装包安装Harbor和 先要条件 1.下载haobor安装包和docker-compose安装包 harbor载地址：http://harbor.orientsoft.cn/ 本次下载后放入的目录是/home/carter，解压安装包 下载docker-composer，存放到/usr/local/bin目录下。 2.安...","head":[["meta",{"property":"og:url","content":"https://paper-dragon.github.io/note-book/Harbor/Harbor%E7%A6%BB%E7%BA%BF%E6%90%AD%E5%BB%BA.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"Harbor离线搭建"}],["meta",{"property":"og:description","content":"Harbor离线搭建 使用离线安装包安装Harbor和 先要条件 1.下载haobor安装包和docker-compose安装包 harbor载地址：http://harbor.orientsoft.cn/ 本次下载后放入的目录是/home/carter，解压安装包 下载docker-composer，存放到/usr/local/bin目录下。 2.安..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-18T02:04:11.000Z"}],["meta",{"property":"article:author","content":"PaperDragon"}],["meta",{"property":"article:modified_time","content":"2024-01-18T02:04:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Harbor离线搭建\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-18T02:04:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"1.下载haobor安装包和docker-compose安装包","slug":"_1-下载haobor安装包和docker-compose安装包","link":"#_1-下载haobor安装包和docker-compose安装包","children":[]},{"level":2,"title":"2.安装docker-compose","slug":"_2-安装docker-compose","link":"#_2-安装docker-compose","children":[]},{"level":2,"title":"3.修改barbor默认端口和设置管理后台的admin密码","slug":"_3-修改barbor默认端口和设置管理后台的admin密码","link":"#_3-修改barbor默认端口和设置管理后台的admin密码","children":[]},{"level":2,"title":"1、安装docker","slug":"_1、安装docker","link":"#_1、安装docker","children":[]},{"level":2,"title":"3、修改主机名称","slug":"_3、修改主机名称","link":"#_3、修改主机名称","children":[]},{"level":2,"title":"4、创建磁盘并挂载","slug":"_4、创建磁盘并挂载","link":"#_4、创建磁盘并挂载","children":[]},{"level":2,"title":"5、harbor安装","slug":"_5、harbor安装","link":"#_5、harbor安装","children":[]},{"level":2,"title":"6、登录验证","slug":"_6、登录验证","link":"#_6、登录验证","children":[]},{"level":2,"title":"7、配置docker使用harbor仓库","slug":"_7、配置docker使用harbor仓库","link":"#_7、配置docker使用harbor仓库","children":[]},{"level":2,"title":"8、harbor启动和重启","slug":"_8、harbor启动和重启","link":"#_8、harbor启动和重启","children":[]}],"git":{"createdTime":1691939318000,"updatedTime":1705543451000,"contributors":[{"name":"PaperDragon","email":"2678885646@qq.com","commits":1},{"name":"PaperDragon-SH","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":5.03,"words":1508},"filePathRelative":"note-book/Harbor/Harbor离线搭建.md","localizedDate":"2023年8月13日","excerpt":"\\n<blockquote>\\n<p>使用离线安装包安装Harbor和</p>\\n</blockquote>\\n<h1>先要条件</h1>\\n<h2>1.下载haobor安装包和docker-compose安装包</h2>\\n<p>harbor载地址：http://harbor.orientsoft.cn/</p>\\n<p>本次下载后放入的目录是/home/carter，解压安装包</p>\\n<pre><code>tar xf harbor-offline-installer-v1.10.10.tgz\\n</code></pre>\\n<p>下载docker-composer，存放到/usr/local/bin目录下。</p>","autoDesc":true}');export{p as comp,v as data};
