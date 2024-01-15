import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,e as t}from"./app-vUm-oK7Z.js";const e={},i=t(`<h1 id="gitlab配置邮件服务器" tabindex="-1"><a class="header-anchor" href="#gitlab配置邮件服务器" aria-hidden="true">#</a> Gitlab配置邮件服务器</h1><h2 id="outlook" tabindex="-1"><a class="header-anchor" href="#outlook" aria-hidden="true">#</a> outlook</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">### Email Settings</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;gitlab_email_enabled&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;gitlab_email_from&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;gerrit@xxxx.com&#39;</span>
<span class="token comment"># gitlab_rails[&#39;gitlab_email_display_name&#39;] = &#39;Example&#39;</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;gitlab_email_reply_to&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;gerrit@xxxx.com&#39;</span>
<span class="token comment"># gitlab_rails[&#39;gitlab_email_subject_suffix&#39;] = &#39;&#39;</span>


<span class="token comment">### GitLab email server settings</span>
<span class="token comment">###! Docs: https://docs.gitlab.com/omnibus/settings/smtp.html</span>
<span class="token comment">###! **Use smtp instead of sendmail/postfix.**</span>

gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_enable&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_address&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;smtp.office365.com&quot;</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_port&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">587</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_user_name&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;gerrit@xxxx.com&quot;</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_password&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;xxxx&quot;</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_domain&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;xxxx.com&quot;</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_authentication&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;login&quot;</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_enable_starttls_auto&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token comment">#gitlab_rails[&#39;smtp_tls&#39;] = false</span>

<span class="token comment">###! **Can be: &#39;none&#39;, &#39;peer&#39;, &#39;client_once&#39;, &#39;fail_if_no_peer_cert&#39;**</span>
<span class="token comment">###! Docs: http://api.rubyonrails.org/classes/ActionMailer/Base.html</span>
<span class="token comment"># gitlab_rails[&#39;smtp_openssl_verify_mode&#39;] = &#39;none&#39;</span>

<span class="token comment"># gitlab_rails[&#39;smtp_ca_path&#39;] = &quot;/etc/ssl/certs&quot;</span>
<span class="token comment"># gitlab_rails[&#39;smtp_ca_file&#39;] = &quot;/etc/ssl/certs/ca-certificates.crt&quot;</span>

<span class="token comment">################################################################################</span>
<span class="token comment">## Container Registry settings</span>
<span class="token comment">##! Docs: https://docs.gitlab.com/ce/administration/container_registry.html</span>
<span class="token comment">################################################################################</span>

<span class="token comment"># registry_external_url &#39;https://registry.gitlab.example.com&#39;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="qq-mail" tabindex="-1"><a class="header-anchor" href="#qq-mail" aria-hidden="true">#</a> QQ Mail</h2><p>与Outlook不同的是</p><ul><li>密码填授权码</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
以QQ邮箱为例
    邮箱地址：xxxxxxxx@qq.com
    SMTP服务器地址：一般是smtp.qq.com
    SMTP服务器端口号：一般是456
    登录QQ邮箱并生成QQ邮箱第三方登录授权码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_enable&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_address&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;smtp.qq.com&quot;</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_port&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">465</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_user_name&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;xxx@qq.com&quot;</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_password&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;从你的qq邮箱获得&quot;</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_domain&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;smtp.qq.com&quot;</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_authentication&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;login&quot;</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_enable_starttls_auto&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_tls&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token comment">##配置邮箱来源， 与展示的名称</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;gitlab_email_enabled&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;gitlab_email_from&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;xx@qq.com&#39;</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;gitlab_email_display_name&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;Gitlab&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他的都类似" tabindex="-1"><a class="header-anchor" href="#其他的都类似" aria-hidden="true">#</a> 其他的都类似</h2><h1 id="测试是否配置成功" tabindex="-1"><a class="header-anchor" href="#测试是否配置成功" aria-hidden="true">#</a> 测试是否配置成功</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>gitlab-rails console

<span class="token comment">#进入控制台，然后发送邮件</span>
Notify.test_email<span class="token punctuation">(</span><span class="token string">&#39;xxx@qq.com&#39;</span>, <span class="token string">&#39;邮件标题&#39;</span>, <span class="token string">&#39;邮件正文&#39;</span><span class="token punctuation">)</span>.deliver_now
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),l=[i];function p(o,c){return n(),a("div",null,l)}const d=s(e,[["render",p],["__file","Gitlab配置邮件服务器.html.vue"]]);export{d as default};
