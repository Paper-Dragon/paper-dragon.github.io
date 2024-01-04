import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-7qq81faT.js";const t={},o=e(`<h1 id="纯手工制作容器【docker原理】" tabindex="-1"><a class="header-anchor" href="#纯手工制作容器【docker原理】" aria-hidden="true">#</a> 纯手工制作容器【Docker原理】</h1><h2 id="前提" tabindex="-1"><a class="header-anchor" href="#前提" aria-hidden="true">#</a> 前提</h2><div class="language-bsah line-numbers-mode" data-ext="bsah"><pre class="language-bsah"><code># 删除share选项防止mnt共享
[root@out-container ~]# grep root /proc/self/mountinfo
40 0 253:0 / / rw,relatime shared:1 - xfs /dev/mapper/centos_monther-root rw,seclabel,attr2,inode64,noquota
[root@out-container ~]# mount --make-rprivate /
[root@out-container ~]# grep root /proc/self/mountinfo
40 0 253:0 / / rw,relatime - xfs /dev/mapper/centos_monther-root rw,seclabel,attr2,inode64,noquota
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="准备rootfs文件系统" tabindex="-1"><a class="header-anchor" href="#准备rootfs文件系统" aria-hidden="true">#</a> 准备rootfs文件系统</h2><blockquote><p>因为手工制作优化过程繁琐，请看我的另一篇文档手工制作</p><p>本文章使用 Docker 镜像解压出来作为rootfs</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">export</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> create centos:8.3.2011<span class="token variable">)</span></span> <span class="token operator">|</span> <span class="token function">tar</span> <span class="token parameter variable">-C</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-xvf</span> -


<span class="token punctuation">[</span>root@out-container rootfs<span class="token punctuation">]</span><span class="token comment"># pwd</span>
/root/mkRootfs/rootfs
<span class="token punctuation">[</span>root@out-container rootfs<span class="token punctuation">]</span><span class="token comment"># ls</span>
anaconda-post.log  bin  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="准备一个namespace" tabindex="-1"><a class="header-anchor" href="#准备一个namespace" aria-hidden="true">#</a> 准备一个NameSpace</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@out-container mkRootfs<span class="token punctuation">]</span><span class="token comment"># echo $$</span>
<span class="token number">1593</span>
<span class="token punctuation">[</span>root@out-container mkRootfs<span class="token punctuation">]</span><span class="token comment"># unshare --mount --uts --ipc --net --pid --fork /bin/bash</span>
<span class="token punctuation">[</span>root@out-container mkRootfs<span class="token punctuation">]</span><span class="token comment"># echo $$</span>
<span class="token number">1</span>
<span class="token punctuation">[</span>root@out-container mkRootfs<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="user隔离" tabindex="-1"><a class="header-anchor" href="#user隔离" aria-hidden="true">#</a> USER隔离</h3><div class="language-bsah line-numbers-mode" data-ext="bsah"><pre class="language-bsah"><code># 默认已经隔离
[root@out-container ~]# id
uid=0(root) gid=0(root) groups=0(root) context=unconfined_u:unconfined_r:unconfined_t:s0-s0:c0.c1023
[root@out-container ~]#
[root@out-container ~]#
[root@out-container ~]# cat /etc/passwd
root:x:0:0:root:/root:/bin/bash
bin:x:1:1:bin:/bin:/sbin/nologin
daemon:x:2:2:daemon:/sbin:/sbin/nologin
adm:x:3:4:adm:/var/adm:/sbin/nologin
lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin
sync:x:5:0:sync:/sbin:/bin/sync
shutdown:x:6:0:shutdown:/sbin:/sbin/shutdown
halt:x:7:0:halt:/sbin:/sbin/halt
mail:x:8:12:mail:/var/spool/mail:/sbin/nologin
operator:x:11:0:operator:/root:/sbin/nologin
games:x:12:100:games:/usr/games:/sbin/nologin
ftp:x:14:50:FTP User:/var/ftp:/sbin/nologin
nobody:x:99:99:Nobody:/:/sbin/nologin
systemd-network:x:192:192:systemd Network Management:/:/sbin/nologin
dbus:x:81:81:System message bus:/:/sbin/nologin
polkitd:x:999:998:User for polkitd:/:/sbin/nologin
sshd:x:74:74:Privilege-separated SSH:/var/empty/sshd:/sbin/nologin
postfix:x:89:89::/var/spool/postfix:/sbin/nologin
chrony:x:998:996::/var/lib/chrony:/sbin/nologin
[root@out-container ~]#


[root@in-container /]# id
uid=0(root) gid=0(root) groups=0(root)
[root@in-container /]# cat /etc/passwd
root:x:0:0:root:/root:/bin/bash
bin:x:1:1:bin:/bin:/sbin/nologin
daemon:x:2:2:daemon:/sbin:/sbin/nologin
adm:x:3:4:adm:/var/adm:/sbin/nologin
lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin
sync:x:5:0:sync:/sbin:/bin/sync
shutdown:x:6:0:shutdown:/sbin:/sbin/shutdown
halt:x:7:0:halt:/sbin:/sbin/halt
mail:x:8:12:mail:/var/spool/mail:/sbin/nologin
operator:x:11:0:operator:/root:/sbin/nologin
games:x:12:100:games:/usr/games:/sbin/nologin
ftp:x:14:50:FTP User:/var/ftp:/sbin/nologin
nobody:x:65534:65534:Kernel Overflow User:/:/sbin/nologin
dbus:x:81:81:System message bus:/:/sbin/nologin
systemd-coredump:x:999:997:systemd Core Dumper:/:/sbin/nologin
systemd-resolve:x:193:193:systemd Resolver:/:/sbin/nologin

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="uts隔离" tabindex="-1"><a class="header-anchor" href="#uts隔离" aria-hidden="true">#</a> UTS隔离</h3><p>实验过程</p><div class="language-bsah line-numbers-mode" data-ext="bsah"><pre class="language-bsah"><code># 标记宿主机主机名
[root@monther mkRootfs]# hostnamectl set-hostname out-container
[root@monther mkRootfs]# exec bash
[root@out-container mkRootfs]#

# 标记容器主机名
[root@out-container mkRootfs]# hostname in-container &amp;&amp; exec bash
[root@in-container rootfs]#
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试过程</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@out-container ~<span class="token punctuation">]</span><span class="token comment"># hostname</span>
out-container
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mnt-ipc-pid隔离" tabindex="-1"><a class="header-anchor" href="#mnt-ipc-pid隔离" aria-hidden="true">#</a> MNT/IPC/PID隔离</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token punctuation">[</span>root@in-container mkRootfs<span class="token punctuation">]</span><span class="token comment"># mount -t proc none /proc</span>
<span class="token punctuation">[</span>root@in-container mkRootfs<span class="token punctuation">]</span><span class="token comment"># ps -ef</span>
<span class="token environment constant">UID</span>         PID   <span class="token environment constant">PPID</span>  C STIME TTY          TIME CMD
root          <span class="token number">1</span>      <span class="token number">0</span>  <span class="token number">0</span> 09:55 pts/0    00:00:00 <span class="token function">bash</span>
root         <span class="token number">21</span>      <span class="token number">1</span>  <span class="token number">0</span> <span class="token number">10</span>:10 pts/0    00:00:00 <span class="token function">ps</span> <span class="token parameter variable">-ef</span>

<span class="token punctuation">[</span>root@in-container rootfs<span class="token punctuation">]</span><span class="token comment"># mount --bind /root/mkRootfs/rootfs/ /root/mkRootfs/rootfs/</span>
<span class="token punctuation">[</span>root@in-container rootfs<span class="token punctuation">]</span><span class="token comment"># cd /root/mkRootfs/rootfs/</span>
<span class="token punctuation">[</span>root@in-container rootfs<span class="token punctuation">]</span><span class="token comment"># mkdir oldroot</span>
<span class="token punctuation">[</span>root@in-container rootfs<span class="token punctuation">]</span><span class="token comment"># pivot_root . oldroot/</span>
<span class="token punctuation">[</span>root@in-container rootfs<span class="token punctuation">]</span><span class="token comment"># cd /</span>
<span class="token punctuation">[</span>root@in-container /<span class="token punctuation">]</span><span class="token comment"># export PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin</span>
<span class="token punctuation">[</span>root@in-container /<span class="token punctuation">]</span><span class="token comment"># mount -t proc none /proc</span>
<span class="token punctuation">[</span>root@in-container /<span class="token punctuation">]</span><span class="token comment"># ps -ef</span>
<span class="token environment constant">UID</span>         PID   <span class="token environment constant">PPID</span>  C STIME TTY          TIME CMD
root          <span class="token number">1</span>      <span class="token number">0</span>  <span class="token number">0</span> 01:55 ?        00:00:00 <span class="token function">bash</span>
root         <span class="token number">28</span>      <span class="token number">1</span>  <span class="token number">0</span> 02:14 ?        00:00:00 <span class="token function">ps</span> <span class="token parameter variable">-ef</span>

<span class="token punctuation">[</span>root@in-container /<span class="token punctuation">]</span><span class="token comment"># umount -a</span>
umount: /: target is busy.
        <span class="token punctuation">(</span>In some cases useful info about processes that use
         the device is found by lsof<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span> or fuser<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">))</span>
umount: /oldroot/dev: target is busy.
        <span class="token punctuation">(</span>In some cases useful info about processes that use
         the device is found by lsof<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span> or fuser<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">))</span>
umount: /oldroot: target is busy.
        <span class="token punctuation">(</span>In some cases useful info about processes that use
         the device is found by lsof<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span> or fuser<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">))</span>
<span class="token punctuation">[</span>root@in-container /<span class="token punctuation">]</span><span class="token comment"># mount</span>
/dev/mapper/centos_monther-root on /oldroot <span class="token builtin class-name">type</span> xfs <span class="token punctuation">(</span>rw,relatime,seclabel,attr2,inode64,logbufs<span class="token operator">=</span><span class="token number">8</span>,logbsize<span class="token operator">=</span>32k,noquota<span class="token punctuation">)</span>
devtmpfs on /oldroot/dev <span class="token builtin class-name">type</span> devtmpfs <span class="token punctuation">(</span>rw,nosuid,seclabel,size<span class="token operator">=</span>1982216k,nr_inodes<span class="token operator">=</span><span class="token number">495554</span>,mode<span class="token operator">=</span><span class="token number">755</span><span class="token punctuation">)</span>
devpts on /oldroot/dev/pts <span class="token builtin class-name">type</span> devpts <span class="token punctuation">(</span>rw,nosuid,noexec,relatime,seclabel,gid<span class="token operator">=</span><span class="token number">5</span>,mode<span class="token operator">=</span><span class="token number">620</span>,ptmxmode<span class="token operator">=</span>000<span class="token punctuation">)</span>
proc on /oldroot/proc <span class="token builtin class-name">type</span> proc <span class="token punctuation">(</span>rw,nosuid,nodev,noexec,relatime<span class="token punctuation">)</span>
sysfs on /oldroot/sys <span class="token builtin class-name">type</span> sysfs <span class="token punctuation">(</span>rw,nosuid,nodev,noexec,relatime,seclabel<span class="token punctuation">)</span>
selinuxfs on /oldroot/sys/fs/selinux <span class="token builtin class-name">type</span> selinuxfs <span class="token punctuation">(</span>rw,relatime<span class="token punctuation">)</span>
/dev/mapper/centos_monther-root on / <span class="token builtin class-name">type</span> xfs <span class="token punctuation">(</span>rw,relatime,seclabel,attr2,inode64,logbufs<span class="token operator">=</span><span class="token number">8</span>,logbsize<span class="token operator">=</span>32k,noquota<span class="token punctuation">)</span>
none on /proc <span class="token builtin class-name">type</span> proc <span class="token punctuation">(</span>rw,relatime<span class="token punctuation">)</span>
<span class="token punctuation">[</span>root@in-container /<span class="token punctuation">]</span><span class="token comment"># df -h</span>
Filesystem                       Size  Used Avail Use% Mounted on
/dev/mapper/centos_monther-root   49G  <span class="token number">8</span>.4G   41G  <span class="token number">18</span>% /oldroot
devtmpfs                         <span class="token number">1</span>.9G     <span class="token number">0</span>  <span class="token number">1</span>.9G   <span class="token number">0</span>% /oldroot/dev
<span class="token punctuation">[</span>root@in-container /<span class="token punctuation">]</span><span class="token comment">#</span>

<span class="token punctuation">[</span>root@in-container /<span class="token punctuation">]</span><span class="token comment"># mount -t proc none /proc</span>
<span class="token punctuation">[</span>root@in-container /<span class="token punctuation">]</span><span class="token comment"># ls /proc/</span>
<span class="token number">1</span>          cgroups   devices        execdomains  iomem     keys         kpageflags  misc     pagetypeinfo  slabinfo  sysrq-trigger  <span class="token function">uptime</span>
<span class="token number">34</span>         cmdline   diskstats      fb           ioports   key-users    loadavg     modules  partitions    softirqs  sysvipc        version
acpi       consoles  dma            filesystems  irq       kmsg         locks       mounts   schedstat     <span class="token function">stat</span>      thread-self    vmallocinfo
buddyinfo  cpuinfo   driver         fs           kallsyms  kpagecgroup  mdstat      mtrr     scsi          swaps     timer_list     <span class="token function">vmstat</span>
bus        crypto    dynamic_debug  interrupts   kcore     kpagecount   meminfo     net      self          sys       <span class="token function">tty</span>            zoneinfo
<span class="token punctuation">[</span>root@in-container /<span class="token punctuation">]</span><span class="token comment"># umount -l oldroot/</span>
<span class="token punctuation">[</span>root@in-container /<span class="token punctuation">]</span><span class="token comment"># mount</span>
/dev/mapper/centos_monther-root on / <span class="token builtin class-name">type</span> xfs <span class="token punctuation">(</span>rw,relatime,seclabel,attr2,inode64,logbufs<span class="token operator">=</span><span class="token number">8</span>,logbsize<span class="token operator">=</span>32k,noquota<span class="token punctuation">)</span>
none on /proc <span class="token builtin class-name">type</span> proc <span class="token punctuation">(</span>rw,relatime<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="net隔离" tabindex="-1"><a class="header-anchor" href="#net隔离" aria-hidden="true">#</a> NET隔离</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 宿主机</span>
<span class="token punctuation">[</span>root@out-container ~<span class="token punctuation">]</span><span class="token comment"># pidof unshare</span>
<span class="token number">2390</span>
<span class="token punctuation">[</span>root@out-container ~<span class="token punctuation">]</span><span class="token comment"># CPID=2390</span>
<span class="token punctuation">[</span>root@out-container ~<span class="token punctuation">]</span><span class="token comment"># ip link add name h$CPID type veth peer name c$CPID</span>
<span class="token punctuation">[</span>root@out-container ~<span class="token punctuation">]</span><span class="token comment"># ip l</span>
<span class="token number">1</span>: lo: <span class="token operator">&lt;</span>LOOPBACK,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">65536</span> qdisc noqueue state UNKNOWN mode DEFAULT group default qlen <span class="token number">1000</span>
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
<span class="token number">2</span>: ens160: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc mq state UP mode DEFAULT group default qlen <span class="token number">1000</span>
    link/ether 00:0c:29:7c:f4:a1 brd ff:ff:ff:ff:ff:ff
<span class="token number">3</span>: docker0: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc noqueue state UP mode DEFAULT group default
    link/ether 02:42:12:70:3f:6e brd ff:ff:ff:ff:ff:ff
<span class="token number">13</span>: veth5472ca8@if12: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc noqueue master docker0 state UP mode DEFAULT group default
    link/ether ca:5b:ee:25:7e:17 brd ff:ff:ff:ff:ff:ff link-netnsid <span class="token number">0</span>
<span class="token number">14</span>: c2390@h2390: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,M-DOWN<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc noop state DOWN mode DEFAULT group default qlen <span class="token number">1000</span>
    link/ether 7a:16:72:92:97:ea brd ff:ff:ff:ff:ff:ff
<span class="token number">15</span>: h2390@c2390: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,M-DOWN<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc noop state DOWN mode DEFAULT group default qlen <span class="token number">1000</span>
    link/ether ca:c2:d1:86:8c:e1 brd ff:ff:ff:ff:ff:ff
<span class="token punctuation">[</span>root@out-container ~<span class="token punctuation">]</span><span class="token comment"># ip link set c$CPID netns $CPID</span>
<span class="token punctuation">[</span>root@out-container ~<span class="token punctuation">]</span><span class="token comment"># ip a</span>
<span class="token number">1</span>: lo: <span class="token operator">&lt;</span>LOOPBACK,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">65536</span> qdisc noqueue state UNKNOWN group default qlen <span class="token number">1000</span>
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet <span class="token number">127.0</span>.0.1/8 scope <span class="token function">host</span> lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope <span class="token function">host</span>
       valid_lft forever preferred_lft forever
<span class="token number">2</span>: ens160: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc mq state UP group default qlen <span class="token number">1000</span>
    link/ether 00:0c:29:7c:f4:a1 brd ff:ff:ff:ff:ff:ff
    inet <span class="token number">192.168</span>.23.129/24 brd <span class="token number">192.168</span>.23.255 scope global noprefixroute dynamic ens160
       valid_lft 1235sec preferred_lft 1235sec
    inet6 fe80::d72d:aac0:a50c:7cd8/64 scope <span class="token function">link</span> noprefixroute
       valid_lft forever preferred_lft forever
<span class="token number">3</span>: docker0: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc noqueue state UP group default
    link/ether 02:42:12:70:3f:6e brd ff:ff:ff:ff:ff:ff
    inet <span class="token number">172.17</span>.0.1/16 brd <span class="token number">172.17</span>.255.255 scope global docker0
       valid_lft forever preferred_lft forever
    inet6 fe80::42:12ff:fe70:3f6e/64 scope <span class="token function">link</span>
       valid_lft forever preferred_lft forever
<span class="token number">13</span>: veth5472ca8@if12: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc noqueue master docker0 state UP group default
    link/ether ca:5b:ee:25:7e:17 brd ff:ff:ff:ff:ff:ff link-netnsid <span class="token number">0</span>
    inet6 fe80::c85b:eeff:fe25:7e17/64 scope <span class="token function">link</span>
       valid_lft forever preferred_lft forever
<span class="token number">15</span>: h2390@if14: <span class="token operator">&lt;</span>BROADCAST,MULTICAST<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc noop state DOWN group default qlen <span class="token number">1000</span>
    link/ether ca:c2:d1:86:8c:e1 brd ff:ff:ff:ff:ff:ff link-netnsid <span class="token number">1</span>
<span class="token punctuation">[</span>root@out-container ~<span class="token punctuation">]</span><span class="token comment">#</span>
<span class="token punctuation">[</span>root@out-container ~<span class="token punctuation">]</span><span class="token comment">#</span>
<span class="token punctuation">[</span>root@out-container ~<span class="token punctuation">]</span><span class="token comment"># ip link set h$CPID master docker0 up</span>
<span class="token punctuation">[</span>root@out-container ~<span class="token punctuation">]</span><span class="token comment"># ip l</span>
<span class="token number">1</span>: lo: <span class="token operator">&lt;</span>LOOPBACK,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">65536</span> qdisc noqueue state UNKNOWN mode DEFAULT group default qlen <span class="token number">1000</span>
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
<span class="token number">2</span>: ens160: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc mq state UP mode DEFAULT group default qlen <span class="token number">1000</span>
    link/ether 00:0c:29:7c:f4:a1 brd ff:ff:ff:ff:ff:ff
<span class="token number">3</span>: docker0: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc noqueue state UP mode DEFAULT group default
    link/ether 02:42:12:70:3f:6e brd ff:ff:ff:ff:ff:ff
<span class="token number">13</span>: veth5472ca8@if12: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc noqueue master docker0 state UP mode DEFAULT group default
    link/ether ca:5b:ee:25:7e:17 brd ff:ff:ff:ff:ff:ff link-netnsid <span class="token number">0</span>
<span class="token number">15</span>: h2390@if14: <span class="token operator">&lt;</span>NO-CARRIER,BROADCAST,MULTICAST,UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc noqueue master docker0 state LOWERLAYERDOWN mode DEFAULT group default qlen <span class="token number">1000</span>
    link/ether ca:c2:d1:86:8c:e1 brd ff:ff:ff:ff:ff:ff link-netnsid <span class="token number">1</span>
<span class="token punctuation">[</span>root@out-container ~<span class="token punctuation">]</span><span class="token comment"># ip a</span>
<span class="token number">1</span>: lo: <span class="token operator">&lt;</span>LOOPBACK,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">65536</span> qdisc noqueue state UNKNOWN group default qlen <span class="token number">1000</span>
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet <span class="token number">127.0</span>.0.1/8 scope <span class="token function">host</span> lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope <span class="token function">host</span>
       valid_lft forever preferred_lft forever
<span class="token number">2</span>: ens160: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc mq state UP group default qlen <span class="token number">1000</span>
    link/ether 00:0c:29:7c:f4:a1 brd ff:ff:ff:ff:ff:ff
    inet <span class="token number">192.168</span>.23.129/24 brd <span class="token number">192.168</span>.23.255 scope global noprefixroute dynamic ens160
       valid_lft 1187sec preferred_lft 1187sec
    inet6 fe80::d72d:aac0:a50c:7cd8/64 scope <span class="token function">link</span> noprefixroute
       valid_lft forever preferred_lft forever
<span class="token number">3</span>: docker0: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc noqueue state UP group default
    link/ether 02:42:12:70:3f:6e brd ff:ff:ff:ff:ff:ff
    inet <span class="token number">172.17</span>.0.1/16 brd <span class="token number">172.17</span>.255.255 scope global docker0
       valid_lft forever preferred_lft forever
    inet6 fe80::42:12ff:fe70:3f6e/64 scope <span class="token function">link</span>
       valid_lft forever preferred_lft forever
<span class="token number">13</span>: veth5472ca8@if12: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc noqueue master docker0 state UP group default
    link/ether ca:5b:ee:25:7e:17 brd ff:ff:ff:ff:ff:ff link-netnsid <span class="token number">0</span>
    inet6 fe80::c85b:eeff:fe25:7e17/64 scope <span class="token function">link</span>
       valid_lft forever preferred_lft forever
<span class="token number">15</span>: h2390@if14: <span class="token operator">&lt;</span>NO-CARRIER,BROADCAST,MULTICAST,UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc noqueue master docker0 state LOWERLAYERDOWN group default qlen <span class="token number">1000</span>
    link/ether ca:c2:d1:86:8c:e1 brd ff:ff:ff:ff:ff:ff link-netnsid <span class="token number">1</span>

<span class="token comment"># 容器内</span>
<span class="token punctuation">[</span>root@in-container /<span class="token punctuation">]</span><span class="token comment"># ping 8.8.8.8</span>
connect: Network is unreachable
<span class="token punctuation">[</span>root@in-container /<span class="token punctuation">]</span><span class="token comment"># ip a</span>
<span class="token number">1</span>: lo: <span class="token operator">&lt;</span>LOOPBACK<span class="token operator">&gt;</span> mtu <span class="token number">65536</span> qdisc noop state DOWN group default qlen <span class="token number">1000</span>
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
<span class="token punctuation">[</span>root@in-container /<span class="token punctuation">]</span><span class="token comment"># ip l</span>
<span class="token number">1</span>: lo: <span class="token operator">&lt;</span>LOOPBACK<span class="token operator">&gt;</span> mtu <span class="token number">65536</span> qdisc noop state DOWN mode DEFAULT group default qlen <span class="token number">1000</span>
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
<span class="token number">14</span>: c2390@if15: <span class="token operator">&lt;</span>BROADCAST,MULTICAST<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc noop state DOWN mode DEFAULT group default qlen <span class="token number">1000</span>
    link/ether 7a:16:72:92:97:ea brd ff:ff:ff:ff:ff:ff link-netnsid <span class="token number">0</span>
<span class="token punctuation">[</span>root@in-container /<span class="token punctuation">]</span><span class="token comment"># ip link set lo up</span>
<span class="token punctuation">[</span>root@in-container /<span class="token punctuation">]</span><span class="token comment"># ip a</span>
<span class="token number">1</span>: lo: <span class="token operator">&lt;</span>LOOPBACK,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">65536</span> qdisc noqueue state UNKNOWN group default qlen <span class="token number">1000</span>
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet <span class="token number">127.0</span>.0.1/8 scope <span class="token function">host</span> lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope <span class="token function">host</span>
       valid_lft forever preferred_lft forever
<span class="token number">14</span>: c2390@if15: <span class="token operator">&lt;</span>BROADCAST,MULTICAST<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc noop state DOWN group default qlen <span class="token number">1000</span>
    link/ether 7a:16:72:92:97:ea brd ff:ff:ff:ff:ff:ff link-netnsid <span class="token number">0</span>
<span class="token punctuation">[</span>root@in-container /<span class="token punctuation">]</span><span class="token comment"># ip link set c2390@if15 name eth0 up</span>
Cannot <span class="token function">find</span> device <span class="token string">&quot;c2390@if15&quot;</span>
<span class="token punctuation">[</span>root@in-container /<span class="token punctuation">]</span><span class="token comment"># ip link set c2390 name eth0 up</span>
<span class="token punctuation">[</span>root@in-container /<span class="token punctuation">]</span><span class="token comment">#</span>
<span class="token punctuation">[</span>root@in-container /<span class="token punctuation">]</span><span class="token comment"># ip a</span>
<span class="token number">1</span>: lo: <span class="token operator">&lt;</span>LOOPBACK,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">65536</span> qdisc noqueue state UNKNOWN group default qlen <span class="token number">1000</span>
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet <span class="token number">127.0</span>.0.1/8 scope <span class="token function">host</span> lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope <span class="token function">host</span>
       valid_lft forever preferred_lft forever
<span class="token number">14</span>: eth0@if15: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc noqueue state UP group default qlen <span class="token number">1000</span>
    link/ether 7a:16:72:92:97:ea brd ff:ff:ff:ff:ff:ff link-netnsid <span class="token number">0</span>
    inet6 fe80::7816:72ff:fe92:97ea/64 scope <span class="token function">link</span>
       valid_lft forever preferred_lft forever
<span class="token punctuation">[</span>root@in-container /<span class="token punctuation">]</span><span class="token comment"># ip addr add 172.17.0.10/16 dev eth0</span>
<span class="token punctuation">[</span>root@in-container /<span class="token punctuation">]</span><span class="token comment"># ip a</span>
<span class="token number">1</span>: lo: <span class="token operator">&lt;</span>LOOPBACK,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">65536</span> qdisc noqueue state UNKNOWN group default qlen <span class="token number">1000</span>
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet <span class="token number">127.0</span>.0.1/8 scope <span class="token function">host</span> lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope <span class="token function">host</span>
       valid_lft forever preferred_lft forever
<span class="token number">14</span>: eth0@if15: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc noqueue state UP group default qlen <span class="token number">1000</span>
    link/ether 7a:16:72:92:97:ea brd ff:ff:ff:ff:ff:ff link-netnsid <span class="token number">0</span>
    inet <span class="token number">172.17</span>.0.1/16 scope global eth0
       valid_lft forever preferred_lft forever
    inet <span class="token number">172.17</span>.0.10/16 scope global secondary eth0
       valid_lft forever preferred_lft forever
    inet6 fe80::7816:72ff:fe92:97ea/64 scope <span class="token function">link</span>
       valid_lft forever preferred_lft forever

<span class="token punctuation">[</span>root@in-container /<span class="token punctuation">]</span><span class="token comment"># ip a</span>
<span class="token number">1</span>: lo: <span class="token operator">&lt;</span>LOOPBACK,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">65536</span> qdisc noqueue state UNKNOWN group default qlen <span class="token number">1000</span>
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet <span class="token number">127.0</span>.0.1/8 scope <span class="token function">host</span> lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope <span class="token function">host</span>
       valid_lft forever preferred_lft forever
<span class="token number">14</span>: eth0@if15: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc noqueue state UP group default qlen <span class="token number">1000</span>
    link/ether 7a:16:72:92:97:ea brd ff:ff:ff:ff:ff:ff link-netnsid <span class="token number">0</span>
    inet <span class="token number">172.17</span>.0.10/16 scope global eth0
       valid_lft forever preferred_lft forever
    inet6 fe80::7816:72ff:fe92:97ea/64 scope <span class="token function">link</span>
       valid_lft forever preferred_lft forever
<span class="token punctuation">[</span>root@in-container /<span class="token punctuation">]</span><span class="token comment"># ip route add default via 172.17.0.1</span>
<span class="token punctuation">[</span>root@in-container /<span class="token punctuation">]</span><span class="token comment"># ping 8.8.8.8</span>
PING <span class="token number">8.8</span>.8.8 <span class="token punctuation">(</span><span class="token number">8.8</span>.8.8<span class="token punctuation">)</span> <span class="token number">56</span><span class="token punctuation">(</span><span class="token number">84</span><span class="token punctuation">)</span> bytes of data.
<span class="token number">64</span> bytes from <span class="token number">8.8</span>.8.8: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">127</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">28.8</span> ms
<span class="token number">64</span> bytes from <span class="token number">8.8</span>.8.8: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">127</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">28.3</span> ms
^C
--- <span class="token number">8.8</span>.8.8 <span class="token function">ping</span> statistics ---
<span class="token number">2</span> packets transmitted, <span class="token number">2</span> received, <span class="token number">0</span>% packet loss, <span class="token function">time</span> 4ms
rtt min/avg/max/mdev <span class="token operator">=</span> <span class="token number">28.257</span>/28.522/28.787/0.265 ms


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="检查" tabindex="-1"><a class="header-anchor" href="#检查" aria-hidden="true">#</a> 检查</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># user</span>
<span class="token punctuation">[</span>root@in-container /<span class="token punctuation">]</span><span class="token comment"># id</span>
<span class="token assign-left variable">uid</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span> <span class="token assign-left variable">gid</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span> <span class="token assign-left variable">groups</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>

<span class="token comment"># mnt </span>
<span class="token punctuation">[</span>root@in-container /<span class="token punctuation">]</span><span class="token comment"># mount</span>
/dev/mapper/centos_monther-root on / <span class="token builtin class-name">type</span> xfs <span class="token punctuation">(</span>rw,relatime,seclabel,attr2,inode64,noquota<span class="token punctuation">)</span>
none on /proc <span class="token builtin class-name">type</span> proc <span class="token punctuation">(</span>rw,relatime<span class="token punctuation">)</span>
<span class="token punctuation">[</span>root@in-container /<span class="token punctuation">]</span><span class="token comment">#</span>
<span class="token comment"># uts</span>
<span class="token punctuation">[</span>root@in-container /<span class="token punctuation">]</span><span class="token comment"># hostname</span>
in-container
<span class="token comment"># ipc / pid</span>
<span class="token punctuation">[</span>root@in-container /<span class="token punctuation">]</span><span class="token comment"># ps -aux</span>
<span class="token environment constant">USER</span>        PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root          <span class="token number">1</span>  <span class="token number">0.0</span>  <span class="token number">0.0</span> <span class="token number">115652</span>  <span class="token number">2144</span> ?        S    02:40   <span class="token number">0</span>:00 <span class="token function">bash</span>
root         <span class="token number">68</span>  <span class="token number">0.0</span>  <span class="token number">0.0</span>  <span class="token number">47532</span>  <span class="token number">2052</span> ?        R+   02:55   <span class="token number">0</span>:00 <span class="token function">ps</span> <span class="token parameter variable">-aux</span>
<span class="token comment"># net</span>
<span class="token punctuation">[</span>root@in-container /<span class="token punctuation">]</span><span class="token comment"># ip a</span>
<span class="token number">1</span>: lo: <span class="token operator">&lt;</span>LOOPBACK,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">65536</span> qdisc noqueue state UNKNOWN group default qlen <span class="token number">1000</span>
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet <span class="token number">127.0</span>.0.1/8 scope <span class="token function">host</span> lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope <span class="token function">host</span>
       valid_lft forever preferred_lft forever
<span class="token number">14</span>: eth0@if15: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc noqueue state UP group default qlen <span class="token number">1000</span>
    link/ether 7a:16:72:92:97:ea brd ff:ff:ff:ff:ff:ff link-netnsid <span class="token number">0</span>
    inet <span class="token number">172.17</span>.0.10/16 scope global eth0
       valid_lft forever preferred_lft forever
    inet6 fe80::7816:72ff:fe92:97ea/64 scope <span class="token function">link</span>
       valid_lft forever preferred_lft forever
<span class="token punctuation">[</span>root@in-container /<span class="token punctuation">]</span><span class="token comment"># echo &quot;nameserver 8.8.8.8&quot; &gt; /etc/resolv.conf</span>
<span class="token punctuation">[</span>root@in-container /<span class="token punctuation">]</span><span class="token comment"># ping baidu.com</span>
PING baidu.com <span class="token punctuation">(</span><span class="token number">110.242</span>.68.66<span class="token punctuation">)</span> <span class="token number">56</span><span class="token punctuation">(</span><span class="token number">84</span><span class="token punctuation">)</span> bytes of data.
<span class="token number">64</span> bytes from <span class="token number">110.242</span>.68.66 <span class="token punctuation">(</span><span class="token number">110.242</span>.68.66<span class="token punctuation">)</span>: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">127</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">137</span> ms
<span class="token number">64</span> bytes from <span class="token number">110.242</span>.68.66 <span class="token punctuation">(</span><span class="token number">110.242</span>.68.66<span class="token punctuation">)</span>: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">127</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">141</span> ms
<span class="token number">64</span> bytes from <span class="token number">110.242</span>.68.66 <span class="token punctuation">(</span><span class="token number">110.242</span>.68.66<span class="token punctuation">)</span>: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">3</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">127</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">137</span> ms
^C
--- baidu.com <span class="token function">ping</span> statistics ---
<span class="token number">3</span> packets transmitted, <span class="token number">3</span> received, <span class="token number">0</span>% packet loss, <span class="token function">time</span> 4ms
rtt min/avg/max/mdev <span class="token operator">=</span> <span class="token number">136.686</span>/138.160/140.786/1.885 ms
<span class="token punctuation">[</span>root@in-container /<span class="token punctuation">]</span><span class="token comment">#</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),i=[o];function l(p,c){return s(),a("div",null,i)}const d=n(t,[["render",l],["__file","手撕docker容器.html.vue"]]);export{d as default};
