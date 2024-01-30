import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as d,o as a,c as l,b as e,e as t,a as r,d as i}from"./app-QiR_lF3-.js";const c="/assets/1034759-20191125193911658-1073438860-16918406809571-L6PEiLPJ.png",v="/assets/1034759-20191126161244510-1269371002-16918406826423-0R46eDyP.png",u="/assets/1034759-20191126163610063-918814879-16918406847055-DD9YpuH0.png",m="/assets/1034759-20191126172440979-1913961041-16918406864827-Z2Y0JRrR.png",o="/assets/1034759-20191126172608230-363720611-16918406885179-h6p7TNqk.png",b="/assets/1034759-20191126183554740-658611982-169184069139711-ZfLLG_d8.png",p="/assets/1034759-20191126183711805-835833813-169184069393713-OrwLc2Qf.png",g={},x=i(`<p>dashboard是k8s的可视化管理平台，是三种管理k8s集群方法之一</p><p>首先下载镜像上传到我们的私有仓库中：hdss7-200</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># docker pull k8scn/kubernetes-dashboard-amd64:v1.8.3
# docker tag fcac9aa03fd6 harbor.od.com/public/dashboard:v1.8.3
# docker push harbor.od.com/public/dashboard:v1.8.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编辑dashboard资源配置清单：</p><p>1、rbac.yaml</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># vi rbac.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># mkdir -p /data/k8s-yaml/dashboard
# cd /data/k8s-yaml/dashboard
apiVersion: v1
kind: ServiceAccount
metadata:
  labels:
    k8s-app: kubernetes-dashboard
    addonmanager.kubernetes.io/mode: Reconcile
  name: kubernetes-dashboard-admin
  namespace: kube-system
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: kubernetes-dashboard-admin
  namespace: kube-system
  labels:
    k8s-app: kubernetes-dashboard
    addonmanager.kubernetes.io/mode: Reconcile
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: cluster-admin
subjects:
- kind: ServiceAccount
  name: kubernetes-dashboard-admin
  namespace: kube-system
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、dp.yaml</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># vi dp.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>apiVersion: apps/v1
kind: Deployment
metadata:
  name: kubernetes-dashboard
  namespace: kube-system
  labels:
    k8s-app: kubernetes-dashboard
    kubernetes.io/cluster-service: &quot;true&quot;
    addonmanager.kubernetes.io/mode: Reconcile
spec:
  selector:
    matchLabels:
      k8s-app: kubernetes-dashboard
  template:
    metadata:
      labels:
        k8s-app: kubernetes-dashboard
      annotations:
        scheduler.alpha.kubernetes.io/critical-pod: &#39;&#39;
    spec:
      priorityClassName: system-cluster-critical
      containers:
      - name: kubernetes-dashboard
        image: harbor.od.com/public/dashboard:v1.8.3
        resources:
          limits:
            cpu: 100m
            memory: 300Mi
          requests:
            cpu: 50m
            memory: 100Mi
        ports:
        - containerPort: 8443
          protocol: TCP
        args:
          # PLATFORM-SPECIFIC ARGS HERE
          - --auto-generate-certificates
        volumeMounts:
        - name: tmp-volume
          mountPath: /tmp
        livenessProbe:
          httpGet:
            scheme: HTTPS
            path: /
            port: 8443
          initialDelaySeconds: 30
          timeoutSeconds: 30
      volumes:
      - name: tmp-volume
        emptyDir: {}
      serviceAccountName: kubernetes-dashboard-admin
      tolerations:
      - key: &quot;CriticalAddonsOnly&quot;
        operator: &quot;Exists&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、svc.yaml</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># vi svc.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>apiVersion: v1
kind: Service
metadata:
  name: kubernetes-dashboard
  namespace: kube-system
  labels:
    k8s-app: kubernetes-dashboard
    kubernetes.io/cluster-service: &quot;true&quot;
    addonmanager.kubernetes.io/mode: Reconcile
spec:
  selector:
    k8s-app: kubernetes-dashboard
  ports:
  - port: 443
    targetPort: 8443
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、ingress.yaml</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># vi ingress.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: kubernetes-dashboard
  namespace: kube-system
  annotations:
    kubernetes.io/ingress.class: traefik
spec:
  rules:
  - host: dashboard.od.com
    http:
      paths:
      - backend:
          serviceName: kubernetes-dashboard
          servicePort: 443
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建资源：任意node</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># kubectl create -f http://k8s-yaml.od.com/dashboard/rbac.yaml
# kubectl create -f http://k8s-yaml.od.com/dashboard/dp.yaml
# kubectl create -f http://k8s-yaml.od.com/dashboard/svc.yaml
# kubectl create -f http://k8s-yaml.od.com/dashboard/ingress.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加域名解析：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># vi /var/named/od.com.zone
dashboard          A    10.4.7.10
# systemctl restart named
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过浏览器访问：</p>`,21),h={href:"http://dashboard.od.com/",target:"_blank",rel:"noopener noreferrer"},k=i('<figure><img src="'+c+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>美好的点点点运维开始了~</p><p>但是，我们可以看到我们安装1.8版本的dashboard，默认是可以跳过验证的：</p><figure><img src="'+v+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>很显然，跳过登录，是不科学的，因为我们在配置dashboard的rbac权限时，绑定的角色是system:admin，这个是集群管理员的角色，权限很大，所以这里我们把版本换成1.10以上版本</p><p>下载1.10.1版本：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># docker pull loveone/kubernetes-dashboard-amd64:v1.10.1
# docker tag f9aed6605b81 harbor.od.com/public/dashboard:v1.10.1
# docker push harbor.od.com/public/dashboard:v1.10.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改dp.yaml重新应用，我直接用edit修改了，没有使用apply</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># kubectl edit deploy kubernetes-dashboard -n kube-system
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>等待滚动发布完成后，在刷新dashboard页面：</p><figure><img src="`+u+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>可以看到这里原来的skip跳过已经没有了，我们如果想登陆，必须输入token，那我们如何获取token呢：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># kubectl get secret  -n kube-system
# kubectl describe secret kubernetes-dashboard-admin-token-pg77n  -n kube-system
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+m+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>这样我们就拿到了token，接下来我们试试能不能登录：</p><p>我们发现我们还是无法登录，原因是必须使用https登录，接下来我们需要申请证书：</p><figure><img src="'+o+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>接下来我们申请证书：</p><p>依然使用cfssl来申请证书：hdss7-200</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># cd /opt/certs/
# vi dashboard-csr.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
    &quot;CN&quot;: &quot;*.od.com&quot;,
    &quot;hosts&quot;: [
    ],
    &quot;key&quot;: {
        &quot;algo&quot;: &quot;rsa&quot;,
        &quot;size&quot;: 2048
    },
    &quot;names&quot;: [
        {
            &quot;C&quot;: &quot;CN&quot;,
            &quot;ST&quot;: &quot;beijing&quot;,
            &quot;L&quot;: &quot;beijing&quot;,
            &quot;O&quot;: &quot;od&quot;,
            &quot;OU&quot;: &quot;ops&quot;
        }
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># cfssl gencert -ca=ca.pem -ca-key=ca-key.pem -config=ca-config.json -profile=server dashboard-csr.json |cfssl-json -bare dashboard
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后拷贝到我们nginx的服务器上：7-11 7-12 都需要</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># cd /etc/nginx/
# mkdir certs
# cd certs
# scp hdss7-200:/opt/cert/dash* ./
# cd /etc/nginx/conf.d/
# vi dashboard.od.com.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>server {
    listen       80;
    server_name  dashboard.od.com;

    rewrite ^(.*)$ https://\${server_name}$1 permanent;
}
server {
    listen       443 ssl;
    server_name  dashboard.od.com;

    ssl_certificate &quot;certs/dashboard.pem&quot;;
    ssl_certificate_key &quot;certs/dashboard-key.pem&quot;;
    ssl_session_cache shared:SSL:1m;
    ssl_session_timeout  10m;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;

    location / {
        proxy_pass http://default_backend_traefik;
        proxy_set_header Host       $http_host;
        proxy_set_header x-forwarded-for $proxy_add_x_forwarded_for;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># nginx -t
# nginx -s reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后刷新页面：虽然证书无效(因为是自签证书)，但是已经是https了，试下我们刚才的token能不能登录了</p><figure><img src="`+b+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><figure><img src="'+p+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>可以登录了~</p><p>登录是登录了，但是我们要思考一个问题，我们使用rbac授权来访问dashboard,如何做到权限精细化呢？比如开发，只能看，不能摸，不同的项目组，看到的资源应该是不一样的，测试看到的应该是测试相关的资源。</p><p>我们在下一章详解sa授权和ua授权。</p><pre><code>分类:             [Kubernetes](https://www.cnblogs.com/slim-liu/category/1588426.html)
</code></pre>`,33);function _(f,y){const n=d("ExternalLinkIcon");return a(),l("div",null,[x,e("p",null,[e("a",h,[t("http://dashboard.od.com"),r(n)])]),k])}const R=s(g,[["render",_],["__file","kubernetes进阶（五）dashboard--WEB管理.html.vue"]]);export{R as default};
