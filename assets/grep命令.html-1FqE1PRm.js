import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,d as e}from"./app-DkQlyijp.js";const o={},l=e(`<h1 id="grep-中级" tabindex="-1"><a class="header-anchor" href="#grep-中级"><span>grep 中级</span></a></h1><h2 id="开始结束符号" tabindex="-1"><a class="header-anchor" href="#开始结束符号"><span>开始结束符号</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@oldboyedu59 ~<span class="token punctuation">]</span><span class="token comment"># #在 /etc/services 文件中过滤出包含3306的行</span>
<span class="token punctuation">[</span>root@oldboyedu59 ~<span class="token punctuation">]</span><span class="token comment"># grep &#39;3306&#39;   /etc/services </span>
mysql           <span class="token number">3306</span>/tcp                        <span class="token comment"># MySQL</span>
mysql           <span class="token number">3306</span>/udp                        <span class="token comment"># MySQL</span>
<span class="token punctuation">[</span>root@oldboyedu59 ~<span class="token punctuation">]</span><span class="token comment"># #在这个文件中找出以ssh开头的行</span>
<span class="token punctuation">[</span>root@oldboyedu59 ~<span class="token punctuation">]</span><span class="token comment"># grep &#39;^ssh&#39; /etc/services</span>
<span class="token function">ssh</span>             <span class="token number">22</span>/tcp                          <span class="token comment"># The Secure Shell (SSH) Protocol</span>
<span class="token function">ssh</span>             <span class="token number">22</span>/udp                          <span class="token comment"># The Secure Shell (SSH) Protocol</span>
<span class="token function">ssh</span>             <span class="token number">22</span>/sctp                 <span class="token comment"># SSH</span>
sshell          <span class="token number">614</span>/tcp                 <span class="token comment"># SSLshell</span>
sshell          <span class="token number">614</span>/udp                 <span class="token comment">#       SSLshell</span>
ssh-mgmt        <span class="token number">17235</span>/tcp               <span class="token comment"># SSH Tectia Manager</span>
ssh-mgmt        <span class="token number">17235</span>/udp               <span class="token comment"># SSH Tectia Manager </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="符号" tabindex="-1"><a class="header-anchor" href="#符号"><span>$符号</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@oldboyedu59 /oldboy<span class="token punctuation">]</span><span class="token comment"># grep &#39; &#39; oldboy.txt</span>
I am oldboy teacher<span class="token operator">!</span>
I teach linux.
I like badminton ball ,billiard ball and chinese chess<span class="token operator">!</span>
my blog is http://oldboy.blog.51cto.com 
our size is http://blog.oldboyedu.com 
my qq is <span class="token number">49000448</span>
not <span class="token number">4900000448</span>.
my god ,i am not oldbey,but OLDBOY<span class="token operator">!</span> 
<span class="token punctuation">[</span>root@oldboyedu59 /oldboy<span class="token punctuation">]</span><span class="token comment"># </span>
<span class="token punctuation">[</span>root@oldboyedu59 /oldboy<span class="token punctuation">]</span><span class="token comment"># grep &#39;m$&#39; oldboy.txt</span>
my blog is http://oldboy.blog.51cto.com 
our size is http://blog.oldboyedu.com 
<span class="token punctuation">[</span>root@oldboyedu59 /oldboy<span class="token punctuation">]</span><span class="token comment"># cat -A oldboy.txt</span>
I am oldboy teacher<span class="token operator">!</span>$
I teach linux.$
$
I like badminton ball ,billiard ball and chinese chess<span class="token operator">!</span>$
my blog is http://oldboy.blog.51cto.com $
our size is http://blog.oldboyedu.com $
my qq is <span class="token number">49000448</span>$
$
not <span class="token number">4900000448</span>.$
my god ,i am not oldbey,but OLDBOY<span class="token operator">!</span> $ 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="转义字符" tabindex="-1"><a class="header-anchor" href="#转义字符"><span>转义字符</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@oldboyedu59 /oldboy<span class="token punctuation">]</span><span class="token comment"># echo -e  &quot;oldboy\\noldgirl\\nalex\\nlidao&quot;</span>
oldboy
oldgirl
alex
lidao
<span class="token punctuation">[</span>root@oldboyedu59 /oldboy<span class="token punctuation">]</span><span class="token comment"># echo -e  &quot;oldboy\\noldgirl\\nalex\\n\\t\\t\\tlidao&quot;</span>
oldboy
oldgirl
alex
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="和-符号" tabindex="-1"><a class="header-anchor" href="#和-符号"><span>. 和*符号</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">grep</span> <span class="token string">&#39;^.o*&#39;</span> oldboy.txt

^.o*
当表示出现0次 相当于 ^.
当表示出现0次以上 相当于 ^.o ^.oooo ^.oooooooooo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="小括号-花括号" tabindex="-1"><a class="header-anchor" href="#小括号-花括号"><span>() 小括号 花括号</span></a></h2><h3 id="作用1-限定多选结构的范围" tabindex="-1"><a class="header-anchor" href="#作用1-限定多选结构的范围"><span>作用1： 限定多选结构的范围</span></a></h3><p>如：ab(c|d|e)fgh 。</p><h3 id="作用2-标注量词作用的元素" tabindex="-1"><a class="header-anchor" href="#作用2-标注量词作用的元素"><span>作用2： 标注量词作用的元素</span></a></h3><p>如：ab(cde)+fgh 。小括号里的内容是一个整体。</p><h3 id="作用3-捕获组" tabindex="-1"><a class="header-anchor" href="#作用3-捕获组"><span>作用3：捕获组</span></a></h3><p>捕获文本，加括号是为了引用匹配结果。 比如，当我使用(<a href="%5Cd%7B2%7D">a-zA-Z</a>)((-)\\d{3})来进行正则匹配”B33-888”时，匹配情况如下：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>group1：B33
group2：33
group3：-888
group4：-
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到：匹配的顺序等于左括号出现的顺序。</p><h2 id="中括号" tabindex="-1"><a class="header-anchor" href="#中括号"><span>[] 中括号</span></a></h2><p>中括号 匹配范围。中括号里的内容代表一个范围，可以匹配这个范围内的任意一个元素。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">grep</span> <span class="token string">&#39;[a-z]&#39;</span> oldboy.txt
<span class="token function">grep</span> <span class="token string">&#39;[A-Z]&#39;</span> oldboy.txt
<span class="token function">grep</span> <span class="token string">&#39;[a-zA-Z]&#39;</span> oldboy.txt
<span class="token function">grep</span> <span class="token string">&#39;[a-z,A-Z]&#39;</span> oldboy.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="大括号" tabindex="-1"><a class="header-anchor" href="#大括号"><span>{} 大括号</span></a></h2><p>大括号 匹配次数。匹配在它之前表达式匹配出来的元素出现的次数，{n}出现n次、{n,}匹配最少出现n次、{n,m}匹配最少出现n次，最多出现m次。</p><h2 id="练习题" tabindex="-1"><a class="header-anchor" href="#练习题"><span>练习题:</span></a></h2><p>显示以m或n或o开头的行 以m或n或点结尾的行 显示以m或n或o开头的 并且 以m或n或点结尾的行</p><h3 id="显示以m或n或o开头的行" tabindex="-1"><a class="header-anchor" href="#显示以m或n或o开头的行"><span>显示以m或n或o开头的行</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@oldboyedu59 /oldboy<span class="token punctuation">]</span><span class="token comment"># </span>
<span class="token punctuation">[</span>root@oldboyedu59 /oldboy<span class="token punctuation">]</span><span class="token comment"># grep &#39;^[mno]&#39; oldboy.txt </span>
my blog is http://oldboy.blog.51cto.com 
our size is http://blog.oldboyedu.com 
my qq is <span class="token number">49000448</span>
not <span class="token number">4900000448</span>.
my god ,i am not oldbey,but OLDBOY<span class="token operator">!</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="以m或n或点结尾的行" tabindex="-1"><a class="header-anchor" href="#以m或n或点结尾的行"><span>以m或n或点结尾的行</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@oldboyedu59 /oldboy<span class="token punctuation">]</span><span class="token comment"># </span>
<span class="token punctuation">[</span>root@oldboyedu59 /oldboy<span class="token punctuation">]</span><span class="token comment"># grep &#39;[mn.]$&#39; oldboy.txt</span>
I teach linux.
not <span class="token number">4900000448</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="显示以m或n或o开头的-并且-以m或n或点结尾的行" tabindex="-1"><a class="header-anchor" href="#显示以m或n或o开头的-并且-以m或n或点结尾的行"><span>显示以m或n或o开头的 并且 以m或n或点结尾的行</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@oldboyedu59 /oldboy<span class="token punctuation">]</span><span class="token comment"># grep &#39;^[mno].*[mn.]$&#39; oldboy.txt </span>
not <span class="token number">4900000448</span>.

<span class="token function">grep</span> <span class="token string">&#39;[mn\\.]&#39;</span> oldboy.txt

<span class="token comment">#&amp;&amp;表示并且 命令 </span>
<span class="token function">grep</span> <span class="token string">&#39;^[mno]&#39;</span> oldboy.txt <span class="token operator">&amp;&amp;</span> <span class="token function">grep</span> <span class="token string">&#39;[mno] $&#39;</span> oldboy.txt

<span class="token function">grep</span> <span class="token string">&#39;^[mon][mo.]$&#39;</span> /tmp/oldboy

<span class="token punctuation">[</span>root@oldboyedu59 /oldboy<span class="token punctuation">]</span><span class="token comment"># grep &#39;^[mno]&#39;  oldboy.txt </span>
my blog is http://oldboy.blog.51cto.com 
our size is http://blog.oldboyedu.com 
my qq is <span class="token number">49000448</span>
not <span class="token number">4900000448</span>.
my god ,i am not oldbey,but OLDBOY<span class="token operator">!</span> 
<span class="token punctuation">[</span>root@oldboyedu59 /oldboy<span class="token punctuation">]</span><span class="token comment"># grep &#39;^[mno]&#39;  oldboy.txt |grep &#39;[mn.]$&#39;</span>
not <span class="token number">4900000448</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="找出oldboy-txt-中连续出现的字母-大写或小写" tabindex="-1"><a class="header-anchor" href="#找出oldboy-txt-中连续出现的字母-大写或小写"><span>找出oldboy.txt 中连续出现的字母（大写或小写）</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">grep</span> <span class="token string">&#39;[^m^n^o]&#39;</span> oldboy.txt 
<span class="token function">grep</span> <span class="token string">&#39;^[mon]|[mo.]$&#39;</span> /tmp/oldboy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="扩展正则表达式之" tabindex="-1"><a class="header-anchor" href="#扩展正则表达式之"><span>扩展正则表达式之 |</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@oldboyedu59 /oldboy<span class="token punctuation">]</span><span class="token comment"># cat oldboy.txt </span>
I am oldboy teacher<span class="token operator">!</span>
I teach linux.

I like badminton ball ,billiard ball and chinese chess<span class="token operator">!</span>
my blog is http://oldboy.blog.51cto.com 
our size is http://blog.oldboyedu.com 
my qq is <span class="token number">49000448</span>

not <span class="token number">4900000448</span>.
my god ,i am not oldbey,but OLDBOY<span class="token operator">!</span> 
<span class="token punctuation">\\</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span><span class="token punctuation">..</span>.???<span class="token variable">$$</span><span class="token variable">$$</span>^^<span class="token operator">&amp;</span>^
<span class="token punctuation">[</span>root@oldboyedu59 /oldboy<span class="token punctuation">]</span><span class="token comment"># egrep  &#39;oldboy|linux&#39; oldboy.txt</span>
I am oldboy teacher<span class="token operator">!</span>
I teach linux.
my blog is http://oldboy.blog.51cto.com 
our size is http://blog.oldboyedu.com  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="扩展正则表达式之-1" tabindex="-1"><a class="header-anchor" href="#扩展正则表达式之-1"><span>扩展正则表达式之 ()</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@oldboyedu59 /oldboy<span class="token punctuation">]</span><span class="token comment"># egrep &#39;oldboy|oldbey&#39; oldboy.txt</span>
I am oldboy teacher<span class="token operator">!</span>
my blog is http://oldboy.blog.51cto.com 
our size is http://blog.oldboyedu.com 
my god ,i am not oldbey,but OLDBOY<span class="token operator">!</span> 
<span class="token punctuation">[</span>root@oldboyedu59 /oldboy<span class="token punctuation">]</span><span class="token comment"># egrep &#39;oldb[oe]y&#39; oldboy.txt</span>
I am oldboy teacher<span class="token operator">!</span>
my blog is http://oldboy.blog.51cto.com 
our size is http://blog.oldboyedu.com 
my god ,i am not oldbey,but OLDBOY<span class="token operator">!</span> 
<span class="token punctuation">[</span>root@oldboyedu59 /oldboy<span class="token punctuation">]</span><span class="token comment"># egrep &#39;oldbo|ey&#39; oldboy.txt</span>
I am oldboy teacher<span class="token operator">!</span>
my blog is http://oldboy.blog.51cto.com 
our size is http://blog.oldboyedu.com 
my god ,i am not oldbey,but OLDBOY<span class="token operator">!</span> 
<span class="token punctuation">[</span>root@oldboyedu59 /oldboy<span class="token punctuation">]</span><span class="token comment"># egrep &#39;oldb(o|e)y&#39; oldboy.txt</span>
I am oldboy teacher<span class="token operator">!</span>
my blog is http://oldboy.blog.51cto.com 
our size is http://blog.oldboyedu.com 
my god ,i am not oldbey,but OLDBOY<span class="token operator">!</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="取出文件中正确的身份证号码的行" tabindex="-1"><a class="header-anchor" href="#取出文件中正确的身份证号码的行"><span>取出文件中正确的身份证号码的行</span></a></h4><p>id.txt</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>金 <span class="token number">211324198705244720</span>
万 <span class="token number">500224197105168312</span>
任 1231231231oldboy
任 3oldboy
任 lidao97303136098
任 alex2197303136098
任 350182197303oldgir
吕 <span class="token number">211282199209113038</span>
孔 <span class="token number">150000198309176071</span>
邹 <span class="token number">371001197412221284</span>
贺 <span class="token number">130185200011215926</span>
杜 <span class="token number">362522198711278101</span>
向 14052219961008852X
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">egrep</span> <span class="token string">&#39;[0-9X]{18}&#39;</span> id.txt
<span class="token function">egrep</span> <span class="token string">&#39;[0-9]{17}[0-9X]$&#39;</span> id.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>基础 扩展 含义 支持命令 grep/sed/awk grep -E/egrep 或 sed -r 或 awk</p>`,43),i=[l];function d(t,c){return s(),a("div",null,i)}const u=n(o,[["render",d],["__file","grep命令.html.vue"]]);export{u as default};
