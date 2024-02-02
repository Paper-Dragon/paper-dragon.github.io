import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as d,o as s,c as l,b as e,e as i,a as r,d as n}from"./app-tkwmMnLA.js";const c="/assets/Git-push-command-n7OdF38G.jpeg",v="/assets/48840BF0-992F-4CCC-A388-15CB74819D88-CpaElcDj.jpg",u="/assets/B0589847-A498-4415-8700-252BDE1B20C0-hwUabWT1.jpg",o="/assets/106AD534-A38A-47F3-88A3-B7BE3F2FEEF1-ylfqDAFS.jpg",m="/assets/EC8F8872-091A-4CAB-90F2-616F34F350A9-6HoUfI6n.jpg",g="/assets/github1-JEEPAGB0.jpg",b="/assets/299CF000-7B6E-4BEC-B8C2-D9AEB053307B-KtNT2DKo.jpg",p="/assets/1BCB4379-1A25-4C77-BB82-92B3E7185435-pamabOrs.jpg",h="/assets/53CA927D-F36F-4A00-AFB2-5EAED05B535E-tLgbUy3M.jpg",x="/assets/main-qimg-00a6b5a8ec82400657444504c4d4d1a7-akaFkJ_H.png",f="/assets/C5A6670F-202D-4F2C-8A63-07CEA37BB67A-8ywMhyhI.jpg",$="/assets/79A84530-7DC0-4D25-9F83-8776433A4C32-oa5dqie7.jpg",E={},_=n(`<h1 id="git-基础命令" tabindex="-1"><a class="header-anchor" href="#git-基础命令"><span>git 基础命令</span></a></h1><h1 id="git-基本操作" tabindex="-1"><a class="header-anchor" href="#git-基本操作"><span>Git 基本操作</span></a></h1><p>Git 的工作就是创建和保存你项目的快照及与之后的快照进行对比。</p><p>本章将对有关创建与提交你的项目快照的命令作介绍。</p><p>Git 常用的是以下 6 个命令：<strong>git clone</strong>、<strong>git push</strong>、<strong>git add</strong> 、<strong>git commit</strong>、<strong>git checkout</strong>、<strong>git pull</strong>，后面我们会详细介绍。</p><p><strong>说明：</strong></p><ul><li>workspace：工作区</li><li>staging area：暂存区/缓存区</li><li>local repository：版本库或本地仓库</li><li>remote repository：远程仓库</li></ul><p>一个简单的操作步骤：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git init    
$ git add .    
$ git commit  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>git init - 初始化仓库。</li><li>git add . - 添加文件到暂存区。</li><li>git commit - 将暂存区内容添加到仓库中。</li></ul><h3 id="创建仓库命令" tabindex="-1"><a class="header-anchor" href="#创建仓库命令"><span>创建仓库命令</span></a></h3><p>下表列出了 git 创建仓库的命令：</p><table><thead><tr><th>命令</th><th>说明</th></tr></thead><tbody><tr><td><code>git init</code></td><td>初始化仓库</td></tr><tr><td><code>git clone </code></td><td>拷贝一份远程仓库，也就是下载一个项目。</td></tr></tbody></table><hr><h2 id="提交与修改" tabindex="-1"><a class="header-anchor" href="#提交与修改"><span>提交与修改</span></a></h2><p>Git 的工作就是创建和保存你的项目的快照及与之后的快照进行对比。</p><p>下表列出了有关创建与提交你的项目的快照的命令：</p><table><thead><tr><th>命令</th><th>说明</th></tr></thead><tbody><tr><td><code>git add</code></td><td>添加文件到仓库</td></tr><tr><td><code>git status </code></td><td>查看仓库当前的状态，显示有变更的文件。</td></tr><tr><td><code>git diff </code></td><td>比较文件的不同，即暂存区和工作区的差异。</td></tr><tr><td><code>git commit </code></td><td>提交暂存区到本地仓库。</td></tr><tr><td><code>git reset </code></td><td>回退版本。</td></tr><tr><td><code>git rm </code></td><td>删除工作区文件。</td></tr><tr><td><code>git mv </code></td><td>移动或重命名工作区文件。</td></tr></tbody></table><h3 id="提交日志" tabindex="-1"><a class="header-anchor" href="#提交日志"><span>提交日志</span></a></h3><table><thead><tr><th>命令</th><th>说明</th></tr></thead><tbody><tr><td><code>git log</code></td><td>查看历史提交记录</td></tr><tr><td><code>git blame &lt;file&gt; </code></td><td>以列表形式查看指定文件的历史修改记录</td></tr></tbody></table><h3 id="远程操作" tabindex="-1"><a class="header-anchor" href="#远程操作"><span>远程操作</span></a></h3><table><thead><tr><th>命令</th><th>说明</th></tr></thead><tbody><tr><td><code>git remote</code></td><td>远程仓库操作</td></tr><tr><td><code>git fetch </code></td><td>从远程获取代码库</td></tr><tr><td><code>git pull </code></td><td>下载远程代码并合并</td></tr><tr><td><code>git push </code></td><td>上传远程代码并合并</td></tr></tbody></table><h1 id="git-分支管理" tabindex="-1"><a class="header-anchor" href="#git-分支管理"><span>Git 分支管理</span></a></h1><p>几乎每一种版本控制系统都以某种形式支持分支。使用分支意味着你可以从开发主线上分离开来，然后在不影响主线的同时继续工作。</p><p>有人把 Git 的分支模型称为<strong>必杀技特性</strong>，而正是因为它，将 <strong>Git</strong> 从版本控制系统家族里区分出来。</p><p>创建分支命令：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git branch (branchname)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>切换分支命令:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git checkout (branchname)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当你切换分支的时候，Git 会用该分支的最后提交的快照替换你的工作目录的内容， 所以多个分支不需要多个目录。</p><p>合并分支命令:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git merge 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你可以多次合并到统一分支， 也可以选择在合并之后直接删除被并入的分支。</p><p>开始前我们先创建一个测试目录：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ mkdir gitdemo
$ cd gitdemo/
$ git init
Initialized empty Git repository...
$ touch README
$ git add README
$ git commit -m &#39;第一次版本提交&#39;
[master (root-commit) 3b58100] 第一次版本提交
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 README
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="git-分支管理-1" tabindex="-1"><a class="header-anchor" href="#git-分支管理-1"><span>Git 分支管理</span></a></h2><h3 id="列出分支" tabindex="-1"><a class="header-anchor" href="#列出分支"><span>列出分支</span></a></h3><p>列出分支基本命令：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git branch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>没有参数时，<strong>git branch</strong> 会列出你在本地的分支。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git branch
* master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>此例的意思就是，我们有一个叫做 <strong>master</strong> 的分支，并且该分支是当前分支。</p><p>当你执行 <strong>git init</strong> 的时候，默认情况下 Git 就会为你创建 <strong>master</strong> 分支。</p><p>如果我们要手动创建一个分支。执行 git branch (branchname) 即可。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git branch testing
$ git branch
* master
  testing
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在我们可以看到，有了一个新分支 <strong>testing</strong>。</p><p>当你以此方式在上次提交更新之后创建了新分支，如果后来又有更新提交， 然后又切换到了 <strong>testing</strong> 分支，Git 将还原你的工作目录到你创建分支时候的样子。</p><p>接下来我们将演示如何切换分支，我们用 git checkout (branch) 切换到我们要修改的分支。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ ls
README
$ echo &#39;runoob.com&#39; &gt; test.txt
$ git add .
$ git commit -m &#39;add test.txt&#39;
[master 3e92c19] add test.txt
 1 file changed, 1 insertion(+)
 create mode 100644 test.txt
$ ls
README        test.txt
$ git checkout testing
Switched to branch &#39;testing&#39;
$ ls
README
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们切换到 <strong>testing</strong> 分支的时候，我们添加的新文件 test.txt 被移除了。切换回 <strong>master</strong> 分支的时候，它们有重新出现了。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git checkout master
Switched to branch &#39;master&#39;
$ ls
README        test.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们也可以使用 git checkout -b (branchname) 命令来创建新分支并立即切换到该分支下，从而在该分支中操作。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git checkout -b newtest
Switched to a new branch &#39;newtest&#39;
$ git rm test.txt 
rm &#39;test.txt&#39;
$ ls
README
$ touch runoob.php
$ git add .
$ git commit -am &#39;removed test.txt、add runoob.php&#39;
[newtest c1501a2] removed test.txt、add runoob.php
 2 files changed, 1 deletion(-)
 create mode 100644 runoob.php
 delete mode 100644 test.txt
$ ls
README        runoob.php
$ git checkout master
Switched to branch &#39;master&#39;
$ ls
README        test.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如你所见，我们创建了一个分支，在该分支上移除了一些文件 test.txt，并添加了 runoob.php 文件，然后切换回我们的主分支，删除的 test.txt 文件又回来了，且新增加的 runoob.php 不存在主分支中。</p><p>使用分支将工作切分开来，从而让我们能够在不同开发环境中做事，并来回切换。</p><h3 id="删除分支" tabindex="-1"><a class="header-anchor" href="#删除分支"><span>删除分支</span></a></h3><p>删除分支命令：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git branch -d (branchname)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如我们要删除 testing 分支：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git branch
* master
  testing
$ git branch -d testing
Deleted branch testing (was 85fc7e7).
$ git branch
* master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分支合并" tabindex="-1"><a class="header-anchor" href="#分支合并"><span>分支合并</span></a></h3><p>一旦某分支有了独立内容，你终究会希望将它合并回到你的主分支。 你可以使用以下命令将任何分支合并到当前分支中去：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git merge
$ git branch
* master
  newtest
$ ls
README        test.txt
$ git merge newtest
Updating 3e92c19..c1501a2
Fast-forward
 runoob.php | 0
 test.txt   | 1 -
 2 files changed, 1 deletion(-)
 create mode 100644 runoob.php
 delete mode 100644 test.txt
$ ls
README        runoob.php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上实例中我们将 newtest 分支合并到主分支去，test.txt 文件被删除。</p><p>合并完后就可以删除分支:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git branch -d newtest
Deleted branch newtest (was c1501a2).
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>删除后， 就只剩下 master 分支了：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git branch
* master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="合并冲突" tabindex="-1"><a class="header-anchor" href="#合并冲突"><span>合并冲突</span></a></h3><p>合并并不仅仅是简单的文件添加、移除的操作，Git 也会合并修改。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git branch
* master
$ cat runoob.php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先，我们创建一个叫做 change_site 的分支，切换过去，我们将 runoob.php 内容改为:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;?php
echo &#39;runoob&#39;;
?&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建 change_site 分支：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git checkout -b change_site
Switched to a new branch &#39;change_site&#39;
$ vim runoob.php
$ head -3 runoob.php
&lt;?php
echo &#39;runoob&#39;;
?&gt;
$ git commit -am &#39;changed the runoob.php&#39;
[change_site 7774248] changed the runoob.php
 1 file changed, 3 insertions(+)
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将修改的内容提交到 change_site 分支中。 现在，假如切换回 master 分支我们可以看内容恢复到我们修改前的(空文件，没有代码)，我们再次修改 runoob.php 文件。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git checkout master
Switched to branch &#39;master&#39;
$ cat runoob.php
$ vim runoob.php    # 修改内容如下
$ cat runoob.php
&lt;?php
echo 1;
?&gt;
$ git diff
diff --git a/runoob.php b/runoob.php
index e69de29..ac60739 100644
--- a/runoob.php
+++ b/runoob.php
@@ -0,0 +1,3 @@
+&lt;?php
+echo 1;
+?&gt;
$ git commit -am &#39;修改代码&#39;
[master c68142b] 修改代码
 1 file changed, 3 insertions(+)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在这些改变已经记录到我的 &quot;master&quot; 分支了。接下来我们将 &quot;change_site&quot; 分支合并过来。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git merge change_site
Auto-merging runoob.php
CONFLICT (content): Merge conflict in runoob.php
Automatic merge failed; fix conflicts and then commit the result.

$ cat runoob.php     # 打开文件，看到冲突内容
&lt;?php
&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
echo 1;
=======
echo &#39;runoob&#39;;
&gt;&gt;&gt;&gt;&gt;&gt;&gt; change_site
?&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们将前一个分支合并到 master 分支，一个合并冲突就出现了，接下来我们需要手动去修改它。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ vim runoob.php 
$ cat runoob.php
&lt;?php
echo 1;
echo &#39;runoob&#39;;
?&gt;
$ git diff
diff --cc runoob.php
index ac60739,b63d7d7..0000000
--- a/runoob.php
+++ b/runoob.php
@@@ -1,3 -1,3 +1,4 @@@
  &lt;?php
 +echo 1;
+ echo &#39;runoob&#39;;
  ?&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 Git 中，我们可以用 git add 要告诉 Git 文件冲突已经解决</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git status -s
UU runoob.php
$ git add runoob.php
$ git status -s
M  runoob.php
$ git commit
[master 88afe0e] Merge branch &#39;change_site&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在我们成功解决了合并中的冲突，并提交了结果。</p><h1 id="git-查看提交历史" tabindex="-1"><a class="header-anchor" href="#git-查看提交历史"><span>Git 查看提交历史</span></a></h1><p>Git 提交历史一般常用两个命令：</p><ul><li><p><strong>git log</strong> - 查看历史提交记录。</p></li><li><p><strong>git blame &lt;file&gt;</strong> - 以列表形式查看指定文件的历史修改记录。</p></li><li><h3 id="git-log" tabindex="-1"><a class="header-anchor" href="#git-log"><span>git log</span></a></h3></li><li><p>在使用 Git 提交了若干更新之后，又或者克隆了某个项目，想回顾下提交历史，我们可以使用 git log 命令查看。</p></li><li><p>针对我们前一章节的操作，使用 git log 命令列出历史提交记录如下：</p></li><li><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git log
commit d5e9fc2c811e0ca2b2d28506ef7dc14171a207d9 (HEAD -&gt; master)
Merge: c68142b 7774248
Author: runoob &lt;test@runoob.com&gt;
Date:   Fri May 3 15:55:58 2019 +0800

    Merge branch &#39;change_site&#39;

commit c68142b562c260c3071754623b08e2657b4c6d5b
Author: runoob &lt;test@runoob.com&gt;
Date:   Fri May 3 15:52:12 2019 +0800

    修改代码

commit 777424832e714cf65d3be79b50a4717aea51ab69 (change_site)
Author: runoob &lt;test@runoob.com&gt;
Date:   Fri May 3 15:49:26 2019 +0800

    changed the runoob.php

commit c1501a244676ff55e7cccac1ecac0e18cbf6cb00
Author: runoob &lt;test@runoob.com&gt;
Date:   Fri May 3 15:35:32 2019 +0800
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>我们可以用 --oneline 选项来查看历史记录的简洁的版本。</p></li><li><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git log --oneline
$ git log --oneline
d5e9fc2 (HEAD -&gt; master) Merge branch &#39;change_site&#39;
c68142b 修改代码
7774248 (change_site) changed the runoob.php
c1501a2 removed test.txt、add runoob.php
3e92c19 add test.txt
3b58100 第一次版本提交
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>这告诉我们的是，此项目的开发历史。</p></li><li><p>我们还可以用 --graph 选项，查看历史中什么时候出现了分支、合并。以下为相同的命令，开启了拓扑图选项：</p></li><li><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>*   d5e9fc2 (HEAD -&gt; master) Merge branch &#39;change_site&#39;
|\\  
| * 7774248 (change_site) changed the runoob.php
* | c68142b 修改代码
|/  
* c1501a2 removed test.txt、add runoob.php
* 3e92c19 add test.txt
* 3b58100 第一次版本提交
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>现在我们可以更清楚明了地看到何时工作分叉、又何时归并。</p></li><li><p>你也可以用 <strong>--reverse</strong> 参数来逆向显示所有日志。</p></li><li><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git log --reverse --oneline
3b58100 第一次版本提交
3e92c19 add test.txt
c1501a2 removed test.txt、add runoob.php
7774248 (change_site) changed the runoob.php
c68142b 修改代码
d5e9fc2 (HEAD -&gt; master) Merge branch &#39;change_site&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>如果只想查找指定用户的提交日志可以使用命令：git log --author , 例如，比方说我们要找 Git 源码中 Linus 提交的部分：</p></li><li><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git log --author=Linus --oneline -5
81b50f3 Move &#39;builtin-*&#39; into a &#39;builtin/&#39; subdirectory
3bb7256 make &quot;index-pack&quot; a built-in
377d027 make &quot;git pack-redundant&quot; a built-in
b532581 make &quot;git unpack-file&quot; a built-in
112dd51 make &quot;mktag&quot; a built-in
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>如果你要指定日期，可以执行几个选项：--since 和 --before，但是你也可以用 --until 和 --after。</p></li><li><p>例如，如果我要看 Git 项目中三周前且在四月十八日之后的所有提交，我可以执行这个（我还用了 --no-merges 选项以隐藏合并提交）：</p></li><li><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git log --oneline --before={3.weeks.ago} --after={2010-04-18} --no-merges
5469e2d Git 1.7.1-rc2
d43427d Documentation/remote-helpers: Fix typos and improve language
272a36b Fixup: Second argument may be any arbitrary string
b6c8d2d Documentation/remote-helpers: Add invocation section
5ce4f4e Documentation/urls: Rewrite to accomodate transport::address
00b84e9 Documentation/remote-helpers: Rewrite description
03aa87e Documentation: Describe other situations where -z affects git diff
77bc694 rebase-interactive: silence warning when no commits rewritten
636db2c t3301: add tests to use --format=&quot;%N&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>更多 git log 命令可查看：http://git-scm.com/docs/git-log</p></li><li><h3 id="git-blame" tabindex="-1"><a class="header-anchor" href="#git-blame"><span>git blame</span></a></h3></li><li><p>如果要查看指定文件的修改记录可以使用 git blame 命令，格式如下：</p></li><li><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git blame &lt;file&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>git blame 命令是以列表形式显示修改记录，如下实例：</p></li><li><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git blame README 
^d2097aa (tianqixin 2020-08-25 14:59:25 +0800 1) # Runoob Git 测试
db9315b0 (runoob    2020-08-25 16:00:23 +0800 2) # 菜鸟教程 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h1 id="git-标签" tabindex="-1"><a class="header-anchor" href="#git-标签"><span>Git 标签</span></a></h1><p>如果你达到一个重要的阶段，并希望永远记住那个特别的提交快照，你可以使用 git tag 给它打上标签。</p><p>比如说，我们想为我们的 runoob 项目发布一个&quot;1.0&quot;版本。 我们可以用 git tag -a v1.0 命令给最新一次提交打上（HEAD）&quot;v1.0&quot;的标签。</p><p>-a 选项意为&quot;创建一个带注解的标签&quot;。 不用 -a 选项也可以执行的，但它不会记录这标签是啥时候打的，谁打的，也不会让你添加个标签的注解。 我推荐一直创建带注解的标签。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git tag -a v1.0 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当你执行 git tag -a 命令时，Git 会打开你的编辑器，让你写一句标签注解，就像你给提交写注解一样。</p><p>现在，注意当我们执行 git log --decorate 时，我们可以看到我们的标签了：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>*   d5e9fc2 (HEAD -&gt; master) Merge branch &#39;change_site&#39;
|\\  
| * 7774248 (change_site) changed the runoob.php
* | c68142b 修改代码
|/  
* c1501a2 removed test.txt、add runoob.php
* 3e92c19 add test.txt
* 3b58100 第一次版本提交
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们忘了给某个提交打标签，又将它发布了，我们可以给它追加标签。</p><p>例如，假设我们发布了提交 85fc7e7(上面实例最后一行)，但是那时候忘了给它打标签。 我们现在也可以：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git tag -a v0.9 85fc7e7
$ git log --oneline --decorate --graph
*   d5e9fc2 (HEAD -&gt; master) Merge branch &#39;change_site&#39;
|\\  
| * 7774248 (change_site) changed the runoob.php
* | c68142b 修改代码
|/  
* c1501a2 removed test.txt、add runoob.php
* 3e92c19 add test.txt
* 3b58100 (tag: v0.9) 第一次版本提交
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们要查看所有标签可以使用以下命令：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git tag
v0.9
v1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>指定标签信息命令：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git tag -a &lt;tagname&gt; -m &quot;runoob.com标签&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>PGP签名标签命令：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git tag -s &lt;tagname&gt; -m &quot;runoob.com标签&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="git-远程仓库-github" tabindex="-1"><a class="header-anchor" href="#git-远程仓库-github"><span>Git 远程仓库(Github)</span></a></h1><p>Git 并不像 SVN 那样有个中心服务器。</p><p>目前我们使用到的 Git 命令都是在本地执行，如果你想通过 Git 分享你的代码或者与其他开发人员合作。 你就需要将数据放到一台其他开发人员能够连接的服务器上。</p>`,108),A={href:"https://www.runoob.com/w3cnote/git-guide.html",target:"_blank",rel:"noopener noreferrer"},q=n('<figure><img src="'+c+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><hr><h2 id="添加远程库" tabindex="-1"><a class="header-anchor" href="#添加远程库"><span>添加远程库</span></a></h2><p>要添加一个新的远程仓库，可以指定一个简单的名字，以便将来引用,命令格式如下：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git remote add [shortname] [url]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>本例以 Github 为例作为远程仓库，如果你没有 Github 可以在官网 https://github.com/注册。</p><p>由于你的本地 Git 仓库和 GitHub 仓库之间的传输是通过SSH加密的，所以我们需要配置验证信息：</p><p>使用以下命令生成 SSH Key：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ ssh-keygen -t rsa -C &quot;youremail@example.com&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>后面的 <strong>your_email@youremail.com</strong> 改为你在 Github 上注册的邮箱，之后会要求确认路径和输入密码，我们这使用默认的一路回车就行。</p><p>成功的话会在 <strong>~/</strong> 下生成 <strong>.ssh</strong> 文件夹，进去，打开 <strong>id_rsa.pub</strong>，复制里面的 <strong>key</strong>。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ ssh-keygen -t rsa -C &quot;429240967@qq.com&quot;
Generating public/private rsa key pair.
Enter file in which to save the key (/Users/tianqixin/.ssh/id_rsa): 
Enter passphrase (empty for no passphrase):    # 直接回车
Enter same passphrase again:                   # 直接回车
Your identification has been saved in /Users/tianqixin/.ssh/id_rsa.
Your public key has been saved in /Users/tianqixin/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:MDKVidPTDXIQoJwoqUmI4LBAsg5XByBlrOEzkxrwARI 429240967@qq.com
The key&#39;s randomart image is:
+---[RSA 3072]----+
|E*+.+=**oo       |
|%Oo+oo=o. .      |
|%**.o.o.         |
|OO.  o o         |
|+o+     S        |
|.                |
|                 |
|                 |
|                 |
+----[SHA256]-----+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>回到 github 上，进入 Account =&gt; Settings（账户配置）。</p><figure><img src="`+v+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>左边选择 <strong>SSH and GPG keys</strong>，然后点击 <strong>New SSH key</strong> 按钮,title 设置标题，可以随便填，粘贴在你电脑上生成的 key。</p><figure><img src="'+u+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><figure><img src="'+o+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>添加成功后界面如下所示</p><figure><img src="'+m+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>为了验证是否成功，输入以下命令：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ ssh -T git@github.com
The authenticity of host &#39;github.com (52.74.223.119)&#39; can&#39;t be established.
RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes                   # 输入 yes
Warning: Permanently added &#39;github.com,52.74.223.119&#39; (RSA) to the list of known hosts.
Hi tianqixin! You&#39;ve successfully authenticated, but GitHub does not provide shell access. # 成功信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下命令说明我们已成功连上 Github。</p><p>之后登录后点击&quot; New repository &quot; 如下图所示：</p><figure><img src="`+g+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>之后在在Repository name 填入 runoob-git-test(远程仓库名) ，其他保持默认设置，点击&quot;Create repository&quot;按钮，就成功地创建了一个新的Git仓库：</p><figure><img src="'+b+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>创建成功后，显示如下信息：</p><figure><img src="'+p+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>以上信息告诉我们可以从这个仓库克隆出新的仓库，也可以把本地仓库的内容推送到GitHub仓库。</p><p>现在，我们根据 GitHub 的提示，在本地的仓库下运行命令：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ mkdir runoob-git-test                     # 创建测试目录
$ cd runoob-git-test/                       # 进入测试目录
$ echo &quot;# 菜鸟教程 Git 测试&quot; &gt;&gt; README.md     # 创建 README.md 文件并写入内容
$ ls                                        # 查看目录下的文件
README
$ git init                                  # 初始化
$ git add README.md                         # 添加文件
$ git commit -m &quot;添加 README.md 文件&quot;        # 提交并备注信息
[master (root-commit) 0205aab] 添加 README.md 文件
 1 file changed, 1 insertion(+)
 create mode 100644 README.md

# 提交到 Github
$ git remote add origin git@github.com:tianqixin/runoob-git-test.git
$ git push -u origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下命令请根据你在Github成功创建新仓库的地方复制，而不是根据我提供的命令，因为我们的Github用户名不一样，仓库名也不一样。</p><p>接下来我们返回 Github 创建的仓库，就可以看到文件已上传到 Github上：</p><figure><img src="`+h+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><hr><h2 id="查看当前的远程库" tabindex="-1"><a class="header-anchor" href="#查看当前的远程库"><span>查看当前的远程库</span></a></h2><p>要查看当前配置有哪些远程仓库，可以用命令：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git remote
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git remote
origin
$ git remote -v
origin    git@github.com:tianqixin/runoob-git-test.git (fetch)
origin    git@github.com:tianqixin/runoob-git-test.git (push)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行时加上 -v 参数，你还可以看到每个别名的实际链接地址。</p><hr><h2 id="提取远程仓库" tabindex="-1"><a class="header-anchor" href="#提取远程仓库"><span>提取远程仓库</span></a></h2><p>Git 有两个命令用来提取远程仓库的更新。</p><p>1、从远程仓库下载新分支与数据：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git fetch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该命令执行完后需要执行 git merge 远程分支到你所在的分支。</p><p>2、从远端仓库提取数据并尝试合并到当前分支：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git merge
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该命令就是在执行 <strong>git fetch</strong> 之后紧接着执行 <strong>git merge</strong> 远程分支到你所在的任意分支。</p><figure><img src="`+x+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>假设你配置好了一个远程仓库，并且你想要提取更新的数据，你可以首先执行 <strong>git fetch [alias]</strong> 告诉 Git 去获取它有你没有的数据，然后你可以执行 <strong>git merge [alias]/[branch]</strong> 以将服务器上的任何更新（假设有人这时候推送到服务器了）合并到你的当前分支。</p><p>接下来我们在 Github 上点击&quot; README.md&quot; 并在线修改它:</p><figure><img src="'+f+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>然后我们在本地更新修改。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git fetch origin
remote: Counting objects: 3, done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (3/3), done.
From github.com:tianqixin/runoob-git-test
   0205aab..febd8ed  master     -&gt; origin/master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上信息&quot;0205aab..febd8ed master -&gt; origin/master&quot; 说明 master 分支已被更新，我们可以使用以下命令将更新同步到本地：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git merge origin/master
Updating 0205aab..febd8ed
Fast-forward
 README.md | 1 +
 1 file changed, 1 insertion(+)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看 README.md 文件内容：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ cat README.md 
# 菜鸟教程 Git 测试
## 第一次修改内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="推送到远程仓库" tabindex="-1"><a class="header-anchor" href="#推送到远程仓库"><span>推送到远程仓库</span></a></h2><p>推送你的新分支与数据到某个远端仓库命令:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git push [alias] [branch]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以上命令将你的 [branch] 分支推送成为 [alias] 远程仓库上的 [branch] 分支，实例如下。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ touch runoob-test.txt      # 添加文件
$ git add runoob-test.txt 
$ git commit -m &quot;添加到远程&quot;
master 69e702d] 添加到远程
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 runoob-test.txt

$ git push origin master    # 推送到 Github
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重新回到我们的 Github 仓库，可以看到文件已经提交上来了：</p><figure><img src="`+$+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><hr><h2 id="删除远程仓库" tabindex="-1"><a class="header-anchor" href="#删除远程仓库"><span>删除远程仓库</span></a></h2><p>删除远程仓库你可以使用命令：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git remote rm [别名]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="实例-1" tabindex="-1"><a class="header-anchor" href="#实例-1"><span>实例</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git remote -v
origin    git@github.com:tianqixin/runoob-git-test.git (fetch)
origin    git@github.com:tianqixin/runoob-git-test.git (push)

# 添加仓库 origin2
$ git remote add origin2 git@github.com:tianqixin/runoob-git-test.git

$ git remote -v
origin    git@github.com:tianqixin/runoob-git-test.git (fetch)
origin    git@github.com:tianqixin/runoob-git-test.git (push)
origin2    git@github.com:tianqixin/runoob-git-test.git (fetch)
origin2    git@github.com:tianqixin/runoob-git-test.git (push)

# 删除仓库 origin2
$ git remote rm origin2
$ git remote -v
origin    git@github.com:tianqixin/runoob-git-test.git (fetch)
origin    git@github.com:tianqixin/runoob-git-test.git (push)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,74);function y(G,D){const t=d("ExternalLinkIcon");return s(),l("div",null,[_,e("p",null,[i("本例使用了 Github 作为远程仓库，你可以先阅读我们的 "),e("a",A,[i("Github 简明教程。"),r(t)])]),q])}const M=a(E,[["render",y],["__file","git基础命令.html.vue"]]);export{M as default};
