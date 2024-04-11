import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as t,d as n}from"./app-pRZjcOg4.js";const s="/assets/image-20220516193406144-16918408422451-Bjgrh4ak.png",a="/assets/image-20220516193416297-16918408436743-BC97wF8n.png",d="/assets/image-20220516193438192-16918408455955-9-hvyFHp.png",l="/assets/image-20220516193449323-16918408483467-CjSTuiAH.png",r={},u=n(`<h1 id="二进制安装kubernetes-六-kube-proxy组件安装" tabindex="-1"><a class="header-anchor" href="#二进制安装kubernetes-六-kube-proxy组件安装"><span>二进制安装kubernetes（六）kube-proxy组件安装</span></a></h1><p><strong>Kube-Proxy简述</strong></p><p>参考文献： https://ywnz.com/linuxyffq/2530.html</p><p>运行在每个节点上，监听 API Server 中服务对象的变化，再通过管理 IPtables 来实现网络的转发 Kube-Proxy 目前支持三种模式：</p><ul><li><p>UserSpace</p><ul><li>k8s v1.2 后就已经淘汰</li></ul></li><li><p>IPtables</p><ul><li>目前默认方式</li></ul></li><li><p>IPVS--推荐，支持7层</p><ul><li>需要安装ipvsadm、ipset 工具包和加载 ip_vs 内核模块</li></ul></li></ul><p>kube-proxy部署在hdss7-21,hdss7-22上：</p><p>首先安装ipset，ipvsadm</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># yum install   ipset  -y 
# yum -y install ipvsadm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在hdss7-200上申请证书：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># vi /opt/certs/kube-proxy-csr.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
    &quot;CN&quot;: &quot;system:kube-proxy&quot;,
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># cfssl gencert -ca=ca.pem -ca-key=ca-key.pem -config=ca-config.json -profile=client kube-proxy-csr.json |cfssl-json -bare kube-proxy-client
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>拷贝证书到21，22上：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># cd /opt/kubernetes/server/bin/cert/
# scp hdss7-200:/opt/certs/kube-proxy-client-key.pem ./
# scp hdss7-200:/opt/certs/kube-proxy-client.pem ./
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># cd /opt/kubernetes/server/bin/conf
# kubectl config set-cluster myk8s \\
  --certificate-authority=/opt/kubernetes/server/bin/cert/ca.pem \\
  --embed-certs=true \\
  --server=https://10.4.7.10:7443 \\
  --kubeconfig=kube-proxy.kubeconfig
# kubectl config set-credentials kube-proxy \\
  --client-certificate=/opt/kubernetes/server/bin/cert/kube-proxy-client.pem \\
  --client-key=/opt/kubernetes/server/bin/cert/kube-proxy-client-key.pem \\
  --embed-certs=true \\
  --kubeconfig=kube-proxy.kubeconfig
# kubectl config set-context myk8s-context \\
  --cluster=myk8s \\
  --user=kube-proxy \\
  --kubeconfig=kube-proxy.kubeconfig
# kubectl config use-context myk8s-context --kubeconfig=kube-proxy.kubeconfig
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编辑开启ipvs内核的脚本：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># vi /root/ipvs.sh

#!/bin/bash
ipvs_mods_dir=&quot;/usr/lib/modules/$(uname -r)/kernel/net/netfilter/ipvs&quot;
for i in $(ls $ipvs_mods_dir|grep -o &quot;^[^.]*&quot;)
do
  /sbin/modinfo -F filename $i &amp;&gt;/dev/null
  if [ $? -eq 0 ];then
    /sbin/modprobe $i
  fi
done
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># chmod u+x /root/ipvs.sh
# sh /root/ipvs.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>编辑kube-proxy启动脚本：红色部分根据IP修改</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># vi /opt/kubernetes/server/bin/kube-proxy.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#!/bin/sh
./kube-proxy \\
  --cluster-cidr 172.7.0.0/16 \\
  --hostname-override hdss7-21.host.com \\
  --proxy-mode=ipvs \\
  --ipvs-scheduler=nq \\
  --kubeconfig ./conf/kube-proxy.kubeconfig
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行权限并创建日志存储目录：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># chmod +x /opt/kubernetes/server/bin/kube-proxy.sh
# mkdir -p /data/logs/kubernetes/kube-proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>编辑supervisord启动文件：红色部分根据IP修改</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># vi /etc/supervisord.d/kube-proxy.ini
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[program:kube-proxy-7-21]
command=/opt/kubernetes/server/bin/kube-proxy.sh                     ; the program (relative uses PATH, can take args)
numprocs=1                                                           ; number of processes copies to start (def 1)
directory=/opt/kubernetes/server/bin                                 ; directory to cwd to before exec (def no cwd)
autostart=true                                                       ; start at supervisord start (default: true)
autorestart=true                                                     ; retstart at unexpected quit (default: true)
startsecs=30                                                         ; number of secs prog must stay running (def. 1)
startretries=3                                                       ; max # of serial start failures (default 3)
exitcodes=0,2                                                        ; &#39;expected&#39; exit codes for process (default 0,2)
stopsignal=QUIT                                                      ; signal used to kill process (default TERM)
stopwaitsecs=10                                                      ; max num secs to wait b4 SIGKILL (default 10)
user=root                                                            ; setuid to this UNIX account to run the program
redirect_stderr=true                                                 ; redirect proc stderr to stdout (default false)
stdout_logfile=/data/logs/kubernetes/kube-proxy/proxy.stdout.log     ; stderr log path, NONE for none; default AUTO
stdout_logfile_maxbytes=64MB                                         ; max # logfile bytes b4 rotation (default 50MB)
stdout_logfile_backups=4                                             ; # of stdout logfile backups (default 10)
stdout_capture_maxbytes=1MB                                          ; number of bytes in &#39;capturemode&#39; (default 0)
stdout_events_enabled=false                                          ; emit events on stdout writes (default false)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更新supervisord：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># supervisorctl update
# supervisorctl status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>创建nginx-ds pod：（21上执行就行）</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># vi /root/nginx-ds.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>apiVersion: extensions/v1beta1
kind: DaemonSet
metadata:
  name: nginx-ds
spec:
  template:
    metadata:
      labels:
        app: nginx-ds
    spec:
      containers:
      - name: my-nginx
        image: harbor.od.com/public/nginx:v1.7.9
        ports:
        - containerPort: 80
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># kubectl create -f nginx-ds.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># kubectl get pods 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+s+`" alt="image-20220516193406144" tabindex="0" loading="lazy"><figcaption>image-20220516193406144</figcaption></figure><p>最后验证集群状态：</p><p>etcd controller-manager scheduler状态：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#kubectl get cs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+a+`" alt="image-20220516193416297" tabindex="0" loading="lazy"><figcaption>image-20220516193416297</figcaption></figure><p>nodes状态：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># kubectl get nodes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+d+`" alt="image-20220516193438192" tabindex="0" loading="lazy"><figcaption>image-20220516193438192</figcaption></figure><p>pods状态：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#kubectl get pods
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+l+'" alt="image-20220516193449323" tabindex="0" loading="lazy"><figcaption>image-20220516193449323</figcaption></figure>',46),o=[u];function c(v,m){return i(),t("div",null,o)}const g=e(r,[["render",c],["__file","08二进制安装kubernetes（六）kube-proxy组件安装.html.vue"]]),x=JSON.parse('{"path":"/note-book/Kubernetes/08%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%AE%89%E8%A3%85kubernetes%EF%BC%88%E5%85%AD%EF%BC%89kube-proxy%E7%BB%84%E4%BB%B6%E5%AE%89%E8%A3%85.html","title":"二进制安装kubernetes（六）kube-proxy组件安装","lang":"zh-CN","frontmatter":{"description":"二进制安装kubernetes（六）kube-proxy组件安装 Kube-Proxy简述 参考文献： https://ywnz.com/linuxyffq/2530.html 运行在每个节点上，监听 API Server 中服务对象的变化，再通过管理 IPtables 来实现网络的转发 Kube-Proxy 目前支持三种模式： UserSpace k...","head":[["meta",{"property":"og:url","content":"https://www.geekery.cn/note-book/Kubernetes/08%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%AE%89%E8%A3%85kubernetes%EF%BC%88%E5%85%AD%EF%BC%89kube-proxy%E7%BB%84%E4%BB%B6%E5%AE%89%E8%A3%85.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"二进制安装kubernetes（六）kube-proxy组件安装"}],["meta",{"property":"og:description","content":"二进制安装kubernetes（六）kube-proxy组件安装 Kube-Proxy简述 参考文献： https://ywnz.com/linuxyffq/2530.html 运行在每个节点上，监听 API Server 中服务对象的变化，再通过管理 IPtables 来实现网络的转发 Kube-Proxy 目前支持三种模式： UserSpace k..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-07T08:15:04.000Z"}],["meta",{"property":"article:author","content":"PaperDragon"}],["meta",{"property":"article:modified_time","content":"2024-03-07T08:15:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"二进制安装kubernetes（六）kube-proxy组件安装\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-07T08:15:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[],"git":{"createdTime":1691939318000,"updatedTime":1709799304000,"contributors":[{"name":"PaperDragon-SH","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":2.44,"words":733},"filePathRelative":"note-book/Kubernetes/08二进制安装kubernetes（六）kube-proxy组件安装.md","localizedDate":"2023年8月13日","excerpt":"\\n<p><strong>Kube-Proxy简述</strong></p>\\n<p>参考文献：\\nhttps://ywnz.com/linuxyffq/2530.html</p>\\n<p>运行在每个节点上，监听 API Server 中服务对象的变化，再通过管理 IPtables 来实现网络的转发\\nKube-Proxy 目前支持三种模式：</p>\\n<ul>\\n<li>\\n<p>UserSpace</p>\\n<ul>\\n<li>k8s v1.2 后就已经淘汰</li>\\n</ul>\\n</li>\\n<li>\\n<p>IPtables</p>\\n<ul>\\n<li>目前默认方式</li>\\n</ul>\\n</li>\\n<li>\\n<p>IPVS--推荐，支持7层</p>\\n<ul>\\n<li>需要安装ipvsadm、ipset 工具包和加载 ip_vs 内核模块</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{g as comp,x as data};
