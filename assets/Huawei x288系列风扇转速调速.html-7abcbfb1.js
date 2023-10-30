import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as r,c as t,a as e,e as a,d as l,f as c}from"./app-88af1b89.js";const o={},d=e("h1",{id:"华为服务器2288h-v2的ipmi设置风扇转速和工作模式的命令",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#华为服务器2288h-v2的ipmi设置风扇转速和工作模式的命令","aria-hidden":"true"},"#"),a(" 华为服务器2288H V2的IPMI设置风扇转速和工作模式的命令")],-1),p=e("p",null,"登录web imana--实时监控---部件---风扇--控制模式",-1),m=e("p",null,"首先用ssh登录服务器的idrac",-1),v=e("p",null,"原文：",-1),_=e("br",null,null,-1),u={href:"https://support.huawei.com/enterprise/zh/doc/EDOC1000038841/688375b5",target:"_blank",rel:"noopener noreferrer"},b=c(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>设置风扇的工作模式为手动，并设置手动的时间为1亿秒，大概3年多
ipmcset <span class="token parameter variable">-d</span> fanmode <span class="token parameter variable">-v</span> <span class="token number">1</span> <span class="token number">100000000</span>
设置风扇转速是百分之多少，默认是20%，设置必须设置最少30。。。。。所以敲上面的命令即可。
ipmcset <span class="token parameter variable">-d</span> fanlevel <span class="token parameter variable">-v</span> <span class="token number">20</span>

获取风扇的当前模式，自动还是手动，手动剩余多少秒，风扇当前？%
ipmcget <span class="token parameter variable">-d</span> fanmode

获取风扇的当前模式，自动还是手动，手动剩余多少秒，风扇当前？%
ipmcget <span class="token parameter variable">-d</span> fanlevel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function h(f,k){const n=i("ExternalLinkIcon");return r(),t("div",null,[d,p,m,v,e("p",null,[a("设置风扇的官方命令"),_,e("a",u,[a("https://support.huawei.com/enterprise/zh/doc/EDOC1000038841/688375b5"),l(n)])]),b])}const w=s(o,[["render",h],["__file","Huawei x288系列风扇转速调速.html.vue"]]);export{w as default};
