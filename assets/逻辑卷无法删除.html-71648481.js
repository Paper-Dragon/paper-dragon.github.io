import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o,c as s,f as r}from"./app-11b06613.js";const t={},d=r(`<h1 id="逻辑卷删除问题" tabindex="-1"><a class="header-anchor" href="#逻辑卷删除问题" aria-hidden="true">#</a> 逻辑卷删除问题</h1><p>存储池名称：fs2<br> 逻辑卷名称：fs2<br> 逻辑卷文件系统被占用(Logical volume /dev/<em>/</em> contains a filesystem in use.)</p><p>[root@f1s2001 ldnas]# lvremove -f /dev/fs2/fs2<br> Logical volume fs2/fs2 contains a filesystem in use.</p><h1 id="逻辑卷可能被挂载了" tabindex="-1"><a class="header-anchor" href="#逻辑卷可能被挂载了" aria-hidden="true">#</a> 逻辑卷可能被挂载了</h1><p>​ df 查看挂载详情，找到对应逻辑卷进行卸载操作后，再执行删除<br> ​ 若挂载信息为：<br> ​ /dev/fs2/fs2 1038336 32996 1005340 4% /mnt<br> ​ 执行 umount /dev/fs2/fs2 或 umount /mnt 进行卸载</p><pre><code>    若出现umount 错误：
        umount: /mnt: target is busy.
        (In some cases useful info about processes that use
         the device is found by lsof(8) or fuser(1))

    此错误说明/mnt 目录可能被占用了，可关闭或杀死占用程序，通过此命令查找占用进程：
        fuser -m /dev/fs2/fs2 或 fuser -m /mnt
        返回：/mnt:                17311c
        杀死进程： kill -9 17311
        也可通过 lsof -p 17311 命令查找到相关进程进行关闭
</code></pre><p>之后再执行删除操作<br> 逻辑卷被其他设备占用(Logical volume /dev/<em>/</em> is used by another device.)</p><p>[root@f1s2001 ldnas]# lvremove -f /dev/fs2/fs2<br> Logical volume fs2/fs2 is used by another device.<br> 逻辑卷被其他设备占用了，需要先释放掉设备，首先查找到逻辑卷的映射<br> [root@f1s2001 fine1]# dmsetup info -c | grep fs2<br> fs2-fs2 253 1 L--w 1 1 0 LVM-OC1NaKa5z4xnsTcIS5chrT4nclVg53lBhaaduekEB7M50Qz70o9vg4sDfSdQSaq9</p><p>然后查找映射设备，命令中的253 和1 在上个命令返回结果中<br> [root@f1s2001 fine1]# ls -la /sys/dev/block/253:1/holders<br> total 0<br> drwxr-xr-x 2 root root 0 Nov 18 10:25 .<br> drwxr-xr-x 8 root root 0 Nov 18 10:07 ..<br> lrwxrwxrwx 1 root root 0 Nov 18 10:25 md125 -&gt; ../../md125</p><p>删除md 设备，命令如下：<br> [root@f1s2001 fine1]# mdadm -S /dev/md125<br> mdadm: stopped /dev/md125</p><pre><code>*若为dm 设备，则删除对应dm-？设备，如：
     dmsetup remove /dev/dm-18
</code></pre><p>之后再进行逻辑卷的删除</p>`,12),n=[d];function f(a,m){return o(),s("div",null,n)}const l=e(t,[["render",f],["__file","逻辑卷无法删除.html.vue"]]);export{l as default};
