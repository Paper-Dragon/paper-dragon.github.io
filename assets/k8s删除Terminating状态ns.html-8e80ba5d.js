import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as t}from"./app-32d03bb7.js";const e={},o=t(`<h1 id="k8s删除terminating状态ns" tabindex="-1"><a class="header-anchor" href="#k8s删除terminating状态ns" aria-hidden="true">#</a> k8s删除Terminating状态ns</h1><h1 id="假设你要删掉ns资源-发现一直删不了处于terminating状态" tabindex="-1"><a class="header-anchor" href="#假设你要删掉ns资源-发现一直删不了处于terminating状态" aria-hidden="true">#</a> 假设你要删掉ns资源，发现一直删不了处于terminating状态</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># kubectl get ns</span>
NAME              STATUS        AGE
default           Active        7h11m
kube-flannel      Terminating   6h41m
kube-node-lease   Active        7h11m
kube-public       Active        7h11m
kube-system       Active        7h11m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="首先试一下先把这个ns的所有pod都删掉" tabindex="-1"><a class="header-anchor" href="#首先试一下先把这个ns的所有pod都删掉" aria-hidden="true">#</a> 首先试一下先把这个ns的所有pod都删掉</h2><pre><code>kubectl delete pod --all -n kube-flannel
</code></pre><p>还是不行的话，加个参数强制删除</p><pre><code>kubectl delete pod --grace-period=0 --force -n kube-flannel
</code></pre><p>如果依然是卡死状态，就要使用下面的必杀技了</p><h2 id="首先生成一个tmp-json文件" tabindex="-1"><a class="header-anchor" href="#首先生成一个tmp-json文件" aria-hidden="true">#</a> 首先生成一个tmp.json文件</h2><pre><code>kubectl get namespace kube-flannel -o json &gt; tmp.json
</code></pre><h2 id="然后修改这个json文件tmp-json-把finalizers的kubernetes删掉" tabindex="-1"><a class="header-anchor" href="#然后修改这个json文件tmp-json-把finalizers的kubernetes删掉" aria-hidden="true">#</a> 然后修改这个json文件tmp.json ，把finalizers的kubernetes删掉</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;apiVersion&quot;</span><span class="token operator">:</span> <span class="token string">&quot;v1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;kind&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Namespace&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;metadata&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;annotations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;kubectl.kubernetes.io/last-applied-configuration&quot;</span><span class="token operator">:</span> <span class="token string">&quot;{\\&quot;apiVersion\\&quot;:\\&quot;v1\\&quot;,\\&quot;kind\\&quot;:\\&quot;Namespace\\&quot;,\\&quot;metadata\\&quot;:{\\&quot;annotations\\&quot;:{},\\&quot;labels\\&quot;:{\\&quot;pod-security.kubernetes.io/enforce\\&quot;:\\&quot;privileged\\&quot;},\\&quot;name\\&quot;:\\&quot;kube-flannel\\&quot;}}\\n&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;creationTimestamp&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-09-01T18:52:03Z&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;deletionTimestamp&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-09-02T01:27:51Z&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;labels&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;kubernetes.io/metadata.name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;kube-flannel&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;pod-security.kubernetes.io/enforce&quot;</span><span class="token operator">:</span> <span class="token string">&quot;privileged&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;kube-flannel&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;resourceVersion&quot;</span><span class="token operator">:</span> <span class="token string">&quot;45633&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;uid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;d2ed1197-ce79-4892-b861-68d13a5bade9&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;spec&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;finalizers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;kubernetes&quot;</span>  <span class="token comment">//删除这一行</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;conditions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;lastTransitionTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-09-02T01:27:57Z&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;All resources successfully discovered&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;reason&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ResourcesDiscovered&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;False&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;NamespaceDeletionDiscoveryFailure&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;lastTransitionTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-09-02T01:27:57Z&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;All legacy kube types successfully parsed&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;reason&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ParsedGroupVersions&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;False&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;NamespaceDeletionGroupVersionParsingFailure&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;lastTransitionTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-09-02T01:28:34Z&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Failed to delete all resource types, 1 remaining: unexpected items still remain in namespace: kube-flannel for gvr: /v1, Resource=pods&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;reason&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ContentDeletionFailed&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;True&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;NamespaceDeletionContentFailure&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;lastTransitionTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-09-02T01:27:57Z&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Some resources are remaining: pods. has 1 resource instances&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;reason&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SomeResourcesRemain&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;True&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;NamespaceContentRemaining&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;lastTransitionTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-09-02T01:27:57Z&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;All content-preserving finalizers finished&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;reason&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ContentHasNoFinalizers&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;False&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;NamespaceFinalizersRemaining&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;phase&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Terminating&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="然后本机服务暴露在本地端口的8001端口上" tabindex="-1"><a class="header-anchor" href="#然后本机服务暴露在本地端口的8001端口上" aria-hidden="true">#</a> 然后本机服务暴露在本地端口的8001端口上</h2><pre><code>kubectl proxy

kubectl proxy
Starting to serve on 127.0.0.1:8001
</code></pre><h2 id="新开一个terminal-把修改后的tmp-json到要删除的ns资源目录下" tabindex="-1"><a class="header-anchor" href="#新开一个terminal-把修改后的tmp-json到要删除的ns资源目录下" aria-hidden="true">#</a> 新开一个terminal，把修改后的tmp.json到要删除的ns资源目录下</h2><pre><code>curl -k -H &quot;Content-Type: application/json&quot; -X PUT --data-binary @tmp.json http://127.0.0.1:8001/api/v1/namespaces/kube-flannel/finalize
</code></pre><p>这样就可以删掉了</p>`,17),p=[o];function i(u,l){return s(),a("div",null,p)}const d=n(e,[["render",i],["__file","k8s删除Terminating状态ns.html.vue"]]);export{d as default};
