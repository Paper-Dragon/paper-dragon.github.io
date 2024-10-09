import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{aj as a,ao as e,am as i}from"./app-COjiYc5s.js";const l="/assets/1034759-20191123171511586-952619728-16918406481011-uAu3dDuT.png",p="/assets/1034759-20191123171846178-306539553-16918406503293-Cww3d7IA.png",d="/assets/1034759-20191123172154297-518829231-16918406525315-B-TYjRNQ.png",c="/assets/1034759-20191123173004191-1776516653-16918406560269-DYRhF87g.png",r="/assets/1034759-20191123173122519-900176878-16918406543237-BwUly3C9.png",t="/assets/1034759-20191123174517612-971806757-169184065782711-Bxcu9gqd.png",v={};function o(m,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h1 id="kubernetes进阶-三-服务发现-coredns" tabindex="-1"><a class="header-anchor" href="#kubernetes进阶-三-服务发现-coredns"><span>kubernetes进阶（三）服务发现-coredns</span></a></h1><p>服务发现，说白了就是服务(应用)之间相互定位的过程。</p><p>服务发现需要解决的问题：</p><p>1、服务动态性强--容器在k8s中ip变化或迁移</p><p>2、更新发布频繁--版本迭代快</p><p>3、支持自动伸缩--大促或流量高峰</p><p>我们为了解决pod地址变化的问题，我们之前部署了service资源，将pod地址通过service资源暴露的固定地址，来解决以上问题，</p><p>那么，如何解决service资源名称和service资源暴露出来的集群网络IP做自动的对应呢，从而达到服务的自动发现呢？</p><p>在k8s中，coredns就是为了解决以上问题。</p><p>从coredns开始，我们采用向k8s中交付容器的方式，来部署服务，并且使用声明式的方式，来部署服务。</p><p>首先在hdss7-200上创建一个nginx虚拟主机，用来获取资源配置清单：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>vi /etc/nginx/conf.d/k8s-yaml.od.com.conf</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>server {</span></span>
<span class="line"><span>    listen       80;</span></span>
<span class="line"><span>    server_name  k8s-yaml.od.com;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        autoindex on;</span></span>
<span class="line"><span>        default_type text/plain;</span></span>
<span class="line"><span>        root /data/k8s-yaml;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># mkdir -p /data/k8s-yaml/coredns# nginx -t</span></span>
<span class="line"><span># nginx -s reload</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>添加域名解析：hdss-11上</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># vi /var/named/od.com.zone</span></span>
<span class="line"><span>在最后添加一条解析记录</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ORIGIN od.com.</span></span>
<span class="line"><span>$TTL 600        ; 10 minutes</span></span>
<span class="line"><span>@               IN SOA  dns.od.com. dnsadmin.od.com. (</span></span>
<span class="line"><span>                                2019061803 ; serial</span></span>
<span class="line"><span>                                10800      ; refresh (3 hours)</span></span>
<span class="line"><span>                                900        ; retry (15 minutes)</span></span>
<span class="line"><span>                                604800     ; expire (1 week)</span></span>
<span class="line"><span>                                86400      ; minimum (1 day)</span></span>
<span class="line"><span>                                )</span></span>
<span class="line"><span>                                NS   dns.od.com.</span></span>
<span class="line"><span>$TTL 60 ; 1 minute</span></span>
<span class="line"><span>dns                A    10.4.7.11</span></span>
<span class="line"><span>harbor             A    10.4.7.200</span></span>
<span class="line"><span>k8s-yaml           A    10.4.7.200</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># systemctl restart named</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>coredns github地址：</p><p>https://github.com/kubernetes/kubernetes/blob/master/cluster/addons/dns/coredns/coredns.yaml.base</p><p>在hdss7-200上部署coredns：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># cd /data/k8s-yaml/coredns</span></span>
<span class="line"><span># docker pull docker.io/coredns/coredns:1.6.1</span></span>
<span class="line"><span># docker tag c0f6e815079e harbor.od.com/public/coredns:v1.6.1</span></span>
<span class="line"><span># docker push harbor.od.com/public/coredns:v1.6.1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后编辑资源配置清单：可以从官网上参考资源配置清单</p><p>1.rbac.yaml--拿到集群相关权限</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># vi rbac.yaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>apiVersion: v1</span></span>
<span class="line"><span>kind: ServiceAccount</span></span>
<span class="line"><span>metadata:</span></span>
<span class="line"><span>  name: coredns</span></span>
<span class="line"><span>  namespace: kube-system</span></span>
<span class="line"><span>  labels:</span></span>
<span class="line"><span>      kubernetes.io/cluster-service: &quot;true&quot;</span></span>
<span class="line"><span>      addonmanager.kubernetes.io/mode: Reconcile</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>apiVersion: rbac.authorization.k8s.io/v1</span></span>
<span class="line"><span>kind: ClusterRole</span></span>
<span class="line"><span>metadata:</span></span>
<span class="line"><span>  labels:</span></span>
<span class="line"><span>    kubernetes.io/bootstrapping: rbac-defaults</span></span>
<span class="line"><span>    addonmanager.kubernetes.io/mode: Reconcile</span></span>
<span class="line"><span>  name: system:coredns</span></span>
<span class="line"><span>rules:</span></span>
<span class="line"><span>- apiGroups:</span></span>
<span class="line"><span>  - &quot;&quot;</span></span>
<span class="line"><span>  resources:</span></span>
<span class="line"><span>  - endpoints</span></span>
<span class="line"><span>  - services</span></span>
<span class="line"><span>  - pods</span></span>
<span class="line"><span>  - namespaces</span></span>
<span class="line"><span>  verbs:</span></span>
<span class="line"><span>  - list</span></span>
<span class="line"><span>  - watch</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>apiVersion: rbac.authorization.k8s.io/v1</span></span>
<span class="line"><span>kind: ClusterRoleBinding</span></span>
<span class="line"><span>metadata:</span></span>
<span class="line"><span>  annotations:</span></span>
<span class="line"><span>    rbac.authorization.kubernetes.io/autoupdate: &quot;true&quot;</span></span>
<span class="line"><span>  labels:</span></span>
<span class="line"><span>    kubernetes.io/bootstrapping: rbac-defaults</span></span>
<span class="line"><span>    addonmanager.kubernetes.io/mode: EnsureExists</span></span>
<span class="line"><span>  name: system:coredns</span></span>
<span class="line"><span>roleRef:</span></span>
<span class="line"><span>  apiGroup: rbac.authorization.k8s.io</span></span>
<span class="line"><span>  kind: ClusterRole</span></span>
<span class="line"><span>  name: system:coredns</span></span>
<span class="line"><span>subjects:</span></span>
<span class="line"><span>- kind: ServiceAccount</span></span>
<span class="line"><span>  name: coredns</span></span>
<span class="line"><span>  namespace: kube-system</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.cm.yaml--configmap 对集群的相关配置</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># vi cm.yaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>apiVersion: v1</span></span>
<span class="line"><span>kind: ConfigMap</span></span>
<span class="line"><span>metadata:</span></span>
<span class="line"><span>  name: coredns</span></span>
<span class="line"><span>  namespace: kube-system</span></span>
<span class="line"><span>data:</span></span>
<span class="line"><span>  Corefile: |</span></span>
<span class="line"><span>    .:53 {</span></span>
<span class="line"><span>        errors</span></span>
<span class="line"><span>        log</span></span>
<span class="line"><span>        health</span></span>
<span class="line"><span>        ready</span></span>
<span class="line"><span>        kubernetes cluster.local 192.168.0.0/16  #service资源cluster地址</span></span>
<span class="line"><span>        forward . 10.4.7.11   #上级DNS地址</span></span>
<span class="line"><span>        cache 30</span></span>
<span class="line"><span>        loop</span></span>
<span class="line"><span>        reload</span></span>
<span class="line"><span>        loadbalance</span></span>
<span class="line"><span>       }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.dp.yaml---pod控制器</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># vi dp.yaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>apiVersion: apps/v1</span></span>
<span class="line"><span>kind: Deployment</span></span>
<span class="line"><span>metadata:</span></span>
<span class="line"><span>  name: coredns</span></span>
<span class="line"><span>  namespace: kube-system</span></span>
<span class="line"><span>  labels:</span></span>
<span class="line"><span>    k8s-app: coredns</span></span>
<span class="line"><span>    kubernetes.io/name: &quot;CoreDNS&quot;</span></span>
<span class="line"><span>spec:</span></span>
<span class="line"><span>  replicas: 1</span></span>
<span class="line"><span>  selector:</span></span>
<span class="line"><span>    matchLabels:</span></span>
<span class="line"><span>      k8s-app: coredns</span></span>
<span class="line"><span>  template:</span></span>
<span class="line"><span>    metadata:</span></span>
<span class="line"><span>      labels:</span></span>
<span class="line"><span>        k8s-app: coredns</span></span>
<span class="line"><span>    spec:</span></span>
<span class="line"><span>      priorityClassName: system-cluster-critical</span></span>
<span class="line"><span>      serviceAccountName: coredns</span></span>
<span class="line"><span>      containers:</span></span>
<span class="line"><span>      - name: coredns</span></span>
<span class="line"><span>        image: harbor.od.com/public/coredns:v1.6.1</span></span>
<span class="line"><span>        args:</span></span>
<span class="line"><span>        - -conf</span></span>
<span class="line"><span>        - /etc/coredns/Corefile</span></span>
<span class="line"><span>        volumeMounts:</span></span>
<span class="line"><span>        - name: config-volume</span></span>
<span class="line"><span>          mountPath: /etc/coredns</span></span>
<span class="line"><span>        ports:</span></span>
<span class="line"><span>        - containerPort: 53</span></span>
<span class="line"><span>          name: dns</span></span>
<span class="line"><span>          protocol: UDP</span></span>
<span class="line"><span>        - containerPort: 53</span></span>
<span class="line"><span>          name: dns-tcp</span></span>
<span class="line"><span>          protocol: TCP</span></span>
<span class="line"><span>        - containerPort: 9153</span></span>
<span class="line"><span>          name: metrics</span></span>
<span class="line"><span>          protocol: TCP</span></span>
<span class="line"><span>        livenessProbe:</span></span>
<span class="line"><span>          httpGet:</span></span>
<span class="line"><span>            path: /health</span></span>
<span class="line"><span>            port: 8080</span></span>
<span class="line"><span>            scheme: HTTP</span></span>
<span class="line"><span>          initialDelaySeconds: 60</span></span>
<span class="line"><span>          timeoutSeconds: 5</span></span>
<span class="line"><span>          successThreshold: 1</span></span>
<span class="line"><span>          failureThreshold: 5</span></span>
<span class="line"><span>      dnsPolicy: Default</span></span>
<span class="line"><span>      volumes:</span></span>
<span class="line"><span>        - name: config-volume</span></span>
<span class="line"><span>          configMap:</span></span>
<span class="line"><span>            name: coredns</span></span>
<span class="line"><span>            items:</span></span>
<span class="line"><span>            - key: Corefile</span></span>
<span class="line"><span>              path: Corefile</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.svc.yaml---service资源</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># vi svc.yaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>apiVersion: v1</span></span>
<span class="line"><span>kind: Service</span></span>
<span class="line"><span>metadata:</span></span>
<span class="line"><span>  name: coredns</span></span>
<span class="line"><span>  namespace: kube-system</span></span>
<span class="line"><span>  labels:</span></span>
<span class="line"><span>    k8s-app: coredns</span></span>
<span class="line"><span>    kubernetes.io/cluster-service: &quot;true&quot;</span></span>
<span class="line"><span>    kubernetes.io/name: &quot;CoreDNS&quot;</span></span>
<span class="line"><span>spec:</span></span>
<span class="line"><span>  selector:</span></span>
<span class="line"><span>    k8s-app: coredns</span></span>
<span class="line"><span>  clusterIP: 192.168.0.2</span></span>
<span class="line"><span>  ports:</span></span>
<span class="line"><span>  - name: dns</span></span>
<span class="line"><span>    port: 53</span></span>
<span class="line"><span>    protocol: UDP</span></span>
<span class="line"><span>  - name: dns-tcp</span></span>
<span class="line"><span>    port: 53</span></span>
<span class="line"><span>  - name: metrics</span></span>
<span class="line"><span>    port: 9153</span></span>
<span class="line"><span>    protocol: TCP</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后使用http请求资源配置清单yaml的方式来创建资源：在任意node节点上创建</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># kubectl create -f http://k8s-yaml.od.com/coredns/rbac.yaml</span></span>
<span class="line"><span># kubectl create -f http://k8s-yaml.od.com/coredns/cm.yaml</span></span>
<span class="line"><span># kubectl create -f http://k8s-yaml.od.com/coredns/dp.yaml</span></span>
<span class="line"><span># kubectl create -f http://k8s-yaml.od.com/coredns/svc.yaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看运行情况：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># kubectl get all -n kube-system</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="`+l+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>查看coredns的cluster ip：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># kubectl get svc -o wide -n kube-system</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+p+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>测试coredns：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># dig -t A www.baidu.com @192.168.0.2 +short</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+d+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>看到已经可以解析到百度。</p><p>测试coredns解析service资源名称，首先查看kube-public下是否有service资源，如果没有，创建一个，使用kubectl expose nginx-dp --port=80 -n kube-public</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># kubectl expose nginx-dp --port=80 -n kube-public</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>测试：使用coredns测试解析，需要使用SQDN规则</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># dig -t A nginx-dp.kube-public.svc.cluster.local. @192.168.0.2 +short</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+c+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>可以看到我们没有手动添加任何解析记录，我们nginx-dp的service资源的IP，已经被解析了：</p><figure><img src="'+r+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>那么为什么呢？</p><p>推荐大家了解一下coredns都做了什么：<a href="http://ccnuo.com/2019/08/25/CoreDNS%EF%BC%9AKubernetes%E5%86%85%E9%83%A8%E5%9F%9F%E5%90%8D%E8%A7%A3%E6%9E%90%E5%8E%9F%E7%90%86%E3%80%81%E5%BC%8A%E7%AB%AF%E5%8F%8A%E4%BC%98%E5%8C%96%E6%96%B9%E5%BC%8F/" target="_blank" rel="noopener noreferrer">Kubernetes内部域名解析原理、弊端及优化方式</a></p><p>大家可以看到，当我进入到pod内部以后，我们会发现我们的dns地址是我们的coredns地址，以及搜索域：</p><figure><img src="'+t+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>现在，我们已经解决了在集群内部解析的问题，但是我们怎么做到在集群外部访问我们的服务呢？</p><p>接下来我们来学习k8s服务暴露。</p>',59)]))}const h=n(v,[["render",o],["__file","13kubernetes进阶（三）服务发现-coredns.html.vue"]]),k=JSON.parse('{"path":"/note-book/Kubernetes/13kubernetes%E8%BF%9B%E9%98%B6%EF%BC%88%E4%B8%89%EF%BC%89%E6%9C%8D%E5%8A%A1%E5%8F%91%E7%8E%B0-coredns.html","title":"kubernetes进阶（三）服务发现-coredns","lang":"zh-CN","frontmatter":{"description":"kubernetes进阶（三）服务发现-coredns 服务发现，说白了就是服务(应用)之间相互定位的过程。 服务发现需要解决的问题： 1、服务动态性强--容器在k8s中ip变化或迁移 2、更新发布频繁--版本迭代快 3、支持自动伸缩--大促或流量高峰 我们为了解决pod地址变化的问题，我们之前部署了service资源，将pod地址通过service资...","head":[["meta",{"property":"og:url","content":"https://www.geekery.cn/note-book/Kubernetes/13kubernetes%E8%BF%9B%E9%98%B6%EF%BC%88%E4%B8%89%EF%BC%89%E6%9C%8D%E5%8A%A1%E5%8F%91%E7%8E%B0-coredns.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"kubernetes进阶（三）服务发现-coredns"}],["meta",{"property":"og:description","content":"kubernetes进阶（三）服务发现-coredns 服务发现，说白了就是服务(应用)之间相互定位的过程。 服务发现需要解决的问题： 1、服务动态性强--容器在k8s中ip变化或迁移 2、更新发布频繁--版本迭代快 3、支持自动伸缩--大促或流量高峰 我们为了解决pod地址变化的问题，我们之前部署了service资源，将pod地址通过service资..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T08:41:17.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T08:41:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"kubernetes进阶（三）服务发现-coredns\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-25T08:41:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[],"git":{"createdTime":1691939318000,"updatedTime":1711356077000,"contributors":[{"name":"PaperDragon-SH","email":"2678885646@qq.com","commits":2}]},"readingTime":{"minutes":3.78,"words":1134},"filePathRelative":"note-book/Kubernetes/13kubernetes进阶（三）服务发现-coredns.md","localizedDate":"2023年8月13日","excerpt":"\\n<p>服务发现，说白了就是服务(应用)之间相互定位的过程。</p>\\n<p>服务发现需要解决的问题：</p>\\n<p>1、服务动态性强--容器在k8s中ip变化或迁移</p>\\n<p>2、更新发布频繁--版本迭代快</p>\\n<p>3、支持自动伸缩--大促或流量高峰</p>\\n<p>我们为了解决pod地址变化的问题，我们之前部署了service资源，将pod地址通过service资源暴露的固定地址，来解决以上问题，</p>\\n<p>那么，如何解决service资源名称和service资源暴露出来的集群网络IP做自动的对应呢，从而达到服务的自动发现呢？</p>\\n<p>在k8s中，coredns就是为了解决以上问题。</p>","autoDesc":true}');export{h as comp,k as data};
