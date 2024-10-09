import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{aj as a,ao as e,am as n}from"./app-COjiYc5s.js";const l={};function t(h,i){return n(),a("div",null,i[0]||(i[0]=[e(`<h1 id="awk入门教程" tabindex="-1"><a class="header-anchor" href="#awk入门教程"><span>awk入门教程</span></a></h1><h2 id="一、基本用法" tabindex="-1"><a class="header-anchor" href="#一、基本用法"><span>一、基本用法</span></a></h2><p>作者： <a href="http://www.ruanyifeng.com" target="_blank" rel="noopener noreferrer">阮一峰</a></p><p><code>awk</code>的基本用法就是下面的形式。</p><blockquote><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 格式</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> awk</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 动作</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 文件名</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 示例</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> awk</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;{print $0}&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> demo.txt</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>上面示例中，<code>demo.txt</code>是<code>awk</code>所要处理的文本文件。前面单引号内部有一个大括号，里面就是每一行的处理动作<code>print $0</code>。其中，<code>print</code>是打印命令，<code>$0</code>代表当前行，因此上面命令的执行结果，就是把每一行原样打印出来。</p><p>下面，我们先用标准输入（stdin）演示上面这个例子。</p><blockquote><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;this is a test&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">awk</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;{print $0}&#39;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">this</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> is</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> a</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> test</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>上面代码中，<code>print $0</code>就是把标准输入<code>this is a test</code>，重新打印了一遍。</p><p><code>awk</code>会根据空格和制表符，将每一行分成若干字段，依次用<code>$1</code>、<code>$2</code>、<code>$3</code>代表第一个字段、第二个字段、第三个字段等等。</p><blockquote><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;this is a test&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">awk</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;{print $3}&#39;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">a</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>上面代码中，<code>$3</code>代表<code>this is a test</code>的第三个字段<code>a</code>。</p><p>下面，为了便于举例，我们把<code>/etc/passwd</code>文件保存成<code>demo.txt</code>。</p><blockquote><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">root:x:0:0:root:/root:/usr/bin/zsh</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">bin:x:2:2:bin:/bin:/usr/sbin/nologin</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sys:x:3:3:sys:/dev:/usr/sbin/nologin</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sync:x:4:65534:sync:/bin:/bin/sync</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>这个文件的字段分隔符是冒号（<code>:</code>），所以要用<code>-F</code>参数指定分隔符为冒号。然后，才能提取到它的第一个字段。</p><blockquote><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> awk</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -F</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;:&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;{ print $1 }&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> demo.txt</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">root</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">daemon</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">bin</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sys</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sync</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="二、变量" tabindex="-1"><a class="header-anchor" href="#二、变量"><span>二、变量</span></a></h2><p>除了<code>$ + 数字</code>表示某个字段，<code>awk</code>还提供其他一些变量。</p><p>变量<code>NF</code>表示当前行有多少个字段，因此<code>$NF</code>就代表最后一个字段。</p><blockquote><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;this is a test&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">awk</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;{print $NF}&#39;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">test</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><code>$(NF-1)</code>代表倒数第二个字段。</p><blockquote><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> awk</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -F</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;:&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;{print $1, $(NF-1)}&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> demo.txt</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">root</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /root</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">daemon</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/sbin</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">bin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /bin</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sys</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /dev</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sync</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /bin</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>上面代码中，<code>print</code>命令里面的逗号，表示输出的时候，两个部分之间使用空格分隔。</p><p>变量<code>NR</code>表示当前处理的是第几行。</p><blockquote><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> awk</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -F</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;:&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;{print NR &quot;) &quot; $1}&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> demo.txt</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) root</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) daemon</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) bin</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) sys</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) sync</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>上面代码中，<code>print</code>命令里面，如果原样输出字符，要放在双引号里面。</p><p><code>awk</code>的其他内置变量如下。</p><blockquote><ul><li><code>FILENAME</code>：当前文件名</li><li><code>FS</code>：字段分隔符，默认是空格和制表符。</li><li><code>RS</code>：行分隔符，用于分割每一行，默认是换行符。</li><li><code>OFS</code>：输出字段的分隔符，用于打印时分隔字段，默认为空格。</li><li><code>ORS</code>：输出记录的分隔符，用于打印时分隔记录，默认为换行符。</li><li><code>OFMT</code>：数字输出的格式，默认为<code>％.6g</code>。</li></ul></blockquote><h2 id="三、函数" tabindex="-1"><a class="header-anchor" href="#三、函数"><span>三、函数</span></a></h2><p><code>awk</code>还提供了一些内置函数，方便对原始数据的处理。</p><p>函数<code>toupper()</code>用于将字符转为大写。</p><blockquote><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> awk</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -F</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;:&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;{ print toupper($1) }&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> demo.txt</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ROOT</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">DAEMON</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">BIN</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">SYS</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">SYNC</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>上面代码中，第一个字段输出时都变成了大写。</p><p>其他常用函数如下。</p><blockquote><ul><li><code>tolower()</code>：字符转为小写。</li><li><code>length()</code>：返回字符串长度。</li><li><code>substr()</code>：返回子字符串。</li><li><code>sin()</code>：正弦。</li><li><code>cos()</code>：余弦。</li><li><code>sqrt()</code>：平方根。</li><li><code>rand()</code>：随机数。</li></ul></blockquote><p><code>awk</code>内置函数的完整列表，可以查看<a href="https://www.gnu.org/software/gawk/manual/html_node/Built_002din.html#Built_002din" target="_blank" rel="noopener noreferrer">手册</a>。</p><h2 id="四、条件" tabindex="-1"><a class="header-anchor" href="#四、条件"><span>四、条件</span></a></h2><p><code>awk</code>允许指定输出条件，只输出符合条件的行。</p><p>输出条件要写在动作的前面。</p><blockquote><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> awk</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;条件 动作&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 文件名</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></blockquote><p>请看下面的例子。</p><blockquote><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> awk</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -F</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;:&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;/usr/ {print $1}&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> demo.txt</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">root</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">daemon</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">bin</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sys</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>上面代码中，<code>print</code>命令前面是一个正则表达式，只输出包含<code>usr</code>的行。</p><p>下面的例子只输出奇数行，以及输出第三行以后的行。</p><blockquote><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 输出奇数行</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> awk</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -F</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;:&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;NR % 2 == 1 {print $1}&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> demo.txt</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">root</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">bin</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sync</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 输出第三行以后的行</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> awk</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -F</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;:&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;NR &gt;3 {print $1}&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> demo.txt</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sys</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sync</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>下面的例子输出第一个字段等于指定值的行。</p><blockquote><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> awk</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -F</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;:&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;$1 == &quot;root&quot; {print $1}&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> demo.txt</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">root</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> awk</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -F</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;:&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;$1 == &quot;root&quot; || $1 == &quot;bin&quot; {print $1}&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> demo.txt</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">root</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">bin</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="五、if-语句" tabindex="-1"><a class="header-anchor" href="#五、if-语句"><span>五、if 语句</span></a></h2><p><code>awk</code>提供了<code>if</code>结构，用于编写复杂的条件。</p><blockquote><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> awk</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -F</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;:&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;{if ($1 &gt; &quot;m&quot;) print $1}&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> demo.txt</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">root</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sys</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sync</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>上面代码输出第一个字段的第一个字符大于<code>m</code>的行。</p><p><code>if</code>结构还可以指定<code>else</code>部分。</p><blockquote><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> awk</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -F</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;:&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;{if ($1 &gt; &quot;m&quot;) print $1; else print &quot;---&quot;}&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> demo.txt</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">root</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">---</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">---</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sys</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sync</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>`,53)]))}const p=s(l,[["render",t],["__file","awk入门教程.html.vue"]]),r=JSON.parse(`{"path":"/note-book/Linux%E4%B8%89%E5%89%91%E5%AE%A2/Gawk/awk%E5%85%A5%E9%97%A8%E6%95%99%E7%A8%8B.html","title":"awk入门教程","lang":"zh-CN","frontmatter":{"description":"awk入门教程 一、基本用法 作者： 阮一峰 awk的基本用法就是下面的形式。 上面示例中，demo.txt是awk所要处理的文本文件。前面单引号内部有一个大括号，里面就是每一行的处理动作print $0。其中，print是打印命令，$0代表当前行，因此上面命令的执行结果，就是把每一行原样打印出来。 下面，我们先用标准输入（stdin）演示上面这个例子...","head":[["meta",{"property":"og:url","content":"https://www.geekery.cn/note-book/Linux%E4%B8%89%E5%89%91%E5%AE%A2/Gawk/awk%E5%85%A5%E9%97%A8%E6%95%99%E7%A8%8B.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"awk入门教程"}],["meta",{"property":"og:description","content":"awk入门教程 一、基本用法 作者： 阮一峰 awk的基本用法就是下面的形式。 上面示例中，demo.txt是awk所要处理的文本文件。前面单引号内部有一个大括号，里面就是每一行的处理动作print $0。其中，print是打印命令，$0代表当前行，因此上面命令的执行结果，就是把每一行原样打印出来。 下面，我们先用标准输入（stdin）演示上面这个例子..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-26T05:54:05.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-26T05:54:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"awk入门教程\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-26T05:54:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"一、基本用法","slug":"一、基本用法","link":"#一、基本用法","children":[]},{"level":2,"title":"二、变量","slug":"二、变量","link":"#二、变量","children":[]},{"level":2,"title":"三、函数","slug":"三、函数","link":"#三、函数","children":[]},{"level":2,"title":"四、条件","slug":"四、条件","link":"#四、条件","children":[]},{"level":2,"title":"五、if 语句","slug":"五、if-语句","link":"#五、if-语句","children":[]}],"git":{"createdTime":1691939318000,"updatedTime":1711432445000,"contributors":[{"name":"PaperDragon-SH","email":"2678885646@qq.com","commits":2}]},"readingTime":{"minutes":3.47,"words":1040},"filePathRelative":"note-book/Linux三剑客/Gawk/awk入门教程.md","localizedDate":"2023年8月13日","excerpt":"\\n<h2>一、基本用法</h2>\\n<p>作者： <a href=\\"http://www.ruanyifeng.com\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">阮一峰</a></p>\\n<p><code>awk</code>的基本用法就是下面的形式。</p>\\n<blockquote>\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"bash\\" data-title=\\"bash\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># 格式</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">$</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> awk</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> 动作</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> 文件名</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># 示例</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">$</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> awk</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> '{print $0}'</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> demo.txt</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></blockquote>","autoDesc":true}`);export{p as comp,r as data};
