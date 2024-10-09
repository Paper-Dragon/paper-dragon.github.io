import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{aj as s,ao as t,am as a}from"./app-COjiYc5s.js";const o="/assets/1595110-20220127110635449-1457191292-DUlKrsYX.png",n="/assets/1595110-20220127110709303-1880697834-DgXZX0DW.png",r="/assets/1595110-20220127111521217-224314927-Dtrtb5jS.png",d={};function c(l,e){return a(),s("div",null,e[0]||(e[0]=[t('<h1 id="windows通过修改注册表更改用户家目录" tabindex="-1"><a class="header-anchor" href="#windows通过修改注册表更改用户家目录"><span>Windows通过修改注册表更改用户家目录</span></a></h1><p>系统盘为C盘，C盘空间不足，C盘太满了，C盘清理时查看发现<code>C:\\Users</code>目录占用几十个GB，以下方法可将<code>Users</code>目录大部分空间转移。</p><h3 id="_1-准备工作" tabindex="-1"><a class="header-anchor" href="#_1-准备工作"><span>1. 准备工作</span></a></h3><p>更改/迁移用户目录之前先自行备份当前用户的资料（下载目录、桌面文件等），以免数据丢失！！！</p><h3 id="_2-修改注册表" tabindex="-1"><a class="header-anchor" href="#_2-修改注册表"><span>2. 修改注册表</span></a></h3><p>更改默认用户目录路径，快捷键<code>Win+R</code>输入<code>regedit</code>打开系统注册表，切换至如下路径：</p><div class="language-bat line-numbers-mode" data-highlighter="shiki" data-ext="bat" data-title="bat" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\ProfileList\\</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>将<code>ProfilesDirectory</code>项改为将要迁移的路径，例如<code>D:\\Users</code>；</p><figure><img src="'+o+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>然后进入系统<code>控制面板</code>新建一个新系统账户，并设置为管理员；</p><p>重启电脑后使用新账户登录，这样新账户的用户目录就自动切换到<code>D:\\Users\\[新账户]</code>目录。</p><p><em>（如果想新账户名跟原来的账户名保持一致，那么在建新账户之前先删除旧账户（自行备份资料），重启电脑确保旧账户被清空，再重新建立一个同样名字的新账户，再继续执行上述步骤即可。）</em></p><h3 id="_3-还原注册表" tabindex="-1"><a class="header-anchor" href="#_3-还原注册表"><span>3. 还原注册表</span></a></h3><p>完成目录切换后，为避免更改的注册表引发其他问题，还需将注册表的<code>ProfilesDirectory</code>项还原成<code>%SystemDrive%\\Users</code>，如下：</p><figure><img src="'+n+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>做完这一步，<strong>用户目录更改/迁移就已经完成了</strong>；文章后面的内容为补充内容，有兴趣的朋友可以看看。</p><h3 id="_4-补充信息" tabindex="-1"><a class="header-anchor" href="#_4-补充信息"><span>4. 补充信息</span></a></h3><p>注册表中会记录已经登录过的用户以及用户配置文件路径，打开注册表路径：</p><div class="language-bat line-numbers-mode" data-highlighter="shiki" data-ext="bat" data-title="bat" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\ProfileList\\</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>展开该路径显示子项，左边长串数字的子项就是系统所有的用户项。</p><figure><img src="'+r+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="_5-其他方法" tabindex="-1"><a class="header-anchor" href="#_5-其他方法"><span>5. 其他方法</span></a></h3><p>尝试通过<code>mklink</code>建立文件夹软链接替换<code>C:\\Users\\[xxx]</code>；但是<code>xcopy</code>和<code>robocopy</code>命令拷贝<code>C:\\Users\\[xxx]</code>时总会有文件拷贝失败，导致系统库(<code>AppData\\Local\\Microsoft</code>等)异常，此方法无效。</p>',23)]))}const g=i(d,[["render",c],["__file","Windows通过修改注册表更改用户家目录.html.vue"]]),m=JSON.parse('{"path":"/note-book/Windows/Windows%E9%80%9A%E8%BF%87%E4%BF%AE%E6%94%B9%E6%B3%A8%E5%86%8C%E8%A1%A8%E6%9B%B4%E6%94%B9%E7%94%A8%E6%88%B7%E5%AE%B6%E7%9B%AE%E5%BD%95.html","title":"Windows通过修改注册表更改用户家目录","lang":"zh-CN","frontmatter":{"description":"Windows通过修改注册表更改用户家目录 系统盘为C盘，C盘空间不足，C盘太满了，C盘清理时查看发现C:\\\\Users目录占用几十个GB，以下方法可将Users目录大部分空间转移。 1. 准备工作 更改/迁移用户目录之前先自行备份当前用户的资料（下载目录、桌面文件等），以免数据丢失！！！ 2. 修改注册表 更改默认用户目录路径，快捷键Win+R输入re...","head":[["meta",{"property":"og:url","content":"https://www.geekery.cn/note-book/Windows/Windows%E9%80%9A%E8%BF%87%E4%BF%AE%E6%94%B9%E6%B3%A8%E5%86%8C%E8%A1%A8%E6%9B%B4%E6%94%B9%E7%94%A8%E6%88%B7%E5%AE%B6%E7%9B%AE%E5%BD%95.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"Windows通过修改注册表更改用户家目录"}],["meta",{"property":"og:description","content":"Windows通过修改注册表更改用户家目录 系统盘为C盘，C盘空间不足，C盘太满了，C盘清理时查看发现C:\\\\Users目录占用几十个GB，以下方法可将Users目录大部分空间转移。 1. 准备工作 更改/迁移用户目录之前先自行备份当前用户的资料（下载目录、桌面文件等），以免数据丢失！！！ 2. 修改注册表 更改默认用户目录路径，快捷键Win+R输入re..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-26T08:16:48.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-26T08:16:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Windows通过修改注册表更改用户家目录\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-26T08:16:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[{"level":3,"title":"1. 准备工作","slug":"_1-准备工作","link":"#_1-准备工作","children":[]},{"level":3,"title":"2. 修改注册表","slug":"_2-修改注册表","link":"#_2-修改注册表","children":[]},{"level":3,"title":"3. 还原注册表","slug":"_3-还原注册表","link":"#_3-还原注册表","children":[]},{"level":3,"title":"4. 补充信息","slug":"_4-补充信息","link":"#_4-补充信息","children":[]},{"level":3,"title":"5. 其他方法","slug":"_5-其他方法","link":"#_5-其他方法","children":[]}],"git":{"createdTime":1691989632000,"updatedTime":1721981808000,"contributors":[{"name":"PaperDragon-SH","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":1.96,"words":587},"filePathRelative":"note-book/Windows/Windows通过修改注册表更改用户家目录.md","localizedDate":"2023年8月14日","excerpt":"\\n<p>系统盘为C盘，C盘空间不足，C盘太满了，C盘清理时查看发现<code>C:\\\\Users</code>目录占用几十个GB，以下方法可将<code>Users</code>目录大部分空间转移。</p>\\n<h3>1. 准备工作</h3>\\n<p>更改/迁移用户目录之前先自行备份当前用户的资料（下载目录、桌面文件等），以免数据丢失！！！</p>\\n<h3>2. 修改注册表</h3>\\n<p>更改默认用户目录路径，快捷键<code>Win+R</code>输入<code>regedit</code>打开系统注册表，切换至如下路径：</p>\\n<div class=\\"language-bat line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"bat\\" data-title=\\"bat\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">HKEY_LOCAL_MACHINE\\\\SOFTWARE\\\\Microsoft\\\\Windows NT\\\\CurrentVersion\\\\ProfileList\\\\</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{g as comp,m as data};
