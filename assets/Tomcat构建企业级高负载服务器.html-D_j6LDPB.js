import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as s,d as e}from"./app-plO9gvqx.js";const t="/assets/1-n95HUpAx.png",l="/assets/image-20211110215222063-Dti_Neoa.png",p="/assets/2-CLd_h0Cs.png",i="/assets/3-DRRQvpyx.png",o={},c=e(`<h1 id="tomcat构建企业级高负载服务器" tabindex="-1"><a class="header-anchor" href="#tomcat构建企业级高负载服务器"><span>Tomcat构建企业级高负载服务器</span></a></h1><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2><h3 id="什么是java虚拟机" tabindex="-1"><a class="header-anchor" href="#什么是java虚拟机"><span>什么是JAVA虚拟机</span></a></h3><pre><code>所谓虚拟机，就是一台虚拟的计算机。他是一款软件，用来执行一系列虚拟计算机指令。大体上，虚拟机可以分为系统虚拟机和程序虚拟机。大名鼎鼎的VisualBox、VMware就属于系统虚拟机。他们完全是对物理计算机的仿真。提供了一个可以运行完整操作系统的软件平台。
程序虚拟机的典型代表就是Java虚拟机，它专门为执行单个计算机程序而设计，在Java虚拟机中执行的指令我们称为Java字节码指令。无论是系统虚拟机还是程序虚拟机，在上面运行的软件都呗限制于虚拟机提供的资源中。
</code></pre><h3 id="java-如何做到跨平台" tabindex="-1"><a class="header-anchor" href="#java-如何做到跨平台"><span>JAVA 如何做到跨平台</span></a></h3><pre><code>同一个JAVA程序(JAVA字节码的集合)，通过JAVA虚拟机(JVM)运行于各大主流操作系统平台比如Windows、CentOS、Ubuntu等。程序以虚拟机为中介，来实现跨平台。
</code></pre><figure><img src="`+t+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="tomcat部署" tabindex="-1"><a class="header-anchor" href="#tomcat部署"><span>Tomcat部署</span></a></h2><p>官网地址</p><pre><code>tomcat下载地址
http://tomcat.apache.org/

JDK下载地址
http://www.oracle.com/technetwork/java/javase/downloads/index.html
</code></pre><h3 id="部署" tabindex="-1"><a class="header-anchor" href="#部署"><span>部署</span></a></h3><h4 id="一、tomcat-http-server" tabindex="-1"><a class="header-anchor" href="#一、tomcat-http-server"><span>一、Tomcat Http Server</span></a></h4><p>环境</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>5到8G内存
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>部署JAVA环境</li></ol><p>提示 建议卸载默认安装openjdk软件 ①解压安装包</p><p>tar xf jdk-8u151-linux-x64.tar.gz -C /usr/local ②多版本部署java</p><p>ln -s /usr/local/jdk1.8.0_151/ /usr/local/java</p><p>3配置环境变量</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/profile
		<span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/usr/local/java
		<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">$JAVA_HOME</span>/bin:<span class="token environment constant">$PATH</span>
		<span class="token builtin class-name">export</span> JAVA_HOME <span class="token environment constant">PATH</span>
<span class="token builtin class-name">source</span> /etc/profile
<span class="token function">env</span> <span class="token operator">|</span><span class="token function">grep</span> JAVA
		<span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/usr/local/java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这里插入图片描述 4测试java</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-version</span>

<span class="token function">java</span> version <span class="token string">&quot;1.8.0_151&quot;</span>Java<span class="token punctuation">(</span>TM<span class="token punctuation">)</span> SE Runtime Environment <span class="token punctuation">(</span>build <span class="token number">1.8</span>.0_151-b12<span class="token punctuation">)</span>Java HotSpot<span class="token punctuation">(</span>TM<span class="token punctuation">)</span> <span class="token number">64</span>-Bit Server VM <span class="token punctuation">(</span>build <span class="token number">25.151</span>-b12, mixed mode<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>安装Tomcat:</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">tar</span> xf apache-tomcat-7.0.42.tar.gz  <span class="token parameter variable">-C</span> /usr/local/
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/apache-tomcat-7.0.42/ /usr/local/tomcat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>定义Tomcat所需环境变量: vim /etc/profile</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token assign-left variable">CATALINA_HOME</span><span class="token operator">=</span>/usr/local/tomcat    //Tomcat安装目录
<span class="token builtin class-name">export</span> CATALINA_HOME

<span class="token builtin class-name">source</span> /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这里插入图片描述 3.启动Tomcat</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>启动tomcat
<span class="token comment">#bash /usr/local/tomcat/bin/startup.sh</span>

检查端口
<span class="token comment"># netstat -tnlp |grep java</span>
<span class="token punctuation">[</span>root@tomcat ~<span class="token punctuation">]</span><span class="token comment"># netstat -tlunp | grep java</span>
tcp6       <span class="token number">0</span>      <span class="token number">0</span> :::8080                 :::*                    LISTEN      <span class="token number">10180</span>/java          
tcp6       <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">127.0</span>.0.1:8005          :::*                    LISTEN      <span class="token number">10180</span>/java  


关于tomcat端口：
<span class="token number">8005</span>

是tomcat本身的端口
<span class="token number">8080</span>

tomcat负责建立HTTP连接。在通过浏览器访问Tomcat服务器的Web应用时，使用的就是这个连接器。　
<span class="token number">8009</span>

tomcat负责和其他的HTTP服务器建立连接。
如nginx和apache互通时使用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问 http://192.168.0.104:8080/ 注意服务器地址，注意端口 浏览器访问tomcat主页。注意关闭防火墙 关闭tomcat（切记，否则你会遇见500）</p><pre><code>#bash  /usr/local/tomcat/bin/shutdown.sh
</code></pre><p>在这里插入图片描述在这里插入图片描述 4.关于tomcat</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@web ~<span class="token punctuation">]</span><span class="token comment"># cd /usr/local/tomcat/</span>
<span class="token punctuation">[</span>root@web tomcat<span class="token punctuation">]</span><span class="token comment"># tree -L 1</span>
<span class="token builtin class-name">.</span>
├── bin              <span class="token comment">#存放tomcat管理脚本</span>
├── conf             <span class="token comment"># tomcat 配置文件存放目录</span>
├── lib              <span class="token comment"># web应用调用的jar包存放路径</span>
├── LICENSE
├── logs        <span class="token comment"># tomcat 日志存放目录，catalina.out 为主要输出日志</span>
├── NOTICE
├── RELEASE-NOTES
├── RUNNING.txt
├── temp             <span class="token comment"># 存放临时文件</span>
├── webapps         <span class="token comment"># web程序存放目录</span>
└── work             <span class="token comment"># 存放编译产生的.java 与 .class文件</span>


<span class="token punctuation">[</span>root@web03 tomcat<span class="token punctuation">]</span><span class="token comment"># cd webapps/</span>
<span class="token punctuation">[</span>root@web03 webapps<span class="token punctuation">]</span><span class="token comment"># tree -L 1</span>
<span class="token builtin class-name">.</span>
├── docs            <span class="token comment"># tomcat 帮助文档</span>
├── examples       <span class="token comment"># web应用示例</span>
├── host-manager  <span class="token comment"># 主机管理</span>
├── manager         <span class="token comment"># 管理</span>
└── ROOT             <span class="token comment"># 默认站点根目录</span>

默认网站的主目录（主页）
<span class="token function">ls</span> /usr/local/tomcat/webapps/ROOT

<span class="token punctuation">[</span>root@web03 conf<span class="token punctuation">]</span><span class="token comment"># tree -L 1</span>
<span class="token builtin class-name">.</span>
├── Catalina
├── catalina.policy
├── catalina.properties
├── context.xml
├── logging.properties
├── logs
├── server.xml           <span class="token comment"># tomcat 主配置文件</span>
├── server.xml.bak
├── server.xml.bak2
├── tomcat-users.xml    <span class="token comment"># tomcat 管理用户配置文件</span>
├── tomcat-users.xsd
└── web.xml

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="二、安装mysql" tabindex="-1"><a class="header-anchor" href="#二、安装mysql"><span>二、安装MySQL</span></a></h4><p>1.创建数据库：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>创建jspgou数据库，字符集为utf-8
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> mariadb-server mariadb
该步骤出错。请您检查YUM源配置

systemctl start mariadb
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mysqladmin -u root password 123</span>
	注意如果有密码
	mysqladmin <span class="token parameter variable">-u</span> root -p老密码 password 新密码
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mysql -u root -p123</span>
MariaDB <span class="token punctuation">[</span><span class="token punctuation">(</span>none<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> create database jspgou character <span class="token builtin class-name">set</span> <span class="token operator">=</span> utf8<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="三、部署jspgou-电子商城" tabindex="-1"><a class="header-anchor" href="#三、部署jspgou-电子商城"><span>三、部署jspgou（电子商城）</span></a></h4><p>1.解压源码包 unzip jspgouV6-ROOT.zip在这里插入图片描述 2.更改数据库链接：</p><p>提示：在解压缩后的文件中，修改连接数据库的信息</p><pre><code>[root@localhost ~]# vim ROOT/WEB-INF/config/jdbc.properties
jdbc.url=jdbc:mysql://127.0.0.1:3306/jspgou?characterEncoding=UTF-8
jdbc.username=root
jdbc.password=123
</code></pre><p>3.导入数据：</p><p>[root@localhost ~]# mysql -u root -p123 -D jspgou &lt; DB/jspgou.sql</p><pre><code>使用MYSQL数据库时，会发生的错误
使用mysql作为数据库时，如果导入数据失败
1.修改mysql配置文件
my.cnf中max_allowed_packet参数为64m，默认为1m
2.DB/jspgou.sql里面的默认值改一下
把所有datetime类型的字段默认值改成CURRENT_TIMESTAMP
将程序解压后的ROOT文件夹,拷贝到tomcat安装目录下的webapps文件夹下
[root@localhost ~]# \\cp -r ROOT /usr/local/tomcat/webapps/
不使用cp 的别名。 alias cp=‘cp -i’
</code></pre><p>4.部署网站：</p><pre><code>启动tomcat
#bash /usr/local/tomcat/bin/startup.sh
输入以下地址
http://192.168.75.226:8080/jeeadmin/jspgou/index.do
注意服务器地址
用户名：admin
密 码：123456
点击上图右上角浏览器图标访问网站首页
</code></pre><h2 id="tomcat多实例" tabindex="-1"><a class="header-anchor" href="#tomcat多实例"><span>Tomcat多实例</span></a></h2><p>关闭主站</p><pre><code>bash /usr/local/tomcat/bin/shutdown.sh
</code></pre><p>准备多实例主目录</p><pre><code>mkdir /usr/local/tomcat/instance{1…3} 
</code></pre><p>制作实例工作目录</p><pre><code>cp -r /usr/local/tomcat/{conf,logs,temp,work} /usr/local/tomcat/instance1/
# cp -r /usr/local/tomcat/{conf,logs,temp,work} /usr/local/tomcat/instance2/
# cp -r /usr/local/tomcat/{conf,logs,temp,work} /usr/local/tomcat/instance3/
查看目录结构
[root@www ~]# tree -d -L 2 /usr/local/tomcat/
[root@tomcat tomcat]#  tree -d -L 2 /usr/local/tomcat/
/usr/local/tomcat/
├── bin
├── conf
│   └── Catalina
├── instance1
│   ├── conf
│   ├── logs
│   ├── temp
│   └── work
├── instance2
│   ├── conf
│   ├── logs
│   ├── temp
│   └── work
├── instance3
│   ├── conf
│   ├── logs
│   ├── temp
│   └── work
├── lib
├── logs
├── temp
├── webapps
│   ├── docs
│   ├── examples
│   ├── host-manager
│   ├── manager
│   └── ROOT
└── work
    └── Catalina

29 directories
</code></pre><p>修改端口 将web配置文件拷贝三份。分别修改为不同端口</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">vim</span> /usr/local/tomcat/instance1/conf/server.xml
服务端口 <span class="token number">8080</span> 替换成 <span class="token number">8081</span>
修改前
    <span class="token operator">&lt;</span>Connector <span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token string">&quot;8080&quot;</span> <span class="token assign-left variable">protocol</span><span class="token operator">=</span><span class="token string">&quot;HTTP/1.1&quot;</span>
               <span class="token assign-left variable">connectionTimeout</span><span class="token operator">=</span><span class="token string">&quot;20000&quot;</span>
               <span class="token assign-left variable">redirectPort</span><span class="token operator">=</span><span class="token string">&quot;8443&quot;</span> /<span class="token operator">&gt;</span>

修改后
    <span class="token operator">&lt;</span>Connector <span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token string">&quot;8081&quot;</span> <span class="token assign-left variable">protocol</span><span class="token operator">=</span><span class="token string">&quot;HTTP/1.1&quot;</span>
               <span class="token assign-left variable">connectionTimeout</span><span class="token operator">=</span><span class="token string">&quot;20000&quot;</span>
               <span class="token assign-left variable">redirectPort</span><span class="token operator">=</span><span class="token string">&quot;8443&quot;</span> /<span class="token operator">&gt;</span>


程序工作端口：8005替换成 <span class="token number">8091</span>
修改前
<span class="token operator">&lt;</span>Server <span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token string">&quot;8005&quot;</span> <span class="token assign-left variable">shutdown</span><span class="token operator">=</span><span class="token string">&quot;SHUTDOWN&quot;</span><span class="token operator">&gt;</span>

修改后
<span class="token operator">&lt;</span>Server <span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token string">&quot;8091&quot;</span> <span class="token assign-left variable">shutdown</span><span class="token operator">=</span><span class="token string">&quot;SHUTDOWN&quot;</span><span class="token operator">&gt;</span>


网站目录：webapps 替换成 另一个目录
     <span class="token operator">&lt;</span>Host <span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">&quot;localhost&quot;</span>  <span class="token assign-left variable">appBase</span><span class="token operator">=</span><span class="token string">&quot;webapps&quot;</span>

修改后
     <span class="token operator">&lt;</span>Host <span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">&quot;localhost&quot;</span>  <span class="token assign-left variable">appBase</span><span class="token operator">=</span><span class="token string">&quot;/webapps&quot;</span>

其他两个也相应不同修改在这里插入图片描述
<span class="token punctuation">[</span>root@tomcat tomcat<span class="token punctuation">]</span><span class="token comment"># vim /usr/local/tomcat/instance1/conf/server.xml</span>
<span class="token punctuation">[</span>root@tomcat tomcat<span class="token punctuation">]</span><span class="token comment"># cp instance1/conf/server.xml instance2/conf/</span>
cp: overwrite ‘instance2/conf/server.xml’? y
<span class="token punctuation">[</span>root@tomcat tomcat<span class="token punctuation">]</span><span class="token comment"># cp instance1/conf/server.xml instance3/conf/</span>
cp: overwrite ‘instance3/conf/server.xml’? y
<span class="token punctuation">[</span>root@tomcat tomcat<span class="token punctuation">]</span><span class="token comment"># </span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动脚本 vim /usr/local/tomcat/instance1/ins1.sh</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#instance1</span>
<span class="token builtin class-name">.</span> /etc/init.d/functions
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CATALINA_BASE</span><span class="token operator">=</span><span class="token string">&quot;/usr/local/tomcat/instance1&quot;</span>

<span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token keyword">in</span>
start<span class="token punctuation">)</span>
        <span class="token variable">$CATALINA_HOME</span>/bin/startup.sh
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
stop<span class="token punctuation">)</span>
        <span class="token variable">$CATALINA_HOME</span>/bin/shutdown.sh
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
restart<span class="token punctuation">)</span>
        <span class="token variable">$CATALINA_HOME</span>/bin/shutdown.sh
        <span class="token function">sleep</span> <span class="token number">5</span>
        <span class="token variable">$CATALINA_HOME</span>/bin/startup.sh
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_OPTS</span><span class="token operator">=</span><span class="token string">&#39;-Xms64m -Xmx128m&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vim /usr/local/tomcat/instance2/ins2.sh</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#instance2              #####</span>
<span class="token builtin class-name">.</span> /etc/init.d/functions
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CATALINA_BASE</span><span class="token operator">=</span><span class="token string">&quot;/usr/local/tomcat/instance2&quot;</span>    <span class="token comment">#####</span>

<span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token keyword">in</span>
start<span class="token punctuation">)</span>
        <span class="token variable">$CATALINA_HOME</span>/bin/startup.sh
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
stop<span class="token punctuation">)</span>
        <span class="token variable">$CATALINA_HOME</span>/bin/shutdown.sh
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
restart<span class="token punctuation">)</span>
        <span class="token variable">$CATALINA_HOME</span>/bin/shutdown.sh
        <span class="token function">sleep</span> <span class="token number">5</span>
        <span class="token variable">$CATALINA_HOME</span>/bin/startup.sh
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vim /usr/local/tomcat/instance3/ins3.sh</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#instance3</span>
<span class="token builtin class-name">.</span> /etc/init.d/functions
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CATALINA_BASE</span><span class="token operator">=</span><span class="token string">&quot;/usr/local/tomcat/instance3&quot;</span>

<span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token keyword">in</span>
start<span class="token punctuation">)</span>
        <span class="token variable">$CATALINA_HOME</span>/bin/startup.sh
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
stop<span class="token punctuation">)</span>
        <span class="token variable">$CATALINA_HOME</span>/bin/shutdown.sh
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
restart<span class="token punctuation">)</span>
        <span class="token variable">$CATALINA_HOME</span>/bin/shutdown.sh
        <span class="token function">sleep</span> <span class="token number">5</span>
        <span class="token variable">$CATALINA_HOME</span>/bin/startup.sh
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_OPTS</span><span class="token operator">=</span><span class="token string">&#39;-Xms64m -Xmx128m&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>赋权</p><pre><code>chmod +x /usr/local/tomcat/instance1/ins1.sh
 chmod +x /usr/local/tomcat/instance2/ins2.sh
chmod +x /usr/local/tomcat/instance3/ins3.sh
</code></pre><p>网站源码</p><pre><code>mkdir /webapps
cp -r /usr/local/tomcat/webapps/ROOT/ /webapps/
</code></pre><p>启动</p><pre><code>/usr/local/tomcat/instance1/ins1.sh start
 /usr/local/tomcat/instance2/ins2.sh start
 /usr/local/tomcat/instance3/ins3.sh start
等5秒
</code></pre><p>测试</p><pre><code>netstat -antp | grep 8081
在这里插入图片描述
</code></pre><p>浏览</p><pre><code>http://192.168.75.226:8081
http://192.168.75.226:8082
http://192.168.75.226:8083
</code></pre><h2 id="jvm常用分析工具" tabindex="-1"><a class="header-anchor" href="#jvm常用分析工具"><span>JVM常用分析工具</span></a></h2><figure><img src="`+l+`" alt="image-20211110215222063" tabindex="0" loading="lazy"><figcaption>image-20211110215222063</figcaption></figure><p>命令行工具</p><h3 id="jps" tabindex="-1"><a class="header-anchor" href="#jps"><span>jps</span></a></h3><p>Java虚拟机进程状态工具</p><pre><code>jps [options] [hostid]
  -q 显示进程ID
  -m 显示进程ID、主类名、传入主方法的参数
  -l 显示进程ID、全类名
  -v 显示进程ID、主类名、虚拟机参数
  -V 显示进程ID、主类名【默认】
</code></pre><h3 id="jstat" tabindex="-1"><a class="header-anchor" href="#jstat"><span>jstat</span></a></h3><p>Java虚拟机统计监控工具</p><pre><code>jstat [ generalOption | outputOptions vmid [ interval [ s|ms ] [ count ] ] ]
  -generalOption通用信息，可传入-help(显示帮助信息) -version(显示版本信息[测试过，无效]) -options(显示可用的统计选项)
      -outputOptions一个或者多个输出选项，常用的如
      -class 类加载的统计信息
      -complier 即时编译器统计信息
  -gc 垃圾收集器统计
  -vmid 本地虚拟机进程的话，则为对应进程ID(可通过jps查进程ID)。另外，也可以查看远程虚拟机进程
  -interval 统计的时间间隔，默认为微秒
  -count 总共统计次数
</code></pre><p>案例</p><p>~ jstat -class 1251</p><pre><code>➜  ~ jstat -class 1251
加载的类 加载类的总大小   卸载的类     卸载类的总大小		 类加载和卸载总花费时间
Loaded  Bytes  				Unloaded  	Bytes     			Time   
  4426  8085.9      	182   			214.5       		5.79
</code></pre><p>~ jstat -gc 1251</p><pre><code>➜  ~ jstat -gc 1251
 S0C    S1C    S0U    S1U      EC       EU        OC         OU       MC     MU    CCSC   CCSU   YGC     YGCT    FGC    FGCT     GCT   
 0.0    0.0    0.0    0.0   11264.0   2048.0   16384.0     7254.0   27440.0 26286.1 3200.0 2789.7      7    0.072  13      0.360    0.433

 各列含义：
|SOC    | 幸存区0大小(KB)|
|S1C    | 幸存区1大小(KB)|
|S0U    | 幸存区0使用大小(KB)|
|S1U    | 幸存区1使用大小(KB)|
|EC     | eden区空间大小(KB)|
|EU     | eden区空间使用大小(KB)|
|OC     | 老年代大小(KB)|
|OU     | 老年代使用大小(KB)|
|MC     | 元空间大小(KB)-1.8版本之后，用于存放方法区数据|
|MU     | 元空间使用大小(KB)|
|CCSC   | 压缩类空间大小(KB)|
|CCSU   | 压缩类空间使用大小(KB)|
|PC     | 永久区大小(KB)|
|PU     | 永久区使用大小(KB)|
|YGC    | 发生young GC次数|
|YGCT   | young GC所使用时间|
|FGC    | 发生full GC次数|
|FGCT   | full GC所使用时间|
|GCT    | 总共垃圾回收时间|
</code></pre><p>~ jstat -gcutil 1251</p><pre><code>➜  ~ jstat -gcutil 1251
  S0     S1     E      O      M     CCS    YGC     YGCT    FGC    FGCT     GCT   
  0.00   0.00  27.27  44.27  95.79  87.18      7    0.072    13    0.360    0.433

 各列含义：
|S0     | 幸存区0使用百分比|
|S1     | 幸存区1使用百分比|
|E      | eden区使用百分比|
|O      | 老年代使用百分比|
|M      | 元空间使用百分比|
|CCS    | 压缩类空间使用百分比|
|YGC    | 发生young GC次数|
|YGCT   | young GC所使用时间|
|FGC    | 发生full GC次数|
|FGCT   | full GC所使用时间|
|GCT    | 总共垃圾回收时间|
</code></pre><h3 id="jinfo" tabindex="-1"><a class="header-anchor" href="#jinfo"><span>jinfo</span></a></h3><p>打印配置信息【重点其实是可以动态设置虚拟机参数】</p><pre><code>jinfo [ option ] pid
  -flags 可以动态的设置或者取消或者变更JVM参数
  默认输出系统属性、JVM信息(官方目前推荐用jcmd替代jinfo，以减少影响当前进程性能)
</code></pre><p>案例</p><p>jinfo 6564(这个命令jdk1.8报各种错，暂未解决)</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>➜  ~ jinfo <span class="token number">6564</span>
Java System Properties:
<span class="token comment">#Mon Mar 23 23:47:56 CST 2020</span>
<span class="token assign-left variable">gopherProxySet</span><span class="token operator">=</span>false
<span class="token assign-left variable">socksProxyHost</span><span class="token operator">=</span><span class="token number">127.0</span>.0.1
<span class="token assign-left variable">awt.toolkit</span><span class="token operator">=</span>sun.lwawt.macosx.LWCToolkit
<span class="token assign-left variable">http.proxyHost</span><span class="token operator">=</span><span class="token number">127.0</span>.0.1
<span class="token assign-left variable">java.specification.version</span><span class="token operator">=</span><span class="token number">11</span>
<span class="token assign-left variable">sun.cpu.isalist</span><span class="token operator">=</span>
<span class="token assign-left variable">sun.jnu.encoding</span><span class="token operator">=</span>UTF-8
<span class="token assign-left variable">java.class.path</span><span class="token operator">=</span>/Users/laicreasy/github/peach/classical/target/test-classes<span class="token punctuation">\\</span>:/Users/laicreasy/github/peach/classical/target/classes<span class="token punctuation">\\</span>:/Users/laicreasy/.m2/repository/junit/junit/4.13/junit-4.13.jar<span class="token punctuation">\\</span>:/Users/laicreasy/.m2/repository/org/hamcrest/hamcrest-core/1.3/hamcrest-core-1.3.jar<span class="token punctuation">\\</span>:/Users/laicreasy/.m2/repository/org/apache/logging/log4j/log4j-api/2.13.1/log4j-api-2.13.1.jar<span class="token punctuation">\\</span>:/Users/laicreasy/.m2/repository/org/apache/logging/log4j/log4j-core/2.13.1/log4j-core-2.13.1.jar
<span class="token assign-left variable">https.proxyPort</span><span class="token operator">=</span><span class="token number">8001</span>
<span class="token assign-left variable">java.vm.vendor</span><span class="token operator">=</span>Oracle Corporation
<span class="token assign-left variable">sun.arch.data.model</span><span class="token operator">=</span><span class="token number">64</span>
<span class="token assign-left variable">java.vendor.url</span><span class="token operator">=</span>http<span class="token punctuation">\\</span>://java.oracle.com/
<span class="token assign-left variable">user.timezone</span><span class="token operator">=</span>Asia/Shanghai
<span class="token assign-left variable">java.vm.specification.version</span><span class="token operator">=</span><span class="token number">11</span>
<span class="token assign-left variable">os.name</span><span class="token operator">=</span>Mac OS X
<span class="token assign-left variable">sun.java.launcher</span><span class="token operator">=</span>SUN_STANDARD
<span class="token assign-left variable">user.country</span><span class="token operator">=</span>CN
<span class="token assign-left variable">sun.boot.library.path</span><span class="token operator">=</span>/Library/Java/JavaVirtualMachines/jdk-11.0.5.jdk/Contents/Home/lib
<span class="token assign-left variable">sun.java.command</span><span class="token operator">=</span>com.creasy.Concurrency
<span class="token assign-left variable">jdk.debug</span><span class="token operator">=</span>release
<span class="token assign-left variable">sun.cpu.endian</span><span class="token operator">=</span>little
<span class="token assign-left variable">user.home</span><span class="token operator">=</span>/Users/laicreasy
<span class="token assign-left variable">user.language</span><span class="token operator">=</span>en
<span class="token assign-left variable">java.specification.vendor</span><span class="token operator">=</span>Oracle Corporation
<span class="token assign-left variable">java.version.date</span><span class="token operator">=</span><span class="token number">2019</span>-10-15
<span class="token assign-left variable">java.home</span><span class="token operator">=</span>/Library/Java/JavaVirtualMachines/jdk-11.0.5.jdk/Contents/Home
<span class="token assign-left variable">file.separator</span><span class="token operator">=</span>/
<span class="token assign-left variable">https.proxyHost</span><span class="token operator">=</span><span class="token number">127.0</span>.0.1
<span class="token assign-left variable">java.vm.compressedOopsMode</span><span class="token operator">=</span>Zero based
<span class="token assign-left variable">line.separator</span><span class="token operator">=</span><span class="token punctuation">\\</span>n
<span class="token assign-left variable">java.specification.name</span><span class="token operator">=</span>Java Platform API Specification
<span class="token assign-left variable">java.vm.specification.vendor</span><span class="token operator">=</span>Oracle Corporation
<span class="token assign-left variable">java.awt.graphicsenv</span><span class="token operator">=</span>sun.awt.CGraphicsEnvironment
<span class="token assign-left variable">sun.management.compiler</span><span class="token operator">=</span>HotSpot <span class="token number">64</span>-Bit Tiered Compilers
<span class="token assign-left variable">java.runtime.version</span><span class="token operator">=</span><span class="token number">11.0</span>.5+10-LTS
<span class="token assign-left variable">user.name</span><span class="token operator">=</span>laicreasy
<span class="token assign-left variable">path.separator</span><span class="token operator">=</span><span class="token punctuation">\\</span>:
<span class="token assign-left variable">os.version</span><span class="token operator">=</span><span class="token number">10.15</span>.2
<span class="token assign-left variable">java.runtime.name</span><span class="token operator">=</span>Java<span class="token punctuation">(</span>TM<span class="token punctuation">)</span> SE Runtime Environment
<span class="token assign-left variable">file.encoding</span><span class="token operator">=</span>UTF-8
<span class="token assign-left variable">java.vm.name</span><span class="token operator">=</span>Java HotSpot<span class="token punctuation">(</span>TM<span class="token punctuation">)</span> <span class="token number">64</span>-Bit Server VM
<span class="token assign-left variable">java.vendor.version</span><span class="token operator">=</span><span class="token number">18.9</span>
<span class="token assign-left variable">java.vendor.url.bug</span><span class="token operator">=</span>http<span class="token punctuation">\\</span>://bugreport.java.com/bugreport/
<span class="token assign-left variable">java.io.tmpdir</span><span class="token operator">=</span>/var/folders/w9/1vphl83x0rz54l_x9p118n5w0000gn/T/
<span class="token assign-left variable">java.version</span><span class="token operator">=</span><span class="token number">11.0</span>.5
<span class="token assign-left variable">user.dir</span><span class="token operator">=</span>/Users/laicreasy/github/peach/classical
<span class="token assign-left variable">os.arch</span><span class="token operator">=</span>x86_64
<span class="token assign-left variable">socksProxyPort</span><span class="token operator">=</span><span class="token number">1081</span>
<span class="token assign-left variable">java.vm.specification.name</span><span class="token operator">=</span>Java Virtual Machine Specification
<span class="token assign-left variable">java.awt.printerjob</span><span class="token operator">=</span>sun.lwawt.macosx.CPrinterJob
<span class="token assign-left variable">sun.os.patch.level</span><span class="token operator">=</span>unknown
<span class="token assign-left variable">java.library.path</span><span class="token operator">=</span>/Users/laicreasy/Library/Java/Extensions<span class="token punctuation">\\</span>:/Library/Java/Extensions<span class="token punctuation">\\</span>:/Network/Library/Java/Extensions<span class="token punctuation">\\</span>:/System/Library/Java/Extensions<span class="token punctuation">\\</span>:/usr/lib/java<span class="token punctuation">\\</span>:.
<span class="token assign-left variable">java.vendor</span><span class="token operator">=</span>Oracle Corporation
<span class="token assign-left variable">java.vm.info</span><span class="token operator">=</span>mixed mode
<span class="token assign-left variable">java.vm.version</span><span class="token operator">=</span><span class="token number">11.0</span>.5+10-LTS
<span class="token assign-left variable">sun.io.unicode.encoding</span><span class="token operator">=</span>UnicodeBig
<span class="token assign-left variable">java.class.version</span><span class="token operator">=</span><span class="token number">55.0</span>
<span class="token assign-left variable">http.proxyPort</span><span class="token operator">=</span><span class="token number">8001</span>

VM Flags:
<span class="token parameter variable">-XX:CICompilerCount</span><span class="token operator">=</span><span class="token number">3</span> <span class="token parameter variable">-XX:ConcGCThreads</span><span class="token operator">=</span><span class="token number">1</span> <span class="token parameter variable">-XX:G1ConcRefinementThreads</span><span class="token operator">=</span><span class="token number">4</span> <span class="token parameter variable">-XX:G1HeapRegionSize</span><span class="token operator">=</span><span class="token number">1048576</span> <span class="token parameter variable">-XX:GCDrainStackTargetSize</span><span class="token operator">=</span><span class="token number">64</span> <span class="token parameter variable">-XX:InitialHeapSize</span><span class="token operator">=</span><span class="token number">134217728</span> <span class="token parameter variable">-XX:MarkStackSize</span><span class="token operator">=</span><span class="token number">4194304</span> <span class="token parameter variable">-XX:MaxHeapSize</span><span class="token operator">=</span><span class="token number">2147483648</span> <span class="token parameter variable">-XX:MaxNewSize</span><span class="token operator">=</span><span class="token number">1287651328</span> <span class="token parameter variable">-XX:MinHeapDeltaBytes</span><span class="token operator">=</span><span class="token number">1048576</span> <span class="token parameter variable">-XX:NonNMethodCodeHeapSize</span><span class="token operator">=</span><span class="token number">5830732</span> <span class="token parameter variable">-XX:NonProfiledCodeHeapSize</span><span class="token operator">=</span><span class="token number">122913754</span> <span class="token parameter variable">-XX:ProfiledCodeHeapSize</span><span class="token operator">=</span><span class="token number">122913754</span> <span class="token parameter variable">-XX:ReservedCodeCacheSize</span><span class="token operator">=</span><span class="token number">251658240</span> <span class="token parameter variable">-XX:+SegmentedCodeCache</span> <span class="token parameter variable">-XX:+UseCompressedClassPointers</span> <span class="token parameter variable">-XX:+UseCompressedOops</span> <span class="token parameter variable">-XX:+UseFastUnorderedTimeStamps</span> <span class="token parameter variable">-XX:+UseG1GC</span> 

VM Arguments:
jvm_args: -javaagent:/Applications/IntelliJ IDEA.app/Contents/lib/idea_rt.jar<span class="token operator">=</span><span class="token number">49825</span>:/Applications/IntelliJ IDEA.app/Contents/bin <span class="token parameter variable">-Dfile.encoding</span><span class="token operator">=</span>UTF-8 
java_command: com.creasy.Concurrency
java_class_path <span class="token punctuation">(</span>initial<span class="token punctuation">)</span>: /Users/laicreasy/github/peach/classical/target/test-classes:/Users/laicreasy/github/peach/classical/target/classes:/Users/laicreasy/.m2/repository/junit/junit/4.13/junit-4.13.jar:/Users/laicreasy/.m2/repository/org/hamcrest/hamcrest-core/1.3/hamcrest-core-1.3.jar:/Users/laicreasy/.m2/repository/org/apache/logging/log4j/log4j-api/2.13.1/log4j-api-2.13.1.jar:/Users/laicreasy/.m2/repository/org/apache/logging/log4j/log4j-core/2.13.1/log4j-core-2.13.1.jar
Launcher Type: SUN_STANDARD
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jmap" tabindex="-1"><a class="header-anchor" href="#jmap"><span>jmap</span></a></h3><p>查看堆内存信息，可以生成dump文件</p><pre><code>jmap [ option ] pid
常用如
	jmap -heap pid显示堆配置和使用情况
	jmap -clstats &lt;pid&gt;显示类加载器信息
    jmap -finalizerinfo &lt;pid&gt;打印等会finalization的对象信息
    jmap -histo[:live] &lt;pid&gt;堆中对象的统计，如果加上了[:live]，那么只统计当前存活的对象
    jmap -dump:&lt;dump-options&gt; &lt;pid&gt;生成堆转储快照
	    dump-options:
  	    -live        只包括当前存活的对象
    	-format=b     二进制格式
      	-file=&lt;file&gt;  保存的文件名
</code></pre><p>案例</p><p>~ jhsdb jmap --heap --pid 7157(jdk11下，jmap -heap pid无效)</p><pre><code>➜  ~ jhsdb jmap --heap --pid 7157
Attaching to process ID 7157, please wait...
Debugger attached successfully.
Server compiler detected.
JVM version is 11.0.5+10-LTS

using thread-local object allocation.
Garbage-First (G1) GC with 4 thread(s)

Heap Configuration:
   MinHeapFreeRatio         = 40
   MaxHeapFreeRatio         = 70
   MaxHeapSize              = 2147483648 (2048.0MB)
   NewSize                  = 1363144 (1.2999954223632812MB)
   MaxNewSize               = 1287651328 (1228.0MB)
   OldSize                  = 5452592 (5.1999969482421875MB)
   NewRatio                 = 2
   SurvivorRatio            = 8
   MetaspaceSize            = 21807104 (20.796875MB)
   CompressedClassSpaceSize = 1073741824 (1024.0MB)
   MaxMetaspaceSize         = 17592186044415 MB
   G1HeapRegionSize         = 1048576 (1.0MB)

Heap Usage:
G1 Heap:
   regions  = 2048
   capacity = 2147483648 (2048.0MB)
   used     = 3145728 (3.0MB)
   free     = 2144337920 (2045.0MB)
   0.146484375% used
G1 Young Generation:
Eden Space:
   regions  = 4
   capacity = 15728640 (15.0MB)
   used     = 4194304 (4.0MB)
   free     = 11534336 (11.0MB)
   26.666666666666668% used
Survivor Space:
   regions  = 0
   capacity = 0 (0.0MB)
   used     = 0 (0.0MB)
   free     = 0 (0.0MB)
   0.0% used
G1 Old Generation:
   regions  = 0
   capacity = 118489088 (113.0MB)
   used     = 0 (0.0MB)
   free     = 118489088 (113.0MB)
   0.0% used
</code></pre><p>~ jmap -histo:live 7588</p><pre><code>➜  ~ jmap -histo:live 7588

 num     #instances         #bytes  class name (module)
-------------------------------------------------------

   1:          7610         607736  [B (java.base@11.0.5)
   2:          7069         169656  java.lang.String (java.base@11.0.5)
   3:          1201         146592  java.lang.Class (java.base@11.0.5)
   4:          3640         116480  java.util.HashMap$Node (java.base@11.0.5)
   5:          1166          98920  [Ljava.lang.Object; (java.base@11.0.5)
   6:           379          53792  [Ljava.util.HashMap$Node; (java.base@11.0.5)
   7:            12          50104  [C (java.base@11.0.5)
   8:           332          41120  [I (java.base@11.0.5)
   9:          1232          39424  java.util.concurrent.ConcurrentHashMap$Node (java.base@11.0.5)
  10:           645          25800  java.util.LinkedHashMap$Entry (java.base@11.0.5)
  11:           392          18816  java.util.HashMap (java.base@11.0.5)
  12:            46          17440  [Ljava.util.concurrent.ConcurrentHashMap$Node; (java.base@11.0.5)
  13:           289          13792  [Ljava.lang.String; (java.base@11.0.5)
...
 511:             1             16  sun.nio.fs.NativeBuffers$1 (java.base@11.0.5)
 512:             1             16  sun.util.calendar.Gregorian (java.base@11.0.5)
 513:             1             16  sun.util.cldr.CLDRBaseLocaleDataMetaInfo (java.base@11.0.5)
 514:             1             16  sun.util.locale.InternalLocaleBuilder$CaseInsensitiveChar (java.base@11.0.5)
 515:             1             16  sun.util.locale.provider.TimeZoneNameUtility$TimeZoneNameGetter (java.base@11.0.5)
 516:             1             16  sun.util.resources.LocaleData$LocaleDataStrategy (java.base@11.0.5)
 517:             1             16  sun.util.resources.cldr.provider.CLDRLocaleDataMetaInfo (jdk.localedata@11.0.5)
Total         30567        1623664
</code></pre><p>~ jmap -dump:live,format=b,file=heap.bin 7588</p><pre><code>➜  ~ jmap -dump:live,format=b,file=heap.bin 7588 
Heap dump file created
</code></pre><h3 id="jhat" tabindex="-1"><a class="header-anchor" href="#jhat"><span>jhat</span></a></h3><p>java堆分析工具，上述dump文件可以通过这个工具进行分析。这个工具会启动一个小型http服务器，可以通过浏览器查看分析结果。JDK11已经去掉了这个工具，直接用visual vm可视化工具分析</p><p>案例</p><p>jhat heap.bin</p><pre><code>➜  ~ jhat heap.bin
Reading from heap.bin...
Dump file created Tue Mar 24 02:06:41 CST 2020
Snapshot read, resolving...
Resolving 30513 objects...
Chasing references, expect 6 dots......
Eliminating duplicate references......
Snapshot resolved.
Started HTTP server on port 7000
Server is ready.
</code></pre><p>打开浏览器，http://localhost:7000/ 即可看到分析信息</p><h3 id="jstack" tabindex="-1"><a class="header-anchor" href="#jstack"><span>jstack</span></a></h3><p>打印线程栈信息，如可用来分析死循环、死锁等</p><pre><code>jstack [ option ] pid
	-m 打印Java和C++栈信息
	-l 额外打印关于锁的信息
</code></pre><p>案例</p><p>jstack -l 7588</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>➜  ~ jstack <span class="token parameter variable">-l</span> <span class="token number">7588</span>
<span class="token number">2020</span>-03-24 02:38:42
Full thread dump Java HotSpot<span class="token punctuation">(</span>TM<span class="token punctuation">)</span> <span class="token number">64</span>-Bit Server VM <span class="token punctuation">(</span><span class="token number">11.0</span>.5+10-LTS mixed mode<span class="token punctuation">)</span>:

Threads class SMR info:
<span class="token assign-left variable">_java_thread_list</span><span class="token operator">=</span>0x00007fb213e2d690, <span class="token assign-left variable">length</span><span class="token operator">=</span><span class="token number">11</span>, <span class="token assign-left variable">elements</span><span class="token operator">=</span><span class="token punctuation">{</span>
0x00007fb215805800, 0x00007fb21404a800, 0x00007fb21483a000, 0x00007fb21404f000,
0x00007fb21501d800, 0x00007fb214064000, 0x00007fb215018000, 0x00007fb2140d3000,
0x00007fb214943000, 0x00007fb214810000, 0x00007fb214150800
<span class="token punctuation">}</span>

<span class="token string">&quot;main&quot;</span> <span class="token comment">#1 prio=5 os_prio=31 cpu=314.71ms elapsed=2576.00s tid=0x00007fb215805800 nid=0x2703 runnable  [0x000070000439c000]</span>
   java.lang.Thread.State: RUNNABLE
	at java.io.FileInputStream.readBytes<span class="token punctuation">(</span>java.base@11.0.5/Native Method<span class="token punctuation">)</span>
	at java.io.FileInputStream.read<span class="token punctuation">(</span>java.base@11.0.5/FileInputStream.java:279<span class="token punctuation">)</span>
	at java.io.BufferedInputStream.fill<span class="token punctuation">(</span>java.base@11.0.5/BufferedInputStream.java:252<span class="token punctuation">)</span>
	at java.io.BufferedInputStream.read<span class="token punctuation">(</span>java.base@11.0.5/BufferedInputStream.java:271<span class="token punctuation">)</span>
	- locked <span class="token operator">&lt;</span>0x00000007801261e<span class="token operator"><span class="token file-descriptor important">8</span>&gt;</span> <span class="token punctuation">(</span>a java.io.BufferedInputStream<span class="token punctuation">)</span>
	at com.creasy.Concurrency.main<span class="token punctuation">(</span>Concurrency.java:24<span class="token punctuation">)</span>

   Locked ownable synchronizers:
	- None

<span class="token string">&quot;Reference Handler&quot;</span> <span class="token comment">#2 daemon prio=10 os_prio=31 cpu=0.36ms elapsed=2575.95s tid=0x00007fb21404a800 nid=0x3403 waiting on condition  [0x0000700004ab1000]</span>
   java.lang.Thread.State: RUNNABLE
	at java.lang.ref.Reference.waitForReferencePendingList<span class="token punctuation">(</span>java.base@11.0.5/Native Method<span class="token punctuation">)</span>
	at java.lang.ref.Reference.processPendingReferences<span class="token punctuation">(</span>java.base@11.0.5/Reference.java:241<span class="token punctuation">)</span>
	at java.lang.ref.Reference<span class="token variable">$ReferenceHandler</span>.run<span class="token punctuation">(</span>java.base@11.0.5/Reference.java:213<span class="token punctuation">)</span>

   Locked ownable synchronizers:
	- None

<span class="token string">&quot;Finalizer&quot;</span> <span class="token comment">#3 daemon prio=8 os_prio=31 cpu=0.46ms elapsed=2575.95s tid=0x00007fb21483a000 nid=0x4903 in Object.wait()  [0x0000700004bb4000]</span>
   java.lang.Thread.State: WAITING <span class="token punctuation">(</span>on object monitor<span class="token punctuation">)</span>
	at java.lang.Object.wait<span class="token punctuation">(</span>java.base@11.0.5/Native Method<span class="token punctuation">)</span>
	- waiting on <span class="token operator">&lt;</span>0x00000007801218f<span class="token operator"><span class="token file-descriptor important">8</span>&gt;</span> <span class="token punctuation">(</span>a java.lang.ref.ReferenceQueue<span class="token variable">$Lock</span><span class="token punctuation">)</span>
	at java.lang.ref.ReferenceQueue.remove<span class="token punctuation">(</span>java.base@11.0.5/ReferenceQueue.java:155<span class="token punctuation">)</span>
	- waiting to re-lock <span class="token keyword">in</span> wait<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span>0x00000007801218f<span class="token operator"><span class="token file-descriptor important">8</span>&gt;</span> <span class="token punctuation">(</span>a java.lang.ref.ReferenceQueue<span class="token variable">$Lock</span><span class="token punctuation">)</span>
	at java.lang.ref.ReferenceQueue.remove<span class="token punctuation">(</span>java.base@11.0.5/ReferenceQueue.java:176<span class="token punctuation">)</span>
	at java.lang.ref.Finalizer<span class="token variable">$FinalizerThread</span>.run<span class="token punctuation">(</span>java.base@11.0.5/Finalizer.java:170<span class="token punctuation">)</span>

   Locked ownable synchronizers:
	- None

<span class="token punctuation">..</span>.

<span class="token string">&quot;VM Thread&quot;</span> <span class="token assign-left variable">os_prio</span><span class="token operator">=</span><span class="token number">31</span> <span class="token assign-left variable">cpu</span><span class="token operator">=</span><span class="token number">150</span>.43ms <span class="token assign-left variable">elapsed</span><span class="token operator">=</span><span class="token number">2575</span>.96s <span class="token assign-left variable">tid</span><span class="token operator">=</span>0x00007fb214002800 <span class="token assign-left variable">nid</span><span class="token operator">=</span>0x4d03 runnable  

<span class="token string">&quot;GC Thread#0&quot;</span> <span class="token assign-left variable">os_prio</span><span class="token operator">=</span><span class="token number">31</span> <span class="token assign-left variable">cpu</span><span class="token operator">=</span><span class="token number">12</span>.00ms <span class="token assign-left variable">elapsed</span><span class="token operator">=</span><span class="token number">2575</span>.99s <span class="token assign-left variable">tid</span><span class="token operator">=</span>0x00007fb215005000 <span class="token assign-left variable">nid</span><span class="token operator">=</span>0x2d03 runnable  

<span class="token string">&quot;GC Thread#1&quot;</span> <span class="token assign-left variable">os_prio</span><span class="token operator">=</span><span class="token number">31</span> <span class="token assign-left variable">cpu</span><span class="token operator">=</span><span class="token number">6</span>.44ms <span class="token assign-left variable">elapsed</span><span class="token operator">=</span><span class="token number">2425</span>.77s <span class="token assign-left variable">tid</span><span class="token operator">=</span>0x00007fb215896000 <span class="token assign-left variable">nid</span><span class="token operator">=</span>0x4207 runnable  

<span class="token string">&quot;GC Thread#2&quot;</span> <span class="token assign-left variable">os_prio</span><span class="token operator">=</span><span class="token number">31</span> <span class="token assign-left variable">cpu</span><span class="token operator">=</span><span class="token number">8</span>.37ms <span class="token assign-left variable">elapsed</span><span class="token operator">=</span><span class="token number">2425</span>.77s <span class="token assign-left variable">tid</span><span class="token operator">=</span>0x00007fb214075000 <span class="token assign-left variable">nid</span><span class="token operator">=</span>0x5f03 runnable  

<span class="token string">&quot;G1 Main Marker&quot;</span> <span class="token assign-left variable">os_prio</span><span class="token operator">=</span><span class="token number">31</span> <span class="token assign-left variable">cpu</span><span class="token operator">=</span><span class="token number">0</span>.91ms <span class="token assign-left variable">elapsed</span><span class="token operator">=</span><span class="token number">2575</span>.99s <span class="token assign-left variable">tid</span><span class="token operator">=</span>0x00007fb214022800 <span class="token assign-left variable">nid</span><span class="token operator">=</span>0x5203 runnable  

<span class="token string">&quot;G1 Conc#0&quot;</span> <span class="token assign-left variable">os_prio</span><span class="token operator">=</span><span class="token number">31</span> <span class="token assign-left variable">cpu</span><span class="token operator">=</span><span class="token number">0</span>.04ms <span class="token assign-left variable">elapsed</span><span class="token operator">=</span><span class="token number">2575</span>.99s <span class="token assign-left variable">tid</span><span class="token operator">=</span>0x00007fb215005800 <span class="token assign-left variable">nid</span><span class="token operator">=</span>0x5003 runnable  

<span class="token string">&quot;G1 Refine#0&quot;</span> <span class="token assign-left variable">os_prio</span><span class="token operator">=</span><span class="token number">31</span> <span class="token assign-left variable">cpu</span><span class="token operator">=</span><span class="token number">0</span>.71ms <span class="token assign-left variable">elapsed</span><span class="token operator">=</span><span class="token number">2575</span>.99s <span class="token assign-left variable">tid</span><span class="token operator">=</span>0x00007fb215836800 <span class="token assign-left variable">nid</span><span class="token operator">=</span>0x3103 runnable  

<span class="token string">&quot;G1 Young RemSet Sampling&quot;</span> <span class="token assign-left variable">os_prio</span><span class="token operator">=</span><span class="token number">31</span> <span class="token assign-left variable">cpu</span><span class="token operator">=</span><span class="token number">386</span>.00ms <span class="token assign-left variable">elapsed</span><span class="token operator">=</span><span class="token number">2575</span>.99s <span class="token assign-left variable">tid</span><span class="token operator">=</span>0x00007fb214041800 <span class="token assign-left variable">nid</span><span class="token operator">=</span>0x3203 runnable  
<span class="token string">&quot;VM Periodic Task Thread&quot;</span> <span class="token assign-left variable">os_prio</span><span class="token operator">=</span><span class="token number">31</span> <span class="token assign-left variable">cpu</span><span class="token operator">=</span><span class="token number">2000</span>.79ms <span class="token assign-left variable">elapsed</span><span class="token operator">=</span><span class="token number">2575</span>.55s <span class="token assign-left variable">tid</span><span class="token operator">=</span>0x00007fb214149800 <span class="token assign-left variable">nid</span><span class="token operator">=</span>0x5b03 waiting on condition  

JNI global refs: <span class="token number">18</span>, weak refs: <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="可视化工具" tabindex="-1"><a class="header-anchor" href="#可视化工具"><span>可视化工具</span></a></h3><p>jconsole</p><p>可以监控CPU、内存、线程等情况</p><p>~jconsole</p><figure><img src="`+p+`" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure><p>reference：</p><pre><code>https://docs.oracle.com/javase/8/docs/technotes/tools/unix/jps.html
https://docs.oracle.com/javase/8/docs/technotes/tools/unix/jstat.html
https://docs.oracle.com/en/java/javase/11/troubleshoot/diagnostic-tools.html#GUID-CBC97A20-7379-4762-BA17-FB1A560D02E4
</code></pre><h2 id="jvm运维使用监控工具" tabindex="-1"><a class="header-anchor" href="#jvm运维使用监控工具"><span>JVM运维使用监控工具</span></a></h2><h3 id="visual-vm" tabindex="-1"><a class="header-anchor" href="#visual-vm"><span>Visual VM</span></a></h3><p>Visual VM是一款All-in-One的Java分析工具，堆栈信息、线程信息等都可以分析，而且还支持装插件。但jdk1.9之后默认JDK不再支持，可以通过https://visualvm.github.io/download.html这里下载</p><p>在1.8环境下执行</p><p>~ jvisualvm</p><figure><img src="`+i+'" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>',126),r=[c];function d(v,u){return n(),s("div",null,r)}const k=a(o,[["render",d],["__file","Tomcat构建企业级高负载服务器.html.vue"]]),g=JSON.parse('{"path":"/note-book/Tomcat/Tomcat%E6%9E%84%E5%BB%BA%E4%BC%81%E4%B8%9A%E7%BA%A7%E9%AB%98%E8%B4%9F%E8%BD%BD%E6%9C%8D%E5%8A%A1%E5%99%A8.html","title":"Tomcat构建企业级高负载服务器","lang":"zh-CN","frontmatter":{"description":"Tomcat构建企业级高负载服务器 前言 什么是JAVA虚拟机 JAVA 如何做到跨平台 imgimg Tomcat部署 官网地址 部署 一、Tomcat Http Server 环境 部署JAVA环境 提示 建议卸载默认安装openjdk软件 ①解压安装包 tar xf jdk-8u151-linux-x64.tar.gz -C /usr/local...","head":[["meta",{"property":"og:url","content":"https://paper-dragon.github.io/note-book/Tomcat/Tomcat%E6%9E%84%E5%BB%BA%E4%BC%81%E4%B8%9A%E7%BA%A7%E9%AB%98%E8%B4%9F%E8%BD%BD%E6%9C%8D%E5%8A%A1%E5%99%A8.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"Tomcat构建企业级高负载服务器"}],["meta",{"property":"og:description","content":"Tomcat构建企业级高负载服务器 前言 什么是JAVA虚拟机 JAVA 如何做到跨平台 imgimg Tomcat部署 官网地址 部署 一、Tomcat Http Server 环境 部署JAVA环境 提示 建议卸载默认安装openjdk软件 ①解压安装包 tar xf jdk-8u151-linux-x64.tar.gz -C /usr/local..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-19T08:51:09.000Z"}],["meta",{"property":"article:author","content":"PaperDragon"}],["meta",{"property":"article:modified_time","content":"2024-03-19T08:51:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Tomcat构建企业级高负载服务器\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-19T08:51:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[{"level":3,"title":"什么是JAVA虚拟机","slug":"什么是java虚拟机","link":"#什么是java虚拟机","children":[]},{"level":3,"title":"JAVA 如何做到跨平台","slug":"java-如何做到跨平台","link":"#java-如何做到跨平台","children":[]}]},{"level":2,"title":"Tomcat部署","slug":"tomcat部署","link":"#tomcat部署","children":[{"level":3,"title":"部署","slug":"部署","link":"#部署","children":[]}]},{"level":2,"title":"Tomcat多实例","slug":"tomcat多实例","link":"#tomcat多实例","children":[]},{"level":2,"title":"JVM常用分析工具","slug":"jvm常用分析工具","link":"#jvm常用分析工具","children":[{"level":3,"title":"jps","slug":"jps","link":"#jps","children":[]},{"level":3,"title":"jstat","slug":"jstat","link":"#jstat","children":[]},{"level":3,"title":"jinfo","slug":"jinfo","link":"#jinfo","children":[]},{"level":3,"title":"jmap","slug":"jmap","link":"#jmap","children":[]},{"level":3,"title":"jhat","slug":"jhat","link":"#jhat","children":[]},{"level":3,"title":"jstack","slug":"jstack","link":"#jstack","children":[]},{"level":3,"title":"可视化工具","slug":"可视化工具","link":"#可视化工具","children":[]}]},{"level":2,"title":"JVM运维使用监控工具","slug":"jvm运维使用监控工具","link":"#jvm运维使用监控工具","children":[{"level":3,"title":"Visual VM","slug":"visual-vm","link":"#visual-vm","children":[]}]}],"git":{"createdTime":1691939318000,"updatedTime":1710838269000,"contributors":[{"name":"PaperDragon-SH","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":12.3,"words":3691},"filePathRelative":"note-book/Tomcat/Tomcat构建企业级高负载服务器.md","localizedDate":"2023年8月13日","excerpt":"\\n<h2>前言</h2>\\n<h3>什么是JAVA虚拟机</h3>\\n<pre><code>所谓虚拟机，就是一台虚拟的计算机。他是一款软件，用来执行一系列虚拟计算机指令。大体上，虚拟机可以分为系统虚拟机和程序虚拟机。大名鼎鼎的VisualBox、VMware就属于系统虚拟机。他们完全是对物理计算机的仿真。提供了一个可以运行完整操作系统的软件平台。\\n程序虚拟机的典型代表就是Java虚拟机，它专门为执行单个计算机程序而设计，在Java虚拟机中执行的指令我们称为Java字节码指令。无论是系统虚拟机还是程序虚拟机，在上面运行的软件都呗限制于虚拟机提供的资源中。\\n</code></pre>\\n<h3>JAVA 如何做到跨平台</h3>","autoDesc":true}');export{k as comp,g as data};
