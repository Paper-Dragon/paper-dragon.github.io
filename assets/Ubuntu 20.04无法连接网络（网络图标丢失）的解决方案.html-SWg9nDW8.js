import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as t,e as r}from"./app-8tNwpLuH.js";const n={},s=r(`<h1 id="ubuntu-20-04无法连接网络-网络图标丢失-的解决方案" tabindex="-1"><a class="header-anchor" href="#ubuntu-20-04无法连接网络-网络图标丢失-的解决方案" aria-hidden="true">#</a> Ubuntu 20.04无法连接网络(网络图标丢失)的解决方案</h1><h2 id="问题复述" tabindex="-1"><a class="header-anchor" href="#问题复述" aria-hidden="true">#</a> 问题复述：</h2><p>Ubuntu 20.04无法连接到网络，网络连接图标丢失，网络设置中无网络设置选项。 ![image-20221124112138202](Ubuntu 20.04无法连接网络(网络图标丢失)的解决方案.assets/image-20221124112138202.png)</p><h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h2><pre><code>sudo service network-manager stop

sudo rm /var/lib/NetworkManager/NetworkManager.state

sudo service network-manager start
</code></pre><p>![image-20221124112145118](Ubuntu 20.04无法连接网络(网络图标丢失)的解决方案.assets/image-20221124112145118.png)</p><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献：</h2><pre><code>https://www.cnblogs.com/shiyueyangne/p/14260820.html
https://www.freesion.com/article/3238793033/
</code></pre>`,8),o=[s];function _(c,i){return a(),t("div",null,o)}const u=e(n,[["render",_],["__file","Ubuntu 20.04无法连接网络（网络图标丢失）的解决方案.html.vue"]]);export{u as default};
