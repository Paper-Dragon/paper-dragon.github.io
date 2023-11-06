import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as c,c as r,a as s,e as n,d as e,f as i}from"./app-1fe87991.js";const o="/assets/image-20221103092324945-4240b7c2.png",d={},u=i('<h1 id="efk安装过程记录-监听netflow" tabindex="-1"><a class="header-anchor" href="#efk安装过程记录-监听netflow" aria-hidden="true">#</a> EFK安装过程记录，监听netflow</h1><h2 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h2><p>一般我们需要进行日志分析场景：直接在日志文件中 grep、awk 就可以获得自己想要的信息。但在规模较大也就是日志量多而复杂的场景中，此方法效率低下，面临问题包括日志量太大如何归档、文本搜索太慢怎么办、如何多维度查询。需要集中化的日志管理，所有服务器上的日志收集汇总。常见解决思路是建立集中式日志收集系统，将所有节点上的日志统一收集，管理，访问。<br> Elastic Stack包含：</p><ul><li>Elasticsearch 是个开源分布式搜索引擎，提供搜集、分析、存储数据三大功能。它的特点有：分布式，零配置，自动发现，索引自动分片，索引副本机制，restful风格接口，多数据源，自动搜索负载等。详细可参考Elasticsearch权威指南</li><li>Logstash 主要是用来日志的搜集、分析、过滤日志的工具，支持大量的数据获取方式。一般工作方式为c/s架构，client端安装在需要收集日志的主机上，server端负责将收到的各节点日志进行过滤、修改等操作在一并发往elasticsearch上去。<br> Kibana 也是一个开源和免费的工具，Kibana可以为 Logstash 和 ElasticSearch 提供的日志分析友好的 Web 界面，可以帮助汇总、分析和搜索重要数据日志。</li><li>Beats在这里是一个轻量级日志采集器，其实Beats家族有6个成员，早期的ELK架构中使用Logstash收集、解析日志，但是Logstash对内存、cpu、io等资源消耗比较高。相比</li><li>Logstash，Beats所占系统的CPU和内存几乎可以忽略不计</li></ul><h2 id="相关网站" tabindex="-1"><a class="header-anchor" href="#相关网站" aria-hidden="true">#</a> 相关网站</h2>',5),p={href:"https://www.elastic.co/cn/downloads/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.elastic.co/cn/downloads/elasticsearch",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.elastic.co/guide/en/elasticsearch/reference/8.5/rpm.html#rpm-repo",target:"_blank",rel:"noopener noreferrer"},m=i(`<h2 id="构建yum源" tabindex="-1"><a class="header-anchor" href="#构建yum源" aria-hidden="true">#</a> 构建yum源</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">--import</span> https://artifacts.elastic.co/GPG-KEY-elasticsearch

<span class="token punctuation">[</span>elasticsearch<span class="token punctuation">]</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span>Elasticsearch repository <span class="token keyword">for</span> <span class="token number">8</span>.x packages
<span class="token assign-left variable">baseurl</span><span class="token operator">=</span>https://artifacts.elastic.co/packages/8.x/yum
<span class="token assign-left variable">gpgcheck</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">gpgkey</span><span class="token operator">=</span>https://artifacts.elastic.co/GPG-KEY-elasticsearch
<span class="token assign-left variable">enabled</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">autorefresh</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">type</span><span class="token operator">=</span>rpm-md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pre阶段" tabindex="-1"><a class="header-anchor" href="#pre阶段" aria-hidden="true">#</a> Pre阶段</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl stop firewalld
systemctl disable firewalld
setenforce <span class="token number">0</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/SELINUX.*/SELINUX=disabled/g&#39;</span> /etc/selinux/conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装es" tabindex="-1"><a class="header-anchor" href="#安装es" aria-hidden="true">#</a> 安装ES</h2>`,5),k={href:"https://www.elastic.co/cn/downloads/elasticsearch",target:"_blank",rel:"noopener noreferrer"},h=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@monther ~<span class="token punctuation">]</span><span class="token comment"># yum list --showduplicates elasticsearch</span>
Loaded plugins: fastestmirror
Loading mirror speeds from cached hostfile
 * base: mirrors.aliyun.com
 * epel: mirrors.bfsu.edu.cn
 * extras: ftp.sjtu.edu.cn
 * updates: ftp.sjtu.edu.cn
Available Packages
elasticsearch.x86_64                                                                                   <span class="token number">8.0</span>.0-1                                                                                   elasticsearch
elasticsearch.x86_64                                                                                   <span class="token number">8.0</span>.1-1                                                                                   elasticsearch
elasticsearch.x86_64                                                                                   <span class="token number">8.1</span>.0-1                                                                                   elasticsearch
elasticsearch.x86_64                                                                                   <span class="token number">8.1</span>.1-1                                                                                   elasticsearch
elasticsearch.x86_64                                                                                   <span class="token number">8.1</span>.2-1                                                                                   elasticsearch
elasticsearch.x86_64                                                                                   <span class="token number">8.1</span>.3-1                                                                                   elasticsearch
elasticsearch.x86_64                                                                                   <span class="token number">8.2</span>.0-1                                                                                   elasticsearch
elasticsearch.x86_64                                                                                   <span class="token number">8.2</span>.1-1                                                                                   elasticsearch
elasticsearch.x86_64                                                                                   <span class="token number">8.2</span>.2-1                                                                                   elasticsearch
elasticsearch.x86_64                                                                                   <span class="token number">8.2</span>.3-1                                                                                   elasticsearch
elasticsearch.x86_64                                                                                   <span class="token number">8.3</span>.0-1                                                                                   elasticsearch
elasticsearch.x86_64                                                                                   <span class="token number">8.3</span>.1-1                                                                                   elasticsearch
elasticsearch.x86_64                                                                                   <span class="token number">8.3</span>.2-1                                                                                   elasticsearch
elasticsearch.x86_64                                                                                   <span class="token number">8.3</span>.3-1                                                                                   elasticsearch
elasticsearch.x86_64                                                                                   <span class="token number">8.4</span>.0-1                                                                                   elasticsearch
elasticsearch.x86_64                                                                                   <span class="token number">8.4</span>.1-1                                                                                   elasticsearch
elasticsearch.x86_64                                                                                   <span class="token number">8.4</span>.2-1                                                                                   elasticsearch
elasticsearch.x86_64                                                                                   <span class="token number">8.4</span>.3-1                                                                                   elasticsearch
elasticsearch.x86_64                                                                                   <span class="token number">8.5</span>.0-1                                                                                   elasticsearch
<span class="token comment"># 运行命令</span>
yum <span class="token function">install</span> elasticsearch-8.4.3-1

Running transaction
Creating elasticsearch group<span class="token punctuation">..</span>. OK
Creating elasticsearch user<span class="token punctuation">..</span>. OK
  Installing <span class="token builtin class-name">:</span> elasticsearch-8.4.3-1.x86_64                                                                                                                                                               <span class="token number">1</span>/1
warning: ignoring <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/usr/share/elasticsearch/jdk<span class="token punctuation">;</span> using bundled JDK
warning: ignoring <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/usr/share/elasticsearch/jdk<span class="token punctuation">;</span> using bundled JDK
--------------------------- Security autoconfiguration information ------------------------------

Authentication and authorization are enabled.
TLS <span class="token keyword">for</span> the transport and HTTP layers is enabled and configured.

The generated password <span class="token keyword">for</span> the elastic built-in superuser is <span class="token builtin class-name">:</span> 1cIh96+PjMLVhT2DGQyT

If this <span class="token function">node</span> should <span class="token function">join</span> an existing cluster, you can reconfigure this with
<span class="token string">&#39;/usr/share/elasticsearch/bin/elasticsearch-reconfigure-node --enrollment-token &lt;token-here&gt;&#39;</span>
after creating an enrollment token on your existing cluster.

You can complete the following actions at any time:

Reset the password of the elastic built-in superuser with
<span class="token string">&#39;/usr/share/elasticsearch/bin/elasticsearch-reset-password -u elastic&#39;</span><span class="token builtin class-name">.</span>

Generate an enrollment token <span class="token keyword">for</span> Kibana instances with
 <span class="token string">&#39;/usr/share/elasticsearch/bin/elasticsearch-create-enrollment-token -s kibana&#39;</span><span class="token builtin class-name">.</span>

Generate an enrollment token <span class="token keyword">for</span> Elasticsearch nodes with
<span class="token string">&#39;/usr/share/elasticsearch/bin/elasticsearch-create-enrollment-token -s node&#39;</span><span class="token builtin class-name">.</span>

-------------------------------------------------------------------------------------------------
<span class="token comment">### NOT starting on installation, please execute the following statements to configure elasticsearch service to start automatically using systemd</span>
 <span class="token function">sudo</span> systemctl daemon-reload
 <span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> elasticsearch.service
<span class="token comment">### You can start elasticsearch service by executing</span>
 <span class="token function">sudo</span> systemctl start elasticsearch.service
warning: ignoring <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/usr/share/elasticsearch/jdk<span class="token punctuation">;</span> using bundled JDK
warning: ignoring <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/usr/share/elasticsearch/jdk<span class="token punctuation">;</span> using bundled JDK
  Verifying  <span class="token builtin class-name">:</span> elasticsearch-8.4.3-1.x86_64                                                                                                                                                               <span class="token number">1</span>/1

Installed:
  elasticsearch.x86_64 <span class="token number">0</span>:8.4.3-1

Complete<span class="token operator">!</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+o+`" alt="image-20221103092324945" tabindex="0" loading="lazy"><figcaption>image-20221103092324945</figcaption></figure><h2 id="配置es" tabindex="-1"><a class="header-anchor" href="#配置es" aria-hidden="true">#</a> 配置ES</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@monther ~<span class="token punctuation">]</span><span class="token comment"># grep -v \\# /etc/elasticsearch/elasticsearch.yml | grep -v ^$</span>
cluster.name: es-cluster
node.name: es-node-1
path.data: /var/lib/elasticsearch
path.logs: /var/log/elasticsearch
network.host: <span class="token number">11.0</span>.1.130
http.port: <span class="token number">9200</span>
xpack.security.enabled: <span class="token boolean">false</span>
xpack.security.enrollment.enabled: <span class="token boolean">false</span>
xpack.security.http.ssl:
  enabled: <span class="token boolean">false</span>
  keystore.path: certs/http.p12
xpack.security.transport.ssl:
  enabled: <span class="token boolean">false</span>
  verification_mode: certificate
  keystore.path: certs/transport.p12
  truststore.path: certs/transport.p12
cluster.initial_master_nodes: <span class="token punctuation">[</span><span class="token string">&quot;es01&quot;</span><span class="token punctuation">]</span>
http.host: <span class="token number">0.0</span>.0.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="es报错和处理" tabindex="-1"><a class="header-anchor" href="#es报错和处理" aria-hidden="true">#</a> ES报错和处理</h2>`,5),g={href:"https://toolgg.com/json-beautifier.html",target:"_blank",rel:"noopener noreferrer"},f=i(`<h3 id="_1" tabindex="-1"><a class="header-anchor" href="#_1" aria-hidden="true">#</a> ①</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">{</span>
    <span class="token string">&quot;@timestamp&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2022-11-03T01:39:22.213Z&quot;</span>,
    <span class="token string">&quot;log.level&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;ERROR&quot;</span>,
    <span class="token string">&quot;message&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;uncaught exception in thread [process reaper (pid 9710)]&quot;</span>,
    <span class="token string">&quot;ecs.version&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1.2.0&quot;</span>,
    <span class="token string">&quot;service.name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;ES_ECS&quot;</span>,
    <span class="token string">&quot;event.dataset&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;elasticsearch.server&quot;</span>,
    <span class="token string">&quot;process.thread.name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;process reaper (pid 9710)&quot;</span>,
    <span class="token string">&quot;log.logger&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;org.elasticsearch.bootstrap.ElasticsearchUncaughtExceptionHandler&quot;</span>,
    <span class="token string">&quot;elasticsearch.node.name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;es-node-1&quot;</span>,
    <span class="token string">&quot;error.type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;java.security.AccessControlException&quot;</span>,
    <span class="token string">&quot;error.message&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;access denied (<span class="token entity" title="\\&quot;">\\&quot;</span>java.lang.RuntimePermission<span class="token entity" title="\\&quot;">\\&quot;</span> <span class="token entity" title="\\&quot;">\\&quot;</span>modifyThread<span class="token entity" title="\\&quot;">\\&quot;</span>)&quot;</span>,
    <span class="token string">&quot;error.stack_trace&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;java.security.AccessControlException: access denied (<span class="token entity" title="\\&quot;">\\&quot;</span>java.lang.RuntimePermission<span class="token entity" title="\\&quot;">\\&quot;</span> <span class="token entity" title="\\&quot;">\\&quot;</span>modifyThread<span class="token entity" title="\\&quot;">\\&quot;</span>)<span class="token entity" title="\\n">\\n</span><span class="token entity" title="\\t">\\t</span>at java.base/java.security.AccessControlContext.checkPermission(AccessControlContext.java:485)<span class="token entity" title="\\n">\\n</span><span class="token entity" title="\\t">\\t</span>at java.base/java.security.AccessController.checkPermission(AccessController.java:1068)<span class="token entity" title="\\n">\\n</span><span class="token entity" title="\\t">\\t</span>at java.base/java.lang.SecurityManager.checkPermission(SecurityManager.java:411)<span class="token entity" title="\\n">\\n</span><span class="token entity" title="\\t">\\t</span>at org.elasticsearch.securesm@8.5.0/org.elasticsearch.secure_sm.SecureSM.checkThreadAccess(SecureSM.java:166)<span class="token entity" title="\\n">\\n</span><span class="token entity" title="\\t">\\t</span>at org.elasticsearch.securesm@8.5.0/org.elasticsearch.secure_sm.SecureSM.checkAccess(SecureSM.java:120)<span class="token entity" title="\\n">\\n</span><span class="token entity" title="\\t">\\t</span>at java.base/java.lang.Thread.checkAccess(Thread.java:2360)<span class="token entity" title="\\n">\\n</span><span class="token entity" title="\\t">\\t</span>at java.base/java.lang.Thread.setDaemon(Thread.java:2308)<span class="token entity" title="\\n">\\n</span><span class="token entity" title="\\t">\\t</span>at java.base/java.lang.ProcessHandleImpl.lambda<span class="token variable">$static</span><span class="token variable">$0</span>(ProcessHandleImpl.java:103)<span class="token entity" title="\\n">\\n</span><span class="token entity" title="\\t">\\t</span>at java.base/java.util.concurrent.ThreadPoolExecutor<span class="token variable">$Worker</span>.&lt;init&gt;(ThreadPoolExecutor.java:637)<span class="token entity" title="\\n">\\n</span><span class="token entity" title="\\t">\\t</span>at java.base/java.util.concurrent.ThreadPoolExecutor.addWorker(ThreadPoolExecutor.java:928)<span class="token entity" title="\\n">\\n</span><span class="token entity" title="\\t">\\t</span>at java.base/java.util.concurrent.ThreadPoolExecutor.processWorkerExit(ThreadPoolExecutor.java:1021)<span class="token entity" title="\\n">\\n</span><span class="token entity" title="\\t">\\t</span>at java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1158)<span class="token entity" title="\\n">\\n</span><span class="token entity" title="\\t">\\t</span>at java.base/java.util.concurrent.ThreadPoolExecutor<span class="token variable">$Worker</span>.run(ThreadPoolExecutor.java:642)<span class="token entity" title="\\n">\\n</span><span class="token entity" title="\\t">\\t</span>at java.base/java.lang.Thread.run(Thread.java:1589)<span class="token entity" title="\\n">\\n</span><span class="token entity" title="\\t">\\t</span>at java.base/jdk.internal.misc.InnocuousThread.run(InnocuousThread.java:186)<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token punctuation">}</span>

日志显示因为

The system environment variables are not available to Log4j due to security restrictions: java.security.AccessControlException: access denied <span class="token punctuation">(</span><span class="token string">&quot;java.lang.RuntimePermission&quot;</span> <span class="token string">&quot;getenv.*&quot;</span><span class="token punctuation">)</span>The system environment variables are not available to Log4j due to security restrictions: java.security.AccessControlException: access denied <span class="token punctuation">(</span><span class="token string">&quot;ja
va.lang.RuntimePermission&quot;</span> <span class="token string">&quot;getenv.*&quot;</span><span class="token punctuation">)</span>The system environment variables are not available to Log4j due to security restrictions: java.security.AccessControlException: access denied <span class="token punctuation">(</span><span class="token string">&quot;java.lang.RuntimePermission&quot;</span> <span class="token string">&quot;getenv.*&quot;</span><span class="token punctuation">)</span>The system environment variables are not available to Log4j due to security restrictions: java.security.AccessControlException: access denied <span class="token punctuation">(</span><span class="token string">&quot;java.lang.RuntimePermission&quot;</span> <span class="token string">&quot;getenv.*&quot;</span><span class="token punctuation">)</span>
 ----
 由于安全限制，系统环境变量对 Log4j 不可用：java.security.AccessControlException: access denied <span class="token punctuation">(</span><span class="token string">&quot;java.lang.RuntimePermission&quot;</span> <span class="token string">&quot;getenv.*&quot;</span><span class="token punctuation">)</span>
 系统环境变量因安全限制对Log4j不可用：java.security.AccessControlException: access denied <span class="token punctuation">(</span><span class="token string">&quot;java.lang.RuntimePermission&quot;</span> <span class="token string">&quot;getenv.*&quot;</span><span class="token punctuation">)</span> 
 由于安全限制，系统环境变量对 Log4j 不可用： java.security.AccessControlException: access denied <span class="token punctuation">(</span><span class="token string">&quot;java.lang.RuntimePermission&quot;</span> <span class="token string">&quot;getenv.*&quot;</span><span class="token punctuation">)</span> 
 由于安全限制，系统环境变量对 Log4j 不可用： java.security.AccessControlException: access denied <span class="token punctuation">(</span><span class="token string">&quot;java.lang.RuntimePermission&quot;</span> <span class="token string">&quot;getenv.*&quot;</span><span class="token punctuation">)</span>
 
 
 解决方案 安装8.4.3  ---------- <span class="token number">8.5</span>.0有bug
 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装kibana" tabindex="-1"><a class="header-anchor" href="#安装kibana" aria-hidden="true">#</a> 安装Kibana</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@monther ~<span class="token punctuation">]</span><span class="token comment"># yum list --showduplicates kibana</span>
Loaded plugins: fastestmirror
Loading mirror speeds from cached hostfile
 * base: mirrors.aliyun.com
 * epel: mirrors.bfsu.edu.cn
 * extras: ftp.sjtu.edu.cn
 * updates: ftp.sjtu.edu.cn
Available Packages
kibana.x86_64                                                                                      <span class="token number">8.0</span>.0-1                                                                                       elasticsearch
kibana.x86_64                                                                                      <span class="token number">8.0</span>.1-1                                                                                       elasticsearch
kibana.x86_64                                                                                      <span class="token number">8.1</span>.0-1                                                                                       elasticsearch
kibana.x86_64                                                                                      <span class="token number">8.1</span>.1-1                                                                                       elasticsearch
kibana.x86_64                                                                                      <span class="token number">8.1</span>.2-1                                                                                       elasticsearch
kibana.x86_64                                                                                      <span class="token number">8.1</span>.3-1                                                                                       elasticsearch
kibana.x86_64                                                                                      <span class="token number">8.2</span>.0-1                                                                                       elasticsearch
kibana.x86_64                                                                                      <span class="token number">8.2</span>.1-1                                                                                       elasticsearch
kibana.x86_64                                                                                      <span class="token number">8.2</span>.2-1                                                                                       elasticsearch
kibana.x86_64                                                                                      <span class="token number">8.2</span>.3-1                                                                                       elasticsearch
kibana.x86_64                                                                                      <span class="token number">8.3</span>.0-1                                                                                       elasticsearch
kibana.x86_64                                                                                      <span class="token number">8.3</span>.1-1                                                                                       elasticsearch
kibana.x86_64                                                                                      <span class="token number">8.3</span>.2-1                                                                                       elasticsearch
kibana.x86_64                                                                                      <span class="token number">8.3</span>.3-1                                                                                       elasticsearch
kibana.x86_64                                                                                      <span class="token number">8.4</span>.0-1                                                                                       elasticsearch
kibana.x86_64                                                                                      <span class="token number">8.4</span>.1-1                                                                                       elasticsearch
kibana.x86_64                                                                                      <span class="token number">8.4</span>.2-1                                                                                       elasticsearch
kibana.x86_64                                                                                      <span class="token number">8.4</span>.3-1                                                                                       elasticsearch
kibana.x86_64                                                                                      <span class="token number">8.5</span>.0-1                                                                                       elasticsearch
<span class="token punctuation">[</span>root@monther ~<span class="token punctuation">]</span><span class="token comment"># yum install kibana-8.4.3-1^C</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置kibana" tabindex="-1"><a class="header-anchor" href="#配置kibana" aria-hidden="true">#</a> 配置kibana</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token punctuation">[</span>root@monther ~<span class="token punctuation">]</span><span class="token comment"># vim /etc/kibana/kibana.yml</span>
<span class="token punctuation">[</span>root@monther ~<span class="token punctuation">]</span><span class="token comment"># grep -v \\# /etc/kibana/kibana.yml | grep -v ^$</span>
server.port: <span class="token number">5601</span>
server.host: <span class="token string">&quot;0.0.0.0&quot;</span>
elasticsearch.hosts: <span class="token punctuation">[</span><span class="token string">&quot;http://11.0.1.130:9200&quot;</span><span class="token punctuation">]</span>
logging:
  appenders:
    file:
      type: <span class="token function">file</span>
      fileName: /var/log/kibana/kibana.log
      layout:
        type: json
  root:
    appenders:
      - default
      - <span class="token function">file</span>
pid.file: /run/kibana/kibana.pid
i18n.locale: <span class="token string">&quot;zh-CN&quot;</span>
<span class="token punctuation">[</span>root@monther ~<span class="token punctuation">]</span><span class="token comment"># systemctl restart kibana</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装filebeat" tabindex="-1"><a class="header-anchor" href="#安装filebeat" aria-hidden="true">#</a> 安装FileBeat</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token punctuation">[</span>root@monther ~<span class="token punctuation">]</span><span class="token comment"># yum list --showduplicates filebeat</span>
Loaded plugins: fastestmirror
Loading mirror speeds from cached hostfile
 * base: mirrors.aliyun.com
 * epel: mirrors.bfsu.edu.cn
 * extras: ftp.sjtu.edu.cn
 * updates: ftp.sjtu.edu.cn
Available Packages
filebeat.x86_64                                                                                     <span class="token number">8.0</span>.0-1                                                                                      elasticsearch
filebeat.x86_64                                                                                     <span class="token number">8.0</span>.1-1                                                                                      elasticsearch
filebeat.x86_64                                                                                     <span class="token number">8.1</span>.0-1                                                                                      elasticsearch
filebeat.x86_64                                                                                     <span class="token number">8.1</span>.1-1                                                                                      elasticsearch
filebeat.x86_64                                                                                     <span class="token number">8.1</span>.2-1                                                                                      elasticsearch
filebeat.x86_64                                                                                     <span class="token number">8.1</span>.3-1                                                                                      elasticsearch
filebeat.x86_64                                                                                     <span class="token number">8.2</span>.0-1                                                                                      elasticsearch
filebeat.x86_64                                                                                     <span class="token number">8.2</span>.1-1                                                                                      elasticsearch
filebeat.x86_64                                                                                     <span class="token number">8.2</span>.2-1                                                                                      elasticsearch
filebeat.x86_64                                                                                     <span class="token number">8.2</span>.3-1                                                                                      elasticsearch
filebeat.x86_64                                                                                     <span class="token number">8.3</span>.0-1                                                                                      elasticsearch
filebeat.x86_64                                                                                     <span class="token number">8.3</span>.1-1                                                                                      elasticsearch
filebeat.x86_64                                                                                     <span class="token number">8.3</span>.2-1                                                                                      elasticsearch
filebeat.x86_64                                                                                     <span class="token number">8.3</span>.3-1                                                                                      elasticsearch
filebeat.x86_64                                                                                     <span class="token number">8.4</span>.0-1                                                                                      elasticsearch
filebeat.x86_64                                                                                     <span class="token number">8.4</span>.1-1                                                                                      elasticsearch
filebeat.x86_64                                                                                     <span class="token number">8.4</span>.2-1                                                                                      elasticsearch
filebeat.x86_64                                                                                     <span class="token number">8.4</span>.3-1                                                                                      elasticsearch
filebeat.x86_64                                                                                     <span class="token number">8.5</span>.0-1                                                                                      elasticsearch



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="filebeat配置" tabindex="-1"><a class="header-anchor" href="#filebeat配置" aria-hidden="true">#</a> FileBeat配置</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@monther ~<span class="token punctuation">]</span><span class="token comment"># filebeat modules list</span>
Enabled:

Disabled:
activemq
apache
auditd
aws
awsfargate
azure
barracuda



filebeat modules <span class="token builtin class-name">enable</span> nginx
filebeat setup

<span class="token punctuation">[</span>root@monther ~<span class="token punctuation">]</span><span class="token comment"># grep -v \\# /etc/filebeat/filebeat.yml | grep -v ^$</span>
filebeat.inputs:
- type: filestream
  id: my-filestream-id
  enabled: <span class="token boolean">false</span>
  paths:
    - /var/log/*.log
filebeat.config.modules:
  path: <span class="token variable">\${path.config}</span>/modules.d/*.yml
  reload.enabled: <span class="token boolean">false</span>
setup.template.settings:
  index.number_of_shards: <span class="token number">1</span>
tags: <span class="token punctuation">[</span><span class="token string">&quot;nginx&quot;</span><span class="token punctuation">]</span>
setup.kibana:
  host: <span class="token string">&quot;localhost:5601&quot;</span>
output.elasticsearch:
  hosts: <span class="token punctuation">[</span><span class="token string">&quot;11.0.1.130:9200&quot;</span><span class="token punctuation">]</span>
processors:
  - add_host_metadata:
      when.not.contains.tags: forwarded
  - add_cloud_metadata: ~
  - add_docker_metadata: ~
  - add_kubernetes_metadata: ~

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function x(_,y){const a=l("ExternalLinkIcon");return c(),r("div",null,[u,s("ul",null,[s("li",null,[s("a",p,[n("https://www.elastic.co/cn/downloads/"),e(a)])]),s("li",null,[s("a",v,[n("https://www.elastic.co/cn/downloads/elasticsearch"),e(a)])]),s("li",null,[s("a",b,[n("https://www.elastic.co/guide/en/elasticsearch/reference/8.5/rpm.html#rpm-repo"),e(a)])])]),m,s("ul",null,[s("li",null,[s("a",k,[n("https://www.elastic.co/cn/downloads/elasticsearch"),e(a)])])]),h,s("ul",null,[s("li",null,[n("在线json美化工具 "),s("a",g,[n("https://toolgg.com/json-beautifier.html"),e(a)])])]),f])}const w=t(d,[["render",x],["__file","EFK8.4.3部署.html.vue"]]);export{w as default};
