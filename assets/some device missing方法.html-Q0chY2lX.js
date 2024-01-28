import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as e,d as a}from"./app-JARkSk3v.js";const i={},d=a(`<h1 id="some-devices-missing" tabindex="-1"><a class="header-anchor" href="#some-devices-missing"><span>*** Some devices missing</span></a></h1><h2 id="问题原因" tabindex="-1"><a class="header-anchor" href="#问题原因"><span>问题原因：</span></a></h2><p>因为创建btrfs时使用了-f，所以硬盘被另一个btrfs抢走了，blkid改变</p><h2 id="问题描述" tabindex="-1"><a class="header-anchor" href="#问题描述"><span>问题描述</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># btrfs fi show</span>
warning, device <span class="token number">2</span> is missing
warning, device <span class="token number">1</span> is missing
WARNING: could not setup csum tree, skipping it
Label: <span class="token string">&#39;mydata&#39;</span>  uuid: b2daf230-bd04-4ca5-ac2f-2b7c4a8f1ac4
        Total devices <span class="token number">3</span> FS bytes used <span class="token number">256</span>.00KiB
        devid    <span class="token number">3</span> size <span class="token number">20</span>.00GiB used <span class="token number">144</span>.00MiB path /dev/nvme0n4
        *** Some devices missing

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="问题解决" tabindex="-1"><a class="header-anchor" href="#问题解决"><span>问题解决</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># blkid</span>
发现uuid被更改


<span class="token comment"># 清理旧的 super block </span>
<span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># wipefs -o 0x10040  /dev/nvme0n4</span>
/dev/nvme0n4: <span class="token number">8</span> bytes were erased at offset 0x00010040 <span class="token punctuation">(</span>btrfs<span class="token punctuation">)</span>: 5f <span class="token number">42</span> <span class="token number">48</span> <span class="token number">52</span> <span class="token number">66</span> <span class="token number">53</span> 5f 4d
<span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># btrfs fi show</span>
Label: <span class="token string">&#39;mydata&#39;</span>  uuid: 92aac6fd-d7c5-4ac3-9ba6-acbe13071611
        Total devices <span class="token number">2</span> FS bytes used <span class="token number">144</span>.00KiB
        devid    <span class="token number">1</span> size <span class="token number">20</span>.00GiB used <span class="token number">272</span>.00MiB path /dev/nvme0n2
        devid    <span class="token number">2</span> size <span class="token number">20</span>.00GiB used <span class="token number">264</span>.00MiB path /dev/nvme0n3



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考连接" tabindex="-1"><a class="header-anchor" href="#参考连接"><span>参考连接</span></a></h2><p>https://btrfs.wiki.kernel.org/index.php/Problem_FAQ#I_can.27t_mount_my_filesystem.2C_and_I_get_a_kernel_oops.21</p><p>https://stackoverflow.com/questions/22390676/how-to-get-rid-of-some-devices-missing-in-btrfs-after-reuse-of-devices</p>`,10),c=[d];function t(l,p){return n(),e("div",null,c)}const m=s(i,[["render",t],["__file","some device missing方法.html.vue"]]);export{m as default};
