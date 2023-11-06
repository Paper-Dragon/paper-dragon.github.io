import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as c,c as s,a as e,e as t,d as n,f as i}from"./app-a795284b.js";const o="/assets/image-20221213143732244-0f0e0048.png",l={},h=e("h1",{id:"etcd安装dashboard-etcdkeeper",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#etcd安装dashboard-etcdkeeper","aria-hidden":"true"},"#"),t(" etcd安装dashboard-etcdkeeper")],-1),p=e("h2",{id:"安装etcd-keeper",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装etcd-keeper","aria-hidden":"true"},"#"),t(" 安装etcd keeper")],-1),u={href:"https://github.com/evildecay/etcdkeeper",target:"_blank",rel:"noopener noreferrer"},_=e("p",null,"安装简单，步骤简短。",-1),k=e("h2",{id:"获取安装包",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#获取安装包","aria-hidden":"true"},"#"),t(" 获取安装包")],-1),f={href:"https://github.com/evildecay/etcdkeeper/releases/download/v0.7.6/etcdkeeper-v0.7.6-linux_x86_64.zip",target:"_blank",rel:"noopener noreferrer"},m=i(`<h2 id="解压安装包" tabindex="-1"><a class="header-anchor" href="#解压安装包" aria-hidden="true">#</a> 解压安装包</h2><pre><code>unzip etcdkeeper-v0.7.6-linux_x86_64.zip 
mv etcdkeeper /usr/local/ 
cd /usr/local/etcdkeeper 
chmod +x etcdkeeper
</code></pre><h2 id="编辑systemd文件" tabindex="-1"><a class="header-anchor" href="#编辑systemd文件" aria-hidden="true">#</a> 编辑systemd文件</h2><pre><code>cd /lib/systemd/system
 
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
</code></pre><h2 id="启动参数" tabindex="-1"><a class="header-anchor" href="#启动参数" aria-hidden="true">#</a> 启动参数</h2><pre><code>  Usage of etcdkeeper.exe:
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
</code></pre><h2 id="访问测试" tabindex="-1"><a class="header-anchor" href="#访问测试" aria-hidden="true">#</a> 访问测试</h2>`,7),g={href:"http://172.24.31.13:8888/etcdkeeper/",target:"_blank",rel:"noopener noreferrer"},b=e("h2",{id:"etcdkeeper访问开启鉴权的etcd",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#etcdkeeper访问开启鉴权的etcd","aria-hidden":"true"},"#"),t(" etcdkeeper访问开启鉴权的etcd")],-1),v={href:"https://github.com/evildecay/etcdkeeper/issues/57",target:"_blank",rel:"noopener noreferrer"},x={href:"http://127.0.0.1:2379",target:"_blank",rel:"noopener noreferrer"},y=e("p",null,"那么etcdkeeper启动时需要添加参数-auth true",-1),S=e("p",null,"如果etcd集群开启了鉴权，但是etcdkeeper没有添加参数-auth true，及时输入了正确的用户名和密码，也会出现以下情况：",-1),T=e("figure",null,[e("img",{src:o,alt:"image-20221213143732244",tabindex:"0",loading:"lazy"}),e("figcaption",null,"image-20221213143732244")],-1);function E(z,I){const r=a("ExternalLinkIcon");return c(),s("div",null,[h,p,e("p",null,[t("github地址："),e("a",u,[t("https://github.com/evildecay/etcdkeeper"),n(r)])]),_,k,e("p",null,[t("wget "),e("a",f,[t("https://github.com/evildecay/etcdkeeper/releases/download/v0.7.6/etcdkeeper-v0.7.6-linux_x86_64.zip"),n(r)])]),m,e("p",null,[e("a",g,[t("http://172.24.31.13:8888/etcdkeeper/"),n(r)])]),b,e("p",null,[e("a",v,[t("https://github.com/evildecay/etcdkeeper/issues/57"),n(r)])]),e("p",null,[t("如果etcd集群开启了鉴权。(etcdctl --endpoints="),e("a",x,[t("http://127.0.0.1:2379"),n(r)]),t(" auth enable)")]),y,S,T])}const q=d(l,[["render",E],["__file","etcd安装etcdkeeper.html.vue"]]);export{q as default};
