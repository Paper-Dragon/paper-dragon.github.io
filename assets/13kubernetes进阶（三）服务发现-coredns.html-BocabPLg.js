import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as d,o as a,c as l,b as e,e as n,a as t,d as r}from"./app-Cm97alh_.js";const c="/assets/1034759-20191123171511586-952619728-16918406481011-uAu3dDuT.png",v="/assets/1034759-20191123171846178-306539553-16918406503293-Cww3d7IA.png",o="/assets/1034759-20191123172154297-518829231-16918406525315-B-TYjRNQ.png",u="/assets/1034759-20191123173004191-1776516653-16918406560269-DYRhF87g.png",m="/assets/1034759-20191123173122519-900176878-16918406543237-BwUly3C9.png",b="/assets/1034759-20191123174517612-971806757-169184065782711-Bxcu9gqd.png",p={},g=r(`<h1 id="kubernetes进阶-三-服务发现-coredns" tabindex="-1"><a class="header-anchor" href="#kubernetes进阶-三-服务发现-coredns"><span>kubernetes进阶（三）服务发现-coredns</span></a></h1><p>服务发现，说白了就是服务(应用)之间相互定位的过程。</p><p>服务发现需要解决的问题：</p><p>1、服务动态性强--容器在k8s中ip变化或迁移</p><p>2、更新发布频繁--版本迭代快</p><p>3、支持自动伸缩--大促或流量高峰</p><p>我们为了解决pod地址变化的问题，我们之前部署了service资源，将pod地址通过service资源暴露的固定地址，来解决以上问题，</p><p>那么，如何解决service资源名称和service资源暴露出来的集群网络IP做自动的对应呢，从而达到服务的自动发现呢？</p><p>在k8s中，coredns就是为了解决以上问题。</p><p>从coredns开始，我们采用向k8s中交付容器的方式，来部署服务，并且使用声明式的方式，来部署服务。</p><p>首先在hdss7-200上创建一个nginx虚拟主机，用来获取资源配置清单：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>vi /etc/nginx/conf.d/k8s-yaml.od.com.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>server {
    listen       80;
    server_name  k8s-yaml.od.com;

    location / {
        autoindex on;
        default_type text/plain;
        root /data/k8s-yaml;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># mkdir -p /data/k8s-yaml/coredns# nginx -t
# nginx -s reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>添加域名解析：hdss-11上</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># vi /var/named/od.com.zone
在最后添加一条解析记录

$ORIGIN od.com.
$TTL 600        ; 10 minutes
@               IN SOA  dns.od.com. dnsadmin.od.com. (
                                2019061803 ; serial
                                10800      ; refresh (3 hours)
                                900        ; retry (15 minutes)
                                604800     ; expire (1 week)
                                86400      ; minimum (1 day)
                                )
                                NS   dns.od.com.
$TTL 60 ; 1 minute
dns                A    10.4.7.11
harbor             A    10.4.7.200
k8s-yaml           A    10.4.7.200
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># systemctl restart named
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>coredns github地址：</p><p>https://github.com/kubernetes/kubernetes/blob/master/cluster/addons/dns/coredns/coredns.yaml.base</p><p>在hdss7-200上部署coredns：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># cd /data/k8s-yaml/coredns
# docker pull docker.io/coredns/coredns:1.6.1
# docker tag c0f6e815079e harbor.od.com/public/coredns:v1.6.1
# docker push harbor.od.com/public/coredns:v1.6.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后编辑资源配置清单：可以从官网上参考资源配置清单</p><p>1.rbac.yaml--拿到集群相关权限</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># vi rbac.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>apiVersion: v1
kind: ServiceAccount
metadata:
  name: coredns
  namespace: kube-system
  labels:
      kubernetes.io/cluster-service: &quot;true&quot;
      addonmanager.kubernetes.io/mode: Reconcile
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  labels:
    kubernetes.io/bootstrapping: rbac-defaults
    addonmanager.kubernetes.io/mode: Reconcile
  name: system:coredns
rules:
- apiGroups:
  - &quot;&quot;
  resources:
  - endpoints
  - services
  - pods
  - namespaces
  verbs:
  - list
  - watch
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  annotations:
    rbac.authorization.kubernetes.io/autoupdate: &quot;true&quot;
  labels:
    kubernetes.io/bootstrapping: rbac-defaults
    addonmanager.kubernetes.io/mode: EnsureExists
  name: system:coredns
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: system:coredns
subjects:
- kind: ServiceAccount
  name: coredns
  namespace: kube-system
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.cm.yaml--configmap 对集群的相关配置</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># vi cm.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>apiVersion: v1
kind: ConfigMap
metadata:
  name: coredns
  namespace: kube-system
data:
  Corefile: |
    .:53 {
        errors
        log
        health
        ready
        kubernetes cluster.local 192.168.0.0/16  #service资源cluster地址
        forward . 10.4.7.11   #上级DNS地址
        cache 30
        loop
        reload
        loadbalance
       }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.dp.yaml---pod控制器</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># vi dp.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>apiVersion: apps/v1
kind: Deployment
metadata:
  name: coredns
  namespace: kube-system
  labels:
    k8s-app: coredns
    kubernetes.io/name: &quot;CoreDNS&quot;
spec:
  replicas: 1
  selector:
    matchLabels:
      k8s-app: coredns
  template:
    metadata:
      labels:
        k8s-app: coredns
    spec:
      priorityClassName: system-cluster-critical
      serviceAccountName: coredns
      containers:
      - name: coredns
        image: harbor.od.com/public/coredns:v1.6.1
        args:
        - -conf
        - /etc/coredns/Corefile
        volumeMounts:
        - name: config-volume
          mountPath: /etc/coredns
        ports:
        - containerPort: 53
          name: dns
          protocol: UDP
        - containerPort: 53
          name: dns-tcp
          protocol: TCP
        - containerPort: 9153
          name: metrics
          protocol: TCP
        livenessProbe:
          httpGet:
            path: /health
            port: 8080
            scheme: HTTP
          initialDelaySeconds: 60
          timeoutSeconds: 5
          successThreshold: 1
          failureThreshold: 5
      dnsPolicy: Default
      volumes:
        - name: config-volume
          configMap:
            name: coredns
            items:
            - key: Corefile
              path: Corefile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.svc.yaml---service资源</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># vi svc.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>apiVersion: v1
kind: Service
metadata:
  name: coredns
  namespace: kube-system
  labels:
    k8s-app: coredns
    kubernetes.io/cluster-service: &quot;true&quot;
    kubernetes.io/name: &quot;CoreDNS&quot;
spec:
  selector:
    k8s-app: coredns
  clusterIP: 192.168.0.2
  ports:
  - name: dns
    port: 53
    protocol: UDP
  - name: dns-tcp
    port: 53
  - name: metrics
    port: 9153
    protocol: TCP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后使用http请求资源配置清单yaml的方式来创建资源：在任意node节点上创建</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># kubectl create -f http://k8s-yaml.od.com/coredns/rbac.yaml
# kubectl create -f http://k8s-yaml.od.com/coredns/cm.yaml
# kubectl create -f http://k8s-yaml.od.com/coredns/dp.yaml
# kubectl create -f http://k8s-yaml.od.com/coredns/svc.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看运行情况：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># kubectl get all -n kube-system
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>![<img src="`+c+`" alt="img" loading="lazy"></p><p>查看coredns的cluster ip：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># kubectl get svc -o wide -n kube-system
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+v+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>测试coredns：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># dig -t A www.baidu.com @192.168.0.2 +short
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+o+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>看到已经可以解析到百度。</p><p>测试coredns解析service资源名称，首先查看kube-public下是否有service资源，如果没有，创建一个，使用kubectl expose nginx-dp --port=80 -n kube-public</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># kubectl expose nginx-dp --port=80 -n kube-public
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>测试：使用coredns测试解析，需要使用SQDN规则</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># dig -t A nginx-dp.kube-public.svc.cluster.local. @192.168.0.2 +short
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+u+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>可以看到我们没有手动添加任何解析记录，我们nginx-dp的service资源的IP，已经被解析了：</p><figure><img src="'+m+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>那么为什么呢？</p>',54),x={href:"http://ccnuo.com/2019/08/25/CoreDNS%EF%BC%9AKubernetes%E5%86%85%E9%83%A8%E5%9F%9F%E5%90%8D%E8%A7%A3%E6%9E%90%E5%8E%9F%E7%90%86%E3%80%81%E5%BC%8A%E7%AB%AF%E5%8F%8A%E4%BC%98%E5%8C%96%E6%96%B9%E5%BC%8F/",target:"_blank",rel:"noopener noreferrer"},k=e("p",null,"大家可以看到，当我进入到pod内部以后，我们会发现我们的dns地址是我们的coredns地址，以及搜索域：",-1),h=e("figure",null,[e("img",{src:b,alt:"img",tabindex:"0",loading:"lazy"}),e("figcaption",null,"img")],-1),y=e("p",null,"现在，我们已经解决了在集群内部解析的问题，但是我们怎么做到在集群外部访问我们的服务呢？",-1),f=e("p",null,"接下来我们来学习k8s服务暴露。",-1);function _(E,C){const i=d("ExternalLinkIcon");return a(),l("div",null,[g,e("p",null,[n("推荐大家了解一下coredns都做了什么："),e("a",x,[n("Kubernetes内部域名解析原理、弊端及优化方式"),t(i)])]),k,h,y,f])}const P=s(p,[["render",_],["__file","13kubernetes进阶（三）服务发现-coredns.html.vue"]]),D=JSON.parse('{"path":"/note-book/Kubernetes/13kubernetes%E8%BF%9B%E9%98%B6%EF%BC%88%E4%B8%89%EF%BC%89%E6%9C%8D%E5%8A%A1%E5%8F%91%E7%8E%B0-coredns.html","title":"kubernetes进阶（三）服务发现-coredns","lang":"zh-CN","frontmatter":{"description":"kubernetes进阶（三）服务发现-coredns 服务发现，说白了就是服务(应用)之间相互定位的过程。 服务发现需要解决的问题： 1、服务动态性强--容器在k8s中ip变化或迁移 2、更新发布频繁--版本迭代快 3、支持自动伸缩--大促或流量高峰 我们为了解决pod地址变化的问题，我们之前部署了service资源，将pod地址通过service资...","head":[["meta",{"property":"og:url","content":"https://www.geekery.cn/note-book/Kubernetes/13kubernetes%E8%BF%9B%E9%98%B6%EF%BC%88%E4%B8%89%EF%BC%89%E6%9C%8D%E5%8A%A1%E5%8F%91%E7%8E%B0-coredns.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"kubernetes进阶（三）服务发现-coredns"}],["meta",{"property":"og:description","content":"kubernetes进阶（三）服务发现-coredns 服务发现，说白了就是服务(应用)之间相互定位的过程。 服务发现需要解决的问题： 1、服务动态性强--容器在k8s中ip变化或迁移 2、更新发布频繁--版本迭代快 3、支持自动伸缩--大促或流量高峰 我们为了解决pod地址变化的问题，我们之前部署了service资源，将pod地址通过service资..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-07T08:15:04.000Z"}],["meta",{"property":"article:author","content":"PaperDragon"}],["meta",{"property":"article:modified_time","content":"2024-03-07T08:15:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"kubernetes进阶（三）服务发现-coredns\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-07T08:15:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[],"git":{"createdTime":1709799304000,"updatedTime":1709799304000,"contributors":[{"name":"PaperDragon-SH","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":3.78,"words":1134},"filePathRelative":"note-book/Kubernetes/13kubernetes进阶（三）服务发现-coredns.md","localizedDate":"2024年3月7日","excerpt":"\\n<p>服务发现，说白了就是服务(应用)之间相互定位的过程。</p>\\n<p>服务发现需要解决的问题：</p>\\n<p>1、服务动态性强--容器在k8s中ip变化或迁移</p>\\n<p>2、更新发布频繁--版本迭代快</p>\\n<p>3、支持自动伸缩--大促或流量高峰</p>\\n<p>我们为了解决pod地址变化的问题，我们之前部署了service资源，将pod地址通过service资源暴露的固定地址，来解决以上问题，</p>\\n<p>那么，如何解决service资源名称和service资源暴露出来的集群网络IP做自动的对应呢，从而达到服务的自动发现呢？</p>\\n<p>在k8s中，coredns就是为了解决以上问题。</p>","autoDesc":true}');export{P as comp,D as data};
