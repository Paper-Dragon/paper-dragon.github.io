import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as e}from"./app-BCjvT8Ib.js";const t={},p=e(`<h1 id="btrfs-使用简介" tabindex="-1"><a class="header-anchor" href="#btrfs-使用简介"><span>BTRFS 使用简介</span></a></h1><p>了解了 btrfs 的特性，想必您一定想亲身体验一下 btrfs 的使用。本章将简要介绍如何使用 btrfs 。</p><h2 id="创建文件系统" tabindex="-1"><a class="header-anchor" href="#创建文件系统"><span>创建文件系统</span></a></h2><p>mkfs.btrfs 命令建立一个 btrfs 格式的文件系统。可以用如下命令在设备 nvme0n2,nvme0n3上建立一个 btrfs 文件系统，并将其挂载到 /mnt 目录下：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># mkfs.btrfs -f -L mydata /dev/nvme0n2 /dev/nvme0n3</span>
btrfs-progs v6.0
See http://btrfs.wiki.kernel.org <span class="token keyword">for</span> <span class="token function">more</span> information.

NOTE: several default settings have changed <span class="token keyword">in</span> version <span class="token number">5.15</span>, please <span class="token function">make</span> sure
      this does not affect your deployments:
      - DUP <span class="token keyword">for</span> metadata <span class="token punctuation">(</span>-m dup<span class="token punctuation">)</span>
      - enabled no-holes <span class="token punctuation">(</span>-O no-holes<span class="token punctuation">)</span>
      - enabled free-space-tree <span class="token punctuation">(</span>-R free-space-tree<span class="token punctuation">)</span>

Label:              mydata
UUID:               92aac6fd-d7c5-4ac3-9ba6-acbe13071611
Node size:          <span class="token number">16384</span>
Sector size:        <span class="token number">4096</span>
Filesystem size:    <span class="token number">40</span>.00GiB
Block group profiles:
  Data:             single            <span class="token number">8</span>.00MiB
  Metadata:         RAID1           <span class="token number">256</span>.00MiB
  System:           RAID1             <span class="token number">8</span>.00MiB
SSD detected:       <span class="token function">yes</span>
Zoned device:       no
Incompat features:  extref, skinny-metadata, no-holes
Runtime features:   free-space-tree
Checksum:           crc32c
Number of devices:  <span class="token number">2</span>
Devices:
   ID        SIZE  <span class="token environment constant">PATH</span>
    <span class="token number">1</span>    <span class="token number">20</span>.00GiB  /dev/nvme0n2
    <span class="token number">2</span>    <span class="token number">20</span>.00GiB  /dev/nvme0n3


<span class="token parameter variable">-f</span> 是 --force的意思
<span class="token parameter variable">-L</span> Labels

<span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># mkfs.btrfs --help</span>
用法：mkfs.btrfs <span class="token punctuation">[</span>选项<span class="token punctuation">]</span> dev <span class="token punctuation">[</span> dev <span class="token punctuation">..</span>. <span class="token punctuation">]</span>
选项：
   分配概况：
         -d<span class="token operator">|</span>--data PROFILE 数据配置文件，raid0, raid1, raid1c3, raid1c4, raid5, raid6, raid10, dup or single
         -m<span class="token operator">|</span>--metadata PROFILE 元数据配置文件，类似于数据配置文件的值
         -M<span class="token operator">|</span>--mixed 将元数据和数据混合在一起
   特征：
         <span class="token parameter variable">--csum</span> 类型
         <span class="token parameter variable">--checksum</span> TYPE 使用的校验和算法，crc32c（默认），xxhash，sha256，blake2
         -n<span class="token operator">|</span>--nodesize SIZE btree节点的大小
         -s<span class="token operator">|</span>--sectorsize SIZE 数据块大小（当前内核可能无法挂载）
         -O<span class="token operator">|</span>--features LIST 逗号分隔的文件系统功能列表（使用“-O list-all”列出功能）
         -R<span class="token operator">|</span>--runtime-features LIST 逗号分隔的运行时特性列表（使用“-R list-all”列出运行时特性）
         -L<span class="token operator">|</span>--label LABEL 设置文件系统标签
         -U<span class="token operator">|</span>--uuid UUID 指定文件系统的UUID（必须是唯一的）
   创建：
         -b<span class="token operator">|</span>--byte-count SIZE 将每个设备的大小设置为 SIZE（文件系统大小是所有设备大小的总和）
         -r<span class="token operator">|</span>--rootdir DIR 从DIR复制文件到镜像根目录
         <span class="token parameter variable">--shrink</span> <span class="token punctuation">(</span>with --rootdir<span class="token punctuation">)</span> 将填充的文件系统缩小到最小尺寸
         -K<span class="token operator">|</span>--nodiscard 不执行整个设备TRIM
         -f<span class="token operator">|</span>--force 强制覆盖现有文件系统
   一般的：
         -q<span class="token operator">|</span>--quiet 除错误外没有消息
         -v<span class="token operator">|</span>--verbose 增加详细级别，默认为1
         -V<span class="token operator">|</span>--version 打印 mkfs.btrfs 版本并退出
         <span class="token parameter variable">--help</span> 打印帮助并退出
   弃用：
         -l<span class="token operator">|</span>--leafsize SIZE 在 <span class="token number">6.0</span> 中移除，使用 <span class="token parameter variable">--nodesize</span>
<span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># mkfs.btrfs -O list-all</span>
可用的文件系统功能：
mixed-bg - 混合数据和元数据块组（compat<span class="token operator">=</span><span class="token number">2.6</span>.37，safe<span class="token operator">=</span><span class="token number">2.6</span>.37）
extref - 将每个文件的硬链接限制增加到 <span class="token number">65536</span>（compat<span class="token operator">=</span><span class="token number">3.7</span>，safe<span class="token operator">=</span><span class="token number">3.12</span>，默认<span class="token operator">=</span><span class="token number">3.12</span>）
raid56 - raid56 扩展格式 <span class="token punctuation">(</span>compat<span class="token operator">=</span><span class="token number">3.9</span><span class="token punctuation">)</span>
skinny-metadata - 减小大小的元数据范围 refs（compat<span class="token operator">=</span><span class="token number">3.10</span>，safe<span class="token operator">=</span><span class="token number">3.18</span>，default<span class="token operator">=</span><span class="token number">3.18</span>）
no-holes - 文件没有明确的洞范围（compat<span class="token operator">=</span><span class="token number">3.14</span>，safe<span class="token operator">=</span><span class="token number">4.0</span>，默认<span class="token operator">=</span><span class="token number">5.15</span>）
raid1c34 - 具有 <span class="token number">3</span> 或 <span class="token number">4</span> 个副本的 RAID1 <span class="token punctuation">(</span>compat<span class="token operator">=</span><span class="token number">5.5</span><span class="token punctuation">)</span>
zoned - 支持分区设备 <span class="token punctuation">(</span>compat<span class="token operator">=</span><span class="token number">5.12</span><span class="token punctuation">)</span>

<span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># btrfs fi show</span>
Label: <span class="token string">&#39;mydata&#39;</span>  uuid: 92aac6fd-d7c5-4ac3-9ba6-acbe13071611
        Total devices <span class="token number">2</span> FS bytes used <span class="token number">144</span>.00KiB
        devid    <span class="token number">1</span> size <span class="token number">20</span>.00GiB used <span class="token number">272</span>.00MiB path /dev/nvme0n2
        devid    <span class="token number">2</span> size <span class="token number">20</span>.00GiB used <span class="token number">264</span>.00MiB path /dev/nvme0n3

<span class="token function">mount</span> <span class="token parameter variable">-t</span> btrfs /dev/nvme0n2 /mnt

<span class="token comment">#支持多种透明压缩机制</span>
  - zlib
  - lzo
  - zstd
<span class="token function">mount</span> <span class="token parameter variable">-t</span> btrfs <span class="token parameter variable">-o</span> <span class="token assign-left variable">compress</span><span class="token operator">=</span><span class="token operator">&lt;</span>type<span class="token punctuation">[</span>:level<span class="token punctuation">]</span><span class="token operator">&gt;</span>, compress-force, compress-force<span class="token operator">=</span><span class="token operator">&lt;</span>type<span class="token punctuation">[</span>:level<span class="token punctuation">]</span><span class="token operator">&gt;</span>

<span class="token comment">#If compression is enabled, nodatacow and nodatasum are disabled.</span>

<span class="token comment"># SSD支持</span>
用户可以使用 <span class="token function">mount</span> 参数打开 btrfs 针对 SSD 的优化。命令如下：
<span class="token function">mount</span> – t btrfs – o SSD /dev/sda5 /btrfsdisk

<span class="token comment">#同步文件系统</span>
为了提高效率，btrfs 的 IO 操作由一些内核线程异步处理。这使得用户对文件的操作并不会立即反应到磁盘上。您可以做一个实验，在 btrfs 上创建一个文件后，稍等 <span class="token number">5</span> 到 <span class="token number">10</span> 秒将系统电源切断，再次重启后，新建的文件并没有出现。
对于多数应用这并不是问题，但有些时候用户希望 IO 操作立即执行，此时就需要对文件系统进行同步。下面的 btrfs 命令用来同步文件系统：
btrfsctl –c /btrfsdisk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样一个 Btrfs 就在设备 nvme0n2,nvme0n3上建立好了。值得一提的是在这种缺省情况下，即使只有一个设备，Btrfs 也会对 metadata 进行冗余保护。如果有多个设备，那么您可以在创建文件系统的时候进行 RAID 设置。详细信息请参见后续的介绍。</p><p>这里介绍其他几个 mkfs.btrfs 的参数。</p><ul><li><p>Nodesize 和 leafsize 用来设定 btrfs 内部 BTree 节点的大小，缺省为一个 page 大小。但用户也可以使用更大的节点，以便增加 fanout，减小树的高度，当然这只适合非常大的文件系统。</p></li><li><p>Alloc-start 参数用来指定文件系统在磁盘设备上的起始地址。这使得用户可以方便的预留磁盘前面的一些特殊空间。</p></li><li><p>Byte-count 参数设定文件系统的大小，用户可以只使用设备的一部分空间，当空间不足时再增加文件系统大小。</p></li></ul><h2 id="修改文件系统的大小" tabindex="-1"><a class="header-anchor" href="#修改文件系统的大小"><span>修改文件系统的大小</span></a></h2><p>当文件系统建立好之后，您可以修改文件系统的大小。 /dev/nvme0n2挂载到了 /mnt下，大小为 40G。假如您希望只使用其中的 37G，则需要减小当前文件系统的大小，这可以通过如下命令实现：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># df -h</span>
Filesystem                               Size  Used Avail Use% Mounted on
devtmpfs                                 <span class="token number">4</span>.0M     <span class="token number">0</span>  <span class="token number">4</span>.0M   <span class="token number">0</span>% /dev
tmpfs                                    <span class="token number">1</span>.9G     <span class="token number">0</span>  <span class="token number">1</span>.9G   <span class="token number">0</span>% /dev/shm
tmpfs                                    777M  <span class="token number">1</span>.7M  775M   <span class="token number">1</span>% /run
/dev/mapper/fedora_localhost--live-root   48G  <span class="token number">4</span>.9G   41G  <span class="token number">11</span>% /
tmpfs                                    <span class="token number">1</span>.9G   16K  <span class="token number">1</span>.9G   <span class="token number">1</span>% /tmp
/dev/nvme0n1p2                           974M  243M  664M  <span class="token number">27</span>% /boot
tmpfs                                    389M   88K  389M   <span class="token number">1</span>% /run/user/0
/dev/nvme0n2                              40G  <span class="token number">3</span>.8M   40G   <span class="token number">1</span>% /mnt

<span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># btrfs filesystem show</span>
Label: <span class="token string">&#39;mydata&#39;</span>  uuid: 92aac6fd-d7c5-4ac3-9ba6-acbe13071611
        Total devices <span class="token number">2</span> FS bytes used <span class="token number">144</span>.00KiB
        devid    <span class="token number">1</span> size <span class="token number">20</span>.00GiB used <span class="token number">272</span>.00MiB path /dev/nvme0n2
        devid    <span class="token number">2</span> size <span class="token number">20</span>.00GiB used <span class="token number">264</span>.00MiB path /dev/nvme0n3

<span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># btrfs filesystem resize -3G /mnt/</span>
Resize device <span class="token function">id</span> <span class="token number">1</span> <span class="token punctuation">(</span>/dev/nvme0n2<span class="token punctuation">)</span> from <span class="token number">20</span>.00GiB to <span class="token number">17</span>.00GiB
<span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># df -h</span>
Filesystem                               Size  Used Avail Use% Mounted on
devtmpfs                                 <span class="token number">4</span>.0M     <span class="token number">0</span>  <span class="token number">4</span>.0M   <span class="token number">0</span>% /dev
tmpfs                                    <span class="token number">1</span>.9G     <span class="token number">0</span>  <span class="token number">1</span>.9G   <span class="token number">0</span>% /dev/shm
tmpfs                                    777M  <span class="token number">1</span>.7M  775M   <span class="token number">1</span>% /run
/dev/mapper/fedora_localhost--live-root   48G  <span class="token number">4</span>.9G   41G  <span class="token number">11</span>% /
tmpfs                                    <span class="token number">1</span>.9G   16K  <span class="token number">1</span>.9G   <span class="token number">1</span>% /tmp
/dev/nvme0n1p2                           974M  243M  664M  <span class="token number">27</span>% /boot
tmpfs                                    389M   88K  389M   <span class="token number">1</span>% /run/user/0
/dev/nvme0n2                              37G  <span class="token number">3</span>.8M   37G   <span class="token number">1</span>% /mnt
<span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment">#</span>


btrfs filesystem resize <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>devid<span class="token operator">&gt;</span>:<span class="token punctuation">]</span><span class="token punctuation">[</span>+/-<span class="token punctuation">]</span><span class="token operator">&lt;</span>size<span class="token operator">&gt;</span><span class="token punctuation">[</span>kKmMgGtTpPeE<span class="token punctuation">]</span><span class="token operator">|</span><span class="token punctuation">[</span><span class="token operator">&lt;</span>devid<span class="token operator">&gt;</span>:<span class="token punctuation">]</span>max <span class="token operator">&lt;</span>path<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同样的，您可以使用 btrfsctl 命令增加文件系统的大小。</p><h2 id="添加设备-热" tabindex="-1"><a class="header-anchor" href="#添加设备-热"><span>添加设备（热）</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># lsblk</span>
NAME                            MAJ:MIN RM  SIZE RO TYPE MOUNTPOINTS
sr0                              <span class="token number">11</span>:0    <span class="token number">1</span>  <span class="token number">1</span>.6G  <span class="token number">0</span> rom
zram0                           <span class="token number">252</span>:0    <span class="token number">0</span>  <span class="token number">3</span>.8G  <span class="token number">0</span> disk <span class="token punctuation">[</span>SWAP<span class="token punctuation">]</span>
nvme0n1                         <span class="token number">259</span>:0    <span class="token number">0</span>   50G  <span class="token number">0</span> disk
├─nvme0n1p1                     <span class="token number">259</span>:1    <span class="token number">0</span>    1M  <span class="token number">0</span> part
├─nvme0n1p2                     <span class="token number">259</span>:2    <span class="token number">0</span>    1G  <span class="token number">0</span> part /boot
└─nvme0n1p3                     <span class="token number">259</span>:3    <span class="token number">0</span>   49G  <span class="token number">0</span> part
  └─fedora_localhost--live-root <span class="token number">253</span>:0    <span class="token number">0</span>   49G  <span class="token number">0</span> lvm  /
nvme0n2                         <span class="token number">259</span>:4    <span class="token number">0</span>   20G  <span class="token number">0</span> disk /mnt
nvme0n3                         <span class="token number">259</span>:5    <span class="token number">0</span>   20G  <span class="token number">0</span> disk
nvme0n4                         <span class="token number">259</span>:6    <span class="token number">0</span>   20G  <span class="token number">0</span> disk
nvme0n5                         <span class="token number">259</span>:7    <span class="token number">0</span>   20G  <span class="token number">0</span> disk
nvme0n6                         <span class="token number">259</span>:8    <span class="token number">0</span>   20G  <span class="token number">0</span> disk
<span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># btrfs fi show</span>
Label: <span class="token string">&#39;mydata&#39;</span>  uuid: 92aac6fd-d7c5-4ac3-9ba6-acbe13071611
        Total devices <span class="token number">2</span> FS bytes used <span class="token number">144</span>.00KiB
        devid    <span class="token number">1</span> size <span class="token number">17</span>.00GiB used <span class="token number">272</span>.00MiB path /dev/nvme0n2
        devid    <span class="token number">2</span> size <span class="token number">20</span>.00GiB used <span class="token number">264</span>.00MiB path /dev/nvme0n3

<span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># btrfs device add /dev/nvme0n4 /mnt/</span>
<span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># btrfs fi show</span>
Label: <span class="token string">&#39;mydata&#39;</span>  uuid: 92aac6fd-d7c5-4ac3-9ba6-acbe13071611
        Total devices <span class="token number">3</span> FS bytes used <span class="token number">144</span>.00KiB
        devid    <span class="token number">1</span> size <span class="token number">17</span>.00GiB used <span class="token number">272</span>.00MiB path /dev/nvme0n2
        devid    <span class="token number">2</span> size <span class="token number">20</span>.00GiB used <span class="token number">264</span>.00MiB path /dev/nvme0n3
        devid    <span class="token number">3</span> size <span class="token number">20</span>.00GiB used <span class="token number">0</span>.00B path /dev/nvme0n4

<span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># df -h</span>
Filesystem                               Size  Used Avail Use% Mounted on
devtmpfs                                 <span class="token number">4</span>.0M     <span class="token number">0</span>  <span class="token number">4</span>.0M   <span class="token number">0</span>% /dev
tmpfs                                    <span class="token number">1</span>.9G     <span class="token number">0</span>  <span class="token number">1</span>.9G   <span class="token number">0</span>% /dev/shm
tmpfs                                    777M  <span class="token number">1</span>.7M  775M   <span class="token number">1</span>% /run
/dev/mapper/fedora_localhost--live-root   48G  <span class="token number">4</span>.9G   41G  <span class="token number">11</span>% /
tmpfs                                    <span class="token number">1</span>.9G   16K  <span class="token number">1</span>.9G   <span class="token number">1</span>% /tmp
/dev/nvme0n1p2                           974M  243M  664M  <span class="token number">27</span>% /boot
tmpfs                                    389M   88K  389M   <span class="token number">1</span>% /run/user/0
/dev/nvme0n2                              57G  <span class="token number">3</span>.8M   57G   <span class="token number">1</span>% /mnt



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="均衡数据-热" tabindex="-1"><a class="header-anchor" href="#均衡数据-热"><span>均衡数据（热）</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>添加新磁盘后数据不均匀

<span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># btrfs filesystem show /mnt/</span>
Label: <span class="token string">&#39;mydata&#39;</span>  uuid: 92aac6fd-d7c5-4ac3-9ba6-acbe13071611
        Total devices <span class="token number">3</span> FS bytes used <span class="token number">144</span>.00KiB
        devid    <span class="token number">1</span> size <span class="token number">17</span>.00GiB used <span class="token number">272</span>.00MiB path /dev/nvme0n2
        devid    <span class="token number">2</span> size <span class="token number">20</span>.00GiB used <span class="token number">264</span>.00MiB path /dev/nvme0n3
        devid    <span class="token number">3</span> size <span class="token number">20</span>.00GiB used <span class="token number">0</span>.00B path /dev/nvme0n4

<span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># btrfs balance start /mnt/</span>
WARNING:

        Full balance without filters requested. This operation is ve                                                                           ry
        intense and takes potentially very long. It is recommended t                                                                           o
        use the balance filters to narrow down the scope of balance.
        Use <span class="token string">&#39;btrfs balance start --full-balance&#39;</span> option to skip this
        warning. The operation will start <span class="token keyword">in</span> <span class="token number">10</span> seconds.
        Use Ctrl-C to stop it.
<span class="token number">10</span> <span class="token number">9</span> <span class="token number">8</span> <span class="token number">7</span> <span class="token number">6</span> <span class="token number">5</span> <span class="token number">4</span> <span class="token number">3</span> <span class="token number">2</span> <span class="token number">1</span>
Starting balance without any filters.
Done, had to relocate <span class="token number">3</span> out of <span class="token number">3</span> chunks
<span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># btrfs filesystem show /mnt/</span>
Label: <span class="token string">&#39;mydata&#39;</span>  uuid: 92aac6fd-d7c5-4ac3-9ba6-acbe13071611
        Total devices <span class="token number">3</span> FS bytes used <span class="token number">144</span>.00KiB
        devid    <span class="token number">1</span> size <span class="token number">17</span>.00GiB used <span class="token number">0</span>.00B path /dev/nvme0n2
        devid    <span class="token number">2</span> size <span class="token number">20</span>.00GiB used <span class="token number">288</span>.00MiB path /dev/nvme0n3
        devid    <span class="token number">3</span> size <span class="token number">20</span>.00GiB used <span class="token number">1</span>.28GiB path /dev/nvme0n4




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="移除设备-热" tabindex="-1"><a class="header-anchor" href="#移除设备-热"><span>移除设备(热)</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># btrfs filesystem show /mnt/</span>
Label: <span class="token string">&#39;mydata&#39;</span>  uuid: 92aac6fd-d7c5-4ac3-9ba6-acbe13071611
        Total devices <span class="token number">3</span> FS bytes used <span class="token number">144</span>.00KiB
        devid    <span class="token number">1</span> size <span class="token number">17</span>.00GiB used <span class="token number">0</span>.00B path /dev/nvme0n2
        devid    <span class="token number">2</span> size <span class="token number">20</span>.00GiB used <span class="token number">288</span>.00MiB path /dev/nvme0n3
        devid    <span class="token number">3</span> size <span class="token number">20</span>.00GiB used <span class="token number">1</span>.28GiB path /dev/nvme0n4

<span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># btrfs device delete /dev/nvme0n4 /mnt/</span>
<span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># btrfs filesystem show /mnt/</span>
Label: <span class="token string">&#39;mydata&#39;</span>  uuid: 92aac6fd-d7c5-4ac3-9ba6-acbe13071611
        Total devices <span class="token number">2</span> FS bytes used <span class="token number">144</span>.00KiB
        devid    <span class="token number">1</span> size <span class="token number">17</span>.00GiB used <span class="token number">288</span>.00MiB path /dev/nvme0n2
        devid    <span class="token number">2</span> size <span class="token number">20</span>.00GiB used <span class="token number">1</span>.28GiB path /dev/nvme0n3

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看设备状态" tabindex="-1"><a class="header-anchor" href="#查看设备状态"><span>查看设备状态</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># btrfs device stats /mnt/</span>
<span class="token punctuation">[</span>/dev/nvme0n2<span class="token punctuation">]</span>.write_io_errs    <span class="token number">0</span>
<span class="token punctuation">[</span>/dev/nvme0n2<span class="token punctuation">]</span>.read_io_errs     <span class="token number">0</span>
<span class="token punctuation">[</span>/dev/nvme0n2<span class="token punctuation">]</span>.flush_io_errs    <span class="token number">0</span>
<span class="token punctuation">[</span>/dev/nvme0n2<span class="token punctuation">]</span>.corruption_errs  <span class="token number">0</span>
<span class="token punctuation">[</span>/dev/nvme0n2<span class="token punctuation">]</span>.generation_errs  <span class="token number">0</span>
<span class="token punctuation">[</span>/dev/nvme0n3<span class="token punctuation">]</span>.write_io_errs    <span class="token number">0</span>
<span class="token punctuation">[</span>/dev/nvme0n3<span class="token punctuation">]</span>.read_io_errs     <span class="token number">0</span>
<span class="token punctuation">[</span>/dev/nvme0n3<span class="token punctuation">]</span>.flush_io_errs    <span class="token number">0</span>
<span class="token punctuation">[</span>/dev/nvme0n3<span class="token punctuation">]</span>.corruption_errs  <span class="token number">0</span>
<span class="token punctuation">[</span>/dev/nvme0n3<span class="token punctuation">]</span>.generation_errs  <span class="token number">0</span>
<span class="token punctuation">[</span>/dev/nvme0n4<span class="token punctuation">]</span>.write_io_errs    <span class="token number">0</span>
<span class="token punctuation">[</span>/dev/nvme0n4<span class="token punctuation">]</span>.read_io_errs     <span class="token number">0</span>
<span class="token punctuation">[</span>/dev/nvme0n4<span class="token punctuation">]</span>.flush_io_errs    <span class="token number">0</span>
<span class="token punctuation">[</span>/dev/nvme0n4<span class="token punctuation">]</span>.corruption_errs  <span class="token number">0</span>
<span class="token punctuation">[</span>/dev/nvme0n4<span class="token punctuation">]</span>.generation_errs  <span class="token number">0</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改硬件组合模式" tabindex="-1"><a class="header-anchor" href="#修改硬件组合模式"><span>修改硬件组合模式</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># btrfs filesystem df /mnt | column -t</span>
Data,           single:  <span class="token assign-left variable">total</span><span class="token operator">=</span><span class="token number">1</span>.00GiB,    <span class="token assign-left variable">used</span><span class="token operator">=</span><span class="token number">0</span>.00B  
System,         RAID1:   <span class="token assign-left variable">total</span><span class="token operator">=</span><span class="token number">32</span>.00MiB,   <span class="token assign-left variable">used</span><span class="token operator">=</span><span class="token number">16</span>.00KiB
Metadata,       RAID1:   <span class="token assign-left variable">total</span><span class="token operator">=</span><span class="token number">256</span>.00MiB,  <span class="token assign-left variable">used</span><span class="token operator">=</span><span class="token number">128</span>.00KiB<span class="token comment"># RAID1</span>
GlobalReserve,  single:  <span class="token assign-left variable">total</span><span class="token operator">=</span><span class="token number">3</span>.50MiB,    <span class="token assign-left variable">used</span><span class="token operator">=</span><span class="token number">0</span>.00B
<span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># btrfs balance start -mconvert=raid5 /mnt/</span>
WARNING:

        RAID5/6 support has known problems and is strongly discourag                                                                           ed
        to be used besides testing or evaluation. It is recommended                                                                            that
        you use one of the other RAID profiles.
        The operation will <span class="token builtin class-name">continue</span> <span class="token keyword">in</span> <span class="token number">10</span> seconds.
        Use Ctrl-C to stop.
<span class="token number">10</span> <span class="token number">9</span> <span class="token number">8</span> <span class="token number">7</span> <span class="token number">6</span> <span class="token number">5</span> <span class="token number">4</span> <span class="token number">3</span> <span class="token number">2</span> <span class="token number">1</span>
Starting conversion to RAID5/6.
Done, had to relocate <span class="token number">2</span> out of <span class="token number">3</span> chunks
<span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># btrfs filesystem df /mnt | column -t</span>
Data,           single:  <span class="token assign-left variable">total</span><span class="token operator">=</span><span class="token number">1</span>.00GiB,    <span class="token assign-left variable">used</span><span class="token operator">=</span><span class="token number">0</span>.00B
System,         RAID5:   <span class="token assign-left variable">total</span><span class="token operator">=</span><span class="token number">32</span>.00MiB,   <span class="token assign-left variable">used</span><span class="token operator">=</span><span class="token number">16</span>.00KiB
Metadata,       RAID5:   <span class="token assign-left variable">total</span><span class="token operator">=</span><span class="token number">512</span>.00MiB,  <span class="token assign-left variable">used</span><span class="token operator">=</span><span class="token number">128</span>.00KiB
GlobalReserve,  single:  <span class="token assign-left variable">total</span><span class="token operator">=</span><span class="token number">3</span>.50MiB,    <span class="token assign-left variable">used</span><span class="token operator">=</span><span class="token number">0</span>.00B




改 Data 是 <span class="token parameter variable">-dconvert</span>
改 Metadata 是 <span class="token parameter variable">-mconvert</span>

							-d<span class="token punctuation">[</span><span class="token operator">&lt;</span>filters<span class="token operator">&gt;</span><span class="token punctuation">]</span>
                     act on data block groups, see FILTERS section <span class="token keyword">for</span> details about filters

              -m<span class="token punctuation">[</span><span class="token operator">&lt;</span>filters<span class="token operator">&gt;</span><span class="token punctuation">]</span>
                     act on metadata chunks, see FILTERS section <span class="token keyword">for</span> details about filters

              -s<span class="token punctuation">[</span><span class="token operator">&lt;</span>filters<span class="token operator">&gt;</span><span class="token punctuation">]</span>
                     act on system chunks <span class="token punctuation">(</span>requires -f<span class="token punctuation">)</span>, see FILTERS section <span class="token keyword">for</span> details about filters.


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建-subvolume和查询" tabindex="-1"><a class="header-anchor" href="#创建-subvolume和查询"><span>创建 subvolume和查询</span></a></h2><p>使用 btrfs 命令，用户可以方便的建立 subvolume 。假设 /btrfsdisk 已经挂载到了 btrfs 文件系统，则用户可以在这个文件系统内创建新的 subvolume 。比如建立一个 /sub1 的 subvolume，并将 sub1 挂载到 /mnt/test 下：</p><p>Subvolme 可以方便管理员在文件系统上创建不同用途的子文件系统，并对其进行一些特殊的配置，比如有些目录下的文件关注节约磁盘空间，因此需要打开压缩，或者配置不同的 RAID 策略等。目前 btrfs 尚处于开发阶段，创建的 subvolme 和 snapshot 还无法删除。此外针对 subvolume 的磁盘 quota 功能也未能实现。但随着 btrfs 的不断成熟，这些功能必然将会进一步完善。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[root@fedora ~]# btrfs subvolume create /mnt/logs
Create subvolume &#39;/mnt/logs&#39;
[root@fedora ~]# btrfs subvolume list /mnt
ID 256 gen 75 top level 5 path logs
[root@fedora ~]# btrfs subvolume create /mnt/cache
Create subvolume &#39;/mnt/cache&#39;
[root@fedora ~]# btrfs subvolume list /mnt
ID 256 gen 75 top level 5 path logs
ID 257 gen 76 top level 5 path cache




#mkdir /mnt/test 
 #btrfsctl – S sub1 /btrfsdisk 
 #mount – t btrfs – o subvol=sub1 /dev/sda5 /mnt/test

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="单独挂载子卷" tabindex="-1"><a class="header-anchor" href="#单独挂载子卷"><span>单独挂载子卷</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># mkdir -p /data/{logs,cache}</span>
<span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># mount -o subvol=logs /dev/nvme0n2 /data/logs</span>
<span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># df -h</span>
Filesystem                               Size  Used Avail Use% Mounted on
devtmpfs                                 <span class="token number">4</span>.0M     <span class="token number">0</span>  <span class="token number">4</span>.0M   <span class="token number">0</span>% /dev
tmpfs                                    <span class="token number">1</span>.9G     <span class="token number">0</span>  <span class="token number">1</span>.9G   <span class="token number">0</span>% /dev/shm
tmpfs                                    777M  <span class="token number">1</span>.7M  775M   <span class="token number">1</span>% /run
/dev/mapper/fedora_localhost--live-root   48G  <span class="token number">4</span>.9G   41G  <span class="token number">11</span>% /
tmpfs                                    <span class="token number">1</span>.9G   16K  <span class="token number">1</span>.9G   <span class="token number">1</span>% /tmp
/dev/nvme0n1p2                           974M  243M  664M  <span class="token number">27</span>% /boot
tmpfs                                    389M   88K  389M   <span class="token number">1</span>% /run/user/0
/dev/nvme0n2                              57G  <span class="token number">3</span>.7M   57G   <span class="token number">1</span>% /mnt
/dev/nvme0n2                              57G  <span class="token number">3</span>.7M   57G   <span class="token number">1</span>% /data/logs
<span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># cp /var/log/messages /data/logs/</span>
<span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># ls /mnt/logs/</span>
messages
<span class="token comment"># 查看</span>
<span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># btrfs subvolume show /mnt/logs</span>
logs
        Name:                   logs
        UUID:                   2b85bcf8-9302-0f47-86c1-cc95d34f371b
        Parent UUID:            -
        Received UUID:          -
        Creation time:          <span class="token number">2023</span>-01-13 <span class="token number">17</span>:22:38 +0800
        Subvolume ID:           <span class="token number">256</span>
        Generation:             <span class="token number">77</span>
        Gen at creation:        <span class="token number">75</span>
        Parent ID:              <span class="token number">5</span>
        Top level ID:           <span class="token number">5</span>
        Flags:                  -
        Send transid:           <span class="token number">0</span>
        Send time:              <span class="token number">2023</span>-01-13 <span class="token number">17</span>:22:38 +0800
        Receive transid:        <span class="token number">0</span>
        Receive time:           -
        Snapshot<span class="token punctuation">(</span>s<span class="token punctuation">)</span>:
<span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># btrfs subvolume show /data/logs</span>
logs
        Name:                   logs
        UUID:                   2b85bcf8-9302-0f47-86c1-cc95d34f371b
        Parent UUID:            -
        Received UUID:          -
        Creation time:          <span class="token number">2023</span>-01-13 <span class="token number">17</span>:22:38 +0800
        Subvolume ID:           <span class="token number">256</span>
        Generation:             <span class="token number">77</span>
        Gen at creation:        <span class="token number">75</span>
        Parent ID:              <span class="token number">5</span>
        Top level ID:           <span class="token number">5</span>
        Flags:                  -
        Send transid:           <span class="token number">0</span>
        Send time:              <span class="token number">2023</span>-01-13 <span class="token number">17</span>:22:38 +0800
        Receive transid:        <span class="token number">0</span>
        Receive time:           -
        Snapshot<span class="token punctuation">(</span>s<span class="token punctuation">)</span>:
<span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment">#</span>


<span class="token comment"># 如果子卷重名 使用子卷id进行挂载</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除子卷" tabindex="-1"><a class="header-anchor" href="#删除子卷"><span>删除子卷</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># btrfs subvolume delete /mnt/logs</span>
Delete subvolume <span class="token punctuation">(</span>no-commit<span class="token punctuation">)</span>: <span class="token string">&#39;/mnt/logs&#39;</span>
<span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment">#</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建-snapshot" tabindex="-1"><a class="header-anchor" href="#创建-snapshot"><span>创建 Snapshot</span></a></h2><p>下面的例子中，创建快照 snap1 时系统存在 2 个文件。创建快照之后，对 test1 的内容进行修改。再回到 snap1，打开 test1 文件，可以看到 test1 的内容依旧是之前的内容。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[root@fedora ~]# btrfs subvolume snapshot /mnt/cache/ /mnt/cache_snapshot
Create a snapshot of &#39;/mnt/cache/&#39; in &#39;/mnt/cache_snapshot&#39;
[root@fedora ~]#




#ls /btrfsdisk 
 test1 test2 
 #vi test1 
 This is a test 
 #btrfsctl – s snap1 /btrfsdisk 
 #vi test1 
 Test1 is modified 
 #cd /btrfsdisk/snap1 
 #cat test1 
 This is a test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以从上面的例子看到，快照 snap1 保存的内容不会被后续的写操作所改变。</p><h2 id="btrfs-ext4文件系统相互转化" tabindex="-1"><a class="header-anchor" href="#btrfs-ext4文件系统相互转化"><span>btrfs，ext4文件系统相互转化</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># lsblk</span>
NAME                            MAJ:MIN RM  SIZE RO TYPE MOUNTPOINTS
sr0                              <span class="token number">11</span>:0    <span class="token number">1</span>  <span class="token number">1</span>.6G  <span class="token number">0</span> rom
zram0                           <span class="token number">252</span>:0    <span class="token number">0</span>  <span class="token number">3</span>.8G  <span class="token number">0</span> disk <span class="token punctuation">[</span>SWAP<span class="token punctuation">]</span>
nvme0n1                         <span class="token number">259</span>:0    <span class="token number">0</span>   50G  <span class="token number">0</span> disk
├─nvme0n1p1                     <span class="token number">259</span>:1    <span class="token number">0</span>    1M  <span class="token number">0</span> part
├─nvme0n1p2                     <span class="token number">259</span>:2    <span class="token number">0</span>    1G  <span class="token number">0</span> part /boot
└─nvme0n1p3                     <span class="token number">259</span>:3    <span class="token number">0</span>   49G  <span class="token number">0</span> part
  └─fedora_localhost--live-root <span class="token number">253</span>:0    <span class="token number">0</span>   49G  <span class="token number">0</span> lvm  /
nvme0n2                         <span class="token number">259</span>:4    <span class="token number">0</span>   20G  <span class="token number">0</span> disk /data/logs
                                                         /mnt
nvme0n3                         <span class="token number">259</span>:5    <span class="token number">0</span>   20G  <span class="token number">0</span> disk
nvme0n4                         <span class="token number">259</span>:6    <span class="token number">0</span>   20G  <span class="token number">0</span> disk
nvme0n5                         <span class="token number">259</span>:7    <span class="token number">0</span>   20G  <span class="token number">0</span> disk
nvme0n6                         <span class="token number">259</span>:8    <span class="token number">0</span>   20G  <span class="token number">0</span> disk
<span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># mkfs.ext4 /dev/nvme0n5</span>
<span class="token function">mke2fs</span> <span class="token number">1.46</span>.5 <span class="token punctuation">(</span><span class="token number">30</span>-Dec-2021<span class="token punctuation">)</span>
/dev/nvme0n5 contains a ext4 <span class="token function">file</span> system
        created on Fri Jan <span class="token number">13</span> <span class="token number">17</span>:46:54 <span class="token number">2023</span>
Proceed anyway? <span class="token punctuation">(</span>y,N<span class="token punctuation">)</span> y
Creating filesystem with <span class="token number">5242880</span> 4k blocks and <span class="token number">1310720</span> inodes
Filesystem UUID: d0f52ff3-b84a-4698-bb69-208d550a4b57
Superblock backups stored on blocks:
        <span class="token number">32768</span>, <span class="token number">98304</span>, <span class="token number">163840</span>, <span class="token number">229376</span>, <span class="token number">294912</span>, <span class="token number">819200</span>, <span class="token number">884736</span>, <span class="token number">1605632</span>, <span class="token number">2654208</span>,
        <span class="token number">4096000</span>

Allocating group tables: <span class="token keyword">done</span>
Writing inode tables: <span class="token keyword">done</span>
Creating journal <span class="token punctuation">(</span><span class="token number">32768</span> blocks<span class="token punctuation">)</span>: <span class="token keyword">done</span>
Writing superblocks and filesystem accounting information: <span class="token keyword">done</span>

<span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># mount /dev/nvme0n5 /ext4/</span>
<span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># df -h</span>
Filesystem                               Size  Used Avail Use% Mounted on
devtmpfs                                 <span class="token number">4</span>.0M     <span class="token number">0</span>  <span class="token number">4</span>.0M   <span class="token number">0</span>% /dev
tmpfs                                    <span class="token number">1</span>.9G     <span class="token number">0</span>  <span class="token number">1</span>.9G   <span class="token number">0</span>% /dev/shm
tmpfs                                    777M  <span class="token number">1</span>.7M  775M   <span class="token number">1</span>% /run
/dev/mapper/fedora_localhost--live-root   48G  <span class="token number">4</span>.9G   41G  <span class="token number">11</span>% /
tmpfs                                    <span class="token number">1</span>.9G   16K  <span class="token number">1</span>.9G   <span class="token number">1</span>% /tmp
/dev/nvme0n1p2                           974M  243M  664M  <span class="token number">27</span>% /boot
tmpfs                                    389M   88K  389M   <span class="token number">1</span>% /run/user/0
/dev/nvme0n2                              57G  <span class="token number">4</span>.2M   57G   <span class="token number">1</span>% /mnt
/dev/nvme0n2                              57G  <span class="token number">4</span>.2M   57G   <span class="token number">1</span>% /data/logs
/dev/nvme0n5                              20G   24K   19G   <span class="token number">1</span>% /ext4
<span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># echo 111 &gt; /ext4/111</span>
<span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># btrfs</span>
btrfs               btrfs-convert       btrfs-image         btrfs-select-super
btrfsck             btrfs-find-root     btrfs-map-logical   btrfstune
<span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># umount /ext4</span>
<span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># btrfs-convert /dev/nvme0n5</span>
btrfs-convert from btrfs-progs v6.0

Source filesystem:
  Type:           ext2
  Label:
  Blocksize:      <span class="token number">4096</span>
  UUID:           d0f52ff3-b84a-4698-bb69-208d550a4b57
Target filesystem:
  Label:
  Blocksize:      <span class="token number">4096</span>
  Nodesize:       <span class="token number">16384</span>
  UUID:           68f5d99f-e845-4fd7-8f84-701604f07604
  Checksum:       crc32c
  Features:       extref, skinny-metadata, no-holes <span class="token punctuation">(</span>default<span class="token punctuation">)</span>
    Data csum:    <span class="token function">yes</span>
    Inline data:  <span class="token function">yes</span>
    Copy xattr:   <span class="token function">yes</span>
Reported stats:
  Total space:     <span class="token number">21474836480</span>
  Free space:      <span class="token number">20693188608</span> <span class="token punctuation">(</span><span class="token number">96.36</span>%<span class="token punctuation">)</span>
  Inode count:         <span class="token number">1310720</span>
  Free inodes:         <span class="token number">1310708</span>
  Block count:         <span class="token number">5242880</span>
Create initial btrfs filesystem
Create ext2 image <span class="token function">file</span>
Create btrfs metadata
Copy inodes <span class="token punctuation">[</span>o<span class="token punctuation">]</span> <span class="token punctuation">[</span>         <span class="token number">3</span>/        <span class="token number">12</span><span class="token punctuation">]</span>
Conversion complete
<span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># btrfs filesystem show</span>
Label: <span class="token string">&#39;mydata&#39;</span>  uuid: 92aac6fd-d7c5-4ac3-9ba6-acbe13071611
        Total devices <span class="token number">3</span> FS bytes used <span class="token number">640</span>.00KiB
        devid    <span class="token number">1</span> size <span class="token number">17</span>.00GiB used <span class="token number">272</span>.00MiB path /dev/nvme0n2
        devid    <span class="token number">2</span> size <span class="token number">20</span>.00GiB used <span class="token number">272</span>.00MiB path /dev/nvme0n3
        devid    <span class="token number">3</span> size <span class="token number">20</span>.00GiB used <span class="token number">1</span>.27GiB path /dev/nvme0n4

Label: none  uuid: 68f5d99f-e845-4fd7-8f84-701604f07604
        Total devices <span class="token number">1</span> FS bytes used <span class="token number">494</span>.20MiB
        devid    <span class="token number">1</span> size <span class="token number">20</span>.00GiB used <span class="token number">780</span>.30MiB path /dev/nvme0n5

<span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># mount /dev/nvme0n5 /ext4/</span>
<span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># ls /ext4/</span>
<span class="token number">111</span>  ext2_saved  lost+found




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>恢复</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># umount /ext4</span>
<span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># btrfs-convert -r /dev/nvme0n5</span>
btrfs-convert from btrfs-progs v6.0

Open filesystem <span class="token keyword">for</span> rollback:
  Label:
  UUID:            68f5d99f-e845-4fd7-8f84-701604f07604
  Restoring from:  ext2_saved/image
Rollback succeeded

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="debug-功能" tabindex="-1"><a class="header-anchor" href="#debug-功能"><span>Debug 功能</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Btrfs 提供了一定的 debug 功能，对于想了解 Btrfs 内部实现原理的读者，debug 将是您最喜欢的工具。这里简单介绍一下 debug 功能的命令使用。
下面的命令将设备 sda5 上的 btrfs 文件系统中的元数据打印到屏幕上。
1#btrfs-debug-tree /dev/sda5
通过对打印信息的分析，您将能了解 btrfs 内部各个 BTree 的变化情况，从而进一步理解每一个文件系统功能的内部实现细节。
比如您可以在创建一个文件之前将 BTree 的内容打印出来，创建文件后再次打印。通过比较两次的不同来了解 btrfs 创建一个文件需要修改哪些元数据。进而理解 btrfs 内部的工作原理。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,40),l=[p];function i(o,c){return s(),a("div",null,l)}const u=n(t,[["render",i],["__file","btrfs的使用.html.vue"]]),m=JSON.parse(`{"path":"/note-book/Btrfs/btrfs%E7%9A%84%E4%BD%BF%E7%94%A8.html","title":"BTRFS 使用简介","lang":"zh-CN","frontmatter":{"description":"BTRFS 使用简介 了解了 btrfs 的特性，想必您一定想亲身体验一下 btrfs 的使用。本章将简要介绍如何使用 btrfs 。 创建文件系统 mkfs.btrfs 命令建立一个 btrfs 格式的文件系统。可以用如下命令在设备 nvme0n2,nvme0n3上建立一个 btrfs 文件系统，并将其挂载到 /mnt 目录下： 这样一个 Btrfs...","head":[["meta",{"property":"og:url","content":"https://paper-dragon.github.io/note-book/Btrfs/btrfs%E7%9A%84%E4%BD%BF%E7%94%A8.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"BTRFS 使用简介"}],["meta",{"property":"og:description","content":"BTRFS 使用简介 了解了 btrfs 的特性，想必您一定想亲身体验一下 btrfs 的使用。本章将简要介绍如何使用 btrfs 。 创建文件系统 mkfs.btrfs 命令建立一个 btrfs 格式的文件系统。可以用如下命令在设备 nvme0n2,nvme0n3上建立一个 btrfs 文件系统，并将其挂载到 /mnt 目录下： 这样一个 Btrfs..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-13T15:08:38.000Z"}],["meta",{"property":"article:author","content":"PaperDragon"}],["meta",{"property":"article:modified_time","content":"2023-08-13T15:08:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"BTRFS 使用简介\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-13T15:08:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"创建文件系统","slug":"创建文件系统","link":"#创建文件系统","children":[]},{"level":2,"title":"修改文件系统的大小","slug":"修改文件系统的大小","link":"#修改文件系统的大小","children":[]},{"level":2,"title":"添加设备（热）","slug":"添加设备-热","link":"#添加设备-热","children":[]},{"level":2,"title":"均衡数据（热）","slug":"均衡数据-热","link":"#均衡数据-热","children":[]},{"level":2,"title":"移除设备(热)","slug":"移除设备-热","link":"#移除设备-热","children":[]},{"level":2,"title":"查看设备状态","slug":"查看设备状态","link":"#查看设备状态","children":[]},{"level":2,"title":"修改硬件组合模式","slug":"修改硬件组合模式","link":"#修改硬件组合模式","children":[]},{"level":2,"title":"创建 subvolume和查询","slug":"创建-subvolume和查询","link":"#创建-subvolume和查询","children":[]},{"level":2,"title":"单独挂载子卷","slug":"单独挂载子卷","link":"#单独挂载子卷","children":[]},{"level":2,"title":"删除子卷","slug":"删除子卷","link":"#删除子卷","children":[]},{"level":2,"title":"创建 Snapshot","slug":"创建-snapshot","link":"#创建-snapshot","children":[]},{"level":2,"title":"btrfs，ext4文件系统相互转化","slug":"btrfs-ext4文件系统相互转化","link":"#btrfs-ext4文件系统相互转化","children":[]},{"level":2,"title":"Debug 功能","slug":"debug-功能","link":"#debug-功能","children":[]}],"git":{"createdTime":1691939318000,"updatedTime":1691939318000,"contributors":[{"name":"PaperDragon","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":12.08,"words":3623},"filePathRelative":"note-book/Btrfs/btrfs的使用.md","localizedDate":"2023年8月13日","excerpt":"\\n<p>了解了 btrfs 的特性，想必您一定想亲身体验一下 btrfs 的使用。本章将简要介绍如何使用 btrfs 。</p>\\n<h2>创建文件系统</h2>\\n<p>mkfs.btrfs 命令建立一个 btrfs 格式的文件系统。可以用如下命令在设备 nvme0n2,nvme0n3上建立一个 btrfs 文件系统，并将其挂载到 /mnt 目录下：</p>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token punctuation\\">[</span>root@fedora ~<span class=\\"token punctuation\\">]</span><span class=\\"token comment\\"># mkfs.btrfs -f -L mydata /dev/nvme0n2 /dev/nvme0n3</span>\\nbtrfs-progs v6.0\\nSee http://btrfs.wiki.kernel.org <span class=\\"token keyword\\">for</span> <span class=\\"token function\\">more</span> information.\\n\\nNOTE: several default settings have changed <span class=\\"token keyword\\">in</span> version <span class=\\"token number\\">5.15</span>, please <span class=\\"token function\\">make</span> sure\\n      this does not affect your deployments:\\n      - DUP <span class=\\"token keyword\\">for</span> metadata <span class=\\"token punctuation\\">(</span>-m dup<span class=\\"token punctuation\\">)</span>\\n      - enabled no-holes <span class=\\"token punctuation\\">(</span>-O no-holes<span class=\\"token punctuation\\">)</span>\\n      - enabled free-space-tree <span class=\\"token punctuation\\">(</span>-R free-space-tree<span class=\\"token punctuation\\">)</span>\\n\\nLabel:              mydata\\nUUID:               92aac6fd-d7c5-4ac3-9ba6-acbe13071611\\nNode size:          <span class=\\"token number\\">16384</span>\\nSector size:        <span class=\\"token number\\">4096</span>\\nFilesystem size:    <span class=\\"token number\\">40</span>.00GiB\\nBlock group profiles:\\n  Data:             single            <span class=\\"token number\\">8</span>.00MiB\\n  Metadata:         RAID1           <span class=\\"token number\\">256</span>.00MiB\\n  System:           RAID1             <span class=\\"token number\\">8</span>.00MiB\\nSSD detected:       <span class=\\"token function\\">yes</span>\\nZoned device:       no\\nIncompat features:  extref, skinny-metadata, no-holes\\nRuntime features:   free-space-tree\\nChecksum:           crc32c\\nNumber of devices:  <span class=\\"token number\\">2</span>\\nDevices:\\n   ID        SIZE  <span class=\\"token environment constant\\">PATH</span>\\n    <span class=\\"token number\\">1</span>    <span class=\\"token number\\">20</span>.00GiB  /dev/nvme0n2\\n    <span class=\\"token number\\">2</span>    <span class=\\"token number\\">20</span>.00GiB  /dev/nvme0n3\\n\\n\\n<span class=\\"token parameter variable\\">-f</span> 是 --force的意思\\n<span class=\\"token parameter variable\\">-L</span> Labels\\n\\n<span class=\\"token punctuation\\">[</span>root@fedora ~<span class=\\"token punctuation\\">]</span><span class=\\"token comment\\"># mkfs.btrfs --help</span>\\n用法：mkfs.btrfs <span class=\\"token punctuation\\">[</span>选项<span class=\\"token punctuation\\">]</span> dev <span class=\\"token punctuation\\">[</span> dev <span class=\\"token punctuation\\">..</span>. <span class=\\"token punctuation\\">]</span>\\n选项：\\n   分配概况：\\n         -d<span class=\\"token operator\\">|</span>--data PROFILE 数据配置文件，raid0, raid1, raid1c3, raid1c4, raid5, raid6, raid10, dup or single\\n         -m<span class=\\"token operator\\">|</span>--metadata PROFILE 元数据配置文件，类似于数据配置文件的值\\n         -M<span class=\\"token operator\\">|</span>--mixed 将元数据和数据混合在一起\\n   特征：\\n         <span class=\\"token parameter variable\\">--csum</span> 类型\\n         <span class=\\"token parameter variable\\">--checksum</span> TYPE 使用的校验和算法，crc32c（默认），xxhash，sha256，blake2\\n         -n<span class=\\"token operator\\">|</span>--nodesize SIZE btree节点的大小\\n         -s<span class=\\"token operator\\">|</span>--sectorsize SIZE 数据块大小（当前内核可能无法挂载）\\n         -O<span class=\\"token operator\\">|</span>--features LIST 逗号分隔的文件系统功能列表（使用“-O list-all”列出功能）\\n         -R<span class=\\"token operator\\">|</span>--runtime-features LIST 逗号分隔的运行时特性列表（使用“-R list-all”列出运行时特性）\\n         -L<span class=\\"token operator\\">|</span>--label LABEL 设置文件系统标签\\n         -U<span class=\\"token operator\\">|</span>--uuid UUID 指定文件系统的UUID（必须是唯一的）\\n   创建：\\n         -b<span class=\\"token operator\\">|</span>--byte-count SIZE 将每个设备的大小设置为 SIZE（文件系统大小是所有设备大小的总和）\\n         -r<span class=\\"token operator\\">|</span>--rootdir DIR 从DIR复制文件到镜像根目录\\n         <span class=\\"token parameter variable\\">--shrink</span> <span class=\\"token punctuation\\">(</span>with --rootdir<span class=\\"token punctuation\\">)</span> 将填充的文件系统缩小到最小尺寸\\n         -K<span class=\\"token operator\\">|</span>--nodiscard 不执行整个设备TRIM\\n         -f<span class=\\"token operator\\">|</span>--force 强制覆盖现有文件系统\\n   一般的：\\n         -q<span class=\\"token operator\\">|</span>--quiet 除错误外没有消息\\n         -v<span class=\\"token operator\\">|</span>--verbose 增加详细级别，默认为1\\n         -V<span class=\\"token operator\\">|</span>--version 打印 mkfs.btrfs 版本并退出\\n         <span class=\\"token parameter variable\\">--help</span> 打印帮助并退出\\n   弃用：\\n         -l<span class=\\"token operator\\">|</span>--leafsize SIZE 在 <span class=\\"token number\\">6.0</span> 中移除，使用 <span class=\\"token parameter variable\\">--nodesize</span>\\n<span class=\\"token punctuation\\">[</span>root@fedora ~<span class=\\"token punctuation\\">]</span><span class=\\"token comment\\"># mkfs.btrfs -O list-all</span>\\n可用的文件系统功能：\\nmixed-bg - 混合数据和元数据块组（compat<span class=\\"token operator\\">=</span><span class=\\"token number\\">2.6</span>.37，safe<span class=\\"token operator\\">=</span><span class=\\"token number\\">2.6</span>.37）\\nextref - 将每个文件的硬链接限制增加到 <span class=\\"token number\\">65536</span>（compat<span class=\\"token operator\\">=</span><span class=\\"token number\\">3.7</span>，safe<span class=\\"token operator\\">=</span><span class=\\"token number\\">3.12</span>，默认<span class=\\"token operator\\">=</span><span class=\\"token number\\">3.12</span>）\\nraid56 - raid56 扩展格式 <span class=\\"token punctuation\\">(</span>compat<span class=\\"token operator\\">=</span><span class=\\"token number\\">3.9</span><span class=\\"token punctuation\\">)</span>\\nskinny-metadata - 减小大小的元数据范围 refs（compat<span class=\\"token operator\\">=</span><span class=\\"token number\\">3.10</span>，safe<span class=\\"token operator\\">=</span><span class=\\"token number\\">3.18</span>，default<span class=\\"token operator\\">=</span><span class=\\"token number\\">3.18</span>）\\nno-holes - 文件没有明确的洞范围（compat<span class=\\"token operator\\">=</span><span class=\\"token number\\">3.14</span>，safe<span class=\\"token operator\\">=</span><span class=\\"token number\\">4.0</span>，默认<span class=\\"token operator\\">=</span><span class=\\"token number\\">5.15</span>）\\nraid1c34 - 具有 <span class=\\"token number\\">3</span> 或 <span class=\\"token number\\">4</span> 个副本的 RAID1 <span class=\\"token punctuation\\">(</span>compat<span class=\\"token operator\\">=</span><span class=\\"token number\\">5.5</span><span class=\\"token punctuation\\">)</span>\\nzoned - 支持分区设备 <span class=\\"token punctuation\\">(</span>compat<span class=\\"token operator\\">=</span><span class=\\"token number\\">5.12</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token punctuation\\">[</span>root@fedora ~<span class=\\"token punctuation\\">]</span><span class=\\"token comment\\"># btrfs fi show</span>\\nLabel: <span class=\\"token string\\">'mydata'</span>  uuid: 92aac6fd-d7c5-4ac3-9ba6-acbe13071611\\n        Total devices <span class=\\"token number\\">2</span> FS bytes used <span class=\\"token number\\">144</span>.00KiB\\n        devid    <span class=\\"token number\\">1</span> size <span class=\\"token number\\">20</span>.00GiB used <span class=\\"token number\\">272</span>.00MiB path /dev/nvme0n2\\n        devid    <span class=\\"token number\\">2</span> size <span class=\\"token number\\">20</span>.00GiB used <span class=\\"token number\\">264</span>.00MiB path /dev/nvme0n3\\n\\n<span class=\\"token function\\">mount</span> <span class=\\"token parameter variable\\">-t</span> btrfs /dev/nvme0n2 /mnt\\n\\n<span class=\\"token comment\\">#支持多种透明压缩机制</span>\\n  - zlib\\n  - lzo\\n  - zstd\\n<span class=\\"token function\\">mount</span> <span class=\\"token parameter variable\\">-t</span> btrfs <span class=\\"token parameter variable\\">-o</span> <span class=\\"token assign-left variable\\">compress</span><span class=\\"token operator\\">=</span><span class=\\"token operator\\">&lt;</span>type<span class=\\"token punctuation\\">[</span>:level<span class=\\"token punctuation\\">]</span><span class=\\"token operator\\">&gt;</span>, compress-force, compress-force<span class=\\"token operator\\">=</span><span class=\\"token operator\\">&lt;</span>type<span class=\\"token punctuation\\">[</span>:level<span class=\\"token punctuation\\">]</span><span class=\\"token operator\\">&gt;</span>\\n\\n<span class=\\"token comment\\">#If compression is enabled, nodatacow and nodatasum are disabled.</span>\\n\\n<span class=\\"token comment\\"># SSD支持</span>\\n用户可以使用 <span class=\\"token function\\">mount</span> 参数打开 btrfs 针对 SSD 的优化。命令如下：\\n<span class=\\"token function\\">mount</span> – t btrfs – o SSD /dev/sda5 /btrfsdisk\\n\\n<span class=\\"token comment\\">#同步文件系统</span>\\n为了提高效率，btrfs 的 IO 操作由一些内核线程异步处理。这使得用户对文件的操作并不会立即反应到磁盘上。您可以做一个实验，在 btrfs 上创建一个文件后，稍等 <span class=\\"token number\\">5</span> 到 <span class=\\"token number\\">10</span> 秒将系统电源切断，再次重启后，新建的文件并没有出现。\\n对于多数应用这并不是问题，但有些时候用户希望 IO 操作立即执行，此时就需要对文件系统进行同步。下面的 btrfs 命令用来同步文件系统：\\nbtrfsctl –c /btrfsdisk\\n</code></pre></div>","autoDesc":true}`);export{u as comp,m as data};
