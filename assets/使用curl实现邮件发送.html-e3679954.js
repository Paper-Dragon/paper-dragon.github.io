import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as n,f as e}from"./app-00c110d1.js";const i="/assets/image-20220810164720943-aecbc74f.png",l="/assets/image-20220810164713378-7d8e04d8.png",t={},r=e(`<h1 id="使用curl实现邮件发送" tabindex="-1"><a class="header-anchor" href="#使用curl实现邮件发送" aria-hidden="true">#</a> 使用curl实现邮件发送</h1><h1 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h1><p>本文讲解如何通过curl实现邮件发送功能，通过此功能，可以将一些配置信息自动发送到指定邮箱，满足自动运维要求。<br> 测试发件邮箱：sina<br> 测试收件邮箱：qq</p><h1 id="脚本实例" tabindex="-1"><a class="header-anchor" href="#脚本实例" aria-hidden="true">#</a> 脚本实例</h1><p>curl_send_mail.bat</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>@echo off
rem 使用curl实现邮件发送
rem -------------------------------------------
rem 参数
<span class="token builtin class-name">set</span> <span class="token assign-left variable">smtp</span><span class="token operator">=</span><span class="token string">&quot;smtp://smtp.sina.com&quot;</span>
<span class="token builtin class-name">set</span> <span class="token assign-left variable">mail_from</span><span class="token operator">=</span>发件地址@sina.com
<span class="token builtin class-name">set</span> <span class="token assign-left variable">mail_to</span><span class="token operator">=</span>收件地址@sina.com
<span class="token builtin class-name">set</span> <span class="token assign-left variable">data</span><span class="token operator">=</span>mail.txt
<span class="token builtin class-name">set</span> <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token string">&quot;发件人用户名:发件人密码&quot;</span>
rem -------------------------------------------
rem 编写邮件头消息
<span class="token builtin class-name">echo</span> From:%mail_from% <span class="token operator">&gt;</span> %data%
<span class="token builtin class-name">echo</span> To:%mail_to% <span class="token operator">&gt;&gt;</span> %data%
<span class="token builtin class-name">echo</span> Subject:邮件内容标题 %date%<span class="token operator">&gt;&gt;</span> %data%
echo.<span class="token operator">&gt;&gt;</span> %data%

<span class="token builtin class-name">echo</span> 这里填写具体的邮件内容 <span class="token operator">&gt;&gt;</span> %data%
rem 例如：获取当前的外网地址信息
rem <span class="token function">curl</span> ifconfig.me <span class="token operator">&gt;&gt;</span> %data%
rem -------------------------------------------
rem 发送邮件
<span class="token function">curl</span> <span class="token parameter variable">--verbose</span> <span class="token parameter variable">-s</span> <span class="token parameter variable">--url</span> <span class="token string">&quot;%smtp%&quot;</span> --mail-from %mail_from% --mail-rcpt %mail_to% --upload-file %data% <span class="token parameter variable">--user</span> %user%

rem 删除临时文件
del %data%
pause

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="执行结果" tabindex="-1"><a class="header-anchor" href="#执行结果" aria-hidden="true">#</a> 执行结果</h1><figure><img src="`+i+'" alt="image-20220810164720943" tabindex="0" loading="lazy"><figcaption>image-20220810164720943</figcaption></figure><h1 id="邮箱配置" tabindex="-1"><a class="header-anchor" href="#邮箱配置" aria-hidden="true">#</a> 邮箱配置</h1><p>新浪邮箱配置：<br><img src="'+l+'" alt="image-20220810164713378" loading="lazy"></p>',10),c=[r];function o(d,p){return s(),n("div",null,c)}const v=a(t,[["render",o],["__file","使用curl实现邮件发送.html.vue"]]);export{v as default};
