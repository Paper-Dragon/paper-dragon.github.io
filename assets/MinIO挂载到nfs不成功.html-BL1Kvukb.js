import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{aj as i,ao as a,am as o}from"./app-COjiYc5s.js";const t="/assets/b390fb7d1ac006cf10b52294210348ab-16918418773061-DMCH66y0.png",s="/assets/5ab750ee93dd42e3bb43496ffff3b6fc-16918418809433-3OixNbBt.png",l={};function r(p,n){return o(),i("div",null,n[0]||(n[0]=[a('<h1 id="minio挂载到nfs不成功" tabindex="-1"><a class="header-anchor" href="#minio挂载到nfs不成功"><span>MinIO挂载到nfs不成功</span></a></h1><h2 id="error-unable-to-initialize-backend-no-locks-available" tabindex="-1"><a class="header-anchor" href="#error-unable-to-initialize-backend-no-locks-available"><span>ERROR Unable to initialize backend: no locks available.</span></a></h2><figure><img src="'+t+`" alt="001.png" tabindex="0" loading="lazy"><figcaption>001.png</figcaption></figure><p>服务器做了nas共享存储后，修改minio的数据目录为nas共享目录，启动minio服务失败，报错信息如上图所示：</p><p>从这个日志来看，应该是minio拿不到nfs文件系统的锁。 解决方案</p><pre><code>nfs挂载时加nolock参数

使用nfsv4,而不是用nfsv3
</code></pre><p>参考</p><p>Gitlab底层也是用的minio,Gitlab官方文档是这么写的</p><p>File locking: GitLab requires advisory file locking, which is only supported natively in NFS version 4. NFSv3 also supports locking as long as Linux Kernel 2.6.5+ is used. We recommend using version 4 and do not specifically test NFSv3</p><p>https://docs.gitlab.com/ee/administration/nfs.html</p><p><img src="`+s+'" alt="002.jpg" loading="lazy"> 总结</p><p>最后我们选择了方案2，但是Minio官网是推荐用nfsv4协议挂载.</p>',12)]))}const d=e(l,[["render",r],["__file","MinIO挂载到nfs不成功.html.vue"]]),f=JSON.parse('{"path":"/note-book/MinIO/MinIO%E6%8C%82%E8%BD%BD%E5%88%B0nfs%E4%B8%8D%E6%88%90%E5%8A%9F.html","title":"MinIO挂载到nfs不成功","lang":"zh-CN","frontmatter":{"description":"MinIO挂载到nfs不成功 ERROR Unable to initialize backend: no locks available. 001.png001.png 服务器做了nas共享存储后，修改minio的数据目录为nas共享目录，启动minio服务失败，报错信息如上图所示： 从这个日志来看，应该是minio拿不到nfs文件系统的锁。 解决方...","head":[["meta",{"property":"og:url","content":"https://www.geekery.cn/note-book/MinIO/MinIO%E6%8C%82%E8%BD%BD%E5%88%B0nfs%E4%B8%8D%E6%88%90%E5%8A%9F.html"}],["meta",{"property":"og:site_name","content":"运维开发绿皮书"}],["meta",{"property":"og:title","content":"MinIO挂载到nfs不成功"}],["meta",{"property":"og:description","content":"MinIO挂载到nfs不成功 ERROR Unable to initialize backend: no locks available. 001.png001.png 服务器做了nas共享存储后，修改minio的数据目录为nas共享目录，启动minio服务失败，报错信息如上图所示： 从这个日志来看，应该是minio拿不到nfs文件系统的锁。 解决方..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-22T13:07:52.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-22T13:07:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MinIO挂载到nfs不成功\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-22T13:07:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PaperDragon\\",\\"url\\":\\"https://github.com/Paper-Dragon\\",\\"email\\":\\"2678885646@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"ERROR Unable to initialize backend: no locks available.","slug":"error-unable-to-initialize-backend-no-locks-available","link":"#error-unable-to-initialize-backend-no-locks-available","children":[]}],"git":{"createdTime":1691939318000,"updatedTime":1727010472000,"contributors":[{"name":"PaperDragon","email":"2678885646@qq.com","commits":1},{"name":"PaperDragon-SH","email":"2678885646@qq.com","commits":1}]},"readingTime":{"minutes":0.69,"words":208},"filePathRelative":"note-book/MinIO/MinIO挂载到nfs不成功.md","localizedDate":"2023年8月13日","excerpt":"\\n<h2>ERROR Unable to initialize backend: no locks available.</h2>\\n<figure><figcaption>001.png</figcaption></figure>\\n<p>服务器做了nas共享存储后，修改minio的数据目录为nas共享目录，启动minio服务失败，报错信息如上图所示：</p>\\n<p>从这个日志来看，应该是minio拿不到nfs文件系统的锁。\\n解决方案</p>\\n<pre><code>nfs挂载时加nolock参数\\n\\n使用nfsv4,而不是用nfsv3\\n</code></pre>\\n<p>参考</p>\\n<p>Gitlab底层也是用的minio,Gitlab官方文档是这么写的</p>","autoDesc":true}');export{d as comp,f as data};
