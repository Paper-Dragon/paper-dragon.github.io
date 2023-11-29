import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as i,e as s}from"./app-4dMQEctD.js";const t={},u=s(`<h1 id="让某个命令不输出" tabindex="-1"><a class="header-anchor" href="#让某个命令不输出" aria-hidden="true">#</a> 让某个命令不输出</h1><p>假如让ls命令不输出</p><p>正常情况下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ls</span> <span class="token operator">&amp;&gt;</span>/dev/null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>但是这并不符合我们的要求,ls -l，就会失效</p><p>~/.bashrc</p><div class="language-bashrc line-numbers-mode" data-ext="bashrc"><pre class="language-bashrc"><code>function ls {
    # 将命令的标准输出和标准错误重定向到 /dev/null 中
    &quot;$@&quot; &amp;&gt;/dev/null
}


printf &quot;\\n&quot;
printf &quot;   %s\\n&quot; &quot;用户名: $(echo $USER)&quot;
printf &quot;   %s\\n&quot; &quot;日期: $(date)&quot;
printf &quot;   %s\\n&quot; &quot;运行时间: $(uptime -p)&quot;
printf &quot;   %s\\n&quot; &quot;主机名: $(hostname -f)&quot;
printf &quot;   %s\\n&quot; &quot;内核: $(uname -rms)&quot;
printf &quot;   %s\\n&quot; &quot;包个数: $(rpm -qa | wc -l)&quot;
printf &quot;   %s\\n&quot; &quot;分辨率: $(xrandr | awk &#39;/\\*/{printf $1&quot; &quot;}&#39;)&quot;
printf &quot;   %s\\n&quot; &quot;内存: $(free -m -h | awk &#39;/内存/{print $3&quot;/&quot;$2}&#39;)&quot;
printf &quot;\\n&quot;




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),a=[u];function l(d,o){return e(),i("div",null,a)}const v=n(t,[["render",l],["__file","让某个命令不输出.html.vue"]]);export{v as default};
