import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as e}from"./app-DIJHtOmK.js";const p={},l=e(`<h1 id="proc详解" tabindex="-1"><a class="header-anchor" href="#proc详解"><span>/proc详解</span></a></h1><blockquote><p>如果哪里都找不到就来内核文档看看吧</p><ul><li>https://docs.kernel.org/filesystems/proc.html</li></ul></blockquote><blockquote><ul><li>内容摘要：Linux系统上的/proc目录是一种文件系统，即proc文件系统。</li></ul><p>Linux系统上的/proc目录是一种文件系统，即proc文件系统。与其它常见的文件系统不同的是，/proc是一种伪文件系统（也即虚拟文件系统），存储的是当前内核运行状态的一系列特殊文件，用户可以通过这些文件查看有关系统硬件及当前正在运行进程的信息，甚至可以通过更改其中某些文件来改变内核的运行状态。</p><p>基于/proc文件系统如上所述的特殊性，其内的文件也常被称作虚拟文件，并具有一些独特的特点。例如，其中有些文件虽然使用查看命令查看时会返回大量信息，但文件本身的大小却会显示为0字节。此外，这些特殊文件中大多数文件的时间及日期属性通常为当前系统时间和日期，这跟它们随时会被刷新（存储于RAM中）有关。</p><p>为了查看及使用上的方便，这些文件通常会按照相关性进行分类存储于不同的目录甚至子目录中，如/proc/scsi目录中存储的就是当前系统上所有SCSI设备的相关信息，/proc/N中存储的则是系统当前正在运行的进程的相关信息，其中N为正在运行的进程（可以想象得到，在某进程结束后其相关目录则会消失）。</p><p>大多数虚拟文件可以使用文件查看命令如cat、more或者less进行查看，有些文件信息表述的内容可以一目了然，但也有文件的信息却不怎么具有可读性。不过，这些可读性较差的文件在使用一些命令如apm、free、lspci或top查看时却可以有着不错的表现。</p></blockquote><h2 id="一、-进程目录中的常见文件介绍" tabindex="-1"><a class="header-anchor" href="#一、-进程目录中的常见文件介绍"><span>一、 进程目录中的常见文件介绍</span></a></h2><p>/proc目录中包含许多以数字命名的子目录，这些数字表示系统当前正在运行进程的进程号，里面包含对应进程相关的多个信息文件。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment"># ll /proc/</span>
total <span class="token number">0</span>
dr-xr-xr-x  <span class="token number">9</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 07:54 <span class="token number">1</span>
dr-xr-xr-x  <span class="token number">9</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 07:54 <span class="token number">10</span>
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
dr-xr-xr-x  <span class="token number">9</span> nginx   nginx                 <span class="token number">0</span> Sep  <span class="token number">4</span> 07:54 <span class="token number">995</span>
dr-xr-xr-x  <span class="token number">9</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 07:54 <span class="token number">996</span>
dr-xr-xr-x  <span class="token number">2</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 07:54 acpi
dr-xr-xr-x  <span class="token number">5</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 07:54 asound
-r--r--r--  <span class="token number">1</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 08:03 buddyinfo
dr-xr-xr-x  <span class="token number">4</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 07:54 bus
-r--r--r--  <span class="token number">1</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 07:54 cgroups
-r--r--r--  <span class="token number">1</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 07:54 cmdline
-r--r--r--  <span class="token number">1</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 08:03 consoles
-r--r--r--  <span class="token number">1</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 07:54 cpuinfo
-r--r--r--  <span class="token number">1</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 08:03 crypto
-r--r--r--  <span class="token number">1</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 07:54 devices
-r--r--r--  <span class="token number">1</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 07:54 diskstats
-r--r--r--  <span class="token number">1</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 08:03 dma
dr-xr-xr-x  <span class="token number">2</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 08:03 driver
-r--r--r--  <span class="token number">1</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 08:03 execdomains
-r--r--r--  <span class="token number">1</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 08:03 fb
-r--r--r--  <span class="token number">1</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 07:54 filesystems
dr-xr-xr-x  <span class="token number">8</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 07:54 fs
-r--r--r--  <span class="token number">1</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 07:54 interrupts
-r--r--r--  <span class="token number">1</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 07:54 iomem
-r--r--r--  <span class="token number">1</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 08:03 ioports
dr-xr-xr-x <span class="token number">29</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 07:54 irq
-r--r--r--  <span class="token number">1</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 07:54 kallsyms
-r--------  <span class="token number">1</span> root    root    <span class="token number">140737477890048</span> Sep  <span class="token number">4</span> 07:54 kcore
-r--r--r--  <span class="token number">1</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 08:03 keys
-r--r--r--  <span class="token number">1</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 08:03 key-users
-r--------  <span class="token number">1</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 08:03 kmsg
-r--------  <span class="token number">1</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 08:03 kpagecgroup
-r--------  <span class="token number">1</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 08:03 kpagecount
-r--------  <span class="token number">1</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 08:03 kpageflags
-r--r--r--  <span class="token number">1</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 07:54 loadavg
-r--r--r--  <span class="token number">1</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 08:03 locks
-r--r--r--  <span class="token number">1</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 08:03 mdstat
-r--r--r--  <span class="token number">1</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 07:54 meminfo
-r--r--r--  <span class="token number">1</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 07:54 misc
-r--r--r--  <span class="token number">1</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 08:03 modules
lrwxrwxrwx  <span class="token number">1</span> root    root                 <span class="token number">11</span> Sep  <span class="token number">4</span> 07:54 mounts -<span class="token operator">&gt;</span> self/mounts
-rw-r--r--  <span class="token number">1</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 07:54 mtrr
lrwxrwxrwx  <span class="token number">1</span> root    root                  <span class="token number">8</span> Sep  <span class="token number">4</span> 07:54 net -<span class="token operator">&gt;</span> self/net
-r--------  <span class="token number">1</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 08:03 pagetypeinfo
-r--r--r--  <span class="token number">1</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 08:03 partitions
-r--r--r--  <span class="token number">1</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 08:03 sched_debug
-r--r--r--  <span class="token number">1</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 08:03 schedstat
dr-xr-xr-x  <span class="token number">3</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 07:54 scsi
lrwxrwxrwx  <span class="token number">1</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 07:54 self -<span class="token operator">&gt;</span> <span class="token number">2954555</span>
-r--------  <span class="token number">1</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 08:03 slabinfo
-r--r--r--  <span class="token number">1</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 08:03 softirqs
-r--r--r--  <span class="token number">1</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 07:54 <span class="token function">stat</span>
-r--r--r--  <span class="token number">1</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 07:54 swaps
dr-xr-xr-x  <span class="token number">1</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 07:54 sys
--w-------  <span class="token number">1</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 07:54 sysrq-trigger
dr-xr-xr-x  <span class="token number">2</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 08:03 sysvipc
lrwxrwxrwx  <span class="token number">1</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 07:54 thread-self -<span class="token operator">&gt;</span> <span class="token number">2954555</span>/task/2954555
-r--------  <span class="token number">1</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 08:03 timer_list
dr-xr-xr-x  <span class="token number">4</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 07:54 <span class="token function">tty</span>
-r--r--r--  <span class="token number">1</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 08:00 <span class="token function">uptime</span>
-r--r--r--  <span class="token number">1</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 08:03 version
-r--------  <span class="token number">1</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 08:03 vmallocinfo
-r--r--r--  <span class="token number">1</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 08:00 <span class="token function">vmstat</span>
-r--r--r--  <span class="token number">1</span> root    root                  <span class="token number">0</span> Sep  <span class="token number">4</span> 08:03 zoneinfo
<span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面列出的是/proc目录中一些进程相关的目录，每个目录中是当程本身相关信息的文件。下面是作者系统（RHEL8.5）上运行的一个PID为955的进程sshd的相关文件，其中有些文件是每个进程都会具有的，后文会对这些常见文件做出说明。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment"># ll /proc/955/</span>
total <span class="token number">0</span>
dr-xr-xr-x <span class="token number">2</span> root root <span class="token number">0</span> Sep  <span class="token number">4</span> 07:54 attr
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">0</span> Sep  <span class="token number">9</span> 09:36 autogroup
-r-------- <span class="token number">1</span> root root <span class="token number">0</span> Sep  <span class="token number">9</span> 09:36 auxv
-r--r--r-- <span class="token number">1</span> root root <span class="token number">0</span> Sep  <span class="token number">4</span> 07:54 cgroup
--w------- <span class="token number">1</span> root root <span class="token number">0</span> Sep  <span class="token number">9</span> 09:36 clear_refs
-r--r--r-- <span class="token number">1</span> root root <span class="token number">0</span> Sep  <span class="token number">4</span> 07:54 cmdline
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">0</span> Sep  <span class="token number">4</span> 07:54 <span class="token function">comm</span>
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">0</span> Sep  <span class="token number">9</span> 09:36 coredump_filter
-r--r--r-- <span class="token number">1</span> root root <span class="token number">0</span> Sep  <span class="token number">9</span> 09:36 cpu_resctrl_groups
-r--r--r-- <span class="token number">1</span> root root <span class="token number">0</span> Sep  <span class="token number">9</span> 09:36 cpuset
lrwxrwxrwx <span class="token number">1</span> root root <span class="token number">0</span> Sep  <span class="token number">9</span> 09:36 cwd -<span class="token operator">&gt;</span> /
-r-------- <span class="token number">1</span> root root <span class="token number">0</span> Sep  <span class="token number">9</span> 09:36 environ
lrwxrwxrwx <span class="token number">1</span> root root <span class="token number">0</span> Sep  <span class="token number">4</span> 07:54 exe -<span class="token operator">&gt;</span> /usr/sbin/sshd
dr-x------ <span class="token number">2</span> root root <span class="token number">0</span> Sep  <span class="token number">4</span> 07:54 fd
dr-x------ <span class="token number">2</span> root root <span class="token number">0</span> Sep  <span class="token number">9</span> 09:36 fdinfo
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">0</span> Sep  <span class="token number">9</span> 09:36 gid_map
-r-------- <span class="token number">1</span> root root <span class="token number">0</span> Sep  <span class="token number">9</span> 09:36 io
-r--r--r-- <span class="token number">1</span> root root <span class="token number">0</span> Sep  <span class="token number">9</span> 09:36 limits
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">0</span> Sep  <span class="token number">4</span> 07:54 loginuid
dr-x------ <span class="token number">2</span> root root <span class="token number">0</span> Sep  <span class="token number">9</span> 09:36 map_files
-r--r--r-- <span class="token number">1</span> root root <span class="token number">0</span> Sep  <span class="token number">9</span> 09:36 maps
-rw------- <span class="token number">1</span> root root <span class="token number">0</span> Sep  <span class="token number">9</span> 09:36 mem
-r--r--r-- <span class="token number">1</span> root root <span class="token number">0</span> Sep  <span class="token number">9</span> 09:36 mountinfo
-r--r--r-- <span class="token number">1</span> root root <span class="token number">0</span> Sep  <span class="token number">9</span> 09:36 mounts
-r-------- <span class="token number">1</span> root root <span class="token number">0</span> Sep  <span class="token number">9</span> 09:36 mountstats
dr-xr-xr-x <span class="token number">6</span> root root <span class="token number">0</span> Sep  <span class="token number">9</span> 09:36 net
dr-x--x--x <span class="token number">2</span> root root <span class="token number">0</span> Sep  <span class="token number">7</span> <span class="token number">13</span>:14 ns
-r--r--r-- <span class="token number">1</span> root root <span class="token number">0</span> Sep  <span class="token number">9</span> 09:36 numa_maps
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">0</span> Sep  <span class="token number">9</span> 09:36 oom_adj
-r--r--r-- <span class="token number">1</span> root root <span class="token number">0</span> Sep  <span class="token number">9</span> 09:36 oom_score
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">0</span> Sep  <span class="token number">4</span> 07:54 oom_score_adj
-r-------- <span class="token number">1</span> root root <span class="token number">0</span> Sep  <span class="token number">9</span> 09:36 pagemap
-r-------- <span class="token number">1</span> root root <span class="token number">0</span> Sep  <span class="token number">9</span> 09:36 patch_state
-r-------- <span class="token number">1</span> root root <span class="token number">0</span> Sep  <span class="token number">9</span> 09:36 personality
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">0</span> Sep  <span class="token number">9</span> 09:36 projid_map
lrwxrwxrwx <span class="token number">1</span> root root <span class="token number">0</span> Sep  <span class="token number">9</span> 09:36 root -<span class="token operator">&gt;</span> /
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">0</span> Sep  <span class="token number">9</span> 09:36 sched
-r--r--r-- <span class="token number">1</span> root root <span class="token number">0</span> Sep  <span class="token number">9</span> 09:36 schedstat
-r--r--r-- <span class="token number">1</span> root root <span class="token number">0</span> Sep  <span class="token number">4</span> 07:54 sessionid
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">0</span> Sep  <span class="token number">9</span> 09:36 setgroups
-r--r--r-- <span class="token number">1</span> root root <span class="token number">0</span> Sep  <span class="token number">9</span> 09:36 smaps
-r--r--r-- <span class="token number">1</span> root root <span class="token number">0</span> Sep  <span class="token number">9</span> 09:36 smaps_rollup
-r-------- <span class="token number">1</span> root root <span class="token number">0</span> Sep  <span class="token number">9</span> 09:36 stack
-r--r--r-- <span class="token number">1</span> root root <span class="token number">0</span> Sep  <span class="token number">4</span> 07:54 <span class="token function">stat</span>
-r--r--r-- <span class="token number">1</span> root root <span class="token number">0</span> Sep  <span class="token number">9</span> 09:36 statm
-r--r--r-- <span class="token number">1</span> root root <span class="token number">0</span> Sep  <span class="token number">4</span> 07:54 status
-r-------- <span class="token number">1</span> root root <span class="token number">0</span> Sep  <span class="token number">9</span> 09:36 syscall
dr-xr-xr-x <span class="token number">3</span> root root <span class="token number">0</span> Sep  <span class="token number">9</span> 09:36 task
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">0</span> Sep  <span class="token number">9</span> 09:36 timens_offsets
-r--r--r-- <span class="token number">1</span> root root <span class="token number">0</span> Sep  <span class="token number">9</span> 09:36 timers
-rw-rw-rw- <span class="token number">1</span> root root <span class="token number">0</span> Sep  <span class="token number">9</span> 09:36 timerslack_ns
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">0</span> Sep  <span class="token number">9</span> 09:36 uid_map
-r--r--r-- <span class="token number">1</span> root root <span class="token number">0</span> Sep  <span class="token number">9</span> 09:36 wchan

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1、cmdline" tabindex="-1"><a class="header-anchor" href="#_1-1、cmdline"><span>1.1、cmdline</span></a></h3><blockquote><p>cmdline — 启动当前进程的完整命令，但僵尸进程目录中的此文件不包含任何信息；</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment"># more /proc/955/cmdline</span>
/usr/sbin/sshdh.com,umac-128-etm@openssh.com,hmac-sha2-512-etm@openssh.com,hmac-sha2-256,hmac-sha1,umac-128@openssh.com,hmac-sha2-5126-,gss-group16-sha512-,gss-gex-sha1-,gss-group14-sha1-e-sha256,diffie-hellman-group14-sha256,diffie-hellman-group16-sha512,diffie-hellman-group18-sha512,diffie-hellman-group-exchange-sha1,diffie-hellman-group14-sha1cdsa-sha2-nistp256-cert-v01@openssh.com,ecdsa-sha2-nistp384,ecdsa-sha2-nistp384-cert-v01@openssh.com,ecdsa-sha2-nistp521,ecdsa-sha2-nistp521-cert-v01@openssh.com,ssh-ed25519,ssh-ed25519-cert-v01@openssh
.com,rsa-sha2-256,rsa-sha2-256-cert-v01@openssh.com,rsa-sha2-512,rsa-sha2-512-cert-v01@openssh.com,ssh-rsa,ssh-rsa-cert-v01@openssh.comrt-v01@openssh.com,ecdsa-sha2-nistp384,ecdsa-sha2-nistp384-cert-v01@openssh.com,ecdsa-sha2-nistp521,ecdsa-sha2-nistp521-cert-v01@openssh.com,ssh-ed25519,ssh-ed25519-cert-v01@openssh.com,rsa-sha2-256,rsa
-sha2-256-cert-v01@openssh.com,rsa-sha2-512,rsa-sha2-512-cert-v01@openssh.com,ssh-rsa,ssh-rsa-cert-v01@openssh.comed25519,rsa-sha2-256,rsa-sha2-512,ssh-rsa
<span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment">#</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2、cwd" tabindex="-1"><a class="header-anchor" href="#_1-2、cwd"><span>1.2、cwd</span></a></h3><blockquote><p>cwd — 指向当前进程运行目录的一个符号链接；</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment"># ll /proc/955/ | grep cwd</span>
lrwxrwxrwx <span class="token number">1</span> root root <span class="token number">0</span> Sep  <span class="token number">9</span> 09:36 cwd -<span class="token operator">&gt;</span> /
<span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3、environ" tabindex="-1"><a class="header-anchor" href="#_1-3、environ"><span>1.3、environ</span></a></h3><blockquote><p>environ — 当前进程的环境变量列表，彼此间用空字符（NULL）隔开；变量用大写字母表示，其值用小写字母表示；</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment"># more /proc/955/environ</span>
<span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span>en_US.UTF-8gcm@openssh.com,chacha20-poly1305@openssh.com,aes256-ctr,aes256-cbc,aes128-gcm@openssh.com,aes128-ctr,aes128-cbc <span class="token parameter variable">-oMACs</span><span class="token operator">=</span>hmac-sha2-256-etm@openssh.com,hmac-sha1-etm@openssh.com,umac-128-etm@openssh.com,h
mac-sha2-512-etm@openssh.com,hmac-sha2-256,hmac-sha1,umac-128@openssh.com,hmac-sha2-512 <span class="token parameter variable">-oGSSAPIKexAlgorithms</span><span class="token operator">=</span>gss-curve25519-sha256-,gss-nistp256-sha256-,gss-group14-sha256-,gss-group16-sha512-,gss-gex-
sha1-,gss-group14-sha1- <span class="token parameter variable">-oKexAlgorithms</span><span class="token operator">=</span>curve25519-sha256,curve25519-sha256@libssh.org,ecdh-sha2-nistp256,ecdh-sha2-nistp384,ecdh-sha2-nistp521,diffie-hellman-group-exchange-sha256,diffie-hellman-group1
<span class="token number">4</span>-sha256,diffie-hellman-group16-sha512,diffie-hellman-group18-sha512,diffie-hellman-group-exchange-sha1,diffie-hellman-group14-sha1 <span class="token parameter variable">-oHostKeyAlgorithms</span><span class="token operator">=</span>ecdsa-sha2-nistp256,ecdsa-sha2-nistp256-cert-v01@o
penssh.com,ecdsa-sha2-nistp384,ecdsa-sha2-nistp384-cert-v01@openssh.com,ecdsa-sha2-nistp521,ecdsa-sha2-nistp521-cert-v01@openssh.com,ssh-ed25519,ssh-ed25519-cert-v01@openssh.com,rsa-sha2-256,rsa-sha2-25
<span class="token number">6</span>-cert-v01@openssh.com,rsa-sha2-512,rsa-sha2-512-cert-v01@openssh.com,ssh-rsa,ssh-rsa-cert-v01@openssh.com <span class="token parameter variable">-oPubkeyAcceptedKeyTypes</span><span class="token operator">=</span>ecdsa-sha2-nistp256,ecdsa-sha2-nistp256-cert-v01@openssh.com,ecdsa-sha
<span class="token number">2</span>-nistp384,ecdsa-sha2-nistp384-cert-v01@openssh.com,ecdsa-sha2-nistp521,ecdsa-sha2-nistp521-cert-v01@openssh.com,ssh-ed25519,ssh-ed25519-cert-v01@openssh.com,rsa-sha2-256,rsa-sha2-256-cert-v01@openssh.c
om,rsa-sha2-512,rsa-sha2-512-cert-v01@openssh.com,ssh-rsa,ssh-rsa-cert-v01@openssh.com <span class="token parameter variable">-oCASignatureAlgorithms</span><span class="token operator">=</span>ecdsa-sha2-nistp256,ecdsa-sha2-nistp384,ecdsa-sha2-nistp521,ssh-ed25519,rsa-sha2-256,rsa-sh
a2-512,ssh-rsa
<span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4、exe" tabindex="-1"><a class="header-anchor" href="#_1-4、exe"><span>1.4、exe</span></a></h3><blockquote><p>exe — 指向启动当前进程的可执行文件（完整路径）的符号链接，通过/proc/N/exe可以启动当前进程的一个拷贝；</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment"># ll /proc/955/ | grep exe</span>
lrwxrwxrwx <span class="token number">1</span> root root <span class="token number">0</span> Sep  <span class="token number">4</span> 07:54 exe -<span class="token operator">&gt;</span> /usr/sbin/sshd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-5、fd" tabindex="-1"><a class="header-anchor" href="#_1-5、fd"><span>1.5、fd</span></a></h3><blockquote><p>fd — 这是个目录，包含当前进程打开的每一个文件的文件描述符（file descriptor），这些文件描述符是指向实际文件的一个符号链接；</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment"># ll /proc/955/fd</span>
total <span class="token number">0</span>
lr-x------ <span class="token number">1</span> root root <span class="token number">64</span> Sep  <span class="token number">4</span> 07:54 <span class="token number">0</span> -<span class="token operator">&gt;</span> /dev/null
lrwx------ <span class="token number">1</span> root root <span class="token number">64</span> Sep  <span class="token number">4</span> 07:54 <span class="token number">1</span> -<span class="token operator">&gt;</span> <span class="token string">&#39;socket:[29238]&#39;</span>
lrwx------ <span class="token number">1</span> root root <span class="token number">64</span> Sep  <span class="token number">4</span> 07:54 <span class="token number">2</span> -<span class="token operator">&gt;</span> <span class="token string">&#39;socket:[29238]&#39;</span>
lr-x------ <span class="token number">1</span> root root <span class="token number">64</span> Sep  <span class="token number">4</span> 07:54 <span class="token number">3</span> -<span class="token operator">&gt;</span> <span class="token string">&#39;/var/lib/sss/mc/passwd (deleted)&#39;</span>
lrwx------ <span class="token number">1</span> root root <span class="token number">64</span> Sep  <span class="token number">4</span> 07:54 <span class="token number">4</span> -<span class="token operator">&gt;</span> <span class="token string">&#39;socket:[29351]&#39;</span>
lr-x------ <span class="token number">1</span> root root <span class="token number">64</span> Sep  <span class="token number">4</span> 07:54 <span class="token number">5</span> -<span class="token operator">&gt;</span> <span class="token string">&#39;/var/lib/sss/mc/group (deleted)&#39;</span>
lrwx------ <span class="token number">1</span> root root <span class="token number">64</span> Sep  <span class="token number">4</span> 07:54 <span class="token number">6</span> -<span class="token operator">&gt;</span> <span class="token string">&#39;socket:[29353]&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-6、limits" tabindex="-1"><a class="header-anchor" href="#_1-6、limits"><span>1.6、limits</span></a></h3><blockquote><p>limits — 当前进程所使用的每一个受限资源的软限制、硬限制和管理单元；此文件仅可由实际启动当前进程的UID用户读取；（2.6.24以后的内核版本支持此功能）；</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment"># more /proc/955/limits</span>
Limit                     Soft Limit           Hard Limit           Units
Max cpu <span class="token function">time</span>              unlimited            unlimited            seconds
Max <span class="token function">file</span> size             unlimited            unlimited            bytes
Max data size             unlimited            unlimited            bytes
Max stack size            <span class="token number">8388608</span>              unlimited            bytes
Max core <span class="token function">file</span> size        <span class="token number">0</span>                    unlimited            bytes
Max resident <span class="token builtin class-name">set</span>          unlimited            unlimited            bytes
Max processes             <span class="token number">14390</span>                <span class="token number">14390</span>                processes
Max <span class="token function">open</span> files            <span class="token number">1024</span>                 <span class="token number">262144</span>               files
Max locked memory         <span class="token number">65536</span>                <span class="token number">65536</span>                bytes
Max address space         unlimited            unlimited            bytes
Max <span class="token function">file</span> locks            unlimited            unlimited            locks
Max pending signals       <span class="token number">14390</span>                <span class="token number">14390</span>                signals
Max msgqueue size         <span class="token number">819200</span>               <span class="token number">819200</span>               bytes
Max <span class="token function">nice</span> priority         <span class="token number">0</span>                    <span class="token number">0</span>
Max realtime priority     <span class="token number">0</span>                    <span class="token number">0</span>
Max realtime <span class="token function">timeout</span>      unlimited            unlimited            us

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.7、maps</p><blockquote><p>maps — 当前进程关联到的每个可执行文件和库文件在内存中的映射区域及其访问权限所组成的列表；</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment"># cat /proc/955/maps</span>
559725e27000-559725ef7000 r-xp 00000000 fd:00 <span class="token number">884543</span>                     /usr/sbin/sshd
5597260f6000-5597260fa000 r--p 000cf000 fd:00 <span class="token number">884543</span>                     /usr/sbin/sshd
5597260fa000-5597260fb000 rw-p 000d3000 fd:00 <span class="token number">884543</span>                     /usr/sbin/sshd
5597260fb000-559726100000 rw-p 00000000 00:00 <span class="token number">0</span>
5597269a6000-5597269e8000 rw-p 00000000 00:00 <span class="token number">0</span>                          <span class="token punctuation">[</span>heap<span class="token punctuation">]</span>
7fa8b5acd000-7fa8b616c000 r--s 00000000 fd:00 <span class="token number">201914714</span>                  /var/lib/sss/mc/group <span class="token punctuation">(</span>deleted<span class="token punctuation">)</span>
7fa8b616c000-7fa8b6177000 r-xp 00000000 fd:00 <span class="token number">1603</span>                       /usr/lib64/libnss_files-2.28.so
7fa8b6177000-7fa8b6377000 ---p 0000b000 fd:00 <span class="token number">1603</span>                       /usr/lib64/libnss_files-2.28.so
7fa8b6377000-7fa8b6378000 r--p 0000b000 fd:00 <span class="token number">1603</span>                       /usr/lib64/libnss_files-2.28.so
7fa8b6378000-7fa8b6379000 rw-p 0000c000 fd:00 <span class="token number">1603</span>                       /usr/lib64/libnss_files-2.28.so
7fa8b6379000-7fa8b637f000 rw-p 00000000 00:00 <span class="token number">0</span>
7fa8b637f000-7fa8b6c53000 r--s 00000000 fd:00 <span class="token number">201914704</span>                  /var/lib/sss/mc/passwd <span class="token punctuation">(</span>deleted<span class="token punctuation">)</span>
7fa8b6c53000-7fa8b6c5d000 r-xp 00000000 fd:00 <span class="token number">744775</span>                     /usr/lib64/libnss_sss.so.2
7fa8b6c5d000-7fa8b6e5c000 ---p 0000a000 fd:00 <span class="token number">744775</span>                     /usr/lib64/libnss_sss.so.2
7fa8b6e5c000-7fa8b6e5d000 r--p 00009000 fd:00 <span class="token number">744775</span>                     /usr/lib64/libnss_sss.so.2
7fa8b6e5d000-7fa8b6e5e000 rw-p 0000a000 fd:00 <span class="token number">744775</span>                     /usr/lib64/libnss_sss.so.2
7fa8b6e5e000-7fa8b6e7d000 r-xp 00000000 fd:00 <span class="token number">1764</span>                       /usr/lib64/libgpg-error.so.0.24.2
7fa8b6e7d000-7fa8b707d000 ---p 0001f000 fd:00 <span class="token number">1764</span>                       /usr/lib64/libgpg-error.so.0.24.2
7fa8b707d000-7fa8b707e000 r--p 0001f000 fd:00 <span class="token number">1764</span>                       /usr/lib64/libgpg-error.so.0.24.2
7fa8b707e000-7fa8b707f000 rw-p 00020000 fd:00 <span class="token number">1764</span>                       /usr/lib64/libgpg-error.so.0.24.2
7fa8b707f000-7fa8b7085000 r-xp 00000000 fd:00 <span class="token number">1788</span>                       /usr/lib64/libuuid.so.1.3.0
7fa8b7085000-7fa8b7285000 ---p 00006000 fd:00 <span class="token number">1788</span>                       /usr/lib64/libuuid.so.1.3.0
7fa8b7285000-7fa8b7286000 r--p 00006000 fd:00 <span class="token number">1788</span>                       /usr/lib64/libuuid.so.1.3.0
7fa8b7286000-7fa8b7287000 rw-p 00000000 00:00 <span class="token number">0</span>
7fa8b7287000-7fa8b72d4000 r-xp 00000000 fd:00 <span class="token number">581003</span>                     /usr/lib64/libblkid.so.1.1.0
7fa8b72d4000-7fa8b74d3000 ---p 0004d000 fd:00 <span class="token number">581003</span>                     /usr/lib64/libblkid.so.1.1.0
7fa8b74d3000-7fa8b74d8000 r--p 0004c000 fd:00 <span class="token number">581003</span>                     /usr/lib64/libblkid.so.1.1.0
7fa8b74d8000-7fa8b74d9000 rw-p 00051000 fd:00 <span class="token number">581003</span>                     /usr/lib64/libblkid.so.1.1.0
7fa8b74d9000-7fa8b74da000 rw-p 00000000 00:00 <span class="token number">0</span>
7fa8b74da000-7fa8b74dd000 r-xp 00000000 fd:00 <span class="token number">2048</span>                       /usr/lib64/libkeyutils.so.1.6
7fa8b74dd000-7fa8b76dc000 ---p 00003000 fd:00 <span class="token number">2048</span>                       /usr/lib64/libkeyutils.so.1.6
7fa8b76dc000-7fa8b76dd000 r--p 00002000 fd:00 <span class="token number">2048</span>                       /usr/lib64/libkeyutils.so.1.6
7fa8b76dd000-7fa8b76de000 rw-p 00000000 00:00 <span class="token number">0</span>
7fa8b76de000-7fa8b76ed000 r-xp 00000000 fd:00 <span class="token number">580933</span>                     /usr/lib64/libkrb5support.so.0.1
7fa8b76ed000-7fa8b78ed000 ---p 0000f000 fd:00 <span class="token number">580933</span>                     /usr/lib64/libkrb5support.so.0.1
7fa8b78ed000-7fa8b78ee000 r--p 0000f000 fd:00 <span class="token number">580933</span>                     /usr/lib64/libkrb5support.so.0.1
7fa8b78ee000-7fa8b78ef000 rw-p 00010000 fd:00 <span class="token number">580933</span>                     /usr/lib64/libkrb5support.so.0.1
7fa8b78ef000-7fa8b7972000 r-xp 00000000 fd:00 <span class="token number">1365</span>                       /usr/lib64/libpcre2-8.so.0.7.1
7fa8b7972000-7fa8b7b71000 ---p 00083000 fd:00 <span class="token number">1365</span>                       /usr/lib64/libpcre2-8.so.0.7.1
7fa8b7b71000-7fa8b7b72000 r--p 00082000 fd:00 <span class="token number">1365</span>                       /usr/lib64/libpcre2-8.so.0.7.1
7fa8b7b72000-7fa8b7b73000 rw-p 00083000 fd:00 <span class="token number">1365</span>                       /usr/lib64/libpcre2-8.so.0.7.1
7fa8b7b73000-7fa8b7b8e000 r-xp 00000000 fd:00 <span class="token number">1605</span>                       /usr/lib64/libpthread-2.28.so
7fa8b7b8e000-7fa8b7d8d000 ---p 0001b000 fd:00 <span class="token number">1605</span>                       /usr/lib64/libpthread-2.28.so
7fa8b7d8d000-7fa8b7d8e000 r--p 0001a000 fd:00 <span class="token number">1605</span>                       /usr/lib64/libpthread-2.28.so
7fa8b7d8e000-7fa8b7d8f000 rw-p 0001b000 fd:00 <span class="token number">1605</span>                       /usr/lib64/libpthread-2.28.so
7fa8b7d8f000-7fa8b7d93000 rw-p 00000000 00:00 <span class="token number">0</span>
7fa8b7d93000-7fa8b7daa000 r-xp 00000000 fd:00 <span class="token number">1600874</span>                    /usr/lib64/libgcc_s-8-20210514.so.1
7fa8b7daa000-7fa8b7fa9000 ---p 00017000 fd:00 <span class="token number">1600874</span>                    /usr/lib64/libgcc_s-8-20210514.so.1
7fa8b7fa9000-7fa8b7faa000 r--p 00016000 fd:00 <span class="token number">1600874</span>                    /usr/lib64/libgcc_s-8-20210514.so.1
7fa8b7faa000-7fa8b7fab000 rw-p 00017000 fd:00 <span class="token number">1600874</span>                    /usr/lib64/libgcc_s-8-20210514.so.1
7fa8b7fab000-7fa8b80c3000 r-xp 00000000 fd:00 <span class="token number">1906</span>                       /usr/lib64/libgcrypt.so.20.2.5
7fa8b80c3000-7fa8b82c2000 ---p 00118000 fd:00 <span class="token number">1906</span>                       /usr/lib64/libgcrypt.so.20.2.5
7fa8b82c2000-7fa8b82c4000 r--p 00117000 fd:00 <span class="token number">1906</span>                       /usr/lib64/libgcrypt.so.20.2.5
7fa8b82c4000-7fa8b82c9000 rw-p 00119000 fd:00 <span class="token number">1906</span>                       /usr/lib64/libgcrypt.so.20.2.5
7fa8b82c9000-7fa8b831f000 r-xp 00000000 fd:00 <span class="token number">581213</span>                     /usr/lib64/libmount.so.1.1.0
7fa8b831f000-7fa8b851e000 ---p 00056000 fd:00 <span class="token number">581213</span>                     /usr/lib64/libmount.so.1.1.0
7fa8b851e000-7fa8b8521000 r--p 00055000 fd:00 <span class="token number">581213</span>                     /usr/lib64/libmount.so.1.1.0
7fa8b8521000-7fa8b8522000 rw-p 00058000 fd:00 <span class="token number">581213</span>                     /usr/lib64/libmount.so.1.1.0
7fa8b8522000-7fa8b8523000 rw-p 00000000 00:00 <span class="token number">0</span>
7fa8b8523000-7fa8b852a000 r-xp 00000000 fd:00 <span class="token number">1742</span>                       /usr/lib64/libcap.so.2.48
7fa8b852a000-7fa8b8729000 ---p 00007000 fd:00 <span class="token number">1742</span>                       /usr/lib64/libcap.so.2.48
7fa8b8729000-7fa8b872a000 r--p 00006000 fd:00 <span class="token number">1742</span>                       /usr/lib64/libcap.so.2.48
7fa8b872a000-7fa8b872b000 rw-p 00007000 fd:00 <span class="token number">1742</span>                       /usr/lib64/libcap.so.2.48
7fa8b872b000-7fa8b8747000 r-xp 00000000 fd:00 <span class="token number">1834</span>                       /usr/lib64/liblz4.so.1.8.3
7fa8b8747000-7fa8b8946000 ---p 0001c000 fd:00 <span class="token number">1834</span>                       /usr/lib64/liblz4.so.1.8.3
7fa8b8946000-7fa8b8947000 r--p 0001b000 fd:00 <span class="token number">1834</span>                       /usr/lib64/liblz4.so.1.8.3
7fa8b8947000-7fa8b8948000 rw-p 00000000 00:00 <span class="token number">0</span>
7fa8b8948000-7fa8b896d000 r-xp 00000000 fd:00 <span class="token number">1659</span>                       /usr/lib64/liblzma.so.5.2.4
7fa8b896d000-7fa8b8b6d000 ---p 00025000 fd:00 <span class="token number">1659</span>                       /usr/lib64/liblzma.so.5.2.4
7fa8b8b6d000-7fa8b8b6e000 r--p 00025000 fd:00 <span class="token number">1659</span>                       /usr/lib64/liblzma.so.5.2.4
7fa8b8b6e000-7fa8b8b6f000 rw-p 00000000 00:00 <span class="token number">0</span>
7fa8b8b6f000-7fa8b8b76000 r-xp 00000000 fd:00 <span class="token number">1609</span>                       /usr/lib64/librt-2.28.so
7fa8b8b76000-7fa8b8d75000 ---p 00007000 fd:00 <span class="token number">1609</span>                       /usr/lib64/librt-2.28.so
7fa8b8d75000-7fa8b8d76000 r--p 00006000 fd:00 <span class="token number">1609</span>                       /usr/lib64/librt-2.28.so
7fa8b8d76000-7fa8b8d77000 rw-p 00007000 fd:00 <span class="token number">1609</span>                       /usr/lib64/librt-2.28.so
7fa8b8d77000-7fa8b8d7c000 r-xp 00000000 fd:00 <span class="token number">1910</span>                       /usr/lib64/libcap-ng.so.0.0.0
7fa8b8d7c000-7fa8b8f7b000 ---p 00005000 fd:00 <span class="token number">1910</span>                       /usr/lib64/libcap-ng.so.0.0.0
7fa8b8f7b000-7fa8b8f7c000 r--p 00004000 fd:00 <span class="token number">1910</span>                       /usr/lib64/libcap-ng.so.0.0.0
7fa8b8f7c000-7fa8b8f7d000 rw-p 00000000 00:00 <span class="token number">0</span>
7fa8b8f7d000-7fa8b9139000 r-xp 00000000 fd:00 <span class="token number">1591</span>                       /usr/lib64/libc-2.28.so
7fa8b9139000-7fa8b9338000 ---p 001bc000 fd:00 <span class="token number">1591</span>                       /usr/lib64/libc-2.28.so
7fa8b9338000-7fa8b933c000 r--p 001bb000 fd:00 <span class="token number">1591</span>                       /usr/lib64/libc-2.28.so
7fa8b933c000-7fa8b933e000 rw-p 001bf000 fd:00 <span class="token number">1591</span>                       /usr/lib64/libc-2.28.so
7fa8b933e000-7fa8b9342000 rw-p 00000000 00:00 <span class="token number">0</span>
7fa8b9342000-7fa8b9345000 r-xp 00000000 fd:00 <span class="token number">1779</span>                       /usr/lib64/libcom_err.so.2.1
7fa8b9345000-7fa8b9544000 ---p 00003000 fd:00 <span class="token number">1779</span>                       /usr/lib64/libcom_err.so.2.1
7fa8b9544000-7fa8b9545000 r--p 00002000 fd:00 <span class="token number">1779</span>                       /usr/lib64/libcom_err.so.2.1
7fa8b9545000-7fa8b9546000 rw-p 00003000 fd:00 <span class="token number">1779</span>                       /usr/lib64/libcom_err.so.2.1
7fa8b9546000-7fa8b955b000 r-xp 00000000 fd:00 <span class="token number">580925</span>                     /usr/lib64/libk5crypto.so.3.1
7fa8b955b000-7fa8b975a000 ---p 00015000 fd:00 <span class="token number">580925</span>                     /usr/lib64/libk5crypto.so.3.1
7fa8b975a000-7fa8b975c000 r--p 00014000 fd:00 <span class="token number">580925</span>                     /usr/lib64/libk5crypto.so.3.1
7fa8b975c000-7fa8b975d000 rw-p 00016000 fd:00 <span class="token number">580925</span>                     /usr/lib64/libk5crypto.so.3.1
7fa8b975d000-7fa8b9836000 r-xp 00000000 fd:00 <span class="token number">580931</span>                     /usr/lib64/libkrb5.so.3.3
7fa8b9836000-7fa8b9a36000 ---p 000d9000 fd:00 <span class="token number">580931</span>                     /usr/lib64/libkrb5.so.3.3
7fa8b9a36000-7fa8b9a45000 r--p 000d9000 fd:00 <span class="token number">580931</span>                     /usr/lib64/libkrb5.so.3.3
7fa8b9a45000-7fa8b9a47000 rw-p 000e8000 fd:00 <span class="token number">580931</span>                     /usr/lib64/libkrb5.so.3.3
7fa8b9a47000-7fa8b9a99000 r-xp 00000000 fd:00 <span class="token number">580921</span>                     /usr/lib64/libgssapi_krb5.so.2.2
7fa8b9a99000-7fa8b9c99000 ---p 00052000 fd:00 <span class="token number">580921</span>                     /usr/lib64/libgssapi_krb5.so.2.2
7fa8b9c99000-7fa8b9c9b000 r--p 00052000 fd:00 <span class="token number">580921</span>                     /usr/lib64/libgssapi_krb5.so.2.2
7fa8b9c9b000-7fa8b9c9c000 rw-p 00054000 fd:00 <span class="token number">580921</span>                     /usr/lib64/libgssapi_krb5.so.2.2
7fa8b9c9c000-7fa8b9cc3000 r-xp 00000000 fd:00 <span class="token number">1371</span>                       /usr/lib64/libselinux.so.1
7fa8b9cc3000-7fa8b9ec2000 ---p 00027000 fd:00 <span class="token number">1371</span>                       /usr/lib64/libselinux.so.1
7fa8b9ec2000-7fa8b9ec3000 r--p 00026000 fd:00 <span class="token number">1371</span>                       /usr/lib64/libselinux.so.1
7fa8b9ec3000-7fa8b9ec4000 rw-p 00027000 fd:00 <span class="token number">1371</span>                       /usr/lib64/libselinux.so.1
7fa8b9ec4000-7fa8b9ec6000 rw-p 00000000 00:00 <span class="token number">0</span>
7fa8b9ec6000-7fa8b9eda000 r-xp 00000000 fd:00 <span class="token number">1607</span>                       /usr/lib64/libresolv-2.28.so
7fa8b9eda000-7fa8ba0d9000 ---p 00014000 fd:00 <span class="token number">1607</span>                       /usr/lib64/libresolv-2.28.so
7fa8ba0d9000-7fa8ba0da000 r--p 00013000 fd:00 <span class="token number">1607</span>                       /usr/lib64/libresolv-2.28.so
7fa8ba0da000-7fa8ba0db000 rw-p 00014000 fd:00 <span class="token number">1607</span>                       /usr/lib64/libresolv-2.28.so
7fa8ba0db000-7fa8ba0dd000 rw-p 00000000 00:00 <span class="token number">0</span>
7fa8ba0dd000-7fa8ba0fd000 r-xp 00000000 fd:00 <span class="token number">1677</span>                       /usr/lib64/libcrypt.so.1.1.0
7fa8ba0fd000-7fa8ba2fc000 ---p 00020000 fd:00 <span class="token number">1677</span>                       /usr/lib64/libcrypt.so.1.1.0
7fa8ba2fc000-7fa8ba2fd000 r--p 0001f000 fd:00 <span class="token number">1677</span>                       /usr/lib64/libcrypt.so.1.1.0
7fa8ba2fd000-7fa8ba306000 rw-p 00000000 00:00 <span class="token number">0</span>
7fa8ba306000-7fa8ba31c000 r-xp 00000000 fd:00 <span class="token number">1655</span>                       /usr/lib64/libz.so.1.2.11
7fa8ba31c000-7fa8ba51c000 ---p 00016000 fd:00 <span class="token number">1655</span>                       /usr/lib64/libz.so.1.2.11
7fa8ba51c000-7fa8ba51d000 r--p 00016000 fd:00 <span class="token number">1655</span>                       /usr/lib64/libz.so.1.2.11
7fa8ba51d000-7fa8ba51e000 rw-p 00000000 00:00 <span class="token number">0</span>
7fa8ba51e000-7fa8ba520000 r-xp 00000000 fd:00 <span class="token number">1613</span>                       /usr/lib64/libutil-2.28.so
7fa8ba520000-7fa8ba720000 ---p 00002000 fd:00 <span class="token number">1613</span>                       /usr/lib64/libutil-2.28.so
7fa8ba720000-7fa8ba721000 r--p 00002000 fd:00 <span class="token number">1613</span>                       /usr/lib64/libutil-2.28.so
7fa8ba721000-7fa8ba722000 rw-p 00003000 fd:00 <span class="token number">1613</span>                       /usr/lib64/libutil-2.28.so
7fa8ba722000-7fa8ba725000 r-xp 00000000 fd:00 <span class="token number">1593</span>                       /usr/lib64/libdl-2.28.so
7fa8ba725000-7fa8ba924000 ---p 00003000 fd:00 <span class="token number">1593</span>                       /usr/lib64/libdl-2.28.so
7fa8ba924000-7fa8ba925000 r--p 00002000 fd:00 <span class="token number">1593</span>                       /usr/lib64/libdl-2.28.so
7fa8ba925000-7fa8ba926000 rw-p 00003000 fd:00 <span class="token number">1593</span>                       /usr/lib64/libdl-2.28.so
7fa8ba926000-7fa8babda000 r-xp 00000000 fd:00 <span class="token number">581432</span>                     /usr/lib64/libcrypto.so.1.1.1k
7fa8babda000-7fa8badda000 ---p 002b4000 fd:00 <span class="token number">581432</span>                     /usr/lib64/libcrypto.so.1.1.1k
7fa8badda000-7fa8bae06000 r--p 002b4000 fd:00 <span class="token number">581432</span>                     /usr/lib64/libcrypto.so.1.1.1k
7fa8bae06000-7fa8bae0a000 rw-p 002e0000 fd:00 <span class="token number">581432</span>                     /usr/lib64/libcrypto.so.1.1.1k
7fa8bae0a000-7fa8bae0f000 rw-p 00000000 00:00 <span class="token number">0</span>
7fa8bae0f000-7fa8baf4f000 r-xp 00000000 fd:00 <span class="token number">580996</span>                     /usr/lib64/libsystemd.so.0.23.0
7fa8baf4f000-7fa8bb14f000 ---p 00140000 fd:00 <span class="token number">580996</span>                     /usr/lib64/libsystemd.so.0.23.0
7fa8bb14f000-7fa8bb157000 r--p 00140000 fd:00 <span class="token number">580996</span>                     /usr/lib64/libsystemd.so.0.23.0
7fa8bb157000-7fa8bb158000 rw-p 00148000 fd:00 <span class="token number">580996</span>                     /usr/lib64/libsystemd.so.0.23.0
7fa8bb158000-7fa8bb159000 rw-p 00000000 00:00 <span class="token number">0</span>
7fa8bb159000-7fa8bb167000 r-xp 00000000 fd:00 <span class="token number">581565</span>                     /usr/lib64/libpam.so.0.84.2
7fa8bb167000-7fa8bb367000 ---p 0000e000 fd:00 <span class="token number">581565</span>                     /usr/lib64/libpam.so.0.84.2
7fa8bb367000-7fa8bb368000 r--p 0000e000 fd:00 <span class="token number">581565</span>                     /usr/lib64/libpam.so.0.84.2
7fa8bb368000-7fa8bb369000 rw-p 0000f000 fd:00 <span class="token number">581565</span>                     /usr/lib64/libpam.so.0.84.2
7fa8bb369000-7fa8bb388000 r-xp 00000000 fd:00 <span class="token number">1912</span>                       /usr/lib64/libaudit.so.1.0.0
7fa8bb388000-7fa8bb588000 ---p 0001f000 fd:00 <span class="token number">1912</span>                       /usr/lib64/libaudit.so.1.0.0
7fa8bb588000-7fa8bb589000 r--p 0001f000 fd:00 <span class="token number">1912</span>                       /usr/lib64/libaudit.so.1.0.0
7fa8bb589000-7fa8bb58a000 rw-p 00020000 fd:00 <span class="token number">1912</span>                       /usr/lib64/libaudit.so.1.0.0
7fa8bb58a000-7fa8bb59a000 rw-p 00000000 00:00 <span class="token number">0</span>
7fa8bb59a000-7fa8bb5c7000 r-xp 00000000 fd:00 <span class="token number">1584</span>                       /usr/lib64/ld-2.28.so
7fa8bb7b1000-7fa8bb7c2000 rw-p 00000000 00:00 <span class="token number">0</span>
7fa8bb7c7000-7fa8bb7c8000 r--p 0002d000 fd:00 <span class="token number">1584</span>                       /usr/lib64/ld-2.28.so
7fa8bb7c8000-7fa8bb7ca000 rw-p 0002e000 fd:00 <span class="token number">1584</span>                       /usr/lib64/ld-2.28.so
7fffce643000-7fffce664000 rw-p 00000000 00:00 <span class="token number">0</span>                          <span class="token punctuation">[</span>stack<span class="token punctuation">]</span>
7fffce778000-7fffce77c000 r--p 00000000 00:00 <span class="token number">0</span>                          <span class="token punctuation">[</span>vvar<span class="token punctuation">]</span>
7fffce77c000-7fffce77e000 r-xp 00000000 00:00 <span class="token number">0</span>                          <span class="token punctuation">[</span>vdso<span class="token punctuation">]</span>
ffffffffff600000-ffffffffff601000 r-xp 00000000 00:00 <span class="token number">0</span>                  <span class="token punctuation">[</span>vsyscall<span class="token punctuation">]</span>
<span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment">#</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-8、mem" tabindex="-1"><a class="header-anchor" href="#_1-8、mem"><span>1.8、mem</span></a></h3><blockquote><p>mem — 当前进程所占用的内存空间，由open、read和lseek等系统调用使用，不能被用户读取；</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment"># more /proc/955/mem</span>
<span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment"># ll /proc/955/mem</span>
-rw------- <span class="token number">1</span> root root <span class="token number">0</span> Sep  <span class="token number">9</span> 09:36 /proc/955/mem
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-9、root" tabindex="-1"><a class="header-anchor" href="#_1-9、root"><span>1.9、root</span></a></h3><blockquote><p>root — 指向当前进程运行根目录的符号链接；在Unix和Linux系统上，通常采用chroot命令使每个进程运行于独立的根目录；</p></blockquote><h3 id="_1-10、stat" tabindex="-1"><a class="header-anchor" href="#_1-10、stat"><span>1.10、stat</span></a></h3><blockquote><p>stat — 当前进程的状态信息，包含一系统格式化后的数据列，可读性差，通常由ps命令使用；</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment"># cat /proc/955/stat</span>
<span class="token number">955</span> <span class="token punctuation">(</span>sshd<span class="token punctuation">)</span> S <span class="token number">1</span> <span class="token number">955</span> <span class="token number">955</span> <span class="token number">0</span> <span class="token parameter variable">-1</span> <span class="token number">4210944</span>  //1~9
<span class="token number">773</span> <span class="token number">64864</span> <span class="token number">18</span> <span class="token number">19</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">273</span> <span class="token number">106</span> //10~17
<span class="token number">20</span> <span class="token number">0</span> <span class="token number">1</span> <span class="token number">0</span> <span class="token number">412</span> <span class="token number">96800768</span> <span class="token number">1916</span> <span class="token number">18446744073709551615</span> //18~25
<span class="token number">94107664019456</span> <span class="token number">94107664870728</span> <span class="token number">140736656186656</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">4096</span> <span class="token number">81925</span> <span class="token number">1</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">17</span> <span class="token number">1</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">2</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">94107666968080</span> <span class="token number">94107666982612</span> <span class="token number">94107676073984</span> <span class="token number">140736656192036</span> <span class="token number">140736656193702</span> <span class="token number">140736656193702</span> <span class="token number">140736656195561</span> <span class="token number">0</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>pid： 进程ID. comm: task_struct结构体的进程名 state: 进程状态, 此处为S ppid: 父进程ID （父进程是指通过fork方式，通过clone并非父进程） pgrp：进程组ID session：进程会话组ID tty_nr：当前进程的tty终点设备号 tpgid：控制进程终端的前台进程号 flags：进程标识位，定义在include/linux/sched.h中的PF_*, 此处等于1077952832 minflt： 次要缺页中断的次数，即无需从磁盘加载内存页. 比如COW和匿名页 cminflt：当前进程等待子进程的minflt majflt：主要缺页中断的次数，需要从磁盘加载内存页. 比如map文件 majflt：当前进程等待子进程的majflt utime: 该进程处于用户态的时间，单位jiffies，此处等于166114 stime: 该进程处于内核态的时间，单位jiffies，此处等于129684 cutime：当前进程等待子进程的utime cstime: 当前进程等待子进程的utime priority: 进程优先级, 此次等于10. nice: nice值，取值范围[19, -20]，此处等于-10 num_threads: 线程个数, 此处等于221 itrealvalue: 该字段已废弃，恒等于0 starttime：自系统启动后的进程创建时间，单位jiffies，此处等于2284 vsize：进程的虚拟内存大小，单位为bytes rss: 进程独占内存+共享库，单位pages，此处等于93087 rsslim: rss大小上限 说明：</p><p>第10~17行主要是随着时间而改变的量； 内核时间单位，sysconf(_SC_CLK_TCK)一般地定义为jiffies(一般地等于10ms) starttime: 此值单位为jiffies, 结合/proc/stat的btime，可知道每一个线程启动的时间点 1500827856 + 2284/100 = 1500827856, 转换成北京时间为2017/7/24 0:37:58 第四行数据很少使用,只说一下该行第7至9个数的含义:</p><p>signal：即将要处理的信号，十进制，此处等于6660 blocked：阻塞的信号，十进制 sigignore：被忽略的信号，十进制，此处等于36088</p><h3 id="_1-11、statm" tabindex="-1"><a class="header-anchor" href="#_1-11、statm"><span>1.11、statm</span></a></h3><blockquote><p>statm — 当前进程占用内存的状态信息，通常以“页面”（page）表示；</p></blockquote><h3 id="_1-12、status" tabindex="-1"><a class="header-anchor" href="#_1-12、status"><span>1.12、status</span></a></h3><blockquote><p>status — 与stat所提供信息类似，但可读性较好，如下所示，每行表示一个属性信息；其详细介绍请参见 proc的man手册页；</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment"># more /proc/955/status</span>
Name:   sshd
Umask:  0022
State:  S <span class="token punctuation">(</span>sleeping<span class="token punctuation">)</span>
Tgid:   <span class="token number">955</span>
Ngid:   <span class="token number">0</span>
Pid:    <span class="token number">955</span>
PPid:   <span class="token number">1</span>
TracerPid:      <span class="token number">0</span>
Uid:    <span class="token number">0</span>       <span class="token number">0</span>       <span class="token number">0</span>       <span class="token number">0</span>
Gid:    <span class="token number">0</span>       <span class="token number">0</span>       <span class="token number">0</span>       <span class="token number">0</span>
FDSize: <span class="token number">64</span>
Groups:
NStgid: <span class="token number">955</span>
NSpid:  <span class="token number">955</span>
NSpgid: <span class="token number">955</span>
NSsid:  <span class="token number">955</span>
VmPeak:    <span class="token number">94532</span> kB
VmSize:    <span class="token number">94532</span> kB
VmLck:         <span class="token number">0</span> kB
VmPin:         <span class="token number">0</span> kB
VmHWM:      <span class="token number">7892</span> kB
VmRSS:      <span class="token number">7664</span> kB
RssAnon:             <span class="token number">944</span> kB
RssFile:            <span class="token number">6720</span> kB
RssShmem:              <span class="token number">0</span> kB
VmData:      <span class="token number">728</span> kB
VmStk:       <span class="token number">132</span> kB
VmExe:       <span class="token number">832</span> kB
VmLib:     <span class="token number">11092</span> kB
VmPTE:       <span class="token number">196</span> kB
VmSwap:        <span class="token number">0</span> kB
HugetlbPages:          <span class="token number">0</span> kB
CoreDumping:    <span class="token number">0</span>
THP_enabled:    <span class="token number">1</span>
Threads:        <span class="token number">1</span>
SigQ:   <span class="token number">2</span>/14390
SigPnd: 0000000000000000
ShdPnd: 0000000000000000
SigBlk: 0000000000000000
SigIgn: 0000000000001000
SigCgt: 0000000180014005
CapInh: 0000000000000000
CapPrm: 000001ffffffffff
CapEff: 000001ffffffffff
CapBnd: 000001ffffffffff
CapAmb: 0000000000000000
NoNewPrivs:     <span class="token number">0</span>
Seccomp:        <span class="token number">0</span>
Speculation_Store_Bypass:       thread vulnerable
Cpus_allowed:   <span class="token number">3</span>
Cpus_allowed_list:      <span class="token number">0</span>-1
Mems_allowed:   00000000,00000000,00000000,00000000,00000000,00000000,00000000,00000000,00000000,00000000,00000000,00000000,00000000,00000000,00000000,00000000,00000000,00000000,00000000,00000000,000000
00,00000000,00000000,00000000,00000000,00000000,00000000,00000000,00000000,00000000,00000000,00000001
Mems_allowed_list:      <span class="token number">0</span>
voluntary_ctxt_switches:        <span class="token number">86</span>
nonvoluntary_ctxt_switches:     <span class="token number">24</span>
<span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-13、task" tabindex="-1"><a class="header-anchor" href="#_1-13、task"><span>1.13、task</span></a></h3><blockquote><p>task — 目录文件，包含由当前进程所运行的每一个线程的相关信息，每个线程的相关信息文件均保存在一个由线程号（tid）命名的目录中，这类似于其内容类似于每个进程目录中的内容；（内核2.6版本以后支持此功能）</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment"># ll /proc/955/task/</span>
total <span class="token number">0</span>
dr-xr-xr-x <span class="token number">7</span> root root <span class="token number">0</span> Sep  <span class="token number">9</span> 09:51 <span class="token number">955</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、-proc目录下常见的文件介绍" tabindex="-1"><a class="header-anchor" href="#二、-proc目录下常见的文件介绍"><span>二、/proc目录下常见的文件介绍</span></a></h2><h3 id="_2-1、-proc-apm" tabindex="-1"><a class="header-anchor" href="#_2-1、-proc-apm"><span>2.1、/proc/apm</span></a></h3><p>高级电源管理（APM）版本信息及电池相关状态信息，通常由apm命令使用；</p><h3 id="_2-2、-proc-buddyinfo" tabindex="-1"><a class="header-anchor" href="#_2-2、-proc-buddyinfo"><span>2.2、/proc/buddyinfo</span></a></h3><p>用于诊断内存碎片问题的相关信息文件；</p><h3 id="_2-3、-proc-cmdline" tabindex="-1"><a class="header-anchor" href="#_2-3、-proc-cmdline"><span>2.3、/proc/cmdline</span></a></h3><p>在启动时传递至内核的相关参数信息，这些信息通常由lilo或grub等启动管理工具进行传递；</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment">#  more /proc/cmdline</span>
<span class="token assign-left variable">BOOT_IMAGE</span><span class="token operator">=</span><span class="token punctuation">(</span>hd2,gpt2<span class="token punctuation">)</span>/vmlinuz-4.18.0-372.9.1.el8.x86_64 <span class="token assign-left variable">root</span><span class="token operator">=</span>/dev/mapper/rl-root ro <span class="token assign-left variable">crashkernel</span><span class="token operator">=</span>auto <span class="token assign-left variable">resume</span><span class="token operator">=</span>/dev/mapper/rl-swap <span class="token assign-left variable">rd.lvm.lv</span><span class="token operator">=</span>rl/root <span class="token assign-left variable">rd.lvm.lv</span><span class="token operator">=</span>rl/swap rhgb quiet
<span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4、-proc-cpuinfo" tabindex="-1"><a class="header-anchor" href="#_2-4、-proc-cpuinfo"><span>2.4、/proc/cpuinfo</span></a></h3><p>处理器的相关信息的文件；</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment"># cat /proc/cpuinfo</span>
processor       <span class="token builtin class-name">:</span> <span class="token number">0</span>
vendor_id       <span class="token builtin class-name">:</span> GenuineIntel
cpu family      <span class="token builtin class-name">:</span> <span class="token number">6</span>
model           <span class="token builtin class-name">:</span> <span class="token number">60</span>
model name      <span class="token builtin class-name">:</span> Intel<span class="token punctuation">(</span>R<span class="token punctuation">)</span> Pentium<span class="token punctuation">(</span>R<span class="token punctuation">)</span> CPU G3220 @ <span class="token number">3</span>.00GHz
stepping        <span class="token builtin class-name">:</span> <span class="token number">3</span>
microcode       <span class="token builtin class-name">:</span> 0x28
cpu MHz         <span class="token builtin class-name">:</span> <span class="token number">2993.090</span>
cache size      <span class="token builtin class-name">:</span> <span class="token number">3072</span> KB
physical <span class="token function">id</span>     <span class="token builtin class-name">:</span> <span class="token number">0</span>
siblings        <span class="token builtin class-name">:</span> <span class="token number">2</span>
core <span class="token function">id</span>         <span class="token builtin class-name">:</span> <span class="token number">0</span>
cpu cores       <span class="token builtin class-name">:</span> <span class="token number">2</span>
apicid          <span class="token builtin class-name">:</span> <span class="token number">0</span>
initial apicid  <span class="token builtin class-name">:</span> <span class="token number">0</span>
fpu             <span class="token builtin class-name">:</span> <span class="token function">yes</span>
fpu_exception   <span class="token builtin class-name">:</span> <span class="token function">yes</span>
cpuid level     <span class="token builtin class-name">:</span> <span class="token number">13</span>
wp              <span class="token builtin class-name">:</span> <span class="token function">yes</span>
flags           <span class="token builtin class-name">:</span> fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush dts acpi mmx fxsr sse sse2 ss ht tm pbe syscall nx pdpe1gb rdtscp lm constant_tsc arch_perfmon pebs bts rep_good nopl xtopology nonstop_tsc cpuid aperfmperf pni pclmulqdq dtes64 monitor ds_cpl vmx est tm2 ssse3 sdbg cx16 xtpr pdcm pcid sse4_1 sse4_2 movbe popcnt tsc_deadline_timer xsave rdrand lahf_lm abm cpuid_fault epb invpcid_single pti ssbd ibrs ibpb stibp tpr_shadow vnmi flexpriority ept vpid ept_ad fsgsbase tsc_adjust erms invpcid xsaveopt dtherm arat pln pts md_clear flush_l1d
bugs            <span class="token builtin class-name">:</span> cpu_meltdown spectre_v1 spectre_v2 spec_store_bypass l1tf mds swapgs itlb_multihit srbds
bogomips        <span class="token builtin class-name">:</span> <span class="token number">5986.10</span>
clflush size    <span class="token builtin class-name">:</span> <span class="token number">64</span>
cache_alignment <span class="token builtin class-name">:</span> <span class="token number">64</span>
address sizes   <span class="token builtin class-name">:</span> <span class="token number">39</span> bits physical, <span class="token number">48</span> bits virtual
power management:

processor       <span class="token builtin class-name">:</span> <span class="token number">1</span>
vendor_id       <span class="token builtin class-name">:</span> GenuineIntel
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5、-proc-crypto" tabindex="-1"><a class="header-anchor" href="#_2-5、-proc-crypto"><span>2.5、/proc/crypto</span></a></h3><p>系统上已安装的内核使用的密码算法及每个算法的详细信息列表；</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment">#  more /proc/crypto</span>
name         <span class="token builtin class-name">:</span> crct10dif
driver       <span class="token builtin class-name">:</span> crct10dif-pclmul
module       <span class="token builtin class-name">:</span> crct10dif_pclmul
priority     <span class="token builtin class-name">:</span> <span class="token number">200</span>
refcnt       <span class="token builtin class-name">:</span> <span class="token number">2</span>
selftest     <span class="token builtin class-name">:</span> passed
internal     <span class="token builtin class-name">:</span> no
<span class="token builtin class-name">type</span>         <span class="token builtin class-name">:</span> shash
blocksize    <span class="token builtin class-name">:</span> <span class="token number">1</span>
digestsize   <span class="token builtin class-name">:</span> <span class="token number">2</span>

name         <span class="token builtin class-name">:</span> crc32
driver       <span class="token builtin class-name">:</span> crc32-pclmul
module       <span class="token builtin class-name">:</span> crc32_pclmul
priority     <span class="token builtin class-name">:</span> <span class="token number">200</span>
refcnt       <span class="token builtin class-name">:</span> <span class="token number">1</span>
selftest     <span class="token builtin class-name">:</span> passed
internal     <span class="token builtin class-name">:</span> no
<span class="token builtin class-name">type</span>         <span class="token builtin class-name">:</span> shash
blocksize    <span class="token builtin class-name">:</span> <span class="token number">1</span>
digestsize   <span class="token builtin class-name">:</span> <span class="token number">4</span>

name         <span class="token builtin class-name">:</span> __ghash
driver       <span class="token builtin class-name">:</span> cryptd<span class="token punctuation">(</span>__ghash-pclmulqdqni<span class="token punctuation">)</span>
module       <span class="token builtin class-name">:</span> kernel
priority     <span class="token builtin class-name">:</span> <span class="token number">50</span>
refcnt       <span class="token builtin class-name">:</span> <span class="token number">1</span>
selftest     <span class="token builtin class-name">:</span> passed
internal     <span class="token builtin class-name">:</span> <span class="token function">yes</span>
<span class="token builtin class-name">type</span>         <span class="token builtin class-name">:</span> ahash
async        <span class="token builtin class-name">:</span> <span class="token function">yes</span>
blocksize    <span class="token builtin class-name">:</span> <span class="token number">16</span>
digestsize   <span class="token builtin class-name">:</span> <span class="token number">16</span>

name         <span class="token builtin class-name">:</span> ghash
driver       <span class="token builtin class-name">:</span> ghash-clmulni

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-6、-proc-devices" tabindex="-1"><a class="header-anchor" href="#_2-6、-proc-devices"><span>2.6、/proc/devices</span></a></h3><p>系统已经加载的所有块设备和字符设备的信息，包含主设备号和设备组（与主设备号对应的设备类型）名；</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment"># more  /proc/devices</span>
Character devices:
  <span class="token number">1</span> mem
  <span class="token number">4</span> /dev/vc/0
  <span class="token number">4</span> <span class="token function">tty</span>
  <span class="token number">4</span> ttyS
  <span class="token number">5</span> /dev/tty
  <span class="token number">5</span> /dev/console
  <span class="token number">5</span> /dev/ptmx
  <span class="token number">7</span> vcs
 <span class="token number">10</span> misc
 <span class="token number">13</span> input
 <span class="token number">14</span> sound
 <span class="token number">21</span> sg
 <span class="token number">29</span> fb
<span class="token number">116</span> alsa
<span class="token number">128</span> ptm
<span class="token number">136</span> pts
<span class="token number">162</span> raw
<span class="token number">180</span> usb
<span class="token number">188</span> ttyUSB
<span class="token number">189</span> usb_device
<span class="token number">202</span> cpu/msr
<span class="token number">203</span> cpu/cpuid
<span class="token number">226</span> drm
<span class="token number">241</span> mei
<span class="token number">242</span> cec
<span class="token number">243</span> aux
<span class="token number">244</span> ipmidev
<span class="token number">245</span> hidraw
<span class="token number">246</span> usbmon
<span class="token number">247</span> bsg
<span class="token number">248</span> watchdog
<span class="token number">249</span> ptp
<span class="token number">250</span> pps
<span class="token number">251</span> rtc
<span class="token number">252</span> dax
<span class="token number">253</span> tpm
<span class="token number">254</span> gpiochip

Block devices:
  <span class="token number">8</span> sd
  <span class="token number">9</span> md
 <span class="token number">65</span> sd
 <span class="token number">66</span> sd
 <span class="token number">67</span> sd
 <span class="token number">68</span> sd
 <span class="token number">69</span> sd
 <span class="token number">70</span> sd
 <span class="token number">71</span> sd
<span class="token number">128</span> sd
<span class="token number">129</span> sd
<span class="token number">130</span> sd
<span class="token number">131</span> sd
<span class="token number">132</span> sd
<span class="token number">133</span> sd
<span class="token number">134</span> sd
<span class="token number">135</span> sd
<span class="token number">253</span> device-mapper
<span class="token number">254</span> mdp
<span class="token number">259</span> blkext

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-7、-proc-diskstats" tabindex="-1"><a class="header-anchor" href="#_2-7、-proc-diskstats"><span>2.7、/proc/diskstats</span></a></h3><p>每块磁盘设备的磁盘I/O统计信息列表；（内核2.5.69以后的版本支持此功能）</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment">#  cat /proc/diskstats</span>
   <span class="token number">8</span>       <span class="token number">0</span> sda <span class="token number">2030</span> <span class="token number">584</span> <span class="token number">435506</span> <span class="token number">13205</span> <span class="token number">1116887</span> <span class="token number">1365054</span> <span class="token number">21010720</span> <span class="token number">7210996</span> <span class="token number">0</span> <span class="token number">6609766</span> <span class="token number">7224202</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span>
   <span class="token number">8</span>       <span class="token number">1</span> sda1 <span class="token number">1968</span> <span class="token number">584</span> <span class="token number">431752</span> <span class="token number">13111</span> <span class="token number">833468</span> <span class="token number">1365054</span> <span class="token number">21010720</span> <span class="token number">3229906</span> <span class="token number">0</span> <span class="token number">3099524</span> <span class="token number">3243017</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span>
   <span class="token number">8</span>      <span class="token number">16</span> sdb <span class="token number">141</span> <span class="token number">0</span> <span class="token number">9200</span> <span class="token number">155</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">168</span> <span class="token number">155</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span>
   <span class="token number">8</span>      <span class="token number">17</span> sdb1 <span class="token number">78</span> <span class="token number">0</span> <span class="token number">5406</span> <span class="token number">85</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">104</span> <span class="token number">85</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span>
   <span class="token number">8</span>      <span class="token number">32</span> sdc <span class="token number">12343</span> <span class="token number">1007</span> <span class="token number">2184181</span> <span class="token number">17347</span> <span class="token number">88066</span> <span class="token number">19976</span> <span class="token number">1915607</span> <span class="token number">273116</span> <span class="token number">0</span> <span class="token number">139805</span> <span class="token number">290463</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span>
   <span class="token number">8</span>      <span class="token number">33</span> sdc1 <span class="token number">439</span> <span class="token number">916</span> <span class="token number">12562</span> <span class="token number">361</span> <span class="token number">2</span> <span class="token number">0</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">0</span> <span class="token number">94</span> <span class="token number">364</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span>
   <span class="token number">8</span>      <span class="token number">34</span> sdc2 <span class="token number">227</span> <span class="token number">1</span> <span class="token number">88282</span> <span class="token number">1124</span> <span class="token number">10</span> <span class="token number">0</span> <span class="token number">4171</span> <span class="token number">32</span> <span class="token number">0</span> <span class="token number">349</span> <span class="token number">1157</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span>
   <span class="token number">8</span>      <span class="token number">35</span> sdc3 <span class="token number">11590</span> <span class="token number">90</span> <span class="token number">2078527</span> <span class="token number">15828</span> <span class="token number">72197</span> <span class="token number">19976</span> <span class="token number">1911434</span> <span class="token number">219617</span> <span class="token number">0</span> <span class="token number">94978</span> <span class="token number">235445</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span>
   <span class="token number">8</span>      <span class="token number">48</span> sdd <span class="token number">141</span> <span class="token number">0</span> <span class="token number">9200</span> <span class="token number">257</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">266</span> <span class="token number">257</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span>
   <span class="token number">8</span>      <span class="token number">49</span> sdd1 <span class="token number">78</span> <span class="token number">0</span> <span class="token number">5406</span> <span class="token number">84</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">103</span> <span class="token number">84</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span>
 <span class="token number">253</span>       <span class="token number">0</span> dm-0 <span class="token number">11204</span> <span class="token number">0</span> <span class="token number">2068823</span> <span class="token number">13161</span> <span class="token number">107843</span> <span class="token number">0</span> <span class="token number">1911434</span> <span class="token number">309011</span> <span class="token number">0</span> <span class="token number">139544</span> <span class="token number">322172</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span>
 <span class="token number">253</span>       <span class="token number">1</span> dm-1 <span class="token number">97</span> <span class="token number">0</span> <span class="token number">4184</span> <span class="token number">27</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">22</span> <span class="token number">27</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span>
 <span class="token number">253</span>       <span class="token number">2</span> dm-2 <span class="token number">2367</span> <span class="token number">0</span> <span class="token number">426138</span> <span class="token number">16314</span> <span class="token number">2481449</span> <span class="token number">0</span> <span class="token number">21010720</span> <span class="token number">8034669</span> <span class="token number">0</span> <span class="token number">6610107</span> <span class="token number">8050983</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-8、-proc-dma" tabindex="-1"><a class="header-anchor" href="#_2-8、-proc-dma"><span>2.8、/proc/dma</span></a></h3><p>每个正在使用且注册的ISA DMA通道的信息列表；</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment"># cat /proc/dma</span>
 <span class="token number">4</span>: cascade
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-9、-proc-execdomains" tabindex="-1"><a class="header-anchor" href="#_2-9、-proc-execdomains"><span>2.9、/proc/execdomains</span></a></h3><p>内核当前支持的执行域（每种操作系统独特“个性”）信息列表；</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment">#  more /proc/execdomains</span>
<span class="token number">0</span>-0     Linux                   <span class="token punctuation">[</span>kernel<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-10、-proc-fb" tabindex="-1"><a class="header-anchor" href="#_2-10、-proc-fb"><span>2.10、/proc/fb</span></a></h3><p>帧缓冲设备列表文件，包含帧缓冲设备的设备号和相关驱动信息；</p><h3 id="_2-11、-proc-filesystems" tabindex="-1"><a class="header-anchor" href="#_2-11、-proc-filesystems"><span>2.11、/proc/filesystems</span></a></h3><p>当前被内核支持的文件系统类型列表文件，被标示为nodev的文件系统表示不需要块设备的支持；通常mount一个设备时，如果没有指定文件系统类型将通过此文件来决定其所需文件系统的类型；</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment"># more /proc/filesystems</span>
nodev   sysfs
nodev   tmpfs
nodev   bdev
nodev   proc
nodev   cgroup
nodev   cgroup2
nodev   cpuset
nodev   devtmpfs
nodev   configfs
nodev   debugfs
nodev   tracefs
nodev   securityfs
nodev   sockfs
nodev   bpf
nodev   pipefs
nodev   ramfs
nodev   hugetlbfs
nodev   devpts
nodev   autofs
nodev   pstore
nodev   efivarfs
nodev   mqueue
        xfs
        fuseblk
nodev   fuse
nodev   fusectl
nodev   rpc_pipefs
nodev   nfsd
        vfat
        ext3
        ext2
        ext4
nodev   overlay
<span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-12、-proc-interrupts" tabindex="-1"><a class="header-anchor" href="#_2-12、-proc-interrupts"><span>2.12、/proc/interrupts</span></a></h3><p>X86或X86_64体系架构系统上每个IRQ相关的中断号列表；多路处理器平台上每个CPU对于每个I/O设备均有自己的中断号；</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment"># more /proc/interrupts</span>
           CPU0       CPU1
  <span class="token number">0</span>:         <span class="token number">12</span>          <span class="token number">0</span>   IO-APIC   <span class="token number">2</span>-edge      timer
  <span class="token number">8</span>:          <span class="token number">0</span>          <span class="token number">1</span>   IO-APIC   <span class="token number">8</span>-edge      rtc0
  <span class="token number">9</span>:          <span class="token number">0</span>          <span class="token number">5</span>   IO-APIC   <span class="token number">9</span>-fasteoi   acpi
 <span class="token number">16</span>:         <span class="token number">29</span>          <span class="token number">0</span>   IO-APIC  <span class="token number">16</span>-fasteoi   ehci_hcd:usb1
 <span class="token number">18</span>:          <span class="token number">0</span>          <span class="token number">0</span>   IO-APIC  <span class="token number">18</span>-fasteoi   i801_smbus
 <span class="token number">23</span>:          <span class="token number">0</span>         <span class="token number">33</span>   IO-APIC  <span class="token number">23</span>-fasteoi   ehci_hcd:usb2
 <span class="token number">24</span>:          <span class="token number">0</span>          <span class="token number">0</span>   PCI-MSI <span class="token number">458752</span>-edge      PCIe PME
 <span class="token number">25</span>:          <span class="token number">0</span>          <span class="token number">0</span>   PCI-MSI <span class="token number">460800</span>-edge      PCIe PME
 <span class="token number">26</span>:          <span class="token number">0</span>          <span class="token number">0</span>   PCI-MSI <span class="token number">327680</span>-edge      xhci_hcd
 <span class="token number">27</span>:        <span class="token number">449</span>    <span class="token number">6547313</span>   PCI-MSI <span class="token number">409600</span>-edge      eno1
 <span class="token number">28</span>:    <span class="token number">1489574</span>       <span class="token number">7248</span>   PCI-MSI <span class="token number">512000</span>-edge      ahci<span class="token punctuation">[</span>0000:00:1f.2<span class="token punctuation">]</span>
 <span class="token number">29</span>:         <span class="token number">41</span>          <span class="token number">0</span>   PCI-MSI <span class="token number">32768</span>-edge      i915
 <span class="token number">30</span>:          <span class="token number">0</span>         <span class="token number">23</span>   PCI-MSI <span class="token number">360448</span>-edge      mei_me
 <span class="token number">31</span>:          <span class="token number">0</span>        <span class="token number">241</span>   PCI-MSI <span class="token number">442368</span>-edge      snd_hda_intel:card0
NMI:        <span class="token number">724</span>        <span class="token number">731</span>   Non-maskable interrupts
LOC:  <span class="token number">109800211</span>  <span class="token number">109964191</span>   Local timer interrupts
SPU:          <span class="token number">0</span>          <span class="token number">0</span>   Spurious interrupts
PMI:        <span class="token number">724</span>        <span class="token number">731</span>   Performance monitoring interrupts
IWI:    <span class="token number">3605065</span>    <span class="token number">3593859</span>   IRQ work interrupts
RTR:          <span class="token number">1</span>          <span class="token number">0</span>   APIC ICR <span class="token builtin class-name">read</span> retries
RES:    <span class="token number">7980157</span>    <span class="token number">8085633</span>   Rescheduling interrupts
CAL:    <span class="token number">3924751</span>    <span class="token number">4032757</span>   Function call interrupts
TLB:    <span class="token number">3914417</span>    <span class="token number">4025149</span>   TLB shootdowns
TRM:          <span class="token number">0</span>          <span class="token number">0</span>   Thermal event interrupts
THR:          <span class="token number">0</span>          <span class="token number">0</span>   Threshold APIC interrupts
DFR:          <span class="token number">0</span>          <span class="token number">0</span>   Deferred Error APIC interrupts
MCE:          <span class="token number">0</span>          <span class="token number">0</span>   Machine check exceptions
MCP:       <span class="token number">1352</span>       <span class="token number">1353</span>   Machine check polls
HYP:          <span class="token number">0</span>          <span class="token number">0</span>   Hypervisor callback interrupts
HRE:          <span class="token number">0</span>          <span class="token number">0</span>   Hyper-V reenlightenment interrupts
HVS:          <span class="token number">0</span>          <span class="token number">0</span>   Hyper-V stimer0 interrupts
ERR:          <span class="token number">0</span>
MIS:          <span class="token number">0</span>
PIN:          <span class="token number">0</span>          <span class="token number">0</span>   Posted-interrupt notification event
NPI:          <span class="token number">0</span>          <span class="token number">0</span>   Nested posted-interrupt event
PIW:          <span class="token number">0</span>          <span class="token number">0</span>   Posted-interrupt wakeup event

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-13、-proc-iomem" tabindex="-1"><a class="header-anchor" href="#_2-13、-proc-iomem"><span>2.13、/proc/iomem</span></a></h3><p>每个物理设备上的记忆体（RAM或者ROM）在系统内存中的映射信息；</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment"># more /proc/iomem</span>
00000000-00000fff <span class="token builtin class-name">:</span> Reserved
00001000-00057fff <span class="token builtin class-name">:</span> System RAM
00058000-00058fff <span class="token builtin class-name">:</span> Reserved
00059000-0009efff <span class="token builtin class-name">:</span> System RAM
0009f000-0009ffff <span class="token builtin class-name">:</span> Reserved
000a0000-000bffff <span class="token builtin class-name">:</span> PCI Bus 0000:00
000c0000-000cebff <span class="token builtin class-name">:</span> Video ROM
000cf000-000cffff <span class="token builtin class-name">:</span> Adapter ROM
000d0000-000d0fff <span class="token builtin class-name">:</span> Adapter ROM
000d8000-000dbfff <span class="token builtin class-name">:</span> PCI Bus 0000:00
000dc000-000dffff <span class="token builtin class-name">:</span> PCI Bus 0000:00
000f0000-000fffff <span class="token builtin class-name">:</span> System ROM
00100000-d08b5fff <span class="token builtin class-name">:</span> System RAM
  bc600000-bd201400 <span class="token builtin class-name">:</span> Kernel code
  bd201401-be3ba6ff <span class="token builtin class-name">:</span> Kernel data
  be9fd000-bf7fffff <span class="token builtin class-name">:</span> Kernel bss
  c3000000-ceffffff <span class="token builtin class-name">:</span> Crash kernel
d08b6000-d08fbfff <span class="token builtin class-name">:</span> Reserved
d08fc000-d2eb0fff <span class="token builtin class-name">:</span> System RAM
d2eb1000-d2eb7fff <span class="token builtin class-name">:</span> ACPI Non-volatile Storage
d2eb8000-d32e7fff <span class="token builtin class-name">:</span> System RAM
d32e8000-d3752fff <span class="token builtin class-name">:</span> Reserved
d3753000-d5478017 <span class="token builtin class-name">:</span> System RAM
d5478018-d5481257 <span class="token builtin class-name">:</span> System RAM
d5481258-d5482017 <span class="token builtin class-name">:</span> System RAM
d5482018-d5492057 <span class="token builtin class-name">:</span> System RAM
d5492058-d7ed7fff <span class="token builtin class-name">:</span> System RAM
d7ed8000-d7ffffff <span class="token builtin class-name">:</span> Reserved
d8000000-d8760fff <span class="token builtin class-name">:</span> System RAM
d8761000-d87fffff <span class="token builtin class-name">:</span> Reserved
d8800000-d8faffff <span class="token builtin class-name">:</span> System RAM
d8fb0000-d8ffffff <span class="token builtin class-name">:</span> ACPI Tables
d9000000-da71ffff <span class="token builtin class-name">:</span> System RAM
da720000-da7fffff <span class="token builtin class-name">:</span> ACPI Non-volatile Storage
da800000-dbe0bfff <span class="token builtin class-name">:</span> System RAM
dbe0c000-dbffffff <span class="token builtin class-name">:</span> Reserved
  dbf79018-dbf7903e <span class="token builtin class-name">:</span> APEI ERST
  dbf7903f-dbf7b03e <span class="token builtin class-name">:</span> APEI ERST
dd000000-df1fffff <span class="token builtin class-name">:</span> Reserved
  dd200000-df1fffff <span class="token builtin class-name">:</span> Graphics Stolen Memory
df200000-feafffff <span class="token builtin class-name">:</span> PCI Bus 0000:00
  df200000-df200fff <span class="token builtin class-name">:</span> pnp 00:07
  e0000000-efffffff <span class="token builtin class-name">:</span> 0000:00:02.0
  f7800000-f7bfffff <span class="token builtin class-name">:</span> 0000:00:02.0
  f7c00000-f7c1ffff <span class="token builtin class-name">:</span> 0000:00:19.0
    f7c00000-f7c1ffff <span class="token builtin class-name">:</span> e1000e
  f7c20000-f7c2ffff <span class="token builtin class-name">:</span> 0000:00:14.0
    f7c20000-f7c2ffff <span class="token builtin class-name">:</span> xhci-hcd
  f7c30000-f7c33fff <span class="token builtin class-name">:</span> 0000:00:1b.0
    f7c30000-f7c33fff <span class="token builtin class-name">:</span> ICH HD audio
  f7c35000-f7c350ff <span class="token builtin class-name">:</span> 0000:00:1f.3
  f7c36000-f7c367ff <span class="token builtin class-name">:</span> 0000:00:1f.2
    f7c36000-f7c367ff <span class="token builtin class-name">:</span> ahci
  f7c37000-f7c373ff <span class="token builtin class-name">:</span> 0000:00:1d.0
    f7c37000-f7c373ff <span class="token builtin class-name">:</span> ehci_hcd
  f7c38000-f7c383ff <span class="token builtin class-name">:</span> 0000:00:1a.0
    f7c38000-f7c383ff <span class="token builtin class-name">:</span> ehci_hcd
  f7c39000-f7c39fff <span class="token builtin class-name">:</span> 0000:00:19.0
    f7c39000-f7c39fff <span class="token builtin class-name">:</span> e1000e
  f7c3c000-f7c3c00f <span class="token builtin class-name">:</span> 0000:00:16.0
    f7c3c000-f7c3c00f <span class="token builtin class-name">:</span> mei_me
  f7ff0000-f7ff0fff <span class="token builtin class-name">:</span> pnp 00:07
  f8000000-fbffffff <span class="token builtin class-name">:</span> PCI MMCONFIG 0000 <span class="token punctuation">[</span>bus 00-3f<span class="token punctuation">]</span>
    f8000000-fbffffff <span class="token builtin class-name">:</span> Reserved
      f8000000-fbffffff <span class="token builtin class-name">:</span> pnp 00:07
fec00000-fec00fff <span class="token builtin class-name">:</span> Reserved
  fec00000-fec003ff <span class="token builtin class-name">:</span> IOAPIC <span class="token number">0</span>
fed00000-fed03fff <span class="token builtin class-name">:</span> Reserved
  fed00000-fed003ff <span class="token builtin class-name">:</span> HPET <span class="token number">0</span>
    fed00000-fed003ff <span class="token builtin class-name">:</span> PNP0103:00
fed10000-fed17fff <span class="token builtin class-name">:</span> pnp 00:07
fed18000-fed18fff <span class="token builtin class-name">:</span> pnp 00:07
fed19000-fed19fff <span class="token builtin class-name">:</span> pnp 00:07
fed1c000-fed1ffff <span class="token builtin class-name">:</span> Reserved
  fed1c000-fed1ffff <span class="token builtin class-name">:</span> pnp 00:07
    fed1f410-fed1f414 <span class="token builtin class-name">:</span> iTCO_wdt.0.auto
      fed1f410-fed1f414 <span class="token builtin class-name">:</span> iTCO_wdt.0.auto iTCO_wdt.0.auto
    fed1f800-fed1f9ff <span class="token builtin class-name">:</span> intel-spi
fed20000-fed3ffff <span class="token builtin class-name">:</span> pnp 00:07
fed40000-fed44fff <span class="token builtin class-name">:</span> pnp 00:00
fed45000-fed8ffff <span class="token builtin class-name">:</span> pnp 00:07
fed90000-fed93fff <span class="token builtin class-name">:</span> pnp 00:07
fee00000-fee00fff <span class="token builtin class-name">:</span> Local APIC
  fee00000-fee00fff <span class="token builtin class-name">:</span> Reserved
ff000000-ffffffff <span class="token builtin class-name">:</span> Reserved
  ff000000-ffffffff <span class="token builtin class-name">:</span> INT0800:00
    ff000000-ffffffff <span class="token builtin class-name">:</span> pnp 00:07
<span class="token number">100000000</span>-11edfffff <span class="token builtin class-name">:</span> System RAM
11ee00000-11fffffff <span class="token builtin class-name">:</span> RAM buffer
<span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment">#</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-14、-proc-ioports" tabindex="-1"><a class="header-anchor" href="#_2-14、-proc-ioports"><span>2.14、/proc/ioports</span></a></h3><p>当前正在使用且已经注册过的与物理设备进行通讯的输入-输出端口范围信息列表；如下面所示，第一列表示注册的I/O端口范围，其后表示相关的设备；</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment"># cat /proc/ioports</span>
0000-0cf7 <span class="token builtin class-name">:</span> PCI Bus 0000:00
  0000-001f <span class="token builtin class-name">:</span> dma1
  0020-0021 <span class="token builtin class-name">:</span> pic1
  0040-0043 <span class="token builtin class-name">:</span> timer0
  0050-0053 <span class="token builtin class-name">:</span> timer1
  0060-0060 <span class="token builtin class-name">:</span> keyboard
  0064-0064 <span class="token builtin class-name">:</span> keyboard
  0070-0077 <span class="token builtin class-name">:</span> rtc0
  0080-008f <span class="token builtin class-name">:</span> dma page reg
  00a0-00a1 <span class="token builtin class-name">:</span> pic2
  00b2-00b2 <span class="token builtin class-name">:</span> APEI ERST
  00c0-00df <span class="token builtin class-name">:</span> dma2
  00f0-00ff <span class="token builtin class-name">:</span> fpu
    00f0-00f0 <span class="token builtin class-name">:</span> PNP0C04:00
  03f8-03ff <span class="token builtin class-name">:</span> serial
  04d0-04d1 <span class="token builtin class-name">:</span> pnp 00:05
  0680-069f <span class="token builtin class-name">:</span> pnp 00:01
  0a00-0a0f <span class="token builtin class-name">:</span> pnp 00:04
0cf8-0cff <span class="token builtin class-name">:</span> PCI conf1
0d00-ffff <span class="token builtin class-name">:</span> PCI Bus 0000:00
  164e-164f <span class="token builtin class-name">:</span> pnp 00:01
  <span class="token number">1800</span>-18fe <span class="token builtin class-name">:</span> pnp 00:01
    <span class="token number">1800</span>-1803 <span class="token builtin class-name">:</span> ACPI PM1a_EVT_BLK
    <span class="token number">1804</span>-1805 <span class="token builtin class-name">:</span> ACPI PM1a_CNT_BLK
    <span class="token number">1808</span>-180b <span class="token builtin class-name">:</span> ACPI PM_TMR
    <span class="token number">1820</span>-182f <span class="token builtin class-name">:</span> ACPI GPE0_BLK
    <span class="token number">1830</span>-1833 <span class="token builtin class-name">:</span> iTCO_wdt.0.auto
      <span class="token number">1830</span>-1833 <span class="token builtin class-name">:</span> iTCO_wdt
    <span class="token number">1850</span>-1850 <span class="token builtin class-name">:</span> ACPI PM2_CNT_BLK
    <span class="token number">1854</span>-1857 <span class="token builtin class-name">:</span> pnp 00:03
    <span class="token number">1860</span>-187f <span class="token builtin class-name">:</span> iTCO_wdt.0.auto
      <span class="token number">1860</span>-187f <span class="token builtin class-name">:</span> iTCO_wdt
  1c00-1cfe <span class="token builtin class-name">:</span> pnp 00:01
  1d00-1dfe <span class="token builtin class-name">:</span> pnp 00:01
  1e00-1efe <span class="token builtin class-name">:</span> pnp 00:01
  1f00-1ffe <span class="token builtin class-name">:</span> pnp 00:01
  f000-f03f <span class="token builtin class-name">:</span> 0000:00:02.0
  f040-f05f <span class="token builtin class-name">:</span> 0000:00:1f.3
    f040-f05f <span class="token builtin class-name">:</span> i801_smbus
  f060-f07f <span class="token builtin class-name">:</span> 0000:00:1f.2
    f060-f07f <span class="token builtin class-name">:</span> ahci
  f080-f09f <span class="token builtin class-name">:</span> 0000:00:19.0
  f0a0-f0a3 <span class="token builtin class-name">:</span> 0000:00:1f.2
    f0a0-f0a3 <span class="token builtin class-name">:</span> ahci
  f0b0-f0b7 <span class="token builtin class-name">:</span> 0000:00:1f.2
    f0b0-f0b7 <span class="token builtin class-name">:</span> ahci
  f0c0-f0c3 <span class="token builtin class-name">:</span> 0000:00:1f.2
    f0c0-f0c3 <span class="token builtin class-name">:</span> ahci
  f0d0-f0d7 <span class="token builtin class-name">:</span> 0000:00:1f.2
    f0d0-f0d7 <span class="token builtin class-name">:</span> ahci
  ffff-ffff <span class="token builtin class-name">:</span> pnp 00:01
    ffff-ffff <span class="token builtin class-name">:</span> pnp 00:01
      ffff-ffff <span class="token builtin class-name">:</span> pnp 00:01

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-15、-proc-kallsyms" tabindex="-1"><a class="header-anchor" href="#_2-15、-proc-kallsyms"><span>2.15、/proc/kallsyms</span></a></h3><p>模块管理工具用来动态链接或绑定可装载模块的符号定义，由内核输出；（内核2.5.71以后的版本支持此功能）；通常这个文件中的信息量相当大；</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment"># head /proc/kallsyms</span>
0000000000000000 A fixed_percpu_data
0000000000000000 A __per_cpu_start
0000000000001000 A cpu_debug_store
0000000000002000 A irq_stack_backing_store
0000000000006000 A cpu_tss_rw
0000000000009000 A gdt_page
000000000000a000 A exception_stacks
000000000000e000 A entry_stack_storage
000000000000f000 A espfix_waddr
000000000000f008 A espfix_stack
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-16、-proc-kcore" tabindex="-1"><a class="header-anchor" href="#_2-16、-proc-kcore"><span>2.16、/proc/kcore</span></a></h3><p>系统使用的物理内存，以ELF核心文件（core file）格式存储，其文件大小为已使用的物理内存（RAM）加上4KB；这个文件用来检查内核数据结构的当前状态，因此，通常由GBD通常调试工具使用，但不能使用文件查看命令打开此文件；</p><h3 id="_2-17、-proc-kmsg" tabindex="-1"><a class="header-anchor" href="#_2-17、-proc-kmsg"><span>2.17、/proc/kmsg</span></a></h3><p>此文件用来保存由内核输出的信息，通常由/sbin/klogd或/bin/dmsg等程序使用，<strong>不要试图使用查看命令打开此文件</strong>；</p><h3 id="_2-18、-proc-loadavg" tabindex="-1"><a class="header-anchor" href="#_2-18、-proc-loadavg"><span>2.18、/proc/loadavg</span></a></h3><p>保存关于CPU和磁盘I/O的负载平均值，其前三列分别表示每1秒钟、每5秒钟及每15秒的负载平均值，类似于uptime命令输出的相关信息；第四列是由斜线隔开的两个数值，前者表示当前正由内核调度的实体（进程和线程）的数目，后者表示系统当前存活的内核调度实体的数目；第五列表示此文件被查看前最近一个由内核创建的进程的PID；</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment"># more /proc/loadavg</span>
<span class="token number">0.02</span> <span class="token number">0.02</span> <span class="token number">0.00</span> <span class="token number">1</span>/261 <span class="token number">2993987</span>
<span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment">#</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-19、-proc-locks" tabindex="-1"><a class="header-anchor" href="#_2-19、-proc-locks"><span>2.19、/proc/locks</span></a></h3><p>保存当前由内核锁定的文件的相关信息，包含内核内部的调试数据；每个锁定占据一行，且具有一个惟一的编号；如下输出信息中每行的第二列表示当前锁定使用的锁定类别，</p><p>POSIX表示目前较新类型的文件锁，由lockf系统调用产生，</p><p>FLOCK是传统的UNIX文件锁，由flock系统调用产生；第三列也通常由两种类型，</p><p>ADVISORY表示不允许其他用户锁定此文件，但允许读取，</p><p>MANDATORY表示此文件锁定期间不允许其他用户任何形式的访问；</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment"># more /proc/locks</span>
<span class="token number">1</span>: DELEG  ACTIVE    READ  <span class="token number">1365</span> fd:02:141822312 <span class="token number">0</span> EOF
<span class="token number">2</span>: DELEG  ACTIVE    READ  <span class="token number">1365</span> fd:02:141821961 <span class="token number">0</span> EOF
<span class="token number">3</span>: DELEG  ACTIVE    READ  <span class="token number">1365</span> fd:02:141821962 <span class="token number">0</span> EOF
<span class="token number">4</span>: DELEG  ACTIVE    READ  <span class="token number">1365</span> fd:02:141822313 <span class="token number">0</span> EOF
<span class="token number">5</span>: DELEG  ACTIVE    READ  <span class="token number">1365</span> fd:02:141821670 <span class="token number">0</span> EOF
<span class="token number">6</span>: DELEG  ACTIVE    READ  <span class="token number">1365</span> fd:02:141821671 <span class="token number">0</span> EOF
<span class="token number">7</span>: DELEG  ACTIVE    READ  <span class="token number">1365</span> fd:02:141558759 <span class="token number">0</span> EOF
<span class="token number">8</span>: DELEG  ACTIVE    READ  <span class="token number">1365</span> fd:02:141558745 <span class="token number">0</span> EOF
<span class="token number">9</span>: FLOCK  ADVISORY  WRITE <span class="token number">1194</span> fd:00:794298 <span class="token number">0</span> EOF
<span class="token number">10</span>: FLOCK  ADVISORY  WRITE <span class="token number">1194</span> fd:00:794297 <span class="token number">0</span> EOF
<span class="token number">11</span>: FLOCK  ADVISORY  WRITE <span class="token number">1194</span> fd:00:794296 <span class="token number">0</span> EOF
<span class="token number">12</span>: FLOCK  ADVISORY  WRITE <span class="token number">1194</span> fd:00:794295 <span class="token number">0</span> EOF
<span class="token number">13</span>: FLOCK  ADVISORY  WRITE <span class="token number">962</span> fd:00:134731997 <span class="token number">0</span> EOF
<span class="token number">14</span>: FLOCK  ADVISORY  WRITE <span class="token number">1001</span> 00:18:30203 <span class="token number">0</span> EOF
<span class="token number">15</span>: POSIX  ADVISORY  WRITE <span class="token number">979</span> fd:00:202493831 <span class="token number">0</span> <span class="token number">0</span>
<span class="token number">16</span>: DELEG  ACTIVE    READ  <span class="token number">1365</span> fd:02:141822717 <span class="token number">0</span> EOF
<span class="token number">17</span>: DELEG  ACTIVE    READ  <span class="token number">1365</span> fd:02:141822510 <span class="token number">0</span> EOF
<span class="token number">18</span>: DELEG  ACTIVE    READ  <span class="token number">1365</span> fd:02:141822451 <span class="token number">0</span> EOF
<span class="token number">19</span>: DELEG  ACTIVE    READ  <span class="token number">1365</span> fd:02:141822720 <span class="token number">0</span> EOF
<span class="token number">20</span>: FLOCK  ADVISORY  WRITE <span class="token number">1194</span> fd:00:202556082 <span class="token number">0</span> EOF
<span class="token number">21</span>: POSIX  ADVISORY  WRITE <span class="token number">979</span> fd:00:202493826 <span class="token number">0</span> <span class="token number">0</span>
<span class="token number">22</span>: POSIX  ADVISORY  WRITE <span class="token number">979</span> fd:00:202493824 <span class="token number">0</span> <span class="token number">0</span>
<span class="token number">23</span>: FLOCK  ADVISORY  WRITE <span class="token number">856</span> 00:18:25427 <span class="token number">0</span> EOF
<span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment">#</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-20、-proc-mdstat" tabindex="-1"><a class="header-anchor" href="#_2-20、-proc-mdstat"><span>2.20、/proc/mdstat</span></a></h3><p>保存RAID相关的多块磁盘的当前状态信息，在没有使用RAID机器上，其显示为如下状态：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment"># cat /proc/mdstat</span>
Personalities <span class="token builtin class-name">:</span>
unused devices: <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-21、-proc-meminfo" tabindex="-1"><a class="header-anchor" href="#_2-21、-proc-meminfo"><span>2.21、/proc/meminfo</span></a></h3><p>系统中关于当前内存的利用状况等的信息，常由free命令使用；可以使用文件查看命令直接读取此文件，其内容显示为两列，前者为统计属性，后者为对应的值；</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment"># cat /proc/meminfo</span>
MemTotal:        <span class="token number">3727476</span> kB
MemFree:          <span class="token number">385664</span> kB
MemAvailable:    <span class="token number">2765716</span> kB
Buffers:          <span class="token number">966540</span> kB
Cached:          <span class="token number">1732128</span> kB
SwapCached:            <span class="token number">0</span> kB
Active:          <span class="token number">1568884</span> kB
Inactive:        <span class="token number">1482712</span> kB
Active<span class="token punctuation">(</span>anon<span class="token punctuation">)</span>:     <span class="token number">120000</span> kB
Inactive<span class="token punctuation">(</span>anon<span class="token punctuation">)</span>:   <span class="token number">413684</span> kB
Active<span class="token punctuation">(</span>file<span class="token punctuation">)</span>:    <span class="token number">1448884</span> kB
Inactive<span class="token punctuation">(</span>file<span class="token punctuation">)</span>:  <span class="token number">1069028</span> kB
Unevictable:         <span class="token number">136</span> kB
Mlocked:               <span class="token number">0</span> kB
SwapTotal:             <span class="token number">0</span> kB
SwapFree:              <span class="token number">0</span> kB
Dirty:                <span class="token number">36</span> kB
Writeback:             <span class="token number">0</span> kB
AnonPages:        <span class="token number">336668</span> kB
Mapped:           <span class="token number">332412</span> kB
Shmem:            <span class="token number">180752</span> kB
KReclaimable:     <span class="token number">128016</span> kB
Slab:             <span class="token number">177308</span> kB
SReclaimable:     <span class="token number">128016</span> kB
SUnreclaim:        <span class="token number">49292</span> kB
KernelStack:        <span class="token number">4180</span> kB
PageTables:        <span class="token number">10372</span> kB
NFS_Unstable:          <span class="token number">0</span> kB
Bounce:                <span class="token number">0</span> kB
WritebackTmp:          <span class="token number">0</span> kB
CommitLimit:     <span class="token number">1863736</span> kB
Committed_AS:    <span class="token number">1403452</span> kB
VmallocTotal:   <span class="token number">34359738367</span> kB
VmallocUsed:           <span class="token number">0</span> kB
VmallocChunk:          <span class="token number">0</span> kB
Percpu:             <span class="token number">2656</span> kB
HardwareCorrupted:     <span class="token number">0</span> kB
AnonHugePages:    <span class="token number">176128</span> kB
ShmemHugePages:        <span class="token number">0</span> kB
ShmemPmdMapped:        <span class="token number">0</span> kB
FileHugePages:         <span class="token number">0</span> kB
FilePmdMapped:         <span class="token number">0</span> kB
HugePages_Total:       <span class="token number">0</span>
HugePages_Free:        <span class="token number">0</span>
HugePages_Rsvd:        <span class="token number">0</span>
HugePages_Surp:        <span class="token number">0</span>
Hugepagesize:       <span class="token number">2048</span> kB
Hugetlb:               <span class="token number">0</span> kB
DirectMap4k:      <span class="token number">150156</span> kB
DirectMap2M:     <span class="token number">3950592</span> kB
DirectMap1G:           <span class="token number">0</span> kB

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-22、-proc-mounts" tabindex="-1"><a class="header-anchor" href="#_2-22、-proc-mounts"><span>2.22、/proc/mounts</span></a></h3><p>在内核2.4.29版本以前，此文件的内容为系统当前挂载的所有文件系统，在2.4.19以后的内核中引进了每个进程使用独立挂载名称空间的方式，此文件则随之变成了指向/proc/self/mounts（每个进程自身挂载名称空间中的所有挂载点列表）文件的符号链接；/proc/self是一个独特的目录，后文中会对此目录进行介绍；</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment">#  ll /proc |grep mount</span>
lrwxrwxrwx  <span class="token number">1</span> root    root                 <span class="token number">11</span> Sep  <span class="token number">4</span> 07:54 mounts -<span class="token operator">&gt;</span> self/mounts

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如下所示，其中第一列表示挂载的设备，第二列表示在当前目录树中的挂载点，第三点表示当前文件系统的类型，第四列表示挂载属性（ro或者rw），第五列和第六列用来匹配/etc/mtab文件中的转储（dump）属性；</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment"># more /proc/mounts</span>
sysfs /sys sysfs rw,nosuid,nodev,noexec,relatime <span class="token number">0</span> <span class="token number">0</span>
proc /proc proc rw,nosuid,nodev,noexec,relatime <span class="token number">0</span> <span class="token number">0</span>
devtmpfs /dev devtmpfs rw,nosuid,size<span class="token operator">=</span>1842060k,nr_inodes<span class="token operator">=</span><span class="token number">460515</span>,mode<span class="token operator">=</span><span class="token number">755</span> <span class="token number">0</span> <span class="token number">0</span>
securityfs /sys/kernel/security securityfs rw,nosuid,nodev,noexec,relatime <span class="token number">0</span> <span class="token number">0</span>
tmpfs /dev/shm tmpfs rw,nosuid,nodev <span class="token number">0</span> <span class="token number">0</span>
devpts /dev/pts devpts rw,nosuid,noexec,relatime,gid<span class="token operator">=</span><span class="token number">5</span>,mode<span class="token operator">=</span><span class="token number">620</span>,ptmxmode<span class="token operator">=</span>000 <span class="token number">0</span> <span class="token number">0</span>
tmpfs /run tmpfs rw,nosuid,nodev,mode<span class="token operator">=</span><span class="token number">755</span> <span class="token number">0</span> <span class="token number">0</span>
tmpfs /sys/fs/cgroup tmpfs ro,nosuid,nodev,noexec,mode<span class="token operator">=</span><span class="token number">755</span> <span class="token number">0</span> <span class="token number">0</span>
cgroup /sys/fs/cgroup/systemd cgroup rw,nosuid,nodev,noexec,relatime,xattr,release_agent<span class="token operator">=</span>/usr/lib/systemd/systemd-cgroups-agent,name<span class="token operator">=</span>systemd <span class="token number">0</span> <span class="token number">0</span>
pstore /sys/fs/pstore pstore rw,nosuid,nodev,noexec,relatime <span class="token number">0</span> <span class="token number">0</span>
efivarfs /sys/firmware/efi/efivars efivarfs rw,nosuid,nodev,noexec,relatime <span class="token number">0</span> <span class="token number">0</span>
bpf /sys/fs/bpf bpf rw,nosuid,nodev,noexec,relatime,mode<span class="token operator">=</span><span class="token number">700</span> <span class="token number">0</span> <span class="token number">0</span>
cgroup /sys/fs/cgroup/perf_event cgroup rw,nosuid,nodev,noexec,relatime,perf_event <span class="token number">0</span> <span class="token number">0</span>
cgroup /sys/fs/cgroup/cpuset cgroup rw,nosuid,nodev,noexec,relatime,cpuset <span class="token number">0</span> <span class="token number">0</span>
cgroup /sys/fs/cgroup/devices cgroup rw,nosuid,nodev,noexec,relatime,devices <span class="token number">0</span> <span class="token number">0</span>
cgroup /sys/fs/cgroup/blkio cgroup rw,nosuid,nodev,noexec,relatime,blkio <span class="token number">0</span> <span class="token number">0</span>
cgroup /sys/fs/cgroup/pids cgroup rw,nosuid,nodev,noexec,relatime,pids <span class="token number">0</span> <span class="token number">0</span>
cgroup /sys/fs/cgroup/hugetlb cgroup rw,nosuid,nodev,noexec,relatime,hugetlb <span class="token number">0</span> <span class="token number">0</span>
cgroup /sys/fs/cgroup/net_cls,net_prio cgroup rw,nosuid,nodev,noexec,relatime,net_cls,net_prio <span class="token number">0</span> <span class="token number">0</span>
cgroup /sys/fs/cgroup/memory cgroup rw,nosuid,nodev,noexec,relatime,memory <span class="token number">0</span> <span class="token number">0</span>
cgroup /sys/fs/cgroup/cpu,cpuacct cgroup rw,nosuid,nodev,noexec,relatime,cpu,cpuacct <span class="token number">0</span> <span class="token number">0</span>
cgroup /sys/fs/cgroup/freezer cgroup rw,nosuid,nodev,noexec,relatime,freezer <span class="token number">0</span> <span class="token number">0</span>
cgroup /sys/fs/cgroup/rdma cgroup rw,nosuid,nodev,noexec,relatime,rdma <span class="token number">0</span> <span class="token number">0</span>
none /sys/kernel/tracing tracefs rw,relatime <span class="token number">0</span> <span class="token number">0</span>
configfs /sys/kernel/config configfs rw,relatime <span class="token number">0</span> <span class="token number">0</span>
/dev/mapper/rl-root / xfs rw,relatime,attr2,inode64,logbufs<span class="token operator">=</span><span class="token number">8</span>,logbsize<span class="token operator">=</span>32k,noquota <span class="token number">0</span> <span class="token number">0</span>
systemd-1 /proc/sys/fs/binfmt_misc autofs rw,relatime,fd<span class="token operator">=</span><span class="token number">28</span>,pgrp<span class="token operator">=</span><span class="token number">1</span>,timeout<span class="token operator">=</span><span class="token number">0</span>,minproto<span class="token operator">=</span><span class="token number">5</span>,maxproto<span class="token operator">=</span><span class="token number">5</span>,direct,pipe_ino<span class="token operator">=</span><span class="token number">20750</span> <span class="token number">0</span> <span class="token number">0</span>
mqueue /dev/mqueue mqueue rw,relatime <span class="token number">0</span> <span class="token number">0</span>
hugetlbfs /dev/hugepages hugetlbfs rw,relatime,pagesize<span class="token operator">=</span>2M <span class="token number">0</span> <span class="token number">0</span>
debugfs /sys/kernel/debug debugfs rw,relatime <span class="token number">0</span> <span class="token number">0</span>
fusectl /sys/fs/fuse/connections fusectl rw,relatime <span class="token number">0</span> <span class="token number">0</span>
nfsd /proc/fs/nfsd nfsd rw,relatime <span class="token number">0</span> <span class="token number">0</span>
/dev/sdc2 /boot xfs rw,relatime,attr2,inode64,logbufs<span class="token operator">=</span><span class="token number">8</span>,logbsize<span class="token operator">=</span>32k,noquota <span class="token number">0</span> <span class="token number">0</span>
/dev/sdc1 /boot/efi vfat rw,relatime,fmask<span class="token operator">=</span>0077,dmask<span class="token operator">=</span>0077,codepage<span class="token operator">=</span><span class="token number">437</span>,iocharset<span class="token operator">=</span>ascii,shortname<span class="token operator">=</span>winnt,errors<span class="token operator">=</span>remount-ro <span class="token number">0</span> <span class="token number">0</span>
/dev/mapper/data--storge--vg-data--storge--lv /data/nfs ext4 rw,relatime <span class="token number">0</span> <span class="token number">0</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-23、-proc-modules" tabindex="-1"><a class="header-anchor" href="#_2-23、-proc-modules"><span>2.23、/proc/modules</span></a></h3><p>当前装入内核的所有模块名称列表，可以由lsmod命令使用，也可以直接查看；如下所示</p><p>第一列表示模块名，</p><p>第二列表示此模块占用内存空间大小，</p><p>第三列表示此模块有多少实例被装入，</p><p>第四列表示此模块依赖于其它哪些模块，</p><p>第五列表示此模块的装载状态（Live：已经装入；Loading：正在装入；Unloading：正在卸载），</p><p>第六列表示此模块在内核内存（kernel memory）中的偏移量；</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment"># more /proc/modules</span>
xt_statistic <span class="token number">16384</span> <span class="token number">6</span> - Live 0xffffffffc0e4a000
xt_nat <span class="token number">16384</span> <span class="token number">11</span> - Live 0xffffffffc0e45000
ipt_REJECT <span class="token number">16384</span> <span class="token number">0</span> - Live 0xffffffffc0e40000
nf_reject_ipv4 <span class="token number">16384</span> <span class="token number">1</span> ipt_REJECT, Live 0xffffffffc0cd8000
ip_set <span class="token number">49152</span> <span class="token number">0</span> - Live 0xffffffffc0ccb000
ip_vs_sh <span class="token number">16384</span> <span class="token number">0</span> - Live 0xffffffffc0cc3000
ip_vs_wrr <span class="token number">16384</span> <span class="token number">0</span> - Live 0xffffffffc0cbb000
ip_vs_rr <span class="token number">16384</span> <span class="token number">0</span> - Live 0xffffffffc0cb6000
ip_vs <span class="token number">172032</span> <span class="token number">6</span> ip_vs_sh,ip_vs_wrr,ip_vs_rr, Live 0xffffffffc0e15000
ip6t_MASQUERADE <span class="token number">16384</span> <span class="token number">1</span> - Live 0xffffffffc0cb1000
xt_comment <span class="token number">16384</span> <span class="token number">80</span> - Live 0xffffffffc0cac000
xt_mark <span class="token number">16384</span> <span class="token number">12</span> - Live 0xffffffffc0a5d000
xt_conntrack <span class="token number">16384</span> <span class="token number">14</span> - Live 0xffffffffc0e10000
ipt_MASQUERADE <span class="token number">16384</span> <span class="token number">4</span> - Live 0xffffffffc0e0b000
nf_conntrack_netlink <span class="token number">49152</span> <span class="token number">0</span> - Live 0xffffffffc0dfe000
nft_counter <span class="token number">16384</span> <span class="token number">109</span> - Live 0xffffffffc0df9000
xt_addrtype <span class="token number">16384</span> <span class="token number">4</span> - Live 0xffffffffc0df4000
nft_compat <span class="token number">20480</span> <span class="token number">155</span> - Live 0xffffffffc0ddf000
nft_chain_nat <span class="token number">16384</span> <span class="token number">8</span> - Live 0xffffffffc0dda000
nf_nat <span class="token number">45056</span> <span class="token number">4</span> xt_nat,ip6t_MASQUERADE,ipt_MASQUERADE,nft_chain_nat, Live 0xffffffffc0de8000
nf_conntrack <span class="token number">172032</span> <span class="token number">7</span> xt_nat,ip_vs,ip6t_MASQUERADE,xt_conntrack,ipt_MASQUERADE,nf_conntrack_netlink,nf_nat, Live 0xffffffffc0daf000
nf_defrag_ipv6 <span class="token number">20480</span> <span class="token number">2</span> ip_vs,nf_conntrack, Live 0xffffffffc0d71000
nf_defrag_ipv4 <span class="token number">16384</span> <span class="token number">1</span> nf_conntrack, Live 0xffffffffc0d6c000
nf_tables <span class="token number">180224</span> <span class="token number">248</span> nft_counter,nft_compat,nft_chain_nat, Live 0xffffffffc0d7e000
nfnetlink <span class="token number">16384</span> <span class="token number">5</span> ip_set,nf_conntrack_netlink,nft_compat,nf_tables, Live 0xffffffffc0d67000
br_netfilter <span class="token number">24576</span> <span class="token number">0</span> - Live 0xffffffffc0d77000
bridge <span class="token number">278528</span> <span class="token number">1</span> br_netfilter, Live 0xffffffffc0d22000
stp <span class="token number">16384</span> <span class="token number">1</span> bridge, Live 0xffffffffc0d1d000
llc <span class="token number">16384</span> <span class="token number">2</span> bridge,stp, Live 0xffffffffc0d14000
overlay <span class="token number">139264</span> <span class="token number">4</span> - Live 0xffffffffc0c89000
ext4 <span class="token number">761856</span> <span class="token number">1</span> - Live 0xffffffffc0bce000
vfat <span class="token number">20480</span> <span class="token number">1</span> - Live 0xffffffffc0a55000
fat <span class="token number">81920</span> <span class="token number">1</span> vfat, Live 0xffffffffc0bb9000
mbcache <span class="token number">16384</span> <span class="token number">1</span> ext4, Live 0xffffffffc0a33000
jbd2 <span class="token number">131072</span> <span class="token number">1</span> ext4, Live 0xffffffffc0b98000
intel_rapl_msr <span class="token number">16384</span> <span class="token number">0</span> - Live 0xffffffffc0a50000
intel_rapl_common <span class="token number">24576</span> <span class="token number">1</span> intel_rapl_msr, Live 0xffffffffc0a3d000
x86_pkg_temp_thermal <span class="token number">16384</span> <span class="token number">0</span> - Live 0xffffffffc0a38000
intel_powerclamp <span class="token number">16384</span> <span class="token number">0</span> - Live 0xffffffffc0a2e000
coretemp <span class="token number">16384</span> <span class="token number">0</span> - Live 0xffffffffc0a29000
kvm_intel <span class="token number">339968</span> <span class="token number">0</span> - Live 0xffffffffc0b44000
kvm <span class="token number">905216</span> <span class="token number">1</span> kvm_intel, Live 0xffffffffc0a66000
snd_hda_codec_realtek <span class="token number">147456</span> <span class="token number">1</span> - Live 0xffffffffc0a04000
snd_hda_codec_generic <span class="token number">86016</span> <span class="token number">1</span> snd_hda_codec_realtek, Live 0xffffffffc09ee000
iTCO_wdt <span class="token number">16384</span> <span class="token number">0</span> - Live 0xffffffffc09e9000
ledtrig_audio <span class="token number">16384</span> <span class="token number">1</span> snd_hda_codec_generic, Live 0xffffffffc09e4000
iTCO_vendor_support <span class="token number">16384</span> <span class="token number">1</span> iTCO_wdt, Live 0xffffffffc09d7000
mei_wdt <span class="token number">16384</span> <span class="token number">0</span> - Live 0xffffffffc09df000
snd_hda_intel <span class="token number">53248</span> <span class="token number">0</span> - Live 0xffffffffc09b9000
snd_intel_dspcfg <span class="token number">24576</span> <span class="token number">1</span> snd_hda_intel, Live 0xffffffffc08d3000
irqbypass <span class="token number">16384</span> <span class="token number">1</span> kvm, Live 0xffffffffc09d2000
snd_intel_sdw_acpi <span class="token number">16384</span> <span class="token number">1</span> snd_intel_dspcfg, Live 0xffffffffc09cd000
crct10dif_pclmul <span class="token number">16384</span> <span class="token number">1</span> - Live 0xffffffffc09c8000
snd_hda_codec <span class="token number">155648</span> <span class="token number">3</span> snd_hda_codec_realtek,snd_hda_codec_generic,snd_hda_intel, Live 0xffffffffc0992000
crc32_pclmul <span class="token number">16384</span> <span class="token number">0</span> - Live 0xffffffffc098d000
snd_hda_core <span class="token number">102400</span> <span class="token number">4</span> snd_hda_codec_realtek,snd_hda_codec_generic,snd_hda_intel,snd_hda_codec, Live 0xffffffffc0973000
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-24、-proc-partitions" tabindex="-1"><a class="header-anchor" href="#_2-24、-proc-partitions"><span>2.24、/proc/partitions</span></a></h3><p>块设备每个分区的主设备号（major）和次设备号（minor）等信息，同时包括每个分区所包含的块（block）数目（如下面输出中第三列所示）；</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment"># more /proc/partitions</span>
major minor  <span class="token comment">#blocks  name</span>

   <span class="token number">8</span>        <span class="token number">0</span> <span class="token number">3907018584</span> sda
   <span class="token number">8</span>        <span class="token number">1</span> <span class="token number">3907017543</span> sda1
   <span class="token number">8</span>       <span class="token number">16</span> <span class="token number">2930266584</span> sdb
   <span class="token number">8</span>       <span class="token number">17</span> <span class="token number">2930265543</span> sdb1
   <span class="token number">8</span>       <span class="token number">32</span>  <span class="token number">125034840</span> sdc
   <span class="token number">8</span>       <span class="token number">33</span>     <span class="token number">614400</span> sdc1
   <span class="token number">8</span>       <span class="token number">34</span>    <span class="token number">1048576</span> sdc2
   <span class="token number">8</span>       <span class="token number">35</span>  <span class="token number">123370496</span> sdc3
   <span class="token number">8</span>       <span class="token number">48</span> <span class="token number">2930266584</span> sdd
   <span class="token number">8</span>       <span class="token number">49</span> <span class="token number">2930265543</span> sdd1
 <span class="token number">253</span>        <span class="token number">0</span>  <span class="token number">114978816</span> dm-0
 <span class="token number">253</span>        <span class="token number">1</span>    <span class="token number">8388608</span> dm-1
 <span class="token number">253</span>        <span class="token number">2</span> <span class="token number">3850371072</span> dm-2

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-25、-proc-pci" tabindex="-1"><a class="header-anchor" href="#_2-25、-proc-pci"><span>2.25、/proc/pci</span></a></h3><p>内核初始化时发现的所有PCI设备及其配置信息列表，其配置信息多为某PCI设备相关IRQ信息，可读性不高，可以用“/sbin/lspci –vb”命令获得较易理解的相关信息；在2.6内核以后，此文件已为/proc/bus/pci目录及其下的文件代替；</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment"># ll /proc/bus/pci/</span>
total <span class="token number">0</span>
dr-xr-xr-x <span class="token number">2</span> root root <span class="token number">0</span> Sep  <span class="token number">9</span> <span class="token number">11</span>:23 00
dr-xr-xr-x <span class="token number">2</span> root root <span class="token number">0</span> Sep  <span class="token number">9</span> <span class="token number">11</span>:23 02
-r--r--r-- <span class="token number">1</span> root root <span class="token number">0</span> Sep  <span class="token number">9</span> <span class="token number">11</span>:23 devices
<span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment">#</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-26、-proc-slabinfo" tabindex="-1"><a class="header-anchor" href="#_2-26、-proc-slabinfo"><span>2.26、/proc/slabinfo</span></a></h3><p>在内核中频繁使用的对象（如inode、dentry等）都有自己的cache，即slab pool，而/proc/slabinfo文件列出了这些对象相关slap的信息；详情可以参见内核文档中slapinfo的手册页；</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment"># more /proc/slabinfo</span>
slabinfo - version: <span class="token number">2.1</span>
<span class="token comment"># name            &lt;active_objs&gt; &lt;num_objs&gt; &lt;objsize&gt; &lt;objperslab&gt; &lt;pagesperslab&gt; : tunables &lt;limit&gt; &lt;batchcount&gt; &lt;sharedfactor&gt; : slabdata &lt;active_slabs&gt; &lt;num_slabs&gt; &lt;share</span>
davail<span class="token operator">&gt;</span>
ip_vs_conn             <span class="token number">0</span>      <span class="token number">0</span>    <span class="token number">320</span>   <span class="token number">12</span>    <span class="token number">1</span> <span class="token builtin class-name">:</span> tunables    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> <span class="token builtin class-name">:</span> slabdata      <span class="token number">0</span>      <span class="token number">0</span>      <span class="token number">0</span>
pid_2                 <span class="token number">96</span>     <span class="token number">96</span>    <span class="token number">128</span>   <span class="token number">32</span>    <span class="token number">1</span> <span class="token builtin class-name">:</span> tunables    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> <span class="token builtin class-name">:</span> slabdata      <span class="token number">3</span>      <span class="token number">3</span>      <span class="token number">0</span>
nf_conntrack_expect      <span class="token number">0</span>      <span class="token number">0</span>    <span class="token number">248</span>   <span class="token number">16</span>    <span class="token number">1</span> <span class="token builtin class-name">:</span> tunables    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> <span class="token builtin class-name">:</span> slabdata      <span class="token number">0</span>      <span class="token number">0</span>      <span class="token number">0</span>
nf_conntrack         <span class="token number">144</span>    <span class="token number">144</span>    <span class="token number">320</span>   <span class="token number">12</span>    <span class="token number">1</span> <span class="token builtin class-name">:</span> tunables    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> <span class="token builtin class-name">:</span> slabdata     <span class="token number">12</span>     <span class="token number">12</span>      <span class="token number">0</span>
nf-frags               <span class="token number">0</span>      <span class="token number">0</span>    <span class="token number">224</span>   <span class="token number">18</span>    <span class="token number">1</span> <span class="token builtin class-name">:</span> tunables    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> <span class="token builtin class-name">:</span> slabdata      <span class="token number">0</span>      <span class="token number">0</span>      <span class="token number">0</span>
bridge_fdb_cache      <span class="token number">32</span>     <span class="token number">32</span>    <span class="token number">128</span>   <span class="token number">32</span>    <span class="token number">1</span> <span class="token builtin class-name">:</span> tunables    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> <span class="token builtin class-name">:</span> slabdata      <span class="token number">1</span>      <span class="token number">1</span>      <span class="token number">0</span>
ovl_aio_req            <span class="token number">0</span>      <span class="token number">0</span>    <span class="token number">128</span>   <span class="token number">32</span>    <span class="token number">1</span> <span class="token builtin class-name">:</span> tunables    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> <span class="token builtin class-name">:</span> slabdata      <span class="token number">0</span>      <span class="token number">0</span>      <span class="token number">0</span>
ovl_inode            <span class="token number">308</span>    <span class="token number">308</span>    <span class="token number">736</span>   <span class="token number">22</span>    <span class="token number">4</span> <span class="token builtin class-name">:</span> tunables    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> <span class="token builtin class-name">:</span> slabdata     <span class="token number">14</span>     <span class="token number">14</span>      <span class="token number">0</span>
ext4_groupinfo_4k  <span class="token number">29400</span>  <span class="token number">29400</span>    <span class="token number">144</span>   <span class="token number">28</span>    <span class="token number">1</span> <span class="token builtin class-name">:</span> tunables    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> <span class="token builtin class-name">:</span> slabdata   <span class="token number">1050</span>   <span class="token number">1050</span>      <span class="token number">0</span>
ext4_inode_cache    <span class="token number">4617</span>   <span class="token number">4617</span>   <span class="token number">1176</span>   <span class="token number">27</span>    <span class="token number">8</span> <span class="token builtin class-name">:</span> tunables    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> <span class="token builtin class-name">:</span> slabdata    <span class="token number">171</span>    <span class="token number">171</span>      <span class="token number">0</span>
ext4_free_data       <span class="token number">146</span>    <span class="token number">146</span>     <span class="token number">56</span>   <span class="token number">73</span>    <span class="token number">1</span> <span class="token builtin class-name">:</span> tunables    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> <span class="token builtin class-name">:</span> slabdata      <span class="token number">2</span>      <span class="token number">2</span>      <span class="token number">0</span>
ext4_allocation_context     <span class="token number">64</span>     <span class="token number">64</span>    <span class="token number">128</span>   <span class="token number">32</span>    <span class="token number">1</span> <span class="token builtin class-name">:</span> tunables    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> <span class="token builtin class-name">:</span> slabdata      <span class="token number">2</span>      <span class="token number">2</span>      <span class="token number">0</span>
ext4_prealloc_space     <span class="token number">78</span>     <span class="token number">78</span>    <span class="token number">104</span>   <span class="token number">39</span>    <span class="token number">1</span> <span class="token builtin class-name">:</span> tunables    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> <span class="token builtin class-name">:</span> slabdata      <span class="token number">2</span>      <span class="token number">2</span>      <span class="token number">0</span>
ext4_system_zone    <span class="token number">1938</span>   <span class="token number">1938</span>     <span class="token number">40</span>  <span class="token number">102</span>    <span class="token number">1</span> <span class="token builtin class-name">:</span> tunables    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> <span class="token builtin class-name">:</span> slabdata     <span class="token number">19</span>     <span class="token number">19</span>      <span class="token number">0</span>
ext4_io_end          <span class="token number">128</span>    <span class="token number">128</span>     <span class="token number">64</span>   <span class="token number">64</span>    <span class="token number">1</span> <span class="token builtin class-name">:</span> tunables    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> <span class="token builtin class-name">:</span> slabdata      <span class="token number">2</span>      <span class="token number">2</span>      <span class="token number">0</span>
ext4_pending_reservation      <span class="token number">0</span>      <span class="token number">0</span>     <span class="token number">32</span>  <span class="token number">128</span>    <span class="token number">1</span> <span class="token builtin class-name">:</span> tunables    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> <span class="token builtin class-name">:</span> slabdata      <span class="token number">0</span>      <span class="token number">0</span>      <span class="token number">0</span>
ext4_extent_status   <span class="token number">2244</span>   <span class="token number">2244</span>     <span class="token number">40</span>  <span class="token number">102</span>    <span class="token number">1</span> <span class="token builtin class-name">:</span> tunables    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> <span class="token builtin class-name">:</span> slabdata     <span class="token number">22</span>     <span class="token number">22</span>      <span class="token number">0</span>
fat_inode_cache       <span class="token number">40</span>     <span class="token number">40</span>    <span class="token number">792</span>   <span class="token number">20</span>    <span class="token number">4</span> <span class="token builtin class-name">:</span> tunables    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> <span class="token builtin class-name">:</span> slabdata      <span class="token number">2</span>      <span class="token number">2</span>      <span class="token number">0</span>
fat_cache              <span class="token number">0</span>      <span class="token number">0</span>     <span class="token number">40</span>  <span class="token number">102</span>    <span class="token number">1</span> <span class="token builtin class-name">:</span> tunables    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> <span class="token builtin class-name">:</span> slabdata      <span class="token number">0</span>      <span class="token number">0</span>      <span class="token number">0</span>
mbcache                <span class="token number">0</span>      <span class="token number">0</span>     <span class="token number">56</span>   <span class="token number">73</span>    <span class="token number">1</span> <span class="token builtin class-name">:</span> tunables    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> <span class="token builtin class-name">:</span> slabdata      <span class="token number">0</span>      <span class="token number">0</span>      <span class="token number">0</span>
jbd2_transaction_s    <span class="token number">208</span>    <span class="token number">208</span>    <span class="token number">256</span>   <span class="token number">16</span>    <span class="token number">1</span> <span class="token builtin class-name">:</span> tunables    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> <span class="token builtin class-name">:</span> slabdata     <span class="token number">13</span>     <span class="token number">13</span>      <span class="token number">0</span>
jbd2_inode           <span class="token number">448</span>    <span class="token number">448</span>     <span class="token number">64</span>   <span class="token number">64</span>    <span class="token number">1</span> <span class="token builtin class-name">:</span> tunables    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> <span class="token builtin class-name">:</span> slabdata      <span class="token number">7</span>      <span class="token number">7</span>      <span class="token number">0</span>
jbd2_journal_handle    <span class="token number">146</span>    <span class="token number">146</span>     <span class="token number">56</span>   <span class="token number">73</span>    <span class="token number">1</span> <span class="token builtin class-name">:</span> tunables    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> <span class="token builtin class-name">:</span> slabdata      <span class="token number">2</span>      <span class="token number">2</span>      <span class="token number">0</span>
jbd2_journal_head    <span class="token number">170</span>    <span class="token number">170</span>    <span class="token number">120</span>   <span class="token number">34</span>    <span class="token number">1</span> <span class="token builtin class-name">:</span> tunables    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> <span class="token builtin class-name">:</span> slabdata      <span class="token number">5</span>      <span class="token number">5</span>      <span class="token number">0</span>
jbd2_revoke_table_s    <span class="token number">256</span>    <span class="token number">256</span>     <span class="token number">16</span>  <span class="token number">256</span>    <span class="token number">1</span> <span class="token builtin class-name">:</span> tunables    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> <span class="token builtin class-name">:</span> slabdata      <span class="token number">1</span>      <span class="token number">1</span>      <span class="token number">0</span>
jbd2_revoke_record_s    <span class="token number">256</span>    <span class="token number">256</span>     <span class="token number">32</span>  <span class="token number">128</span>    <span class="token number">1</span> <span class="token builtin class-name">:</span> tunables    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> <span class="token builtin class-name">:</span> slabdata      <span class="token number">2</span>      <span class="token number">2</span>      <span class="token number">0</span>
kvm_async_pf           <span class="token number">0</span>      <span class="token number">0</span>    <span class="token number">168</span>   <span class="token number">24</span>    <span class="token number">1</span> <span class="token builtin class-name">:</span> tunables    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> <span class="token builtin class-name">:</span> slabdata      <span class="token number">0</span>      <span class="token number">0</span>      <span class="token number">0</span>
kvm_vcpu               <span class="token number">0</span>      <span class="token number">0</span>  <span class="token number">10880</span>    <span class="token number">3</span>    <span class="token number">8</span> <span class="token builtin class-name">:</span> tunables    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> <span class="token builtin class-name">:</span> slabdata      <span class="token number">0</span>      <span class="token number">0</span>      <span class="token number">0</span>
kvm_mmu_page_header      <span class="token number">0</span>      <span class="token number">0</span>    <span class="token number">184</span>   <span class="token number">22</span>    <span class="token number">1</span> <span class="token builtin class-name">:</span> tunables    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> <span class="token builtin class-name">:</span> slabdata      <span class="token number">0</span>      <span class="token number">0</span>      <span class="token number">0</span>
pte_list_desc          <span class="token number">0</span>      <span class="token number">0</span>    <span class="token number">128</span>   <span class="token number">32</span>    <span class="token number">1</span> <span class="token builtin class-name">:</span> tunables    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> <span class="token builtin class-name">:</span> slabdata      <span class="token number">0</span>      <span class="token number">0</span>      <span class="token number">0</span>
x86_emulator           <span class="token number">0</span>      <span class="token number">0</span>   <span class="token number">2672</span>   <span class="token number">12</span>    <span class="token number">8</span> <span class="token builtin class-name">:</span> tunables    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> <span class="token builtin class-name">:</span> slabdata      <span class="token number">0</span>      <span class="token number">0</span>      <span class="token number">0</span>
nfsd_drc               <span class="token number">0</span>      <span class="token number">0</span>    <span class="token number">128</span>   <span class="token number">32</span>    <span class="token number">1</span> <span class="token builtin class-name">:</span> tunables    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> <span class="token builtin class-name">:</span> slabdata      <span class="token number">0</span>      <span class="token number">0</span>      <span class="token number">0</span>
nfs4_layout_stateid      <span class="token number">0</span>      <span class="token number">0</span>    <span class="token number">312</span>   <span class="token number">13</span>    <span class="token number">1</span> <span class="token builtin class-name">:</span> tunables    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> <span class="token builtin class-name">:</span> slabdata      <span class="token number">0</span>      <span class="token number">0</span>      <span class="token number">0</span>
nfs4_layout            <span class="token number">0</span>      <span class="token number">0</span>     <span class="token number">48</span>   <span class="token number">85</span>    <span class="token number">1</span> <span class="token builtin class-name">:</span> tunables    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> <span class="token builtin class-name">:</span> slabdata      <span class="token number">0</span>      <span class="token number">0</span>      <span class="token number">0</span>
nfsd4_odstate          <span class="token number">0</span>      <span class="token number">0</span>     <span class="token number">40</span>  <span class="token number">102</span>    <span class="token number">1</span> <span class="token builtin class-name">:</span> tunables    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> <span class="token builtin class-name">:</span> slabdata      <span class="token number">0</span>      <span class="token number">0</span>      <span class="token number">0</span>
nfsd4_delegations     <span class="token number">75</span>     <span class="token number">75</span>    <span class="token number">264</span>   <span class="token number">15</span>    <span class="token number">1</span> <span class="token builtin class-name">:</span> tunables    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> <span class="token builtin class-name">:</span> slabdata      <span class="token number">5</span>      <span class="token number">5</span>      <span class="token number">0</span>
nfsd4_stateids       <span class="token number">216</span>    <span class="token number">216</span>    <span class="token number">168</span>   <span class="token number">24</span>    <span class="token number">1</span> <span class="token builtin class-name">:</span> tunables    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> <span class="token builtin class-name">:</span> slabdata      <span class="token number">9</span>      <span class="token number">9</span>      <span class="token number">0</span>
nfsd4_files          <span class="token number">195</span>    <span class="token number">195</span>    <span class="token number">304</span>   <span class="token number">13</span>    <span class="token number">1</span> <span class="token builtin class-name">:</span> tunables    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> <span class="token builtin class-name">:</span> slabdata     <span class="token number">15</span>     <span class="token number">15</span>      <span class="token number">0</span>
nfsd4_lockowners      <span class="token number">40</span>     <span class="token number">40</span>    <span class="token number">392</span>   <span class="token number">20</span>    <span class="token number">2</span> <span class="token builtin class-name">:</span> tunables    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> <span class="token builtin class-name">:</span> slabdata      <span class="token number">2</span>      <span class="token number">2</span>      <span class="token number">0</span>
nfsd4_openowners      <span class="token number">36</span>     <span class="token number">36</span>    <span class="token number">432</span>   <span class="token number">18</span>    <span class="token number">2</span> <span class="token builtin class-name">:</span> tunables    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> <span class="token builtin class-name">:</span> slabdata      <span class="token number">2</span>      <span class="token number">2</span>      <span class="token number">0</span>
nfsd4_clients         <span class="token number">22</span>     <span class="token number">22</span>   <span class="token number">1440</span>   <span class="token number">22</span>    <span class="token number">8</span> <span class="token builtin class-name">:</span> tunables    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> <span class="token builtin class-name">:</span> slabdata      <span class="token number">1</span>      <span class="token number">1</span>      <span class="token number">0</span>
rpc_inode_cache       <span class="token number">46</span>     <span class="token number">46</span>    <span class="token number">704</span>   <span class="token number">23</span>    <span class="token number">4</span> <span class="token builtin class-name">:</span> tunables    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> <span class="token builtin class-name">:</span> slabdata      <span class="token number">2</span>      <span class="token number">2</span>      <span class="token number">0</span>
rpc_buffers           <span class="token number">32</span>     <span class="token number">32</span>   <span class="token number">2048</span>   <span class="token number">16</span>    <span class="token number">8</span> <span class="token builtin class-name">:</span> tunables    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> <span class="token builtin class-name">:</span> slabdata      <span class="token number">2</span>      <span class="token number">2</span>      <span class="token number">0</span>
rpc_tasks             <span class="token number">32</span>     <span class="token number">32</span>    <span class="token number">256</span>   <span class="token number">16</span>    <span class="token number">1</span> <span class="token builtin class-name">:</span> tunables    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> <span class="token builtin class-name">:</span> slabdata      <span class="token number">2</span>      <span class="token number">2</span>      <span class="token number">0</span>
fuse_request           <span class="token number">0</span>      <span class="token number">0</span>    <span class="token number">152</span>   <span class="token number">26</span>    <span class="token number">1</span> <span class="token builtin class-name">:</span> tunables    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> <span class="token builtin class-name">:</span> slabdata      <span class="token number">0</span>      <span class="token number">0</span>      <span class="token number">0</span>
fuse_inode             <span class="token number">0</span>      <span class="token number">0</span>    <span class="token number">896</span>   <span class="token number">18</span>    <span class="token number">4</span> <span class="token builtin class-name">:</span> tunables    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> <span class="token builtin class-name">:</span> slabdata      <span class="token number">0</span>      <span class="token number">0</span>      <span class="token number">0</span>
xfs_dqtrx              <span class="token number">0</span>      <span class="token number">0</span>    <span class="token number">528</span>   <span class="token number">15</span>    <span class="token number">2</span> <span class="token builtin class-name">:</span> tunables    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> <span class="token builtin class-name">:</span> slabdata      <span class="token number">0</span>      <span class="token number">0</span>      <span class="token number">0</span>
xfs_dquot              <span class="token number">0</span>      <span class="token number">0</span>    <span class="token number">496</span>   <span class="token number">16</span>    <span class="token number">2</span> <span class="token builtin class-name">:</span> tunables    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> <span class="token builtin class-name">:</span> slabdata      <span class="token number">0</span>      <span class="token number">0</span>      <span class="token number">0</span>
xfs_buf             <span class="token number">3744</span>   <span class="token number">3744</span>    <span class="token number">448</span>   <span class="token number">18</span>    <span class="token number">2</span> <span class="token builtin class-name">:</span> tunables    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> <span class="token builtin class-name">:</span> slabdata    <span class="token number">208</span>    <span class="token number">208</span>      <span class="token number">0</span>
xfs_bui_item          <span class="token number">20</span>     <span class="token number">20</span>    <span class="token number">200</span>   <span class="token number">20</span>    <span class="token number">1</span> <span class="token builtin class-name">:</span> tunables    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> <span class="token builtin class-name">:</span> slabdata      <span class="token number">1</span>      <span class="token number">1</span>      <span class="token number">0</span>
xfs_bud_item          <span class="token number">24</span>     <span class="token number">24</span>    <span class="token number">168</span>   <span class="token number">24</span>    <span class="token number">1</span> <span class="token builtin class-name">:</span> tunables    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> <span class="token builtin class-name">:</span> slabdata      <span class="token number">1</span>      <span class="token number">1</span>      <span class="token number">0</span>
xfs_cui_item          <span class="token number">38</span>     <span class="token number">38</span>    <span class="token number">424</span>   <span class="token number">19</span>    <span class="token number">2</span> <span class="token builtin class-name">:</span> tunables    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> <span class="token builtin class-name">:</span> slabdata      <span class="token number">2</span>      <span class="token number">2</span>      <span class="token number">0</span>
xfs_cud_item          <span class="token number">48</span>     <span class="token number">48</span>    <span class="token number">168</span>   <span class="token number">24</span>    <span class="token number">1</span> <span class="token builtin class-name">:</span> tunables    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> <span class="token builtin class-name">:</span> slabdata      <span class="token number">2</span>      <span class="token number">2</span>      <span class="token number">0</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-27、-proc-stat" tabindex="-1"><a class="header-anchor" href="#_2-27、-proc-stat"><span>2.27、/proc/stat</span></a></h3><p>实时追踪自系统上次启动以来的多种统计信息；如下所示，其中， “cpu”行后的值分别表示以1/100（jiffies）秒为单位的统计值</p><p>实时追踪自系统上次启动以来的多种统计信息；如下所示，其中， cpu指标 含义 user 用户态时间 nice 用户态时间(低优先级，nice&gt;0) system 内核态时间 idle 空闲时间 iowait I/O等待时间 irq 硬中断 softirq 软中断</p><p>iowait时间是不可靠值，理由如下：</p><p>CPU不会等待I/O执行完成，而iowait是等待I/O完成的时间。 当CPU进入idle状态，很可能会调度另一个task执行，所以iowait计算时间偏小； 多核CPU，iowait的计算并非某一个核，因此计算每一个cpu的iowait非常困难； 相关资料：http://man7.org/linux/man-pages/man5/proc.5.html</p><p>“intr”行给出中断的信息，第一个为自系统启动以来，发生的所有的中断的次数；然后每个数对应一个特定的中断自系统启动以来所发生的次数； “ctxt”给出了自系统启动以来CPU发生的上下文交换的次数。 “btime”给出了从系统启动到现在为止的时间，单位为秒；</p><p>另外：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>cat /proc/uptime
82044.14 215440.9412
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>第一个值代表从开机到现在的累积时间(单位为秒), 开机后运行82044秒 第二个值代表从开机到现在的CPU空闲时间，单位为秒 技巧：结合btime获取当前的绝对时间,1500827856 + 82044 = 1500909900， 转换成北京时间2017/7/24 23:25:00，也就是当前执行命令cat /proc/uptime的时间点。“processes (total_forks) 自系统启动以来所创建的任务的个数目；</p><p>“procs_running”：当前运行队列的任务的数目； “procs_blocked”：当前被阻塞的任务的数目；</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment"># more /proc/stat</span>
cpu  <span class="token number">707939</span> <span class="token number">6801</span> <span class="token number">332421</span> <span class="token number">87034258</span> <span class="token number">559799</span> <span class="token number">158433</span> <span class="token number">41805</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span>
cpu0 <span class="token number">355382</span> <span class="token number">2348</span> <span class="token number">167099</span> <span class="token number">43470316</span> <span class="token number">329043</span> <span class="token number">78069</span> <span class="token number">17860</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span>
cpu1 <span class="token number">352557</span> <span class="token number">4452</span> <span class="token number">165322</span> <span class="token number">43563941</span> <span class="token number">230756</span> <span class="token number">80363</span> <span class="token number">23944</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span>
intr <span class="token number">260183889</span> <span class="token number">12</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">1</span> <span class="token number">5</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">29</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">33</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">6602427</span> <span class="token number">1503061</span> <span class="token number">41</span> <span class="token number">23</span> <span class="token number">241</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span>
<span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span>
<span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span>
<span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span>
<span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span>
<span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span>
ctxt <span class="token number">504260613</span>
btime <span class="token number">1662249280</span>
processes <span class="token number">3002431</span>
procs_running <span class="token number">1</span>
procs_blocked <span class="token number">0</span>
softirq <span class="token number">118450282</span> <span class="token number">6</span> <span class="token number">22747755</span> <span class="token number">97770</span> <span class="token number">6602430</span> <span class="token number">1502432</span> <span class="token number">0</span> <span class="token number">71856</span> <span class="token number">56172181</span> <span class="token number">5087</span> <span class="token number">31250765</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-28、-proc-swaps" tabindex="-1"><a class="header-anchor" href="#_2-28、-proc-swaps"><span>2.28、/proc/swaps</span></a></h3><p>当前系统上的交换分区及其空间利用信息，如果有多个交换分区的话，则会每个交换分区的信息分别存储于/proc/swap目录中的单独文件中，而其优先级数字越低，被使用到的可能性越大；下面是作者系统中只有一个交换分区时的输出信息；</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment"># more /proc/swaps</span>
Filename                                Type            Size            Used            Priority
<span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment">#</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-29、-proc-uptime" tabindex="-1"><a class="header-anchor" href="#_2-29、-proc-uptime"><span>2.29、/proc/uptime</span></a></h3><p>系统上次启动以来的运行时间，如下所示，其第一个数字表示系统运行时间，第二个数字表示系统空闲时间，单位是秒；</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment"># more /proc/uptime</span>
<span class="token number">449092.43</span> <span class="token number">880841.80</span>
<span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-30、-proc-version" tabindex="-1"><a class="header-anchor" href="#_2-30、-proc-version"><span>2.30、/proc/version</span></a></h3><p>当前系统运行的内核版本号，在作者的RHEL8.6上还会显示系统安装的gcc版本，如下所示；</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment"># more /proc/version</span>
Linux version <span class="token number">4.18</span>.0-372.9.1.el8.x86_64 <span class="token punctuation">(</span>mockbuild@dal1-prod-builder001.bld.equ.rockylinux.org<span class="token punctuation">)</span> <span class="token punctuation">(</span>gcc version <span class="token number">8.5</span>.0 <span class="token number">20210514</span> <span class="token punctuation">(</span>Red Hat <span class="token number">8.5</span>.0-10<span class="token punctuation">)</span> <span class="token punctuation">(</span>GCC<span class="token punctuation">))</span> <span class="token comment">#1 SMP Tue May 10 14:4</span>
<span class="token number">8</span>:47 UTC <span class="token number">2022</span>
<span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment">#</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-31、-proc-vmstat" tabindex="-1"><a class="header-anchor" href="#_2-31、-proc-vmstat"><span>2.31、/proc/vmstat</span></a></h3><p>当前系统虚拟内存的多种统计数据，信息量可能会比较大，这因系统而有所不同，可读性较好；下面为作者机器上输出信息的一个片段；（2.6以后的内核支持此文件）</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment"># more /proc/vmstat</span>
nr_free_pages <span class="token number">95069</span>
nr_zone_inactive_anon <span class="token number">103504</span>
nr_zone_active_anon <span class="token number">30000</span>
nr_zone_inactive_file <span class="token number">267089</span>
nr_zone_active_file <span class="token number">363547</span>
nr_zone_unevictable <span class="token number">34</span>
nr_zone_write_pending <span class="token number">8</span>
nr_mlock <span class="token number">0</span>
nr_bounce <span class="token number">0</span>
nr_zspages <span class="token number">0</span>
nr_free_cma <span class="token number">0</span>
numa_hit <span class="token number">307003067</span>
numa_miss <span class="token number">0</span>
numa_foreign <span class="token number">0</span>
numa_interleave <span class="token number">24517</span>
numa_local <span class="token number">307003067</span>
numa_other <span class="token number">0</span>
nr_inactive_anon <span class="token number">103504</span>
nr_active_anon <span class="token number">30000</span>
nr_inactive_file <span class="token number">267089</span>
nr_active_file <span class="token number">363547</span>
nr_unevictable <span class="token number">34</span>
nr_slab_reclaimable <span class="token number">32026</span>
nr_slab_unreclaimable <span class="token number">12350</span>
nr_isolated_anon <span class="token number">0</span>
nr_isolated_file <span class="token number">0</span>
workingset_nodes <span class="token number">1661</span>
workingset_refault_anon <span class="token number">0</span>
workingset_refault_file <span class="token number">14698</span>
workingset_activate_anon <span class="token number">0</span>
workingset_activate_file <span class="token number">11041</span>
workingset_restore_anon <span class="token number">0</span>
workingset_restore_file <span class="token number">2974</span>
workingset_nodereclaim <span class="token number">128</span>
nr_anon_pages <span class="token number">84208</span>
nr_mapped <span class="token number">83769</span>
nr_file_pages <span class="token number">675824</span>
nr_dirty <span class="token number">8</span>
nr_writeback <span class="token number">0</span>
nr_writeback_temp <span class="token number">0</span>
nr_shmem <span class="token number">45188</span>
nr_shmem_hugepages <span class="token number">0</span>
nr_shmem_pmdmapped <span class="token number">0</span>
nr_file_hugepages <span class="token number">0</span>
nr_file_pmdmapped <span class="token number">0</span>
nr_anon_transparent_hugepages <span class="token number">86</span>
nr_vmscan_write <span class="token number">0</span>
nr_vmscan_immediate_reclaim <span class="token number">100</span>
nr_dirtied <span class="token number">965473</span>
nr_written <span class="token number">946309</span>
nr_kernel_misc_reclaimable <span class="token number">0</span>
nr_foll_pin_acquired <span class="token number">0</span>
nr_foll_pin_released <span class="token number">0</span>
nr_kernel_stack <span class="token number">4176</span>
nr_page_table_pages <span class="token number">2609</span>
nr_swapcached <span class="token number">0</span>
<span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment">#</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-32、-proc-zoneinfo" tabindex="-1"><a class="header-anchor" href="#_2-32、-proc-zoneinfo"><span>2.32、/proc/zoneinfo</span></a></h3><p>内存区域（zone）的详细信息列表，信息量较大，下面列出的是一个输出片段：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment"># more /proc/zoneinfo</span>
Node <span class="token number">0</span>, zone      DMA
  per-node stats
      nr_inactive_anon <span class="token number">103458</span>
      nr_active_anon <span class="token number">30000</span>
      nr_inactive_file <span class="token number">267094</span>
      nr_active_file <span class="token number">363555</span>
      nr_unevictable <span class="token number">34</span>
      nr_slab_reclaimable <span class="token number">32027</span>
      nr_slab_unreclaimable <span class="token number">12357</span>
      nr_isolated_anon <span class="token number">0</span>
      nr_isolated_file <span class="token number">0</span>
      workingset_nodes <span class="token number">1661</span>
      workingset_refault_anon <span class="token number">0</span>
      workingset_refault_file <span class="token number">14698</span>
      workingset_activate_anon <span class="token number">0</span>
      workingset_activate_file <span class="token number">11041</span>
      workingset_restore_anon <span class="token number">0</span>
      workingset_restore_file <span class="token number">2974</span>
      workingset_nodereclaim <span class="token number">128</span>
      nr_anon_pages <span class="token number">84154</span>
      nr_mapped    <span class="token number">83752</span>
      nr_file_pages <span class="token number">675837</span>
      nr_dirty     <span class="token number">20</span>
      nr_writeback <span class="token number">0</span>
      nr_writeback_temp <span class="token number">0</span>
      nr_shmem     <span class="token number">45188</span>
      nr_shmem_hugepages <span class="token number">0</span>
      nr_shmem_pmdmapped <span class="token number">0</span>
      nr_file_hugepages <span class="token number">0</span>
      nr_file_pmdmapped <span class="token number">0</span>
      nr_anon_transparent_hugepages <span class="token number">86</span>
      nr_vmscan_write <span class="token number">0</span>
      nr_vmscan_immediate_reclaim <span class="token number">100</span>
      nr_dirtied   <span class="token number">965632</span>
      nr_written   <span class="token number">946453</span>
      nr_kernel_misc_reclaimable <span class="token number">0</span>
      nr_foll_pin_acquired <span class="token number">0</span>
      nr_foll_pin_released <span class="token number">0</span>
      nr_kernel_stack <span class="token number">4160</span>
      nr_page_table_pages <span class="token number">2596</span>
      nr_swapcached <span class="token number">0</span>
  pages <span class="token function">free</span>     <span class="token number">3712</span>
        min      <span class="token number">70</span>
        low      <span class="token number">87</span>
        high     <span class="token number">104</span>
        spanned  <span class="token number">4095</span>
        present  <span class="token number">3997</span>
        managed  <span class="token number">3840</span>
        protection: <span class="token punctuation">(</span><span class="token number">0</span>, <span class="token number">3154</span>, <span class="token number">3582</span>, <span class="token number">3582</span>, <span class="token number">3582</span><span class="token punctuation">)</span>
      nr_free_pages <span class="token number">3712</span>
      nr_zone_inactive_anon <span class="token number">0</span>
      nr_zone_active_anon <span class="token number">0</span>
      nr_zone_inactive_file <span class="token number">0</span>
      nr_zone_active_file <span class="token number">0</span>
      nr_zone_unevictable <span class="token number">0</span>
      nr_zone_write_pending <span class="token number">0</span>
      nr_mlock     <span class="token number">0</span>
      nr_bounce    <span class="token number">0</span>
      nr_zspages   <span class="token number">0</span>
      nr_free_cma  <span class="token number">0</span>
      numa_hit     <span class="token number">329</span>
      numa_miss    <span class="token number">0</span>
      numa_foreign <span class="token number">0</span>
      numa_interleave <span class="token number">1</span>
      numa_local   <span class="token number">329</span>
      numa_other   <span class="token number">0</span>
  pagesets
    cpu: <span class="token number">0</span>
              count: <span class="token number">0</span>
              high:  <span class="token number">0</span>
              batch: <span class="token number">1</span>
  vm stats threshold: <span class="token number">4</span>
    cpu: <span class="token number">1</span>
              count: <span class="token number">0</span>
              high:  <span class="token number">0</span>
              batch: <span class="token number">1</span>
  vm stats threshold: <span class="token number">4</span>
  node_unreclaimable:  <span class="token number">0</span>
  start_pfn:           <span class="token number">1</span>
Node <span class="token number">0</span>, zone    DMA32
  pages <span class="token function">free</span>     <span class="token number">88987</span>
        min      <span class="token number">14812</span>
        low      <span class="token number">18515</span>
        high     <span class="token number">22218</span>
        spanned  <span class="token number">1044480</span>
        present  <span class="token number">894627</span>
        managed  <span class="token number">818317</span>
        protection: <span class="token punctuation">(</span><span class="token number">0</span>, <span class="token number">0</span>, <span class="token number">428</span>, <span class="token number">428</span>, <span class="token number">428</span><span class="token punctuation">)</span>
      nr_free_pages <span class="token number">88987</span>
      nr_zone_inactive_anon <span class="token number">80893</span>
      nr_zone_active_anon <span class="token number">27977</span>
      nr_zone_inactive_file <span class="token number">241280</span>
      nr_zone_active_file <span class="token number">336515</span>
      nr_zone_unevictable <span class="token number">0</span>
      nr_zone_write_pending <span class="token number">13</span>
      nr_mlock     <span class="token number">0</span>
      nr_bounce    <span class="token number">0</span>
      nr_zspages   <span class="token number">0</span>
      nr_free_cma  <span class="token number">0</span>
      numa_hit     <span class="token number">301745583</span>
      numa_miss    <span class="token number">0</span>
      numa_foreign <span class="token number">0</span>
      numa_interleave <span class="token number">1</span>
      numa_local   <span class="token number">301745583</span>
      numa_other   <span class="token number">0</span>
  pagesets
    cpu: <span class="token number">0</span>
              count: <span class="token number">141</span>
              high:  <span class="token number">378</span>
              batch: <span class="token number">63</span>
  vm stats threshold: <span class="token number">24</span>
    cpu: <span class="token number">1</span>
              count: <span class="token number">278</span>
              high:  <span class="token number">378</span>
              batch: <span class="token number">63</span>
  vm stats threshold: <span class="token number">24</span>
  node_unreclaimable:  <span class="token number">0</span>
  start_pfn:           <span class="token number">4096</span>
Node <span class="token number">0</span>, zone   Normal
  pages <span class="token function">free</span>     <span class="token number">2515</span>
        min      <span class="token number">2012</span>
        low      <span class="token number">2515</span>
        high     <span class="token number">3018</span>
        spanned  <span class="token number">126464</span>
        present  <span class="token number">126464</span>
        managed  <span class="token number">109712</span>
        protection: <span class="token punctuation">(</span><span class="token number">0</span>, <span class="token number">0</span>, <span class="token number">0</span>, <span class="token number">0</span>, <span class="token number">0</span><span class="token punctuation">)</span>
      nr_free_pages <span class="token number">2515</span>
      nr_zone_inactive_anon <span class="token number">22565</span>
      nr_zone_active_anon <span class="token number">2023</span>
      nr_zone_inactive_file <span class="token number">25814</span>
      nr_zone_active_file <span class="token number">27040</span>
      nr_zone_unevictable <span class="token number">34</span>
      nr_zone_write_pending <span class="token number">7</span>
      nr_mlock     <span class="token number">0</span>
      nr_bounce    <span class="token number">0</span>
      nr_zspages   <span class="token number">0</span>
      nr_free_cma  <span class="token number">0</span>
      numa_hit     <span class="token number">5305395</span>
      numa_miss    <span class="token number">0</span>
      numa_foreign <span class="token number">0</span>
      numa_interleave <span class="token number">24515</span>
      numa_local   <span class="token number">5305395</span>
      numa_other   <span class="token number">0</span>
  pagesets
    cpu: <span class="token number">0</span>
              count: <span class="token number">18</span>
              high:  <span class="token number">42</span>
              batch: <span class="token number">7</span>
  vm stats threshold: <span class="token number">12</span>
    cpu: <span class="token number">1</span>
              count: <span class="token number">41</span>
              high:  <span class="token number">42</span>
              batch: <span class="token number">7</span>
  vm stats threshold: <span class="token number">12</span>
  node_unreclaimable:  <span class="token number">0</span>
  start_pfn:           <span class="token number">1048576</span>
Node <span class="token number">0</span>, zone  Movable
  pages <span class="token function">free</span>     <span class="token number">0</span>
        min      <span class="token number">0</span>
        low      <span class="token number">0</span>
        high     <span class="token number">0</span>
        spanned  <span class="token number">0</span>
        present  <span class="token number">0</span>
        managed  <span class="token number">0</span>
        protection: <span class="token punctuation">(</span><span class="token number">0</span>, <span class="token number">0</span>, <span class="token number">0</span>, <span class="token number">0</span>, <span class="token number">0</span><span class="token punctuation">)</span>
Node <span class="token number">0</span>, zone   Device
  pages <span class="token function">free</span>     <span class="token number">0</span>
        min      <span class="token number">0</span>
        low      <span class="token number">0</span>
        high     <span class="token number">0</span>
        spanned  <span class="token number">0</span>
        present  <span class="token number">0</span>
        managed  <span class="token number">0</span>
        protection: <span class="token punctuation">(</span><span class="token number">0</span>, <span class="token number">0</span>, <span class="token number">0</span>, <span class="token number">0</span>, <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span>root@nfs-service ~<span class="token punctuation">]</span><span class="token comment">#</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、-proc-sys目录详解" tabindex="-1"><a class="header-anchor" href="#三、-proc-sys目录详解"><span>三、/proc/sys目录详解</span></a></h2><p>与/proc下其它文件的“只读”属性不同的是，管理员可对/proc/sys子目录中的许多文件内容进行修改以更改内核的运行特性，事先可以使用“ls -l”命令查看某文件是否“可写入”。写入操作通常使用类似于“echo DATA &gt; /path/to/your/filename”的格式进行。需要注意的是，即使文件可写，其一般也不可以使用编辑器进行编辑。</p><h3 id="_3-1、-proc-sys-debug-子目录" tabindex="-1"><a class="header-anchor" href="#_3-1、-proc-sys-debug-子目录"><span>3.1、/proc/sys/debug 子目录</span></a></h3><p>此目录通常是一空目录；</p><h3 id="_3-2、-proc-sys-dev-子目录" tabindex="-1"><a class="header-anchor" href="#_3-2、-proc-sys-dev-子目录"><span>3.2、/proc/sys/dev 子目录</span></a></h3><p>为系统上特殊设备提供参数信息文件的目录，其不同设备的信息文件分别存储于不同的子目录中，如大多数系统上都会具有的/proc/sys/dev/cdrom和/proc/sys/dev/raid（如果内核编译时开启了支持raid的功能） 目录，其内存储的通常是系统上cdrom和raid的相关参数信息文件。</p><p>https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/5/html/deployment_guide/s3-proc-sys-fs</p>`,167),c=[l];function r(i,t){return s(),a("div",null,c)}const b=n(p,[["render",r],["__file","proc详解.html.vue"]]),m=JSON.parse('{"path":"/note-book/OperaSystems/proc%E8%AF%A6%E8%A7%A3.html","title":"/proc详解","lang":"zh-CN","frontmatter":{"description":"/proc详解 如果哪里都找不到就来内核文档看看吧 https://docs.kernel.org/filesystems/proc.html 内容摘要：Linux系统上的/proc目录是一种文件系统，即proc文件系统。 Linux系统上的/proc目录是一种文件系统，即proc文件系统。与其它常见的文件系统不同的是，/proc是一种伪文件系统（也即...","head":[["meta",{"property":"og:url","content":"https://paper-dragon.github.io/note-book/OperaSystems/proc%E8%AF%A6%E8%A7%A3.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"/proc详解"}],["meta",{"property":"og:description","content":"/proc详解 如果哪里都找不到就来内核文档看看吧 https://docs.kernel.org/filesystems/proc.html 内容摘要：Linux系统上的/proc目录是一种文件系统，即proc文件系统。 Linux系统上的/proc目录是一种文件系统，即proc文件系统。与其它常见的文件系统不同的是，/proc是一种伪文件系统（也即..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-13T15:08:38.000Z"}],["meta",{"property":"article:author","content":"PaperDragon"}],["meta",{"property":"article:modified_time","content":"2023-08-13T15:08:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"/proc详解\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-13T15:08:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"一、     进程目录中的常见文件介绍","slug":"一、-进程目录中的常见文件介绍","link":"#一、-进程目录中的常见文件介绍","children":[{"level":3,"title":"1.1、cmdline","slug":"_1-1、cmdline","link":"#_1-1、cmdline","children":[]},{"level":3,"title":"1.2、cwd","slug":"_1-2、cwd","link":"#_1-2、cwd","children":[]},{"level":3,"title":"1.3、environ","slug":"_1-3、environ","link":"#_1-3、environ","children":[]},{"level":3,"title":"1.4、exe","slug":"_1-4、exe","link":"#_1-4、exe","children":[]},{"level":3,"title":"1.5、fd","slug":"_1-5、fd","link":"#_1-5、fd","children":[]},{"level":3,"title":"1.6、limits","slug":"_1-6、limits","link":"#_1-6、limits","children":[]},{"level":3,"title":"1.8、mem","slug":"_1-8、mem","link":"#_1-8、mem","children":[]},{"level":3,"title":"1.9、root","slug":"_1-9、root","link":"#_1-9、root","children":[]},{"level":3,"title":"1.10、stat","slug":"_1-10、stat","link":"#_1-10、stat","children":[]},{"level":3,"title":"1.11、statm","slug":"_1-11、statm","link":"#_1-11、statm","children":[]},{"level":3,"title":"1.12、status","slug":"_1-12、status","link":"#_1-12、status","children":[]},{"level":3,"title":"1.13、task","slug":"_1-13、task","link":"#_1-13、task","children":[]}]},{"level":2,"title":"二、/proc目录下常见的文件介绍","slug":"二、-proc目录下常见的文件介绍","link":"#二、-proc目录下常见的文件介绍","children":[{"level":3,"title":"2.1、/proc/apm","slug":"_2-1、-proc-apm","link":"#_2-1、-proc-apm","children":[]},{"level":3,"title":"2.2、/proc/buddyinfo","slug":"_2-2、-proc-buddyinfo","link":"#_2-2、-proc-buddyinfo","children":[]},{"level":3,"title":"2.3、/proc/cmdline","slug":"_2-3、-proc-cmdline","link":"#_2-3、-proc-cmdline","children":[]},{"level":3,"title":"2.4、/proc/cpuinfo","slug":"_2-4、-proc-cpuinfo","link":"#_2-4、-proc-cpuinfo","children":[]},{"level":3,"title":"2.5、/proc/crypto","slug":"_2-5、-proc-crypto","link":"#_2-5、-proc-crypto","children":[]},{"level":3,"title":"2.6、/proc/devices","slug":"_2-6、-proc-devices","link":"#_2-6、-proc-devices","children":[]},{"level":3,"title":"2.7、/proc/diskstats","slug":"_2-7、-proc-diskstats","link":"#_2-7、-proc-diskstats","children":[]},{"level":3,"title":"2.8、/proc/dma","slug":"_2-8、-proc-dma","link":"#_2-8、-proc-dma","children":[]},{"level":3,"title":"2.9、/proc/execdomains","slug":"_2-9、-proc-execdomains","link":"#_2-9、-proc-execdomains","children":[]},{"level":3,"title":"2.10、/proc/fb","slug":"_2-10、-proc-fb","link":"#_2-10、-proc-fb","children":[]},{"level":3,"title":"2.11、/proc/filesystems","slug":"_2-11、-proc-filesystems","link":"#_2-11、-proc-filesystems","children":[]},{"level":3,"title":"2.12、/proc/interrupts","slug":"_2-12、-proc-interrupts","link":"#_2-12、-proc-interrupts","children":[]},{"level":3,"title":"2.13、/proc/iomem","slug":"_2-13、-proc-iomem","link":"#_2-13、-proc-iomem","children":[]},{"level":3,"title":"2.14、/proc/ioports","slug":"_2-14、-proc-ioports","link":"#_2-14、-proc-ioports","children":[]},{"level":3,"title":"2.15、/proc/kallsyms","slug":"_2-15、-proc-kallsyms","link":"#_2-15、-proc-kallsyms","children":[]},{"level":3,"title":"2.16、/proc/kcore","slug":"_2-16、-proc-kcore","link":"#_2-16、-proc-kcore","children":[]},{"level":3,"title":"2.17、/proc/kmsg","slug":"_2-17、-proc-kmsg","link":"#_2-17、-proc-kmsg","children":[]},{"level":3,"title":"2.18、/proc/loadavg","slug":"_2-18、-proc-loadavg","link":"#_2-18、-proc-loadavg","children":[]},{"level":3,"title":"2.19、/proc/locks","slug":"_2-19、-proc-locks","link":"#_2-19、-proc-locks","children":[]},{"level":3,"title":"2.20、/proc/mdstat","slug":"_2-20、-proc-mdstat","link":"#_2-20、-proc-mdstat","children":[]},{"level":3,"title":"2.21、/proc/meminfo","slug":"_2-21、-proc-meminfo","link":"#_2-21、-proc-meminfo","children":[]},{"level":3,"title":"2.22、/proc/mounts","slug":"_2-22、-proc-mounts","link":"#_2-22、-proc-mounts","children":[]},{"level":3,"title":"2.23、/proc/modules","slug":"_2-23、-proc-modules","link":"#_2-23、-proc-modules","children":[]},{"level":3,"title":"2.24、/proc/partitions","slug":"_2-24、-proc-partitions","link":"#_2-24、-proc-partitions","children":[]},{"level":3,"title":"2.25、/proc/pci","slug":"_2-25、-proc-pci","link":"#_2-25、-proc-pci","children":[]},{"level":3,"title":"2.26、/proc/slabinfo","slug":"_2-26、-proc-slabinfo","link":"#_2-26、-proc-slabinfo","children":[]},{"level":3,"title":"2.27、/proc/stat","slug":"_2-27、-proc-stat","link":"#_2-27、-proc-stat","children":[]},{"level":3,"title":"2.28、/proc/swaps","slug":"_2-28、-proc-swaps","link":"#_2-28、-proc-swaps","children":[]},{"level":3,"title":"2.29、/proc/uptime","slug":"_2-29、-proc-uptime","link":"#_2-29、-proc-uptime","children":[]},{"level":3,"title":"2.30、/proc/version","slug":"_2-30、-proc-version","link":"#_2-30、-proc-version","children":[]},{"level":3,"title":"2.31、/proc/vmstat","slug":"_2-31、-proc-vmstat","link":"#_2-31、-proc-vmstat","children":[]},{"level":3,"title":"2.32、/proc/zoneinfo","slug":"_2-32、-proc-zoneinfo","link":"#_2-32、-proc-zoneinfo","children":[]}]},{"level":2,"title":"三、/proc/sys目录详解","slug":"三、-proc-sys目录详解","link":"#三、-proc-sys目录详解","children":[{"level":3,"title":"3.1、/proc/sys/debug 子目录","slug":"_3-1、-proc-sys-debug-子目录","link":"#_3-1、-proc-sys-debug-子目录","children":[]},{"level":3,"title":"3.2、/proc/sys/dev 子目录","slug":"_3-2、-proc-sys-dev-子目录","link":"#_3-2、-proc-sys-dev-子目录","children":[]}]}],"git":{"createdTime":1691939318000,"updatedTime":1691939318000,"contributors":[{"name":"PaperDragon","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":42.71,"words":12813},"filePathRelative":"note-book/OperaSystems/proc详解.md","localizedDate":"2023年8月13日","excerpt":"\\n<blockquote>\\n<p>如果哪里都找不到就来内核文档看看吧</p>\\n<ul>\\n<li>https://docs.kernel.org/filesystems/proc.html</li>\\n</ul>\\n</blockquote>\\n<blockquote>\\n<ul>\\n<li>内容摘要：Linux系统上的/proc目录是一种文件系统，即proc文件系统。</li>\\n</ul>\\n<p>Linux系统上的/proc目录是一种文件系统，即proc文件系统。与其它常见的文件系统不同的是，/proc是一种伪文件系统（也即虚拟文件系统），存储的是当前内核运行状态的一系列特殊文件，用户可以通过这些文件查看有关系统硬件及当前正在运行进程的信息，甚至可以通过更改其中某些文件来改变内核的运行状态。</p>\\n<p>基于/proc文件系统如上所述的特殊性，其内的文件也常被称作虚拟文件，并具有一些独特的特点。例如，其中有些文件虽然使用查看命令查看时会返回大量信息，但文件本身的大小却会显示为0字节。此外，这些特殊文件中大多数文件的时间及日期属性通常为当前系统时间和日期，这跟它们随时会被刷新（存储于RAM中）有关。</p>\\n<p>为了查看及使用上的方便，这些文件通常会按照相关性进行分类存储于不同的目录甚至子目录中，如/proc/scsi目录中存储的就是当前系统上所有SCSI设备的相关信息，/proc/N中存储的则是系统当前正在运行的进程的相关信息，其中N为正在运行的进程（可以想象得到，在某进程结束后其相关目录则会消失）。</p>\\n<p>大多数虚拟文件可以使用文件查看命令如cat、more或者less进行查看，有些文件信息表述的内容可以一目了然，但也有文件的信息却不怎么具有可读性。不过，这些可读性较差的文件在使用一些命令如apm、free、lspci或top查看时却可以有着不错的表现。</p>\\n</blockquote>","autoDesc":true}');export{b as comp,m as data};
