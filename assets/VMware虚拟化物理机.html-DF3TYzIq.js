import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{aj as n,ao as t,am as a}from"./app-COjiYc5s.js";const i="/assets/1489604-20190627165200680-1510240940-CpGLoXnM.png",o="/assets/1489604-20190627170920562-1663029484-C8SDyNKA.png",g="/assets/1489604-20190627171038728-494800728-0i1CwjRj.png",p="/assets/1489604-20190628095410963-1737848649-BJlCh7VE.png",s="/assets/1489604-20190627171134933-1778468010-B9ME_CJv.png",l="/assets/1489604-20190627171259446-1147453595-BZU_4YzG.png",c="/assets/1489604-20190627171629672-1857950190-DSZzwGjv.png",m="/assets/1489604-20190627171740972-537331403-Dfjfo80r.png",f="/assets/1489604-20190627171826803-15411889-Cw1XRi2u.png",d="/assets/1489604-20190627172421072-699683713-_r_QllFB.png",h="/assets/1489604-20190627172438223-2147464452-UjYeSkI3.png",b="/assets/1489604-20190627172448143-1680792007-BePL3948.png",_="/assets/1489604-20190627172456319-2075777250-Cni8fOO9.png",u="/assets/1489604-20190627172530204-1630602588-7wRBcVHB.png",w="/assets/1489604-20190627172550258-1932680743-CqAFmYe6.png",v="/assets/1489604-20190627172626581-1727231706-CK7GekyU.png",y={};function x(k,e){return a(),n("div",null,e[0]||(e[0]=[t('<h1 id="vmware虚拟化物理机" tabindex="-1"><a class="header-anchor" href="#vmware虚拟化物理机"><span>VMware虚拟化物理机</span></a></h1><h2 id="一、工具介绍" tabindex="-1"><a class="header-anchor" href="#一、工具介绍"><span>一、工具介绍</span></a></h2><p>使用vmware公司提供的一款软件“vmware converter standalone”，有以下优点：</p><p>1、该过程对物理机无损</p><p>2、4.3以上的版本仅支持热克隆，保证在原来物理机运行的同时，尽可能保证数据的一致性</p><p>3、转换完成后，若物理机与虚机在同一网络需要修改其中一台机器的IP、机器名等信息</p><p>4、转换windows xp和windows server2008以上的版本（server 2003不确定是否可以）</p><h2 id="二、转换原理" tabindex="-1"><a class="header-anchor" href="#二、转换原理"><span>二、转换原理</span></a></h2><figure><a href="https://img2018.cnblogs.com/blog/1489604/201906/1489604-20190627165200680-1510240940.png" target="_blank" rel="noopener noreferrer"><img src="'+i+'" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><p>A是一台windows机器，安装了“vmware converter standalone”软件</p><p>B是要转换的windows物理机</p><p>C是vcenter，管理着数台esxi服务器</p><p>物理机转换的原理是：</p><p>1、A 获取到BC的登陆信息后，在B上做快照 　　2、在C上指定位置创建虚机 　　3、将A上的快照数据拷贝到新建的虚机上</p><h2 id="三、步骤" tabindex="-1"><a class="header-anchor" href="#三、步骤"><span>三、步骤</span></a></h2><p>1、在执行转换之前，为了避免权限和网络的问题需要执行：</p><p>a、关闭防火墙</p><p>b、在“文件夹选项”中取消“使用共享向导（推荐）”</p><figure><a href="https://img2018.cnblogs.com/blog/1489604/201906/1489604-20190627170920562-1663029484.png" target="_blank" rel="noopener noreferrer"><img src="'+o+'" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><p>2、以管理员身份打开“vmware vcenter converter standalone”软件，根据下图操作（保证物理机可远程登陆）</p><p>填写物理机信息</p><figure><a href="https://img2018.cnblogs.com/blog/1489604/201906/1489604-20190627171038728-494800728.png" target="_blank" rel="noopener noreferrer"><img src="'+g+'" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><p><strong>【注】当出现“ Permission to perform this operation was denied ”的错误，需要执行以下操作：</strong></p><figure><a href="https://img2018.cnblogs.com/blog/1489604/201906/1489604-20190628095410963-1737848649.png" target="_blank" rel="noopener noreferrer"><img src="'+p+'" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><p>\\1. 登录到物理机。 \\2. 打开本地安全策略（打开cmd并键入secpol.msc）。 \\3. 转到：本地策略&gt;安全选项，将“ User Access Control: Run all Administrators in Admin Approval Mode”从“已启用” 更改为“ 已禁用”。 4、重启物理机生效。</p><p><strong>【切记】当转换完成后，在虚机相同的位置将上述选项设置为“已启用”！！！</strong></p><p>3、弹出的对话框，建议选择自动卸载“vmware vcenter converter standalone”软件</p><figure><a href="https://img2018.cnblogs.com/blog/1489604/201906/1489604-20190627171134933-1778468010.png" target="_blank" rel="noopener noreferrer"><img src="'+s+'" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><p>4、将物理机转换到哪里，可以选择esxi也可以选择vmware workstations，但是选择esxi后，需要填写vcenter的信息。</p><figure><a href="https://img2018.cnblogs.com/blog/1489604/201906/1489604-20190627171259446-1147453595.png" target="_blank" rel="noopener noreferrer"><img src="'+l+'" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><p>5、等上一步验证可以成功连接到vcenter后，会出现vcenter连接的虚机列表，可以在最上面修改转换后的虚机名称</p><figure><a href="https://img2018.cnblogs.com/blog/1489604/201906/1489604-20190627171629672-1857950190.png" target="_blank" rel="noopener noreferrer"><img src="'+c+'" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><p>6、选择将虚机存放到哪里</p><figure><a href="https://img2018.cnblogs.com/blog/1489604/201906/1489604-20190627171740972-537331403.png" target="_blank" rel="noopener noreferrer"><img src="'+m+'" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><p>7、高级选项中可以自定义设置物理机转换后的虚机大小、网络、内存、物理机运行的服务等信息</p><p>下图，可以选择 如何拷贝物理机的硬盘数据，若物理机的C盘是200G，实际用了50G 若选择第一个，全部拷贝，那么会将200G数据全部拷贝到虚机上 若选择第二个，只会将实际占用的50G拷贝到虚机 第三个选择是，自定义拷贝多大，单位G 第四个选择是，自定义拷贝，单位MB</p><figure><a href="https://img2018.cnblogs.com/blog/1489604/201906/1489604-20190627171826803-15411889.png" target="_blank" rel="noopener noreferrer"><img src="'+f+'" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><figure><a href="https://img2018.cnblogs.com/blog/1489604/201906/1489604-20190627172421072-699683713.png" target="_blank" rel="noopener noreferrer"><img src="'+d+'" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><figure><a href="https://img2018.cnblogs.com/blog/1489604/201906/1489604-20190627172438223-2147464452.png" target="_blank" rel="noopener noreferrer"><img src="'+h+'" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><figure><a href="https://img2018.cnblogs.com/blog/1489604/201906/1489604-20190627172448143-1680792007.png" target="_blank" rel="noopener noreferrer"><img src="'+b+'" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><p>建议停止物理机上运行的服务，尤其是SQL SERVER这样的重服务。</p><figure><a href="https://img2018.cnblogs.com/blog/1489604/201906/1489604-20190627172456319-2075777250.png" target="_blank" rel="noopener noreferrer"><img src="'+_+'" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><figure><a href="https://img2018.cnblogs.com/blog/1489604/201906/1489604-20190627172530204-1630602588.png" target="_blank" rel="noopener noreferrer"><img src="'+u+'" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><p>8、检查配置无误后，执行</p><figure><a href="https://img2018.cnblogs.com/blog/1489604/201906/1489604-20190627172550258-1932680743.png" target="_blank" rel="noopener noreferrer"><img src="'+w+'" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><p>9、等进度条到达100%后，即完成物理机的转换</p><figure><a href="https://img2018.cnblogs.com/blog/1489604/201906/1489604-20190627172626581-1727231706.png" target="_blank" rel="noopener noreferrer"><img src="'+v+'" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><p>10、转换后的操作：</p><p><em>a、若使用虚机且虚机和物理机在同一网络时，需要注销将物理机的信息（域认证信息、主机名、ip等），保证不和虚机产生冲突 　　b、若物理机信息在域中，检查虚机域认证信息是否可用，不可用需要退域加域、添加用户的操作</em></p>',49)]))}const M=r(y,[["render",x],["__file","VMware虚拟化物理机.html.vue"]]),V=JSON.parse('{"path":"/note-book/VMware/VMware%E8%99%9A%E6%8B%9F%E5%8C%96%E7%89%A9%E7%90%86%E6%9C%BA.html","title":"VMware虚拟化物理机","lang":"zh-CN","frontmatter":{"description":"VMware虚拟化物理机 一、工具介绍 使用vmware公司提供的一款软件“vmware converter standalone”，有以下优点： 1、该过程对物理机无损 2、4.3以上的版本仅支持热克隆，保证在原来物理机运行的同时，尽可能保证数据的一致性 3、转换完成后，若物理机与虚机在同一网络需要修改其中一台机器的IP、机器名等信息 4、转换win...","head":[["meta",{"property":"og:url","content":"https://www.geekery.cn/note-book/VMware/VMware%E8%99%9A%E6%8B%9F%E5%8C%96%E7%89%A9%E7%90%86%E6%9C%BA.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"VMware虚拟化物理机"}],["meta",{"property":"og:description","content":"VMware虚拟化物理机 一、工具介绍 使用vmware公司提供的一款软件“vmware converter standalone”，有以下优点： 1、该过程对物理机无损 2、4.3以上的版本仅支持热克隆，保证在原来物理机运行的同时，尽可能保证数据的一致性 3、转换完成后，若物理机与虚机在同一网络需要修改其中一台机器的IP、机器名等信息 4、转换win..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-19T08:37:41.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-19T08:37:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"VMware虚拟化物理机\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-19T08:37:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"一、工具介绍","slug":"一、工具介绍","link":"#一、工具介绍","children":[]},{"level":2,"title":"二、转换原理","slug":"二、转换原理","link":"#二、转换原理","children":[]},{"level":2,"title":"三、步骤","slug":"三、步骤","link":"#三、步骤","children":[]}],"git":{"createdTime":1691939318000,"updatedTime":1710837461000,"contributors":[{"name":"PaperDragon-SH","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":3.61,"words":1082},"filePathRelative":"note-book/VMware/VMware虚拟化物理机.md","localizedDate":"2023年8月13日","excerpt":"\\n<h2>一、工具介绍</h2>\\n<p>使用vmware公司提供的一款软件“vmware converter standalone”，有以下优点：</p>\\n<p>1、该过程对物理机无损</p>\\n<p>2、4.3以上的版本仅支持热克隆，保证在原来物理机运行的同时，尽可能保证数据的一致性</p>\\n<p>3、转换完成后，若物理机与虚机在同一网络需要修改其中一台机器的IP、机器名等信息</p>\\n<p>4、转换windows xp和windows server2008以上的版本（server 2003不确定是否可以）</p>\\n<h2>二、转换原理</h2>\\n<figure><a href=\\"https://img2018.cnblogs.com/blog/1489604/201906/1489604-20190627165200680-1510240940.png\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"></a><figcaption>img</figcaption></figure>","autoDesc":true}');export{M as comp,V as data};
