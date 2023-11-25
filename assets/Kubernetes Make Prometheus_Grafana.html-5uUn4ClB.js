import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as u,e,b as n}from"./app-Vcup_8i9.js";const l={},t=e('<h1 id="kubernetes-make-prometheus-grafana" tabindex="-1"><a class="header-anchor" href="#kubernetes-make-prometheus-grafana" aria-hidden="true">#</a> Kubernetes Make Prometheus+Grafana</h1><h3 id="kubernetes-create-prometheus-grafana" tabindex="-1"><a class="header-anchor" href="#kubernetes-create-prometheus-grafana" aria-hidden="true">#</a> Kubernetes Create Prometheus+Grafana</h3><h4 id="一、背景" tabindex="-1"><a class="header-anchor" href="#一、背景" aria-hidden="true">#</a> 一、背景</h4><p>Prometheus作为一个采用tidb时序数据库为数据存储的监控软件，因为嵌合当前主流容器化，所以一直处于广泛使用的状态，常用监控面板grafana，可以接收多种dataresource，结合数据源支持的语法可以对数据进行分析，实时展示监控值。</p><h4 id="二、准备工作" tabindex="-1"><a class="header-anchor" href="#二、准备工作" aria-hidden="true">#</a> 二、准备工作</h4><h5 id="_1、主机分布" tabindex="-1"><a class="header-anchor" href="#_1、主机分布" aria-hidden="true">#</a> 1、主机分布</h5>',6),d=n("th",{colspan:"1",rowspan:"1"},"192.168.52.135(master)",-1),o=n("th",{colspan:"1",rowspan:"1"},"nfs-server",-1),v=n("p",null,"nfs-server",-1),a=n("td",{colspan:"1",rowspan:"1"},"192.168.52.136(node01)",-1),r=n("td",{colspan:"1",rowspan:"1"},"nfs-client",-1),m=n("p",null,"nfs-client",-1),c=n("td",{colspan:"1",rowspan:"1"},"192.168.52.137(node02)",-1),q=n("td",{colspan:"1",rowspan:"1"},"nfs-client",-1),b=e(`<p>nfs-client</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@master ~]# kubectl get node  --show-labels
NAME     STATUS   ROLES                  AGE     VERSION   LABELS
master   Ready    control-plane,master   5h32m   v1.21.3   beta.kubernetes.io/arch=amd64,beta.kubernetes.io/os=linux,kubernetes.io/arch=amd64,kubernetes.io/hostname=master,kubernetes.io/os=linux,node-exporter=true,node-role.kubernetes.io/control-plane=,node-role.kubernetes.io/master=,node.kubernetes.io/exclude-from-external-load-balancers=
node01   Ready    node                   3h7m    v1.21.3   beta.kubernetes.io/arch=amd64,beta.kubernetes.io/os=linux,kubernetes.io/arch=amd64,kubernetes.io/hostname=node01,kubernetes.io/os=linux,node-exporter=true,node-role.kubernetes.io/node=node01
node02   Ready    node                   3h6m    v1.21.3   beta.kubernetes.io/arch=amd64,beta.kubernetes.io/os=linux,kubernetes.io/arch=amd64,kubernetes.io/hostname=node02,kubernetes.io/os=linux,node-exporter=true,node-role.kubernetes.io/node=node02
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>kubeadm装机，roles不会显示node，操作如下即可。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@master ~]# kubectl label node node01 node-role.kubernetes.io/node=node01
[root@master ~]# kubectl label node node02 node-role.kubernetes.io/node=node02
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@master ~]# kubectl get pods -A
NAMESPACE      NAME                             READY   STATUS    RESTARTS   AGE
kube-flannel   kube-flannel-ds-94z57            1/1     Running   1          3h5m
kube-flannel   kube-flannel-ds-v986m            1/1     Running   1          3h5m
kube-flannel   kube-flannel-ds-ztdz5            1/1     Running   1          3h5m
kube-system    coredns-59d64cd4d4-bhm59         1/1     Running   1          5h35m
kube-system    coredns-59d64cd4d4-wpk7n         1/1     Running   1          5h35m
kube-system    etcd-master                      1/1     Running   2          5h35m
kube-system    kube-apiserver-master            1/1     Running   2          5h35m
kube-system    kube-controller-manager-master   1/1     Running   1          174m
kube-system    kube-proxy-2rpld                 1/1     Running   1          3h10m
kube-system    kube-proxy-8fpbj                 1/1     Running   2          5h35m
kube-system    kube-proxy-gvwm5                 1/1     Running   1          3h10m
kube-system    kube-scheduler-master            1/1     Running   1          175m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、master检查</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#查询master是否正常 
kubectl get cs 
#若为unhealthy 
vim /etc/kubernetes/manifests/kube-scheduler.yaml 
vim /etc/kubernetes/manifests/kube-controller-manager.yaml
 #将- --port=0注释掉
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3、时间校准" tabindex="-1"><a class="header-anchor" href="#_3、时间校准" aria-hidden="true">#</a> 3、时间校准</h5><p>因为Prometheus对时间一致要求很高，为保证浏览器和服务器时间一致，需要如下操作。所有节点都需要操作。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@master ~]# yum -y install ntp ntpdate
[root@master ~]# ntpdate ntp1.aliyun.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="三、nfs本地存储" tabindex="-1"><a class="header-anchor" href="#三、nfs本地存储" aria-hidden="true">#</a> 三、nfs本地存储</h4><h5 id="_1、部署nfs" tabindex="-1"><a class="header-anchor" href="#_1、部署nfs" aria-hidden="true">#</a> 1、部署NFS</h5><p>192.168.52.135为nfs-server，其他俩个node为client，所有节点都需要安装，若node节点未安装，node会因无client挂载nfs失败。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@master ~]# yum -y install nfs-utils
[root@master ~]# systemctl enable nfs
[root@master ~]# systemctl start nfs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2、创建共享目录" tabindex="-1"><a class="header-anchor" href="#_2、创建共享目录" aria-hidden="true">#</a> 2、创建共享目录</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@master ~]# mkdir -p /data/nfs/{prometheus,grafana,grafana-plugin}
[root@master ~]# chown -R 65534.65534 /data/nfs/prometheus           #这里非常重要，否则prometheus无法启动，即便是设置了777权限也会报错
[root@master ~]# chmod 777 /data/nfs/{prometheus,grafana,grafana-plugin}    #这里需要打开所有用户可读写
[root@master nfs]# ll
总用量 0
drwxrwxrwx 4 root      root      28 4月  12 16:44 grafana
drwxrwxrwx 4 root      root      50 4月  12 17:37 grafana-plugin
drwxrwxrwx 4 nfsnobody nfsnobody 70 4月  12 15:33 prometheus
[root@master nfs]# pwd
/data/nfs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3、设置nfs共享" tabindex="-1"><a class="header-anchor" href="#_3、设置nfs共享" aria-hidden="true">#</a> 3、设置nfs共享</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@master ~]# echo &quot;/data/nfs *(rw,no_root_squash,async,insecure)&quot;&amp;gt;&amp;gt;/etc/exports
[root@master ~]# systemctl restart nfs
[root@master ~]# exportfs
/data/nfs       &amp;lt;world&amp;gt;
[root@master ~]# showmount -e 127.0.0.1
Export list for 127.0.0.1:
/data/nfs *
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>四、部署node-exporter</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@master ~]# cat node-exporter.yaml
---
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: node-exporter
  namespace: kube-system
  labels:
    k8s-app: node-exporter
spec:
  selector:
    matchLabels:
      k8s-app: node-exporter
  template:
    metadata:
      labels:
        k8s-app: node-exporter
    spec:
      hostNetwork: true
      hostPID: true
      hostIPC: true
      tolerations:
      - key: &quot;disk&quot;
        operator: &quot;Equal&quot;
        value: &quot;ssd&quot;
        effect: &quot;NoSchedule&quot;
      - key: &quot;node-role.kubernetes.io/master&quot;
        operator: &quot;Equal&quot;
        value: &quot;true&quot;
        effect: &quot;PreferNoSchedule&quot;
      - key: &quot;esnode&quot;
        operator: &quot;Equal&quot;
        value: &quot;es&quot;
        effect: &quot;NoSchedule&quot;
      containers:
      - image: prom/node-exporter
        name: node-exporter
        resources:
          requests:
            cpu: 128m
        securityContext:
          privileged: true
        args:
        - --path.procfs
        - /host/proc
        - --path.sysfs
        - /host/sys
        - --collector.filesystem.ignored-mount-points
        - &#39;&quot;^/(sys|proc|dev|host|etc)($|/)&quot;&#39;
        volumeMounts:
        - name: dev
          mountPath: /host/dev
        - name: proc
          mountPath: /host/proc
        - name: sys
          mountPath: /host/sys
        - name: rootfs
          mountPath: /host/rootfs
        ports:
        - containerPort: 9100
          protocol: TCP
          name: http
      volumes:
        - name: proc
          hostPath:
            path: /proc
        - name: dev
          hostPath:
            path: /dev
        - name: sys
          hostPath:
            path: /sys
        - name: rootfs
          hostPath:
            path: /
[root@master ~]# kubectl apply -f node-exporter.yaml
[root@master ~]# kubectl get pods -A | grep node
kube-system    node-exporter-4ltj5              1/1     Running   0          111m
kube-system    node-exporter-tbv66              1/1     Running   0          111m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述生成了俩个pod，master节点没有数据上报，这时</p><ul><li>key: &quot;node-role.kubernetes.io/master&quot; operator: &quot;Equal&quot; value: &quot;true&quot; effect: &quot;PreferNoSchedule&quot; 这个就起作用了，master做了taints限制。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@master ~]# kubectl describe node master | grep Taints
Taints:             node-role.kubernetes.io/master:NoSchedule
[root@master ~]# kubectl taint node master node-role.kubernetes.io/master:NoSchedule-
node/master untainted
[root@master ~]# kubectl taint node master node-role.kubernetes.io/master:NoSchedule
node/master tainted
[root@master ~]# kubectl get pods -A | grep node
kube-system    node-exporter-4ltj5              1/1     Running   0          115m
kube-system    node-exporter-7522q              1/1     Running   0          113m
kube-system    node-exporter-tbv66              1/1     Running   0          115m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="五、部署prometheus" tabindex="-1"><a class="header-anchor" href="#五、部署prometheus" aria-hidden="true">#</a> 五、部署Prometheus</h4><h5 id="_1、configmap资源" tabindex="-1"><a class="header-anchor" href="#_1、configmap资源" aria-hidden="true">#</a> 1、configmap资源</h5><p>生成configmap，便于挂载prometheus.yml内容</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@master ~]# cat prometheus-configmap.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: prometheus-config
  namespace: kube-system
data:
  prometheus.yml: |
    global:
      scrape_interval:     15s
      evaluation_interval: 15s
    scrape_configs:

    - job_name: prometheus
      honor_timestamps: true
      scrape_interval: 15s
      scrape_timeout: 15s
      scheme: http
      metrics_path: /metrics
      static_configs:
      - targets:
        - localhost:9090

    - job_name: &#39;kubernetes-apiservers&#39;
      kubernetes_sd_configs:
      - role: endpoints
      scheme: https
      tls_config:
        ca_file: /var/run/secrets/kubernetes.io/serviceaccount/ca.crt
      bearer_token_file: /var/run/secrets/kubernetes.io/serviceaccount/token
      relabel_configs:
      - source_labels: [__meta_kubernetes_namespace, __meta_kubernetes_service_name, __meta_kubernetes_endpoint_port_name]
        action: keep
        regex: default;kubernetes;https
    - job_name: &#39;kubernetes-nodes&#39;
      kubernetes_sd_configs:
      - role: node
      scheme: https
      tls_config:
        ca_file: /var/run/secrets/kubernetes.io/serviceaccount/ca.crt
      bearer_token_file: /var/run/secrets/kubernetes.io/serviceaccount/token
      relabel_configs:
      - action: labelmap
        regex: __meta_kubernetes_node_label_(.+)
      - target_label: __address__
        replacement: kubernetes.default.svc:443
      - source_labels: [__meta_kubernetes_node_name]
        regex: (.+)
        target_label: __metrics_path__
        replacement: /api/v1/nodes/\${1}/proxy/metrics

    - job_name: &#39;kubernetes-cadvisor&#39;
      kubernetes_sd_configs:
      - role: node
      scheme: https
      tls_config:
        ca_file: /var/run/secrets/kubernetes.io/serviceaccount/ca.crt
      bearer_token_file: /var/run/secrets/kubernetes.io/serviceaccount/token
      relabel_configs:
      - action: labelmap
        regex: __meta_kubernetes_node_label_(.+)
      - target_label: __address__
        replacement: kubernetes.default.svc:443
      - source_labels: [__meta_kubernetes_node_name]
        regex: (.+)
        target_label: __metrics_path__
        replacement: /api/v1/nodes/\${1}/proxy/metrics/cadvisor

    - job_name: &#39;kubernetes-service-endpoints&#39;
      kubernetes_sd_configs:
      - role: endpoints
      relabel_configs:
      - source_labels: [__meta_kubernetes_service_annotation_prometheus_io_scrape]
        action: keep
        regex: true
      - source_labels: [__meta_kubernetes_service_annotation_prometheus_io_scheme]
        action: replace
        target_label: __scheme__
        regex: (https?)
      - source_labels: [__meta_kubernetes_service_annotation_prometheus_io_path]
        action: replace
        target_label: __metrics_path__
        regex: (.+)
      - source_labels: [__address__, __meta_kubernetes_service_annotation_prometheus_io_port]
        action: replace
        target_label: __address__
        regex: ([^:]+)(?::\\d+)?;(\\d+)
        replacement: $1:$2
      - action: labelmap
        regex: __meta_kubernetes_service_label_(.+)
      - source_labels: [__meta_kubernetes_namespace]
        action: replace
        target_label: kubernetes_namespace
      - source_labels: [__meta_kubernetes_service_name]
        action: replace
        target_label: kubernetes_name

    - job_name: &#39;kubernetes-services&#39;
      kubernetes_sd_configs:
      - role: service
      metrics_path: /probe
      params:
        module: [http_2xx]
      relabel_configs:
      - source_labels: [__meta_kubernetes_service_annotation_prometheus_io_probe]
        action: keep
        regex: true
      - source_labels: [__address__]
        target_label: __param_target
      - target_label: __address__
        replacement: blackbox-exporter.example.com:9115
      - source_labels: [__param_target]
        target_label: instance
      - action: labelmap
        regex: __meta_kubernetes_service_label_(.+)
      - source_labels: [__meta_kubernetes_namespace]
        target_label: kubernetes_namespace
      - source_labels: [__meta_kubernetes_service_name]
        target_label: kubernetes_name

    - job_name: &#39;kubernetes-ingresses&#39;
      kubernetes_sd_configs:
      - role: ingress
      relabel_configs:
      - source_labels: [__meta_kubernetes_ingress_annotation_prometheus_io_probe]
        action: keep
        regex: true
      - source_labels: [__meta_kubernetes_ingress_scheme,__address__,__meta_kubernetes_ingress_path]
        regex: (.+);(.+);(.+)
        replacement: \${1}://\${2}\${3}
        target_label: __param_target
      - target_label: __address__
        replacement: blackbox-exporter.example.com:9115
      - source_labels: [__param_target]
        target_label: instance
      - action: labelmap
        regex: __meta_kubernetes_ingress_label_(.+)
      - source_labels: [__meta_kubernetes_namespace]
        target_label: kubernetes_namespace
      - source_labels: [__meta_kubernetes_ingress_name]
        target_label: kubernetes_name

    - job_name: &#39;kubernetes-pods&#39;
      kubernetes_sd_configs:
      - role: pod
      relabel_configs:
      - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_scrape]
        action: keep
        regex: true
      - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_path]
        action: replace
        target_label: __metrics_path__
        regex: (.+)
      - source_labels: [__address__, __meta_kubernetes_pod_annotation_prometheus_io_port]
        action: replace
        regex: ([^:]+)(?::\\d+)?;(\\d+)
        replacement: $1:$2
        target_label: __address__
      - action: labelmap
        regex: __meta_kubernetes_pod_label_(.+)
      - source_labels: [__meta_kubernetes_namespace]
        action: replace
        target_label: kubernetes_namespace
      - source_labels: [__meta_kubernetes_pod_name]
        action: replace
        target_label: kubernetes_pod_name
    - job_name: &#39;k8s-node&#39;
      kubernetes_sd_configs:
      - role: node
      relabel_configs:
      - source_labels: [__address__]
        regex: &#39;(.*):10250&#39;
        replacement: &#39;\${1}:9100&#39;
        target_label: __address__
        action: replace
      - action: labelmap
        regex: __meta_kubernetes_node_label_(.+)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2、rbac资源" tabindex="-1"><a class="header-anchor" href="#_2、rbac资源" aria-hidden="true">#</a> 2、rbac资源</h5><p>生成一个Prometheus的用户，分发好角色。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@master ~]# cat prometheus-rbac.yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: prometheus
rules:
- apiGroups: [&quot;&quot;]
  resources:
  - nodes
  - nodes/proxy
  - services
  - endpoints
  - pods
  verbs: [&quot;get&quot;, &quot;list&quot;, &quot;watch&quot;]
- apiGroups: [&quot;&quot;]
  resources:
  - configmaps
  verbs: [&quot;get&quot;]
- apiGroups:
  - extensions
  resources:
  - ingresses
  verbs: [&quot;get&quot;, &quot;list&quot;, &quot;watch&quot;]
- nonResourceURLs: [&quot;/metrics&quot;]
  verbs: [&quot;get&quot;]
---
apiVersion: v1
kind: ServiceAccount
metadata:
  name: prometheus
  namespace: kube-system
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: prometheus
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: prometheus
subjects:
- kind: ServiceAccount
  name: prometheus
  namespace: kube-system
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3、pvc资源" tabindex="-1"><a class="header-anchor" href="#_3、pvc资源" aria-hidden="true">#</a> 3、pvc资源</h5><p>有状态服务，利用nfs目录，生成pv、pvc。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@master ~]# cat prometheus-pvc.yaml
apiVersion: v1
kind: Namespace
metadata:
  name: kube-system

---

apiVersion: v1
kind: PersistentVolume
metadata:
  name: nfs-pv-prometheus
  labels:
    pv: nfs-pv-prometheus
spec:
  capacity:
    storage: 10Gi
  accessModes:
    - ReadWriteMany
  persistentVolumeReclaimPolicy: Retain
  nfs:
    path: /data/nfs/prometheus
    server: 192.168.52.135

---

kind: PersistentVolumeClaim
apiVersion: v1
metadata:
  name: nfs-pvc-prometheus
  namespace: kube-system
spec:
  accessModes:
    - ReadWriteMany
  resources:
    requests:
      storage: 10Gi
  selector:
    matchLabels:
      pv: nfs-pv-prometheus
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4、deployment资源" tabindex="-1"><a class="header-anchor" href="#_4、deployment资源" aria-hidden="true">#</a> 4、deployment资源</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@master ~]# cat prometheus-deploy.yaml
---
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    name: prometheus-deployment
  name: prometheus
  namespace: kube-system
spec:
  replicas: 1
  selector:
    matchLabels:
      app: prometheus
  template:
    metadata:
      labels:
        app: prometheus
    spec:
      containers:
      - image: prom/prometheus:v2.27.1
        name: prometheus
        command:
        - &quot;/bin/prometheus&quot;
        args:
        - &quot;--config.file=/etc/prometheus/prometheus.yml&quot;
        - &quot;--storage.tsdb.path=/prometheus&quot;
        - &quot;--storage.tsdb.retention=24h&quot;
        - &quot;--web.enable-admin-api&quot;
        - &quot;--web.enable-lifecycle&quot;
        ports:
        - containerPort: 9090
          protocol: TCP
        volumeMounts:
        - mountPath: &quot;/prometheus&quot;
          name: data
        - mountPath: &quot;/etc/prometheus&quot;
          name: config-volume
        resources:
          requests:
            cpu: 100m
            memory: 100Mi
          limits:
            cpu: 500m
            memory: 1024Mi
      serviceAccountName: prometheus
      volumes:
      - name: data
        persistentVolumeClaim:
          claimName: nfs-pvc-prometheus
      - name: config-volume
        configMap:
          name: prometheus-config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5、service资源" tabindex="-1"><a class="header-anchor" href="#_5、service资源" aria-hidden="true">#</a> 5、service资源</h5><p>nodeport type提供外部入口</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@master ~]# cat prometheus-svc.yaml
---
kind: Service
apiVersion: v1
metadata:
  labels:
    app: prometheus
  name: prometheus
  namespace: kube-system
spec:
  type: NodePort
  ports:
  - port: 9090
    targetPort: 9090
    nodePort: 30003
  selector:
    app: prometheus
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@master ~]# kubectl apply -f prometheus-configmap.yaml
[root@master ~]# kubectl apply -f prometheus-rbac.yaml
[root@master ~]# kubectl apply -f prometheus-pvc.yaml
[root@master ~]# kubectl apply -f prometheus-deploy.yaml
[root@master ~]# kubectl apply -f prometheus-svc.yaml
[root@master ~]# kubectl get pod,pv,pvc,svc,cm,serviceaccount -A | grep prometheus
kube-system    pod/prometheus-854c547b7d-dc5gs      1/1     Running   0          153m
            persistentvolume/nfs-pv-prometheus       10Gi       RWX            Retain           Bound    kube-system/nfs-pvc-prometheus                               153m
kube-system   persistentvolumeclaim/nfs-pvc-prometheus       Bound    nfs-pv-prometheus       10Gi       RWX                           153m
kube-system   service/prometheus   NodePort    10.98.163.37   &amp;lt;none&amp;gt;        9090:30003/TCP           178m
kube-system       configmap/prometheus-config                    1      179m
kube-system       serviceaccount/prometheus                           1         179m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img loading="lazy" src="https://www.chenjiao.cloud/upload/prometheus.png" alt="prometheus.png" width="100%" height="100%" style="display:inline-block;"><h4 id="六、部署grafana" tabindex="-1"><a class="header-anchor" href="#六、部署grafana" aria-hidden="true">#</a> 六、部署grafana</h4><h5 id="_1、grafana-configmap资源" tabindex="-1"><a class="header-anchor" href="#_1、grafana-configmap资源" aria-hidden="true">#</a> 1、grafana-configmap资源</h5><p>整合了datasource,dashboard， http://prometheus:9090(http://prometheus-service-name:port)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@master ~]# cat grafana-cm.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: grafana-datasources
  namespace: kube-system
data:
  data_source.yaml: |
    {
        &quot;apiVersion&quot;: 1,
        &quot;datasources&quot;: [
            {
                &quot;access&quot;: &quot;proxy&quot;,
                &quot;editable&quot;: false,
                &quot;name&quot;: &quot;Prometheus&quot;,
                &quot;orgId&quot;: 1,
                &quot;type&quot;: &quot;prometheus&quot;,
                &quot;url&quot;: &quot;http://prometheus:9090&quot;,
                &quot;version&quot;: 1
            }
        ]
    }

---
apiVersion: v1
kind: ConfigMap
metadata:
  name: grafana-dashboards
  namespace: kube-system
data:
  dashboards.yaml: |-
    {
        &quot;apiVersion&quot;: 1,
        &quot;providers&quot;: [
            {
                &quot;folder&quot;: &quot;Default&quot;,
                &quot;name&quot;: &quot;0&quot;,
                &quot;options&quot;: {
                    &quot;path&quot;: &quot;/grafana-dashboard-definitions/0&quot;
                },
                &quot;orgId&quot;: 1,
                &quot;type&quot;: &quot;file&quot;
            }
        ]
    }

---
apiVersion: v1
kind: ConfigMap
metadata:
  name: grafana-k8s-pod-resource
  namespace: kube-system
data:
  Kubernetes-Pod-Resources.json: |
    {
      &quot;annotations&quot;: {
        &quot;list&quot;: [
          {
            &quot;builtIn&quot;: 1,
            &quot;datasource&quot;: &quot;-- Grafana --&quot;,
            &quot;enable&quot;: true,
            &quot;hide&quot;: true,
            &quot;iconColor&quot;: &quot;rgba(0, 211, 255, 1)&quot;,
            &quot;name&quot;: &quot;Annotations &amp;amp; Alerts&quot;,
            &quot;type&quot;: &quot;dashboard&quot;
          }
        ]
      },
      &quot;description&quot;: &quot;Shows resource usage of Kubernetes pods.&quot;,
      &quot;editable&quot;: true,
      &quot;gnetId&quot;: 737,
      &quot;graphTooltip&quot;: 0,
      &quot;id&quot;: 1,
      &quot;iteration&quot;: 1624950781810,
      &quot;links&quot;: [],
      &quot;panels&quot;: [
        {
          &quot;collapsed&quot;: false,
          &quot;datasource&quot;: null,
          &quot;gridPos&quot;: {
            &quot;h&quot;: 1,
            &quot;w&quot;: 24,
            &quot;x&quot;: 0,
            &quot;y&quot;: 0
          },
          &quot;id&quot;: 35,
          &quot;panels&quot;: [],
          &quot;title&quot;: &quot;节点资源统计&quot;,
          &quot;type&quot;: &quot;row&quot;
        },
        {
          &quot;cacheTimeout&quot;: null,
          &quot;datasource&quot;: &quot;Prometheus&quot;,
          &quot;fieldConfig&quot;: {
            &quot;defaults&quot;: {
              &quot;color&quot;: {
                &quot;mode&quot;: &quot;thresholds&quot;
              },
              &quot;mappings&quot;: [
                {
                  &quot;options&quot;: {
                    &quot;match&quot;: &quot;null&quot;,
                    &quot;result&quot;: {
                      &quot;text&quot;: &quot;N/A&quot;
                    }
                  },
                  &quot;type&quot;: &quot;special&quot;
                }
              ],
              &quot;max&quot;: 100,
              &quot;min&quot;: 0,
              &quot;thresholds&quot;: {
                &quot;mode&quot;: &quot;absolute&quot;,
                &quot;steps&quot;: [
                  {
                    &quot;color&quot;: &quot;rgba(50, 172, 45, 0.97)&quot;,
                    &quot;value&quot;: null
                  },
                  {
                    &quot;color&quot;: &quot;rgba(237, 129, 40, 0.89)&quot;,
                    &quot;value&quot;: 65
                  },
                  {
                    &quot;color&quot;: &quot;rgba(245, 54, 54, 0.9)&quot;,
                    &quot;value&quot;: 90
                  }
                ]
              },
              &quot;unit&quot;: &quot;percent&quot;
            },
            &quot;overrides&quot;: []
          },
          &quot;gridPos&quot;: {
            &quot;h&quot;: 5,
            &quot;w&quot;: 8,
            &quot;x&quot;: 0,
            &quot;y&quot;: 1
          },
          &quot;id&quot;: 4,
          &quot;interval&quot;: null,
          &quot;links&quot;: [],
          &quot;maxDataPoints&quot;: 100,
          &quot;options&quot;: {
            &quot;orientation&quot;: &quot;horizontal&quot;,
            &quot;reduceOptions&quot;: {
              &quot;calcs&quot;: [
                &quot;lastNotNull&quot;
              ],
              &quot;fields&quot;: &quot;&quot;,
              &quot;values&quot;: false
            },
            &quot;showThresholdLabels&quot;: false,
            &quot;showThresholdMarkers&quot;: true,
            &quot;text&quot;: {}
          },
          &quot;pluginVersion&quot;: &quot;8.0.3&quot;,
          &quot;targets&quot;: [
            {
              &quot;expr&quot;: &quot;sum (container_memory_working_set_bytes{id=\\&quot;/\\&quot;,instance=~\\&quot;^$instance$\\&quot;}) / sum (machine_memory_bytes{instance=~\\&quot;^$instance$\\&quot;}) * 100&quot;,
              &quot;interval&quot;: &quot;&quot;,
              &quot;intervalFactor&quot;: 2,
              &quot;legendFormat&quot;: &quot;&quot;,
              &quot;refId&quot;: &quot;A&quot;,
              &quot;step&quot;: 2
            }
          ],
          &quot;timeFrom&quot;: &quot;1m&quot;,
          &quot;timeShift&quot;: null,
          &quot;title&quot;: &quot;内存使用量&quot;,
          &quot;type&quot;: &quot;gauge&quot;
        },
        {
          &quot;cacheTimeout&quot;: null,
          &quot;datasource&quot;: &quot;Prometheus&quot;,
          &quot;fieldConfig&quot;: {
            &quot;defaults&quot;: {
              &quot;color&quot;: {
                &quot;mode&quot;: &quot;thresholds&quot;
              },
              &quot;decimals&quot;: 2,
              &quot;mappings&quot;: [
                {
                  &quot;options&quot;: {
                    &quot;match&quot;: &quot;null&quot;,
                    &quot;result&quot;: {
                      &quot;text&quot;: &quot;N/A&quot;
                    }
                  },
                  &quot;type&quot;: &quot;special&quot;
                }
              ],
              &quot;max&quot;: 100,
              &quot;min&quot;: 0,
              &quot;thresholds&quot;: {
                &quot;mode&quot;: &quot;absolute&quot;,
                &quot;steps&quot;: [
                  {
                    &quot;color&quot;: &quot;rgba(50, 172, 45, 0.97)&quot;,
                    &quot;value&quot;: null
                  },
                  {
                    &quot;color&quot;: &quot;rgba(237, 129, 40, 0.89)&quot;,
                    &quot;value&quot;: 65
                  },
                  {
                    &quot;color&quot;: &quot;rgba(245, 54, 54, 0.9)&quot;,
                    &quot;value&quot;: 90
                  }
                ]
              },
              &quot;unit&quot;: &quot;percent&quot;
            },
            &quot;overrides&quot;: []
          },
          &quot;gridPos&quot;: {
            &quot;h&quot;: 5,
            &quot;w&quot;: 8,
            &quot;x&quot;: 8,
            &quot;y&quot;: 1
          },
          &quot;id&quot;: 6,
          &quot;interval&quot;: null,
          &quot;links&quot;: [],
          &quot;maxDataPoints&quot;: 100,
          &quot;options&quot;: {
            &quot;orientation&quot;: &quot;horizontal&quot;,
            &quot;reduceOptions&quot;: {
              &quot;calcs&quot;: [
                &quot;lastNotNull&quot;
              ],
              &quot;fields&quot;: &quot;&quot;,
              &quot;values&quot;: false
            },
            &quot;showThresholdLabels&quot;: false,
            &quot;showThresholdMarkers&quot;: true,
            &quot;text&quot;: {}
          },
          &quot;pluginVersion&quot;: &quot;8.0.3&quot;,
          &quot;targets&quot;: [
            {
              &quot;expr&quot;: &quot;sum(rate(container_cpu_usage_seconds_total{id=\\&quot;/\\&quot;,instance=~\\&quot;^$instance$\\&quot;}[1m])) / sum (machine_cpu_cores{instance=~\\&quot;^$instance$\\&quot;}) * 100&quot;,
              &quot;interval&quot;: &quot;10s&quot;,
              &quot;intervalFactor&quot;: 1,
              &quot;refId&quot;: &quot;A&quot;,
              &quot;step&quot;: 10
            }
          ],
          &quot;timeFrom&quot;: &quot;1m&quot;,
          &quot;timeShift&quot;: null,
          &quot;title&quot;: &quot;Cpu 使用量&quot;,
          &quot;type&quot;: &quot;gauge&quot;
        },
        {
          &quot;cacheTimeout&quot;: null,
          &quot;datasource&quot;: &quot;Prometheus&quot;,
          &quot;fieldConfig&quot;: {
            &quot;defaults&quot;: {
              &quot;color&quot;: {
                &quot;mode&quot;: &quot;thresholds&quot;
              },
              &quot;decimals&quot;: 2,
              &quot;mappings&quot;: [
                {
                  &quot;options&quot;: {
                    &quot;match&quot;: &quot;null&quot;,
                    &quot;result&quot;: {
                      &quot;text&quot;: &quot;N/A&quot;
                    }
                  },
                  &quot;type&quot;: &quot;special&quot;
                }
              ],
              &quot;max&quot;: 100,
              &quot;min&quot;: 0,
              &quot;thresholds&quot;: {
                &quot;mode&quot;: &quot;absolute&quot;,
                &quot;steps&quot;: [
                  {
                    &quot;color&quot;: &quot;rgba(50, 172, 45, 0.97)&quot;,
                    &quot;value&quot;: null
                  },
                  {
                    &quot;color&quot;: &quot;rgba(237, 129, 40, 0.89)&quot;,
                    &quot;value&quot;: 65
                  },
                  {
                    &quot;color&quot;: &quot;rgba(245, 54, 54, 0.9)&quot;,
                    &quot;value&quot;: 90
                  }
                ]
              },
              &quot;unit&quot;: &quot;percent&quot;
            },
            &quot;overrides&quot;: []
          },
          &quot;gridPos&quot;: {
            &quot;h&quot;: 5,
            &quot;w&quot;: 8,
            &quot;x&quot;: 16,
            &quot;y&quot;: 1
          },
          &quot;id&quot;: 7,
          &quot;interval&quot;: null,
          &quot;links&quot;: [],
          &quot;maxDataPoints&quot;: 100,
          &quot;options&quot;: {
            &quot;orientation&quot;: &quot;horizontal&quot;,
            &quot;reduceOptions&quot;: {
              &quot;calcs&quot;: [
                &quot;lastNotNull&quot;
              ],
              &quot;fields&quot;: &quot;&quot;,
              &quot;values&quot;: false
            },
            &quot;showThresholdLabels&quot;: false,
            &quot;showThresholdMarkers&quot;: true,
            &quot;text&quot;: {}
          },
          &quot;pluginVersion&quot;: &quot;8.0.3&quot;,
          &quot;targets&quot;: [
            {
              &quot;expr&quot;: &quot;sum(container_fs_usage_bytes{id=\\&quot;/\\&quot;,instance=~\\&quot;^$instance$\\&quot;}) / sum(container_fs_limit_bytes{id=\\&quot;/\\&quot;,instance=~\\&quot;^$instance$\\&quot;}) * 100&quot;,
              &quot;interval&quot;: &quot;10s&quot;,
              &quot;intervalFactor&quot;: 1,
              &quot;legendFormat&quot;: &quot;&quot;,
              &quot;metric&quot;: &quot;&quot;,
              &quot;refId&quot;: &quot;A&quot;,
              &quot;step&quot;: 10
            }
          ],
          &quot;timeFrom&quot;: &quot;1m&quot;,
          &quot;timeShift&quot;: null,
          &quot;title&quot;: &quot;磁盘使用量&quot;,
          &quot;type&quot;: &quot;gauge&quot;
        },
        {
          &quot;cacheTimeout&quot;: null,
          &quot;datasource&quot;: &quot;Prometheus&quot;,
          &quot;fieldConfig&quot;: {
            &quot;defaults&quot;: {
              &quot;color&quot;: {
                &quot;mode&quot;: &quot;thresholds&quot;
              },
              &quot;decimals&quot;: 2,
              &quot;mappings&quot;: [
                {
                  &quot;options&quot;: {
                    &quot;match&quot;: &quot;null&quot;,
                    &quot;result&quot;: {
                      &quot;text&quot;: &quot;N/A&quot;
                    }
                  },
                  &quot;type&quot;: &quot;special&quot;
                }
              ],
              &quot;thresholds&quot;: {
                &quot;mode&quot;: &quot;absolute&quot;,
                &quot;steps&quot;: [
                  {
                    &quot;color&quot;: &quot;green&quot;,
                    &quot;value&quot;: null
                  },
                  {
                    &quot;color&quot;: &quot;red&quot;,
                    &quot;value&quot;: 80
                  }
                ]
              },
              &quot;unit&quot;: &quot;bytes&quot;
            },
            &quot;overrides&quot;: []
          },
          &quot;gridPos&quot;: {
            &quot;h&quot;: 3,
            &quot;w&quot;: 4,
            &quot;x&quot;: 0,
            &quot;y&quot;: 6
          },
          &quot;hideTimeOverride&quot;: true,
          &quot;id&quot;: 9,
          &quot;interval&quot;: null,
          &quot;links&quot;: [],
          &quot;maxDataPoints&quot;: 100,
          &quot;options&quot;: {
            &quot;colorMode&quot;: &quot;none&quot;,
            &quot;graphMode&quot;: &quot;none&quot;,
            &quot;justifyMode&quot;: &quot;auto&quot;,
            &quot;orientation&quot;: &quot;horizontal&quot;,
            &quot;reduceOptions&quot;: {
              &quot;calcs&quot;: [
                &quot;lastNotNull&quot;
              ],
              &quot;fields&quot;: &quot;&quot;,
              &quot;values&quot;: false
            },
            &quot;text&quot;: {},
            &quot;textMode&quot;: &quot;auto&quot;
          },
          &quot;pluginVersion&quot;: &quot;8.0.3&quot;,
          &quot;targets&quot;: [
            {
              &quot;expr&quot;: &quot;sum(container_memory_working_set_bytes{id=\\&quot;/\\&quot;,instance=~\\&quot;^$instance$\\&quot;})&quot;,
              &quot;interval&quot;: &quot;10s&quot;,
              &quot;intervalFactor&quot;: 1,
              &quot;refId&quot;: &quot;A&quot;,
              &quot;step&quot;: 10
            }
          ],
          &quot;timeFrom&quot;: &quot;1m&quot;,
          &quot;title&quot;: &quot;Used&quot;,
          &quot;type&quot;: &quot;stat&quot;
        },
        {
          &quot;cacheTimeout&quot;: null,
          &quot;datasource&quot;: &quot;Prometheus&quot;,
          &quot;fieldConfig&quot;: {
            &quot;defaults&quot;: {
              &quot;color&quot;: {
                &quot;mode&quot;: &quot;thresholds&quot;
              },
              &quot;decimals&quot;: 2,
              &quot;mappings&quot;: [
                {
                  &quot;options&quot;: {
                    &quot;match&quot;: &quot;null&quot;,
                    &quot;result&quot;: {
                      &quot;text&quot;: &quot;N/A&quot;
                    }
                  },
                  &quot;type&quot;: &quot;special&quot;
                }
              ],
              &quot;thresholds&quot;: {
                &quot;mode&quot;: &quot;absolute&quot;,
                &quot;steps&quot;: [
                  {
                    &quot;color&quot;: &quot;green&quot;,
                    &quot;value&quot;: null
                  },
                  {
                    &quot;color&quot;: &quot;red&quot;,
                    &quot;value&quot;: 80
                  }
                ]
              },
              &quot;unit&quot;: &quot;bytes&quot;
            },
            &quot;overrides&quot;: []
          },
          &quot;gridPos&quot;: {
            &quot;h&quot;: 3,
            &quot;w&quot;: 4,
            &quot;x&quot;: 4,
            &quot;y&quot;: 6
          },
          &quot;hideTimeOverride&quot;: true,
          &quot;id&quot;: 10,
          &quot;interval&quot;: null,
          &quot;links&quot;: [],
          &quot;maxDataPoints&quot;: 100,
          &quot;options&quot;: {
            &quot;colorMode&quot;: &quot;none&quot;,
            &quot;graphMode&quot;: &quot;none&quot;,
            &quot;justifyMode&quot;: &quot;auto&quot;,
            &quot;orientation&quot;: &quot;horizontal&quot;,
            &quot;reduceOptions&quot;: {
              &quot;calcs&quot;: [
                &quot;lastNotNull&quot;
              ],
              &quot;fields&quot;: &quot;&quot;,
              &quot;values&quot;: false
            },
            &quot;text&quot;: {},
            &quot;textMode&quot;: &quot;auto&quot;
          },
          &quot;pluginVersion&quot;: &quot;8.0.3&quot;,
          &quot;targets&quot;: [
            {
              &quot;expr&quot;: &quot;sum (machine_memory_bytes{instance=~\\&quot;^$instance$\\&quot;})&quot;,
              &quot;interval&quot;: &quot;10s&quot;,
              &quot;intervalFactor&quot;: 1,
              &quot;refId&quot;: &quot;A&quot;,
              &quot;step&quot;: 10
            }
          ],
          &quot;timeFrom&quot;: &quot;1m&quot;,
          &quot;title&quot;: &quot;Total&quot;,
          &quot;type&quot;: &quot;stat&quot;
        },
        {
          &quot;cacheTimeout&quot;: null,
          &quot;datasource&quot;: &quot;Prometheus&quot;,
          &quot;fieldConfig&quot;: {
            &quot;defaults&quot;: {
              &quot;color&quot;: {
                &quot;mode&quot;: &quot;thresholds&quot;
              },
              &quot;decimals&quot;: 2,
              &quot;mappings&quot;: [
                {
                  &quot;options&quot;: {
                    &quot;match&quot;: &quot;null&quot;,
                    &quot;result&quot;: {
                      &quot;text&quot;: &quot;N/A&quot;
                    }
                  },
                  &quot;type&quot;: &quot;special&quot;
                }
              ],
              &quot;thresholds&quot;: {
                &quot;mode&quot;: &quot;absolute&quot;,
                &quot;steps&quot;: [
                  {
                    &quot;color&quot;: &quot;green&quot;,
                    &quot;value&quot;: null
                  },
                  {
                    &quot;color&quot;: &quot;red&quot;,
                    &quot;value&quot;: 80
                  }
                ]
              },
              &quot;unit&quot;: &quot;none&quot;
            },
            &quot;overrides&quot;: []
          },
          &quot;gridPos&quot;: {
            &quot;h&quot;: 3,
            &quot;w&quot;: 4,
            &quot;x&quot;: 8,
            &quot;y&quot;: 6
          },
          &quot;hideTimeOverride&quot;: true,
          &quot;id&quot;: 11,
          &quot;interval&quot;: null,
          &quot;links&quot;: [],
          &quot;maxDataPoints&quot;: 100,
          &quot;options&quot;: {
            &quot;colorMode&quot;: &quot;none&quot;,
            &quot;graphMode&quot;: &quot;none&quot;,
            &quot;justifyMode&quot;: &quot;auto&quot;,
            &quot;orientation&quot;: &quot;horizontal&quot;,
            &quot;reduceOptions&quot;: {
              &quot;calcs&quot;: [
                &quot;lastNotNull&quot;
              ],
              &quot;fields&quot;: &quot;&quot;,
              &quot;values&quot;: false
            },
            &quot;text&quot;: {},
            &quot;textMode&quot;: &quot;auto&quot;
          },
          &quot;pluginVersion&quot;: &quot;8.0.3&quot;,
          &quot;targets&quot;: [
            {
              &quot;expr&quot;: &quot;sum (rate (container_cpu_usage_seconds_total{id=\\&quot;/\\&quot;,instance=~\\&quot;^$instance$\\&quot;}[1m]))&quot;,
              &quot;interval&quot;: &quot;10s&quot;,
              &quot;intervalFactor&quot;: 1,
              &quot;refId&quot;: &quot;A&quot;,
              &quot;step&quot;: 10
            }
          ],
          &quot;timeFrom&quot;: &quot;1m&quot;,
          &quot;timeShift&quot;: null,
          &quot;title&quot;: &quot;Used&quot;,
          &quot;type&quot;: &quot;stat&quot;
        },
        {
          &quot;cacheTimeout&quot;: null,
          &quot;datasource&quot;: &quot;Prometheus&quot;,
          &quot;fieldConfig&quot;: {
            &quot;defaults&quot;: {
              &quot;color&quot;: {
                &quot;mode&quot;: &quot;thresholds&quot;
              },
              &quot;decimals&quot;: 2,
              &quot;mappings&quot;: [
                {
                  &quot;options&quot;: {
                    &quot;match&quot;: &quot;null&quot;,
                    &quot;result&quot;: {
                      &quot;text&quot;: &quot;N/A&quot;
                    }
                  },
                  &quot;type&quot;: &quot;special&quot;
                }
              ],
              &quot;thresholds&quot;: {
                &quot;mode&quot;: &quot;absolute&quot;,
                &quot;steps&quot;: [
                  {
                    &quot;color&quot;: &quot;green&quot;,
                    &quot;value&quot;: null
                  },
                  {
                    &quot;color&quot;: &quot;red&quot;,
                    &quot;value&quot;: 80
                  }
                ]
              },
              &quot;unit&quot;: &quot;none&quot;
            },
            &quot;overrides&quot;: []
          },
          &quot;gridPos&quot;: {
            &quot;h&quot;: 3,
            &quot;w&quot;: 4,
            &quot;x&quot;: 12,
            &quot;y&quot;: 6
          },
          &quot;hideTimeOverride&quot;: true,
          &quot;id&quot;: 12,
          &quot;interval&quot;: null,
          &quot;links&quot;: [],
          &quot;maxDataPoints&quot;: 100,
          &quot;options&quot;: {
            &quot;colorMode&quot;: &quot;none&quot;,
            &quot;graphMode&quot;: &quot;none&quot;,
            &quot;justifyMode&quot;: &quot;auto&quot;,
            &quot;orientation&quot;: &quot;horizontal&quot;,
            &quot;reduceOptions&quot;: {
              &quot;calcs&quot;: [
                &quot;lastNotNull&quot;
              ],
              &quot;fields&quot;: &quot;&quot;,
              &quot;values&quot;: false
            },
            &quot;text&quot;: {},
            &quot;textMode&quot;: &quot;auto&quot;
          },
          &quot;pluginVersion&quot;: &quot;8.0.3&quot;,
          &quot;targets&quot;: [
            {
              &quot;expr&quot;: &quot;sum (machine_cpu_cores{instance=~\\&quot;^$instance$\\&quot;})&quot;,
              &quot;interval&quot;: &quot;10s&quot;,
              &quot;intervalFactor&quot;: 1,
              &quot;refId&quot;: &quot;A&quot;,
              &quot;step&quot;: 10
            }
          ],
          &quot;timeFrom&quot;: &quot;1m&quot;,
          &quot;title&quot;: &quot;Total&quot;,
          &quot;type&quot;: &quot;stat&quot;
        },
        {
          &quot;cacheTimeout&quot;: null,
          &quot;datasource&quot;: &quot;Prometheus&quot;,
          &quot;fieldConfig&quot;: {
            &quot;defaults&quot;: {
              &quot;color&quot;: {
                &quot;mode&quot;: &quot;thresholds&quot;
              },
              &quot;decimals&quot;: 2,
              &quot;mappings&quot;: [
                {
                  &quot;options&quot;: {
                    &quot;match&quot;: &quot;null&quot;,
                    &quot;result&quot;: {
                      &quot;text&quot;: &quot;N/A&quot;
                    }
                  },
                  &quot;type&quot;: &quot;special&quot;
                }
              ],
              &quot;thresholds&quot;: {
                &quot;mode&quot;: &quot;absolute&quot;,
                &quot;steps&quot;: [
                  {
                    &quot;color&quot;: &quot;green&quot;,
                    &quot;value&quot;: null
                  },
                  {
                    &quot;color&quot;: &quot;red&quot;,
                    &quot;value&quot;: 80
                  }
                ]
              },
              &quot;unit&quot;: &quot;bytes&quot;
            },
            &quot;overrides&quot;: []
          },
          &quot;gridPos&quot;: {
            &quot;h&quot;: 3,
            &quot;w&quot;: 4,
            &quot;x&quot;: 16,
            &quot;y&quot;: 6
          },
          &quot;hideTimeOverride&quot;: true,
          &quot;id&quot;: 13,
          &quot;interval&quot;: null,
          &quot;links&quot;: [],
          &quot;maxDataPoints&quot;: 100,
          &quot;options&quot;: {
            &quot;colorMode&quot;: &quot;none&quot;,
            &quot;graphMode&quot;: &quot;none&quot;,
            &quot;justifyMode&quot;: &quot;auto&quot;,
            &quot;orientation&quot;: &quot;horizontal&quot;,
            &quot;reduceOptions&quot;: {
              &quot;calcs&quot;: [
                &quot;lastNotNull&quot;
              ],
              &quot;fields&quot;: &quot;&quot;,
              &quot;values&quot;: false
            },
            &quot;text&quot;: {},
            &quot;textMode&quot;: &quot;auto&quot;
          },
          &quot;pluginVersion&quot;: &quot;8.0.3&quot;,
          &quot;targets&quot;: [
            {
              &quot;expr&quot;: &quot;sum(container_fs_usage_bytes{id=\\&quot;/\\&quot;,instance=~\\&quot;^$instance$\\&quot;})&quot;,
              &quot;interval&quot;: &quot;10s&quot;,
              &quot;intervalFactor&quot;: 1,
              &quot;refId&quot;: &quot;A&quot;,
              &quot;step&quot;: 10
            }
          ],
          &quot;timeFrom&quot;: &quot;1m&quot;,
          &quot;title&quot;: &quot;Used&quot;,
          &quot;type&quot;: &quot;stat&quot;
        },
        {
          &quot;cacheTimeout&quot;: null,
          &quot;datasource&quot;: &quot;Prometheus&quot;,
          &quot;fieldConfig&quot;: {
            &quot;defaults&quot;: {
              &quot;color&quot;: {
                &quot;mode&quot;: &quot;thresholds&quot;
              },
              &quot;decimals&quot;: 2,
              &quot;mappings&quot;: [
                {
                  &quot;options&quot;: {
                    &quot;match&quot;: &quot;null&quot;,
                    &quot;result&quot;: {
                      &quot;text&quot;: &quot;N/A&quot;
                    }
                  },
                  &quot;type&quot;: &quot;special&quot;
                }
              ],
              &quot;thresholds&quot;: {
                &quot;mode&quot;: &quot;absolute&quot;,
                &quot;steps&quot;: [
                  {
                    &quot;color&quot;: &quot;green&quot;,
                    &quot;value&quot;: null
                  },
                  {
                    &quot;color&quot;: &quot;red&quot;,
                    &quot;value&quot;: 80
                  }
                ]
              },
              &quot;unit&quot;: &quot;bytes&quot;
            },
            &quot;overrides&quot;: []
          },
          &quot;gridPos&quot;: {
            &quot;h&quot;: 3,
            &quot;w&quot;: 4,
            &quot;x&quot;: 20,
            &quot;y&quot;: 6
          },
          &quot;hideTimeOverride&quot;: true,
          &quot;id&quot;: 14,
          &quot;interval&quot;: null,
          &quot;links&quot;: [],
          &quot;maxDataPoints&quot;: 100,
          &quot;options&quot;: {
            &quot;colorMode&quot;: &quot;none&quot;,
            &quot;graphMode&quot;: &quot;none&quot;,
            &quot;justifyMode&quot;: &quot;auto&quot;,
            &quot;orientation&quot;: &quot;horizontal&quot;,
            &quot;reduceOptions&quot;: {
              &quot;calcs&quot;: [
                &quot;lastNotNull&quot;
              ],
              &quot;fields&quot;: &quot;&quot;,
              &quot;values&quot;: false
            },
            &quot;text&quot;: {},
            &quot;textMode&quot;: &quot;auto&quot;
          },
          &quot;pluginVersion&quot;: &quot;8.0.3&quot;,
          &quot;targets&quot;: [
            {
              &quot;expr&quot;: &quot;sum (container_fs_limit_bytes{id=\\&quot;/\\&quot;,instance=~\\&quot;^$instance$\\&quot;})&quot;,
              &quot;interval&quot;: &quot;10s&quot;,
              &quot;intervalFactor&quot;: 1,
              &quot;refId&quot;: &quot;A&quot;,
              &quot;step&quot;: 10
            }
          ],
          &quot;timeFrom&quot;: &quot;1m&quot;,
          &quot;title&quot;: &quot;Total&quot;,
          &quot;type&quot;: &quot;stat&quot;
        },
        {
          &quot;aliasColors&quot;: {},
          &quot;bars&quot;: false,
          &quot;dashLength&quot;: 10,
          &quot;dashes&quot;: false,
          &quot;datasource&quot;: &quot;Prometheus&quot;,
          &quot;decimals&quot;: 2,
          &quot;editable&quot;: true,
          &quot;error&quot;: false,
          &quot;fill&quot;: 1,
          &quot;fillGradient&quot;: 0,
          &quot;grid&quot;: {},
          &quot;gridPos&quot;: {
            &quot;h&quot;: 5,
            &quot;w&quot;: 24,
            &quot;x&quot;: 0,
            &quot;y&quot;: 9
          },
          &quot;height&quot;: &quot;200px&quot;,
          &quot;hiddenSeries&quot;: false,
          &quot;id&quot;: 32,
          &quot;isNew&quot;: true,
          &quot;legend&quot;: {
            &quot;alignAsTable&quot;: true,
            &quot;avg&quot;: true,
            &quot;current&quot;: true,
            &quot;max&quot;: false,
            &quot;min&quot;: false,
            &quot;rightSide&quot;: true,
            &quot;show&quot;: true,
            &quot;sideWidth&quot;: 200,
            &quot;sort&quot;: &quot;current&quot;,
            &quot;sortDesc&quot;: true,
            &quot;total&quot;: false,
            &quot;values&quot;: true
          },
          &quot;lines&quot;: true,
          &quot;linewidth&quot;: 2,
          &quot;links&quot;: [],
          &quot;nullPointMode&quot;: &quot;connected&quot;,
          &quot;options&quot;: {
            &quot;alertThreshold&quot;: true
          },
          &quot;percentage&quot;: false,
          &quot;pluginVersion&quot;: &quot;8.0.3&quot;,
          &quot;pointradius&quot;: 5,
          &quot;points&quot;: false,
          &quot;renderer&quot;: &quot;flot&quot;,
          &quot;seriesOverrides&quot;: [],
          &quot;spaceLength&quot;: 10,
          &quot;stack&quot;: false,
          &quot;steppedLine&quot;: false,
          &quot;targets&quot;: [
            {
              &quot;expr&quot;: &quot;sum(rate(container_network_receive_bytes_total{instance=~\\&quot;^$instance$\\&quot;,namespace=~\\&quot;^$namespace$\\&quot;}[1m]))&quot;,
              &quot;interval&quot;: &quot;&quot;,
              &quot;intervalFactor&quot;: 2,
              &quot;legendFormat&quot;: &quot;receive&quot;,
              &quot;metric&quot;: &quot;network&quot;,
              &quot;refId&quot;: &quot;A&quot;,
              &quot;step&quot;: 240
            },
            {
              &quot;expr&quot;: &quot;- sum(rate(container_network_transmit_bytes_total{instance=~\\&quot;^$instance$\\&quot;,namespace=~\\&quot;^$namespace$\\&quot;}[1m]))&quot;,
              &quot;interval&quot;: &quot;&quot;,
              &quot;intervalFactor&quot;: 2,
              &quot;legendFormat&quot;: &quot;transmit&quot;,
              &quot;metric&quot;: &quot;network&quot;,
              &quot;refId&quot;: &quot;B&quot;,
              &quot;step&quot;: 240
            }
          ],
          &quot;thresholds&quot;: [],
          &quot;timeFrom&quot;: null,
          &quot;timeRegions&quot;: [],
          &quot;timeShift&quot;: null,
          &quot;title&quot;: &quot;网络&quot;,
          &quot;tooltip&quot;: {
            &quot;msResolution&quot;: false,
            &quot;shared&quot;: true,
            &quot;sort&quot;: 0,
            &quot;value_type&quot;: &quot;cumulative&quot;
          },
          &quot;type&quot;: &quot;graph&quot;,
          &quot;xaxis&quot;: {
            &quot;buckets&quot;: null,
            &quot;mode&quot;: &quot;time&quot;,
            &quot;name&quot;: null,
            &quot;show&quot;: true,
            &quot;values&quot;: []
          },
          &quot;yaxes&quot;: [
            {
              &quot;format&quot;: &quot;Bps&quot;,
              &quot;label&quot;: &quot;transmit / receive&quot;,
              &quot;logBase&quot;: 1,
              &quot;max&quot;: null,
              &quot;min&quot;: null,
              &quot;show&quot;: true
            },
            {
              &quot;format&quot;: &quot;Bps&quot;,
              &quot;label&quot;: null,
              &quot;logBase&quot;: 1,
              &quot;max&quot;: null,
              &quot;min&quot;: null,
              &quot;show&quot;: false
            }
          ],
          &quot;yaxis&quot;: {
            &quot;align&quot;: false,
            &quot;alignLevel&quot;: null
          }
        },
        {
          &quot;collapsed&quot;: false,
          &quot;datasource&quot;: null,
          &quot;gridPos&quot;: {
            &quot;h&quot;: 1,
            &quot;w&quot;: 24,
            &quot;x&quot;: 0,
            &quot;y&quot;: 14
          },
          &quot;id&quot;: 36,
          &quot;panels&quot;: [],
          &quot;title&quot;: &quot;Pod 资源统计&quot;,
          &quot;type&quot;: &quot;row&quot;
        },
        {
          &quot;aliasColors&quot;: {},
          &quot;bars&quot;: false,
          &quot;dashLength&quot;: 10,
          &quot;dashes&quot;: false,
          &quot;datasource&quot;: &quot;Prometheus&quot;,
          &quot;decimals&quot;: 3,
          &quot;editable&quot;: true,
          &quot;error&quot;: false,
          &quot;fill&quot;: 0,
          &quot;fillGradient&quot;: 0,
          &quot;grid&quot;: {},
          &quot;gridPos&quot;: {
            &quot;h&quot;: 7,
            &quot;w&quot;: 24,
            &quot;x&quot;: 0,
            &quot;y&quot;: 15
          },
          &quot;height&quot;: &quot;&quot;,
          &quot;hiddenSeries&quot;: false,
          &quot;id&quot;: 17,
          &quot;isNew&quot;: true,
          &quot;legend&quot;: {
            &quot;alignAsTable&quot;: true,
            &quot;avg&quot;: true,
            &quot;current&quot;: true,
            &quot;hideEmpty&quot;: true,
            &quot;hideZero&quot;: true,
            &quot;max&quot;: false,
            &quot;min&quot;: false,
            &quot;rightSide&quot;: true,
            &quot;show&quot;: true,
            &quot;sideWidth&quot;: null,
            &quot;sort&quot;: &quot;current&quot;,
            &quot;sortDesc&quot;: true,
            &quot;total&quot;: false,
            &quot;values&quot;: true
          },
          &quot;lines&quot;: true,
          &quot;linewidth&quot;: 2,
          &quot;links&quot;: [],
          &quot;nullPointMode&quot;: &quot;connected&quot;,
          &quot;options&quot;: {
            &quot;alertThreshold&quot;: true
          },
          &quot;percentage&quot;: false,
          &quot;pluginVersion&quot;: &quot;8.0.3&quot;,
          &quot;pointradius&quot;: 5,
          &quot;points&quot;: false,
          &quot;renderer&quot;: &quot;flot&quot;,
          &quot;seriesOverrides&quot;: [],
          &quot;spaceLength&quot;: 10,
          &quot;stack&quot;: false,
          &quot;steppedLine&quot;: false,
          &quot;targets&quot;: [
            {
              &quot;exemplar&quot;: true,
              &quot;expr&quot;: &quot;sum(rate(container_cpu_usage_seconds_total{image!=\\&quot;\\&quot;,instance=~\\&quot;^$instance$\\&quot;,namespace=~\\&quot;^$namespace$\\&quot;}[1m])) by (pod)&quot;,
              &quot;interval&quot;: &quot;&quot;,
              &quot;intervalFactor&quot;: 2,
              &quot;legendFormat&quot;: &quot;{{ pod }}&quot;,
              &quot;metric&quot;: &quot;container_cpu&quot;,
              &quot;refId&quot;: &quot;A&quot;,
              &quot;step&quot;: 240
            }
          ],
          &quot;thresholds&quot;: [],
          &quot;timeFrom&quot;: null,
          &quot;timeRegions&quot;: [],
          &quot;timeShift&quot;: null,
          &quot;title&quot;: &quot;Cpu 使用量&quot;,
          &quot;tooltip&quot;: {
            &quot;msResolution&quot;: true,
            &quot;shared&quot;: false,
            &quot;sort&quot;: 2,
            &quot;value_type&quot;: &quot;cumulative&quot;
          },
          &quot;type&quot;: &quot;graph&quot;,
          &quot;xaxis&quot;: {
            &quot;buckets&quot;: null,
            &quot;mode&quot;: &quot;time&quot;,
            &quot;name&quot;: null,
            &quot;show&quot;: true,
            &quot;values&quot;: []
          },
          &quot;yaxes&quot;: [
            {
              &quot;format&quot;: &quot;none&quot;,
              &quot;label&quot;: &quot;cores&quot;,
              &quot;logBase&quot;: 1,
              &quot;max&quot;: null,
              &quot;min&quot;: null,
              &quot;show&quot;: true
            },
            {
              &quot;format&quot;: &quot;short&quot;,
              &quot;label&quot;: null,
              &quot;logBase&quot;: 1,
              &quot;max&quot;: null,
              &quot;min&quot;: null,
              &quot;show&quot;: false
            }
          ],
          &quot;yaxis&quot;: {
            &quot;align&quot;: false,
            &quot;alignLevel&quot;: null
          }
        },
        {
          &quot;aliasColors&quot;: {},
          &quot;bars&quot;: false,
          &quot;dashLength&quot;: 10,
          &quot;dashes&quot;: false,
          &quot;datasource&quot;: &quot;Prometheus&quot;,
          &quot;decimals&quot;: 2,
          &quot;editable&quot;: true,
          &quot;error&quot;: false,
          &quot;fill&quot;: 0,
          &quot;fillGradient&quot;: 0,
          &quot;grid&quot;: {},
          &quot;gridPos&quot;: {
            &quot;h&quot;: 7,
            &quot;w&quot;: 24,
            &quot;x&quot;: 0,
            &quot;y&quot;: 22
          },
          &quot;hiddenSeries&quot;: false,
          &quot;id&quot;: 33,
          &quot;isNew&quot;: true,
          &quot;legend&quot;: {
            &quot;alignAsTable&quot;: true,
            &quot;avg&quot;: true,
            &quot;current&quot;: true,
            &quot;hideEmpty&quot;: true,
            &quot;hideZero&quot;: true,
            &quot;max&quot;: false,
            &quot;min&quot;: false,
            &quot;rightSide&quot;: true,
            &quot;show&quot;: true,
            &quot;sideWidth&quot;: null,
            &quot;sort&quot;: &quot;current&quot;,
            &quot;sortDesc&quot;: true,
            &quot;total&quot;: false,
            &quot;values&quot;: true
          },
          &quot;lines&quot;: true,
          &quot;linewidth&quot;: 2,
          &quot;links&quot;: [],
          &quot;nullPointMode&quot;: &quot;null&quot;,
          &quot;options&quot;: {
            &quot;alertThreshold&quot;: true
          },
          &quot;percentage&quot;: false,
          &quot;pluginVersion&quot;: &quot;8.0.3&quot;,
          &quot;pointradius&quot;: 5,
          &quot;points&quot;: false,
          &quot;renderer&quot;: &quot;flot&quot;,
          &quot;seriesOverrides&quot;: [],
          &quot;spaceLength&quot;: 10,
          &quot;stack&quot;: false,
          &quot;steppedLine&quot;: false,
          &quot;targets&quot;: [
            {
              &quot;exemplar&quot;: true,
              &quot;expr&quot;: &quot;sum (container_memory_working_set_bytes{image!=\\&quot;\\&quot;,instance=~\\&quot;^$instance$\\&quot;,namespace=~\\&quot;^$namespace$\\&quot;}) by (pod)&quot;,
              &quot;interval&quot;: &quot;&quot;,
              &quot;intervalFactor&quot;: 2,
              &quot;legendFormat&quot;: &quot;{{ pod }}&quot;,
              &quot;metric&quot;: &quot;&quot;,
              &quot;refId&quot;: &quot;A&quot;,
              &quot;step&quot;: 240
            }
          ],
          &quot;thresholds&quot;: [],
          &quot;timeFrom&quot;: null,
          &quot;timeRegions&quot;: [],
          &quot;timeShift&quot;: null,
          &quot;title&quot;: &quot;内存使用量&quot;,
          &quot;tooltip&quot;: {
            &quot;msResolution&quot;: false,
            &quot;shared&quot;: false,
            &quot;sort&quot;: 2,
            &quot;value_type&quot;: &quot;cumulative&quot;
          },
          &quot;type&quot;: &quot;graph&quot;,
          &quot;xaxis&quot;: {
            &quot;buckets&quot;: null,
            &quot;mode&quot;: &quot;time&quot;,
            &quot;name&quot;: null,
            &quot;show&quot;: true,
            &quot;values&quot;: []
          },
          &quot;yaxes&quot;: [
            {
              &quot;format&quot;: &quot;bytes&quot;,
              &quot;label&quot;: &quot;used&quot;,
              &quot;logBase&quot;: 1,
              &quot;max&quot;: null,
              &quot;min&quot;: null,
              &quot;show&quot;: true
            },
            {
              &quot;format&quot;: &quot;short&quot;,
              &quot;label&quot;: null,
              &quot;logBase&quot;: 1,
              &quot;max&quot;: null,
              &quot;min&quot;: null,
              &quot;show&quot;: false
            }
          ],
          &quot;yaxis&quot;: {
            &quot;align&quot;: false,
            &quot;alignLevel&quot;: null
          }
        },
        {
          &quot;aliasColors&quot;: {},
          &quot;bars&quot;: false,
          &quot;dashLength&quot;: 10,
          &quot;dashes&quot;: false,
          &quot;datasource&quot;: &quot;Prometheus&quot;,
          &quot;decimals&quot;: 2,
          &quot;editable&quot;: true,
          &quot;error&quot;: false,
          &quot;fill&quot;: 1,
          &quot;fillGradient&quot;: 0,
          &quot;grid&quot;: {},
          &quot;gridPos&quot;: {
            &quot;h&quot;: 7,
            &quot;w&quot;: 24,
            &quot;x&quot;: 0,
            &quot;y&quot;: 29
          },
          &quot;hiddenSeries&quot;: false,
          &quot;id&quot;: 16,
          &quot;isNew&quot;: true,
          &quot;legend&quot;: {
            &quot;alignAsTable&quot;: true,
            &quot;avg&quot;: true,
            &quot;current&quot;: true,
            &quot;hideEmpty&quot;: true,
            &quot;hideZero&quot;: true,
            &quot;max&quot;: false,
            &quot;min&quot;: false,
            &quot;rightSide&quot;: true,
            &quot;show&quot;: true,
            &quot;sideWidth&quot;: 200,
            &quot;sort&quot;: &quot;avg&quot;,
            &quot;sortDesc&quot;: true,
            &quot;total&quot;: false,
            &quot;values&quot;: true
          },
          &quot;lines&quot;: true,
          &quot;linewidth&quot;: 2,
          &quot;links&quot;: [],
          &quot;nullPointMode&quot;: &quot;null&quot;,
          &quot;options&quot;: {
            &quot;alertThreshold&quot;: true
          },
          &quot;percentage&quot;: false,
          &quot;pluginVersion&quot;: &quot;8.0.3&quot;,
          &quot;pointradius&quot;: 5,
          &quot;points&quot;: false,
          &quot;renderer&quot;: &quot;flot&quot;,
          &quot;seriesOverrides&quot;: [],
          &quot;spaceLength&quot;: 10,
          &quot;stack&quot;: false,
          &quot;steppedLine&quot;: false,
          &quot;targets&quot;: [
            {
              &quot;exemplar&quot;: true,
              &quot;expr&quot;: &quot;sum (rate (container_network_receive_bytes_total{image!=\\&quot;\\&quot;,instance=~\\&quot;^$instance$\\&quot;,namespace=~\\&quot;^$namespace$\\&quot;}[1m])) by (pod_name)&quot;,
              &quot;interval&quot;: &quot;&quot;,
              &quot;intervalFactor&quot;: 2,
              &quot;legendFormat&quot;: &quot;{{ pod }} &amp;lt; in&quot;,
              &quot;metric&quot;: &quot;network&quot;,
              &quot;refId&quot;: &quot;A&quot;,
              &quot;step&quot;: 240
            },
            {
              &quot;exemplar&quot;: true,
              &quot;expr&quot;: &quot;- sum (rate (container_network_transmit_bytes_total{image!=\\&quot;\\&quot;,instance=~\\&quot;^$instance$\\&quot;,namespace=~\\&quot;^$namespace$\\&quot;}[1m])) by (pod_name)&quot;,
              &quot;interval&quot;: &quot;&quot;,
              &quot;intervalFactor&quot;: 2,
              &quot;legendFormat&quot;: &quot;{{ pod }} &amp;gt; out&quot;,
              &quot;metric&quot;: &quot;network&quot;,
              &quot;refId&quot;: &quot;B&quot;,
              &quot;step&quot;: 240
            }
          ],
          &quot;thresholds&quot;: [],
          &quot;timeFrom&quot;: null,
          &quot;timeRegions&quot;: [],
          &quot;timeShift&quot;: null,
          &quot;title&quot;: &quot;网络&quot;,
          &quot;tooltip&quot;: {
            &quot;msResolution&quot;: false,
            &quot;shared&quot;: false,
            &quot;sort&quot;: 2,
            &quot;value_type&quot;: &quot;cumulative&quot;
          },
          &quot;type&quot;: &quot;graph&quot;,
          &quot;xaxis&quot;: {
            &quot;buckets&quot;: null,
            &quot;mode&quot;: &quot;time&quot;,
            &quot;name&quot;: null,
            &quot;show&quot;: true,
            &quot;values&quot;: []
          },
          &quot;yaxes&quot;: [
            {
              &quot;format&quot;: &quot;Bps&quot;,
              &quot;label&quot;: &quot;transmit / receive&quot;,
              &quot;logBase&quot;: 1,
              &quot;max&quot;: null,
              &quot;min&quot;: null,
              &quot;show&quot;: true
            },
            {
              &quot;format&quot;: &quot;short&quot;,
              &quot;label&quot;: null,
              &quot;logBase&quot;: 1,
              &quot;max&quot;: null,
              &quot;min&quot;: null,
              &quot;show&quot;: false
            }
          ],
          &quot;yaxis&quot;: {
            &quot;align&quot;: false,
            &quot;alignLevel&quot;: null
          }
        },
        {
          &quot;aliasColors&quot;: {},
          &quot;bars&quot;: false,
          &quot;dashLength&quot;: 10,
          &quot;dashes&quot;: false,
          &quot;datasource&quot;: &quot;Prometheus&quot;,
          &quot;decimals&quot;: 2,
          &quot;editable&quot;: true,
          &quot;error&quot;: false,
          &quot;fill&quot;: 1,
          &quot;fillGradient&quot;: 0,
          &quot;grid&quot;: {},
          &quot;gridPos&quot;: {
            &quot;h&quot;: 7,
            &quot;w&quot;: 24,
            &quot;x&quot;: 0,
            &quot;y&quot;: 36
          },
          &quot;hiddenSeries&quot;: false,
          &quot;id&quot;: 34,
          &quot;isNew&quot;: true,
          &quot;legend&quot;: {
            &quot;alignAsTable&quot;: true,
            &quot;avg&quot;: true,
            &quot;current&quot;: true,
            &quot;hideEmpty&quot;: true,
            &quot;hideZero&quot;: true,
            &quot;max&quot;: false,
            &quot;min&quot;: false,
            &quot;rightSide&quot;: true,
            &quot;show&quot;: true,
            &quot;sideWidth&quot;: 200,
            &quot;sort&quot;: &quot;current&quot;,
            &quot;sortDesc&quot;: true,
            &quot;total&quot;: false,
            &quot;values&quot;: true
          },
          &quot;lines&quot;: true,
          &quot;linewidth&quot;: 2,
          &quot;links&quot;: [],
          &quot;nullPointMode&quot;: &quot;null&quot;,
          &quot;options&quot;: {
            &quot;alertThreshold&quot;: true
          },
          &quot;percentage&quot;: false,
          &quot;pluginVersion&quot;: &quot;8.0.3&quot;,
          &quot;pointradius&quot;: 5,
          &quot;points&quot;: false,
          &quot;renderer&quot;: &quot;flot&quot;,
          &quot;seriesOverrides&quot;: [],
          &quot;spaceLength&quot;: 10,
          &quot;stack&quot;: false,
          &quot;steppedLine&quot;: false,
          &quot;targets&quot;: [
            {
              &quot;exemplar&quot;: true,
              &quot;expr&quot;: &quot;sum(container_fs_usage_bytes{image!=\\&quot;\\&quot;,instance=~\\&quot;^$instance$\\&quot;,namespace=~\\&quot;^$namespace$\\&quot;}) by (pod)&quot;,
              &quot;interval&quot;: &quot;&quot;,
              &quot;intervalFactor&quot;: 2,
              &quot;legendFormat&quot;: &quot;{{ pod }}&quot;,
              &quot;metric&quot;: &quot;network&quot;,
              &quot;refId&quot;: &quot;A&quot;,
              &quot;step&quot;: 240
            }
          ],
          &quot;thresholds&quot;: [],
          &quot;timeFrom&quot;: null,
          &quot;timeRegions&quot;: [],
          &quot;timeShift&quot;: null,
          &quot;title&quot;: &quot;磁盘使用量&quot;,
          &quot;tooltip&quot;: {
            &quot;msResolution&quot;: false,
            &quot;shared&quot;: false,
            &quot;sort&quot;: 2,
            &quot;value_type&quot;: &quot;cumulative&quot;
          },
          &quot;type&quot;: &quot;graph&quot;,
          &quot;xaxis&quot;: {
            &quot;buckets&quot;: null,
            &quot;mode&quot;: &quot;time&quot;,
            &quot;name&quot;: null,
            &quot;show&quot;: true,
            &quot;values&quot;: []
          },
          &quot;yaxes&quot;: [
            {
              &quot;format&quot;: &quot;bytes&quot;,
              &quot;label&quot;: &quot;used&quot;,
              &quot;logBase&quot;: 1,
              &quot;max&quot;: null,
              &quot;min&quot;: null,
              &quot;show&quot;: true
            },
            {
              &quot;format&quot;: &quot;short&quot;,
              &quot;label&quot;: null,
              &quot;logBase&quot;: 1,
              &quot;max&quot;: null,
              &quot;min&quot;: null,
              &quot;show&quot;: false
            }
          ],
          &quot;yaxis&quot;: {
            &quot;align&quot;: false,
            &quot;alignLevel&quot;: null
          }
        }
      ],
      &quot;refresh&quot;: false,
      &quot;schemaVersion&quot;: 30,
      &quot;style&quot;: &quot;dark&quot;,
      &quot;tags&quot;: [
        &quot;kubernetes&quot;
      ],
      &quot;templating&quot;: {
        &quot;list&quot;: [
          {
            &quot;allValue&quot;: &quot;.*&quot;,
            &quot;current&quot;: {
              &quot;selected&quot;: false,
              &quot;text&quot;: &quot;All&quot;,
              &quot;value&quot;: &quot;$__all&quot;
            },
            &quot;datasource&quot;: &quot;Prometheus&quot;,
            &quot;definition&quot;: &quot;&quot;,
            &quot;description&quot;: null,
            &quot;error&quot;: null,
            &quot;hide&quot;: 0,
            &quot;includeAll&quot;: true,
            &quot;label&quot;: &quot;Instance&quot;,
            &quot;multi&quot;: false,
            &quot;name&quot;: &quot;instance&quot;,
            &quot;options&quot;: [],
            &quot;query&quot;: {
              &quot;query&quot;: &quot;label_values(instance)&quot;,
              &quot;refId&quot;: &quot;Prometheus-instance-Variable-Query&quot;
            },
            &quot;refresh&quot;: 1,
            &quot;regex&quot;: &quot;master|node.*&quot;,
            &quot;skipUrlSync&quot;: false,
            &quot;sort&quot;: 0,
            &quot;tagValuesQuery&quot;: &quot;&quot;,
            &quot;tagsQuery&quot;: &quot;&quot;,
            &quot;type&quot;: &quot;query&quot;,
            &quot;useTags&quot;: false
          },
          {
            &quot;allValue&quot;: null,
            &quot;current&quot;: {
              &quot;selected&quot;: false,
              &quot;text&quot;: &quot;All&quot;,
              &quot;value&quot;: &quot;$__all&quot;
            },
            &quot;datasource&quot;: &quot;Prometheus&quot;,
            &quot;definition&quot;: &quot;&quot;,
            &quot;description&quot;: null,
            &quot;error&quot;: null,
            &quot;hide&quot;: 0,
            &quot;includeAll&quot;: true,
            &quot;label&quot;: &quot;Namespace&quot;,
            &quot;multi&quot;: true,
            &quot;name&quot;: &quot;namespace&quot;,
            &quot;options&quot;: [],
            &quot;query&quot;: {
              &quot;query&quot;: &quot;label_values(namespace)&quot;,
              &quot;refId&quot;: &quot;Prometheus-namespace-Variable-Query&quot;
            },
            &quot;refresh&quot;: 1,
            &quot;regex&quot;: &quot;&quot;,
            &quot;skipUrlSync&quot;: false,
            &quot;sort&quot;: 0,
            &quot;tagValuesQuery&quot;: &quot;&quot;,
            &quot;tagsQuery&quot;: &quot;&quot;,
            &quot;type&quot;: &quot;query&quot;,
            &quot;useTags&quot;: false
          }
        ]
      },
      &quot;time&quot;: {
        &quot;from&quot;: &quot;now-15m&quot;,
        &quot;to&quot;: &quot;now&quot;
      },
      &quot;timepicker&quot;: {
        &quot;refresh_intervals&quot;: [
          &quot;5s&quot;,
          &quot;10s&quot;,
          &quot;30s&quot;,
          &quot;1m&quot;,
          &quot;5m&quot;,
          &quot;15m&quot;,
          &quot;30m&quot;,
          &quot;1h&quot;,
          &quot;2h&quot;,
          &quot;1d&quot;
        ],
        &quot;time_options&quot;: [
          &quot;5m&quot;,
          &quot;15m&quot;,
          &quot;1h&quot;,
          &quot;6h&quot;,
          &quot;12h&quot;,
          &quot;24h&quot;,
          &quot;2d&quot;,
          &quot;7d&quot;,
          &quot;30d&quot;
        ]
      },
      &quot;timezone&quot;: &quot;browser&quot;,
      &quot;title&quot;: &quot;Kubernetes Pod Resources&quot;,
      &quot;uid&quot;: &quot;0Mu1btknk&quot;,
      &quot;version&quot;: 4
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2、grafana-pvc资源" tabindex="-1"><a class="header-anchor" href="#_2、grafana-pvc资源" aria-hidden="true">#</a> 2、grafana-pvc资源</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@master ~]# cat grafana-pvc.yaml
apiVersion: v1
kind: Namespace
metadata:
  name: kube-system

---

apiVersion: v1
kind: PersistentVolume
metadata:
  name: nfs-pv-grafana
  labels:
    pv: nfs-pv-grafana
spec:
  capacity:
    storage: 10Gi
  accessModes:
    - ReadWriteMany
  persistentVolumeReclaimPolicy: Retain
  nfs:
    path: /data/nfs/grafana
    server: 192.168.52.135

---

kind: PersistentVolumeClaim
apiVersion: v1
metadata:
  name: nfs-pvc-grafana
  namespace: kube-system
spec:
  accessModes:
    - ReadWriteMany
  resources:
    requests:
      storage: 10Gi
  selector:
    matchLabels:
      pv: nfs-pv-grafana
---

apiVersion: v1
kind: PersistentVolume
metadata:
  name: nfs-pv-grafana-plugin
  labels:
    pv: nfs-pv-grafana-plugin
spec:
  capacity:
    storage: 10Gi
  accessModes:
    - ReadWriteMany
  persistentVolumeReclaimPolicy: Retain
  nfs:
    path: /data/nfs/grafana-plugin
    server: 192.168.52.135

---

kind: PersistentVolumeClaim
apiVersion: v1
metadata:
  name: nfs-pvc-grafana-plugin
  namespace: kube-system
spec:
  accessModes:
    - ReadWriteMany
  resources:
    requests:
      storage: 10Gi
  selector:
    matchLabels:
      pv: nfs-pv-grafana-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3、grafana-deployment资源" tabindex="-1"><a class="header-anchor" href="#_3、grafana-deployment资源" aria-hidden="true">#</a> 3、grafana-deployment资源</h5><p>configmap、pvc资源现在volume内进行声明，在由volumemount挂载到pod内。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@master ~]# cat grafana-deploy.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: grafana-core
  namespace: kube-system
  labels:
    app: grafana
    component: core
spec:
  selector:
    matchLabels:
      app: grafana
      component: core
  replicas: 1
  template:
    metadata:
      labels:
        app: grafana
        component: core
    spec:
      containers:
      - image: grafana/grafana:7.5.6
        name: grafana-core
        imagePullPolicy: IfNotPresent
        resources:
          limits:
            cpu: 100m
            memory: 100Mi
          requests:
            cpu: 100m
            memory: 100Mi
        env:
          - name: GF_AUTH_BASIC_ENABLED
            value: &quot;true&quot;
          - name: GF_AUTH_ANONYMOUS_ENABLED
            value: &quot;false&quot;
        readinessProbe:
          httpGet:
            path: /login
            port: 3000
        volumeMounts:
        - name: grafana-persistent-storage
          mountPath: /var
        - name: grafana-plugin-storage
          mountPath: /var/lib/grafana
        - mountPath: /etc/grafana/provisioning/datasources
          name: grafana-datasources
          readOnly: false
        - mountPath: /etc/grafana/provisioning/dashboards
          name: grafana-dashboards
          readOnly: false
        - mountPath: /grafana-dashboard-definitions/0/podresource
          name: grafana-k8s-pod-resource
          readOnly: false
      volumes:
      - name: grafana-persistent-storage
        persistentVolumeClaim:
          claimName: nfs-pvc-grafana
      - name: grafana-plugin-storage
        persistentVolumeClaim:
          claimName: nfs-pvc-grafana-plugin
      - name: grafana-datasources
        configMap:
          name: grafana-datasources
      - configMap:
          name: grafana-dashboards
        name: grafana-dashboards
      - configMap:
          name: grafana-k8s-pod-resource
        name: grafana-k8s-pod-resource
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4、grafana-service资源" tabindex="-1"><a class="header-anchor" href="#_4、grafana-service资源" aria-hidden="true">#</a> 4、grafana-service资源</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@master ~]# cat grafana-svc.yaml
apiVersion: v1
kind: Service
metadata:
  name: grafana
  namespace: kube-system
  labels:
    app: grafana
    component: core
spec:
  type: NodePort
  ports:
    - port: 3000
  selector:
    app: grafana
    component: core
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@master ~]# kubectl apply -f grafana-cm.yaml
[root@master ~]# kubectl apply -f grafana-pvc.yaml
[root@master ~]# kubectl apply -f grafana-deploy.yaml
[root@master ~]# kubectl apply -f grafana-svc.yaml
[root@master ~]# kubectl get pod,svc,pv,pvc,cm -A | grep grafana
kube-system    pod/grafana-core-9cf6488c6-dddqv     1/1     Running   0          114m
kube-system   service/grafana      NodePort    10.106.6.209   &amp;lt;none&amp;gt;        3000:30583/TCP           113m
            persistentvolume/nfs-pv-grafana          10Gi       RWX            Retain           Bound    kube-system/nfs-pvc-grafana                                  103m
            persistentvolume/nfs-pv-grafana-plugin   10Gi       RWX            Retain           Bound    kube-system/nfs-pvc-grafana-plugin                           103m
kube-system   persistentvolumeclaim/nfs-pvc-grafana          Bound    nfs-pv-grafana          10Gi       RWX                           103m
kube-system   persistentvolumeclaim/nfs-pvc-grafana-plugin   Bound    nfs-pv-grafana-plugin   10Gi       RWX                           103m
kube-system       configmap/grafana-dashboards                   1      114m
kube-system       configmap/grafana-datasources                  1      114m
kube-system       configmap/grafana-k8s-pod-resource             1      114m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img loading="lazy" src="https://www.chenjiao.cloud/upload/grafana.png" alt="grafana.png" width="100%" height="100%" style="display:inline-block;">`,53),p=[t,d,o,v,a,r,m,c,q,b];function h(g,_){return s(),u("div",null,p)}const k=i(l,[["render",h],["__file","Kubernetes Make Prometheus_Grafana.html.vue"]]);export{k as default};
