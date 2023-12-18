import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as e,e as a}from"./app-Lk-a7biu.js";const i={},l=a(`<h1 id="用ip命令管理网桥bridge" tabindex="-1"><a class="header-anchor" href="#用ip命令管理网桥bridge" aria-hidden="true">#</a> 用IP命令管理网桥bridge</h1><h2 id="link" tabindex="-1"><a class="header-anchor" href="#link" aria-hidden="true">#</a> link</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># ip link add name bridge_name type bridge 也可以简化 ip link add bridge_name type bridge</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="route" tabindex="-1"><a class="header-anchor" href="#route" aria-hidden="true">#</a> route</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>列出路由
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),d=[l];function c(t,r){return s(),e("div",null,d)}const u=n(i,[["render",c],["__file","ip命令.html.vue"]]);export{u as default};
