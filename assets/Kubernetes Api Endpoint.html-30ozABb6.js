import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-PpIpI0x9.js";const t={},i=e(`<h1 id="api规范" tabindex="-1"><a class="header-anchor" href="#api规范" aria-hidden="true">#</a> API规范</h1><h2 id="总体检查" tabindex="-1"><a class="header-anchor" href="#总体检查" aria-hidden="true">#</a> 总体检查</h2><h3 id="livez-verbose-存活检查" tabindex="-1"><a class="header-anchor" href="#livez-verbose-存活检查" aria-hidden="true">#</a> /livez?verbose 存活检查</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> https://127.0.0.1:6443/livez?verbose <span class="token parameter variable">-k</span>

<span class="token comment">#--cacert /etc/kubernetes/pki/ca.pem </span>
<span class="token comment">#--cert /etc/kubernetes/pki/apiserver.pem </span>
<span class="token comment">#--key /etc/kubernetes/pki/apiserver-key.pem</span>

<span class="token comment"># 不加verbose只会打印OK</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示如下结果</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>+<span class="token punctuation">]</span>ping ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>log ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>etcd ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/start-kube-apiserver-admission-initializer ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/generic-apiserver-start-informers ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/priority-and-fairness-config-consumer ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/priority-and-fairness-filter ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/storage-object-count-tracker-hook ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/start-apiextensions-informers ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/start-apiextensions-controllers ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/crd-informer-synced ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/bootstrap-controller ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/rbac/bootstrap-roles ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/scheduling/bootstrap-system-priority-classes ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/priority-and-fairness-config-producer ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/start-cluster-authentication-info-controller ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/aggregator-reload-proxy-client-cert ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/start-kube-aggregator-informers ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/apiservice-registration-controller ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/apiservice-status-available-controller ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/kube-apiserver-autoregistration ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>autoregister-completion ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/apiservice-openapi-controller ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/apiservice-openapiv3-controller ok
livez check passed


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="healthz-verbose-健康检查" tabindex="-1"><a class="header-anchor" href="#healthz-verbose-健康检查" aria-hidden="true">#</a> /healthz?verbose 健康检查</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> https://127.0.0.1:6443/healthz?verbose <span class="token parameter variable">-k</span>

<span class="token comment"># 不加verbose只会打印OK</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示如下结果</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>ping ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>log ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>etcd ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/start-kube-apiserver-admission-initializer ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/generic-apiserver-start-informers ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/priority-and-fairness-config-consumer ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/priority-and-fairness-filter ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/storage-object-count-tracker-hook ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/start-apiextensions-informers ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/start-apiextensions-controllers ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/crd-informer-synced ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/bootstrap-controller ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/rbac/bootstrap-roles ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/scheduling/bootstrap-system-priority-classes ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/priority-and-fairness-config-producer ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/start-cluster-authentication-info-controller ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/aggregator-reload-proxy-client-cert ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/start-kube-aggregator-informers ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/apiservice-registration-controller ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/apiservice-status-available-controller ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/kube-apiserver-autoregistration ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>autoregister-completion ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/apiservice-openapi-controller ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/apiservice-openapiv3-controller ok
healthz check passed

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="readyz-verbose-存活检查" tabindex="-1"><a class="header-anchor" href="#readyz-verbose-存活检查" aria-hidden="true">#</a> /readyz?verbose 存活检查</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> https://127.0.0.1:6443/readyz?verbose <span class="token parameter variable">-k</span>

<span class="token comment"># 不加verbose只会打印OK</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示如下结果</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@k8s-master01 bootstrap<span class="token punctuation">]</span><span class="token comment"># curl --cacert /etc/kubernetes/pki/ca.pem --cert /etc/kubernetes/pki/apiserver.pem --key /etc/kubernetes/pki/apiserver-key.pem</span>
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>ping ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>log ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>etcd ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>etcd-readiness ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>informer-sync ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/start-kube-apiserver-admission-initializer ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/generic-apiserver-start-informers ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/priority-and-fairness-config-consumer ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/priority-and-fairness-filter ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/storage-object-count-tracker-hook ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/start-apiextensions-informers ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/start-apiextensions-controllers ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/crd-informer-synced ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/bootstrap-controller ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/rbac/bootstrap-roles ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/scheduling/bootstrap-system-priority-classes ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/priority-and-fairness-config-producer ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/start-cluster-authentication-info-controller ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/aggregator-reload-proxy-client-cert ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/start-kube-aggregator-informers ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/apiservice-registration-controller ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/apiservice-status-available-controller ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/kube-apiserver-autoregistration ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>autoregister-completion ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/apiservice-openapi-controller ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>poststarthook/apiservice-openapiv3-controller ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>shutdown ok
readyz check passed

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="kube-controller-manager" tabindex="-1"><a class="header-anchor" href="#kube-controller-manager" aria-hidden="true">#</a> kube-controller-manager</h2><h3 id="健康检查-10257" tabindex="-1"><a class="header-anchor" href="#健康检查-10257" aria-hidden="true">#</a> 健康检查 10257</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-k</span> https://11.0.1.201:10257/healthz 
<span class="token function">curl</span> <span class="token parameter variable">-k</span> https://11.0.1.201:10257/healthz?verbose
<span class="token parameter variable">-k</span> 允许不验证ssl证书
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>+<span class="token punctuation">]</span>leaderElection ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>podgc ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>horizontalpodautoscaling ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>csrcleaner ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>clusterrole-aggregation ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>ephemeral-volume ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>endpointslicemirroring ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>garbagecollector ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>daemonset ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>csrapproving ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>attachdetach ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>serviceaccount ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>resourcequota ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>disruption ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>cronjob ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>ttl ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>persistentvolume-binder ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>endpoint ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>pv-protection ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>nodeipam ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>ttl-after-finished ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>tokencleaner ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>csrsigning ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>endpointslice ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>deployment ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>bootstrapsigner ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>nodelifecycle ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>persistentvolume-expander ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>replicationcontroller ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>job ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>replicaset ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>statefulset ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>pvc-protection ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>root-ca-cert-publisher ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>namespace ok
healthz check passed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="kube-scheduler" tabindex="-1"><a class="header-anchor" href="#kube-scheduler" aria-hidden="true">#</a> kube-scheduler</h2><h3 id="健康检查-10259" tabindex="-1"><a class="header-anchor" href="#健康检查-10259" aria-hidden="true">#</a> 健康检查 10259</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-k</span> https://11.0.1.201:10259/healthz?verbose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>+<span class="token punctuation">]</span>leaderElection ok
healthz check passed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="kubelet" tabindex="-1"><a class="header-anchor" href="#kubelet" aria-hidden="true">#</a> kubelet</h2><h3 id="健康检查-10248" tabindex="-1"><a class="header-anchor" href="#健康检查-10248" aria-hidden="true">#</a> 健康检查 10248</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token number">127.0</span>.0.1:10248/healthz?verbose

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">curl</span> <span class="token number">127.0</span>.0.1:10248/healthz?verbose
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>ping ok
healthz check passed

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="只读端口-10255" tabindex="-1"><a class="header-anchor" href="#只读端口-10255" aria-hidden="true">#</a> 只读端口 10255</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> http://11.0.1.201:10255/healthz?verbose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>+<span class="token punctuation">]</span>ping ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>log ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>syncloop ok
healthz check passed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="加密端口-10250" tabindex="-1"><a class="header-anchor" href="#加密端口-10250" aria-hidden="true">#</a> 加密端口 10250</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-k</span> https://11.0.1.201:10250/healthz?verbose <span class="token parameter variable">--cacert</span> /etc/kubernetes/pki/ca.pem  <span class="token parameter variable">--cert</span> /etc/kubernetes/pki/apiserver.pem <span class="token parameter variable">--key</span> /etc/kubernetes/pki/apiserver-key.pem
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>ping ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>log ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>syncloop ok
healthz check passed

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="kube-proxy" tabindex="-1"><a class="header-anchor" href="#kube-proxy" aria-hidden="true">#</a> kube-proxy</h2><h3 id="metrics-10249" tabindex="-1"><a class="header-anchor" href="#metrics-10249" aria-hidden="true">#</a> <strong>metrics</strong> 10249</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token number">127.0</span>.0.1:10249/healthz?verbose
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>ping ok
healthz check passed

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="健康检查-10256" tabindex="-1"><a class="header-anchor" href="#健康检查-10256" aria-hidden="true">#</a> 健康检查 10256</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> http://11.0.1.201:10256/healthz?verbose

<span class="token punctuation">{</span><span class="token string">&quot;lastUpdated&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2022-12-11 15:57:27.988339654 +0800 CST m=+12402.346822757&quot;</span>,<span class="token string">&quot;currentTime&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2022-12-11 15:57:27.988339654 +0800 CST m=+12402.346822757&quot;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37),o=[i];function p(c,l){return s(),a("div",null,o)}const d=n(t,[["render",p],["__file","Kubernetes Api Endpoint.html.vue"]]);export{d as default};
