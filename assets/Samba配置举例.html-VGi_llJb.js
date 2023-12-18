import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as e,e as n}from"./app-6TPPU4Zq.js";const r={},i=n(`<h1 id="samba配置举例" tabindex="-1"><a class="header-anchor" href="#samba配置举例" aria-hidden="true">#</a> Samba配置举例</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>YOUR-SHARE-NAME<span class="token punctuation">]</span>
        path <span class="token operator">=</span> /home/NAME/
        available <span class="token operator">=</span> <span class="token function">yes</span>
        browsable <span class="token operator">=</span> <span class="token function">yes</span>
        public    <span class="token operator">=</span> <span class="token function">yes</span>
        writable  <span class="token operator">=</span> <span class="token function">yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token punctuation">[</span>YOUR<span class="token operator">-</span>SHARE<span class="token operator">-</span>NAME<span class="token punctuation">]</span>
	comment <span class="token operator">=</span> arm ubuntu samba dir
  path <span class="token operator">=</span> <span class="token operator">/</span>home	#共享路径
  available <span class="token operator">=</span> yes
  browseable <span class="token operator">=</span> yes
  public <span class="token operator">=</span> yes
  writable <span class="token operator">=</span> yes
  create mask <span class="token operator">=</span> <span class="token number">0755</span>
  security <span class="token operator">=</span> share
<span class="token macro property"><span class="token directive-hash">#</span>  <span class="token directive keyword">force</span> <span class="token expression">user <span class="token operator">=</span> root				# 若想以root权限登录samba则可以打开这两个注释</span></span>
<span class="token macro property"><span class="token directive-hash">#</span>  <span class="token directive keyword">arm</span> <span class="token expression">force group <span class="token operator">=</span> root</span></span>
  vaild user <span class="token operator">=</span> “你的用户名”	#用户名
  guest ok <span class="token operator">=</span> no
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="samba添加用户" tabindex="-1"><a class="header-anchor" href="#samba添加用户" aria-hidden="true">#</a> samba添加用户</h1><h2 id="_1-添加用户" tabindex="-1"><a class="header-anchor" href="#_1-添加用户" aria-hidden="true">#</a> 1.添加用户</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>sudo useradd 用户名（用于登录的）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-添加samba用户和密码" tabindex="-1"><a class="header-anchor" href="#_2-添加samba用户和密码" aria-hidden="true">#</a> 2.添加samba用户和密码</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>smbpasswd <span class="token operator">-</span>a 与步骤一相同的用户名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-检查是否添加成功" tabindex="-1"><a class="header-anchor" href="#_3-检查是否添加成功" aria-hidden="true">#</a> 3.检查是否添加成功</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>pdbedit <span class="token operator">-</span><span class="token class-name">L</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,10),o=[i];function t(l,d){return s(),e("div",null,o)}const u=a(r,[["render",t],["__file","Samba配置举例.html.vue"]]);export{u as default};
