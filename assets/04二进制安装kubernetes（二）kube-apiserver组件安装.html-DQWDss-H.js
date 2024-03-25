import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as n,d as s}from"./app-DYea881c.js";const t="/assets/1034759-20191113161103150-1839664051-16918405238861-tv09UY0s.png",d="/assets/1034759-20191113163151886-1369051614-16918405286763-BeVL1CNA.png",a="/assets/1034759-20191209165848123-1526028674-16918405319815-D6ZVkKjE.png",l={},r=s(`<h1 id="二进制安装kubernetes-二-kube-apiserver组件安装" tabindex="-1"><a class="header-anchor" href="#二进制安装kubernetes-二-kube-apiserver组件安装"><span>二进制安装kubernetes（二）kube-apiserver组件安装</span></a></h1><p>根据架构图，我们的apiserver部署在hdss7-21和hdss7-22上：</p><p>首先在hdss7-200上申请证书并拷贝到21和22上：</p><p>创建证书文件：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># cd /opt/certs
# vi client-csr.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
    &quot;CN&quot;: &quot;k8s-node&quot;,
    &quot;hosts&quot;: [
    ],
    &quot;key&quot;: {
        &quot;algo&quot;: &quot;rsa&quot;,
        &quot;size&quot;: 2048
    },
    &quot;names&quot;: [
        {
            &quot;C&quot;: &quot;CN&quot;,
            &quot;ST&quot;: &quot;beijing&quot;,
            &quot;L&quot;: &quot;beijing&quot;,
            &quot;O&quot;: &quot;od&quot;,
            &quot;OU&quot;: &quot;ops&quot;
        }
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>申请证书：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># cfssl gencert -ca=ca.pem -ca-key=ca-key.pem -config=ca-config.json -profile=client client-csr.json |cfssl-json -bare client
# vi apiserver-csr.json
知识点：
这个证书目前专属于 apiserver加了一个 *.kubernetes.master 域名以便内部私有 DNS 解析使用(可删除)；至于很多人问过 kubernetes 这几个能不能删掉，答案是不可以的；因为当集群创建好后，default namespace 下会创建一个叫 kubenretes 的 svc，有一些组件会直接连接这个 svc 来跟 api 通讯的，证书如果不包含可能会出现无法连接的情况；其他几个 kubernetes 开头的域名作用相同
   hosts包含的是授权范围，不在此范围的的节点或者服务使用此证书就会报证书不匹配错误。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
    &quot;CN&quot;: &quot;k8s-apiserver&quot;,
    &quot;hosts&quot;: [
        &quot;127.0.0.1&quot;,
        &quot;192.168.0.1&quot;,
        &quot;kubernetes.default&quot;,
        &quot;kubernetes.default.svc&quot;,
        &quot;kubernetes.default.svc.cluster&quot;,
        &quot;kubernetes.default.svc.cluster.local&quot;,
        &quot;10.4.7.10&quot;,
        &quot;10.4.7.21&quot;,
        &quot;10.4.7.22&quot;,
        &quot;10.4.7.23&quot;
    ],
    &quot;key&quot;: {
        &quot;algo&quot;: &quot;rsa&quot;,
        &quot;size&quot;: 2048
    },
    &quot;names&quot;: [
        {
            &quot;C&quot;: &quot;CN&quot;,
            &quot;ST&quot;: &quot;beijing&quot;,
            &quot;L&quot;: &quot;beijing&quot;,
            &quot;O&quot;: &quot;od&quot;,
            &quot;OU&quot;: &quot;ops&quot;
        }
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># cfssl gencert -ca=ca.pem -ca-key=ca-key.pem -config=ca-config.json -profile=server apiserver-csr.json |cfssl-json -bare apiserver
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下载kubernetes，放到21，22服务器上，官方地址：https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl-binary-via-curl</p><p>我这里用的是1.15版本，下载后操作：21,22上操作</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># cd /opt/src
# tar -zxf kubernetes-server-linux-amd64-v1.15.4.tar.gz -C ../
# cd ..
# mv kubernetes/ kubernetes-1.15
# ln -s /opt/kubernetes-1.15/ /opt/kubernete
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建证书和配置文件存放目录：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># mkdir /opt/kubernetes/server/bin/cert /opt/kubernetes/server/bin/conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>接下来拷贝证书，将apiserver证书拷贝到hdss7-21,7-22上：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># cd /opt/kubernetes/server/bin/cert# scp hdss7-200:/opt/certs/ca.pem ./
# scp hdss7-200:/opt/certs/apiserver.pem ./
# scp hdss7-200:/opt/certs/apiserver-key.pem ./
# scp hdss7-200:/opt/certs/ca-key.pem ./
# scp hdss7-200:/opt/certs/client-key.pem ./
# scp hdss7-200:/opt/certs/client.pem ./
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>进入配置文件目录：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># cd /opt/kubernetes/server/bin/conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>编辑配置文件：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># vi audit.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>apiVersion: audit.k8s.io/v1beta1 # This is required.
kind: Policy
# Don&#39;t generate audit events for all requests in RequestReceived stage.
omitStages:
  - &quot;RequestReceived&quot;
rules:
  # Log pod changes at RequestResponse level
  - level: RequestResponse
    resources:
    - group: &quot;&quot;
      # Resource &quot;pods&quot; doesn&#39;t match requests to any subresource of pods,
      # which is consistent with the RBAC policy.
      resources: [&quot;pods&quot;]
  # Log &quot;pods/log&quot;, &quot;pods/status&quot; at Metadata level
  - level: Metadata
    resources:
    - group: &quot;&quot;
      resources: [&quot;pods/log&quot;, &quot;pods/status&quot;]

  # Don&#39;t log requests to a configmap called &quot;controller-leader&quot;
  - level: None
    resources:
    - group: &quot;&quot;
      resources: [&quot;configmaps&quot;]
      resourceNames: [&quot;controller-leader&quot;]

  # Don&#39;t log watch requests by the &quot;system:kube-proxy&quot; on endpoints or services
  - level: None
    users: [&quot;system:kube-proxy&quot;]
    verbs: [&quot;watch&quot;]
    resources:
    - group: &quot;&quot; # core API group
      resources: [&quot;endpoints&quot;, &quot;services&quot;]

  # Don&#39;t log authenticated requests to certain non-resource URL paths.
  - level: None
    userGroups: [&quot;system:authenticated&quot;]
    nonResourceURLs:
    - &quot;/api*&quot; # Wildcard matching.
    - &quot;/version&quot;

  # Log the request body of configmap changes in kube-system.
  - level: Request
    resources:
    - group: &quot;&quot; # core API group
      resources: [&quot;configmaps&quot;]
    # This rule only applies to resources in the &quot;kube-system&quot; namespace.
    # The empty string &quot;&quot; can be used to select non-namespaced resources.
    namespaces: [&quot;kube-system&quot;]

  # Log configmap and secret changes in all other namespaces at the Metadata level.
  - level: Metadata
    resources:
    - group: &quot;&quot; # core API group
      resources: [&quot;secrets&quot;, &quot;configmaps&quot;]

  # Log all other resources in core and extensions at the Request level.
  - level: Request
    resources:
    - group: &quot;&quot; # core API group
    - group: &quot;extensions&quot; # Version of group should NOT be included.

  # A catch-all rule to log all other requests at the Metadata level.
  - level: Metadata
    # Long-running requests like watches that fall under this rule will not
    # generate an audit event in RequestReceived.
    omitStages:
      - &quot;RequestReceived&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>便携启动脚本：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># vi /opt/kubernetes/server/bin/kube-apiserver.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#!/bin/bash
./kube-apiserver \\
  --apiserver-count 2 \\
  --audit-log-path /data/logs/kubernetes/kube-apiserver/audit-log \\
  --audit-policy-file ./conf/audit.yaml \\
  --authorization-mode RBAC \\
  --client-ca-file ./cert/ca.pem \\
  --requestheader-client-ca-file ./cert/ca.pem \\
  --enable-admission-plugins NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota \\
  --etcd-cafile ./cert/ca.pem \\
  --etcd-certfile ./cert/client.pem \\
  --etcd-keyfile ./cert/client-key.pem \\
  --etcd-servers https://10.4.7.12:2379,https://10.4.7.21:2379,https://10.4.7.22:2379 \\
  --service-account-key-file ./cert/ca-key.pem \\
  --service-cluster-ip-range 192.168.0.0/16 \\
  --service-node-port-range 3000-29999 \\
  --target-ram-mb=1024 \\
  --kubelet-client-certificate ./cert/client.pem \\
  --kubelet-client-key ./cert/client-key.pem \\
  --log-dir  /data/logs/kubernetes/kube-apiserver \\
  --tls-cert-file ./cert/apiserver.pem \\
  --tls-private-key-file ./cert/apiserver-key.pem \\
  --v 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># chmod +x /opt/kubernetes/server/bin/kube-apiserver.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>编写supervisord启动文件：红色部分对应主机修改</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[program:kube-apiserver-7-21]
command=/opt/kubernetes/server/bin/kube-apiserver.sh            ; the program (relative uses PATH, can take args)
numprocs=1                                                      ; number of processes copies to start (def 1)
directory=/opt/kubernetes/server/bin                            ; directory to cwd to before exec (def no cwd)
autostart=true                                                  ; start at supervisord start (default: true)
autorestart=true                                                ; retstart at unexpected quit (default: true)
startsecs=30                                                    ; number of secs prog must stay running (def. 1)
startretries=3                                                  ; max # of serial start failures (default 3)
exitcodes=0,2                                                   ; &#39;expected&#39; exit codes for process (default 0,2)
stopsignal=QUIT                                                 ; signal used to kill process (default TERM)
stopwaitsecs=10                                                 ; max num secs to wait b4 SIGKILL (default 10)
user=root                                                       ; setuid to this UNIX account to run the program
redirect_stderr=true                                            ; redirect proc stderr to stdout (default false)
stdout_logfile=/data/logs/kubernetes/kube-apiserver/apiserver.stdout.log        ; stderr log path, NONE for none; default AUTO
stdout_logfile_maxbytes=64MB                                    ; max # logfile bytes b4 rotation (default 50MB)
stdout_logfile_backups=4                                        ; # of stdout logfile backups (default 10)
stdout_capture_maxbytes=1MB                                     ; number of bytes in &#39;capturemode&#39; (default 0)
stdout_events_enabled=false                                     ; emit events on stdout writes (default false)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建日志存放目录：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># mkdir -p /data/logs/kubernetes/kube-apiserver
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>更新supervisord：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># supervisorctl update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>检查是否启动：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># supervisorctl status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+t+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>至此，kube-apiserver核心组件已经安装完成，接下来要对apiserver做高可用负载：</p><p>在hdss7-11,hdss7-12上部署nginx：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># yum install nginx -y
# vi /etc/nginx/nginx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>nginx四层负载，必须与http同级：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>stream {
    upstream kube-apiserver {
        server 10.4.7.21:6443     max_fails=3 fail_timeout=30s;
        server 10.4.7.22:6443     max_fails=3 fail_timeout=30s;
    }
    server {
        listen 7443;
        proxy_connect_timeout 2s;
        proxy_timeout 900s;
        proxy_pass kube-apiserver;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># nginx -t
# systemctl start nginx
# systemctl enable nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>部署keepalived实现高可用：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code> # yum install keepalived -y
# vi /etc/keepalived/check_port.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#!/bin/bash
#keepalived 监控端口脚本
#使用方法：
#在keepalived的配置文件中
#vrrp_script check_port {#创建一个vrrp_script脚本,检查配置
#    script &quot;/etc/keepalived/check_port.sh 6379&quot; #配置监听的端口
#    interval 2 #检查脚本的频率,单位（秒）
#}
CHK_PORT=$1
if [ -n &quot;$CHK_PORT&quot; ];then
        PORT_PROCESS=\`ss -lnt|grep $CHK_PORT|wc -l\`
        if [ $PORT_PROCESS -eq 0 ];then
                echo &quot;Port $CHK_PORT Is Not Used,End.&quot;
                exit 1
        fi
else
        echo &quot;Check Port Cant Be Empty!&quot;
fi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># chmod +x /etc/keepalived/check_port.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>编辑keepalived配置文件，注意主从配置文件不一样：</p><p>hdss7-11 主：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># vi /etc/keepalived/keepalived.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>! Configuration File for keepalived

global_defs {
   router_id 10.4.7.11

}

vrrp_script chk_nginx {
    script &quot;/etc/keepalived/check_port.sh 7443&quot;
    interval 2
    weight -20
}

vrrp_instance VI_1 {
    state MASTER
    interface eth0
    virtual_router_id 251
    priority 100
    advert_int 1
    mcast_src_ip 10.4.7.11
    nopreempt   #非抢占式 ，当主节点挂了以后，从节点vip飘到从上，主节点恢复以后，不主动飘回主，需要手动重启keepalived

    authentication {
        auth_type PASS
        auth_pass 11111111
    }
    track_script {
         chk_nginx
    }
    virtual_ipaddress {
        10.4.7.10
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>hdss7-12 从：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>! Configuration File for keepalived
global_defs {
    router_id 10.4.7.12
}
vrrp_script chk_nginx {
    script &quot;/etc/keepalived/check_port.sh 7443&quot;
    interval 2
    weight -20
}
vrrp_instance VI_1 {
    state BACKUP
    interface eth0
    virtual_router_id 251
    mcast_src_ip 10.4.7.12
    priority 90
    advert_int 1
    authentication {
        auth_type PASS
        auth_pass 11111111
    }
    track_script {
        chk_nginx
    }
    virtual_ipaddress {
        10.4.7.10
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动keepalived并配置开机自启：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># systemctl start keepalived
# systemctl enable keepalived
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>检查VIP情况：</p><p>7-11是主，现在vip绑定在主上，正常：</p><figure><img src="`+d+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>如果keepalived出现脑裂问题，两台上面都有vip，可以加入以下配置，将多播修改成单播：</p><figure><img src="'+a+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>至此，apiserver部署完成，并且配置了负载高可用。下一章节部署kube-controller-manager。</p>',59),u=[r];function v(c,o){return i(),n("div",null,u)}const p=e(l,[["render",v],["__file","04二进制安装kubernetes（二）kube-apiserver组件安装.html.vue"]]),g=JSON.parse('{"path":"/note-book/Kubernetes/04%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%AE%89%E8%A3%85kubernetes%EF%BC%88%E4%BA%8C%EF%BC%89kube-apiserver%E7%BB%84%E4%BB%B6%E5%AE%89%E8%A3%85.html","title":"二进制安装kubernetes（二）kube-apiserver组件安装","lang":"zh-CN","frontmatter":{"description":"二进制安装kubernetes（二）kube-apiserver组件安装 根据架构图，我们的apiserver部署在hdss7-21和hdss7-22上： 首先在hdss7-200上申请证书并拷贝到21和22上： 创建证书文件： 申请证书： 下载kubernetes，放到21，22服务器上，官方地址：https://kubernetes.io/docs...","head":[["meta",{"property":"og:url","content":"https://www.geekery.cn/note-book/Kubernetes/04%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%AE%89%E8%A3%85kubernetes%EF%BC%88%E4%BA%8C%EF%BC%89kube-apiserver%E7%BB%84%E4%BB%B6%E5%AE%89%E8%A3%85.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"二进制安装kubernetes（二）kube-apiserver组件安装"}],["meta",{"property":"og:description","content":"二进制安装kubernetes（二）kube-apiserver组件安装 根据架构图，我们的apiserver部署在hdss7-21和hdss7-22上： 首先在hdss7-200上申请证书并拷贝到21和22上： 创建证书文件： 申请证书： 下载kubernetes，放到21，22服务器上，官方地址：https://kubernetes.io/docs..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-07T08:15:04.000Z"}],["meta",{"property":"article:author","content":"PaperDragon"}],["meta",{"property":"article:modified_time","content":"2024-03-07T08:15:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"二进制安装kubernetes（二）kube-apiserver组件安装\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-07T08:15:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[],"git":{"createdTime":1709799304000,"updatedTime":1709799304000,"contributors":[{"name":"PaperDragon-SH","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":5.19,"words":1557},"filePathRelative":"note-book/Kubernetes/04二进制安装kubernetes（二）kube-apiserver组件安装.md","localizedDate":"2024年3月7日","excerpt":"\\n<p>根据架构图，我们的apiserver部署在hdss7-21和hdss7-22上：</p>\\n<p>首先在hdss7-200上申请证书并拷贝到21和22上：</p>\\n<p>创建证书文件：</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code># cd /opt/certs\\n# vi client-csr.json\\n</code></pre></div><div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>{\\n    \\"CN\\": \\"k8s-node\\",\\n    \\"hosts\\": [\\n    ],\\n    \\"key\\": {\\n        \\"algo\\": \\"rsa\\",\\n        \\"size\\": 2048\\n    },\\n    \\"names\\": [\\n        {\\n            \\"C\\": \\"CN\\",\\n            \\"ST\\": \\"beijing\\",\\n            \\"L\\": \\"beijing\\",\\n            \\"O\\": \\"od\\",\\n            \\"OU\\": \\"ops\\"\\n        }\\n    ]\\n}\\n</code></pre></div>","autoDesc":true}');export{p as comp,g as data};
