import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as d,c,b as n,d as e,a as s,e as i}from"./app-RHqyzOVr.js";const o={},t=i(`<h1 id="docker-pull" tabindex="-1"><a class="header-anchor" href="#docker-pull" aria-hidden="true">#</a> docker pull</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull <span class="token parameter variable">--help</span>

Usage:  <span class="token function">docker</span> pull <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> NAME<span class="token punctuation">[</span>:TAG<span class="token operator">|</span>@DIGEST<span class="token punctuation">]</span>
  
  从注册表中拉取镜像或镜像仓库

选项：
   -a, --all-tags 下载存储库中所有标记的镜像
       --disable-content-trust 跳过镜像验证（默认为 true）
       <span class="token parameter variable">--platform</span> string 如果服务器支持多平台则设置平台
   -q, <span class="token parameter variable">--quiet</span> 抑制详细输出
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="并发下载" tabindex="-1"><a class="header-anchor" href="#并发下载" aria-hidden="true">#</a> 并发下载</h2>`,3),u=n("code",null,"--max-concurrent-downloads",-1),p={href:"https://docs.docker.com/engine/reference/commandline/dockerd/",target:"_blank",rel:"noopener noreferrer"},v=i(`<h1 id="docker-push" tabindex="-1"><a class="header-anchor" href="#docker-push" aria-hidden="true">#</a> docker push</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> push <span class="token parameter variable">--help</span>

Usage:  <span class="token function">docker</span> push <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> NAME<span class="token punctuation">[</span>:TAG<span class="token punctuation">]</span>

将镜像或存储库推送到注册表

选项：
   -a, --all-tags 将所有标记的镜像推送到存储库中
       --disable-content-trust 跳过镜像签名（默认为真）
   -q, <span class="token parameter variable">--quiet</span> 抑制详细输出



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="并发推送" tabindex="-1"><a class="header-anchor" href="#并发推送" aria-hidden="true">#</a> <strong>并发推送</strong></h2>`,3),m=n("code",null,"--max-concurrent-uploads",-1),h={href:"https://docs.docker.com/engine/reference/commandline/dockerd/",target:"_blank",rel:"noopener noreferrer"};function b(k,_){const a=l("ExternalLinkIcon");return d(),c("div",null,[t,n("p",null,[e("默认情况下，Docker守护程序将一次提取图像的三个层。 如果您使用的是低带宽连接，这可能会导致超时问题，您可能需要降低这个选项 "),u,e(" daemon 选项.请参阅 "),n("a",p,[e("daemon documentation"),s(a)]),e(" 获得更多信息.")]),v,n("p",null,[e("默认情况下，Docker守护程序将一次推送图像的五个层。 如果您使用的是低带宽连接，这可能会导致超时问题，您可能需要降低 this via the "),m,e(" daemon option.请参阅 "),n("a",h,[e("daemon documentation"),s(a)]),e(" for more details.")])])}const x=r(o,[["render",b],["__file","docker pull push.html.vue"]]);export{x as default};
