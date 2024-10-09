import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{aj as e,ao as a,am as i}from"./app-COjiYc5s.js";const l="/assets/144635014-4c027645-0e09-4b84-8b78-88b41f950627-16918431760541-B1Vd69Hn.png",t="/assets/136070323-47f2600a-13e4-4eb0-a64d-d7eb805c28e2-16918431803793-CCR_erMH.png",r="/assets/135735404-1389d022-e5c5-4eb8-9655-f9f065e3c92e-16918431854245-CKCY_UfG.png",p="/assets/135735414-01321b0b-887e-43d6-ad68-a74db20cfe84-16918431870737-D5UFCsz7.png",d="/assets/135735419-50805ed6-20ea-4440-93b4-5bcc6f2aca9b-16918431889779-C06owFqf.png",o={};function c(u,s){return i(),e("div",null,s[0]||(s[0]=[a('<h1 id="连接warp为服务器添加ipv4和ipv6网络" tabindex="-1"><a class="header-anchor" href="#连接warp为服务器添加ipv4和ipv6网络"><span>连接WARP为服务器添加IPv4和IPv6网络</span></a></h1><blockquote><p>通常ip被污染之后使用 WARP进行增加ip复活</p><p>使用Warp有概率刷出原生ip</p><p>开源地址 https://github.com/fscarmen/warp</p></blockquote><h2 id="脚本特点" tabindex="-1"><a class="header-anchor" href="#脚本特点"><span>脚本特点</span></a></h2><ul><li>支持 WARP+ 账户，附带第三方刷 WARP+ 流量和升级内核 BBR 脚本</li><li>普通用户友好的菜单，进阶者通过后缀选项快速搭建</li><li>智能判断vps操作系统：Ubuntu 16.04、18.04、20.04; Debian 9、10、11，CentOS 7、8; Alpine 和 Arch Linux，请务必选择 LTS 系统 智能判断硬件结构类型：AMD、ARM 和 s390x</li><li>结合 Linux 版本和虚拟化方式，自动优选三个 WireGuard 方案。 网络性能方面：内核集成 WireGuard＞安装内核模块＞BoringTun＞wireguard-go</li><li>智能判断 WGCF 作者 github库的最新版本 （Latest release）</li><li>智能分析内网和公网IP生成 WGCF 配置文件</li><li>输出结果，提示是否使用 WARP IP ，IP 归属地</li></ul><h2 id="warp好处" tabindex="-1"><a class="header-anchor" href="#warp好处"><span>WARP好处</span></a></h2><ul><li>解锁奈飞流媒体</li><li>避免 Google 验证码或是使用 Google 学术搜索</li><li>可调用 IPv4 接口，使青龙和V2P等项目能正常运行</li><li>由于可以双向转输数据，能做对方VPS的跳板和探针，替代 HE tunnelbroker</li><li>能让 IPv6 only VPS 上做的节点支持 Telegram</li><li>IPv6 建的节点能在只支持 IPv4 的 PassWall、ShadowSocksR Plus+ 上使用</li></ul><figure><img src="'+l+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="运行脚本" tabindex="-1"><a class="header-anchor" href="#运行脚本"><span>运行脚本</span></a></h2><p>首次运行</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">wget</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -N</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://raw.githubusercontent.com/fscarmen/warp/main/menu.sh</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">bash</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> menu.sh</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [option] [lisence]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>再次运行</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>warp [option] [lisence]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><table><thead><tr><th>[option] 变量1 变量2</th><th>具体动作说明</th></tr></thead><tbody><tr><td>h</td><td>帮助</td></tr><tr><td>4</td><td>原无论任何状态 -&gt; WARP IPv4</td></tr><tr><td>4 lisence name</td><td>把 WARP+ Lisence 和设备名添加进去，如 <code>bash menu.sh 4 N5670ljg-sS9jD334-6o6g4M9F Goodluck</code></td></tr><tr><td>6</td><td>原无论任何状态 -&gt; WARP IPv6</td></tr><tr><td>d</td><td>原无论任何状态 -&gt; WARP 双栈</td></tr><tr><td>o</td><td>WARP 开关，脚本主动判断当前状态，自动开或关</td></tr><tr><td>u</td><td>卸载 WARP</td></tr><tr><td>n</td><td>断网时，用于刷WARP网络 (WARP bug)</td></tr><tr><td>b</td><td>升级内核、开启BBR及DD</td></tr><tr><td>a</td><td>免费 WARP 账户升级 WARP+</td></tr><tr><td>a lisence</td><td>在上面基础上把 WARP+ Lisence 添加进去，如 <code>bash menu.sh a N5670ljg-sS9jD334-6o6g4M9F</code></td></tr><tr><td>p</td><td>刷 Warp+ 流量</td></tr><tr><td>c</td><td>安装 WARP Linux Client，开启 Socks5 代理模式</td></tr><tr><td>l</td><td>安装 WARP Linux Client，开启 WARP 模式</td></tr><tr><td>c lisence</td><td>在上面基础上把 WARP+ Lisence 添加进去，如 <code>bash menu.sh c N5670ljg-sS9jD334-6o6g4M9F</code></td></tr><tr><td>r</td><td>WARP Linux Client 开关</td></tr><tr><td>v</td><td>同步脚本至最新版本</td></tr><tr><td>i</td><td>更换 WARP IP</td></tr><tr><td>s</td><td>单栈与双栈快速切换 ，如 <code>warp s 4</code>,<code>warp s 6</code>,<code>warp s d</code></td></tr><tr><td>e</td><td>安装 iptables + dnsmasq + ipset 分流流媒体方案</td></tr><tr><td>w</td><td>安装 WireProxy 解决方案</td></tr><tr><td>y</td><td>WireProxy 开关</td></tr><tr><td>其他或空值</td><td>菜单界面</td></tr></tbody></table><p>举例：想为 IPv4 的甲骨文添加 Warp 双栈，首次运行</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>wget -N https://cdn.jsdelivr.net/gh/fscarmen/warp/menu.sh &amp;&amp; bash menu.sh d</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>刷日本 Netflix 运行</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>warp i jp</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="刷-netflix-解锁-warp-ip-的方法" tabindex="-1"><a class="header-anchor" href="#刷-netflix-解锁-warp-ip-的方法"><span>刷 Netflix 解锁 WARP IP 的方法</span></a></h2><p>也可以用另一个通过 WARP 解锁流媒体的一键脚本: <a href="https://github.com/fscarmen/warp_unlock" target="_blank" rel="noopener noreferrer">【刷 WARP IP】 - 为 WARP 解锁流媒体而生</a></p><p>以刷 香港 hk 为例</p><ul><li>crontab 计划任务方式，流媒体解锁守护进程</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>bash &lt;(curl -sSL https://raw.githubusercontent.com/fscarmen/tools/main/warp_crontab.sh)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>screen 多会话方式运行，会话任务名为 n</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>screen -USdm n warp i hk  ##创建名为 n 的会话</span></span>
<span class="line"><span>screen -Udr n  ##进入会话 n 看运行情况</span></span>
<span class="line"><span>## 按 Ctrl+a 再按 d 退出话 n，返回主界面</span></span>
<span class="line"><span>screen -ls  ##查看会话窗口列表</span></span>
<span class="line"><span>screen -SX n quit  ##关闭会议 n，结束运行</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>nohup &amp; 后台运行方式，把结果输出到 log 文件</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>nohup warp i hk &gt; logs 2&gt;&amp;1 &amp;   ##放进后台运行</span></span>
<span class="line"><span>jobs -l | grep warp  ##看后台任务</span></span>
<span class="line"><span>cat logs  ##查看运行日志文件</span></span>
<span class="line"><span>kill -9 $(jobs -l | grep warp | awk &#39;{print $2}&#39;)  ##结束进程</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>crobtab 计划任务</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>echo &#39;@reboot root warp i hk&#39; &gt;&gt;/etc/crobtab   ##在计划任务里加入一条新任务</span></span>
<span class="line"><span>sed -i &#39;/warp i/d&#39; /etc/crontab   ##删掉计划任务</span></span>
<span class="line"><span>kill -9 $(pgrep -f warp)   ##杀掉正在运行的进程</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>另外遇到问题仍然需要用户有一定的处理能力，如结束时没有网络，可以用 <code>warp o</code> 开关来获取，因此并没有写死在脚本里了。</li><li>如果长时间仍然未刷出解锁IP，可以查查 CloudFlare 当地是否在维护调路由：https://www.cloudflarestatus.com/</li></ul><h2 id="netflix-分流到-warp-client-proxy、wireproxy-的方法" tabindex="-1"><a class="header-anchor" href="#netflix-分流到-warp-client-proxy、wireproxy-的方法"><span>Netflix 分流到 WARP Client Proxy、WireProxy 的方法</span></a></h2><p>感谢 vpsxb admin 原创教程: <a href="https://vpsxb.net/1069/" target="_blank" rel="noopener noreferrer">继续解锁奈飞（七）-WARP socks5 client分流</a></p><p>先安装 WARP Client，假设使用默认的 40000 端口 并安装 <a href="https://github.com/mack-a/v2ray-agent" target="_blank" rel="noopener noreferrer">mack-a 八合一脚本</a> 为例。编辑 <code>/etc/v2ray-agent/xray/conf/10_ipv4_outbounds.json</code></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;outbounds&quot;: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;protocol&quot;: &quot;freedom&quot;</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;tag&quot;: &quot;media-unlock&quot;,</span></span>
<span class="line"><span>            &quot;protocol&quot;: &quot;socks&quot;,</span></span>
<span class="line"><span>            &quot;settings&quot;: {</span></span>
<span class="line"><span>                &quot;servers&quot;: [</span></span>
<span class="line"><span>                    {</span></span>
<span class="line"><span>                        &quot;address&quot;: &quot;127.0.0.1&quot;,</span></span>
<span class="line"><span>                        &quot;port&quot;: 40000,</span></span>
<span class="line"><span>                        &quot;users&quot;: []</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                ]</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    &quot;routing&quot;: {</span></span>
<span class="line"><span>        &quot;domainStrategy&quot;: &quot;AsIs&quot;,</span></span>
<span class="line"><span>        &quot;rules&quot;: [</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;type&quot;: &quot;field&quot;,</span></span>
<span class="line"><span>                &quot;domain&quot;: [</span></span>
<span class="line"><span>                    &quot;geosite:netflix&quot;,</span></span>
<span class="line"><span>                    &quot;domain:ip.gs&quot;</span></span>
<span class="line"><span>                ],</span></span>
<span class="line"><span>                &quot;outboundTag&quot;: &quot;media-unlock&quot;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="netflix-google-分流到-client-warp-网络接口的方法" tabindex="-1"><a class="header-anchor" href="#netflix-google-分流到-client-warp-网络接口的方法"><span>Netflix,Google 分流到 Client WARP 网络接口的方法</span></a></h2><p>感谢 LUDAN 老师提供的网络接口分流配置模板，注意：172.16.0.2 为 CloudFlareWARP 网络接口的 IP</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;outbounds&quot;:[</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;tag&quot;:&quot;INTERNET_OUT&quot;,</span></span>
<span class="line"><span>            &quot;protocol&quot;:&quot;freedom&quot;,</span></span>
<span class="line"><span>            &quot;settings&quot;:{</span></span>
<span class="line"><span>                &quot;domainStrategy&quot;:&quot;UseIP&quot;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;tag&quot;:&quot;CLI_OUT&quot;,</span></span>
<span class="line"><span>            &quot;protocol&quot;:&quot;freedom&quot;,</span></span>
<span class="line"><span>            &quot;settings&quot;:{</span></span>
<span class="line"><span>                &quot;domainStrategy&quot;:&quot;UseIPv4&quot;</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            &quot;sendThrough&quot;:&quot;172.16.0.2&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    &quot;routing&quot;:{</span></span>
<span class="line"><span>        &quot;rules&quot;:[</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;type&quot;:&quot;field&quot;,</span></span>
<span class="line"><span>                &quot;outboundTag&quot;:&quot;CLI_OUT&quot;,</span></span>
<span class="line"><span>                &quot;domain&quot;:[</span></span>
<span class="line"><span>                    &quot;geosite:google&quot;,</span></span>
<span class="line"><span>                    &quot;geosite:netflix&quot;,</span></span>
<span class="line"><span>                    &quot;domain:ip.gs&quot;</span></span>
<span class="line"><span>                ]</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;type&quot;:&quot;field&quot;,</span></span>
<span class="line"><span>                &quot;outboundTag&quot;:&quot;INTERNET_OUT&quot;,</span></span>
<span class="line"><span>                &quot;network&quot;:&quot;udp,tcp&quot;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    &quot;dns&quot;:{</span></span>
<span class="line"><span>        &quot;servers&quot;:[</span></span>
<span class="line"><span>            &quot;1.1.1.1&quot;,</span></span>
<span class="line"><span>            &quot;1.0.0.1&quot;</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="warp-license-及-id-获取" tabindex="-1"><a class="header-anchor" href="#warp-license-及-id-获取"><span>WARP+ License 及 ID 获取</span></a></h2><p>以下是使用WARP和Team后 Argo 2.0 的官方介绍:<a href="https://blog.cloudflare.com/argo-v2/" target="_blank" rel="noopener noreferrer">Argo 2.0: Smart Routing Learns New Tricks</a></p><p>引用Luminous大神原话：实际测试WARP+在访问非CF的网站速度上和免费版没有差异，只有在访问CloudFlare的站点时付费版会通过Argo类似的技术通过与目标较近的数据中心前往源站，而免费版是仅限于连接地前往源站，仅此而已。</p><figure><img src="`+t+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="warp-网络接口数据-临时、永久关闭和开启" tabindex="-1"><a class="header-anchor" href="#warp-网络接口数据-临时、永久关闭和开启"><span>WARP 网络接口数据，临时、永久关闭和开启</span></a></h2><p>WireGuard 网络接口数据，查看 <code>wg</code></p><p>临时关闭和开启 WARP（reboot重启后恢复开启） <code>warp o</code> 官方原始指令 <code>wg-quick down wgcf</code> ，恢复启动 <code>wg-quick up wgcf</code></p><p>禁止开机启动 <code>systemctl disable --now wg-quick@wgcf</code>,恢复开机启动 <code>systemctl enable --now wg-quick@wgcf</code></p><h2 id="warp-teams-获取并用于-linux-的方法" tabindex="-1"><a class="header-anchor" href="#warp-teams-获取并用于-linux-的方法"><span>WARP Teams 获取并用于 Linux 的方法</span></a></h2><ul><li><p>感谢 TonyLCH 提供的资讯 <a href="https://github.com/fscarmen/warp/issues/26" target="_blank" rel="noopener noreferrer">#26</a> ，由于Team是无限制的，省去了刷 WARP+ 流量。方法大体： 1.安装通安卓模拟器，并在上面安装 1.1.1.1 apk连上 2.连上 teams 后抓包，把获取到的信息替换到wgcf.conf配置文件里</p><p>具体原创文章:<a href="https://parkercs.tech/cloudflare-for-teams-wireguard-config/" target="_blank" rel="noopener noreferrer">Cloudflare for Teams Wireguard Config</a></p></li><li><p>Download 下载: 1、 Android Studio: <a href="https://redirector.gvt1.com/edgedl/android/studio/install/2020.3.1.26/android-studio-2020.3.1.26-mac.dmg" target="_blank" rel="noopener noreferrer">MAC</a> <a href="https://redirector.gvt1.com/edgedl/android/studio/install/2020.3.1.26/android-studio-2020.3.1.26-windows.exe" target="_blank" rel="noopener noreferrer">WIN</a> 2、 Android platform-tools: <a href="https://dl.google.com/android/repository/platform-tools-latest-darwin.zip" target="_blank" rel="noopener noreferrer">MAC</a> <a href="https://dl.google.com/android/repository/platform-tools-latest-windows.zip" target="_blank" rel="noopener noreferrer">WIN</a> 3、 1.1.1.1: Faster &amp; Safer Internet V6.10: <a href="https://apkpure.com/cn/1-1-1-1-faster-safer-internet/com.cloudflare.onedotonedotonedotone/download/2158-APK-d58edfa7c40ff1891244c556b872f18d?from=versions%2Fversion" target="_blank" rel="noopener noreferrer">Android</a></p></li><li><p>感谢 Misaka 演示: <a href="https://www.bilibili.com/video/BV1gU4y1K7of/" target="_blank" rel="noopener noreferrer">1.视频教程</a> <a href="https://owo.misaka.rest/cf-teams/" target="_blank" rel="noopener noreferrer">2.图文教程</a></p></li></ul><h2 id="warp原理" tabindex="-1"><a class="header-anchor" href="#warp原理"><span>WARP原理</span></a></h2><p>WARP是CloudFlare提供的一项基于WireGuard的网络流量安全及加速服务，能够让你通过连接到CloudFlare的边缘节点实现隐私保护及链路优化。</p><p>其连接入口为双栈（IPv4/IPv6均可），且连接后能够获取到由CF提供基于NAT的IPv4和IPv6地址，因此我们的单栈服务器可以尝试连接到WARP来获取额外的网络连通性支持。这样我们就可以让仅具有IPv6的服务器访问IPv4，也能让仅具有IPv4的服务器获得IPv6的访问能力。</p><ul><li>为仅IPv6服务器添加IPv4</li></ul><p>原理如图，IPv4的流量均被WARP网卡接管，实现了让IPv4的流量通过WARP访问外部网络。 <img src="'+r+'" alt="img" loading="lazy"></p><ul><li>为仅IPv4服务器添加IPv6</li></ul><p>原理如图，IPv6的流量均被WARP网卡接管，实现了让IPv6的流量通过WARP访问外部网络。 <img src="'+p+'" alt="img" loading="lazy"></p><ul><li>双栈服务器置换网络</li></ul><p>有时我们的服务器本身就是双栈的，但是由于种种原因我们可能并不想使用其中的某一种网络，这时也可以通过WARP接管其中的一部分网络连接隐藏自己的IP地址。至于这样做的目的，最大的意义是减少一些滥用严重机房出现验证码的概率；同时部分内容提供商将WARP的落地IP视为真实用户的原生IP对待，能够解除一些基于IP识别的封锁。 <img src="'+d+'" alt="img" loading="lazy"></p><ul><li>网络性能方面：内核集成＞内核模块＞wireguard-go</li></ul><p>Linux 5.6 及以上内核则已经集成了 WireGuard ，可以用 <code>hostnamectl</code>或<code>uname -r</code>查看版本。</p><p>甲骨文是 KVM 完整虚拟化的 VPS 主机，而官方系统由于版本较低，在不更换内核的前提下选择 &quot;内核模块&quot; 方案。如已升级内核在5.6及以上，将会自动选择 “内核集成” 方案。</p><p>EUserv是 LXC 非完整虚拟化 VPS 主机，共享宿主机内核，不能更换内核，只能选择 &quot;wireguard-go&quot; 方案。</p><h2 id="鸣谢下列作者的文章和项目" tabindex="-1"><a class="header-anchor" href="#鸣谢下列作者的文章和项目"><span>鸣谢下列作者的文章和项目</span></a></h2><p>互联网永远不会忘记，但人们会。</p><p>技术文章或相关项目（排名不分先后）:</p><ul><li>P3terx: https://p3terx.com/archives/use-cloudflare-warp-to-add-extra-ipv4-or-ipv6-network-support-to-vps-servers-for-free.html</li><li>P3terx: https://github.com/P3TERX/warp.sh/blob/main/warp.sh</li><li>猫大: https://github.com/Oreomeow</li><li>Luminous: https://luotianyi.vc/5252.html</li><li>Hiram: https://hiram.wang/cloudflare-wrap-vps</li><li>Cloudflare: https://developers.cloudflare.com/warp-client/setting-up/linux https://blog.cloudflare.com/announcing-warp-for-linux-and-proxy-mode/ https://blog.cloudflare.com/argo-v2/</li><li>WireGuard: https://lists.zx2c4.com/pipermail/wireguard/2017-December/002201.html</li><li>Parker C. Stephens: https://parkercs.tech/cloudflare-for-teams-wireguard-config/</li><li>Anemone: https://cutenico.best/posts/blogs/cloudflare-warp-fixed-youtube-location/ https://github.com/acacia233/Project-WARP-Unlock</li><li>wangying202: https://blog.csdn.net/wangying202/article/details/113178159</li><li>LUBAN: https://github.com/HXHGTS/Cloudflare_WARP_Connect</li></ul><p>服务提供（排名不分先后）:</p><ul><li>CloudFlare Warp(+): https://1.1.1.1/</li><li>WGCF 项目原作者: https://github.com/ViRb3/wgcf/</li><li>WireGuard-GO 官方: https://git.zx2c4.com/wireguard-go/</li><li>ylx2016 的成熟作品: https://github.com/ylx2016/Linux-NetSpeed</li><li>ALIILAPRO 的成熟作品: https://github.com/ALIILAPRO/warp-plus-cloudflare</li><li>mixool 的成熟作品: https://github.com/azples/across/tree/main/wireguard</li><li>luoxue-bot 的成熟作品:https://github.com/luoxue-bot/warp_auto_change_ip</li><li>lmc999 的成熟作品: https://github.com/lmc999/RegionRestrictionCheck</li><li>WireProxy 作者: https://github.com/octeep/wireproxy</li><li>获取公网 IP 及归属地查询: https://ip.gs/</li><li>统计PV网:https://hits.seeyoufarm.com/</li></ul><p>CloudFlare WARP 全球站点和服务状态:</p><ul><li>Operational = 正常。Re-routed = 检修状态: https://www.cloudflarestatus.com/</li></ul>',67)]))}const m=n(o,[["render",c],["__file","连接WARP为服务器添加IPv4和IPv6网络.html.vue"]]),g=JSON.parse('{"path":"/note-book/VirtualPrivateNetwork/%E7%8B%AD%E4%B9%89VirtualPrivateNetwork/%E8%BF%9E%E6%8E%A5WARP%E4%B8%BA%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%B7%BB%E5%8A%A0IPv4%E5%92%8CIPv6%E7%BD%91%E7%BB%9C.html","title":"连接WARP为服务器添加IPv4和IPv6网络","lang":"zh-CN","frontmatter":{"description":"连接WARP为服务器添加IPv4和IPv6网络 通常ip被污染之后使用 WARP进行增加ip复活 使用Warp有概率刷出原生ip 开源地址 https://github.com/fscarmen/warp 脚本特点 支持 WARP+ 账户，附带第三方刷 WARP+ 流量和升级内核 BBR 脚本 普通用户友好的菜单，进阶者通过后缀选项快速搭建 智能判断v...","head":[["meta",{"property":"og:url","content":"https://www.geekery.cn/note-book/VirtualPrivateNetwork/%E7%8B%AD%E4%B9%89VirtualPrivateNetwork/%E8%BF%9E%E6%8E%A5WARP%E4%B8%BA%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%B7%BB%E5%8A%A0IPv4%E5%92%8CIPv6%E7%BD%91%E7%BB%9C.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"连接WARP为服务器添加IPv4和IPv6网络"}],["meta",{"property":"og:description","content":"连接WARP为服务器添加IPv4和IPv6网络 通常ip被污染之后使用 WARP进行增加ip复活 使用Warp有概率刷出原生ip 开源地址 https://github.com/fscarmen/warp 脚本特点 支持 WARP+ 账户，附带第三方刷 WARP+ 流量和升级内核 BBR 脚本 普通用户友好的菜单，进阶者通过后缀选项快速搭建 智能判断v..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-22T13:07:52.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-22T13:07:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"连接WARP为服务器添加IPv4和IPv6网络\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-22T13:07:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"脚本特点","slug":"脚本特点","link":"#脚本特点","children":[]},{"level":2,"title":"WARP好处","slug":"warp好处","link":"#warp好处","children":[]},{"level":2,"title":"运行脚本","slug":"运行脚本","link":"#运行脚本","children":[]},{"level":2,"title":"刷 Netflix 解锁 WARP IP 的方法","slug":"刷-netflix-解锁-warp-ip-的方法","link":"#刷-netflix-解锁-warp-ip-的方法","children":[]},{"level":2,"title":"Netflix 分流到 WARP Client Proxy、WireProxy 的方法","slug":"netflix-分流到-warp-client-proxy、wireproxy-的方法","link":"#netflix-分流到-warp-client-proxy、wireproxy-的方法","children":[]},{"level":2,"title":"Netflix,Google 分流到 Client WARP 网络接口的方法","slug":"netflix-google-分流到-client-warp-网络接口的方法","link":"#netflix-google-分流到-client-warp-网络接口的方法","children":[]},{"level":2,"title":"WARP+ License 及 ID 获取","slug":"warp-license-及-id-获取","link":"#warp-license-及-id-获取","children":[]},{"level":2,"title":"WARP 网络接口数据，临时、永久关闭和开启","slug":"warp-网络接口数据-临时、永久关闭和开启","link":"#warp-网络接口数据-临时、永久关闭和开启","children":[]},{"level":2,"title":"WARP Teams 获取并用于 Linux 的方法","slug":"warp-teams-获取并用于-linux-的方法","link":"#warp-teams-获取并用于-linux-的方法","children":[]},{"level":2,"title":"WARP原理","slug":"warp原理","link":"#warp原理","children":[]},{"level":2,"title":"鸣谢下列作者的文章和项目","slug":"鸣谢下列作者的文章和项目","link":"#鸣谢下列作者的文章和项目","children":[]}],"git":{"createdTime":1691939318000,"updatedTime":1727010472000,"contributors":[{"name":"PaperDragon","email":"2678885646@qq.com","commits":1},{"name":"PaperDragon-SH","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":8.12,"words":2437},"filePathRelative":"note-book/VirtualPrivateNetwork/狭义VirtualPrivateNetwork/连接WARP为服务器添加IPv4和IPv6网络.md","localizedDate":"2023年8月13日","excerpt":"\\n<blockquote>\\n<p>通常ip被污染之后使用 WARP进行增加ip复活</p>\\n<p>使用Warp有概率刷出原生ip</p>\\n<p>开源地址 https://github.com/fscarmen/warp</p>\\n</blockquote>\\n<h2>脚本特点</h2>\\n<ul>\\n<li>支持 WARP+ 账户，附带第三方刷 WARP+ 流量和升级内核 BBR 脚本</li>\\n<li>普通用户友好的菜单，进阶者通过后缀选项快速搭建</li>\\n<li>智能判断vps操作系统：Ubuntu 16.04、18.04、20.04; Debian 9、10、11，CentOS 7、8; Alpine 和 Arch Linux，请务必选择 LTS 系统\\n智能判断硬件结构类型：AMD、ARM 和 s390x</li>\\n<li>结合 Linux 版本和虚拟化方式，自动优选三个 WireGuard 方案。\\n网络性能方面：内核集成 WireGuard＞安装内核模块＞BoringTun＞wireguard-go</li>\\n<li>智能判断 WGCF 作者 github库的最新版本 （Latest release）</li>\\n<li>智能分析内网和公网IP生成 WGCF 配置文件</li>\\n<li>输出结果，提示是否使用 WARP IP ，IP 归属地</li>\\n</ul>","autoDesc":true}');export{m as comp,g as data};
