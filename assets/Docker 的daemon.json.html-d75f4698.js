import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as l,c,a as n,e as a,d as t,f as o}from"./app-c132e7c5.js";const u={},r=o(`<h1 id="deamon-json-simple" tabindex="-1"><a class="header-anchor" href="#deamon-json-simple" aria-hidden="true">#</a> Deamon.json Simple</h1><h2 id="all" tabindex="-1"><a class="header-anchor" href="#all" aria-hidden="true">#</a> All</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  #用一组新的注册表替换守护程序将向其推送不可分发工件的注册表集
  <span class="token property">&quot;allow-nondistributable-artifacts&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;api-cors-header&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  #指定要使用的授权插件
  <span class="token property">&quot;authorization-plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;bip&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  #标志设置docker0为默认桥接网络
  <span class="token property">&quot;bridge&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;cgroup-parent&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;cluster-advertise&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  #使用新地址重新加载发现存储。
  <span class="token property">&quot;cluster-store&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  #使用新选项重新加载发现存储。
  <span class="token property">&quot;cluster-store-opts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;containerd&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/run/containerd/containerd.sock&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;containerd-namespace&quot;</span><span class="token operator">:</span> <span class="token string">&quot;docker&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;containerd-plugin-namespace&quot;</span><span class="token operator">:</span> <span class="token string">&quot;docker-plugins&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data-root&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  #当设置为 <span class="token boolean">true</span> 时，它将守护程序更改为调试模式
  <span class="token property">&quot;debug&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;default-address-pools&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;base&quot;</span><span class="token operator">:</span> <span class="token string">&quot;172.30.0.0/16&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">24</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;base&quot;</span><span class="token operator">:</span> <span class="token string">&quot;172.31.0.0/16&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">24</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;default-cgroupns-mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;private&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;default-gateway&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;default-gateway-v6&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;default-runtime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;runc&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;default-shm-size&quot;</span><span class="token operator">:</span> <span class="token string">&quot;64M&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;default-ulimits&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;nofile&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;Hard&quot;</span><span class="token operator">:</span> <span class="token number">64000</span><span class="token punctuation">,</span>
      <span class="token property">&quot;Name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nofile&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;Soft&quot;</span><span class="token operator">:</span> <span class="token number">64000</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  #设定容器DNS的地址，在容器的 /etc/resolv.conf文件中可查看
  <span class="token property">&quot;dns&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;dns-opts&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  #设定容器的搜索域
  <span class="token property">&quot;dns-search&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;exec-opts&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;exec-root&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;experimental&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  #明确启用或禁用特定功能
  <span class="token property">&quot;features&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;fixed-cidr&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;fixed-cidr-v6&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;group&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;hosts&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;icc&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;init&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;init-path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/usr/libexec/docker-init&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;insecure-registries&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ip&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.0.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ip-forward&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ip-masq&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  #阻止 Docker 守护进程添加 iptables 规则
  <span class="token property">&quot;iptables&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ip6tables&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ipv6&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  #docker主机的标签，很实用的功能<span class="token punctuation">,</span>例如定义：–label nodeName=host<span class="token number">-121</span>
  <span class="token property">&quot;labels&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  #启用在守护进程停机期间保持容器活动
  <span class="token property">&quot;live-restore&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  #Default driver for container logs (default <span class="token string">&quot;json-file&quot;</span>)
  <span class="token property">&quot;log-driver&quot;</span><span class="token operator">:</span> <span class="token string">&quot;json-file&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;log-level&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  #日志配置
  <span class="token property">&quot;log-opts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;cache-disabled&quot;</span><span class="token operator">:</span> <span class="token string">&quot;false&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;cache-max-file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;cache-max-size&quot;</span><span class="token operator">:</span> <span class="token string">&quot;20m&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;cache-compress&quot;</span><span class="token operator">:</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;env&quot;</span><span class="token operator">:</span> <span class="token string">&quot;os,customer&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;labels&quot;</span><span class="token operator">:</span> <span class="token string">&quot;somelabel&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max-file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max-size&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10m&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  #每次拉取的最大并发下载量
  <span class="token property">&quot;max-concurrent-downloads&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  #每次推送的最大并发上传量
  <span class="token property">&quot;max-concurrent-uploads&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
  #每次拉取的最大下载尝试次数
  <span class="token property">&quot;max-download-attempts&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
  <span class="token property">&quot;mtu&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;no-new-privileges&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;node-generic-resources&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;NVIDIA-GPU=UUID1&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;NVIDIA-GPU=UUID2&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;oom-score-adjust&quot;</span><span class="token operator">:</span> <span class="token number">-500</span><span class="token punctuation">,</span>
  <span class="token property">&quot;pidfile&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;raw-logs&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  #镜像源管理
  <span class="token property">&quot;registry-mirrors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  #可用于运行容器的可用OCI运行时列表
  <span class="token property">&quot;runtimes&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;cc-runtime&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/usr/bin/cc-runtime&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;custom&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/usr/local/bin/my-runc-replacement&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;runtimeArgs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;--debug&quot;</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;seccomp-profile&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  #默认 <span class="token boolean">false</span>，启用selinux支持
  <span class="token property">&quot;selinux-enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;shutdown-timeout&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
  <span class="token property">&quot;storage-driver&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;storage-opts&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;swarm-default-advertise-addr&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  #启动TLS认证开关
  <span class="token property">&quot;tls&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;tlscacert&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;tlscert&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;tlskey&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;tlsverify&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;userland-proxy&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;userland-proxy-path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/usr/libexec/docker-proxy&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;userns-remap&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="simple1" tabindex="-1"><a class="header-anchor" href="#simple1" aria-hidden="true">#</a> Simple1</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;graph&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/data/docker&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 存储路径</span>
  <span class="token property">&quot;storage-driver&quot;</span><span class="token operator">:</span> <span class="token string">&quot;overlay2&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 存储驱动</span>
  <span class="token property">&quot;storage-opts&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;overlay2.override_kernel_check=true&quot;</span> <span class="token comment">// overlay2 检查</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;insecure-registries&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;harbr.docker.com&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;registry.access.redhat.com&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;quay.io&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;http://f1361db2.m.daocloud.io&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;registry-mirrors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;http://hub-mirror.c.163.com&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;bip&quot;</span><span class="token operator">:</span> <span class="token string">&quot;172.7.5.1/24&quot;</span><span class="token punctuation">,</span> <span class="token comment">// bridge 的 ip</span>
  <span class="token property">&quot;exec-opts&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;native.cgroupdriver=systemd&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//定义cgroup驱动</span>
  <span class="token property">&quot;live-restore&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// docker容器不依赖与docker引擎  ，引擎死容器不死</span>
  <span class="token property">&quot;log-driver&quot;</span><span class="token operator">:</span> <span class="token string">&quot;json-file&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;log-opts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;max-size&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100m&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data-root&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/data/docker&quot;</span> <span class="token comment">// docker数据存储在哪里</span>
<span class="token punctuation">}</span>
systemctl daemon-reload
systemctl restart docker
systemctl enable docker

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="simple2" tabindex="-1"><a class="header-anchor" href="#simple2" aria-hidden="true">#</a> Simple2</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;registry-mirrors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;https://registry.docker-cn.com&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;http://hub-mirror.c.163.com&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;https://docker.mirrors.ustc.edu.cn&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;exec-opts&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;native.cgroupdriver=systemd&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;max-concurrent-downloads&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">//下载并发</span>
  <span class="token property">&quot;max-concurrent-uploads&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>  <span class="token comment">//上传并发</span>
  <span class="token property">&quot;log-opts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;max-size&quot;</span><span class="token operator">:</span> <span class="token string">&quot;300m&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max-file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;live-restore&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="镜像加速的解释" tabindex="-1"><a class="header-anchor" href="#镜像加速的解释" aria-hidden="true">#</a> 镜像加速的解释</h2><p>docker中国区官方镜像加速：</p>`,9),i={href:"https://registry.docker-cn.com",target:"_blank",rel:"noopener noreferrer"},d=n("p",null,"网易镜像加速：",-1),k={href:"http://hub-mirror.c.163.com",target:"_blank",rel:"noopener noreferrer"},v=n("p",null,"腾讯云镜像加速：",-1),q={href:"https://mirror.ccs.tencentyun.com",target:"_blank",rel:"noopener noreferrer"},m=n("p",null,"阿里云镜像加速：",-1),b={href:"https://ung2thfc.mirror.aliyuncs.com",target:"_blank",rel:"noopener noreferrer"},y=o(`<p>创建或修改/etc/docker/daemon.json文件<br> 默认没有daemon文件，先创建。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">tee</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
{
  &quot;registry-mirrors&quot;: [
    &quot;http://hub-mirror.c.163.com&quot;,
    &quot;https://registry.docker-cn.com&quot;,
    &quot;https://mirror.ccs.tencentyun.com&quot;,
    &quot;https://registry.docker-cn.com&quot;
  ]
}
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function g(h,f){const s=e("ExternalLinkIcon");return l(),c("div",null,[r,n("ul",null,[n("li",null,[n("a",i,[a("https://registry.docker-cn.com"),t(s)])])]),d,n("ul",null,[n("li",null,[n("a",k,[a("http://hub-mirror.c.163.com"),t(s)])])]),v,n("ul",null,[n("li",null,[n("a",q,[a("https://mirror.ccs.tencentyun.com"),t(s)])])]),m,n("ul",null,[n("li",null,[n("a",b,[a("https://ung2thfc.mirror.aliyuncs.com"),t(s)])])]),y])}const j=p(u,[["render",g],["__file","Docker 的daemon.json.html.vue"]]);export{j as default};
