import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as l,c,a as s,e as n,d as p,f as e}from"./app-996337bd.js";const d={},o=e(`<h1 id="在200的运维主机上创建生成ca证书的json配置文件" tabindex="-1"><a class="header-anchor" href="#在200的运维主机上创建生成ca证书的json配置文件" aria-hidden="true">#</a> 在200的运维主机上创建生成CA证书的JSON配置文件</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vi</span> /opt/certs/ca-config.json
<span class="token punctuation">[</span>root@master1 cert<span class="token punctuation">]</span><span class="token comment"># cat ca-config.json</span>
<span class="token punctuation">{</span>
    <span class="token string">&quot;signing&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;default&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;expiry&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;175200h&quot;</span>
        <span class="token punctuation">}</span>,
        <span class="token string">&quot;profiles&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;kubernetes&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;usages&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                    <span class="token string">&quot;signing&quot;</span>,
                    <span class="token string">&quot;key encipherment&quot;</span>,
                    <span class="token string">&quot;server auth&quot;</span>,
                    <span class="token string">&quot;client auth&quot;</span>
                <span class="token punctuation">]</span>,
                <span class="token string">&quot;expiry&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;175200h&quot;</span>
            <span class="token punctuation">}</span>,
            <span class="token string">&quot;server&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;expiry&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;175200h&quot;</span>,
                <span class="token string">&quot;usages&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                    <span class="token string">&quot;signing&quot;</span>,
                    <span class="token string">&quot;key encipherment&quot;</span>,
                    <span class="token string">&quot;server auth&quot;</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>,
            <span class="token string">&quot;client&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;expiry&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;175200h&quot;</span>,
                <span class="token string">&quot;usages&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                    <span class="token string">&quot;signing&quot;</span>,
                    <span class="token string">&quot;key encipherment&quot;</span>,
                    <span class="token string">&quot;client auth&quot;</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>,
            <span class="token string">&quot;peer&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;expiry&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;175200h&quot;</span>,
                <span class="token string">&quot;usages&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                    <span class="token string">&quot;signing&quot;</span>,
                    <span class="token string">&quot;key encipherment&quot;</span>,
                    <span class="token string">&quot;server auth&quot;</span>,
                    <span class="token string">&quot;client auth&quot;</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

创建生成证书签名请求的csr文件；
<span class="token function">vi</span> /opt/certs/etcd-peer-csr.json
<span class="token punctuation">{</span>
    <span class="token string">&quot;CN&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;etcd-peer&quot;</span>,
    <span class="token string">&quot;hosts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;10.4.7.11&quot;</span>,
        <span class="token string">&quot;10.4.7.12&quot;</span>,
        <span class="token string">&quot;10.4.7.21&quot;</span>,
        <span class="token string">&quot;10.4.7.22&quot;</span>
    <span class="token punctuation">]</span>,
    <span class="token string">&quot;key&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;algo&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;rsa&quot;</span>,
        <span class="token string">&quot;size&quot;</span><span class="token builtin class-name">:</span> <span class="token number">2048</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;names&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;C&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;CN&quot;</span>,
            <span class="token string">&quot;ST&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;beijing&quot;</span>,
            <span class="token string">&quot;L&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;beijing&quot;</span>,
            <span class="token string">&quot;O&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;od&quot;</span>,
            <span class="token string">&quot;OU&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;ops&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
生成证书：
<span class="token builtin class-name">cd</span> /opt/certs
certs<span class="token punctuation">]</span><span class="token comment"># cfssl gencert -ca=ca.pem -ca-key=ca-key.pem -config=ca-config.json -profile=peer etcd-peer-csr.json | cfssl-json -bare etcd-peer</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="在10-4-7-12-主机上按照架构设计-在hdss7-12-hdss7-21-hdss7-22三台上部署etcd服务" tabindex="-1"><a class="header-anchor" href="#在10-4-7-12-主机上按照架构设计-在hdss7-12-hdss7-21-hdss7-22三台上部署etcd服务" aria-hidden="true">#</a> 在10.4.7.12 主机上按照架构设计，在hdss7-12，hdss7-21, hdss7-22三台上部署etcd服务：</h1><p>首先创建etcd用户：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># useradd -s /sbin/nologin -M etcd</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建应用包存放目录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># mkdir -p /opt/src
# cd /opt/src
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>下载etcd组件：</p>`,8),r={href:"https://github.com/etcd-io/etcd/tags",target:"_blank",rel:"noopener noreferrer"},u=e(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># wget https://github.com/etcd-io/etcd/releases/download/v3.2.28/etcd-v3.2.28-linux-amd64.tar.gz
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="更新supervisord" tabindex="-1"><a class="header-anchor" href="#更新supervisord" aria-hidden="true">#</a> 更新supervisord</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># supervisorctl update
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


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24);function v(m,b){const a=i("ExternalLinkIcon");return l(),c("div",null,[o,s("p",null,[n("地址："),s("a",r,[n("https://github.com/etcd-io/etcd/tags"),p(a)])]),u])}const h=t(d,[["render",v],["__file","etcd 二进制三节点集群部署.html.vue"]]);export{h as default};
