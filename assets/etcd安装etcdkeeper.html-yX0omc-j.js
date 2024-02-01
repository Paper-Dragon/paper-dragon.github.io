import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as n,d as a}from"./app-C9BS2DyX.js";const r="/assets/image-20221213143732244-0VT5lLPB.png",c={},s=a(`<h1 id="etcd安装dashboard-etcdkeeper" tabindex="-1"><a class="header-anchor" href="#etcd安装dashboard-etcdkeeper"><span>etcd安装dashboard-etcdkeeper</span></a></h1><h2 id="安装etcd-keeper" tabindex="-1"><a class="header-anchor" href="#安装etcd-keeper"><span>安装etcd keeper</span></a></h2><p>github地址：https://github.com/evildecay/etcdkeeper</p><p>安装简单，步骤简短。</p><h2 id="获取安装包" tabindex="-1"><a class="header-anchor" href="#获取安装包"><span>获取安装包</span></a></h2><p>wget https://github.com/evildecay/etcdkeeper/releases/download/v0.7.6/etcdkeeper-v0.7.6-linux_x86_64.zip</p><h2 id="解压安装包" tabindex="-1"><a class="header-anchor" href="#解压安装包"><span>解压安装包</span></a></h2><pre><code>unzip etcdkeeper-v0.7.6-linux_x86_64.zip 
mv etcdkeeper /usr/local/ 
cd /usr/local/etcdkeeper 
chmod +x etcdkeeper
</code></pre><h2 id="编辑systemd文件" tabindex="-1"><a class="header-anchor" href="#编辑systemd文件"><span>编辑systemd文件</span></a></h2><pre><code>cd /lib/systemd/system
 
vim etcdkeeper.service
 
[Unit]
Description=etcdkeeper service
After=network.target
[Service]
Type=simple
ExecStart=/usr/local/etcdkeeper/etcdkeeper -h 0.0.0.0 -p 8888
ExecReload=/bin/kill -HUP $MAINPID
KillMode=process
Restart=on-failure
PrivateTmp=true
[Install]
WantedBy=multi-user.target
</code></pre><h2 id="启动参数" tabindex="-1"><a class="header-anchor" href="#启动参数"><span>启动参数</span></a></h2><pre><code>  Usage of etcdkeeper.exe:
  -h string
        host name or ip address (default: &quot;0.0.0.0&quot;, the http server addreess, not etcd address)
  -p int
        port (default 8080)
  -sep string
        Separator (default &quot;/&quot;)
  -usetls
        use tls (only v3)
  -cacert string
        verify certificates of TLS-enabled secure servers using this CA bundle (only v3)
  -cert string
        identify secure client using this TLS certificate file (only v3)
  -key string
        identify secure client using this TLS key file (only v3)
  -auth bool
        use etcd auth
  -timeout int
        ETCD client connect timeout
</code></pre><h2 id="访问测试" tabindex="-1"><a class="header-anchor" href="#访问测试"><span>访问测试</span></a></h2><p>http://172.24.31.13:8888/etcdkeeper/</p><h2 id="etcdkeeper访问开启鉴权的etcd" tabindex="-1"><a class="header-anchor" href="#etcdkeeper访问开启鉴权的etcd"><span>etcdkeeper访问开启鉴权的etcd</span></a></h2><p>https://github.com/evildecay/etcdkeeper/issues/57</p><p>如果etcd集群开启了鉴权。(etcdctl --endpoints=http://127.0.0.1:2379 auth enable)</p><p>那么etcdkeeper启动时需要添加参数-auth true</p><p>如果etcd集群开启了鉴权，但是etcdkeeper没有添加参数-auth true，及时输入了正确的用户名和密码，也会出现以下情况：</p><figure><img src="`+r+'" alt="image-20221213143732244" tabindex="0" loading="lazy"><figcaption>image-20221213143732244</figcaption></figure>',20),d=[s];function i(p,o){return t(),n("div",null,d)}const u=e(c,[["render",i],["__file","etcd安装etcdkeeper.html.vue"]]);export{u as default};
