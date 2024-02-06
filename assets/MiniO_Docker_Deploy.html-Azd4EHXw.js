import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as s,d as e}from"./app-RvYdM1lh.js";const i={},t=e(`<h1 id="使用docker部署minio" tabindex="-1"><a class="header-anchor" href="#使用docker部署minio"><span>使用Docker部署minio</span></a></h1><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token assign-left variable">ENGINE</span><span class="token operator">=</span>docker
<span class="token assign-left variable">MINIO_ROOT</span><span class="token operator">=</span>/local_data/minio
<span class="token variable">\${ENGINE}</span> run <span class="token punctuation">\\</span>
    <span class="token parameter variable">--name</span> s3_minio <span class="token punctuation">\\</span>
    <span class="token parameter variable">--restart</span> always <span class="token punctuation">\\</span>
    <span class="token parameter variable">-p</span> <span class="token number">9005</span>:9005 <span class="token punctuation">\\</span>
    <span class="token parameter variable">-p</span> <span class="token number">9006</span>:9006 <span class="token punctuation">\\</span>
    <span class="token parameter variable">-e</span> <span class="token string">&quot;MINIO_ROOT_USER=shoulong.zhang&quot;</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-e</span> <span class="token string">&quot;MINIO_ROOT_PASSWORD=Sz@20211217&quot;</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-v</span> <span class="token variable">\${MINIO_ROOT}</span>/data:/data <span class="token punctuation">\\</span>
    <span class="token parameter variable">-v</span> <span class="token variable">\${MINIO_ROOT}</span>/config:/root/.minio <span class="token punctuation">\\</span>
    <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
    minio/minio:RELEASE.2022-01-04T07-41-07Z server /data --console-address <span class="token string">&quot;:9006&quot;</span> <span class="token parameter variable">--address</span> <span class="token string">&quot;:9005&quot;</span>
    

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="官方说明文档" tabindex="-1"><a class="header-anchor" href="#官方说明文档"><span>官方说明文档</span></a></h1><p>​</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code>https://docs.min.io/docs/minio-server-configuration-guide.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5),l=[t];function o(r,p){return n(),s("div",null,l)}const u=a(i,[["render",o],["__file","MiniO_Docker_Deploy.html.vue"]]);export{u as default};
