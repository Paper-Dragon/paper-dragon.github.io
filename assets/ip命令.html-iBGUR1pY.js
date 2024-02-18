import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as s,d as a}from"./app-DWqNWURK.js";const i={},t=a(`<h1 id="用ip命令管理网桥bridge" tabindex="-1"><a class="header-anchor" href="#用ip命令管理网桥bridge"><span>用IP命令管理网桥bridge</span></a></h1><h2 id="link" tabindex="-1"><a class="header-anchor" href="#link"><span>link</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># ip link add name bridge_name type bridge 也可以简化 ip link add bridge_name type bridge</span>
<span class="token comment"># ip link set bridge_name up</span>
想要添加Interface到网桥上，interface状态必须是Up
<span class="token comment"># ip link set eth0 up</span>
添加eth0 interface到网桥上
<span class="token comment"># ip link set eth0 master bridge_name</span>
从网桥解绑eth0
<span class="token comment"># ip link set eth0 nomaster</span>
eth0 可以关闭的
<span class="token comment"># ip link set eth0 down</span>
删除网桥可以用
<span class="token comment"># ip link delete bridge_name type bridge</span>
也可以简化为
<span class="token comment"># ip link del bridge_name</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="route" tabindex="-1"><a class="header-anchor" href="#route"><span>route</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>列出路由
<span class="token function">ip</span> route list
<span class="token function">ip</span> route show
<span class="token function">ip</span> route

查看指定网段的路由
<span class="token function">ip</span> route list <span class="token number">192.168</span>.1.0/24

添加路由
<span class="token function">ip</span> route <span class="token function">add</span> <span class="token number">192.168</span>.2.0/24 via <span class="token number">192.168</span>.1.1

追加路由
<span class="token function">ip</span> route append <span class="token number">192.168</span>.2.0/24 via <span class="token number">192.168</span>.1.12 <span class="token comment">#追加一个指定网络的路由，为了平滑切换网关使用</span>

修改路由
<span class="token function">ip</span> route change <span class="token number">192.168</span>.2.0/24 via <span class="token number">192.168</span>.1.11
<span class="token function">ip</span> route replace <span class="token number">192.168</span>.2.0/24 via <span class="token number">192.168</span>.1.111

删除路由
<span class="token function">ip</span> route del <span class="token number">192.168</span>.2.0/24 via <span class="token number">192.168</span>.1.1

清空指定网络的路由
<span class="token function">ip</span> route flush <span class="token number">192.168</span>.2.0/24 <span class="token comment">#这个是清理所有192.168.2.0/24相关的所有路由，有时候设置错网关存在多条记录，就需要一次性清空相关路由再进行添加</span>
添加默认路由
<span class="token function">ip</span> route <span class="token function">add</span> default via <span class="token number">192.168</span>.1.1
指定路由metirc
<span class="token function">ip</span> route <span class="token function">add</span> <span class="token number">192.168</span>.2.0/24 via <span class="token number">192.168</span>.1.15 metric <span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),l=[t];function p(r,c){return e(),s("div",null,l)}const m=n(i,[["render",p],["__file","ip命令.html.vue"]]),u=JSON.parse('{"path":"/note-book/OperaSystems/ip%E5%91%BD%E4%BB%A4.html","title":"用IP命令管理网桥bridge","lang":"zh-CN","frontmatter":{"description":"用IP命令管理网桥bridge link route ","head":[["meta",{"property":"og:url","content":"https://paper-dragon.github.io/note-book/OperaSystems/ip%E5%91%BD%E4%BB%A4.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"用IP命令管理网桥bridge"}],["meta",{"property":"og:description","content":"用IP命令管理网桥bridge link route "}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-13T15:08:38.000Z"}],["meta",{"property":"article:author","content":"PaperDragon"}],["meta",{"property":"article:modified_time","content":"2023-08-13T15:08:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"用IP命令管理网桥bridge\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-13T15:08:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"link","slug":"link","link":"#link","children":[]},{"level":2,"title":"route","slug":"route","link":"#route","children":[]}],"git":{"createdTime":1691939318000,"updatedTime":1691939318000,"contributors":[{"name":"PaperDragon","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":0.97,"words":292},"filePathRelative":"note-book/OperaSystems/ip命令.md","localizedDate":"2023年8月13日","excerpt":"\\n<h2>link</h2>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token comment\\"># ip link add name bridge_name type bridge 也可以简化 ip link add bridge_name type bridge</span>\\n<span class=\\"token comment\\"># ip link set bridge_name up</span>\\n想要添加Interface到网桥上，interface状态必须是Up\\n<span class=\\"token comment\\"># ip link set eth0 up</span>\\n添加eth0 interface到网桥上\\n<span class=\\"token comment\\"># ip link set eth0 master bridge_name</span>\\n从网桥解绑eth0\\n<span class=\\"token comment\\"># ip link set eth0 nomaster</span>\\neth0 可以关闭的\\n<span class=\\"token comment\\"># ip link set eth0 down</span>\\n删除网桥可以用\\n<span class=\\"token comment\\"># ip link delete bridge_name type bridge</span>\\n也可以简化为\\n<span class=\\"token comment\\"># ip link del bridge_name</span>\\n</code></pre></div>","autoDesc":true}');export{m as comp,u as data};
