import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as i,d as a}from"./app-j_b4sUmU.js";const l="/assets/image-20240525150720593-CWHPqZnM.png",s="/assets/image-20240525152119629-CWT8h6ib.png",t={},d=a(`<h1 id="alpine的apk数据库解释" tabindex="-1"><a class="header-anchor" href="#alpine的apk数据库解释"><span>Alpine的apk数据库解释</span></a></h1><blockquote><p>apk对于已安装文件用于跟踪已安装的软件包以及这些软件包对系统所做的修改。</p><p>该文件位于/lib/apk/db/installed</p></blockquote><h2 id="文件示例" tabindex="-1"><a class="header-anchor" href="#文件示例"><span>文件示例</span></a></h2><div class="language-txt line-numbers-mode" data-ext="txt" data-title="txt"><pre class="language-txt"><code>localhost:/lib/apk/db# head -50 installed
C:Q1uFrSebP91NTnM7BIHm3YcRY7ih0=
P:alpine-base
V:3.20.0-r0
A:x86_64
S:1492
I:4096
T:Meta package for minimal alpine base
U:https://alpinelinux.org
L:MIT
o:alpine-base
m:Natanael Copa &lt;ncopa@alpinelinux.org&gt;
t:1716371157
c:1402388a3a746e9961791846350e35f1d4d4618d
D:alpine-baselayout alpine-conf alpine-release apk-tools busybox busybox-mdev-openrc busybox-openrc busybox-suid musl-utils openrc

C:Q1qKcZ+j23xssAXmgQhkOO8dHnbWw=
P:alpine-baselayout
V:3.6.5-r0
A:x86_64
S:8515
I:315392
T:Alpine base dir structure and init scripts
U:https://git.alpinelinux.org/cgit/aports/tree/main/alpine-baselayout
L:GPL-2.0-only
o:alpine-baselayout
m:Natanael Copa &lt;ncopa@alpinelinux.org&gt;
t:1714981135
c:66187892e05b03a41d08e9acabd19b7576a1c875
D:alpine-baselayout-data=3.6.5-r0 /bin/sh
r:alpine-baselayout
q:1000
F:dev
F:dev/pts
F:dev/shm
F:etc
R:motd
Z:Q1SLkS9hBidUbPwwrw+XR0Whv3ww8=
F:etc/crontabs
R:root
a:0:0:600
Z:Q1vfk1apUWI4yLJGhhNRd0kJixfvY=
F:etc/modprobe.d
R:aliases.conf
Z:Q1WUbh6TBYNVK7e4Y+uUvLs/7viqk=
R:blacklist.conf
Z:Q14TdgFHkTdt3uQC+NBtrntOnm9n4=
R:i386.conf
Z:Q1pnay/njn6ol9cCssL7KiZZ8etlc=
R:kms.conf
Z:Q1ynbLn3GYDpvajba/ldp1niayeog=

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>目录结构</p><div class="language-txt line-numbers-mode" data-ext="txt" data-title="txt"><pre class="language-txt"><code>localhost:/lib/apk/db# ls -lh
total 504K
-rw-r--r--    1 root     root      467.9K May 25 14:51 installed
-rw-------    1 root     root           0 May 25 13:35 lock
-rw-r--r--    1 root     root       30.0K May 25 14:51 scripts.tar
-rw-r--r--    1 root     root         438 May 25 14:51 triggers
localhost:/lib/apk/db# tree .
.
├── installed
├── lock
├── scripts.tar
└── triggers

0 directories, 4 files

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解释说明" tabindex="-1"><a class="header-anchor" href="#解释说明"><span>解释说明</span></a></h2><blockquote><p>在源码中的定义</p><p>https://gitlab.alpinelinux.org/alpine/apk-tools/-/blob/ff7c8f6ee9dfa2add57b88dc271f6711030e72a0/src/database.c#L937</p></blockquote><ul><li>r: - 替换此软件包的软件包，以空格分隔的列表</li><li>q: - 替换优先级，整数，可选</li><li>s: - 存储库标签，可选，如果软件包已标记到世界文件中的存储库，则会设置此字段（例如：linux@testing）</li><li>f: - 指示损坏项，以空格分隔（f=文件，s=脚本，x=扩展属性，S=文件哈希）</li></ul><p>以下字段重复出现，并且在组中包含对系统所做的一组更改。</p><p>ACL行被指定为uid、冒号、gid、冒号和模式。</p><ul><li>F: - 软件包创建的目录名称，重复</li><li>M: - 目录ACL，仅当与默认值0:0:0755不同时</li><li>R: - 文件名，相对于前面的目录名称</li><li>a: - 文件ACL</li><li>Z: - 文件校验和，如果软件包中的校验和不是none，则Q1前缀表示这将是以base64格式的SHA1哈希</li></ul><p>更清晰的格式</p><figure><img src="`+l+'" alt="image-20240525150720593" tabindex="0" loading="lazy"><figcaption>image-20240525150720593</figcaption></figure><figure><img src="'+s+`" alt="image-20240525152119629" tabindex="0" loading="lazy"><figcaption>image-20240525152119629</figcaption></figure><p>在某个目录下的某个文件应该具有a开头的权限。</p><h2 id="用途" tabindex="-1"><a class="header-anchor" href="#用途"><span>用途</span></a></h2><p>如果是被恶意执行了下面的命令可以提取这个数据库文件进行恢复。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">chmod</span> 000 <span class="token parameter variable">-R</span> /
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>使用liveos引导进入临时系统</li><li>挂载root目录</li><li>设置整个root目录777的权限，把问题转化为从000权限到恢复777权限</li><li>chroot进入系统</li><li>书写脚本，功能是提取apk数据库并且设置权限，这里权限恢复了90%</li><li>设置特殊权限的文件 <code>apk audit</code>里面的文件，手动设置正确权限</li><li>重启后系统即可正常工作</li></ul>`,20),r=[d];function o(c,p){return i(),n("div",null,r)}const u=e(t,[["render",o],["__file","Alpine系统灾难恢复-恶意设置整个根目录000权限.html.vue"]]),m=JSON.parse('{"path":"/note-book/OperaSystems/Alpine/Alpine%E7%B3%BB%E7%BB%9F%E7%81%BE%E9%9A%BE%E6%81%A2%E5%A4%8D-%E6%81%B6%E6%84%8F%E8%AE%BE%E7%BD%AE%E6%95%B4%E4%B8%AA%E6%A0%B9%E7%9B%AE%E5%BD%95000%E6%9D%83%E9%99%90.html","title":"Alpine的apk数据库解释","lang":"zh-CN","frontmatter":{"description":"Alpine的apk数据库解释 apk对于已安装文件用于跟踪已安装的软件包以及这些软件包对系统所做的修改。 该文件位于/lib/apk/db/installed 文件示例 目录结构 解释说明 在源码中的定义 https://gitlab.alpinelinux.org/alpine/apk-tools/-/blob/ff7c8f6ee9dfa2add5...","head":[["meta",{"property":"og:url","content":"https://paper-dragon.github.io/note-book/OperaSystems/Alpine/Alpine%E7%B3%BB%E7%BB%9F%E7%81%BE%E9%9A%BE%E6%81%A2%E5%A4%8D-%E6%81%B6%E6%84%8F%E8%AE%BE%E7%BD%AE%E6%95%B4%E4%B8%AA%E6%A0%B9%E7%9B%AE%E5%BD%95000%E6%9D%83%E9%99%90.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"Alpine的apk数据库解释"}],["meta",{"property":"og:description","content":"Alpine的apk数据库解释 apk对于已安装文件用于跟踪已安装的软件包以及这些软件包对系统所做的修改。 该文件位于/lib/apk/db/installed 文件示例 目录结构 解释说明 在源码中的定义 https://gitlab.alpinelinux.org/alpine/apk-tools/-/blob/ff7c8f6ee9dfa2add5..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-25T07:27:46.000Z"}],["meta",{"property":"article:author","content":"PaperDragon"}],["meta",{"property":"article:modified_time","content":"2024-05-25T07:27:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Alpine的apk数据库解释\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-25T07:27:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"文件示例","slug":"文件示例","link":"#文件示例","children":[]},{"level":2,"title":"解释说明","slug":"解释说明","link":"#解释说明","children":[]},{"level":2,"title":"用途","slug":"用途","link":"#用途","children":[]}],"git":{"createdTime":1716622066000,"updatedTime":1716622066000,"contributors":[{"name":"PaperDragon","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":2.44,"words":732},"filePathRelative":"note-book/OperaSystems/Alpine/Alpine系统灾难恢复-恶意设置整个根目录000权限.md","localizedDate":"2024年5月25日","excerpt":"\\n<blockquote>\\n<p>apk对于已安装文件用于跟踪已安装的软件包以及这些软件包对系统所做的修改。</p>\\n<p>该文件位于/lib/apk/db/installed</p>\\n</blockquote>\\n<h2>文件示例</h2>\\n<div class=\\"language-txt\\" data-ext=\\"txt\\" data-title=\\"txt\\"><pre class=\\"language-txt\\"><code>localhost:/lib/apk/db# head -50 installed\\nC:Q1uFrSebP91NTnM7BIHm3YcRY7ih0=\\nP:alpine-base\\nV:3.20.0-r0\\nA:x86_64\\nS:1492\\nI:4096\\nT:Meta package for minimal alpine base\\nU:https://alpinelinux.org\\nL:MIT\\no:alpine-base\\nm:Natanael Copa &lt;ncopa@alpinelinux.org&gt;\\nt:1716371157\\nc:1402388a3a746e9961791846350e35f1d4d4618d\\nD:alpine-baselayout alpine-conf alpine-release apk-tools busybox busybox-mdev-openrc busybox-openrc busybox-suid musl-utils openrc\\n\\nC:Q1qKcZ+j23xssAXmgQhkOO8dHnbWw=\\nP:alpine-baselayout\\nV:3.6.5-r0\\nA:x86_64\\nS:8515\\nI:315392\\nT:Alpine base dir structure and init scripts\\nU:https://git.alpinelinux.org/cgit/aports/tree/main/alpine-baselayout\\nL:GPL-2.0-only\\no:alpine-baselayout\\nm:Natanael Copa &lt;ncopa@alpinelinux.org&gt;\\nt:1714981135\\nc:66187892e05b03a41d08e9acabd19b7576a1c875\\nD:alpine-baselayout-data=3.6.5-r0 /bin/sh\\nr:alpine-baselayout\\nq:1000\\nF:dev\\nF:dev/pts\\nF:dev/shm\\nF:etc\\nR:motd\\nZ:Q1SLkS9hBidUbPwwrw+XR0Whv3ww8=\\nF:etc/crontabs\\nR:root\\na:0:0:600\\nZ:Q1vfk1apUWI4yLJGhhNRd0kJixfvY=\\nF:etc/modprobe.d\\nR:aliases.conf\\nZ:Q1WUbh6TBYNVK7e4Y+uUvLs/7viqk=\\nR:blacklist.conf\\nZ:Q14TdgFHkTdt3uQC+NBtrntOnm9n4=\\nR:i386.conf\\nZ:Q1pnay/njn6ol9cCssL7KiZZ8etlc=\\nR:kms.conf\\nZ:Q1ynbLn3GYDpvajba/ldp1niayeog=\\n\\n</code></pre></div>","autoDesc":true}');export{u as comp,m as data};
