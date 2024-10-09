import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{aj as a,ao as s,am as n}from"./app-COjiYc5s.js";const t={};function l(h,i){return n(),a("div",null,i[0]||(i[0]=[s(`<h1 id="cisco交换机vlan中继配置" tabindex="-1"><a class="header-anchor" href="#cisco交换机vlan中继配置"><span>Cisco交换机Vlan中继配置</span></a></h1><blockquote><p>在以太网交换机的网络中，中继（Trunking）是一个关键概念，用于在交换机之间传输多个VLAN的数据流。配置中继可以确保不同VLAN之间的流量能够跨越多个交换机进行传输。中继端口通常用于连接交换机、路由器或其他网络设备，以支持跨VLAN的通信。</p><p>在本文档中，我们将介绍如何在Cisco交换机上配置中继端口，包括二层交换机和三层交换机的不同配置步骤。</p></blockquote><h2 id="配置步骤" tabindex="-1"><a class="header-anchor" href="#配置步骤"><span>配置步骤</span></a></h2><h3 id="_1-进入接口配置模式" tabindex="-1"><a class="header-anchor" href="#_1-进入接口配置模式"><span>1. 进入接口配置模式</span></a></h3><p>首先，你需要进入你要配置的接口模式。假设我们配置的是接口 <code>fa0/1</code>，输入以下命令：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">S1(config</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)# interface fa0/1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_2-配置为中继模式" tabindex="-1"><a class="header-anchor" href="#_2-配置为中继模式"><span>2. 配置为中继模式</span></a></h3><p>将接口模式设置为中继模式，这样可以允许多个VLAN通过此接口传输：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">S1(config-if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)# switchport mode trunk</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_3-允许所有vlan通过中继" tabindex="-1"><a class="header-anchor" href="#_3-允许所有vlan通过中继"><span>3. 允许所有VLAN通过中继</span></a></h3><p>配置中继接口允许所有VLAN通过：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">S1(config-if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)# switchport trunk allow vlan all</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_4-设置本地vlan-native-vlan" tabindex="-1"><a class="header-anchor" href="#_4-设置本地vlan-native-vlan"><span>4. 设置本地VLAN（Native VLAN）</span></a></h3><p>指定一个本地VLAN（Native VLAN），这是未标记的流量将会使用的VLAN。我们将本地VLAN设置为99：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">S1(config-if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)# switchport trunk native vlan 99</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_5-仅适用于三层交换机-配置封装类型" tabindex="-1"><a class="header-anchor" href="#_5-仅适用于三层交换机-配置封装类型"><span>5. （仅适用于三层交换机）配置封装类型</span></a></h3><p>如果你正在配置三层交换机，还需要指定封装类型。在这种情况下，我们使用IEEE 802.1Q封装：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>S1(config-if)# switchport trunk encapsulation dot1q</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="配置示例" tabindex="-1"><a class="header-anchor" href="#配置示例"><span>配置示例</span></a></h2><p>完整的配置示例如下：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">S1(config</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)# interface fa0/1</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">S1(config-if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)# switchport mode trunk</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">S1(config-if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)# switchport trunk allow vlan all</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">S1(config-if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)# switchport trunk native vlan 99</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">S1(config-if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)# switchport trunk encapsulation dot1q</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21)]))}const o=e(t,[["render",l],["__file","Cisco交换机Vlan中继配置.html.vue"]]),c=JSON.parse('{"path":"/note-book/%E4%BA%A4%E6%8D%A2%E6%9C%BA/Cisco%E4%BA%A4%E6%8D%A2%E6%9C%BAVlan%E4%B8%AD%E7%BB%A7%E9%85%8D%E7%BD%AE.html","title":"Cisco交换机Vlan中继配置","lang":"zh-CN","frontmatter":{"description":"Cisco交换机Vlan中继配置 在以太网交换机的网络中，中继（Trunking）是一个关键概念，用于在交换机之间传输多个VLAN的数据流。配置中继可以确保不同VLAN之间的流量能够跨越多个交换机进行传输。中继端口通常用于连接交换机、路由器或其他网络设备，以支持跨VLAN的通信。 在本文档中，我们将介绍如何在Cisco交换机上配置中继端口，包括二层交换...","head":[["meta",{"property":"og:url","content":"https://www.geekery.cn/note-book/%E4%BA%A4%E6%8D%A2%E6%9C%BA/Cisco%E4%BA%A4%E6%8D%A2%E6%9C%BAVlan%E4%B8%AD%E7%BB%A7%E9%85%8D%E7%BD%AE.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"Cisco交换机Vlan中继配置"}],["meta",{"property":"og:description","content":"Cisco交换机Vlan中继配置 在以太网交换机的网络中，中继（Trunking）是一个关键概念，用于在交换机之间传输多个VLAN的数据流。配置中继可以确保不同VLAN之间的流量能够跨越多个交换机进行传输。中继端口通常用于连接交换机、路由器或其他网络设备，以支持跨VLAN的通信。 在本文档中，我们将介绍如何在Cisco交换机上配置中继端口，包括二层交换..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-25T10:48:40.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-25T10:48:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Cisco交换机Vlan中继配置\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-25T10:48:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"配置步骤","slug":"配置步骤","link":"#配置步骤","children":[{"level":3,"title":"1. 进入接口配置模式","slug":"_1-进入接口配置模式","link":"#_1-进入接口配置模式","children":[]},{"level":3,"title":"2. 配置为中继模式","slug":"_2-配置为中继模式","link":"#_2-配置为中继模式","children":[]},{"level":3,"title":"3. 允许所有VLAN通过中继","slug":"_3-允许所有vlan通过中继","link":"#_3-允许所有vlan通过中继","children":[]},{"level":3,"title":"4. 设置本地VLAN（Native VLAN）","slug":"_4-设置本地vlan-native-vlan","link":"#_4-设置本地vlan-native-vlan","children":[]},{"level":3,"title":"5. （仅适用于三层交换机）配置封装类型","slug":"_5-仅适用于三层交换机-配置封装类型","link":"#_5-仅适用于三层交换机-配置封装类型","children":[]}]},{"level":2,"title":"配置示例","slug":"配置示例","link":"#配置示例","children":[]}],"git":{"createdTime":1721904520000,"updatedTime":1721904520000,"contributors":[{"name":"PaperDragon-SH","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":1.44,"words":432},"filePathRelative":"note-book/交换机/Cisco交换机Vlan中继配置.md","localizedDate":"2024年7月25日","excerpt":"\\n<blockquote>\\n<p>在以太网交换机的网络中，中继（Trunking）是一个关键概念，用于在交换机之间传输多个VLAN的数据流。配置中继可以确保不同VLAN之间的流量能够跨越多个交换机进行传输。中继端口通常用于连接交换机、路由器或其他网络设备，以支持跨VLAN的通信。</p>\\n<p>在本文档中，我们将介绍如何在Cisco交换机上配置中继端口，包括二层交换机和三层交换机的不同配置步骤。</p>\\n</blockquote>\\n<h2>配置步骤</h2>\\n<h3>1. 进入接口配置模式</h3>\\n<p>首先，你需要进入你要配置的接口模式。假设我们配置的是接口 <code>fa0/1</code>，输入以下命令：</p>","autoDesc":true}');export{o as comp,c as data};
