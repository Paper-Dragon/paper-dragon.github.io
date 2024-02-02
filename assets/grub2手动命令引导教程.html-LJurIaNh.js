import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as i,d as r}from"./app-t1xXGDLw.js";const t={},e=r(`<h1 id="grub2各种手动命令引导教程" tabindex="-1"><a class="header-anchor" href="#grub2各种手动命令引导教程"><span>grub2各种手动命令引导教程</span></a></h1><h2 id="手动引导ubuntu的iso镜像文件" tabindex="-1"><a class="header-anchor" href="#手动引导ubuntu的iso镜像文件"><span>手动引导ubuntu的iso镜像文件</span></a></h2><p>从而安装ubuntu，grub&gt;代表命令的开始</p><p>假设ubuntu镜像在U盘的第一个分区的根目录下即：(hd0,1)/ubuntu-18.04-desktop-amd64.iso</p><p>手动引导下可以按TAB键补全命令、目录以及文件名</p><pre><code>#查询所有已安装磁盘并打印详细信息
grub&gt;ls -l
 
 #设置根目录分区
grub&gt;set root=(hd0,1)
 
#将Ubuntu.iso位置赋值给变量isofile （这里用变量方便下面不用打一长串文件名）
grub&gt;set isofile=/ubuntu-18.04-desktop-amd64.iso
 
#使用grub2的回放技术，把ubuntu.iso的文件内容，投射（挂载）到loop上。在使用这个命令时，你得考虑你的内存足够的大。(hd0,1)iso镜像文件所在分区
grub&gt;loopback loop (hd0,1)$isofile
 
#加载内核，其中(loop),是使用了上一句所投射的设备，其访问的是ubuntu.iso文件的内容，boor=casper将目录casper挂载为boot，iso-scan/filename=$isofile 是利用iso-scan来寻找到你的ubuntu.iso文件所在位置并把所找到的iso文件挂到光驱设备
grub&gt;linux (loop)/casper/vmlinuz boot=casper iso-scan/filename=$isofile quiet splash
 
#initrid.lz是一个镜象文件，里面存的是一些内核要加载的重要文件
grub&gt;initrd (loop)/casper/initrd.lz
 
#根据上面的参数启动系统
grub&gt;boot
</code></pre><p>-----------------------------------------------------------------------分割线-----------------------------------------------------------------------------------------</p><h2 id="手动引导archlinux的iso镜像文件从而安装archlinux" tabindex="-1"><a class="header-anchor" href="#手动引导archlinux的iso镜像文件从而安装archlinux"><span>手动引导archlinux的iso镜像文件从而安装archlinux</span></a></h2><p>，grub&gt;代表命令的开始</p><p>假设archlinux镜像在U盘的第一个分区的根目录下即：(hd0,1)/archlinux-2018.07.01-x86_64.iso</p><pre><code>grub&gt;set root=(hd0,1)
grub&gt;set isofile=/archlinux-2018.07.01-x86_64.iso
grub&gt;loopback loop (hd0,1)$isofile
 #img_dev=/dev/sda1 镜像文件所在分区设备，如果不清楚所在设备是怎么排序的可以使用img_dev=/dev/disk/by-uuid/分区的UUID 关于UUID可以用&quot;grub&gt;ls -l&quot; 指令查询,或者可以用img_dev=/dev/disk/by-labe/分区卷标 
grub&gt;linux (loop)/arch/boot/x86_64/vmlinuz img_dev=/dev/sda1 img_loop=$isofile earlymodules=loop
grub&gt;initrd (loop)/arch/boot/x86_64/archiso.img
grub&gt;boot
</code></pre><p>方法二：</p><pre><code>grub&gt;set root=(hd0,1)
grub&gt;set isofile=/arch.iso
grub&gt;loopback loop (hd0,1)$isofile
grub&gt;linux (loop)/arch/boot/x86_64/vmlinuz img_loop=$isofile archisobasedir=arch  archisolabel=ARCH_XXXXXX #此处为发布年月
grub&gt;initrd (loop)/arch/boot/x86_64/archiso.img
</code></pre><p>-----------------------------------------------------------------------分割线-----------------------------------------------------------------------------------------</p><h2 id="手动引导ubuntu" tabindex="-1"><a class="header-anchor" href="#手动引导ubuntu"><span>手动引导Ubuntu</span></a></h2><p>假设ubuntu安装在第一块硬盘的第一个分区即：(hd0,1)</p><pre><code>grub&gt;root=(hd0,1)
grub&gt;linux /boot/vmlinuz-xxx
grub&gt;initrd /boot/initrd.img-xxx
grub&gt;boot
</code></pre><p>XXX是内核版本号</p><p>关于linux的通用引导方法其实与上面差不多，就是在“grub&gt;linux /boot/vmlinuz-xxx”这一句加载内核的文件与后面跟的参数有所不同，不同的linux发行版会有不同的参数，有些可以也不加参数启动</p><p>-----------------------------------------------------------------------分割线-----------------------------------------------------------------------------------------</p><h2 id="手动引导uefi启动模式下的windows。" tabindex="-1"><a class="header-anchor" href="#手动引导uefi启动模式下的windows。"><span>手动引导uefi启动模式下的Windows。</span></a></h2><p>winPE也可以用此方法引导</p><p>假设windows安装在第一块硬盘的第一个分区即：(hd0,1)</p><pre><code>#加载ntfs文件系统
grub&gt;insmod ntfs
grub&gt;set root=(hd0,1)
#grub&gt;chainloader +1 是引导传统bios启动的Windows
#如果不成功则可能是efi文件被替换用换个目录试试如：chainloader/EFI/microsoft/boot/bootmgfw.efi
grub&gt;chainloader /EFI/boot/bootx64.efi
grub&gt;boot
</code></pre><p>-----------------------------------------------------------------------分割线-----------------------------------------------------------------------------------------</p><h2 id="手动引导bios启动模式下的windows。" tabindex="-1"><a class="header-anchor" href="#手动引导bios启动模式下的windows。"><span>手动引导bios启动模式下的Windows。</span></a></h2><p>winPE也可以用此方法引导</p><p>假设windows安装在第一块硬盘的第一个分区即：(hd0,1)</p><p>chainloader /bootmgr 命令会报签名错误，即使关闭签名验证也无法启动(chainloader +1也可启动系统但不可启动U盘pe)</p><pre><code>grub&gt;set root=(hd0,1)
# /bootmgr 是一个在根目录下的引导文件，bootmgr是在Windows Vista、Windows 7、windows 8/8.1和windows 10中使用的新的启动管理器，就相当于Win NT/Win 2000/Win XP时代的NTLDR。
grub&gt;ntldr /bootmgr
grub&gt;boot
</code></pre>`,30),s=[e];function u(a,d){return n(),i("div",null,s)}const g=o(t,[["render",u],["__file","grub2手动命令引导教程.html.vue"]]);export{g as default};
