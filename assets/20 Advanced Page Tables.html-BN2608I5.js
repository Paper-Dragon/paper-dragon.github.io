import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{aj as a,ao as n,am as o}from"./app-COjiYc5s.js";const r="/assets/multi_level_paging-Bp6GRFzp.png",p={};function s(i,e){return o(),a("div",null,e[0]||(e[0]=[n('<h1 id="_20-advanced-page-tables-分页-较小的表" tabindex="-1"><a class="header-anchor" href="#_20-advanced-page-tables-分页-较小的表"><span>20 Advanced Page Tables 分页:较小的表</span></a></h1><p><strong>概述:</strong><br> 分页的第二个问题:内存消耗太大.这个问题有以下几种方案</p><ol><li><p><strong>更大的分页</strong><br> 一种简单的解决方案是采用更大的分页,这样页数则变少,页表占用内存自然就变小,但是更大的分页会造成内部碎片问题,即分页内部有很多未真正使用的内存.</p></li><li><p><strong>分段+分页</strong><br> 还有一种解决方案是采用前面介绍的分段+分页的方式来管理内存. 单独有页表来管理内存有一个问题是,比如堆heap和栈stack之间可能会有很多未使用的页,但分页的项还是存在页表中占用空间. 使用逻辑分段:代码段,堆段,栈段,每个段都有属于自己的页表,这种方式可以避免未使用的分页项占用页表空间.但是分段始终会造成外部内存碎片问题.</p></li><li><p><strong>多级页表</strong><br> 简单来说,就是将线性页表转化成树的结构. 首先将页表分成页大小的单元,即将页表本身再次分页,如果分页中的所有项都是无效的,则不分配项管理,因此可以减少无效分页的内存浪费.当然因为采用了多级结构,在分页查找上会有一些消耗,但综合考虑是非常有效的方案,很多现代系统都采用它.<br> 多级页表例: <img src="'+r+'" alt="" loading="lazy"></p></li></ol>',3)]))}const d=t(p,[["render",s],["__file","20 Advanced Page Tables.html.vue"]]),g=JSON.parse('{"path":"/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/20%20Advanced%20Page%20Tables.html","title":"20 Advanced Page Tables 分页:较小的表","lang":"zh-CN","frontmatter":{"description":"20 Advanced Page Tables 分页:较小的表 概述: 分页的第二个问题:内存消耗太大.这个问题有以下几种方案 更大的分页 一种简单的解决方案是采用更大的分页,这样页数则变少,页表占用内存自然就变小,但是更大的分页会造成内部碎片问题,即分页内部有很多未真正使用的内存. 分段+分页 还有一种解决方案是采用前面介绍的分段+分页的方式来管理内...","head":[["meta",{"property":"og:url","content":"https://www.geekery.cn/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/20%20Advanced%20Page%20Tables.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"20 Advanced Page Tables 分页:较小的表"}],["meta",{"property":"og:description","content":"20 Advanced Page Tables 分页:较小的表 概述: 分页的第二个问题:内存消耗太大.这个问题有以下几种方案 更大的分页 一种简单的解决方案是采用更大的分页,这样页数则变少,页表占用内存自然就变小,但是更大的分页会造成内部碎片问题,即分页内部有很多未真正使用的内存. 分段+分页 还有一种解决方案是采用前面介绍的分段+分页的方式来管理内..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-13T15:08:38.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-13T15:08:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"20 Advanced Page Tables 分页:较小的表\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-13T15:08:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[],"git":{"createdTime":1691939318000,"updatedTime":1691939318000,"contributors":[{"name":"PaperDragon","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":1.34,"words":401},"filePathRelative":"note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/20 Advanced Page Tables.md","localizedDate":"2023年8月13日","excerpt":"\\n<p><strong>概述:</strong><br>\\n分页的第二个问题:内存消耗太大.这个问题有以下几种方案</p>\\n<ol>\\n<li>\\n<p><strong>更大的分页</strong><br>\\n一种简单的解决方案是采用更大的分页,这样页数则变少,页表占用内存自然就变小,但是更大的分页会造成内部碎片问题,即分页内部有很多未真正使用的内存.</p>\\n</li>\\n<li>\\n<p><strong>分段+分页</strong><br>\\n还有一种解决方案是采用前面介绍的分段+分页的方式来管理内存. 单独有页表来管理内存有一个问题是,比如堆heap和栈stack之间可能会有很多未使用的页,但分页的项还是存在页表中占用空间. 使用逻辑分段:代码段,堆段,栈段,每个段都有属于自己的页表,这种方式可以避免未使用的分页项占用页表空间.但是分段始终会造成外部内存碎片问题.</p>\\n</li>\\n<li>\\n<p><strong>多级页表</strong><br>\\n简单来说,就是将线性页表转化成树的结构. 首先将页表分成页大小的单元,即将页表本身再次分页,如果分页中的所有项都是无效的,则不分配项管理,因此可以减少无效分页的内存浪费.当然因为采用了多级结构,在分页查找上会有一些消耗,但综合考虑是非常有效的方案,很多现代系统都采用它.<br>\\n多级页表例:\\n</p>\\n</li>\\n</ol>","autoDesc":true}');export{d as comp,g as data};
