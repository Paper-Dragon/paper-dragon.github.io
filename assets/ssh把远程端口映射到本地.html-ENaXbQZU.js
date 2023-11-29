import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,e as n}from"./app-rsO6eM8p.js";const t={},d=n(`<h1 id="ssh把远程端口映射到本地" tabindex="-1"><a class="header-anchor" href="#ssh把远程端口映射到本地" aria-hidden="true">#</a> ssh把远程端口映射到本地</h1><h2 id="应用场景1-docker容器端口映射到本地" tabindex="-1"><a class="header-anchor" href="#应用场景1-docker容器端口映射到本地" aria-hidden="true">#</a> 应用场景1： docker容器端口映射到本地</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">ssh</span> <span class="token parameter variable">-L</span> <span class="token number">80</span>:172.18.0.3:80 root@43.136.116.195
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="解释" tabindex="-1"><a class="header-anchor" href="#解释" aria-hidden="true">#</a> 解释</h2><table><thead><tr><th>字段</th><th>含义</th></tr></thead><tbody><tr><td>ssh</td><td>命令</td></tr><tr><td>-L</td><td>指定到本地（客户端）主机上给定 TCP 端口或 Unix 套接字的连接将被转发到远程端的给定主机和端口或 Unix 套接字。（服务器做正向代理）</td></tr><tr><td>80:172.18.0.3:80</td><td>本地端口80 -&gt; 远程主机里的 172.18.0.3 的 80端口</td></tr><tr><td>root@43.136.116.195</td><td>远程连接用户@远程主机地址</td></tr></tbody></table><h2 id="选项解释-l" tabindex="-1"><a class="header-anchor" href="#选项解释-l" aria-hidden="true">#</a> 选项解释： -L</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>     <span class="token parameter variable">-L</span> <span class="token punctuation">[</span>bind_address:<span class="token punctuation">]</span>port:host:hostport
     <span class="token parameter variable">-L</span> <span class="token punctuation">[</span>bind_address:<span class="token punctuation">]</span>port:remote_socket
     <span class="token parameter variable">-L</span> local_socket:host:hostport
     <span class="token parameter variable">-L</span> local_socket:remote_socket
              指定到本地（客户端）主机上给定 TCP 端口或 Unix 套接字的连接将被转发到远程端的给定主机和端口或 Unix 套接字。
              这是通过分配一个套接字来侦听本地端的 TCP 端口（可选地绑定到指定的 bind_address）或 Unix 套接字来实现的。 每当连接是
              与本地端口或套接字建立连接，连接通过安全通道转发，并与主机端口 hostport 或 Unix 套接字 remote_socket 建立连接，
              从远程机器。

              也可以在配置文件中指定端口转发。 只有超级用户可以转发特权端口。 可以通过将地址包含在
              方括号。

              默认情况下，本地端口根据 GatewayPorts 设置进行绑定。 但是，可以使用显式 bind_address 将连接绑定到特定地址。 这
              “localhost”的 bind_address 表示监听端口仅供本地使用，而空地址或“*”表示端口应可用于所有
              接口。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),i=[d];function r(l,c){return a(),s("div",null,i)}const v=e(t,[["render",r],["__file","ssh把远程端口映射到本地.html.vue"]]);export{v as default};
