import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{aj as a,ao as n,am as t}from"./app-COjiYc5s.js";const h="/assets/1200-DEQjSg2u.png",e="/assets/1200-16399812651583-DR7z_qqy.png",k="/assets/1200-16399812683915-CsCm-_g8.png",l="/assets/1200-16399812721917-qP2LK--s.png",p="/assets/1200-16399814764389-CGnCTinX.png",r="/assets/1200-163998163919711-DsFxslGZ.png",d="/assets/1200-163998165250813-BGh2nUM4.png",g="/assets/1200-163998165716515-XfvLXznh.png",o="/assets/1200-163998166702717-Dmi3DYoY.jpeg",c="/assets/1200-163998167455619-D02-d0cu.png",B={};function A(y,i){return t(),a("div",null,i[0]||(i[0]=[n('<h1 id="jenkins备份" tabindex="-1"><a class="header-anchor" href="#jenkins备份"><span>Jenkins备份</span></a></h1><p><strong>1.手动备份</strong></p><p>比较简单就像上述迁移步骤那样，把原始机器上的数据打包。打包后有两种选择，第一种是在原始机器上，其他路径下创建一个文件夹，把数据丢进去。例如原始机器上的数据是存储在/home/jenkins，我们打包后可以放到/home/backups，这样做的好处是如果误删了Jenkins，我们可以到backups下找回原始数据；第二种是将打包的文件拷贝到另外一台物理机上，这样做的好处是如果原始机器宕机了，我们可以在另外一台机器上找到备份文件，在最短的时间内恢复工作。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>2.自动备份</strong></p><p>相对于手动备份，我们也可以编写脚本实现自动备份，例如Linux系统中，使用shell脚本，如下命令可以实现备份：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">　　cp</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -r</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /home/jenkins/需要备份的文件夹名</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /home/backups/目标文件夹名</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h1 id="jenkins备份与恢复" tabindex="-1"><a class="header-anchor" href="#jenkins备份与恢复"><span>Jenkins备份与恢复</span></a></h1><p>当Jenkins在用起来的时候，我们很难保证它不会出故障，除了故障怎么快速恢复呢？作为运维，备份极其重要。但Jenkins本身不提供备份的功能，所以这里就需要借助Jenkins自带的插件来进行备份恢复，Jenkins自带的插件有thinbackup和periodic backup。下面进行分别介绍</p><h3 id="一、通过插件thinbackup进行备份恢复" tabindex="-1"><a class="header-anchor" href="#一、通过插件thinbackup进行备份恢复"><span>一、通过插件ThinBackup进行备份恢复</span></a></h3><p><strong>1.以管理员的身份登录Jenkins，点击系统管理—&gt;插件管理—-&gt;可选插件—&gt;(过滤里面输入ThinBackup进行查找)</strong></p><figure><img src="'+h+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>查找thinbackup.png</p><p><strong>2.勾选ThinBackup—&gt;点击直接安装</strong></p><figure><img src="'+e+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>安装thinbackup.png</p><p>等待安装完成。 <strong>3.点击系统管理—&gt;选择ThinBackup插件</strong></p><figure><img src="'+k+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>选择插件.png</p><blockquote><p>可以看到有三个选项: Backup Now: 手动立即备份 Restore: 恢复备份 Settings: 备份参数的设置</p></blockquote><figure><img src="'+l+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>查看thinbackup.png</p><p><strong>4.创建备份目录</strong></p><blockquote><p>创建备份目录，并对目录递归属主属组权限</p></blockquote><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mkdir</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /backup</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">chown</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -R</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> jenkins.jenkins</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /backup</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>5.设置定时备份，周一至周五的凌晨2点进行备份（可排除不需要备份的文件）</strong></p><figure><img src="`+p+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>thinbackup设置.png</p><p><strong>6.手动备份</strong></p><figure><img src="'+r+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>手动备份.png</p><blockquote><p>手动备份完后，在服务器上的备份目录中就可以找到备份的文件</p></blockquote><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" data-title="csharp" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">root@localhost</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">~]# </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">cd</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> /</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">backup</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">root@localhost</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> backup</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]# </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">ls</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">FULL</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2020</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">03</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">03_16</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">58</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">root@localhost</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> backup</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]#</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>查看备份了有哪些文件</p></blockquote><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" data-title="csharp" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">root@localhost</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> backup</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">cd</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> FULL</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2020</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">03</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">03_16</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">58</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">/</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">root@localhost</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> FULL</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-2020-03-03</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">_16</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-58] </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">ls</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">config</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">xml</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">credentials</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">xml</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">github</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">plugin</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">configuration</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">xml</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">hudson</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">maven</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">MavenModuleSet</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">xml</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">hudson</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">model</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">UpdateCenter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">xml</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">hudson</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">plugins</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">build_timeout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">operations</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">BuildStepOperation</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">xml</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">hudson</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">plugins</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">emailext</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">ExtendedEmailPublisher</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">xml</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">hudson</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">plugins</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">git</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">GitSCM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">xml</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">hudson</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">plugins</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">git</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">GitTool</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">xml</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">hudson</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">plugins</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">gradle</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">Gradle</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">xml</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">hudson</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">plugins</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">timestamper</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">TimestamperConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">xml</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">hudson</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">scm</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">SubversionSCM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">xml</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">hudson</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">tasks</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">Ant</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">xml</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">hudson</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">tasks</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">Mailer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">xml</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">hudson</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">tasks</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">Maven</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">xml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>7.恢复</strong></p><figure><img src="`+d+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>恢复.png</p><figure><img src="'+g+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>选择备份文件.png</p><blockquote><p>备份文件是以日期+时间节点组成的文件名，我们恢复什么时间段的，点击进行恢复。</p></blockquote><h4 id="二、通过periodic-backup进行恢复" tabindex="-1"><a class="header-anchor" href="#二、通过periodic-backup进行恢复"><span>二、通过Periodic Backup进行恢复</span></a></h4><p>备份除了上面提到的插件还有一个插件是Periodic Backup，安装Periodic Backup和安装thinbackup一样，安装完成后可以在系统管理菜单下面有一个Periodic Backup Manager菜单 <strong>1.打开Periodic Backup Manager，第一次打开是没有任何东西的，需要我们自己去建立一个规则，点击Configure</strong></p><figure><img src="'+o+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>Periodic Backup配置.jpg</p><blockquote><p>配置项跟简单： Temporary Directory: 临时目录 Backup schedule (cron): 进行备份cron的表达式，填写完成后点击Validate cron syntax进行验证 Maximum backups in location: 最大位置备份，保留多少个备份文件 Store no older than (days): 保留的时间 File Management Strategy: 备份策略 ConfigOnly: 只备份配置文件 FullBackup: 进行全量备份，可以通过Excludes list中填入Ant风格表达式，排除不希望备份的文件，多个表达式使用分号分隔 Storage Strategy: 存储策略，就是是否需要进行压缩存储 Backup Location: 备份的位置，都是本地目录</p></blockquote><figure><img src="'+c+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>配置.png</p>',48)]))}const b=s(B,[["render",A],["__file","Jenkins备份.html.vue"]]),C=JSON.parse('{"path":"/note-book/Jenkins/Jenkins%E5%A4%87%E4%BB%BD.html","title":"Jenkins备份","lang":"zh-CN","frontmatter":{"description":"Jenkins备份 1.手动备份 比较简单就像上述迁移步骤那样，把原始机器上的数据打包。打包后有两种选择，第一种是在原始机器上，其他路径下创建一个文件夹，把数据丢进去。例如原始机器上的数据是存储在/home/jenkins，我们打包后可以放到/home/backups，这样做的好处是如果误删了Jenkins，我们可以到backups下找回原始数据；第二...","head":[["meta",{"property":"og:url","content":"https://www.geekery.cn/note-book/Jenkins/Jenkins%E5%A4%87%E4%BB%BD.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"Jenkins备份"}],["meta",{"property":"og:description","content":"Jenkins备份 1.手动备份 比较简单就像上述迁移步骤那样，把原始机器上的数据打包。打包后有两种选择，第一种是在原始机器上，其他路径下创建一个文件夹，把数据丢进去。例如原始机器上的数据是存储在/home/jenkins，我们打包后可以放到/home/backups，这样做的好处是如果误删了Jenkins，我们可以到backups下找回原始数据；第二..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-22T13:30:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-22T13:30:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Jenkins备份\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-22T13:30:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[{"level":3,"title":"一、通过插件ThinBackup进行备份恢复","slug":"一、通过插件thinbackup进行备份恢复","link":"#一、通过插件thinbackup进行备份恢复","children":[]}],"git":{"createdTime":1691939318000,"updatedTime":1727011800000,"contributors":[{"name":"Paper-Dragon","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":3.35,"words":1006},"filePathRelative":"note-book/Jenkins/Jenkins备份.md","localizedDate":"2023年8月13日","excerpt":"\\n<p><strong>1.手动备份</strong></p>\\n<p>比较简单就像上述迁移步骤那样，把原始机器上的数据打包。打包后有两种选择，第一种是在原始机器上，其他路径下创建一个文件夹，把数据丢进去。例如原始机器上的数据是存储在/home/jenkins，我们打包后可以放到/home/backups，这样做的好处是如果误删了Jenkins，我们可以到backups下找回原始数据；第二种是将打包的文件拷贝到另外一台物理机上，这样做的好处是如果原始机器宕机了，我们可以在另外一台机器上找到备份文件，在最短的时间内恢复工作。</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"bash\\" data-title=\\"bash\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{b as comp,C as data};
