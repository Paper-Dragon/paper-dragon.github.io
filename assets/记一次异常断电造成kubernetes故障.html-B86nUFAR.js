import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as s,d as a}from"./app-B-uIMXc-.js";const i="/assets/image-20230818150814096-DaQfOChT.png",t="/assets/image-20230818154811917-CuQCJSbP.png",l="/assets/image-20230818154840385-IDaERR0f.png",r="/assets/image-20230818154847190-CAdvrhFJ.png",c="/assets/image-20230818154854781-Cyqyq0UI.png",d={},p=a('<h1 id="记一次异常断电造成kubernetes故障" tabindex="-1"><a class="header-anchor" href="#记一次异常断电造成kubernetes故障"><span>记一次异常断电造成kubernetes故障</span></a></h1><h2 id="断电造成kubernetes故障" tabindex="-1"><a class="header-anchor" href="#断电造成kubernetes故障"><span>断电造成kubernetes故障</span></a></h2><blockquote><p>http://31mwww.linuxea.com/2580.html https://blog.csdn.net/liuyij3430448/article/details/130406844 因为宿主机系统 esxi 的内存条老化，导致esxi异常关机。内部虚拟机全部断电。总共30几台吧。</p><p>经过检查和擦拭内存金手指，服务器正常开机。</p><p>老家伙你不能倒下啊。你不run了我就得run啊。。。</p></blockquote><p>服务器显示状态</p><figure><img src="'+i+`" alt="image-20230818150814096" tabindex="0" loading="lazy"><figcaption>image-20230818150814096</figcaption></figure><h2 id="处理存储空间问题" tabindex="-1"><a class="header-anchor" href="#处理存储空间问题"><span>处理存储空间问题</span></a></h2><p>所幸，os 层面并没有损坏。系统正常的开机。硬盘已经满了。不知道这个设备之前是怎么在磁盘根目录100%的情况下还能正常运行的。</p><h3 id="发现异常" tabindex="-1"><a class="header-anchor" href="#发现异常"><span>发现异常</span></a></h3><ul><li>vim在保存任何文件的时候都会显示vim.viminfo报错。</li><li>运行速度非常缓慢</li></ul><p>经过检查是根目录存储空间不足。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /var/log
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> vmware-*
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> *<span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">..</span><span class="token number">9</span><span class="token punctuation">}</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> *.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>经过上边的处理之后，系统重启，速度变快了。</p><h2 id="集群节点信息和日志" tabindex="-1"><a class="header-anchor" href="#集群节点信息和日志"><span>集群节点信息和日志</span></a></h2><blockquote><p>这个是一个远古集群，版本是1.18，主要运行一些runner。没做很多的监控告警，处理起来非常棘手。先看master节点的解决思路，master节点不解决，slave不会起来。</p></blockquote><h3 id="master2节点" tabindex="-1"><a class="header-anchor" href="#master2节点"><span>master2节点</span></a></h3><p>kubelet启动异常，日志显示，当然kubelet启动不成功，其他组件也不可能起来。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>failed to run Kubelet: unable to load bootstrap kubeconfig: <span class="token function">stat</span> /etc/kubernetes/bootstrap-kubelet.conf: no such <span class="token function">file</span> or directory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="master3节点" tabindex="-1"><a class="header-anchor" href="#master3节点"><span>master3节点</span></a></h3><p>kubelet启动异常，日志显示，当然kubelet启动不成功，其他组件也不可能起来。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>failed to run Kubelet: unable to load bootstrap kubeconfig: <span class="token function">stat</span> /etc/kubernetes/bootstrap-kubelet.conf: no such <span class="token function">file</span> or directory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="master1节点" tabindex="-1"><a class="header-anchor" href="#master1节点"><span>master1节点</span></a></h3><p>因为各种原因吧，可能当时误删除了。。。但是集群正常运行也没在意这个。</p><h2 id="临时解决这个问题" tabindex="-1"><a class="header-anchor" href="#临时解决这个问题"><span>临时解决这个问题</span></a></h2><p>在<code>/usr/lib/systemd/system/kubelet.service.d/10-kubeadm.conf</code>中去掉<code>--bootstrap-kubeconfig=/etc/kubernetes/bootstrap-kubelet.conf</code>后重启</p><h2 id="证书更新" tabindex="-1"><a class="header-anchor" href="#证书更新"><span>证书更新</span></a></h2><blockquote><p>经过查询，证书已经全部过期，使用kubeadm更新证书，然后集群并没有正常变为Ready。</p></blockquote><h3 id="使用命令更新" tabindex="-1"><a class="header-anchor" href="#使用命令更新"><span>使用命令更新</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>通过 kubeadm部署的k8s集群，默认生成的证书有效期是一年.需要每年更新证书.

<span class="token number">1</span>、查看证书有效期
kubeadm alpha certs check-expiration

<span class="token number">2</span>、更新证书，如果是HA集群模式，所有master需要执行
kubeadm alpha certs renew all

<span class="token number">3</span>、通过crontab定时更新证书
<span class="token number">0</span> <span class="token number">0</span> <span class="token number">15</span> <span class="token number">10</span> * kubeadm alpha certs renew all

<span class="token number">4</span>、证书过期kubectl命令无法使用
<span class="token comment"># 更新客户端配置</span>
<span class="token function">sudo</span> <span class="token function">cp</span> <span class="token parameter variable">-i</span> /etc/kubernetes/admin.conf <span class="token environment constant">$HOME</span>/.kube/config
<span class="token function">sudo</span> <span class="token function">chown</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> <span class="token parameter variable">-u</span><span class="token variable">)</span></span><span class="token builtin class-name">:</span><span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> <span class="token parameter variable">-g</span><span class="token variable">)</span></span> <span class="token environment constant">$HOME</span>/.kube/config


-----------证书说明---------------

<span class="token number">1</span>.Kubernetes 集群根证书
/etc/kubernetes/pki/ca.crt
/etc/kubernetes/pki/ca.key

由此根证书签发的证书有:
  kube-apiserver 组件持有的服务端证书
    /etc/kubernetes/pki/apiserver.crt
　　/etc/kubernetes/pki/apiserver.key
  kubelet 组件持有的客户端证书
　　/etc/kubernetes/pki/apiserver-kubelet-client.crt
　　/etc/kubernetes/pki/apiserver-kubelet-client.key

注意：kubelet 上一般不会明确指定服务端证书, 而是只指定 ca 根证书, 让 kubelet 根据本地主机信息自动生成服务端证书并
保存到配置的cert-dir文件夹中。轮换的证书默认位于目录 /var/lib/kubelet/pki。

<span class="token number">2</span>.汇聚层<span class="token punctuation">(</span>aggregator<span class="token punctuation">)</span>证书
/etc/kubernetes/pki/front-proxy-ca.crt
/etc/kubernetes/pki/front-proxy-ca.key

由此根证书签发的证书只有一组:
  代理端使用的客户端证书, 用作代用户与 kube-apiserver 认证
    /etc/kubernetes/pki/front-proxy-client.crt
    /etc/kubernetes/pki/front-proxy-client.key

<span class="token number">3</span>.etcd 集群根证书
/etc/kubernetes/pki/etcd/ca.crt
/etc/kubernetes/pki/etcd/ca.key

由此根证书签发机构签发的证书有:
  etcd server 持有的服务端证书
    /etc/kubernetes/pki/etcd/server.crt
    /etc/kubernetes/pki/etcd/server.key
  peer 集群中节点互相通信使用的客户端证书
    /etc/kubernetes/pki/etcd/peer.crt
    /etc/kubernetes/pki/etcd/peer.key
  pod 中定义 Liveness 探针使用的客户端证书
    /etc/kubernetes/pki/etcd/healthcheck-client.crt
    /etc/kubernetes/pki/etcd/healthcheck-client.key
  配置在 kube-apiserver 中用来与 etcd server 做双向认证的客户端证书
    /etc/kubernetes/pki/apiserver-etcd-client.crt
    /etc/kubernetes/pki/apiserver-etcd-client.key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时kubelet已经启动，但是NotReady。差不多是下面这种情况，因为当时并没有详细记录这块。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@xxx ~<span class="token punctuation">]</span><span class="token comment"># kubectl get node</span>
NAME      STATUS                        ROLES    AGE    VERSION
xxx    NotReady   master   647d   v1.18.1
xxx   NotReady                         <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>   647d   v1.18.1
xxx   NotReady                         <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>   647d   v1.18.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="命令更新的缺陷和修复-control-plane-worker都需要更新" tabindex="-1"><a class="header-anchor" href="#命令更新的缺陷和修复-control-plane-worker都需要更新"><span>命令更新的缺陷和修复[control-plane&amp;&amp;worker都需要更新]</span></a></h3><p>报错</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># kubelet</span>
<span class="token number">1518</span> bootstrap.go:265<span class="token punctuation">]</span> part of the existing bootstrap client certificate is expired: <span class="token number">2024</span>-02-23 08:13:25 +0000 UTC
<span class="token number">1518</span> server.go:273<span class="token punctuation">]</span> failed to run Kubelet: unable to load bootstrap kubeconfig: <span class="token function">stat</span> /etc/kubernetes/bootstrap-kubelet.conf: no such <span class="token function">file</span> or directory
<span class="token comment"># api-server</span>
I0427 00:51:31.877435       <span class="token number">1</span> log.go:172<span class="token punctuation">]</span> http: TLS handshake error from <span class="token number">192.168</span>.0.124:56108: EOF
I0427 00:52:22.075177       <span class="token number">1</span> log.go:172<span class="token punctuation">]</span> http: TLS handshake error from <span class="token number">192.168</span>.0.124:42214: EOF
I0427 00:53:45.493054       <span class="token number">1</span> log.go:172<span class="token punctuation">]</span> http: TLS handshake error from <span class="token number">192.168</span>.0.160:35706: EOF

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>进入各个节点的 <strong>/var/lib/kubelet/pki</strong>文件夹 查看kubelet的证书 发现还是老证书 由此可以证明 <strong>kubeadm alpha certs renew all</strong>命令不会更新kubelet证书</p><p>所以此时k8s集群还是不可用状态</p><p>这里可以使用admin.conf中的证书信息替换 所有节点的中kubelet.conf 证书信息</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>即admin.conf中的client-certificate-data 与 client-key-data  
替换kubelet.conf  client-certificate 与 client-key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>借鉴来源 https://blog.csdn.net/liuyij3430448/article/details/130406844</p></blockquote><figure><img src="`+t+'" alt="image-20230818154811917" tabindex="0" loading="lazy"><figcaption>image-20230818154811917</figcaption></figure><p>kubelet.conf 原始配置</p><figure><img src="'+l+'" alt="image-20230818154840385" tabindex="0" loading="lazy"><figcaption>image-20230818154840385</figcaption></figure><p>kubelet.conf 替换后</p><figure><img src="'+r+'" alt="image-20230818154847190" tabindex="0" loading="lazy"><figcaption>image-20230818154847190</figcaption></figure><p>所有节点替换完成后 可以看到 /var/lib/kubelet/pki 文件夹下生成了新的kubelet-client证书</p><figure><img src="'+c+`" alt="image-20230818154854781" tabindex="0" loading="lazy"><figcaption>image-20230818154854781</figcaption></figure><p>此时再恢复kubelet.conf 中的原始配置即可 （不恢复也可以正常使用）</p><h2 id="apiserver和etcd组件修复" tabindex="-1"><a class="header-anchor" href="#apiserver和etcd组件修复"><span>apiserver和etcd组件修复</span></a></h2><p>查询组件，apiserver一直启动不起来。</p><p>从证书表格中查询到，apiserver使用了这些证书，是已经更新过了。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>    /etc/kubernetes/pki/apiserver-etcd-client.crt
    /etc/kubernetes/pki/apiserver-etcd-client.key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>日志显示</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">..</span><span class="token punctuation">..</span>
Error: context deadline exceeded
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>原因是因为etcd的节点不健康</p><p>使用以下命令解决问题</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 配置环境</span>
<span class="token comment"># export ETCDCTL_API=3</span>
<span class="token comment"># alias etcdctl=&#39;etcdctl --endpoints=https://127.0.0.1:2379 --cacert=/etc/kubernetes/pki/etcd/ca.crt --cert=/etc/kubernetes/pki/etcd/server.crt --key=/etc/kubernetes/pki/etcd/server.key&#39;</span>

<span class="token comment">## 查看 etcd 集群成员列表</span>
<span class="token comment"># etcdctl member list</span>
a9b6a1341829d62a, started, k8s-master03, https://172.20.5.13:2380, https://172.20.5.13:2379, <span class="token boolean">false</span>
d1c737a26ea4dd70, started, k8s-master01, https://172.20.5.11:2380, https://172.20.5.11:2379, <span class="token boolean">false</span>
fe2d4a2a33304913, started, k8s-master02, https://172.20.5.12:2380, https://172.20.5.12:2379, <span class="token boolean">false</span>

<span class="token comment">## 删除 etcd 集群成员 k8s-masterxxx</span>
<span class="token comment"># etcdctl member remove fe2d4a2a33304913</span>
Member fe2d4a2a33304913 removed from cluster 36067d1f1ca3f1db

<span class="token comment">## 退出容器</span>
<span class="token comment"># exit</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>apiserver可以正常运行</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>做了什么搞好的</p><ul><li>更新了 /etc/kubernetes/目录下的证书使用kubeadm命令</li><li>复制admin.conf作为当前kubectl的配置文件</li><li>复制 admin.conf里的证书临时作为kubelet证书使用，让他轮转产生新的证书</li><li>产生新的证书之后 /var/lib/kubelet/pki kubelet文件更改回原来的 /var/lib/kubelet/pki下的证书，不改也行。</li><li>删除etcd下多余的成员</li></ul>`,59),o=[p];function u(b,m){return n(),s("div",null,o)}const h=e(d,[["render",u],["__file","记一次异常断电造成kubernetes故障.html.vue"]]),g=JSON.parse('{"path":"/note-book/Kubernetes/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%BC%82%E5%B8%B8%E6%96%AD%E7%94%B5%E9%80%A0%E6%88%90kubernetes%E6%95%85%E9%9A%9C.html","title":"记一次异常断电造成kubernetes故障","lang":"zh-CN","frontmatter":{"description":"记一次异常断电造成kubernetes故障 断电造成kubernetes故障 http://31mwww.linuxea.com/2580.html https://blog.csdn.net/liuyij3430448/article/details/130406844 因为宿主机系统 esxi 的内存条老化，导致esxi异常关机。内部虚拟机全部断电...","head":[["meta",{"property":"og:url","content":"https://paper-dragon.github.io/note-book/Kubernetes/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%BC%82%E5%B8%B8%E6%96%AD%E7%94%B5%E9%80%A0%E6%88%90kubernetes%E6%95%85%E9%9A%9C.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"记一次异常断电造成kubernetes故障"}],["meta",{"property":"og:description","content":"记一次异常断电造成kubernetes故障 断电造成kubernetes故障 http://31mwww.linuxea.com/2580.html https://blog.csdn.net/liuyij3430448/article/details/130406844 因为宿主机系统 esxi 的内存条老化，导致esxi异常关机。内部虚拟机全部断电..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-07T07:32:15.000Z"}],["meta",{"property":"article:author","content":"PaperDragon"}],["meta",{"property":"article:modified_time","content":"2024-03-07T07:32:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"记一次异常断电造成kubernetes故障\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-07T07:32:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"断电造成kubernetes故障","slug":"断电造成kubernetes故障","link":"#断电造成kubernetes故障","children":[]},{"level":2,"title":"处理存储空间问题","slug":"处理存储空间问题","link":"#处理存储空间问题","children":[{"level":3,"title":"发现异常","slug":"发现异常","link":"#发现异常","children":[]}]},{"level":2,"title":"集群节点信息和日志","slug":"集群节点信息和日志","link":"#集群节点信息和日志","children":[{"level":3,"title":"master2节点","slug":"master2节点","link":"#master2节点","children":[]},{"level":3,"title":"master3节点","slug":"master3节点","link":"#master3节点","children":[]},{"level":3,"title":"master1节点","slug":"master1节点","link":"#master1节点","children":[]}]},{"level":2,"title":"临时解决这个问题","slug":"临时解决这个问题","link":"#临时解决这个问题","children":[]},{"level":2,"title":"证书更新","slug":"证书更新","link":"#证书更新","children":[{"level":3,"title":"使用命令更新","slug":"使用命令更新","link":"#使用命令更新","children":[]},{"level":3,"title":"命令更新的缺陷和修复[control-plane&&worker都需要更新]","slug":"命令更新的缺陷和修复-control-plane-worker都需要更新","link":"#命令更新的缺陷和修复-control-plane-worker都需要更新","children":[]}]},{"level":2,"title":"apiserver和etcd组件修复","slug":"apiserver和etcd组件修复","link":"#apiserver和etcd组件修复","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1692346453000,"updatedTime":1709796735000,"contributors":[{"name":"PaperDragon-SH","email":"2678885646@qq.com","commits":3}]},"readingTime":{"minutes":5.3,"words":1591},"filePathRelative":"note-book/Kubernetes/记一次异常断电造成kubernetes故障.md","localizedDate":"2023年8月18日","excerpt":"\\n<h2>断电造成kubernetes故障</h2>\\n<blockquote>\\n<p>http://31mwww.linuxea.com/2580.html\\nhttps://blog.csdn.net/liuyij3430448/article/details/130406844\\n因为宿主机系统 esxi 的内存条老化，导致esxi异常关机。内部虚拟机全部断电。总共30几台吧。</p>\\n<p>经过检查和擦拭内存金手指，服务器正常开机。</p>\\n<p>老家伙你不能倒下啊。你不run了我就得run啊。。。</p>\\n</blockquote>\\n<p>服务器显示状态</p>\\n<figure><figcaption>image-20230818150814096</figcaption></figure>","autoDesc":true}');export{h as comp,g as data};
