import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as l,c as r,a as e,e as i,d as a,f as d}from"./app-83883b31.js";const c={},o=d(`<h2 id="awk高级输入输出-读取下一条记录" tabindex="-1"><a class="header-anchor" href="#awk高级输入输出-读取下一条记录" aria-hidden="true">#</a> awk高级输入输出 读取下一条记录</h2><p>awk中<code>next</code>语句使用：在循环逐行匹配，如果遇到next，就会跳过当前行，直接忽略下面语句。而进行下一行匹配。net语句一般用于多行合并：</p><div class="language-abap line-numbers-mode" data-ext="abap"><pre class="language-abap"><code>cat <span class="token keyword">text</span><span class="token punctuation">.</span>txt
a
b
<span class="token keyword">c</span>
d
<span class="token keyword">e</span>

awk <span class="token string">&#39;NR%2==1{next}{print NR,$0;}&#39;</span> <span class="token keyword">text</span><span class="token punctuation">.</span>txt
<span class="token number">2</span> b
<span class="token number">4</span> d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当记录行号除以2余1，就跳过当前行。下面的<code>print NR,$0</code>也不会执行。下一行开始，程序有开始判断<code>NR%2</code>值。这个时候记录行号是<code>：2</code>，就会执行下面语句块：<code>&#39;print NR,$0&#39;</code></p><p>分析发现需要将包含有“web”行进行跳过，然后需要将内容与下面行合并为一行：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>at text.txt
web01[192.168.2.100]
httpd            ok
tomcat               ok
sendmail               ok
web02[192.168.2.101]
httpd            ok
postfix               ok
web03[192.168.2.102]
mysqld            ok
httpd               ok
0
awk &#39;/^web/{T=$0;next;}{print T&quot;:t&quot;$0;}&#39; test.txt
web01[192.168.2.100]:   httpd            ok
web01[192.168.2.100]:   tomcat               ok
web01[192.168.2.100]:   sendmail               ok
web02[192.168.2.101]:   httpd            ok
web02[192.168.2.101]:   postfix               ok
web03[192.168.2.102]:   mysqld            ok
web03[192.168.2.102]:   httpd               ok
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="简单地读取一条记录" tabindex="-1"><a class="header-anchor" href="#简单地读取一条记录" aria-hidden="true">#</a> 简单地读取一条记录</h3><p><code>awk getline</code>用法：输出重定向需用到<code>getline函数</code>。getline从标准输入、管道或者当前正在处理的文件之外的其他输入文件获得输入。它负责从输入获得下一行的内容，并给NF,NR和FNR等内建变量赋值。如果得到一条记录，getline函数返回1，如果到达文件的末尾就返回0，如果出现错误，例如打开文件失败，就返回-1。</p><p>getline语法：getline var，变量var包含了特定行的内容。</p><p>awk getline从整体上来说，用法说明：</p><ul><li>**当其左右无重定向符<code>|</code>或<code>&lt;</code>时：**getline作用于当前文件，读入当前文件的第一行给其后跟的变量<code>var</code>或<code>$0</code>（无变量），应该注意到，由于awk在处理getline之前已经读入了一行，所以getline得到的返回结果是隔行的。</li><li>**当其左右有重定向符<code>|</code>或<code>&lt;</code>时：**getline则作用于定向输入文件，由于该文件是刚打开，并没有被awk读入一行，只是getline读入，那么getline返回的是该文件的第一行，而不是隔行。</li></ul><p><strong>示例：</strong></p><p>执行linux的<code>date</code>命令，并通过管道输出给<code>getline</code>，然后再把输出赋值给自定义变量out，并打印它：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>awk &#39;BEGIN{ &quot;date&quot; | getline out; print out }&#39; test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,14),u={href:"http://man.linuxde.net/split",target:"_blank",rel:"noopener noreferrer"},v=e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`awk 'BEGIN{ "date" | getline out; split(out,mon); print mon[2] }' test
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),m={href:"http://man.linuxde.net/ls",target:"_blank",rel:"noopener noreferrer"},b=d(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>awk &#39;BEGIN{ while( &quot;ls&quot; | getline) print }&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="关闭文件" tabindex="-1"><a class="header-anchor" href="#关闭文件" aria-hidden="true">#</a> 关闭文件</h3><p>awk中允许在程序中关闭一个输入或输出文件，方法是使用awk的close语句。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>close(&quot;filename&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>filename可以是getline打开的文件，也可以是stdin，包含文件名的变量或者getline使用的确切命令。或一个输出文件，可以是stdout，包含文件名的变量或使用管道的确切命令。</p><h3 id="输出到一个文件" tabindex="-1"><a class="header-anchor" href="#输出到一个文件" aria-hidden="true">#</a> 输出到一个文件</h3><p>awk中允许用如下方式将结果输出到一个文件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>echo | awk &#39;{printf(&quot;hello word!n&quot;) &gt; &quot;datafile&quot;}&#39;
或
echo | awk &#39;{printf(&quot;hello word!n&quot;) &gt;&gt; &quot;datafile&quot;}&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置字段定界符" tabindex="-1"><a class="header-anchor" href="#设置字段定界符" aria-hidden="true">#</a> 设置字段定界符</h2><p>默认的字段定界符是空格，可以使用<code>-F &quot;定界符&quot;</code> 明确指定一个定界符：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>awk -F: &#39;{ print $NF }&#39; /etc/passwd
或
awk &#39;BEGIN{ FS=&quot;:&quot; } { print $NF }&#39; /etc/passwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code>BEGIN语句块</code>中则可以用<code>OFS=“定界符”</code>设置输出字段的定界符。</p><h2 id="流程控制语句" tabindex="-1"><a class="header-anchor" href="#流程控制语句" aria-hidden="true">#</a> 流程控制语句</h2>`,13),p={href:"http://man.linuxde.net/exit",target:"_blank",rel:"noopener noreferrer"},g=d(`<h3 id="条件判断语句" tabindex="-1"><a class="header-anchor" href="#条件判断语句" aria-hidden="true">#</a> 条件判断语句</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if(表达式)
  语句1
else
  语句2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>格式中语句1可以是多个语句，为了方便判断和阅读，最好将多个语句用{}括起来。awk分枝结构允许嵌套，其格式为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if(表达式)
  {语句1}
else if(表达式)
  {语句2}
else
  {语句3}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>awk &#39;BEGIN{
test=100;
if(test&gt;90){
  print &quot;very good&quot;;
  }
  else if(test&gt;60){
    print &quot;good&quot;;
  }
  else{
    print &quot;no pass&quot;;
  }
}&#39;

very good
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每条命令语句后面可以用<code>;</code><strong>分号</strong>结尾。</p><h3 id="循环语句" tabindex="-1"><a class="header-anchor" href="#循环语句" aria-hidden="true">#</a> 循环语句</h3><h3 id="while语句" tabindex="-1"><a class="header-anchor" href="#while语句" aria-hidden="true">#</a> while语句</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>while(表达式)
  {语句}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>awk &#39;BEGIN{
test=100;
total=0;
while(i&lt;=test){
  total+=i;
  i++;
}
print total;
}&#39;
5050
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="for循环" tabindex="-1"><a class="header-anchor" href="#for循环" aria-hidden="true">#</a> for循环</h3><p>for循环有两种格式：</p><p>格式1：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>for(变量 in 数组)
  {语句}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>awk &#39;BEGIN{
for (k in ENVIRON) {
}
}&#39;
TERM=linux
G_BROKEN_FILENAMES=1
SHLVL=1
pwd=/root/text
...
logname=root
HOME=/root
SSH_CLIENT=192.168.1.21 53087 22
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：ENVIRON是awk常量，是子典型数组。</p><p>格式2：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>for(变量;条件;表达式)
  {语句}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>awk &#39;BEGIN{
total=0;
for(i=0;i&lt;=100;i++){
  total+=i;
}
print total;
}&#39;
5050
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="do循环" tabindex="-1"><a class="header-anchor" href="#do循环" aria-hidden="true">#</a> do循环</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>do
{语句} while(条件)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>awk &#39;BEGIN{ 
total=0;
i=0;
do {total+=i;i++;} while(i&lt;=100)
  print total;
}&#39;
5050
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他语句" tabindex="-1"><a class="header-anchor" href="#其他语句" aria-hidden="true">#</a> 其他语句</h3><ul><li><strong>break</strong> 当 break 语句用于 while 或 for 语句时，导致退出程序循环。</li><li><strong>continue</strong> 当 continue 语句用于 while 或 for 语句时，使程序循环移动到下一个迭代。</li><li><strong>next</strong> 能能够导致读入下一个输入行，并返回到脚本的顶部。这可以避免对当前输入行执行其他的操作过程。</li><li><strong>exit</strong> 语句使主输入循环退出并将控制转移到END,如果END存在的话。如果没有定义END规则，或在END中应用exit语句，则终止脚本的执行。</li></ul><h2 id="数组应用" tabindex="-1"><a class="header-anchor" href="#数组应用" aria-hidden="true">#</a> 数组应用</h2><p>数组是awk的灵魂，处理文本中最不能少的就是它的数组处理。因为数组索引（下标）可以是数字和字符串在awk中数组叫做关联数组(associative arrays)。awk 中的数组不必提前声明，也不必声明大小。数组元素用0或空字符串来初始化，这根据上下文而定。</p><h3 id="数组的定义" tabindex="-1"><a class="header-anchor" href="#数组的定义" aria-hidden="true">#</a> 数组的定义</h3><p>数字做数组索引（下标）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Array[1]=&quot;sun&quot;
Array[2]=&quot;kai&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>字符串做数组索引（下标）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Array[&quot;first&quot;]=&quot;www&quot;
Array[&quot;last&quot;]=&quot;name&quot;
Array[&quot;birth&quot;]=&quot;1987&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用中<code>print Array[1]</code>会打印出sun；使用<code>print Array[2]</code>会打印出kai；使用<code>print[&quot;birth&quot;]</code>会得到1987。</p><p><strong>读取数组的值</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{ for(item in array) {print array[item]}; }       #输出的顺序是随机的
{ for(i=1;i&lt;=len;i++) {print array[i]}; }         #Len是数组的长度
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组相关函数" tabindex="-1"><a class="header-anchor" href="#数组相关函数" aria-hidden="true">#</a> 数组相关函数</h3><p><strong>得到数组长度：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>awk &#39;BEGIN{info=&quot;it is a test&quot;;lens=split(info,tA,&quot; &quot;);print length(tA),lens;}&#39;
4 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>length返回字符串以及数组长度，split进行分割字符串为数组，也会返回分割得到数组长度。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>awk &#39;BEGIN{info=&quot;it is a test&quot;;split(info,tA,&quot; &quot;);print asort(tA);}&#39;
4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>asort对数组进行排序，返回数组长度。</p><p><strong>输出数组内容（无序，有序输出）：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>awk &#39;BEGIN{info=&quot;it is a test&quot;;split(info,tA,&quot; &quot;);for(k in tA){print k,tA[k];}}&#39;
4 test
1 it
2 is
3 a 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>for…in</code>输出，因为数组是关联数组，默认是无序的。所以通过<code>for…in</code>得到是无序的数组。如果需要得到有序数组，需要通过下标获得。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>awk &#39;BEGIN{info=&quot;it is a test&quot;;tlen=split(info,tA,&quot; &quot;);for(k=1;k&lt;=tlen;k++){print k,tA[k];}}&#39;
1 it
2 is
3 a
4 test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：数组下标是从1开始，与C数组不一样。****</p>`,50);function h(x,k){const n=t("ExternalLinkIcon");return l(),r("div",null,[o,e("p",null,[i("执行shell的date命令，并通过管道输出给getline，然后getline从管道中读取并将输入赋值给out，"),e("a",u,[i("split"),a(n)]),i("函数把变量out转化成数组mon，然后打印数组mon的第二个元素：")]),v,e("p",null,[i("命令"),e("a",m,[i("ls"),a(n)]),i("的输出传递给geline作为输入，循环使getline从ls的输出中读取一行，并把它打印到屏幕。这里没有输入文件，因为BEGIN块在打开输入文件前执行，所以可以忽略输入文件。")]),b,e("p",null,[i("在linux awk的while、do-while和for语句中允许使用break,continue语句来控制流程走向，也允许使用"),e("a",p,[i("exit"),a(n)]),i("这样的语句来退出。break中断当前正在执行的循环并跳到循环外执行下一条语句。if 是流程选择用法。awk中，流程控制语句，语法结构，与c语言类型。有了这些语句，其实很多shell程序都可以交给awk，而且性能是非常快的。下面是各个语句用法。")]),g])}const q=s(c,[["render",h],["__file","awk 学习  高级输出  02.html.vue"]]);export{q as default};
