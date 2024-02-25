import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as e}from"./app-CkYnImq4.js";const t={},o=e(`<h1 id="api规范" tabindex="-1"><a class="header-anchor" href="#api规范"><span>API规范</span></a></h1><h2 id="总体检查" tabindex="-1"><a class="header-anchor" href="#总体检查"><span>总体检查</span></a></h2><h3 id="livez-verbose-存活检查" tabindex="-1"><a class="header-anchor" href="#livez-verbose-存活检查"><span>/livez?verbose 存活检查</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> https://127.0.0.1:6443/livez?verbose <span class="token parameter variable">-k</span>

<span class="token comment">#--cacert /etc/kubernetes/pki/ca.pem </span>
<span class="token comment">#--cert /etc/kubernetes/pki/apiserver.pem </span>
<span class="token comment">#--key /etc/kubernetes/pki/apiserver-key.pem</span>

<span class="token comment"># 不加verbose只会打印OK</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示如下结果</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>+<span class="token punctuation">]</span>ping ok
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


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="healthz-verbose-健康检查" tabindex="-1"><a class="header-anchor" href="#healthz-verbose-健康检查"><span>/healthz?verbose 健康检查</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> https://127.0.0.1:6443/healthz?verbose <span class="token parameter variable">-k</span>

<span class="token comment"># 不加verbose只会打印OK</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示如下结果</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="readyz-verbose-存活检查" tabindex="-1"><a class="header-anchor" href="#readyz-verbose-存活检查"><span>/readyz?verbose 存活检查</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> https://127.0.0.1:6443/readyz?verbose <span class="token parameter variable">-k</span>

<span class="token comment"># 不加verbose只会打印OK</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示如下结果</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@k8s-master01 bootstrap<span class="token punctuation">]</span><span class="token comment"># curl --cacert /etc/kubernetes/pki/ca.pem --cert /etc/kubernetes/pki/apiserver.pem --key /etc/kubernetes/pki/apiserver-key.pem</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="kube-controller-manager" tabindex="-1"><a class="header-anchor" href="#kube-controller-manager"><span>kube-controller-manager</span></a></h2><h3 id="健康检查-10257" tabindex="-1"><a class="header-anchor" href="#健康检查-10257"><span>健康检查 10257</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-k</span> https://11.0.1.201:10257/healthz 
<span class="token function">curl</span> <span class="token parameter variable">-k</span> https://11.0.1.201:10257/healthz?verbose
<span class="token parameter variable">-k</span> 允许不验证ssl证书
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">[</span>+<span class="token punctuation">]</span>leaderElection ok
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="kube-scheduler" tabindex="-1"><a class="header-anchor" href="#kube-scheduler"><span>kube-scheduler</span></a></h2><h3 id="健康检查-10259" tabindex="-1"><a class="header-anchor" href="#健康检查-10259"><span>健康检查 10259</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-k</span> https://11.0.1.201:10259/healthz?verbose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>+<span class="token punctuation">]</span>leaderElection ok
healthz check passed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="kubelet" tabindex="-1"><a class="header-anchor" href="#kubelet"><span>kubelet</span></a></h2><h3 id="健康检查-10248" tabindex="-1"><a class="header-anchor" href="#健康检查-10248"><span>健康检查 10248</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token number">127.0</span>.0.1:10248/healthz?verbose

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code> <span class="token function">curl</span> <span class="token number">127.0</span>.0.1:10248/healthz?verbose
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>ping ok
healthz check passed

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="只读端口-10255" tabindex="-1"><a class="header-anchor" href="#只读端口-10255"><span>只读端口 10255</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> http://11.0.1.201:10255/healthz?verbose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>+<span class="token punctuation">]</span>ping ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>log ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>syncloop ok
healthz check passed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="加密端口-10250" tabindex="-1"><a class="header-anchor" href="#加密端口-10250"><span>加密端口 10250</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-k</span> https://11.0.1.201:10250/healthz?verbose <span class="token parameter variable">--cacert</span> /etc/kubernetes/pki/ca.pem  <span class="token parameter variable">--cert</span> /etc/kubernetes/pki/apiserver.pem <span class="token parameter variable">--key</span> /etc/kubernetes/pki/apiserver-key.pem
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>ping ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>log ok
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>syncloop ok
healthz check passed

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="kube-proxy" tabindex="-1"><a class="header-anchor" href="#kube-proxy"><span>kube-proxy</span></a></h2><h3 id="metrics-10249" tabindex="-1"><a class="header-anchor" href="#metrics-10249"><span><strong>metrics</strong> 10249</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token number">127.0</span>.0.1:10249/healthz?verbose
<span class="token punctuation">[</span>+<span class="token punctuation">]</span>ping ok
healthz check passed

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="健康检查-10256" tabindex="-1"><a class="header-anchor" href="#健康检查-10256"><span>健康检查 10256</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> http://11.0.1.201:10256/healthz?verbose

<span class="token punctuation">{</span><span class="token string">&quot;lastUpdated&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2022-12-11 15:57:27.988339654 +0800 CST m=+12402.346822757&quot;</span>,<span class="token string">&quot;currentTime&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2022-12-11 15:57:27.988339654 +0800 CST m=+12402.346822757&quot;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37),i=[o];function p(c,l){return s(),a("div",null,i)}const d=n(t,[["render",p],["__file","Kubernetes Api Endpoint.html.vue"]]),k=JSON.parse('{"path":"/note-book/Kubernetes/Kubernetes%20Api%20Endpoint.html","title":"API规范","lang":"zh-CN","frontmatter":{"description":"API规范 总体检查 /livez?verbose 存活检查 显示如下结果 /healthz?verbose 健康检查 显示如下结果 /readyz?verbose 存活检查 显示如下结果 kube-controller-manager 健康检查 10257 kube-scheduler 健康检查 10259 结果 kubelet 健康检查 10248...","head":[["meta",{"property":"og:url","content":"https://www.geekery.cn/note-book/Kubernetes/Kubernetes%20Api%20Endpoint.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"API规范"}],["meta",{"property":"og:description","content":"API规范 总体检查 /livez?verbose 存活检查 显示如下结果 /healthz?verbose 健康检查 显示如下结果 /readyz?verbose 存活检查 显示如下结果 kube-controller-manager 健康检查 10257 kube-scheduler 健康检查 10259 结果 kubelet 健康检查 10248..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-13T15:08:38.000Z"}],["meta",{"property":"article:author","content":"PaperDragon"}],["meta",{"property":"article:modified_time","content":"2023-08-13T15:08:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"API规范\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-13T15:08:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"总体检查","slug":"总体检查","link":"#总体检查","children":[{"level":3,"title":"/livez?verbose 存活检查","slug":"livez-verbose-存活检查","link":"#livez-verbose-存活检查","children":[]},{"level":3,"title":"/healthz?verbose  健康检查","slug":"healthz-verbose-健康检查","link":"#healthz-verbose-健康检查","children":[]},{"level":3,"title":"/readyz?verbose 存活检查","slug":"readyz-verbose-存活检查","link":"#readyz-verbose-存活检查","children":[]}]},{"level":2,"title":"kube-controller-manager","slug":"kube-controller-manager","link":"#kube-controller-manager","children":[{"level":3,"title":"健康检查 10257","slug":"健康检查-10257","link":"#健康检查-10257","children":[]}]},{"level":2,"title":"kube-scheduler","slug":"kube-scheduler","link":"#kube-scheduler","children":[{"level":3,"title":"健康检查 10259","slug":"健康检查-10259","link":"#健康检查-10259","children":[]}]},{"level":2,"title":"kubelet","slug":"kubelet","link":"#kubelet","children":[{"level":3,"title":"健康检查 10248","slug":"健康检查-10248","link":"#健康检查-10248","children":[]},{"level":3,"title":"只读端口 10255","slug":"只读端口-10255","link":"#只读端口-10255","children":[]},{"level":3,"title":"加密端口 10250","slug":"加密端口-10250","link":"#加密端口-10250","children":[]}]},{"level":2,"title":"kube-proxy","slug":"kube-proxy","link":"#kube-proxy","children":[{"level":3,"title":"metrics 10249","slug":"metrics-10249","link":"#metrics-10249","children":[]},{"level":3,"title":"健康检查 10256","slug":"健康检查-10256","link":"#健康检查-10256","children":[]}]}],"git":{"createdTime":1691939318000,"updatedTime":1691939318000,"contributors":[{"name":"PaperDragon","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":2.3,"words":691},"filePathRelative":"note-book/Kubernetes/Kubernetes Api Endpoint.md","localizedDate":"2023年8月13日","excerpt":"\\n<h2>总体检查</h2>\\n<h3>/livez?verbose 存活检查</h3>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token function\\">curl</span> https://127.0.0.1:6443/livez?verbose <span class=\\"token parameter variable\\">-k</span>\\n\\n<span class=\\"token comment\\">#--cacert /etc/kubernetes/pki/ca.pem </span>\\n<span class=\\"token comment\\">#--cert /etc/kubernetes/pki/apiserver.pem </span>\\n<span class=\\"token comment\\">#--key /etc/kubernetes/pki/apiserver-key.pem</span>\\n\\n<span class=\\"token comment\\"># 不加verbose只会打印OK</span>\\n</code></pre></div>","autoDesc":true}');export{d as comp,k as data};
