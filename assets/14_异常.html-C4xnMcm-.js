import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{aj as n,ao as a,am as l}from"./app-COjiYc5s.js";const t="/assets/024_%E8%87%AA%E5%AE%9A%E4%B9%89%E5%BC%82%E5%B8%B8--CUAxUAj.png",e={};function h(p,s){return l(),n("div",null,s[0]||(s[0]=[a(`<h1 id="异常" tabindex="-1"><a class="header-anchor" href="#异常"><span>异常</span></a></h1><h2 id="目标" tabindex="-1"><a class="header-anchor" href="#目标"><span>目标</span></a></h2><ul><li>异常的概念</li><li>捕获异常</li><li>异常的传递</li><li>抛出异常</li></ul><h2 id="_01-异常的概念" tabindex="-1"><a class="header-anchor" href="#_01-异常的概念"><span>01. 异常的概念</span></a></h2><ul><li>程序在运行时，如果 <code>Python 解释器</code> <strong>遇到</strong> 到一个错误，<strong>会停止程序的执行，并且提示一些错误信息</strong>，这就是 <strong>异常</strong></li><li><strong>程序停止执行并且提示错误信息</strong> 这个动作，我们通常称之为：<strong>抛出(raise)异常</strong></li></ul><blockquote><p>程序开发时，很难将 <strong>所有的特殊情况</strong> 都处理的面面俱到，通过 <strong>异常捕获</strong> 可以针对突发事件做集中的处理，从而保证程序的 <strong>稳定性和健壮性</strong></p></blockquote><h2 id="_02-捕获异常" tabindex="-1"><a class="header-anchor" href="#_02-捕获异常"><span>02. 捕获异常</span></a></h2><h3 id="_2-1-简单的捕获异常语法" tabindex="-1"><a class="header-anchor" href="#_2-1-简单的捕获异常语法"><span>2.1 简单的捕获异常语法</span></a></h3><ul><li>在程序开发中，如果 <strong>对某些代码的执行不能确定是否正确</strong>，可以增加 <code>try(尝试)</code> 来 <strong>捕获异常</strong></li><li>捕获异常最简单的语法格式：</li></ul><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">try</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    尝试执行的代码</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">except</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    出现错误的处理</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>try</code> <strong>尝试</strong>，下方编写要尝试代码，不确定是否能够正常执行的代码</li><li><code>except</code> <strong>如果不是</strong>，下方编写尝试失败的代码</li></ul><h4 id="简单异常捕获演练-——-要求用户输入整数" tabindex="-1"><a class="header-anchor" href="#简单异常捕获演练-——-要求用户输入整数"><span>简单异常捕获演练 —— 要求用户输入整数</span></a></h4><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">try</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # 提示用户输入一个数字</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    num </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">input</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;请输入数字：&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">))</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">except</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;请输入正确的数字&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-错误类型捕获" tabindex="-1"><a class="header-anchor" href="#_2-2-错误类型捕获"><span>2.2 错误类型捕获</span></a></h3><ul><li><p>在程序执行时，可能会遇到 <strong>不同类型的异常</strong>，并且需要 <strong>针对不同类型的异常，做出不同的响应</strong>，这个时候，就需要捕获错误类型了</p></li><li><p>语法如下：</p></li></ul><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">try</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # 尝试执行的代码</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    pass</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">except</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 错误类型1:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # 针对错误类型1，对应的代码处理</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    pass</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">except</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (错误类型2, 错误类型3):</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # 针对错误类型2 和 3，对应的代码处理</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    pass</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">except</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;"> Exception</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> as</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> result:</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;未知错误 </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">%s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> %</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> result)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>当 <code>Python</code> 解释器 <strong>抛出异常</strong> 时，<strong>最后一行错误信息的第一个单词，就是错误类型</strong></li></ul><h4 id="异常类型捕获演练-——-要求用户输入整数" tabindex="-1"><a class="header-anchor" href="#异常类型捕获演练-——-要求用户输入整数"><span>异常类型捕获演练 —— 要求用户输入整数</span></a></h4><p><strong>需求</strong></p><ol><li>提示用户输入一个整数</li><li>使用 <code>8</code> 除以用户输入的整数并且输出</li></ol><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">try</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    num </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">input</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;请输入整数：&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">))</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    result </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 8</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> /</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> num</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(result)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">except</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;"> ValueError</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;请输入正确的整数&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">except</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;"> ZeroDivisionError</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;除 0 错误&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="捕获未知错误" tabindex="-1"><a class="header-anchor" href="#捕获未知错误"><span>捕获未知错误</span></a></h4><ul><li>在开发时，<strong>要预判到所有可能出现的错误</strong>，还是有一定难度的</li><li>如果希望程序 <strong>无论出现任何错误</strong>，都不会因为 <code>Python</code> 解释器 <strong>抛出异常而被终止</strong>，可以再增加一个 <code>except</code></li></ul><p>语法如下：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">except</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;"> Exception</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> as</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> result:</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;未知错误 </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">%s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> %</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> result)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-异常捕获完整语法" tabindex="-1"><a class="header-anchor" href="#_2-3-异常捕获完整语法"><span>2.3 异常捕获完整语法</span></a></h3><ul><li>在实际开发中，为了能够处理复杂的异常情况，完整的异常语法如下：</li></ul><blockquote><p>提示：</p><ul><li>有关完整语法的应用场景，在后续学习中，<strong>结合实际的案例</strong>会更好理解</li><li>现在先对这个语法结构有个印象即可</li></ul></blockquote><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">try</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # 尝试执行的代码</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    pass</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">except</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 错误类型1:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # 针对错误类型1，对应的代码处理</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    pass</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">except</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 错误类型2:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # 针对错误类型2，对应的代码处理</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    pass</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">except</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (错误类型3, 错误类型4):</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # 针对错误类型3 和 4，对应的代码处理</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    pass</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">except</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;"> Exception</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> as</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> result:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # 打印错误信息</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(result)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # 没有异常才会执行的代码</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    pass</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">finally</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # 无论是否有异常，都会执行的代码</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;无论是否有异常，都会执行的代码&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><code>else</code> 只有在没有异常时才会执行的代码</p></li><li><p><code>finally</code> 无论是否有异常，都会执行的代码</p></li><li><p>之前一个演练的 <strong>完整捕获异常</strong> 的代码如下：</p></li></ul><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">try</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    num </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">input</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;请输入整数：&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">))</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    result </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 8</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> /</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> num</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(result)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">except</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;"> ValueError</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;请输入正确的整数&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">except</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;"> ZeroDivisionError</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;除 0 错误&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">except</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;"> Exception</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> as</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> result:</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;未知错误 </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">%s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> %</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> result)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;正常执行&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">finally</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;执行完成，但是不保证正确&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_03-异常的传递" tabindex="-1"><a class="header-anchor" href="#_03-异常的传递"><span>03. 异常的传递</span></a></h2><ul><li><strong>异常的传递</strong> —— 当 <strong>函数/方法</strong> 执行 <strong>出现异常</strong>，会 <strong>将异常传递</strong> 给 函数/方法 的 <strong>调用一方</strong></li><li>如果 <strong>传递到主程序</strong>，仍然 <strong>没有异常处理</strong>，程序才会被终止</li></ul><blockquote><p>提示</p></blockquote><ul><li>在开发中，可以在主函数中增加 <strong>异常捕获</strong></li><li>而在主函数中调用的其他函数，只要出现异常，都会传递到主函数的 <strong>异常捕获</strong> 中</li><li>这样就不需要在代码中，增加大量的 <strong>异常捕获</strong>，能够保证代码的整洁</li></ul><p><strong>需求</strong></p><ol><li>定义函数 <code>demo1()</code> <strong>提示用户输入一个整数并且返回</strong></li><li>定义函数 <code>demo2()</code> 调用 <code>demo1()</code></li><li>在主程序中调用 <code>demo2()</code></li></ol><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> demo1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">():</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">input</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;请输入一个整数：&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">))</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> demo2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">():</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;"> demo1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">try</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">demo2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">())</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">except</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;"> ValueError</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;请输入正确的整数&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">except</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;"> Exception</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> as</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> result:</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;未知错误 </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">%s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> %</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> result)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_04-抛出-raise-异常" tabindex="-1"><a class="header-anchor" href="#_04-抛出-raise-异常"><span>04. 抛出 <code>raise</code> 异常</span></a></h2><h3 id="_4-1-应用场景" tabindex="-1"><a class="header-anchor" href="#_4-1-应用场景"><span>4.1 应用场景</span></a></h3><ul><li>在开发中，除了 <strong>代码执行出错</strong> <code>Python</code> 解释器会 <strong>抛出</strong> 异常之外</li><li>还可以根据 <strong>应用程序</strong> <strong>特有的业务需求</strong> <strong>主动抛出异常</strong></li></ul><p><strong>示例</strong></p><ul><li>提示用户 <strong>输入密码</strong>，如果 <strong>长度少于 8</strong>，抛出 <strong>异常</strong></li></ul><figure><img src="`+t+`" alt="024_自定义异常" tabindex="0" loading="lazy"><figcaption>024_自定义异常</figcaption></figure><p><strong>注意</strong></p><ul><li>当前函数 <strong>只负责</strong> 提示用户输入密码，如果 <strong>密码长度不正确，需要其他的函数进行额外处理</strong></li><li>因此可以 <strong>抛出异常</strong>，由其他需要处理的函数 <strong>捕获异常</strong></li></ul><h3 id="_4-2-抛出异常" tabindex="-1"><a class="header-anchor" href="#_4-2-抛出异常"><span>4.2 抛出异常</span></a></h3><ul><li><code>Python</code> 中提供了一个 <code>Exception</code> <strong>异常类</strong></li><li>在开发时，如果满足 <strong>特定业务需求时</strong>，希望 <strong>抛出异常</strong>，可以： <ol><li><strong>创建</strong> 一个 <code>Exception</code> 的 <strong>对象</strong></li><li>使用 <code>raise</code> <strong>关键字</strong> 抛出 <strong>异常对象</strong></li></ol></li></ul><p><strong>需求</strong></p><ul><li>定义 <code>input_password</code> 函数，提示用户输入密码</li><li>如果用户输入长度 &lt; 8，抛出异常</li><li>如果用户输入长度 &gt;=8，返回输入的密码</li></ul><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> input_password</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">():</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # 1. 提示用户输入密码</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    pwd </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> input</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;请输入密码：&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # 2. 判断密码长度，如果长度 &gt;= 8，返回用户输入的密码</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> len</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(pwd) </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 8</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> pwd</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # 3. 密码长度不够，需要抛出异常</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # 1&gt; 创建异常对象 - 使用异常的错误信息字符串作为参数</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    ex </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;"> Exception</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;密码长度不够&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # 2&gt; 抛出异常对象</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    raise</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ex</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">try</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    user_pwd </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;"> input_password</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(user_pwd)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">except</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;"> Exception</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> as</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> result:</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;发现错误：</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">%s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> %</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> result)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,51)]))}const d=i(e,[["render",h],["__file","14_异常.html.vue"]]),g=JSON.parse('{"path":"/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/14_%E5%BC%82%E5%B8%B8.html","title":"异常","lang":"zh-CN","frontmatter":{"description":"异常 目标 异常的概念 捕获异常 异常的传递 抛出异常 01. 异常的概念 程序在运行时，如果 Python 解释器 遇到 到一个错误，会停止程序的执行，并且提示一些错误信息，这就是 异常 程序停止执行并且提示错误信息 这个动作，我们通常称之为：抛出(raise)异常 程序开发时，很难将 所有的特殊情况 都处理的面面俱到，通过 异常捕获 可以针对突发事...","head":[["meta",{"property":"og:url","content":"https://www.geekery.cn/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/14_%E5%BC%82%E5%B8%B8.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"异常"}],["meta",{"property":"og:description","content":"异常 目标 异常的概念 捕获异常 异常的传递 抛出异常 01. 异常的概念 程序在运行时，如果 Python 解释器 遇到 到一个错误，会停止程序的执行，并且提示一些错误信息，这就是 异常 程序停止执行并且提示错误信息 这个动作，我们通常称之为：抛出(raise)异常 程序开发时，很难将 所有的特殊情况 都处理的面面俱到，通过 异常捕获 可以针对突发事..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-19T07:56:45.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-19T07:56:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"异常\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-19T07:56:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"目标","slug":"目标","link":"#目标","children":[]},{"level":2,"title":"01. 异常的概念","slug":"_01-异常的概念","link":"#_01-异常的概念","children":[]},{"level":2,"title":"02. 捕获异常","slug":"_02-捕获异常","link":"#_02-捕获异常","children":[{"level":3,"title":"2.1 简单的捕获异常语法","slug":"_2-1-简单的捕获异常语法","link":"#_2-1-简单的捕获异常语法","children":[]},{"level":3,"title":"2.2 错误类型捕获","slug":"_2-2-错误类型捕获","link":"#_2-2-错误类型捕获","children":[]},{"level":3,"title":"2.3 异常捕获完整语法","slug":"_2-3-异常捕获完整语法","link":"#_2-3-异常捕获完整语法","children":[]}]},{"level":2,"title":"03. 异常的传递","slug":"_03-异常的传递","link":"#_03-异常的传递","children":[]},{"level":2,"title":"04. 抛出 raise 异常","slug":"_04-抛出-raise-异常","link":"#_04-抛出-raise-异常","children":[{"level":3,"title":"4.1 应用场景","slug":"_4-1-应用场景","link":"#_4-1-应用场景","children":[]},{"level":3,"title":"4.2 抛出异常","slug":"_4-2-抛出异常","link":"#_4-2-抛出异常","children":[]}]}],"git":{"createdTime":1691939318000,"updatedTime":1710835005000,"contributors":[{"name":"PaperDragon-SH","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":5.27,"words":1582},"filePathRelative":"note-book/Research_Develop/Python/python面向对象/14_异常.md","localizedDate":"2023年8月13日","excerpt":"\\n<h2>目标</h2>\\n<ul>\\n<li>异常的概念</li>\\n<li>捕获异常</li>\\n<li>异常的传递</li>\\n<li>抛出异常</li>\\n</ul>\\n<h2>01. 异常的概念</h2>\\n<ul>\\n<li>程序在运行时，如果 <code>Python 解释器</code> <strong>遇到</strong> 到一个错误，<strong>会停止程序的执行，并且提示一些错误信息</strong>，这就是 <strong>异常</strong></li>\\n<li><strong>程序停止执行并且提示错误信息</strong> 这个动作，我们通常称之为：<strong>抛出(raise)异常</strong></li>\\n</ul>","autoDesc":true}');export{d as comp,g as data};
