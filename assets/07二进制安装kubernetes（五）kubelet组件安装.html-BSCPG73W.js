import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as i,d as n}from"./app-C3RcRgjL.js";const s="/assets/1034759-20191113174751232-1888238592-16918405999271-CMHfMgBo.png",d="/assets/1034759-20191113184508160-1125579373-16918406039403-WyLv38Nt.png",a="/assets/1034759-20191113191113083-612100625-16918406060675-BYIt5-BS.png",l={},r=n('<h1 id="二进制安装kubernetes-五-kubelet组件安装" tabindex="-1"><a class="header-anchor" href="#二进制安装kubernetes-五-kubelet组件安装"><span>二进制安装kubernetes（五）kubelet组件安装</span></a></h1><blockquote><p>概述资料地址：https://blog.csdn.net/bbwangj/article/details/81904350</p></blockquote><figure><img src="'+s+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>Kubelet组件运行在Node节点上，维持运行中的Pods以及提供kuberntes运行时环境，主要完成以下使命： １．监视分配给该Node节点的pods ２．挂载pod所需要的volumes ３．下载pod的secret ４．通过docker/rkt来运行pod中的容器 ５．周期的执行pod中为容器定义的liveness探针 ６．上报pod的状态给系统的其他组件 ７．上报Node的状态</p><p>kubelet安装在node节点，我们的node跟apiserver在一起，这里安装在hdss7-21,22上：</p><p>首先，kubernetes依赖pause，我们先将此服务上传到们自己的docker私有仓库：</p><p>kubernetes中的pause容器主要为每个业务容器提供以下功能：</p><ul><li>在pod中担任Linux命名空间共享的基础；</li><li>启用pid命名空间，开启init进程。</li></ul><p>HDSS7-200上:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># docker pull kubernetes/pause
# docker tag f9d5de079539 harbor.od.com/public/pause:latest
# docker push harbor.od.com/public/pause:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先在hdss7-200上申请证书：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># vi /opt/certs/kubelet-csr.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
    &quot;CN&quot;: &quot;k8s-kubelet&quot;,
    &quot;hosts&quot;: [
    &quot;127.0.0.1&quot;,
    &quot;10.4.7.10&quot;,
    &quot;10.4.7.21&quot;,
    &quot;10.4.7.22&quot;,
    &quot;10.4.7.23&quot;,
    &quot;10.4.7.24&quot;,
    &quot;10.4.7.25&quot;,
    &quot;10.4.7.26&quot;,
    &quot;10.4.7.27&quot;,
    &quot;10.4.7.28&quot;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>申请证书：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># cfssl gencert -ca=ca.pem -ca-key=ca-key.pem -config=ca-config.json -profile=server kubelet-csr.json | cfssl-json -bare kubelet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>拷贝证书到21，22上：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># cd /opt/kubernetes/server/bin/cert/
# scp hdss7-200:/opt/certs/kubelet.pem ./
# scp hdss7-200:/opt/certs/kubelet-key.pem ./
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>进入到conf目录执行以下命令：21，22上执行：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>cert]# cd ../conf/
# kubectl config set-cluster myk8s \\
  --certificate-authority=/opt/kubernetes/server/bin/cert/ca.pem \\
  --embed-certs=true \\
  --server=https://10.4.7.10:7443 \\
  --kubeconfig=kubelet.kubeconfig
# kubectl config set-credentials k8s-node \\
  --client-certificate=/opt/kubernetes/server/bin/cert/client.pem \\
  --client-key=/opt/kubernetes/server/bin/cert/client-key.pem \\
  --embed-certs=true \\
  --kubeconfig=kubelet.kubeconfig 
# kubectl config set-context myk8s-context \\
  --cluster=myk8s \\
  --user=k8s-node \\
  --kubeconfig=kubelet.kubeconfig
# kubectl config use-context myk8s-context --kubeconfig=kubelet.kubeconfig
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>hdss7-21上执行：PS：因为不论在哪个节点创建，已经同步到etcd上。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>conf]# vi k8s-node.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: k8s-node
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: system:node
subjects:
- apiGroup: rbac.authorization.k8s.io
  kind: User
  name: k8s-node
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># kubectl create -f k8s-node.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>检查k8s-node资源创建状态：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># kubectl get clusterrolebinding k8s-node -o yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>编辑kubelet启动脚本：标红部分第二台要修改成对应的主机名</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># vi /opt/kubernetes/server/bin/kubelet.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#!/bin/sh
./kubelet \\
  --anonymous-auth=false \\
  --cgroup-driver systemd \\
  --cluster-dns 192.168.0.2 \\
  --cluster-domain cluster.local \\
  --runtime-cgroups=/systemd/system.slice \\
  --kubelet-cgroups=/systemd/system.slice \\
  --fail-swap-on=&quot;false&quot; \\
  --client-ca-file ./cert/ca.pem \\
  --tls-cert-file ./cert/kubelet.pem \\
  --tls-private-key-file ./cert/kubelet-key.pem \\
  --hostname-override hdss7-21.host.com \\
  --image-gc-high-threshold 20 \\
  --image-gc-low-threshold 10 \\
  --kubeconfig ./conf/kubelet.kubeconfig \\
  --log-dir /data/logs/kubernetes/kube-kubelet \\
  --pod-infra-container-image harbor.od.com/public/pause:latest \\
  --root-dir /data/kubelet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行权限：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># chmod u+x /opt/kubernetes/server/bin/kubelet.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建日志存储目录：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># mkdir -p /data/logs/kubernetes/kube-kubelet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>编辑supervisord启动文件：红色部分自行修改</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># vi /etc/supervisord.d/kube-kubelet.ini
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[program:kube-kubelet-7-21]
command=/opt/kubernetes/server/bin/kubelet.sh     ; the program (relative uses PATH, can take args)
numprocs=1                                        ; number of processes copies to start (def 1)
directory=/opt/kubernetes/server/bin              ; directory to cwd to before exec (def no cwd)
autostart=true                                    ; start at supervisord start (default: true)
autorestart=true                                ; retstart at unexpected quit (default: true)
startsecs=30                                      ; number of secs prog must stay running (def. 1)
startretries=3                                    ; max # of serial start failures (default 3)
exitcodes=0,2                                     ; &#39;expected&#39; exit codes for process (default 0,2)
stopsignal=QUIT                                   ; signal used to kill process (default TERM)
stopwaitsecs=10                                   ; max num secs to wait b4 SIGKILL (default 10)
user=root                                         ; setuid to this UNIX account to run the program
redirect_stderr=true                              ; redirect proc stderr to stdout (default false)
stdout_logfile=/data/logs/kubernetes/kube-kubelet/kubelet.stdout.log   ; stderr log path, NONE for none; default AUTO
stdout_logfile_maxbytes=64MB                      ; max # logfile bytes b4 rotation (default 50MB)
stdout_logfile_backups=4                          ; # of stdout logfile backups (default 10)
stdout_capture_maxbytes=1MB                       ; number of bytes in &#39;capturemode&#39; (default 0)
stdout_events_enabled=false                       ; emit events on stdout writes (default false)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># supervisorctl update
# supervisorctl status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+d+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>给node打tag：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># kubectl label node hdss7-21.host.com node-role.kubernetes.io/master=
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+a+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>',40),u=[r];function o(c,v){return t(),i("div",null,u)}const p=e(l,[["render",o],["__file","07二进制安装kubernetes（五）kubelet组件安装.html.vue"]]),g=JSON.parse('{"path":"/note-book/Kubernetes/07%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%AE%89%E8%A3%85kubernetes%EF%BC%88%E4%BA%94%EF%BC%89kubelet%E7%BB%84%E4%BB%B6%E5%AE%89%E8%A3%85.html","title":"二进制安装kubernetes（五）kubelet组件安装","lang":"zh-CN","frontmatter":{"description":"二进制安装kubernetes（五）kubelet组件安装 概述资料地址：https://blog.csdn.net/bbwangj/article/details/81904350 imgimg Kubelet组件运行在Node节点上，维持运行中的Pods以及提供kuberntes运行时环境，主要完成以下使命： １．监视分配给该Node节点的pods...","head":[["meta",{"property":"og:url","content":"https://www.geekery.cn/note-book/Kubernetes/07%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%AE%89%E8%A3%85kubernetes%EF%BC%88%E4%BA%94%EF%BC%89kubelet%E7%BB%84%E4%BB%B6%E5%AE%89%E8%A3%85.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"二进制安装kubernetes（五）kubelet组件安装"}],["meta",{"property":"og:description","content":"二进制安装kubernetes（五）kubelet组件安装 概述资料地址：https://blog.csdn.net/bbwangj/article/details/81904350 imgimg Kubelet组件运行在Node节点上，维持运行中的Pods以及提供kuberntes运行时环境，主要完成以下使命： １．监视分配给该Node节点的pods..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-07T08:15:04.000Z"}],["meta",{"property":"article:author","content":"PaperDragon"}],["meta",{"property":"article:modified_time","content":"2024-03-07T08:15:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"二进制安装kubernetes（五）kubelet组件安装\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-07T08:15:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[],"git":{"createdTime":1691939318000,"updatedTime":1709799304000,"contributors":[{"name":"PaperDragon-SH","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":2.81,"words":842},"filePathRelative":"note-book/Kubernetes/07二进制安装kubernetes（五）kubelet组件安装.md","localizedDate":"2023年8月13日","excerpt":"\\n<blockquote>\\n<p>概述资料地址：https://blog.csdn.net/bbwangj/article/details/81904350</p>\\n</blockquote>\\n<figure><figcaption>img</figcaption></figure>\\n<p>Kubelet组件运行在Node节点上，维持运行中的Pods以及提供kuberntes运行时环境，主要完成以下使命：\\n１．监视分配给该Node节点的pods\\n２．挂载pod所需要的volumes\\n３．下载pod的secret\\n４．通过docker/rkt来运行pod中的容器\\n５．周期的执行pod中为容器定义的liveness探针\\n６．上报pod的状态给系统的其他组件\\n７．上报Node的状态</p>","autoDesc":true}');export{p as comp,g as data};
