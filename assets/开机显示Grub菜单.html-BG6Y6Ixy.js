import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{aj as a,ao as e,am as n}from"./app-COjiYc5s.js";const t={};function h(l,i){return n(),a("div",null,i[0]||(i[0]=[e(`<h1 id="开机显示grub菜单" tabindex="-1"><a class="header-anchor" href="#开机显示grub菜单"><span>开机显示Grub菜单</span></a></h1><h2 id="开机显示菜单" tabindex="-1"><a class="header-anchor" href="#开机显示菜单"><span>开机显示菜单</span></a></h2><p>/etc/default/grub</p><div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" data-title="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">GRUB_DEFAULT</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">GRUB_TIMEOUT_STYLE</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">menu # default:menu config hidden</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">GRUB_TIMEOUT</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">6</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> # default:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">GRUB_DISTRIBUTOR</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\`lsb_release </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">i </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">s </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&gt;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> /</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">dev</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">null </span><span style="--shiki-light:#A626A4;--shiki-dark:#56B6C2;">||</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> echo Debian\`</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">GRUB_CMDLINE_LINUX_DEFAULT</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">GRUB_CMDLINE_LINUX</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">update-grub</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="让用户在grub开机菜单选定的开机项目自动成为默认值" tabindex="-1"><a class="header-anchor" href="#让用户在grub开机菜单选定的开机项目自动成为默认值"><span>让用户在Grub开机菜单选定的开机项目自动成为默认值</span></a></h2><div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" data-title="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">GRUB_SAVEDEFAULT</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">GRUB_DEFAULT</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">saved</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> grub-mkconfig</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -o</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /boot/grub/grub.cfg</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,8)]))}const p=s(t,[["render",h],["__file","开机显示Grub菜单.html.vue"]]),d=JSON.parse('{"path":"/note-book/GRUB/%E5%BC%80%E6%9C%BA%E6%98%BE%E7%A4%BAGrub%E8%8F%9C%E5%8D%95.html","title":"开机显示Grub菜单","lang":"zh-CN","frontmatter":{"description":"开机显示Grub菜单 开机显示菜单 /etc/default/grub 让用户在Grub开机菜单选定的开机项目自动成为默认值","head":[["meta",{"property":"og:url","content":"https://www.geekery.cn/note-book/GRUB/%E5%BC%80%E6%9C%BA%E6%98%BE%E7%A4%BAGrub%E8%8F%9C%E5%8D%95.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"开机显示Grub菜单"}],["meta",{"property":"og:description","content":"开机显示Grub菜单 开机显示菜单 /etc/default/grub 让用户在Grub开机菜单选定的开机项目自动成为默认值"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-09T06:06:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-09T06:06:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"开机显示Grub菜单\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-09T06:06:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"开机显示菜单","slug":"开机显示菜单","link":"#开机显示菜单","children":[]},{"level":2,"title":"让用户在Grub开机菜单选定的开机项目自动成为默认值","slug":"让用户在grub开机菜单选定的开机项目自动成为默认值","link":"#让用户在grub开机菜单选定的开机项目自动成为默认值","children":[]}],"git":{"createdTime":1691939318000,"updatedTime":1728453960000,"contributors":[{"name":"PaperDragon-SH","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":0.24,"words":73},"filePathRelative":"note-book/GRUB/开机显示Grub菜单.md","localizedDate":"2023年8月13日","excerpt":"\\n<h2>开机显示菜单</h2>\\n<p>/etc/default/grub</p>\\n<div class=\\"language-c line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"c\\" data-title=\\"c\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">GRUB_DEFAULT</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">=</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">0</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">GRUB_TIMEOUT_STYLE</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">=</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">menu # default:menu config hidden</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">GRUB_TIMEOUT</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">=</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">6</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> # default:</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">0</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">GRUB_DISTRIBUTOR</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">=</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">`lsb_release </span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">-</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">i </span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">-</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">s </span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">2</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">&gt;</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> /</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">dev</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">/</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">null </span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#56B6C2\\">||</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> echo Debian`</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">GRUB_CMDLINE_LINUX_DEFAULT</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">=</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"\\"</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">GRUB_CMDLINE_LINUX</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">=</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"\\"</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{p as comp,d as data};
