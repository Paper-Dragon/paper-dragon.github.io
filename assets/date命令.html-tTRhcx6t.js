import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as d,c as e,e as t}from"./app-yQGP9cLG.js";const a={},n=t(`<h1 id="date-显示或设置时间" tabindex="-1"><a class="header-anchor" href="#date-显示或设置时间" aria-hidden="true">#</a> date 显示或设置时间</h1><h2 id="显示时间" tabindex="-1"><a class="header-anchor" href="#显示时间" aria-hidden="true">#</a> 显示时间</h2><p>按照我们要求的格式显示当前日期: 年-月-日</p><pre><code>2019-04-10
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
</code></pre><h2 id="例题" tabindex="-1"><a class="header-anchor" href="#例题" aria-hidden="true">#</a> 例题:</h2><p>显示当前时间以年月日-小时格式 20190101-10 显示当前时间以年月日-小时_周几 格式 2019_01_01-10_3</p><pre><code>[root@oldboyedu59 ~]# #显示当前时间以年月日-小时格式
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
</code></pre><p>备份 设置时间</p><p>set date -s</p>`,12),r=[n];function _(u,c){return d(),e("div",null,r)}const p=o(a,[["render",_],["__file","date命令.html.vue"]]);export{p as default};
