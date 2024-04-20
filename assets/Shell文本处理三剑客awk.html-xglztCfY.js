import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as n,d as s}from"./app-BcBfaqWW.js";const a={},l=s(`<h1 id="shell文本处理三剑客awk" tabindex="-1"><a class="header-anchor" href="#shell文本处理三剑客awk"><span>Shell文本处理三剑客awk</span></a></h1><h2 id="_2-1awk简介" tabindex="-1"><a class="header-anchor" href="#_2-1awk简介"><span><strong>2.1awk简介</strong></span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>awk 是一种编程语言，用于在linux/unix下对文本和数据进行处理。数据可以来自标准输入、一个或多个文件，或其它命令的输出。它支持用户自定义函数和动态正则表达式等先进功能，是linux/unix下的一个强大编程工具。它在命令行中使用，但更多是作为脚本来使用。awk的处理文本和数据的方式是这样的，它逐行扫描文件，从第一行到最后一行，寻找匹配的特定模式的行，并在这些行上进行你想要的操作。如果没有指定处理动作，则把匹配的行显示到标准输出(屏幕)，如果没有指定模式，则所有被操作所指定的行都被处理。awk分别代表其作者姓氏的第一个字母。因为它的作者是三个人，分别是Alfred Aho、Brian Kernighan、Peter Weinberger。gawk是awk的GNU版本，它提供了Bell实验室和GNU的一些扩展。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-2awk的语法格式" tabindex="-1"><a class="header-anchor" href="#_2-2awk的语法格式"><span><strong>2.2awk的语法格式</strong></span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>awk [options] &#39;commands&#39; filenames
awk [options] -f awk-script-file filenames

options：
-F   定义输入字段分隔符，默认的分隔符是空格或制表符(tab)
command：
BEGIN{}       {}                END{}
行处理前      行处理       行处理后
[root@xulei ~]# awk &#39;BEGIN{print 1/2} {print &quot;ok&quot;} END{print &quot;-----------&quot;}&#39; /etc/hosts
0.5
ok
ok
ok
-----------
BEGIN{} 通常用于定义一些变量，例如BEGIN{FS=&quot;:&quot;;OFS=&quot;---&quot;}
awk命令格式：
awk &#39;pattern&#39; filename  
示例：awk -F: &#39;/root/&#39; /etc/passwd     
awk &#39;{action}&#39; filename                     
示例：awk -F: &#39;{print $1}&#39; /etc/passwd         
awk &#39;pattern {action}&#39; filename         
示例：awk -F: &#39;/root/{print $1,$3}&#39; /etc/passwd        
示例：awk &#39;BEGIN{FS=&quot;:&quot;} /root/{print $1,$3}&#39; /etc/passwd
command |awk &#39;pattern {action}&#39;      
示例：df -P| grep  &#39;/&#39; |awk &#39;$4 &gt; 25000 {print $4}&#39;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-3awk工作原理" tabindex="-1"><a class="header-anchor" href="#_2-3awk工作原理"><span><strong>2.3awk工作原理</strong></span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[root@xulei ~}# awk -F: &#39;{print $1,$3}&#39; /etc/passwd
(1)awk使用一行作为输入，并将这一行赋给内部变量$0，每一行也可称为一个记录，以换行符结束
(2)然后，行被:（默认为空格或制表符）分解成字段（或域），每个字段存储在已编号的变量中，从$1开始，
最多达100个字段
(3)awk如何知道用空格来分隔字段的呢？ 因为有一个内部变量FS来确定字段分隔符。初始时，FS赋为空格
(4)awk打印字段时，将以设置的方法使用print函数打印，awk在打印的字段间加上空格，因为$1,$3之间有一个逗号。逗号比较特殊，它映射为另一个内部变量，称为输出字段分隔符OFS，OFS默认为空格
(5)awk输出之后，将从文件中获取另一行，并将其存储在$0中，覆盖原来的内容，然后将新的字符串分隔成字段并进行处理。该过程将持续到所有行处理完毕
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-4记录与字段相关内部变量-man-awk" tabindex="-1"><a class="header-anchor" href="#_2-4记录与字段相关内部变量-man-awk"><span><strong>2.4记录与字段相关内部变量：man awk</strong></span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$0：     awk变量$0保存当前记录的内容                             [root@xulei ~]# awk -F: &#39;{print $0}&#39; /etc/passwd
NR：     The total number of input records seen so far.      [root@xulei ~]# awk -F: &#39;{print NR, $0}&#39; /etc/passwd /etc/hosts
FNR：   The input record number in the current input file    [root@xulei ~]# awk -F: &#39;{print FNR, $0}&#39; /etc/passwd /etc/hosts
NF：     保存记录的字段数，$1,$2...$100                           [root@xulei ~]# awk -F: &#39;{print $0,NF}&#39; /etc/passwd
FS：     输入字段分隔符，默认空格                                 [root@xulei ~]# awk -F: &#39;/alice/{print $1, $3}&#39; /etc/passwd
[root@xulei ~]# awk -F&#39;[ :\\t]&#39; &#39;{print $1,$2,$3}&#39; /etc/passwd   
[root@xulei ~]# awk &#39;BEGIN{FS=&quot;:&quot;} {print $1,$3}&#39; /etc/passwd
OFS：     输出字段分隔符                                       [root@xulei ~]# awk -F: &#39;/alice/{print $1,$2,$3,$4}&#39; /etc/passwd
[root@xulei ~]# awk &#39;BEGIN{FS=&quot;:&quot;; OFS=&quot;+++&quot;} /^root/{print $1,$2,$3,$4}&#39; passwd
RS:       The input record separator, by default a newline. [root@xulei ~]# awk -F: &#39;BEGIN{RS=&quot; &quot;} {print $0}&#39; a.txt
ORS:      The output record separator, by default a newline. [root@xulei ~]# awk -F: &#39;BEGIN{ORS=&quot;&quot;} {print $0}&#39; passwd
区别：
字段分隔符: FS OFS  默认空格或制表符
记录分隔符: RS ORS 默认换行符

lab1:
[root@xulei ~]# awk &#39;BEGIN{ORS=&quot; &quot;} {print $0}&#39; /etc/passwd 
将文件每一行合并为一行,ORS默认输出一条记录应该回车，加了一个空格
lab2:
[root@xulei ~]# head -1 /etc/passwd &gt; passwd1
[root@xulei ~]# cat passwd1 
root:x:0:0:root:/root:/bin/bash
[root@xulei ~]# awk &#39;BEGIN{RS=&quot;:&quot;} {print $0}&#39; passwd1 
root
x
0
0
root
/root
/bin/bas
[root@xulei ~]# awk &#39;BEGIN{RS=&quot;:&quot;} {print $0}&#39; passwd1 |grep -v &#39;^$&#39; &gt; passwd2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-5格式化输出" tabindex="-1"><a class="header-anchor" href="#_2-5格式化输出"><span><strong>2.5格式化输出</strong></span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>print函数
[root@xulei ~]# date |awk &#39;{print &quot;Month: &quot; $2 &quot;\\nYear: &quot; $NF}&#39;
[root@xulei ~]# awk -F: &#39;{print &quot;username is: &quot; $1 &quot;\\t uid is: &quot; $3}&#39; /etc/passwd
[root@xulei ~]# awk -F: &#39;{print &quot;\\tusername and uid: &quot; $1,$3 &quot;!&quot;}&#39; /etc/passwd

printf函数
[root@xulei ~]# awk -F: &#39;{printf &quot;%-15s %-10s %-15s\\n&quot;, $1,$2,$3}&#39;  /etc/passwd
[root@xulei ~]# awk -F: &#39;{printf &quot;|%-15s| %-10s| %-15s|\\n&quot;, $1,$2,$3}&#39; /etc/passwd

%s 字符类型
%d 数值类型
%f 浮点类型
占15字符
- 表示左对齐，默认是右对齐
printf默认不会在行尾自动换行，加\\n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-6awk模式和动作" tabindex="-1"><a class="header-anchor" href="#_2-6awk模式和动作"><span><strong>2.6awk模式和动作</strong></span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    任何awk语句都由模式和动作组成。模式部分决定动作语句何时触发及触发事件。处理即对数据进行的操作。如果省略模式部分，动作将时刻保持执行状态。模式可以是任何条件语句或复合语句或正则表达式。模式包括两个特殊字段 BEGIN和END。使用BEGIN语句设置计数和打印头。BEGIN语句使用在任何文本浏览动作之前，之后文本浏览动作依据输入文本开始执行。END语句用来在awk完成文本浏览动作后打印输出文本总数和结尾状态。
模式可以是：

1.正则表达式：
匹配记录（整行）：
[root@xulei ~]# awk &#39;/^alice/&#39;  /etc/passwd
[root@xulei ~]# awk &#39;$0 ~ /^alice/&#39;  /etc/passwd
[root@xulei ~]# awk &#39;!/alice/&#39; passwd
[root@xulei ~]# awk &#39;$0 !~ /^alice/&#39;  /etc/passwd

匹配字段：匹配操作符（~ !~）
[root@xulei ~]# awk -F: &#39;$1 ~ /^alice/&#39;  /etc/passwd
[root@xulei ~]# awk -F: &#39;$NF !~ /bash$/&#39;  /etc/passwd

比较表达式：
比较表达式采用对文本进行比较，只有当条件为真，才执行指定的动作。比较表达式使用关系运算符,用于比较数字与字符串。

关系运算符
运算符         含义                           示例
&lt;             小于                           x&lt;y
&lt;=          小于或等于                        x&lt;=y
==            等于                           x==y
!=           不等于                           x!=y
&gt;=          大于等于                          x&gt;=y
&gt;             大于                            x&gt;y

[root@xulei ~]# awk -F: &#39;$3 == 0&#39; /etc/passwd
[root@xulei ~]# awk -F: &#39;$3 &lt; 10&#39; /etc/passwd
[root@xulei ~]# awk -F: &#39;$NF == &quot;/bin/bash&quot;&#39; /etc/passwd
[root@xulei ~]# awk -F: &#39;$1 == &quot;alice&quot;&#39; /etc/passwd
[root@xulei ~]# awk -F: &#39;$1 ~ /alic/ &#39; /etc/passwd
[root@xulei ~]# awk -F: &#39;$1 !~ /alic/ &#39; /etc/passwd
[root@xulei ~]# df -P | grep  &#39;/&#39; |awk &#39;$4 &gt; 25000&#39;

条件表达式：
[root@xulei ~]# awk -F: &#39;$3&gt;300 {print $0}&#39; /etc/passwd
[root@xulei ~]# awk -F: &#39;{ if($3&gt;300) print $0 }&#39; /etc/passwd
[root@xulei ~]# awk -F: &#39;{ if($3&gt;300) {print $0} }&#39; /etc/passwd
[root@xulei ~]# awk -F: &#39;{ if($3&gt;300) {print $3} else{print $1} }&#39; /etc/passwd

算术运算：+ - * / %(模) ^(幂2^3)
可以在模式中执行计算，awk都将按浮点数方式执行算术运算
[root@xulei ~]# awk -F: &#39;$3 * 10 &gt; 500&#39; /etc/passwd
[root@xulei ~]# awk -F: &#39;{ if($3*10&gt;500){print $0} }&#39; /etc/passwd

逻辑操作符和复合模式
&amp;&amp;          逻辑与     a&amp;&amp;b
||          逻辑或     a||b
!           逻辑非     !a
[root@xulei ~]# awk -F: &#39;$1~/root/ &amp;&amp; $3&lt;=15&#39; /etc/passwd
[root@xulei ~]# awk -F: &#39;$1~/root/ || $3&lt;=15&#39; /etc/passwd
[root@xulei ~]# awk -F: &#39;!($1~/root/ || $3&lt;=15)&#39; /etc/passwd

范围模式
[root@xulei ~]# awk &#39;/Tom/,/Suzanne/&#39; filename  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-7awk脚本编程" tabindex="-1"><a class="header-anchor" href="#_2-7awk脚本编程"><span><strong>2.7awk脚本编程</strong></span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>条件判断
if语句：
格式
{if(表达式)｛语句;语句;...｝}
awk -F: &#39;{if($3==0) {print $1 &quot; is administrator.&quot;}}&#39; /etc/passwd
awk -F: &#39;{if($3&gt;0 &amp;&amp; $3&lt;1000){count++;}}  END{print count}&#39; /etc/passwd 　　//统计系统用户数

if...else语句:
格式
{if(表达式)｛语句;语句;...｝else{语句;语句;...}}
awk -F: &#39;{if($3==0){print $1} else {print $7}}&#39; /etc/passwd
awk -F: &#39;{if($3==0) {count++} else{i++} }&#39; /etc/passwd
awk -F: &#39;{if($3==0){count++} else{i++}} END{print &quot;管理员个数: &quot;count ; print &quot;系统用户数: &quot;i}&#39; /etc/passwd

if...else if...else语句：
格式
{if(表达式1)｛语句;语句；...｝else if(表达式2)｛语句;语句；...｝else if(表达式3)｛语句;语句；...｝else｛语句;语句；...｝}
awk -F: &#39;{if($3==0){i++} else if($3&gt;999){k++} else{j++}} END{print i; print k; print j}&#39; /etc/passwd
awk -F: &#39;{if($3==0){i++} else if($3&gt;999){k++} else{j++}} END{print &quot;管理员个数: &quot;i; print &quot;普通用个数: &quot;k; print &quot;系统用户: &quot;j}&#39; /etc/passwd 

循环
while:
[root@blackmed ~]# awk &#39;BEGIN{ i=1; while(i&lt;=10){print i; i++}  }&#39;
[root@blackmed ~]# awk -F: &#39;/^root/{i=1; while(i&lt;=7){print $i; i++}}&#39; passwd
[root@blackmed ~]# awk  &#39;{i=1; while(i&lt;=NF){print $i; i++}}&#39; /etc/hosts
[root@blackmed ~]# awk -F: &#39;{i=1; while(i&lt;=10) {print $0;  i++}}&#39; /etc/passwd      //将每行打印10次
[root@blackmed ~]# cat b.txt 
111 222
333 444 555
666 777 888 999
[root@blackmed ~]# awk &#39;{i=1; while(i&lt;=NF){print $i; i++}}&#39; b.txt                       //分别打印每行的每列
111
222
333
444
555
666
777
888
999

for:
[root@blackmed ~]# awk &#39;BEGIN{for(i=1;i&lt;=5;i++){print i} }&#39; //C风格for
1
2
3
4
5
[root@blackmed ~]# awk -F: &#39;{ for(i=1;i&lt;=10;i++) {print $0} }&#39; /etc/passwd          //将每行打印10次
[root@blackmed ~]# awk -F: &#39;{ for(i=1;i&lt;=NF;i++) {print $i} }&#39; passwd               //分别打印每行的每列
root
x
0
0
root
/root
/bin/bash
bin
x
1
1
bin
/bin
/sbin/nologin

数组
[root@xulei ~]# awk -F: &#39;{username[++i]=$1} END{print username[1]}&#39; /etc/passwd
root
[root@xulei ~]# awk -F: &#39;{username[i++]=$1} END{print username[1]}&#39; /etc/passwd 
bin
[root@xulei ~]# awk -F: &#39;{username[i++]=$1} END{print username[0]}&#39; /etc/passwd 
root

数组遍历：
1. 按索引遍历
2. 按元数个数遍历

按元数个数遍历
[root@xulei ~]# awk -F: &#39;{username[x++]=$1} END{for(i=0;i&lt;x;i++) print i,username[i]}&#39; /etc/passwd
[root@xulei ~]# awk -F: &#39;{username[++x]=$1} END{for(i=1;i&lt;=x;i++) print i,username[i]}&#39; /etc/passwd

按索引遍历
[root@xulei ~]# awk -F: &#39;{username[x++]=$1} END{for(i in username) {print i,username[i]} }&#39; /etc/passwd
[root@xulei ~]# awk -F: &#39;{username[++x]=$1} END{for(i in username) {print i,username[i]} }&#39; /etc/passwd
注：变量i是索引
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),d=[l];function t(r,v){return e(),n("div",null,d)}const o=i(a,[["render",t],["__file","Shell文本处理三剑客awk.html.vue"]]),m=JSON.parse('{"path":"/note-book/Linux%E4%B8%89%E5%89%91%E5%AE%A2/Gawk/Shell%E6%96%87%E6%9C%AC%E5%A4%84%E7%90%86%E4%B8%89%E5%89%91%E5%AE%A2awk.html","title":"Shell文本处理三剑客awk","lang":"zh-CN","frontmatter":{"description":"Shell文本处理三剑客awk 2.1awk简介 2.2awk的语法格式 2.3awk工作原理 2.4记录与字段相关内部变量：man awk 2.5格式化输出 2.6awk模式和动作 2.7awk脚本编程","head":[["meta",{"property":"og:url","content":"https://www.geekery.cn/note-book/Linux%E4%B8%89%E5%89%91%E5%AE%A2/Gawk/Shell%E6%96%87%E6%9C%AC%E5%A4%84%E7%90%86%E4%B8%89%E5%89%91%E5%AE%A2awk.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"Shell文本处理三剑客awk"}],["meta",{"property":"og:description","content":"Shell文本处理三剑客awk 2.1awk简介 2.2awk的语法格式 2.3awk工作原理 2.4记录与字段相关内部变量：man awk 2.5格式化输出 2.6awk模式和动作 2.7awk脚本编程"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T08:29:56.000Z"}],["meta",{"property":"article:author","content":"PaperDragon"}],["meta",{"property":"article:modified_time","content":"2024-03-25T08:29:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Shell文本处理三剑客awk\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-25T08:29:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"2.1awk简介","slug":"_2-1awk简介","link":"#_2-1awk简介","children":[]},{"level":2,"title":"2.2awk的语法格式","slug":"_2-2awk的语法格式","link":"#_2-2awk的语法格式","children":[]},{"level":2,"title":"2.3awk工作原理","slug":"_2-3awk工作原理","link":"#_2-3awk工作原理","children":[]},{"level":2,"title":"2.4记录与字段相关内部变量：man awk","slug":"_2-4记录与字段相关内部变量-man-awk","link":"#_2-4记录与字段相关内部变量-man-awk","children":[]},{"level":2,"title":"2.5格式化输出","slug":"_2-5格式化输出","link":"#_2-5格式化输出","children":[]},{"level":2,"title":"2.6awk模式和动作","slug":"_2-6awk模式和动作","link":"#_2-6awk模式和动作","children":[]},{"level":2,"title":"2.7awk脚本编程","slug":"_2-7awk脚本编程","link":"#_2-7awk脚本编程","children":[]}],"git":{"createdTime":1691939318000,"updatedTime":1711355396000,"contributors":[{"name":"PaperDragon-SH","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":7.3,"words":2190},"filePathRelative":"note-book/Linux三剑客/Gawk/Shell文本处理三剑客awk.md","localizedDate":"2023年8月13日","excerpt":"\\n<h2><strong>2.1awk简介</strong></h2>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>awk 是一种编程语言，用于在linux/unix下对文本和数据进行处理。数据可以来自标准输入、一个或多个文件，或其它命令的输出。它支持用户自定义函数和动态正则表达式等先进功能，是linux/unix下的一个强大编程工具。它在命令行中使用，但更多是作为脚本来使用。awk的处理文本和数据的方式是这样的，它逐行扫描文件，从第一行到最后一行，寻找匹配的特定模式的行，并在这些行上进行你想要的操作。如果没有指定处理动作，则把匹配的行显示到标准输出(屏幕)，如果没有指定模式，则所有被操作所指定的行都被处理。awk分别代表其作者姓氏的第一个字母。因为它的作者是三个人，分别是Alfred Aho、Brian Kernighan、Peter Weinberger。gawk是awk的GNU版本，它提供了Bell实验室和GNU的一些扩展。\\n</code></pre></div>","autoDesc":true}');export{o as comp,m as data};
