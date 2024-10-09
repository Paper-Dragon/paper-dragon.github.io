import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{aj as n,ao as i,am as a}from"./app-COjiYc5s.js";const l="/assets/image-20220516193406144-16918408422451-Bjgrh4ak.png",t="/assets/image-20220516193416297-16918408436743-BC97wF8n.png",p="/assets/image-20220516193438192-16918408455955-9-hvyFHp.png",r="/assets/image-20220516193449323-16918408483467-CjSTuiAH.png",d={};function c(o,s){return a(),n("div",null,s[0]||(s[0]=[i(`<h1 id="二进制安装kubernetes-六-kube-proxy组件安装" tabindex="-1"><a class="header-anchor" href="#二进制安装kubernetes-六-kube-proxy组件安装"><span>二进制安装kubernetes（六）kube-proxy组件安装</span></a></h1><p><strong>Kube-Proxy简述</strong></p><p>参考文献： https://ywnz.com/linuxyffq/2530.html</p><p>运行在每个节点上，监听 API Server 中服务对象的变化，再通过管理 IPtables 来实现网络的转发 Kube-Proxy 目前支持三种模式：</p><ul><li><p>UserSpace</p><ul><li>k8s v1.2 后就已经淘汰</li></ul></li><li><p>IPtables</p><ul><li>目前默认方式</li></ul></li><li><p>IPVS--推荐，支持7层</p><ul><li>需要安装ipvsadm、ipset 工具包和加载 ip_vs 内核模块</li></ul></li></ul><p>kube-proxy部署在hdss7-21,hdss7-22上：</p><p>首先安装ipset，ipvsadm</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># yum install   ipset  -y </span></span>
<span class="line"><span># yum -y install ipvsadm</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在hdss7-200上申请证书：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># vi /opt/certs/kube-proxy-csr.json</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;CN&quot;: &quot;system:kube-proxy&quot;,</span></span>
<span class="line"><span>    &quot;key&quot;: {</span></span>
<span class="line"><span>        &quot;algo&quot;: &quot;rsa&quot;,</span></span>
<span class="line"><span>        &quot;size&quot;: 2048</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    &quot;names&quot;: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;C&quot;: &quot;CN&quot;,</span></span>
<span class="line"><span>            &quot;ST&quot;: &quot;beijing&quot;,</span></span>
<span class="line"><span>            &quot;L&quot;: &quot;beijing&quot;,</span></span>
<span class="line"><span>            &quot;O&quot;: &quot;od&quot;,</span></span>
<span class="line"><span>            &quot;OU&quot;: &quot;ops&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># cfssl gencert -ca=ca.pem -ca-key=ca-key.pem -config=ca-config.json -profile=client kube-proxy-csr.json |cfssl-json -bare kube-proxy-client</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>拷贝证书到21，22上：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># cd /opt/kubernetes/server/bin/cert/</span></span>
<span class="line"><span># scp hdss7-200:/opt/certs/kube-proxy-client-key.pem ./</span></span>
<span class="line"><span># scp hdss7-200:/opt/certs/kube-proxy-client.pem ./</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># cd /opt/kubernetes/server/bin/conf</span></span>
<span class="line"><span># kubectl config set-cluster myk8s \\</span></span>
<span class="line"><span>  --certificate-authority=/opt/kubernetes/server/bin/cert/ca.pem \\</span></span>
<span class="line"><span>  --embed-certs=true \\</span></span>
<span class="line"><span>  --server=https://10.4.7.10:7443 \\</span></span>
<span class="line"><span>  --kubeconfig=kube-proxy.kubeconfig</span></span>
<span class="line"><span># kubectl config set-credentials kube-proxy \\</span></span>
<span class="line"><span>  --client-certificate=/opt/kubernetes/server/bin/cert/kube-proxy-client.pem \\</span></span>
<span class="line"><span>  --client-key=/opt/kubernetes/server/bin/cert/kube-proxy-client-key.pem \\</span></span>
<span class="line"><span>  --embed-certs=true \\</span></span>
<span class="line"><span>  --kubeconfig=kube-proxy.kubeconfig</span></span>
<span class="line"><span># kubectl config set-context myk8s-context \\</span></span>
<span class="line"><span>  --cluster=myk8s \\</span></span>
<span class="line"><span>  --user=kube-proxy \\</span></span>
<span class="line"><span>  --kubeconfig=kube-proxy.kubeconfig</span></span>
<span class="line"><span># kubectl config use-context myk8s-context --kubeconfig=kube-proxy.kubeconfig</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编辑开启ipvs内核的脚本：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># vi /root/ipvs.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>ipvs_mods_dir=&quot;/usr/lib/modules/$(uname -r)/kernel/net/netfilter/ipvs&quot;</span></span>
<span class="line"><span>for i in $(ls $ipvs_mods_dir|grep -o &quot;^[^.]*&quot;)</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>  /sbin/modinfo -F filename $i &amp;&gt;/dev/null</span></span>
<span class="line"><span>  if [ $? -eq 0 ];then</span></span>
<span class="line"><span>    /sbin/modprobe $i</span></span>
<span class="line"><span>  fi</span></span>
<span class="line"><span>done</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># chmod u+x /root/ipvs.sh</span></span>
<span class="line"><span># sh /root/ipvs.sh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>编辑kube-proxy启动脚本：红色部分根据IP修改</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># vi /opt/kubernetes/server/bin/kube-proxy.sh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/sh</span></span>
<span class="line"><span>./kube-proxy \\</span></span>
<span class="line"><span>  --cluster-cidr 172.7.0.0/16 \\</span></span>
<span class="line"><span>  --hostname-override hdss7-21.host.com \\</span></span>
<span class="line"><span>  --proxy-mode=ipvs \\</span></span>
<span class="line"><span>  --ipvs-scheduler=nq \\</span></span>
<span class="line"><span>  --kubeconfig ./conf/kube-proxy.kubeconfig</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行权限并创建日志存储目录：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># chmod +x /opt/kubernetes/server/bin/kube-proxy.sh</span></span>
<span class="line"><span># mkdir -p /data/logs/kubernetes/kube-proxy</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>编辑supervisord启动文件：红色部分根据IP修改</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># vi /etc/supervisord.d/kube-proxy.ini</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[program:kube-proxy-7-21]</span></span>
<span class="line"><span>command=/opt/kubernetes/server/bin/kube-proxy.sh                     ; the program (relative uses PATH, can take args)</span></span>
<span class="line"><span>numprocs=1                                                           ; number of processes copies to start (def 1)</span></span>
<span class="line"><span>directory=/opt/kubernetes/server/bin                                 ; directory to cwd to before exec (def no cwd)</span></span>
<span class="line"><span>autostart=true                                                       ; start at supervisord start (default: true)</span></span>
<span class="line"><span>autorestart=true                                                     ; retstart at unexpected quit (default: true)</span></span>
<span class="line"><span>startsecs=30                                                         ; number of secs prog must stay running (def. 1)</span></span>
<span class="line"><span>startretries=3                                                       ; max # of serial start failures (default 3)</span></span>
<span class="line"><span>exitcodes=0,2                                                        ; &#39;expected&#39; exit codes for process (default 0,2)</span></span>
<span class="line"><span>stopsignal=QUIT                                                      ; signal used to kill process (default TERM)</span></span>
<span class="line"><span>stopwaitsecs=10                                                      ; max num secs to wait b4 SIGKILL (default 10)</span></span>
<span class="line"><span>user=root                                                            ; setuid to this UNIX account to run the program</span></span>
<span class="line"><span>redirect_stderr=true                                                 ; redirect proc stderr to stdout (default false)</span></span>
<span class="line"><span>stdout_logfile=/data/logs/kubernetes/kube-proxy/proxy.stdout.log     ; stderr log path, NONE for none; default AUTO</span></span>
<span class="line"><span>stdout_logfile_maxbytes=64MB                                         ; max # logfile bytes b4 rotation (default 50MB)</span></span>
<span class="line"><span>stdout_logfile_backups=4                                             ; # of stdout logfile backups (default 10)</span></span>
<span class="line"><span>stdout_capture_maxbytes=1MB                                          ; number of bytes in &#39;capturemode&#39; (default 0)</span></span>
<span class="line"><span>stdout_events_enabled=false                                          ; emit events on stdout writes (default false)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更新supervisord：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># supervisorctl update</span></span>
<span class="line"><span># supervisorctl status</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>创建nginx-ds pod：（21上执行就行）</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># vi /root/nginx-ds.yaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>apiVersion: extensions/v1beta1</span></span>
<span class="line"><span>kind: DaemonSet</span></span>
<span class="line"><span>metadata:</span></span>
<span class="line"><span>  name: nginx-ds</span></span>
<span class="line"><span>spec:</span></span>
<span class="line"><span>  template:</span></span>
<span class="line"><span>    metadata:</span></span>
<span class="line"><span>      labels:</span></span>
<span class="line"><span>        app: nginx-ds</span></span>
<span class="line"><span>    spec:</span></span>
<span class="line"><span>      containers:</span></span>
<span class="line"><span>      - name: my-nginx</span></span>
<span class="line"><span>        image: harbor.od.com/public/nginx:v1.7.9</span></span>
<span class="line"><span>        ports:</span></span>
<span class="line"><span>        - containerPort: 80</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># kubectl create -f nginx-ds.yaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>查看：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># kubectl get pods</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="`+l+'" alt="image-20220516193406144" tabindex="0" loading="lazy"><figcaption>image-20220516193406144</figcaption></figure><p>最后验证集群状态：</p><p>etcd controller-manager scheduler状态：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#kubectl get cs</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+t+'" alt="image-20220516193416297" tabindex="0" loading="lazy"><figcaption>image-20220516193416297</figcaption></figure><p>nodes状态：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># kubectl get nodes</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+p+'" alt="image-20220516193438192" tabindex="0" loading="lazy"><figcaption>image-20220516193438192</figcaption></figure><p>pods状态：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#kubectl get pods</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+r+'" alt="image-20220516193449323" tabindex="0" loading="lazy"><figcaption>image-20220516193449323</figcaption></figure>',46)]))}const h=e(d,[["render",c],["__file","08二进制安装kubernetes（六）kube-proxy组件安装.html.vue"]]),v=JSON.parse('{"path":"/note-book/Kubernetes/08%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%AE%89%E8%A3%85kubernetes%EF%BC%88%E5%85%AD%EF%BC%89kube-proxy%E7%BB%84%E4%BB%B6%E5%AE%89%E8%A3%85.html","title":"二进制安装kubernetes（六）kube-proxy组件安装","lang":"zh-CN","frontmatter":{"description":"二进制安装kubernetes（六）kube-proxy组件安装 Kube-Proxy简述 参考文献： https://ywnz.com/linuxyffq/2530.html 运行在每个节点上，监听 API Server 中服务对象的变化，再通过管理 IPtables 来实现网络的转发 Kube-Proxy 目前支持三种模式： UserSpace k...","head":[["meta",{"property":"og:url","content":"https://www.geekery.cn/note-book/Kubernetes/08%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%AE%89%E8%A3%85kubernetes%EF%BC%88%E5%85%AD%EF%BC%89kube-proxy%E7%BB%84%E4%BB%B6%E5%AE%89%E8%A3%85.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"二进制安装kubernetes（六）kube-proxy组件安装"}],["meta",{"property":"og:description","content":"二进制安装kubernetes（六）kube-proxy组件安装 Kube-Proxy简述 参考文献： https://ywnz.com/linuxyffq/2530.html 运行在每个节点上，监听 API Server 中服务对象的变化，再通过管理 IPtables 来实现网络的转发 Kube-Proxy 目前支持三种模式： UserSpace k..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-07T08:15:04.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-07T08:15:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"二进制安装kubernetes（六）kube-proxy组件安装\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-07T08:15:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[],"git":{"createdTime":1691939318000,"updatedTime":1709799304000,"contributors":[{"name":"PaperDragon-SH","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":2.44,"words":733},"filePathRelative":"note-book/Kubernetes/08二进制安装kubernetes（六）kube-proxy组件安装.md","localizedDate":"2023年8月13日","excerpt":"\\n<p><strong>Kube-Proxy简述</strong></p>\\n<p>参考文献：\\nhttps://ywnz.com/linuxyffq/2530.html</p>\\n<p>运行在每个节点上，监听 API Server 中服务对象的变化，再通过管理 IPtables 来实现网络的转发\\nKube-Proxy 目前支持三种模式：</p>\\n<ul>\\n<li>\\n<p>UserSpace</p>\\n<ul>\\n<li>k8s v1.2 后就已经淘汰</li>\\n</ul>\\n</li>\\n<li>\\n<p>IPtables</p>\\n<ul>\\n<li>目前默认方式</li>\\n</ul>\\n</li>\\n<li>\\n<p>IPVS--推荐，支持7层</p>\\n<ul>\\n<li>需要安装ipvsadm、ipset 工具包和加载 ip_vs 内核模块</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{h as comp,v as data};
