import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as e,d as a}from"./app-QiR_lF3-.js";const i={},t=a(`<p>起一个 jenkins</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> run  <span class="token parameter variable">-u</span> root  <span class="token parameter variable">-it</span>   <span class="token parameter variable">-d</span>  <span class="token parameter variable">-p</span> <span class="token number">8080</span>:8080 <span class="token parameter variable">-p</span> <span class="token number">50000</span>:50000 <span class="token parameter variable">-v</span> jenkins-data:/var/jenkins_home <span class="token parameter variable">-v</span> /var/run/docker.sock:/var/run/docker.sock jenkinsci/blueocean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置docker api接口</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
root@shoulong-jenkins-server:~/jenkins-data<span class="token comment"># cat /etc/default/docker</span>
<span class="token comment"># Docker Upstart and SysVinit configuration file</span>

<span class="token comment">#</span>
<span class="token comment"># THIS FILE DOES NOT APPLY TO SYSTEMD</span>
<span class="token comment">#</span>
<span class="token comment">#   Please see the documentation for &quot;systemd drop-ins&quot;:</span>
<span class="token comment">#   https://docs.docker.com/engine/admin/systemd/</span>
<span class="token comment">#</span>

<span class="token comment"># Customize location of Docker binary (especially for development testing).</span>
<span class="token comment">#DOCKERD=&quot;/usr/local/bin/dockerd&quot;</span>

<span class="token comment"># Use DOCKER_OPTS to modify the daemon startup options.</span>
<span class="token comment">#DOCKER_OPTS=&quot;--dns 8.8.8.8 --dns 8.8.4.4&quot;</span>

<span class="token comment"># If you need Docker to use an HTTP proxy, it can also be specified here.</span>
<span class="token comment">#export http_proxy=&quot;http://127.0.0.1:3128/&quot;</span>

<span class="token comment"># This is also a handy place to tweak where Docker&#39;s temporary files go.</span>
<span class="token comment">#export DOCKER_TMPDIR=&quot;/mnt/bigdrive/docker-tmp&quot;</span>
<span class="token assign-left variable">DOCKER_OPTS</span><span class="token operator">=</span><span class="token string">&#39;-H tcp://0.0.0.0:2376 -H unix:///var/run/docker.sock&#39;</span>

root@shoulong-jenkins-server:~/jenkins-data<span class="token comment"># cat /lib/systemd/system/docker.service</span>
<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>Docker Application Container Engine
<span class="token assign-left variable">Documentation</span><span class="token operator">=</span>https://docs.docker.com
<span class="token assign-left variable">After</span><span class="token operator">=</span>network-online.target firewalld.service containerd.service
<span class="token assign-left variable">Wants</span><span class="token operator">=</span>network-online.target
<span class="token assign-left variable">Requires</span><span class="token operator">=</span>docker.socket containerd.service

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>notify
<span class="token comment"># the default is not to use systemd for cgroups because the delegate issues still</span>
<span class="token comment"># exists and systemd currently does not support the cgroup feature set required</span>
<span class="token comment"># for containers run by docker</span>
<span class="token assign-left variable">EnvironmentFile</span><span class="token operator">=</span>-/etc/default/docker
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/bin/dockerd <span class="token parameter variable">-H</span> fd:// <span class="token variable">$DOCKER_OPTS</span> <span class="token parameter variable">--containerd</span><span class="token operator">=</span>/run/containerd/containerd.sock
<span class="token assign-left variable">ExecReload</span><span class="token operator">=</span>/bin/kill <span class="token parameter variable">-s</span> HUP <span class="token variable">$MAINPID</span>
<span class="token assign-left variable">TimeoutSec</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">RestartSec</span><span class="token operator">=</span><span class="token number">2</span>
<span class="token assign-left variable">Restart</span><span class="token operator">=</span>always

<span class="token comment"># Note that StartLimit* options were moved from &quot;Service&quot; to &quot;Unit&quot; in systemd 229.</span>
<span class="token comment"># Both the old, and new location are accepted by systemd 229 and up, so using the old location</span>
<span class="token comment"># to make them work for either version of systemd.</span>
<span class="token assign-left variable">StartLimitBurst</span><span class="token operator">=</span><span class="token number">3</span>

<span class="token comment"># Note that StartLimitInterval was renamed to StartLimitIntervalSec in systemd 230.</span>
<span class="token comment"># Both the old, and new name are accepted by systemd 230 and up, so using the old name to make</span>
<span class="token comment"># this option work for either version of systemd.</span>
<span class="token assign-left variable">StartLimitInterval</span><span class="token operator">=</span>60s

<span class="token comment"># Having non-zero Limit*s causes performance problems due to accounting overhead</span>
<span class="token comment"># in the kernel. We recommend using cgroups to do container-local accounting.</span>
<span class="token assign-left variable">LimitNOFILE</span><span class="token operator">=</span>infinity
<span class="token assign-left variable">LimitNPROC</span><span class="token operator">=</span>infinity
<span class="token assign-left variable">LimitCORE</span><span class="token operator">=</span>infinity

<span class="token comment"># Comment TasksMax if your systemd version does not support it.</span>
<span class="token comment"># Only systemd 226 and above support this option.</span>
<span class="token assign-left variable">TasksMax</span><span class="token operator">=</span>infinity

<span class="token comment"># set delegate yes so that systemd does not reset the cgroups of docker containers</span>
<span class="token assign-left variable">Delegate</span><span class="token operator">=</span>yes

<span class="token comment"># kill only the docker process, not all processes in the cgroup</span>
<span class="token assign-left variable">KillMode</span><span class="token operator">=</span>process
<span class="token assign-left variable">OOMScoreAdjust</span><span class="token operator">=</span>-500

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[t];function l(r,c){return n(),e("div",null,o)}const v=s(i,[["render",l],["__file","jenkins的docker部署文档.html.vue"]]);export{v as default};
