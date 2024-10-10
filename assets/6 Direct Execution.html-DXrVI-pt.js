import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{aj as n,ao as o,am as r}from"./app-D12iKM4i.js";const i="/assets/mode_switch-CwFP0Wf0.png",a="/assets/process_switch-Bad1qW2E.png",p={};function s(l,t){return r(),n("div",null,t[0]||(t[0]=[o('<h1 id="_6-受限直接执行" tabindex="-1"><a class="header-anchor" href="#_6-受限直接执行"><span>6 受限直接执行</span></a></h1><p><strong>概述</strong> 问题1:操作系统怎么能确保程序不做我们不希望它做的事请,比如擅自更改操作系统内部文件 问题2:运行一个进程时,操作系统如何让它停下来,并切换到另一个进程,从而实现虚拟化cpu所需的时分共享</p><ol><li><strong>受限制的操作</strong> 操作系统采用用户模式和内核模式来限制进程操作. 系统会暴露只有内核模式才能执行的系统调用命令编号,但是不会暴露具体的系统调用代码地址.用户模式的进程想执行I/O等系统调用时,通过调用trap(陷阱)命令切换到内核模式执行. 内核会初始化一个trap(陷阱)命令表,表里有命令编号,和响应的处理代码地址. 用户模式只知道命令编号,但不知道命令代码地址,从而防止程序直接执行特殊操作 <ul><li>用户模式 程序会收到限制,比如不能直接执行I/O请求等特权操作</li><li>内核模式 程序不受限制</li><li>用户模式和内核模式的切换** 用户模式切换到内核模式时,用户模式的寄存器值会保存到内核栈,当内核操作完成后,切换会用户模式时会重新加载. <img src="'+i+'" alt="" loading="lazy"></li></ul></li><li><strong>进程之间的切换</strong> 操作系统通过每隔几毫秒就产生的时钟中断(timer interrupt)机制,中断运行中的进程,重获cpu的控制权,可以启动任一操作系统想启动的进程,达到进程切换的目的.如果操作系统决定切换进程,会执行上下文切换操作.即保存当前执行进程的寄存器值,程序计数器,内核栈指针等,然后加载即将运行进程的寄存器值,程序计数器,内核栈指针等 <img src="'+a+'" alt="" loading="lazy"></li></ol>',3)]))}const g=e(p,[["render",s],["__file","6 Direct Execution.html.vue"]]),u=JSON.parse('{"path":"/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/6%20Direct%20Execution.html","title":"6 受限直接执行","lang":"zh-CN","frontmatter":{"description":"6 受限直接执行 概述 问题1:操作系统怎么能确保程序不做我们不希望它做的事请,比如擅自更改操作系统内部文件 问题2:运行一个进程时,操作系统如何让它停下来,并切换到另一个进程,从而实现虚拟化cpu所需的时分共享 受限制的操作 操作系统采用用户模式和内核模式来限制进程操作. 系统会暴露只有内核模式才能执行的系统调用命令编号,但是不会暴露具体的系统调用代...","head":[["meta",{"property":"og:url","content":"https://www.geekery.cn/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/6%20Direct%20Execution.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"6 受限直接执行"}],["meta",{"property":"og:description","content":"6 受限直接执行 概述 问题1:操作系统怎么能确保程序不做我们不希望它做的事请,比如擅自更改操作系统内部文件 问题2:运行一个进程时,操作系统如何让它停下来,并切换到另一个进程,从而实现虚拟化cpu所需的时分共享 受限制的操作 操作系统采用用户模式和内核模式来限制进程操作. 系统会暴露只有内核模式才能执行的系统调用命令编号,但是不会暴露具体的系统调用代..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-13T15:08:38.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-13T15:08:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"6 受限直接执行\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-13T15:08:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[],"git":{"createdTime":1691939318000,"updatedTime":1691939318000,"contributors":[{"name":"PaperDragon","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":1.72,"words":516},"filePathRelative":"note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/6 Direct Execution.md","localizedDate":"2023年8月13日","excerpt":"\\n<p><strong>概述</strong>\\n问题1:操作系统怎么能确保程序不做我们不希望它做的事请,比如擅自更改操作系统内部文件\\n问题2:运行一个进程时,操作系统如何让它停下来,并切换到另一个进程,从而实现虚拟化cpu所需的时分共享</p>\\n<ol>\\n<li><strong>受限制的操作</strong>\\n操作系统采用用户模式和内核模式来限制进程操作. 系统会暴露只有内核模式才能执行的系统调用命令编号,但是不会暴露具体的系统调用代码地址.用户模式的进程想执行I/O等系统调用时,通过调用trap(陷阱)命令切换到内核模式执行. 内核会初始化一个trap(陷阱)命令表,表里有命令编号,和响应的处理代码地址. 用户模式只知道命令编号,但不知道命令代码地址,从而防止程序直接执行特殊操作\\n<ul>\\n<li>用户模式\\n程序会收到限制,比如不能直接执行I/O请求等特权操作</li>\\n<li>内核模式\\n程序不受限制</li>\\n<li>用户模式和内核模式的切换**\\n用户模式切换到内核模式时,用户模式的寄存器值会保存到内核栈,当内核操作完成后,切换会用户模式时会重新加载.\\n</li>\\n</ul>\\n</li>\\n<li><strong>进程之间的切换</strong>\\n操作系统通过每隔几毫秒就产生的时钟中断(timer interrupt)机制,中断运行中的进程,重获cpu的控制权,可以启动任一操作系统想启动的进程,达到进程切换的目的.如果操作系统决定切换进程,会执行上下文切换操作.即保存当前执行进程的寄存器值,程序计数器,内核栈指针等,然后加载即将运行进程的寄存器值,程序计数器,内核栈指针等\\n</li>\\n</ol>","autoDesc":true}');export{g as comp,u as data};