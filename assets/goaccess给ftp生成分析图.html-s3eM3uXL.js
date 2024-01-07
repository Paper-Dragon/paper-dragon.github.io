import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-PpIpI0x9.js";const i={},l=e(`<h1 id="goaccess给ftp生成分析图" tabindex="-1"><a class="header-anchor" href="#goaccess给ftp生成分析图" aria-hidden="true">#</a> goaccess给ftp生成分析图</h1><blockquote><p>官网：https://goaccess.io/</p><p>源码： https://github.com/allinurl/goaccess</p></blockquote><h2 id="日志格式" tabindex="-1"><a class="header-anchor" href="#日志格式" aria-hidden="true">#</a> 日志格式</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Sat Oct <span class="token number">7</span> <span class="token number">2023</span> <span class="token number">14</span>:41:57 <span class="token number">1</span> <span class="token number">113.57</span>.80.113 <span class="token number">61</span> /catfish.txt b _ POST g LiuDanYi <span class="token function">ftp</span> <span class="token number">0</span> * <span class="token number">200</span>
Wed Oct <span class="token number">4</span> <span class="token number">2023</span> <span class="token number">16</span>:20:24 <span class="token number">24</span> <span class="token number">113.57</span>.80.113 <span class="token number">62537788</span> /textbook/ppts/L4-数据集成技术基础.pptx b _ GET g LiuDanYi <span class="token function">ftp</span> <span class="token number">0</span> * <span class="token number">200</span>
Wed Oct <span class="token number">4</span> <span class="token number">2023</span> <span class="token number">16</span>:19:15 <span class="token number">1</span> <span class="token number">113.57</span>.80.113 <span class="token number">137039</span> /textbook/works/作业3_catfish.pdf b _ GET g LiuDanYi <span class="token function">ftp</span> <span class="token number">0</span> * <span class="token number">200</span>
Wed Oct <span class="token number">4</span> <span class="token number">2023</span> <span class="token number">16</span>:18:09 <span class="token number">1</span> <span class="token number">113.57</span>.80.113 <span class="token number">137039</span> /textbook/works/作业3_catfish.pdf b _ GET g LiuDanYi <span class="token function">ftp</span> <span class="token number">0</span> * <span class="token number">200</span>
Wed Oct <span class="token number">4</span> <span class="token number">2023</span> <span class="token number">16</span>:16:45 <span class="token number">1</span> <span class="token number">113.57</span>.80.113 <span class="token number">267</span> /salmon_score.txt b _ GET g LiuDanYi <span class="token function">ftp</span> <span class="token number">0</span> * <span class="token number">200</span>
Sat Sep <span class="token number">23</span> <span class="token number">2023</span> <span class="token number">17</span>:57:18 <span class="token number">1</span> <span class="token number">113.57</span>.80.8 <span class="token number">61</span> /salmon.txt b _ POST g LiuDanYi <span class="token function">ftp</span> <span class="token number">0</span> * <span class="token number">200</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="识别格式" tabindex="-1"><a class="header-anchor" href="#识别格式" aria-hidden="true">#</a> 识别格式</h2><div class="language-bahs line-numbers-mode" data-ext="bahs"><pre class="language-bahs"><code>time-format 参数 time-format 后跟随一个空格符，指定日志的时间格式，包含普通字符与特殊格式说明符的任意组合。他们都由百分号 (%)开始。参考 \`man strftime\`。 %T 或者 %H:%M:%S.
​
注意: 如果给定的时间戳以微秒计算，则必须在 time-format 中使用参数 %f 。
​
date-format 参数 date-format 后跟随一个空格符，指定日志的日期格式，包含普通字符与特殊格式说明符的任意组合。他们都由百分号 (%)开始。参考 \`man strftime\`。
​
注意: 如果给定的时间戳以微秒计算，则必须在 time-format 中使用参数 %f 。
​
log-format 参数 log-format 后跟随一个空格符或者制表分隔符(\\t)，用于指定日志字符串格式。
​
特殊格式说明符
%x 匹配 time-format 和 date-format 变量的日期和时间字段。用于使用时间戳来代替日期和时间两个独立变量的场景。
%t 匹配 time-format 变量的时间字段。
%d 匹配 date-format 变量的日期字段。
%v 根据 canonical 名称设定的服务器名称(服务区或者虚拟主机)。
%e 请求文档时由 HTTP 验证决定的用户 ID。
%h 主机(客户端IP地址，IPv4 或者 IPv6)。
%r 客户端请求的行数。这些请求使用分隔符(单引号，双引号)引用的部分可以被解析。否则，需要使用由特殊格式说明符(例如：%m, %U, %q 和 %H)组合格式去解析独立的字段。
注意: 既可以使用 %r 获取完整的请求，也可以使用 %m, %U, %q and %H 去组合你的请求，但是不能同时使用。
%m 请求的方法。
%U 请求的 URL。
注意: 如果查询字符串在 %U中，则无需使用 %q。但是，如果 URL 路径中没有包含任何查询字符串，则你可以使用 %q 查询字符串将附加在请求后面。
%q 查询字符串。
%H 请求协议。
%s 服务器回传客户端的状态码。
%b 回传客户端的对象的大小。
%R HTTP 请求的 &quot;Referer&quot; 值。
%u HTTP 请求的 &quot;UserAgent&quot; 值。
%D 处理请求的时间消耗，使用微秒计算。
%T 处理请求的时间消耗，使用带秒和毫秒计算。
%L 处理请求的时间消耗，使用十进制数表示的毫秒计算。
%^ 忽略此字段。
%~ 继续解析日志字符串直到找到一个非空字符(!isspace)。
~h 在 X-Forwarded-For (XFF) 字段中的主机(客户端 IP 地址，IPv4 或者 IPv6)。
针对 XFF， GoAccess 使用了一个特殊符号，即由一个波浪号+主机说明符构成，然后紧跟由大括号封装起来的 XFF 限定字段(例：~h{,&quot;})。
举例如下， ~h{,&quot; } 用于解析 &quot;11.25.11.53, 17.68.33.17&quot; 字段由一对双引号，一个逗号和一个空格限定。
 注意
为了得到平均，累计，最大处理时间，将需要开始在 Web 服务器中记录响应次数。在 Nginx 中可以添加 $request_time 到日志格式中，或者 %D 在 Apache 中。
 重要
如果同时使用了多个处理时间的特殊说明符，则在格式字符串中第一个指定的选项具有最高优先级。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="中文goaccess" tabindex="-1"><a class="header-anchor" href="#中文goaccess" aria-hidden="true">#</a> 中文goaccess</h2><p>使用变量LANG来改变生成的语言</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span>zh_CN.utf-8 goaccess  --date-format<span class="token operator">=</span><span class="token string">&#39;%b %d&#39;</span> --time-format<span class="token operator">=</span><span class="token string">&#39;%T&#39;</span> --log-format<span class="token operator">=</span><span class="token string">&#39;%^ %d %t %^ %T %h %b %U %^ _ %m %^ %e %^ %^ %^ %s&#39;</span> snapper.log <span class="token parameter variable">-o</span> index.html


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),t=[l];function c(r,d){return s(),a("div",null,t)}const m=n(i,[["render",c],["__file","goaccess给ftp生成分析图.html.vue"]]);export{m as default};
