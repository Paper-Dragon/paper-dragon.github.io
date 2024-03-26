import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as e}from"./app-Fw_RVX8b.js";const t={},i=e(`<h1 id="kubernetes的crictl管理命令详解" tabindex="-1"><a class="header-anchor" href="#kubernetes的crictl管理命令详解"><span>Kubernetes的crictl管理命令详解</span></a></h1><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><p>crictl 是 CRI 兼容的容器运行时命令行接口。 你可以使用它来检查和调试 Kubernetes 节点上的容器运行时和应用程序。 crictl 和它的源代码在 cri-tools 代码库。</p><h2 id="安装-crictl" tabindex="-1"><a class="header-anchor" href="#安装-crictl"><span>安装 crictl</span></a></h2><p>下载：https://github.com/kubernetes-sigs/cri-tools/releases</p><h2 id="配置-crictl" tabindex="-1"><a class="header-anchor" href="#配置-crictl"><span>配置 crictl</span></a></h2><p>crictl 命令有几个子命令和运行时参数。 有关详细信息，请使用 crictl help 或 crictl help 获取帮助信息。</p><p>crictl 默认连接到 unix:///var/run/dockershim.sock。 对于其他的运行时，你可以用多种不同的方法设置端点：</p><p>通过设置参数 --runtime-endpoint 和 --image-endpoint 通过设置环境变量 CONTAINER_RUNTIME_ENDPOINT 和 IMAGE_SERVICE_ENDPOINT 通过在配置文件中设置端点 --config=/etc/crictl.yaml 你还可以在连接到服务器并启用或禁用调试时指定超时值，方法是在配置文件中指定 timeout 或 debug 值，或者使用 --timeout 和 --debug 命令行参数。</p><p>要查看或编辑当前配置，请查看或编辑 /etc/crictl.yaml 的内容。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@node-1 kubernetes<span class="token punctuation">]</span><span class="token comment"># cat /etc/crictl.yaml</span>
runtime-endpoint: <span class="token string">&quot;unix:///run/containerd/containerd.sock&quot;</span>
image-endpoint: <span class="token string">&quot;unix:///run/containerd/containerd.sock&quot;</span>
timeout: <span class="token number">10</span>
debug: <span class="token boolean">false</span>
pull-image-on-create: <span class="token boolean">false</span>
disable-pull-on-run: <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="命令用法" tabindex="-1"><a class="header-anchor" href="#命令用法"><span>命令用法</span></a></h2><p>如果使用 crictl 在正在运行的 Kubernetes 集群上创建 Pod 沙盒或容器， kubelet 最终将删除它们。 crictl 不是一个通用的工作流工具，而是一个对调试有用的工具。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#打印某个固定pod</span>
$ crictl pods <span class="token parameter variable">--name</span> nginx-65899c769f-wv2gp
POD ID              CREATED             STATE               NAME                     NAMESPACE           ATTEMPT
4dccb216c4adb       <span class="token number">2</span> minutes ago       Ready               nginx-65899c769f-wv2gp   default             <span class="token number">0</span>


<span class="token comment">#根据标签筛选pod</span>
$ crictl pods <span class="token parameter variable">--label</span> <span class="token assign-left variable">run</span><span class="token operator">=</span>nginx
POD ID              CREATED             STATE               NAME                     NAMESPACE           ATTEMPT
4dccb216c4adb       <span class="token number">2</span> minutes ago       Ready               nginx-65899c769f-wv2gp   default             <span class="token number">0</span>



<span class="token comment">#打印镜像</span>
$ crictl images
IMAGE                                     TAG                 IMAGE ID            SIZE
busybox                                   latest              8c811b4aec35f       <span class="token number">1</span>.15MB
k8s-gcrio.azureedge.net/hyperkube-amd64   v1.10.3             e179bbfe5d238       665MB
k8s-gcrio.azureedge.net/pause-amd64       <span class="token number">3.1</span>                 da86e6ba6ca19       742kB
nginx                                     latest              cd5239a0906a6       109MB



<span class="token comment">#打印某个镜像</span>
$ crictl images nginx
IMAGE               TAG                 IMAGE ID            SIZE
nginx               latest              cd5239a0906a6       109MB



<span class="token comment">#只打印镜像 ID：</span>
$ crictl images <span class="token parameter variable">-q</span>
sha256:8c811b4aec35f259572d0f79207bc0678df4c736eeec50bc9fec37ed936a472a
sha256:e179bbfe5d238de6069f3b03fccbecc3fb4f2019af741bfff1233c4d7b2970c5
sha256:da86e6ba6ca197bf6bc5e9d900febd906b133eaa4750e6bed647b0fbe50ed43e
sha256:cd5239a0906a6ccf0562354852fae04bc5b52d72a2aff9a871ddb6bd57553569


<span class="token comment">#打印容器清单</span>
$ crictl <span class="token function">ps</span> <span class="token parameter variable">-a</span>
CONTAINER ID        IMAGE                                                                                                             CREATED             STATE               NAME                       ATTEMPT
1f73f2d81bf98       busybox@sha256:141c253bc4c3fd0a201d32dc1f493bcf3fff003b6df416dea4f41046e0f37d47                                   <span class="token number">7</span> minutes ago       Running             <span class="token function">sh</span>                         <span class="token number">1</span>
9c5951df22c78       busybox@sha256:141c253bc4c3fd0a201d32dc1f493bcf3fff003b6df416dea4f41046e0f37d47                                   <span class="token number">8</span> minutes ago       Exited              <span class="token function">sh</span>                         <span class="token number">0</span>
87d3992f84f74       nginx@sha256:d0a8828cccb73397acb0073bf34f4d7d8aa315263f1e7806bf8c55d8ac139d5f                                     <span class="token number">8</span> minutes ago       Running             nginx                      <span class="token number">0</span>
1941fb4da154f       k8s-gcrio.azureedge.net/hyperkube-amd64@sha256:00d814b1f7763f4ab5be80c58e98140dfc69df107f2



<span class="token comment">#打印正在运行的容器清单：</span>
$ crictl <span class="token function">ps</span>
CONTAINER ID        IMAGE                                                                                                             CREATED             STATE               NAME                       ATTEMPT
1f73f2d81bf98       busybox@sha256:141c253bc4c3fd0a201d32dc1f493bcf3fff003b6df416dea4f41046e0f37d47                                   <span class="token number">6</span> minutes ago       Running             <span class="token function">sh</span>                         <span class="token number">1</span>
87d3992f84f74       nginx@sha256:d0a8828cccb73397acb0073bf34f4d7d8aa315263f1e7806bf8c55d8ac139d5f                                     <span class="token number">7</span> minutes ago       Running             nginx                      <span class="token number">0</span>
1941fb4da154f       k8s-gcrio.azureedge.net/hyperkube-amd64@sha256:00d814b1f7763f4ab5be80c58e98140dfc69df107f2


<span class="token comment">#容器上执行命令</span>
$ crictl <span class="token builtin class-name">exec</span> <span class="token parameter variable">-i</span> <span class="token parameter variable">-t</span> 1f73f2d81bf98 <span class="token function">ls</span>
bin   dev   etc   home  proc  root  sys   tmp   usr   var



<span class="token comment">#获取容器的所有日志：</span>
$ crictl logs 87d3992f84f74
<span class="token number">10.240</span>.0.96 - - <span class="token punctuation">[</span>06/Jun/2018:02:45:49 +0000<span class="token punctuation">]</span> <span class="token string">&quot;GET / HTTP/1.1&quot;</span> <span class="token number">200</span> <span class="token number">612</span> <span class="token string">&quot;-&quot;</span> <span class="token string">&quot;curl/7.47.0&quot;</span> <span class="token string">&quot;-&quot;</span>
<span class="token number">10.240</span>.0.96 - - <span class="token punctuation">[</span>06/Jun/2018:02:45:50 +0000<span class="token punctuation">]</span> <span class="token string">&quot;GET / HTTP/1.1&quot;</span> <span class="token number">200</span> <span class="token number">612</span> <span class="token string">&quot;-&quot;</span> <span class="token string">&quot;curl/7.47.0&quot;</span> <span class="token string">&quot;-&quot;</span>
<span class="token number">10.240</span>.0.96 - - <span class="token punctuation">[</span>06/Jun/2018:02:45:51 +0000<span class="token punctuation">]</span> <span class="token string">&quot;GET / HTTP/1.1&quot;</span> <span class="token number">200</span> <span class="token number">612</span> <span class="token string">&quot;-&quot;</span> <span class="token string">&quot;curl/7.47.0&quot;</span> <span class="token string">&quot;-&quot;</span>



<span class="token comment">#获取最近的 N 行日志：</span>
crictl logs <span class="token parameter variable">--tail</span><span class="token operator">=</span><span class="token number">1</span> 87d3992f84f74
<span class="token number">10.240</span>.0.96 - - <span class="token punctuation">[</span>06/Jun/2018:02:45:51 +0000<span class="token punctuation">]</span> <span class="token string">&quot;GET / HTTP/1.1&quot;</span> <span class="token number">200</span> <span class="token number">612</span> <span class="token string">&quot;-&quot;</span> <span class="token string">&quot;curl/7.47.0&quot;</span> <span class="token string">&quot;-&quot;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运行-pod-沙盒" tabindex="-1"><a class="header-anchor" href="#运行-pod-沙盒"><span>运行 Pod 沙盒</span></a></h2><p>用 crictl 运行 Pod 沙盒对容器运行时排错很有帮助。 在运行的 Kubernetes 集群中，沙盒会随机地被 kubelet 停止和删除。</p><p>编写下面的 JSON 文件：</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;metadata&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nginx-sandbox&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;namespace&quot;</span><span class="token operator">:</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;attempt&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;uid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hdishd83djaidwnduwk28bcsb&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;logDirectory&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/tmp&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;linux&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 crictl runp 命令应用 JSON 文件并运行沙盒。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ crictl runp pod-config.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="创建容器" tabindex="-1"><a class="header-anchor" href="#创建容器"><span>创建容器</span></a></h2><p>用 crictl 创建容器对容器运行时排错很有帮助。 在运行的 Kubernetes 集群中，沙盒会随机的被 kubelet 停止和删除。</p><p>拉取 busybox 镜像</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>crictl pull busybox
Image is up to <span class="token function">date</span> <span class="token keyword">for</span> busybox@sha256:141c253bc4c3fd0a201d32dc1f493bcf3fff003b6df416dea4f41046e0f37d472
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建-pod-和容器的配置" tabindex="-1"><a class="header-anchor" href="#创建-pod-和容器的配置"><span>创建 Pod 和容器的配置：</span></a></h2><p>Pod 配置：</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;metadata&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nginx-sandbox&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;namespace&quot;</span><span class="token operator">:</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;attempt&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;uid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hdishd83djaidwnduwk28bcsb&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;log_directory&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/tmp&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;linux&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>容器配置：</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;metadata&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;busybox&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;image&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;busybox&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;top&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;log_path&quot;</span><span class="token operator">:</span><span class="token string">&quot;busybox.log&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;linux&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建容器，传递先前创建的 Pod 的 ID、容器配置文件和 Pod 配置文件。返回容器的 ID。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>crictl create f84dd361f8dc51518ed291fbadd6db537b0496536c1d2d6c05ff943ce8c9a54f container-config.json pod-config.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询所有容器并确认新创建的容器状态为 Created。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>crictl <span class="token function">ps</span> <span class="token parameter variable">-a</span>
CONTAINER ID        IMAGE               CREATED             STATE               NAME                ATTEMPT
3e025dd50a72d       busybox             <span class="token number">32</span> seconds ago      Created             busybox             <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启动容器" tabindex="-1"><a class="header-anchor" href="#启动容器"><span>启动容器</span></a></h2><p>要启动容器，要将容器 ID 传给 crictl start：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>crictl start 3e025dd50a72d956c4f14881fbb5b1080c9275674e95fb67f965f6478a957d60
3e025dd50a72d956c4f14881fbb5b1080c9275674e95fb67f965f6478a957d60
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>确认容器的状态为 Running。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>crictl <span class="token function">ps</span>
CONTAINER ID        IMAGE               CREATED              STATE               NAME                ATTEMPT
3e025dd50a72d       busybox             About a minute ago   Running             busybox             <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,38),c=[i];function l(o,p){return s(),a("div",null,c)}const u=n(t,[["render",l],["__file","Kubernetes的crictl管理命令详解.html.vue"]]),b=JSON.parse('{"path":"/note-book/Kubernetes/Kubernetes%E7%9A%84crictl%E7%AE%A1%E7%90%86%E5%91%BD%E4%BB%A4%E8%AF%A6%E8%A7%A3.html","title":"Kubernetes的crictl管理命令详解","lang":"zh-CN","frontmatter":{"description":"Kubernetes的crictl管理命令详解 介绍 crictl 是 CRI 兼容的容器运行时命令行接口。 你可以使用它来检查和调试 Kubernetes 节点上的容器运行时和应用程序。 crictl 和它的源代码在 cri-tools 代码库。 安装 crictl 下载：https://github.com/kubernetes-sigs/cri-...","head":[["meta",{"property":"og:url","content":"https://paper-dragon.github.io/note-book/Kubernetes/Kubernetes%E7%9A%84crictl%E7%AE%A1%E7%90%86%E5%91%BD%E4%BB%A4%E8%AF%A6%E8%A7%A3.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"Kubernetes的crictl管理命令详解"}],["meta",{"property":"og:description","content":"Kubernetes的crictl管理命令详解 介绍 crictl 是 CRI 兼容的容器运行时命令行接口。 你可以使用它来检查和调试 Kubernetes 节点上的容器运行时和应用程序。 crictl 和它的源代码在 cri-tools 代码库。 安装 crictl 下载：https://github.com/kubernetes-sigs/cri-..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-07T07:26:08.000Z"}],["meta",{"property":"article:author","content":"PaperDragon"}],["meta",{"property":"article:modified_time","content":"2024-03-07T07:26:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Kubernetes的crictl管理命令详解\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-07T07:26:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"安装 crictl","slug":"安装-crictl","link":"#安装-crictl","children":[]},{"level":2,"title":"配置 crictl","slug":"配置-crictl","link":"#配置-crictl","children":[]},{"level":2,"title":"命令用法","slug":"命令用法","link":"#命令用法","children":[]},{"level":2,"title":"运行 Pod 沙盒","slug":"运行-pod-沙盒","link":"#运行-pod-沙盒","children":[]},{"level":2,"title":"创建容器","slug":"创建容器","link":"#创建容器","children":[]},{"level":2,"title":"创建 Pod 和容器的配置：","slug":"创建-pod-和容器的配置","link":"#创建-pod-和容器的配置","children":[]},{"level":2,"title":"启动容器","slug":"启动容器","link":"#启动容器","children":[]}],"git":{"createdTime":1709796368000,"updatedTime":1709796368000,"contributors":[{"name":"PaperDragon-SH","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":3.25,"words":974},"filePathRelative":"note-book/Kubernetes/Kubernetes的crictl管理命令详解.md","localizedDate":"2024年3月7日","excerpt":"\\n<h2>介绍</h2>\\n<p>crictl 是 CRI 兼容的容器运行时命令行接口。 你可以使用它来检查和调试 Kubernetes 节点上的容器运行时和应用程序。 crictl 和它的源代码在 cri-tools 代码库。</p>\\n<h2>安装 crictl</h2>\\n<p>下载：https://github.com/kubernetes-sigs/cri-tools/releases</p>\\n<h2>配置 crictl</h2>\\n<p>crictl 命令有几个子命令和运行时参数。 有关详细信息，请使用 crictl help 或 crictl help 获取帮助信息。</p>\\n<p>crictl 默认连接到 unix:///var/run/dockershim.sock。 对于其他的运行时，你可以用多种不同的方法设置端点：</p>","autoDesc":true}');export{u as comp,b as data};
