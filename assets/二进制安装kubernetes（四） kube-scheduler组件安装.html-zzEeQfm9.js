import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as d,e as t}from"./app-HEIvoBf_.js";const i={},r=t(`<h1 id="介绍资料转载地址-https-www-jianshu-com-p-c4c60ccda8d0" tabindex="-1"><a class="header-anchor" href="#介绍资料转载地址-https-www-jianshu-com-p-c4c60ccda8d0" aria-hidden="true">#</a> 介绍资料转载地址：https://www.jianshu.com/p/c4c60ccda8d0</h1><h1 id="kube-scheduler在集群中的作用" tabindex="-1"><a class="header-anchor" href="#kube-scheduler在集群中的作用" aria-hidden="true">#</a> kube-scheduler在集群中的作用</h1><p>kube-scheduler是以插件形式存在的组件，正因为以插件形式存在，所以其具有可扩展可定制的特性。kube-scheduler相当于整个集群的调度决策者，其通过预选和优选两个过程决定容器的最佳调度位置。</p><h1 id="kube-scheduler源码中的关键性调用链" tabindex="-1"><a class="header-anchor" href="#kube-scheduler源码中的关键性调用链" aria-hidden="true">#</a> kube-scheduler源码中的关键性调用链</h1><p>![img](二进制安装kubernetes（四） kube-scheduler组件安装.assets/webp-16918409243531.webp)</p><p>kube-scheduler部署在hdss7-21,22上：</p><p>创建启动脚本：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># vi /opt/kubernetes/server/bin/kube-scheduler.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/sh
./kube-scheduler \\
  --leader-elect  \\
  --log-dir /data/logs/kubernetes/kube-scheduler \\
  --master http://127.0.0.1:8080 \\
  --v 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行权限：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># chmod +x /opt/kubernetes/server/bin/kube-scheduler.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建日志存储目录：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># mkdir -p /data/logs/kubernetes/kube-scheduler
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>编辑supervisord脚本：红色部分第二台需要修改</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> # vi /etc/supervisord.d/kube-scheduler.ini
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[program:kube-scheduler-7-21]
command=/opt/kubernetes/server/bin/kube-scheduler.sh                     ; the program (relative uses PATH, can take args)
numprocs=1                                                               ; number of processes copies to start (def 1)
directory=/opt/kubernetes/server/bin                                     ; directory to cwd to before exec (def no cwd)
autostart=true                                                           ; start at supervisord start (default: true)
autorestart=true                                                         ; retstart at unexpected quit (default: true)
startsecs=30                                                             ; number of secs prog must stay running (def. 1)
startretries=3                                                           ; max # of serial start failures (default 3)
exitcodes=0,2                                                            ; &#39;expected&#39; exit codes for process (default 0,2)
stopsignal=QUIT                                                          ; signal used to kill process (default TERM)
stopwaitsecs=10                                                          ; max num secs to wait b4 SIGKILL (default 10)
user=root                                                                ; setuid to this UNIX account to run the program
redirect_stderr=true                                                     ; redirect proc stderr to stdout (default false)
stdout_logfile=/data/logs/kubernetes/kube-scheduler/scheduler.stdout.log ; stderr log path, NONE for none; default AUTO
stdout_logfile_maxbytes=64MB                                             ; max # logfile bytes b4 rotation (default 50MB)
stdout_logfile_backups=4                                                 ; # of stdout logfile backups (default 10)
stdout_capture_maxbytes=1MB                                              ; number of bytes in &#39;capturemode&#39; (default 0)
stdout_events_enabled=false                                              ; emit events on stdout writes (default false)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更新supervisord：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># supervisorctl update
# supervisorctl status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>![image-20220516193153415](二进制安装kubernetes（四） kube-scheduler组件安装.assets/image-20220516193153415-16918409997831.png)</p><p>检查一下状态：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># ln -s /opt/kubernetes/server/bin/kubectl /usr/bin/kubectl
# kubectl get cs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>![image-20220516193203467](二进制安装kubernetes（四） kube-scheduler组件安装.assets/image-20220516193203467-16918410015233.png)</p><p>至此kube-scheduler已经安装完成，接下来安装kubelet。</p>`,23),a=[r];function n(u,l){return s(),d("div",null,a)}const v=e(i,[["render",n],["__file","二进制安装kubernetes（四） kube-scheduler组件安装.html.vue"]]);export{v as default};
