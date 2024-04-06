import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as e,d as i}from"./app-Dqf-9U3X.js";const s="/assets/%E5%9F%BA%E6%9C%AC%E6%9E%B6%E6%9E%84-Cja0Tjk6.png",l="/assets/web-api-DBxie1Ur.png",t="/assets/web-B_yYqqVI.png",o="/assets/queue-Bn7vAWLx.png",c="/assets/es-manage-DbafRiKz.png",p="/assets/last-not-least-DY7QIhte.png",r="/assets/Center-BHta749W.jpeg",d={},u=i('<h1 id="elk和kafka构建高并发分布式日志收集系统" tabindex="-1"><a class="header-anchor" href="#elk和kafka构建高并发分布式日志收集系统"><span>ELK和kafka构建高并发分布式日志收集系统</span></a></h1><h1 id="elk-kafka集群" tabindex="-1"><a class="header-anchor" href="#elk-kafka集群"><span>ELK+Kafka集群</span></a></h1><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2><h3 id="前言-1" tabindex="-1"><a class="header-anchor" href="#前言-1"><span>前言</span></a></h3><p>业务层可以直接写入到kafka队列中，不用担心elasticsearch的写入效率问题。 图示</p><figure><img src="'+s+`" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure><h1 id="kafka" tabindex="-1"><a class="header-anchor" href="#kafka"><span>Kafka</span></a></h1><p>Apache kafka是消息中间件的一种，是一种分布式的，基于发布/订阅的消息系统。能实现一个为处理实时数据提供一个统一、高吞吐、低延迟的平台，且拥有分布式的，可划分的，冗余备份的持久性的日志服务等特点。</p><h2 id="术语" tabindex="-1"><a class="header-anchor" href="#术语"><span>术语</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>1、kafka是一个消息队列服务器。kafka服务称为broker（中间人）, 消息发送者称为producer（生产者）, 消息接收者称为consumer（消费者）;通常我们部署多个broker以提供高可用性的消息服务集群.典型的是3个broker;消息以topic的形式发送到broker,消费者订阅topic,实现按需取用的消费模式;创建topic需要指定replication-factor(复制数目, 通常=broker数目);每个topic可能有多个分区(partition), 每个分区的消息内容不会重复

2、kafka-broker-中间人

3、webserver/logstash-producer[prəˈdu:sə®]-消息生产者/消息发送者
Producer：
kafka集群中的任何一个broker都可以向producer提供metadata信息,这些metadata中包含&quot;集群中存活的servers列表&quot;/“partitions leader列表&quot;等信息；
当producer获取到metadata信息之后, producer将会和Topic下所有partition leader保持socket连接；
消息由producer直接通过socket发送到broker，中间不会经过任何&quot;路由层”，事实上，消息被路由到哪个partition上由producer客户端决定；比如可以采用&quot;random&quot;“key-hash”&quot;轮询&quot;等,如果一个topic中有多个partitions,那么在producer端实现&quot;消息均衡分发&quot;是必要的。
在producer端的配置文件中,开发者可以指定partition路由的方式。
Producer消息发送的应答机制设置发送数据是否需要服务端的反馈,有三个值0,1,-1
0:producer不会等待broker发送ack
1:当leader接收到消息之后发送ack
-1:当所有的follower都同步消息成功后发送ack

4、elasticsearch-consumer-消费者

5、logs-topic-话题

6、replication-facter-复制数目-中间人存储消息的副本数=broker数目

7、一个topic有多个分区partition
partition：
（1）、Partition：为了实现扩展性，一个非常大的topic可以分布到多个broker（即服务器）上，一个topic可以分为多个partition，每个partition是一个有序的队列。partition中的每条消息都会被分配一个有序的id（offset）。kafka只保证按一个partition中的顺序将消息发给consumer，不保证一个topic的整体（多个partition间）的顺序。
（2）、在kafka中,一个partition中的消息只会被group中的一个consumer消费(同一时刻)；一个Topic中的每个partions，只会被一个consumer消费，不过一个consumer可以同时消费多个partitions中的消息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实战" tabindex="-1"><a class="header-anchor" href="#实战"><span>实战</span></a></h2><h3 id="拓扑" tabindex="-1"><a class="header-anchor" href="#拓扑"><span>拓扑</span></a></h3><figure><img src="`+s+`" alt="基本架构" tabindex="0" loading="lazy"><figcaption>基本架构</figcaption></figure><h3 id="说明" tabindex="-1"><a class="header-anchor" href="#说明"><span>说明</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>说明
<span class="token number">1</span>、使用一台Nginx代理访问kibana的请求<span class="token punctuation">;</span>
<span class="token number">2</span>、两台es组成es集群，并且在两台es上面都安装kibana<span class="token punctuation">;</span>（ 以下对elasticsearch简称es ）
<span class="token number">3</span>、中间三台服务器就是我的kafka<span class="token punctuation">(</span>zookeeper<span class="token punctuation">)</span>集群啦<span class="token punctuation">;</span> 上面写的 消费者/生产者 这是kafka<span class="token punctuation">(</span>zookeeper<span class="token punctuation">)</span>中的概念<span class="token punctuation">;</span>
<span class="token number">4</span>、最后面的就是一大堆的生产服务器啦，上面使用的是logstash，
当然除了logstash也可以使用其他的工具来收集你的应用程序的日志，例如：Flume，Scribe，Rsyslog，Scripts……
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="角色" tabindex="-1"><a class="header-anchor" href="#角色"><span>角色</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token number">1</span>、nginx-proxy<span class="token punctuation">(</span>略<span class="token punctuation">)</span>：172.16.100.25
<span class="token number">2</span>、es1：172.16.100.21
<span class="token number">3</span>、es2：172.16.100.24
<span class="token number">4</span>、kafka1：172.16.100.26
<span class="token number">5</span>、kafka2：172.16.100.27
<span class="token number">6</span>、kafka3：172.16.100.32
<span class="token number">7</span>、webserver：172.16.100.33
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="软件说明" tabindex="-1"><a class="header-anchor" href="#软件说明"><span>软件说明</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token number">1</span>、elasticsearch - <span class="token number">1.7</span>.3.tar.gz
<span class="token number">2</span>、Logstash - <span class="token number">2.0</span>.0.tar.gz
<span class="token number">3</span>、kibana - <span class="token number">4.1</span>.2 - linux - x64 <span class="token builtin class-name">.</span> <span class="token function">tar</span> <span class="token builtin class-name">.</span> gz<span class="token punctuation">(</span>略<span class="token punctuation">)</span>：
以上软件都可以从官网下载 <span class="token builtin class-name">:</span> https <span class="token builtin class-name">:</span> //www.elastic.co/downloads
<span class="token number">4</span>、java - <span class="token number">1.8</span>.0 ， nginx 采用 yum 安装
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤"><span>步骤</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token number">1</span>、ES集群安装配置<span class="token punctuation">;</span>
<span class="token number">2</span>、Logstash客户端配置<span class="token punctuation">(</span>直接写入数据到ES集群，写入系统messages日志<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">3</span>、Kafka<span class="token punctuation">(</span>zookeeper<span class="token punctuation">)</span>集群配置<span class="token punctuation">;</span><span class="token punctuation">(</span>Logstash写入数据到Kafka消息系统<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">4</span>、Kibana部署<span class="token punctuation">;</span>
<span class="token number">5</span>、Nginx负载均衡Kibana请求<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="演示" tabindex="-1"><a class="header-anchor" href="#演示"><span>演示</span></a></h3><h4 id="_1、es集群安装配置" tabindex="-1"><a class="header-anchor" href="#_1、es集群安装配置"><span>1、ES集群安装配置</span></a></h4><p>es1： （1）、安装java-1.8.0以及依赖包（每台服务器都安装JAVA）</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># yum -y install epel-release</span>
<span class="token comment"># yum -y install java-1.8.0 git wget lrzsz</span>
<span class="token comment">#缓存这个java的包</span>
<span class="token comment">#可以使用只下载不安装，缓存这些包</span>
<span class="token comment"># yum -y install java-1.8.0 git wget lrzsz --downloadonly --downloaddir=./</span>
<span class="token comment">#注释： --downloadonly 只下载不安装  downloaddir  目录</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）、获取es软件包</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># wget https://download.elastic.co/elasticsearch/elasticsearch/elasticsearch-1.7.3.tar.gz</span>
<span class="token comment"># tar -xf elasticsearch-1.7.3.tar.gz -C /usr/local/</span>
<span class="token comment"># ln -sv /usr/local/elasticsearch-1.7.3/ /usr/local/elasticsearch</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）、修改配置文件</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># vim /usr/local/elasticsearch/config/elasticsearch.yml</span>

cluster.name: es-cluster                         <span class="token comment">#组播的名称地址</span>
node.name: <span class="token string">&quot;es-node1&quot;</span>                            <span class="token comment">#节点名称，不能和其他节点重复</span>
node.master: <span class="token boolean">true</span>                                <span class="token comment">#节点能否被选举为master</span>
node.data: <span class="token boolean">true</span>                                  <span class="token comment">#节点是否存储数据</span>
index.number_of_shards: <span class="token number">5</span>                        <span class="token comment">#索引分片的个数</span>
index.number_of_replicas: <span class="token number">1</span>                  	 <span class="token comment">#分片的副本个数</span>
path.conf: /usr/local/elasticsearch/config       <span class="token comment">#配置文件的路径</span>
path.data: /data/es/data                         <span class="token comment">#数据目录路径</span>
path.work: /data/es/worker                       <span class="token comment">#工作目录路径</span>
path.logs: /usr/local/elasticsearch/logs         <span class="token comment">#日志文件路径</span>
path.plugins: /data/es/plugins                   <span class="token comment">#插件路径</span>
bootstrap.mlockall: <span class="token boolean">true</span>        				 <span class="token comment">#内存不向swap交换</span>
http.enabled: <span class="token boolean">true</span>                               <span class="token comment">#启用http</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（4）、创建相关目录</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># mkdir -p /data/es/{data,worker,plugins}</span>
<span class="token comment">#注释：data：放数据的文件 worker：工作临时文件 plugins：插件 日志文件会自己建立</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（5）、获取es服务管理脚本</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#为了方便配置文件</span>
<span class="token comment"># git clone https://github.com/elastic/elasticsearch-servicewrapper.git</span>

<span class="token comment"># mv elasticsearch-servicewrapper/service/ /usr/local/elasticsearch/bin/</span>

<span class="token comment">#在/etc/init.d/目录下，自动安装上es的管理脚本啦</span>
<span class="token comment"># /usr/local/elasticsearch/bin/service/elasticsearch install</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（6）、启动es，并检查服务是否正常</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># systemctl start elasticsearch</span>
<span class="token comment"># systemctl enable elasticsearch</span>
<span class="token comment"># ss -nptl |grep -E &quot;9200|9300&quot;</span>
LISTEN     <span class="token number">0</span>      <span class="token number">50</span>          :::9200                    :::*                   users:<span class="token variable"><span class="token punctuation">((</span>&quot;java&quot;<span class="token punctuation">,</span>pid<span class="token operator">=</span><span class="token number">10020</span><span class="token punctuation">,</span>fd<span class="token operator">=</span><span class="token number">104</span><span class="token punctuation">))</span></span>
LISTEN     <span class="token number">0</span>      <span class="token number">50</span>          :::9300                    :::*                   users:<span class="token variable"><span class="token punctuation">((</span>&quot;java&quot;<span class="token punctuation">,</span>pid<span class="token operator">=</span><span class="token number">10020</span><span class="token punctuation">,</span>fd<span class="token operator">=</span><span class="token number">66</span><span class="token punctuation">))</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问192.168.88.153:9200</p><figure><img src="`+l+`" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure><p>（3）、安装es的管理插件 （1）、说明：es官方提供一个用于管理es的插件，可清晰直观看到es集群的状态，以及对集群的操作管理，安装方法如下： （2）、提示：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># /usr/local/elasticsearch/bin/plugin -i mobz/elasticsearch-head</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>安装好之后，访问方式为： http://192.168.0.110:9200/_plugin/head， 由于集群中现在暂时没有数据，所以显示为空, <img src="`+t+`" alt="在这里插入图片描述" loading="lazy"></p><h4 id="_2、logstash客户端安装配置-在webserver1上安装logstassh-用于采集日志" tabindex="-1"><a class="header-anchor" href="#_2、logstash客户端安装配置-在webserver1上安装logstassh-用于采集日志"><span>2、Logstash客户端安装配置（在webserver1上安装logstassh，用于采集日志）</span></a></h4><p>（1）、downloads 软件包</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># yum -y install java-1.8.0</span>
<span class="token comment"># wget https://download.elastic.co/logstash/logstash/logstash-2.0.0.tar.gz</span>
<span class="token comment"># tar -xf logstash-2.0.0.tar.gz -C /usr/local</span>
<span class="token comment"># cd /usr/local/</span>
<span class="token comment"># ln -sv logstash-2.0.0 logstash</span>
<span class="token comment"># mkdir /usr/local/logstash/{logs,etc}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）、Logstash 向es集群写数据 编写配置文件;</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># vim /usr/local/logstash/etc/logstash.conf</span>
input <span class="token punctuation">{</span>                <span class="token comment">#数据的输入从标准输入</span>
stdin <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
output <span class="token punctuation">{</span>              <span class="token comment">#数据的输出我们指向了es集群</span>
elasticsearch <span class="token punctuation">{</span>
hosts <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span> <span class="token string">&quot;192.168.0.110:9200&quot;</span> , <span class="token string">&quot;192.168.0.111:9200&quot;</span> <span class="token punctuation">]</span> <span class="token comment">#es 主机的 ip 及端口</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检查配置文件是否有语法错误：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#  /usr/local/logstash/bin/logstash -f /usr/local/logstash/etc/logstash.conf --configtest --verbose</span>

输出提示：
Configuration OK		语法正确

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）、启动logstash 启动;</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># /usr/local/logstash/bin/logstash -f /usr/local/logstash/etc/logstash.conf</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3、kafka集群安装配置" tabindex="-1"><a class="header-anchor" href="#_3、kafka集群安装配置"><span>3、Kafka集群安装配置</span></a></h4><p>（1）、提示：在搭建kafka集群时，需要提前安装zookeeper集群，当然kafka已经自带zookeeper程序只需要解压并且安装配置就行了 （2）、Kafka1 获取软件包：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>官网： http://kafka.apache.org
<span class="token comment"># yum install -y java-1.8.0</span>
<span class="token comment"># wget http://mirror.rise.ph/apache/kafka/0.8.2.1/kafka_2.11-0.8.2.1.tgz</span>
http://mirror.rise.ph/apache/kafka/2.6.2/kafka_2.12-2.6.2.tgz
<span class="token comment"># tar -xf kafka_2.12-2.6.2.tgz -C /usr/local/</span>
<span class="token comment"># cd /usr/local/</span>
<span class="token comment"># ln -sv kafka_2.12-2.6.2 kafka</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置zookeeper集群：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># vim /usr/local/kafka/config/zookeeper.properties</span>

<span class="token assign-left variable">dataDir</span><span class="token operator">=</span>/data/zookeeper
<span class="token assign-left variable">clientPort</span><span class="token operator">=</span><span class="token number">2181</span>
<span class="token assign-left variable">tickTime</span><span class="token operator">=</span><span class="token number">2000</span>
<span class="token comment">#注释：tickTime : 这个时间是作为 Zookeeper 服务器之间或客户端与服务器之间维持心跳的时间间隔，也就是每个 tickTime 时间就会发送一个心跳。</span>
<span class="token assign-left variable">initLimit</span><span class="token operator">=</span><span class="token number">20</span>
<span class="token comment">#注释：initLimit：LF初始通信时限</span>
<span class="token comment">#集群中的follower服务器(F)与leader服务器(L)之间 初始连接 时能容忍的最多心跳数（tickTime的数量）。</span>
<span class="token comment">#此配置表示，允许 follower （相对于 leader 而言的“客户端”）连接 并同步到  leader 的初始化连接时间，它以 tickTime 的倍数来表示。当超过设置倍数的 tickTime 时间，则连接失败</span>
<span class="token assign-left variable">syncLimit</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token comment">#注释：syncLimit：LF同步通信时限</span>
<span class="token comment">#集群中的follower服务器(F)与leader服务器(L)之间 请求和应答 之间能容忍的最多心跳数（tickTime的数量）。</span>
<span class="token comment">#此配置表示， leader 与 follower 之间发送消息，请求 和 应答 时间长度。如果 follower 在设置的时间内不能与leader 进行通信，那么此 follower 将被丢弃。</span>
<span class="token assign-left variable">server.2</span><span class="token operator">=</span><span class="token number">192.168</span>.0.112:2888:3888
<span class="token comment">#注释：</span>
<span class="token comment">#2888 端口：表示的是这个服务器与集群中的 Leader 服务器交换信息的端口；</span>
<span class="token comment">#3888 端口：表示的是万一集群中的 Leader 服务器挂了，需要一个端口来重新进行选举，选出一个新的 Leader ，而这个端口就是用来执行选举时服务器相互通信的端口。</span>
<span class="token assign-left variable">server.3</span><span class="token operator">=</span><span class="token number">192.168</span>.0.113:2888:3888
<span class="token assign-left variable">server.4</span><span class="token operator">=</span><span class="token number">192.168</span>.0.115:2888:3888
<span class="token assign-left variable">maxClientCnxns</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token comment">#注释:</span>
<span class="token comment">#maxClientCnxns选项，如果不设置或者设置为0，则每个ip连接zookeeper时的连接数没有限制</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建zookeeper所需要的目录：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># mkdir /data/zookeeper</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建myid文件：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#在/data/zookeeper目录下创建myid文件，里面的内容为数字，用于标识主机，如果这个文件没有的话，zookeeper是没法启动的</span>
<span class="token comment"># echo 2 &gt; /data/zookeeper/myid</span>
<span class="token comment">#另外两台，分别是3,4。以上就是zookeeper集群的配置，下面等我配置好kafka之后直接复制到其他两个节点即可</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Kafka配置：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># vim /usr/local/kafka/config/server.properties</span>
<span class="token assign-left variable">broker.id</span><span class="token operator">=</span><span class="token number">2</span>
<span class="token comment">#注释：唯一，填数字，本文中分别为 2 / 3 / 4</span>
<span class="token assign-left variable">prot</span><span class="token operator">=</span><span class="token number">9092</span>
<span class="token comment">#注释：这个 broker 监听的端口</span>
<span class="token assign-left variable">host.name</span><span class="token operator">=</span><span class="token number">192.168</span>.0.112
<span class="token comment">#注释：唯一，填服务器 IP</span>
<span class="token assign-left variable">log.dir</span><span class="token operator">=</span>/data/kafka-logs
<span class="token comment">#注释：该目录可以不用提前创建，在启动时自己会创建</span>
<span class="token assign-left variable">zookeeper.connect</span><span class="token operator">=</span><span class="token number">192.168</span>.0.112:2181,192.168.0.113:2181,192.168.0.115:2181
<span class="token comment">#注释：这个就是 zookeeper 的 ip 及端口</span>
<span class="token assign-left variable">num.partitions</span><span class="token operator">=</span><span class="token number">16</span>
<span class="token comment">#注释：需要配置较大 分片影响读写速度</span>
<span class="token assign-left variable">log.dirs</span><span class="token operator">=</span>/data/kafka-logs
<span class="token comment">#注释：数据目录也要单独配置磁盘较大的地方</span>
<span class="token assign-left variable">log.retention.hours</span><span class="token operator">=</span><span class="token number">168</span>
<span class="token comment">#注释：时间按需求保留过期时间 避免磁盘满</span>
<span class="token comment">#日志保存的时间，可以选择hours,minutes和ms 	168(7day)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）、Kafka3&amp;Kafka3 将Kafka（zookeeper）的程序目录全部拷贝到其他两个节点：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># scp -r /usr/local/kafka 192.168.0.113:/usr/local/</span>
<span class="token comment"># scp -r /usr/local/kafka 192.168.0.115:/usr/local/</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改两个节点配置（这里基本相同，但是注意不同位置）：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>（ <span class="token number">1</span> ） zookeeper 的配置
<span class="token comment">#kafka2和kafka3</span>
<span class="token comment"># mkdir /data/zookeeper -p</span>
<span class="token comment"># echo &quot;x&quot; &gt;    /data/zookeeper/myid			#x为3或4</span>
（ <span class="token number">2</span> ） kafka 的配置
<span class="token comment">#kafka2和kafka3</span>
<span class="token comment"># vim /usr/local/kafka/config/server.properties</span>
<span class="token assign-left variable">broker.id</span><span class="token operator">=</span>x							<span class="token comment">#x为3或4</span>
<span class="token assign-left variable">host.name</span><span class="token operator">=</span><span class="token number">192.168</span>.x.xx				<span class="token comment">#x为Kafka2和Kafka3的ip</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动，先启动zookeeper集群，才能启动Kafka</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token number">8</span>.启动，先启动zookeeper集群，才能启动kafka
<span class="token comment">#提示：按照顺序来，kafka1 –&gt; kafka2 –&gt;kafka3</span>
<span class="token comment">#zookeeper启动命令：</span>
<span class="token comment"># /usr/local/kafka/bin/zookeeper-server-start.sh /usr/local/kafka/config/zookeeper.properties &amp;</span>
<span class="token comment"># /usr/local/kafka/bin/zookeeper-server-start.sh /usr/local/kafka/config/zookeeper.properties &amp;</span>
<span class="token comment"># /usr/local/kafka/bin/zookeeper-server-start.sh /usr/local/kafka/config/zookeeper.properties &amp;</span>
<span class="token comment">#注释：/usr/local/kafka/bin/zookeeper-server-stop.sh  #zookeeper停止的命令</span>
<span class="token comment">#如果zookeeper有问题 nohup的日志文件会非常大，把磁盘占满，</span>
<span class="token comment">#这个zookeeper服务可以通过自己些服务脚本来管理服务的启动与关闭。</span>
<span class="token comment">#后面两台执行相同操作，在启动过程当中会出现以下报错信息：</span>
<span class="token comment">#WARN Cannot open channel to 3 at election address / 192.168.0.113 : 3888</span>
<span class="token comment">#由于zookeeper集群在启动的时候，每个结点都试图去连接集群中的其它结点，先启动的肯定连不上后面还没启动的，所以上面日志前面部分的异常是可以忽略的。通过后面部分可以看到，集群在选出一个Leader后，最后稳定了。</span>
<span class="token comment">#其他节点也可能会出现类似的情况，属于正常。</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>zookeeper服务检查：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># netstat -nlpt | grep -E &quot;2181|2888|3888&quot;</span>
<span class="token comment">#输出提示：</span>
tcp6       <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">192.168</span>.0.112:3888      :::*                    LISTEN      <span class="token number">1722</span>/java           
tcp6       <span class="token number">0</span>      <span class="token number">0</span> :::2181                 :::*                    LISTEN      <span class="token number">1722</span>/java   
<span class="token comment"># netstat -nlpt | grep -E &quot;2181|2888|3888&quot;</span>
<span class="token comment">#输出提示</span>
tcp6       <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">192.168</span>.0.113:3888      :::*                    LISTEN      <span class="token number">1713</span>/java           
tcp6       <span class="token number">0</span>      <span class="token number">0</span> :::2181                 :::*                    LISTEN      <span class="token number">1713</span>/java           
tcp6       <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">192.168</span>.0.113:2888      :::*                    LISTEN      <span class="token number">1713</span>/java
<span class="token comment">#如果哪台是Leader,那么它就拥有2888这个端口</span>
<span class="token comment"># netstat -nlpt | grep -E &quot;2181|2888|3888&quot;</span>
<span class="token comment">#输出提示</span>
tcp6       <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">192.168</span>.0.115:3888      :::*                    LISTEN      <span class="token number">1271</span>/java           
tcp6       <span class="token number">0</span>      <span class="token number">0</span> :::2181                 :::*                    LISTEN      <span class="token number">1271</span>/java 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>验证、启动Kafka：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#启动（在三台Kafka服务器上）：</span>
<span class="token comment"># nohup /usr/local/kafka/bin/kafka-server-start.sh /usr/local/kafka/config/server.properties &amp;</span>
<span class="token comment"># nohup /usr/local/kafka/bin/kafka-server-start.sh /usr/local/kafka/config/server.properties &amp;</span>
<span class="token comment"># nohup /usr/local/kafka/bin/kafka-server-start.sh /usr/local/kafka/config/server.properties &amp;</span>
<span class="token comment">#注释：/usr/local/kafka/bin/kafka-server-stop.sh   #kafka停止的命令</span>
<span class="token comment">#跟zookeeper服务一样，如果kafka有问题 nohup的日志文件会非常大,把磁盘占满，这个kafka服务同样可以通过自己些服务脚本来管理服务的启动与关闭。</span>
<span class="token comment">#测试：</span>
<span class="token comment">#下面我们将webserver1上面的logstash的输出改到kafka上面</span>
<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>修改webserver1上面的logstash配置
<span class="token comment">#  vim /usr/local/logstash/etc/logstash3.conf </span>
input <span class="token punctuation">{</span>
<span class="token function">file</span> <span class="token punctuation">{</span>
<span class="token builtin class-name">type</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;system-message&quot;</span>
path <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;/var/log/messages&quot;</span>
start_position <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;beginning&quot;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
output <span class="token punctuation">{</span>
kafka <span class="token punctuation">{</span>
bootstrap_servers <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;192.168.0.112:9092,192.168.0.113:9092,192.168.0.115:9092&quot;</span>
topic_id <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;system-messages&quot;</span>    <span class="token comment">#这个将作为主题的名称，将会自动创建</span>
compression_type <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;snappy&quot;</span>    <span class="token comment">#压缩类型</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>配置检测
<span class="token comment"># /usr/local/logstash/bin/logstash -f /usr/local/logstash/etc/logstash3.conf  --configtest --verbose</span>
<span class="token comment">#输出提示：</span>
Configuration OK

<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>启动Logstash
<span class="token comment"># /usr/local/logstash/bin/logstash -f /usr/local/logstash/etc/logstash3.conf </span>

<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>验证数据是否写入到kafka，检查是否生成一个system-messages的主题
<span class="token comment">#  /usr/local/kafka/bin/kafka-topics.sh --list --zookeeper 172.16.100.26:2181</span>
<span class="token comment">#输出信息</span>
summer
system - messages    <span class="token comment">#可以看到这个主题已经生成了</span>

<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>查看system-messages主题的详情
<span class="token comment"># /usr/local/kafka/bin/kafka-topics.sh --describe --zookeeper 172.16.100.26:2181 --topic system-message</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出信息：</p><figure><img src="`+o+`" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure><p>可以看出，这个主题生成了16个分区，每个分区都有对应自己的Leader</p><p>扩展提示： 我想要有10个分区，3个副本如何办？还是跟我们上面一样命令行来创建主题就行， 当然对于logstash输出的我们也可以提前先定义主题，然后启动logstash 直接往定义好的主题写数据就行啦，命令如下：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># /usr/local/kafka/bin/kafka-topics.sh --create --zookeeper 192.168.2.22:2181 --replication-factor 3 --partitions 10 --topic TOPIC_NAME</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Kafka集群部署logstash：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token number">1</span>、kafka <span class="token number">1</span><span class="token operator">&amp;</span><span class="token number">2</span><span class="token operator">&amp;</span><span class="token number">3</span>安装logstash:
<span class="token comment"># wget https://download.elastic.co/logstash/logstash/logstash-2.0.0.tar.gz</span>
<span class="token comment"># tar -xf logstash-2.0.0.tar.gz -C /usr/local</span>
<span class="token comment"># cd /usr/local/</span>
<span class="token comment"># ln -sv logstash-2.0.0 logstash</span>
<span class="token comment"># mkdir /usr/local/logstash/{logs,etc}</span>

<span class="token number">2</span>、三台kafak编写logstash配置文件
<span class="token comment"># vim /usr/local/logstash/etc/logstash.conf</span>
<span class="token comment">#2181后面不能有空格</span>
<span class="token comment">#decorate_events =&gt; true：此属性会将当前topic、offset、group、partition等信息也带到message中  </span>
input <span class="token punctuation">{</span>
kafka <span class="token punctuation">{</span>
zk_connect <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;172.16.100.26:2181,172.16.100.27:2181,172.16.100.32:2181&quot;</span>    <span class="token comment">#消费者们</span>
topic_id <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;system-message&quot;</span>
codec <span class="token operator">=</span><span class="token operator">&gt;</span> plain
reset_beginning <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token boolean">false</span>
consumer_threads <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">5</span>
decorate_events <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
output <span class="token punctuation">{</span>
elasticsearch <span class="token punctuation">{</span>
hosts <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&quot;172.16.100.21:9200&quot;</span>,<span class="token string">&quot;172.16.100.24:9200&quot;</span><span class="token punctuation">]</span>
index <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;test-system-messages-%{+YYYY-MM}&quot;</span>  <span class="token comment">#区分之前实验，新名字“test-system-messages-%{+YYYY-MM}”</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token number">3</span>、webserver1上写入测试内容
<span class="token comment"># echo &quot;00000&quot;&gt;/var/log/messages</span>
<span class="token comment"># echo &quot;我将通过kafka集群达到es集群1234&quot;  &gt;&gt; /var/log/messages</span>
<span class="token comment"># /usr/local/logstash/bin/logstash -f /usr/local/logstash/etc/logstash3.conf  </span>
	
<span class="token number">4</span>、三台kafka启动logstash（注意顺序<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span><span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token number">3</span>）
<span class="token comment"># /usr/local/logstash/bin/logstash -f /usr/local/logstash/etc/logstash.conf </span>
<span class="token comment"># /usr/local/logstash/bin/logstash -f /usr/local/logstash/etc/logstash.conf </span>
<span class="token comment"># /usr/local/logstash/bin/logstash -f /usr/local/logstash/etc/logstash.conf </span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看es管理界面：</p><figure><img src="`+c+'" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure><p>总结</p><figure><img src="'+p+`" alt="last-not-least" tabindex="0" loading="lazy"><figcaption>last-not-least</figcaption></figure><h4 id="_4、扩展-nginx负载均衡kibana的请求" tabindex="-1"><a class="header-anchor" href="#_4、扩展-nginx负载均衡kibana的请求"><span>4、扩展（Nginx负载均衡Kibana的请求）</span></a></h4><p>（1）、在nginx-proxy上面yum安装nginx</p><div class="language-absh line-numbers-mode" data-ext="absh" data-title="absh"><pre class="language-absh"><code># yum install -y nignx

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）、编写配置问佳佳es.conf</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># vim /etc/nginx/conf.d/es.conf</span>
upstream es <span class="token punctuation">{</span>
server <span class="token number">172.16</span>.100.21:5601 <span class="token assign-left variable">max_fails</span><span class="token operator">=</span><span class="token number">3</span> <span class="token assign-left variable">fail_timeout</span><span class="token operator">=</span>30s<span class="token punctuation">;</span>
server <span class="token number">172.16</span>.100.24:5601 <span class="token assign-left variable">max_fails</span><span class="token operator">=</span><span class="token number">3</span> <span class="token assign-left variable">fail_timeout</span><span class="token operator">=</span>30s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    server_name  localhost<span class="token punctuation">;</span>
 
    location / <span class="token punctuation">{</span>
        proxy_pass http://es/<span class="token punctuation">;</span>
        index index.html index.htm<span class="token punctuation">;</span>
        <span class="token comment">#auth</span>
        auth_basic <span class="token string">&quot;ELK Private&quot;</span><span class="token punctuation">;</span>
        auth_basic_user_file /etc/nginx/.htpasswd<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> 
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）、创建认证</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token number">3</span>.创建认证
<span class="token comment"># htpasswd -cm /etc/nginx/.htpasswd elk</span>
New password:
Re-type new password:
Adding password <span class="token keyword">for</span> user elk-user
<span class="token comment"># /etc/init.d/nginx restart</span>
Stopping nginx:                                            <span class="token punctuation">[</span>  OK  <span class="token punctuation">]</span>
Starting nginx:                                            <span class="token punctuation">[</span>  OK  <span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（4）、访问</p><p>1、解耦</p><p>允许你独立的扩展或修改两边的处理过程，只要确保它们遵守同样的接口约束</p><p>2、冗余</p><p>消息队列把数据进行持久化直到它们已经被完全处理，通过这一方式规避了数据丢失风险。许多消息队列所采用的&quot;插入-获取-删除&quot;范式中，在把一个消息从队列中删除之前，需要你的处理系统明确的指出该消息已经被处理完毕，从而确保你的数据被安全的保存直到你使用完毕。</p><p>3、扩展性</p><p>因为消息队列解耦了你的处理过程，所以增大消息入队和处理的频率是很容易的，只要另外增加处理过程即可。</p><p>4、灵活性 &amp; 峰值处理能力</p><p>在访问量剧增的情况下，应用仍然需要继续发挥作用，但是这样的突发流量并不常见。 如果为以能处理这类峰值访问为标准来投入资源随时待命无疑是巨大的浪费。使用消息队列能够使关键组件顶住突发的访问压力，而不会因为突发的超负荷的请求而完全崩溃。</p><p>5、可恢复性</p><p>系统的一部分组件失效时，不会影响到整个系统。 消息队列降低了进程间的耦合度，所以即使一个处理消息的进程挂掉，加入队列中的消息仍然可以在系统恢复后被处理。</p><p>6、顺序保证</p><p>在大多使用场景下，数据处理的顺序都很重要。</p><p>大部分消息队列本来就是排序的，并且能保证数据会按照特定的顺序来处理。（Kafka 保证一个 Partition 内的消息的有序性） 7、缓冲</p><p>有助于控制和优化数据流经过系统的速度，解决生产消息和消费消息的处理速度不一致的情况。</p><p>8、异步通信</p><p>很多时候，用户不想也不需要立即处理消息。 消息队列提供了异步处理机制，允许用户把一个消息放入队列，但并不立即处理它。想向队列中放入多少消息就放多少，然后在需要的时候再去处理它们。</p><p>Redis与Kafka</p><p>我们都知道Redis是以key的hash方式来分散对列存储数据的，且Redis作为集群使用时，对应的应用对应一个Redis，在某种程度上会造成数据的倾斜性，从而导致数据的丢失。</p><p>而从之前我们部署Kafka集群来看，kafka的一个topic（主题），可以有多个partition（副本），而且是均匀的分布在Kafka集群上，这就不会出现redis那样的数据倾斜性。Kafka同时也具备Redis的冗余机制，像Redis集群如果有一台机器宕掉是很有可能造成数据丢失，而Kafka因为是均匀的分布在集群主机上，即使宕掉一台机器，是不会影响使用。同时Kafka作为一个订阅消息系统，还具备每秒百万级别的高吞吐量，持久性的、分布式的特点等。</p><figure><img src="`+r+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>',109),m=[u];function v(k,b){return a(),e("div",null,m)}const f=n(d,[["render",v],["__file","ELK和kafka构建高并发分布式日志收集系统.html.vue"]]),x=JSON.parse('{"path":"/note-book/Kafka/ELK%E5%92%8Ckafka%E6%9E%84%E5%BB%BA%E9%AB%98%E5%B9%B6%E5%8F%91%E5%88%86%E5%B8%83%E5%BC%8F%E6%97%A5%E5%BF%97%E6%94%B6%E9%9B%86%E7%B3%BB%E7%BB%9F.html","title":"ELK和kafka构建高并发分布式日志收集系统","lang":"zh-CN","frontmatter":{"description":"ELK和kafka构建高并发分布式日志收集系统 ELK+Kafka集群 前言 前言 业务层可以直接写入到kafka队列中，不用担心elasticsearch的写入效率问题。 图示 在这里插入图片描述在这里插入图片描述 Kafka Apache kafka是消息中间件的一种，是一种分布式的，基于发布/订阅的消息系统。能实现一个为处理实时数据提供一个统一、...","head":[["meta",{"property":"og:url","content":"https://paper-dragon.github.io/note-book/Kafka/ELK%E5%92%8Ckafka%E6%9E%84%E5%BB%BA%E9%AB%98%E5%B9%B6%E5%8F%91%E5%88%86%E5%B8%83%E5%BC%8F%E6%97%A5%E5%BF%97%E6%94%B6%E9%9B%86%E7%B3%BB%E7%BB%9F.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"ELK和kafka构建高并发分布式日志收集系统"}],["meta",{"property":"og:description","content":"ELK和kafka构建高并发分布式日志收集系统 ELK+Kafka集群 前言 前言 业务层可以直接写入到kafka队列中，不用担心elasticsearch的写入效率问题。 图示 在这里插入图片描述在这里插入图片描述 Kafka Apache kafka是消息中间件的一种，是一种分布式的，基于发布/订阅的消息系统。能实现一个为处理实时数据提供一个统一、..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T08:29:56.000Z"}],["meta",{"property":"article:author","content":"PaperDragon"}],["meta",{"property":"article:modified_time","content":"2024-03-25T08:29:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ELK和kafka构建高并发分布式日志收集系统\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-25T08:29:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[{"level":3,"title":"前言","slug":"前言-1","link":"#前言-1","children":[]}]},{"level":2,"title":"术语","slug":"术语","link":"#术语","children":[]},{"level":2,"title":"实战","slug":"实战","link":"#实战","children":[{"level":3,"title":"拓扑","slug":"拓扑","link":"#拓扑","children":[]},{"level":3,"title":"说明","slug":"说明","link":"#说明","children":[]},{"level":3,"title":"角色","slug":"角色","link":"#角色","children":[]},{"level":3,"title":"软件说明","slug":"软件说明","link":"#软件说明","children":[]},{"level":3,"title":"步骤","slug":"步骤","link":"#步骤","children":[]},{"level":3,"title":"演示","slug":"演示","link":"#演示","children":[]}]}],"git":{"createdTime":1691939318000,"updatedTime":1711355396000,"contributors":[{"name":"PaperDragon-SH","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":15.45,"words":4636},"filePathRelative":"note-book/Kafka/ELK和kafka构建高并发分布式日志收集系统.md","localizedDate":"2023年8月13日","excerpt":"\\n<h1>ELK+Kafka集群</h1>\\n<h2>前言</h2>\\n<h3>前言</h3>\\n<p>业务层可以直接写入到kafka队列中，不用担心elasticsearch的写入效率问题。\\n图示</p>\\n<figure><figcaption>在这里插入图片描述</figcaption></figure>\\n<h1>Kafka</h1>\\n<p>Apache kafka是消息中间件的一种，是一种分布式的，基于发布/订阅的消息系统。能实现一个为处理实时数据提供一个统一、高吞吐、低延迟的平台，且拥有分布式的，可划分的，冗余备份的持久性的日志服务等特点。</p>\\n<h2>术语</h2>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>1、kafka是一个消息队列服务器。kafka服务称为broker（中间人）, 消息发送者称为producer（生产者）, 消息接收者称为consumer（消费者）;通常我们部署多个broker以提供高可用性的消息服务集群.典型的是3个broker;消息以topic的形式发送到broker,消费者订阅topic,实现按需取用的消费模式;创建topic需要指定replication-factor(复制数目, 通常=broker数目);每个topic可能有多个分区(partition), 每个分区的消息内容不会重复\\n\\n2、kafka-broker-中间人\\n\\n3、webserver/logstash-producer[prəˈdu:sə®]-消息生产者/消息发送者\\nProducer：\\nkafka集群中的任何一个broker都可以向producer提供metadata信息,这些metadata中包含\\"集群中存活的servers列表\\"/“partitions leader列表\\"等信息；\\n当producer获取到metadata信息之后, producer将会和Topic下所有partition leader保持socket连接；\\n消息由producer直接通过socket发送到broker，中间不会经过任何\\"路由层”，事实上，消息被路由到哪个partition上由producer客户端决定；比如可以采用\\"random\\"“key-hash”\\"轮询\\"等,如果一个topic中有多个partitions,那么在producer端实现\\"消息均衡分发\\"是必要的。\\n在producer端的配置文件中,开发者可以指定partition路由的方式。\\nProducer消息发送的应答机制设置发送数据是否需要服务端的反馈,有三个值0,1,-1\\n0:producer不会等待broker发送ack\\n1:当leader接收到消息之后发送ack\\n-1:当所有的follower都同步消息成功后发送ack\\n\\n4、elasticsearch-consumer-消费者\\n\\n5、logs-topic-话题\\n\\n6、replication-facter-复制数目-中间人存储消息的副本数=broker数目\\n\\n7、一个topic有多个分区partition\\npartition：\\n（1）、Partition：为了实现扩展性，一个非常大的topic可以分布到多个broker（即服务器）上，一个topic可以分为多个partition，每个partition是一个有序的队列。partition中的每条消息都会被分配一个有序的id（offset）。kafka只保证按一个partition中的顺序将消息发给consumer，不保证一个topic的整体（多个partition间）的顺序。\\n（2）、在kafka中,一个partition中的消息只会被group中的一个consumer消费(同一时刻)；一个Topic中的每个partions，只会被一个consumer消费，不过一个consumer可以同时消费多个partitions中的消息。\\n</code></pre></div>","autoDesc":true}');export{f as comp,x as data};
