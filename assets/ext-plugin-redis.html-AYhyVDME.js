import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as e,f as a}from"./app-IV-u4sF5.js";const t={},o=a(`<h1 id="使用redis插件" tabindex="-1"><a class="header-anchor" href="#使用redis插件" aria-hidden="true">#</a> 使用Redis插件</h1><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p><em>redis</em> enables reading zone data from redis database. this plugin should be located right next to <em>etcd</em> in <em>plugins.cfg</em></p><h2 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> Syntax</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>redis loads authoritative zones from redis server</p><p>address will default to local redis serrver (localhost:6379)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>redis {
    address ADDR
    password PWD
    prefix PREFIX
    suffix SUFFIX
    connect_timeout TIMEOUT
    read_timeout TIMEOUT
    ttl TTL
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>address</code> is redis server address to connect in the form of <em>host:port</em> or <em>ip:port</em>.</li><li><code>password</code> is redis server <em>auth</em> key</li><li><code>connect_timeout</code> time in ms to wait for redis server to connect</li><li><code>read_timeout</code> time in ms to wait for redis server to respond</li><li><code>ttl</code> default ttl for dns records, 300 if not provided</li><li><code>prefix</code> add PREFIX to all redis keys</li><li><code>suffix</code> add SUFFIX to all redis keys</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><div class="language-corefile line-numbers-mode" data-ext="corefile"><pre class="language-corefile"><code>. {
    redis example.com {
        address localhost:6379
        password foobared
        connect_timeout 100
        read_timeout 100
        ttl 360
        prefix _dns:
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reverse-zones" tabindex="-1"><a class="header-anchor" href="#reverse-zones" aria-hidden="true">#</a> Reverse Zones</h2><p>reverse zones is not supported yet.</p><h2 id="proxy" tabindex="-1"><a class="header-anchor" href="#proxy" aria-hidden="true">#</a> Proxy</h2><p>proxy is not supported yet.</p><h2 id="zone-format-in-redis-db" tabindex="-1"><a class="header-anchor" href="#zone-format-in-redis-db" aria-hidden="true">#</a> Zone Format in redis db</h2><h3 id="zones" tabindex="-1"><a class="header-anchor" href="#zones" aria-hidden="true">#</a> Zones</h3><p>each zone is stored in redis as a hash map with <em>zone</em> as key</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>redis-cli&gt;KEYS *
1) &quot;example.com.&quot;
2) &quot;example.net.&quot;
redis-cli&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dns-rrs" tabindex="-1"><a class="header-anchor" href="#dns-rrs" aria-hidden="true">#</a> DNS RRs</h3><p>dns RRs are stored in redis as json strings inside a hash map using address as field key. <em>@</em> is used for zone&#39;s own RR values.</p><h4 id="a" tabindex="-1"><a class="header-anchor" href="#a" aria-hidden="true">#</a> A</h4><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;a&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;ip4&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;1.2.3.4&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ttl&quot;</span> <span class="token operator">:</span> <span class="token number">360</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="aaaa" tabindex="-1"><a class="header-anchor" href="#aaaa" aria-hidden="true">#</a> AAAA</h4><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;aaaa&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;ip6&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;::1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ttl&quot;</span> <span class="token operator">:</span> <span class="token number">360</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="cname" tabindex="-1"><a class="header-anchor" href="#cname" aria-hidden="true">#</a> CNAME</h4><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;cname&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;host&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;x.example.com.&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ttl&quot;</span> <span class="token operator">:</span> <span class="token number">360</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="txt" tabindex="-1"><a class="header-anchor" href="#txt" aria-hidden="true">#</a> TXT</h4><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;txt&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;text&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;this is a text&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ttl&quot;</span> <span class="token operator">:</span> <span class="token number">360</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="ns" tabindex="-1"><a class="header-anchor" href="#ns" aria-hidden="true">#</a> NS</h4><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;ns&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;host&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;ns1.example.com.&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ttl&quot;</span> <span class="token operator">:</span> <span class="token number">360</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="mx" tabindex="-1"><a class="header-anchor" href="#mx" aria-hidden="true">#</a> MX</h4><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;mx&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;host&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;mx1.example.com&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;priority&quot;</span> <span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ttl&quot;</span> <span class="token operator">:</span> <span class="token number">360</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="srv" tabindex="-1"><a class="header-anchor" href="#srv" aria-hidden="true">#</a> SRV</h4><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;srv&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;host&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;sip.example.com.&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;port&quot;</span> <span class="token operator">:</span> <span class="token number">555</span><span class="token punctuation">,</span>
        <span class="token property">&quot;priority&quot;</span> <span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token property">&quot;weight&quot;</span> <span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ttl&quot;</span> <span class="token operator">:</span> <span class="token number">360</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="soa" tabindex="-1"><a class="header-anchor" href="#soa" aria-hidden="true">#</a> SOA</h4><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;soa&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;ttl&quot;</span> <span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
        <span class="token property">&quot;mbox&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;hostmaster.example.com.&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ns&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;ns1.example.com.&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;refresh&quot;</span> <span class="token operator">:</span> <span class="token number">44</span><span class="token punctuation">,</span>
        <span class="token property">&quot;retry&quot;</span> <span class="token operator">:</span> <span class="token number">55</span><span class="token punctuation">,</span>
        <span class="token property">&quot;expire&quot;</span> <span class="token operator">:</span> <span class="token number">66</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ORIGIN example.net.
 example.net.                 300 IN  SOA   &lt;SOA RDATA&gt;
 example.net.                 300     NS    ns1.example.net.
 example.net.                 300     NS    ns2.example.net.
 *.example.net.               300     TXT   &quot;this is a wildcard&quot;
 *.example.net.               300     MX    10 host1.example.net.
 sub.*.example.net.           300     TXT   &quot;this is not a wildcard&quot;
 host1.example.net.           300     A     5.5.5.5
 _ssh.tcp.host1.example.net.  300     SRV   &lt;SRV RDATA&gt;
 _ssh.tcp.host2.example.net.  300     SRV   &lt;SRV RDATA&gt;
 subdel.example.net.          300     NS    ns1.subdel.example.net.
 subdel.example.net.          300     NS    ns2.subdel.example.net.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>above zone data should be stored at redis as follow:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>redis-cli&gt; hgetall example.net.
 1) &quot;_ssh._tcp.host1&quot;
 2) &quot;{\\&quot;srv\\&quot;:[{\\&quot;ttl\\&quot;:300, \\&quot;target\\&quot;:\\&quot;tcp.example.com.\\&quot;,\\&quot;port\\&quot;:123,\\&quot;priority\\&quot;:10,\\&quot;weight\\&quot;:100}]}&quot;
 3) &quot;*&quot;
 4) &quot;{\\&quot;txt\\&quot;:[{\\&quot;ttl\\&quot;:300, \\&quot;text\\&quot;:\\&quot;this is a wildcard\\&quot;}],\\&quot;mx\\&quot;:[{\\&quot;ttl\\&quot;:300, \\&quot;host\\&quot;:\\&quot;host1.example.net.\\&quot;,\\&quot;preference\\&quot;: 10}]}&quot;
 5) &quot;host1&quot;
 6) &quot;{\\&quot;a\\&quot;:[{\\&quot;ttl\\&quot;:300, \\&quot;ip\\&quot;:\\&quot;5.5.5.5\\&quot;}]}&quot;
 7) &quot;sub.*&quot;
 8) &quot;{\\&quot;txt\\&quot;:[{\\&quot;ttl\\&quot;:300, \\&quot;text\\&quot;:\\&quot;this is not a wildcard\\&quot;}]}&quot;
 9) &quot;_ssh._tcp.host2&quot;
10) &quot;{\\&quot;srv\\&quot;:[{\\&quot;ttl\\&quot;:300, \\&quot;target\\&quot;:\\&quot;tcp.example.com.\\&quot;,\\&quot;port\\&quot;:123,\\&quot;priority\\&quot;:10,\\&quot;weight\\&quot;:100}]}&quot;
11) &quot;subdel&quot;
12) &quot;{\\&quot;ns\\&quot;:[{\\&quot;ttl\\&quot;:300, \\&quot;host\\&quot;:\\&quot;ns1.subdel.example.net.\\&quot;},{\\&quot;ttl\\&quot;:300, \\&quot;host\\&quot;:\\&quot;ns2.subdel.example.net.\\&quot;}]}&quot;
13) &quot;@&quot;
14) &quot;{\\&quot;soa\\&quot;:{\\&quot;ttl\\&quot;:300, \\&quot;minttl\\&quot;:100, \\&quot;mbox\\&quot;:\\&quot;hostmaster.example.net.\\&quot;,\\&quot;ns\\&quot;:\\&quot;ns1.example.net.\\&quot;,\\&quot;refresh\\&quot;:44,\\&quot;retry\\&quot;:55,\\&quot;expire\\&quot;:66},\\&quot;ns\\&quot;:[{\\&quot;ttl\\&quot;:300, \\&quot;host\\&quot;:\\&quot;ns1.example.net.\\&quot;},{\\&quot;ttl\\&quot;:300, \\&quot;host\\&quot;:\\&quot;ns2.example.net.\\&quot;}]}&quot;
redis-cli&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,41),i=[o];function l(r,u){return n(),e("div",null,i)}const c=s(t,[["render",l],["__file","ext-plugin-redis.html.vue"]]);export{c as default};
