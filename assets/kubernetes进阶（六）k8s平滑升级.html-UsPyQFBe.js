import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,e as s}from"./app-uRQLGptr.js";const t="/assets/1034759-20191128181938447-420585628-16918406289031-kHyyU4wh.png",a="/assets/1034759-20191128181520668-1713984935-16918406309003-deH_vwno.png",r="/assets/1034759-20191128182818349-1528346077-16918406327685-hRna5MlX.png",d="/assets/1034759-20191128183109611-326242097-16918406347237-1qkf3Oq9.png",l="/assets/1034759-20191128183955698-809875028-16918406363549-HvS8lrQN.png",c="/assets/1034759-20191128184043612-695283976-169184063867511-1lArgHuq.png",u={},v=s('<p>当我们遇到K8S有漏洞的时候，或者为了满足需求，有时候可能会需要升级或者降级版本，</p><p>为了减少对业务的影响，尽量选择在业务低谷的时候来升级：</p><p>首先准备好文件：我这里选择的是内网文件服务器上下载的，请自行下载所需的k8s源文件：3</p><p>这里演示更换一个节点：7-21</p><p>查看版本：将7-21更换成1.15.2</p><figure><img src="'+t+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># cd /opt/src
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># wget http://192.168.1.60:8080/day1/kubernetes-server-linux-amd64-v1.15.2.tar.gz
# tar -zxf kubernetes-server-linux-amd64-v1.15.2.tar.gz
# cd .. 
# cp -r kubernetes /opt/kubernetes-v1.15.2
# cd kubernetes-v1.15.2/
# rm -rf kubernetes-src.tar.gz
# cd server/bin/ 
# rm -rf *.tar
# rm -rf *tag
# mkdir cert conf
# cp /opt/kubernetes-v1.15.4/server/bin/cert/* ./cert/
# cp /opt/kubernetes-v1.15.4/server/bin/conf/* ./conf/
# cp /opt/kubernetes-v1.15.4/server/bin/*.sh /opt/kubernetes-v1.15.2/server/bin/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在nginx上摘除api-server的四层负载：7-11，7-12</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># vi /etc/nginx/nginx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>把我们要升级的apiserver节点注释掉：</p><figure><img src="`+a+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># nginx -t
# nginx -s reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>准备好后，摘除node，先看下哪个node上跑的pod少：我们这里一样多，那我们就搞7-21，</p><figure><img src="`+r+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># kubectl delete node hdss7-21.host.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+d+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>我们的coredns已经从node7-21迁移到了7-22上，接下来我们更换软连接：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># rm -rf kubernetes
# ln -s /opt/kubernetes-v1.15.2 /opt/kubernetes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后重启使用supervisor重启服务：生产上记得一个一个重启，我们这里为了方便，直接重启所有：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># supervisorctl restart all
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+l+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>启动成功后，查看版本：</p><figure><img src="'+c+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>可以看到node版本已经从1.15.4变更为了1.15.2，并且kubelet已经自动帮我们把节点加入到了集群，然后打开nginx负载，即可。</p>',25),g=[v];function o(p,m){return i(),n("div",null,g)}const f=e(u,[["render",o],["__file","kubernetes进阶（六）k8s平滑升级.html.vue"]]);export{f as default};
