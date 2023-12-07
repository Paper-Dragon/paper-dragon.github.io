import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as s,e as a}from"./app-kb1Efvzs.js";const i={},d=a(`<h1 id="ubuntu安装nfs" tabindex="-1"><a class="header-anchor" href="#ubuntu安装nfs" aria-hidden="true">#</a> ubuntu安装nfs</h1><ol><li><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 安装nfs服务端
apt-get install nfs-kernel-server -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><h2 id="修改配置" tabindex="-1"><a class="header-anchor" href="#修改配置" aria-hidden="true">#</a> 修改配置</h2></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vim /etc/exports

# 添加数据
# 路径为挂载路径
/data/nfs/sshw *(async,insecure,no_root_squash,no_subtree_check,rw)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><h2 id="重启nfs" tabindex="-1"><a class="header-anchor" href="#重启nfs" aria-hidden="true">#</a> 重启nfs</h2></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 重启
/etc/init.d/nfs-kernel-server restart
# 校验配置
showmount -e 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li><h2 id="liunx连接nfs" tabindex="-1"><a class="header-anchor" href="#liunx连接nfs" aria-hidden="true">#</a> liunx连接nfs</h2></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 安装连接客户端
apt install nfs-common -y
mount 10.24.1.235:/data/nfs/sshw /home/ubuntu/yyl2/sshw
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li><h2 id="macos连接nfs-有一些额外参数-否则可能会出现异常" tabindex="-1"><a class="header-anchor" href="#macos连接nfs-有一些额外参数-否则可能会出现异常" aria-hidden="true">#</a> MacOS连接nfs(有一些额外参数，否则可能会出现异常)</h2></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo mount -t nfs -o nolock,nfsvers=3,vers=3  10.24.1.235:/data/nfs/sshw /Users/yyl/sshw
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,11),l=[d];function t(r,c){return n(),s("div",null,l)}const v=e(i,[["render",t],["__file","ubuntu安装nfs.html.vue"]]);export{v as default};
