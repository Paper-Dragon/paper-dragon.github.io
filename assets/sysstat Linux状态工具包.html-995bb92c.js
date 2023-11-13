import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as l,c as r,a as t,e as s,d as a,f as i}from"./app-231d24e9.js";const u={},c=t("h1",{id:"简介",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#简介","aria-hidden":"true"},"#"),s(" 简介")],-1),d=t("br",null,null,-1),p=t("br",null,null,-1),h=t("br",null,null,-1),_=t("br",null,null,-1),b=t("br",null,null,-1),g=t("br",null,null,-1),m=t("br",null,null,-1),f=t("br",null,null,-1),y=t("br",null,null,-1),x=t("br",null,null,-1),k=t("br",null,null,-1),w={href:"http://sebastien.godard.pagesperso-orange.fr/",target:"_blank",rel:"noopener noreferrer"},L=i(`<h1 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h1><pre><code>网络安装
对于大多数Linux系统，都有sysstat安装包，可以通过网络来进行安装：
以CentOS系统为例，可以通过yum来进行安装：
[plain] view plain copy
[root@centos ~]# yum install sysstat
以Ubuntu系统为例, 可以通过apt-get来进行安装：
[plain] view plain copy
[root@localhost ~]# apt-get install sysstat
源码安装
可以在官网： http://sebastien.godard.pagesperso-orange.fr/download.html或GITHUB：https://github.com/sysstat/sysstat下载sysstat的源码。
按照下面的步骤来进行源码安装(以Ubuntu系统为例)：
[plain] view plain copy
root@ubuntu:~# apt-get install xz-utils
root@ubuntu:~# xz -d sysstat-11.0.5.tar.xz
root@ubuntu:~# tar -xvf sysstat-11.0.5.tar
root@ubuntu:~# cd sysstat-11.0.5
root@ubuntu:~/sysstat-11.0.5# ./configure --disable-nls
root@ubuntu:~/sysstat-11.0.5# make
root@ubuntu:~/sysstat-11.0.5# make install
注释1：从官网中下载的源码包为.tar.xz压缩文件，需要安装xz-utils工具包，先通过xz -d解压为tar文件，然后再通过tar命令解压
注释2：编译过程中如果遇到问题，可以查看源码根目录下的FAQ文件获取帮助信息
注释3：如果需要多语言支持，需要安装GNU gettext包，否则可能遇到”make: ***[locales] Error 127“错误，本例子中通过”–disable-nls&quot;配置项禁用了该选项。可以参考FAQ中的信息来解决相应问题:
[plain] view plain copy
1.1. When I compile sysstat, it fails with the following message:
make: msgfmt: Command not found
make: ***[locales] Error 127
</code></pre><p>The msgfmt command belongs to the GNU gettext package.<br> If you don’t have it on your system, just configure sysstat with<br> NLS disabled like this:</p><p>$ ./configure --disable-nls</p><h2 id="or-answer-y-for-yes-to-the-question-disable-national-language-support-nls-y-n-–disable-nls-if-you-use-the-interactive-configuration-script-iconfig-then-compile-sysstat-as-usual-make-make-install-please-read-the-readme-nls-file-included-in-sysstat-source-package-to-learnsome-more-about-national-language-support" tabindex="-1"><a class="header-anchor" href="#or-answer-y-for-yes-to-the-question-disable-national-language-support-nls-y-n-–disable-nls-if-you-use-the-interactive-configuration-script-iconfig-then-compile-sysstat-as-usual-make-make-install-please-read-the-readme-nls-file-included-in-sysstat-source-package-to-learnsome-more-about-national-language-support" aria-hidden="true">#</a> or answer ‘y’ (for “yes”) to the question<br> “Disable National Language Support (NLS)? (y/n) [–disable-nls]”<br> if you use the Interactive Configuration script (iconfig),<br> then compile sysstat as usual (make ; make install).<br> Please read the README-nls file included in sysstat source package to learn<br> some more about National Language Support.</h2>`,5),v=t("br",null,null,-1),N={href:"https://blog.51cto.com/fangwei009/2088551",target:"_blank",rel:"noopener noreferrer"};function C(I,S){const e=o("ExternalLinkIcon");return l(),r("div",null,[c,t("p",null,[s("sysstat提供了Linux性能监控的工具集，包括sar、sadf、mpstat、iostat、pidstat等，这些工具可以监控系统性能和使用情况。各工具的作用如下："),d,s(" iostat - 提供CPU统计，存储I/O统计（磁盘设备，分区及网络文件系统）"),p,s(" mpstat - 提供单个或组合CPU相关统计"),h,s(" pidstat - 提供Linux进程级别统计：I/O、CPU、内存等"),_,s(" sar - 收集、报告、保存系统活动信息：CPU、内存、磁盘、中断、网络接口、TTY、内核表等"),b,s(" sadc - 系统活动数据收集器，作为sar后端使用"),g,s(" sa1 - 收集系统活动日常数据，并二进制格式存储，它作为sadc的工具的前端，可以通过cron来调用"),m,s(" sa2 - 生成系统每日活动报告，同样可作为sadc的工具的前端，可以通过cron来调用"),f,s(" sadf - 可以以CSV、XML格式等显示sar收集的性能数据，这样非常方便的将系统数据导入到数据库中，或导入到Excel中来生成图表"),y,s(" nfsiostat-sysstat: 提供NFS I/O统计"),x,s(" cifsiostat: 提供CIFS统计"),k,s(" sysstat功能强大，功能也在不断的增强，每个版本提供了不同的功能，用户可以到sysstat官网了解工具最先发展情况和获得相应的帮助手册。官网地址： "),t("a",w,[s("http://sebastien.godard.pagesperso-orange.fr/"),a(e)])]),L,t("p",null,[s("Linux性能监控工具sysstat系列：介绍与安装"),v,t("a",N,[s("https://blog.51cto.com/fangwei009/2088551"),a(e)])])])}const z=n(u,[["render",C],["__file","sysstat Linux状态工具包.html.vue"]]);export{z as default};
