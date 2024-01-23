import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as t,e as r}from"./app-o4HTnwU4.js";const n="/assets/image-20221124112138202-ei62Lezn.png",o="/assets/image-20221124112145118-rj2u4eN-.png",i={},s=r('<h1 id="ubuntu-20-04无法连接网络-网络图标丢失-的解决方案" tabindex="-1"><a class="header-anchor" href="#ubuntu-20-04无法连接网络-网络图标丢失-的解决方案" aria-hidden="true">#</a> Ubuntu 20.04无法连接网络(网络图标丢失)的解决方案</h1><blockquote><p>from csdn: 罗伯特祥</p></blockquote><h2 id="问题复述" tabindex="-1"><a class="header-anchor" href="#问题复述" aria-hidden="true">#</a> 问题复述：</h2><p>Ubuntu 20.04无法连接到网络，网络连接图标丢失，网络设置中无网络设置选项。 <img src="'+n+`" alt="image-20221124112138202" loading="lazy"></p><h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h2><pre><code>sudo service network-manager stop

sudo rm /var/lib/NetworkManager/NetworkManager.state

sudo service network-manager start
</code></pre><figure><img src="`+o+`" alt="image-20221124112145118" tabindex="0" loading="lazy"><figcaption>image-20221124112145118</figcaption></figure><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献：</h2><pre><code>https://www.cnblogs.com/shiyueyangne/p/14260820.html
https://www.freesion.com/article/3238793033/
</code></pre>`,9),c=[s];function _(d,h){return a(),t("div",null,c)}const m=e(i,[["render",_],["__file","Ubuntu_20.04无法连接网络（网络图标丢失）的解决方案.html.vue"]]);export{m as default};
