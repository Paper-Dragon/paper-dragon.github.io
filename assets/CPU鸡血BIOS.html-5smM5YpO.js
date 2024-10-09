import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{aj as a,ao as i,am as o}from"./app-COjiYc5s.js";const p="/assets/image-20231219170358590-Dy92hTl4.png",n="/assets/image-20231219170454270-D2kx36zI.png",s="/assets/image-20231219163700910-BkV0uXCn.png",l="/assets/image-20231219172007758-BHypMO6K.png",r="/assets/image-20231219172024705-vlYgFtsf.png",c="/assets/image-20231219172642821-C6T-3QUF.png",d={};function h(g,e){return o(),a("div",null,e[0]||(e[0]=[i('<h1 id="cpu鸡血bios" tabindex="-1"><a class="header-anchor" href="#cpu鸡血bios"><span>CPU鸡血BIOS</span></a></h1><p>鸡血bios能提升性能，获得更大好处。现在对一些关键操作的参数进行解释。</p><p>这是我们本文的主角</p><figure><img src="'+p+'" alt="image-20231219170358590" tabindex="0" loading="lazy"><figcaption>image-20231219170358590</figcaption></figure><p>参数介绍</p><p>2696v3是e5 v3系列最强的cpu 它是2699v3的 oem定制版 2699v3是 18核36线程 睿频 （ 12-36）单核3.6G 全核2.8G tdp 145w 2696v3是 18核36线程 睿频 （12-38） 单核3.8G 全核 2.8G tdp 145w 所以他们唯一的区别就四单核睿频从3.6g提升到了3.8G 但是因为E5 V3鸡血bios的出现 可以全核最大睿频 即单核3.6G就可以全核3.6G 单核3.8G就可以全核3.8G.但是全核睿频功耗不能超过tdp功耗 就是145w 所以18核满载超过145w就会降频</p><p>CPU-Z性能测试</p><figure><img src="'+n+'" alt="image-20231219170454270" tabindex="0" loading="lazy"><figcaption>image-20231219170454270</figcaption></figure><h2 id="cpu状态-cstates" tabindex="-1"><a class="header-anchor" href="#cpu状态-cstates"><span>CPU状态 CStates</span></a></h2><p>EIST全名Enhanced Intel SpeedStep Technology（增强型Intel SpeedStep技术），是Intel的新节能技术。和早期的SpeedStep技术不同，增强型的EIST技术可以动态调整CPU频率，随着CPU使用率地下或者接近0时候降低CPU频率并且降压，从而降低功耗和发热。一旦检测到CPU使用率高，立马回复原始工作频率。</p><table><thead><tr><th>状态</th><th>通意</th><th>含义</th></tr></thead><tbody><tr><td>C1E</td><td>空闲时降频率和电压</td><td>系统闲置状态时的CPU节能功能</td></tr><tr><td>C3</td><td>空闲时降频率和电压</td><td>C3 状态（深度睡眠）<br>总线频率和 PLL 均被锁定<br>在多核心系统下，缓存无效<br>在单核心系统下，内存被关闭，但缓存仍有效<br>可以节省 70% 的 CPU 功耗，但平台功耗比 C2 状态下大一些<br>唤醒时间需要 50 微秒</td></tr><tr><td>C6</td><td>空闲时降频率和电压</td><td>C6 状态<br>二级缓存减至零后， CPU 的核心电压更低<br>不保存 CPU context<br>功耗未知，非常低接近零<br>唤醒时间未知</td></tr></tbody></table><figure><img src="'+s+'" alt="image-20231219163700910" tabindex="0" loading="lazy"><figcaption>image-20231219163700910</figcaption></figure><p>深度解密CState看这里，</p><ul><li>https://zhuanlan.zhihu.com/p/25675639</li><li>https://www.intel.cn/content/www/cn/zh/support/articles/000006619/processors/intel-core-processors.html</li></ul><h2 id="电源管理状态" tabindex="-1"><a class="header-anchor" href="#电源管理状态"><span>电源管理状态</span></a></h2><p>浅谈Sleep S3 1.电源管理的SX状态和GX状态：</p><p>❷SX状态： ● S0 ：实际上这就是我们平常的工作状态，在OS下的运行状态。 ● S1 ：也称作为 POS （ power on suspend ），这时通过 CPU 时钟控制器将 CPU 关闭外，其他，外设都正常工作。 ● S2 ：这个状态除了 CPU 被关闭之外，总线时钟也是处于关闭的状态，但是其他的外设还是都处于正常的工作状态的。 ● S3 ：就是 我们熟悉的 STR （ Suspend to Ram ） , 也就是待机 到内存， CPU 和外设电源被关 闭，只有内存处于自刷新状态。就是笔记本合上屏幕的状态 。 ● S4 ：被称为 STD （ suspend to Disk ）, 待机到硬盘， CPU 和外设电源被关闭（硬盘处于工作 状态），将内存的数据保存到硬盘中并可以被唤醒。 ● S5 ：就是关机的状态。 ❷GX状态： G 状态 Global system state ● G0 运行模式。向硬件提供电源，软件可以运行的状态。 ● G1 停止模式。所谓的待机或休眠状态。 ● G2 软件为关闭状态，应将消耗若干电力状态。 ● G3 系统完全关闭，电源关闭的状态。即不插电源的S5状态。 ———————————————— 原文链接：https://blog.csdn.net/weixin_44964658/article/details/133790845</p><h2 id="电源管理状态和cpu状态的关系" tabindex="-1"><a class="header-anchor" href="#电源管理状态和cpu状态的关系"><span>电源管理状态和CPU状态的关系</span></a></h2><blockquote><p>我理解的是CPU电源是电源管理的一部分，CPU自己本身节能，然后电源管理可以从上而下关闭电源（CPU几乎断电），这时CState将会全部失效</p></blockquote><p>G0（S0）：正常工作状态 c0：正常工作状态（又包含P1-P16：性能状态，在intel处理器中称为speedstep） c1：通常称Halt，有c1e(Enhanced Halt State，增强型C1状态) c2：通常称stop-clock c3：通常称sleep G1：睡眠（S1-S4） S1：最耗电睡眠模式，将淘汰 S2：更深睡眠状态，不被采用 S3：挂到内存（suspend to RAM/STR），也叫待机（standby）和睡眠（sleep） S4：挂到硬盘，也称休眠，类似G2 soft off 和G3 Machanical off G2（S5）：soft off G3：Machanical off ———————————————— 原文链接：https://blog.csdn.net/youshun20/article/details/115480953</p><h2 id="鸡血原理" tabindex="-1"><a class="header-anchor" href="#鸡血原理"><span>鸡血原理</span></a></h2><p>E5 v3因为MSR寄存器的bug，导致可以通过删除MC来操纵睿频，俗称“鸡血”，很多寨板厂家也提供鸡血BIOS，但是鸡血BIOS往往不能解决TDP问题，导致有些体质较差的E5v3不能跑满最大睿频，这个现象在AVX负载下尤为明显</p><h2 id="功耗破墙" tabindex="-1"><a class="header-anchor" href="#功耗破墙"><span>功耗破墙</span></a></h2><blockquote><p>参考 https://tieba.baidu.com/p/7919847934</p></blockquote><p>功耗的限制，intel的Xeon默认情况下是以TDP为最高上限的，短时间允许其运行在TDP以上20%。</p><p>比如E5-2696v3，这个CPU，TDP是145W，默认PL1是145W，PL2是175W，持续时间为45s，这个参数是固定的，在BIOS里面设置没有用处，并不能改变PL1和PL2</p><p>而E5-2696v3这个CPU的单核最大睿频是3.8Ghz，鸡血之后空载全核3.8Ghz，一旦进行任何程度的负载就会被145W的TDP压制住，根据体质不同，2696v3的SSE负载频率从3.1～3.5不等，大雕可以3.5Ghz跑R15或者CPU-Z，大雷只能3.1Ghz，AVX负载的频率在2.7～3.1不等，我的2696v3就是一颗大雷。</p><p>经过测试之后，破除TDP墙的办法是删除系统文件mcupdate_GenuineIntel.dll</p><p>这个文件是intel微码更新。参考这个<a href="http://jump.bdimg.com/safecheck/index?url=rN3wPs8te/pZF1vzXGG8W793U5re5eHk7Bb0vpq75FrqJSYuk0BDhvl+oeq0+rfD7NXEAqvWIhtYAbuY08jyGK6EU8uNey0oSaOzRbDmZJJaG7idURJvY6rQ4SXdKmUIRP0oWCCaagxyGjPW0iegznzXB1RCIIp/ea+8QMlqrwVn2am2F0Owc4hLConyc5Z3dj2oeHoEzTI=" target="_blank" rel="noopener noreferrer">https://support.microsoft.com/zh-cn/topic/kb4497165-intel-</a>微代码更新-100229c5-e199-37bb-031f-9faa76daa07a</p><h2 id="刷bios降压升频率" tabindex="-1"><a class="header-anchor" href="#刷bios降压升频率"><span>刷bios降压升频率</span></a></h2><blockquote><p>删除一些微码</p></blockquote><p>鸡血补丁是一种通过修改CPU的微代码来提高处理器性能的方式。具体来说，这个补丁可以删除一些微码，使处理器在运行时不再受到某些限制，从而让CPU的所有核心以更高的频率运行。但是，这个补丁并不会突破处理器的 TDP 上限，也就是说，CPU的功耗不会超过其设计规格。因此，使用鸡血补丁可以在一定程度上提高CPU的性能，但也需要注意系统稳定性和功耗散热等问题。</p><p>在这里提一嘴，华南的官方客服真的好啊。板子是2019年买的 x99-ad3 ，官方客服只要求拍照主板，就能得到官方鸡血bios。</p><p>看到帖子上他们坏了的主板直接返厂维修。不得不佩服，很有大厂作风。</p><figure><img src="'+l+'" alt="image-20231219172007758" tabindex="0" loading="lazy"><figcaption>image-20231219172007758</figcaption></figure><figure><img src="'+r+'" alt="image-20231219172024705" tabindex="0" loading="lazy"><figcaption>image-20231219172024705</figcaption></figure><p>官方鸡血bios到手，官方鸡血是 -30mv</p><h2 id="民间鸡血bios" tabindex="-1"><a class="header-anchor" href="#民间鸡血bios"><span>民间鸡血bios</span></a></h2><blockquote><p>资源列表</p><ul><li>教程 https://www.bilibili.com/video/BV15G41197jv</li></ul></blockquote><p>来自bilibili的一个up制作了x99平台的所有通用鸡血bios，自动化删除微码，自动破除功耗墙。</p><p>我制作了-50 mv 的 bios</p><h2 id="民间bios刷入" tabindex="-1"><a class="header-anchor" href="#民间bios刷入"><span>民间bios刷入</span></a></h2><blockquote><p>按照图片中箭头顺序点击，</p><p>重点： 点击Flash后双手离开键盘，不要点击任何东西。等待刷完</p></blockquote><figure><img src="'+c+'" alt="image-20231219172642821" tabindex="0" loading="lazy"><figcaption>image-20231219172642821</figcaption></figure><h2 id="成果展示-硬核生产力" tabindex="-1"><a class="header-anchor" href="#成果展示-硬核生产力"><span>成果展示（硬核生产力）</span></a></h2><p>TODO: 还没刷，忐忑的很。</p>',46)]))}const u=t(d,[["render",h],["__file","CPU鸡血BIOS.html.vue"]]),f=JSON.parse('{"path":"/note-book/%E6%B4%8B%E5%9E%83%E5%9C%BE%E4%B8%BB%E6%9C%BA/CPU%E9%B8%A1%E8%A1%80BIOS.html","title":"CPU鸡血BIOS","lang":"zh-CN","frontmatter":{"description":"CPU鸡血BIOS 鸡血bios能提升性能，获得更大好处。现在对一些关键操作的参数进行解释。 这是我们本文的主角 image-20231219170358590image-20231219170358590 参数介绍 2696v3是e5 v3系列最强的cpu 它是2699v3的 oem定制版 2699v3是 18核36线程 睿频 （ 12-36）单核3...","head":[["meta",{"property":"og:url","content":"https://www.geekery.cn/note-book/%E6%B4%8B%E5%9E%83%E5%9C%BE%E4%B8%BB%E6%9C%BA/CPU%E9%B8%A1%E8%A1%80BIOS.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"CPU鸡血BIOS"}],["meta",{"property":"og:description","content":"CPU鸡血BIOS 鸡血bios能提升性能，获得更大好处。现在对一些关键操作的参数进行解释。 这是我们本文的主角 image-20231219170358590image-20231219170358590 参数介绍 2696v3是e5 v3系列最强的cpu 它是2699v3的 oem定制版 2699v3是 18核36线程 睿频 （ 12-36）单核3..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-19T09:33:35.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-19T09:33:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CPU鸡血BIOS\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-19T09:33:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"CPU状态 CStates","slug":"cpu状态-cstates","link":"#cpu状态-cstates","children":[]},{"level":2,"title":"电源管理状态","slug":"电源管理状态","link":"#电源管理状态","children":[]},{"level":2,"title":"电源管理状态和CPU状态的关系","slug":"电源管理状态和cpu状态的关系","link":"#电源管理状态和cpu状态的关系","children":[]},{"level":2,"title":"鸡血原理","slug":"鸡血原理","link":"#鸡血原理","children":[]},{"level":2,"title":"功耗破墙","slug":"功耗破墙","link":"#功耗破墙","children":[]},{"level":2,"title":"刷bios降压升频率","slug":"刷bios降压升频率","link":"#刷bios降压升频率","children":[]},{"level":2,"title":"民间鸡血bios","slug":"民间鸡血bios","link":"#民间鸡血bios","children":[]},{"level":2,"title":"民间bios刷入","slug":"民间bios刷入","link":"#民间bios刷入","children":[]},{"level":2,"title":"成果展示（硬核生产力）","slug":"成果展示-硬核生产力","link":"#成果展示-硬核生产力","children":[]}],"git":{"createdTime":1702978415000,"updatedTime":1702978415000,"contributors":[{"name":"PaperDragon-SH","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":5.9,"words":1769},"filePathRelative":"note-book/洋垃圾主机/CPU鸡血BIOS.md","localizedDate":"2023年12月19日","excerpt":"\\n<p>鸡血bios能提升性能，获得更大好处。现在对一些关键操作的参数进行解释。</p>\\n<p>这是我们本文的主角</p>\\n<figure><figcaption>image-20231219170358590</figcaption></figure>\\n<p>参数介绍</p>\\n<p>2696v3是e5 v3系列最强的cpu 它是2699v3的 oem定制版\\n2699v3是 18核36线程  睿频  （ 12-36）单核3.6G 全核2.8G  tdp 145w\\n2696v3是  18核36线程  睿频  （12-38）  单核3.8G 全核 2.8G tdp  145w\\n所以他们唯一的区别就四单核睿频从3.6g提升到了3.8G\\n但是因为E5 V3鸡血bios的出现 可以全核最大睿频 即单核3.6G就可以全核3.6G 单核3.8G就可以全核3.8G.但是全核睿频功耗不能超过tdp功耗 就是145w 所以18核满载超过145w就会降频</p>","autoDesc":true}');export{u as comp,f as data};
