import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as e}from"./app-Bd8L-r-x.js";const t={},l=e(`<h1 id="huawei-ce5810网络汇聚方案生产案例" tabindex="-1"><a class="header-anchor" href="#huawei-ce5810网络汇聚方案生产案例"><span>Huawei-CE5810网络汇聚方案生产案例</span></a></h1><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>~HUAWEI<span class="token punctuation">]</span>display current-configuration
<span class="token operator">!</span>Software Version V100R003C00SPC600
<span class="token operator">!</span>Last configuration was updated at <span class="token number">2023</span>-09-21 05:46:58+00:00 by admin
<span class="token operator">!</span>Last configuration was saved at <span class="token number">2023</span>-09-21 05:47:09+00:00 by admin
<span class="token comment">#</span>
sysname HUAWEI
<span class="token comment">#</span>
drop-profile default
<span class="token comment">#</span>
vlan batch <span class="token number">101</span> to <span class="token number">130</span>
<span class="token comment">#</span>
stp disable
<span class="token comment">#</span>
netstream <span class="token function">timeout</span> <span class="token function">ip</span> inactive <span class="token number">100</span>
netstream <span class="token function">timeout</span> <span class="token function">ip</span> tcp-session
netstream <span class="token builtin class-name">export</span> <span class="token function">ip</span> version <span class="token number">9</span> origin-as
netstream <span class="token builtin class-name">export</span> <span class="token function">ip</span> template timeout-rate <span class="token number">1</span>
netstream <span class="token builtin class-name">export</span> <span class="token function">ip</span> <span class="token builtin class-name">source</span> <span class="token number">192.168</span>.101.102
netstream <span class="token builtin class-name">export</span> <span class="token function">ip</span> <span class="token function">host</span> <span class="token number">192.168</span>.101.200 <span class="token number">2055</span>
<span class="token comment">#</span>
telnet ipv6 server disable
<span class="token comment">#</span>
diffserv domain default
<span class="token comment">#</span>
aaa
 undo local-user policy security-enhance
 local-user admin password irreversible-cipher <span class="token variable">$1a</span><span class="token variable">$fb</span>:J<span class="token operator">!</span>Rwy*H<span class="token variable">$Dda</span>$+.%mP.5<span class="token punctuation">;</span>L/~*JWA7R<span class="token operator">|</span>S<span class="token operator">!</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token number">7</span><span class="token punctuation">[</span>B*zMm<span class="token punctuation">{</span>J@IYO<span class="token operator">=</span>$
 local-user admin service-type telnet
 local-user admin level <span class="token number">15</span>
 <span class="token comment">#</span>
 authentication-scheme default
 <span class="token comment">#</span>
 authorization-scheme default
 <span class="token comment">#</span>
 accounting-scheme default
 <span class="token comment">#</span>
 domain default
 <span class="token comment">#</span>
 domain default_admin
<span class="token comment">#</span>
stack
<span class="token comment">#</span>
interface Vlanif1
 <span class="token function">ip</span> address <span class="token number">192.168</span>.101.101 <span class="token number">255.255</span>.255.0
<span class="token comment">#</span>
interface MEth0/0/0
 <span class="token function">ip</span> address <span class="token number">192.168</span>.0.233 <span class="token number">255.255</span>.255.0
<span class="token comment">#</span>
interface GE1/0/1
 port default vlan <span class="token number">101</span>
 qos lr cir <span class="token number">390</span> mbps outbound
<span class="token comment">#</span>
interface GE1/0/2
 port default vlan <span class="token number">102</span>
<span class="token comment">#</span>
interface GE1/0/3
 port default vlan <span class="token number">103</span>
<span class="token comment">#</span>
interface GE1/0/4
 port default vlan <span class="token number">104</span>
<span class="token comment">#</span>
interface GE1/0/5
 port default vlan <span class="token number">105</span>
<span class="token comment">#</span>
interface GE1/0/6
 port default vlan <span class="token number">106</span>
<span class="token comment">#</span>
interface GE1/0/7
 port default vlan <span class="token number">107</span>
<span class="token comment">#</span>
interface GE1/0/8
 port default vlan <span class="token number">108</span>
<span class="token comment">#</span>
interface GE1/0/9
 port default vlan <span class="token number">109</span>
<span class="token comment">#</span>
interface GE1/0/10
 port default vlan <span class="token number">110</span>
<span class="token comment">#</span>
interface GE1/0/11
 port default vlan <span class="token number">111</span>
<span class="token comment">#</span>
interface GE1/0/12
 port default vlan <span class="token number">112</span>
<span class="token comment">#</span>
interface GE1/0/13
 port default vlan <span class="token number">113</span>
<span class="token comment">#</span>
interface GE1/0/14
 port default vlan <span class="token number">114</span>
<span class="token comment">#</span>
interface GE1/0/15
 port default vlan <span class="token number">115</span>
<span class="token comment">#</span>
interface GE1/0/16
 port default vlan <span class="token number">116</span>
<span class="token comment">#</span>
interface GE1/0/17
 port default vlan <span class="token number">117</span>
<span class="token comment">#</span>
interface GE1/0/18
 port default vlan <span class="token number">118</span>
<span class="token comment">#</span>
interface GE1/0/19
 port default vlan <span class="token number">119</span>
<span class="token comment">#</span>
interface GE1/0/20
 port default vlan <span class="token number">120</span>
<span class="token comment">#</span>
interface GE1/0/21
 port default vlan <span class="token number">121</span>
<span class="token comment">#</span>
interface GE1/0/22
 port default vlan <span class="token number">122</span>
<span class="token comment">#</span>
interface GE1/0/23
 port default vlan <span class="token number">123</span>
<span class="token comment">#</span>
interface GE1/0/24
 port default vlan <span class="token number">124</span>
<span class="token comment">#</span>
interface GE1/0/25
 port default vlan <span class="token number">125</span>
<span class="token comment">#</span>
interface GE1/0/26
 port default vlan <span class="token number">126</span>
<span class="token comment">#</span>
interface GE1/0/27
 port default vlan <span class="token number">127</span>
<span class="token comment">#</span>
interface GE1/0/28
 port default vlan <span class="token number">128</span>
<span class="token comment">#</span>
interface GE1/0/29
 port default vlan <span class="token number">129</span>
<span class="token comment">#</span>
interface GE1/0/30
 port default vlan <span class="token number">130</span>
<span class="token comment">#</span>
interface GE1/0/31
<span class="token comment">#</span>
interface GE1/0/32
<span class="token comment">#</span>
interface GE1/0/33
<span class="token comment">#</span>
interface GE1/0/34
<span class="token comment">#</span>
interface GE1/0/35
<span class="token comment">#</span>
interface GE1/0/36
<span class="token comment">#</span>
interface GE1/0/37
<span class="token comment">#</span>
interface GE1/0/38
<span class="token comment">#</span>
interface GE1/0/39
<span class="token comment">#</span>
interface GE1/0/40
<span class="token comment">#</span>
interface GE1/0/41
<span class="token comment">#</span>
interface GE1/0/42
<span class="token comment">#</span>
interface GE1/0/43
<span class="token comment">#</span>
interface GE1/0/44
<span class="token comment">#</span>
interface GE1/0/45
<span class="token comment">#</span>
interface GE1/0/46
<span class="token comment">#</span>
interface GE1/0/47
<span class="token comment">#</span>
interface GE1/0/48
<span class="token comment">#</span>
interface 10GE1/0/1
 port link-type trunk
 port trunk allow-pass vlan <span class="token number">2</span> to <span class="token number">4094</span>
 netstream inbound <span class="token function">ip</span>
 netstream outbound <span class="token function">ip</span>
 netstream sampler random-packets <span class="token number">1</span> inbound
 netstream sampler random-packets <span class="token number">1</span> outbound
<span class="token comment">#</span>
interface 10GE1/0/2
 port link-type trunk
 port trunk allow-pass vlan <span class="token number">2</span> to <span class="token number">4094</span>
<span class="token comment">#</span>
interface 10GE1/0/3
 port link-type trunk
 port trunk allow-pass vlan <span class="token number">2</span> to <span class="token number">4094</span>
<span class="token comment">#</span>
interface 10GE1/0/4
 port link-type trunk
 port trunk allow-pass vlan <span class="token number">2</span> to <span class="token number">4094</span>
<span class="token comment">#</span>
interface NULL0
<span class="token comment">#</span>
snmp-agent
snmp-agent local-engineid 800007DB0304F938EBDC11
snmp-agent community <span class="token builtin class-name">read</span> cipher %@%@5Oo<span class="token operator">|</span>+77<span class="token comment">#A0K&#39;$Q,6&quot;&amp;#$,r2;#cJH0/&quot;_.&amp;&lt;:NYGur(PNr2&gt;,nK&quot;H/9P{#S6@._S-zbwC2G,r%@%@</span>
<span class="token comment">#</span>
snmp-agent sys-info version v2c v3
<span class="token comment">#</span>
lldp <span class="token builtin class-name">enable</span>
<span class="token comment">#</span>
user-interface con <span class="token number">0</span>
<span class="token comment">#</span>
user-interface vty <span class="token number">0</span> <span class="token number">4</span>
 authentication-mode aaa
 user privilege level <span class="token number">15</span>
 protocol inbound all
<span class="token comment">#</span>
vm-manager
<span class="token comment">#</span>
<span class="token builtin class-name">return</span>
<span class="token punctuation">[</span>~HUAWEI<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),i=[l];function c(p,o){return s(),a("div",null,i)}const d=n(t,[["render",c],["__file","Huawei-CE5810网络汇聚方案生产案例.html.vue"]]),u=JSON.parse(`{"path":"/note-book/%E4%BA%A4%E6%8D%A2%E6%9C%BA/Huawei-CE5810%E7%BD%91%E7%BB%9C%E6%B1%87%E8%81%9A%E6%96%B9%E6%A1%88%E7%94%9F%E4%BA%A7%E6%A1%88%E4%BE%8B.html","title":"Huawei-CE5810网络汇聚方案生产案例","lang":"zh-CN","frontmatter":{"description":"Huawei-CE5810网络汇聚方案生产案例","head":[["meta",{"property":"og:url","content":"https://www.geekery.cn/note-book/%E4%BA%A4%E6%8D%A2%E6%9C%BA/Huawei-CE5810%E7%BD%91%E7%BB%9C%E6%B1%87%E8%81%9A%E6%96%B9%E6%A1%88%E7%94%9F%E4%BA%A7%E6%A1%88%E4%BE%8B.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"Huawei-CE5810网络汇聚方案生产案例"}],["meta",{"property":"og:description","content":"Huawei-CE5810网络汇聚方案生产案例"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-01T09:26:52.000Z"}],["meta",{"property":"article:author","content":"PaperDragon"}],["meta",{"property":"article:modified_time","content":"2024-04-01T09:26:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Huawei-CE5810网络汇聚方案生产案例\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-01T09:26:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[],"git":{"createdTime":1711963612000,"updatedTime":1711963612000,"contributors":[{"name":"PaperDragon-SH","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":1.77,"words":530},"filePathRelative":"note-book/交换机/Huawei-CE5810网络汇聚方案生产案例.md","localizedDate":"2024年4月1日","excerpt":"\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token punctuation\\">[</span>~HUAWEI<span class=\\"token punctuation\\">]</span>display current-configuration\\n<span class=\\"token operator\\">!</span>Software Version V100R003C00SPC600\\n<span class=\\"token operator\\">!</span>Last configuration was updated at <span class=\\"token number\\">2023</span>-09-21 05:46:58+00:00 by admin\\n<span class=\\"token operator\\">!</span>Last configuration was saved at <span class=\\"token number\\">2023</span>-09-21 05:47:09+00:00 by admin\\n<span class=\\"token comment\\">#</span>\\nsysname HUAWEI\\n<span class=\\"token comment\\">#</span>\\ndrop-profile default\\n<span class=\\"token comment\\">#</span>\\nvlan batch <span class=\\"token number\\">101</span> to <span class=\\"token number\\">130</span>\\n<span class=\\"token comment\\">#</span>\\nstp disable\\n<span class=\\"token comment\\">#</span>\\nnetstream <span class=\\"token function\\">timeout</span> <span class=\\"token function\\">ip</span> inactive <span class=\\"token number\\">100</span>\\nnetstream <span class=\\"token function\\">timeout</span> <span class=\\"token function\\">ip</span> tcp-session\\nnetstream <span class=\\"token builtin class-name\\">export</span> <span class=\\"token function\\">ip</span> version <span class=\\"token number\\">9</span> origin-as\\nnetstream <span class=\\"token builtin class-name\\">export</span> <span class=\\"token function\\">ip</span> template timeout-rate <span class=\\"token number\\">1</span>\\nnetstream <span class=\\"token builtin class-name\\">export</span> <span class=\\"token function\\">ip</span> <span class=\\"token builtin class-name\\">source</span> <span class=\\"token number\\">192.168</span>.101.102\\nnetstream <span class=\\"token builtin class-name\\">export</span> <span class=\\"token function\\">ip</span> <span class=\\"token function\\">host</span> <span class=\\"token number\\">192.168</span>.101.200 <span class=\\"token number\\">2055</span>\\n<span class=\\"token comment\\">#</span>\\ntelnet ipv6 server disable\\n<span class=\\"token comment\\">#</span>\\ndiffserv domain default\\n<span class=\\"token comment\\">#</span>\\naaa\\n undo local-user policy security-enhance\\n local-user admin password irreversible-cipher <span class=\\"token variable\\">$1a</span><span class=\\"token variable\\">$fb</span>:J<span class=\\"token operator\\">!</span>Rwy*H<span class=\\"token variable\\">$Dda</span>$+.%mP.5<span class=\\"token punctuation\\">;</span>L/~*JWA7R<span class=\\"token operator\\">|</span>S<span class=\\"token operator\\">!</span><span class=\\"token number\\">3</span><span class=\\"token punctuation\\">}</span><span class=\\"token number\\">7</span><span class=\\"token punctuation\\">[</span>B*zMm<span class=\\"token punctuation\\">{</span>J@IYO<span class=\\"token operator\\">=</span>$\\n local-user admin service-type telnet\\n local-user admin level <span class=\\"token number\\">15</span>\\n <span class=\\"token comment\\">#</span>\\n authentication-scheme default\\n <span class=\\"token comment\\">#</span>\\n authorization-scheme default\\n <span class=\\"token comment\\">#</span>\\n accounting-scheme default\\n <span class=\\"token comment\\">#</span>\\n domain default\\n <span class=\\"token comment\\">#</span>\\n domain default_admin\\n<span class=\\"token comment\\">#</span>\\nstack\\n<span class=\\"token comment\\">#</span>\\ninterface Vlanif1\\n <span class=\\"token function\\">ip</span> address <span class=\\"token number\\">192.168</span>.101.101 <span class=\\"token number\\">255.255</span>.255.0\\n<span class=\\"token comment\\">#</span>\\ninterface MEth0/0/0\\n <span class=\\"token function\\">ip</span> address <span class=\\"token number\\">192.168</span>.0.233 <span class=\\"token number\\">255.255</span>.255.0\\n<span class=\\"token comment\\">#</span>\\ninterface GE1/0/1\\n port default vlan <span class=\\"token number\\">101</span>\\n qos lr cir <span class=\\"token number\\">390</span> mbps outbound\\n<span class=\\"token comment\\">#</span>\\ninterface GE1/0/2\\n port default vlan <span class=\\"token number\\">102</span>\\n<span class=\\"token comment\\">#</span>\\ninterface GE1/0/3\\n port default vlan <span class=\\"token number\\">103</span>\\n<span class=\\"token comment\\">#</span>\\ninterface GE1/0/4\\n port default vlan <span class=\\"token number\\">104</span>\\n<span class=\\"token comment\\">#</span>\\ninterface GE1/0/5\\n port default vlan <span class=\\"token number\\">105</span>\\n<span class=\\"token comment\\">#</span>\\ninterface GE1/0/6\\n port default vlan <span class=\\"token number\\">106</span>\\n<span class=\\"token comment\\">#</span>\\ninterface GE1/0/7\\n port default vlan <span class=\\"token number\\">107</span>\\n<span class=\\"token comment\\">#</span>\\ninterface GE1/0/8\\n port default vlan <span class=\\"token number\\">108</span>\\n<span class=\\"token comment\\">#</span>\\ninterface GE1/0/9\\n port default vlan <span class=\\"token number\\">109</span>\\n<span class=\\"token comment\\">#</span>\\ninterface GE1/0/10\\n port default vlan <span class=\\"token number\\">110</span>\\n<span class=\\"token comment\\">#</span>\\ninterface GE1/0/11\\n port default vlan <span class=\\"token number\\">111</span>\\n<span class=\\"token comment\\">#</span>\\ninterface GE1/0/12\\n port default vlan <span class=\\"token number\\">112</span>\\n<span class=\\"token comment\\">#</span>\\ninterface GE1/0/13\\n port default vlan <span class=\\"token number\\">113</span>\\n<span class=\\"token comment\\">#</span>\\ninterface GE1/0/14\\n port default vlan <span class=\\"token number\\">114</span>\\n<span class=\\"token comment\\">#</span>\\ninterface GE1/0/15\\n port default vlan <span class=\\"token number\\">115</span>\\n<span class=\\"token comment\\">#</span>\\ninterface GE1/0/16\\n port default vlan <span class=\\"token number\\">116</span>\\n<span class=\\"token comment\\">#</span>\\ninterface GE1/0/17\\n port default vlan <span class=\\"token number\\">117</span>\\n<span class=\\"token comment\\">#</span>\\ninterface GE1/0/18\\n port default vlan <span class=\\"token number\\">118</span>\\n<span class=\\"token comment\\">#</span>\\ninterface GE1/0/19\\n port default vlan <span class=\\"token number\\">119</span>\\n<span class=\\"token comment\\">#</span>\\ninterface GE1/0/20\\n port default vlan <span class=\\"token number\\">120</span>\\n<span class=\\"token comment\\">#</span>\\ninterface GE1/0/21\\n port default vlan <span class=\\"token number\\">121</span>\\n<span class=\\"token comment\\">#</span>\\ninterface GE1/0/22\\n port default vlan <span class=\\"token number\\">122</span>\\n<span class=\\"token comment\\">#</span>\\ninterface GE1/0/23\\n port default vlan <span class=\\"token number\\">123</span>\\n<span class=\\"token comment\\">#</span>\\ninterface GE1/0/24\\n port default vlan <span class=\\"token number\\">124</span>\\n<span class=\\"token comment\\">#</span>\\ninterface GE1/0/25\\n port default vlan <span class=\\"token number\\">125</span>\\n<span class=\\"token comment\\">#</span>\\ninterface GE1/0/26\\n port default vlan <span class=\\"token number\\">126</span>\\n<span class=\\"token comment\\">#</span>\\ninterface GE1/0/27\\n port default vlan <span class=\\"token number\\">127</span>\\n<span class=\\"token comment\\">#</span>\\ninterface GE1/0/28\\n port default vlan <span class=\\"token number\\">128</span>\\n<span class=\\"token comment\\">#</span>\\ninterface GE1/0/29\\n port default vlan <span class=\\"token number\\">129</span>\\n<span class=\\"token comment\\">#</span>\\ninterface GE1/0/30\\n port default vlan <span class=\\"token number\\">130</span>\\n<span class=\\"token comment\\">#</span>\\ninterface GE1/0/31\\n<span class=\\"token comment\\">#</span>\\ninterface GE1/0/32\\n<span class=\\"token comment\\">#</span>\\ninterface GE1/0/33\\n<span class=\\"token comment\\">#</span>\\ninterface GE1/0/34\\n<span class=\\"token comment\\">#</span>\\ninterface GE1/0/35\\n<span class=\\"token comment\\">#</span>\\ninterface GE1/0/36\\n<span class=\\"token comment\\">#</span>\\ninterface GE1/0/37\\n<span class=\\"token comment\\">#</span>\\ninterface GE1/0/38\\n<span class=\\"token comment\\">#</span>\\ninterface GE1/0/39\\n<span class=\\"token comment\\">#</span>\\ninterface GE1/0/40\\n<span class=\\"token comment\\">#</span>\\ninterface GE1/0/41\\n<span class=\\"token comment\\">#</span>\\ninterface GE1/0/42\\n<span class=\\"token comment\\">#</span>\\ninterface GE1/0/43\\n<span class=\\"token comment\\">#</span>\\ninterface GE1/0/44\\n<span class=\\"token comment\\">#</span>\\ninterface GE1/0/45\\n<span class=\\"token comment\\">#</span>\\ninterface GE1/0/46\\n<span class=\\"token comment\\">#</span>\\ninterface GE1/0/47\\n<span class=\\"token comment\\">#</span>\\ninterface GE1/0/48\\n<span class=\\"token comment\\">#</span>\\ninterface 10GE1/0/1\\n port link-type trunk\\n port trunk allow-pass vlan <span class=\\"token number\\">2</span> to <span class=\\"token number\\">4094</span>\\n netstream inbound <span class=\\"token function\\">ip</span>\\n netstream outbound <span class=\\"token function\\">ip</span>\\n netstream sampler random-packets <span class=\\"token number\\">1</span> inbound\\n netstream sampler random-packets <span class=\\"token number\\">1</span> outbound\\n<span class=\\"token comment\\">#</span>\\ninterface 10GE1/0/2\\n port link-type trunk\\n port trunk allow-pass vlan <span class=\\"token number\\">2</span> to <span class=\\"token number\\">4094</span>\\n<span class=\\"token comment\\">#</span>\\ninterface 10GE1/0/3\\n port link-type trunk\\n port trunk allow-pass vlan <span class=\\"token number\\">2</span> to <span class=\\"token number\\">4094</span>\\n<span class=\\"token comment\\">#</span>\\ninterface 10GE1/0/4\\n port link-type trunk\\n port trunk allow-pass vlan <span class=\\"token number\\">2</span> to <span class=\\"token number\\">4094</span>\\n<span class=\\"token comment\\">#</span>\\ninterface NULL0\\n<span class=\\"token comment\\">#</span>\\nsnmp-agent\\nsnmp-agent local-engineid 800007DB0304F938EBDC11\\nsnmp-agent community <span class=\\"token builtin class-name\\">read</span> cipher %@%@5Oo<span class=\\"token operator\\">|</span>+77<span class=\\"token comment\\">#A0K'$Q,6\\"&amp;#$,r2;#cJH0/\\"_.&amp;&lt;:NYGur(PNr2&gt;,nK\\"H/9P{#S6@._S-zbwC2G,r%@%@</span>\\n<span class=\\"token comment\\">#</span>\\nsnmp-agent sys-info version v2c v3\\n<span class=\\"token comment\\">#</span>\\nlldp <span class=\\"token builtin class-name\\">enable</span>\\n<span class=\\"token comment\\">#</span>\\nuser-interface con <span class=\\"token number\\">0</span>\\n<span class=\\"token comment\\">#</span>\\nuser-interface vty <span class=\\"token number\\">0</span> <span class=\\"token number\\">4</span>\\n authentication-mode aaa\\n user privilege level <span class=\\"token number\\">15</span>\\n protocol inbound all\\n<span class=\\"token comment\\">#</span>\\nvm-manager\\n<span class=\\"token comment\\">#</span>\\n<span class=\\"token builtin class-name\\">return</span>\\n<span class=\\"token punctuation\\">[</span>~HUAWEI<span class=\\"token punctuation\\">]</span>\\n\\n</code></pre></div>","autoDesc":true}`);export{d as comp,u as data};
