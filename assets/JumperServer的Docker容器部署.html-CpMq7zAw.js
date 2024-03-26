import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as e}from"./app-Cwuzeebb.js";const t={},l=e(`<h1 id="jumperserver的docker容器部署" tabindex="-1"><a class="header-anchor" href="#jumperserver的docker容器部署"><span>JumperServer的Docker容器部署</span></a></h1><h2 id="环境展示和配置如下" tabindex="-1"><a class="header-anchor" href="#环境展示和配置如下"><span>环境展示和配置如下</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cat /etc/redhat-release</span>
Rocky Linux release <span class="token number">8.5</span> <span class="token punctuation">(</span>Green Obsidian<span class="token punctuation">)</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># sed -i &#39;s/SELINUX=.*$/SELINUX=disabled/g&#39; /etc/selinux/config</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># grep SELINUX /etc/selinux/config</span>
<span class="token comment"># SELINUX=disabled</span>
<span class="token assign-left variable">SELINUX</span><span class="token operator">=</span>disabled
<span class="token comment"># SELINUXTYPE= can take one of these three values:</span>
<span class="token assign-left variable">SELINUXTYPE</span><span class="token operator">=</span>targeted
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># setenforce 0</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># getenforce</span>
Permissive
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># systemctl status firewalld</span>
● firewalld.service - firewalld - dynamic firewall daemon
   Loaded: loaded <span class="token punctuation">(</span>/usr/lib/systemd/system/firewalld.service<span class="token punctuation">;</span> enabled<span class="token punctuation">;</span> vendor preset: enabled<span class="token punctuation">)</span>
   Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Sat <span class="token number">2022</span>-04-23 <span class="token number">12</span>:21:01 CST<span class="token punctuation">;</span> 3min 39s ago
     Docs: man:firewalld<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
 Main PID: <span class="token number">1011</span> <span class="token punctuation">(</span>firewalld<span class="token punctuation">)</span>
    Tasks: <span class="token number">2</span> <span class="token punctuation">(</span>limit: <span class="token number">24736</span><span class="token punctuation">)</span>
   Memory: <span class="token number">30</span>.5M
   CGroup: /system.slice/firewalld.service
           └─1011 /usr/libexec/platform-python <span class="token parameter variable">-s</span> /usr/sbin/firewalld <span class="token parameter variable">--nofork</span> <span class="token parameter variable">--nopid</span>

Apr <span class="token number">23</span> <span class="token number">12</span>:21:01 localhost.localdomain systemd<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: Starting firewalld - dynamic firewall daemon<span class="token punctuation">..</span>.
Apr <span class="token number">23</span> <span class="token number">12</span>:21:01 localhost.localdomain systemd<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: Started firewalld - dynamic firewall daemon.
Apr <span class="token number">23</span> <span class="token number">12</span>:21:01 localhost.localdomain firewalld<span class="token punctuation">[</span><span class="token number">1011</span><span class="token punctuation">]</span>: WARNING: AllowZoneDrifting is enabled. This is considered an insecure configuration option. It will be removed <span class="token keyword">in</span> a future release. Please consider di<span class="token operator">&gt;</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment">#</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment">#</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># firewall-cmd --list-all</span>
public <span class="token punctuation">(</span>active<span class="token punctuation">)</span>
  target: default
  icmp-block-inversion: no
  interfaces: ens160
  sources:
  services: cockpit dhcpv6-client <span class="token function">ssh</span>
  ports:
  protocols:
  forward: no
  masquerade: no
  forward-ports:
  source-ports:
  icmp-blocks:
  rich rules:
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment">#</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="上传脚本" tabindex="-1"><a class="header-anchor" href="#上传脚本"><span>上传脚本</span></a></h2><h3 id="脚本实例" tabindex="-1"><a class="header-anchor" href="#脚本实例"><span>脚本实例</span></a></h3><p>JumperServer\\others\\jumper_bin_deploy.sh</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env bash</span>
<span class="token comment"># 因为使用了国外网络，实际使用仁者见仁</span>

<span class="token assign-left variable">Version</span><span class="token operator">=</span>v2.21.0 <span class="token comment">#版本</span>

<span class="token keyword">function</span> <span class="token function-name function">install_soft</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token builtin class-name">command</span> <span class="token parameter variable">-v</span> dnf <span class="token operator">&gt;</span> /dev/null<span class="token punctuation">;</span> <span class="token keyword">then</span>
      dnf <span class="token parameter variable">-q</span> <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span>
    <span class="token keyword">elif</span> <span class="token builtin class-name">command</span> <span class="token parameter variable">-v</span> yum <span class="token operator">&gt;</span> /dev/null<span class="token punctuation">;</span> <span class="token keyword">then</span>
      yum <span class="token parameter variable">-q</span> <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span>
    <span class="token keyword">elif</span> <span class="token builtin class-name">command</span> <span class="token parameter variable">-v</span> <span class="token function">apt</span> <span class="token operator">&gt;</span> /dev/null<span class="token punctuation">;</span> <span class="token keyword">then</span>
      <span class="token function">apt-get</span> <span class="token parameter variable">-qqy</span> <span class="token function">install</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span>
    <span class="token keyword">elif</span> <span class="token builtin class-name">command</span> <span class="token parameter variable">-v</span> <span class="token function">zypper</span> <span class="token operator">&gt;</span> /dev/null<span class="token punctuation">;</span> <span class="token keyword">then</span>
      <span class="token function">zypper</span> <span class="token parameter variable">-q</span> <span class="token parameter variable">-n</span> <span class="token function">install</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span>
    <span class="token keyword">elif</span> <span class="token builtin class-name">command</span> <span class="token parameter variable">-v</span> apk <span class="token operator">&gt;</span> /dev/null<span class="token punctuation">;</span> <span class="token keyword">then</span>
      apk <span class="token function">add</span> <span class="token parameter variable">-q</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span>
      <span class="token builtin class-name">command</span> <span class="token parameter variable">-v</span> gettext <span class="token operator">&gt;</span>/dev/null <span class="token operator">||</span> <span class="token punctuation">{</span>
      apk <span class="token function">add</span> <span class="token parameter variable">-q</span> gettext-dev python2
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
      <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;[<span class="token entity" title="\\033">\\033</span>[31m ERROR <span class="token entity" title="\\033">\\033</span>[0m] Please install it first (请先安装) <span class="token variable">$1</span> &quot;</span>
      <span class="token builtin class-name">exit</span> <span class="token number">1</span>
    <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function-name function">prepare_install</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token function">curl</span> <span class="token function">wget</span> <span class="token function">tar</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token builtin class-name">command</span> <span class="token parameter variable">-v</span> <span class="token variable">$i</span> <span class="token operator">&amp;&gt;</span>/dev/null <span class="token operator">||</span> install_soft <span class="token variable">$i</span>
  <span class="token keyword">done</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function-name function">get_installer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;download install script to /opt/jumpserver-installer-<span class="token variable">\${Version}</span> (开始下载安装脚本到 /opt/jumpserver-installer-<span class="token variable">\${Version}</span>)&quot;</span>
  <span class="token builtin class-name">cd</span> /opt <span class="token operator">||</span> <span class="token builtin class-name">exit</span> <span class="token number">1</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;/opt/jumpserver-installer-<span class="token variable">\${Version}</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token function">timeout</span> <span class="token number">60</span> <span class="token function">wget</span> <span class="token parameter variable">-qO</span> jumpserver-installer-<span class="token variable">\${Version}</span>.tar.gz https://github.com/jumpserver/installer/releases/download/<span class="token variable">\${Version}</span>/jumpserver-installer-<span class="token variable">\${Version}</span>.tar.gz <span class="token operator">||</span> <span class="token punctuation">{</span>
      <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /opt/jumpserver-installer-<span class="token variable">\${Version}</span>.tar.gz
      <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;[<span class="token entity" title="\\033">\\033</span>[31m ERROR <span class="token entity" title="\\033">\\033</span>[0m] Failed to download jumpserver-installer-<span class="token variable">\${Version}</span> (下载 jumpserver-installer-<span class="token variable">\${Version}</span> 失败, 请检查网络是否正常或尝试重新执行脚本)&quot;</span>
      <span class="token builtin class-name">exit</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
    <span class="token function">tar</span> <span class="token parameter variable">-xf</span> /opt/jumpserver-installer-<span class="token variable">\${Version}</span>.tar.gz <span class="token parameter variable">-C</span> /opt <span class="token operator">||</span> <span class="token punctuation">{</span>
      <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /opt/jumpserver-installer-<span class="token variable">\${Version}</span>
      <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;[<span class="token entity" title="\\033">\\033</span>[31m ERROR <span class="token entity" title="\\033">\\033</span>[0m] Failed to unzip jumpserver-installer-<span class="token variable">\${Version}</span> (解压 jumpserver-installer-<span class="token variable">\${Version}</span> 失败, 请检查网络是否正常或尝试重新执行脚本)&quot;</span>
      <span class="token builtin class-name">exit</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
    <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /opt/jumpserver-installer-<span class="token variable">\${Version}</span>.tar.gz
  <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function-name function">config_installer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">cd</span> /opt/jumpserver-installer-<span class="token variable">\${Version}</span> <span class="token operator">||</span> <span class="token builtin class-name">exit</span> <span class="token number">1</span>
  <span class="token builtin class-name">shopt</span> <span class="token parameter variable">-s</span> expand_aliases
  <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span><span class="token variable">)</span></span> <span class="token operator">==</span> <span class="token string">&#39;Darwin&#39;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">alias</span> <span class="token assign-left variable">sedi</span><span class="token operator">=</span><span class="token string">&#39;sed -i &quot;&quot;&#39;</span>
  <span class="token keyword">else</span>
    <span class="token builtin class-name">alias</span> <span class="token assign-left variable">sedi</span><span class="token operator">=</span><span class="token string">&#39;sed -i&#39;</span>
  <span class="token keyword">fi</span>
  <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s/VERSION=.*/VERSION=<span class="token variable">\${Version}</span>/g&quot;</span> /opt/jumpserver-installer-<span class="token variable">\${Version}</span>/static.env
  ./jmsctl.sh <span class="token function">install</span>
  ./jmsctl.sh start
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function-name function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  prepare_install
  get_installer
  config_installer
<span class="token punctuation">}</span>

main

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="脚本运行过程" tabindex="-1"><a class="header-anchor" href="#脚本运行过程"><span>脚本运行过程</span></a></h3><ul><li>注意第23行，出现错误，这个是因为官方脚本不对，需要修改sed -i</li><li></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ls -l</span>
total <span class="token number">8</span>
-rw-------. <span class="token number">1</span> root root <span class="token number">1154</span> Apr <span class="token number">23</span> <span class="token number">12</span>:20 anaconda-ks.cfg
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">2249</span> Apr <span class="token number">23</span> <span class="token number">12</span>:28 jumper_bin_deploy.sh
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment">#</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment">#</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># chmod +x jumper_bin_deploy.sh</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ls -l</span>
total <span class="token number">8</span>
-rw-------. <span class="token number">1</span> root root <span class="token number">1154</span> Apr <span class="token number">23</span> <span class="token number">12</span>:20 anaconda-ks.cfg
-rwxr-xr-x. <span class="token number">1</span> root root <span class="token number">2249</span> Apr <span class="token number">23</span> <span class="token number">12</span>:28 jumper_bin_deploy.sh
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ./jumper_bin_deploy.sh</span>
Importing GPG key 0x6D745A60:
 Userid     <span class="token builtin class-name">:</span> <span class="token string">&quot;Release Engineering &lt;infrastructure@rockylinux.org&gt;&quot;</span>
 Fingerprint: <span class="token number">7051</span> C470 A929 F454 CEBE 37B7 15AF 5DAC 6D74 5A60
 From       <span class="token builtin class-name">:</span> /etc/pki/rpm-gpg/RPM-GPG-KEY-rockyofficial

Installed:
  libmetalink-0.1.3-7.el8.x86_64                                                                           wget-1.19.5-10.el8.x86_64

download <span class="token function">install</span> script to /opt/jumpserver-installer-v2.21.0 <span class="token punctuation">(</span>开始下载安装脚本到 /opt/jumpserver-installer-v2.21.0<span class="token punctuation">)</span>

Redirecting output to ‘wget-log’.
./jumper_bin_deploy.sh: line <span class="token number">58</span>: sedi: <span class="token builtin class-name">command</span> not found


       ██╗██╗   ██╗███╗   ███╗██████╗ ███████╗███████╗██████╗ ██╗   ██╗███████╗██████╗
       ██║██║   ██║████╗ ████║██╔══██╗██╔════╝██╔════╝██╔══██╗██║   ██║██╔════╝██╔══██╗
       ██║██║   ██║██╔████╔██║██████╔╝███████╗█████╗  ██████╔╝██║   ██║█████╗  ██████╔╝
  ██   ██║██║   ██║██║╚██╔╝██║██╔═══╝ ╚════██║██╔══╝  ██╔══██╗╚██╗ ██╔╝██╔══╝  ██╔══██╗
  ╚█████╔╝╚██████╔╝██║ ╚═╝ ██║██║     ███████║███████╗██║  ██║ ╚████╔╝ ███████╗██║  ██║
   ╚════╝  ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚══════╝╚══════╝╚═╝  ╚═╝  ╚═══╝  ╚══════╝╚═╝  ╚═╝

                                                                   Version:  v2.21.0

<span class="token number">1</span>. Check Configuration File
Path to Configuration file: /opt/jumpserver/config
/opt/jumpserver/config/config.txt  <span class="token punctuation">[</span> √ <span class="token punctuation">]</span>
/opt/jumpserver/config/nginx/cert/server.crt   <span class="token punctuation">[</span> √ <span class="token punctuation">]</span>
/opt/jumpserver/config/nginx/cert/server.key   <span class="token punctuation">[</span> √ <span class="token punctuation">]</span>
complete

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Install and Configure Docker
<span class="token number">1</span>. Install Docker
Starting to download Docker engine <span class="token punctuation">..</span>.
Starting to download Docker Compose binary <span class="token punctuation">..</span>.
complete

<span class="token number">2</span>. Configure Docker
Do you want to support IPv6? <span class="token punctuation">(</span>y/n<span class="token punctuation">)</span>  <span class="token punctuation">(</span>default n<span class="token punctuation">)</span>: n
complete

<span class="token number">3</span>. Start Docker
Created symlink /etc/systemd/system/multi-user.target.wants/docker.service → /etc/systemd/system/docker.service.
^C
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ^C</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ^C</span>
作如下修改

<span class="token keyword">function</span> <span class="token function-name function">config_installer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">cd</span> /opt/jumpserver-installer-<span class="token variable">\${Version}</span> <span class="token operator">||</span> <span class="token builtin class-name">exit</span> <span class="token number">1</span>
  <span class="token builtin class-name">shopt</span> <span class="token parameter variable">-s</span> expand_aliases
  <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span><span class="token variable">)</span></span> <span class="token operator">==</span> <span class="token string">&#39;Darwin&#39;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">alias</span> <span class="token assign-left variable">sedi</span><span class="token operator">=</span><span class="token string">&#39;sed -i &quot;&quot;&#39;</span>
  <span class="token keyword">else</span>
    <span class="token builtin class-name">alias</span> <span class="token assign-left variable">sedi</span><span class="token operator">=</span><span class="token string">&#39;sed -i&#39;</span>
  <span class="token keyword">fi</span>
  <span class="token function">sed</span> - i <span class="token string">&quot;s/VERSION=.*/VERSION=<span class="token variable">\${Version}</span>/g&quot;</span> /opt/jumpserver-installer-<span class="token variable">\${Version}</span>/static.env
  ./jmsctl.sh <span class="token function">install</span>
  ./jmsctl.sh start
<span class="token punctuation">}</span>


如果因为网络问题可以多跑几次
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ./jumper_bin_deploy.sh</span>
download <span class="token function">install</span> script to /opt/jumpserver-installer-v2.21.0 <span class="token punctuation">(</span>开始下载安装脚本到 /opt/jumpserver-installer-v2.21.0<span class="token punctuation">)</span>
sed: <span class="token parameter variable">-e</span> expression <span class="token comment">#1, char 1: unknown command: \`-&#39;</span>


       ██╗██╗   ██╗███╗   ███╗██████╗ ███████╗███████╗██████╗ ██╗   ██╗███████╗██████╗
       ██║██║   ██║████╗ ████║██╔══██╗██╔════╝██╔════╝██╔══██╗██║   ██║██╔════╝██╔══██╗
       ██║██║   ██║██╔████╔██║██████╔╝███████╗█████╗  ██████╔╝██║   ██║█████╗  ██████╔╝
  ██   ██║██║   ██║██║╚██╔╝██║██╔═══╝ ╚════██║██╔══╝  ██╔══██╗╚██╗ ██╔╝██╔══╝  ██╔══██╗
  ╚█████╔╝╚██████╔╝██║ ╚═╝ ██║██║     ███████║███████╗██║  ██║ ╚████╔╝ ███████╗██║  ██║
   ╚════╝  ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚══════╝╚══════╝╚═╝  ╚═╝  ╚═══╝  ╚══════╝╚═╝  ╚═╝

                                                                   Version:  v2.21.0

<span class="token number">1</span>. Check Configuration File
Path to Configuration file: /opt/jumpserver/config
/opt/jumpserver/config/config.txt  <span class="token punctuation">[</span> √ <span class="token punctuation">]</span>
/opt/jumpserver/config/core/config.yml  <span class="token punctuation">[</span> √ <span class="token punctuation">]</span>
/opt/jumpserver/config/koko/config.yml  <span class="token punctuation">[</span> √ <span class="token punctuation">]</span>
/opt/jumpserver/config/mariadb/mariadb.cnf  <span class="token punctuation">[</span> √ <span class="token punctuation">]</span>
/opt/jumpserver/config/mysql/my.cnf  <span class="token punctuation">[</span> √ <span class="token punctuation">]</span>
/opt/jumpserver/config/nginx/lb_http_server.conf  <span class="token punctuation">[</span> √ <span class="token punctuation">]</span>
/opt/jumpserver/config/redis/redis.conf  <span class="token punctuation">[</span> √ <span class="token punctuation">]</span>
/opt/jumpserver/config/nginx/cert/server.crt   <span class="token punctuation">[</span> √ <span class="token punctuation">]</span>
/opt/jumpserver/config/nginx/cert/server.key   <span class="token punctuation">[</span> √ <span class="token punctuation">]</span>
complete

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Install and Configure Docker
<span class="token number">1</span>. Install Docker
complete

<span class="token number">2</span>. Configure Docker
Do you want to support IPv6? <span class="token punctuation">(</span>y/n<span class="token punctuation">)</span>  <span class="token punctuation">(</span>default n<span class="token punctuation">)</span>:
complete

<span class="token number">3</span>. Start Docker
complete

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Loading Docker Image
<span class="token punctuation">[</span>jumpserver/redis:6-alpine<span class="token punctuation">]</span>
<span class="token number">6</span>-alpine: Pulling from jumpserver/redis
Digest: sha256:8300b885570faad626e569e7b8cfef3407c87050d705ff26e243200cb3f84da8
Status: Image is up to <span class="token function">date</span> <span class="token keyword">for</span> jumpserver/redis:6-alpine
docker.io/jumpserver/redis:6-alpine

<span class="token punctuation">[</span>jumpserver/mysql:5<span class="token punctuation">]</span>
<span class="token number">5</span>: Pulling from jumpserver/mysql
Digest: sha256:b3b2703de646600b008cbb2de36b70b21e51e7e93a7fca450d2b08151658b2dd
Status: Image is up to <span class="token function">date</span> <span class="token keyword">for</span> jumpserver/mysql:5
docker.io/jumpserver/mysql:5

<span class="token punctuation">[</span>jumpserver/web:v2.21.0<span class="token punctuation">]</span>
v2.21.0: Pulling from jumpserver/web
Digest: sha256:1fdbb613c610b1a9131d586716a98d8655fe7022b2ef9376aca35601b3f7a697
Status: Image is up to <span class="token function">date</span> <span class="token keyword">for</span> jumpserver/web:v2.21.0
docker.io/jumpserver/web:v2.21.0

<span class="token punctuation">[</span>jumpserver/core:v2.21.0<span class="token punctuation">]</span>
v2.21.0: Pulling from jumpserver/core
Digest: sha256:9d71ab8155c80f30af2c29ed4c93b738a2f05589259e5f3f06a111aaae8f44b8
Status: Image is up to <span class="token function">date</span> <span class="token keyword">for</span> jumpserver/core:v2.21.0
docker.io/jumpserver/core:v2.21.0

<span class="token punctuation">[</span>jumpserver/koko:v2.21.0<span class="token punctuation">]</span>
v2.21.0: Pulling from jumpserver/koko
a2abf6c4d29d: Already exists
2c1a7e91d4e4: Pull complete
96de146d0b8c: Pull complete
b4f8dcc8c180: Pull complete
d04025369df5: Pull complete
ff7eca95c753: Pull complete
9ed1a3e05bfa: Pull complete
76f894474555: Pull complete
f55ed9d8f2da: Pull complete
6754e6167f39: Pull complete
187761dc098e: Pull complete
3bc030919db1: Pull complete
Digest: sha256:32636524d6395ef645dc931cebd83f1617417786f32ef7537d07d14920ce7454
Status: Downloaded newer image <span class="token keyword">for</span> jumpserver/koko:v2.21.0
docker.io/jumpserver/koko:v2.21.0

<span class="token punctuation">[</span>jumpserver/lion:v2.21.0<span class="token punctuation">]</span>
v2.21.0: Pulling from jumpserver/lion
72a69066d2fe: Pull complete
01971ece8edb: Pull complete
00efad7f1f86: Pull complete
ac262804a75a: Pull complete
0688de3fd063: Pull complete
2e94ff443643: Pull complete
d4b1196ea6e9: Pull complete
f7b6cdb41d27: Pull complete
15b59ceecb8f: Pull complete
a1a72a5d006a: Pull complete
104f6af46917: Pull complete
734049daf1ee: Pull complete
872a952e8fc8: Pull complete
54365e38ac80: Pull complete
462e43406301: Pull complete
Digest: sha256:0c0c4ebacf2641843bebd34493d0b53813e51c5d6bbeda2fc2d2c3771739e8d4
Status: Downloaded newer image <span class="token keyword">for</span> jumpserver/lion:v2.21.0
docker.io/jumpserver/lion:v2.21.0

<span class="token punctuation">[</span>jumpserver/magnus:v2.21.0<span class="token punctuation">]</span>
v2.21.0: Pulling from jumpserver/magnus
a2abf6c4d29d: Already exists
dd890438b467: Pull complete
7089ae322f82: Pull complete
870d44bc43dd: Pull complete
500ad50c6bd6: Pull complete
f7a09e01efd6: Pull complete
Digest: sha256:edee98923b5fc3081aa49f66ce045c087ed6467764b88ba2478d5fe471c92bba
Status: Downloaded newer image <span class="token keyword">for</span> jumpserver/magnus:v2.21.0
docker.io/jumpserver/magnus:v2.21.0

complete

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Install and Configure JumpServer
<span class="token number">1</span>. Configure Private Key
SECRETE_KEY:     OWIxMjRkNTYtY2I1NC0zNDhkLTlmMDYtYWIxODViOTE5MGVk
BOOTSTRAP_TOKEN: OWIxMjRkNTYtY2I1NC0zNDhk
complete

<span class="token number">2</span>. Configure Persistent Directory
Do you need custom persistent store, will use the default directory /opt/jumpserver? <span class="token punctuation">(</span>y/n<span class="token punctuation">)</span>  <span class="token punctuation">(</span>default n<span class="token punctuation">)</span>: y

To modify the persistent directory such as logs video, you can <span class="token keyword">select</span> your largest disk and create a directory <span class="token keyword">in</span> it, such as /data/jumpserver
Note: you can not change it after installation, otherwise the database may be lost

Filesystem           Size  Used Avail Use% Mounted on

Persistent storage directory <span class="token punctuation">(</span>default /opt/jumpserver<span class="token punctuation">)</span>:
complete

<span class="token number">3</span>. Configure MySQL
Do you want to use external MySQL? <span class="token punctuation">(</span>y/n<span class="token punctuation">)</span>  <span class="token punctuation">(</span>default n<span class="token punctuation">)</span>:
complete

<span class="token number">4</span>. Configure Redis
Do you want to use external Redis? <span class="token punctuation">(</span>y/n<span class="token punctuation">)</span>  <span class="token punctuation">(</span>default n<span class="token punctuation">)</span>:
complete

<span class="token number">5</span>. Configure External Port
Do you need to customize the JumpServer external port? <span class="token punctuation">(</span>y/n<span class="token punctuation">)</span>  <span class="token punctuation">(</span>default n<span class="token punctuation">)</span>:
complete

<span class="token number">6</span>. Init JumpServer Database
Creating network <span class="token string">&quot;jms_net&quot;</span> with driver <span class="token string">&quot;bridge&quot;</span>
Creating jms_mysql <span class="token punctuation">..</span>. <span class="token keyword">done</span>
Creating jms_redis <span class="token punctuation">..</span>. <span class="token keyword">done</span>
Creating jms_core  <span class="token punctuation">..</span>. <span class="token keyword">done</span>
<span class="token number">2022</span>-04-23 <span class="token number">13</span>:13:51 Collect static files
<span class="token number">2022</span>-04-23 <span class="token number">13</span>:13:51 Collect static files <span class="token keyword">done</span>
<span class="token number">2022</span>-04-23 <span class="token number">13</span>:13:51 Check database structure change <span class="token punctuation">..</span>.
<span class="token number">2022</span>-04-23 <span class="token number">13</span>:13:51 Migrate model change to database <span class="token punctuation">..</span>.
Operations to perform:
  Apply all migrations: acls, admin, applications, assets, audits, auth, authentication, captcha, common, contenttypes, django_cas_ng, django_celery_beat, jms_oidc_rp, notifications, ops, orgs, perms, rbac, sessions, settings, terminal, tickets, <span class="token function">users</span>
Running migrations:
  Applying contenttypes.0001_initial<span class="token punctuation">..</span>. OK
  Applying contenttypes.0002_remove_content_type_name<span class="token punctuation">..</span>. OK
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
Fill ticket serial number <span class="token punctuation">..</span>. <span class="token number">0</span> OK
  Applying tickets.0014_auto_20220217_2135<span class="token punctuation">..</span>. OK
  Applying tickets.0015_superticket<span class="token punctuation">..</span>. OK
  Applying users.0037_user_secret_key<span class="token punctuation">..</span>. OK
  Applying users.0038_auto_20211209_1140<span class="token punctuation">..</span>. OK
  Applying users.0039_auto_20211229_1852<span class="token punctuation">..</span>. OK
After migration, update <span class="token builtin class-name">builtin</span> role permissions
complete

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> The Installation is Complete
<span class="token number">1</span>. You can use the following <span class="token builtin class-name">command</span> to start, and <span class="token keyword">then</span> visit
<span class="token builtin class-name">cd</span> /opt/jumpserver-installer-v2.21.0
./jmsctl.sh start

<span class="token number">2</span>. Other management commands
./jmsctl.sh stop
./jmsctl.sh restart
./jmsctl.sh backup
./jmsctl.sh upgrade
For <span class="token function">more</span> commands, you can enter ./jmsctl.sh <span class="token parameter variable">--help</span> to understand

<span class="token number">3</span>. Web access
http://10.4.7.129:80
Default username: admin  Default password: admin
 
<span class="token number">4</span>. SSH/SFTP access
<span class="token function">ssh</span> <span class="token parameter variable">-p2222</span> admin@10.4.7.129
<span class="token function">sftp</span> <span class="token parameter variable">-P2222</span> admin@10.4.7.129

<span class="token number">5</span>. More information
Official Website: https://www.jumpserver.org/
Documentation: https://docs.jumpserver.org/


jms_redis is up-to-date
jms_mysql is up-to-date
Creating jms_core <span class="token punctuation">..</span>. <span class="token keyword">done</span>
Creating jms_lion   <span class="token punctuation">..</span>. <span class="token keyword">done</span>
Creating jms_celery <span class="token punctuation">..</span>. <span class="token keyword">done</span>
Creating jms_magnus <span class="token punctuation">..</span>. <span class="token keyword">done</span>
Creating jms_koko   <span class="token punctuation">..</span>. <span class="token keyword">done</span>
Creating jms_web    <span class="token punctuation">..</span>. <span class="token keyword">done</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE                       COMMAND                  CREATED              STATUS                            PORTS                                                                              NAMES
ae1497b2801d   jumpserver/web:v2.21.0      <span class="token string">&quot;/docker-entrypoint.…&quot;</span>   <span class="token number">6</span> seconds ago        Up <span class="token number">4</span> seconds <span class="token punctuation">(</span>health: starting<span class="token punctuation">)</span>   <span class="token number">0.0</span>.0.0:80-<span class="token operator">&gt;</span><span class="token number">80</span>/tcp, :::80-<span class="token operator">&gt;</span><span class="token number">80</span>/tcp                                                  jms_web
86e2da92ec2d   jumpserver/magnus:v2.21.0   <span class="token string">&quot;./entrypoint.sh&quot;</span>        <span class="token number">6</span> seconds ago        Up <span class="token number">4</span> seconds <span class="token punctuation">(</span>health: starting<span class="token punctuation">)</span>   <span class="token number">0.0</span>.0.0:33060-33061-<span class="token operator">&gt;</span><span class="token number">33060</span>-33061/tcp, :::33060-33061-<span class="token operator">&gt;</span><span class="token number">33060</span>-33061/tcp, <span class="token number">54320</span>/tcp   jms_magnus
4ae17327680d   jumpserver/koko:v2.21.0     <span class="token string">&quot;./entrypoint.sh&quot;</span>        <span class="token number">6</span> seconds ago        Up <span class="token number">4</span> seconds <span class="token punctuation">(</span>health: starting<span class="token punctuation">)</span>   <span class="token number">0.0</span>.0.0:2222-<span class="token operator">&gt;</span><span class="token number">2222</span>/tcp, :::2222-<span class="token operator">&gt;</span><span class="token number">2222</span>/tcp, <span class="token number">5000</span>/tcp                                jms_koko
c296dca6f372   jumpserver/lion:v2.21.0     <span class="token string">&quot;./entrypoint.sh&quot;</span>        <span class="token number">6</span> seconds ago        Up <span class="token number">4</span> seconds <span class="token punctuation">(</span>health: starting<span class="token punctuation">)</span>   <span class="token number">4822</span>/tcp                                                                           jms_lion
ca4b03a976bd   jumpserver/core:v2.21.0     <span class="token string">&quot;./entrypoint.sh sta…&quot;</span>   <span class="token number">6</span> seconds ago        Up <span class="token number">4</span> seconds <span class="token punctuation">(</span>health: starting<span class="token punctuation">)</span>   <span class="token number">8070</span>/tcp, <span class="token number">8080</span>/tcp                                                                 jms_celery
fb41c4e52bef   jumpserver/core:v2.21.0     <span class="token string">&quot;./entrypoint.sh sta…&quot;</span>   <span class="token number">18</span> seconds ago       Up <span class="token number">17</span> seconds <span class="token punctuation">(</span>healthy<span class="token punctuation">)</span>           <span class="token number">8070</span>/tcp, <span class="token number">8080</span>/tcp                                                                 jms_core
ab2adfdfd389   jumpserver/redis:6-alpine   <span class="token string">&quot;docker-entrypoint.s…&quot;</span>   About a minute ago   Up About a minute <span class="token punctuation">(</span>healthy<span class="token punctuation">)</span>       <span class="token number">6379</span>/tcp                                                                           jms_redis
c622150334e4   jumpserver/mysql:5          <span class="token string">&quot;docker-entrypoint.s…&quot;</span>   About a minute ago   Up About a minute <span class="token punctuation">(</span>healthy<span class="token punctuation">)</span>       <span class="token number">3306</span>/tcp, <span class="token number">33060</span>/tcp                                                                jms_mysql
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker ps  -a</span>
CONTAINER ID   IMAGE                       COMMAND                  CREATED              STATUS                            PORTS                                                                              NAMES
ae1497b2801d   jumpserver/web:v2.21.0      <span class="token string">&quot;/docker-entrypoint.…&quot;</span>   <span class="token number">8</span> seconds ago        Up <span class="token number">5</span> seconds <span class="token punctuation">(</span>health: starting<span class="token punctuation">)</span>   <span class="token number">0.0</span>.0.0:80-<span class="token operator">&gt;</span><span class="token number">80</span>/tcp, :::80-<span class="token operator">&gt;</span><span class="token number">80</span>/tcp                                                  jms_web
86e2da92ec2d   jumpserver/magnus:v2.21.0   <span class="token string">&quot;./entrypoint.sh&quot;</span>        <span class="token number">8</span> seconds ago        Up <span class="token number">5</span> seconds <span class="token punctuation">(</span>health: starting<span class="token punctuation">)</span>   <span class="token number">0.0</span>.0.0:33060-33061-<span class="token operator">&gt;</span><span class="token number">33060</span>-33061/tcp, :::33060-33061-<span class="token operator">&gt;</span><span class="token number">33060</span>-33061/tcp, <span class="token number">54320</span>/tcp   jms_magnus
4ae17327680d   jumpserver/koko:v2.21.0     <span class="token string">&quot;./entrypoint.sh&quot;</span>        <span class="token number">8</span> seconds ago        Up <span class="token number">6</span> seconds <span class="token punctuation">(</span>health: starting<span class="token punctuation">)</span>   <span class="token number">0.0</span>.0.0:2222-<span class="token operator">&gt;</span><span class="token number">2222</span>/tcp, :::2222-<span class="token operator">&gt;</span><span class="token number">2222</span>/tcp, <span class="token number">5000</span>/tcp                                jms_koko
c296dca6f372   jumpserver/lion:v2.21.0     <span class="token string">&quot;./entrypoint.sh&quot;</span>        <span class="token number">8</span> seconds ago        Up <span class="token number">6</span> seconds <span class="token punctuation">(</span>health: starting<span class="token punctuation">)</span>   <span class="token number">4822</span>/tcp                                                                           jms_lion
ca4b03a976bd   jumpserver/core:v2.21.0     <span class="token string">&quot;./entrypoint.sh sta…&quot;</span>   <span class="token number">8</span> seconds ago        Up <span class="token number">6</span> seconds <span class="token punctuation">(</span>health: starting<span class="token punctuation">)</span>   <span class="token number">8070</span>/tcp, <span class="token number">8080</span>/tcp                                                                 jms_celery
fb41c4e52bef   jumpserver/core:v2.21.0     <span class="token string">&quot;./entrypoint.sh sta…&quot;</span>   <span class="token number">20</span> seconds ago       Up <span class="token number">19</span> seconds <span class="token punctuation">(</span>healthy<span class="token punctuation">)</span>           <span class="token number">8070</span>/tcp, <span class="token number">8080</span>/tcp                                                                 jms_core
ab2adfdfd389   jumpserver/redis:6-alpine   <span class="token string">&quot;docker-entrypoint.s…&quot;</span>   About a minute ago   Up About a minute <span class="token punctuation">(</span>healthy<span class="token punctuation">)</span>       <span class="token number">6379</span>/tcp                                                                           jms_redis
c622150334e4   jumpserver/mysql:5          <span class="token string">&quot;docker-entrypoint.s…&quot;</span>   About a minute ago   Up About a minute <span class="token punctuation">(</span>healthy<span class="token punctuation">)</span>       <span class="token number">3306</span>/tcp, <span class="token number">33060</span>/tcp                                                                jms_mysql
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment">#</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment">#</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ls</span>
anaconda-ks.cfg  jumper_bin_deploy.sh


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),i=[l];function p(o,c){return s(),a("div",null,i)}const d=n(t,[["render",p],["__file","JumperServer的Docker容器部署.html.vue"]]),m=JSON.parse(`{"path":"/note-book/DistributedSystem/JumperServer/JumperServer%E7%9A%84Docker%E5%AE%B9%E5%99%A8%E9%83%A8%E7%BD%B2.html","title":"JumperServer的Docker容器部署","lang":"zh-CN","frontmatter":{"description":"JumperServer的Docker容器部署 环境展示和配置如下 上传脚本 脚本实例 JumperServer\\\\others\\\\jumper_bin_deploy.sh 脚本运行过程 注意第23行，出现错误，这个是因为官方脚本不对，需要修改sed -i","head":[["meta",{"property":"og:url","content":"https://paper-dragon.github.io/note-book/DistributedSystem/JumperServer/JumperServer%E7%9A%84Docker%E5%AE%B9%E5%99%A8%E9%83%A8%E7%BD%B2.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"JumperServer的Docker容器部署"}],["meta",{"property":"og:description","content":"JumperServer的Docker容器部署 环境展示和配置如下 上传脚本 脚本实例 JumperServer\\\\others\\\\jumper_bin_deploy.sh 脚本运行过程 注意第23行，出现错误，这个是因为官方脚本不对，需要修改sed -i"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-19T09:11:46.000Z"}],["meta",{"property":"article:author","content":"PaperDragon"}],["meta",{"property":"article:modified_time","content":"2024-03-19T09:11:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JumperServer的Docker容器部署\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-19T09:11:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"环境展示和配置如下","slug":"环境展示和配置如下","link":"#环境展示和配置如下","children":[]},{"level":2,"title":"上传脚本","slug":"上传脚本","link":"#上传脚本","children":[{"level":3,"title":"脚本实例","slug":"脚本实例","link":"#脚本实例","children":[]},{"level":3,"title":"脚本运行过程","slug":"脚本运行过程","link":"#脚本运行过程","children":[]}]}],"git":{"createdTime":1710839506000,"updatedTime":1710839506000,"contributors":[{"name":"PaperDragon-SH","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":6.08,"words":1824},"filePathRelative":"note-book/DistributedSystem/JumperServer/JumperServer的Docker容器部署.md","localizedDate":"2024年3月19日","excerpt":"\\n<h2>环境展示和配置如下</h2>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token punctuation\\">[</span>root@localhost ~<span class=\\"token punctuation\\">]</span><span class=\\"token comment\\"># cat /etc/redhat-release</span>\\nRocky Linux release <span class=\\"token number\\">8.5</span> <span class=\\"token punctuation\\">(</span>Green Obsidian<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">[</span>root@localhost ~<span class=\\"token punctuation\\">]</span><span class=\\"token comment\\"># sed -i 's/SELINUX=.*$/SELINUX=disabled/g' /etc/selinux/config</span>\\n<span class=\\"token punctuation\\">[</span>root@localhost ~<span class=\\"token punctuation\\">]</span><span class=\\"token comment\\"># grep SELINUX /etc/selinux/config</span>\\n<span class=\\"token comment\\"># SELINUX=disabled</span>\\n<span class=\\"token assign-left variable\\">SELINUX</span><span class=\\"token operator\\">=</span>disabled\\n<span class=\\"token comment\\"># SELINUXTYPE= can take one of these three values:</span>\\n<span class=\\"token assign-left variable\\">SELINUXTYPE</span><span class=\\"token operator\\">=</span>targeted\\n<span class=\\"token punctuation\\">[</span>root@localhost ~<span class=\\"token punctuation\\">]</span><span class=\\"token comment\\"># setenforce 0</span>\\n<span class=\\"token punctuation\\">[</span>root@localhost ~<span class=\\"token punctuation\\">]</span><span class=\\"token comment\\"># getenforce</span>\\nPermissive\\n<span class=\\"token punctuation\\">[</span>root@localhost ~<span class=\\"token punctuation\\">]</span><span class=\\"token comment\\"># systemctl status firewalld</span>\\n● firewalld.service - firewalld - dynamic firewall daemon\\n   Loaded: loaded <span class=\\"token punctuation\\">(</span>/usr/lib/systemd/system/firewalld.service<span class=\\"token punctuation\\">;</span> enabled<span class=\\"token punctuation\\">;</span> vendor preset: enabled<span class=\\"token punctuation\\">)</span>\\n   Active: active <span class=\\"token punctuation\\">(</span>running<span class=\\"token punctuation\\">)</span> since Sat <span class=\\"token number\\">2022</span>-04-23 <span class=\\"token number\\">12</span>:21:01 CST<span class=\\"token punctuation\\">;</span> 3min 39s ago\\n     Docs: man:firewalld<span class=\\"token punctuation\\">(</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span>\\n Main PID: <span class=\\"token number\\">1011</span> <span class=\\"token punctuation\\">(</span>firewalld<span class=\\"token punctuation\\">)</span>\\n    Tasks: <span class=\\"token number\\">2</span> <span class=\\"token punctuation\\">(</span>limit: <span class=\\"token number\\">24736</span><span class=\\"token punctuation\\">)</span>\\n   Memory: <span class=\\"token number\\">30</span>.5M\\n   CGroup: /system.slice/firewalld.service\\n           └─1011 /usr/libexec/platform-python <span class=\\"token parameter variable\\">-s</span> /usr/sbin/firewalld <span class=\\"token parameter variable\\">--nofork</span> <span class=\\"token parameter variable\\">--nopid</span>\\n\\nApr <span class=\\"token number\\">23</span> <span class=\\"token number\\">12</span>:21:01 localhost.localdomain systemd<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">]</span>: Starting firewalld - dynamic firewall daemon<span class=\\"token punctuation\\">..</span>.\\nApr <span class=\\"token number\\">23</span> <span class=\\"token number\\">12</span>:21:01 localhost.localdomain systemd<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">]</span>: Started firewalld - dynamic firewall daemon.\\nApr <span class=\\"token number\\">23</span> <span class=\\"token number\\">12</span>:21:01 localhost.localdomain firewalld<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1011</span><span class=\\"token punctuation\\">]</span>: WARNING: AllowZoneDrifting is enabled. This is considered an insecure configuration option. It will be removed <span class=\\"token keyword\\">in</span> a future release. Please consider di<span class=\\"token operator\\">&gt;</span>\\n<span class=\\"token punctuation\\">[</span>root@localhost ~<span class=\\"token punctuation\\">]</span><span class=\\"token comment\\">#</span>\\n<span class=\\"token punctuation\\">[</span>root@localhost ~<span class=\\"token punctuation\\">]</span><span class=\\"token comment\\">#</span>\\n<span class=\\"token punctuation\\">[</span>root@localhost ~<span class=\\"token punctuation\\">]</span><span class=\\"token comment\\"># firewall-cmd --list-all</span>\\npublic <span class=\\"token punctuation\\">(</span>active<span class=\\"token punctuation\\">)</span>\\n  target: default\\n  icmp-block-inversion: no\\n  interfaces: ens160\\n  sources:\\n  services: cockpit dhcpv6-client <span class=\\"token function\\">ssh</span>\\n  ports:\\n  protocols:\\n  forward: no\\n  masquerade: no\\n  forward-ports:\\n  source-ports:\\n  icmp-blocks:\\n  rich rules:\\n<span class=\\"token punctuation\\">[</span>root@localhost ~<span class=\\"token punctuation\\">]</span><span class=\\"token comment\\">#</span>\\n\\n</code></pre></div>","autoDesc":true}`);export{d as comp,m as data};
