import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as s,e as a}from"./app-pPoyMZy5.js";const r={},i=a(`<h1 id="ubuntu-20-04-安装vnc-server超简单教程" tabindex="-1"><a class="header-anchor" href="#ubuntu-20-04-安装vnc-server超简单教程" aria-hidden="true">#</a> Ubuntu 20.04 安装VNC Server超简单教程</h1><h2 id="_1-确保安装了gnome-desktop" tabindex="-1"><a class="header-anchor" href="#_1-确保安装了gnome-desktop" aria-hidden="true">#</a> 1.确保安装了GNOME DESKTOP</h2><p>对于桌面版是不用说了，服务器版操作系统需要安装一下桌面</p><pre><code># apt install ubuntu-gnome-desktop
 
# systemctl set-default multi-user.target
 
$ startx
</code></pre><h2 id="_2-installing-vnc" tabindex="-1"><a class="header-anchor" href="#_2-installing-vnc" aria-hidden="true">#</a> 2.Installing VNC</h2><p>不要安装tigervncserver</p><p>一定要安装这个 standalone的，会有一点区别（不识别 下面的 -localhost no)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt</span> <span class="token function">install</span> tigervnc-standalone-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-configuring-the-vnc-server" tabindex="-1"><a class="header-anchor" href="#_3-configuring-the-vnc-server" aria-hidden="true">#</a> 3.Configuring the VNC Server</h2><p>如果你希望用某个用户比如 demo登录，就用su切换到这个用户。</p><p>如果想用root登录就直接使用root账号进行操作。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># su - demo</span>
demo@demoserver:~$ vncpasswd
Password:
Verify:
Would you like to enter a view-only password <span class="token punctuation">(</span>y/n<span class="token punctuation">)</span>? n
A view-only password is not used
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的命令会在~/.vnc/目录下生成一个 passwd文件。里面是加密的密码。</p><p>然后需要cd 到 ~/.vnc目录下，新建一个xstartup 文件</p><p>输入以下内容：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>
<span class="token comment"># Start Gnome 3 Desktop </span>
<span class="token punctuation">[</span> <span class="token parameter variable">-x</span> /etc/vnc/xstartup <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">exec</span> /etc/vnc/xstartup
<span class="token punctuation">[</span> <span class="token parameter variable">-r</span> <span class="token environment constant">$HOME</span>/.Xresources <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> xrdb <span class="token environment constant">$HOME</span>/.Xresources
vncconfig <span class="token parameter variable">-iconic</span> <span class="token operator">&amp;</span>
dbus-launch --exit-with-session gnome-session <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>作用是vncserver启动的时候运行这些命令，把桌面程序启动起来。 4. ## Starting the VNC Server</p><p>$ vncserver</p><p>即可启动vnc server ,但是连不上，因为只监听了127.0.0.1，所以需要以下命令</p><p>$ vncserver -localhost no</p><p>查看全部的vnc会话</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ vncserver <span class="token parameter variable">-list</span>
TigerVNC server sessions:
 
X <span class="token environment constant">DISPLAY</span> <span class="token comment">#	PROCESS ID</span>
:1		<span class="token number">1607</span>
:2		<span class="token number">4726</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关闭某个会话可以用下面的命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ vncserver <span class="token parameter variable">-kill</span> :1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_5-客户端选择" tabindex="-1"><a class="header-anchor" href="#_5-客户端选择" aria-hidden="true">#</a> 5.客户端选择</h2><p>vncviewer</p><p>下载页面：</p><p>Download VNC Viewer for Windows | VNC® Connect</p><p>VNC Viewer - Download</p><p>具体使用不讲了，默认端口是5901</p>`,30),t=[i];function c(l,d){return e(),s("div",null,t)}const v=n(r,[["render",c],["__file","Ubuntu 20.04 安装VNC Server.html.vue"]]);export{v as default};
