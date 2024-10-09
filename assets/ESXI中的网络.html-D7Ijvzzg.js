import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{aj as e,ao as a,am as o}from"./app-COjiYc5s.js";const l={};function r(i,t){return o(),e("div",null,t[0]||(t[0]=[a('<h1 id="esxi中的网络" tabindex="-1"><a class="header-anchor" href="#esxi中的网络"><span>ESXI中的网络</span></a></h1><h3 id="vlan常识" tabindex="-1"><a class="header-anchor" href="#vlan常识"><span>VLAN常识：</span></a></h3><p>vlan的范围: 一共有4096个vlan,vlan 1为默认vlan. 但其中vlan 0 和 vlan 4095是保留的,故用户真正可以创建的vlan数为4094。 vlan 0：不携带VLAN ID vlan 4095：保留的；在北电交换机中，CPU内部使用VLAN 4095来表示无效的VLAN</p><h3 id="esxi的网络配置" tabindex="-1"><a class="header-anchor" href="#esxi的网络配置"><span>ESXI的网络配置：</span></a></h3><p><strong>虚拟交换机</strong> &gt;&gt;绑定&gt;&gt; 物理网卡 <strong>端口组</strong> &gt;&gt;绑定&gt;&gt; 虚拟交换机 <strong>虚拟机的网卡</strong> &gt;&gt;绑定&gt;&gt; 端口组</p><p>ESXI中，端口组是设置vlan标签的地方，默认0。 网络端口组设置，添加端口组， id设为4095（相当于交换机的trunk模式，允许所有的vlan通过）</p>',6)]))}const g=n(l,[["render",r],["__file","ESXI中的网络.html.vue"]]),c=JSON.parse('{"path":"/note-book/Esxi/ESXI%E4%B8%AD%E7%9A%84%E7%BD%91%E7%BB%9C.html","title":"ESXI中的网络","lang":"zh-CN","frontmatter":{"description":"ESXI中的网络 VLAN常识： vlan的范围: 一共有4096个vlan,vlan 1为默认vlan. 但其中vlan 0 和 vlan 4095是保留的,故用户真正可以创建的vlan数为4094。 vlan 0：不携带VLAN ID vlan 4095：保留的；在北电交换机中，CPU内部使用VLAN 4095来表示无效的VLAN ESXI的网络配...","head":[["meta",{"property":"og:url","content":"https://www.geekery.cn/note-book/Esxi/ESXI%E4%B8%AD%E7%9A%84%E7%BD%91%E7%BB%9C.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"ESXI中的网络"}],["meta",{"property":"og:description","content":"ESXI中的网络 VLAN常识： vlan的范围: 一共有4096个vlan,vlan 1为默认vlan. 但其中vlan 0 和 vlan 4095是保留的,故用户真正可以创建的vlan数为4094。 vlan 0：不携带VLAN ID vlan 4095：保留的；在北电交换机中，CPU内部使用VLAN 4095来表示无效的VLAN ESXI的网络配..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-11T05:15:46.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-11T05:15:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ESXI中的网络\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-11T05:15:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[{"level":3,"title":"VLAN常识：","slug":"vlan常识","link":"#vlan常识","children":[]},{"level":3,"title":"ESXI的网络配置：","slug":"esxi的网络配置","link":"#esxi的网络配置","children":[]}],"git":{"createdTime":1697001346000,"updatedTime":1697001346000,"contributors":[{"name":"PaperDragon-SH","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":0.57,"words":172},"filePathRelative":"note-book/Esxi/ESXI中的网络.md","localizedDate":"2023年10月11日","excerpt":"\\n<h3>VLAN常识：</h3>\\n<p>vlan的范围: 一共有4096个vlan,vlan 1为默认vlan.\\n但其中vlan 0 和 vlan 4095是保留的,故用户真正可以创建的vlan数为4094。\\nvlan 0：不携带VLAN ID\\nvlan 4095：保留的；在北电交换机中，CPU内部使用VLAN 4095来表示无效的VLAN</p>\\n<h3>ESXI的网络配置：</h3>\\n<p><strong>虚拟交换机</strong> &gt;&gt;绑定&gt;&gt; 物理网卡\\n<strong>端口组</strong> &gt;&gt;绑定&gt;&gt; 虚拟交换机\\n<strong>虚拟机的网卡</strong> &gt;&gt;绑定&gt;&gt; 端口组</p>","autoDesc":true}');export{g as comp,c as data};
