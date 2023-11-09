import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as t,c as d,a as e,e as a,d as o,f as n}from"./app-a9e2ba4f.js";const c="/assets/image-20220803112311809-e72467fe.png",l="/assets/image-20220803112417099-4e141276.png",p="/assets/image-20220803112443633-3a0aef70.png",h="/assets/image-20220803112544922-021af2d3.png",g="/assets/image-20220803112551395-1bc59be1.png",f="/assets/image-20220803112809801-42fd5c54.png",m={},u=n(`<h1 id="linux排查哪个进程在占用网速" tabindex="-1"><a class="header-anchor" href="#linux排查哪个进程在占用网速" aria-hidden="true">#</a> Linux排查哪个进程在占用网速</h1><p>本教程适用于Centos7,Centos8</p><h2 id="使用nethogs定位哪个进程在占用流量" tabindex="-1"><a class="header-anchor" href="#使用nethogs定位哪个进程在占用流量" aria-hidden="true">#</a> 使用NetHogs定位哪个进程在占用流量</h2><h3 id="安装nethogs" tabindex="-1"><a class="header-anchor" href="#安装nethogs" aria-hidden="true">#</a> 安装NetHogs</h3><pre><code># 安装NetHogs。
yum install nethogs -y   
</code></pre><h3 id="查看进程流量" tabindex="-1"><a class="header-anchor" href="#查看进程流量" aria-hidden="true">#</a> 查看进程流量</h3><pre><code># 执行以下命令，查看占用内网带宽的进程。
nethogs eth0

# 查询间隔(-d)5秒
nethogs eth1 -d 5
</code></pre><figure><img src="`+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="显示界面说明" tabindex="-1"><a class="header-anchor" href="#显示界面说明" aria-hidden="true">#</a> 显示界面说明</h3><p>在nethogs监控界面，按s可以按照Sent列进行排序，按r可以按照Received列进行排序，按m可以切换不同的统计单位显示，例如kb/s、kb、b、mb。监控界面信息说明如下所示。<br><img src="'+l+'" alt="image-20220803112417099" loading="lazy"></p><h2 id="使用iftop定位哪个ip在占用流量" tabindex="-1"><a class="header-anchor" href="#使用iftop定位哪个ip在占用流量" aria-hidden="true">#</a> 使用iftop定位哪个IP在占用流量</h2><h3 id="iftop基本用法" tabindex="-1"><a class="header-anchor" href="#iftop基本用法" aria-hidden="true">#</a> iftop基本用法</h3><figure><img src="'+p+`" alt="image-20220803112443633" tabindex="0" loading="lazy"><figcaption>image-20220803112443633</figcaption></figure><h3 id="查看哪个连接占用流量最多" tabindex="-1"><a class="header-anchor" href="#查看哪个连接占用流量最多" aria-hidden="true">#</a> 查看哪个连接占用流量最多</h3><pre><code># 查看eth0哪个连接网络流量最多
iftop -P
</code></pre><h3 id="不解析域名-所有的网络连接都以ip显示" tabindex="-1"><a class="header-anchor" href="#不解析域名-所有的网络连接都以ip显示" aria-hidden="true">#</a> 不解析域名,所有的网络连接都以ip显示</h3><pre><code>iftop -n
</code></pre><p>指定监控网卡</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 不加i参数表示监控所有网卡</span>
iftop

<span class="token comment"># 指定网卡且不解析dns</span>
iftop <span class="token parameter variable">-n</span> <span class="token parameter variable">-i</span> eth0 

<span class="token comment"># 查看流量较高的是占用的端口(或服务)</span>
iftop <span class="token parameter variable">-i</span> eth0 <span class="token parameter variable">-P</span>

<span class="token comment"># -N查看流量较高的是占用的端口</span>
iftop <span class="token parameter variable">-i</span> eth0 <span class="token parameter variable">-P</span> <span class="token parameter variable">-N</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+h+'" alt="image-20220803112544922" tabindex="0" loading="lazy"><figcaption>image-20220803112544922</figcaption></figure><figure><img src="'+g+`" alt="image-20220803112551395" tabindex="0" loading="lazy"><figcaption>image-20220803112551395</figcaption></figure><h2 id="快速端口占用的pid" tabindex="-1"><a class="header-anchor" href="#快速端口占用的pid" aria-hidden="true">#</a> 快速端口占用的pid</h2><pre><code># 使用fuser定位端口的pid

fuser -v  -n tcp 3306

结束掉占用的pid
kill -s 9 pid
</code></pre><h3 id="使用lsof定位端口的pid" tabindex="-1"><a class="header-anchor" href="#使用lsof定位端口的pid" aria-hidden="true">#</a> 使用lsof定位端口的pid</h3>`,24),b={href:"https://blog.csdn.net/flower_vip/article/details/80481258",target:"_blank",rel:"noopener noreferrer"},_=n(`<pre><code>lsof -i:端口号

[greg@node5 ~]$ sudo lsof -i:80
COMMAND  PID    USER   FD   TYPE DEVICE SIZE/OFF NODE NAME
haproxy 9521 haproxy    9u  IPv4  63613      0t0  TCP *:http (LISTEN)


##  -n 不要将端口号转换为端口名称。
## -P 不解析主机名，显示数字地址。
## -iTCP -sTCP:LISTEN -仅显示TCP状态为LISTEN的网络文件

# 查看TCP22端口是哪个进程占用
sudo lsof -nP -iTCP:22 -sTCP:LISTEN
# 查看监听的所有TCP端口
sudo lsof -nP -iTCP -sTCP:LISTEN
</code></pre><h3 id="通过pid进程号查找启动程序全路径" tabindex="-1"><a class="header-anchor" href="#通过pid进程号查找启动程序全路径" aria-hidden="true">#</a> 通过PID进程号查找启动程序全路径</h3><pre><code>ls -ail /proc/pid进程号
</code></pre><ul><li>cwd是该进程的工作目录</li><li>exe是启程序的启动路径</li><li>fd包含进程打开文件的情况</li></ul><figure><img src="`+f+`" alt="image-20220803112809801" tabindex="0" loading="lazy"><figcaption>image-20220803112809801</figcaption></figure><h2 id="结束进程" tabindex="-1"><a class="header-anchor" href="#结束进程" aria-hidden="true">#</a> 结束进程</h2><pre><code># 停止进程
kill -15 pid号
或
# 强制结束进程
kill -9 pid号
</code></pre><h2 id="日志分析" tabindex="-1"><a class="header-anchor" href="#日志分析" aria-hidden="true">#</a> 日志分析</h2><p>日志分析可以使用<strong>logwatch</strong>或<strong>awstats</strong>等工具进行.</p>`,9);function v(x,P){const i=r("ExternalLinkIcon");return t(),d("div",null,[u,e("p",null,[a("参考: "),e("a",b,[a("https://blog.csdn.net/flower_vip/article/details/80481258"),o(i)])]),_])}const T=s(m,[["render",v],["__file","Linux排查哪个进程和IP在占用网速.html.vue"]]);export{T as default};
