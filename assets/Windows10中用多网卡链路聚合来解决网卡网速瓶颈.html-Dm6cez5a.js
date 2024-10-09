import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{aj as e,ao as a,am as n}from"./app-COjiYc5s.js";const l={};function h(t,i){return n(),e("div",null,i[0]||(i[0]=[a(`<h1 id="windows10中用多网卡链路聚合来解决网卡网速瓶颈" tabindex="-1"><a class="header-anchor" href="#windows10中用多网卡链路聚合来解决网卡网速瓶颈"><span>Windows10中用多网卡链路聚合来解决网卡网速瓶颈</span></a></h1><p>在Windows 10中，可以利用双网卡链路聚合（NIC Teaming）来提升网速解决网卡瓶颈，这篇文章记录了设置链路聚合的方法。</p><p>在Windows 10 1809之前版本，可以使用PowerShell 小工具<code>New-NetLbfoTeam</code> 命令来创建网卡组。</p><p>在Windows 10 1809之后的版本，这个命令已经不再支持，只能在Windows Server操作系统上使用。我们只能求其次通过<code>New-NetSwitchTeam</code>命令来实现类似的功能。</p><h2 id="windows-10-1809版本之前" tabindex="-1"><a class="header-anchor" href="#windows-10-1809版本之前"><span>Windows 10 1809版本之前</span></a></h2><h3 id="配置nic-teaming" tabindex="-1"><a class="header-anchor" href="#配置nic-teaming"><span>配置NIC Teaming</span></a></h3><h4 id="启动powershell" tabindex="-1"><a class="header-anchor" href="#启动powershell"><span>启动PowerShell</span></a></h4><p>打开PowerShell: 在搜索框中输入“PowerShell”，右键点击“Windows PowerShell”，选择“以管理员身份运行”。</p><h4 id="列出网络适配器" tabindex="-1"><a class="header-anchor" href="#列出网络适配器"><span>列出网络适配器</span></a></h4><p>查看网卡：输入以下命令查看计算机上的网络适配器：</p><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" data-title="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">Get-NetAdapter</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>记下需要加入网卡组的网卡名称,例如，<code>Ethernet</code> 和 <code>Ethernet 2</code>。</p><h4 id="创建网卡组" tabindex="-1"><a class="header-anchor" href="#创建网卡组"><span>创建网卡组</span></a></h4><p>创建网卡组：使用以下命令创建网卡组 Team1：</p><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" data-title="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">New-NetLbfoTeam</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Name </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Team1&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">TeamMembers </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Ethernet&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Ethernet 2&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果命令成功执行且没有报错，则表示网卡组创建成功。</p><h4 id="验证网卡组" tabindex="-1"><a class="header-anchor" href="#验证网卡组"><span><strong>验证网卡组</strong></span></a></h4><p>验证网卡组：使用以下命令确认网卡组是否创建成功：</p><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" data-title="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">Get-NetLbfoTeam</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果看到新创建的网卡组信息，则表示配置成功。</p><h3 id="配置网络设置" tabindex="-1"><a class="header-anchor" href="#配置网络设置"><span>配置网络设置</span></a></h3><h4 id="设置静态ip地址" tabindex="-1"><a class="header-anchor" href="#设置静态ip地址"><span>设置静态IP地址</span></a></h4><p>更改适配器设置：</p><ul><li>在“网络和共享中心”中，点击左侧的“更改适配器设置”。</li></ul><p>配置网络桥接：</p><ul><li>在“网络连接”窗口中，你会看到新创建的网络适配器。</li><li>右键点击网络适配器，选择“属性”。</li><li>选择“Internet 协议版本 4 (TCP/IPv4)”并点击“属性”。</li><li>选择“使用下面的IP地址”。</li><li>输入适当的IP地址、子网掩码和默认网关。</li><li>点击“确定”，保存设置。</li></ul><h4 id="测试和验证" tabindex="-1"><a class="header-anchor" href="#测试和验证"><span>测试和验证</span></a></h4><p>测试网络连接：</p><ul><li>打开命令提示符，使用 ping 命令测试网络连通性。例如：</li></ul><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" data-title="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">ping </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">8.8</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">8.8</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  # 测试外网连通性</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>带宽测试工具：浏览器访问带宽测试网站 <a href="https://www.speedtest.net" target="_blank" rel="noopener noreferrer">Speedtest</a> 测速</p><h3 id="删除nic-teaming" tabindex="-1"><a class="header-anchor" href="#删除nic-teaming"><span>删除NIC Teaming</span></a></h3><p>删除网卡组：如果需要删除已创建的网卡组，可以使用以下命令：</p><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" data-title="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">Remove-NetLbfoTeam</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Name </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Team1&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="windows-10-1809版本之后" tabindex="-1"><a class="header-anchor" href="#windows-10-1809版本之后"><span>Windows 10 1809版本之后</span></a></h2><blockquote><p>https://blog.csdn.net/ytlzq0228/article/details/118071224</p><p>在Windows 10 1809版本之后，<code>New-NetLbfoTeam</code> 方式创建聚合组，LACP功能也被限制。但是依然可以使用NetSwitchTeam创建聚合链路，不过只能使用独立网卡模式，等同于NetLbfoTeam模式里的<code>-teamingMode SwitchIndependent</code></p></blockquote><p>使用刚才的配置名零会得到下面的报错，解决方法继续看。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">PS</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> C:</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\w</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">indows</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ystem3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">2&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">New-NetLbfoTeam</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> aaa</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -TeamMembers</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;以太网&quot;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">New-NetLbfoTeam</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> :</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> The</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> LBFO</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> feature</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> is</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> not</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> currently</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> enabled,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> or</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> LBFO</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> is</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> not</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> supported</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> on</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> this</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> SKU.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">所在位置</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 行:1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 字符:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">+</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> New-NetLbfoTeam</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> aaa</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -TeamMembers</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;以太网&quot;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">+</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    +</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> CategoryInfo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          :</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> NotSpecified:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (MSFT_NetLbfoTeam:root/StandardCimv2/MSFT_NetLbfoTeam) [New-NetLbfoTeam],</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">   CimException</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    +</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> FullyQualifiedErrorId</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> :</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> MI</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> RESULT</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 1,New-NetLbfoTeam</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置nic-teaming-1" tabindex="-1"><a class="header-anchor" href="#配置nic-teaming-1"><span>配置NIC Teaming</span></a></h3><h4 id="启动powershell-1" tabindex="-1"><a class="header-anchor" href="#启动powershell-1"><span>启动PowerShell</span></a></h4><p>打开PowerShell：在搜索框中输入“PowerShell”，右键点击“Windows PowerShell”，选择“以管理员身份运行”。</p><h4 id="列出网络适配器-1" tabindex="-1"><a class="header-anchor" href="#列出网络适配器-1"><span>列出网络适配器</span></a></h4><p>查看网卡: 输入以下命令查看计算机上的网络适配器：</p><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" data-title="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">Get-NetAdapter</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>记下需要加入网卡组的网卡名称，例如，<code>Ethernet</code> 和 <code>Ethernet 2</code>。</p><h4 id="创建网卡组-1" tabindex="-1"><a class="header-anchor" href="#创建网卡组-1"><span>创建网卡组</span></a></h4><p>创建网卡组：使用以下命令创建网卡组 名为“2Gbps”：</p><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" data-title="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">New-NetSwitchTeam</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Name </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;2Gbps&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">TeamMembers </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Ethernet&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Ethernet 2&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果命令成功执行且没有报错，则表示网卡组创建成功。</p><h4 id="验证网卡组-1" tabindex="-1"><a class="header-anchor" href="#验证网卡组-1"><span>验证网卡组</span></a></h4><p>验证网卡组：使用以下命令确认网卡组是否创建成功：</p><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" data-title="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">Get-NetSwitchTeam</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果看到新创建的网卡组信息，则表示配置成功。</p><h3 id="配置网络设置-1" tabindex="-1"><a class="header-anchor" href="#配置网络设置-1"><span>配置网络设置</span></a></h3><h4 id="设置静态ip地址-1" tabindex="-1"><a class="header-anchor" href="#设置静态ip地址-1"><span>设置静态IP地址</span></a></h4><p>配置网络桥接：</p><ul><li>在“网络连接”窗口中，有新的网络适配器。</li><li>右键点击网络适配器，选择“属性”。</li><li>选择“Internet 协议版本 4 (TCP/IPv4)”并点击“属性”。</li><li>选择“使用下面的IP地址”。</li><li>输入适当的IP地址、子网掩码和默认网关。</li><li>点击“确定”，保存设置。</li></ul><h4 id="测试和验证-1" tabindex="-1"><a class="header-anchor" href="#测试和验证-1"><span>测试和验证</span></a></h4><p>测试网络连接：</p><ul><li>打开cmd，使用 ping 命令测试网络连通性。例如：</li></ul><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" data-title="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">ping </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">8.8</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">8.8</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  # 测试外网连通性</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>使用带宽测试工具：浏览器访问带宽测试网站 <a href="https://www.speedtest.net" target="_blank" rel="noopener noreferrer">Speedtest</a></p><h3 id="删除nic-teaming-1" tabindex="-1"><a class="header-anchor" href="#删除nic-teaming-1"><span>删除NIC Teaming</span></a></h3><p>删除网卡组：如果需要删除已创建的网卡组，可以使用以下命令：</p><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" data-title="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">Remove-NetSwitchTeam</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Name </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;2Gbps&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,65)]))}const p=s(l,[["render",h],["__file","Windows10中用多网卡链路聚合来解决网卡网速瓶颈.html.vue"]]),k=JSON.parse('{"path":"/note-book/Windows/Windows10%E4%B8%AD%E7%94%A8%E5%A4%9A%E7%BD%91%E5%8D%A1%E9%93%BE%E8%B7%AF%E8%81%9A%E5%90%88%E6%9D%A5%E8%A7%A3%E5%86%B3%E7%BD%91%E5%8D%A1%E7%BD%91%E9%80%9F%E7%93%B6%E9%A2%88.html","title":"Windows10中用多网卡链路聚合来解决网卡网速瓶颈","lang":"zh-CN","frontmatter":{"description":"Windows10中用多网卡链路聚合来解决网卡网速瓶颈 在Windows 10中，可以利用双网卡链路聚合（NIC Teaming）来提升网速解决网卡瓶颈，这篇文章记录了设置链路聚合的方法。 在Windows 10 1809之前版本，可以使用PowerShell 小工具New-NetLbfoTeam 命令来创建网卡组。 在Windows 10 1809之...","head":[["meta",{"property":"og:url","content":"https://www.geekery.cn/note-book/Windows/Windows10%E4%B8%AD%E7%94%A8%E5%A4%9A%E7%BD%91%E5%8D%A1%E9%93%BE%E8%B7%AF%E8%81%9A%E5%90%88%E6%9D%A5%E8%A7%A3%E5%86%B3%E7%BD%91%E5%8D%A1%E7%BD%91%E9%80%9F%E7%93%B6%E9%A2%88.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"Windows10中用多网卡链路聚合来解决网卡网速瓶颈"}],["meta",{"property":"og:description","content":"Windows10中用多网卡链路聚合来解决网卡网速瓶颈 在Windows 10中，可以利用双网卡链路聚合（NIC Teaming）来提升网速解决网卡瓶颈，这篇文章记录了设置链路聚合的方法。 在Windows 10 1809之前版本，可以使用PowerShell 小工具New-NetLbfoTeam 命令来创建网卡组。 在Windows 10 1809之..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-26T08:16:48.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-26T08:16:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Windows10中用多网卡链路聚合来解决网卡网速瓶颈\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-26T08:16:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"Windows 10 1809版本之前","slug":"windows-10-1809版本之前","link":"#windows-10-1809版本之前","children":[{"level":3,"title":"配置NIC Teaming","slug":"配置nic-teaming","link":"#配置nic-teaming","children":[]},{"level":3,"title":"配置网络设置","slug":"配置网络设置","link":"#配置网络设置","children":[]},{"level":3,"title":"删除NIC Teaming","slug":"删除nic-teaming","link":"#删除nic-teaming","children":[]}]},{"level":2,"title":"Windows 10 1809版本之后","slug":"windows-10-1809版本之后","link":"#windows-10-1809版本之后","children":[{"level":3,"title":"配置NIC Teaming","slug":"配置nic-teaming-1","link":"#配置nic-teaming-1","children":[]},{"level":3,"title":"配置网络设置","slug":"配置网络设置-1","link":"#配置网络设置-1","children":[]},{"level":3,"title":"删除NIC Teaming","slug":"删除nic-teaming-1","link":"#删除nic-teaming-1","children":[]}]}],"git":{"createdTime":1721981808000,"updatedTime":1721981808000,"contributors":[{"name":"PaperDragon-SH","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":3.68,"words":1105},"filePathRelative":"note-book/Windows/Windows10中用多网卡链路聚合来解决网卡网速瓶颈.md","localizedDate":"2024年7月26日","excerpt":"\\n<p>在Windows 10中，可以利用双网卡链路聚合（NIC Teaming）来提升网速解决网卡瓶颈，这篇文章记录了设置链路聚合的方法。</p>\\n<p>在Windows 10 1809之前版本，可以使用PowerShell 小工具<code>New-NetLbfoTeam</code> 命令来创建网卡组。</p>\\n<p>在Windows 10 1809之后的版本，这个命令已经不再支持，只能在Windows Server操作系统上使用。我们只能求其次通过<code>New-NetSwitchTeam</code>命令来实现类似的功能。</p>\\n<h2>Windows 10 1809版本之前</h2>","autoDesc":true}');export{p as comp,k as data};
