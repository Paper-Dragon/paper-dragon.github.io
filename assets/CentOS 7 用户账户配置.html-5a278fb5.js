import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,f as e}from"./app-1fe87991.js";const i={},l=e(`<h1 id="centos-7-用户账户配置" tabindex="-1"><a class="header-anchor" href="#centos-7-用户账户配置" aria-hidden="true">#</a> CentOS 7 用户账户配置</h1><p><strong>说明：</strong></p><p>1、这篇博文记录的是CentOS 7 用户账户的配置，包括添加用户、添加用户组、删除用户、删除用户组等。其中包括分析用户的配置文件、目录以及对安全的思考。</p><p>2、用户配置方面CentOS 7与以往版本感觉没有差别。</p><h2 id="第一部分-认识用户" tabindex="-1"><a class="header-anchor" href="#第一部分-认识用户" aria-hidden="true">#</a> <strong>第一部分 认识用户</strong></h2><p>Centos 7 系统最小化安装，默认配置，是没有创建其他用户的。作为服务器操作系统，为了安全起见，一般是使用一般用户。这就牵涉到用户、用户组的创建以及删除。</p><p>此外，CentOS 7 和其他版本的Linux一样，都具有相应用户的配置文件及目录，如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/etc/passwd 　　      //用户账户信息，可以看出用户名称 
/etc/shadow          //用户账户加密后信息，包括但不限于/etc/passwd中的信息 
/etc/group           //组账户信息，可以看出组名称 
/etc/gshadow   　　　 //组账户安全信息，包括但不限于/etc/group中的信息 
/etc/default/useradd //账户创建时默认值 
/etc/skel/           //创建用户时会拷贝这个模板
/etc/login.defs      //安全性的默认配置，与上面/etc/default/useradd有区别
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们看一下比较重要的配置文件/etc/default/useradd，内容如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># useradd defaults file</span>
<span class="token assign-left variable">GROUP</span><span class="token operator">=</span><span class="token number">100</span>                        //起始GID值
<span class="token assign-left variable"><span class="token environment constant">HOME</span></span><span class="token operator">=</span>/home                       //家目录位置
<span class="token assign-left variable">INACTIVE</span><span class="token operator">=</span>-1　　　　　　　　　　　　 //有效时间，负值为永久，正数代表天数
<span class="token assign-left variable">EXPIRE</span><span class="token operator">=</span>
<span class="token assign-left variable"><span class="token environment constant">SHELL</span></span><span class="token operator">=</span>/bin/bash                   //shell路径
<span class="token assign-left variable">SKEL</span><span class="token operator">=</span>/etc/skel                    //默认配置文件路径
<span class="token assign-left variable">CREATE_MAIL_SPOOL</span><span class="token operator">=</span>yes             //是否创建邮件池，具体作用待以后学习
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们再来看一下/etc/login.defs文件，重点内容如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>MAIL_DIR        /var/spool/mail
<span class="token punctuation">..</span>.

<span class="token comment"># Password aging controls:           密码期限配置</span>
<span class="token comment">#</span>
<span class="token comment">#       PASS_MAX_DAYS   Maximum number of days a password may be used.</span>
<span class="token comment">#       PASS_MIN_DAYS   Minimum number of days allowed between password changes.</span>
<span class="token comment">#       PASS_MIN_LEN    Minimum acceptable password length.</span>
<span class="token comment">#       PASS_WARN_AGE   Number of days warning given before a password expires.</span>
<span class="token comment">#</span>
PASS_MAX_DAYS   <span class="token number">99999</span>
PASS_MIN_DAYS   <span class="token number">0</span>
PASS_MIN_LEN    <span class="token number">8</span>
PASS_WARN_AGE   <span class="token number">7</span>
<span class="token punctuation">..</span>.

<span class="token comment"># Min/max values for automatic uid selection in useradd      最小/最大UID设置</span>
<span class="token comment">#</span>
UID_MIN                  <span class="token number">1000</span>              //我们创建的用户的<span class="token environment constant">UID</span>从1000开始
UID_MAX                 <span class="token number">60000</span>
<span class="token punctuation">..</span><span class="token punctuation">..</span>

<span class="token comment"># Min/max values for automatic gid selection in groupadd</span>
<span class="token comment">#</span>
GID_MIN                  <span class="token number">1000</span>
GID_MAX                 <span class="token number">60000</span>
<span class="token punctuation">..</span><span class="token punctuation">..</span>
CREATE_HOME     <span class="token function">yes</span>                   //是否创建家目录
<span class="token punctuation">..</span>.

<span class="token comment"># Use SHA512 to encrypt password.        //采用SHA512加密</span>
ENCRYPT_METHOD SHA512
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从文件内容可见，/etc/login.defs 是比较宏观的进行偏重安全方面的配置。</p><p>下面是一些实际过程中常用的命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">useradd</span>         //添加用户
<span class="token function">passwd</span>          //为用户设置密码   
<span class="token function">userdel</span>         //删除用户
<span class="token function">usermod</span>         //修改用户信息
<span class="token function">groupadd</span>       //添加用户组
<span class="token function">groupdel</span>        //删除用户组
<span class="token function">groupmod</span>        //修改用户组信息
<span class="token function">groups</span>          //显示当前进程用户所属的用户组
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第二部分-创建用户" tabindex="-1"><a class="header-anchor" href="#第二部分-创建用户" aria-hidden="true">#</a> <strong>第二部分 创建用户</strong></h2><p><strong>例子一： 最简单的创建用户</strong></p><p>执行如下命令：</p><p>useradd test</p><p>passwd test</p><p>实例如图，并且系统会对密码做限制，比如长度、复杂度，但是不影响创建。可以理解为“温馨提示”。</p><p>![img](CentOS 7 用户账户配置.assets/251727545037232.png)</p><p>这样一个用户名为test的用户已经创建好了。我们看一下属性。</p><p>执行命令：id test //查看用户信息</p><p>![img](CentOS 7 用户账户配置.assets/251736546595720.png)</p><p>我们发现test的uid=1000,gid=1000,位于test用户组，说明缺参数的新建用户，会默认新建一个与用户名同名的用户组并加入其中，我们也注意到UID、GID的值与默认的配置文件中保持一致，可见配置文件是生效的，同样也可以再新建一个用户，看一下UID、GID的值,会看到是1001.可以尝试一下。我们可以切到/home目录下，会看到用户目录，与配置文件设定一致。</p><p><strong>例子二：带参数的创建账户</strong></p><p>上个例子我们采用默认配置，只是设置了用户名和密码。这次我们手动设置UID、GID等。首先我们看一下，useradd的参数，如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>　-b, --base-dir BASE_DIR       新账户的主目录的基目录
  -c, <span class="token parameter variable">--comment</span> COMMENT         新账户的 GECOS 字段
  -d, --home-dir HOME_DIR       新账户的主目录
  -D, <span class="token parameter variable">--defaults</span>                显示或更改默认的 <span class="token function">useradd</span> 配置
 -e, <span class="token parameter variable">--expiredate</span> EXPIRE_DATE  新账户的过期日期
  -f, <span class="token parameter variable">--inactive</span> INACTIVE       新账户的密码不活动期
  -g, <span class="token parameter variable">--gid</span> GROUP               新账户主组的名称或 ID
  -G, <span class="token parameter variable">--groups</span> <span class="token environment constant">GROUPS</span>   新账户的附加组列表
  -h, <span class="token parameter variable">--help</span>                    显示此帮助信息并推出
  -k, <span class="token parameter variable">--skel</span> SKEL_DIR   使用此目录作为骨架目录
  -K, <span class="token parameter variable">--key</span> <span class="token assign-left variable">KEY</span><span class="token operator">=</span>VALUE           不使用 /etc/login.defs 中的默认值
  -l, --no-log-init     不要将此用户添加到最近登录和登录失败数据库
  -m, --create-home     创建用户的主目录
  -M, --no-create-home          不创建用户的主目录
  -N, --no-user-group   不创建同名的组
  -o, --non-unique              允许使用重复的 <span class="token environment constant">UID</span> 创建用户
  -p, <span class="token parameter variable">--password</span> PASSWORD               加密后的新账户密码
  -r, <span class="token parameter variable">--system</span>                  创建一个系统账户
  -R, <span class="token parameter variable">--root</span> CHROOT_DIR         <span class="token function">chroot</span> 到的目录
  -s, <span class="token parameter variable">--shell</span> <span class="token environment constant">SHELL</span>             新账户的登录 shell
  -u, <span class="token parameter variable">--uid</span> <span class="token environment constant">UID</span>                 新账户的用户 ID
  -U, --user-group              创建与用户同名的组
  -Z, --selinux-user SEUSER             为 SELinux 用户映射使用指定 SEUSER
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新建一个UID=501，GID=600，30天有效期，家目录为/home/test5的用户test4.</p><p>命令 :</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">groupadd</span> <span class="token parameter variable">-g</span> <span class="token number">600</span>  test3                //创建GID<span class="token operator">=</span><span class="token number">600</span>的用户组test3            
<span class="token function">useradd</span> <span class="token parameter variable">-u</span> <span class="token number">501</span> <span class="token parameter variable">-g</span> <span class="token number">600</span> <span class="token parameter variable">-f</span> <span class="token number">30</span> <span class="token parameter variable">-m</span>   <span class="token parameter variable">-d</span> /home/test5 test4                 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们再次打开用户文件/etc/passwd或者id test4会看到我们自己的配置。</p><p>uid=501(test4) gid=600(test3) 组=600(test3)</p><h2 id="第三部分-更改用户设置" tabindex="-1"><a class="header-anchor" href="#第三部分-更改用户设置" aria-hidden="true">#</a> <strong>第三部分 更改用户设置</strong></h2><p>不同的 用户需要不同的权限，拥有不同的SHELL，是否允许登录。这个部分，就需要用到usermod命令修改用户配置。我们上个例子中创建过一个test账户，默认SHELL是/bin/bash，是可以登录的。</p><p>禁止登录：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">usermod</span> <span class="token parameter variable">-s</span> /sbin/nologin <span class="token builtin class-name">test</span> //-s 指定shell 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改用户名：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">usermod</span> <span class="token parameter variable">-l</span> test88 <span class="token builtin class-name">test</span> //-l 新的用户名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此外还可以家目录、过期天数、更换组、锁定用户、解锁用户等功能，可以查看参数实践。</p><h2 id="第四部分-删除用户-组" tabindex="-1"><a class="header-anchor" href="#第四部分-删除用户-组" aria-hidden="true">#</a> <strong>第四部分 删除用户/组</strong></h2><p>当我们创建用户/组有错误时，可能会删除用户/组，然后再重新创建。我们使用userdel命令来删除用户。</p><p>执行命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost home<span class="token punctuation">]</span><span class="token comment"># userdel test</span>
<span class="token punctuation">[</span>root@localhost home<span class="token punctuation">]</span><span class="token comment"># useradd test</span>
useradd：警告：此主目录已经存在。
不从 skel 目录里向其中复制任何文件。
正在创建信箱文件: 文件已存在
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>出现这个问题是因为我们删除用户时，系统为了安全起见并没有删除相关的文件以及目录。我们查看一下userdel参数：**<br> **</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>用法：userdel <span class="token punctuation">[</span>选项<span class="token punctuation">]</span> 登录

选项：
  -f, <span class="token parameter variable">--force</span>                   force some actions that would fail otherwise
                                e.g. removal of user still logged <span class="token keyword">in</span>
                                or files, even <span class="token keyword">if</span> not owned by the user
  -h, <span class="token parameter variable">--help</span>                    显示此帮助信息并推出
  -r, <span class="token parameter variable">--remove</span>                  删除主目录和邮件池
  -R, <span class="token parameter variable">--root</span> CHROOT_DIR         <span class="token function">chroot</span> 到的目录
  -Z, --selinux-user            为用户删除所有的 SELinux 用户映射
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以使用参数-rf 来删除相关文件目录，这一步具有危险性，是否有回滚操作，不是特别清楚。</p><p>执行命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost home<span class="token punctuation">]</span><span class="token comment"># userdel -rf test</span>
<span class="token punctuation">[</span>root@localhost home<span class="token punctuation">]</span><span class="token comment"># useradd test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，就不会出现提示了。</p><h2 id="第五部分-用户安全配置" tabindex="-1"><a class="header-anchor" href="#第五部分-用户安全配置" aria-hidden="true">#</a> <strong>第五部分 用户安全配置</strong></h2><p>在操作系统安全中，用户权限、文件权限也是非常重要。现在就几个小点记录一下。这次目的主要有禁止root用户连接、一般用户使用sudo命令提权。我们在上个步骤中，创建了一个test用户，当我们输入sudo命令时，会提示如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>test不在 sudoers 文件中。此事将被报告。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解决这个问题，我们只需要在/etc/sudoers 中添加用户test即可，代码如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>//找到如下一行，在下面添加即可
<span class="token punctuation">..</span><span class="token punctuation">..</span>.
root    <span class="token assign-left variable">ALL</span><span class="token operator">=</span><span class="token punctuation">(</span>ALL<span class="token punctuation">)</span>       ALL
<span class="token builtin class-name">test</span>    <span class="token assign-left variable">ALL</span><span class="token operator">=</span><span class="token punctuation">(</span>ALL<span class="token punctuation">)</span>       ALL          //这一行是添加的
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到这里应该就可以解决问题了。</p><p><strong>新增：在虚拟机里面重新安装了一个CentOS 7，实验了一下，确实可以成功。下面是/etc/sudoers 属性：</strong></p><p><strong>![img](CentOS 7 用户账户配置.assets/261700562067729.png)</strong></p><p><strong>可以看到拥有setUID权限，任何用户都有x（执行）权限，故可以执行sudo命令。下面的内容就当作是对setUID权限的理解。</strong></p><p>ps.因为之前按照网上的资料对其他部分进行了设置，但是感觉并不影响，下面贴出修改的部分及其目的</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>//修改文件 /usr/bin/sudo 用户及用户组
<span class="token function">chown</span>  root：root /usr/bin/sudo
//修改权限为4755，其中4代表以文件所有者执行
<span class="token function">chmod</span> <span class="token number">4755</span> /usr/bin/sudo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的命令意思是，将文件/usr/bin/sudo拥有者改为root，当执行时以root身份执行，这也是‘4’的含义。如果设置权限时，勿把“4755” 配置为755，就会出现这个错误。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo：有效用户 ID 不是 0，sudo 属于 root 并设置了 setuid 位吗？
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解决方法呢，就是刚才说的以root（uid=0）身份运行。bash</p><p>在实际环境中，为了防止黑客对root账户进行暴力破解，我们通常禁止root账户SSH远程连接。操作如下：</p><div class="language-ba&#39;sh line-numbers-mode" data-ext="ba&#39;sh"><pre class="language-ba&#39;sh"><code>//修改 /etc/ssh/sshd.config 文件，将
#PermitRootLogin yes
修改为
PermitRootLogin no

//重启sshd服务
systemctl restart sshd.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>备注：CentOS 7 取消了service 用法，尽管部分情况下还可以使用，但是我就先使用systemctl吧。</p>`,68),t=[l];function d(r,p){return n(),a("div",null,t)}const u=s(i,[["render",d],["__file","CentOS 7 用户账户配置.html.vue"]]);export{u as default};
