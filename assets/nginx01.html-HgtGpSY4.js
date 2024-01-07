import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-fiyztsfI.js";const i="/assets/image-20211108175559426-16363653618291-PR9JM47i.png",l="/assets/image-20211108175735388-IR5K4Gd6.png",t={},p=e(`<h1 id="nginx初级篇" tabindex="-1"><a class="header-anchor" href="#nginx初级篇" aria-hidden="true">#</a> Nginx初级篇</h1><h1 id="_1、nginx-的优势" tabindex="-1"><a class="header-anchor" href="#_1、nginx-的优势" aria-hidden="true">#</a> 1、Nginx 的优势</h1><p>Nginx (engine x) 是一个高性能的HTTP(解决C10k的问题)和反向代理服务器，也是一个IMAP/POP3/SMTP服务器。反代图示</p><p>nginx的web优势</p><h2 id="_1、io多路复用" tabindex="-1"><a class="header-anchor" href="#_1、io多路复用" aria-hidden="true">#</a> 1、io多路复用</h2><p>理论方法</p><h3 id="第一种方法" tabindex="-1"><a class="header-anchor" href="#第一种方法" aria-hidden="true">#</a> 第一种方法：</h3><p>最传统的多进程并发模型 (每进来一个新的I/O流会分配一个新的进程管理）。</p><h3 id="第二种方法" tabindex="-1"><a class="header-anchor" href="#第二种方法" aria-hidden="true">#</a> 第二种方法：</h3><p>I/O多路复用 (单个线程，通过记录跟踪每个I/O流(sock)的状态，来同时管理多个I/O流 。)发明它的原因，是尽量多的提高服务器的吞吐能力。在同一个线程里面， 通过拨开关的方式，来同时传输多个I/O流</p><p>技术类型</p><h4 id="select" tabindex="-1"><a class="header-anchor" href="#select" aria-hidden="true">#</a> select</h4><pre><code>select是第一个实现 (1983 左右在BSD里面实现的)。 
select 被实现以后，很快就暴露出了很多问题。
• select 会修改传入的参数数组，这个对于一个需要调用很多次的函数，是非常不友好的。
• select 如果任何一个sock(I/O stream)出现了数据，select 仅仅会返回，但是并不会告诉你是那个sock上有数
据，于是你只能自己一个一个的找，10几个sock可能还好，要是几万的sock每次都找一遍...
• select 只能监视1024个链接。
• select 不是线程安全的，如果你把一个sock加入到select, 然后突然另外一个线程发现，这个sock不用，要收
回，这个select 不支持的，如果你丧心病狂的竟然关掉这个sock, select的标准行为是不可预测的
</code></pre><h4 id="poll" tabindex="-1"><a class="header-anchor" href="#poll" aria-hidden="true">#</a> poll</h4><pre><code>于是14年以后(1997年）一帮人又实现了poll, poll 修复了select的很多问题，比如
• poll 去掉了1024个链接的限制，于是要多少链接呢， 主人你开心就好。
• poll 从设计上来说，不再修改传入数组，不过这个要看你的平台了，所以行走江湖，还是小心为妙。
其实拖14年那么久也不是效率问题， 而是那个时代的硬件实在太弱，一台服务器处理1千多个链接简直就是神
一样的存在了，select很长段时间已经满足需求。 
但是poll仍然不是线程安全的， 这就意味着，不管服务器有多强悍，你也只能在一个线程里面处理一组I/O流。
你当然可以那多进程来配合了，不过然后你就有了多进程的各种问题。
</code></pre><h4 id="epoll" tabindex="-1"><a class="header-anchor" href="#epoll" aria-hidden="true">#</a> epoll</h4><pre><code>于是5年以后, 在2002, 大神 Davide Libenzi 实现了epoll. 
epoll 可以说是I/O 多路复用最新的一个实现，epoll 修复了poll 和select绝大部分问题, 比如：
• epoll 现在是线程安全的。 
• epoll 现在不仅告诉你sock组里面数据，还会告诉你具体哪个sock有数据，你不用自己去找了。
</code></pre><p>特点：</p><p>异步非阻塞</p><pre><code>$ pstree |grep nginx
|-+= 81666 root nginx: master process nginx
| |--- 82500 nobody nginx: worker process
| \\--- 82501 nobody nginx: worker process
1个master进程，2个work进程
每进来一个request，会有一个worker进程去处理。但不是全程的处理，处理到什么程度呢？处理到可能发生阻塞的地方，比如向上游（后端）服务器转发request，并等待请求返回。那么，这个处理的worker不会这么一直等着，他会在发送完请求后，注册一个事件：“如果upstream返回了，告诉我一声，我再接着干”。于是他就休息去了。这就是异步。此时，如果再有request 进来，他就可以很快再按这种方式处理。这就是非阻塞和IO多路复用。而一旦上游服务器返回了，就会触发这个事件，worker才会来接手，这个request才会接着往下走。这就是异步回调。
</code></pre><h2 id="_2、时分多路复用" tabindex="-1"><a class="header-anchor" href="#_2、时分多路复用" aria-hidden="true">#</a> 2、时分多路复用</h2><p>CPU时钟/中断设计</p><h2 id="_3、频分多路复用" tabindex="-1"><a class="header-anchor" href="#_3、频分多路复用" aria-hidden="true">#</a> 3、频分多路复用</h2><p>ADSL</p><h1 id="_2、http协议详解" tabindex="-1"><a class="header-anchor" href="#_2、http协议详解" aria-hidden="true">#</a> 2、HTTP协议详解</h1><h2 id="_1、http协议概述" tabindex="-1"><a class="header-anchor" href="#_1、http协议概述" aria-hidden="true">#</a> 1、http协议概述</h2><p>HTTP--Hyper Text Transfer Protocol，超文本传输协议，是一种建立在TCP上的无状态连接，整个基本的工作流程是客户端发送一个HTTP请求，说明客户端想要访问的资源和请求的动作，服务端收到请求之后，服务端开始处理请求，并根据请求做出相应的动作访问服务器资源，最后通过发送HTTP响应把结果返回给客户端。其中一个请求的开始到一个响应的结束称为事务，当一个事物结束后还会在服务端添加一条日志条目。</p><h2 id="_2、uri" tabindex="-1"><a class="header-anchor" href="#_2、uri" aria-hidden="true">#</a> 2、URI</h2><p>统一资源标识符(Uniform Resource Identifier,或URI) HTTP 请求的内容通称为&quot;资源&quot;。”资源“这一概念非常宽泛，它可以是你能够想到的格式。每个资源都由一个 (URI) 来进行标识。URL即统一资源定位符，它是 URI 的一种。一份文档，一张图片，或所有其他。URI包含URL,URN</p><h3 id="_1-url" tabindex="-1"><a class="header-anchor" href="#_1-url" aria-hidden="true">#</a> ① URL</h3><p>URL 用于定位 全称叫做:统一资源定位符(URL,英语Uniform Resource Locator的缩写)也被称为网页地址</p><p>示例</p><pre><code>https://developer.mozilla.org
https://developer.mozilla.org/en-US/docs/Learn/
https://developer.mozilla.org/en-US/search?q=URL在浏览器的地址栏中输入上述任一地址，浏览器就会加载相应的网页（资源）。
URL 由多个必须或可选的组件构成。下面给出了一个复杂的 URL：
http://www.example.com:80/path/to/myfile.html?key1=value1&amp;key2=value2#SomewhereInTheDocument
</code></pre><h3 id="_2-urn" tabindex="-1"><a class="header-anchor" href="#_2-urn" aria-hidden="true">#</a> ② URN</h3><p>用于区分 URN仅用于命名，而不指定地址。用于标识唯一书目的ISBN系统是一个典型的URN使用范例。例如，ISBN 0486275574(urn:isbn:0-486-27557-4)无二义性地标识出莎士比亚的戏剧《罗密欧与朱丽叶》的某一特定版本。 URN 是另一种形式的 URI，它通过特定命名空间中的唯一名称来标识资源。 urn:isbn:9780141036144 urn:ietf:rfc:7230 上面两个 URN 标识了下面的资源： • 乔治·奥威尔所著的《1984》 • IETF规范7230，超文本传输协议 (HTTP/1.1)：Message Syntax and Routing.</p><h3 id="_3-三者关系图" tabindex="-1"><a class="header-anchor" href="#_3-三者关系图" aria-hidden="true">#</a> ③ 三者关系图</h3><p>​</p><h3 id="_4-统一资源标识符的语法-url" tabindex="-1"><a class="header-anchor" href="#_4-统一资源标识符的语法-url" aria-hidden="true">#</a> ④ 统一资源标识符的语法（URL）</h3><p>URL分为6个部分，分别是协议、主机、端口、路径、查询、片段。</p><p>协议</p><pre><code> &quot;http://&quot; 告诉浏览器使用何种协议。对于大部分 Web 资源，通常使用 HTTP 协议或其安全版本，HTTPS 协议。另外，浏览器也知道如何处理其他协议。例如， “mailto:” 协议指示浏览器打开邮件客户端；“ftp:”协议指示浏览器处理文件传输。
</code></pre><p>主机</p><pre><code>www.example.com 既是一个域名，也代表管理该域名的机构。它指示了需要向网络上的哪一台主机发起请求。当然，也可以直接向主机的 IP address 地址发起请求。但直接使用 IP 地址的场景并不常见。
</code></pre><p>端口</p><p>:80 是端口。它表示用于访问 Web 服务器上资源的技术“门”。如果访问的该 Web 服务器使用HTTP协议的标准端口（HTTP为80，HTTPS为443）授予对其资源的访问权限，则通常省略此部分。否则修改了端口的话，端口就是 URI 必须的部分。在访问的时候必须加上端口。</p><p>路径</p><p>/path/to/myfile.html 是 Web 服务器上资源的路径。在 Web 的早期，类似这样的路径表示 Web 服务器上的物理文件位置。现在，它主要是由没有任何物理实体的 Web 服务器抽象处理而成的。</p><p>查询</p><p>?key1=value1&amp;key2=value2 是提供给 Web 服务器的额外参数。这些参数是用 &amp; 符号分隔的键/值对列表。Web 服务器可以在将资源返回给用户之前使用这些参数来执行额外的操作。每个 Web 服务器都有自己的参数规则，想知道特定 Web 服务器如何处理参数的唯一可靠方法是询问该 Web 服务器所有者。</p><p>片段</p><pre><code>#SomewhereInTheDocument 是资源本身的某一部分的一个锚点。锚点代表资源内的一种“书签”，它给予浏览器显示位于该“加书签”点的内容的指示。 例如，在HTML文档上，浏览器将滚动到定义锚点的那个点上；在视频或音频文档上，浏览器将转到锚点代表的那个时间。值得注意的是 # 号后面的部分，也称为片段标识符，永远不会与请求一起发送到服务器。
</code></pre><h2 id="_3、http协议概述" tabindex="-1"><a class="header-anchor" href="#_3、http协议概述" aria-hidden="true">#</a> 3、HTTP协议概述</h2><p>图示</p><pre><code>  HTTP是一种能够获取如 HTML 这样的网络资源的通讯协议。它是 Web 上数据交换的基础，是一种 client-server 协议，也就是说请求通常是由像浏览器这样的接受方发起的。一个完整的web文档是由不同的子文档重新组建而成的，像是文本、布局描述、图片、视频、脚本等等。

 HTTP被设计于上20世纪90年代初期，是一种可扩展性的协议。它是应用层的协议，虽然理论上它可以通过任何可靠的传输协议来发送，但是它还是通过TCP，或者是TLS－加密的TCP连接来发送。因为它很好的扩展性，时至今日它不仅被用来传输超文本文档，还用来传输图片、视频或者向服务器发送如HTML表单这样的信息。HTTP还可以根据网页需求，来获取部分web文档的内容来更新网页。
</code></pre><p>requests</p><pre><code>客户端和服务端通过交换各自的消息来进行交互。通常由像浏览器这样的客户端发出的消息叫做 requests，那么被服务端回应的消息就叫做 responses。
</code></pre><p>组件系统</p><pre><code>  HTTP是一个client-server协议：请求通过一个实体被发出，实体也就是用户代理。大多数情况下，这个用户代理都是指浏览器，当然它也可能是任何东西，比如一个爬取网页来生成和维护搜索引擎索引的机器。每一个发送到服务器的请求，都会被服务器处理并且返回一个消息，也就是response。在client与server之间，还有许许多多的被称为proxies的实体，他们的作用与表现各不相同，比如有些是网关，还有些是caches等。
</code></pre><p>① 客户端：user-agent</p><pre><code>严格意义来说，user-agent就是任何能够为用户发起行为的工具。但实际上，这个角色通常都是由浏览器来扮演。对于发起请求来说，浏览器总是作为发起一个请求的实体。
要渲染出一个网页，浏览器首先要发送第一个请求来获取这个页面的HTML文档，再解析它并根据文档中的资源信息发送其他的请求来获取脚本信息，或者CSS来进行页面布局渲染，还有一些其它的页面资源（如图片和视频等）。然后，它把这些资源结合到一起，展现出来一个完整的文档，也就是网页。打开一个网页后，浏览器还可以根据脚本内容来获取更多的资源来更新网页。
 一个网页就是一个超文本文档，也就是说有一部分显示的文本可能是链接，启动它（通常是鼠标的点击）就可以获取一个新的网页。网页使得用户可以控制它的user-agent来导航Web。浏览器来负责翻译HTTP请求的命令，并翻译HTTP的返回消息让用户能明白返回消息的内容。
</code></pre><p>② Web服务端 在上述通信过程的另一端，就是一个Web Server来服务并提供客户端请求的文档。Server只是虚拟意义上：它可以是许多共同分担负载（负载平衡）的一组服务器组成的计算机群，也可以是一种复杂的软件，通过向其他计算机发起请求来获取部分或全部资源的软件。</p><p>③ Proxies 在浏览器和服务器之间，有许多计算机和其他设备转发了HTTP的消息。因为Web栈层次结构的原因，它们大多数都出现在传输层、网络层和物理层上，对于HTTP的应用层来说就是透明的（虽然它们可能会对应用层的性能有重要影响）。而还有一部分表现在应用层上的，就叫做proxies了。Proxies既可以表现得透明，又可以不透明（看请求是否通过它们），主要表现在这几个功能上。</p><p>报文</p><p>请求：</p><p>eg：</p><p>元素： • 一个HTTP的method，经常是由一个动词像GET, POST 或者一个名词像OPTIONS，HEAD来定义客户端的动 作行为的。通常客户端的操作都是获取资源（用GET方法）或者发送一个HTML form表单的值（用POST方法）， 虽然在一些情况下也会有其他的操作。 • 要获取的资源的路径，通常是上下文中就很明显的元素资源的URL，它没有protocol （http://），domain（developer.mozilla.org），或是TCP的port（HTTP是80端口）。 • HTTP协议的版本号。 • 为服务端表达其他信息的可选择性的headers。</p><p>回应：</p><p>eg：</p><p>元素： • HTTP的版本号。 • 一个状态码（status code），来告知对应的请求发送成功或失败，以及失败的原因。 • 一个状态信息，这个信息是非权威的状态码描述信息，也就是说可以由服务端自行设定的。 • HTTP headers，与请求的很像。 • 可选的，但是比在请求报文中更加常见地包含获取资源的body。</p><p>三、HTTP headers</p><p>实验分析http报头信息</p><p>1、下载一个源码包</p><p>wget -d http://nginx.org/download/nginx-1.12.1.tar.gz</p><p>2、分析debug信息</p><pre><code>DEBUG output created by Wget 1.14 on linux-gnu.
---request begin---                                            请求开始
GET /download/nginx-1.12.1.tar.gz HTTP/1.1       动作下载 页面地址 HTTP版本
User-Agent: Wget/1.14 (linux-gnu)                       代理程序：wget
Accept: */*                                                     接收的类型：任何类型
Host: nginx.org                                                目标主机：nginxorg
Connection: Keep-Alive                                      链接类型：启动长连接
---request end---                                          请求结束
HTTP request sent, awaiting response...                    发送请求中

---response begin---                                            响应开始
HTTP/1.1 200 OK                                             协议版本 状态码 结果
Server: nginx/1.13.3                                           服务器版本
Date: Fri, 06 Oct 2017 09:05:15 GMT                     相应时间
Content-Type: application/octet-stream                   接收应用类型：字节流（软件类）
Content-Length: 981093                                      文档大小
Last-Modified: Tue, 11 Jul 2017 15:45:09 GMT        资源最后修改的时间（stat文件即可查看）
Connection: keep-alive                                          长连接开启
Keep-Alive: timeout=15                                          长连接有效期
ETag: &quot;5964f285-ef865&quot;                                         校验值
Accept-Ranges: bytes                                            接收范围：字节的范围
---response end---
200 OK
Registered socket 3 for persistent reuse.
Saving to: ‘nginx-1.12.1.tar.gz’
</code></pre><p>3、相关资料</p><pre><code>HTTP/1.1          HTTP协议版本1.1；
200 OK             响应的状态码是200，即正常返回数据，不同场景会有其它如2xx、3xx、4xx、5xx；
Server               服务器软件是Nginx，版本是1.13.3；
Date                 从服务器获取该资源时间，时间差8小时，时区不同；
Content-Type    响应的数据类型，这里的资源是文件，则是application/octet-stream了，其它还有图片，
                        视频、json、html、xml、css等；
Content-Length  response body的长度，也就是源码包的字节大小；
Last-Modified     即下载的文件在服务器端最后修改的时间；
Connection        keep-alive Nginx开启了TCP长连接；
ETag                 ETag HTTP响应头是资源的特定版本的标识符。这可以让缓存更高效，并节省带宽，
                        因为如果内容没有改变，Web服务器不需要发送完整的响应；
Accept-Ranges  响应头 Accept-Range 标识自身支持范围请求，字段值用于定义范围请求的单位。
206 Partial Content 
Accept-Ranges   告诉我们服务器是否支持指定范围请求及哪种类型的分段请求，这里是byte
Content-Range   告诉我们在整个返回体中本部分的字节位置，我们请求的是图片的前100字节
</code></pre><h1 id="_3、nginx-部署-yum" tabindex="-1"><a class="header-anchor" href="#_3、nginx-部署-yum" aria-hidden="true">#</a> 3、Nginx 部署 Yum</h1><h2 id="官网链接" tabindex="-1"><a class="header-anchor" href="#官网链接" aria-hidden="true">#</a> 官网链接</h2><p>https://nginx.org</p><h3 id="nginx-版本类型" tabindex="-1"><a class="header-anchor" href="#nginx-版本类型" aria-hidden="true">#</a> nginx 版本类型</h3><ul><li><p>Mainline Version：主线版，即开发版</p></li><li><p>♥Stable Version：最新稳定版，生产环境使用</p></li><li><p>Legacy version：遗留老版本的稳定版</p></li></ul><p>配置yum源</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nginx.org -<span class="token operator">&gt;</span> documents -<span class="token operator">&gt;</span> <span class="token function">install</span> -<span class="token operator">&gt;</span> linux -<span class="token operator">&gt;</span> RHEL


Install the prerequisites:

<span class="token function">sudo</span> yum <span class="token function">install</span> yum-utils
To <span class="token builtin class-name">set</span> up the yum repository, create the <span class="token function">file</span> named /etc/yum.repos.d/nginx.repo with the following contents:

<span class="token punctuation">[</span>nginx-stable<span class="token punctuation">]</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span>nginx stable repo
<span class="token assign-left variable">baseurl</span><span class="token operator">=</span>http://nginx.org/packages/centos/<span class="token variable">$releasever</span>/<span class="token variable">$basearch</span>/
<span class="token assign-left variable">gpgcheck</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">enabled</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">gpgkey</span><span class="token operator">=</span>https://nginx.org/keys/nginx_signing.key
<span class="token assign-left variable">module_hotfixes</span><span class="token operator">=</span>true

<span class="token punctuation">[</span>nginx-mainline<span class="token punctuation">]</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span>nginx mainline repo
<span class="token assign-left variable">baseurl</span><span class="token operator">=</span>http://nginx.org/packages/mainline/centos/<span class="token variable">$releasever</span>/<span class="token variable">$basearch</span>/
<span class="token assign-left variable">gpgcheck</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">enabled</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">gpgkey</span><span class="token operator">=</span>https://nginx.org/keys/nginx_signing.key
<span class="token assign-left variable">module_hotfixes</span><span class="token operator">=</span>true
By default, the repository <span class="token keyword">for</span> stable nginx packages is used. If you would like to use mainline nginx packages, run the following command:

<span class="token function">sudo</span> yum-config-manager <span class="token parameter variable">--enable</span> nginx-mainline
To <span class="token function">install</span> nginx, run the following command:

<span class="token function">sudo</span> yum <span class="token function">install</span> nginx
When prompted to accept the GPG key, verify that the fingerprint matches 573B FD6B 3D8F BC64 <span class="token number">1079</span> A6AB ABF5 BD82 7BD9 BF62, and <span class="token keyword">if</span> so, accept it.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_4、nginx-配置文件" tabindex="-1"><a class="header-anchor" href="#_4、nginx-配置文件" aria-hidden="true">#</a> 4、Nginx 配置文件</h1><h2 id="全部文件" tabindex="-1"><a class="header-anchor" href="#全部文件" aria-hidden="true">#</a> 全部文件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nginx-server ~<span class="token punctuation">]</span><span class="token comment"># rpm -ql nginx</span>
/etc/logrotate.d/nginx <span class="token comment"># 日志轮转</span>
/etc/nginx <span class="token comment"># 主配置文件夹</span>
/etc/nginx/conf.d <span class="token comment"># 子配置文件</span>
/etc/nginx/conf.d/default.conf <span class="token comment"># 默认子配置，默认网站</span>
/etc/nginx/fastcgi_params <span class="token comment"># 动态网站模块 -python，php所需要的变量</span>
/etc/nginx/mime.types <span class="token comment"># 文件程序关联 </span>
/etc/nginx/modules	<span class="token comment"># nginx模块</span>
/etc/nginx/nginx.conf	<span class="token comment"># 主配置</span>
/etc/nginx/scgi_params	<span class="token comment"># 动态网站模块</span>
/etc/nginx/uwsgi_params <span class="token comment"># 动态网站模块 python相关</span>
/usr/lib/systemd/system/nginx-debug.service	<span class="token comment"># 服务debug脚本</span>
/usr/lib/systemd/system/nginx.service	<span class="token comment"># 服务脚本</span>
/usr/lib64/nginx
/usr/lib64/nginx/modules
/usr/libexec/initscripts/legacy-actions/nginx <span class="token comment"># 启动脚本</span>
/usr/libexec/initscripts/legacy-actions/nginx/check-reload<span class="token comment"># 启动脚本</span>
/usr/libexec/initscripts/legacy-actions/nginx/upgrade<span class="token comment"># 启动脚本</span>
/usr/sbin/nginx <span class="token comment"># 主程序</span>
/usr/sbin/nginx-debug <span class="token comment"># 调试nginx</span>
/usr/share/doc/nginx-1.20.1 <span class="token comment"># 文档</span>
/usr/share/doc/nginx-1.20.1/COPYRIGHT <span class="token comment"># 文档</span>
/usr/share/man/man8/nginx.8.gz <span class="token comment"># 文档</span>
/usr/share/nginx <span class="token comment"># 文档</span>
/usr/share/nginx/html <span class="token comment"># 文档</span>
/usr/share/nginx/html/50x.html <span class="token comment"># 文档</span>
/usr/share/nginx/html/index.html <span class="token comment"># 文档</span>
/var/cache/nginx <span class="token comment"># 缓存</span>
/var/log/nginx <span class="token comment"># 日志</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_5、nginx编译参数" tabindex="-1"><a class="header-anchor" href="#_5、nginx编译参数" aria-hidden="true">#</a> 5、Nginx编译参数</h1><p>yum参数</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nginx-server ~<span class="token punctuation">]</span><span class="token comment"># nginx -V</span>
nginx version: nginx/1.20.1
built by gcc <span class="token number">4.8</span>.5 <span class="token number">20150623</span> <span class="token punctuation">(</span>Red Hat <span class="token number">4.8</span>.5-44<span class="token punctuation">)</span> <span class="token punctuation">(</span>GCC<span class="token punctuation">)</span> 
built with OpenSSL <span class="token number">1.0</span>.2k-fips  <span class="token number">26</span> Jan <span class="token number">2017</span>
TLS SNI support enabled
configure arguments: <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/etc/nginx --sbin-path<span class="token operator">=</span>/usr/sbin/nginx --modules-path<span class="token operator">=</span>/usr/lib64/nginx/modules --conf-path<span class="token operator">=</span>/etc/nginx/nginx.conf --error-log-path<span class="token operator">=</span>/var/log/nginx/error.log --http-log-path<span class="token operator">=</span>/var/log/nginx/access.log --pid-path<span class="token operator">=</span>/var/run/nginx.pid --lock-path<span class="token operator">=</span>/var/run/nginx.lock --http-client-body-temp-path<span class="token operator">=</span>/var/cache/nginx/client_temp --http-proxy-temp-path<span class="token operator">=</span>/var/cache/nginx/proxy_temp --http-fastcgi-temp-path<span class="token operator">=</span>/var/cache/nginx/fastcgi_temp --http-uwsgi-temp-path<span class="token operator">=</span>/var/cache/nginx/uwsgi_temp --http-scgi-temp-path<span class="token operator">=</span>/var/cache/nginx/scgi_temp <span class="token parameter variable">--user</span><span class="token operator">=</span>nginx <span class="token parameter variable">--group</span><span class="token operator">=</span>nginx --with-compat --with-file-aio --with-threads --with-http_addition_module --with-http_auth_request_module --with-http_dav_module --with-http_flv_module --with-http_gunzip_module --with-http_gzip_static_module --with-http_mp4_module --with-http_random_index_module --with-http_realip_module --with-http_secure_link_module --with-http_slice_module --with-http_ssl_module --with-http_stub_status_module --with-http_sub_module --with-http_v2_module --with-mail --with-mail_ssl_module --with-stream --with-stream_realip_module --with-stream_ssl_module --with-stream_ssl_preread_module --with-cc-opt<span class="token operator">=</span><span class="token string">&#39;-O2 -g -pipe -Wall -Wp,-D_FORTIFY_SOURCE=2 -fexceptions -fstack-protector-strong --param=ssp-buffer-size=4 -grecord-gcc-switches -m64 -mtune=generic -fPIC&#39;</span> --with-ld-opt<span class="token operator">=</span><span class="token string">&#39;-Wl,-z,relro -Wl,-z,now -pie&#39;</span>


configure arguments: <span class="token comment"># 编译参数./configure --help 查询帮助</span>
<span class="token parameter variable">--prefix</span><span class="token operator">=</span>/etc/nginx <span class="token comment"># 安装路径</span>
--sbin-path<span class="token operator">=</span>/usr/sbin/nginx <span class="token comment"># 执行程序</span>
--modules-path<span class="token operator">=</span>/usr/lib64/nginx/modules <span class="token comment"># 模块位置</span>
--conf-path<span class="token operator">=</span>/etc/nginx/nginx.conf 著配置文件
--error-log-path<span class="token operator">=</span>/var/log/nginx/error.log  错误日志
--http-log-path<span class="token operator">=</span>/var/log/nginx/access.log 访问日志
--pid-path<span class="token operator">=</span>/var/run/nginx.pid  pid
--lock-path<span class="token operator">=</span>/var/run/nginx.lock  锁文件
--http-client-body-temp-path<span class="token operator">=</span>/var/cache/nginx/client_temp 用户缓存位置 
--http-proxy-temp-path<span class="token operator">=</span>/var/cache/nginx/proxy_temp 代理缓存
--http-fastcgi-temp-path<span class="token operator">=</span>/var/cache/nginx/fastcgi_temp  中间件缓存
--http-uwsgi-temp-path<span class="token operator">=</span>/var/cache/nginx/uwsgi_temp 中间件缓存
--http-scgi-temp-path<span class="token operator">=</span>/var/cache/nginx/scgi_temp 中间件缓存

<span class="token parameter variable">--user</span><span class="token operator">=</span>nginx 用户
<span class="token parameter variable">--group</span><span class="token operator">=</span>nginx 组

--with-compat 启用动态模块支持

--with-file-aio 使用aio会大大提高性能，epoll模型等等 
--with-threads 多线程
--with-http_addition_module <span class="token comment"># css js 响应追加 响应之前或之后追加文本内容</span>
--with-http_auth_request_module 认证模块
--with-http_dav_module 增加上传put，delete，mkcol，创建集合，copy，和move方法，默认情况下是关闭
--with-http_flv_module 增加mp4 flv视频支持模块
--with-http_gunzip_module 压缩模块
--with-http_gzip_static_module 压缩
--with-http_mp4_module 多媒体模块 mp4
--with-http_random_index_module 随机主页模块
--with-http_realip_module 获取真实ip
--with-http_secure_link_module 安全链接 nginx安全下载模块
--with-http_slice_module nginx中文文档
--with-http_ssl_module ssl加密
--with-http_stub_status_module 访问状态模块 
--with-http_sub_module 替换网站响应内容
--with-http_v2_module httpv2
--with-mail 邮件
--with-mail_ssl_module 邮件加密
--with-stream 负载均衡
--with-stream_realip_module 负载均衡
--with-stream_ssl_module 负载均衡
--with-stream_ssl_preread_module 负载均衡
--with-cc-opt<span class="token operator">=</span><span class="token string">&#39;-O2 -g -pipe -Wall -Wp,-D_FORTIFY_SOURCE=2 -fexceptions -fstack-protector-strong --param=ssp-buffer-size=4 -grecord-gcc-switches -m64 -mtune=generic -fPIC&#39;</span> cpu优化参数
--with-ld-opt<span class="token operator">=</span><span class="token string">&#39;-Wl,-z,relro -Wl,-z,now -pie&#39;</span> 其他参数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_6、nginx基本配置" tabindex="-1"><a class="header-anchor" href="#_6、nginx基本配置" aria-hidden="true">#</a> 6、Nginx基本配置</h1><h2 id="观察主配置" tabindex="-1"><a class="header-anchor" href="#观察主配置" aria-hidden="true">#</a> 观察主配置</h2><h3 id="_1、全局、核心块" tabindex="-1"><a class="header-anchor" href="#_1、全局、核心块" aria-hidden="true">#</a> 1、全局、核心块</h3><p>配置影响nginx全局的指令，一般有运行nginx服务器的用户组，nginx进程pid存放路径日志存放路径，配置文件引入，允许生成worker process数等</p><h3 id="_2、events块" tabindex="-1"><a class="header-anchor" href="#_2、events块" aria-hidden="true">#</a> 2、events块</h3><p>配置影响服务器与用户的网络连接，有每天个进程的最大连接数，选取哪种事务驱动模型处理连接请求，是否允许同时接受多个网路连接，开启多个网络连接序列化</p><h3 id="_3、http块" tabindex="-1"><a class="header-anchor" href="#_3、http块" aria-hidden="true">#</a> 3、http块</h3><p>可以嵌套多个server，配置代理、缓存，日志定义等大多数动能和第三方模块的配置。如文件引入，mine-type定义，日志自定义，是否使用sendfile传输文件，连接超时时间，单连接请求数等</p><h3 id="_4、server块" tabindex="-1"><a class="header-anchor" href="#_4、server块" aria-hidden="true">#</a> 4、server块</h3><p>配置虚拟主机的相关参数，一个http中有多个server</p><h3 id="_5、location块" tabindex="-1"><a class="header-anchor" href="#_5、location块" aria-hidden="true">#</a> 5、location块</h3><p>配置请求的路由，以及各种页面的处理情况</p><h2 id="观察默认虚拟主机配置文件" tabindex="-1"><a class="header-anchor" href="#观察默认虚拟主机配置文件" aria-hidden="true">#</a> 观察默认虚拟主机配置文件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nginx-server ~<span class="token punctuation">]</span><span class="token comment"># cat /etc/nginx/conf.d/default.conf </span>
server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    server_name  localhost<span class="token punctuation">;</span>

    <span class="token comment">#access_log  /var/log/nginx/host.access.log  main; # 日志</span>

    location / <span class="token punctuation">{</span>
        root   /usr/share/nginx/html<span class="token punctuation">;</span> 网页目录
        index  index.html index.htm<span class="token punctuation">;</span> 网站主页的名字
    <span class="token punctuation">}</span>

    <span class="token comment">#error_page  404              /404.html;	# 404页面</span>

    <span class="token comment"># redirect server error pages to the static page /50x.html</span>
    <span class="token comment">#</span>
    error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span> <span class="token comment"># 500错误</span>
    location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span> <span class="token comment"># 50*页面</span>
        root   /usr/share/nginx/html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token comment"># 动态页面</span>
    <span class="token comment"># proxy the PHP scripts to Apache listening on 127.0.0.1:80</span>
    <span class="token comment">#</span>
    <span class="token comment">#location ~ \\.php$ {</span>
    <span class="token comment">#    proxy_pass   http://127.0.0.1;</span>
    <span class="token comment">#}</span>

    <span class="token comment"># pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000</span>
    <span class="token comment">#</span>
    <span class="token comment">#location ~ \\.php$ {</span>
    <span class="token comment">#    root           html;</span>
    <span class="token comment">#    fastcgi_pass   127.0.0.1:9000;</span>
    <span class="token comment">#    fastcgi_index  index.php;</span>
    <span class="token comment">#    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;</span>
    <span class="token comment">#    include        fastcgi_params;</span>
    <span class="token comment">#}</span>

    <span class="token comment"># deny access to .htaccess files, if Apache&#39;s document root</span>
    <span class="token comment"># concurs with nginx&#39;s one</span>
    <span class="token comment">#</span>
    <span class="token comment">#location ~ /\\.ht {</span>
    <span class="token comment">#    deny  all;</span>
    <span class="token comment">#}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="观察一个新的虚拟主机" tabindex="-1"><a class="header-anchor" href="#观察一个新的虚拟主机" aria-hidden="true">#</a> 观察一个新的虚拟主机</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nginx-server ~<span class="token punctuation">]</span><span class="token comment"># cat /etc/nginx/conf.d/net_map.conf </span>
server<span class="token punctuation">{</span>
  server_name <span class="token number">127.0</span>.0.1<span class="token punctuation">;</span>
  listen      <span class="token number">81</span><span class="token punctuation">;</span>
  
  location / <span class="token punctuation">{</span>
    root /www/wwwroot/net_map<span class="token punctuation">;</span>
    index index.html<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>


<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_7、nginx日志log" tabindex="-1"><a class="header-anchor" href="#_7、nginx日志log" aria-hidden="true">#</a> 7、Nginx日志Log</h1><h2 id="日志设置" tabindex="-1"><a class="header-anchor" href="#日志设置" aria-hidden="true">#</a> 日志设置</h2><h3 id="日志模块" tabindex="-1"><a class="header-anchor" href="#日志模块" aria-hidden="true">#</a> 日志模块</h3><h4 id="官方文档" tabindex="-1"><a class="header-anchor" href="#官方文档" aria-hidden="true">#</a> 官方文档</h4><p>nginx.org/us/docs/http/ngx_http_log_module</p><h4 id="日志模块名称" tabindex="-1"><a class="header-anchor" href="#日志模块名称" aria-hidden="true">#</a> 日志模块名称</h4><p>ngx_http_log_module</p><h3 id="相关指令" tabindex="-1"><a class="header-anchor" href="#相关指令" aria-hidden="true">#</a> 相关指令</h3><h4 id="log-format" tabindex="-1"><a class="header-anchor" href="#log-format" aria-hidden="true">#</a> log_format</h4><p>日志格式</p><p>nginx有非常灵活的日志记录模式，每个级别的配置跨行业有地里的访问日志，</p><p>语法</p><p>Syntax： log_format name [escape=default|json] string # name是名称 string是定义</p><h3 id="日志的格式和命令" tabindex="-1"><a class="header-anchor" href="#日志的格式和命令" aria-hidden="true">#</a> 日志的格式和命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>格式

默认值

log_format main <span class="token string">&#39;$remote_address - $remote_user [$time_local] &quot;$request&quot; &#39;</span> ‘<span class="token variable">$status</span> <span class="token variable">$body_type_sent</span> <span class="token string">&quot;<span class="token variable">$http_referer</span>&quot;</span><span class="token string">&#39;&#39;</span><span class="token variable">$http_user_agent</span> <span class="token variable">$http_x_forwarded_for</span>&quot;&#39;<span class="token punctuation">;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="访问日志和错误日志" tabindex="-1"><a class="header-anchor" href="#访问日志和错误日志" aria-hidden="true">#</a> 访问日志和错误日志</h3><h4 id="access-log" tabindex="-1"><a class="header-anchor" href="#access-log" aria-hidden="true">#</a> access_log</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token variable">$remote_address</span> 远程地址
<span class="token variable">$remote_user</span> 远程用户（得验证）
<span class="token variable">$time_local</span> 本地时间
<span class="token variable">$request</span> 请求的方式 GET、POST 路由地址 HTTP版本 
<span class="token variable">$status</span> 状态代码200
<span class="token variable">$body_type_sent</span> 发送文件大小
<span class="token variable">$http_referer</span> 记录从哪个页面链接访问过来 
<span class="token variable">$http_user_agent</span> UA
<span class="token variable">$http_x_forwarded_for</span> 代理ip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="error-log" tabindex="-1"><a class="header-anchor" href="#error-log" aria-hidden="true">#</a> error_log</h4><p>var/log/nginx/error.log-20211108</p><p>404 Not found</p><p>403 forbidden</p><h3 id="日志缓存" tabindex="-1"><a class="header-anchor" href="#日志缓存" aria-hidden="true">#</a> 日志缓存</h3><p>open_log_file_cache</p><p>默认是关闭的。。占用内存，减少磁盘占有量</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>syntac: open_log_file_cache <span class="token assign-left variable">max</span><span class="token operator">=</span><span class="token number">1000</span> <span class="token assign-left variable">inactive</span><span class="token operator">=</span>20s <span class="token assign-left variable">min_uses</span><span class="token operator">=</span><span class="token number">3</span> <span class="token assign-left variable">valid</span><span class="token operator">=</span>1m

<span class="token assign-left variable">max</span><span class="token operator">=</span><span class="token number">1000</span> 是指文件日志的FD，最大缓存是1000次，超了怎么办

<span class="token assign-left variable">min_user</span><span class="token operator">=</span><span class="token number">3</span> <span class="token number">20</span>秒小于三次访问FD，就给清理掉，结合inactive 20s

valid 1m 检查周期是1分钟

总结：缓存最多为1分钟，到了极限，每分钟开始清除掉，20秒内小于3次FD
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="日志轮转、切割" tabindex="-1"><a class="header-anchor" href="#日志轮转、切割" aria-hidden="true">#</a> 日志轮转、切割</h2><p>[root@nginx-server ~]# rpm -ql nginx | grep log /etc/logrotate.d/nginx /var/log/nginx</p><p>default:vim /etc/logrotate.d/nginx</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/var/log/nginx/*.log <span class="token punctuation">{</span>
        daily <span class="token comment"># 每天备份</span>
        missingok <span class="token comment"># 丢失不提示</span>
        rotate <span class="token number">52</span> <span class="token comment"># 保留52天的</span>
        compress <span class="token comment"># 压缩</span>
        delaycompress <span class="token comment"># 延迟压缩</span>
        notifempty <span class="token comment"># 空文件不轮转</span>
        create <span class="token number">640</span> nginx adm  <span class="token comment"># 创建 640 权限 nginx用户 </span>
        sharedscripts
        postrotate <span class="token comment"># 重启nginx</span>
                <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> /var/run/nginx.pid <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
                        <span class="token function">kill</span> <span class="token parameter variable">-USR1</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> /var/run/nginx.pid<span class="token variable">\`</span></span>
                <span class="token keyword">fi</span>
        endscript
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="日志分析" tabindex="-1"><a class="header-anchor" href="#日志分析" aria-hidden="true">#</a> 日志分析</h2><p>常用变量</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token variable">$remote_addr</span>, 远程地址： 记录客户端IP地址
<span class="token variable">$remote_user</span>，远程用户：记录客户端用户名称
<span class="token punctuation">[</span><span class="token variable">$time_local</span><span class="token punctuation">]</span>，本地时间：服务器自身时间
<span class="token variable">$request</span>， 请求：记录请求的URL和HTTP协议
<span class="token variable">$status</span> 状态：记录请求状态
<span class="token variable">$body_bytes_sent</span> 发送给客户端的字节数，不包括响应头的大小
<span class="token variable">$http_referer</span> 记录从哪个页面链接访问过来的  （超链接）（referer引用）
<span class="token variable">$http_user_agent</span> ，记录客户端浏览器相关信息
<span class="token variable">$http_x_forwarded_for</span>，代理IP
<span class="token variable">$request_length</span> 请求的长度（包括请求行，请求头和请求正文）
<span class="token variable">$time_iso8601</span> ISO8601标准格式下的本地时间。
<span class="token variable">$bytes_sent</span> 发送给客户端的总字节数    （可在主配置文件中，增加此项观c）
<span class="token variable">$msec</span> 日志写入时间。单位为秒，精度是毫秒。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\\1. 统计2017年9月5日 PV量（网页页面访问量）</p><p>8点-9点间</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>grep &#39;05/Sep/2017:08&#39; sz.mobiletrain.org.log |wc -l 
awk &#39;$4&gt;=&quot;[05/Sep/2017:08:00:00&quot; &amp;&amp; $4&lt;=&quot;[05/Sep/2017:09:00:00&quot; {print $0}&#39; sz.mobiletrain.org.log | wc -l
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\\2. 统计2017年9月5日 一天内访问最多的10个IP（ip top10）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>grep &#39;05/Sep/2017&#39; cd.mobiletrain.org.log | awk &#39;{ ips[$1]++ } END{for(i in ips){print i,ips[i]} } &#39;| sort -k2 -rn | head -n10 （end小写不显示）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\\3. 统计2017年9月5日 访问大于100次的IP</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>grep &#39;05/Sep/2017&#39; cd.mobiletrain.org.log | awk &#39;{ ips[$1]++ } END{for(i in ips){ if(ips[i]&gt;100) {print i,ips[i]}} } &#39;| sort -k2 -rn | head -n10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\\4. 统计2017年9月5日 访问最多的10个页面（$request top 10）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>grep &#39;05/Sep/2017&#39; cd.mobiletrain.org.log |awk &#39;{urls[$7]++} END{for(i in urls){print urls[i],i}}&#39; |sort -k1 -rn |head -n10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\\5. 统计2017年9月5日 每个URL访问内容总大小（$body_bytes_sent）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>grep &#39;05/Sep/2017&#39; sz.mobiletrain.org.log |awk &#39;{ urls[$7]++; size[$7]+=$10}END{for(i in urls){print urls[i],size[i],i}}&#39;|sort -k1 -rn | head -n10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\\6. 统计2017年9月5日 每个IP访问状态码数量（$status）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>grep &#39;05/Sep/2017&#39; cd.mobiletrain.org.log | awk &#39;{ ip_code[$1&quot; &quot;$9]++}END{ for(i in ip_code){print i,ip_code[i]} }&#39; | sort -k1 -rn | head -n10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\\7. 统计2017年9月5日 每个IP访问状态码为404及出现次数（$status）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>grep &#39;05/Sep/2017&#39; cd.mobiletrain.org.log |awk &#39;$9==&quot;404&quot;{ccc[$1&quot; &quot;$9]++}END{for(i in ccc){print i,ccc[i]}}&#39; | sort -k3 -rn grep &#39;05/Sep/2017&#39; sz.mobiletrain.org.log | awk &#39;{if($9=&quot;404&quot;){ip_code[$1&quot; &quot;$9]++}}END{for(i in ip_code){print i,ip_code[i]}}&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\\8. 统计前一分钟的PV量</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>date=$(date -d &#39;-1 minute&#39; +%d/%b/%Y:%H:%M);awk -v date=$date &#39;$0 ~ date {i++} END{print i}&#39; sz.mobiletrain.org.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>shell中的变量在awk程序中无法使用，因为在执行AWK时，是一个新的进程去处理的，因此就需要-v 来向awk程序中传参数了，</p><p>你比如在shell程序中有一个变量a=15，你在awk程序中直接使用变量a是不行的，而你用awk -v b=a， 这样在AWK程序中就可以使用变量b了！也就相当于使用a了！</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># date=$(date -d &#39;-1 minute&#39; +%Y:%H:%M); awk -v date=$date &#39;$0 ~ date{i++}END{print i}&#39; /var/log/nginx/xuleilinux.access.log 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\\9. 统计2017年9月5日 8:30－9:00，每个IP，出现404状态码的数量</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>awk &#39;$4&gt;=&quot;[05/Sep/2017:08:30:00&quot; &amp;&amp; $4&lt;=&quot;[05/Sep/2017:09:00:00&quot; {if($9=&quot;404&quot;){ip_code[$1&quot; &quot;$9]++}}END{for(i in ip_code){print i,ip_code[i]}}&#39; sz.mobiletrain.org.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\\10. 统计2017年9月5日 各种状态码数量</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>grep &#39;05/Sep/2017&#39; sz.mobiletrain.org.log |awk &#39;{code[$9]++} END{for(i in code){print i,code[i]}}&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>百分比</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>grep &#39;05/Sep/2017&#39; sz.mobiletrain.org.log | awk &#39;{code[$9]++;total++} END{for(i in code){printf i&quot; &quot;;printf code[i]&quot;\\t&quot;;printf &quot;%.2f&quot;,code[i]/total*100;print &quot;%&quot;}}&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
 
=============================================================
 
1.  一天内访问最多的10个IP（ip top10）
 
2.  访问大于100次的IP
 
3.  PV量总量
 
4.  访问最多的10个页面（<span class="token variable">$request</span> top 10）
 
5.  每个URL访问内容总大小（<span class="token variable">$body_bytes_sent</span>）
 
6.  IP访问状态码为404及出现次数（<span class="token variable">$status</span>）
 
7.  统计某天 每个IP访问状态码数量（<span class="token variable">$status</span>）
 
8.  统计前一分钟的PV量
 
9. 统计某天 各种状态码数量
 
===============================================================
 
EOF</span>
 
<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;输入查询的日志目录的位置: &quot;</span> b
 
<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;输入查询的时间 格式:如 05/Sep/2017 : &quot;</span> a
 
<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;输入选项：&quot;</span> n
 
<span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$n</span>&quot;</span> <span class="token keyword">in</span>
 
        <span class="token number">1</span><span class="token punctuation">)</span>
 
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;正在查询一天内访问最多的10个IP&quot;</span>
 
        <span class="token function">sleep</span> <span class="token number">1</span>
 
        <span class="token comment">#一天内访问最多的10个IP（ip top10）</span>
 
        <span class="token function">grep</span> <span class="token variable">$a</span> <span class="token variable">$b</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{ ips[$1]++ } END{for(i in ips){print i,ips[i]} } &#39;</span><span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-k2</span> <span class="token parameter variable">-rn</span> <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-n10</span>
 
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
 
        <span class="token number">2</span><span class="token punctuation">)</span>
 
        <span class="token builtin class-name">echo</span> <span class="token string">&quot; 访问大于100次的IP&quot;</span>
 
        <span class="token comment">#访问大于100次的IP</span>
 
        <span class="token function">grep</span> <span class="token variable">$a</span> <span class="token variable">$b</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{ ips[$1]++ } END{for(i in ips){ if(ips[i]&gt;100)  {print i,ips[i]}} } &#39;</span><span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-k2</span> <span class="token parameter variable">-rn</span> <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-n10</span>
 
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
 
        <span class="token number">3</span><span class="token punctuation">)</span>
 
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;pv总量&quot;</span>
 
        <span class="token comment">#pv总量</span>
 
        <span class="token function">grep</span> <span class="token variable">$a</span> <span class="token variable">$b</span> <span class="token operator">|</span><span class="token function">wc</span> <span class="token parameter variable">-l</span>
 
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
 
        <span class="token number">4</span><span class="token punctuation">)</span>
 
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;访问最多的10个页面（<span class="token variable">$request</span> top 10）&quot;</span>
 
        <span class="token comment">#访问最多的10个页面（$request top 10）</span>
 
        <span class="token function">grep</span> <span class="token variable">$a</span> <span class="token variable">$b</span> <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{urls[$7]++} END{for(i in urls){print urls[i],i}}&#39;</span> <span class="token operator">|</span><span class="token function">sort</span> <span class="token parameter variable">-k1</span> <span class="token parameter variable">-rn</span> <span class="token operator">|</span><span class="token function">head</span> <span class="token parameter variable">-n10</span>
 
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
 
        <span class="token number">5</span><span class="token punctuation">)</span>
 
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;每个URL访问内容总大小（<span class="token variable">$body_bytes_sent</span>）&quot;</span>
 
        <span class="token comment">#每个URL访问内容总大小（$body_bytes_sent）</span>
 
        <span class="token function">grep</span> <span class="token variable">$a</span> <span class="token variable">$b</span> <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{ urls[$7]++; size[$7]+=$10}END{for(i in urls){print urls[i],size[i],i}}&#39;</span><span class="token operator">|</span><span class="token function">sort</span> <span class="token parameter variable">-k1</span> <span class="token parameter variable">-rn</span> <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-n10</span>
 
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
 
        <span class="token number">6</span><span class="token punctuation">)</span>
 
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;IP访问状态码为404及出现次数（<span class="token variable">$status</span>）&quot;</span>
 
        <span class="token comment">#IP访问状态码为404及出现次数（$status）</span>
 
        <span class="token function">grep</span> <span class="token variable">$a</span> <span class="token variable">$b</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{if($9=&quot;404&quot;){ip_code[$1&quot; &quot;$9]++}}END{for(i in ip_code){print i,ip_code[i]}}&#39;</span>
 
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
 
        <span class="token number">7</span><span class="token punctuation">)</span>
 
        <span class="token builtin class-name">echo</span> <span class="token string">&quot; 统计<span class="token variable">$a</span> 每个IP访问状态码数量（<span class="token variable">$status</span>）&quot;</span>
 
        <span class="token comment"># 统计某天 每个IP访问状态码数量（$status）</span>
 
        <span class="token function">grep</span> <span class="token variable">$a</span> <span class="token variable">$b</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{ ip_code[$1&quot; &quot;$9]++}END{ for(i in ip_code){print i,ip_code[i]} }&#39;</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-k1</span> <span class="token parameter variable">-rn</span> <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-n10</span>
 
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
 
        <span class="token number">8</span><span class="token punctuation">)</span>
 
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;统计前一分钟的PV量&quot;</span>
 
        <span class="token comment">#8. 统计前一分钟的PV量</span>
 
        <span class="token assign-left variable">date</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> <span class="token parameter variable">-d</span> <span class="token string">&#39;-1 minute&#39;</span> +%d/%b/%Y:%H:%M<span class="token variable">)</span></span><span class="token punctuation">;</span><span class="token function">awk</span>  <span class="token parameter variable">-v</span> <span class="token assign-left variable">date</span><span class="token operator">=</span><span class="token variable">$date</span> <span class="token string">&#39;$0 ~ date {i++} END{print i}&#39;</span>  <span class="token variable">$b</span>
 
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
 
        <span class="token number">9</span><span class="token punctuation">)</span>
 
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;统计<span class="token variable">$a</span> 各种状态码数量&quot;</span>
 
        <span class="token comment">#统计某天 各种状态码数量</span>
 
        <span class="token function">grep</span> <span class="token variable">$a</span> <span class="token variable">$b</span>  <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{code[$9]++} END{for(i in code){print i,code[i]}}&#39;</span>
 
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;统计<span class="token variable">$a</span> 各种状态码数量 百分比形式&quot;</span>
 
        <span class="token comment">#统计某天 各种状态码数量</span>
 
        <span class="token function">grep</span> <span class="token variable">$a</span> <span class="token variable">$b</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{code[$9]++;total++} END{for(i in code){printf i&quot; &quot;;printf code[i]&quot;\\t&quot;;printf &quot;%.2f&quot;,code[i]/total*100;print &quot;%&quot;}}&#39;</span>
 
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
 
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>统计 pv 量</p><p>统计 一天内访问最多的10个ip</p><p>统计访问量超过100次的ip</p><h1 id="_8、nginx-web模块" tabindex="-1"><a class="header-anchor" href="#_8、nginx-web模块" aria-hidden="true">#</a> 8、Nginx WEB模块</h1><h2 id="连接状态" tabindex="-1"><a class="header-anchor" href="#连接状态" aria-hidden="true">#</a> 连接状态</h2><h3 id="stub-status-module" tabindex="-1"><a class="header-anchor" href="#stub-status-module" aria-hidden="true">#</a> stub_status_module</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@nginx-server ~]# cat /etc/nginx/conf.d/net_map.conf 
server{
  open_log_file_cache max=1000 inactive=20s min_uses=3 valid=1m;


  server_name 127.0.0.1;
  listen      81;
  
  location / {
    root /www/wwwroot/net_map;
    index index.html;
  }

  location /nginx_stus {
    stub_status;
    allow all;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+i+'" alt="image-20211108175559426" tabindex="0" loading="lazy"><figcaption>image-20211108175559426</figcaption></figure><figure><img src="'+l+`" alt="image-20211108175735388" tabindex="0" loading="lazy"><figcaption>image-20211108175735388</figcaption></figure><p>Active connections 当前活动连接数</p><p>发起连接数 成功连接数 请求书</p><p>读 写 写</p><h3 id="什么是连接" tabindex="-1"><a class="header-anchor" href="#什么是连接" aria-hidden="true">#</a> 什么是连接</h3><p>TCP机制</p><p>重传计时器 Retransmession</p><p>持久计时器 Persistance</p><p>保活计时器 keep-alive</p><p>时间等待 time-wait</p><h3 id="什么是长连接" tabindex="-1"><a class="header-anchor" href="#什么是长连接" aria-hidden="true">#</a> 什么是长连接</h3><p>只握手不不挥手</p><p>[root@nginx-server ~]# vim /etc/nginx/nginx.conf [root@nginx-server ~]#</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="随机主页" tabindex="-1"><a class="header-anchor" href="#随机主页" aria-hidden="true">#</a> 随机主页</h2><h3 id="目的" tabindex="-1"><a class="header-anchor" href="#目的" aria-hidden="true">#</a> 目的</h3><p>random_index_module</p><p>将主页设置为随机页面，是一种微调机制</p><h3 id="启动随机主页" tabindex="-1"><a class="header-anchor" href="#启动随机主页" aria-hidden="true">#</a> 启动随机主页</h3><ul><li>创建主页目录</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nginx-server ~<span class="token punctuation">]</span><span class="token comment"># pwd</span>
/root
<span class="token punctuation">[</span>root@nginx-server ~<span class="token punctuation">]</span><span class="token comment"># mkdir app</span>
<span class="token punctuation">[</span>root@nginx-server ~<span class="token punctuation">]</span><span class="token comment"># touch app/{blue.html,.yellow.html,red.html,green.html}</span>
<span class="token punctuation">[</span>root@nginx-server ~<span class="token punctuation">]</span><span class="token comment"># ls app/</span>
blue.html  green.html  red.html
<span class="token punctuation">[</span>root@nginx-server ~<span class="token punctuation">]</span><span class="token comment"># ls -a app/</span>
<span class="token builtin class-name">.</span>  <span class="token punctuation">..</span>  blue.html  green.html  red.html  .yellow.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>创建多个主页</p></li><li><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nginx-server ~<span class="token punctuation">]</span><span class="token comment"># echo blue &gt;&gt; app/blue.html </span>
<span class="token punctuation">[</span>root@nginx-server ~<span class="token punctuation">]</span><span class="token comment"># echo green &gt;&gt; app/green.html </span>
<span class="token punctuation">[</span>root@nginx-server ~<span class="token punctuation">]</span><span class="token comment"># echo red &gt;&gt; app/red.html </span>
<span class="token punctuation">[</span>root@nginx-server ~<span class="token punctuation">]</span><span class="token comment"># echo yellow &gt;&gt; app/.yellow.html </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>启动随机主页</p></li><li><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nginx-server ~<span class="token punctuation">]</span><span class="token comment"># cat /etc/nginx/conf.d/net_map.conf </span>
server<span class="token punctuation">{</span>
  open_log_file_cache <span class="token assign-left variable">max</span><span class="token operator">=</span><span class="token number">1000</span> <span class="token assign-left variable">inactive</span><span class="token operator">=</span>20s <span class="token assign-left variable">min_uses</span><span class="token operator">=</span><span class="token number">3</span> <span class="token assign-left variable">valid</span><span class="token operator">=</span>1m<span class="token punctuation">;</span>


  server_name <span class="token number">127.0</span>.0.1<span class="token punctuation">;</span>
  listen      <span class="token number">81</span><span class="token punctuation">;</span>
  
  location / <span class="token punctuation">{</span>
    root /www/wwwroot/app<span class="token punctuation">;</span>
    random_index on<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>  

  location /111 <span class="token punctuation">{</span>
    root /www/wwwroot/net_map<span class="token punctuation">;</span>
    index index.html<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  location /nginx_stus <span class="token punctuation">{</span>
    stub_status<span class="token punctuation">;</span>
    allow all<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token punctuation">[</span>root@nginx-server ~<span class="token punctuation">]</span><span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li></li><li><p>请注意隐藏文件并不会被随机选取</p></li><li><p><strong>隐藏文件不会被读取</strong></p></li></ul><h2 id="替换模块" tabindex="-1"><a class="header-anchor" href="#替换模块" aria-hidden="true">#</a> 替换模块</h2><p>sub_module</p><p>网站可能由模板生成,实现纠错，文字校验</p><p>sub_filter 云透视 &#39;somestring&#39;; #sub_filter_once on; #只换一次</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nginx-server ~<span class="token punctuation">]</span><span class="token comment"># cat /etc/nginx/conf.d/net_map.conf </span>
server<span class="token punctuation">{</span>
  open_log_file_cache <span class="token assign-left variable">max</span><span class="token operator">=</span><span class="token number">1000</span> <span class="token assign-left variable">inactive</span><span class="token operator">=</span>20s <span class="token assign-left variable">min_uses</span><span class="token operator">=</span><span class="token number">3</span> <span class="token assign-left variable">valid</span><span class="token operator">=</span>1m<span class="token punctuation">;</span>


  server_name <span class="token number">127.0</span>.0.1<span class="token punctuation">;</span>
  listen      <span class="token number">81</span><span class="token punctuation">;</span>
  
  sub_filter 云透视 <span class="token string">&#39;somestring&#39;</span><span class="token punctuation">;</span>
  <span class="token comment">#sub_filter_once on; #只换一次</span>

  location / <span class="token punctuation">{</span>
    root /www/wwwroot/net_map<span class="token punctuation">;</span>
    index index.html<span class="token punctuation">;</span>
    
  <span class="token punctuation">}</span>  


  location /222 <span class="token punctuation">{</span>
    root /www/wwwroot/app<span class="token punctuation">;</span>
    random_index on<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>  

  location /111 <span class="token punctuation">{</span>
    root /www/wwwroot/net_map<span class="token punctuation">;</span>
    index index.html<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  location /nginx_stus <span class="token punctuation">{</span>
    stub_status<span class="token punctuation">;</span>
    allow all<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文件读取" tabindex="-1"><a class="header-anchor" href="#文件读取" aria-hidden="true">#</a> 文件读取</h2><p>ngx_http_core_module</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><h4 id="sendfile-on-off" tabindex="-1"><a class="header-anchor" href="#sendfile-on-off" aria-hidden="true">#</a> sendfile [on] | off;</h4><p>文件传输过程</p><p>未使用sendfile【默认】</p><p>硬盘 &gt;&gt; kernel buffer &gt;&gt; user buffer &gt;&gt; kernel socket buffer &gt;&gt; 协议栈</p><p>使用sendfile()</p><p>硬盘 &gt;&gt; kernel buffer 快速拷贝到kernelsocket buffer &gt;&gt; 协议栈</p><h4 id="tcp-nopush" tabindex="-1"><a class="header-anchor" href="#tcp-nopush" aria-hidden="true">#</a> tcp_nopush</h4><p>未使用tcp_nopush，网络资源浪费</p><p>应用操作每产生一次操作就发送一个包，典型情况携带40字的包头，于是产生4000%过载，网络堵塞</p><p>使用tcp_nopush ，网络传输效率提升</p><p>tcp_nopush on | [default off];</p><p>包攒到一定数量再发</p><h4 id="tcp-nodelay" tabindex="-1"><a class="header-anchor" href="#tcp-nodelay" aria-hidden="true">#</a> tcp_nodelay</h4><p>开启或关闭nginx使用tcp_nodelay选项的功能。这个选项仅在连接编程<strong>长连接</strong>时候才能被启用，</p><p>tcp_nodelay 是禁用nagle算法，即数据包立即发送出去</p><p>由于Nagle 和DelayedACK的原因，数据包的确认信息需要积攒到两个时才发送，长连接情况下，奇数包会造成延时40ms，所以tcp_nodelay会将ack立刻发送除去，如果不在长连接时，可以关闭此模块，因为ack会被立刻发送出去</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
<span class="token punctuation">..</span>.

tcp_nodelay on<span class="token punctuation">;</span>
<span class="token punctuation">..</span>.
<span class="token punctuation">}</span>

或者 

location /video/ <span class="token punctuation">{</span>
<span class="token punctuation">..</span>.
  sendfile on<span class="token punctuation">;</span>
  tcp_nopush on<span class="token punctuation">;</span>
<span class="token punctuation">..</span>.
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文件压缩" tabindex="-1"><a class="header-anchor" href="#文件压缩" aria-hidden="true">#</a> 文件压缩</h2><p>ngx_http_gzip_module</p><p>gzip on|[default off]</p><p>context:http,server,location, if in location</p><p>gzip_comp_level [level 1-9]</p><p>context http,server,location</p><p>gzip_http_version 1.0|[default 1.1]</p><p>context http,server,location</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
    <span class="token function">gzip</span>  on<span class="token punctuation">;</span>
    gzip_http_version <span class="token number">1.1</span><span class="token punctuation">;</span>
    gzip_comp_level <span class="token number">9</span><span class="token punctuation">;</span>
    gzip_types  text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nginx-server ~<span class="token punctuation">]</span><span class="token comment"># cat /etc/nginx/nginx.conf </span>

user  nginx<span class="token punctuation">;</span>
worker_processes  auto<span class="token punctuation">;</span>

error_log  /var/log/nginx/error.log notice<span class="token punctuation">;</span>
pid        /var/run/nginx.pid<span class="token punctuation">;</span>


events <span class="token punctuation">{</span>
    worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


http <span class="token punctuation">{</span>
    
    include       /etc/nginx/mime.types<span class="token punctuation">;</span>
    default_type  application/octet-stream<span class="token punctuation">;</span>

    log_format  main  <span class="token string">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
                      <span class="token string">&#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
                      <span class="token string">&#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;</span><span class="token punctuation">;</span>

    access_log  /var/log/nginx/access.log  main<span class="token punctuation">;</span>

    sendfile        on<span class="token punctuation">;</span>
    <span class="token comment">#tcp_nopush     on;</span>

    keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>

    <span class="token function">gzip</span>  on<span class="token punctuation">;</span>
    gzip_http_version <span class="token number">1.1</span><span class="token punctuation">;</span>
    gzip_comp_level <span class="token number">9</span><span class="token punctuation">;</span>
    gzip_types  text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png<span class="token punctuation">;</span>

    include /etc/nginx/conf.d/*.conf<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">[</span>root@shell ~<span class="token punctuation">]</span><span class="token comment"># systemctl restart nginx</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="页面缓存" tabindex="-1"><a class="header-anchor" href="#页面缓存" aria-hidden="true">#</a> 页面缓存</h2><p>ngx_http_headers_module</p><p>http段或者server段或者location段</p><p>expires [modified] time;</p><p>expires epoch |max十年 | off;</p><p>default expires off;</p><p>context http,server,location,if in location</p><p>1、开启浏览器缓存，浏览页面</p><p>第一次返货状态码200，页面对象全文传输</p><p>第二次返回状态304，页面对象部分传输</p><p>2、金庸缓存，访问</p><p>状态码200</p><p>vim /etc/nginx/conf.d/net_map.conf</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>location / <span class="token punctuation">{</span>
<span class="token punctuation">..</span>.
  expeires 24h<span class="token punctuation">;</span>
<span class="token punctuation">..</span>.
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 浏览器缓存head中 有一个</p><p>cache-control: 86400 单位秒</p><h2 id="防盗链" tabindex="-1"><a class="header-anchor" href="#防盗链" aria-hidden="true">#</a> 防盗链</h2><p>模块： ngx_</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>location / <span class="token punctuation">{</span>
  root /a.com<span class="token punctuation">;</span>
  index index.html<span class="token punctuation">;</span>
  valid_referer none block *.a.com<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$invalid_referer</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    retuen <span class="token number">403</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>白名单</p><p>写法： server_name 192.168.100.* ~tianyun ~.google. ~.baidu. b.com;</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>location / <span class="token punctuation">{</span>
  root /a.com<span class="token punctuation">;</span>
  index index.html<span class="token punctuation">;</span>
  valid_referer none blocked *.b.com server_name <span class="token number">192.168</span>.100.* ~tianyun ~<span class="token punctuation">\\</span>.google<span class="token punctuation">\\</span>. ~<span class="token punctuation">\\</span>.baidu<span class="token punctuation">\\</span>. b.com<span class="token punctuation">;</span>
  if<span class="token punctuation">(</span><span class="token variable">$invalid_referer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">return</span> <span class="token number">403</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生产环境</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>location ~*<span class="token punctuation">\\</span>.<span class="token punctuation">(</span>jpg<span class="token operator">|</span>png<span class="token operator">|</span>gif<span class="token operator">|</span>bmp<span class="token punctuation">)</span>$ <span class="token punctuation">{</span>
  root /a.com<span class="token punctuation">;</span>
  index index.html<span class="token punctuation">;</span>
  valid_referer none blocked *.b.com server_name <span class="token number">192.168</span>.100.* ~tianyun ~<span class="token punctuation">\\</span>.google<span class="token punctuation">\\</span>. ~<span class="token punctuation">\\</span>.baidu<span class="token punctuation">\\</span>. b.com<span class="token punctuation">;</span>
  if<span class="token punctuation">(</span><span class="token variable">$invalid_referer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">#return 403;</span>
    rewrite .* http://a.com/403.jpg<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_9、nginx访问限制" tabindex="-1"><a class="header-anchor" href="#_9、nginx访问限制" aria-hidden="true">#</a> 9、Nginx访问限制</h1><p>一定程度防泛洪攻击：ngx_http_limit_req_module ngx_http_limit_conn_module</p><p>测试：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install -t httpd-tools
ab -n 100 -c 10 http://a.com/
选项是：
    -n requests 要执行的请求数
    -c concurrency 一次发出的多个请求的数量
    -t timelimit 秒到最大值。花在基准测试上
                    这意味着 -n 50000
    -s timeout 秒到最大值。等待每个响应
                    默认为 30 秒
    -b windowsize TCP 发送/接收缓冲区的大小，以字节为单位
    -B address 进行传出连接时绑定的地址
    -p postfile 包含要 POST 的数据的文件。还记得设置 -T
    -u putfile 包含要 PUT 的数据的文件。还记得设置 -T
    -T content-type 用于 POST/PUT 数据的内容类型标头，例如。
                    &#39;应用程序/x-www-form-urlencoded&#39;
                    默认为“文本/纯文本”
    -v verbosity 要打印多少故障排除信息
    -w 在 HTML 表格中打印结果
    -i 使用 HEAD 而不是 GET
    -x 属性 要作为表属性插入的字符串
    -y 属性字符串作为 tr 属性插入
    -z 属性字符串作为 td 或 th 属性插入
    -C 属性 添加 cookie，例如。 &#39;阿帕奇= 1234&#39;。 （可重复）
    -H 属性添加任意标题行，例如。 &#39;接受编码：gzip&#39;
                    在所有正常标题行之后插入。 （可重复）
    -A 属性 添加 Basic WWW Authentication，属性
                    是冒号分隔的用户名和密码。
    -P 属性 添加Basic Proxy Authentication，属性
                    是冒号分隔的用户名和密码。
    -X proxy:port 代理服务器和要使用的端口号
    -V 打印版本号并退出
    -k 使用 HTTP KeepAlive 功能
    -d 不显示百分位数服务表。
    -S 不显示置信度估计值和警告。
    -q 执行超过 150 个请求时不显示进度
    -g filename 将收集到的数据输出到 gnuplot 格式文件。
    -e filename 输出带有百分比的 CSV 文件
    -r 不要在套接字接收错误时退出。
    -h 显示使用信息（此消息）
    -Z ciphersuite 指定 SSL/TLS 密码套件（参见 openssl 密码）
    -f protocol 指定 SSL/TLS 协议
                    （SSL3、TLS1、TLS1.1、TLS1.2 或 ALL）
                    \\
             
-N|--count 总请求数，缺省 : 5w
-C|--clients 并发数, 缺省 : 100
-R|--rounds 测试次数, 缺省 : 10 次
-S|-sleeptime 间隔时间, 缺省 : 10 秒
-I|--min 最小并发数,　缺省: 0
-X|--max 最大并发数，缺省: 0
-J|--step 次递增并发数
-T|--runtime 总体运行时间,设置此项时最大请求数为5w
-P|--postfile post数据文件路径
-U|--url 测试地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;*==========================================================*&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;|  本脚本工具基于ab(Apache benchmark)，请先安装好ab, awk   |&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;|  注意：                                                  |&#39;</span>    
<span class="token builtin class-name">echo</span> <span class="token string">&#39;|     shell默认最大客户端数为1024                          |&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;|     如超出此限制，请使用管理员执行以下命令：             |&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;|     ulimit -n 655350                                 |&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;*==========================================================*&#39;</span>

<span class="token keyword">function</span> <span class="token function-name function">usage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&#39;  命令格式：&#39;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&#39;  ab-test-tools.sh&#39;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&#39;      -N|--count 总请求数，缺省 : 5w&#39;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&#39;      -C|--clients 并发数, 缺省 : 100&#39;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&#39;      -R|--rounds 测试次数, 缺省 : 10 次&#39;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&#39;      -S|-sleeptime 间隔时间, 缺省 : 10 秒&#39;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&#39;      -I|--min 最小并发数,　缺省: 0&#39;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&#39;      -X|--max 最大并发数，缺省: 0&#39;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&#39;      -J|--step 次递增并发数&#39;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&#39;      -T|--runtime 总体运行时间,设置此项时最大请求数为5w&#39;</span> 
    <span class="token builtin class-name">echo</span> <span class="token string">&#39;      -P|--postfile post数据文件路径&#39;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&#39;      -U|--url 测试地址&#39;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&#39;&#39;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&#39;  测试输出结果*.out文件&#39;</span>

    <span class="token builtin class-name">exit</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment"># 定义默认参数量</span>
<span class="token comment"># 总请求数</span>
<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">50000</span>
<span class="token comment"># 并发数</span>
<span class="token assign-left variable">clients</span><span class="token operator">=</span>100O
<span class="token comment"># 测试轮数</span>
<span class="token assign-left variable">rounds</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token comment"># 间隔时间</span>
<span class="token assign-left variable">sleeptime</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token comment"># 最小并发数</span>
<span class="token assign-left variable">min</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token comment"># 最大数发数</span>
<span class="token assign-left variable">max</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token comment"># 并发递增数</span>
<span class="token assign-left variable">step</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token comment"># 测试地址</span>
<span class="token assign-left variable">url</span><span class="token operator">=</span><span class="token string">&#39;&#39;</span>
<span class="token comment"># 测试限制时间</span>
<span class="token assign-left variable">runtime</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token comment"># 传输数据</span>
<span class="token assign-left variable">postfile</span><span class="token operator">=</span><span class="token string">&#39;&#39;</span>


<span class="token assign-left variable">ARGS</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span>getopt <span class="token parameter variable">-a</span> <span class="token parameter variable">-o</span> N:C:R:S:I:X:J:U:T:P:h <span class="token parameter variable">-l</span> count:,client:,round:,sleeptime:,min:,max:,step:,runtime:,postfile:,help -- <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span><span class="token variable">\`</span></span>
<span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-ne</span> <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> usage
<span class="token builtin class-name">eval</span> <span class="token builtin class-name">set</span> -- <span class="token string">&quot;<span class="token variable">\${ARGS}</span>&quot;</span> 

<span class="token keyword">while</span> <span class="token boolean">true</span> 
<span class="token keyword">do</span>
    <span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token keyword">in</span>
    -N<span class="token operator">|</span>--count<span class="token punctuation">)</span>
        <span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$2</span>&quot;</span>
        <span class="token builtin class-name">shift</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
        
    -C<span class="token operator">|</span>--client<span class="token punctuation">)</span>
        <span class="token assign-left variable">clients</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$2</span>&quot;</span>
        <span class="token builtin class-name">shift</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>

    -R<span class="token operator">|</span>--round<span class="token punctuation">)</span>
        <span class="token assign-left variable">rounds</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$2</span>&quot;</span>
        <span class="token builtin class-name">shift</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>

    -S<span class="token operator">|</span>--sleeptime<span class="token punctuation">)</span>
        <span class="token assign-left variable">sleeptime</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$2</span>&quot;</span>
        <span class="token builtin class-name">shift</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>

    -I<span class="token operator">|</span>--min<span class="token punctuation">)</span>
        <span class="token assign-left variable">min</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$2</span>&quot;</span>
        <span class="token builtin class-name">shift</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>

    -X<span class="token operator">|</span>--max<span class="token punctuation">)</span>
        <span class="token assign-left variable">max</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$2</span>&quot;</span>
        <span class="token builtin class-name">shift</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>

    -J<span class="token operator">|</span>--step<span class="token punctuation">)</span>
        <span class="token assign-left variable">step</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$2</span>&quot;</span>
        <span class="token builtin class-name">shift</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>

    -U<span class="token operator">|</span>--url<span class="token punctuation">)</span>
        <span class="token assign-left variable">url</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$2</span>&quot;</span>
        <span class="token builtin class-name">shift</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>

    -T<span class="token operator">|</span>--runtime<span class="token punctuation">)</span>
        <span class="token assign-left variable">runtime</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$2</span>&quot;</span>
        <span class="token builtin class-name">shift</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>

    -P<span class="token operator">|</span>--postfile<span class="token punctuation">)</span>
        <span class="token assign-left variable">postfile</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$2</span>&quot;</span>
        <span class="token builtin class-name">shift</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>

    -h<span class="token operator">|</span>--help<span class="token punctuation">)</span>
        usage
        <span class="token punctuation">;</span><span class="token punctuation">;</span>

    --<span class="token punctuation">)</span>
        <span class="token builtin class-name">shift</span>
        <span class="token builtin class-name">break</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token keyword">esac</span>
<span class="token builtin class-name">shift</span>
<span class="token keyword">done</span>

<span class="token comment"># 参数检查</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> x<span class="token variable">$url</span> <span class="token operator">=</span> x <span class="token punctuation">]</span>
<span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&#39;请输入测试url，非文件/以为结束&#39;</span>
    <span class="token builtin class-name">exit</span>
<span class="token keyword">fi</span>

<span class="token assign-left variable">flag</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$min</span> <span class="token operator">!=</span> <span class="token number">0</span> <span class="token parameter variable">-a</span> <span class="token variable">$max</span> <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span> 
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$max</span> <span class="token parameter variable">-le</span> <span class="token variable">$min</span> <span class="token punctuation">]</span> 
    <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&#39;最大并发数不能小于最小并发数&#39;</span>
        <span class="token builtin class-name">exit</span>
    <span class="token keyword">fi</span>

    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$step</span> <span class="token parameter variable">-le</span> <span class="token number">0</span> <span class="token punctuation">]</span>
    <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&#39;并发递增步长不能&lt;=0&#39;</span>
        <span class="token builtin class-name">exit</span>
    <span class="token keyword">fi</span>

    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$min</span> <span class="token parameter variable">-lt</span> <span class="token variable">$max</span> <span class="token punctuation">]</span>
    <span class="token keyword">then</span>
        <span class="token assign-left variable">flag</span><span class="token operator">=</span><span class="token number">1</span>
    <span class="token keyword">fi</span>
<span class="token keyword">fi</span>


<span class="token comment"># 生成ab命令串</span>
<span class="token assign-left variable">cmd</span><span class="token operator">=</span><span class="token string">&quot;ab -k -r&quot;</span>

<span class="token comment">#　数据文件</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> x<span class="token variable">$postf</span> <span class="token operator">!=</span> x <span class="token punctuation">]</span>
<span class="token keyword">then</span>
    <span class="token assign-left variable">cmd</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$cmd</span> -p <span class="token variable">$postf</span>&quot;</span>
<span class="token keyword">fi</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> x<span class="token variable">$tl</span> <span class="token operator">!=</span> x <span class="token parameter variable">-a</span> <span class="token variable">$tl</span> <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span> 
    <span class="token assign-left variable">max</span><span class="token operator">=</span><span class="token number">50000</span><span class="token punctuation">;</span>
    <span class="token assign-left variable">cmd</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$cmd</span> -t<span class="token variable">$tl</span>&quot;</span>
<span class="token keyword">fi</span>
<span class="token assign-left variable">cmd</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$cmd</span> -n<span class="token variable">$count</span>&quot;</span>

<span class="token builtin class-name">echo</span> <span class="token string">&#39;-----------------------------&#39;</span><span class="token punctuation">;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;测试参数&#39;</span><span class="token punctuation">;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;  总请求数：<span class="token variable">$count</span>&quot;</span><span class="token punctuation">;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;  并发数：<span class="token variable">$clients</span>&quot;</span><span class="token punctuation">;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;  重复次数：<span class="token variable">$rounds</span> 次&quot;</span><span class="token punctuation">;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;  间隔时间：<span class="token variable">$sleeptime</span> 秒&quot;</span><span class="token punctuation">;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;  测试地址：<span class="token variable">$url</span>&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$min</span> <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;  最小并发数：<span class="token variable">$min</span>&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">fi</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$max</span> <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;  最大并发数：<span class="token variable">$max</span>&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">fi</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$step</span> <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot; 每轮并发递增：<span class="token variable">$step</span>&quot;</span> 
<span class="token keyword">fi</span>


<span class="token comment"># 指定输出文件名</span>
<span class="token assign-left variable">datestr</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +%Y%m%d%H%I%S<span class="token variable">\`</span></span>
<span class="token assign-left variable">outfile</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$datestr</span>.out&quot;</span><span class="token punctuation">;</span>

<span class="token comment"># runtest $cmd $outfile $rounds $sleeptime</span>
<span class="token keyword">function</span> <span class="token function-name function">runtest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment"># 输出命令</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&#39;  当前执行命令：&#39;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;  <span class="token variable">$cmd</span>&quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&#39;------------------------------&#39;</span>

    <span class="token comment"># 开始执行测试</span>
    <span class="token assign-left variable">cnt</span><span class="token operator">=</span><span class="token number">1</span>
    <span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$cnt</span> <span class="token parameter variable">-le</span> <span class="token variable">$rounds</span> <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">do</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;第 <span class="token variable">$cnt</span> 轮 开始&quot;</span>
        <span class="token variable">$cmd</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">$outfile</span> 
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token entity" title="\\n">\\n</span>&quot;</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">$outfile</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;第 <span class="token variable">$cnt</span> 轮 结束&quot;</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&#39;----------------------------&#39;</span>

        <span class="token assign-left variable">cnt</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>$cnt<span class="token operator">+</span><span class="token number">1</span><span class="token variable">))</span></span>

        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$cnt</span> <span class="token parameter variable">-le</span> <span class="token variable">$rounds</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
            <span class="token builtin class-name">echo</span> <span class="token string">&quot;等待 <span class="token variable">$sleeptime</span> 秒&quot;</span>
            <span class="token function">sleep</span> <span class="token variable">$sleeptime</span>
        <span class="token keyword">fi</span> 
    <span class="token keyword">done</span>
<span class="token punctuation">}</span>


<span class="token assign-left variable">temp</span><span class="token operator">=</span><span class="token variable">$cmd</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$flag</span> <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token assign-left variable">cur</span><span class="token operator">=</span><span class="token variable">$min</span>
    <span class="token assign-left variable">over</span><span class="token operator">=</span><span class="token number">0</span>
    <span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$cur</span> <span class="token parameter variable">-le</span> <span class="token variable">$max</span> <span class="token punctuation">]</span>
    <span class="token keyword">do</span>
        <span class="token assign-left variable">cmd</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$temp</span> -c<span class="token variable">$cur</span> <span class="token variable">$url</span>&quot;</span>
        runtest <span class="token variable">$cmd</span> <span class="token variable">$outfile</span> <span class="token variable">$rounds</span> <span class="token variable">$sleeptime</span> 

        <span class="token assign-left variable">cur</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>$cur<span class="token operator">+</span>$step<span class="token variable">))</span></span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$cur</span> <span class="token parameter variable">-ge</span> <span class="token variable">$max</span> <span class="token parameter variable">-a</span> <span class="token variable">$over</span> <span class="token operator">!=</span> <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
           <span class="token assign-left variable">cur</span><span class="token operator">=</span><span class="token variable">$max</span> 
           <span class="token assign-left variable">over</span><span class="token operator">=</span><span class="token number">1</span>
        <span class="token keyword">fi</span>
    <span class="token keyword">done</span>
<span class="token keyword">else</span> 
    <span class="token assign-left variable">cmd</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$cmd</span> -c<span class="token variable">$clients</span> <span class="token variable">$url</span>&quot;</span>
    runtest <span class="token variable">$cmd</span> <span class="token variable">$outfile</span> <span class="token variable">$rounds</span> <span class="token variable">$sleeptime</span> 
<span class="token keyword">fi</span>


<span class="token comment"># 分析结果</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token variable">$outfile</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;本次测试结果如下：&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;+------+----------+----------+---------------+---------------+---------------+--------------------+--------------------+&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;| 序号 | 总请求数 |  并发数  |   失败请求数  |   每秒事务数  |  平均事务(ms) | 并发平均事务数(ms) |　  总体传输字节数  |&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;+------+----------+----------+---------------+---------------+---------------+--------------------+--------------------+&#39;</span>

<span class="token assign-left variable">comp</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token variable"><span class="token variable">\`</span><span class="token function">awk</span> <span class="token string">&#39;/Complete requests/{print $NF}&#39;</span> $outfile<span class="token variable">\`</span></span><span class="token punctuation">)</span> 
<span class="token assign-left variable">concur</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token variable"><span class="token variable">\`</span><span class="token function">awk</span> <span class="token string">&#39;/Concurrency Level:/{print $NF}&#39;</span> $outfile<span class="token variable">\`</span></span><span class="token punctuation">)</span>
<span class="token assign-left variable">fail</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token variable"><span class="token variable">\`</span><span class="token function">awk</span> <span class="token string">&#39;/Failed requests/{print $NF}&#39;</span> $outfile<span class="token variable">\`</span></span><span class="token punctuation">)</span>
<span class="token assign-left variable">qps</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token variable"><span class="token variable">\`</span><span class="token function">awk</span> <span class="token string">&#39;/Requests per second/{print $4F}&#39;</span> $outfile<span class="token variable">\`</span></span><span class="token punctuation">)</span>
<span class="token assign-left variable">tpr</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token variable"><span class="token variable">\`</span><span class="token function">awk</span> <span class="token string">&#39;/^Time per request:(.*)\\(mean\\)$/{print $4F}&#39;</span> $outfile<span class="token variable">\`</span></span><span class="token punctuation">)</span>
<span class="token assign-left variable">tpr_c</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token variable"><span class="token variable">\`</span><span class="token function">awk</span> <span class="token string">&#39;/Time per request(.*)(mean, across all concurrent requests)/{print $4F}&#39;</span> $outfile<span class="token variable">\`</span></span><span class="token punctuation">)</span>
<span class="token assign-left variable">trate</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token variable"><span class="token variable">\`</span><span class="token function">awk</span> <span class="token string">&#39;/Transfer rate/{print $3F}&#39;</span> $outfile<span class="token variable">\`</span></span><span class="token punctuation">)</span>

<span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span>i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>\${#comp[@]}<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">))</span></span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;|&quot;</span>
    <span class="token builtin class-name">printf</span> <span class="token string">&#39;%6s&#39;</span> <span class="token variable"><span class="token variable">$((</span>$i<span class="token operator">+</span><span class="token number">1</span><span class="token variable">))</span></span> 
    <span class="token builtin class-name">printf</span> <span class="token string">&quot;|&quot;</span>

    <span class="token builtin class-name">printf</span> <span class="token string">&#39;%10s&#39;</span> <span class="token variable">\${comp<span class="token punctuation">[</span>i<span class="token punctuation">]</span>}</span>
    <span class="token builtin class-name">printf</span> <span class="token string">&#39;|&#39;</span>
    
    <span class="token builtin class-name">printf</span> <span class="token string">&#39;%10s&#39;</span> <span class="token variable">\${concur<span class="token punctuation">[</span>i<span class="token punctuation">]</span>}</span>
    <span class="token builtin class-name">printf</span> <span class="token string">&#39;|&#39;</span>

    <span class="token builtin class-name">printf</span> <span class="token string">&#39;%15s&#39;</span> <span class="token variable">\${fail<span class="token punctuation">[</span>i<span class="token punctuation">]</span>}</span>
    <span class="token builtin class-name">printf</span> <span class="token string">&#39;|&#39;</span>

    <span class="token builtin class-name">printf</span> <span class="token string">&#39;%15s&#39;</span> <span class="token variable">\${qps<span class="token punctuation">[</span>i<span class="token punctuation">]</span>}</span>
    <span class="token builtin class-name">printf</span> <span class="token string">&#39;|&#39;</span>

    <span class="token builtin class-name">printf</span> <span class="token string">&#39;%15s&#39;</span> <span class="token variable">\${tpr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>}</span>
    <span class="token builtin class-name">printf</span> <span class="token string">&#39;|&#39;</span>

    <span class="token builtin class-name">printf</span> <span class="token string">&#39;%20s&#39;</span> <span class="token variable">\${tpr_c<span class="token punctuation">[</span>i<span class="token punctuation">]</span>}</span>
    <span class="token builtin class-name">printf</span> <span class="token string">&#39;|&#39;</span>

    <span class="token builtin class-name">printf</span> <span class="token string">&#39;%20s&#39;</span> <span class="token variable">\${trate<span class="token punctuation">[</span>i<span class="token punctuation">]</span>}</span>
    <span class="token builtin class-name">printf</span> <span class="token string">&#39;|&#39;</span>

    <span class="token builtin class-name">echo</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&#39;+-----+----------+----------+---------------+---------------+---------------+--------------------+--------------------+&#39;</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;&#39;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>怎么用</p><p>vim /etc/nginx/nginx.conf</p><h2 id="request限制" tabindex="-1"><a class="header-anchor" href="#request限制" aria-hidden="true">#</a> request限制</h2><p>定义：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>limit_req_zone <span class="token variable">$binary_remote_addr</span> <span class="token assign-left variable">zone</span><span class="token operator">=</span>req_zone:10m <span class="token assign-left variable">rate</span><span class="token operator">=</span>1r/s
限制请求         二进制地址            限制策略的名称  占用10M空间 允许每秒1次请求
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>引用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>http <span class="token punctuation">{</span>
  limit_req_zone <span class="token variable">$binary_remote_addr</span> <span class="token assign-left variable">zone</span><span class="token operator">=</span>req_zone:10m <span class="token assign-left variable">rate</span><span class="token operator">=</span>1r/s<span class="token punctuation">;</span>
  server <span class="token punctuation">{</span>
    location / <span class="token punctuation">{</span>
      root /usr/<span class="token punctuation">..</span>.<span class="token punctuation">;</span>
      index <span class="token punctuation">..</span>.<span class="token punctuation">;</span>
       limit_req <span class="token assign-left variable">zone</span><span class="token operator">=</span>req_zone<span class="token punctuation">;</span>
       <span class="token comment"># limit_req zone=req_zone burst=5;</span>
       <span class="token comment"># limit_req zone=req_zone burst=5 nodelay;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

limit_req <span class="token assign-left variable">zone</span><span class="token operator">=</span>req_zone
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="限制tcp连接" tabindex="-1"><a class="header-anchor" href="#限制tcp连接" aria-hidden="true">#</a> 限制tcp连接</h2><p>[单个ip，同时只有一个连接]</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>http <span class="token punctuation">{</span>
  limit_conn_zone <span class="token variable">$binary_remote_addr</span> <span class="token assign-left variable">zone</span><span class="token operator">=</span>conn_zone:10m<span class="token punctuation">;</span>
  server <span class="token punctuation">{</span>
    location / <span class="token punctuation">{</span>
      limit_conn conn_zone <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_10、nginx访问控制" tabindex="-1"><a class="header-anchor" href="#_10、nginx访问控制" aria-hidden="true">#</a> 10、Nginx访问控制</h1><h2 id="基于主机-ip" tabindex="-1"><a class="header-anchor" href="#基于主机-ip" aria-hidden="true">#</a> 基于主机（ip）</h2><p>module : ngx_http_access_module</p><p>Directives：</p><p>Allow：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>allow 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Deny:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>deny
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Syntax：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> allow address <span class="token operator">|</span> CIDR <span class="token operator">|</span> unix: <span class="token operator">|</span>all<span class="token punctuation">;</span>
 context: http,server,location,limit_except
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>启用控制</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>http <span class="token punctuation">{</span>
  <span class="token punctuation">..</span>.
  allow <span class="token number">192.168</span>.100.10<span class="token punctuation">;</span>
  deny all<span class="token punctuation">;</span>
  <span class="token punctuation">..</span>.
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基于用户-username-password" tabindex="-1"><a class="header-anchor" href="#基于用户-username-password" aria-hidden="true">#</a> 基于用户（username&amp;password)</h2><p>module:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ngx_http_auth_basic_module
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Syntax 1:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>auth_basic string <span class="token operator">|</span> off<span class="token punctuation">;</span>
context: http,server,location,limit_expcet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Syntax 2:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>auth_basic_user_file <span class="token function">file</span>
context: http,server,location,limit_except
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>启用控制：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> httpd-tools
htpasswd <span class="token parameter variable">-cm</span> /etc/nginx/conf.d/passwd username10
<span class="token parameter variable">-c</span> 新的
<span class="token parameter variable">-m</span>  Force MD5 encryption of the password <span class="token punctuation">(</span>default<span class="token punctuation">)</span>
htpasswd <span class="token parameter variable">-m</span> /etc/nginx/conf.d/passwd username20
<span class="token function">cat</span> /etc/nginx/conf.d/passwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
  auth_basic <span class="token string">&quot;来了老铁,对一下暗号！！&quot;</span><span class="token punctuation">;</span>
  auth_basic_user_file /etc/nginx/conf.d/passwd<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,292),c=[p];function o(r,d){return s(),a("div",null,c)}const m=n(t,[["render",o],["__file","nginx01.html.vue"]]);export{m as default};
