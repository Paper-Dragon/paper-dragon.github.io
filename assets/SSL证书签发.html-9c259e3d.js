import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as l,c as d,a as e,e as s,d as r,f as n}from"./app-a5c79f20.js";const c={},p=n(`<p>按照架构设计，在hdss7-12，hdss7-21, hdss7-22三台上部署etcd服务：</p><p>首先创建etcd用户：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># useradd -s /sbin/nologin -M etcd</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建应用包存放目录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># mkdir -p /opt/src
# cd /opt/src
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>下载etcd组件：</p>`,6),o={href:"https://github.com/etcd-io/etcd/tags",target:"_blank",rel:"noopener noreferrer"},u=n(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># wget https://github.com/etcd-io/etcd/releases/download/v3.2.28/etcd-v3.2.28-linux-amd64.tar.gz
# tar -zxf etcd-v3.2.28-linux-amd64.tar.gz -C ../
# ln -s /opt/etcd-v3.2.28-linux-amd64/ /opt/etcd
# mkdir -p /opt/etcd/certs /data/etcd /data/logs/etcd-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编辑etcd启动脚本：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
# vim /opt/etcd/etcd-server-startup.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>标红处在另外两台服务器上需要修改成对应自己的ip地址：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>
./etcd <span class="token parameter variable">--name</span> etcd-server-7-12 <span class="token punctuation">\\</span>
       --data-dir /data/etcd/etcd-server <span class="token punctuation">\\</span>
       --listen-peer-urls https://10.4.7.12:2380 <span class="token punctuation">\\</span>
       --listen-client-urls https://10.4.7.12:2379,http://127.0.0.1:2379 <span class="token punctuation">\\</span>
       --quota-backend-bytes <span class="token number">8000000000</span> <span class="token punctuation">\\</span>
       --initial-advertise-peer-urls https://10.4.7.12:2380 <span class="token punctuation">\\</span>
       --advertise-client-urls https://10.4.7.12:2379,http://127.0.0.1:2379 <span class="token punctuation">\\</span>
       --initial-cluster  etcd-server-7-12<span class="token operator">=</span>https://10.4.7.12:2380,etcd-server-7-21<span class="token operator">=</span>https://10.4.7.21:2380,etcd-server-7-22<span class="token operator">=</span>https://10.4.7.22:2380 <span class="token punctuation">\\</span>
       <span class="token comment"># --ca-file ./certs/ca.pem \\</span>
       <span class="token comment"># --cert-file ./certs/etcd-peer.pem \\</span>
       --key-file ./certs/etcd-peer-key.pem <span class="token punctuation">\\</span>
       --client-cert-auth  <span class="token punctuation">\\</span>
       --trusted-ca-file ./certs/ca.pem <span class="token punctuation">\\</span>
       --peer-ca-file ./certs/ca.pem <span class="token punctuation">\\</span>
       --peer-cert-file ./certs/etcd-peer.pem <span class="token punctuation">\\</span>
       --peer-key-file ./certs/etcd-peer-key.pem <span class="token punctuation">\\</span>
       --peer-client-cert-auth <span class="token punctuation">\\</span>
       --peer-trusted-ca-file ./certs/ca.pem <span class="token punctuation">\\</span>
       --log-output stdout

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加执行权限：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># chmod +x /opt/etcd/etcd-server-startup.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建证书存放目录：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># mkdir /opt/etcd/certs

# cd /opt/etcd/certs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>拷贝证书：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># scp hdss7-200:/opt/certs/ca.pem ./
# scp hdss7-200:/opt/certs/etcd-peer.pem ./
# scp hdss7-200:/opt/certs/etcd-peer-key.pem ./
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>给目录授权：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># chown -R etcd.etcd /opt/etcd/certs /data/etcd /data/logs/etcd-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装supervisor管理服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># yum install supervisor -y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动服务：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># systemctl start supervisord 
# systemctl enable supervisord
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>编辑etcd启动脚本：红色部分根据主机修改</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># vi /etc/supervisord.d/etcd-server.ini
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[program:etcd-server-7-12]
command=/opt/etcd/etcd-server-startup.sh                        ; the program (relative uses PATH, can take args)
numprocs=1                                                      ; number of processes copies to start (def 1)
directory=/opt/etcd                                             ; directory to cwd to before exec (def no cwd)
autostart=true                                                  ; start at supervisord start (default: true)
autorestart=true                                                ; retstart at unexpected quit (default: true)
startsecs=30                                                    ; number of secs prog must stay running (def. 1)
startretries=3                                                  ; max # of serial start failures (default 3)
exitcodes=0,2                                                   ; &#39;expected&#39; exit codes for process (default 0,2)
stopsignal=QUIT                                                 ; signal used to kill process (default TERM)
stopwaitsecs=10                                                 ; max num secs to wait b4 SIGKILL (default 10)
user=etcd                                                       ; setuid to this UNIX account to run the program
redirect_stderr=true                                            ; redirect proc stderr to stdout (default false)
stdout_logfile=/data/logs/etcd-server/etcd.stdout.log           ; stdout log path, NONE for none; default AUTO
stdout_logfile_maxbytes=64MB                                    ; max # logfile bytes b4 rotation (default 50MB)
stdout_logfile_backups=4                                        ; # of stdout logfile backups (default 10)
stdout_capture_maxbytes=1MB                                     ; number of bytes in &#39;capturemode&#39; (default 0)
stdout_events_enabled=false                                     ; emit events on stdout writes (default false)killasgroup=truestopasgroup=true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更新supervisord</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># supervisorctl update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>检查状态：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># supervisorctl status</span>

<span class="token punctuation">[</span>root@hdss7-12 logs<span class="token punctuation">]</span><span class="token comment"># supervisorctl status</span>
etcd-server-7-12                 RUNNING   pid <span class="token number">73009</span>, <span class="token function">uptime</span> <span class="token number">0</span>:00:33
<span class="token punctuation">[</span>root@hdss7-12 etcd<span class="token punctuation">]</span><span class="token comment"># ./etcdctl member list</span>
988139385f78284: <span class="token assign-left variable">name</span><span class="token operator">=</span>etcd-server-7-22 <span class="token assign-left variable">peerURLs</span><span class="token operator">=</span>https://10.4.7.22:2380 <span class="token assign-left variable">clientURLs</span><span class="token operator">=</span> <span class="token assign-left variable">isLeader</span><span class="token operator">=</span>false
5a0ef2a004fc4349: <span class="token assign-left variable">name</span><span class="token operator">=</span>etcd-server-7-21 <span class="token assign-left variable">peerURLs</span><span class="token operator">=</span>https://10.4.7.21:2380 <span class="token assign-left variable">clientURLs</span><span class="token operator">=</span>http://127.0.0.1:2379,https://10.4.7.21:2379 <span class="token assign-left variable">isLeader</span><span class="token operator">=</span>false
f4a0cb0a765574a8: <span class="token assign-left variable">name</span><span class="token operator">=</span>etcd-server-7-12 <span class="token assign-left variable">peerURLs</span><span class="token operator">=</span>https://10.4.7.12:2380 <span class="token assign-left variable">clientURLs</span><span class="token operator">=</span>http://127.0.0.1:2379,https://10.4.7.12:2379 <span class="token assign-left variable">isLeader</span><span class="token operator">=</span>true
<span class="token punctuation">[</span>root@hdss7-12 etcd<span class="token punctuation">]</span><span class="token comment"># ./etcdctl cluster-health</span>
member 988139385f78284 is unreachable: no available published client urls
member 5a0ef2a004fc4349 is healthy: got healthy result from http://127.0.0.1:2379
member f4a0cb0a765574a8 is healthy: got healthy result from http://127.0.0.1:2379
cluster is healthy
<span class="token punctuation">[</span>root@hdss7-12 etcd<span class="token punctuation">]</span><span class="token comment">#</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24);function v(m,b){const a=i("ExternalLinkIcon");return l(),d("div",null,[p,e("p",null,[s("地址："),e("a",o,[s("https://github.com/etcd-io/etcd/tags"),r(a)])]),u])}const k=t(c,[["render",v],["__file","SSL证书签发.html.vue"]]);export{k as default};
