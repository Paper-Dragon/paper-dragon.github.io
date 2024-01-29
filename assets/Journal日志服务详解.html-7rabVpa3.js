import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,d as e}from"./app-AWm8mC-g.js";const l={},o=e(`<h1 id="journal日志服务详解" tabindex="-1"><a class="header-anchor" href="#journal日志服务详解"><span>Journal日志服务详解</span></a></h1><h2 id="journal日志服务" tabindex="-1"><a class="header-anchor" href="#journal日志服务"><span>Journal日志服务</span></a></h2><blockquote><p>journalctl 用来查询 systemd-journald 服务收集到的日志。systemd-journald 服务是 systemd init 系统提供的收集系统日志的服务。</p></blockquote><p>常用命令行</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>journalctl 查看所有日志

journalctl --disk-usage 用于查看目前日志占用了多少磁盘空间

journalctl <span class="token parameter variable">-n</span> <span class="token number">4</span> 查看最新的4行日志

journalctl <span class="token parameter variable">--since</span><span class="token operator">=</span><span class="token number">2020</span>-06-23 查看从2020-06-23开始的日志

journalctl <span class="token parameter variable">--since</span><span class="token operator">=</span><span class="token number">13</span>:00 查看从13:00开始的日志

journalctl <span class="token parameter variable">--until</span><span class="token operator">=</span><span class="token number">2020</span>-06-23 查看截止到2020-06-23的日志

journalctl <span class="token parameter variable">--until</span><span class="token operator">=</span><span class="token number">13</span>:00 查看截止到13:00的日志

journalctl <span class="token parameter variable">--since</span> <span class="token function">time</span> <span class="token parameter variable">--until</span> <span class="token function">time</span> 查看某一时间段内的日志

journalctl <span class="token parameter variable">-p</span> err 查看error级别的日志（同理可改为info、warning等级别）

journalctl <span class="token parameter variable">-o</span> verbose 查看日志详细信息

journalctl <span class="token assign-left variable">_PID</span><span class="token operator">=</span>num <span class="token assign-left variable">_COMM</span><span class="token operator">=</span>sshd 查看特定pid和特定命令的日志信息

<span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span><span class="token operator">&gt;</span> /var/log/journal/2019100817110995251777489178452/system.journal 清空当前正在记录的日志文件

journalctl --vacuum-time<span class="token operator">=</span>1m 仅保留最近一个月的日志文件

journalctl --vacuum-size<span class="token operator">=</span>500M 仅保留500MB大小的日志文件

systemctl restart systemd-journald 服务控制
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置文件参数详解" tabindex="-1"><a class="header-anchor" href="#配置文件参数详解"><span>配置文件参数详解</span></a></h2><blockquote><p>配置文件所在位置：/etc/systemd/journald.conf默认状态所有选项均为注释状态</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Journal<span class="token punctuation">]</span>
<span class="token assign-left variable">Storage</span><span class="token operator">=</span>auto           <span class="token comment">#存储日志文件位置（&quot;volatile&quot; 表示仅保存在内存中，路径：/run/log/journal 、&quot;persistent&quot; 表示优先保存在磁盘上，路径：优先保存在 /var/log/journal、&quot;auto&quot;默认值、&quot;none&quot;不保存任何日志）</span>
<span class="token assign-left variable">Compress</span><span class="token operator">=</span>yes            <span class="token comment">#压缩存储大于特定阈值的对象</span>
<span class="token assign-left variable">Seal</span><span class="token operator">=</span>yes          <span class="token comment">#如果存在一个&quot;sealing key&quot;， 那么就为所有持久保存的日志文件启用 FSS验证</span>
<span class="token assign-left variable">SplitMode</span><span class="token operator">=</span>uid   <span class="token comment">#是否按用户进行日志分割（分割策略：&quot;uid&quot; 表示每个用户都有专属日志文件系统用户仍写进系统日志，&quot;none&quot; 不进行日志分割，所有用户日志均写进系统日志</span>
<span class="token assign-left variable">SyncIntervalSec</span><span class="token operator">=</span>5m    <span class="token comment">#向磁盘刷写日志时间间隔（error以上，不含error级别日志会立即刷写）</span>
<span class="token assign-left variable">RateLimitInterval</span><span class="token operator">=</span>30s    
<span class="token assign-left variable">RateLimitBurst</span><span class="token operator">=</span><span class="token number">1000</span>    <span class="token comment">#上下两个选项表示在30s内每个服务最多纪录1000条日志，多余日志丢弃</span>
<span class="token assign-left variable">SystemMaxUse</span><span class="token operator">=</span>       <span class="token comment">#全部日志最大占用磁盘空间</span>
<span class="token assign-left variable">SystemKeepFree</span><span class="token operator">=</span>     <span class="token comment">#除日志文件之外，至少保留多少空间给其他用途（磁盘）</span>
<span class="token assign-left variable">SystemMaxFileSize</span><span class="token operator">=</span>     <span class="token comment">#单个日志文件最大占用磁盘空间</span>
<span class="token assign-left variable">RuntimeMaxUse</span><span class="token operator">=</span>      <span class="token comment">#全部日志最大占用内存空间</span>
<span class="token assign-left variable">RuntimeKeepFree</span><span class="token operator">=</span>    <span class="token comment">#除日志文件之外，至少保留多少空间给其他用途（内存）</span>
<span class="token assign-left variable">RuntimeMaxFileSize</span><span class="token operator">=</span>     <span class="token comment">#单个日志文件最大占用内存大小</span>
<span class="token assign-left variable">MaxRetentionSec</span><span class="token operator">=</span>      <span class="token comment">#日志文件最大保留期限（超过该时间自动删除）</span>
<span class="token assign-left variable">MaxFileSec</span><span class="token operator">=</span>1month     <span class="token comment">#日志滚动时间间隔</span>
<span class="token assign-left variable">ForwardToSyslog</span><span class="token operator">=</span>yes   <span class="token comment">#表示是否将接收到的日志消息转发给传统的 syslog 守护进程</span>
<span class="token assign-left variable">ForwardToKMsg</span><span class="token operator">=</span>no        <span class="token comment">#表示是否将接收到的日志消息转发给内核日志缓冲区(kmsg)</span>
<span class="token assign-left variable">ForwardToConsole</span><span class="token operator">=</span>no    <span class="token comment">#表示是否将接收到的日志消息转发给系统控制台</span>
<span class="token assign-left variable">ForwardToWall</span><span class="token operator">=</span>yes      <span class="token comment">#表示是否将接收到的日志消息作为警告信息发送给所有已登录用户</span>
<span class="token assign-left variable">TTYPath</span><span class="token operator">=</span>/dev/console     
<span class="token assign-left variable">MaxLevelStore</span><span class="token operator">=</span>debug      <span class="token comment">#表示记录到日志中的最高日志等级</span>
<span class="token assign-left variable">MaxLevelSyslog</span><span class="token operator">=</span>debug     <span class="token comment">#转发给syslog进程的最高日志等级</span>
<span class="token assign-left variable">MaxLevelKMsg</span><span class="token operator">=</span>notice     <span class="token comment">#转发给内核日志缓冲区(kmsg)的最高日志等级</span>
<span class="token assign-left variable">MaxLevelConsole</span><span class="token operator">=</span>info     <span class="token comment">#转发给系统控制台的最高日志等级</span>
<span class="token assign-left variable">MaxLevelWall</span><span class="token operator">=</span>emerg     <span class="token comment">#置作为警告信息发送给所有已登录用户的最高日志等级</span>
<span class="token assign-left variable">LineMax</span><span class="token operator">=</span>48K     <span class="token comment">#每条日志记录最大的字节长度，超长部分自动打分割符进行分割</span>
~

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),t=[o];function i(r,p){return n(),a("div",null,t)}const v=s(l,[["render",i],["__file","Journal日志服务详解.html.vue"]]);export{v as default};
