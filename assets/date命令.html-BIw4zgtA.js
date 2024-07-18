import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,o as t,d}from"./app-CXLhYsj7.js";const a={},n=d(`<h1 id="date-显示或设置时间" tabindex="-1"><a class="header-anchor" href="#date-显示或设置时间"><span>date 显示或设置时间</span></a></h1><h2 id="显示时间" tabindex="-1"><a class="header-anchor" href="#显示时间"><span>显示时间</span></a></h2><p>按照我们要求的格式显示当前日期: 年-月-日</p><pre><code>2019-04-10
[root@oldboyedu59 ~]# date  +%Y-%m-%d
2019-04-10
[root@oldboyedu59 ~]# date +%T
09:57:23
[root@oldboyedu59 ~]# date +%H:%M:%S
09:57:39
[root@oldboyedu59 ~]# date +%w
3
 
+%F === +%Y-%m-%d
          year month  day 
+%T === +%H:%M:%S
          hour min(minute)  sec(second)       
+%w === week 周几 
</code></pre><h2 id="例题" tabindex="-1"><a class="header-anchor" href="#例题"><span>例题:</span></a></h2><p>显示当前时间以年月日-小时格式 20190101-10 显示当前时间以年月日-小时_周几 格式 2019_01_01-10_3</p><pre><code>[root@oldboyedu59 ~]# #显示当前时间以年月日-小时格式
[root@oldboyedu59 ~]# date +%Y%m%d
20190410
[root@oldboyedu59 ~]# date +%Y%m%d-%H
20190410-10
[root@oldboyedu59 ~]# #显示当前时间以年_月_日-小时_周几 格式
[root@oldboyedu59 ~]# date +%Y_%m_%d-%H_%w
2019_04_10-10_3
</code></pre><p>​<br> [root@oldboyedu59 ~]# date -d &quot;10day&quot; Sat Apr 20 10:10:12 CST 2019 [root@oldboyedu59 ~]# date -d &quot;10day&quot; +%F 2019-04-20</p><p>显示1天前时间以年月日-周几格式 20190101-3 显示7天前时间 以年月日-小时_周几 格式 2019_01_01-10_3</p><pre><code>[root@oldboyedu59 ~]# #显示1天前时间以年月日-周几格式
[root@oldboyedu59 ~]# 
[root@oldboyedu59 ~]# 
[root@oldboyedu59 ~]# date +%Y%m%d-%w -d  &quot;-1day&quot;
20190409-2
[root@oldboyedu59 ~]# #显示7天前时间 以年_月_日-小时_周几 格式
[root@oldboyedu59 ~]# 
[root@oldboyedu59 ~]# date +%Y_%m_%d-%H_%w -d &#39;-7day&#39;
2019_04_03-10_3
</code></pre><p>备份 设置时间</p><p>set date -s</p>`,12),r=[n];function p(c,l){return t(),o("div",null,r)}const s=e(a,[["render",p],["__file","date命令.html.vue"]]),_=JSON.parse('{"path":"/note-book/OperaSystems/date%E5%91%BD%E4%BB%A4.html","title":"date 显示或设置时间","lang":"zh-CN","frontmatter":{"description":"date 显示或设置时间 显示时间 按照我们要求的格式显示当前日期: 年-月-日 例题: 显示当前时间以年月日-小时格式 20190101-10 显示当前时间以年月日-小时_周几 格式 2019_01_01-10_3 ​ [root@oldboyedu59 ~]# date -d \\"10day\\" Sat Apr 20 10:10:12 CST 2019...","head":[["meta",{"property":"og:url","content":"https://www.geekery.cn/note-book/OperaSystems/date%E5%91%BD%E4%BB%A4.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"date 显示或设置时间"}],["meta",{"property":"og:description","content":"date 显示或设置时间 显示时间 按照我们要求的格式显示当前日期: 年-月-日 例题: 显示当前时间以年月日-小时格式 20190101-10 显示当前时间以年月日-小时_周几 格式 2019_01_01-10_3 ​ [root@oldboyedu59 ~]# date -d \\"10day\\" Sat Apr 20 10:10:12 CST 2019..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-13T15:08:38.000Z"}],["meta",{"property":"article:author","content":"PaperDragon"}],["meta",{"property":"article:modified_time","content":"2023-08-13T15:08:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"date 显示或设置时间\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-13T15:08:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"显示时间","slug":"显示时间","link":"#显示时间","children":[]},{"level":2,"title":"例题:","slug":"例题","link":"#例题","children":[]}],"git":{"createdTime":1691939318000,"updatedTime":1691939318000,"contributors":[{"name":"PaperDragon","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":1,"words":301},"filePathRelative":"note-book/OperaSystems/date命令.md","localizedDate":"2023年8月13日","excerpt":"\\n<h2>显示时间</h2>\\n<p>按照我们要求的格式显示当前日期: 年-月-日</p>\\n<pre><code>2019-04-10\\n[root@oldboyedu59 ~]# date  +%Y-%m-%d\\n2019-04-10\\n[root@oldboyedu59 ~]# date +%T\\n09:57:23\\n[root@oldboyedu59 ~]# date +%H:%M:%S\\n09:57:39\\n[root@oldboyedu59 ~]# date +%w\\n3\\n \\n+%F === +%Y-%m-%d\\n          year month  day \\n+%T === +%H:%M:%S\\n          hour min(minute)  sec(second)       \\n+%w === week 周几 \\n</code></pre>","autoDesc":true}');export{s as comp,_ as data};
