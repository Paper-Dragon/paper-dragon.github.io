import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-kb1Efvzs.js";const t={},i=e(`<h1 id="架构" tabindex="-1"><a class="header-anchor" href="#架构" aria-hidden="true">#</a> 架构</h1><table><thead><tr><th>主机名</th><th>ip</th><th></th></tr></thead><tbody><tr><td>harbor.cidana.com</td><td>192.168.0.94/24</td><td>签发证书，容器仓库，NFS</td></tr><tr><td>master1.cidana.com</td><td>192.168.0.84/24</td><td></td></tr><tr><td>master2.cidana.com</td><td>192.168.0.172/24</td><td></td></tr><tr><td>worker1.cidana.com</td><td>192.168.0.88/24</td><td></td></tr><tr><td>worker2.cidana.com</td><td>192.168.0.86/24</td><td></td></tr><tr><td>DNS&amp;&amp;DHCP&amp;&amp;smb</td><td>192.168.0.543/24</td><td>Fileserver</td></tr></tbody></table><h1 id="安装docker" tabindex="-1"><a class="header-anchor" href="#安装docker" aria-hidden="true">#</a> 安装Docker</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-sSL</span> https://get.docker.com <span class="token operator">|</span> <span class="token function">bash</span>
systemctl start <span class="token function">docker</span>
<span class="token function">docker</span> info
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="关闭-swap-分区" tabindex="-1"><a class="header-anchor" href="#关闭-swap-分区" aria-hidden="true">#</a> 关闭 swap 分区</h1><p>1、如果开启了 swap 分区，kubelet 会启动失败(可以通过将参数 --fail-swap-on 设置为false 来忽略 swap on)，故需要在每台机器上关闭 swap 分区：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> swapoff <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、为了防止开机自动挂载 swap 分区，可以注释 /etc/fstab 中相应的条目：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;/ swap / s/^\\(.*\\)$/#\\1/g&#39;</span> /etc/fstab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>关闭 SELinux1、关闭 SELinux，否则后续 K8S 挂载目录时可能报错 Permission denied ：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> setenforce <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、修改配置文件，永久生效；</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">grep</span> SELINUX /etc/selinux/config
<span class="token assign-left variable">SELINUX</span><span class="token operator">=</span>disabled
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="加载内核模块" tabindex="-1"><a class="header-anchor" href="#加载内核模块" aria-hidden="true">#</a> 加载内核模块</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> modprobe br_netfilter
$ <span class="token function">sudo</span> modprobe ip_vs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="设置系统参数" tabindex="-1"><a class="header-anchor" href="#设置系统参数" aria-hidden="true">#</a> 设置系统参数</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> <span class="token operator">&gt;</span> kubernetes.conf <span class="token operator">&lt;&lt;</span><span class="token string">EOF
net.bridge.bridge-nf-call-iptables=1
net.bridge.bridge-nf-call-ip6tables=1
net.ipv4.ip_forward=1
net.ipv4.tcp_tw_recycle=0
vm.swappiness=0
vm.overcommit_memory=1
vm.panic_on_oom=0
fs.inotify.max_user_watches=89100
fs.file-max=52706963
fs.nr_open=52706963
net.ipv6.conf.all.disable_ipv6=1
net.netfilter.nf_conntrack_max=2310720
EOF</span>
$ <span class="token function">sudo</span> <span class="token function">cp</span> kubernetes.conf /etc/sysctl.d/kubernetes.conf
$ <span class="token function">sudo</span> <span class="token function">sysctl</span> <span class="token parameter variable">-p</span> /etc/sysctl.d/kubernetes.conf
$ <span class="token function">sudo</span> <span class="token function">mount</span> <span class="token parameter variable">-t</span> cgroup <span class="token parameter variable">-o</span> cpu,cpuacct none /sys/fs/cgroup/cpu,cpuacct
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="设置系统时区" tabindex="-1"><a class="header-anchor" href="#设置系统时区" aria-hidden="true">#</a> 设置系统时区</h1><p>1、调整系统 TimeZone</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> timedatectl set-timezone Asia/Shanghai
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、将当前的 UTC 时间写入硬件时钟</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> timedatectl set-local-rtc <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3、重启依赖于系统时间的服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> systemctl restart rsyslog
$ <span class="token function">sudo</span> systemctl restart crond
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="更新系统时间" tabindex="-1"><a class="header-anchor" href="#更新系统时间" aria-hidden="true">#</a> 更新系统时间</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ yum <span class="token parameter variable">-y</span> <span class="token function">install</span> ntpdate
$ <span class="token function">sudo</span> ntpdate cn.pool.ntp.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="检查系统内核和模块是否适合运行" tabindex="-1"><a class="header-anchor" href="#检查系统内核和模块是否适合运行" aria-hidden="true">#</a> 检查系统内核和模块是否适合运行</h1><p>docker (仅适用于linux 系统)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">curl</span> https://raw.githubusercontent.com/docker/docker/master/contrib/check-config.sh <span class="token operator">&gt;</span> check-config.sh
$ <span class="token function">chmod</span> +x check-config.sh
$ <span class="token function">bash</span> ./check-config.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="创建根证书-ca" tabindex="-1"><a class="header-anchor" href="#创建根证书-ca" aria-hidden="true">#</a> 创建根证书 CA</h1><h2 id="创建ca配置文件" tabindex="-1"><a class="header-anchor" href="#创建ca配置文件" aria-hidden="true">#</a> 创建CA配置文件</h2><p>CA 配置文件用于配置根证书的使用场景 (profile) 和具体参数 (usage，过期时间、服务端认证、客户端认证、加密等)，后续在签名其它证书时需要指定特定场景。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@kube-master ~<span class="token punctuation">]</span><span class="token comment"># cd /opt/cert</span>
<span class="token punctuation">[</span>root@kube-master cert<span class="token punctuation">]</span><span class="token comment"># vim ca-config.json</span>
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
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注： ① signing ：表示该证书可用于签名其它证书，生成的 ca.pem 证书中CA=TRUE ； ② server auth ：表示 client 可以用该该证书对 server 提供的证书进行验证； ③ client auth ：表示 server 可以用该该证书对 client 提供的证书进行验证；</p><h2 id="创建生成ca证书签名请求-csr-的json配置文件" tabindex="-1"><a class="header-anchor" href="#创建生成ca证书签名请求-csr-的json配置文件" aria-hidden="true">#</a> 创建生成CA证书签名请求（csr）的json配置文件</h2><p><code>/opt/cert/ca-csr.json</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token punctuation">{</span>
    <span class="token string">&quot;CN&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;kubernetes&quot;</span>,
    <span class="token string">&quot;key&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;algo&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;rsa&quot;</span>,
        <span class="token string">&quot;size&quot;</span><span class="token builtin class-name">:</span> <span class="token number">2048</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;names&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;C&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;CN&quot;</span>,
            <span class="token string">&quot;ST&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;BeiJing&quot;</span>,
            <span class="token string">&quot;L&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;BeiJing&quot;</span>,
            <span class="token string">&quot;O&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;k8s&quot;</span>,
            <span class="token string">&quot;OU&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;4Paradigm&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注： ① CN： Common Name ，kube-apiserver 从证书中提取该字段作为请求的用户名(User Name)，浏览器使用该字段验证网站是否合法； ② O： Organization ，kube-apiserver 从证书中提取该字段作为请求用户所属的组(Group)； ③ kube-apiserver 将提取的 User、Group 作为 RBAC 授权的用户标识；</p><h2 id="生成-ca-证书和私钥" tabindex="-1"><a class="header-anchor" href="#生成-ca-证书和私钥" aria-hidden="true">#</a> 生成 CA 证书和私钥</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
                                              证书和私钥放一起  <span class="token operator">|</span>   分开 承载式证书
<span class="token punctuation">[</span>root@harbor certs<span class="token punctuation">]</span><span class="token comment"># cfssl gencert -initca ca-csr.json | cfssljson -bare ca</span>
<span class="token number">2022</span>/01/19 <span class="token number">14</span>:17:01 <span class="token punctuation">[</span>INFO<span class="token punctuation">]</span> generating a new CA key and certificate from CSR
<span class="token number">2022</span>/01/19 <span class="token number">14</span>:17:01 <span class="token punctuation">[</span>INFO<span class="token punctuation">]</span> generate received request
<span class="token number">2022</span>/01/19 <span class="token number">14</span>:17:01 <span class="token punctuation">[</span>INFO<span class="token punctuation">]</span> received CSR
<span class="token number">2022</span>/01/19 <span class="token number">14</span>:17:01 <span class="token punctuation">[</span>INFO<span class="token punctuation">]</span> generating key: rsa-2048
<span class="token number">2022</span>/01/19 <span class="token number">14</span>:17:01 <span class="token punctuation">[</span>INFO<span class="token punctuation">]</span> encoded CSR
<span class="token number">2022</span>/01/19 <span class="token number">14</span>:17:01 <span class="token punctuation">[</span>INFO<span class="token punctuation">]</span> signed certificate with serial number <span class="token number">313649323783493005105708325985612212721218233369</span>

<span class="token punctuation">[</span>root@harbor certs<span class="token punctuation">]</span><span class="token comment"># ll</span>
total <span class="token number">20</span>
-rw-r--r-- <span class="token number">1</span> root root  <span class="token number">402</span> Jan <span class="token number">19</span> <span class="token number">14</span>:15 ca-config.json
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">1005</span> Jan <span class="token number">19</span> <span class="token number">14</span>:17 ca.csr
-rw-r--r-- <span class="token number">1</span> root root  <span class="token number">281</span> Jan <span class="token number">19</span> <span class="token number">14</span>:16 ca-csr.json
-rw------- <span class="token number">1</span> root root <span class="token number">1679</span> Jan <span class="token number">19</span> <span class="token number">14</span>:17 ca-key.pem
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">1367</span> Jan <span class="token number">19</span> <span class="token number">14</span>:17 ca.pem
<span class="token punctuation">[</span>root@harbor certs<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分发证书文件" tabindex="-1"><a class="header-anchor" href="#分发证书文件" aria-hidden="true">#</a> 分发证书文件</h2><p>将生成的 CA 证书、秘钥文件、配置文件拷贝到所有节点的/opt/k8s/cert 目录下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@kube-master ~<span class="token punctuation">]</span><span class="token comment"># vim /opt/k8s/script/scp_k8scert.sh</span>

<span class="token assign-left variable">NODE_IPS</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&quot;192.168.10.108&quot;</span> <span class="token string">&quot;192.168.10.109&quot;</span> <span class="token string">&quot;192.168.10.110&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">node_ip</span> <span class="token keyword">in</span> <span class="token variable">\${NODE_IPS<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span><span class="token punctuation">;</span><span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;&gt;&gt;&gt; <span class="token variable">\${node_ip}</span>&quot;</span>
    <span class="token function">ssh</span> root@<span class="token variable">\${node_ip}</span> <span class="token string">&quot;mkdir -p /opt/k8s/cert &amp;&amp; chown -R k8s /opt/k8s&quot;</span>
    <span class="token function">scp</span> /opt/k8s/cert/ca*.pem /opt/k8s/cert/ca-config.json k8s@<span class="token variable">\${node_ip}</span>:/opt/k8s/cert
<span class="token keyword">done</span>



<span class="token punctuation">[</span>root@kube-master ~<span class="token punctuation">]</span><span class="token comment"># chmod +x /opt/k8s/script/scp_k8scert.sh &amp;&amp; /opt/k8s/script/scp_k8scert.sh</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,43),c=[i];function l(o,p){return s(),a("div",null,c)}const u=n(t,[["render",l],["__file","二进制部署Kubernetes.html.vue"]]);export{u as default};
