import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as r,d as c}from"./app-B6tWdJue.js";const d="/assets/image-20221213143732244-DRVPmUs8.png",a={},n=c(`<h1 id="etcd安装dashboard-etcdkeeper" tabindex="-1"><a class="header-anchor" href="#etcd安装dashboard-etcdkeeper"><span>etcd安装dashboard-etcdkeeper</span></a></h1><h2 id="安装etcd-keeper" tabindex="-1"><a class="header-anchor" href="#安装etcd-keeper"><span>安装etcd keeper</span></a></h2><p>github地址：https://github.com/evildecay/etcdkeeper</p><p>安装简单，步骤简短。</p><h2 id="获取安装包" tabindex="-1"><a class="header-anchor" href="#获取安装包"><span>获取安装包</span></a></h2><p>wget https://github.com/evildecay/etcdkeeper/releases/download/v0.7.6/etcdkeeper-v0.7.6-linux_x86_64.zip</p><h2 id="解压安装包" tabindex="-1"><a class="header-anchor" href="#解压安装包"><span>解压安装包</span></a></h2><pre><code>unzip etcdkeeper-v0.7.6-linux_x86_64.zip 
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
</code></pre><h2 id="访问测试" tabindex="-1"><a class="header-anchor" href="#访问测试"><span>访问测试</span></a></h2><p>http://172.24.31.13:8888/etcdkeeper/</p><h2 id="etcdkeeper访问开启鉴权的etcd" tabindex="-1"><a class="header-anchor" href="#etcdkeeper访问开启鉴权的etcd"><span>etcdkeeper访问开启鉴权的etcd</span></a></h2><p>https://github.com/evildecay/etcdkeeper/issues/57</p><p>如果etcd集群开启了鉴权。(etcdctl --endpoints=http://127.0.0.1:2379 auth enable)</p><p>那么etcdkeeper启动时需要添加参数-auth true</p><p>如果etcd集群开启了鉴权，但是etcdkeeper没有添加参数-auth true，及时输入了正确的用户名和密码，也会出现以下情况：</p><figure><img src="`+d+'" alt="image-20221213143732244" tabindex="0" loading="lazy"><figcaption>image-20221213143732244</figcaption></figure>',20),p=[n];function i(s,o){return t(),r("div",null,p)}const u=e(a,[["render",i],["__file","etcd安装etcdkeeper.html.vue"]]),m=JSON.parse('{"path":"/note-book/DatabaseSystem/Etcd/etcd%E5%AE%89%E8%A3%85etcdkeeper.html","title":"etcd安装dashboard-etcdkeeper","lang":"zh-CN","frontmatter":{"description":"etcd安装dashboard-etcdkeeper 安装etcd keeper github地址：https://github.com/evildecay/etcdkeeper 安装简单，步骤简短。 获取安装包 wget https://github.com/evildecay/etcdkeeper/releases/download/v0.7.6/...","head":[["meta",{"property":"og:url","content":"https://paper-dragon.github.io/note-book/DatabaseSystem/Etcd/etcd%E5%AE%89%E8%A3%85etcdkeeper.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"etcd安装dashboard-etcdkeeper"}],["meta",{"property":"og:description","content":"etcd安装dashboard-etcdkeeper 安装etcd keeper github地址：https://github.com/evildecay/etcdkeeper 安装简单，步骤简短。 获取安装包 wget https://github.com/evildecay/etcdkeeper/releases/download/v0.7.6/..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-13T15:08:38.000Z"}],["meta",{"property":"article:author","content":"PaperDragon"}],["meta",{"property":"article:modified_time","content":"2023-08-13T15:08:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"etcd安装dashboard-etcdkeeper\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-13T15:08:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"安装etcd keeper","slug":"安装etcd-keeper","link":"#安装etcd-keeper","children":[]},{"level":2,"title":"获取安装包","slug":"获取安装包","link":"#获取安装包","children":[]},{"level":2,"title":"解压安装包","slug":"解压安装包","link":"#解压安装包","children":[]},{"level":2,"title":"编辑systemd文件","slug":"编辑systemd文件","link":"#编辑systemd文件","children":[]},{"level":2,"title":"启动参数","slug":"启动参数","link":"#启动参数","children":[]},{"level":2,"title":"访问测试","slug":"访问测试","link":"#访问测试","children":[]},{"level":2,"title":"etcdkeeper访问开启鉴权的etcd","slug":"etcdkeeper访问开启鉴权的etcd","link":"#etcdkeeper访问开启鉴权的etcd","children":[]}],"git":{"createdTime":1691939318000,"updatedTime":1691939318000,"contributors":[{"name":"PaperDragon","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":0.92,"words":275},"filePathRelative":"note-book/DatabaseSystem/Etcd/etcd安装etcdkeeper.md","localizedDate":"2023年8月13日","excerpt":"\\n<h2>安装etcd keeper</h2>\\n<p>github地址：https://github.com/evildecay/etcdkeeper</p>\\n<p>安装简单，步骤简短。</p>\\n<h2>获取安装包</h2>\\n<p>wget https://github.com/evildecay/etcdkeeper/releases/download/v0.7.6/etcdkeeper-v0.7.6-linux_x86_64.zip</p>\\n<h2>解压安装包</h2>\\n<pre><code>unzip etcdkeeper-v0.7.6-linux_x86_64.zip \\nmv etcdkeeper /usr/local/ \\ncd /usr/local/etcdkeeper \\nchmod +x etcdkeeper\\n</code></pre>","autoDesc":true}');export{u as comp,m as data};
