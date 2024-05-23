import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as a,d as o}from"./app-cYiN3ON2.js";const r={},t=o(`<h1 id="跨宿主机通信overlay和macvlay" tabindex="-1"><a class="header-anchor" href="#跨宿主机通信overlay和macvlay"><span>跨宿主机通信overlay和macvlay</span></a></h1><h1 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h1><blockquote><p>本讲是从Docker系列讲解课程，单独抽离出来的一个小节，带你一起 深入了解在编排工具出现前，跨宿主机通信的两大得力干将overlay、macvlay，这也会后期学好K8s做好基本功铺垫，打下一个坚实的基础。</p></blockquote><h1 id="一、overlay" tabindex="-1"><a class="header-anchor" href="#一、overlay"><span>一、overlay</span></a></h1><blockquote><p>Overlay网络模式相比于桥接模式的特别之处在于，它可以自定多个--subnet子网网段，只有同一网络/段中的容器才可以相互交换信息（相互通信）。</p><p>需要注意的是如果设置了多个--subnet，也需要同步设定对应个数的--gateway网关，需要确保各子网网段不重叠。</p><p>如何查看容器的子网网段，docker insect contain_name即可，当然在docker run 容器时，也可以通过--subnet 指定子网网段 。</p><p>示例（了解范畴）：</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>

    <span class="token function">docker</span> network create <span class="token parameter variable">-d</span> overlay<span class="token punctuation">\\</span>
    <span class="token parameter variable">--subnet</span> <span class="token number">192.168</span>.0.0./16<span class="token punctuation">\\</span>
    <span class="token parameter variable">--subnet</span> <span class="token number">192.170</span>.0.0./16<span class="token punctuation">\\</span>
     
    <span class="token parameter variable">--gateway</span> <span class="token operator">=</span> <span class="token number">192.168</span>.0.100<span class="token punctuation">\\</span>
    <span class="token parameter variable">--gateway</span> <span class="token operator">=</span> <span class="token number">192.170</span>.0.100<span class="token punctuation">\\</span>
     
    --ip-range<span class="token operator">=</span><span class="token number">192.168</span>.1.0/24<span class="token punctuation">\\</span>
     
    --aux-address<span class="token operator">=</span><span class="token string">&quot;my-router=192.168.1.5&quot;</span> --aux-adress<span class="token operator">=</span><span class="token string">&quot;my-switch=192.168.1.16&quot;</span> <span class="token punctuation">\\</span>
    --aux-address<span class="token operator">=</span><span class="token string">&quot;my-router=192.170.1.5&quot;</span> --aux-adress<span class="token operator">=</span><span class="token string">&quot;my-switch=192.170.1.16&quot;</span> <span class="token punctuation">\\</span>
    myoverlaynet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="预告" tabindex="-1"><a class="header-anchor" href="#预告"><span>预告</span></a></h2><pre><code>通过对本知识点的学习，你将掌握，通过docker create 自定义网络-d自定义网络指定为overlay 网络模式，从而实现跨宿主机通信，同时可以了解一下consul镜像的使用。
</code></pre><p>注： Consul是一个分布式、高可用性和多数据中心感知工具，用于服务发现、配置和编排。Consul 支持大规模快速部署、配置和维护面向服务的架构。欲了解更多信息，请参阅 Consul架构指南。</p><h2 id="_1-docker-pull-拉取consul镜像-并运行容器" tabindex="-1"><a class="header-anchor" href="#_1-docker-pull-拉取consul镜像-并运行容器"><span>1.docker pull 拉取consul镜像，并运行容器</span></a></h2><pre><code>docker pull consul  #拉取镜像
docker images
docker run -d -p 8500:8500 --name consul consul:latest  #启动sonsul容器
netstat -nalpt  #查看端口占用情况
</code></pre><h2 id="_2-修改主-从节点的daemon-json-并重启docker和consul服务" tabindex="-1"><a class="header-anchor" href="#_2-修改主-从节点的daemon-json-并重启docker和consul服务"><span>2.修改主/从节点的daemon.json，并重启docker和consul服务</span></a></h2><h3 id="_1-修改主节点centos7-9" tabindex="-1"><a class="header-anchor" href="#_1-修改主节点centos7-9"><span>1）修改主节点CentOS7.9</span></a></h3><p>vim /etc/docker/daemon.json</p><p>注：在修改之前，你本地的这个文件可能只有一行，大概应该是仅配了（阿里）镜像加速。可参考如下配置，前两行可以不配置，使用默认的就可以。最后三行是要配的。</p><pre><code>{
&quot;graph&quot;:&quot;/var/lib/docker&quot;,
&quot;storage-driver&quot;:&quot;overlay&quot;,
&quot;registry-mirrors&quot;: [&quot;https://2jdmaxpc.mirror.aliyuncs.com&quot;],
&quot;cluster-store&quot;:&quot;consul://192.168.31.100:8500&quot;,
&quot;cluster-advertise&quot;:&quot;192.168.31.100:2375&quot;,
&quot;live-restore&quot;:true
}
</code></pre><p>注意：修改的时候，注意引号要是英文的，除最后一行外，前面的每行尾部都有一个英文逗号（否则docker服务将无法正常启动！！）。</p><p>首行的graph是配置docker数据（镜像、容器等）默认存储位置，可以据需修改，默认位置就是/var/lib/docker，（有人习惯修改为/data/docker）。 第二行的storage-driver，是驱动模式指定为overlay。 第三行是配置的阿里云镜像仓库地址 第四行cluster-store，是配置sonsul集群的访问地址 第五行cluster-advertise，是广播通信地址和端口。</p><pre><code>&quot;live-restore&quot;:true 和  –restart=always用法和意义各不相同。

配置前者的意义在于即使docker的daemon守护进程关闭，其里面的容器依然保持运行，后者是指容器在docker run 启动时，佩带了该参数，则在出现故障（内存泄露等）时，自动重启容器。

systemctl daemon-reload  #使daemon.json重新生效
systemctl restart docker #重启docker
docker ps -a   #可以看到consul的状态是Exited
docker start consul  #再次手动启动consul容器
</code></pre><p><a href="http://192.168.31.100:8500" target="_blank" rel="noopener noreferrer">http://192.168.31.100:8500</a> 访问consul（这个IP地址是在上面的/etc/docker/daemon.json中配置的）</p><h3 id="_2-修改从节点centos8-4" tabindex="-1"><a class="header-anchor" href="#_2-修改从节点centos8-4"><span>2）修改从节点CentOS8.4</span></a></h3><p>vim /etc/docker/daemon.json</p><p>有了上面配置的基础，从节点配置简单一点，其他配使用默认就可以。仅配置下面的三行。需要注意的是集群广播监听的地址cluster-advertise，要配置为从节点自己的IP。</p><pre><code>&quot;cluster-store&quot;:&quot;consul://192.168.31.100:8500&quot;,
&quot;cluster-advertise&quot;:&quot;192.168.31.130:2375&quot;,
&quot;live-restore&quot;:true
</code></pre><p>切记：除最后一行外，每行配置末尾都有英文逗号！！！cluster-store是集群中主节点访问地址；cluster-advertise是当前节点的IP和广播端口，别误写成主节点的IP了，否则docker无法重启 ,错误如下: &quot;systemctl status network.service&quot; and &quot;journalctl -xe&quot; for details。</p><pre><code>systemctl daemon-reload  #使daemon.json重新生效
systemctl restart docker #重启docker
</code></pre><h2 id="_3-在主节点创建overlay网络后-分别在主、从节点查看" tabindex="-1"><a class="header-anchor" href="#_3-在主节点创建overlay网络后-分别在主、从节点查看"><span>3.在主节点创建overlay网络后，分别在主、从节点查看</span></a></h2><p>1）创建前自定义网络前，分别查看主从节点的已有网络（便于对比效果）</p><p>docker network ls #分别在主从节点执行该查代码</p><p>2）在master主节点CentOS7.9上创建自定义网络mynet</p><pre><code>#在主节点创建自定义网络：分别指定网络模式、子网网段、网关、网卡最大传输单元 ，更详细参数见：docker network create --help 
docker network create --driver overlay --ingress --subnet=172.31.0.0/16 --gateway=172.31.0.2  --opt com.docker.network.driver.mtu=1200  mynet 
#docker network ls
</code></pre><p>注： com.docker.network.driver.mtu 等价于--mtu，用来设置容器网卡最大传输单元</p><p>可以看到自定义网络mynet创建成功，创建时指定网络模式为overlay</p><p>提示：如果创建时错误提示Error response from daemon: error getting pools config from store: could not get pools config from store，docker start consul 重新启动容器服务即可。 3）切回从节点CentOS8.4，查看在CentOS7.9主节点创建的网络</p><p>发现，从节点CentOS8.4上，可以看到主节点创建的mynet自定义网络，而本身并没有创建这个网络，原理就是通过/etc/docker/daemon.json中的配置集群信息的集群地址cluster-store和广播cluster-advertise来实现主从共享网络的。</p><h2 id="_4-在主节点使用自定义的overlay网络模式启动nginx-并查看其i" tabindex="-1"><a class="header-anchor" href="#_4-在主节点使用自定义的overlay网络模式启动nginx-并查看其i"><span>4.在主节点使用自定义的overlay网络模式启动nginx，并查看其I</span></a></h2><pre><code>docker images 
docker run -d --network mynet --name nginx nginx:alpine   #主节点使用自定义网络启动
docker inspect nginx #查看网络详细信息
</code></pre><p>主节点nginx的虚拟IP地址：172.31.0.1</p><h2 id="_5-在从节点上使用自定义的overlay网络模式开启tomcat-尝试和nginx互通" tabindex="-1"><a class="header-anchor" href="#_5-在从节点上使用自定义的overlay网络模式开启tomcat-尝试和nginx互通"><span>5.在从节点上使用自定义的overlay网络模式开启tomcat，尝试和nginx互通</span></a></h2><pre><code>docker images
docker ps -a
docker run -d --name tomcat --network mynet -p 8080:8080 tomcat:alpine #和主节点指定同一个网络
ping -w 3 172.31.0.1  #尝试在从节点上去ping主节点的nginx的虚拟ip
</code></pre><p>发现，通过该方式（在/etc/docker/daemon.json中配置）是可以实现跨宿主机通信的。</p><p>注：该方式，在容器内部不能使用容器别名相互识别，也就是说A容器内部，不识别B容器的别名，尽管他们都共同链接一个网络mynet，但是仅能够通过各自的虚拟IP互通。如要实现容器内部互认别名，点进入点击进入。</p><h2 id="_6-在从节点上不使用自定义的overlay网络模式开启tomcat-尝试和nginx互通" tabindex="-1"><a class="header-anchor" href="#_6-在从节点上不使用自定义的overlay网络模式开启tomcat-尝试和nginx互通"><span>6.在从节点上不使用自定义的overlay网络模式开启tomcat，尝试和nginx互通</span></a></h2><pre><code>exit
docker rm -f tomcat
docker run -it --name tomcat  -p 8080:8080 tomcat:alpine  /bin/bash
ping -w 3 172.31.0.1
</code></pre><p>发现从节点，在启动tomcat时不指定network为(主节点)自定义的mynet网络，也是可以ping通nginx的虚拟IP，从而实现跨宿主机通信。</p><h2 id="_7-扩展" tabindex="-1"><a class="header-anchor" href="#_7-扩展"><span>7.扩展</span></a></h2><pre><code>上例配置的是overlay，实验结果表明，只要在daemon.json中配置了集群的主节点和广播节点，无论子节点容器启动时，是否用--network ，从节点都可以正常访问访问主节点，从而实现了跨宿主机通信。

但是，在跟随老师的课程学习中，老师的主节点、从节点的daemon.json中配置的网络模式是overlay2（见下图），老师的实验结果和我的实验结果是有出入的，也就是，当从节点的容器启动时不用--network mynet来指定和主节点同一个网络，那么在从节点中就无法实现跨宿主机通信（不能在从节点ping通主节点）。

奇葩的是，按老师的配置overlay2,经过反复实验，关键的几个步骤入下：

1.docker rm -f $(docker ps -qa)   #在主从节点都执行，清空容器

2.vim /etc/docker/daemon.json  #把里面的overlay修改为overlay

3.docker network rm mynet 

4.systemctl daemon-reload 

5.systemctl restart docker 

...其他步骤和上面都一致，重新创建mynet报错时，docker ps -a 看一下consul启动没，没有启动的话，启动一下。

最终无法得到老师的答案，无论配置overlay2还是overlay，都可以实现跨宿主机通信，而不是老师的，只要从节点不用--network指定和主节点同一个网络，就不能实现跨宿主机通信。

如果你的时间和精力允许，并且对这个点比较好奇，自己可以尝试一下，看一下我们实验结果是否一致。
</code></pre><p>注：在反复实验过程中，偶尔有一次，不带--network，在从节点的容器内部不能ping通主节点nginx的虚拟ip，奇怪的是，反复，多次实验，这个仅有1次的ping不通，竟然还原不了，每次又都能ping通了。 8.小结</p><pre><code>overlay网络模式，核心三步：

1.修改主、从节点的daemon.json，使主从节点通过ip 集群信息关联；

2.在master节点创建自定义网络mynet并指定网络模式为overlay;

3.让主、从节点的容器启动时，都指定该自定义网络mynet。

好处：在主节点创建overlay网络，从节点自动可以通过daemon.json获取主节点创建的自定义网络。

最终，只要在daemon.json中配置好了集群信息，主节点的容器启动时，指定自定义网络mynet(创建时用-d指定为overlay或者overlay2)主从节点就可以愉快的实现跨宿主机通信。
</code></pre><h1 id="二、macvlan" tabindex="-1"><a class="header-anchor" href="#二、macvlan"><span>二、macvlan</span></a></h1><ul><li>Macvlan的4种模式 <ul><li><p>Bridge</p></li><li><p>Private</p></li><li><p>VEPA</p></li><li><p>Passthrough</p><p>该模式现在用的比较少，作为了解内容可以拓展一下知识面。v</p><p>它本身不创建网络，使用的是物理机的网卡，它会导致物理机物理网卡失效，借此会创建虚拟网卡，给虚拟网卡分配网络资源，IP等。</p><p>macvlan这种技术能将一块物理网卡虚拟成多块虚拟网卡 ，相当于物理网卡施展了多重影分身之术 ，由一个变多个。</p><p>弊端：可能会耗尽物理IP地址，网段内接入的物理机越多，广播的效率/性能就会下降。</p><p>该模式，对linux系统的内核版本是有要求的，支持的版本有 v3.9-3.19 和 4.0+，比较稳定的版本推荐 4.0+。它一般是以内核模块的形式存在，我们可以通过以下方法判断当前系统是否支持：</p><pre><code>modprobe macvlan  #如果没有返回任何信息，代表支持
lsmod | grep macvlan  #如果返回如下信息，代表支持
macvlan                19239  0 
</code></pre></li></ul></li></ul><h2 id="_1-据需清理掉上面的实验数据-并还原daemon-json实验前的默认配置" tabindex="-1"><a class="header-anchor" href="#_1-据需清理掉上面的实验数据-并还原daemon-json实验前的默认配置"><span>1.据需清理掉上面的实验数据，并还原daemon.json实验前的默认配置</span></a></h2><pre><code>#如果是实验数据，可以清除，清除前请确保你明白下面命令的含义，否则不要这么清除
docker rm -f $(docker ps -qa)  #清除所有的容器
docker rmi $(docker images -qa) #清除掉所有镜像
docker network rm mynet  #在主节点清除掉自定义的网络
systemctl daemon-reload  #重启配置
systemctl restart docker  #重启docker服务

提示，我的本地daemon.json里，只有一行，是配置阿里云加速镜像时创建的。 

    sudo mkdir -p /etc/docker
    sudo tee /etc/docker/daemon.json .......
</code></pre><h2 id="_2-分别在主从节点上-开启网卡混合模式-开启前先ip-a查看网卡信息" tabindex="-1"><a class="header-anchor" href="#_2-分别在主从节点上-开启网卡混合模式-开启前先ip-a查看网卡信息"><span>2.分别在主从节点上，开启网卡混合模式，开启前先ip a查看网卡信息</span></a></h2><pre><code>ip a
ip link set ens33 promisc on  #特别注意，你的物理虚拟网卡名称可能是eth0（可以在network-script里修改）
ip a
</code></pre><p>开启混合模式前，先查看一下网卡信息</p><p>分别给主从节点，开启混合网卡模式</p><h2 id="_3-分别在主从节点上-通过docker-create-d-创建macvlan网络" tabindex="-1"><a class="header-anchor" href="#_3-分别在主从节点上-通过docker-create-d-创建macvlan网络"><span>3.分别在主从节点上，通过docker create -d 创建macvlan网络</span></a></h2><pre><code>分别在主、从节点上创建macvlan，并通过 parent指定其真身爸爸是物理网卡ens33。

#部分主机的虚拟物理网卡不是ens33,部分名称是eth0 ,(我自定义名称是myMaclan，不是myMacvlan，叫什么随意)
docker network create -d macvlan --subnet 172.30.0.0/16 --gateway 172.30.0.2 -o parent=ens33 myMaclan  
docker network create -d macvlan --subnet=ip段（10.10.10.0/24） --gateway=网关 -o parent=网卡名称 -o macvlan_mode=bridge bridgemacvlan（网络名称）


docker network ls
</code></pre><p>注：对该命令的参数不了解的小伙伴，可以通过docker network create --help来获悉更多的参数。细心的小伙伴发现，第一个案例该命令创建overlay网络时，使用的是--opt，此处使用的是-o，它们两个是一个命令，-o等价于--opt，使用场景主要是用于多个参数时，放到对应参数前面。它是一个map[]集合，也就是说，每个参数的前面都添加-o，则这些参数同属于一个-o的集合。</p><h2 id="_4-在主节点centos7-9上使用macvlan网络模式-启动nginx并指定ip" tabindex="-1"><a class="header-anchor" href="#_4-在主节点centos7-9上使用macvlan网络模式-启动nginx并指定ip"><span>4.在主节点CentOS7.9上使用macvlan网络模式，启动nginx并指定IP</span></a></h2><pre><code>docker run -d --name nginx --network myMacvlan --ip 172.30.0.3 nginx:alpine
--net=bridgemacvlan --ip=10.10.10.XXX
docker run -d --name XXX --net=bridgemacvlan --ip=容器ip XXX/XXX:latest
docker ps
</code></pre><p>注意：这里自定义nginx容器的ip是172.30.0.3，下个步骤在从节点tomcat容器内会用到。</p><h2 id="_5-在从节点centos8-4上-启动tomcat容器时-分别暂不-指定网络模式为macvlan-ping主节点的nginx" tabindex="-1"><a class="header-anchor" href="#_5-在从节点centos8-4上-启动tomcat容器时-分别暂不-指定网络模式为macvlan-ping主节点的nginx"><span>5.在从节点CentOS8.4上，启动tomcat容器时，分别暂不/指定网络模式为macvlan，ping主节点的nginx</span></a></h2><pre><code>docker images #查看镜像列表（什么镜像不重要，重要的是在容器内部，是可以实现跨宿主机通信）
docker run -it tomcat:alpine bash  #第一次进入从节点容器内部，不指定--network
ping -w 3 172.30.0.3   #尝试去ping主节点容器内的nginx的ip，发现不能ping通
exit
 
docker run -it --network myMaclan tomcat:alpine bash  #第二次进入从节点容器内部，指定--network
ping -w 3 172.30.0.3   #尝试去ping主节点容器内的nginx的ip，发现可以ping通
exit
</code></pre><p>注：如果你对尾部的bash感兴趣，点击进入（从文章尾部开始向上看）</p><h2 id="_6-收尾工作-关闭虚拟网卡混合模式-清除容器" tabindex="-1"><a class="header-anchor" href="#_6-收尾工作-关闭虚拟网卡混合模式-清除容器"><span>6.收尾工作，关闭虚拟网卡混合模式，清除容器</span></a></h2><pre><code>docker rm -f $(docker ps -qa)   #清除容器
docker network ls
docker network rm myMaclan      #清除自定义网卡
ip link set ens33 promisc off   #取消网卡的混合模式
ip a  #验证是否已取消
</code></pre><h2 id="_7-小节" tabindex="-1"><a class="header-anchor" href="#_7-小节"><span>7.小节</span></a></h2><pre><code> 该模式的小实验比较简单，3个核心步骤：

1、主、从节点分别创建macvlan网络

2、主节点启动容器(nginx)时，指定网络模式为自定义的网络

3、从节点启动容器(tomcat)时，分别先不指定/指定自定义网络后，进入(tomcat)容器，去尝试ping主节点容器(nginx)IP。

该方式，一样可以实现跨节点通信，但只是昙花一现，满足了特定时期需求。

弊端：主从节点上都需要创建macvlan的自定义网络，容器启动时也都需要指定网络模式为macvlan，不难但是比较low稍显繁琐。

macvlan的通信原理，主从节点都需要创建完全相同的自定义网络，都通过-d或者--driver指定为macvlan，同时指定--subnet子网网段和--gateway网关，当然如果创建自定义网络时你不指定，在docker run命令时，你依然可以指定。

但是，需要注意的是，主从节点各自定义的macvan的网关和子网网段要相同，从而造成两个不同的宿主机的自定义网卡都处于同一个网段，给人的错觉就是他们就是1个小的局域网，在主从节点中的容器在docker run时，都通过--network指定这个自定义的网络。

这样，就自然而然的实现了跨宿主机通信。
</code></pre><h1 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h1><pre><code>尽管overlay（overlay2）和macvlan都可以实现跨宿主机通信，但是相对的前者更为便捷一些，但是随着新容器编排技术的不断涌现，这些当时时髦的技术也终将被替代。就连docker官网自己推出的Docker-compose[官网]（它是一个单机多容器部署工具，不支持多机）编排工具，也正在被k8s（支持多容器、多机部署）替代，后续将陆续对这些编排工具做具体介绍。

不过这些不重要，长江后浪推前浪，k8s终究是配置太多，强大的同时也太繁琐，终将会被更强大的其他替代，万变不离其宗，了解了这些底层些的知识，再学习其他编排工具时，也更加是游刃有余。
</code></pre><h1 id="附注" tabindex="-1"><a class="header-anchor" href="#附注"><span>附注</span></a></h1><p>1、Docker容器 | Dockerfile优化</p><p>2、Docker容器的生命周期 | kill和stop | pause 和 unpause</p><p>3、 Docker容器五种(3+2)网络模式 | bridge模式 | host模式 | none模式 | container 模式 | 自定义网络模式详解</p><p>4、Docker外部浏览器访问容器 | 容器访问容器 | 访问容器的常用5种方式 | -p -P 详解</p><p>5、Docker容器之间单/双向通信 |--link /自定义网络实现互认容器别名</p><p>6、Docker容器间数据挂载与共享 | 远程共享&amp;挂载数据卷</p>`,79),s=[t];function c(l,p){return a(),n("div",null,s)}const m=e(r,[["render",c],["__file","跨宿主机通信overlay和macvlay.html.vue"]]),u=JSON.parse('{"path":"/note-book/Docker/%E8%B7%A8%E5%AE%BF%E4%B8%BB%E6%9C%BA%E9%80%9A%E4%BF%A1overlay%E5%92%8Cmacvlay.html","title":"跨宿主机通信overlay和macvlay","lang":"zh-CN","frontmatter":{"description":"跨宿主机通信overlay和macvlay 前言 本讲是从Docker系列讲解课程，单独抽离出来的一个小节，带你一起 深入了解在编排工具出现前，跨宿主机通信的两大得力干将overlay、macvlay，这也会后期学好K8s做好基本功铺垫，打下一个坚实的基础。 一、overlay Overlay网络模式相比于桥接模式的特别之处在于，它可以自定多个--su...","head":[["meta",{"property":"og:url","content":"https://paper-dragon.github.io/note-book/Docker/%E8%B7%A8%E5%AE%BF%E4%B8%BB%E6%9C%BA%E9%80%9A%E4%BF%A1overlay%E5%92%8Cmacvlay.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"跨宿主机通信overlay和macvlay"}],["meta",{"property":"og:description","content":"跨宿主机通信overlay和macvlay 前言 本讲是从Docker系列讲解课程，单独抽离出来的一个小节，带你一起 深入了解在编排工具出现前，跨宿主机通信的两大得力干将overlay、macvlay，这也会后期学好K8s做好基本功铺垫，打下一个坚实的基础。 一、overlay Overlay网络模式相比于桥接模式的特别之处在于，它可以自定多个--su..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-26T07:51:15.000Z"}],["meta",{"property":"article:author","content":"PaperDragon"}],["meta",{"property":"article:modified_time","content":"2023-08-26T07:51:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"跨宿主机通信overlay和macvlay\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-26T07:51:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"预告","slug":"预告","link":"#预告","children":[]},{"level":2,"title":"1.docker pull 拉取consul镜像，并运行容器","slug":"_1-docker-pull-拉取consul镜像-并运行容器","link":"#_1-docker-pull-拉取consul镜像-并运行容器","children":[]},{"level":2,"title":"2.修改主/从节点的daemon.json，并重启docker和consul服务","slug":"_2-修改主-从节点的daemon-json-并重启docker和consul服务","link":"#_2-修改主-从节点的daemon-json-并重启docker和consul服务","children":[{"level":3,"title":"1）修改主节点CentOS7.9","slug":"_1-修改主节点centos7-9","link":"#_1-修改主节点centos7-9","children":[]},{"level":3,"title":"2）修改从节点CentOS8.4","slug":"_2-修改从节点centos8-4","link":"#_2-修改从节点centos8-4","children":[]}]},{"level":2,"title":"3.在主节点创建overlay网络后，分别在主、从节点查看","slug":"_3-在主节点创建overlay网络后-分别在主、从节点查看","link":"#_3-在主节点创建overlay网络后-分别在主、从节点查看","children":[]},{"level":2,"title":"4.在主节点使用自定义的overlay网络模式启动nginx，并查看其I","slug":"_4-在主节点使用自定义的overlay网络模式启动nginx-并查看其i","link":"#_4-在主节点使用自定义的overlay网络模式启动nginx-并查看其i","children":[]},{"level":2,"title":"5.在从节点上使用自定义的overlay网络模式开启tomcat，尝试和nginx互通","slug":"_5-在从节点上使用自定义的overlay网络模式开启tomcat-尝试和nginx互通","link":"#_5-在从节点上使用自定义的overlay网络模式开启tomcat-尝试和nginx互通","children":[]},{"level":2,"title":"6.在从节点上不使用自定义的overlay网络模式开启tomcat，尝试和nginx互通","slug":"_6-在从节点上不使用自定义的overlay网络模式开启tomcat-尝试和nginx互通","link":"#_6-在从节点上不使用自定义的overlay网络模式开启tomcat-尝试和nginx互通","children":[]},{"level":2,"title":"7.扩展","slug":"_7-扩展","link":"#_7-扩展","children":[]},{"level":2,"title":"1.据需清理掉上面的实验数据，并还原daemon.json实验前的默认配置","slug":"_1-据需清理掉上面的实验数据-并还原daemon-json实验前的默认配置","link":"#_1-据需清理掉上面的实验数据-并还原daemon-json实验前的默认配置","children":[]},{"level":2,"title":"2.分别在主从节点上，开启网卡混合模式，开启前先ip a查看网卡信息","slug":"_2-分别在主从节点上-开启网卡混合模式-开启前先ip-a查看网卡信息","link":"#_2-分别在主从节点上-开启网卡混合模式-开启前先ip-a查看网卡信息","children":[]},{"level":2,"title":"3.分别在主从节点上，通过docker create -d 创建macvlan网络","slug":"_3-分别在主从节点上-通过docker-create-d-创建macvlan网络","link":"#_3-分别在主从节点上-通过docker-create-d-创建macvlan网络","children":[]},{"level":2,"title":"4.在主节点CentOS7.9上使用macvlan网络模式，启动nginx并指定IP","slug":"_4-在主节点centos7-9上使用macvlan网络模式-启动nginx并指定ip","link":"#_4-在主节点centos7-9上使用macvlan网络模式-启动nginx并指定ip","children":[]},{"level":2,"title":"5.在从节点CentOS8.4上，启动tomcat容器时，分别暂不/指定网络模式为macvlan，ping主节点的nginx","slug":"_5-在从节点centos8-4上-启动tomcat容器时-分别暂不-指定网络模式为macvlan-ping主节点的nginx","link":"#_5-在从节点centos8-4上-启动tomcat容器时-分别暂不-指定网络模式为macvlan-ping主节点的nginx","children":[]},{"level":2,"title":"6.收尾工作，关闭虚拟网卡混合模式，清除容器","slug":"_6-收尾工作-关闭虚拟网卡混合模式-清除容器","link":"#_6-收尾工作-关闭虚拟网卡混合模式-清除容器","children":[]},{"level":2,"title":"7.小节","slug":"_7-小节","link":"#_7-小节","children":[]}],"git":{"createdTime":1691939318000,"updatedTime":1693036275000,"contributors":[{"name":"PaperDragon","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":13.94,"words":4182},"filePathRelative":"note-book/Docker/跨宿主机通信overlay和macvlay.md","localizedDate":"2023年8月13日","excerpt":"\\n<h1>前言</h1>\\n<blockquote>\\n<p>本讲是从Docker系列讲解课程，单独抽离出来的一个小节，带你一起 深入了解在编排工具出现前，跨宿主机通信的两大得力干将overlay、macvlay，这也会后期学好K8s做好基本功铺垫，打下一个坚实的基础。</p>\\n</blockquote>\\n<h1>一、overlay</h1>\\n<blockquote>\\n<p>Overlay网络模式相比于桥接模式的特别之处在于，它可以自定多个--subnet子网网段，只有同一网络/段中的容器才可以相互交换信息（相互通信）。</p>\\n<p>需要注意的是如果设置了多个--subnet，也需要同步设定对应个数的--gateway网关，需要确保各子网网段不重叠。</p>\\n<p>如何查看容器的子网网段，docker insect contain_name即可，当然在docker run 容器时，也可以通过--subnet 指定子网网段 。</p>\\n<p>示例（了解范畴）：</p>\\n</blockquote>","autoDesc":true}');export{m as comp,u as data};
