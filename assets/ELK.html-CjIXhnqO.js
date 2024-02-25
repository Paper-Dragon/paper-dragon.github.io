import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as e}from"./app-adPOW57q.js";const t="/assets/image-20211116145510909-16370457460581-G5eQ5LpB.png",i="/assets/image-20211116145621627-BkN9L6q3.png",o="/assets/image-20211116151442638-PXTHFINz.png",l="/assets/image-20211117083904657-CqsDFcNx.png",p="/assets/image-20211117231143675-TFiEJl54.png",c="/assets/image-20211117231243044-BeqQx1GM.png",r="/assets/image-20211117231251486-Bve6ZOLW.png",u="/assets/image-20211117231308169-CIEZNvXw.png",d="/assets/image-20211117235501571-D1Yx6qav.png",m="/assets/image-20211118000511866-C2-Pr4Se.png",v="/assets/image-20211118000504423-BE_vty5Z.png",b="/assets/image-20211118000526400-ArLCOjOE.png",g="/assets/image-20211118000641707-DJbQqY-S.png",k={},h=e('<h1 id="elk日志分析系统" tabindex="-1"><a class="header-anchor" href="#elk日志分析系统"><span>ELK日志分析系统</span></a></h1><figure><img src="'+t+'" alt="image-20211116145510909" tabindex="0" loading="lazy"><figcaption>image-20211116145510909</figcaption></figure><figure><img src="'+i+'" alt="image-20211116145621627" tabindex="0" loading="lazy"><figcaption>image-20211116145621627</figcaption></figure><h1 id="e-elasticsearch" tabindex="-1"><a class="header-anchor" href="#e-elasticsearch"><span>E Elasticsearch</span></a></h1><p>弹性搜索，日志<strong>存储</strong></p><h1 id="l-logstash" tabindex="-1"><a class="header-anchor" href="#l-logstash"><span>L Logstash</span></a></h1><p>日志收集</p><h1 id="k-kibana" tabindex="-1"><a class="header-anchor" href="#k-kibana"><span>K Kibana</span></a></h1><p>日志展示</p><figure><img src="'+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h1 id="实战" tabindex="-1"><a class="header-anchor" href="#实战"><span>实战</span></a></h1><h2 id="环境" tabindex="-1"><a class="header-anchor" href="#环境"><span>环境</span></a></h2><p>操作系统优化</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl stop firewalld
systemctl disable firewalld
setenforce <span class="token number">0</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/SELINUX.*/SELINUX=disabled/g&#39;</span> /etc/selinux/conf

<span class="token comment"># 时间一致</span>

<span class="token comment"># 域名解析</span>
<span class="token number">172.16</span>.100.18 elk-node1
<span class="token number">172.16</span>.100.21 elk-node2



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>master-slave模式</p><figure><img src="`+l+`" alt="image-20211117083904657" tabindex="0" loading="lazy"><figcaption>image-20211117083904657</figcaption></figure><p>内存：大于2G</p><h2 id="elasticsearch" tabindex="-1"><a class="header-anchor" href="#elasticsearch"><span>Elasticsearch</span></a></h2><h3 id="基础环境安装-node1-node2同时进行" tabindex="-1"><a class="header-anchor" href="#基础环境安装-node1-node2同时进行"><span>基础环境安装 node1 node2同时进行</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@node1 ~<span class="token punctuation">]</span><span class="token comment"># rpm --import https://packages.elastic.co/GPG-KEY-elasticsearch</span>
<span class="token punctuation">[</span>root@node1 ~<span class="token punctuation">]</span><span class="token comment"># cd /etc/yum.repos.d/</span>
<span class="token punctuation">[</span>root@node1 yum.repos.d<span class="token punctuation">]</span><span class="token comment"># vi elasticsearch.repo</span>
<span class="token punctuation">[</span>elasticsearch-2.x<span class="token punctuation">]</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span>Elasticsearch repository <span class="token keyword">for</span> <span class="token number">2</span>.x packages
<span class="token assign-left variable">baseurl</span><span class="token operator">=</span>http://packages.elastic.co/elasticsearch/2.x/centos
<span class="token assign-left variable">gpgcheck</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">gpgkey</span><span class="token operator">=</span>http://packages.elastic.co/GPG-KEY-elasticsearch
<span class="token assign-left variable">enable</span><span class="token operator">=</span><span class="token number">1</span>

<span class="token punctuation">[</span>root@node1 ~<span class="token punctuation">]</span><span class="token comment"># yum list       #查看yum清单</span>
<span class="token punctuation">[</span>root@node1 ~<span class="token punctuation">]</span><span class="token comment"># yum install elasticsearch -y    #安装elasticsearch</span>
<span class="token punctuation">[</span>root@node1 ~<span class="token punctuation">]</span><span class="token comment"># yum install java -y      #安装Java</span>
<span class="token punctuation">[</span>root@node1 ~<span class="token punctuation">]</span><span class="token comment"># java -version           #查看Java版本</span>
openjdk version <span class="token string">&quot;1.8.0_131&quot;</span>
OpenJDK Runtime Environment <span class="token punctuation">(</span>build <span class="token number">1.8</span>.0_131-b12<span class="token punctuation">)</span>
OpenJDK <span class="token number">64</span>-Bit Server VM <span class="token punctuation">(</span>build <span class="token number">25.131</span>-b12, mixed mode<span class="token punctuation">)</span>

修改配置文件
<span class="token punctuation">[</span>root@node1 yum.repos.d<span class="token punctuation">]</span><span class="token comment"># vi /etc/elasticsearch/elasticsearch.yml</span>
<span class="token number">17</span>行 集群名称
cluster.name: elastic

<span class="token number">23</span>行 节点名称
node.name: linux-node1

<span class="token number">33</span>行 工作目录
path.data: /data/es-data
path.logs: /var/log/elasticsearch/

<span class="token number">43</span>行 防止交换swap分区
bootstrap.memory_lock: <span class="token boolean">true</span>

<span class="token number">54</span>行 监听网络
network.host: <span class="token number">0.0</span>.0.0

<span class="token number">58</span>行 端口
http.port: <span class="token number">9200</span>

关闭组播
discovery.zen.ping.multicast.enabled: <span class="token boolean">false</span>
单播
discuvery.zen.ping.unicast.hosts: <span class="token punctuation">[</span><span class="token string">&quot;elk-host1&quot;</span>,<span class="token string">&quot;elk-host2&quot;</span><span class="token punctuation">]</span>


创建目录及开启服务
<span class="token punctuation">[</span>root@node1 yum.repos.d<span class="token punctuation">]</span><span class="token comment"># mkdir -p /data/es-data</span>
<span class="token punctuation">[</span>root@node1 yum.repos.d<span class="token punctuation">]</span><span class="token comment"># chown -R elasticsearch:elasticsearch /data/es-data</span>
<span class="token punctuation">[</span>root@node1 yum.repos.d<span class="token punctuation">]</span><span class="token comment"># systemctl start elasticsearch.service </span>
<span class="token punctuation">[</span>root@node1 yum.repos.d<span class="token punctuation">]</span><span class="token comment"># netstat -anpt | grep 9200</span>
tcp6       <span class="token number">0</span>      <span class="token number">0</span> :::9200                 :::*                    LISTEN      <span class="token number">54134</span>/java

测试
http://20.0.0.10:9200

<span class="token punctuation">[</span>root@node1 yum.repos.d<span class="token punctuation">]</span><span class="token comment"># curl -i -XGET &#39;http://20.0.0.20:9200/_count?pretty&#39; -d &#39;{</span>
<span class="token operator">&gt;</span> <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
<span class="token operator">&gt;</span>     <span class="token string">&quot;match_all&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token operator">&gt;</span> <span class="token punctuation">}</span>
<span class="token operator">&gt;</span> <span class="token punctuation">}</span><span class="token string">&#39;
HTTP/1.1 200 OK       #输出项
Content-Type: application/json; charset=UTF-8
Content-Length: 95

{
  &quot;count&quot; : 0,
  &quot;_shards&quot; : {
    &quot;total&quot; : 0,
    &quot;successful&quot; : 0,
    &quot;failed&quot; : 0
  }
}

[root@node2 yum.repos.d]# curl -i -XGET &#39;</span>http://20.0.0.10:9200/_count?pretty<span class="token string">&#39; -d &#39;</span><span class="token punctuation">{</span>
<span class="token operator">&gt;</span> <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
<span class="token operator">&gt;</span>     <span class="token string">&quot;match_all&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token operator">&gt;</span> <span class="token punctuation">}</span>
<span class="token operator">&gt;</span> <span class="token punctuation">}</span>&#39;
HTTP/1.1 <span class="token number">200</span> OK      <span class="token comment">#输出项</span>
Content-Type: application/json<span class="token punctuation">;</span> <span class="token assign-left variable">charset</span><span class="token operator">=</span>UTF-8
Content-Length: <span class="token number">95</span>

<span class="token punctuation">{</span>
  <span class="token string">&quot;count&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
  <span class="token string">&quot;_shards&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;total&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
    <span class="token string">&quot;successful&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
    <span class="token string">&quot;failed&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装插件1" tabindex="-1"><a class="header-anchor" href="#安装插件1"><span>安装插件1</span></a></h3><p>elk-node1/node2都安装</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>安装Elasticsearch插件
<span class="token punctuation">[</span>root@node1 yum.repos.d<span class="token punctuation">]</span><span class="token comment"># /usr/share/elasticsearch/bin/plugin install mobz/elasticsearch-head</span>

测试
http://20.0.0.10:9200/_plugin/head/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>elasticsearch集群部署</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@node1 yum.repos.d<span class="token punctuation">]</span><span class="token comment"># vi /etc/elasticsearch/elasticsearch.yml</span>
<span class="token number">69</span>行 单播列表自动发现机制
discovery.zen.ping.unicast.hosts: <span class="token punctuation">[</span><span class="token string">&quot;20.0.0.10&quot;</span>, <span class="token string">&quot;20.0.0.20&quot;</span><span class="token punctuation">]</span>

重启服务
<span class="token punctuation">[</span>root@node1 yum.repos.d<span class="token punctuation">]</span><span class="token comment"># systemctl restart elasticsearch.service</span>

测试
http://20.0.0.10:9200/_plugin/head/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装插件2" tabindex="-1"><a class="header-anchor" href="#安装插件2"><span>安装插件2</span></a></h3><p>安装监控组件</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@node1 elasticsearch<span class="token punctuation">]</span><span class="token comment"># /usr/share/elasticsearch/bin/plugin install lmenezes/elasticsearch-kopf</span>
<span class="token function">chown</span> <span class="token parameter variable">-R</span> elasticsearch:elasticsearch /usr/share/elasticsearch/plugins
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="两台服务器均可插件测试" tabindex="-1"><a class="header-anchor" href="#两台服务器均可插件测试"><span>两台服务器均可插件测试</span></a></h3><figure><img src="`+p+'" alt="image-20211117231143675" tabindex="0" loading="lazy"><figcaption>image-20211117231143675</figcaption></figure><figure><img src="'+c+'" alt="image-20211117231243044" tabindex="0" loading="lazy"><figcaption>image-20211117231243044</figcaption></figure><figure><img src="'+r+'" alt="image-20211117231251486" tabindex="0" loading="lazy"><figcaption>image-20211117231251486</figcaption></figure><figure><img src="'+u+`" alt="image-20211117231308169" tabindex="0" loading="lazy"><figcaption>image-20211117231308169</figcaption></figure><h2 id="logstash" tabindex="-1"><a class="header-anchor" href="#logstash"><span>Logstash</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Apache
安装httpd并开启服务
<span class="token punctuation">[</span>root@node1 elasticsearch<span class="token punctuation">]</span><span class="token comment"># rpm --import https://packages.elastic.co/GPG-KEY-elasticsearch</span>
<span class="token punctuation">[</span>root@node1 elasticsearch<span class="token punctuation">]</span><span class="token comment"># vi /etc/yum.repos.d/logstash.repo</span>
<span class="token punctuation">[</span>logstash-2.1<span class="token punctuation">]</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span>Logstash repository <span class="token keyword">for</span> <span class="token number">2.1</span>.x packages
<span class="token assign-left variable">baseurl</span><span class="token operator">=</span>http://packages.elastic.co/logstash/2.1/centos
<span class="token assign-left variable">gpgcheck</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">gpgkey</span><span class="token operator">=</span>http://packages.elastic.co/GPG-KEY-elasticsearch
<span class="token assign-left variable">enable</span><span class="token operator">=</span><span class="token number">1</span>

安装Logstash
<span class="token punctuation">[</span>root@node1 elasticsearch<span class="token punctuation">]</span><span class="token comment"># yum install logstash -y</span>

安装java环境，没有自带安装使用yum <span class="token parameter variable">-y</span> <span class="token function">install</span> java安装
<span class="token punctuation">[</span>root@apache ~<span class="token punctuation">]</span><span class="token comment"># yum -y install java</span>
<span class="token punctuation">[</span>root@apache ~<span class="token punctuation">]</span><span class="token comment"># java -version</span>
openjdk version <span class="token string">&quot;1.8.0_131&quot;</span>
OpenJDK Runtime Environment <span class="token punctuation">(</span>build <span class="token number">1.8</span>.0_131-b12<span class="token punctuation">)</span>
OpenJDK <span class="token number">64</span>-Bit Server VM <span class="token punctuation">(</span>build <span class="token number">25.131</span>-b12, mixed mode<span class="token punctuation">)</span>
<span class="token punctuation">[</span>root@apache bin<span class="token punctuation">]</span><span class="token comment"># ln -s /opt/logstash/bin/logstash /usr/local/bin/</span>

logstash（apache）与elasticsearch（node）功能是否正常，做对接测试
<span class="token punctuation">[</span>root@apache bin<span class="token punctuation">]</span><span class="token comment"># logstash -e &#39;input { stdin{} } output { stdout{} }&#39;</span>
Settings: Default filter workers: <span class="token number">1</span>
Logstash startup completed
www.baidu.com                       
<span class="token number">2020</span>-11-18T07:53:59.480Z apache www.baidu.com


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>logstash命令选项解释：</p><pre><code>-f：指定logstash的配置文件，根据配置文件配置logstash
-e：后面跟着字符串，该字符串可以被当做logstash的配置（如果是“ ”，则默认使用stdin做输入，stdout为输出）
-t：测试配置文件是否正确，然后退出
#输入采用标准输入，输出采用标准输出
</code></pre><p>使用rubydebug显示详细输出</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@apache bin<span class="token punctuation">]</span><span class="token comment"># logstash -e &#39;input { stdin{} } output { stdout{ codec =&gt; rubydebug } }&#39;</span>
Settings: Default filter workers: <span class="token number">1</span>
Logstash startup completed
www.baidu.com
<span class="token punctuation">{</span>
       <span class="token string">&quot;message&quot;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;www.baidu.com&quot;</span>,
      <span class="token string">&quot;@version&quot;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;1&quot;</span>,
    <span class="token string">&quot;@timestamp&quot;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;2020-11-18T08:40:57.598Z&quot;</span>,
          <span class="token string">&quot;host&quot;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;apache&quot;</span>
<span class="token punctuation">}</span>


使用logstash将信息输出给elasticsearch
<span class="token punctuation">[</span>root@apache bin<span class="token punctuation">]</span><span class="token comment"># logstash -e &#39;input { stdin{} } output { elasticsearch { hosts =&gt; [&quot;20.0.0.10:9200&quot;] } }&#39;</span>
Settings: Default filter workers: <span class="token number">1</span>
Logstash startup completed
abc123      <span class="token comment">#输入内容</span>
tom456
123jerry

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在logstash收集系统日志</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
logstash配置文件主要由三部分组成：input、output、filter
<span class="token punctuation">[</span>root@apache bin<span class="token punctuation">]</span><span class="token comment"># chmod o+r /var/log/messages   #允许其他用户访问</span>
<span class="token punctuation">[</span>root@apache bin<span class="token punctuation">]</span><span class="token comment">#  ll /var/log/messages</span>
-rw----r--. <span class="token number">1</span> root root <span class="token number">250721</span> <span class="token number">11</span>月 <span class="token number">18</span> <span class="token number">16</span>:40 /var/log/message

<span class="token punctuation">[</span>root@apache ~<span class="token punctuation">]</span><span class="token comment"># vi /etc/logstash/conf.d/system.conf</span>
input <span class="token punctuation">{</span>                    <span class="token comment">#logstash输入：从/var/log/messages输入，类型为system，起始位                     置为从头开始</span>
        <span class="token function">file</span> <span class="token punctuation">{</span>
          path <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;/var/log/messages&quot;</span>
          <span class="token builtin class-name">type</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;system&quot;</span>
          start_position <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;beginning&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

output <span class="token punctuation">{</span>                <span class="token comment">#logstash输出：输出给elasticsearch（以IP地址指定位置）</span>
        elasticsearch <span class="token punctuation">{</span>
        hosts <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&quot;20.0.0.10:9200&quot;</span><span class="token punctuation">]</span>
        index <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;system-%{+YYY.MM.dd}&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

<span class="token punctuation">[</span>root@apache ~<span class="token punctuation">]</span><span class="token comment"># systemctl restart logstash.service</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>模块总结</p><figure><img src="`+d+`" alt="image-20211117235501571" tabindex="0" loading="lazy"><figcaption>image-20211117235501571</figcaption></figure><h2 id="kibana" tabindex="-1"><a class="header-anchor" href="#kibana"><span>Kibana</span></a></h2><p>添加logstash配置，收集apache服务的访问日志和错误日志中的数据</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>上传kibana-4.3.1-linux-x64.tar.gz到/root下
<span class="token function">wget</span> https://download.elastic.co/kibana/kibana/kibana-4.3.1-linux-x64.tar.gz
<span class="token punctuation">[</span>root@node1 ~<span class="token punctuation">]</span><span class="token comment"># tar zxf kibana-4.3.1-linux-x64.tar.gz</span>
<span class="token punctuation">[</span>root@node1 ~<span class="token punctuation">]</span><span class="token comment"># mv kibana-4.3.1-linux-x64 kibana</span>
<span class="token punctuation">[</span>root@node1 ~<span class="token punctuation">]</span><span class="token comment"># mv kibana /usr/local/</span>
<span class="token punctuation">[</span>root@node1 ~<span class="token punctuation">]</span><span class="token comment"># cd /usr/local/kibana/</span>
<span class="token punctuation">[</span>root@node1 kibana<span class="token punctuation">]</span><span class="token comment"># vi config/kibana.yml</span>

//2行 kibana打开的端口
server.port: <span class="token number">5601</span>

//5行 kibana侦听的地址
server.host: <span class="token string">&quot;0.0.0.0&quot;</span>


//12行 和elasticsearch建立联系
elasticsearch.url: <span class="token string">&quot;http://20.0.0.10:9200&quot;</span>

//20行 在elasticsearch中添加.kibana索引
kibana.index: <span class="token string">&quot;.kibana&quot;</span>

<span class="token punctuation">[</span>root@node1 kibana<span class="token punctuation">]</span><span class="token comment"># yum -y install screen</span>

启动kibana
<span class="token punctuation">[</span>root@node1 kibana<span class="token punctuation">]</span><span class="token comment"># /usr/local/kibana/bin/kibana</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@apache ~<span class="token punctuation">]</span><span class="token comment"># cd /etc/logstash/conf.d/</span>
<span class="token punctuation">[</span>root@apache conf.d<span class="token punctuation">]</span><span class="token comment"># vi apache_log.conf</span>
input <span class="token punctuation">{</span>
        <span class="token function">file</span> <span class="token punctuation">{</span>
          path <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;/etc/httpd/logs/access_log&quot;</span>
          <span class="token builtin class-name">type</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;access&quot;</span>
          start_position <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;beginning&quot;</span>
        <span class="token punctuation">}</span>

        <span class="token function">file</span> <span class="token punctuation">{</span>
          path <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;/etc/httpd/logs/error_log&quot;</span>
          <span class="token builtin class-name">type</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;error&quot;</span>
          start_position <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;beginning&quot;</span>
        <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
output <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span>type<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&quot;access&quot;</span> <span class="token punctuation">{</span>
          elasticsearch <span class="token punctuation">{</span>
            hosts <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&quot;20.0.0.10:9200&quot;</span><span class="token punctuation">]</span>
            index <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;apache_access-%{+YYY.MM.dd}&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span>type<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&quot;error&quot;</span> <span class="token punctuation">{</span>
          elasticsearch <span class="token punctuation">{</span>
            hosts <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&quot;20.0.0.10:9200&quot;</span><span class="token punctuation">]</span>
            index <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;apache_error-%{+YYY.MM.dd}&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">[</span>root@apache conf.d<span class="token punctuation">]</span><span class="token comment"># logstash -f apache_log.conf    #指定logstash的配置文件，根据apache_log.conf配置logstash（-f可以不重启加载）</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+m+'" alt="image-20211118000511866" tabindex="0" loading="lazy"><figcaption>image-20211118000511866</figcaption></figure><figure><img src="'+v+'" alt="image-20211118000504423" tabindex="0" loading="lazy"><figcaption>image-20211118000504423</figcaption></figure><figure><img src="'+b+'" alt="image-20211118000526400" tabindex="0" loading="lazy"><figcaption>image-20211118000526400</figcaption></figure><figure><img src="'+g+`" alt="image-20211118000641707" tabindex="0" loading="lazy"><figcaption>image-20211118000641707</figcaption></figure><h1 id="elasticsearch-redis" tabindex="-1"><a class="header-anchor" href="#elasticsearch-redis"><span>Elasticsearch + Redis</span></a></h1><p>首先从redis这台服务器下手吧</p><pre><code>yum install -y redis

关于redis的具体操作以后的文章会讲到

vim /etc/redis.conf
修改
bind 0.0.0.0
保存退出，启动
/etc/init.d/redis start

ss -tanl查看redis启动端口6379
</code></pre><p>web server （192.168.1.13）：</p><pre><code>yum install -y httpd
/etc/init.d/httpd start
ss -tanl 查看一下80端口是否启动
</code></pre><p>安装logstash</p><pre><code>rpm -ivh logstash-1.5.4-1.noarch.rpm

vim /etc/logstash/conf.d/full.conf #full.conf这个你可以随意起名字
input { 
        file {
                path =&gt; &quot;/var/log/httpd/access_log&quot;
                type =&gt; &quot;Apache&quot;
                start_position =&gt; &quot;beginning&quot;
        }
}

output {
        redis {
                port =&gt; &quot;6379&quot;
                host =&gt; [&quot;192.168.1.12&quot;]
                data_type =&gt; &quot;list&quot;
                key =&gt; &quot;logstash-%{type}&quot;
        }
}

保存退出！

测试一下语法有没有错误：
[root@linux-node4 ~]# logstash -f /etc/logstash/conf.d/full.conf --configtest
Configuration OK

没有错误可以启动了
[root@linux-node4 ~]# logstash -f /etc/logstash/conf.d/full.conf
Logstash startup completed
</code></pre><p>至此，我们可以测试一下，是否把收集到的日志数据发送到了redis。</p><pre><code>#redis-cli
127.0.0.1:6379&gt; LLEN logstash-Apache
(integer) 38
127.0.0.1:6379&gt; LINDEX logstash-Apache 1
&quot;{\\&quot;message\\&quot;:\\&quot;192.168.1.159 - - [16/May/2018:19:29:39 +0800] \\\\\\&quot;GET / HTTP/1.1\\\\\\&quot; 304 - \\\\\\&quot;-\\\\\\&quot; \\\\\\&quot;Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.221 Safari/537.36 SE 2.X MetaSr 1.0\\\\\\&quot;\\&quot;,\\&quot;@version\\&quot;:\\&quot;1\\&quot;,\\&quot;@timestamp\\&quot;:\\&quot;2018-05-16T13:13:48.004Z\\&quot;,\\&quot;host\\&quot;:\\&quot;0.0.0.0\\&quot;,\\&quot;path\\&quot;:\\&quot;/var/log/httpd/access_log\\&quot;,\\&quot;type\\&quot;:\\&quot;Apache\\&quot;}&quot;
127.0.0.1:6379&gt; 
由此说明已经产生数据到redis了。
</code></pre><p>接下来在logstash server这台机器上操作</p><p>logstash安装不再演示</p><pre><code>vim fromredis.conf
input {
        redis {
                port =&gt; &quot;6379&quot;
                host =&gt; &quot;192.168.1.12&quot;
                data_type =&gt; &quot;list&quot;
                key =&gt; &quot;logstash-Apache&quot;
        }
}

output {
        stdout {
                codec =&gt; rubydebug
        }
}

测试语法是否正确：
[root@linux-node2 conf.d]# logstash -f /etc/logstash/conf.d/fromredis.conf --configtest
Configuration OK
运行：
[root@linux-node2 conf.d]# logstash -f /etc/logstash/conf.d/fromredis.conf
</code></pre><p>至这里，运行结果会把收集到的日志信息，标准输入至屏幕；</p><p>打开浏览器输入&quot; http://192.168.1.13&quot; 刷新几次，你会发现logstach server 这台服务器的屏幕会出现日志滚动信息，都是刚刚刷新收集到的最新日志信息；</p><p>最后,在es这台机器上，安装elasticsearch + kibana,安装方法不再演示:</p><pre><code>vim /etc/elasticsearch/elasticsearch.yml
cluster.name: myes
node.name: &quot;linux-node1&quot;
保存退出，并启动

编辑kibana的配置文件：
/usr/local/kibana/config/kibana.yml
elasticsearch_url: &quot; #这一项非常重要 

启动kibana：
/usr/local/kibana/bin/kibana

复制一个终端
ss -tanl 查看5601端口是否开启
</code></pre><p>浏览器输入&quot; http://192.168.1.10:5601&quot;打开kibana界面</p><p>接下来还返回logstash server服务器</p><p>前面，我们是将结果标准输出到了屏幕，这次我们需要把结果输出到elasticsearch服务器</p><pre><code>vim /etc/logstash/conf.d/fromredis.conf 
修改为：
input {
        redis {
                port =&gt; &quot;6379&quot;
                host =&gt; &quot;192.168.1.12&quot;
                data_type =&gt; &quot;list&quot;
                key =&gt; &quot;logstash-Apache&quot;
        }
}

output {
        elasticsearch {
                cluster =&gt; &quot;myes&quot;
                index =&gt; &quot;logstash-%{YYYY.MM.dd}&quot;
        }
}

测试语法，没有问题就运行：
[root@linux-node2 conf.d]# logstash -f /etc/logstash/conf.d/fromredis.conf --configtest
Configuration OK
[root@linux-node2 conf.d]# logstash -f /etc/logstash/conf.d/fromredis.conf
</code></pre><p>想要知道是否成功的信息输出到了es上，可以验证</p><pre><code>[root@linux-node1 ~]# curl -XGET &#39;localhost:9200/_cat/indices&#39;
yellow open .kibana             1 1   2 2  10.3kb  10.3kb 
yellow open logstash-2018.05.16 5 1 389 0 170.5kb 170.5kb 
[root@linux-node1 ~]# curl -XGET &#39;localhost:9200/logstash-2018.05.16/_search?pretty&#39;
</code></pre><p>接下来在kibana上显示：</p><p>浏览器&quot; http://192.168.1.10:5601/&quot;</p><h1 id="面试题" tabindex="-1"><a class="header-anchor" href="#面试题"><span>面试题：</span></a></h1><p>ELK插件</p><p>https://blog.csdn.net/sinat_35930259/article/details/81052139</p>`,78),f=[h];function q(y,_){return s(),a("div",null,f)}const L=n(k,[["render",q],["__file","ELK.html.vue"]]),K=JSON.parse('{"path":"/note-book/ELK/ELK.html","title":"ELK日志分析系统","lang":"zh-CN","frontmatter":{"description":"ELK日志分析系统 image-20211116145510909image-20211116145510909 image-20211116145621627image-20211116145621627 E Elasticsearch 弹性搜索，日志存储 L Logstash 日志收集 K Kibana 日志展示 实战 环境 操作系统优化 mast...","head":[["meta",{"property":"og:url","content":"https://paper-dragon.github.io/note-book/ELK/ELK.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"ELK日志分析系统"}],["meta",{"property":"og:description","content":"ELK日志分析系统 image-20211116145510909image-20211116145510909 image-20211116145621627image-20211116145621627 E Elasticsearch 弹性搜索，日志存储 L Logstash 日志收集 K Kibana 日志展示 实战 环境 操作系统优化 mast..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-13T15:08:38.000Z"}],["meta",{"property":"article:author","content":"PaperDragon"}],["meta",{"property":"article:modified_time","content":"2023-08-13T15:08:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ELK日志分析系统\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-13T15:08:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"环境","slug":"环境","link":"#环境","children":[]},{"level":2,"title":"Elasticsearch","slug":"elasticsearch","link":"#elasticsearch","children":[{"level":3,"title":"基础环境安装 node1 node2同时进行","slug":"基础环境安装-node1-node2同时进行","link":"#基础环境安装-node1-node2同时进行","children":[]},{"level":3,"title":"安装插件1","slug":"安装插件1","link":"#安装插件1","children":[]},{"level":3,"title":"安装插件2","slug":"安装插件2","link":"#安装插件2","children":[]},{"level":3,"title":"两台服务器均可插件测试","slug":"两台服务器均可插件测试","link":"#两台服务器均可插件测试","children":[]}]},{"level":2,"title":"Logstash","slug":"logstash","link":"#logstash","children":[]},{"level":2,"title":"Kibana","slug":"kibana","link":"#kibana","children":[]}],"git":{"createdTime":1691939318000,"updatedTime":1691939318000,"contributors":[{"name":"PaperDragon","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":6.02,"words":1806},"filePathRelative":"note-book/ELK/ELK.md","localizedDate":"2023年8月13日","excerpt":"\\n<figure><figcaption>image-20211116145510909</figcaption></figure>\\n<figure><figcaption>image-20211116145621627</figcaption></figure>\\n<h1>E Elasticsearch</h1>\\n<p>弹性搜索，日志<strong>存储</strong></p>\\n<h1>L Logstash</h1>\\n<p>日志收集</p>\\n<h1>K Kibana</h1>\\n<p>日志展示</p>\\n<figure><figcaption></figcaption></figure>\\n<h1>实战</h1>","autoDesc":true}');export{L as comp,K as data};
