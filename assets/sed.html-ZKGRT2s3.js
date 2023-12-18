import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o,c as d,e as a}from"./app-6TPPU4Zq.js";const n={},r=a(`<h1 id="linux三剑客-sed" tabindex="-1"><a class="header-anchor" href="#linux三剑客-sed" aria-hidden="true">#</a> Linux三剑客-sed</h1><pre><code>19999,9999,9999,9999
[root@handsome-man ~]# 
</code></pre><h2 id="sed命令执行过程" tabindex="-1"><a class="header-anchor" href="#sed命令执行过程" aria-hidden="true">#</a> sed命令执行过程</h2><p>https://www.processon.com/view/link/5bea32c5e4b0ad314e894f53</p><p>sed -n &#39;3 p&#39; oldboy.txt 参数 条件 命令</p><p>print sed取范围</p><pre><code>[root@oldboyedu59 /oldboy]# sed -n &#39;5p&#39; lidao.txt
105,feixue,CIO
[root@oldboyedu59 /oldboy]# sed -n &#39;1,5p&#39; lidao.txt
101,oldboy,CEO
102,zhangyao,CTO
103,Alex,COO
104,yy,CFO
105,feixue,CIO
</code></pre><h3 id="找出文件中包含lidao的行" tabindex="-1"><a class="header-anchor" href="#找出文件中包含lidao的行" aria-hidden="true">#</a> 找出文件中包含lidao的行</h3><pre><code>[root@handsome-man ~]# sed -n &#39;/lidao/p&#39; /oldboy/oldboy.txt
110,lidao,COCO
</code></pre><h3 id="找出文件中包含a-z的行" tabindex="-1"><a class="header-anchor" href="#找出文件中包含a-z的行" aria-hidden="true">#</a> 找出文件中包含a-z的行</h3><pre><code>[root@handsome-man ~]# sed -n &#39;/[a-z]/p&#39; /oldboy/oldboy.txt
101,alex,CEO
102,zhangyao,CTO
103,Alex,COO
104,yy,CFO
104,yy,CFO
104,yy,CFO
105,feixue,CIO
110,lidao,COCO
</code></pre><h3 id="找出文件中包含lidao或yy的行-格式-sed-nr" tabindex="-1"><a class="header-anchor" href="#找出文件中包含lidao或yy的行-格式-sed-nr" aria-hidden="true">#</a> 找出文件中包含lidao或yy的行 格式 sed -nr &#39;/ / /&#39; /</h3><h3 id="sed➕-r的参数才能支持扩展正则" tabindex="-1"><a class="header-anchor" href="#sed➕-r的参数才能支持扩展正则" aria-hidden="true">#</a> sed➕-r的参数才能支持扩展正则</h3><pre><code>[root@handsome-man ~]# sed -nr &#39;/lidao|yy/p&#39; /oldboy/oldboy.txt
104,yy,CFO
104,yy,CFO
104,yy,CFO
110,lidao,COCO
</code></pre><h2 id="用egrep的方法" tabindex="-1"><a class="header-anchor" href="#用egrep的方法" aria-hidden="true">#</a> 用egrep的方法</h2><pre><code>[root@handsome-man ~]# egrep &#39;lidao|yy&#39; /oldboy/oldboy.txt
104,yy,CFO
104,yy,CFO
104,yy,CFO
110,lidao,COCO
</code></pre><h3 id="用grep的方法" tabindex="-1"><a class="header-anchor" href="#用grep的方法" aria-hidden="true">#</a> 用grep的方法</h3><pre><code>[root@handsome-man ~]# grep &#39;lidao\\|yy&#39;  /oldboy/oldboy.txt
104,yy,CFO
104,yy,CFO
104,yy,CFO
110,lidao,COCO
</code></pre><h3 id="取-oldboy-oldboy-txt文件中102-105行" tabindex="-1"><a class="header-anchor" href="#取-oldboy-oldboy-txt文件中102-105行" aria-hidden="true">#</a> 取/oldboy/oldboy.txt文件中102-105行</h3><pre><code> sed -n &#39;/102/,/105/p&#39;  /oldboy/oldboy.txt
102,zhangyao,CTO
19999,9999,9999,9999
188888,8888,8888
103,Alex,COO
104,yy,CFO
118.1111,1111,2222
104,yy,CFO
104,yy,CFO
105,feixue,CIO
</code></pre><h3 id="在-oldboy-oldboy-txt文件第3行之后添加一行" tabindex="-1"><a class="header-anchor" href="#在-oldboy-oldboy-txt文件第3行之后添加一行" aria-hidden="true">#</a> 在/oldboy/oldboy.txt文件第3行之后添加一行</h3><pre><code>[root@handsome-man ~]# sed &#39;3a119,hahaha,ooo&#39;  /oldboy/oldboy.txt101,alex,CEO
102,zhangyao,CTO
19999,9999,9999,9999
119,hahaha,ooo
188888,8888,8888
103,Alex,COO
104,yy,CFO
118.1111,1111,2222
104,yy,CFO
104,yy,CFO
105,feixue,CIO
110,lidao,COCO 
</code></pre><h3 id="在-oldboy-oldboy-txt文件第3行之前添加一行" tabindex="-1"><a class="header-anchor" href="#在-oldboy-oldboy-txt文件第3行之前添加一行" aria-hidden="true">#</a> 在/oldboy/oldboy.txt文件第3行之前添加一行</h3><pre><code>[root@handsome-man ~]# sed &#39;3i8888,8888,8888,8888&#39;  /oldboy/oldboy.txt
101,alex,CEO
102,zhangyao,CTO
8888,8888,8888,8888
19999,9999,9999,9999
188888,8888,8888
103,Alex,COO
104,yy,CFO
118.1111,1111,2222
104,yy,CFO
104,yy,CFO
105,feixue,CIO
110,lidao,COCO
</code></pre><h3 id="删除-oldboy-oldboy-txt文件中的空行" tabindex="-1"><a class="header-anchor" href="#删除-oldboy-oldboy-txt文件中的空行" aria-hidden="true">#</a> 删除/oldboy/oldboy,txt文件中的空行</h3><pre><code>[root@handsome-man ~]# sed &#39;/^$/d&#39;   /oldboy/oldboy.txt
101,alex,CEO
102,zhangyao,CTO
19999,9999,9999,9999
188888,8888,8888
:103,Alex,COO
104,yy,CFO
118.1111,1111,2222
104,yy,CFO
104,yy,CFO
105,feixue,CIO
110,lidao,COCO
</code></pre><h2 id="awk-拓展" tabindex="-1"><a class="header-anchor" href="#awk-拓展" aria-hidden="true">#</a> awk 拓展</h2><p>[root@handsome-man ~]# awk &#39;/^$/&#39; /oldboy/oldboy.txt</p><h3 id="用awk-显示与不显示空行" tabindex="-1"><a class="header-anchor" href="#用awk-显示与不显示空行" aria-hidden="true">#</a> 用awk 显示与不显示空行</h3><pre><code>[root@handsome-man ~]# awk &#39;!/^$/&#39; /oldboy/oldboy.txt       
101,alex,CEO
102,zhangyao,CTO
19999,9999,9999,9999
188888,8888,8888
:103,Alex,COO
104,yy,CFO
118.1111,1111,2222
104,yy,CFO
104,yy,CFO
105,feixue,CIO
110,lidao,COCO
</code></pre><h3 id="不显示文件-etc-ssh-sshd-config-的空行或以-号开头的行" tabindex="-1"><a class="header-anchor" href="#不显示文件-etc-ssh-sshd-config-的空行或以-号开头的行" aria-hidden="true">#</a> 不显示文件/etc/ssh/sshd_config 的空行或以#号开头的行</h3><pre><code>egrep -v &#39;^$|^#&#39; /etc/ssh/sshd_config 
sed -r &#39;/^$|^#/d&#39; /etc/ssh/sshd_config
sed -rn &#39;/^$|^#/!p&#39; /etc/ssh/sshd_config
 
grep &#39;^[a-Z]&#39; /etc/ssh/sshd_config
 
awk &#39;!/^$|^#/&#39;  /etc/ssh/sshd_config
</code></pre><h3 id="把文件中的lidao替换成alex" tabindex="-1"><a class="header-anchor" href="#把文件中的lidao替换成alex" aria-hidden="true">#</a> 把文件中的lidao替换成alex</h3><h3 id="格式是-sed-s-g-其中的-可以换成任意字符。" tabindex="-1"><a class="header-anchor" href="#格式是-sed-s-g-其中的-可以换成任意字符。" aria-hidden="true">#</a> 格式是 sed &#39;s# # #g&#39; / / 其中的#可以换成任意字符。</h3><pre><code>[root@handsome-man ~]# sed &#39;s#lidao#alex#g&#39; /oldboy/oldboy.txt
101,alex,CEO
102,zhangyao,CTO
</code></pre><p>​<br> 19999,9999,9999,9999</p><pre><code>188888,8888,8888
 
:103,Alex,COO
104,yy,CFO
118.1111,1111,2222
104,yy,CFO
104,yy,CFO
105,feixue,CIO
110,alex,COCO
</code></pre><p>———————————————— 版权声明：本文为CSDN博主「追梦娃」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。 原文链接：https://blog.csdn.net/weixin_44922815/article/details/89391262</p>`,38),h=[r];function t(y,s){return o(),d("div",null,h)}const c=e(n,[["render",t],["__file","sed.html.vue"]]);export{c as default};
