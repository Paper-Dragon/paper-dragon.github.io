import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{aj as o,ao as i,am as a}from"./app-COjiYc5s.js";const r={};function n(l,e){return a(),o("div",null,e[0]||(e[0]=[i('<h1 id="_8-调度-多级反馈队" tabindex="-1"><a class="header-anchor" href="#_8-调度-多级反馈队"><span>8 调度:多级反馈队</span></a></h1><p><strong>概述</strong><br> 上一章介绍了几种调度策略,每一种都多多少少有一些缺陷,多级反馈队列是一种比较可行的调度策略,能友好兼顾响应时间和周转时间.他的关键在于优先级,每个优先级都有响应的队列存储相应的进程,它的调度规则如下:</p><ol><li>规则1: 如果任务A的优先级&gt;B的优先级,则执行A</li><li>规则2: 如果任务A的优先级别=B的优先级,则轮转执行A和B</li><li>规则3: 任务进入系统时,放在最高优先级</li><li>规则4: 一旦任务用完了其在所属级别队列的时间配额,则降低其优先级</li><li>规则5: 经过一段时间后,所有任务都放在最高优先级队列(避免任务饥饿)</li></ol><p>这个策略利用了进程任务执行历史信息,动态的调整进程的优先级别,显得非常智能</p>',4)]))}const s=t(r,[["render",n],["__file","8 Multi-level Feedback.html.vue"]]),m=JSON.parse('{"path":"/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/8%20Multi-level%20Feedback.html","title":"8 调度:多级反馈队","lang":"zh-CN","frontmatter":{"description":"8 调度:多级反馈队 概述 上一章介绍了几种调度策略,每一种都多多少少有一些缺陷,多级反馈队列是一种比较可行的调度策略,能友好兼顾响应时间和周转时间.他的关键在于优先级,每个优先级都有响应的队列存储相应的进程,它的调度规则如下: 规则1: 如果任务A的优先级>B的优先级,则执行A 规则2: 如果任务A的优先级别=B的优先级,则轮转执行A和B 规则3: ...","head":[["meta",{"property":"og:url","content":"https://www.geekery.cn/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/8%20Multi-level%20Feedback.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"8 调度:多级反馈队"}],["meta",{"property":"og:description","content":"8 调度:多级反馈队 概述 上一章介绍了几种调度策略,每一种都多多少少有一些缺陷,多级反馈队列是一种比较可行的调度策略,能友好兼顾响应时间和周转时间.他的关键在于优先级,每个优先级都有响应的队列存储相应的进程,它的调度规则如下: 规则1: 如果任务A的优先级>B的优先级,则执行A 规则2: 如果任务A的优先级别=B的优先级,则轮转执行A和B 规则3: ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-13T15:08:38.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-13T15:08:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"8 调度:多级反馈队\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-13T15:08:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[],"git":{"createdTime":1691939318000,"updatedTime":1691939318000,"contributors":[{"name":"PaperDragon","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":0.89,"words":268},"filePathRelative":"note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/8 Multi-level Feedback.md","localizedDate":"2023年8月13日","excerpt":"\\n<p><strong>概述</strong><br>\\n上一章介绍了几种调度策略,每一种都多多少少有一些缺陷,多级反馈队列是一种比较可行的调度策略,能友好兼顾响应时间和周转时间.他的关键在于优先级,每个优先级都有响应的队列存储相应的进程,它的调度规则如下:</p>\\n<ol>\\n<li>规则1: 如果任务A的优先级&gt;B的优先级,则执行A</li>\\n<li>规则2: 如果任务A的优先级别=B的优先级,则轮转执行A和B</li>\\n<li>规则3: 任务进入系统时,放在最高优先级</li>\\n<li>规则4: 一旦任务用完了其在所属级别队列的时间配额,则降低其优先级</li>\\n<li>规则5: 经过一段时间后,所有任务都放在最高优先级队列(避免任务饥饿)</li>\\n</ol>","autoDesc":true}');export{s as comp,m as data};
