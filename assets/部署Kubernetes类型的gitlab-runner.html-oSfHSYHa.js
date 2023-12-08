import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as e,e as a}from"./app-ZjnKAPBU.js";const i="/assets/image-20220815102732430-yLuuQjFw.png",t={},c=a(`<h1 id="一、安装helm工具" tabindex="-1"><a class="header-anchor" href="#一、安装helm工具" aria-hidden="true">#</a> 一、安装helm工具</h1><h2 id="_1-下载软件包" tabindex="-1"><a class="header-anchor" href="#_1-下载软件包" aria-hidden="true">#</a> （1）下载软件包</h2><pre><code>wget https://get.helm.sh/helm-v3.8.0-linux-amd64.tar.gz
</code></pre><h2 id="_2-解压并拷贝文件位置" tabindex="-1"><a class="header-anchor" href="#_2-解压并拷贝文件位置" aria-hidden="true">#</a> （2）解压并拷贝文件位置</h2><pre><code>tar -zxvf helm-v3.8.0-linux-amd64.tar.gz

mv linux-amd64/helm /usr/local/bin/helm
</code></pre><p>这里需要注意的是将 /usr/local/bin 添加到环境变量中</p><h1 id="二、配置chart存储库" tabindex="-1"><a class="header-anchor" href="#二、配置chart存储库" aria-hidden="true">#</a> 二、配置chart存储库</h1><h2 id="_1-添加chart存储库" tabindex="-1"><a class="header-anchor" href="#_1-添加chart存储库" aria-hidden="true">#</a> （1）添加chart存储库</h2><pre><code>helm repo add gitlab https://charts.gitlab.io
</code></pre><h2 id="_2-验证源" tabindex="-1"><a class="header-anchor" href="#_2-验证源" aria-hidden="true">#</a> （2）验证源</h2><pre><code>helm repo list
</code></pre><h2 id="_3-查询可安装的gitlab-runner-chart" tabindex="-1"><a class="header-anchor" href="#_3-查询可安装的gitlab-runner-chart" aria-hidden="true">#</a> （3）查询可安装的gitlab-runner chart</h2><pre><code>helm search repo -l gitlab/gitlab-runner
</code></pre><p>然后查询gitlab的版本，根据gitlab的版本选择gitlab-runner的版本。比如这里查询到gitlab的版本是14.9.0，runner选择0.39.0</p><pre><code>helm fetch gitlab/gitlab-runner --version=0.39.0
</code></pre><h1 id="三、编辑配置文件" tabindex="-1"><a class="header-anchor" href="#三、编辑配置文件" aria-hidden="true">#</a> 三、编辑配置文件</h1><h2 id="_1-首先解压文件" tabindex="-1"><a class="header-anchor" href="#_1-首先解压文件" aria-hidden="true">#</a> （1）首先解压文件</h2><pre><code>tar -zxvf gitlab-runner-0.39.0.tgz
</code></pre><h2 id="_2-编辑配置文件" tabindex="-1"><a class="header-anchor" href="#_2-编辑配置文件" aria-hidden="true">#</a> （2）编辑配置文件</h2><pre><code>cd gitlab-runner
vi values.yaml
</code></pre><p>然后根据实际需要配置文件</p><h1 id="四、部署chart" tabindex="-1"><a class="header-anchor" href="#四、部署chart" aria-hidden="true">#</a> 四、部署Chart</h1><p>使用如下命令部署</p><pre><code>cd ..
kubectl create namespace gitlab-runner
helm install gitlab-runner --namespace gitlab-runner ./gitlab-runner
</code></pre><p>若后续更新了配置文件，则使用如下命令更新即可</p><pre><code>helm upgrade gitlab-runner --namespace gitlab-runner ./gitlab-runner
</code></pre><p>至此即可在gitlab上看到runner了 <img src="`+i+`" alt="image-20220815102732430" loading="lazy"></p><h1 id="五、一份已经配置好的values文件" tabindex="-1"><a class="header-anchor" href="#五、一份已经配置好的values文件" aria-hidden="true">#</a> 五、一份已经配置好的values文件</h1><h2 id="values-yaml" tabindex="-1"><a class="header-anchor" href="#values-yaml" aria-hidden="true">#</a> values.yaml</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">## GitLab Runner Image</span>
<span class="token comment">##</span>
<span class="token comment">## By default it&#39;s using registry.gitlab.com/gitlab-org/gitlab-runner:alpine-v{VERSION}</span>
<span class="token comment">## where {VERSION} is taken from Chart.yaml from appVersion field</span>
<span class="token comment">##</span>
<span class="token comment">## DEPRECATED: Setting \`image: registry.gitlab.com/gitlab-org/gitlab-runner:alpine-v11.6.0\` is deprecated</span>
<span class="token comment">##</span>
<span class="token comment">## ref: https://gitlab.com/gitlab-org/gitlab-runner/container_registry/29383?orderBy=NAME&amp;sort=asc&amp;search[]=alpine-v&amp;search[]=</span>
<span class="token comment">##</span>
<span class="token comment">## Note: If you change the image to the ubuntu release</span>
<span class="token comment">##       don&#39;t forget to change the securityContext;</span>
<span class="token comment">##       these images run on different user IDs.</span>
<span class="token comment">##</span>
<span class="token key atrule">image</span><span class="token punctuation">:</span>
  <span class="token key atrule">registry</span><span class="token punctuation">:</span> registry.gitlab.com
  <span class="token key atrule">image</span><span class="token punctuation">:</span> gitlab<span class="token punctuation">-</span>org/gitlab<span class="token punctuation">-</span>runner
  <span class="token comment"># tag: alpine-v11.6.0</span>

<span class="token comment">## Specify a imagePullPolicy for the main runner deployment</span>
<span class="token comment">## &#39;Always&#39; if imageTag is &#39;latest&#39;, else set to &#39;IfNotPresent&#39;</span>
<span class="token comment">##</span>
<span class="token comment">## Note: it does not apply to job containers launched by this executor.</span>
<span class="token comment">## Use \`pull_policy\` in [runners.kubernetes] to change it.</span>
<span class="token comment">##</span>
<span class="token comment">## ref: https://kubernetes.io/docs/concepts/containers/images/#pre-pulled-images</span>
<span class="token comment">##</span>
<span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> IfNotPresent

<span class="token comment">## Specifying ImagePullSecrets on a Pod</span>
<span class="token comment">## Kubernetes supports specifying container image registry keys on a Pod.</span>
<span class="token comment">## ref: https://kubernetes.io/docs/concepts/containers/images/#specifying-imagepullsecrets-on-a-pod</span>
<span class="token comment">##</span>
<span class="token comment"># imagePullSecrets:</span>
<span class="token comment">#   - name: &quot;image-pull-secret&quot;</span>

<span class="token comment">## Timeout, in seconds, for liveness and readiness probes of a runner pod.</span>
<span class="token comment"># probeTimeoutSeconds: 1</span>

<span class="token comment">## How many runner pods to launch.</span>
<span class="token comment">##</span>
<span class="token comment">## Note: Using more than one replica is not supported with a runnerToken. Use a runnerRegistrationToken</span>
<span class="token comment">## to create multiple runner replicas.</span>
<span class="token comment"># replicas: 1</span>

<span class="token comment">## How many old ReplicaSets for this Deployment you want to retain</span>
<span class="token comment"># revisionHistoryLimit: 10</span>

<span class="token comment">## The GitLab Server URL (with protocol) that want to register the runner against</span>
<span class="token comment">## ref: https://docs.gitlab.com/runner/commands/README.html#gitlab-runner-register</span>
<span class="token comment">##</span>
<span class="token key atrule">gitlabUrl</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//gitlabd.xxxxx.com/

<span class="token comment">## The Registration Token for adding new Runners to the GitLab Server. This must</span>
<span class="token comment">## be retrieved from your GitLab Instance.</span>
<span class="token comment">## ref: https://docs.gitlab.com/ce/ci/runners/README.html</span>
<span class="token comment">##</span>
<span class="token key atrule">runnerRegistrationToken</span><span class="token punctuation">:</span> <span class="token string">&quot;xxxxxxxxxx&quot;</span>

<span class="token comment">## The Runner Token for adding new Runners to the GitLab Server. This must</span>
<span class="token comment">## be retrieved from your GitLab Instance. It is token of already registered runner.</span>
<span class="token comment">## ref: (we don&#39;t yet have docs for that, but we want to use existing token)</span>
<span class="token comment">##</span>
<span class="token comment"># runnerToken: &quot;&quot;</span>
<span class="token comment">#</span>

<span class="token comment">## Unregister runner before termination</span>
<span class="token comment">##</span>
<span class="token comment">## Updating the runner&#39;s chart version or configuration will cause the runner container</span>
<span class="token comment">## to be terminated and created again. This may cause your GitLab instance to reference</span>
<span class="token comment">## non-existant runners. Un-registering the runner before termination mitigates this issue.</span>
<span class="token comment">## ref: https://docs.gitlab.com/runner/commands/README.html#gitlab-runner-unregister</span>
<span class="token comment">##</span>
<span class="token comment">## Please set unregisterRunners to false if you set unregisterRunner to true as only</span>
<span class="token comment">## one preStop action is supported.</span>
<span class="token comment">##</span>
<span class="token comment"># unregisterRunner: true</span>

<span class="token comment">## Unregister all runners before termination</span>
<span class="token comment">##</span>
<span class="token comment">## Updating the runner&#39;s chart version or configuration will cause the runner container</span>
<span class="token comment">## to be terminated and created again. This may cause your Gitlab instance to reference</span>
<span class="token comment">## non-existant runners. Un-registering the runner before termination mitigates this issue.</span>
<span class="token comment">## ref: https://docs.gitlab.com/runner/commands/README.html#gitlab-runner-unregister</span>
<span class="token comment">##</span>
<span class="token comment"># unregisterRunners: true</span>

<span class="token comment">## When stopping the runner, give it time to wait for its jobs to terminate.</span>
<span class="token comment">##</span>
<span class="token comment">## Updating the runner&#39;s chart version or configuration will cause the runner container</span>
<span class="token comment">## to be terminated with a graceful stop request. terminationGracePeriodSeconds</span>
<span class="token comment">## instructs Kubernetes to wait long enough for the runner pod to terminate gracefully.</span>
<span class="token comment">## ref: https://docs.gitlab.com/runner/commands/#signals</span>
<span class="token key atrule">terminationGracePeriodSeconds</span><span class="token punctuation">:</span> <span class="token number">3600</span>

<span class="token comment">## Set the certsSecretName in order to pass custom certficates for GitLab Runner to use</span>
<span class="token comment">## Provide resource name for a Kubernetes Secret Object in the same namespace,</span>
<span class="token comment">## this is used to populate the /home/gitlab-runner/.gitlab-runner/certs/ directory</span>
<span class="token comment">## ref: https://docs.gitlab.com/runner/configuration/tls-self-signed.html#supported-options-for-self-signed-certificates</span>
<span class="token comment">##</span>
<span class="token comment"># certsSecretName:</span>

<span class="token comment">## Configure the maximum number of concurrent jobs</span>
<span class="token comment">## ref: https://docs.gitlab.com/runner/configuration/advanced-configuration.html#the-global-section</span>
<span class="token comment">##</span>
<span class="token key atrule">concurrent</span><span class="token punctuation">:</span> <span class="token number">10</span>

<span class="token comment">## Defines in seconds how often to check GitLab for a new builds</span>
<span class="token comment">## ref: https://docs.gitlab.com/runner/configuration/advanced-configuration.html#the-global-section</span>
<span class="token comment">##</span>
<span class="token key atrule">checkInterval</span><span class="token punctuation">:</span> <span class="token number">30</span>

<span class="token comment">## Configure GitLab Runner&#39;s logging level. Available values are: debug, info, warn, error, fatal, panic</span>
<span class="token comment">## ref: https://docs.gitlab.com/runner/configuration/advanced-configuration.html#the-global-section</span>
<span class="token comment">##</span>
<span class="token comment"># logLevel:</span>

<span class="token comment">## Configure GitLab Runner&#39;s logging format. Available values are: runner, text, json</span>
<span class="token comment">## ref: https://docs.gitlab.com/runner/configuration/advanced-configuration.html#the-global-section</span>
<span class="token comment">##</span>
<span class="token comment"># logFormat:</span>

<span class="token comment">## Configure GitLab Runner&#39;s Sentry DSN.</span>
<span class="token comment">## ref https://docs.gitlab.com/runner/configuration/advanced-configuration.html#the-global-section</span>
<span class="token comment">##</span>
<span class="token comment"># sentryDsn:</span>

<span class="token comment">## A custom bash script that will be executed prior to the invocation</span>
<span class="token comment">## gitlab-runner process</span>
<span class="token comment">#</span>
<span class="token comment">#preEntrypointScript: |</span>
<span class="token comment">#  echo &quot;hello&quot;</span>

<span class="token comment">## Specify whether the runner should start the session server.</span>
<span class="token comment">## Defaults to false</span>
<span class="token comment">## ref:</span>
<span class="token comment">##</span>
<span class="token comment">## When sessionServer is enabled, the user can either provide a public publicIP</span>
<span class="token comment">## or either rely on the external IP auto discovery</span>
<span class="token comment">## When a serviceAccountName is used with the automounting to the pod disable,</span>
<span class="token comment">## we recommend the usage of the publicIP</span>
<span class="token key atrule">sessionServer</span><span class="token punctuation">:</span>
  <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token comment"># annotations: {}</span>
  <span class="token comment"># timeout: 1800</span>
  <span class="token comment"># internalPort: 8093</span>
  <span class="token comment"># externalPort: 9000</span>
  <span class="token comment"># publicIP: &quot;&quot;</span>
  <span class="token comment"># loadBalancerSourceRanges:</span>
  <span class="token comment">#   - 1.2.3.4/32</span>

<span class="token comment">## For RBAC support:</span>
<span class="token key atrule">rbac</span><span class="token punctuation">:</span>
  <span class="token key atrule">create</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

  <span class="token comment">## Define specific rbac permissions.</span>
  <span class="token comment">## DEPRECATED: see .Values.rbac.rules</span>
  <span class="token comment"># resources: [&quot;pods&quot;, &quot;pods/exec&quot;, &quot;secrets&quot;]</span>
  <span class="token comment"># verbs: [&quot;get&quot;, &quot;list&quot;, &quot;watch&quot;, &quot;create&quot;, &quot;patch&quot;, &quot;delete&quot;]</span>

  <span class="token comment">## Define list of rules to be added to the rbac role permissions.</span>
  <span class="token comment">## Each rule supports the keys:</span>
  <span class="token comment">## - apiGroups: default &quot;&quot; (indicates the core API group) if missing or empty.</span>
  <span class="token comment">## - resources: default &quot;*&quot; if missing or empty.</span>
  <span class="token comment">## - verbs: default &quot;*&quot; if missing or empty.</span>
  <span class="token key atrule">rules</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token comment"># - resources: [&quot;configmaps&quot;, &quot;pods&quot;, &quot;pods/attach&quot;, &quot;secrets&quot;, &quot;services&quot;]</span>
  <span class="token comment">#   verbs: [&quot;get&quot;, &quot;list&quot;, &quot;watch&quot;, &quot;create&quot;, &quot;patch&quot;, &quot;delete&quot;]</span>
  <span class="token comment"># - apiGroups: [&quot;&quot;]</span>
  <span class="token comment">#   resources: [&quot;pods/exec&quot;]</span>
  <span class="token comment">#   verbs: [&quot;create&quot;, &quot;patch&quot;, &quot;delete&quot;]</span>

  <span class="token comment">## Run the gitlab-bastion container with the ability to deploy/manage containers of jobs</span>
  <span class="token comment">## cluster-wide or only within namespace</span>
  <span class="token key atrule">clusterWideAccess</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

  <span class="token comment">## Use the following Kubernetes Service Account name if RBAC is disabled in this Helm chart (see rbac.create)</span>
  <span class="token comment">##</span>
  <span class="token comment"># serviceAccountName: default</span>

  <span class="token comment">## Specify annotations for Service Accounts, useful for annotations such as eks.amazonaws.com/role-arn</span>
  <span class="token comment">##</span>
  <span class="token comment">## ref: https://docs.aws.amazon.com/eks/latest/userguide/specify-service-account-role.html</span>
  <span class="token comment">##</span>
  <span class="token comment"># serviceAccountAnnotations: {}</span>

  <span class="token comment">## Use podSecurity Policy</span>
  <span class="token comment">## ref: https://kubernetes.io/docs/concepts/policy/pod-security-policy/</span>
  <span class="token key atrule">podSecurityPolicy</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token key atrule">resourceNames</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> gitlab<span class="token punctuation">-</span>runner

  <span class="token comment">## Specify one or more imagePullSecrets used for pulling the runner image</span>
  <span class="token comment">##</span>
  <span class="token comment">## ref: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/#add-imagepullsecrets-to-a-service-account</span>
  <span class="token comment">##</span>
  <span class="token comment"># imagePullSecrets: []</span>

<span class="token comment">## Configure integrated Prometheus metrics exporter</span>
<span class="token comment">##</span>
<span class="token comment">## ref: https://docs.gitlab.com/runner/monitoring/#configuration-of-the-metrics-http-server</span>
<span class="token comment">##</span>
<span class="token key atrule">metrics</span><span class="token punctuation">:</span>
  <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

  <span class="token comment">## Define a name for the metrics port</span>
  <span class="token comment">##</span>
  <span class="token key atrule">portName</span><span class="token punctuation">:</span> metrics

  <span class="token comment">## Provide a port number for the integrated Prometheus metrics exporter</span>
  <span class="token comment">##</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">9252</span>

  <span class="token comment">## Configure a prometheus-operator serviceMonitor to allow autodetection of</span>
  <span class="token comment">## the scraping target. Requires enabling the service resource below.</span>
  <span class="token comment">##</span>
  <span class="token key atrule">serviceMonitor</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

    <span class="token comment">## Provide additional labels to the service monitor ressource</span>
    <span class="token comment">##</span>
    <span class="token comment">## labels: {}</span>

    <span class="token comment">## Define a scrape interval (otherwise prometheus default is used)</span>
    <span class="token comment">##</span>
    <span class="token comment">## ref: https://prometheus.io/docs/prometheus/latest/configuration/configuration/#scrape_config</span>
    <span class="token comment">##</span>
    <span class="token comment"># interval: &quot;&quot;</span>

    <span class="token comment">## Specify the scrape protocol scheme e.g., https or http</span>
    <span class="token comment">##</span>
    <span class="token comment"># scheme: &quot;http&quot;</span>

    <span class="token comment">## Supply a tls configuration for the service monitor</span>
    <span class="token comment">##</span>
    <span class="token comment">## ref: https://github.com/helm/charts/blob/master/stable/prometheus-operator/crds/crd-servicemonitor.yaml</span>
    <span class="token comment">##</span>
    <span class="token comment"># tlsConfig: {}</span>

    <span class="token comment">## The URI path where prometheus metrics can be scraped from</span>
    <span class="token comment">##</span>
    <span class="token comment"># path: &quot;/metrics&quot;</span>

    <span class="token comment">## A list of MetricRelabelConfigs to apply to samples before ingestion</span>
    <span class="token comment">##</span>
    <span class="token comment">## ref: https://prometheus.io/docs/prometheus/latest/configuration/configuration/#metric_relabel_configs</span>
    <span class="token comment">##</span>
    <span class="token comment"># metricRelabelings: []</span>

    <span class="token comment">## A list of RelabelConfigs to apply to samples before scraping</span>
    <span class="token comment">##</span>
    <span class="token comment">## ref: https://prometheus.io/docs/prometheus/latest/configuration/configuration/#relabel_config</span>
    <span class="token comment">##</span>
    <span class="token comment">## relabelings: []</span>

<span class="token comment">## Configure a service resource e.g., to allow scraping metrics via</span>
<span class="token comment">## prometheus-operator serviceMonitor</span>
<span class="token key atrule">service</span><span class="token punctuation">:</span>
  <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

  <span class="token comment">## Provide additonal labels for the service</span>
  <span class="token comment">##</span>
  <span class="token comment"># labels: {}</span>

  <span class="token comment">## Provide additonal annotations for the service</span>
  <span class="token comment">##</span>
  <span class="token comment"># annotations: {}</span>

  <span class="token comment">## Define a specific ClusterIP if you do not want a dynamic one</span>
  <span class="token comment">##</span>
  <span class="token comment">## ref: https://kubernetes.io/docs/concepts/services-networking/service/#choosing-your-own-ip-address</span>
  <span class="token comment">##</span>
  <span class="token comment"># clusterIP: &quot;&quot;</span>

  <span class="token comment">## Define a list of one or more external IPs for this service</span>
  <span class="token comment">##</span>
  <span class="token comment">## ref: https://kubernetes.io/docs/concepts/services-networking/service/#external-ips</span>
  <span class="token comment">##</span>
  <span class="token comment"># externalIPs: []</span>

  <span class="token comment">## Provide a specific loadbalancerIP e.g., of an external Loadbalancer</span>
  <span class="token comment">##</span>
  <span class="token comment">## ref: https://kubernetes.io/docs/concepts/services-networking/service/#loadbalancer</span>
  <span class="token comment">##</span>
  <span class="token comment"># loadBalancerIP: &quot;&quot;</span>

  <span class="token comment">## Provide a list of source IP ranges to have access to this service</span>
  <span class="token comment">##</span>
  <span class="token comment">## ref: https://kubernetes.io/docs/concepts/services-networking/service/#aws-nlb-support</span>
  <span class="token comment">##</span>
  <span class="token comment"># loadBalancerSourceRanges: []</span>

  <span class="token comment">## Specify the service type e.g., ClusterIP, NodePort, Loadbalancer or ExternalName</span>
  <span class="token comment">##</span>
  <span class="token comment">## ref: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types</span>
  <span class="token comment">##</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> ClusterIP

  <span class="token comment">## Specify the services metrics nodeport if you use a service of type nodePort</span>
  <span class="token comment">##</span>
  <span class="token comment"># metrics:</span>

    <span class="token comment">## Specify the node port under which the prometheus metrics of the runner are made</span>
    <span class="token comment">## available.</span>
    <span class="token comment">##</span>
    <span class="token comment">## ref: https://kubernetes.io/docs/concepts/services-networking/service/#nodeport</span>
    <span class="token comment">##</span>
    <span class="token comment"># nodePort: &quot;&quot;</span>

  <span class="token comment">## Provide a list of additional ports to be exposed by this service</span>
  <span class="token comment">##</span>
  <span class="token comment">## ref: https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service</span>
  <span class="token comment">##</span>
  <span class="token comment"># additionalPorts: []</span>

<span class="token comment">## Configuration for the Pods that the runner launches for each new job</span>
<span class="token comment">##</span>
<span class="token key atrule">runners</span><span class="token punctuation">:</span>
  <span class="token comment"># runner configuration, where the multi line strings is evaluated as</span>
  <span class="token comment"># template so you can specify helm values inside of it.</span>
  <span class="token comment">#</span>
  <span class="token comment"># tpl: https://helm.sh/docs/howto/charts_tips_and_tricks/#using-the-tpl-function</span>
  <span class="token comment"># runner configuration: https://docs.gitlab.com/runner/configuration/advanced-configuration.html</span>
  <span class="token key atrule">config</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
    [[runners]]
      [runners.kubernetes]
        namespace = &quot;{{.Release.Namespace}}&quot;
        image = &quot;ubuntu:16.04&quot;</span>

  <span class="token comment">## Which executor should be used</span>
  <span class="token comment">##</span>
  <span class="token comment"># executor: kubernetes</span>

  <span class="token comment">## Default container image to use for builds when none is specified</span>
  <span class="token comment">##</span>
  <span class="token comment">## DEPRECATED: See https://docs.gitlab.com/runner/install/kubernetes.html#additional-configuration</span>
  <span class="token comment"># image: ubuntu:16.04</span>

  <span class="token comment">## Specify one or more imagePullSecrets</span>
  <span class="token comment">##</span>
  <span class="token comment">## ref: https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/</span>
  <span class="token comment">##</span>
  <span class="token comment">## DEPRECATED: See https://docs.gitlab.com/runner/install/kubernetes.html#additional-configuration</span>
  <span class="token comment"># imagePullSecrets: []</span>

  <span class="token comment">## Specify the image pull policy: never, if-not-present, always. The cluster default will be used if not set.</span>
  <span class="token comment">##</span>
  <span class="token comment">## DEPRECATED: See https://docs.gitlab.com/runner/install/kubernetes.html#additional-configuration</span>
  <span class="token comment"># imagePullPolicy: &quot;&quot;</span>

  <span class="token comment">## Defines number of concurrent requests for new job from GitLab</span>
  <span class="token comment">## ref: https://docs.gitlab.com/runner/configuration/advanced-configuration.html#the-runners-section</span>
  <span class="token comment">##</span>
  <span class="token comment">## DEPRECATED: See https://docs.gitlab.com/runner/install/kubernetes.html#additional-configuration</span>
  <span class="token comment"># requestConcurrency: 1</span>

  <span class="token comment">## Specify whether the runner should be locked to a specific project: true, false. Defaults to true.</span>
  <span class="token comment">##</span>
  <span class="token comment"># locked: true</span>

  <span class="token comment">## Specify the tags associated with the runner. Comma-separated list of tags.</span>
  <span class="token comment">##</span>
  <span class="token comment">## ref: https://docs.gitlab.com/ee/ci/runners/configure_runners.html#use-tags-to-control-which-jobs-a-runner-can-run</span>
  <span class="token comment">##</span>
  <span class="token key atrule">tags</span><span class="token punctuation">:</span> <span class="token string">&quot;16c32g,k8s,docker,linux-docker,cidana&quot;</span>

  <span class="token comment">## Specify the name for the runner.</span>
  <span class="token comment">##</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;share-runner-16c32g-k8s-execute&quot;</span>

  <span class="token comment">## Specify the maximum timeout (in seconds) that will be set for job when using this Runner</span>
  <span class="token comment">##</span>
  <span class="token comment"># maximumTimeout: &quot;&quot;</span>

  <span class="token comment">## Specify if jobs without tags should be run.</span>
  <span class="token comment">## If not specified, Runner will default to true if no tags were specified. In other case it will</span>
  <span class="token comment">## default to false.</span>
  <span class="token comment">##</span>
  <span class="token comment">## ref: https://docs.gitlab.com/ee/ci/runners/configure_runners.html#set-a-runner-to-run-untagged-jobs</span>
  <span class="token comment">##</span>
  <span class="token comment"># runUntagged: true</span>

  <span class="token comment">## Specify whether the runner should only run protected branches.</span>
  <span class="token comment">## Defaults to false.</span>
  <span class="token comment">##</span>
  <span class="token comment">## ref: https://docs.gitlab.com/ee/ci/runners/configure_runners.html#prevent-runners-from-revealing-sensitive-information</span>
  <span class="token comment">##</span>
  <span class="token comment"># protected: true</span>

  <span class="token comment">## Run all containers with the privileged flag enabled</span>
  <span class="token comment">## This will allow the docker:dind image to run if you need to run Docker</span>
  <span class="token comment">## commands. Please read the docs before turning this on:</span>
  <span class="token comment">## ref: https://docs.gitlab.com/runner/executors/kubernetes.html#using-dockerdind</span>
  <span class="token comment">##</span>
  <span class="token comment">## DEPRECATED: See https://docs.gitlab.com/runner/install/kubernetes.html#additional-configuration</span>
  <span class="token comment"># privileged: false</span>

  <span class="token comment">## The name of the secret containing runner-token and runner-registration-token</span>
  <span class="token comment"># secret: gitlab-runner</span>

  <span class="token comment">## Namespace to run Kubernetes jobs in (defaults to the same namespace of this release)</span>
  <span class="token comment">##</span>
  <span class="token comment">## DEPRECATED: See https://docs.gitlab.com/runner/install/kubernetes.html#additional-configuration</span>
  <span class="token comment"># namespace:</span>

  <span class="token comment">## The amount of time, in seconds, that needs to pass before the runner will</span>
  <span class="token comment">## timeout attempting to connect to the container it has just created.</span>
  <span class="token comment">## ref: https://docs.gitlab.com/runner/executors/kubernetes.html</span>
  <span class="token comment">## DEPRECATED: See https://docs.gitlab.com/runner/install/kubernetes.html#additional-configuration</span>
  <span class="token comment"># pollTimeout: 180</span>

  <span class="token comment">## Set maximum build log size in kilobytes, by default set to 4096 (4MB)</span>
  <span class="token comment">## ref: https://docs.gitlab.com/runner/configuration/advanced-configuration.html#the-runners-section</span>
  <span class="token comment">## DEPRECATED: See https://docs.gitlab.com/runner/install/kubernetes.html#additional-configuration</span>
  <span class="token comment"># outputLimit: 4096</span>

  <span class="token comment">## Distributed runners caching</span>
  <span class="token comment">## ref: https://docs.gitlab.com/runner/configuration/autoscale.html#distributed-runners-caching</span>
  <span class="token comment">##</span>
  <span class="token comment">## If you want to use s3 based distributing caching:</span>
  <span class="token comment">## First of all you need to uncomment General settings and S3 settings sections.</span>
  <span class="token comment">##</span>
  <span class="token comment">## Create a secret &#39;s3access&#39; containing &#39;accesskey&#39; &amp; &#39;secretkey&#39;</span>
  <span class="token comment">## ref: https://aws.amazon.com/blogs/security/wheres-my-secret-access-key/</span>
  <span class="token comment">##</span>
  <span class="token comment">## $ kubectl create secret generic s3access \\</span>
  <span class="token comment">##   --from-literal=accesskey=&quot;YourAccessKey&quot; \\</span>
  <span class="token comment">##   --from-literal=secretkey=&quot;YourSecretKey&quot;</span>
  <span class="token comment">## ref: https://kubernetes.io/docs/concepts/configuration/secret/</span>
  <span class="token comment">##</span>
  <span class="token comment">## If you want to use gcs based distributing caching:</span>
  <span class="token comment">## First of all you need to uncomment General settings and GCS settings sections.</span>
  <span class="token comment">##</span>
  <span class="token comment">## Access using credentials file:</span>
  <span class="token comment">## Create a secret &#39;google-application-credentials&#39; containing your application credentials file.</span>
  <span class="token comment">## ref: https://docs.gitlab.com/runner/configuration/advanced-configuration.html#the-runnerscachegcs-section</span>
  <span class="token comment">## You could configure</span>
  <span class="token comment">## $ kubectl create secret generic google-application-credentials \\</span>
  <span class="token comment">##   --from-file=gcs-application-credentials-file=./path-to-your-google-application-credentials-file.json</span>
  <span class="token comment">## ref: https://kubernetes.io/docs/concepts/configuration/secret/</span>
  <span class="token comment">##</span>
  <span class="token comment">## Access using access-id and private-key:</span>
  <span class="token comment">## Create a secret &#39;gcsaccess&#39; containing &#39;gcs-access-id&#39; &amp; &#39;gcs-private-key&#39;.</span>
  <span class="token comment">## ref: https://docs.gitlab.com/runner/configuration/advanced-configuration.html#the-runnerscachegcs-section</span>
  <span class="token comment">## You could configure</span>
  <span class="token comment">## $ kubectl create secret generic gcsaccess \\</span>
  <span class="token comment">##   --from-literal=gcs-access-id=&quot;YourAccessID&quot; \\</span>
  <span class="token comment">##   --from-literal=gcs-private-key=&quot;YourPrivateKey&quot;</span>
  <span class="token comment">## ref: https://kubernetes.io/docs/concepts/configuration/secret/</span>
  <span class="token comment">##</span>
  <span class="token comment">## If you want to use Azure-based distributed caching:</span>
  <span class="token comment">## First, uncomment General settings.</span>
  <span class="token comment">##</span>
  <span class="token comment">## Create a secret &#39;azureaccess&#39; containing &#39;azure-account-name&#39; &amp; &#39;azure-account-key&#39;</span>
  <span class="token comment">## ref: https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction</span>
  <span class="token comment">##</span>
  <span class="token comment">## $ kubectl create secret generic azureaccess \\</span>
  <span class="token comment">##   --from-literal=azure-account-name=&quot;YourAccountName&quot; \\</span>
  <span class="token comment">##   --from-literal=azure-account-key=&quot;YourAccountKey&quot;</span>
  <span class="token comment">## ref: https://kubernetes.io/docs/concepts/configuration/secret/</span>

  <span class="token key atrule">cache</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token comment">## General settings</span>
    <span class="token comment">## DEPRECATED: See https://docs.gitlab.com/runner/install/kubernetes.html#additional-configuration and https://docs.gitlab.com/runner/install/kubernetes.html#using-cache-with-configuration-template</span>
    <span class="token comment"># cacheType: s3</span>
    <span class="token comment"># cachePath: &quot;gitlab_runner&quot;</span>
    <span class="token comment"># cacheShared: true</span>

    <span class="token comment">## S3 settings</span>
    <span class="token comment">## DEPRECATED: See https://docs.gitlab.com/runner/install/kubernetes.html#additional-configuration and https://docs.gitlab.com/runner/install/kubernetes.html#using-cache-with-configuration-template</span>
    <span class="token comment"># s3ServerAddress: s3.amazonaws.com</span>
    <span class="token comment"># s3BucketName:</span>
    <span class="token comment"># s3BucketLocation:</span>
    <span class="token comment"># s3CacheInsecure: false</span>

    <span class="token comment">## GCS settings</span>
    <span class="token comment">## DEPRECATED: See https://docs.gitlab.com/runner/install/kubernetes.html#additional-configuration and https://docs.gitlab.com/runner/install/kubernetes.html#using-cache-with-configuration-template</span>
    <span class="token comment"># gcsBucketName:</span>

    <span class="token comment">## S3 the name of the secret.</span>
    <span class="token comment"># secretName: s3access</span>
    <span class="token comment">## Use this line for access using gcs-access-id and gcs-private-key</span>
    <span class="token comment"># secretName: gcsaccess</span>
    <span class="token comment">## Use this line for access using google-application-credentials file</span>
    <span class="token comment"># secretName: google-application-credentials</span>
    <span class="token comment">## Use this line for access using Azure with azure-account-name and azure-account-key</span>
    <span class="token comment"># secretName: azureaccess</span>


  <span class="token comment">## Build Container specific configuration</span>
  <span class="token comment">##</span>
  <span class="token comment">## DEPRECATED: See https://docs.gitlab.com/runner/install/kubernetes.html#additional-configuration</span>
  <span class="token key atrule">builds</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token comment"># cpuLimit: 200m</span>
    <span class="token comment"># cpuLimitOverwriteMaxAllowed: 400m</span>
    <span class="token comment"># memoryLimit: 256Mi</span>
    <span class="token comment"># memoryLimitOverwriteMaxAllowed: 512Mi</span>
    <span class="token comment"># cpuRequests: 100m</span>
    <span class="token comment"># cpuRequestsOverwriteMaxAllowed: 200m</span>
    <span class="token comment"># memoryRequests: 128Mi</span>
    <span class="token comment"># memoryRequestsOverwriteMaxAllowed: 256Mi</span>

  <span class="token comment">## Service Container specific configuration</span>
  <span class="token comment">##</span>
  <span class="token comment">## DEPRECATED: See https://docs.gitlab.com/runner/install/kubernetes.html#additional-configuration</span>
  <span class="token key atrule">services</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token comment"># cpuLimit: 200m</span>
    <span class="token comment"># memoryLimit: 256Mi</span>
    <span class="token comment"># cpuRequests: 100m</span>
    <span class="token comment"># memoryRequests: 128Mi</span>

  <span class="token comment">## Helper Container specific configuration</span>
  <span class="token comment">##</span>
  <span class="token comment">## DEPRECATED: See https://docs.gitlab.com/runner/install/kubernetes.html#additional-configuration</span>
  <span class="token key atrule">helpers</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token comment"># cpuLimit: 200m</span>
    <span class="token comment"># memoryLimit: 256Mi</span>
    <span class="token comment"># cpuRequests: 100m</span>
    <span class="token comment"># memoryRequests: 128Mi</span>
    <span class="token comment"># image: &quot;registry.gitlab.com/gitlab-org/gitlab-runner-helper:x86_64-\${CI_RUNNER_REVISION}&quot;</span>

  <span class="token comment">## Helper container security context configuration</span>
  <span class="token comment">## Refer to https://docs.gitlab.com/runner/executors/kubernetes.html#using-security-context</span>
  <span class="token comment">## DEPRECATED: See https://docs.gitlab.com/runner/install/kubernetes.html#additional-configuration</span>
  <span class="token comment"># pod_security_context:</span>
  <span class="token comment">#   run_as_non_root: true</span>
  <span class="token comment">#   run_as_user: 100</span>
  <span class="token comment">#   run_as_group: 100</span>
  <span class="token comment">#   fs_group: 65533</span>
  <span class="token comment">#   supplemental_groups: [101, 102]</span>

  <span class="token comment">## Service Account to be used for runners</span>
  <span class="token comment">##</span>
  <span class="token comment"># serviceAccountName:</span>

  <span class="token comment">## If Gitlab is not reachable through $CI_SERVER_URL</span>
  <span class="token comment">##</span>
  <span class="token comment">## DEPRECATED: See https://docs.gitlab.com/runner/install/kubernetes.html#additional-configuration</span>
  <span class="token comment"># cloneUrl:</span>

  <span class="token comment">## Specify node labels for CI job pods assignment</span>
  <span class="token comment">## ref: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/</span>
  <span class="token comment">##</span>
  <span class="token comment">## DEPRECATED: See https://docs.gitlab.com/runner/install/kubernetes.html#additional-configuration</span>
  <span class="token comment"># nodeSelector: {}</span>

  <span class="token comment">## Specify node tolerations for CI job pods assignment</span>
  <span class="token comment">## ref: https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/</span>
  <span class="token comment">##</span>
  <span class="token comment">## DEPRECATED: See https://docs.gitlab.com/runner/install/kubernetes.html#additional-configuration</span>
  <span class="token comment"># nodeTolerations: {}</span>

  <span class="token comment">## Specify pod labels for CI job pods</span>
  <span class="token comment">##</span>
  <span class="token comment">## DEPRECATED: See https://docs.gitlab.com/runner/install/kubernetes.html#additional-configuration</span>
  <span class="token comment"># podLabels: {}</span>

  <span class="token comment">## Specify annotations for job pods, useful for annotations such as iam.amazonaws.com/role</span>
  <span class="token comment">## DEPRECATED: See https://docs.gitlab.com/runner/install/kubernetes.html#additional-configuration</span>
  <span class="token comment"># podAnnotations: {}</span>

  <span class="token comment">## Configure environment variables that will be injected to the pods that are created while</span>
  <span class="token comment">## the build is running. These variables are passed as parameters, i.e. \`--env &quot;NAME=VALUE&quot;\`,</span>
  <span class="token comment">## to \`gitlab-runner register\` command.</span>
  <span class="token comment">##</span>
  <span class="token comment">## Note that \`envVars\` (see below) are only present in the runner pod, not the pods that are</span>
  <span class="token comment">## created for each build.</span>
  <span class="token comment">##</span>
  <span class="token comment">## ref: https://docs.gitlab.com/runner/commands/#gitlab-runner-register</span>
  <span class="token comment">##</span>
  <span class="token comment">## DEPRECATED: See https://docs.gitlab.com/runner/install/kubernetes.html#additional-configuration</span>
  <span class="token comment"># env:</span>
  <span class="token comment">#   NAME: VALUE</span>


<span class="token comment">## Specify the name of the scheduler which used to schedule runner pods.</span>
<span class="token comment">## Kubernetes supports multiple scheduler configurations.</span>
<span class="token comment">## ref: https://kubernetes.io/docs/reference/scheduling</span>
<span class="token comment"># schedulerName: &quot;my-custom-scheduler&quot;</span>

<span class="token comment">## Configure securitycontext for the main container</span>
<span class="token comment">## ref: http://kubernetes.io/docs/user-guide/security-context/</span>
<span class="token comment">##</span>
<span class="token key atrule">securityContext</span><span class="token punctuation">:</span>
  <span class="token key atrule">allowPrivilegeEscalation</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">readOnlyRootFilesystem</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">runAsNonRoot</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">privileged</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">capabilities</span><span class="token punctuation">:</span>
    <span class="token key atrule">drop</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;ALL&quot;</span><span class="token punctuation">]</span>

<span class="token comment">## Configure securitycontext valid for the whole pod</span>
<span class="token comment">## ref: http://kubernetes.io/docs/user-guide/security-context/</span>
<span class="token comment">##</span>
<span class="token key atrule">podSecurityContext</span><span class="token punctuation">:</span>
  <span class="token key atrule">runAsUser</span><span class="token punctuation">:</span> <span class="token number">100</span>
  <span class="token comment"># runAsGroup: 65533</span>
  <span class="token key atrule">fsGroup</span><span class="token punctuation">:</span> <span class="token number">65533</span>
  <span class="token comment"># supplementalGroups: [65533]</span>

  <span class="token comment">## Note: values for the ubuntu image:</span>
  <span class="token comment"># runAsUser: 999</span>
  <span class="token comment"># fsGroup: 999</span>

<span class="token comment">## Configure resource requests and limits</span>
<span class="token comment">## ref: http://kubernetes.io/docs/user-guide/compute-resources/</span>
<span class="token comment">##</span>
<span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token comment"># limits:</span>
  <span class="token comment">#   memory: 256Mi</span>
  <span class="token comment">#   cpu: 200m</span>
  <span class="token comment"># requests:</span>
  <span class="token comment">#   memory: 128Mi</span>
  <span class="token comment">#   cpu: 100m</span>

<span class="token comment">## Affinity for pod assignment</span>
<span class="token comment">## Ref: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#affinity-and-anti-affinity</span>
<span class="token comment">##</span>
<span class="token key atrule">affinity</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">## Node labels for pod assignment</span>
<span class="token comment">## Ref: https://kubernetes.io/docs/user-guide/node-selection/</span>
<span class="token comment">##</span>
<span class="token key atrule">nodeSelector</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token comment"># Example: The gitlab runner manager should not run on spot instances so you can assign</span>
  <span class="token comment"># them to the regular worker nodes only.</span>
  <span class="token comment"># node-role.kubernetes.io/worker: &quot;true&quot;</span>

<span class="token comment">## List of node taints to tolerate (requires Kubernetes &gt;= 1.6)</span>
<span class="token comment">## Ref: https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/</span>
<span class="token comment">##</span>
<span class="token key atrule">tolerations</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token comment"># Example: Regular worker nodes may have a taint, thus you need to tolerate the taint</span>
  <span class="token comment"># when you assign the gitlab runner manager with nodeSelector or affinity to the nodes.</span>
  <span class="token comment"># - key: &quot;node-role.kubernetes.io/worker&quot;</span>
  <span class="token comment">#   operator: &quot;Exists&quot;</span>

<span class="token comment">## Configure environment variables that will be present when the registration command runs</span>
<span class="token comment">## This provides further control over the registration process and the config.toml file</span>
<span class="token comment">## ref: \`gitlab-runner register --help\`</span>
<span class="token comment">## ref: https://docs.gitlab.com/runner/configuration/advanced-configuration.html</span>
<span class="token comment">##</span>
<span class="token comment"># envVars:</span>
<span class="token comment">#   - name: RUNNER_EXECUTOR</span>
<span class="token comment">#     value: kubernetes</span>

<span class="token comment">## list of hosts and IPs that will be injected into the pod&#39;s hosts file</span>
<span class="token key atrule">hostAliases</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token comment"># Example:</span>
  <span class="token comment"># - ip: &quot;127.0.0.1&quot;</span>
  <span class="token comment">#   hostnames:</span>
  <span class="token comment">#   - &quot;foo.local&quot;</span>
  <span class="token comment">#   - &quot;bar.local&quot;</span>
  <span class="token comment"># - ip: &quot;10.1.2.3&quot;</span>
  <span class="token comment">#   hostnames:</span>
  <span class="token comment">#   - &quot;foo.remote&quot;</span>
  <span class="token comment">#   - &quot;bar.remote&quot;</span>

<span class="token comment">## Annotations to be added to manager pod</span>
<span class="token comment">##</span>
<span class="token key atrule">podAnnotations</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token comment"># Example:</span>
  <span class="token comment"># iam.amazonaws.com/role: &lt;my_role_arn&gt;</span>

<span class="token comment">## Labels to be added to manager pod</span>
<span class="token comment">##</span>
<span class="token key atrule">podLabels</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token comment"># Example:</span>
  <span class="token comment"># owner.team: &lt;my_cool_team&gt;</span>

<span class="token comment">## HPA support for custom metrics:</span>
<span class="token comment">## This section enables runners to autoscale based on defined custom metrics.</span>
<span class="token comment">## In order to use this functionality, Need to enable a custom metrics API server by</span>
<span class="token comment">## implementing &quot;custom.metrics.k8s.io&quot; using supported third party adapter</span>
<span class="token comment">## Example: https://github.com/directxman12/k8s-prometheus-adapter</span>
<span class="token comment">##</span>
<span class="token comment">#hpa: {}</span>
  <span class="token comment"># minReplicas: 1</span>
  <span class="token comment"># maxReplicas: 10</span>
  <span class="token comment"># metrics:</span>
  <span class="token comment"># - type: Pods</span>
  <span class="token comment">#   pods:</span>
  <span class="token comment">#     metricName: gitlab_runner_jobs</span>
  <span class="token comment">#     targetAverageValue: 400m</span>

<span class="token comment">## Configure priorityClassName for manager pod. See k8s docs for more info on how pod priority works:</span>
<span class="token comment">##  https://kubernetes.io/docs/concepts/configuration/pod-priority-preemption/</span>
<span class="token key atrule">priorityClassName</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>

<span class="token comment">## Secrets to be additionally mounted to the containers.</span>
<span class="token comment">## All secrets are mounted through init-runner-secrets volume</span>
<span class="token comment">## and placed as readonly at /init-secrets in the init container</span>
<span class="token comment">## and finally copied to an in-memory volume runner-secrets that is</span>
<span class="token comment">## mounted at /secrets.</span>
<span class="token key atrule">secrets</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token comment"># Example:</span>
  <span class="token comment"># - name: my-secret</span>
  <span class="token comment"># - name: myOtherSecret</span>
  <span class="token comment">#   items:</span>
  <span class="token comment">#     - key: key_one</span>
  <span class="token comment">#       path: path_one</span>

<span class="token comment">## Additional config files to mount in the containers in \`/configmaps\`.</span>
<span class="token comment">##</span>
<span class="token comment">## Please note that a number of keys are reserved by the runner.</span>
<span class="token comment">## See https://gitlab.com/gitlab-org/charts/gitlab-runner/-/blob/main/templates/configmap.yaml</span>
<span class="token comment">## for a current list.</span>
<span class="token key atrule">configMaps</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">## Additional volumeMounts to add to the runner container</span>
<span class="token comment">##</span>
<span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token comment"># Example:</span>
  <span class="token comment"># - name: my-volume</span>
  <span class="token comment">#   mountPath: /mount/path</span>

<span class="token comment">## Additional volumes to add to the runner deployment</span>
<span class="token comment">##</span>
<span class="token key atrule">volumes</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token comment"># Example:</span>
  <span class="token comment"># - name: my-volume</span>
  <span class="token comment">#   persistentVolumeClaim:</span>
  <span class="token comment">#     claimName: my-pvc</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30),l=[c];function o(m,r){return s(),e("div",null,l)}const u=n(t,[["render",o],["__file","部署Kubernetes类型的gitlab-runner.html.vue"]]);export{u as default};
