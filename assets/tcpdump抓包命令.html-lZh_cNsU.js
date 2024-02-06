import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as n,d as s}from"./app-U10FbIpD.js";const i={},d=s(`<h1 id="tcpdump抓包命令" tabindex="-1"><a class="header-anchor" href="#tcpdump抓包命令"><span>tcpdump抓包命令</span></a></h1><blockquote><p>简介：tcpdump是一个可以根据需求来抓取网络上传输的数据包的工具</p></blockquote><h1 id="常用的命令选项有" tabindex="-1"><a class="header-anchor" href="#常用的命令选项有"><span>常用的命令选项有：</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>-c：设定抓取的数量
-i：指定监听的网口
-w：将抓取的数据包保存到文件
-s：截取报文的内容，默认截取96字节，-s0表示截取全部
-r：读取数据包内容
-C 10：每10M保存一个包
-G 600：每10分钟保存一个包

过滤的参数规则：
host：指定主机名
net：指定网段
port：指定端口
portrange：指定端口范围

连接运算符
and：所有的条件都满足
or：只要满足一个条件
not：取反，也可以用！
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子"><span>例子：</span></a></h2><p>1、抓取主机172.0.0.1的eth0网口的8080、8081端口传输的数据包并保存文件</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>tcpdump <span class="token parameter variable">-i</span> eth0 <span class="token parameter variable">-s0</span> port <span class="token number">8080</span> or port <span class="token number">8081</span> <span class="token function">host</span> <span class="token number">172.0</span>.0.1 <span class="token parameter variable">-w</span> <span class="token number">1</span>.pcap
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、按 crtl+c 停止抓包，当前目录会生成一个1.pcap文件</p><p>3、简单查看数据包内容</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>tcpdump <span class="token parameter variable">-r</span> <span class="token number">1</span><span class="token punctuation">..</span>pcap
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注：一般对抓取的数据包用Wireshark工具进行分析</p>`,11),l=[d];function r(t,c){return a(),n("div",null,l)}const v=e(i,[["render",r],["__file","tcpdump抓包命令.html.vue"]]);export{v as default};
